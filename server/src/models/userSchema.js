var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectId = Schema.ObjectId;
var bcrypt = require('bcrypt');


// User schema
var Users = new Schema({
	id: objectId,
	firstname: {type: String, require: true},
	lastname: {type: String, require: true},
	username : {type: String, require: true},
	password : {type: String, require: true},
	role: {type: String, require: true}
});

Users.pre('save', function(next) {
	var user = this;

	if(!user.isModified('password')) return next();

	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
		if(err) return next(err);

		bcrypt.hash(user.password, salt , function(err, hash){
			if (err) return next(err);

			user.password = hash;
			next();
		});
	});
});

Users.methods.comparePassword = function(candidatePassword, cb){
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

module.exports = mongoose.model('Users', Users);