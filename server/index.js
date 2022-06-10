const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const routesHandler = require("./routes/handler.js");
const path = require("path");
 
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
