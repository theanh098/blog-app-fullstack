import Controller from "../controller/Controller.js";
import express from "express";
const post = express.Router();
const C = new Controller();
post.get("/:id", C.singlePage);
post.post("/create", C.createPost);
post.post("/delete", C.deletePost);
export default post;
