import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.post("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likedPost", )

export default router;
