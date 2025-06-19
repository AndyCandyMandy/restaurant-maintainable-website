"use strict"  

const express = require("express");
const app = express.Router();
const con = require("../db"); 

app.post("/addMenuCategory", async (req, res) => { 
    const categoryName = req.body.categoryInsertValue;;

    try {
        let table = "INSERT INTO menuCategories (categoryName) VALUES (?)"; 
        con.query(table, [categoryName], function (err, result) {
            if (err) {
                console.error("Failed to insert catagory:", err);
                return res.status(500).json({ success: false, error: "Database error" });
            }

            let categoryID = result.insertId; 
            return res.json({ success: true, id: categoryID });;
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: "Error from inserting category!" });
    }
}); 


app.post("/addMenuItem", async (req, res) => { 
    const {  menuItemCategory, menuItemName, menuItemPrice, menuItemDesc } = req.body; 
    let menuItemStatus = true;

    try { 
      let table = "INSERT INTO menuItems (itemName, itemDesc, itemCategory, itemStatus, itemPrice) VALUES (?, ?, ?, ?, ?)"; 
      con.query(table, [menuItemName, menuItemDesc, menuItemCategory, menuItemStatus, menuItemPrice], function (err, result) {
            if (err) {
                console.error("Failed to insert menu item:", err);
                return res.status(500).json({ success: false, error: "Database error" });
            }

            let menuID = result.insertId; 
            return res.json({ success: true, id: menuID });;
        }); 
    } catch (error) {
      return res.status(500).json({ success: false, error: "Error from inserting menu item!" });
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


app.get("/allMenuItemData", (req, res) => {
  con.query("SELECT * FROM menuItems", function (err, result) {
    if (err) {
      console.error("Database query failed:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
    return res.json({ success: true, data: result });
  });
});


module.exports = app;