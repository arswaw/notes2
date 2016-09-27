var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Items = Schema({
    internal: {type: Number, required: true},
	itemId: { type: String, required: true },
    sku: String,
    desc: { type: String, required: true },
    part: { type: Boolean, required: true,  default: false },
    parts: [{type: Schema.ObjectId, ref: 'Items'}]
});

function auto(next){
    this.populate('parts');
    next();
}

Items.pre('findOne', auto)
    .pre('find', auto);

module.exports = {name: 'Items', Schema: Items};