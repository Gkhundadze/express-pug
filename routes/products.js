var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('products', {products: 'products', queryParam: req.query.id});
});

module.exports = router;
