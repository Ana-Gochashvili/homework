const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const res = numbers.filter(checkEven);
console.log(res);

function checkEven(numbers) {
    return numbers % 2 === 0;
}