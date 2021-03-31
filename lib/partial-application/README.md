# Partial Application

## What?
In functional programming people don't really say "calling a function with arguments", but they say "applying a function to arguments". Partial application means it is not applied to all its arguments. This is possible thanks to Higher Order Functions, and can be used to make code more concise (seeing a trend here?).

When we use partial application, we create a closure. A closure allows us to bind some additional variables to the scope of a function. For example if we return a function from a function, we can refer to parameters of the outer function from the inner function, this is a closure. This is a lexical closure, as we have access to the lexical scope. 

### Currying
It is the same thing as partial application, except your functions may only take 1 argument. 

## Why?

Ending up with a function that requires 1 parameter is convenient because it allows you to pass it into some of the frequently used Higher Order Functions (.map, .filter). 

It also allows for creating very specific functions that can be easily reused. By contrast, more parameters most likely means your function is "doing more things". A more specific function means more general ability to use, and vice versa.