const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    })
});

router.post('/', (req, res, next) => {
    const order = {
        productID: req.body.productID,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Order was created',
        order: order
    })
});

router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order details',
        id: req.params.orderID
    })

});


router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted order',
        id: req.params.orderID
    })
});

module.exports = router;