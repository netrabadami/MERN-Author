const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlenght:[3,"Author name must be atleast 3 characters long"]
    }
},{timestamp:true});

module.exports.Author = mongoose.model("Author",AuthorSchema);