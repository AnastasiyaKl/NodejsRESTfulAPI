const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handle GET method requests to /products'
    })
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handle POST method requests to /products',
        createdProduct: product
    })
});

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;

    if(id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed some ID'
        })
    }

});

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product'
    })
});

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product'
    })
});

module.exports = router;