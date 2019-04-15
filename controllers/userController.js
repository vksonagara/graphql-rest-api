const User = require('../models/User.js');
const Post = require('../models/Post.js');
const Comment = require('../models/Comment.js');

const userController = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};

async function createUser(name, email, password) {
    const user = new User({ name, email, password });
    try {
        await user.save();
        return user;
    } catch(err) {
        return Promise.reject(err);
    }
}

async function getUsers() {
    try {
        const users = await User.find({}).exec();
        return users;
    } catch(err) {
        return Promise.reject(err);
    }
}

async function getUser(id) {
    try {
        const user = await User.findOne({ _id: id }).exec();
        return user;
    } catch(err) {
        return Promise.reject(err);
    }
}

async function updateUser(id, fields) {
    try {
        const user = await User.findOne({ _id: id }).exec();
        Object.assign(user, fields);
        await user.save();
        return user;
    } catch(err) {
        return Promise.reject(err);
    }
}

async function deleteUser(id) {
    try {
        const result = await User.findOneAndDelete({ _id: id }).exec();
        await Post.deleteMany({ userId: id }).exec();
        await Comment.deleteMany({ userId: id }).exec();
        return result.deletedCount === 1;
    } catch(err) {
        return Promise.reject(false);
    }
}

module.exports = userController;