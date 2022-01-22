const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const jwt = require("jsonwebtoken")

app.use(
    cors({
      origin: "http://localhost:3000", // <-- location of the react app were connecting to
      credentials: true,
    })
  );app.use(express.json())

// DATA BASE
mongoose.connect("mongodb://localhost:27017/Blog-App")

//MODELS
const Blog = require("./model/Blog");
const User = require("./model/User");

// ROUTES
const indexRoutes = require("./routes/index");
const blogRoutes = require("./routes/blog");
const collectionRoutes = require("./routes/collection")


app.use(session({
  secret: 'secrettexthere',
  resave: false,
  saveUninitialized: true
}));

  //----------------------------------------- END OF MIDDLEWARE---------------------------------------------------
  
// Routes


app.use(indexRoutes);
app.use("/blog", blogRoutes);
app.use("/collections", collectionRoutes)



app.listen(5000, () => {
    console.log("server is running on port: 5000")
})