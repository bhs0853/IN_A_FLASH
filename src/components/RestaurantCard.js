import STAR_URL from "../../assests/star.png";
import {IMG_URL} from "../config";

const RestaurantCard = ({cloudinaryImageId, name, avgRating, costForTwo,cuisines, areaName}) => {
  const image = IMG_URL + cloudinaryImageId;
  return (
    <div className="h-64 w-52 p-3 justify-center overflow-hidden transition duration-300 rounded-sm hover:bg-desert">
      <img className="h-1/2 w-full rounded" src={image} alt={name}></img>
      <h3 className="pt-0.5 font-medium font-sans text-[18px]">{name}</h3>
      <div className="flex">
        <div><img className="h-5 w-5 mt-1" src={STAR_URL}></img> </div>
        <div className="pl-2"> {avgRating} . {costForTwo}</div>
      </div>
      <div className="overflow-hidden max-h-[1.60rem]">{cuisines.join(", ")}</div>
      <div>{areaName}</div>
    </div>
  );
};

export default RestaurantCard;