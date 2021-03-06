const config = require("./utils/config");
var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const blogsRouter = require("./controllers/blogs");
const middleware = require("./utils/middleware");
const mongoose = require("mongoose");

console.log("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());

app.use(express.static("build"));
app.use(bodyParser.json());
app.use(middleware.logger);

app.use("/api/blogs", blogsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
