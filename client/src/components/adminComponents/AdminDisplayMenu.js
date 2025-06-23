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
        <> 
            <h1>Edit Menu</h1>

            <div> 


                {/* 
                <div>
                    <h3>Drinks</h3> 
                    <div>
                        <div>
                            <form> 
                                 
                                <p>1. <input type="text" placeholder="Juice"></input></p> 
                                <p>$<input type="text" placeholder="2.95" value="2.95"></input></p> 

                                <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non.</textarea>
                                
                                <button>Submit Edit</button> 
                                <button>Delete</button>
                            </form>
                            

                            <p>Item availability: True</p>
                            <button>Toggle Status</button>
                        </div>
                    </div>
                </div>
*/}



                {categories.map((categoryData) => (
                    <div key={categoryData.id}>
                        <h3>{categoryData.categoryName}</h3>

                        <div> 

                            {menuItems.filter((menuItem) => menuItem.itemCategory === categoryData.categoryName).map((menuItemData) => ( 
                                <div key={menuItemData.id}>
                                    <p>{menuItemData.id}. {menuItemData.itemName}</p>  
                                    <p>${menuItemData.itemPrice}</p> 
                                    <p>{menuItemData.itemDesc}</p> 


                                    <p>Item availability: <button onClick={() => ToggleMenuItemStatus(menuItemData.id)}>{menuItemData.itemStatus}</button></p> 
                                    
                                </div>
                                
                            ))}

                        </div> 

                    </div>    
                ))}
            </div>

        </>  
    );
} 

export default AdminDisplayMenu;