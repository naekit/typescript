interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string,
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

const nikita: User = { dbId: 22, email: "n@n.com", userId: 11, startTrial: () => { return "trial started" }, getCoupon: (name: "nn", val: 10) => {return 10} }
nikita.email = "n@an.com"
// nikita.dbId = 33 not possible

interface User {

}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}