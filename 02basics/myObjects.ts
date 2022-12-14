// const User = {
//     name: "niko",
//     email: "niko@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {

// }
// createUser({name: "user", isPaid: true})

// function createCourse():{name: string, price: number} {
//     return {name: "reactjs", price: 399}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }
// function createUser(user: User): User{
//     return {...user}
// }

// createUser({name: "", email:"", isActive: true})

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCard?: number;
}

let myUser: User = {
    _id: "44jf",
    name: "jef",
    email: "jef@f.com",
    isActive: true,
}

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    carddate: string;
}

type cardDetails = cardNumber & cardDate & {cvv: number}

myUser.email = "jeff@f.com"
// myUser._id = "24"


export{}