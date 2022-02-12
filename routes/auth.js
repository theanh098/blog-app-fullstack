import Controller from "../controller/Controller.js";
import express from "express";
const auth = express.Router();
const C = new Controller();
auth.post("/register", C.register);
auth.post("/login", C.login);
auth.post("/update", C.userUpdate);
export default auth;
