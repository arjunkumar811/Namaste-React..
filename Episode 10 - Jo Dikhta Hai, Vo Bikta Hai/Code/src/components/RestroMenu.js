import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";

const RestroMenu = () => {

    const { resId } = useParams();
const resInfo = useRestroMenu(resId) ;

console.log(resInfo);
    if ( resInfo == null) return (<Shimmer />) 

    
    return  (
        <div className="menu">
    <h1>{resInfo?.cards[1]?.card?.card?.info.name}</h1>
    <h1>{resInfo?.cards[1]?.card?.card?.info.city}</h1>
    <h3>{resInfo?.cards[1]?.card?.card?.info.cuisines.join(" , ")}</h3>
    <h1>{resInfo?.cards[1]?.card?.card?.info.areaName}</h1>
    
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