import { useState } from "react"; 

import { useUpdateCategories } from "../../hooks/useUpdateCategories.js"; 

import "./AdminCategory.css"; 

function AdminCategory() { 
    const [categoryInsertValue, setCategoryInsertValue] = useState(""); 
    const { categories, updateCategory, error } = useUpdateCategories();


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
                    <div className="categoryItem">
                        <p key={index}>{categoryData.id}. {categoryData.categoryName} </p> 

                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>    
                ))}
            </div>
            
        </div>
    );
} 

export default AdminCategory;