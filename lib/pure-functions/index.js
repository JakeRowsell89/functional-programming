const a = { val: 1 }
const b = { val: 2 }

function sumNonDeterministic(c) {
    // impure because we are referencing `a`, which is not passed in as an argument
    return a.val + c.val
}

sumNonDeterministic({ val: 1 }) // returns a + 1 and returns 2 as expected

setTimeout(() => {
    a.val = 2 // asynchronously a is changed
}, Math.random() * 1000)

setTimeout(() => {
    sumNonDeterministic({ val: 1 }) // asynchronously we call our function, do we get 2 or 3?
}, Math.random() * 1000)

function sumWithEffects(a, b) {
    // Impure because it has effect (console.log)
    // Effects could be much more harmful, deleting properties or modifying them
    const result = a.val + b.val
    console.log(result)
    return result
}

function sum(a, b) {
    return a.val + b.val
}

const result = sum()
console.log(sum) // calling console log is now an effect of my program, not my function