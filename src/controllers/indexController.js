const { leerJSON } = require("../data")

module.exports = {
    index : (req, res) => {
        return res.render('index')
    },
    cart : (req, res) => {
        return res.render('carrito')
    },
    admin : (req,res) => {
        const products = leerJSON('productos');

        return res.render('dashboard', {
            products
        })
    }
}