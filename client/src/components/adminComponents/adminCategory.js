import { useState } from "react"; 

import "./AdminCategory.css"; 

function AdminCategory({ categories, updateCategory, updateMenuItem, error }) { 
    const [categoryInsertValue, setCategoryInsertValue] = useState(""); 

    const [editCategoryValue, setEditCategoryValue] = useState({}); 

    const submitCategory = async (e) => { 
        e.preventDefault(); 

        const categoryData = { categoryInsertValue }; 
        try { 
            const response = await fetch("http://localhost:5000/api/auth/addMenuCategory", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(categoryData),
            });
            const result = await response.json(); 

            if (response.ok) {
                console.log("Submitting category value was successful."); 
                updateCategory();
            }
            else {
                console.log("Failed submitting catagory", result.error);
            }

        } catch (error) {
            console.error("Failed to post category value to database:", error);
        }
    };

    const editCategory = async (e, id) => { 
        e.preventDefault();

        const categoryName = editCategoryValue[id]; 
        if (!categoryName) {
            console.log("No edited category name provided.");
            return;
        }

        const categoryData = { id, categoryName }; 
        try { 
            const response = await fetch("http://localhost:5000/api/auth/editMenuCategory", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(categoryData),
            });
            const result = await response.json();

            if (response.ok) {
                console.log("Updating category was successful."); 
                updateCategory(); 
                updateMenuItem();
            }
            else {
                console.log("Failed updating category", result.error);
            }
        } catch (error) {
            console.error("Failed to patch category value to database:", error);
        }
    };

    const deleteCategory = async (id) => { 
        try { 
             const response = await fetch(`http://localhost:5000/api/auth/deleteCategory/${id}`, {
                method: "DELETE"
            });
            const result = await response.json();

            if (response.ok) {
                console.log("Deleting menu category was successful."); 
                updateCategory();
            }
            else {
                console.log("Failed submitting menu category id", result.error);
            }
        } catch (error) {
            console.error("Failed to delete menu category from menu:", error);
        }
    };


    return ( 
        <div className="adminMenuContent">
            <h3>Menu Category</h3> 

            <form onSubmit={submitCategory}>
                <input type="text" placeholder="Input menu category..." onChange={(e) => setCategoryInsertValue(e.target.value)} required></input> 
                <button type="submit">Submit</button>
            </form>  

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div>
                {categories.map((categoryData, index) => (
                    <form className="categoryItem" onSubmit={(e) => editCategory(e, categoryData.id)} key={categoryData.id}>
                        <p>{categoryData.id}. <input type="text" defaultValue={categoryData.categoryName} onChange={(e) => setEditCategoryValue({...editCategoryValue, [categoryData.id]: e.target.value})} required></input></p> 
                        
                        <div>
                            <button type="submit" disabled={(editCategoryValue[categoryData.id] ?? categoryData.categoryName) === categoryData.categoryName}>Edit</button>
                            <button type="button" onClick={() => deleteCategory(categoryData.id)}>Delete</button>
                        </div>
                    </form>    
                ))}
            </div>
            
        </div>
    );
} 

export default AdminCategory;