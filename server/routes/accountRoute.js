"use strict"  

const express = require("express");
const app = express.Router(); 
const jwt = require("jsonwebtoken");
const con = require("../db");  

require("dotenv").config(); 

app.post("/loginAccount", async (req, res) => { 
    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(400).json({ success: false, error: "Both the username and password are required" });
    }

    try { 
        con.query("SELECT * FROM users WHERE userName = ?", [userName], async (err, results) => { 
            if (err) {
                console.error("Failed to login user:", err);
                return res.status(500).json({ success: false, error: "Database error" });
            } 

            if (results.length === 0) {
                return res.status(400).json({ success: false, error: "User could not be found in database" });
            }

            const users = results[0]; 
            if (password != users.password) { 
                return res.status(401).json({ success: false, error: "Invalid credentials provided." });
            }

            // Generate JWT Token
            const token = jwt.sign({ id: users.id, userName: users.userName, userType: users.accountType }, process.env.JWT_SECRET, { expiresIn: "1h" });

            return res.json({ success: true, token, user: { id: users.id, userName: users.userName, userType: users.accountType } });
        });

    } catch (error) {
        return res.status(500).json({ success: false, error: "Server error" });
    }
});


module.exports = app;