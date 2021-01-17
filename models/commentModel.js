const mongoose = require('mongoose');

const Comment = mongoose.model('Comment',{
    commentBy:{type:String},
    commentDate:{type:String},
    Comment:{type:String}

})


module.exports = Comment;