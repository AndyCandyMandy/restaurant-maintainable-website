import { Link } from "react-router-dom"; 

import { useUpdateCategories } from "../../hooks/useUpdateCategories.js"; 

import AdminCategory from "../../components/adminComponents/AdminCategory.js"; 
import AdminMenuItem from "../../components/adminComponents/AdminMenuItem.js"; 
import AdminDisplayMenu from "../../components/adminComponents/AdminDisplayMenu.js"; 

import "./adminPage.css"; 

function AdminPage() {  
    const { categories, updateCategory, error } = useUpdateCategories();

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
                
                <AdminCategory categories={categories} updateCategory={updateCategory} error={error}></AdminCategory> 

                <AdminMenuItem categories={categories}></AdminMenuItem>

            </section>
            

            <section className="adminMenuEditSection"> 
                <AdminDisplayMenu categories={categories}></AdminDisplayMenu>

            </section>

            <Link to="/Home">Home</Link> 
            <Link to="/Home/Menu">Menu</Link> 
        </div>
    );
} 

export default AdminPage;