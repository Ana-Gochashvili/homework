/* მაგალითი 9:
დაწერეთ ფუნქცია, რომელსაც გადაეცემა რიცხვების მასივი და დააბრუნებს
ამ მასივში მაქსიმალურ რიცხვს. (Math.max() ფუნქციის გამოყენების გარეშე)
 */


const someNumbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];


const maxi = someNumbers
    .reduce((max, num) => num > max ? num : max, someNumbers[0])

console.log({maxi});


let max = someNumbers[0];

for(const num of someNumbers){
    if(num  >max){
        max = num;
    }
}

console.log({max});