const express = require("express");

const router = express.Router();

const {
  getBlogs,
  getSingleBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

// GET all blogs
router.get("/", getBlogs);

// GET single blog
router.get("/:id", getSingleBlog);

// POST new blog
router.post("/create", createBlog);

// PUT a blog
router.put("/update/:id", updateBlog);

// DELETE a blog
router.delete("/delete/:id", deleteBlog);

module.exports = router;
