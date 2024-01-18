import mongoose, { Schema } from "mongoose";

const adminsSchema = new Schema({
    email: String,
})

const Admins = mongoose.models.Admins || mongoose.model("Admins", adminsSchema)

export default Admins