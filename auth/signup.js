const userController = require('../controllers/userController.js');

const signUpHandler = {
    signUp
};

async function signUp(req, res) {
    let { name, email, password } = req.body;
    const user = await userController.createUser(name, email, password);
    const userInfo = {
        name: user.name,
        email: user.email,
    };
    res.send(userInfo);
}

module.exports = signUpHandler;