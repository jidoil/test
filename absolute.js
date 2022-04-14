const minNumber = 1;
const maxNumber = 1000;
const absoluteArray = [];
const signs = [];
for(let i = 0; i < maxNumber; i++) {
    absoluteArray.push(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
    signs.push(Math.floor(Math.random() * 2) === 0 ? false : true);
}
absoluteArray.sort((a, b) => a - b);
console.log(absoluteArray);
console.log(signs);
function result(array, signs) {
    let result = 0;
    for(let i = 0; i < maxNumber; i++) {
        if(signs[i]===true) {
            result += array[i];
        }
        else {
            result -= array[i];
        }
    }
    return result;
}
console.log(result(absoluteArray, signs));
