const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

numbers
    .filter((item) => item % 2 === 0)
    .forEach((item) => console.log(item));
