import { CDN_URL } from "../utils/constants";

const Rescards = (props) => {
    const { resData } = props;
  
    // Provide a default empty object for `info` to avoid destructuring undefined
    const {
        name = "Unknown Restaurant",
        cloudinaryImageId = "",
        cuisines = [],
        avgRating = "N/A",
        deliveryTime = "N/A",
        areaName = "N/A"
    } = resData?.info || {}; // Destructure `info` with default values

    return (
      <div className=" p-4 m-4 w-[250px] rounded-lg bg-red-500 hover:bg-gray-400">
        <img 
          className="card1 w-full w-29 rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant"
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4> {/* Display cuisines as comma-separated values */}
        <h4>Rating: {avgRating}</h4>
        <h4>Delivery Time: {deliveryTime} mins</h4>
        <h4>Area: {areaName}</h4>
      </div>
    );
};

export default Rescards;
