function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log(`Please insert your id`);
    return;
  }
  return id.toUpperCase();
}

// !!!!!!!!!!!! DO NOT DO THIS !!!!!!!!!!!!
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// ' 0, NaN, "", 0n, null, undefined ' they all are false values. Here [] (Array), "" (Empty string) types are object

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    // specifically, narrowing "isAdmin" is present in Admin which is a type of account
    return account.isAdmin;
  }
}

// funther narrowing the types

// instanceof -> whenever a 'new' keyword is declared, such const d = new Date() that time 'd instanceof Date' really making sure that it's from there or not.
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// type predicates

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  // here, it is sure that the pet is Fish.
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish Food";
  } else {
    pet;
    return "Bird Food";
  }
}

// discriminated unions

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

// type Shape = Circle | Square;
type Shape = Circle | Square | Rectangle;

// Discriminated type

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // return shape.side ** 2; // this is good for two cases. But for the third one to add this will throw an error
}

// never type (recommended)

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return 0.5 * shape.width * shape.length;
    default:
      const _defaulthape: never = shape;
      return _defaulthape; // this checks if in future a new shape get adds in, then it will not run it thus, no error messages
  }
}
