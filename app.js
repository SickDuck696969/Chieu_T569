const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));

const renderHome = (req, res) => {
  res.type('html');
  res.sendFile(path.join(__dirname, 'index.ejs'));
};

app.get('/', renderHome);
app.get('/index', renderHome);
app.get('/index.ejs', renderHome);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
