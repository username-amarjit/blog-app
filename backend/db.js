import mongoose from "mongoose";
import 'dotenv/config'


async function db_connect() {
    mongoose.connect(process.env.MONGODB_STRING+process.env.DB_NAME)
}

export { db_connect }