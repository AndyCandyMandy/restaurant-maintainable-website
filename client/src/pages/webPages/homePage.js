import {Link} from "react-router-dom"; 

import StickyHeader from "../../components/stickyHeader.js"; 
import NewsSection from "../../components/newsSection.js"; 
import ReviewSection from "../../components/reviewCarousel.js"; 

import FoodShot_1 from "../../images/food_shot_1.jpg"; 
import FoodShot_2 from "../../images/food_shot_2.jpg"; 
import FaceBook from "../../images/socialMedia_Icons/icons-facebook.png"; 
import Instagram from "../../images/socialMedia_Icons/icons-instagram.png";  
import Twitter from "../../images/socialMedia_Icons/icons-twitter.png"; 

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
            

            <NewsSection></NewsSection>
            

            <section className="aboutSection" id="aboutId"> 

                <div className="aboutContent">
                    <h1 className="aboutHeader">About the Jasmine Dragon</h1> 
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non. Vestibulum fringilla tincidunt felis ac imperdiet. Phasellus et ullamcorper elit, eu fringilla ligula. Cras pharetra felis id tristique condimentum. Sed lobortis tristique metus, in accumsan tellus vulputate ac. Nam nec libero purus.
                    </p>  
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non.
                    </p> 

                    <div className="aboutDesc"> 
                        <p>"Our goal at Jasmin Dragon is to push our customers comfort and satisfaction to the forefront with deliciously fresh food, a bright and welcoming dining area, and ease of access. All of this is to foster a long lasting relationship between the customer and our earnest staff."</p> 
                        <p style={{fontWeight:"bold"}}>- The <span style={{color:"#f76350", fontWeight:"bold"}}>Owner</span></p>
                    </div>
                    
                </div> 

                <div className="aboutImageBox">
                    <img className="aboutImage" src={FoodShot_1} alt=""/> 
                    <img className="aboutImage" src={FoodShot_2} alt=""/>  
                </div>

                
            
            </section>  


            <section className="specialSection" id="specialId">
                <h1 className="specialHeader">Specials of the Day</h1>
                <h3 className="specialIntro">Please check out our special menu items of the day!</h3>
                <div className="specialContent">

                    <div className="specialItem">
                        <h3 className="specialDesc">Special #1:</h3>
                        <p className="specialDesc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie.
                        </p> 
                        <p className="specialDesc">$6.95</p>
                    </div> 

                    <div className="specialItem"> 
                        <h3 className="specialDesc">Special #2:</h3>
                        <p className="specialDesc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie.
                        </p> 
                        <p className="specialDesc">$7.95</p> 
                    </div> 

                    <div className="specialItem"> 
                        <h3 className="specialDesc">Special #3:</h3>
                        <p className="specialDesc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie.
                        </p> 
                        <p className="specialDesc">$7.95</p>
                    </div>

                </div>
            </section>


            <ReviewSection></ReviewSection>


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

                    <div className="timeSection">
                    <h3 className="timeHeader">Operating Hours</h3>  
                    <ul className="timeTable">
                        <li className="timeContent">
                            <span>Monday</span> 
                            <span>10:00am - 9:30pm</span>
                        </li>  
                        <li className="timeContent">
                            <span>Tuesday</span> 
                            <span>10:00am - 9:30pm</span>
                        </li>  
                        <li className="timeContent">
                            <span>Wednesday</span> 
                            <span>10:00am - 9:30pm</span>
                        </li>  
                        <li className="timeContent">
                            <span>Thursday</span> 
                            <span>10:00am - 9:30pm</span>
                        </li>  
                        <li className="timeContent">
                            <span>Friday</span> 
                            <span>10:00am - 9:30pm</span>
                        </li>  
                        <li className="timeContent">
                            <span>Saturday</span> 
                            <span>10:00am - 9:30pm</span>
                        </li>  
                        <li className="timeContent">
                            <span>Sunday</span> 
                            <span>10:00am - 9:30pm</span>
                        </li> 
                    </ul>
                    </div> 

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

export default homePage;