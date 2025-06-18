import { useEffect, useState } from "react";

function AdminCategory() { 
    const [categoryInsertValue, setCategoryInsertValue] = useState(""); 
    const [categoryValue, setCategoryValue] = useState([]);


    useEffect(() => {
        
        updateCategory();
        
    }, []);

    const updateCategory = async () => {
        try {
        const response = await fetch("http://localhost:5000/api/auth/allCategoryData");

        const data = await response.json();

        if (data.success) {
            setCategoryValue(data.data);
        }
        } catch (error) {
            console.error("Error fetching categories: ", error);
        }
    };

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

            <ul>
                {categoryValue.map((categoryData, index) => (
                    <li key={index}>{categoryData.id} {categoryData.categoryName}</li>
                ))}
            </ul>
            
        </div>
    );
} 

export default AdminCategory;