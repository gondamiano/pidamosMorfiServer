const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const userService = require('../src/services/userService');
const orderService = require('../src/services/orderService');
const storeService = require('../src/services/storeService');

// conecction to mongo database
mongoose.connect('mongodb://localhost:27017/mean');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("funciona");
});

//error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

//response Handling
let response = {
    status: 200,
    data: [],
    message: null,
};

//get request for the users
router.get('/users', userService.getUsers);

//get the user by id
router.get('/users/:_id',userService.getUserById);

//get request for the food
router.get('/orders', orderService.getOrders);

//get request by Id for specific food 
router.get('/orders/:_id', orderService.getOrderById);

router.get('/completeOrder/:_id', orderService.getCompleteOrder);

//get request for the stores
router.get('/stores', storeService.getStores);

//get the store by id
router.get('/stores/:store_id', storeService.getStoreById);

module.exports = router;