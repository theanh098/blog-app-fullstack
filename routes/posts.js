import Controller from "../controller/Controller.js";
import express from "express";
const posts = express.Router();
const C = new Controller();
posts.get("/", C.homePage);
export default posts;
