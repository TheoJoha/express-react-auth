import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import noteRouter from "./controllers/note.js"

// read .env file
dotenv.config()

const app = express()

// register middleware
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE"]
})) // allow external requests
app.use(morgan("dev")) // logging
app.use(express.json()) // parse json bodies
app.use(cookieParser())

// routes and routers

// test-route
app.get("/test", (req, res) => {
    res.send("server is ready")
})

const PORT = process.env.PORT || 4444
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})














