const express = require ('express');
const colorRouter = express.Router();

const ColorController = require('../controllers/ColorController.js');

colorRouter.get('/', ColorController.showColors);
colorRouter.get('/choose/:colorId', ColorController.chooseColor)


module.exports = colorRouter;