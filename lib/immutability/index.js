const obj = { val: 1 }
const objFrozen = Object.freeze({ val: 1 }) // Create an object that we can't mutate

function getValueWithMutation(o) {
    const result = o.value
    o.val = 0 // contrived example
    return result
}

getValueWithMutation({ ...obj }) // We are creating a disposable copy of our object for this special occasion

getValueWithMutation(JSON.parse(JSON.stringify(obj))) // We are creating a disposable copy of our object for this special occasion

getValueWithMutation(Object.assign({}, obj)) // We are creating a disposable copy of our object for this special occasion

getValueWithMutation(obj) // If we pass in an object, our original object may be affected

getValueWithMutation(objFrozen) // If we pass in a frozen object, it won't allow setting properties on it. It will either fail silently or error 

