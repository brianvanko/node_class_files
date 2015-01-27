//var items = [];
var items = [{name: 'Couch', description: 'this is comfortable'}, {name: 'Laptop', description: 'beep boop bleep!'}];

exports.list = function (req, res) {
	res.render('index', {items: items});
}