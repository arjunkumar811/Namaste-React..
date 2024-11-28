import { useEffect, useState } from "react";


const useOnlineStatus = () => {
    const [OnlineStatus, setOnlineStatus] = useState(true);

    // check if online
useEffect(() => {

    window.addEventListener("offline", () => {
   setOnlineStatus(false);
    })

    window.addEventListener("online", () => {
        setOnlineStatus(true);
         })

}, []);


return OnlineStatus;
}

export default useOnlineStatus;