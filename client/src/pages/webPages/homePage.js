import {Link} from "react-router-dom" 

import StickyHeader from "../../components/stickyHeader.js"; 

import FoodSpread_1 from "../../images/food_spread_1.jpg"; 
import FoodShot_1 from "../../images/food_shot_1.jpg"; 

function homePage() {
    return (
        <div>
            <section className="introSection"> 
                <div className="introContent"> 
                   <h1 className="introHeader">Jasmine Dragon</h1>
                    <p className="introPhoneHeader">Phone: <span style={{color: "#f76350"}}>(123) 456-7890</span></p> 
                    <p className="introDesc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non. Vestibulum fringilla tincidunt felis ac imperdiet. Phasellus et ullamcorper elit, eu fringilla ligula. Cras pharetra felis id tristique condimentum. Sed lobortis tristique metus, in accumsan tellus vulputate ac. Nam nec libero purus. Nam accumsan a ex ac molestie. Nulla vel accumsan tellus. Quisque eget ex urna. Aenean pharetra eget neque et euismod.
                    </p> 
                    <Link className="introMenuButton" to="/Home/Menu">View Our Menu</Link> 
                </div> 
                <div>
                    <img className="introImage" src={FoodSpread_1} alt=""/> 
                </div>
                
            </section> 


            <StickyHeader></StickyHeader>
 

            <section className="newsSection">
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


            <section className="aboutSection"> 
                <div className="aboutContent">
                    <h1 className="aboutHeader">About the Jasmine Dragon</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non. Vestibulum fringilla tincidunt felis ac imperdiet. Phasellus et ullamcorper elit, eu fringilla ligula. Cras pharetra felis id tristique condimentum. Sed lobortis tristique metus, in accumsan tellus vulputate ac. Nam nec libero purus. Nam accumsan a ex ac molestie. Nulla vel accumsan tellus. Quisque eget ex urna. Aenean pharetra eget neque et euismod.
                    </p>
                </div> 
                <img className="aboutImage" src={FoodShot_1} alt=""/> 
            </section> 


            <section className="reviewSection"> 
                <div className="reviewContent">
                    <h1 className="reviewHeader">Happy Customers</h1>  
                    <div className="reviewDisplay">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non. Vestibulum fringilla tincidunt felis ac imperdiet. Phasellus et ullamcorper elit, eu fringilla ligula. Cras pharetra felis id tristique condimentum. Sed lobortis tristique metus, in accumsan tellus vulputate ac. Nam nec libero purus. Nam accumsan a ex ac molestie. Nulla vel accumsan tellus. Quisque eget ex urna. Aenean pharetra eget neque et euismod.
                        </p>
                    </div>
                    
                </div> 
            </section>  


            <section className="contactSection"> 
                <h1 className="contactHeader">Contact</h1>
                <iframe title="Restaurant Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2390.6701470277158!2d-105.76142018416756!3d53.187896679946235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53017af28e3f3cd3%3A0xa1de3df5ce808bea!2s2nd%20Avenue%20Dental%20Clinic!5e0!3m2!1sen!2sca!4v1670212870624!5m2!1sen!2sca"></iframe>
            </section> 


            <footer className="footerSection"> 
                 
                <div className="footerContent">
                    <p>Jasmine Dragon</p>  
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non. Vestibulum fringilla tincidunt felis ac imperdiet. Phasellus et ullamcorper elit, eu fringilla ligula. Cras pharetra felis id tristique condimentum. Sed lobortis tristique metus, in accumsan tellus vulputate ac. Nam nec libero purus. Nam accumsan a ex ac molestie. Nulla vel accumsan tellus. Quisque eget ex urna. Aenean pharetra eget neque et euismod.
                    </p>
                </div>

                <div className="footerContent">
                    <p>Hours</p> 
                    <p>Monday</p> 
                    <p>Tuesday</p> 
                    <p>Wednesday</p> 
                    <p>Thursday</p> 
                    <p>Friday</p> 
                    <p>Saturday</p> 
                    <p>Sunday</p>
                </div> 

                <div className="footerContent">
                    <p>Social Media</p>
                </div> 
            </footer>
        </div>
    );
} 

export default homePage;