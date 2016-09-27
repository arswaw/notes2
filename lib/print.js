var l = require('./lib.js');

exports.getPrinters = function(callback){
	var url = 'https://api.printnode.com/printers';
	var method = 'GET';
	var headers = {
		Authorization: 'Basic Njk4OWRmMWEwYWQ1MWVhNmRiNzc2NjllNDE4NzI3MzAwZGM0OGJkMTo='
	};
	l.sender(url, null, headers, method, function(err, res){
		callback(err, res);
	});
}

exports.print = function(body, callback){
	var test = false;
	var url = 'https://api.printnode.com/printjobs';
	var method = 'POST';
	var headers = {
		'Authorization': 'Basic Njk4OWRmMWEwYWQ1MWVhNmRiNzc2NjllNDE4NzI3MzAwZGM0OGJkMTo=',
		'Content-Type': 'application/json'
	};
	var bod = {};
	bod.contentType = 'pdf_uri';
	bod.source = 'Tech Notes';
	bod.title = 'Print Label';
	bod.content = 'http://192.168.58.7:4242'+body.label;
	bod.printerId = body.printerId;
	if(test){
		callback(null, bod);
	}else{
		l.sender(url, bod, headers, method, function(err, res){
			callback(err, res);
		});
	}
}