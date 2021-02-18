import { ProxyState } from "../AppState.js";

class CartService {


   get Template() {

      return ''
   }

   get Total() {
      // TODO: Loop through all the listings to get the total
      return 0
   }

   purchase() {
      // TODO: Permanently reduce the item's stock by the amount purchased
      // TODO: Subtract the total from the wallet
   }
}

export const cartService = new CartService()