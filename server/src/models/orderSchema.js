var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectId = Schema.ObjectId;

// Foods Schema

var Orders = new Schema({
	id : objectId,
	store_id: objectId,
	users: [{ 
		user_id: {type: String, require: true},
		food: [{
			food_id: {type: String, require: true},
			quantity: {type: Number, require: true},
			price: {type: Number, require: true}
		 	}]}],
	total: {type: Number}
})

module.exports = mongoose.model('Orders', Orders);