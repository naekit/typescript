function addTwo(num: number): number{
    return num + 2
}

function getUpper(val: string): string{
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean = false){
    if(isPaid){
        console.log(`hello ${name} your order has been sent to ${email}`)
    } else {
        console.log(`sorry ${name} you didn't pay`)
    }
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5)
getUpper("must be string")
signUpUser("maki", "maki@ik.com", "makimaki", true)
loginUser("h", "h@h.com")


function getValue(myVal: number): boolean | string {
    if(myVal > 5){
        return true
    }
    return "200 OK"
}

const getHello = (s: string): string => {
    return ""
}

const heroes = ["thor", "spiderman", "ironman"]
// const heroes = [1, 2, 3]

heroes.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

export {}