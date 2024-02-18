const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    image:{
        type:String,
        required:false,
        
    }

},{
    timestamps:true
})
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product