# Recursion

## What?
Recursion is a technique used to break down a problem into simpler problems, solve them, and combine the results. In the case of recursion, this is done by a function calling itself.

A recursive function consists of one or more "base cases", these are conditions that will return a fixed result. It also has one or more "recursive cases", in which what is returned is the result of a function call to itsself.

Example:
```
function sum(array) {
    if (!array.length) {
        return 0 // base case
    }

    return array[0] + sum(array.slice(1)) // return first value + sum of next values
}

sum([1, 2])
```

### Tail Recursion
There is a special case of recursion, where you ensure the last expression evaluated in the recursive function is either the base case or the function call to the recursive function. This allows languages that support Tail Call Optimisation to optimise the running of the recursive function. 

## Why?

As stated in the definition of what recursion is, the aim is to make a problem more easily solvable. A common use for recursion is when using trees. Tree traversal without recursion can be a bit niggly (they ask this during interviews for a reason). For this recursion thends to be simpler than looping, where you would likely use a while loop and store nodes in an array for processing.

Recursion may also enable parallelising your computations, depending on the language and problem. For example, a recursive Fibonacci generation would NOT be parallelisable as it would always rely on it's previous results. Other problems, such as traversing multiple branches of a tree could be candidates for parallelisation.
