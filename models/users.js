import mongoose, { Schema } from "mongoose";

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
    orders: [],
    

}, { timestamps: true })

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User;