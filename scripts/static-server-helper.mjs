import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

export async function ensureStaticServer(origin = 'http://localhost:3016') {
  const url = new URL(origin);
  const port = Number(url.port || 3016);
  const outDir = path.join(process.cwd(), 'out');

  // Check if a server is already listening on port
  const isListening = await new Promise((resolve) => {
    const req = http.get(origin, (res) => {
      res.resume();
      resolve(true);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(500, () => {
      req.destroy();
      resolve(false);
    });
  });

  if (isListening) {
    return { close: async () => {} };
  }

  const server = http.createServer((req, res) => {
    const parsed = new URL(req.url || '/', origin);
    let pathname = decodeURIComponent(parsed.pathname);

    let filePath = path.join(outDir, pathname);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    } else if (!fs.existsSync(filePath) && fs.existsSync(`${filePath}.html`)) {
      filePath = `${filePath}.html`;
    }

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      const notFoundHtml = path.join(outDir, '404.html');
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      if (fs.existsSync(notFoundHtml)) {
        res.end(fs.readFileSync(notFoundHtml));
      } else {
        res.end('Not Found');
      }
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });

  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', resolve);
  });

  return {
    close: () => new Promise((resolve) => server.close(() => resolve())),
  };
}
