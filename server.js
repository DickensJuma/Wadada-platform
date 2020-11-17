const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const logger = require('morgan');

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors())
app.use(logger('dev'));
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = 'mongodb+srv://dickens:ugPUWKvrnAuiTs8@cluster0.yeyah.mongodb.net/wadada?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true ,useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//Server static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.use(express.static(__dirname + "/src"));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//can just put number of port you want to use locally, but bc I'm using heroku, must incluse "process.env.PORT"
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
