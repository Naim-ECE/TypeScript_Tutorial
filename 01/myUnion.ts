var score: number | string = 33;

score = 22;
score = "28";

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

var naim: User | Admin = {
  name: "Naim",
  id: 101,
};

naim = { userName: "Naim", id: 101 };

var getDbId = (id: number | string) => {
  // id.toLowerCase();

  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id + 2;
  }
};

getDbId(1);
getDbId("1");

let data: number[] | string[] = [1, 2, 3]; // number or string type
data = ["1", "2", "3"];

const data2: (number | string | boolean)[] = [1, "2", 3, "3", "4", true]; // can be a number or a string or a boolean at a same time
const data3: any[] = [1, "2", 3, "3", "4", true];

let pi: 3.14 = 3.14;
// pi = 3.145; // not allowed. It's strictly 3.14

let seatAllotment: "aisle" | "middle" | "middle";

seatAllotment = "aisle";
// seatAllotment = "crew"; // not allowed

export {};
