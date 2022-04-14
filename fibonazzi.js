const fibonazzi = (n) => {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonazzi(n - 1) + fibonazzi(n - 2);
}
console.log(fibonazzi(10));
