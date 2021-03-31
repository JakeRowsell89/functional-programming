# Declarative Code

## What?
Declarative code tries to put the emphasis on what should happen, rather than how it should happen. A good example is iterating through a collection using a .forEach as opposed to a for-loop. In the first case, we are only waying we want to apply a function to each argument. In the second, we are defining how it should step through an array and can then apply a function to individual contents.

Luckily, most modern languages ship with a lot of methods that make taking a declarative approach easier. 

### DSLs
JavaScript doesn't easily allow this (though it is possible) but some languages make it easy to create another "language" within it. In this case we are specifically thinking about Domain Specific Languages. Some uses of this may be:
- Allow solutions to be expressed at the level of abstraction of the context domain
- Can help domain experts instead of software engineers contribute to development
- Can be easy to learn as they tend to be small
- The DSL can be declarative

Take a look at Cucumber with one of the SDETS


## Why?
In the example provided we only get small benefits. No looping means less chance of a bug introduced by looping incorrectly. It also is clear immediately what something does, instead of needing to look inside the loop and try to figure that out.

Taking this concept a bit outside of the JavaScript context though, we could look at technologies like Terraform and Kubernetes.

We declaratively define what we want and the tools figure out HOW to achieve that. You need to configure it properly, but you aren't working out ordering of resource creation, dependencies, handling waiting for things to complete. That would be a nightmare, and that is the power that these tools offer. A less bad nightmare (haha, jk I love you both). You declare you need an S3 bucket, an IAM role and a bucket policy, terraform goes and creates it for you. 

The aim is to abstract away the generalities in a different context than the specifics. Or to take Terraform as an example again, the generality being "how is resource X created" vs the specific of "I need a resource X that ties to resource Y in account Z". To compare it with OOP, it is a bit like separating the interface and the implementation. 

