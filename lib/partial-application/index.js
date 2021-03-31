function createSchemaValidator(schemas) { // We apply the `createSchemaValidator` function to `schemas`
    return (object) => objectIsValid(schemas, object) // Then we return a function that can validate objects directly
}

const schemas = loadSchemasSync()
const validate = createSchemaValidator(schemas)

// We can expose the validator without exposing the schemas
// or needing to know them where we validate
module.exports = validate 


function sum (a, b) { // a weird "optionally" partially applied function. Don't do this
    if (!b) {
        return (c) => a + c
    }
    return a + b
}

sum(1, 2) // function applied to all arguments
sum(1)(2) // function partially applied

function sumTwoCurried (a) {
    return (b) => a + b // Each function only takes a single argument, we are currying!
}

sumTwoCurried(1)(2)