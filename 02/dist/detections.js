function detectType(val) {
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  return val + 3;
}
function provideId(id) {
  if (!id) {
    console.log(`Please insert your id`);
    return;
  }
  return id.toUpperCase();
}
// !!!!!!!!!!!! DO NOT DO THIS !!!!!!!!!!!!
function printAll(strs) {
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
function isAdminAccount(account) {
  if ("isAdmin" in account) {
    // specifically, narrowing "isAdmin" is present in Admin which is a type of account
    return account.isAdmin;
  }
}
// funther narrowing the types
// instanceof -> whenever a 'new' keyword is declared, such const d = new Date() that time 'd instanceof Date' really making sure that it's from there or not.
function logValue(x) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
function isFish(pet) {
  // here, it is sure that the pet is Fish.
  return pet.swim !== undefined;
}
function getFood(pet) {
  if (isFish(pet)) {
    pet;
    return "Fish Food";
  } else {
    pet;
    return "Bird Food";
  }
}
// Discriminated type
function getTrueShape(shape) {
  if (shape.kind === "circle") {
    return Math.PI * Math.pow(shape.radius, 2);
  }
  // return shape.side ** 2; // this is good for two cases. But for the third one to add this will throw an error
}
// never type (recommended)
function getArea(shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * Math.pow(shape.radius, 2);
    case "square":
      return Math.pow(shape.side, 2);
    case "rectangle":
      return 0.5 * shape.width * shape.length;
    default:
      const _defaulthape = shape;
      return _defaulthape; // this checks if in future a new shape get adds in, then it will not run it thus, no error messages
  }
}
export {};
//# sourceMappingURL=detections.js.map
