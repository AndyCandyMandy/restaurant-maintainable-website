import { useState } from "react"; 

import "./AdminNews.css"; 

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

            <form className="newsFormEntry" onSubmit={submitNews}>
                <input className="newsTextEntry" type="text" placeholder="Input announcement..." onChange={(e) => setNewsInsertValue(e.target.value)}></input>   
                <div className="newsBtnEntryBox">
                    <button className="newsBtnEntry" style={{ marginRight:"5px" }} type="submit">Post</button> 
                    <button className="newsBtnEntry">Clear</button>
                </div> 
            </form>
            
            {error && <p style={{ color: "red" }}>{error}</p>}

            
        
            {news.length === 0 ? ( 
                <table> 
                    <tr>
                        <th style={{ width:"60vw" }}>Annoucement Content</th> 
                        <th style={{ width:"40vw" }}>Submission Time</th>
                    </tr>  
                    <tr className="newsEmptyDisplay"> 
                        <td colSpan="2">There are no past annoucements...</td>
                    </tr>
                    
                </table>
            ) : (   
                <> 
                    <p>Currently displayed announcement: {news.length > 0 && (news[0].newsText)}</p>

                    <table>
                        <tr>
                            <th style={{ width:"60vw"}}>Annoucement Content</th> 
                            <th style={{ width:"40vw" }}>Submission Time</th>
                        </tr>
                        {news.map((newsData, index) => (
                            <tr key={newsData.id}> 
                                <td>{newsData.newsText}</td> 
                                <td>{newsData.lastUsed}</td>
                            </tr>
                        ))}
                    </table>
                </>
            )}
            
        </>
    );
} 

export default AdminNews;