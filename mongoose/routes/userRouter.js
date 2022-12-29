const express = require('express')
const { createUser ,deleteUser,getUser} = require('../controller/create')
const router = express.Router()

router.post('/', createUser);
router.delete('/', deleteUser);
router.get('/', getUser);



module.exports = router