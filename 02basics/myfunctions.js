"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    if (isPaid) {
        console.log("hello ".concat(name, " your order has been sent to ").concat(email));
    }
    else {
        console.log("sorry ".concat(name, " you didn't pay"));
    }
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("must be string");
signUpUser("maki", "maki@ik.com", "makimaki", true);
loginUser("h", "h@h.com");
