"use strict"  

const mysql = require('mysql2');

require("dotenv").config(); 

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}); 

con.connect(err => { 
    if (err) {
        console.error("MySQL connection failed:", err.stack);
        return;
    }
    console.log("MySQL connected successfully"); 


    // Creates the database if it doesn't exist then uses it in MySQL
    con.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, function (err, result) {
        if (err) throw err;
        console.log(" Database created");
    });
    con.query(`USE ${process.env.DB_NAME}`, function (err, result) {
        if (err) throw err;
        console.log(" Database selected")
    }) 


    // Creates the account/user table if it doesn't exist. If this needs to be done, it will also create and insert the admin account. 
    const sqlUsers = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, userName VARCHAR(255), password VARCHAR(255), accountType VARCHAR(255))"; 
    con.query(sqlUsers, async function (err, result) {
        if (err) {
            throw err;
        };
        console.log(" 'sqlUsers' table created");  

        // Hardcoded admin account, "AdminRockz". Would only make the account if the table never existed. 
        var account = "INSERT INTO users (userName, password, accountType) VALUES ('AdminRockz', 'admin_password', 'admin_account')"; 
        con.query(account, function(err, result) { 
            if (err) {
                console.error("Error: Admin account has not been inserted: ", err);
            } else {
                console.log("   Admin user account has been made and inserted ");
            }
        });
    });  

    // Creates the menuCategories table
    const sqlCategory = "CREATE TABLE IF NOT EXISTS menuCategories (id INT AUTO_INCREMENT PRIMARY KEY, categoryName VARCHAR(255))"; 
    con.query(sqlCategory, function (err, result) {
        if (err) {
            throw err; 
        };
        console.log(" 'menuCategories' table created");
    });

    // Creates the menuItems table
    const sqlItem = "CREATE TABLE IF NOT EXISTS menuItems (id INT AUTO_INCREMENT PRIMARY KEY, itemName VARCHAR(255), itemDesc VARCHAR(255), itemCategory VARCHAR(255), itemStatus BOOLEAN DEFAULT true, itemPrice DECIMAL(10, 2))";
    con.query(sqlItem, function (err, result) {
        if (err) {
            throw err; 
        };
        console.log(" 'menuItems' table created");
    });


}); 

module.exports = con;