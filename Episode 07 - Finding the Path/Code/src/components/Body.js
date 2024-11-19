import Rescards from "./Rescards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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
        (res) => res.info.avgRating > 4.3
      );

      setlistOfRes(filterRes)
    }


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