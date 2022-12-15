function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3
    return products[myIndex]
}

const getMore = <T>(products: T[]): T => { 
    const myIndex = 4
    return products[4]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunc<T, U extends Database>(val1: T, val2: U):object {
    return {
        val1,
        val2
    }
}

anotherFunc(3, {connection: "connection", password: "password", username: "username"})

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}