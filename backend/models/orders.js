const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const newOrder=new Schema({
    customer_id:{
        type:String,
        required:true,
    },
    items:{
        type:Array,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    total_amount:{
        type:Number,
        required:true
    }
},{
    versionKey:false
})

module.exports=mongoose.model('Orders',newOrder)

//