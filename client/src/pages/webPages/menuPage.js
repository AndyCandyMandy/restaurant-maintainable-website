
import StickyHeader from "../../components/stickyHeader/stickyHeader.js"; 

function menuPage() {
    return (
        <div> 
            <StickyHeader></StickyHeader> 


            <section className="menuTitleSection"> 
                <div className="menuTitleContent">
                    <h1>Our Menu</h1>
                </div>
            </section>

            {/*
            <section className="menuSearchSection">
                <input className="menuSearchBar" type="text" placeholder="Search menu for..."></input>
            </section>
            */}
            
            <main className="menuSection"> 

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


                 
            </main>
            
        </div>
    );
} 

export default menuPage;