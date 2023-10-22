import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { RestaurantList } from "../config.js";
import "./Body.css"
import "./Header.css"


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
    const [restaurant, setRestaurant] = useState(RestaurantList);
    return (
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
                    const data = search(searchText,restaurant);
                    setRestaurant(data);
                }}  
                >
                Search
                </button>
            </div>
            <div id="hero-container" key="heroContainer">
                <>
                    {restaurant.map((Restaurant) => {
                        return <RestaurantCard {...Restaurant.info} key={Restaurant.info.id}/>
                    })}
                    {restaurant.map((Restaurant) => {
                        return <RestaurantCard {...Restaurant.info} key={Restaurant.info.id}/>
                    })}
                    {restaurant.map((Restaurant) => {
                        return <RestaurantCard {...Restaurant.info} key={Restaurant.info.id}/>
                    })}
                    {restaurant.map((Restaurant) => {
                        return <RestaurantCard {...Restaurant.info} key={Restaurant.info.id}/>
                    })}
                </>
                    
            </div>
        </>
    )
};
export default Body;