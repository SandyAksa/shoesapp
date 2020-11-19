const { Shoe, Color, Type, Customer, ShoeCustomer } = require('../models/index.js');

class ShoeController {
    
    static showShoes (req, res) {
        let shoes = [];
        let colors = [];
        
        Shoe.findAll()
        .then (result => {
            shoes = result
            return Color.findAll()
        })
        .then (data => {
            colors = data
            return Type.findAll()
        })
        .then (types => {
            res.render('shoe.ejs', {shoes,colors,types})
        })
        .catch(err => {
            res.send(err);
        });
    }

    static formAddShoe (req,res) {
        let colors = [];
        
        Color.findAll()
        .then (result => {
            colors = result
            return Type.findAll()
        })
        .then(types => {
            res.render('formAddShoe.ejs', {colors, types})
        })
        .catch(err => {
            res.send(err);
        })      
    }

    static addShoe (req,res) {
        let newShoe = {
            // type: req.body.type,
            // color: req.body.color,
            ColorId: req.body.ColorId,
            TypeId: req.body.TypeId
        }

        Shoe.create(newShoe)
        .then(() => {
            res.redirect('/shoes');
        })
        .catch(err => {
            res.send(err);
        })
    }

    static formCustomerShoe(req, res) {
        let shoes = [];

        Shoe.findByPk(req.params.shoeId, { include: [Customer] })
        .then((result) => {
            shoes = result;
            return Customer.findAll();
        })
        .then((result) => {
            res.render('formCustomerShoe.ejs', { customers: result, shoes });
        })
        .catch((err) => {
            res.render(err);
        });
    }

    static editCustomerShoe (req, res) {
        ShoeCustomer.create({
            ShoeId: req.body.ShoeId,
            CustomerId: req.body.CustomerId
        })
        .then(() => {
            res.redirect(`/shoes/addcustomer/${req.params.shoeId}`);
            //res.send('success')
        })
        .catch((err) => {
            res.send(err);
        });
    }
}

module.exports = ShoeController;