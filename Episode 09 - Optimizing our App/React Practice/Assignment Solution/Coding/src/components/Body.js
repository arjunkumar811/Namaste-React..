import Rescards from "./Rescards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from './../utils/useOnlineStatus';

const Body = () => {
    // Local State Varible 
    const [listOfRes, setlistOfRes] = useState([]);
    
     const [filteredRes, setfilteredRes] = useState([]);

    const [searchText, setsearchText] = useState(""); 
    
    
    
useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const response = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );


  const json = await response.json();

  
  const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  setlistOfRes(restaurants);
  setfilteredRes(restaurants);
};


    const TopResList = () => {
      const filterRes = listOfRes.filter(
        (res) => res.data.avgRating > 4.3
      );

      setlistOfRes(filterRes)
    }

    const OnlineStatus = useOnlineStatus();
    if(OnlineStatus == false)
      return (
    <h1>
      You Are Offline Now Please check your connection;
    </h1>
      )

    return listOfRes.length == 0 ? <Shimmer/> :  (
      <div className="body">

        <div className="filter">

        <div className="search"> <input type="text" value={searchText} onChange={(e) => {
setsearchText(e.target.value);
 }} placeholder="Search here"/>
<button onClick={() => {

 const FilteredRes = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
 setfilteredRes(FilteredRes);

}}>Search</button>
 </div>

            <button className="filter-btn" 
            onClick={TopResList}
          >Top Retated </button>
        </div>


        <div className="res-container">
   {filteredRes.map((restaurant, index) => (

          <Rescards key={index} resData={restaurant} /> 
   ))}  
        </div>
      </div>
    );
  };

  
  export default Body;