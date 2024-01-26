import mongoose, { Schema } from "mongoose";
let date = `${new Date()}`
const userSchema = new Schema({
    email: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    passwrord: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: 'visitor',
        require: true,
    },
    basket: [
        {
            image: String,
            title: String,
            price: Number,
            quantity:Number
        },
    ],
    orders: [{
        totalPrice: Number,
        items: [{
            title: String,
            quantity: Number,
            price: Number,
        },],
        status: {
            type: String,
            default: 'Paid'
        },
        date: {
            type: String,
            default: date.slice(4, 15).replaceAll(' ', "-")
        }
    }],
    

}, { timestamps: true })

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User;