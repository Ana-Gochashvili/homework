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

    set x(x2) {
        this.#x = x2;
    }

    set y(y2) {
        this.#y = y2;
    }

    distance() {
        return Math.sqrt(((x2 - this.#x) ** 2) + ((y2 - this.#y) ** 2))
    }

    toString() {
        return Point.toString();
    }
}

let point1 = new Point(3, -4);

let point2 = new Point(6, 0);


console.log(point1.toString);

console.log(point2);
console.log(point1);

// function distance(point1,point2){
//
//     return Math.sqrt(((point2.x-point1.x)**2)+((point2.y-point1.y)**2))
// }

console.log(point2.distance);