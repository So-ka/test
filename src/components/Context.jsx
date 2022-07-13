import { createContext,useState } from "react"; 

const ShopListData = createContext(
    {
        itemsS:[],
        nbrItems:0,
        wishlist:(item)=>{},
        unwishlist:(DeleteItem)=>{},
        isWishlist:(item)=>{}
    }
);

export  function ShopListDataProvider(props)
{
    const [itemShopped,UpdateitemShopped] = useState([]);
    
    function wishlistItem(Item){
        UpdateitemShopped((PreviousitemShopped)=>{return PreviousitemShopped.concat(Item);});
    };
    function unwishlistItem(DeleteItem){
        UpdateitemShopped((PreviousitemShopped)=>{return PreviousitemShopped.filter((Item)=>{return DeleteItem!==Item});});
        
    };
    function IsWishlisted(Item){
        return itemShopped.some((item)=>{return Item===item});
        
    };
    const context = {
        itemsS:itemShopped,
        nbrItems:itemShopped.length,
        wishlist:wishlistItem,
        unwishlist:unwishlistItem,
        isWishlist:IsWishlisted
    }
    return(
        <ShopListData.Provider value={context}>{props.children}
        </ShopListData.Provider>)    ;
    }
export default ShopListData;
