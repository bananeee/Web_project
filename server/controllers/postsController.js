import express from "express";
import mongoose from "mongoose";

// Import mongoose schema
import RenterModel from "../models/renterModel.js";
import PostModel from "../models/postModel.js";

// Create routes
export const getAllPostController = async (req, res) => {
    try {
        const posts = await PostModel.find()
            .populate("postedBy", "_id name")
            .sort("createdAt");
        res.status(200).json({ posts });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getAPostController = async (req, res) => {
    const { id } = req.params;
    try {
        const posts = await PostModel.find(id)
            .populate("postedBy", "_id name")
            .sort("createdAt");
        res.status(200).json({ posts });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPostController = async (req, res) => {
    console.log(req.user);
    const newPostModel = new PostModel({
        ...req.body,
        postedBy: req.user._id,
    });

    try {
        await newPostModel.save();
        res.status(200).json({ newPostModel });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deletePostController = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }
    try {
        // await PostModel.findByIdAndRemove(id);
        await PostModel.findById(id)
            .populate("postedBy", "_id")
            .exec((error, post) => {
                if (error || !post) {
                    return res.status(404).json({ message: error.message });
                }
                if (post.postedBy._id.toString() === req.user._id.toString()) {
                    post.remove()
                }
            })
        res.status(200).json({ message: "Post deleted successfully." })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const likePostController = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }
    try {
        const post = await PostModel.findById(id);
        const updatePost = await PostModel.findByIdAndUpdate(
            id,
            {
                $push: {
                    likes: req.user._id,
                },
            },
            { likeCount: post.likeCount + 1 },
            { new: true }
        );
        res.json(updatePost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
