import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Import mongoose schema
import RenterModel from "../models/renterModel.js";

// Config dotenv
dotenv.config();

// Config jwt
const JWT_SECRET = process.env.JWT_SECRET;

export const requireLogin = async (req, res, next) => {
    jwt.verify(req.token, JWT_SECRET, (err, authData) => {
        if (err) {
            return res.status(401).json({ error: "You must be logged in" });
        }

        const { _id } = authData;
        
        RenterModel.findById(_id).then((data) => {
            req.renter = data;
            next();
        });
    });
};
