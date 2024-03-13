import ItemCard from "./ItemCard";

const Category = (props) => {

    const {title,itemCards} = props.menu;
    // console.log(title,itemCards);

    return(
        <div className="w-full p-1">
            <div className="text-lg font-serif -ml-2 font-bold text-medorg ">{title}</div>
            <hr className="w-1/5 -ml-2 mb-5"></hr>
            {itemCards.map((e,index) => {
                return <ItemCard info = {itemCards[index].card.info} key={index+"2"}/>
            })}
           {/* <ItemCard info={itemCards[0].card.info}/> */}
        </div>
    )
}
export default Category;