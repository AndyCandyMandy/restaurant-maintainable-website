import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Landing from "./pages/landingPage";
import Home from "./pages/webPages/homePage"; 
import Menu from "./pages/webPages/menuPage"; 
import Login from "./pages/accountPages/loginPage"; 
import Admin from "./pages/adminPages/adminPage";

function App() {
  return (
    <Router> 
      <Routes> 
        <Route exact path="/" element={<Landing />} /> 
        <Route exact path="/Home" element={<Home/>} /> 
        <Route exact path="/Home/Menu" element={<Menu/>} />
        <Route exact path="/Login" element={<Login/>} /> 
        <Route exact path="/Admin" element={<Admin/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
