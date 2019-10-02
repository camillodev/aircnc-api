const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require('cors');

mongoose.connect(
  "mongodb+srv://rafaelcamillo:4CarpeDiem!@general-7dtp4.mongodb.net/omnistack?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const app = express();

app.use(cors('http://localhost:3000'))
app.use(express.json());
app.use(routes);

app.listen(5000);
