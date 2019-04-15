const userController = require('../controllers/userController.js');

const userHandler = {
    getUserWithId,
    getAllUsers,
    createUser,
    updateUserWithId,
    deleteUserWithId
};

function getUserWithId(req, res) {
    const userId = req.params.userId;
    userController.getUser(userId).then(user => {
        res.send(user);
    }).catch(err => {
        res.status(404).send();
    });
}

function getAllUsers(req, res) {
    userController.getUsers().then(users => {
        res.send(users);
    }).catch(err => {
        res.status(404).send();
    });
}

function createUser(req, res) {
    const { name, email, password } = req.body;
    userController.createUser(name, email, password).then(user => {
        res.status(201).send(user);
    }).catch(err => {
        res.status(409).send();
    })
}

function updateUserWithId(req, res) {
    const fields = req.body.fields;
    const { userId } = req.params;
    userController.updateUser(userId, fields).then(user => {
        res.status(204).send();
    }).catch(err => {
        res.status(400).send();
    });
}

function deleteUserWithId(req, res) {
    const userId = req.params.userId;
    userController.deleteUser(userId).then(isDeleted => {
        res.status(204).send();
    }).catch(err => {
        res.status(409).send();
    })
}

module.exports = userHandler;