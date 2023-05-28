const arr = [1, 5, 2, 3, -200, 24, 62, -975, 8, 12, 122, 3, 33]
let count = 0;

const quickSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    let pivotIndex = Math.floor(array.length / 2)
    
    let pivot = array[pivotIndex] // средний element

    let less = [] //  < pivot 
    let greater = [] // > pivot

    for (let i = 0; i < array.length; i++) {
        count += 1
        if (i === pivotIndex) {  // пропускаем опорный элемент
            continue;
        }

        if (array[i] < pivot) {
            less.push(array[i])
        } else greater.push(array[i])
    }

    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(arr.length)
console.log(quickSort(arr))
console.log(count)

// const factorial = (n) => {
//     if (n === 1) return 1 

//     return n * factorial(n - 1)
// }

// const fibonacci = (n) => {
//     if (n === 1 || n === 2) return 1 

//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(fibonacci(4))  