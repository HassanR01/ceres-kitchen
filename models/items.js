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
            enum: [
                "Breakfast",
                "Lunch",
                "Dinner",
                "Ready_To_Heat",
                "Pre_Cook",
                "Pasta",
                "Salad",
                "Meet",
            ],
            message: "Please Choose Correct Category"
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