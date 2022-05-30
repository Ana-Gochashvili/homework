console.log(is_string("7458"));
console.log(is_string("test?"));
console.log(is_string(4578));

function is_string(x) {
    if (typeof x !== 'string') {
        throw new Error("test is not a string");
    }
    return x.includes('?');

}

/*
let fruit = 'apple?';

console.log(typeof fruit !== 'string' ? throw new Error ("It is not a string") : (fruit.includes('?') ? 'true' : 'false'));

 */