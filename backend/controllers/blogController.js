const Blog = require("../models/blogModel");
const { mongoose } = require("mongoose");

// Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error.message);
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  const { author, title, content } = req.body;

  // add blog to db
  try {
    const blog = await Blog.create({ author, title, content });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndUpdate(id, req.body)
    res.status(200).json(blog)
  } catch (error) {
    console.log("Update failed");
    res.status(400).json({ error: error.message });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such blog" });
  }

  const blog = await Blog.findByIdAndDelete(id);

  if (!blog) {
    return res.status(400).json({ error: "No such blog" });
  }

  res.status(200).json(blog);
};

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
