const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // default for Laragon
  database: 'crud_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Read
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
});

// Create
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    if (err) res.status(500).send(err);
    else res.send('User added');
  });
});

// Delete
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
    if (err) res.status(500).send(err);
    else res.send('User deleted');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
