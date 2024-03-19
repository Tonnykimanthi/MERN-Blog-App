require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogs");
const cors = require("cors");

// middleware
app.use(express.json()); // converts all requests(body) to json
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/blogs", blogRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // listening to request
    app.listen(process.env.PORT, () => {
      console.log(`Listening to port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
