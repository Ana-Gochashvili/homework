let test = '487';

is_string(test);

function is_string(x) {
    if (typeof x === 'string') {
        if (x.includes('?')) {
            console.log(true);
        } else {
            console.log(false);
        }
    } else {
        throw new Error("It is not a string");
    }
}

