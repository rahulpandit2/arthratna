const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { title: 'Arth Ratna' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
