import posts from "./posts.js";
import post from "./post.js";
import auth from "./auth.js";

function Main(app) {
  app.use("/api/posts", posts);
  app.use("/api/post", post);
  app.use("/api/auth", auth);
}

export default Main;
