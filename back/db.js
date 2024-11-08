const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sql');

// Modifier la table users pour inclure le code INSEE
db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS users`);

  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userName TEXT NOT NULL,
    password TEXT NOT NULL,
    age INTEGER NOT NULL,
    localisation TEXT NOT NULL,
    inseeCode TEXT NOT NULL,
    department TEXT,
    region TEXT
  )`);

  db.all(`PRAGMA table_info(users)`, [], (err, rows) => {
    if (err) {
      console.error('Erreur lors de la vérification de la structure:', err);
    } else {
      console.log('Structure de la table users:', rows);
    }
  });
});

module.exports = db;
