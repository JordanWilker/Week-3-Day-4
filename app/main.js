//import ValuesController from "./Controllers/ValuesController.js";
import ListingsController from "./Controllers/ListingsController.js"
import CartController from "./Controllers/CartController.js";

class App {
  //valuesController = new ValuesController();
listingsController = new ListingsController();
cartController = new CartController();
}

window["app"] = new App();
