"use strict"  

const express = require("express");
const app = express.Router();
const con = require("../db"); 


app.post("/addMenuCategory", async (req, res) => { 
    const categoryName = req.body.categoryInsertValue;

    try {
      const checkTable = "SELECT * FROM menuCategories WHERE categoryName = ?";
      con.query(checkTable, [categoryName], (checkErr, checkResult) => { 
        if (checkErr) {
          console.error("Error checking category:", checkErr);
          return res.status(500).json({ success: false, error: "Database error during category check" });
        }

        if (checkResult.length > 0) {
          return res.status(409).json({ success: false, error: "Category already exists" });
        }


        const table = "INSERT INTO menuCategories (categoryName) VALUES (?)"; 
        con.query(table, [categoryName], function (err, result) {
          if (err) {
              console.error("Failed to insert catagory:", err);
              return res.status(500).json({ success: false, error: "Database error" });
          }

          let categoryID = result.insertId; 
          return res.json({ success: true, id: categoryID });
        });
      });

    } catch (error) {
        return res.status(500).json({ success: false, error: "Error from inserting category!" });
    }
});  


app.patch("/editMenuCategory", async (req, res) => { 
  const { id, categoryName } = req.body;
  if (!id || !categoryName) {
    return res.status(400).json({ success: false, error: "Missing category ID and or category data." });
  } 

  try { 
    con.query("SELECT categoryName FROM menuCategories WHERE id = ?", [id], (err, result) => { 
      if (err) {
        return res.status(500).json({ success: false, error: "Database error retrieving original category." });
      }

      if (result.length === 0) {
        return res.status(404).json({ success: false, error: "Menu category not found using id." });
      } 
      const originalCategoryName = result[0].categoryName; 

      const menuItemTable = "UPDATE menuItems SET itemCategory = ? WHERE itemCategory = ?"; 
      con.query(menuItemTable, [categoryName, originalCategoryName], (err, result) => { 
        if (err) { 
          console.error("Update menuItem category error:", err);
          return res.status(500).json({ success: false, error: "Error updating menu item categories." });
        }  


        const table = "UPDATE menuCategories SET categoryName = ? WHERE id = ?"; 
        con.query(table, [categoryName, id], function(err, result) { 
          if (err) { 
            return res.status(500).json({ success: false, error: "Database Error from updating menu category!" });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, error: "Menu category not found" });
          } 

          return res.json({ success: true, message: "Menu category updated successfully" });
        });
      });
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Error from updating menu category!" });
  }

});



app.post("/addMenuItem", async (req, res) => { 
    const {  menuItemCategory, menuItemName, menuItemPrice, menuItemDesc } = req.body; 
    let menuItemStatus = true;

    try { 
      const table = "INSERT INTO menuItems (itemName, itemDesc, itemCategory, itemStatus, itemPrice) VALUES (?, ?, ?, ?, ?)"; 
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


app.patch("/editMenuItem", async (req, res) => { 
  const { id, menuItemName, menuItemPrice, menuItemDesc } = req.body; 
  if (!id || !menuItemName || !menuItemPrice || !menuItemDesc) {
    return res.status(400).json({ success: false, error: "Missing menu item ID, name, price and or desc data." });
  }  

  try {
    const table = "UPDATE menuItems SET itemName = ?, itemPrice = ?, itemDesc = ? WHERE id = ?"; 
    con.query(table, [menuItemName, menuItemPrice, menuItemDesc, id], (err, result) => { 
      if (err) {
        console.error("Failed to update menu item:", err);
        return res.status(500).json({ success: false, error: "Database error" });
      } 

      return res.json({ success: true, message: "Menu item updated successfully" });
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Error from updating menu item!" });
  }

});


app.patch("/toggleMenuItemStatus/:id", async (req, res) => { 
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ success: false, error: "Missing menu item ID" });
  }

  try {
    const table = "UPDATE menuItems SET itemStatus = NOT itemStatus WHERE id = ?";
    con.query(table, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, error: "Database error from toggling menu item status" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, error: "Menu item not found" });
        }

        return res.json({ success: true, message: "Menu status toggled successfully" });
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Error from updating menu status!" });
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


app.delete("/deleteCategory/:id", (req, res) => { 
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ success: false, error: "Category ID is required" });
  } 

  con.query("SELECT categoryName FROM menuCategories WHERE id = ?", [id], (err, result) => { 
    if (err || result.length === 0) {
      return res.status(404).json({ success: false, error: "Category not found" });
    }

    const categoryName = result[0].categoryName;

    con.query("DELETE FROM menuItems WHERE itemCategory = ?", [categoryName], (deleteMenuItemErr) => { 
      if (deleteMenuItemErr) {
        return res.status(500).json({ success: false, error: "Failed to delete menu items from the category" });
      } 


      con.query("DELETE FROM menuCategories WHERE id = ?", [id], (deleteCategoryErr) => { 
        if (deleteCategoryErr) {
          return res.status(500).json({ success: false, error: "Failed to delete category" });
        }

        return res.json({ success: true, message: "Category and its menu items deleted successfully" });
      }); 

    }); 

  }); 

});


app.delete("/deleteMenuItem/:id", (req, res) => { 
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ success: false, error: "Menu item ID is required" });
  } 

  con.query("DELETE FROM menuItems WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error deleting menu item:", err);
      return res.status(500).json({ success: false, error: "Database error when deleting menu item" });
    }
    return res.json({ success: true, message: "Menu item deleted successfully!" });
  });
});

module.exports = app;