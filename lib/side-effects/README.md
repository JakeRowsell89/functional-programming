# (Side) Effects

## What?
When we talk about the effect of a function in FP, what we are referring to is the return value we receive. We can assign this to a variable, or call another function with it. 

But what if your function does something besides returning a value? Things like calling other functions from within the function, changing variables outside the scope of the function, modifying the parameters the function was called with, logging? Those are referred to as side effects. In FP these are considered bad practice, and generally avoided. 

## Why?

Being side-effect free is good because we need to understand, or think about, much less of the whole program. You on the function and its return value instead of other changes occurring inside the application. 
This means less bugs are likely to occur, and your program is easier to debug and test. You can still call other functions from inside your functions, but only if they are side-effect free.

While it doesn't really apply to us, it also makes formal verification of the correctness of a program easier.
