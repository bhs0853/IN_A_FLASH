import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI.js";
import imgurl from "../../assests/logo-trans-black.svg"
import useOnline from "../utils/useOnline.js";
import {search,fetchData} from "../utils/helper.js"

/**
 * 
 * how to pass local variables(useState) to other components -> for integrating search bar to the header
 * 
 * microservies and monolith -> how different they are.
 * 
 * fetch data from real swiggy api (api integration)
 * optional chaining - reduces errors
 * condtitional rendering - for different loading 
 * shimmer ui - load this when the data is being fetched from the actual api to make better user experience
 * useEffect - play with it (dependency array)
 * CORS , async await > promises why?
 * how to handle json data
 */



const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [allRestaurant, setAllRestaurant] = useState([]);
    useEffect(() => {
        fetchData().then((response) => {
            setAllRestaurant(response);
            setFilteredRestaurant(response);
        })
    },[]);

    const isOnline = useOnline();
    if(!isOnline){
        return(
            <div key="offline" className="my-auto">
                <h1 key="head1 ">🔴Looks you are offline!!!</h1>
                <p key="para1">Please check your internet Connection</p>
            </div>
        );
    }
    
    return allRestaurant?.length==0 ? <ShimmerUI /> : (
        <>
            <div className="flex gap-4 h-14 py-2 justify-center" key="searchBar">
                <input
                className="text-center border-2 rounded-md border-lightorg px-2 w-96 font-mono text-neutral-800 focus:bg-slate-100"
                placeholder="Search your fav restaurant 🍟"
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
                ></input>
                <button
                className=" px-5 text-white font-mono bg-orange rounded-md hover:bg-navy transition duration-500"
                onClick={()=>{
                    const data = search(searchText,allRestaurant);
                    setFilteredRestaurant(data);
                }}>
                Search
                </button>
            </div>
            <div className="flex flex-wrap my-5 mx-48 gap-20" key="heroContainer">
                {filteredRestaurant?.map((Restaurant) => {
                    return <Link key={Restaurant.info.id} to={"/restaurants/"+Restaurant.info.id} ><RestaurantCard  {...Restaurant.info} /></Link>
                })}
                {filteredRestaurant?.map((Restaurant) => {
                    return <Link key={Restaurant.info.id + "1"} to={"/restaurants/"+Restaurant.info.id} ><RestaurantCard  {...Restaurant.info} /></Link>
                })}
                {filteredRestaurant?.map((Restaurant) => {
                    return <Link key={Restaurant.info.id +"2"} to={"/restaurants/"+Restaurant.info.id} ><RestaurantCard {...Restaurant.info} /></Link>
                })}
                {filteredRestaurant?.map((Restaurant) => {
                    return <Link key={Restaurant.info.id+"3"} to={"/restaurants/"+Restaurant.info.id} ><RestaurantCard {...Restaurant.info} /></Link>
                })}
            </div>
        </>
    )
};
export default Body;