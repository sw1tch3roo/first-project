const arr = [1, 2, 3, 4, 5, 6, 7, 8]
let count = 0

const recursiveBinarySearch = (arr, item, start, end) => {
    let middle = Math.floor((start + end) / 2)
    count += 1

    if (start === end) return -1

    if (item === arr[middle]) {
        return middle;
    }

    if (item < arr[middle]) {
        return recursiveBinarySearch(arr, item, start, middle - 1)
    } else {
       return  recursiveBinarySearch(arr, item, middle + 1, end)
    }

}

console.log(arr.length)
console.log(recursiveBinarySearch(arr, 10, 0, arr.length))
console.log(count)