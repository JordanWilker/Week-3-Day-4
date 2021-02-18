
import {generateId} from "../Utils/GenerateId.js"
import {ProxyState} from "../AppState.js"

export default class Listing{
    constructor({title, imgUrl,description,price,stock, id = generateId()}){
        this.title = title,
        this.imgUrl = imgUrl,
        this.description = description
        this.price= price,
        this.stock = stock,
        this.id = id
        this.numInCart = 0
        
    }

    get Template(){
        return /*html*/ `
        <div class="card col-2">
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.title}</h4>
                <p class="card-text">${this.description}</p>
                <p>Stock : ${this.stock}</p>
                <p>Price: ${this.price}</p>
                <button class="btn btn-success"onclick="app.listingsController.addToCart('${this.id}')">Add to Cart</button>
            </div>
        </div>
        `
    }
}