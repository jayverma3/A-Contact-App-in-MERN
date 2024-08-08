const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const Contactroute = require("./routes/contacts.routes.js");
const exp = require("constants");

const app = express();

//Assigning Ports
app.listen(3000, () => {
  console.log("Serv started on 3000");
});

//body - parser
app.use(bodyparser.json());

//adding middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//adding routes
app.use("/api/contacts", Contactroute);

//MongoDb Connection
mongoose
  .connect("mongodb://localhost:27017/Jay")
  .then(() => console.log("Connected To Mongodb"))
  .catch(() => console.log("Error Connecting to Db"));

//Static Files
//app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Dockher");
});
