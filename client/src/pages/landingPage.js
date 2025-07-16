import {Link} from "react-router-dom"

function landingPage() {
    return (
        <div className="landingBody"> 
            <div className="landingText">
                <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>Self Maintainable Restaurant Website</h1>
                <p>
                    A full-stack web development project built using React for the frontend, Node.js for the backend, and MySQL as the database. The primary goal of this website is to enable restaurant owners to independently manage and update content, such as menu items, prices, announcements, etc., reducing their overall reliance on developers for small but important changes to their webpage. Combines an appealing, user-friendly design with well-organized and extensible code to simplify future maintenance and updates if required by the developer. 
                    <br /><br />
                    Please press “Home” to view the customer view of the website. If this is your first time launching this project, the menu may already be empty. 
                    <br /><br /> 
                    If that is the case, please press “Owner Login” to view the admin view of the website. Login using <span style={{ color: "#f76350" }}>“AdminRockz”</span> as the username and <span style={{ color: "#f76350" }}>“admin_password”</span> as the password to begin. Once logged in, pressing the “Admin” button in the header of the home or menu pages will grant access to the admin controls to edit the website. Once completed, please logout using the designated button, located in the same header. 
                </p>
            </div>
            <div className="landingBtnBox">
                <Link className="landingBtn" to="/Home">Home</Link> 
                <Link className="landingBtn" to="/Login">Owner Login</Link> 
            </div>
            

            

        </div>
    );
} 

export default landingPage;