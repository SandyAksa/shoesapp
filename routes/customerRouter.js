const express = require ('express');
const customerRouter = express.Router();

const CustomerController = require('../controllers/CustomerController.js');

customerRouter.get('/', CustomerController.showCustomers);
customerRouter.get('/add', CustomerController.formAddCustomer);
customerRouter.post('/add', CustomerController.addCustomer);
customerRouter.get('/seeshoes/:customerId', CustomerController.seeShoes);

module.exports = customerRouter;