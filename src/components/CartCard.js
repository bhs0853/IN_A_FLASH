import veg from "../../assests/veg-symbol.svg";
import non_veg from "../../assests/non-veg-symbol.svg";
const CartCard = (props) => {
    const {name,price,defaultPrice,isVeg,id} = props.info;
    return(
        <>
            <hr className="w-full "></hr>
            <div className="w-full h-20 flex justify-between px-3">
                <div key="left-cart" className="h-full flex items-center">
                    {isVeg? <img src={veg} className="h-4 w-4"></img>:
                    <img src={non_veg} className="h-4 w-4"></img>}
                    <div className="pl-5">{name}</div>
                </div>
                <div key="right-cart" className="flex items-center">
                ₹ {((defaultPrice)||(price))/100}
                </div>
            </div>
            <hr className="w-full"></hr>
        </>
    );

}
export default CartCard;