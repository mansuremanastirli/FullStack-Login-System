const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./router")

const app = express();

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


dotenv.config()

const PORT = process.env.PORT || 5000

app.use("/users" , routes)
 
app.listen(PORT , () => {
    console.log("Server Dinleniyor")
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("Connected To Database"))
    .catch((error) => console.log(error))
})
 
