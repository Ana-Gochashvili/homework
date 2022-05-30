const numbs = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];

console.log(numbs
    .filter((numb) => numb > 0)
    .reduce((sum, numb) => sum + numb, 0))
