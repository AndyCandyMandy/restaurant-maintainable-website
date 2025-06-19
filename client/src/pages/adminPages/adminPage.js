import { Link } from "react-router-dom"; 

import { useUpdateCategories } from "../../hooks/useUpdateCategories.js"; 
import { useUpdateMenuItems } from "../../hooks/useUpdateMenuItems.js"; 

import AdminCategory from "../../components/adminComponents/AdminCategory.js"; 
import AdminMenuItem from "../../components/adminComponents/AdminMenuItem.js"; 
import AdminDisplayMenu from "../../components/adminComponents/AdminDisplayMenu.js"; 

import "./adminPage.css"; 

function AdminPage() {  
    const { categories, updateCategory, errorCategory } = useUpdateCategories(); 
    const { menuItems, updateMenuItem, errorMenuItem } = useUpdateMenuItems();

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
                
                <AdminCategory categories={categories} updateCategory={updateCategory} error={errorCategory}></AdminCategory> 

                <AdminMenuItem categories={categories} updateMenuItem={updateMenuItem} error={errorMenuItem}></AdminMenuItem>

            </section>
            

            <section className="adminMenuEditSection"> 
                <AdminDisplayMenu categories={categories} menuItems={menuItems}></AdminDisplayMenu>

            </section>

            <Link to="/Home">Home</Link> 
            <Link to="/Home/Menu">Menu</Link> 
        </div>
    );
} 

export default AdminPage;