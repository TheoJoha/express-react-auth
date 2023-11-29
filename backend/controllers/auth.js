import express from "express"
import User from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import cookieParser from "cookie"

dotenv.config()


// create the router
const router = express.Router()



// signup post
router.post("/signup", async (req, res) => {
    try {
        // hash password
        req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

        // generate the user
        const user = await User.create(req.body)

        // response
        res.json({ status: "User Created" })
    } catch (err) {
        res.status(400).json({ err })
    }
})

// login post 
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body
        // get the user
        console.log(1)
        const user = await User.findOne({ username })

        if (user) {
            console.log(2)
            const passwordCheck = await bcrypt.compare(password, user.password)
            console.log(3)
            if (passwordCheck) {
                console.log(4)
                const payload = { username }
                const token = await jwt.sign(payload, process.env.SECRET)
                console.log(5)
                res.cookie("token", token, { httpOnly: true }).json({ payload, status: "logged in" })
            } else {
                res.status(400).json({ error: "password does not match" })
            }
        } else {
            res.status(400).json({ error: "User does not exist" })
        }
    } catch (err) {
        res.status(400).json({ err })
    }
})


// logout post
router.post("/logout", async (req, res) => {
    res.clearCookie("token").json({ response: "You are logged out" })
})


export default router




