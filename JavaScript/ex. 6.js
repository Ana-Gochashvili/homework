const array = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];

console.log(array
    .filter((item) => item !== 0)
    .map((item) => item < 0 ? item * (-1) : item)
    .reduce((total, num) => total * num, 1)
)
