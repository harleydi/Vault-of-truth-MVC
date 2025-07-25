const User = require('../models/userModel')

// create user controller object ?
const userController = {}


userController.createUser = (req, res, next) => {
    const { email, password } = req.body;
    User.register(email, password)
    res.status(200).json({ message: 'Successfully created user'});
}


userController.authenticateUser = (req, res, next) => {
    res.status(200).json({ message: 'Successfully authenticated user'})
}



// export controller
module.exports = userController