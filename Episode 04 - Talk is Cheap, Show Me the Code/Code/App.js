import React from "react";
import ReactDOM  from 'react-dom/client';
import logo from "./images1/mealhub.logo.webp";
import card1 from "./images1/meghana.png"

/**
 * Header
 * -Logo
 * -Nav items
 * Body
 * -Search
 * -RestroContainer
 *   -RestroCards 
 *     -Img
 *     -Name of res
 *     -rating 
 *     -cuisine
 *     -delivary time
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */


const Header = () => {
    return (
<div className="header" >
    
<div className="logo-container"> <img className="logo" src={logo} alt="logo" />  </div>

<div className="nav-items">
<ul>
<li>Home</li>
<li>About Us</li>
<li>Contact</li>
<li>Card</li>
</ul>

</div>

</div>
);
};   



const Body = () => {
    return (
    <div className="body">
        <div className="search">
            Search
        </div>

        <div className="res-container">
        <Rescontainer/>
        <Rescontainer/>
        <Rescontainer/>
        <Rescontainer/>
        <Rescontainer/>
        <Rescontainer/>
        <Rescontainer/>
        
        </div>
    </div>
    );
}

const Rescontainer = () => {
    return (
    <div className="res-Cards">
    
    <img className="card1" src={card1} alt="card1" /> 
    <h3>Meghana Foods</h3>
    <h4>North Indian</h4>
    <h4>4.4 stars</h4>
    <h4>38 minutes</h4>

    </div>
    )
}


const App = () => { 
    return (
<div className="app">
< Header />
<Body />


</div>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);