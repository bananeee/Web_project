import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


// Draft
import loginRoute from './routes/login.js';
import searchRoute from "./routes/search.js";
import postRoutes from "./routes/posts.js";
import router from './routes/login.js';
// -----------------------------------

import renterRoutes from "./routes/renterRoutes.js"
import postsRoutes from "./routes/postsRoutes.js";

// Config express and port
const app = express();
const PORT = process.env.PORT || 5000;

// Config dotenv
dotenv.config();

// Config bodyParser
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// Config cors
app.use(cors());

// Config mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// ROUTES draft
// app.use("/login", loginRoute);
// app.use("/search", searchRoute);
// app.use("/posts", postRoutes);
// ---------------

// routes
app.use("/renter", renterRoutes);
// app.use("/owner", ownerRoutes);
app.use("/posts", postsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})