const cashFunction = (func) => {
    const cash = {}

    return (n) => {
        if (cash[n]) {
            console.log("from cash", cash[n]);
           return cash[n] 
        }

        let result = func(n)
        console.log("посчитала функция = " + result)
        cash[n] = result

        return result;
    }
}

const factorial = (x) => {
    if (x === 1) return 1

    return x * factorial(x - 1)
}

const cashFactorial = cashFunction(factorial)

cashFactorial(5)
cashFactorial(5)
cashFactorial(5)
