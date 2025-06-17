import { Link } from "react-router-dom"; 

import "./adminPage.css"; 

function adminPage() { 

    return ( 
        <div> 
            <section className="adminTitleSection"> 
                <div className="adminTitleContent">
                    <h1>Admin Page</h1>
                </div>
            </section> 


            <section className="adminNewsSection"> 
                <h1>Annoucement Setting</h1>

            </section> 


            <section className="adminMenuSection"> 
                <h1>Menu Customization</h1>
                
                <div className="adminMenuContent">
                    <h3>Menu Catagory</h3> 
                    <input type="text" placeholder="Input menu catagory..."></input>
                </div>
                
                <form className="adminMenuContent">
                    <h3>Add menu item:</h3> 

                    <div className="menuNamePriceSection"> 
                        <div> 
                            <select>
                                <option value="" disabled selected>Select an item catagory...</option>
                            </select>
                            <input type="text" placeholder="Input item name..."></input> 
                        </div>
                        

                        <p>$<input type="text" placeholder="Input item price..."></input></p>
                    </div>
                    <textarea className="menuItemDescInput" placeholder="Input item description..."></textarea> 
                    <button>Submit</button>
                </form>
            </section>
            
            <section className="adminMenuEditSection"> 
                <h1>Edit Menu</h1>

            </section>

            <Link to="/Home">Home</Link> 
        </div>
    );
} 

export default adminPage;