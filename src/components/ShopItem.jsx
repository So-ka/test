import { useContext } from "react";
import ShopListData from "../components/Context"

function Item(props){
    const wishlistContext = useContext(ShopListData);
    const itemIsWishlist = wishlistContext.isWishlist(props.Itemtitle);
    function Whishlist(){
    if(!itemIsWishlist){
        wishlistContext.wishlist(props.Itemtitle);
    }else{
        wishlistContext.unwishlist(props.Itemtitle);
    }
    }
    return(<div id='ShopItem'>
        <h2>{props.Itemtitle}</h2>

        <img className="ShopItemImage" src={props.Itemimage} alt={props.Itemtitle} />
            <div id='PurchaseButtonHolder'>
                <button className={(itemIsWishlist)?'WhishListed':'WhishList'} onClick={Whishlist}>{(itemIsWishlist)?'❤️❤️':'WhishList'}</button>
                
            </div>
        </div>);
}
export default Item;