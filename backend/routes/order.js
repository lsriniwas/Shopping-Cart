const express=require('express');
const router=express.Router();
const { addOrder,fetchUserOrders,payment } = require('../controller/order-controller');
router.post("/order",addOrder);
router.post("/order/:paymentId",payment);
router.post("/api/orderlist",fetchUserOrders);
module.exports=router;