const express=require('express');
const { body, validationResult } = require('express-validator');
const router=express.Router();
const {getUser,addUser}=require("../controller/user-controller")

router.post("/account/register",  [
    body("first_name").notEmpty(),
    body("last_name").notEmpty(),
    body('email').notEmpty().isEmail(),
    body('password').notEmpty()
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        addUser(req,res)
      }
)      
router.post("/user/profile",   [
    body('email').notEmpty().isEmail(),
    body('password').notEmpty()
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        getUser(req,res)
      }
)

module.exports=router;