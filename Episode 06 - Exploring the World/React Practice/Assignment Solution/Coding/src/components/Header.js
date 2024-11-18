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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Card</li>
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