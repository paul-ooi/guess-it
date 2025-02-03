async function initDatabase() {
  const SQL = await initSqlJs({ locateFile: file => `js/${file}` });
  let db;

  if (localStorage.getItem('db')) {
      const savedDb = localStorage.getItem('db');
      const uInt8Array = new Uint8Array(savedDb.split(',').map(Number));
      db = new SQL.Database(uInt8Array);
  } else {
      db = new SQL.Database();
      db.run(`
          CREATE TABLE teams (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT,
              color TEXT,
              score INTEGER DEFAULT 0
          );
          CREATE TABLE words (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              word TEXT
          );
      `);
      saveDatabase(db);
  }

  return db;
}

function saveDatabase(db) {
  const data = db.export();
  const buffer = new Uint8Array(data);
  localStorage.setItem('db', buffer.toString());
}

document.addEventListener('DOMContentLoaded', async () => {
  const db = await initDatabase();

  document.getElementById('teamForm')?.addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(event.target);
      for (let [key, value] of formData.entries()) {
          if (key.startsWith('team') && !key.endsWith('Color')) {
              const colorKey = `${key}Color`;
              const color = formData.get(colorKey);
              db.run('INSERT INTO teams (name, color) VALUES (?, ?)', [value, color]);
          }
      }
      saveDatabase(db);
      window.location.href = 'custom-list.html';
  });

  document.getElementById('wordListForm')?.addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const inputMethod = formData.get('inputMethod');
      if (inputMethod === 'file') {
          const file = formData.get('wordlist');
          const reader = new FileReader();
          reader.onload = function(e) {
              const words = e.target.result.split(/\r?\n/);
              words.forEach(word => {
                  if (word.trim()) {
                      db.run('INSERT INTO words (word) VALUES (?)', [word.trim()]);
                  }
              });
              saveDatabase(db);
              window.location.href = 'game.html';
          };
          reader.readAsText(file);
      } else {
          const words = formData.get('wordlistText').split(/\r?\n/);
          words.forEach(word => {
              if (word.trim()) {
                  db.run('INSERT INTO words (word) VALUES (?)', [word.trim()]);
              }
          });
          saveDatabase(db);
          window.location.href = 'game.html';
      }
  });
});