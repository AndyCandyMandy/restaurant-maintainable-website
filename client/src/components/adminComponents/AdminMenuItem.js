import { useState } from "react"; 

import "./AdminMenuItem.css"; 

function AdminMenuItem({ categories, updateMenuItem, error }) { 
    const [menuItemCategory, setMenuItemCategory] = useState(""); 
    const [menuItemName, setMenuItemName] = useState(""); 
    const [menuItemPrice, setMenuItemPrice] = useState(""); 
    const [menuItemDesc, setMenuItemDesc] = useState(""); 

    const submitMenuItem = async (e) => {  
        e.preventDefault();

        const menuItemData = { menuItemCategory, menuItemName, menuItemPrice, menuItemDesc };  
        try {
            const response = await fetch("http://localhost:5000/api/auth/addMenuItem", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(menuItemData),
            });
            const result = await response.json(); 

            if (response.ok) {
                console.log("Submitting menu item was successful."); 
                updateMenuItem();
            }
            else {
                console.log("Failed submitting menu item", result.error);
            }
        } catch (error) {
            console.error("Failed to post menu item to database:", error);
        }
    };


    return ( 
        <form className="adminMenuContent" style={{ marginBottom: "1rem" }} onSubmit={submitMenuItem}>
            <h3 style={{ margin: "2rem 0 0" }}>Add menu item:</h3> 

            <div className="menuNamePriceSection"> 
                <div> 
                    <select className="menuItemCategorySelector" defaultValue="" onChange={(e) => setMenuItemCategory(e.target.value)} required>
                        <option value="" disabled>Select an item category...</option>
                        
                        {categories.map((categoryData) => (
                            <option key={categoryData.id} value={categoryData.categoryName}>{categoryData.categoryName}</option>
                        ))}
                    </select>

                    <input className="menuItemTextEntry" type="text" placeholder="Input item name..." onChange={(e) => setMenuItemName(e.target.value)} required></input> 
                </div>
                

                <p>$<input className="menuItemTextEntry menuItemPriceInput" type="number" step=".01" placeholder="Input item price..." onChange={(e) => setMenuItemPrice(e.target.value)} required></input></p>
            </div>
            
            <textarea className="menuItemDescInput" placeholder="Input item description..." onChange={(e) => setMenuItemDesc(e.target.value)} required></textarea> 

            <div className="menuItemBtnContainer"> 
                <button className="menuItemBtn" type="submit">Submit</button> 
            </div>
            

            {error && <p style={{ color: "red" }}>{error}</p>}

        </form>   
    );
} 

export default AdminMenuItem;