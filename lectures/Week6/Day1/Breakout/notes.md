
# More React

![morereact](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day1/Breakout/assets/morereact.png)

Notes and code [here](https://github.com/tborsa/LighthouseLabs/tree/master/lectures/Week6/Day1/Breakout)

Pokedex React App we built [here](https://github.com/tborsa/pokedex)


# Topics 📢

- Props and state  
- functional components class components  
- Declarative Syntax 
 - if statements  
 - loops  
- jsx works behind the scenes (briefly)  

# What have we made so Far?
 - What to add?  

DEMO

# State

![state](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day1/Breakout/assets/state.png)


We could use global scope to store application data but that would be bad practice.

Instead State!

State is a components own memory  
 - it can think(remember) for itself


# Props Vs. State

__props__-> custom data received from a parent 
 - If props changes the component will re render itself.

__State__ -> memory/data that a component can hold itself  
 - if state changes the component will re render

# SetState

Method to let react know that we have changed the state so that it can rerender the appropriate elements.

```javascript
this.setState({
       number: this.state.number+1
   })
```
Changing state without setstate will not update the UI.

 # Behavior

We can add functionality to change the state when a user interacts with our components.
This will dynamically change our page content.

Functions that change state have to be properly bound.

```javascript
this.changePokemon = this.changePokemon.bind(this);
```
OR
```javascript
changePokemon = ()=>{};
```
Because they are passed around and use this.setState() we need to make sure that 'this' correctly refers to the component with the state that is being modified.


# Data Down Function Up

In component hierarchy  
- Pass data down to child components by props  
- Call functions upward to modify parents state

DEMO

# Declarative Syntax

Tell react what to do not how to do it.
Render this component
vs
Add this thing and this thing and then show it.

# Loops

Rendering arrays on screen

[1,2,3,4]=> 1234
```
[<h1>title</h1>, <h1>title</h1> <h1>title</h1> <h1>title</h1>] -> TITLE TITLE
```
So we can use map to create an array of components that will be rendered.

Each mapped component requires a unique key prop

# Conditional rendering

ternary one or the other

```javascript
condition ? <ComponentOne></ComponentOne> : <ComponentTwo></ComponentTwo>;
```

Maybe one thing

```javascript
condition && (<Component></Component>);
```
Can also define a jsx block before the return.

# Functional (stateless) Components Vs. Class Components

If a component does not need it's own state you can simplify it by making it a Functional Component.

```javascript
function Welcome(props) {
 return <h1>Hello, {props.name}</h1>;
}
```


ES6 classes and how to read ES5 (old) React syntax


