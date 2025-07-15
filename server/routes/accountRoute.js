"use strict"  

const express = require("express");
const app = express.Router();
const con = require("../db");  


app.post("/loginAccount", async (req, res) => { 
    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(400).json({ success: false, error: "Both the username and password are required" });
    }

    try {

    } catch (error) {
        
    }
});


module.exports = app;