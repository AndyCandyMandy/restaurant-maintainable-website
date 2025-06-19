import { useUpdateCategories } from "../../hooks/useUpdateCategories.js"; 

import "./AdminMenuItem.css"; 

function AdminMenuItem() { 
    const { categories } = useUpdateCategories();

    return ( 
        <form className="adminMenuContent">
            <h3>Add menu item:</h3> 

            <div className="menuNamePriceSection"> 
                <div> 
                    <select defaultValue="">
                        <option value="" disabled>"Select an item category..."</option>
                        
                        {categories.map((categoryData) => (
                            <option key={categoryData.id} value={categoryData.categoryName}>{categoryData.categoryName}</option>
                        ))}
                    </select>

                    <input type="text" placeholder="Input item name..."></input> 
                </div>
                

                <p>$<input type="text" placeholder="Input item price..."></input></p>
            </div>
            <textarea className="menuItemDescInput" placeholder="Input item description..."></textarea> 
            <button>Submit</button>
        </form>   
    );
} 

export default AdminMenuItem;