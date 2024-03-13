import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    let totalCost = 0;
    cartItems?.map((info)=>{
        totalCost += ((info.price)/100||(info.defaultPrice)/100)
    })
    return(
        <div className="w-2/5 mx-auto">
            <div className="flex justify-between">
                <h1 className="my-10 mb-10 text-xl font-semibold text-gray-700 font-mono">Cart Items ({cartItems?.length}{cartItems?.length >0? <> items - ₹ {totalCost}</> : "" })</h1>
                <button className="h-10 w-24 my-auto rounded font-mono font-medium hover:bg-black transition duration-300 bg-green-700 text-white">CheckOut</button>
            </div>
            {cartItems?.map((info)=>{
                return <CartCard info={info} key={info.id}/>
            })}
        </div>
    )
};

export default Cart;