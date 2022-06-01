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
    distance(pnt) {
        return Math.sqrt(((pnt.x- this.#x) ** 2) + ((pnt.y - this.#y) ** 2))
    }
    toString() {
        return `Point(${this.#x},${this.#y})`;
    }
}

let point1 = new Point(3, -4);

let point2 = new Point(6, 0);

console.log(point2);
console.log(point1);

console.log(point2.distance(point1));

console.log(toString(point1));