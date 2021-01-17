const express = require('express');
const router = express.Router();
const commentModel = require('../models/commentModel');

router.post('/postComment', function(req,res)
{
    const comment_by = req.body.commentBy
    const comment_date = req.body.commentDate
    const PostComment = req.body.comment

    const postComment = new commentModel({commentBy:comment_by, commentDate:comment_date, Comment:PostComment})
    postComment.save()
})



module.exports = router;