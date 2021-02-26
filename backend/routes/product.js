const express=require('express')
const router=express.Router();
const {fetchOneBark,fetchOneDisc,fetchOneTreat,fetchAllBarChocolate,fetchAllTreat,fetchAllDiscs,fetchAllBark,fetchOneBarChocolate}=require("../controller/product-controller")

router.get("/collections/amaze-bars",fetchAllBarChocolate);
router.get("/collections/amaze-bars/:_id",fetchOneBarChocolate);


router.get("/collections/chocolate-covered-nuts",fetchAllTreat);
router.get("/collections/chocolate-covered-nuts/:_id",fetchOneTreat);

router.get("/collections/discs",fetchAllDiscs);
router.get("/collections/discs/:_id",fetchOneDisc);

router.get("/collections/dark-bark",fetchAllBark);
router.get("/collections/dark-bark/:_id",fetchOneBark);

module.exports=router;