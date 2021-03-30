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