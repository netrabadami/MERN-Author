const { Author } = require("../models/author.model")

module.exports.createAuthor = (req,res) =>{
    const {name} = req.body;
    Author.create({name})
     .then(author =>res.json(author))
     .catch(err => res.json(err))
}

module.exports.getAll = (req,res) => {
    Author.find()
    .then(allAuthors =>res.json(allAuthors))
    .catch(err => res.json(err))
}

module.exports.getOne = (req,res) => {
    Author.findOne({_id:req.params.id})
    .then(author => res.json(author))
    .catch(err => res.json(err))
}

module.exports.updateAuthor = (req,res) =>{
    Author.findOneAndUpdate({_id:req.params.id},req.body,{runValidators:true})
    .then(updateProduct => res.json(updateProduct))
    .catch(err => res.json(err))
}

module.exports.deleteAuthor = (req,res) => {
    Author.deleteOne({_id:req.params.id})
    .then(deleteAuthor => res.json(deleteAuthor))
    .catch(err => res.json(err))
}