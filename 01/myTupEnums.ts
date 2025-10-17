// tuple

const ar: (string | number)[] = [1, "1"];

let User: [string, number, boolean];

User = ["hc", 1, true];

let User2: [string, number | boolean];
User2 = ["hc", true];
User2 = ["ch", 5];

// strict type
let rgb: [number, number, number] = [255, 122, 101]; // colors should be within 3 values

type User3 = [string, string];

const newUser: User3 = ["Naim", "asdg@foogle.com"];

newUser[1] = "ab@hoggle.com";

// newUser.push(true); // can't be pushed
