const { Type } = require('../models/index.js');

class TypeController {
    static showTypes (req, res) {
        Type.findAll({
            order: [['id', 'ASC']]
        })
        .then(result => {
            res.render('type.ejs', { types: result });
            //res.send('success')
        })
        .catch(err => {
            res.send(err);
        })
    }

    static chooseType(req, res){
        let typeId = +req.params.typeId
        
        Type.findByPk(typeId)
        .then(data => {
        let stock = { stock: data.stock - 1 }
        return Type.update(stock, {
            where: {id: typeId}
        })
        })
        .then(data => res.redirect('/types'))
        .catch(err => res.send(err))
    }
}

module.exports = TypeController;