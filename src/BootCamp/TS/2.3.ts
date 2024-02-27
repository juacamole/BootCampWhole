let array: number[] = [1, 2, 3, 4, 5];
array = array.map((element) => element * 2);
console.log(array);

array = array.filter(num => num > 4);
console.log(array)

let sum: number = array.reduce((num1, num2) => num1+ num2, 0);
console.log(sum);

let atleastOneNumBiggerThanTen: boolean = array.some((num) => num > 10);
console.log(atleastOneNumBiggerThanTen);

