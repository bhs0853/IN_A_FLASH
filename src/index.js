import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
/**
 * Build a Food Ordering App
Think of a cool name for your app - In a flash
Build a AppLayout
Build a Header Component with Logo & Nav Items & Cart
Build a Body Component
Build RestaurantList Component
Build RestaurantCard Component
Use static data initially
Make your card dynamic(pass in props)
Props - passing arguments to a function - Use Destructuring & Spread operator
Render your cards with dynamic data of restaurants
Use Array.map to render all the restaurants
 */

// const BurgerKing = {
//     name: "BurgerKing",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     cuisines : "Burgers, American",
//     rating : "4.1",
// };
// const Dominos = {
//     name: "Dominos",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hw419mm4irnetgbzkldu",
//     cuisines : "Pizzas, Italian, Pastas, Desserts",
//     rating : "4.2",
// };

// const body = (
//   <div id="hero-container" key="heroContainer">
//     <RestaurantCard {...RestaurantList[0].info} />
//     <RestaurantCard {...RestaurantList[1].info} />
 
//   </div>
// );

const AppLayout = function () {
  return (
    <>
      <Header/>
      <Body />
      {/* {Footer} */}
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);