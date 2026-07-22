const fs = require('fs');
const path = require('path');

const envPaths = [
  path.join(__dirname, '.env'),
  '/.env',
  '/app/.env',
  path.join(__dirname, '.env.local'),
];

for (const p of envPaths) {
  try {
    const content = fs.readFileSync(p, 'utf8');
    content.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx === -1) return;
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      if (key) process.env[key] = val;
    });
    console.log(`[env] Loaded from ${p}`);
    break;
  } catch {}
}

console.log(`[env] DIRECTUS_URL=${process.env.DIRECTUS_URL ? 'set' : 'NOT SET'}`);
console.log(`[env] DIRECTUS_TOKEN=${process.env.DIRECTUS_TOKEN ? 'set' : 'NOT SET'}`);

require('./server.js');
