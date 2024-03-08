import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6851243&lng=83.2035471&restaurantId={69586}&submitAction=ENTER
 */
0.
const RestaurantMenu = () =>{
    const {resId} = useParams();
    console.log(resId);
    const [restaurantData,setRestaurantData] = useState({});
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async () =>{
        const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6851243&lng=83.2035471&restaurantId=" + resId;
        const data = await fetch(url);
        const jsonData = await data.json();
        console.log(jsonData);  
        setRestaurantData(jsonData);
    };
    console.log(restaurantData?.data?.cards[0]?.card.card.text);
    return(restaurantData.length===0? <></>:<>
        <h2>{restaurantData?.data?.cards[0]?.card.card.text}</h2>
        <p>{restaurantData?.data?.cards[2]?.card?.card?.info?.cuisines.join(" ,")}</p>
        {/* <p>{restaurantData?.data?.cards[2]?.card?.card?.info?.},{}</p> */}
    </>);
}

export default RestaurantMenu;