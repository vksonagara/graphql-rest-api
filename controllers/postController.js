const Post = require('../models/Post.js');
const Comment = require('../models/Comment.js');


const postController = {
    createPost,
    getPosts,
    getPost,
    deletePost,
    getPostsByUserId,
    updatePost
};

async function createPost(title, body, userId) {
    const post = new Post({ title, body, author: userId });
    try {
        await post.save();
        return post;
    } catch(err) {
        return Promise.reject(err);
    }
}

async function getPosts() {
    try {
        const posts = await Post.find({}).exec();
        return posts;
    } catch(err) {
        return Promise.reject(err);
    }
}

async function getPost(id) {
    try {
        const post = await Post.findOne({ _id: id }).exec();
        return post;
    } catch(err) {
        return Promise.reject(err);
    }
}

async function deletePost(id) {
    try {
        const result = await Post.deleteOne({ _id: id }).exec();
        await Comment.deleteMany({ post: id }).exec();
        return result.deletedCount === 1;
    } catch(err) {
        return Promise.reject(err);
    }
}

async function getPostsByUserId(userId) {
    try {
        const posts = await Post.find({ author: userId }).exec();
        return posts;
    } catch(err) {
        return Promise.reject(err);
    }
}

async function updatePost(id, fields) {
    try {
        const post = await Post.findOne({ _id: id }).exec();
        Object.assign(post, fields);
        await post.save();
        return post;
    } catch(err) {
        return Promise.reject(err);
    }
}

module.exports = postController;