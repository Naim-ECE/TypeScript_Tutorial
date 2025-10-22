abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void; // no matter which class inherits this class it must implement this method

  getReelTime(): number {
    // some complex calculation
    return 3;
  }
}

// const naim = new TakePhoto("Test", "Test"); // since 'TakePhoto' is an abstract class, it can't be created as an object

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter); // By calling super(cameraMode, filter);, it's passing the necessary arguments (cameraMode and filter) up to the TakePhoto constructor, allowing it to properly initialize those inherited properties on the new Instagram object before the Instagram constructor finishes its own work (like initializing burst).The super() call in the subclass's constructor executes the parent class's constructor.
  }
  getSepia(): void {
    console.log(`OK`);
  }
}

const naim = new Instagram("Test", "Test", 26); // but the class which'll inherit the abstract class can have the object

naim.getReelTime();

// abstract methods -> mandatory
// non-abstract methods -> optional --=-- This is a great difference between interface and abstract class
