import express from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Import mongoose schema
import RenterModel from "../models/renterModel.js";

// Config express
const router = express.Router();

// Config bcrypt
const saltRounds = 12;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

// Config dotenv
dotenv.config();

// Config jwt
const JWT_SECRET = process.env.JWT_SECRET;

// Create routes
export const signupController = async (req, res) => {
    const { username, password, phoneNumber } = req.body;

    if (!username || !password || !phoneNumber) {
        return res.status(422).json({ error: "Please add all the fields" });
    }

    try {
        // Check rentel exist ?
        await RenterModel.findOne({ phoneNumber }).then((saveRenter) => {
            if (saveRenter) {
                return res.status(422).json({ error: "User already exists" });
            }

            // Hash password and create nick and save
            bcrypt.hash(password, saltRounds).then(async (hashedPassword) => {
                const renter = new RenterModel({
                    username,
                    password: hashedPassword,
                    phoneNumber,
                });

                try {
                    await renter.save();
                    res.status(201).json({ message: "Saved successfully" });
                } catch (error) {
                    res.status(409).json({ message: error.message });
                }
            });
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const signinController = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res
            .status(422)
            .json({ error: "Please add username or password" });
    }

    try {
        await RenterModel.findOne({ username }).then(async (saveRenter) => {
            if (!saveRenter) {
                return res
                    .status(422)
                    .json({ error: "Invalid username or password" });
            }

            // Check nick exists
            const match = await bcrypt.compare(password, saveRenter.password);

            if (match) {
                // Create token
                const token = jwt.sign({ _id: saveRenter._id }, JWT_SECRET);
                const { _id, username, password, phoneNumber } = saveRenter;
                res.json({
                    token,
                    user: {
                        _id,
                        username,
                        password,
                        phoneNumber,
                    },
                });
            } else {
                return res
                    .status(422)
                    .json({ error: "Invalid usename or password" });
            }
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
