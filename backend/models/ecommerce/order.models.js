import mongoose from "mongoose";
const orderItemSchema = mongoose.Schema({
  productId: { type: mongoose.Schema.Types, ref: "Product" },
  quantity: { type: Number, required: true },
});
const orderSchema = mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: { type: Number, default: 0, required: true },
    orderItems: [orderItemSchema],
    address:{type:String,required:true},
    customer:{type:mongoose.Schema.Types,ref:'User'},
    status:{
        type:String,
        enum:['PENDING','CANCELED','DELIVERED'],
        default:'PENDING'
    }
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
