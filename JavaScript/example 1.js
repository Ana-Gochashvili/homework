const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const result = numbers.filter(checkEven);

function checkEven(numbers) {
    return numbers % 2 === 0;
}