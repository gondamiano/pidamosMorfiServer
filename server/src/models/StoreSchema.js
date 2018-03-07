var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectId = Schema.ObjectId;

//Stores Schema

var Stores = new Schema({
	id: objectId,
	name: {type: String, require: true},
	location: {type: String, require: true},
	phoneNumber: {type: Number },
	typeOf: [{
		foodName: {type: String, unique: true},
		price: {type: Number}
	}]
});

module.exports = mongoose.model('Stores', Stores);