const jwt = require('jsonwebtoken');

const publicKey = 'hello-brother';

const authMiddleware = {
    forLoggedInUsers,
    forGuestUsers
};

function forLoggedInUsers(req, res, next) {
    const token = getToken(req);
    let decoded;
    try {
        decoded = jwt.verify(token, publicKey);
    } catch(err) {
        res.status(401).send({ message: 'user not authenticated' });
    }
    req.user = decoded;
    next();
}

function forGuestUsers(req, res, next) {
    if(!req.user)
        next();
    else
        res.send({ message: 'Already logged in!'});
}

function getToken(req) {
    if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}

module.exports = authMiddleware;

