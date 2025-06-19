

function AdminDisplayMenu({ categories, menuItems }) { 


    return ( 
        <> 
            <h1>Edit Menu</h1>

            <div>
                {categories.map((categoryData) => (
                    <div key={categoryData.id}>
                        <h3>{categoryData.categoryName}</h3>

                        <div> 
                            {menuItems.filter((menuItem) => menuItem.itemCategory === categoryData.categoryName).map((menuItemData) => ( 
                                <div key={menuItemData.id}>
                                    <p>{menuItemData.itemName}</p> 
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