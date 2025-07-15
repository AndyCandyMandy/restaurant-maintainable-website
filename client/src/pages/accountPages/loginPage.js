import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 

import "./LoginPage.css"; 

function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");  
    const navigate = useNavigate();

    const handleLoginIn = async (e) => { 
        e.preventDefault();

        const loginData = { userName, password };
        try { 
            const response = await fetch("http://localhost:5000/api/auth/loginAccount", {
                method: "POST",
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify(loginData),
            });

            const data = await response.json(); 

            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                navigate("/Home");
            }

        } catch (error) {
            console.error("User login failed", error);
        }
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