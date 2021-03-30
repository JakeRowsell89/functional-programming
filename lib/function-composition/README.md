# Function Composition

## What?
Function composition means we combine multiple function calls into a single function we can call. A prerequisite is that the inputs and outputs of the functions we want to compose need to match (in a typed language, type signatures must match). In JavaScript, if you are chaining multiple .map's in a row that is an indication you may instead want to consider composing the mapping functions.

## Why?

There are several benefits of function composition:
- It encourages to make simple, testable, small functions that are easy to understand because you can compose them into more complex functions
- Your program flow becomes clearer because you can abstract complexity into the small functions
- Instead of looping over a collection 3 times, each time applying a single function you can pass over the collection once and apply multiple functions. This means you have lower Big O complexity.