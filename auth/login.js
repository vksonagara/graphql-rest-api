const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const loginHandler = {
    login
};

const privateKey = 'hello-brother';

function login(req, res) {
    const { email, password } = req.body;
    User.findOne({ email: email}).exec().then( user => {
        if(!user) {
            res.send({ success: false, message: 'Email not found!'});
            return;
        }
        if(user.password !== password) {
            res.send({ success: false, message: 'Incorrect password!'});
            return;
        }
        const userInfo = {
            name: user.name,
            email: user.email
        };
        const token = jwt.sign(userInfo, privateKey);
        res.send({ success: true, token: token, user: userInfo });
    }).catch( err => {
        throw new Error(err);
    });
}

module.exports = loginHandler;