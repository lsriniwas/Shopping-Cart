const mongoose=require("mongoose")

const Schema=mongoose.Schema;

const discsSchema=new Schema({
    id:{
        type:String,
        required:true
    },
    src:{
        type:String,
        required:true
    },
    alt:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    more_info:{
        type:String,

    }
},{
    versionKey:false,
}) 

module.exports=mongoose.model('Disc',discsSchema)


