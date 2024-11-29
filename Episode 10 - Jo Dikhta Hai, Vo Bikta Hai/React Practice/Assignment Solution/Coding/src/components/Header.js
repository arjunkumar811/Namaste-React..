import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {

const [btnNameReact, setbtnNamereact] = useState("Login"); 

const onlineStatus = useOnlineStatus();

    return (
      <div className="flex justify-between bg-red-400 shadow-lg sm:bg-yellow-300">
        <div className="logo-container">
          <img className="w-36" src={LOGO_URL} alt="logo" />
        </div>
  
        <div className="flex items-center mr-7">
          <ul className="flex  ">
            <li className="px-5">Online Status: {onlineStatus ? "✅" : "❌" }</li>
         <li className="px-5"> <Link to="/"> Home </Link> </li>   
            <li className="px-5"> <Link to="/about"> About Us </Link></li>
            <li className="px-5"> <Link to="/contact"> Contact </Link> </li>
            <li className="px-5"><Link to="/grocery">Grocery</Link></li>
            <li className="px-5">  Card </li>
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