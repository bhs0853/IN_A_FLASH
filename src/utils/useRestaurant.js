import { RESTAURANT_API } from "../config";
import { useState, useEffect } from "react";

const useRestaurant = () => {
    const [allRestaurant, setAllRestaurant] = useState(null);
    useEffect(() => {
        fetchData();
    },[]);
    async function fetchData(){
        const response = await fetch(RESTAURANT_API);
        const jsonResponse = await response.json();
        // console.log(jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurant(jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return allRestaurant;
};

export default useRestaurant;