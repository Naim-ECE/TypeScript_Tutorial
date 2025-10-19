// tuple

const ar: (string | number)[] = [1, "1"];

let User: [string, number, boolean];

User = ["hc", 1, true];

let User2: [string, number | boolean];
User2 = ["hc", true];
User2 = ["ch", 5];

// strict type
let rgb: [number, number, number] = [255, 122, 101]; // colors should be within 3 values

// inheritance

type User3 = [string, string];

type User4 = User3 & {
  roll: number;
};

const newUser: User3 = ["Naim", "asdg@foogle.com"];

newUser[1] = "ab@hoggle.com";

const newUser2: User4 = ["Naim", "asdg@foogle.com"] as User4;

newUser2.roll = 28197;

type User3Object = {
  name: string;
  email: string;
};

// Now, 'inheritance' via intersection works perfectly!
type User4Object = User3Object & {
  roll: number;
};

const newUser3: User4Object = {
  name: "Naim",
  email: "asdg@foogle.com",
  roll: 234256,
};
