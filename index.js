const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Index Route
app.get('/', (req, res) => {
    const title = 'Welcome';
    res.render('home', {
        title: title
    });
}); 

const port = 5000;

app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});