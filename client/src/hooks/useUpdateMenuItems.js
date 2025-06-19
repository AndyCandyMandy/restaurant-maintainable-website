import { useEffect, useState, useCallback  } from "react"; 

export const useUpdateMenuItems = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [error, setError] = useState(null);


    const updateMenuItem = useCallback (async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/allMenuItemData");
            const data = await response.json();

            if (data.success) {
                setMenuItems(data.data); 
            } 
            else {
                setError("Failed to load menu item.");
            }
        } catch (error) {
            setError(error.message);
        }
    }, []);


    useEffect(() => {
        updateMenuItem();
    }, [updateMenuItem]);


    return { menuItems, updateMenuItem, error };
};