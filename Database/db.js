const mongoose = require('mongoose');


// connecting mongo dabase

mongoose.connect('mongodb://127.0.0.1:27017/Shop',
{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});