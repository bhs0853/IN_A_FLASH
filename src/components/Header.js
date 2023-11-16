import Logo from "../../assests/logo-trans-white.svg";
import "./Header.css";
import { Link } from "react-router-dom";

//brainstorm hoe to pass the restaurant list to body

const Header = () => {
  return (
    <div id="header" key="header">
      <div className="left-header" key="left-header">
        <a href="/">
          <img src={Logo} id="logo-img" alt="logo"></img>
          <h3 className="logo-text">IN A FLASH</h3>
        </a>
      </div>
      
      <div className="right-header" key="rightHeader">
        <ul className="right-header">
          <li ><Link to="/" className="app-route">Home</Link></li>
          <li><Link to="/about" className="app-route">About us</Link></li>
          <li><Link to="/contactus" className="app-route">Contact us</Link></li>
          <li><Link className="cart app-route">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
