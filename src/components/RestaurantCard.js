import {IMG_URL} from "../config";
import "./RestaurantCard.css";

/**
 * img
 * name
 * cuisines
 * rating
 */
const RestaurantCard = ({cloudinaryImageId, name, avgRating, costForTwo,cuisines, areaName}) => {
  const image = IMG_URL + cloudinaryImageId;
  return (
    <div className="card">
      <img src={image} alt={name}></img>
      <h3>{name}</h3>
      <div>
        {avgRating} . {costForTwo}
      </div>
      <div className="cusines">{cuisines.join(", ")}</div>
      <div>{areaName}</div>
    </div>
  );
};

export default RestaurantCard;