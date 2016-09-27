
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var Users = Schema({
	user: { type: String, required: true, index: { unique: true } },
    pass: { type: String, required: true },
    salt: { type: String },
    first: String,
    last: String,
    settings: {},
    token: { type: Schema.ObjectId, ref: 'Tokens' },
    roles: [{ type: Schema.ObjectId, ref: 'Roles' }]
});


function create(next){
    this.salt = crypto.randomBytes(128).toString('base64');
    this.pass = hash(this.pass, this.salt);
    next()
}

Users.methods.checkPass = function(candidate){
    var pass = this.pass;
    var h = hash(candidate, this.salt);
    console.log(pass);
    console.log(h.toString());
    if(pass == h){
        return true
    }else{
        return false
    }
}

function auto(next){
    this.populate('token');
    this.populate('roles');
    next();
}

Users.pre('save', create)
    .pre('findOne', auto)
    .pre('find', auto);

function hash(pass, salt){
    return crypto.pbkdf2Sync(pass, salt, 10000, 512, 'SHA1');
}


module.exports = {name: 'Users', Schema: Users};