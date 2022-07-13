import Item from "../components/ShopItem";
import Pizza from "../StaticFiles/pizza.jpg"
import Juice from "../StaticFiles/Juice.jpg"
import Tommato from "../StaticFiles/tomato.jpg"
import CNuggets from "../StaticFiles/Chicken_Nuggets.jpg"
import Fries from "../StaticFiles/fries.jpg"
import Banana from "../StaticFiles/banana.jpg"
import PS5 from "../StaticFiles/PS5.jpg"
import { useContext } from "react";
import ShopListData from "../components/Context"
function HomePage(){
    const whislistdata = useContext(ShopListData);
    return(<div className='container'>
        <div id='badge-store'>{whislistdata.nbrItems}</div>
        <div id="menu">
        <Item Itemtitle="Pizza" Itemimage={Pizza}></Item>
        <Item Itemtitle="Juice" Itemimage={Juice}></Item>
        <Item Itemtitle="Tommato" Itemimage={Tommato}></Item>
        <Item Itemtitle="CNuggets" Itemimage={CNuggets}></Item>
        <Item Itemtitle="Fries" Itemimage={Fries}></Item>
        <Item Itemtitle="Banana" Itemimage={Banana}></Item>
        <Item Itemtitle="PS5" Itemimage={PS5}></Item>
        </div></div>);
}

export default HomePage;