var path = require('path');
var fs = require('fs');
var basename  = path.basename(module.filename);
var mongoose = require('mongoose');

var config = require(path.join(__dirname, '..', 'config', 'mongo.json'));
var hold = {};
var db;

fs
	.readdirSync(__dirname)
	.filter(function(file) {
		return (file.indexOf('.') !== 0) && (file !== basename);
	})
	.forEach(function(file) {
		if (file.slice(-3) !== '.js') return;
		var req = require(path.join(__dirname, file));
		hold[req.name] = mongoose.model(req.name, req.Schema);
	});
	
hold.sync = function(callback){
	mongoose.connect(config.url);
	db = mongoose.connection;
	
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	    callback();
	});
};

hold.connection = function(){
	return mongoose;
}

module.exports = hold;