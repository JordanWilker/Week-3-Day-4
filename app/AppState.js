import Value from "./Models/Value.js"
import Listing from "./Models/Listing.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { generateId } from "./Utils/GenerateId.js"
let list1 = new Listing({title: "Gun", imgUrl:"https://picsum.photos/id/2/100",description:"Cool",price: 20, stock: 15,})
let list2 = new Listing({title: "Gun 2", imgUrl:"https://picsum.photos/id/1/100/101",description:"Electric Boogaloo",price: 200, stock: 1})
class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
/**@type {Listing[]} */
  listings = [list1, list2]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
