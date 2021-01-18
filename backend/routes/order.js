const express=require('express');
const router=express.Router();
const { addOrder } = require('../controller/order-controller');

router.post("/order",addOrder);
module.exports=router;