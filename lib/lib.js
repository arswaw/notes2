var request = require('request');
var print = require('./print.js');
var pdf = require('./pdf.js');
var log = require('./log.js');
var fs = require('fs');
var models = require('../models');
var ns = require('./net.js');

exports.getItems = function(callback){
	models.Items.find(function(err, res){
		callback(err, res);
	});
}

exports.recevied = function(body, callback){
	//genLabel first
	pdf.genLabel(body, function(err, label){
		if(err){
			callback(err, null);
		}else{
			log.log(body.user, 'label gened: '+label, 'info', 'pdf.js - genLabel');
			var obj = {};
			obj.printerId = body.printer;
			obj.label = label;
			print.print(obj, function(err, res){
				if(err){
					callback(err, null);
				}else{
					log.log(body.user, 'print label: '+JSON.stringify(res), 'info', 'print.js - print');
					ns.putReceived(body, function(err, response){
						console.log(err);
						console.log(JSON.stringify(response, null, 2));
						callback(err, response);
					});
				}
			});
		}
	});
}



exports.sender = function(url, body, headers, method, callback){
	var b = '';
	if(body != null){
		b = JSON.stringify(body);
	}
	var options = {
		method: method,
		url: url,
		headers: headers,
		body: b
	};
	request(options, function(err, res, bod){
		var obj = {};
		if(err){
			obj.alert = err.toString();
			obj.type = 'error';
			callback(obj, null);
		}else{
			if(bod == null){
				callback(null, null);
			}else{
				var index = bod.indexOf('<!DOCTYPE html>');
				var index2 = bod.indexOf('<Errors>');
				if(index > -1 || index2 > -1){
					obj.alert = "Returned HTML: "+bod;
					obj.type = 'error';
					callback(obj, null);
				}else{
					var ob = eval("("+bod+")");
					if(ob.error == undefined){
						callback(null, ob);
					}else{
						obj.type = 'error';
						obj.alert = ob;
						callback(obj, null);
					}
				}
			}
		}
	});
};