// find maximum value of  an array
function find_maximum(arr) {
    let maximum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maximum) maximum = arr[i];
    }
    return maximum
}


console.log(find_maximum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))