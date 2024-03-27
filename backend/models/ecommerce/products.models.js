import mongoose from "mongoose";

const productsSchema=mongoose.Schema({
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    description:{
        type:String,
        required:true
    },
    productImage:{
        type:String
    },
    price:{
        type:String,
        default:0
    },
    stocks:{
        type:Number,
        default:0
    }
},
{
    timestamps:true
}
)

export const Products=mongoose.model('Products',productsSchema)