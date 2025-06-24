import "./AdminDisplayMenu.css"; 

function AdminDisplayMenu({ categories, menuItems, updateMenuItem }) { 

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

            <div className="adminMenuContent"> 


                {categories.map((categoryData) => (
                    <div key={categoryData.id}>
                        <h3>{categoryData.categoryName}</h3>

                        <div> 

                            {menuItems.filter((menuItem) => menuItem.itemCategory === categoryData.categoryName).map((menuItemData) => ( 
                                <div key={menuItemData.id}>

                                    <form>
                                        <div className="itemViewHeader">  
                                            <p>{menuItemData.id}. <input type="text" defaultValue={menuItemData.itemName}></input></p>
                                            <p>$<input type="number" step="0.01" defaultValue={menuItemData.itemPrice}></input></p>
                                        </div> 

                                        <textarea className="itemViewDesc" defaultValue={menuItemData.itemDesc}></textarea>

                                        <button type="submit">Submit Edit</button> 
                                        <button type="button" onClick={() => deleteMenuItem(menuItemData.id)}>Delete Item</button>
                                    </form>
                                    
                                    <p>Item availability: <button onClick={() => toggleMenuItemStatus(menuItemData.id)}>{menuItemData.itemStatus ? "Available" : "Unavailable"}</button></p> 
                                    
                                </div>
                                
                            ))}

                        </div> 

                    </div>    
                ))}
            </div>

        </div>  
    );
} 

export default AdminDisplayMenu;