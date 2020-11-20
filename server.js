const express = require('express');
const mongoose = require('mongoose')
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port = 8000;

// get request body
app.use(express.json()); // instead body parser
app.use(cors());
app.use(cookieParser());


// connection of database
mongoose
  .connect(process.env.MONGODATABASECONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    // listen to port
    app.listen(port);
    console.log(`server is running on port ${port}`);
    console.log(`DB connected`);
  })
  .catch((err) => {
    console.log(err);
  });
// =========================================