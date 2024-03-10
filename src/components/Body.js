import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { RestaurantList } from "../config.js";
import { Link } from "react-router-dom";
import ShimmerUI from "./Shimmer.js";
import useOnline from "../utils/useOnline.js";
import "./Body.css"
import "./Header.css"

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

function search(searchText,restaurant){
    const text = searchText.toLowerCase();
    if(searchText==0){
        return RestaurantList;
    }
    const data = restaurant.filter((restaurant) => {
      const name = restaurant.info.name.toLowerCase();
      if(name.includes(text)){
        return restaurant;
      }
    });
    return data;
}

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [allRestaurant, setAllRestaurant] = useState([]);
    useEffect(() => {
        fetchData();
        // const timer = setInterval(()=>{
        //     console.log("interval running")
        // },1000);
        // return () => {clearInterval(timer)};
    },[]);
    async function fetchData(){
        const response = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6851243&lng=83.2035471");
        const jsonResponse = await response.json();
        console.log(jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurant(jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(jsonResponse?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const isOnline = useOnline();
    if(!isOnline){
        return(
            <div key="offline" className="isonline-container">
                <h1 key="head1 ">🔴Looks you are offline!!!</h1>
                <p key="para1">Please check your internet Connection</p>
            </div>
        );
    }
    return allRestaurant?.length==0 ? <ShimmerUI /> : (
        <>
            <div className="searchBar" key="searchBar">
                <input
                className="search-input"
                placeholder="say something !!!"
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
                ></input>
                <button
                className="search-btn"
                onClick={()=>{
                    const data = search(searchText,allRestaurant);
                    setFilteredRestaurant(data);
                }}>
                Search
                </button>
            </div>
            <div id="hero-container" key="heroContainer">
                {filteredRestaurant?.map((Restaurant) => {
                    return <Link key={Restaurant.info.id} to={"/restaurants/"+Restaurant.info.id} className="link-card"><RestaurantCard {...Restaurant.info} /></Link>
                })}
                {filteredRestaurant?.map((Restaurant) => {
                    return <Link key={Restaurant.info.id + "1"} to={"/restaurants/"+Restaurant.info.id} className="link-card"><RestaurantCard  {...Restaurant.info} /></Link>
                })}
                {filteredRestaurant?.map((Restaurant) => {
                    return <Link key={Restaurant.info.id +"2"} to={"/restaurants/"+Restaurant.info.id} className="link-card"><RestaurantCard {...Restaurant.info} /></Link>
                })}
                {filteredRestaurant?.map((Restaurant) => {
                    return <Link key={Restaurant.info.id+"3"} to={"/restaurants/"+Restaurant.info.id} className="link-card"><RestaurantCard {...Restaurant.info} /></Link>
                })}                   
            </div>
        </>
    )
};
export default Body;