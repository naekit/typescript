"use strict";
class TakePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calc
        return 8;
    }
}
class Instagram2 extends TakePhoto2 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia filter");
    }
}
const nn = new Instagram2("test1", "test2", 3);
