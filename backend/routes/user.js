const express=require('express');
const router=express.Router();
const {getUser,addUser}=require("../controller/user-controller")


router.post("/account/register",addUser)     


router.post("/user/profile",(req, res) => {
    getUser(req,res)
})
    
    module.exports=router;
    



















    
    
    /**
const { body, validationResult } = require('express-validator');

     * // 
     [
         body("first_name").notEmpty(),
         body("last_name").notEmpty(),
         body('email').notEmpty().isEmail(),
         body('password').notEmpty()
        ],
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        


        [
            body('email').notEmpty().isEmail(),
            body('password').notEmpty()
        ],
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    */