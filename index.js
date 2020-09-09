const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Retrieve res Folder
app.use('/public', express.static(__dirname + '/Public'));

// Index Route
app.get('/', (req, res) => {
    res.render('home', {
    });
}); 

app.get('/about', (req, res) => {
    res.render('about', {
    });
});

app.get('/projects', (req,res) =>{
    res.render('projects', {
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});