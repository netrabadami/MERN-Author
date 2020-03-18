const express = require("express");
const cors = require("cors");
const app = express();


require("./server/config/author.config")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require("./server/routes/author.routes")(app);

app.listen(8000,() => {
    console.log("Server is running on port 8000");
});
