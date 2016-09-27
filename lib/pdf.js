var pdfkit = require('pdfkit');
var fs = require('fs');
var bwipjs = require('bwip-js');
var path = require('path');
var async = require('async');

var base = path.join(__dirname, '..', 'public', 'labels');

exports.genLabel = function(body, callback){
	console.log(body);
	bwipjs.toBuffer({
		bcid: 'code128',
		text: body.id
	}, function(err, png){
		if(err){
			console.log(err);
			callback(err, null);
		}else{
			var doc = new pdfkit({size:[432,288], margins: {top: 0, bottom: 0, left: 0, right: 0}});
			var outFile = path.join(base, body.id+'.pdf');
			var stream = fs.createWriteStream(outFile);
			doc.pipe(stream);
			doc.image(png, 10, 10, {height: 72, width: 412});
			doc.fontSize(60);
			doc.text(body.header, 10, 92);
			doc.fontSize(18);
			async.each(body.fields, function(row, cb){
				doc.text(row);
				cb();
			}, function() {
				doc.end();
			});

			stream.on('finish', function(){
				callback(null, '/labels/'+body.id+'.pdf');
			});
		}
	});
}

exports.clearLabel = function(file, callback){
    var targ = path.join(__dirname, '..', 'public', file);
    fs.unlink(targ, function(err){
        callback(err);
    });
}