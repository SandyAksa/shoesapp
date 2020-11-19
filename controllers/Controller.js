const { Customer } = require("../models")
const { compare } = require('../helpers/passwordBcrypt.js')
const email = require('../nodemailer/nodemailer')


class Controller {
    static home(req,res){
        res.render('home')
    }

    static mainPage(req,res){
        res.render('mainPage', { data: req.session.name })
    }

    static formRegister(req,res){
        res.render('register')
    }

    static register(req,res){
        Customer.findOne({where: {username: req.body.username}})
        .then(data => {
            if(data){
                res.send('data dengan username tersebut sudah ada')
            } else {  
                email(req.body.email)
               return Customer.create({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    username: req.body.username,
                    password: req.body.password,
                    updateAt: new Date(),
                    createdAt: new Date()
                }) 
            }
        })
        .then(data2 => {

            res.redirect('/login')
        })
        .catch(error => {
            res.send(error.message)
        })
    }


    static formLogin(req,res){
        res.render('login')
    }

    static login(req,res){
        Customer.findOne({where: {username: req.body.username}})
        .then(data => {
            if(data){
                if(compare(req.body.password,data.password)){
                    req.session.username = data.username
                    req.session.name = data.name
                    req.session.email = data.email
                    res.render('mainPage' ,{ data })
                }else{
                    res.send('username / password salah!')
                }
            } else {
                res.send('username / password salah!')
            }
        })
        .catch(error => {
            res.send(error)
        })
        
    }

    static landingPage(req,res) {
        res.render('landingpage.ejs');
    }
}

module.exports = Controller