const Order = require('../models/orderSchema');

class UserOrder {
	constructor(userId, foodId, description, quantity, price) {
		this.user_id = userId;
		this.food = [{
			food_id : foodId,
			description : description,
			quantity : quantity,
			price : price
		}];
	}
}

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
	},

	getCompleteOrder: (req, res) => {
		Order.findById(req.params._id)
		.populate('store_id')
		.populate('users.user_id')
		.then((order) => {
			res.json(order)
		})
		.catch((err) => {
			console.log(err);
		});
	},

	insertUserInOrder : (req, res) => {
		console.log("aca esta eso: !!!!!!!!!!!!!!!!!!!!!!!!");
		Order.findById(req.body._id)
		.then((order) => {
			console.log( "HASTA ACA LLEGA ", order.users);
			var userOrder = new UserOrder(req.body.user_id, req.body.food[0].food_id, req.body.food[0].description, req.body.food[0].quantity, req.body.food[0].price);
			console.log(userOrder);
			order.users.push(userOrder)
			order.save(function (err, res) {
				if(err) console.log(err);
				else console.log(res);
			});		
		})
		.catch((err) => {
			console.log(err);
		});
	}
};

module.exports = orderService;