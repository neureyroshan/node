// importing modules
// const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')





const db = require('./Database/db');

// route product
const productRoute = require('./Route/productRoute')

// route comment
const commentRoute = require('./Route/commentRoute')



var app = express();
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.json())

app.use(productRoute);

app.use(commentRoute);





// creating tables/models in database

// const User = mongoose.model('User', {
//     name:{type:String},
//     age:{type:Number}
// })







// // creating new mongoose.Collection

// const Product = mongoose.model('Product', {
//     pName:{type:String},
//     pDesc:{type:String},
//     pQty:{type:Number},
//     pPrice:{type:Number}
// })


// inserting data in model

// const me = new User({
//     name:'bijay',
//     age:30
// })

// me.save();







app.listen(1337);