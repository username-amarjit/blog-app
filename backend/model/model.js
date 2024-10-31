import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    username: String,
    email: { type: String, unique: true },
    password: String
}, { timestamps: true });

const BlogSchema = new Schema({
    title: String,
    desc: String,
    imageURL: String,
    creatorId: Schema.Types.ObjectID
}, { timestamps: true });

const UserModel = mongoose.model("users", UserSchema);
const BlogModel = mongoose.model("blogs", BlogSchema);


export {
    UserModel,
    BlogModel
}