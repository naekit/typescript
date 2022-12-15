"use strict";
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
const getMore = (products) => {
    const myIndex = 4;
    return products[4];
};
function anotherFunc(val1, val2) {
    return {
        val1,
        val2
    };
}
anotherFunc(3, { connection: "connection", password: "password", username: "username" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
