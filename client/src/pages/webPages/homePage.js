import {Link} from "react-router-dom"; 

import StickyHeader from "../../components/stickyHeader.js"; 

import FoodShot_1 from "../../images/food_shot_1.jpg"; 
import FoodShot_2 from "../../images/food_shot_2.jpg";  
import FoodShot_3 from "../../images/food_shot_3.jpg"; 

function homePage() { 
    return (
        <div>
            <section className="introSection"> 
                <div className="introContent"> 
                   <h1 className="introHeader">Jasmine Dragon</h1>
                    <p className="introPhoneHeader">Phone: (<span style={{color: "#f76350"}}>(123) 456-7890</span>)</p> 
                    <p className="introDesc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non. Vestibulum fringilla tincidunt felis ac imperdiet. Phasellus et ullamcorper elit, eu fringilla ligula. Cras pharetra felis id tristique condimentum. Sed lobortis tristique metus, in accumsan tellus vulputate ac. Nam nec libero purus. Nam accumsan a ex ac molestie. Nulla vel accumsan tellus. Quisque eget ex urna. Aenean pharetra eget neque et euismod.
                    </p> 
                    <Link className="introMenuButton" to="/Home/Menu">View Our Menu</Link> 
                </div> 
                
            </section> 


            <StickyHeader></StickyHeader>
 

            <section className="newsSection" id="newsId">
                <h1 className="newsHeader">Annoucments</h1>
                <table className="newsContent"> 
                    <thread>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Headline</th> 
                    </thread> 
                    <tbody> 
                        <tr>
                            <th>June 2nd 2023</th> 
                            <td>New Item</td> 
                            <td>New Pork Springrolls!</td>
                        </tr> 
                        <tr>
                            <th>Dec 24th 2023</th> 
                            <td>Important</td> 
                            <td>Closing for Christmas!</td>
                        </tr>
                        
                    </tbody>
                    
                </table>
            </section>


            <section className="aboutSection" id="aboutId"> 
                <div className="aboutContent">
                    <h1 className="aboutHeader">About the Jasmine Dragon</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non. Vestibulum fringilla tincidunt felis ac imperdiet. Phasellus et ullamcorper elit, eu fringilla ligula. Cras pharetra felis id tristique condimentum. Sed lobortis tristique metus, in accumsan tellus vulputate ac. Nam nec libero purus. Nam accumsan a ex ac molestie. Nulla vel accumsan tellus. Quisque eget ex urna. Aenean pharetra eget neque et euismod.
                    </p> 
                </div> 
                <img className="aboutImage" src={FoodShot_1} alt=""/> 
            </section>  


            <section className="specialSection" id="specialId">
                <h1 className="specialHeader">Specials of the Day</h1>
                <p className="specialHeader">Please check out our special menu items of the day!</p>
                <div className="specialContent">

                    <div>
                        <img className="aboutImage" src={FoodShot_1} alt=""/>
                    </div> 

                    <div> 
                        <img className="aboutImage" src={FoodShot_2} alt=""/> 
                    </div> 

                    <div>
                        <img className="aboutImage" src={FoodShot_3} alt=""/>
                    </div>

                </div>
            </section>


            <section className="reviewSection"> 
                <div className="reviewContent">
                    <h1 className="reviewHeader">Our Happy Customers</h1>  
                    <div className="reviewDisplay">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non. Vestibulum fringilla tincidunt felis ac imperdiet. Phasellus et ullamcorper elit, eu fringilla ligula. Cras pharetra felis id tristique condimentum. Sed lobortis tristique metus, in accumsan tellus vulputate ac. Nam nec libero purus. Nam accumsan a ex ac molestie. Nulla vel accumsan tellus. Quisque eget ex urna. Aenean pharetra eget neque et euismod.
                        </p>
                    </div>
                    
                </div> 
            </section>  


            <section className="contactSection" id="contactId"> 
                
                <iframe className="contactMap" title="Restaurant Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47749.09489202744!2d-79.35864019416006!3d43.70546792548135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc907bd99555%3A0x5835e3a4d8d80041!2s123%20Fake%20St%2C%20Toronto%2C%20ON%20M4K%203M2!5e1!3m2!1sen!2sca!4v1749348317359!5m2!1sen!2sca" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <div className="contactContent"> 
                    <h1 className="contactHeader">Contact Us</h1> 
                    <p>Jasmine Dragon</p> 
                    <p>Address: <span style={{color: "#f76350"}}>123 Fake St</span></p>
                    <p>Phone: (<span style={{color: "#f76350"}}>(123) 456-7890</span>)</p> 
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non. Vestibulum fringilla tincidunt felis ac imperdiet. Phasellus et ullamcorper elit, eu fringilla ligula. Cras pharetra felis id tristique condimentum. Sed lobortis tristique metus, in accumsan tellus vulputate ac. Nam nec libero purus. Nam accumsan a ex ac molestie. Nulla vel accumsan tellus. Quisque eget ex urna. Aenean pharetra eget neque et euismod.
                    </p>

                </div>

            </section> 


            <footer className="footerSection"> 
                 
                <div className="footerContent">
                    <h3>Jasmine Dragon</h3>  
                    
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non. Vestibulum fringilla tincidunt felis ac imperdiet. Phasellus et ullamcorper elit, eu fringilla ligula. Cras pharetra felis id tristique condimentum. Sed lobortis tristique metus, in accumsan tellus vulputate ac. Nam nec libero purus. Nam accumsan a ex ac molestie. Nulla vel accumsan tellus. Quisque eget ex urna. Aenean pharetra eget neque et euismod.
                    </p>
                </div>

                <div className="footerContent">
                    <h3>Hours</h3> 
                    <p>Monday</p> 
                    <p>Tuesday</p> 
                    <p>Wednesday</p> 
                    <p>Thursday</p> 
                    <p>Friday</p> 
                    <p>Saturday</p> 
                    <p>Sunday</p>
                </div> 

                <div className="footerContent">
                    <h3>Social Media</h3>
                </div> 
            </footer>
        </div>
    );
} 

export default homePage;