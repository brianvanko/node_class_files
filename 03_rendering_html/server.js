var express = require('express');
var app = express();
var port = process.env.PORT || 9000;
var exphbs = require('express-handlebars');

app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');
//app.set('views', __dirname + '/other_folder') - overrides current views folder

app.get('/', function (req, res) {
	console.log('welcome to our site');
	res.render('welcome', { title: 'Simple Greeting App', msg: 'Welcome to our site!' })
})

app.get('/:name', function (req, res) {
	res.render('greeting', { title: 'Simple Greeting App', name: req.params.name })
})

app.listen(port);
console.log('listening on port ' + port)