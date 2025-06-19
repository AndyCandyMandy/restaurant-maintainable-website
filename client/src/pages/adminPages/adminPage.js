import { Link } from "react-router-dom"; 

import AdminCategory from "../../components/adminComponents/AdminCategory.js"; 
import AdminMenuItem from "../../components/adminComponents/AdminMenuItem.js"; 

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

                <AdminMenuItem></AdminMenuItem>

            </section>
            
            <section className="adminMenuEditSection"> 
                <h1>Edit Menu</h1>

            </section>

            <Link to="/Home">Home</Link> 
            <Link to="/Home/Menu">Menu</Link> 
        </div>
    );
} 

export default AdminPage;