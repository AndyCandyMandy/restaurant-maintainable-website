"use strict"  

const express = require("express");
const app = express.Router();
const con = require("../db"); 

app.post("/addMenuCategory", async (req, res) => { 
    const categoryName = req.body.categoryInsertValue;;

    try {
        var table = "INSERT INTO menuCategories (categoryName) VALUES (?)"; 
        con.query(table, [categoryName], function (err, result) {
            if (err) {
                console.error("Failed to insert catagory:", err);
                return res.status(500).json({ success: false, error: "Database error" });
            }

            var categoryID = result.insertId; 
            return res.json({ success: true, id: categoryID });;
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: "Error from inserting category!" });
    }
});


app.get("/allCategoryData", (req, res) => {
  con.query("SELECT * FROM menuCategories", function (err, result) {
    if (err) {
      console.error("Database query failed:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
    return res.json({ success: true, data: result });
  });
});


module.exports = app;