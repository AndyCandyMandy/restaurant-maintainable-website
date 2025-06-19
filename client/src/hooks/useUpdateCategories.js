import { useEffect, useState, useCallback  } from "react";

export const useUpdateCategories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);


    const updateCategory = useCallback (async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/allCategoryData");
            const data = await response.json();

            if (data.success) {
                setCategories(data.data);
            } 
            else {
                setError("Failed to load menu categories.");
            }
        } catch (error) {
            setError(error.message);
        }
    }, []);


    useEffect(() => {
        updateCategory();
    }, [updateCategory]);


    return { categories, updateCategory, error };
};