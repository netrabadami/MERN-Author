const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/authordb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

    .then(() => console.log("Database Established"))
    .catch(err => console.log("Something went wrong while connecting to DB",err))