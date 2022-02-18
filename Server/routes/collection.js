const express = require("express");
const router = express.Router();


const Collection = require("../model/Collection");
const User = require("../model/User")

// ROUTES: /collections/

const Authenticate = (req, res, next) => {
    if(!req.session.user){
      res.send({status: "err", message: "Login Required"});
    }
    else{
      next()
    }
}

// getting collections
router.get("/", async (req,res) => {
    // Collection.find({}, (err, found) => {
    //     if(err) throw err
    //     else{
    //         res.send({status: "ok", collections: found})
    //     }
        
    // });
    try{
        const c = await Collection.find({});
        if(c){
            res.send({status: "ok", collections: c})
        }
        else{
            res.send({status: "ok", collections: "none"})
        }
    }catch (err){
        res.json({ status: "error", error: err })
    }
    
    
});

// creating a collections
router.post("/", Authenticate, (req, res) => {
    const { name, description } = req.body;
    Collection.create({name, description}, (err, newC) => {
        if (err){
            return res.send({status: "error", error: err})
        }
        else{
            newC.Users.push({_id: req.session.user.id, username: req.session.user.username })
            newC.save();
            User.findById(req.session.user.id, (err, user) => {
                if(err){ return res.send({status: "error", error: err}) }
                else{
                    user.FC.push(newC._id)
                    user.save()
                }
            })
        }
    });
    return res.send({status: "ok"})
})

// collection id
router.get("/:id", async (req, res) => {
    // res.send({collection: req.params.id})
    try{
        const collection = await Collection.findById(req.params.id);
        if(collection){
            const blogs = await collection.populate("Blogs");
            const send = {name: collection.name, description: collection.description};
            res.send({status: "ok", collection: send, blogs: blogs});
        }
        else{
            res.send({status: "err", err: "error"});
        }
    }
    catch{
        res.send({status: "err", err: err})
    }
    
});

module.exports = router;