import { ProxyState } from "../AppState.js";
import { cartService } from "../Services/CartService.js";

function _draw() {
   document.getElementById('cart-contents').innerHTML = cartService.Template
}

export default class CartController {
   constructor() {
      ProxyState.on('listings', _draw)
      _draw()
   }

   purchase() {
      cartService.purchase()
   }
}