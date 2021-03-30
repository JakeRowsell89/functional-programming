# Pure Functions

## What?
According to Wikipedia a pure function has two properties:
- It is deterministic
- It has no side effects

As long as a function satisfies those conditions we call it a pure function.
Any function that doesn't meet these criteria is an impure function.

### Deterministic
Deterministic means that with the same inputs you always get the same outputs:
function sum(a, b) {
return a + b
}
This means NOT relying on variables outside the parameters, or using things like `new Date()` inside the function. You can pass the result of `new Date()` in as a parameter though. 
It also means the input arguments must NOT be changed, or “be mutable"

### Side effects
[See Side Effects](../lib/side-effects)

## Why?
We care about determinism because it means we can make predictable programs. Knowing we always get the same value back with the same inputs means the program is always behaving in the same way and more than likely is behaving correctly.

The combination of deterministic functions and having no effects helps us achieve "referential transparency". This property means we would be able to replace the function and its parameters with it's return value without anything changing to our program. It also means we are able to cache results of a function call, as we know the same inputs lead to the same outputs and we don't require the function to be run.

Our functions now are also much easier to test, as we don't need to create complex mock objects or state the function may rely on. It's just simple I/O.