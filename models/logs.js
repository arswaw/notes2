var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Logs = Schema({
	trace: { type: String, required: true },
    desc: { type: String, required: true },
    type: { type: String, required: true },
    user: String//{ type: Schema.ObjectId, ref: 'Users' },
}, {timestamps: true});

module.exports = {name: 'Logs', Schema: Logs};