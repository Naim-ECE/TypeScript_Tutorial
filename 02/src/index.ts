console.log("Typescript is here");
console.log("Typescript is great");

class User {
  email: string; // by default it's public
  name: string;
  private readonly city: string = "Rajshahi";
  constructor(email: string, name: string) {
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
  private _courseCount = 1;
  private readonly city: string = "Rajshahi";
  constructor(
    public email: string,
    public name: string,
    private userId: number
  ) {
    this.email = email;
    this.name = name;
    // this.userId = userId;
  }

  private deleteToken() {
    console.log(`Token deleted`);
  }

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    // it doesn't have any return type. Even :void can't be added here
    if (courseNum <= 1) {
      throw new Error(`Course count should be more than 1`);
    }
    this._courseCount = courseNum;
  }

  // suppose, a free course is available for those who signs up to the account. This sign up method will be taken care of by getter or 'get' method & setter or 'set' method will change the properties based on some conditions if necessary.
}

const naim2 = new User2("akdfh@kisuatka.com", "Naim", 3);
// console.log(naim2.userId); // can't be accessed here cuz it's private

// naim2.deleteToken(); // can't be accessed cuz this method is private as well
