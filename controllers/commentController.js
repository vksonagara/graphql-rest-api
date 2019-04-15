const Comment = require('../models/Comment.js');

const commentController = {
    createComment,
    getCommentsByPostId,
    deleteComment,
    updateComment
};

async function createComment(body, userId, postId) {
    try {
        const comment = new Comment({ body, author: userId, post: postId });
        await comment.save();
        return comment;
    } catch(err) {
        return Promise.reject(err);
    }
}

async function getCommentsByPostId(postId) {
    try {
        const comments = await Comment.find({ post: postId }).exec();
        return comments;
    } catch(err) {
        return Promise.reject(err);
    }
}

async function deleteComment(id) {
    try {
        const result = await Comment.deleteOne({ _id: id }).exec();
        return result.deletedCount === 1;
    } catch(err) {
        return Promise.reject(err);
    }
}

async function updateComment(id, fields) {
    try {
        const comment = await Comment.findOne({ _id: id }).exec();
        Object.assign(comment, fields);
        await comment.save();
        return comment;
    } catch(err) {
        return Promise.reject(err);
    }
}

module.exports = commentController;