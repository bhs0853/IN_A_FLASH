import { RESTAURANT_API } from "../config";
export const search = (searchText,restaurant) => {
    const text = searchText.toLowerCase();
    if(searchText==0){
        return restaurant;
    }
    const data = restaurant.filter((restaurant) => {
      const name = restaurant.info.name.toLowerCase();
      if(name.includes(text)){
        return restaurant;
      }
    });
    return data;
};

export async function fetchData (){
    const response = await fetch(RESTAURANT_API);
    const jsonResponse = await response.json();
    console.log(jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const data = jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    return data;

}
