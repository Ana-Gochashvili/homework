class Point {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    distance(x, y, x2, y2) {   //ეს ვერ გავაკეთე
        return Math.sqrt(((x2 - this.#x) ** 2) + ((y2 - this.#y) ** 2))
    }

    toString(x, y) {
        console.log(this.#x.toString(), this.#y.toString())
    }
}

// function distance(z,w,x2,y2){
//        return Math.sqrt(((x2-z)**2)+((y2-w)**2))
// }
// console.log(distance(3,-4,6,0));


let point1 = new Point(9, -5);

let point2 = new Point(-11, 8);

point1.toString();
point2.toString();

point2.x = 20;

console.log(point2.x);