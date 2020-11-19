const express = require ('express');
const mainRouter = express.Router();
const autentikasi = require("../middlewares/middleware")

const Controller = require('../controllers/Controller.js');
const colorRouter = require('./colorRouter.js');
const typeRouter = require('./typeRouter.js');
const shoeRouter = require('./shoeRouter.js');
const customerRouter = require('./customerRouter.js');

mainRouter.get("/",Controller.home)
mainRouter.get("/mainpage",autentikasi, Controller.mainPage)
mainRouter.get("/register",Controller.formRegister)
mainRouter.post("/register",Controller.register)
mainRouter.get("/login",Controller.formLogin)
mainRouter.post("/login",Controller.login)
mainRouter.get("/logout",(req,res) => {
    req.session.destroy((err) => {
        if(err){
            res.send(err.message)
        } else {
            res.redirect('/')
        }
    })
})

mainRouter.get ('/landingpage', Controller.landingPage);
mainRouter.use ('/colors', colorRouter);
mainRouter.use ('/types', typeRouter);
mainRouter.use ('/shoes', shoeRouter);
mainRouter.use ('/customers', customerRouter);

module.exports = mainRouter;
