1. What problem does the context API help solve?
Context API help solve the problem of prop drilling your state down as props.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are the cases or routes a reducer might take.  An action has a type and sometimes a payload which can be an object.  A reducer takes the current or initial state and an action and reduces it down to a single state object.  A store is where the object state tree is held.  
It may be called a single source of truth because it is where the entire state can live.  
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is state that is held in the App portion and can be then passed to each component.  Component state is state that is held in a single component and might be passed to this component's children.  If a child needs access to its parent's state then in this case App state will be a good choice to use.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk allows for asynchronous redux.  Redux-thunk allows action creators to return a function instead of an object which can allow redux to delay dispatching an action.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
I think I really like ContextApi from its first use but I think I learned more about Redux.