# Intro to React

![React](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day1/Lecture/assets/react.gif)

# comp sci week?

![compsci](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day1/Lecture/assets/compsci.jpg)


welcome back!


# Topics 📢


- react!  
  - makes front end approachable and structured
  - move away from the wild west 
- Frameworks
- SPA
- Components
- Props


lecture and breakout connected


# Why does react exist?

Why jquery?:
- lets you reach around and grab/effect things in the dom

Why React?:
- Divide UI into small blocks 🀄
- Components!
- Provides structure to front end
- Fast Development!🚴
- react is a framework! (some dispute this as Library)
- Easy Single Page Applications
- Reusability


# library vs framework?
![Library](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day1/Lecture/assets/library.webp)


__Library__: helps solve a problem with a set of functions

__Framework__: library with strict opinions, enforces structure to your code.
With a framework you are committed to the framework.

A library you really buy into.
Anime fan vs. weeb

React is a framework for client side applications.  

Why do we need a client side framework?
- ejs 🤢
- have to mix and match jquery patch stuff together
- react has structure
- applications that can adapt to change
- want modular design (react modular by default)

# SPA?

__tweeter:__  
one page and parts of the page reload (with ajax)

__Front-End:__
- Front end does more.
- Shift in where logic happens.
- Business logic shifted to the front end.
   - Front end decides when we want data and how we display it

__Server:__
- Returns data instead of html
- Application User interface
- Generic (Usable by different front ends)
- Actions on data


What are some API's we have used?

backend that makes data and actions available

Extra Security challenges
- server-side code has no control over the environment they run in.
- Extra careful about sensitive data used on the front end

# Component
![Lego](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day1/Lecture/assets/lego.png)

A component is a Visual block of user interface that can be conditionally rendered where it is needed. 
- lego pieces that make our react app
- Similar structure with different data/some  polymorphism
- Visual block and it's behaviors

Similar to EJS partials but more flexible, and with behavior.

Site Example!

Component Hierarchy

rectangles around an existing site to show component breakdown
rectangles = components?

# W6 Project

let's look at finished Chatty


# Demo

Show us React already...

---

# Component stuff

- classes? 
- render
  - return

# JSX
JavaScript + xml (html)

multiple lines use ()

making elements with jquery vs jsx

{} In JSX runs pure js


# Visual Planning
start from a visual place!
React is visual so it is easiest to plan know
nice designs to break down into components


# Pokedex

What components do we need.


Demo Cont..


# props! 👊

Components are functions that return visual stuff

props = parameters

With props you can input anything in the form of attributes.

```javascript
<Component attributeOne="thing" attributeTwo="thingtwo" > </Component>

```

Inside the component this.props is an object!

forgot a prop? no big deal

add non string props using {}

```javascript
<Component attributeOne={1} attributeTwo={[1,2,3]} > </Component>

```

With jsx you can inject any javascript with {}

can pass anything as props!

pass a function as props on click.

# Tools 🔧

- React dev tools
  - lets you see the react project tree, props

# Review


# Boilerplate 🔥

Chatty app will have a boilerplate set up to get react set up fast

run boilerplate

Don't worry about the config files
not important for making the app and components.
don't have to touch index.jsx only have to use app.  

__Babel:__ A Javascript compiler used to make ES6 and beyond backwards compatible with older browsers.  

__webpack:__ Javascript(and other) module bundler, 


# Breakout

- State
- Declarative vs imperative
- Data down actions up
- Looping


