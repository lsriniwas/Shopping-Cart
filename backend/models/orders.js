const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const newOrder=new Schema({
    order_id:{
      type:String,
      required:true  
    },
    user_id:{
        type:String,
        required:true,
    },
    items:{
        type:Array,
        required:true
    }
},{
    versionKey:false
})

module.exports=mongoose.model('Orders',newOrder)