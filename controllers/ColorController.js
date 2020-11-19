const { Color } = require('../models/index.js');

class ColorController {
    static showColors (req, res) {
        Color.findAll({
            order: [['id', 'ASC']]
        })
        .then(result => {
            res.render('color.ejs', { colors: result });
        })
        .catch(err => {
            res.send(err);
        })
    }

    static chooseColor(req, res){
        let colorId = +req.params.colorId
        
        Color.findByPk(colorId)
        .then(data => {
        let stock = { stock: data.stock - 1 }
        return Color.update(stock, {
            where: {id: colorId}
        })
        })
        .then(data => res.redirect('/colors'))
        .catch(err => res.send(err))
    }
}

module.exports = ColorController;