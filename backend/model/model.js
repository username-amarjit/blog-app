import mongoose from "mongoose";
import { Schema } from "mongoose";
import ObjectID from Schema;

const UserSchema = new Schema({
    username: String,
    email: { type: String, unique: true },
    password: String
}, { timestamps: true });

const BlogSchema = new Schema({
    title: String,
    desc: String,
    imageURL: String,
    creatorId: ObjectID
}, { timestamps: true });

const UserModel = mongoose.model("users", UserSchema);
const BlogModel = mongoose.model("blogs", BlogSchema);


export {
    UserModel,
    BlogModel
}