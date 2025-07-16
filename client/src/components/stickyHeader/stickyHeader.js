import React, { useState, useEffect } from "react"; 
import { Link, useNavigate, useLocation } from "react-router-dom"; 

import "./stickyHeader.css"; 

import { scrollSectionBtn, scrollTopBtn } from "../../utils/scrollTo.js";

function StickyHeader() { 
    const [isHeaderContentOpen, setIsHeaderContentOpen] = useState(false); 
    const [userType, setUserType] = useState(""); 
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {  
        const storedUser = localStorage.getItem("user");
        if (storedUser) { 
            const user = JSON.parse(storedUser);
            setUserType(user.userType); 
        }

        // Function closes the hamburger menu when the header is no longer attached/sticky
        // (Closes the hamburger menu when the viewport deteches the header)
        const handleHeaderScroll = () => { 
            if (headerNotSticky() && isHeaderContentOpen) {
                setIsHeaderContentOpen(false);
            }
        }; 
        window.addEventListener("scroll", handleHeaderScroll);

        return () => {
            window.removeEventListener("scroll", handleHeaderScroll);
        };
    }, [isHeaderContentOpen]);

    // Function returns true if the header is not sticky/attached, false otherwise. 
    const headerNotSticky = () => {   
        const header = document.getElementById("headerId"); 
        if (!header) return false;

        const rect = header.getBoundingClientRect();
        
        return rect.top > 1;
    };

    // Function toggles between the hamburger menu states - if the header is not sticky/attached, scroll to the annoucement section.
    // (Meant to used only on the hamburger button)
    const toggleHamburger = () => { 
        if (headerNotSticky()) { 
            scrollSectionBtn("aboutId");
        } 
        else {
            setIsHeaderContentOpen(prev => !prev);
        }
    };

    // Function sets the hamburger menu states to false.
    const turnOffHamburger = () => {
        setIsHeaderContentOpen(false);
    }

    // Function logouts the user account by removing webtoken.
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");
    };


    return (
        <header className="headerSection" id="headerId"> 
                
            <h2 className="headerTitle">Jasmine Dragon</h2>
            
            {location.pathname === "/Home" &&
                <div className={`headerContent ${isHeaderContentOpen ? "active" : ""}`}> 
                    <p className="headerBtnContent" onClick={() => {scrollTopBtn(); turnOffHamburger()}}>Home</p> 

                    <p className="headerBtnContent" onClick={() => {scrollSectionBtn("aboutId"); turnOffHamburger()}}>About</p> 
                    <p className="headerBtnContent" onClick={() => {scrollSectionBtn("specialId"); turnOffHamburger()}}>Specials</p> 
                    <p className="headerBtnContent" onClick={() => {scrollSectionBtn("contactId"); turnOffHamburger()}}>Contact</p>
                    <Link className="headerBtnContent" to="/Home/Menu">Menu</Link> 
                    {userType === "admin_account" && ( 
                        <>
                            <Link className="headerBtnContent" to="/Admin">Admin</Link>
                            <p className="headerBtnContent" onClick={handleLogout}>Logout</p>
                        </>
                    )}  
                </div> 
            } 

            {location.pathname === "/Home/Menu" && 
                <div className={`headerContent ${isHeaderContentOpen ? "active" : ""}`}> 
                    <p className="headerBtnContent" onClick={() => {scrollTopBtn(); turnOffHamburger()}}>Search</p> 
                    
                    <Link className="headerBtnContent" to="/Home">Home</Link> 
                    {userType === "admin_account" && ( 
                        <>
                            <Link className="headerBtnContent" to="/Admin">Admin</Link>
                            <p className="headerBtnContent" onClick={handleLogout}>Logout</p>
                        </>
                    )}
                </div>
            }

            <p className="headerHamburger" onClick={toggleHamburger}>&equiv;</p> 
        </header>  
    );
}

export default StickyHeader;