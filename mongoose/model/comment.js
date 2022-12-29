const Comment = require ("mongoose")
const Schema= mongoose.Schema
const model = mongoose.models;

const CommentSchema = new Schema({
    message:{type:String},
    owner:{type:String},
    post:{type:String},
})

const Comment= model("comment", CommentSchema)

module.exports= Comment;