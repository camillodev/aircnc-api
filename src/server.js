const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rafaelcamillo:4CarpeDiem!@general-7dtp4.mongodb.net/omnistack?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const app = express();

app.use(express.json());
app.use(routes);

app.listen(5000);
