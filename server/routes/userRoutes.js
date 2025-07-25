const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()


// display routes
router.post('/create', userController.createUser)
router.post('/authenticate', userController.authenticateUser)




// export router
module.exports = router