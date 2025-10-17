var score = 33;
score = 22;
score = "28";
var naim = {
  name: "Naim",
  id: 101,
};
naim = { userName: "Naim", id: 101 };
var getDbId = function (id) {
  // id.toLowerCase();
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id + 2;
  }
};
getDbId(1);
getDbId("1");
var data = [1, 2, 3]; // number or string type
data = ["1", "2", "3"];
var data2 = [1, "2", 3, "3", "4", true]; // can be a number or a string or a boolean at a same time
var data3 = [1, "2", 3, "3", "4", true];
var pi = 3.14;
// pi = 3.145; // not allowed. It's strictly 3.14
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"; // not allowed
