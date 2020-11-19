const express = require ('express');
const shoeRouter = express.Router();

const ShoeController = require('../controllers/ShoeController.js');

shoeRouter.get('/', ShoeController.showShoes);
shoeRouter.get('/add', ShoeController.formAddShoe);
shoeRouter.post('/add', ShoeController.addShoe);
shoeRouter.get('/addcustomer/:shoeId', ShoeController.formCustomerShoe);
shoeRouter.post('/addcustomer/:shoeId', ShoeController.editCustomerShoe);

module.exports = shoeRouter;