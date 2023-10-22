import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../config";
import "./Body.css"

const Body = () => {
    return (
        <div id="hero-container" key="heroContainer">
            <>
                {RestaurantList.map((Restaurant) => {
                    return <RestaurantCard {...Restaurant.info} key={Restaurant.info.id}/>
                })}
                {RestaurantList.map((Restaurant) => {
                    return <RestaurantCard {...Restaurant.info} key={Restaurant.info.id}/>
                })}
                {RestaurantList.map((Restaurant) => {
                    return <RestaurantCard {...Restaurant.info} key={Restaurant.info.id}/>
                })}
                {RestaurantList.map((Restaurant) => {
                    return <RestaurantCard {...Restaurant.info} key={Restaurant.info.id}/>
                })}
            </>
                
        </div>
    )
};
export default Body;