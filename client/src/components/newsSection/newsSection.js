import React, { useState } from "react"; 

import { useUpdateNews } from "../../hooks/useUpdateNews.js"; 

import "./newsSection.css"; 

function NewsSection() { 
    const [isNewsBarActive, setIsNewsBarActive] = useState(true); 
    const { news } = useUpdateNews(); 

    return ( 
        <>
            {isNewsBarActive && news.length > 0 && news[0].newsText.trim() !== "" && (
                <section className="newsSection">
                    <p className="announcement">{news[0].newsText}</p> 

                    <p className="newsClose" onClick={() => setIsNewsBarActive(false)}>&#x2715;</p>
                </section>  
            )}
        </>   
    );
}

export default NewsSection;