const express = require('express');
const router = express.Router();
const {getUser,addUser, deleteUser} = require('../controller/user');


router.get("/",getUser)
router.post("/",addUser)
router.delete("/",deleteUser)


module.exports = router;



