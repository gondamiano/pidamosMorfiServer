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
		Store.findById(req.params._id)
		.then((store) => {
			res.json(store);
		})
		.catch((err) => {
			console.log(err);
		})
	}
};

module.exports = storeService;