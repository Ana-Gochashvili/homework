/*მაგალითი 12:
დაწერეთ პროგრამა, რომელიც ჩადგმული ციკლით დაბეჭდავს შემდეგს:
პასუხი:
*
* *
* * *
* * * *
* * * * *

*/
drawTree(10);

function drawLine(numberOfFlakes) {
    let line = "";
    for (let i = 0; i < numberOfFlakes; i++) {
        line += "* ";
    }
    return (line);
}

function drawTree(numberOfLines) {
    for (let i = 1; i <= numberOfLines; i++) {
        console.log(drawLine(i));
    }
}