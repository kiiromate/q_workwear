import fs from 'node:fs';
import path from 'node:path';

function walkHtmlFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkHtmlFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const frOutDir = path.join(process.cwd(), 'out', 'fr');
const frHtmlFiles = walkHtmlFiles(frOutDir);
for (const file of frHtmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const updated = html.replace(/<html\s+lang="en"/g, '<html lang="fr"');
  if (updated !== html) {
    fs.writeFileSync(file, updated, 'utf8');
  }
}
const rootFrHtml = path.join(process.cwd(), 'out', 'fr.html');
if (fs.existsSync(rootFrHtml)) {
  const html = fs.readFileSync(rootFrHtml, 'utf8');
  const updated = html.replace(/<html\s+lang="en"/g, '<html lang="fr"');
  if (updated !== html) {
    fs.writeFileSync(rootFrHtml, updated, 'utf8');
  }
}
console.log(`Updated <html lang="fr"> in ${frHtmlFiles.length} exported French HTML files.`);
