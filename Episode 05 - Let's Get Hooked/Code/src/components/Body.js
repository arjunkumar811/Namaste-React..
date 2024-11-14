import Rescards from "./Rescards";
import { useState } from "react";
import resList from '../utils/mockData';


const Body = () => {
    // Local State Varible 
    const [listOfRes, setlistOfRes] = useState(resList);
    
    const filterResList = () => {
      const filterRes = listOfRes.filter(
        (res) => res.info.avgRating > 4.3
      );


      setlistOfRes(filterRes)
    }



    return (
      <div className="body">

      
        <div className="filter">
            <button className="filter-btn" 
            onClick={filterResList}
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