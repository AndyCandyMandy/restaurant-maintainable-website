"use strict"  

const express = require("express");
const app = express.Router();
const con = require("../db"); 

app.post("/addNews", async (req, res) => { 
    const newsData = req.body.newsInsertValue;
    var date_time = new Date();

    try {
      con.query("SELECT * FROM newsContent ORDER BY lastUsed ASC", function (err, result) { 
         if (err) {
              console.error("Failed to read news data:", err);
              return res.status(500).json({ success: false, error: "Database error" });
          } 

          if (result.length >= 6) { 
            const oldestId = result[0].id;
            con.query("DELETE FROM newsContent WHERE id = ?", [oldestId], function (err, result) { 
              if (err) {
                console.error("Failed to delete oldest news item:", err);
                return res.status(500).json({ success: false, error: "Database error during deletion" });
              }

              insertNews();
            });
          } 
          else {
            insertNews();
          }


        function insertNews() { 
          con.query("INSERT INTO newsContent (newsText, lastUsed) VALUES (?, ?)", [newsData, date_time], function (err, result) {
            if (err) {
                console.error("Failed to insert news data:", err);
                return res.status(500).json({ success: false, error: "Database error" });
            }

            let newsID = result.insertId; 
            return res.json({ success: true, id: newsID });;
          });
        };
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Error from inserting news data!" });
    }
}); 

app.get("/allNewsData", (req, res) => {
  con.query("SELECT * FROM newsContent ORDER BY id DESC;", function (err, result) {
    if (err) {
      console.error("Database query failed:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
    return res.json({ success: true, data: result });
  });
}); 

module.exports = app;