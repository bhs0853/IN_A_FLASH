import Logo from "../../assests/logo-trans-black.svg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useOnline();
  const cartItems = useSelector(store => store.cart.items);
  return (
    <div className="flex bg-slate-100 h-16 justify-between px-8" key="header">
      <div className="flex gap-3" key="left-header">
        <Link to={"/"}>
          <img src={Logo} className="h-14 w-14 pt-1" alt="logo"></img>
        </Link>
        <Link to={"/"}>
          <h3 className="text-neutral-700 font-mono py-5 font-bold">IN A FLASH</h3>
        </Link> 
      </div>
      <div  key="rightHeader" className="flex">
        <ul className="flex items-center text-neutral-700 text-[15px] font-medium">
          <li ><Link to="/" className="py-2 px-3 transition duration-500 hover:text-neutral-950 hover:bg-orange rounded-md">Home</Link></li>
          <li><Link to="/about" className="py-2 px-3 transition duration-500 hover:text-neutral-950 hover:bg-orange rounded-md">About us</Link></li>
          <li><Link to="/contactus" className="py-2 px-3 transition duration-500 hover:text-neutral-950 hover:bg-orange rounded-md">Contact us</Link></li>
          <li><Link to="/cart" className="py-2 px-3 transition duration-500 hover:text-neutral-950 hover:bg-orange rounded-md">cart
            <span className="text-black font-bold">({cartItems?.length})</span>
          </Link></li>
          <li className="text-[10px] pl-3 py-1">{isOnline? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
