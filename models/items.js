import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema(
    {
        _id: String,
        image: String,
        title: String,
        description: String,
        category: {
            type: String,
            require: true,
        },
        price: Number,
        reviews: [{
            Rate: Number,
            Name: String,
            description: String,
            createAt: {
                type: String,
                default: Date().split(' ', 4).join(', '),
            },
        }],
        rate: {
            type: Number,
            default: 5,
        },
        createdAt: {
            type: String,
            default: Date().split(' ', 4).join(', ')
        },
    }
);

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;