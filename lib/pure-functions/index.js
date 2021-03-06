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
