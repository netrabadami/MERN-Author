const AuthorController = require("../controllers/author.controller")

module.exports = app =>{

    app.post("/api/new",AuthorController.createAuthor);
    app.get("/api", AuthorController.getAll);
    app.get("/api/:id",AuthorController.getOne);
    app.put("/api/:id", AuthorController.updateAuthor);
    app.delete("/api/:id", AuthorController.deleteAuthor);
}

