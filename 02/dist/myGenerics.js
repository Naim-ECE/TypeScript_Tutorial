const score = [];
const names = [];
const identityOne = (val) => {
    return val;
};
const identityTwo = (val) => {
    return val;
};
const identityThree = (val) => {
    return val;
};
identityThree("3");
function identityFour(val) {
    return val;
}
identityFour(true);
// difference between <Type> & any -> both can take any datatype but for any it can return a string when it's taking a number as an argument but <Type> can take any datatype & it'll return the same datatype as well. THAT'S THE DIFFERENCE
// shortcut
const identityFive = (val) => {
    return val;
};
function identitySix(val) {
    return val;
}
function _getSearchProducts(products) {
    return products;
} // same as the below one
function getSearchProducts(products) {
    // if it has less than 4 elements then this would have caused an error. So, yeah 'undefined' is needed to avoid runtime error
    // <T ,> basically used in react to mention this is a generic syntax not a jsx syntax
    return products[3];
}
getSearchProducts([1, 2, 3, 4, 5]);
// confusing part?
function anotherFunctionOne(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunctionOne(3, 5);
function anotherFunctionTwo(valOne, valTwo) {
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
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
export {};
//# sourceMappingURL=myGenerics.js.map