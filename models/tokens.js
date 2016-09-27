var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var Tokens = Schema({
	value: { type: String, index: { unique: true }},
    user: { type: Schema.ObjectId, ref: 'Users' },
    createdAt: { type: Date, required: true, expires: '12h', default: Date.now }
});

function create(next){
    this.value = crypto.randomBytes(48).toString('hex');
    next();
}

Tokens.pre('save', create);



module.exports = {name: 'Tokens', Schema: Tokens};