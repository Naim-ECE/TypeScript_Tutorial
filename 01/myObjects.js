"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Naim",
    email: "asjvnsdvn@kisuakta.com",
    isActive: true,
};
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
}
var newUser = { name: "Naim", isPaid: true, email: "asfnjfd@ksjfdsnf.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", paid: "yes" };
}
// passing object type -> which is more accurate
function createUser2(user) { }
createUser2({ name: "", email: "", isActive: true });
function createUser3(user) {
    return { name: "", email: "", isActive: true };
}
var myUser = {
    _id: "12345",
    name: "Naim",
    email: "231423jlnf@hj.com",
    isActive: true,
};
myUser.email = "sajdjfio48ufr@vjsdfv.com";
var myUser2 = {
    cardnumber: "213",
    carddate: "uaih",
    cvv: 34623,
};
