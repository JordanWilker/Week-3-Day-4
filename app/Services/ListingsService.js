import{ProxyState} from "../AppState.js"
import Listing from "../Models/Listing.js"


class ListingsService{
    constructor(){
        
    }

    addToCart(listItemID){
        ProxyState.listings.find(i => i.id == listItemID).numInCart++
        ProxyState.listings.find(i => i.id == listItemID).stock--

        console.log(ProxyState.listings.find(i => i.id == listItemID));
    }

}

export const listingsService = new ListingsService