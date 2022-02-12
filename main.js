import express from "express";
import cors from "cors";
import Main from "./routes/index.js";
import multer from "multer";
import { unlink } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import Post from "./models/post.js";

const app = express();
const port = 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//Config
app.use(express.json());
app.use(cors());
app.use("/static", express.static("public"));
app.use(express.static(path.join(__dirname, "build")));

//postImg Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/postImg");
  },
  filename: function (req, file, cb) {
    console.log(req.body.filename);
    cb(null, req.body.filename);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("postPhotoFile"), (req, res) => {
  res.status(200).json("have been uploaded");
});

//proflieImg Storage
const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/profileImg");
  },
  filename: function (req, file, cb) {
    console.log(req.body.filename);
    cb(null, req.body.filename);
  },
});
const upload2 = multer({ storage: storage2 });
app.post(
  "/api/profileImg/upload",
  upload2.single("profilePhoto"),
  (req, res) => {
    res.status(200).json("have been uploaded");
  }
);

//Main
app.post("/api/auth/update", async (req, res, next) => {
  if (req.body.newData.oldPhoto && req.body.newData.oldPhoto !== "default.jpg")
    await unlink(`./public/profileImg/${req.body.newData.oldPhoto}`);
  next();
});
app.post("/api/post/delete", async (req, res, next) => {
  const postPhotoUrl = (await Post.findById(req.body.id)).photo;
  await unlink(
    `./public/postImg/${postPhotoUrl.substring(
      postPhotoUrl.lastIndexOf("/") + 1
    )}`
  );
  next();
});

Main(app);
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`server is running on port 5000`);
});
