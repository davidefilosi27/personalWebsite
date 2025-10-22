const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'home.html'));
});

app.get('/aboutMe', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'aboutMe.html'));
});


app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'blog.html'));
});

app.get('/blog/article', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'article.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'projects.html'));
});

app.get('/whatMovesMe', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'whatMovesMe.html'));
});

app.use((req, res) => {
  res.status(404).send('<h1>Pagina non trovata</h1>');
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
