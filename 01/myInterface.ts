interface User {
  readonly _id: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial: () => string;
  startTrial2(): number;
  getCoupon(couponName: string, discount: number): number;
}

interface User {
  // allowed for adding more vars
  email: string; // double value is allowed as well
  githubToken: string;
}

// inheritance
interface Admin extends User {
  role: "admin" | "ta" | "viewer";
}

const naim: User = {
  _id: 2349,
  githubToken: "gituser",
  email: "afh@kisuakta.com",
  userId: 26,
  startTrial: () => {
    return "trial started";
  },
  startTrial2() {
    return 2;
  },
  getCoupon: (name: "naim10", off: 10) => {
    return 7;
  },
};

const naim2: Admin = {
  _id: 2349,
  githubToken: "gituser",
  email: "afh@kisuakta.com",
  userId: 26,
  startTrial: () => {
    return "trial started";
  },
  startTrial2() {
    return 2;
  },
  getCoupon: (name: "naim10", off: 10) => {
    return 7;
  },
  role: "ta",
};

naim.email = "sdkjf@kjhsd.com";
// naim._id = 245467; // it's readonly. So can't be edited
