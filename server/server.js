"use strict" 

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 5000;
const HOST = "0.0.0.0";
const app = express(); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 

// Connects the newsRoute.js file to the project. It contains endpoints pertaining to the news table.
const newsRoute = require("./routes/newsRoute"); 
app.use("/api/auth", newsRoute); 

// Connects the menuRoute.js file to the project. It contains endpoints pertaining to the menu item table.
const menuRoute = require("./routes/menuRoute"); 
app.use("/api/auth", menuRoute); 

// Connects the accountRoute.js file to the project. It contains endpoints pertaining to the users table.
const accountRoute = require("./routes/accountRoute"); 
app.use("/api/auth", accountRoute); 

// Listen on port
app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});