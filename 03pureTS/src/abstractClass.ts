abstract class TakePhoto2 {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        // some complex calc
        return 8
    }
}

class Instagram2 extends TakePhoto2 {
    constructor( 
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia filter")
    }
}

const nn = new Instagram2("test1", "test2", 3)