const express = require("express");
const router = express.Router();
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

// router.get("/", async (req, res) => {
//     // try{
//     //     const blog = await Blog.find({Collection: req.params.cid})
//     //     if(blog){
//     //         res.json({status: "ok", blogs: blog, params: req.params.cid})
//     //     }
//     //     else{
//     //         res.json({ status: "ok", blogs: "none" })
//     //     }
//     // }
//     // catch (err){
//     //     res.json({ status: "error", error: err })
//     // }
//     res.send(req.params)
// })
  
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
        res.send({status: "err", err: "Blog doesnt exist"})
      }
      if(!blog){
        res.send({status: "err", err: "Unable to find Blog"})
      }
      else{
        res.send({status: "ok", blog: blog})
      }
    })
})

module.exports = router;