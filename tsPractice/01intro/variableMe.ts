let greetings: string = "Hello World";

greetings.toLowerCase();
console.log(greetings)

// number
// no need to actually declare :number TS infers it
let userId: number = 334466.3


// no implicit any

let hero: string;
function getHero(){
    return "thor"
}

hero = getHero()