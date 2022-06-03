import Point from './Point';

export default class Line extends Point {
    #pnt1;
    #pnt2;

    constructor(x, y, pnt1, pnt2) {
        super(x, y);
        this.#pnt1 = pnt1;
        this.#pnt2 = pnt2;
    }

    get pnt1() {
        return this.#pnt1;
    }

    get pnt2() {
        return this.#pnt2
    }

    length() {
        return this.#pnt1.distance(this.#pnt2);
    }

    toString() {
        return `Line(${this.#pnt1},${this.#pnt2})`
    }
}

let point1 = new Point(3, -4);
let point2 = new Point(6, 0);

const line1 = new Line(point1, point2);
const line2 = new Line(point2, point1);

console.log(line1.length(line2));