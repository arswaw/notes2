var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Roles = Schema({
    desc: String,
	name: { type: String, required: true, index: { unique: true }},
    permissions:{
        view: [{type: Schema.ObjectId, ref: 'Pages'}],
        edit: [{type: Schema.ObjectId, ref: 'Pages'}],
        create: [{type: Schema.ObjectId, ref: 'Pages'}]
    }
});

function auto(next){
    this.populate('permissions.view');
    this.populate('permissions.edit');
    this.populate('permissions.create');
    next();
}

Roles.pre('findOne', auto)
    .pre('find', auto);

module.exports = {name: 'Roles', Schema: Roles};