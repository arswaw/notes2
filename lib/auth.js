var models = require('../models');

exports.login = function(obj, callback){
    models.Users.findOne({user: obj.user}, function(err, user){
        if(err){
            callback('Incorrect Username or Password', null);
        }else{
            if(user == null){
                callback('Incorrect Username or Password', null);
            }else if(user.checkPass(obj.pass)){
                models.Tokens.findOne({user: user._id}, function(err, token){
                    if(token == null){
                        createToken(user,  function(err, res){
                            callback(err, res);
                        });
                    }else{
                        var cb = {
                            user: user.user,
                            first: user.first,
                            last: user.last,
                            settings: user.settings,
                            roles: user.roles,
                            token: token
                        };
                        callback(null, cb);
                    }
                });
            }else{
                callback('Incorrect Username or Password', null);
            }
        }
    });
}

exports.checkToken = function(head, callback){
    models.token.findOne({value: head.token}, function(err, res){
        console.log(err);
        console.log(res);
    });
}

function createToken(user, callback){
    models.Tokens.create({user: user._id}, function(err, token){
        console.log(err);
        console.log(token);
        var cb = {
            user: user.user,
            first: user.first,
            last: user.last,
            settings: user.settings,
            roles: user.roles,
            token: token
        };
        callback(null, cb);
    });
}