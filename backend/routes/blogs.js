const express = require("express");

const router = express.Router();

const { getBlogs, createBlog, updateBlog, deleteBlog } = require("../controllers/blogController");

// GET all blogs
router.get("/", getBlogs);

// POST new blog
router.post("/create", createBlog);

// PUT a blog
router.put('/update/:id', updateBlog)

// DELETE a blog
router.delete("/delete/:id", deleteBlog);

module.exports = router;
