// find minimum value of an array
function find_minimum(arr) {
    let minimum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimum) minimum = arr[i];
    }
    return minimum
}
console.log(find_minimum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))