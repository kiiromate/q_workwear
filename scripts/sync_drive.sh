#!/usr/bin/env bash
# ==============================================================================
# Q Workwear - Google Drive Sync Utility
# Synchronizes local project documentation and incoming client assets with
# Google Drive using rclone or local staging.
# ==============================================================================

set -euo pipefail

REMOTE_NAME="${GDRIVE_REMOTE:-gdrive}"
DRIVE_PROJECT_ROOT="${GDRIVE_ROOT:-Q_Workwear}"
WORKSPACE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "🧵 Q Workwear — Google Drive Sync Manager"
echo "─────────────────────────────────────────"
echo "Local workspace: ${WORKSPACE_DIR}"
echo "Remote target:   ${REMOTE_NAME}:${DRIVE_PROJECT_ROOT}"

# Check for rclone binary
if ! command -v rclone &>/dev/null; then
  echo "❌ Error: rclone is not installed or not in PATH."
  echo "Install via: sudo apt install rclone or curl https://rclone.org/install.sh | sudo bash"
  exit 1
fi

ACTION="${1:-help}"

case "${ACTION}" in
  check)
    echo "🔍 Checking rclone remotes..."
    if rclone listremotes | grep -q "^${REMOTE_NAME}:"; then
      echo "✅ Remote '${REMOTE_NAME}:' is configured."
      rclone lsd "${REMOTE_NAME}:${DRIVE_PROJECT_ROOT}" || true
    else
      echo "⚠️ Remote '${REMOTE_NAME}:' not yet configured in rclone."
      echo "Run: rclone config"
      echo "Choose 'New remote' -> name it 'gdrive' -> select 'Google Drive' (type 18)."
    fi
    ;;

  push-docs)
    echo "📤 Pushing local docs to Google Drive (${REMOTE_NAME}:${DRIVE_PROJECT_ROOT}/Documentation)..."
    rclone copy "${WORKSPACE_DIR}/docs/" "${REMOTE_NAME}:${DRIVE_PROJECT_ROOT}/Documentation/" \
      --verbose --update --create-empty-src-dirs
    echo "✅ Documentation successfully pushed to Google Drive."
    ;;

  pull-assets)
    echo "📥 Pulling client photos & uploads from Google Drive (${REMOTE_NAME}:${DRIVE_PROJECT_ROOT}/Client_Uploads)..."
    mkdir -p "${WORKSPACE_DIR}/public/images/incoming"
    rclone copy "${REMOTE_NAME}:${DRIVE_PROJECT_ROOT}/Client_Uploads/" "${WORKSPACE_DIR}/public/images/incoming/" \
      --verbose --update
    echo "✅ Client photos pulled into public/images/incoming/."
    ;;

  sync)
    echo "🔄 Running full synchronization..."
    rclone copy "${WORKSPACE_DIR}/docs/" "${REMOTE_NAME}:${DRIVE_PROJECT_ROOT}/Documentation/" --update --verbose
    mkdir -p "${WORKSPACE_DIR}/public/images/incoming"
    rclone copy "${REMOTE_NAME}:${DRIVE_PROJECT_ROOT}/Client_Uploads/" "${WORKSPACE_DIR}/public/images/incoming/" --update --verbose
    echo "✅ Full synchronization completed."
    ;;

  *)
    echo "Usage: $0 {check|push-docs|pull-assets|sync}"
    echo ""
    echo "Commands:"
    echo "  check        Verify Google Drive remote connection and list folders"
    echo "  push-docs    Push local markdown docs and questionnaires to Drive"
    echo "  pull-assets  Pull client uploaded photos from Drive to public/images/incoming"
    echo "  sync         Run bidirectional push-docs and pull-assets"
    ;;
esac
