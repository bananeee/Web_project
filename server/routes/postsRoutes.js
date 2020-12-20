import express from "express";

import { createPostController, deletePostController, getAllPostController, getAPostController, likePostController } from "../controllers/postsController.js";

import { requireLogin, verifyToken } from "../middleware/requireLogin.js";

const router = express.Router();

router.get("/", verifyToken, requireLogin, getAllPostController);

router.post("/", verifyToken, requireLogin, createPostController);

router.delete("/", verifyToken, requireLogin, deletePostController);

router.get("/:id", verifyToken, requireLogin, getAPostController);

router.get("/like/:id", verifyToken, requireLogin, likePostController);


export default router;