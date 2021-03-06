# Immutability

## What?

"In object-oriented and functional programming, an immutable object (unchangeableobject) is an object whose state cannot be modified after it is created. This is in contrast to a mutable object (changeable object), which can be modified after it is created. In some cases, an object is considered immutable even if some internally used attributes change, but the object's state appears unchanging from an external point of view. For example, an object that uses memoization to cache the results of expensive computations could still be considered an immutable object. - Wikipedia

In summary, an immutable object doesn't change in a way that is externally noticeable. It CAN'T change. In JavaScript we have a light version of this, when we create variables with a `const` keyword. We can't reassign to that variable, but we can for example change object properties. It is not really immutable.

When we talk about immutability we can be referring to:
1. Language constraints on changing values in memory
2. Language constraints on changing a reference
3. Not changing things as a practice, due to lack of language constraints

Primitive types are immutable (`undefined`, `null`, `Boolean`, `Number`, `BigInt`, `String`, `Symbol`). We can't change these to be anything different. However we usually assign them to variables, where `var` or `let` will allow you to change what they are referencing. 

By contrast, an array is an example of something that is mutable:
```
const obj = {val: 1}
const array = [{val: 0}]
const newArray = array.concat(obj)
obj.val = 2 // If we change the objects `val` property, our array changes. Our array is mutable and uses a `reference` instead of a `value`. The object inside the array is also mutable

newArray // [ { val: 0 }, { val: 2 } ]

```

In some languages a clear distinction is made with function parameters, wether they are pass-by-name/reference, pass-by-value. The basic premise here is you either pass something immutable (a value), or a mutable reference to a value. This means inside the function you can change the reference, and affect the variable outside of the function!

JavaScript uses pass-by-value, however if you pass in an object you are passing a reference which allows you to overwrite overwrite properties of the object in memory:

```
const obj = { val: 1 }
function getValue(x) {
    x.val = 2
    return x.val
}

getValue(obj) // We call this function that sounds like it's just getting a value
obj // { val: 2 }, your object has been changed by this function. Imagine a library doing this!
```

https://www.javascripttutorial.net/javascript-pass-by-value

### Destructive methods
One way to describe wether something preserves the spirit of immutability even when the language does not enforce it is by saying something is or isn't destructive.

As an example, the Array has `slice` and `splice` methods.
```
const arr = [1,2,3]
arr.slice(1) // [2,3]
// arr is [1,2,3], slice is non-destructive
arr.splice(1) // [2,3]
// arr is [1], splice is destructive
```
## Why?

# Predictability

Mutation hides change, which create (unexpected) side effects, which can cause nasty bugs. When you enforce immutability you can keep your application architecture and mental model simple, which makes it easier to reason about your application.

# Performance

Even though adding values to an immutable Object means that a new instance needs to be created where existing values need to be copied and new values need to be added to the new Object which cost memory, immutable Objects can make use of structural sharing to reduce memory overhead.

"All updates return new values, but internally structures are shared to drastically reduce memory usage (and GC thrashing). This means that if you append to a vector with 1000 elements, it does not actually create a new vector 1001-elements long. Most likely, internally only a few small objects are allocated."

