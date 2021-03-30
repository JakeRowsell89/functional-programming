# Functional programming, what, why?

## What?
"Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions" - Eric Elliott

FP is a programming language paradigm. It isn't a feature, or a language, but a set of practices that form a holistic view of how to write programs. Underpinning FP is [Category Theory](https://en.wikipedia.org/wiki/Category_theory) which we won't be looking at here. It can be off-putting, and in my view learning things you can apply directly is more useful.

## Why?
If we are going to spend time looking at this "functional programming" thing, we should know why we are doing it. Personally I enjoy learning, and different tools, techniques and approaches will always make you a better developer. Even if you rarely use them. Here are a few key benefits you should get out of FP:
- Make program flow easier to reason about
- Make code more easily testable
- Do more with less code
- Scalable!
- Less bugs!

It was tempting to include "fun" there, but YMMV. The way this is achieved is through a combination of some of the terminology we saw in the opening definition. The benefits of these individually tend to reinforce when used together. For example the combination of `determinism` and `being side-effect free` give us `pure functions`. These in turn allow us to cache the results of a function instead of calling it again.

In the lib/folder you can find several specific topics related to functional programming. They should also contain an accompanying example in code. 

Order of topics:
- Immutability
- Higher Order functions
- Function Composition
- Chaining
- Partial Application
- Side Effects
- Pure functions
- Declarative code
- Recursion


## Now what?

Looking at the various topics discussed, you may find you already use some of them every day. Most likely at least some of them will seem like a normal way to do things. Others may not. 

My suggestion would be to take a look at those that you are not as familiar with and try to find ways to use them. You may also want to pick some Codewars/hackerrank problems and try to solve them bearing in mind some of the topics talked about.

If you want to take it further I'd recommend trying to learn an FP language. The following resources are FREE and good:
http://learnyouahaskell.com/chapters
https://mostly-adequate.gitbook.io/mostly-adequate-guide/
https://www.coursera.org/specializations/scala#courses (first 2 courses are free and about FP in Scala)

Most importantly.. Just do it 🚀