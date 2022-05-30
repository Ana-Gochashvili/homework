/* მაგალითი 13.1:
დაწერეთ ფუნქცია, რომელსაც გადაეცემა ნატურალური რიცხვი და string-ების გამოყენების გარეშე დააბრუნებს რიცხვს,
რომელიც წარმოადგენს მოცემული რიცხვის ციფრების უკუ თანმიმდევრობით შედგენილ რიცხვს.
მაგ.: 123 -> 321, 250 -> 52 (გამოიყენეთ while ციკლი)
 */


const someNum = 9876543210;

function reverse(num) {
    let lastNum, reversed = 0, numb = Math.abs(num);

    while (numb !== 0) {
        lastNum = numb % 10;
        reversed = reversed * 10 + lastNum;
        numb = Math.floor(numb / 10);
    }
    return reversed;
}

console.log(reverse(-9876543210));