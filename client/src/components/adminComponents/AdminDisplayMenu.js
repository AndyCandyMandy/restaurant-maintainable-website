import { useState, useEffect } from "react"; 

import "./AdminDisplayMenu.css"; 

function AdminDisplayMenu({ categories, menuItems, updateMenuItem }) { 
    const [searchBarContent, setSearchBarContent] = useState("");

    const [editMenuName, setEditMenuName] = useState({}); 
    const [editMenuPrice, setEditMenuPrice] = useState({}); 
    const [editMenuDesc, setEditMenuDesc] = useState({}); 

    useEffect(() => {
        const nameState = {}, priceState = {}, descState = {};
        menuItems.forEach((item) => {
            nameState[item.id] = item.itemName;
            priceState[item.id] = item.itemPrice;
            descState[item.id] = item.itemDesc;
        });
        setEditMenuName(nameState);
        setEditMenuPrice(priceState);
        setEditMenuDesc(descState);
    }, [menuItems]);

    
    const editMenuItem = async (e, id) => { 
        e.preventDefault();

        const menuItemName = editMenuName[id]; 
        const menuItemPrice = editMenuPrice[id]; 
        const menuItemDesc = editMenuDesc[id]; 
        if (!menuItemName || !menuItemPrice || !menuItemDesc) {
            console.log("Missing menu item name, price, or description fields.");
            return;
        } 

        const menuItemData = { id, menuItemName, menuItemPrice, menuItemDesc }; 
        try {
            const response = await fetch("http://localhost:5000/api/auth/editMenuItem", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(menuItemData),
            });
            const result = await response.json(); 

            if (response.ok) {
                console.log("Updating menu item was successful."); 
                updateMenuItem();
            }
            else {
                console.log("Failed updating menu item", result.error);
            }
        } catch (error) {
            console.error("Failed to patch menu item values to database:", error);
        }
    };

    const deleteMenuItem = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/auth/deleteMenuItem/${id}`, {
                method: "DELETE"
            }); 
            const result = await response.json(); 

            if (response.ok) {
                console.log("Submitting menu item id was successful."); 
                updateMenuItem();
            }
            else {
                console.log("Failed submitting menu item id", result.error);
            }
        } catch (error) {
             console.error("Failed to delete menu item:", error);
        }
    };

    const toggleMenuItemStatus = async (id) => {
        try { 
             const response = await fetch(`http://localhost:5000/api/auth/toggleMenuItemStatus/${id}`, {
                method: "PATCH"
            });
            const result = await response.json();

            if (response.ok) {
                console.log("Submitting menu item id was successful."); 
                updateMenuItem();
            }
            else {
                console.log("Failed submitting menu item id", result.error);
            }
        } catch (error) {
            console.error("Failed to toggle menu item status:", error);
        }
    };

    return ( 
        <div> 
            <h1>Edit Menu</h1>

            <div className="adminMenuContent" style={{ marginBottom: "1rem" }}> 

                {menuItems.length >= 1 && (
                    <input className="itemViewSearch" type="text" placeholder="Search for menu items..." value={searchBarContent} onChange={(e) => setSearchBarContent(e.target.value)}></input>
                )}

                {categories.length === 0 ? (
                    <div>
                        <h3>Menu is currently empty...</h3>
                    </div>
                ) : (
                    categories.map((categoryData) => (
                        <div key={categoryData.id}>
                            <h3>{categoryData.categoryName}</h3>


                            {menuItems.length === 0 ? (
                                <>
                                </>
                            ) : (
                                <div className="itemViewHolder"> 

                                    {menuItems.filter((menuItem) => menuItem.itemCategory === categoryData.categoryName && 
                                    menuItem.itemName.toLowerCase().includes(searchBarContent.toLowerCase())
                                    ).map((menuItemData) => ( 
                                        <div className="itemView" key={menuItemData.id}>

                                            <form onSubmit={(e) => editMenuItem(e, menuItemData.id)}>
                                                <div className="itemViewHeader">  
                                                    <p>{menuItemData.id}. <input type="text" value={editMenuName[menuItemData.id] || ""} onChange={(e) => setEditMenuName({...editMenuName, [menuItemData.id]: e.target.value})} required></input></p>
                                                    <p>$<input type="number" step="0.01" value={editMenuPrice[menuItemData.id] || ""} onChange={(e) => setEditMenuPrice({...editMenuPrice, [menuItemData.id]: e.target.value})} required></input></p>
                                                </div> 

                                                <textarea className="itemViewDesc" value={editMenuDesc[menuItemData.id] || ""} onChange={(e) => setEditMenuDesc({...editMenuDesc, [menuItemData.id]: e.target.value})} required></textarea>

                                                <button type="submit" disabled={
                                                    (editMenuName[menuItemData.id] ?? menuItemData.itemName) === menuItemData.itemName && 
                                                    (editMenuPrice[menuItemData.id] ?? menuItemData.itemPrice) === menuItemData.itemPrice && 
                                                    (editMenuDesc[menuItemData.id] ?? menuItemData.itemDesc) === menuItemData.itemDesc
                                                }>Submit Edit</button> 
                                                <button type="button" onClick={() => deleteMenuItem(menuItemData.id)}>Delete Item</button>
                                            </form>
                                            
                                            <p>Item availability: <button onClick={() => toggleMenuItemStatus(menuItemData.id)}>{menuItemData.itemStatus ? "Available" : "Unavailable"}</button></p> 
                                            
                                        </div>
                                        
                                    ))}

                                </div> 
                            )}
                        </div>    
                    ))
                )}
            </div>

        </div>  
    );
} 

export default AdminDisplayMenu;