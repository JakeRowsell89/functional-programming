const trim = x => x.trim()
const lower = x => x.toLowerCase()
const capitaliseFirstLetter = str => str.slice(0, 1).toUpperCase() + str.slice(1)
const capitaliseWords = (str) => str.split(" ").map(capitaliseFirstLetter).join(" ")

const names = ["JAKE RowSEll "]

const namesLooped = []
for (let i = 0; i < names.length; i++) { // using a loop to create a new collection
    const trimmedName = trim(nameFromForm)
    const lowerCaseName = lower(trimmedName)
    const capitalised = capitaliseWords(lowerCaseName)
    namesLooped.push(capitalised)
}

const namesChained = names
    .map(trim)
    .map(lower)
    .map(capitaliseWords) // Chaining function calls

const composeThree = (a, b, c) => (arg) => a(b(c(arg))) // Exported function needs to match `c` signature
const nameProcessor = composeThree(capitaliseWords, lower, trim) 

const namesComposed = names.map(nameProcessor)
