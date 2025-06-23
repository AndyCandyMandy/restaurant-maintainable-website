import { useState } from "react"; 

function AdminNews({ news, updateNews, error }) { 
    const [newsInsertValue, setNewsInsertValue] = useState(""); 

    const submitNews = async (e) => { 
        e.preventDefault();
        
        const newsData = { newsInsertValue }; 
        try { 
            const response = await fetch("http://localhost:5000/api/auth/addNews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newsData),
            }); 
            const result = await response.json(); 

            if (response.ok) {
                console.log("Submitting news value was successful."); 
                updateNews(); 
                setNewsInsertValue("");
            }
            else {
                console.log("Failed submitting news", result.error);
            }
        } catch (error) {
            console.error("Failed to post news value to database:", error);
        }
    }; 

    return ( 
        <>
        <h1>Announcement Setting</h1> 

        <form onSubmit={submitNews}>
            <input type="text" placeholder="Input announcement..." onChange={(e) => setNewsInsertValue(e.target.value)}></input>    
            <button type="submit">Post</button> 
            <button>Clear Display</button>
        </form>
        
        {error && <p style={{ color: "red" }}>{error}</p>}

        
        <p>Currently displayed announcement: {news.length > 0 && (news[0].newsText)}</p>
        
            
        </>
    );
} 

export default AdminNews;