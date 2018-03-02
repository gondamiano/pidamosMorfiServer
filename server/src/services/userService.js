const User = require('../models/userSchema');


const userService = {

		getUsers : (req, res) => {
			User.find()
			.then((users) => {
				res.json(users)
			})
			.catch((err) => {
				console.log(err);
			});
		},

		getUserById : (req, res) => {
			User.findById(req.params._id)
			.then((user) => {
				res.json(user)
			})
			.catch((err) => {
				console.log(err);
			});
		}
};

module.exports = userService;