# Functional programming, what, why, how?

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

Some of the terminology we used, and will be looking at:
- (Side)effects
- Mutable/immutable data
- Pure functions
- Shared state
- Declarative/imperative

