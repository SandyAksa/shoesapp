const { Customer, Shoe } = require('../models/index.js');

class CustomerController {
    static showCustomers (req, res) {
        Customer.findAll()
        .then(result => {
            res.render('customer.ejs', { customers: result });
            //res.send('success')
        })
        .catch(err => {
            res.send(err);
        });
    }

    static formAddCustomer(req,res) {
        res.render('formAddCustomer.ejs');
    }

    static addCustomer(req,res) {
        let newCustomer = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }

        Customer.create(newCustomer)
        .then(() => {
            res.redirect('/customers');
        })
        .catch(err => {
            res.send(err);
        })
    }

    static seeShoes(req,res) {
        Customer.findByPk(req.params.customerId, { include: [Shoe] })
        .then(result => {
            res.render('customerSeeShoes', { customers: result })
        })
        .catch(err => {
            res.render(err);
        })
    }
}

module.exports = CustomerController;