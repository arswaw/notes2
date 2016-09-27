//get user id by token
//
var models = require('../models');

exports.log = function(user, desc, type, trace){
    var obj = {
        user: user,
        desc: desc,
        type: type,
        trace: trace
    }
    models.Logs.create(obj, function(err, res){
        console.log(err);
        console.log(res);
    });
}