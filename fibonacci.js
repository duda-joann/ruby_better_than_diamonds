// count -nth element of Fibonacii
function count_fib(number) {
    if (number < 2) {
        return 1
    } else { return count_fib(number - 2) + count_fib(number - 1) }
}

console.log(count_fib(10))