import { useEffect, useState, useCallback  } from "react";

export const useUpdateNews = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);


    const updateNews = useCallback (async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/allNewsData");
            const data = await response.json();

            if (data.success) {
                setNews(data.data);
            } 
            else {
                setError("Failed fetch news data.");
            }
        } catch (error) {
            setError(error.message);
        }
    }, []);


    useEffect(() => {
        updateNews();
    }, [updateNews]);


    return { news, updateNews, error };
};