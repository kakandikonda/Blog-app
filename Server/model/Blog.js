const mongoose = require("mongoose");

const Blog = new mongoose.Schema({
    Title: {type: String, required: true},
    Description: {type: String, required: true},
    Author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: {type: String, required: true}
    },
    Collection: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Collection",
            required: true
        },
        name: {type: String, required: true}
    },
    Likes: {type: Number, default: 0}
}, {collection: "blog-data"});

module.exports = mongoose.model("Blog", Blog)