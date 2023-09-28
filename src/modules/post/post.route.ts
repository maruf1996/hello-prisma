import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/create-post", PostController.createPost);
router.patch("/:id", PostController.updatePost);
router.get("/:id", PostController.getSinglePost);
router.delete("/:id", PostController.deletePost);
router.get("/learn-query", PostController.learnAggregateAndGrouping);
router.get("/", PostController.getAllPost);

export const PostRoutes = router;
