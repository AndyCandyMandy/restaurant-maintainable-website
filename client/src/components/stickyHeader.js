import React, { useState } from "react";
import "./stickyHeader.css";

function StickyHeader() { 
    const [isHeaderContentOpen, setIsHeaderContentOpen] = useState(false);

    const toggleHamburger = () => {
        setIsHeaderContentOpen(prev => !prev);
    };

    return (
        <header className="headerSection"> 
                
            <p className="headerTitle">Resturant Name</p> 
            
            <div className={`headerContent ${isHeaderContentOpen ? "active" : ""}`}> 
                <p className="headerBtnContent">Home</p> 
                <p className="headerBtnContent">News</p> 
                <p className="headerBtnContent">About</p> 
                <p className="headerBtnContent">Contact</p>
                <p className="headerBtnContent">Locations</p> 
                <p className="headerBtnContent">Menu</p> 
            </div>
            <p className="headerHamburger" onClick={toggleHamburger}>&equiv;</p> 
        </header>  
    );
}

export default StickyHeader;