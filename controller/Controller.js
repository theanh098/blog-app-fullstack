import ketnoi from "../config/dbConnect.js";
import Post from "../models/post.js";
import User from "../models/user.js";
import { unlink } from "fs/promises";
class Controller {
  // GET "/posts"
  async homePage(req, res) {
    ketnoi();

    try {
      const user = req.query.user;
      console.log(user);
      const posts = user
        ? await Post.find({ username: user })
        : await Post.find({});

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json("read fail");
    }
  }
  // GET "/post/:id"
  async singlePage(req, res) {
    ketnoi();
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json("read fail");
    }
  }
  // POST "/post/create"
  async createPost(req, res) {
    ketnoi();
    try {
      const newPost = new Post({
        title: req.body.title,
        desc: req.body.desc,
        photo: req.body.photo,
        username: req.body.username,
        categories: ["life", "sport"],
      });
      const post = await newPost.save();
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json("read fail");
    }
  }
  // POST "/post/delete"
  async deletePost(req, res) {
    ketnoi();
    try {
      const author = (await Post.findById(req.body.id)).username;
      if (author !== req.body.author) res.status(200).json("not your");
      else {
        const post = await Post.findByIdAndDelete({ _id: req.body.id });
        res.status(200).json("have been deleted");
      }
    } catch (error) {
      res.status(500).json("read fail");
    }
  }
  // POST "/auth/register"
  async register(req, res) {
    ketnoi();
    try {
      const isExist = await User.findOne({ username: req.body.username });
      if (isExist) res.status(200).json("have been existed");
      else {
        const newuser = new User({
          username: req.body.username,
          password: req.body.password,
          profilePic: "http://localhost:5000/static/profileImg/default.jpg",
        });
        const user = await newuser.save();
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json("read fail");
    }
  }
  // POST "/auth/login"
  async login(req, res) {
    ketnoi();
    try {
      const user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
      });
      if (!user) res.status(500).json(null);
      else res.status(500).json(user);
    } catch (error) {
      res.status(500).json("read fail");
    }
  }
  // POST "/auth/update"
  async userUpdate(req, res) {
    ketnoi();
    try {
      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        req.body.newData
      );
      await Post.updateMany(
        { username: req.body.username },
        { username: req.body.newData.username }
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json("read fail");
    }
  }
}
export default Controller;
