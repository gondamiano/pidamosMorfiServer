const Order = require('../models/orderSchema');

const orderService = {

	getOrders : (req, res) => {
		Order.find()
		.then((orders) => {
			res.json(orders)
		})
		.catch((err) => {
			console.log(err);
		});
	},

	getOrderById : (req, res) => {
		Order.findById(req.params._id)
		.then((order) => {
			res.json(order)
		})
		.catch((err) => {
			console.log(err);
		});
	}
};

module.exports = orderService;