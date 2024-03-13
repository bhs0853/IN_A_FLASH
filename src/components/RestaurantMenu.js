import { useParams, Link } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerUI from "./ShimmerUI";
import star from "../../assests/star.png";
import quarter from "../../assests/time-quarter.svg";
import Category from "./Category";
import ItemCard from "./ItemCard";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const restaurantData = useRestaurantMenu(resId);
    if(!restaurantData) return <ShimmerUI/>;
    // console.log(restaurantData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories);
    const menuCategory = restaurantData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(restaurantData);
    // console.log(menuCategory);
    const {name ,city,cuisines,areaName, sla,avgRatingString,totalRatingsString,expectationNotifiers,costForTwoMessage} = restaurantData[0]?.card?.card?.info;
    return(
    <div className="mx-auto w-2/5 mt-10 border-slate-950" >
        <div key="menu-header">
            <div className="flex justify-between">
                <div>
                    <div className="flex text-[10px] -ml-7 mb-5">    
                        <Link to="/" className="hover:underline">Home</Link>
                        <p>&nbsp;/&nbsp; </p>
                        <Link to="/" className="hover:underline">   {city} </Link>
                        <p>&nbsp;/&nbsp; </p>
                        {name}
                    </div>
                    <h3 className="text-xl font-mono font-medium ">{name}</h3>
                    <p className="text-sm text-gray-500">{cuisines.join(", ")}</p>
                    <p className="text-sm text-gray-500">{areaName}, {sla.lastMileTravelString}</p>
                </div>
                <div className="mt-10 border-2 rounded-md w-16 h-16">
                    <div className="flex items-center justify-center my-1 font-sans font-bold text-green-600">
                        <img src={star} className="h-3 w-3"></img>
                        &nbsp;{avgRatingString}
                    </div>
                    <hr className="mx-auto w-4/5"></hr>
                    <div className="my-2 text-[10px] flex font-sans items-center justify-center text-gray-500 font-medium">
                        {totalRatingsString}
                    </div>
                </div>
            </div>
            <hr className="w-full my-2"></hr>
            <div className="flex">
                <div className="flex">
                    <img src={quarter} className="h-4 w-4 m-1.5"></img>
                    <p className="font-bold text-sm text-gray-700 my-1 mr-3">&nbsp;{sla.slaString}</p>|
                    <p className="font-bold text-sm text-gray-700 my-1 ml-3">{costForTwoMessage}</p>
                </div>
            </div>
        </div>
        <div>
            <h1 className="text-xl font-semibold mt-2 -ml-2">MENU </h1>
            {
                menuCategory?.categories !=undefined ? 
                menuCategory?.categories.map((e,index)=>{
                    return <Category menu= {menuCategory?.categories[index]} key={index +"1"}/>
                }) : menuCategory?.itemCards.map((e,index) => {
                    return <ItemCard info = {menuCategory?.itemCards[index].card.info} key={index+"2"}/>
                })
            }
            {/* <Category menu = {menuCategory[0]}/> */}
        </div>

    </div>
    );
}

export default RestaurantMenu;