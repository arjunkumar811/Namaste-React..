import resList from "../utils/mockData";
import Rescards from "./Rescards";
import { useState, useEffect } from "react";


const Body = () => {
    // Local State Varible 
    const [listOfRes, setlistOfRes] = useState(resList);
    const [filteredRes, setfilteredRes] = useState([]);

    const [searchText, setsearchText] = useState([]); 
    

    const TopResList = () => {
      const filterRes = listOfRes.filter(
        (res) => res.info.avgRating > 4.3
      );

      setlistOfRes(filterRes)
    }


    return (
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
   {listOfRes.map((restaurant, index) => (

          <Rescards key={index} resData={restaurant} /> 
   ))}  
        </div>
      </div>
    );
  };

  
  export default Body;