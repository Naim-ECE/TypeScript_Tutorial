const score: Array<number> = [];
const names: Array<string> = [];

const identityOne = (val: boolean | number): boolean | number => {
  return val;
};

const identityTwo = (val: any): any => {
  return val;
};

const identityThree = <Type>(val: Type): Type => {
  return val;
};

identityThree("3");

function identityFour<Type>(val: Type): Type {
  return val;
}
identityFour(true);

// difference between <Type> & any -> both can take any datatype but for any it can return a string when it's taking a number as an argument but <Type> can take any datatype & it'll return the same datatype as well. THAT'S THE DIFFERENCE

// shortcut

const identityFive = <T>(val: T): T => {
  return val;
};

function identitySix<T>(val: T): T {
  return val;
}

function _getSearchProducts<T>(products: Array<T>): Array<T> {
  return products;
} // same as the below one

function getSearchProducts<T>(products: T[]): T | undefined {
  // if it has less than 4 elements then this would have caused an error. So, yeah 'undefined' is needed to avoid runtime error
  // <T ,> basically used in react to mention this is a generic syntax not a jsx syntax
  return products[3];
}

getSearchProducts([1, 2, 3, 4, 5]);

// confusing part?

function anotherFunctionOne<T, U extends number>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunctionOne(3, 5);

interface Database {
  connection: boolean;
  userId: number;
  password: string;
}

function anotherFunctionTwo<T, U extends Database>(
  valOne: T,
  valTwo: U
): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunctionTwo("Naim", {
  connection: true,
  userId: 90,
  password: "kjsdhf",
});

// generic class

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
