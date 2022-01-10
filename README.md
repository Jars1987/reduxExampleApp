# Coaching Call Redux and React-Redux

## Topics for todays

- What is Redux?
- How does Redux works?
- Before Toolkit
  - Todo App with Redux State
  - Asynch API requests with Redux State (Middleware - Redux Thunk)
- Tool Kit
  - Todo App with Toolkit
  - Asynch API requests using Redux State (Redux Thunk)
  - useSelector vs mapStateToProps

## What is Redux?

As per the docs:

> A Predictable State Container for JS Apps

- Behave consistently across client, server, and native environments
- Easy to test (Redux DevTools)
- The state of your application is kept in a store, and each component can
  access any state that it needs from this store.
- It’s lightweight at 2KB

Source: [logrocket]
(https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/).

### Why should we use Redux? To avoid Prop Drilling!

## How does redux Works?

![Redux Flow]
(https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fvaquarkhan%2Flearn-react-js&psig=AOvVaw0SrXpsfyFS6L5VAJWHgpbB&ust=1641651373159000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCrhY3qn_UCFQAAAAAdAAAAABAm)

![Redux Flow 2 ]
(https://hub.packtpub.com/wp-content/uploads/2018/07/Redux-Flow.png)

## Lets build a Todo App

## Add a Joke Feature - Assynchronous Calls in Redux

![Redux Thunk](https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40andrewrymaruk%2Fthunk-in-redux-360fe8ae8b5a&psig=AOvVaw0va8Lo3kRhispsUCDQENsr&ust=1641658837038000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCr5_2FoPUCFQAAAAAdAAAAABAD)

Redux Thunk behind the scenes notices that a functions is being called from the
action creator

Thunk returns a function inside of our action creator instead of a plain
JavaScript object. That returned function receives the store’s dispatch
function, and then we are able to dispatch actions such as one to place the
state in loading state, and another to update our store with the returned data.

Source: [medium]
(https://medium.com/@ingridf/what-redux-thunk-is-how-to-install-it-and-how-it-works-b67b815d2672)

![redux Thunk 2](https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40ingridf%2Fwhat-redux-thunk-is-how-to-install-it-and-how-it-works-b67b815d2672&psig=AOvVaw0va8Lo3kRhispsUCDQENsr&ust=1641658837038000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCr5_2FoPUCFQAAAAAdAAAAABAT)

## Toolkit Time - Refactor/Redux with Toolkit

## useSelector VS mapStateToProps !!!

### There is nothing you can do with mapStateToProps/mapDispatchToProps that you can't do with the useSelector and useDispatch hooks as well.

Source: [stackoverflow]
(https://stackoverflow.com/questions/59748180/should-i-use-useselector-usedispatch-instead-of-mapstatetoprops)

The react-redux docs walk you throught it and go in dephth about what
performance and gotchas but I found this response from stackoverflow the best
comparisson.

1- **Decoupling**: with mapStateToProps, container logic (the way store data is
injected into the component) is separate from the view logic (component
rendering). useSelector represents a new and different way of thinking about
connected components, arguing that the decoupling is more important between
components and that components are self contained. Which is better? **Verdict:
no clear winner.**

2- **DX (Developer experience)**: using the connect function usually means there
should be another additional container component for each connected component,
where using the useSelector and useDispatch hooks is quite straightforward.
**Verdict: hooks have better DX.**

3- **"Stale props" and "Zombie child"**: there are some weird edge cases with
useSelector, if it depends on props, where useSelector can run before the newest
updated props come in. These are mostly rare and avoidable edge cases, but they
had been already worked out in the older connect version. **verdict: connect is
slightly more stable than hooks**

4- **Performance optimizations**: both support performance optimizations in
different ways: connect has some advanced techniques, using merge props and
other options hidden in the connect function. useSelector accepts a second
argument - an equality function to determine if the state has changed.
**verdict: both are great for performance in advanced situations.**

5- **Types**: using typescript with connect is a nightmare. I remember myself
feverishly writing three props interfaces for each connected component
(OwnProps, StateProps, DispatchProps). Redux hooks support types in a rather
straightforward way. **verdict: types are significantly easier to work with
using hooks.**

6- **The future of React**: Hooks are the future of react. This may seam like an
odd argument, but change to the ecosystem is right around the corner with
"Concurrent mode" and "Server components". While class components will still be
supported in future React versions, new features may rely solely on hooks. This
change will of course also affect third party libraries in the eco system, such
as React-Redux. **verdict: hooks are more future proof.** - _For me Hooks are
the present of React_
