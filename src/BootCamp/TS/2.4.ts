

const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

list.sort((a ,b) => b - a);

console.log(list)


const squaredList = list.map(a => a * a);

console.log(squaredList);

const removedExtremesList = squaredList.slice(4, -2);

console.log(removedExtremesList);

const filteredList = removedExtremesList.filter(a => a % 4 !== 0);

console.log(filteredList);

const sumOfAll = filteredList.reduce((a, b) => a + b, 0);

console.log(sumOfAll);