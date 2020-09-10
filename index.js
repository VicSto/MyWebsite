const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Retrieve public Folder
app.use(express.static(__dirname + '/public'));

// Index Routes
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

// PORT USED FOR WEBHOSTING
const port = process.env.PORT || 5000;

// LAUNCH WEBSITE
app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});