
import {generateId} from "../Utils/GenerateId.js"


export default class Listing{
    constructor(title, imgUrl,description,price,stock, id = generateId()){
        this.title = title,
        this.imgUrl = imgUrl,
        this.description = description
        this.price= price,
        this.stock = stock
        this.id = id
        
    }

    get Template(){
        return /*html*/ `
        <div class="card col-2">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.title} ${this.price}</h4>
            <p class="card-text">${this.description}</p>
            <p>Miles : ${this.stock}</p>
            <p>Price: ${this.price}</p>
        </div>
        </div>
        `
    }
}