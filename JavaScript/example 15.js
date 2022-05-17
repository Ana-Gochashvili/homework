let test = "some text??";

if (typeof test === 'string') {
    if (test.includes('?')) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    throw "It is not a string";
}

