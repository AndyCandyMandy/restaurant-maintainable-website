import { Link } from "react-router-dom"; 

import AdminCategory from "../../components/adminComponents/adminCategory.js"; 

import "./adminPage.css"; 

function AdminPage() { 



    return ( 
        <div> 
            <section className="adminTitleSection"> 
                <div className="adminTitleContent">
                    <h1>Admin Page</h1>
                </div>
            </section> 


            <section className="adminNewsSection"> 
                <h1>Annoucement Setting</h1> 

                <input type="text" placeholder="Annoucement is currently empty..." ></input>
                <button>Post</button>
            </section> 


            <section className="adminMenuSection"> 
                <h1>Menu Customization</h1>
                
                <AdminCategory></AdminCategory>

                <form className="adminMenuContent">
                    <h3>Add menu item:</h3> 

                    <div className="menuNamePriceSection"> 
                        <div> 
                            <select defaultValue="">
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

export default AdminPage;