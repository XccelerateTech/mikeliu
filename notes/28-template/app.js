const express = require('express');
const hb = require('express-handlebars');

const app = express();

//express handlebars setup
app.engine('handlebars', hb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//load static files from public folder
app.use(express.static('public'));

//sub domains
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/menu', function(req, res) {
    res.render('menu', menuList);
});

app.get('/gallery', function(req, res) {
    res.render('gallery');
});


//json
const menuList = {
    list: [
        {
            'name': 'Margherita',
            'price': 'HKD 100',
            'size': 'Regular'
        },
        {
            'name': 'Carbonara',
            'price': 'HKD 140',
            'size': 'Large'
        },{
            'name': 'Crudo',
            'price': 'HKD 120',
            'size': 'Regular'
        },{
            'name': 'Pugliese',
            'price': 'HKD 90',
            'size': 'Small'
        },
    ]
};




//listening port
app.listen(8080, function(){
    console.log('App is listening to port 8080');
});
