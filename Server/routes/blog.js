const express = require("express");
const router = express.Router();
const User = require("../model/User");
const Blog = require("../model/Blog");
const Collection = require("../model/Collection");
const Authenticate = (req, res, next) => {
    if(!req.session.user){
      res.send({status: "err", message: "Login Required"});
    }
    else{
      next()
    }
}

// ROUTES: /blog

// THINGS TO ADD
/* 
1) make a route to fetch all blogs in a collection
2) make sure getting a specific route is working
3) make a route to get all blogs made by a user
4) make update routes
5) make delete routes
*/

router.get("/feed", async (req, res) => {
    if(req.session.user){
      User.findById(req.session.user.id, async (err, user) => {
        if (err){
          return res.send({status: "err"});
        }
        if(user){
          const blogs = await Collection.find({_id: {$all: user.FC}}).populate("Blogs");
          if(blogs){
            res.send({status: "ok", blogs: blogs});
          }
          else{
            return res.send({status: "err"})
          }
        }
      });
    }
    else{
      Blog.find({}, (err, found) => {
        if (err){
          return res.send({status: "err"});
        }
        if(found){
          return res.send({status: "ok", blogs: found})
        }
      });
    }
})
  
router.post("/", Authenticate, async (req, res) => {
  Collection.findById(req.body.Collection, (err, found) => {
    if (found) {
      const blog = {
        Title: req.body.Title,
        Description: req.body.Description, 
        Author: req.session.user, 
        Collection: {
          _id: found._id,
          name: found.name
        }
      };
      Blog.create(blog, (err, created) => {
        if (err){
          return res.send({status: "err", err: err});
        }
        else{          
          found.Blogs.push(created._id);
          found.save();
          return res.send({status: "ok"})
        }
      })
    }
    else{
      return res.send({status: "err", err: err})
    }
    
  });
})
  
router.get("/:id", (req, res) => {
    Blog.findById({ _id: req.params.id }, async (err, blog) => {
      if (err){
        return res.send({status: "err", err: "Blog doesnt exist"})
      }
      if(!blog){
        return res.send({status: "err", err: "Unable to find Blog"})
      }
      else{
        return res.send({status: "ok", blog: blog})
      }
    })
})

module.exports = router;