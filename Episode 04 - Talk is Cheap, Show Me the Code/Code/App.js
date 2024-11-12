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
//////////////HEADER//////////////////////

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


///////////BODY////////////////////////                                      

const Body = () => {
    console.log(resObject);
    
    return (
    <div className="body">
        <div className="search">
            Search
        </div>

        <div className="res-container">
        <Rescards  resData = {resObject}  />

    
        </div>
    </div>
    );
};

const Rescards = (props) => {
    const { resData } = props;
    return (
      
    <div className="res-Cards">
    
    <img className="card1" src={card1} alt="card1" /> 
    <h3>{resData.info.name}</h3>
    <h4>{resData.info.cuisines}</h4>
    <h4>{resData.info.avgRating}</h4>
    <h4>{resData.info.deliveryTime}</h4>
    <h4>{resData.info.areaName}</h4>

    </div>
    );
};


const resObject = 
    {
        info: {
          id: "10894",
          name: "Pizza Hut",
          cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
          locality: "2nd Stage",
          areaName: "BTM Layout",
          costForTwo: "₹350 for two",
          cuisines: ["Pizzas"],
          avgRating: 4.1,
          parentId: "721",
          avgRatingString: "4.1",
          totalRatingsString: "10K+",
          deliveryTime: 31,
        }
    };
    
   
  
/////////////FOOTER///////////////

const App = () => { 
return (
<div className="app">
< Header />
<Body />

</div>
);
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/ >);