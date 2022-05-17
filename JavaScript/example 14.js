let text = 'Tree';

is_string(text);

function is_string(x){
    if (typeof x === 'string'){
        console.log(true);
    } else {
        console.log(false);
    }
}