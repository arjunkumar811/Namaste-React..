import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";



const Header = () => {

const [btnNameReact, setbtnNamereact] = useState("Login"); 

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
  
        <div className="nav-items">
          <ul>
         <li> <Link to="/"> Home </Link> </li>   
            <li> <Link to="/about"> About Us </Link></li>
            <li> <Link to="/contact"> Contact </Link> </li>
            <li>  Card </li>
            <button className="login " onClick={() => {
              btnNameReact == "Login" ? 
              setbtnNamereact("Logout") : setbtnNamereact("Login");
            }} >{btnNameReact} </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;