const minNumber = 1;
const maxNumber = 1000;
const array = [];
const setArray = createArray();
const selectNumber = 3;
function createArray() {
    for(let i = 3; i < 50; i++) {
        array.push(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber)
    }
    const setArray = new Set(array);
    return Array.from(setArray);
}
setArray.sort((a, b) => a - b);
console.log(setArray);

function isPrime(number) {
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

function getPermutations(setArray, selectNumber) {
    const permutations = [];

    array.forEach(fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, selectNumber - 1);
        permutations.forEach(permutation => {
            permutation.unshift(fixed);
            permutations.push(permutation);
        })
    }
    return permutations;
}
