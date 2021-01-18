const express=require('express')
const router=express.Router();

const {getUser,addUser}=require("../controller/user-controller")

router.post("/account/register",addUser)      
router.post("/user/profile",getUser)

module.exports=router;