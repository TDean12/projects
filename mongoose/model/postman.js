const mongoose = require('mongoose')
const User = require('./user')
const model = mogoose.model
const Schema = mongoose.Schema; 

const PostSchema = new Schema ({
    text : { type : String},
    link : { type : String},
    tag : { type : Array},
    likes : { type : Number, default:0},
    publishDate: { type : Date, default:new Date()},
    owner : { type : String},
}) 

const Post = model("post", PostSchema)

module.exports=Post;