import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    person: {
        name : String,
        email: String,
    },
    address: String,
    phone: String,
    totalPrice: Number,
    items: [{
        title: String,
        quantity: Number,
        price: Number,
        comment: String,
    }],
    
    
}, {
    timestamps: true,
})

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order