import { ProxyState } from "../AppState.js";

class CartService {


   get Template() {
      let result = ''
      let cartItems = ProxyState.listings.filter(l => l.numInCart > 0)
      console.log(cartItems);
      cartItems.forEach(l => {
         result += /*html*/`<div class="col">${l}</div>`
         console.log(l);
      })
      return result
   }

   get Total() {
      // TODO: Loop through all the listings to get the total
      return 0
   }

   purchase() {
      console.log("Cart service: purchase()");
      // TODO: Permanently reduce the item's stock by the amount purchased
      // TODO: Subtract the total from the wallet
   }
}

export const cartService = new CartService()