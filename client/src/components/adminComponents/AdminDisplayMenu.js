import "./AdminDisplayMenu.css"; 

function AdminDisplayMenu({ categories, menuItems, updateMenuItem }) { 

    const ToggleMenuItemStatus = async (id) => {
        const menuItemId = { id }; 

        try { 
             const response = await fetch("http://localhost:5000/api/auth/toggleMenuItemStatus", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(menuItemId),
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

                                        <textarea className="itemViewDesc">{menuItemData.itemDesc}</textarea>

                                        <button>Submit Edit</button> 
                                        <button>Delete Item</button>
                                    </form>
                                    
                                    <p>Item availability: <button onClick={() => ToggleMenuItemStatus(menuItemData.id)}>{menuItemData.itemStatus ? "Available" : "Unavailable"}</button></p> 
                                    
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