import ValuesController from "./Controllers/ValuesController.js";
import ListingsController from "./Controllers/ListingsController.js"

class App {
  //valuesController = new ValuesController();
listingsController = new ListingsController();
}

window["app"] = new App();
