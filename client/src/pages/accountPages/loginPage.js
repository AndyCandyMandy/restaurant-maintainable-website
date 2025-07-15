import { useState } from "react";
import {Link} from "react-router-dom"; 

import "./LoginPage.css"; 

function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState(""); 

    const handleLoginIn = async (e) => { 
        e.preventDefault();

        const loginData = { userName, password };
    }

    return (
        <div className="loginSection"> 

            <form className="loginBody" onSubmit={handleLoginIn}>
                <h1>Login</h1>
                <input type="text" placeholder="Enter Username..." onChange={(e) => setUserName(e.target.value)} required></input> 
                <input type="text" placeholder="Enter Password..." onChange={(e) => setPassword(e.target.value)} required></input> 

                <button type="submit">Login</button> 
                <Link to="/">Cancel</Link> 
            </form>
            
        </div>
    );
} 

export default LoginPage;