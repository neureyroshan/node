
const mongoose = require('mongoose');


// creating new mongoose.Collection

const Product = mongoose.model('Product', {
    pName:{type:String},
    pDesc:{type:String},
    pQty:{type:Number},
    pPrice:{type:Number}
})


module.exports = Product;

