const array = [1,2,3]

for (let i = 0; i < array.length; i++) { // Imperative approach to iterating
    console.log(array[i])
}

array.forEach(console.log) // Declarative approach to iterating

array.find(n => n === 2) // a Declarative approach to finding an element

array.reverse() // We could do this "manually", but we get some functionality out of the box
