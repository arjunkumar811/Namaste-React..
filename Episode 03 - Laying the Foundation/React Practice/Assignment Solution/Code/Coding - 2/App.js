/*
Create a Header Component from scratch using Functional Component with JSX
    Add a Logo on Left
    Add a search bar in middle
    Add User icon on right
    Add CSS to make it look nice
 */

import search from "./images/find.png";
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
    <>
    <Header/>
    </>
);


const Header = () => {
  return (
    <>
 <header className="header" >

 <img className="logo" src="https://w7.pngwing.com/pngs/228/726/png-transparent-namaste-illustration.png" alt="logo" />

        <div className="search-bar">
          <input            
            type="text"
            placeholder="Search anything "
          />  
          <img className="search-icon" src={search} alt="search icon" />   
        </div>
        
        <img className="user-icon" src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?rs=1&pid=ImgDetMain" alt="user icon" />
 </header>
 </>
  )  
};




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);