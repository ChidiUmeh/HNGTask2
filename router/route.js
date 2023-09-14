const mongoose = require("mongoose")

const express = require("express")
const {signUp, getUser, updateUser, deleteUser} = require('../controllers/routecontroller')
const router = express.Router()


router.use(express.json())


router.post('/',signUp )

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)










module.exports = router