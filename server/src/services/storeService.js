const Store = require('../models/storeSchema');

const storeService = {

	getStores : (req, res) => {
		Store.find()
		.then((stores) => {
			res.json(stores)
		})
		.catch((err) => {
			console.log(err);
		});
	},

	getStoreById : (req, res) => {
		Store.findById(req.params.store_id)
		.then((store) => {
			console.log("!!!!!!!aca llega + " + store)
			res.json(store);
		})
		.catch((err) => {
			console.log(err);
		})
	},

	updateStore : (req, res) => {
		console.log("ACA TAMBIEN  " + req.body._id);
		var newStore = new Store({
			_id : req.body._id,
			name: req.body.name,
			location : req.body.location,
			phoneNumber: req.body.phoneNumber,
			typeOf :req.body.typeOf
		});
		console.log(newStore);
		Store.findByIdAndUpdate(req.body._id, newStore, {new: true}, function (err, model) {
			if(err) {
				console.log("Todo se acabo señores!!");
			}
			else {
				console.log(model);
			}
		});
	},

	deleteFoodFromStore : (req, res) => {
		Store.update(req.body._id, 
			{ $pull: { "typeOf" : { foodName: req.body.foodName } } },
		false,
		true, function (err , model) {
			if(err) console.log("todo mal");
			else console.log("TODO BIEN");
		}
		);
	},
	
	insertStore : (req, res) => {
		var store = new Store({
			name: req.body.name,
			location : req.body.location,
			phoneNumber: req.body.phoneNumber,
			typeOf :req.body.typeOf
		});
		store.save()
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
	},

	deleteStore : (req, res) => {
		Store.findByIdAndRemove(req.params._id, function(error){
			if(error == undefined) console.log("HUBO UN PROBLEMA: " + error);
			else { return "se borro satifactoriamente"};
		})
	}

};

module.exports = storeService;