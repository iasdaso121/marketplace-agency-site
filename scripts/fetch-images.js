const fs = require('fs');
const https = require('https');
const path = require('path');

const targets = [
  { url: 'https://randomuser.me/api/portraits/women/44.jpg', file: 'public/team/anna.jpg' },
  { url: 'https://randomuser.me/api/portraits/men/31.jpg', file: 'public/team/alex.jpg' },
  { url: 'https://randomuser.me/api/portraits/women/65.jpg', file: 'public/team/irina.jpg' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    fs.mkdirSync(dir, { recursive: true });
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error('Request Failed. Status Code: ' + res.statusCode));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

(async () => {
  console.log('Fetching team photos...');
  for (const t of targets) {
    const exists = fs.existsSync(t.file);
    if (!exists) {
      try {
        await download(t.url, t.file);
        console.log('Saved', t.file);
      } catch (e) {
        console.warn('Failed to fetch', t.url, e.message);
      }
    }
  }
  console.log('Done.');
})();
