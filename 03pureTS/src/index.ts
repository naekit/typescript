// class User {
//     email: string;
//     name: string;
//     private readonly city: string;
//     constructor(email: string, name: string, city: string){
//         this.email = email;
//         this.name = name;
//         this.city = city;
//     }
// }
class User {

    protected _courseCount = 1
    readonly city: string = "nyc";
    constructor(
        public email: string, 
        public name: string, 
        // private userId: string
    ){
    }
    private deleteToken(){
        console.log("Token deleted")
    }

    get getAppleEmail(): string{
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }

}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const nik = new User("str@s.com", "n") 


console.log(nik)