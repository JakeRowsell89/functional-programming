# Higher order functions

## What?

The term "higher order functions" means:
- functions returned from other functions
- functions as arguments when calling another function

An example you will have heard of is the `callback`, passing a function into a function to be called when the function completes something asynchronous. 

Another term related is "functions as first class citizens", this describes the broader capability that functions are treated just like data, and can be assigned to variables, stored in data structures, as well as passed in and out of function calls. 

Another example of higher order functions is the `.map` array method. It takes a function to apply to each element in the array. If you look at popular FP libraries like `lofash/fp` you fill find a wealth of other HOFs that provide common utility functions that the Node standard library does not.

## Why?

According to the Erlang docs (http://erlang.org/documentation/doc-5.0.2/doc/extensions/funs.html) there are two benefits of using HOFs:


- Easier to understand the intent of the programmer (specifically referring to .map,.filter, .reduce style HOFs)

- Increased code reusability

- They enable other features such as function composition, partial application etc.

I would add that in contrast to OO languages it also means you have less code to write, as not everything needs to be bound to a class. (more of a Functions as First Class Citizens feature)
