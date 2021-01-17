
const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');



router.get('/', function(req, res)
{
    res.sendFile(__dirname + '/index.html')
})

// router.post('/insert', function(req,res){

//     // console.log(req.body)
//     const names = req.body.name
//     const ages = req.body.age
//     // console.log(names)
//     // console.log(ages)

//     const me = new User({ name:names, age:ages })
//     me.save();
//     res.redirect('/')
// })




router.post('/pinsert', function(req, res)
{
    const Pname = req.body.pname
    const Pdesc = req.body.pdesc
    const Pqty = req.body.pqty
    const Pprice = req.body.pprice

    const myProduct = new Product({pName:Pname, pDesc:Pdesc, pQty:Pqty, pPrice:Pprice})
    // console.log(myProduct)
    myProduct.save();
    res.redirect('/')
})



router.get('/show', function(req, res){
    Product.find().then(function(data){
        // console.log(data);
        res.send(data);
    })
})



router.delete('/product-delete/:id', function(req, res)
{
    const id = req.params.id;
    Product.deleteOne({_id:id}).then(function()
    {
        console.log('Product Deleted sucessfulley')
    })
})

router.put('/product-update/:id', function(req, res)
{
    const updateId = req.params.id
    const pname = req.body.pName
    Product.updateOne({_id:updateId}, {pName:pname}).then(function()
    {
        console.log("Product Updated")
    });
})


module.exports = router;