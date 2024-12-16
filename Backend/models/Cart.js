import mongoose from "mongoose";

const cartSchema= new mongoose.Schema({

    userName:{
        type: String,
        required:true
    },
    productName:{
        type: [String],
        required:true
    },
    TotalPrice:{
        type: Number,
        required:true
    },
    productQuantity:{
        type: Number,
        required:true
    }

});

export default mongoose.model('Cart', cartSchema);