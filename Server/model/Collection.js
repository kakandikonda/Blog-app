const mongoose = require("mongoose")

const Collection = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String},
    Users: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: {type: String, required: true}
        }
    ],
    Blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog"
        }
    ]
});

module.exports = mongoose.model("Collection", Collection);