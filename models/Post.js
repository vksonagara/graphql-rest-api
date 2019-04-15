const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: [ true, 'title is required' ]
    },
    body: {
        type: String,
        required: [ true, 'body is required' ]
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [ true, 'author is required' ]
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;