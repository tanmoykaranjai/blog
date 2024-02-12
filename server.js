import express from "express";
import mongoose from "mongoose";

import path from "path";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = 5000 || 3000;
const __dirname = path.resolve();

// MongoDb Connect
mongoose.connect("mongodb+srv://karanjaitanmoy:ID3gEzryG5RYK0DZ@cluster0tanmoy.yd03fbp.mongodb.net/?retryWrites=true&w=majority");

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const blogPost = mongoose.model("blogPost", blogPostSchema);

app.get("/api/posts", async (req, res) => {
  const posts = await blogPost.find();
  res.json(posts);
});

app.post("/api/posts", async (req, res) => {
  const { title, content } = req.body;
  const newPost = new blogPost({ title, content });
  await newPost.save();
});

app.use(express.static(path.join(__dirname, "../frontend")));

app.listen(port, () => {
  console.log(
    `Server is running on port http://localhost:${process.env.PORT}/`
  );
});
