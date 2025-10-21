console.log("Typescript is here");
console.log("Typescript is great");
class User {
    constructor(email, name) {
        this.city = "Rajshahi";
        this.email = email;
        this.name = name;
    }
}
const naim = new User("ajsdfhgbawdhl@kisuakta.com", "Naim");
// naim.city = "Rajshahi"; //it's readonly
//naim.city; // still accessible before making it private
// naim.city; // can't be accessed cuz it's private
// more professional
class User2 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Rajshahi";
        this.email = email;
        this.name = name;
        // this.userId = userId;
    }
    deleteToken() {
        console.log(`Token deleted`);
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        // it doesn't have any return type. Even :void can't be added here
        if (courseNum <= 1) {
            throw new Error(`Course count should be more than 1`);
        }
        this._courseCount = courseNum;
    }
}
const naim2 = new User2("akdfh@kisuatka.com", "Naim", 3);
export {};
// console.log(naim2.userId); // can't be accessed here cuz it's private
// naim2.deleteToken(); // can't be accessed cuz this method is private as well
//# sourceMappingURL=index.js.map