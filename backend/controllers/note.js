import express from "express"
import Note from "../models/note.js"
import isLoggedIn from "../utils/isLoggedIn.js"

const router = express.Router()

router.use(isLoggedIn)

// index router
router.get("/", async (req, res) => {
    try {
        const username = req.payload.username
        const notes = await Note.find({username})
        res.json(notes)
    } catch (err) {
        res.status(400).json({ err })
    }
})

// show
router.get("/:id", async (req, res) => {
    try {
        const username = req.payload.username
        const notes = await Note.findOne({username, _id: req.params.id})
        res.json(notes)

    } catch (err) {
        res.status(400).json({ err })
    }
})

//create
router.post("/", async (req, res) => {
    try {
        const username = req.payload.username
        req.body.username = username
        const note = await Note.create({req.body})
        res.json(note)
    } catch (err) {
        res.status(400).json({ err })
    }
})

// update
router.put("/:id", async (req, res) => {
    try {
        const username = req.payload.username
        req.body.username = username
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.json(note)
    } catch (err) {
        res.status(400).json({ err })
    }
})

// destroy
router.delete("/:id", async (req, res) => {
    try {
        const username = req.payload.username
        req.body.username = username
        const note = await Note.deleteOne({_id: req.params.id, username})
        res.json(note)

    } catch (err) {
        res.status(400).json({ err })
    }
})





export default router

