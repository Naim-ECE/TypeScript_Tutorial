let greetings = "Hello Naim";

greetings.toLowerCase();

console.log(greetings);

// number

let userID: number = 213124;
userID.toFixed();
let userID2 = 32424;
userID2.toFixed();

// boolean
let isLoggedIn: boolean = true;
isLoggedIn.valueOf();

// any

// let hero;
let hero: string;
const getHero = () => {
  return "Thor";
};

hero = getHero();

// functions

function getUpper(val: string) {
  return val.toUpperCase();
}

let signUpUser = (name: string, email: string, isPaid: boolean) => {};

function addTwo(num: number): number {
  // 'num: number' means num variable has to be a number and (num: number): number means it has to return a number
  return num + 2;
  // return "hello";
}

function anewNum(num: number) {
  // the return type isn't specified here.
  if (num > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["Khalid", "Ubaida", "Saad"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
  return; // it doesn't return anything but single return is possible. Means function can be exited immediately.
}

function consoleError2(errMsg: string): never {
  throw new Error(errMsg);
  // return; // no return statement is allowed here. Means function has to run top to bottom.
}

export {};
