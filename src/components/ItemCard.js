// import { ITEM_IMG_URL } from "../config";
import veg_symbol from "../../assests/veg-symbol.svg";
import non_veg_symbol from "../../assests/non-veg-symbol.svg";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
    {/* {imageId.length > 0 ? 
    <div className="flex flex-col justify-center">
        <img src={ITEM_IMG_URL+imageId} alt="/" className="h-3/5 w-3/5 rounded-md overflow-hidden"
        ></img>
        <button className="cursor-pointer text-center border-gray-700 rounded-sm w-12 h-8 -mt-5 bg-neutral-200 text-green-600">ADD</button>
    </div>
    :  */}
const ItemCard = (props) => {
    // console.log(props);
    const dispath = useDispatch();
    const handleAdd = (info)=>{
        // console.log(info);
        dispath(addItem(info))
    }
    const {imageId,isVeg,ribbon,name,price ,defaultPrice} = props.info;
    return(
        <>
            <div className="flex justify-between mt-2 w-full h-24 px-2">
                <div  key="left-div">
                    <div className="flex">
                        {isVeg? <img src={veg_symbol} className="h-4 w-4"
                        ></img>:
                        <img src={non_veg_symbol} className="h-4 w-4"
                        ></img>}
                        <span className="-mt-1 pl-2 text-yellow-300 font-medium text-lg">{ribbon?.text}</span>
                    </div>
                    <div className="text-lg m-1 font-mono">{name}</div>
                    <div className="font-bold">₹ {((defaultPrice)||(price))/100}</div>
                </div>
                <div key="right-div" className="flex h-24 items-center">
                    <button className="cursor-pointer font-medium text-center border-gray-700 rounded-md w-12 h-8 my-auto bg-neutral-200 text-green-600"
                    onClick={()=>handleAdd(props.info)}>ADD</button>
                </div>
            </div>
            <hr className="w-full px-2 -mt-2"></hr>
        </>
    );
}
export default ItemCard;