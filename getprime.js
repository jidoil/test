const minNumber = 1;
const maxNumber = 1000;
function createArray(minNumber, maxNumber) {
    const array = [];
    for(let i = minNumber; i < maxNumber; i++) {
        array.push(i);
    }
    return array;
}
const setArray = createArray(minNumber, maxNumber);
console.log(setArray);
function getPrime(setArray) {
    const primeArray = [];
    setArray.forEach(number => {
        if(isPrime(number)===true) {
            primeArray.push(number);
        }
        
    }
    )
    return primeArray;
}
function isPrime(number) {
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(getPrime(setArray));


