const express = require ('express');
const typeRouter = express.Router();

const TypeController = require('../controllers/TypeController.js');

typeRouter.get('/', TypeController.showTypes);
typeRouter.get('/choose/:typeId', TypeController.chooseType)

module.exports = typeRouter;