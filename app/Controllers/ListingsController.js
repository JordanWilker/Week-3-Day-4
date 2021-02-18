import { ProxyState } from "../AppState.js"
import {listingsService} from "../Services/ListingsService.js"

function _draw(){
    let listingsElem = document.getElementById("listings")
    let template =""
    ProxyState.listings.forEach(listing =>template += listing.Template)
    listingsElem.innerHTML = template
    console.log("controller");
}



export default class ListingsController{
    constructor(){
        ProxyState.on("listings",_draw)
        _draw()
    }

    addToCart(listItemID){
        listingsService.addToCart(listItemID)
    }
}