import express from "express"
import { db_connect } from "./db.js"
import { blogrouter } from "./router/blog.routes.js"
import { userRouter } from "./router/user.routes.js"

const app = express()

app.use(express.json())
app.use("/user", userRouter)
app.use("/blog", blogrouter)

async function main() {
    await db_connect();
    app.listen(process.env.BACKEND_PORT);
    console.log(`backend server listening on port ${process.env.BACKEND_PORT}`);
}

main()
