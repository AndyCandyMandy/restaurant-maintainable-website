import React, { useState } from "react"; 

import "./newsSection.css"; 

function NewsSection() { 
    const [isNewsBarActive, setIsNewsBarActive] = useState(true);

    return ( 
        <>
            {isNewsBarActive && (
                <section className="newsSection">
                    <p className="announcement">&#128513; New Limited Pork Spring Rolls! Get Them now! &#128513;</p> 

                    <p className="newsClose" onClick={() => setIsNewsBarActive(false)}>&#x2715;</p>
                </section>  
            )}
        </>   
    );
}

export default NewsSection;