const mongoose = require("mongoose")

const express = require("express")
const {signUp, getUser, updateUser, deleteUser} = require('../controllers/routecontroller')
const router = express.Router()


router.use(express.json())


router.post('/api', signUp )

router.route('/api/:id').get(getUser).patch(updateUser).delete(deleteUser)










module.exports = router