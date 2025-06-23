import { useState } from "react";
import StickyHeader from "../../components/stickyHeader/stickyHeader.js"; 

import { useUpdateCategories } from "../../hooks/useUpdateCategories.js"; 
import { useUpdateMenuItems } from "../../hooks/useUpdateMenuItems.js"; 

import FaceBook from "../../images/socialMedia_Icons/icons-facebook.png"; 
import Instagram from "../../images/socialMedia_Icons/icons-instagram.png";  
import Twitter from "../../images/socialMedia_Icons/icons-twitter.png";

function MenuPage() {  
    const [searchBarContent, setSearchBarContent] = useState("");

    const { categories } = useUpdateCategories(); 
    const { menuItems } = useUpdateMenuItems();

    return (
        <div> 
            <StickyHeader></StickyHeader> 


            <section className="menuTitleSection"> 
                <div className="menuTitleContent">
                    <h1>Our Menu</h1>
                </div>
            </section>
            
            <section className="menuSearchBarSection">
                <input className="menuSearchBar" type="text" placeholder="Search menu for..." value={searchBarContent} onChange={(e) => setSearchBarContent(e.target.value)}></input>
            </section>

            <main className="menuSection"> 

                {/*
                <section className="menuCatagory">
                    <h2 className="menuCatagoryHeader">Appetizers</h2>

                    <div className="menuCatagoryContents">

                        <div className="menuItem"> 
                            <div className="itemHeader">
                                <h3><span>1</span>. Chicken Spring Rolls</h3> 
                                <h3><span>$</span>7.96</h3>
                            </div> 
                            <div className="itemBody">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non.
                                </p>
                            </div>
                        </div> 

                        <div className="menuItem"> 
                            <div className="itemHeader">
                                <h3><span>1</span>. Chicken Spring Rolls</h3> 
                                <h3><span>$</span>7.96</h3>
                            </div> 
                            <div className="itemBody">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non.
                                </p>
                            </div>
                        </div> 

                        <div className="menuItem"> 
                            <div className="itemHeader">
                                <h3><span>1</span>. Chicken Spring Rolls</h3> 
                                <h3><span>$</span>7.96</h3>
                            </div> 
                            <div className="itemBody">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non.
                                </p>
                            </div>
                        </div>

                    </div>
                </section> 
                */} 

                
                {categories.length === 0 ? (
                    <section className="emptyMenuCategory">
                        <h2>Our menu is currently unavailable...</h2>
                        <p>Apologies for any future inconvienances</p>
                    </section>
                ) : (
                categories.map((categoryData) => (
                    <section className="menuCatagory" key={categoryData.id}> 
                        <h2 className="menuCatagoryHeader">{categoryData.categoryName}</h2> 

                        <div className="menuCatagoryContents">


                            {menuItems.filter((menuItem) => menuItem.itemCategory === categoryData.categoryName && 
                            (
                                menuItem.itemName.toLowerCase().includes(searchBarContent.toLowerCase()) || 
                                menuItem.itemDesc.toLowerCase().includes(searchBarContent.toLowerCase())
                            )
                            ).map((menuItemData) => (  
                                <div className="menuItem" key={menuItemData.id}> 
                                {menuItemData.itemStatus ? ( 
                                    <>
                                        <div className="itemHeader">
                                            <h3><span>{menuItemData.id}</span>. {menuItemData.itemName}</h3> 
                                            <h3><span>$</span>{menuItemData.itemPrice}</h3>
                                        </div>  
                                        <div className="itemBody">
                                            <p>{menuItemData.itemDesc}</p>
                                        </div> 
                                    </>
                                ) : (
                                    <>
                                        <div className="itemHeader">
                                            <h3 className="missingItemHeader"><span>{menuItemData.id}</span>. {menuItemData.itemName}</h3> 
                                            <h3 className="missingItemHeader"><span>$</span>{menuItemData.itemPrice}</h3>
                                        </div>  
                                        <div className="itemBody">
                                            <p className="missingItemBody">(Currently Unavailable) {menuItemData.itemDesc}</p>
                                        </div> 
                                    </>
                                )}
                                </div>
                            ))}


                        </div>
                    </section>
                )))}
 
            </main> 


            <footer className="footerSection">            
                <div className="footerContent">
                    <h3>Jasmine Dragon</h3>  
                    
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non. Vestibulum fringilla tincidunt felis ac imperdiet. Phasellus et ullamcorper elit, eu fringilla ligula. Cras pharetra felis id tristique condimentum. Sed lobortis tristique metus, in accumsan tellus vulputate ac. Nam nec libero purus. Nam accumsan a ex ac molestie. Nulla vel accumsan tellus. Quisque eget ex urna. Aenean pharetra eget neque et euismod.
                    </p>
                </div> 

                <div className="footerContent">
                    <h3>Social Media</h3> 
                    <div className="socialMediaBox">
                        <img className="socialMediaIcon" src={FaceBook} alt=""/> 
                        <img className="socialMediaIcon" src={Instagram} alt=""/>  
                        <img className="socialMediaIcon" src={Twitter} alt=""/> 
                    </div>
                </div> 
            </footer>
        </div>
    );
} 

export default MenuPage;