import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images1/mealhub.logo.webp";

/**
 * Header
 * - Logo
 * - Nav items
 * Body
 * - Search
 * - RestroContainer
 *   - RestroCards
 *     - Img
 *     - Name of res
 *     - Rating
 *     - Cuisine
 *     - Delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

////////////// HEADER ///////////////

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

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

////////////// BODY ///////////////

const Body = () => {
  

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
        <Rescards resData={resObject} />
      </div>
    </div>
  );
};

const Rescards = (props) => {
  const { resData } = props;
   const { info } = resData; // Extract the `info` object

   const
   {name,
    cloudinaryImageId,
    cuisines,
    avgRating,
     deliveryTime,
      areaName} = resData?.info;


  return (
    <div className="res-Cards">
      <img
        className="card1"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
         cloudinaryImageId
        }
        alt="Restaurant"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4> {/* Display cuisines as comma-separated values */}
      <h4>Rating: {avgRating}</h4>
      <h4>Delivery Time: {deliveryTime} mins</h4>
      <h4>Area: {areaName}</h4>
    </div>
  );
};

////////////// RES OBJECT ///////////////

const resObject = {
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
  },
};

////////////// FOOTER ///////////////

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
