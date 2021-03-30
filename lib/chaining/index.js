"   I am a string  ".trim().toLowerCase() // chaining on a string

[1,2,3].map(n => n * 2).filter(n > 3) // chaining on an array

Promise
    .resolve(20)
    .then(n => n * 2)
    .then(console.log)
    .finally(() => console.log('done')) // chaining on a Promise

const humans = [{ name: 'jake', type: 'human' }, { name: 'doggie' }]
    .filter(x => x?.type === human)
    .map(x => x.name)
    .pop() // destructive, be aware. Also, takes an array returns a string
    .toUpperCase() // 

const double = (n) => n * 2;
const increment = (n) => n + 1;

// without pipeline operator
double(increment(double(double(5)))); // 42

// with pipeline operator
5 |> double |> double |> increment |> double; // 42