const obj = { val: 1, nested: { val: 2 } }
const objFrozen = Object.freeze({ val: 1 }) // Create an object that we can't mutate.. Well top level primitives

function getValueWithMutation(o) {
    const result = o.value
    o.val = 0 // contrived example of something not being immutable
    return result
}

getValueWithMutation({ ...obj }) // We are creating a disposable copy of our object for this special occasion

getValueWithMutation(JSON.parse(JSON.stringify(obj))) // We are creating a disposable copy of our object for this special occasion

getValueWithMutation(Object.assign({}, obj)) // We are creating a disposable copy of our object for this special occasion

getValueWithMutation(obj) // If we pass in an object, our original object may be affected

getValueWithMutation(objFrozen) // If we pass in a frozen object, it won't allow setting properties on it. It will either fail silently or error 

objFrozen.nested.val = 3 // We can mutate nested properties. Not really immutable..

// A real world example of state mutation causing unexpected behaviour
const condition = /abc/g;
condition.test('abc'); // true
condition.test('abc'); // false?!

/abc/g.test('abc') // true
/abc/g.test('abc') // true
