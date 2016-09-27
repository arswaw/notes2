var path = require('path');
var l = require('./lib/lib.js');
var print = require('./lib/print.js');
var ns = require('./lib/net.js');
var log = require('./lib/log.js');
var auth = require('./lib/auth.js');
var models = require('./models');


module.exports = function(app){
	//get requests
	app.get('/print', checkToken, function(req, res){
		//log.log(req.headers.user, 'getting printer list', 'info', 'router.js,/print');
		print.getPrinters(function(err, result){
			response(err, result, req, res);
		});
	});

	app.get('/items',  function(req, res){
		//log.log(req.headers.user, 'getting items list', 'info', 'router.js,/items');
		l.getItems(function(err, result){
			response(err, result, req, res);
		});
	});

	app.get('/rmaList', checkToken, function(req, res){
		ns.rmaList(function(err, result){
			response(err, result, req, res);
		});
	});

	//post requests
	app.post('/login', function(req, res){
		auth.login(req.body, function(err, result){
			if(err){
				res.status(401).send(err);
			}else{
				res.status(200).json(result);
			}
		});
	});

	app.post('/received', checkToken, function(req, res){
		//log.log(req.headers.user, 'post to /received, body: '+JSON.stringify(req.body), 'info', 'router.js,/received');
		req.body.user = req.headers.user;
		l.recevied(req.body, function(err, result){
			response(err, result, req, res);
		});
	});

	app.post('/rma', checkToken, function(req, res){
		//log.log(req.headers.user, 'post to /rma, body: '+JSON.stringify(req.body), 'info', 'router.js,/rma');
		ns.getRMA(req.body, function(err, result){
			response(err, result, req, res);
		});
	});

	app.post('/tracking', checkToken, function(req, res){
		//log.log(req.headers.user, 'post to /tracking, body: '+JSON.stringify(req.body), 'info', 'router.js,/tracking');
		ns.byTracking(req.body, function(err, result){
			response(err, result, req, res);
		});
	});
    //catch
	app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    });
};

function checkToken(req, res, next){
	models.Tokens.findOne({value: req.headers.token}, function(err, result){
		if(err){
			res.status(500).send(err);
		}else if(result == null){
			console.log(req.headers);
			res.status(401).send('unauthorized');
		}else{
			next();
		}
    });
}

function response(err, result, req, res){
	if(err){
		res.status(500).send(err);
	}else{
		res.status(200).json(result);
	}
}