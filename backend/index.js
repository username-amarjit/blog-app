import express from "express"
import { db_connect } from "./db.js"

const app = express()


async function main() {
    await db_connect();
    app.listen(process.env.BACKEND_PORT);
    console.log(`backend server listening on port ${process.env.BACKEND_PORT}`);
}

main()