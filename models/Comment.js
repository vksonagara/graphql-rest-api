const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    body: {
        type: String,
        required: [ true, 'body is required' ]
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [ true, 'userId is required' ]
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: [ true, 'postId is required' ]
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;