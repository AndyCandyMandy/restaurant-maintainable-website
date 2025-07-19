"use strict"  

const express = require("express");
const app = express.Router();
const con = require("../db"); 


// News endpoint: Accepts a news value and creates a data/time value to insert into the newsContent table 
// (If the items in the table exceed 6, remove the oldest item then add in the new item. Else add in the new item.)
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


        // Inline function that adds the news item into the table
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

// News endpoint: Returns all the news items from the newsContent table
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