import { useState } from "react";
import Logo from "../../assests/logo-trans-white.svg";
import { RestaurantList } from "../config";
import "./Header.css";


function search(key){
  const names = RestaurantList.map((Restaurant) => {
    return Restaurant.info.name;
  });
};

const Header = () => {
  const [searchText, setSearchText] = useState();
  return (
    <div id="header" key="header">
      <div className="left-header" key="left-header">
        <a href="/">
          <img src={Logo} id="logo-img" alt="logo"></img>
          <h3 className="logo-text">IN A FLASH</h3>
        </a>
      </div>
      <div className="searchBar" key="searchBar">
        <input
          className="search-input"
          value={searchText}
          placeholder="Find Out......"
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
        ></input>
        <button className="search-btn" onClick={search}>Search</button>
      </div>
      <div className="right-header" key="rightHeader">
        <ul className="right-header">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li className="cart">Cart</li>
        </ul>
      </div>
    </div>
  );
}   

export default Header;
