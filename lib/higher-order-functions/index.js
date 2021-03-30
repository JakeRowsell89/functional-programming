function wait5SecondsAndCall(cb) { // This is a higher-order function, taking a function as an argument
    setTimeout(cb, 5000)
}

const evens = n => n % 2 // Assigning functions to variables, noice

function timesTwo (n) { return n * 2 }

[1,2,3,4]
    .map(x => x + 1) // We can pass in an anonymous function
    .filter(evens) // We can pass in a function referring to a variable
    .map(timesTwo) // Or we can pass in a function declared with the function keyword


const parsers = {
    'json': () => {}, // some JSON parser
    'csv': () => {} // some CSV parser
}

// By binding to an object key we can concisely use a specific function
// Alternatively, you could use the clunky case/switch
parsers[fileType](myFileContents) 