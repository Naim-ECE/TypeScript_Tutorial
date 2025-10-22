class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation
        return 3;
    }
}
// const naim = new TakePhoto("Test", "Test"); // since 'TakePhoto' is an abstract class, it can't be created as an object
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter); // By calling super(cameraMode, filter);, it's passing the necessary arguments (cameraMode and filter) up to the TakePhoto constructor, allowing it to properly initialize those inherited properties on the new Instagram object before the Instagram constructor finishes its own work (like initializing burst).The super() call in the subclass's constructor executes the parent class's constructor.
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log(`OK`);
    }
}
const naim = new Instagram("Test", "Test", 26); // but the class which'll inherit the abstract class can have the object
naim.getReelTime();
export {};
// abstract methods -> mandatory
// non-abstract methods -> optional --=-- This is a great difference between interface and abstract class
//# sourceMappingURL=abstractClass.js.map