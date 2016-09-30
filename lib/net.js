var l = require('./lib.js');
var headers = {
    Authorization: 'NLAuth nlauth_account=277620,nlauth_email=jake@zake.com,nlauth_signature=7sB9NsTu2j7P',
    'Content-Type': 'application/json'
};

exports.putReceived = function(body, callback){
	var url = 'https://rest.na1.netsuite.com/app/site/hosting/restlet.nl?script=716&deploy=1';
	var method = 'POST';
	var bod = body;
	l.sender(url, bod, headers, method, function(err, res){
		callback(err, res);
	});
}

exports.getRMA = function(body, callback){
	// Search = Detail Return Auth
	var url = 'https://rest.na1.netsuite.com/app/site/hosting/restlet.nl?script=522&deploy=1';
	var method = 'POST';
	var bod = body;
	l.sender(url, bod, headers, method, function(err, res){
		callback(err, res);
	});
};

exports.byTracking = function(body, callback){
	var url = 'https://rest.na1.netsuite.com/app/site/hosting/restlet.nl?script=680&deploy=1';
	var method = 'POST';
	var bod = body;
	l.sender(url, bod, headers, method, function(err, res){
		callback(err, res);
	});
}

exports.rmaList = function(callback){
	var url = 'https://rest.na1.netsuite.com/app/site/hosting/restlet.nl?script=521&deploy=1';
	var method = 'GET';
	l.sender(url, null, headers, method, function(err, res){
		callback(err, res);
	});
}

exports.byIntId = function(body, callback){
	var url = 'https://rest.na1.netsuite.com/app/site/hosting/restlet.nl?script=744&deploy=1';
	var method = 'POST';
	var bod = body;
	l.sender(url, bod, headers, method, function(err, res){
		callback(err, res);
	});
}

exports.byItemId = function(body, callback){
	var url = 'https://rest.na1.netsuite.com/app/site/hosting/restlet.nl?script=745&deploy=1';
	var method = 'POST';
	var bod = body;
	l.sender(url, bod, headers, method, function(err, res){
		callback(err, res);
	});
}

exports.bySKU = function(body, callback){
	var url = 'https://rest.na1.netsuite.com/app/site/hosting/restlet.nl?script=746&deploy=1';
	var method = 'POST';
	var bod = body;
	l.sender(url, bod, headers, method, function(err, res){
		callback(err, res);
	});
}