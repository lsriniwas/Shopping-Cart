const express=require('express')
const router=express.Router();
const fetchAllBarChocolate=require("../controller/product-controller")

router.get("/collections/amaze-bars",fetchAllBarChocolate);

module.exports=router;