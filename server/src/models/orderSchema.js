var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectId = Schema.ObjectId;

// Foods Schema

var Orders = new Schema({
	id : objectId,
	store_id: objectId,
	users: [{ 
		user_id: objectId,
		food: [{
			food_id: {type: String, require: true},
			quantity: {type: Number, require: true},
			price: {type: Number, require: true}
		 	}]}],
	total: {type: Number},
	date: {type: Date, require: true}
})

module.exports = mongoose.model('Orders', Orders);