interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  // means it must have the properties of 'TakePhoto'
  //   cameraMode = "light";
  //   filter = "good";
  //   burst = 3;

  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
  }
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public shorts: string // multiple value can be added but shouldn't take less than those valuesি
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
  }

  createStory(): void {
    console.log(`This is a good story`);
  }
}
