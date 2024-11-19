import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestroMenu = () => {
const [resInfo, setresInfo] =useState(null);

    useEffect(() => {
    fetchMenu();
    }, []);


    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=671928&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        console.log(json);
        setresInfo(json.data)
        
    }

    
    return (resInfo == null) ? (<Shimmer />) :  (
        <div className="menu">
    <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
    <h2>Menu</h2>
    <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Cake</li>
    </ul>
        </div>
    )
}

export default RestroMenu;