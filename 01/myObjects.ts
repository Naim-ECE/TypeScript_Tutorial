const User = {
  name: "Naim",
  email: "asjvnsdvn@kisuakta.com",
  isActive: true,
};

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

let newUser = { name: "Naim", isPaid: true, email: "asfnjfd@ksjfdsnf.com" };
createUser(newUser);

function createCourse(): { name: string; paid: string } {
  return { name: "reactjs", paid: "yes" };
}

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// passing object type -> which is more accurate

function createUser2(user: User) {}

createUser2({ name: "", email: "", isActive: true });

function createUser3(user: User): User {
  return { name: "", email: "", isActive: true };
}

// some out of the box

type User2 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // '?' says this value is optional to use
};

let myUser: User2 = {
  _id: "12345",
  name: "Naim",
  email: "231423jlnf@hj.com",
  isActive: true,
};

myUser.email = "sajdjfio48ufr@vjsdfv.com";
// myUser._id = "sedfj"; // can't be edited any value because of read only property

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv?: number;
  };

let myUser2: cardDetails = {
  cardnumber: "213",
  carddate: "uaih",
  cvv: 34623,
};

export {};
