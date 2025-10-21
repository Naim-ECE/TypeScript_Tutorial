class Instagram {
    // means it must have the properties of 'TakePhoto'
    //   cameraMode = "light";
    //   filter = "good";
    //   burst = 3;
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, shorts // multiple value can be added but shouldn't take less than those valuesি
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        console.log(`This is a good story`);
    }
}
export {};
//# sourceMappingURL=second.js.map