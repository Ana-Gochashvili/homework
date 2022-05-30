const someText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

let someWords = someText.split(' ');

let letters = "";
for (let x of someWords) {
    letters += x[0];
}
console.log(letters.toUpperCase());




