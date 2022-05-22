/*მაგალითი 12:
დაწერეთ პროგრამა, რომელიც ჩადგმული ციკლით დაბეჭდავს შემდეგს:
პასუხი:
*
* *
* * *
* * * *
* * * * *

*/

drawFlake(5);

let flake = '';

function drawFlake(x) {
    for (let i = 0; i > x; i++) {
        flake += "*";
        flake++;
        console.log(flake);
    }
}