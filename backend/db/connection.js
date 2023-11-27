import dotenv from "dotenv"
import mongoose from "mongoose"


dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL


mongoose.connect(DATABASE_URL) // connect to db

// connection messages
mongoose.connection.on("open", () => console.log("Mongo is connected"))
mongoose.connection.on("close ", () => console.log("Mongo is disconnected"))
mongoose.connection.on("error", (error) => console.log(error))

export default mongoose


