import express from "express";
import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    const {selectedFile}  = req.body;
    // console.log(req.body);
    const newPostMessage = new PostMessage({ selectedFile });
    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

export default router;
