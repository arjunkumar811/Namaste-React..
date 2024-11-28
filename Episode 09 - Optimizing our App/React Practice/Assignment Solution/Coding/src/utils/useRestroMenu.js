import { useEffect, useState } from "react";

const useRestroMenu = (resId) => {
const [resInfo, setresInfo] = useState(resId);


useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = data.json();
    setresInfo(json.data)
}



    return resInfo;
    console.log(resInfo);
    
}

export default useRestroMenu;