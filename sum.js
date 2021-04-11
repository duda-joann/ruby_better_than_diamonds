//find an average of and array
function find_sum(arr) {
    let new_sum = 0
    if (arr.length === 0) {
        return false
    } else {
        for (var i = 1; i < arr.length; i++) {
            new_sum += i
        }
        return new_sum
    }

}

console.log(find_sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))