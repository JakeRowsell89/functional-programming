# Chaining

## What?
As a JavaScript developer you have almost certainly used this technique before. 
Chaining means you take the output of a function call and apply another function to it immediately. Usually this would be done in situations where the input type and output type match, and the next function called would be a method of that type.

That is not a requirement though, we can also chain on different types. It's just not as common.

There is also an operator in experimental stage to provide chaining that isn't done as a method:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Pipeline_operator

## Why?

Chaining makes it easy to see the flow of data through transformations. In JavaScript that is mostly done as a method, but other languages e.g. haskell don't require that to be the case:
`print $ map (+1) $ map (*2) [1,2,3]` 

In the case of promises it drastically simplifies how we hande async behaviours in our program. Within the promise chain, the sequence of events is clear and linear. The same can not be said for reading a JavaScript file top to bottom!