import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "../config";

/**
 * https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6851243&lng=83.2035471&restaurantId={69586}&submitAction=ENTER
 */

const useRestaurantMenu = (resId) => {
    const [restaurantData,setRestaurantData] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async () =>{
        const data = await fetch(RESTAURANT_MENU_API + resId);
        const jsonData = await data.json();
        console.log(jsonData?.data?.cards);  
        setRestaurantData(jsonData?.data?.cards);
    };
    
    return restaurantData;
};

export default useRestaurantMenu;