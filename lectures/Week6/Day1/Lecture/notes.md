# Intro to React

![React](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day1/Lecture/assets/react.gif)

# comp sci week?

![compsci](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day1/Lecture/assets/compsci.jpg)


welcome back!


# Topics 📢


- react!
  - makes front end aproachable and structured
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
- Divide UI into small blocks
- Components!
- Provides structure to front end
- Fast Development!
- react is a framework! (some dispute this as Library)
- Easy Single Page Applications
- Reusability


# library vs framework?
![Library](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day1/Lecture/assets/library.webp)


__Library__: helps solve a problem with a set of functions 

__Framework__: library with strict opinions, enforces structure to your code.
With a framework you are commited to the framework.

A ibrary you really buy into. 
Anime fan vs. weeb

React is a framework for client side applications
Why do we need a client side framework? 
- ejs 🤢
- have to mix and match jquery patch stuff together
- react has structure
- applications that can adapt to change 
- want modular design (react modular by default)

# SPA?

tweeter:
one page and parts of the page reload (with ajax)

Front-End:
- Front end does more.
- shift in where logic happens.
- buisness logic shifted to the front end.
    - Front end decides when we want data and how we display it 

Server:
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

A component is a Visual block of user interface that can be conditionaly rendered where it is needed.  
- lego pieces that make our react app
- Similar structure with different data/some  polymorphism 
- Visual block and it's behaviors

Similar to EJS partials but more flexible, and with behavior. 

Site Example!

Component Heirarchy

rectangles around an existing site to show component breakdown 
rectangles = componrnts?

# W6 Project

lets look at finished Chatty


# Demo

Show us React already...


# Component stuff

-classes?
-render 
  - return

# JSX 
javascript + xml (html)

multiple lines use ()

making elements with jquery vs jsx

{} In JSX runs pure js


# Visual Planning

return one object/ from return 
 draw out application on board/draw
 break it into components 
 
start from a visual place! 
nice designs to break down into conpinents 


# Pokedex

What components do we need.


Demo Cont..


# props!

components are functions that rerurn visual stuff

props = parameters

input anything in the form of attributes 

```javascript
<Component attributeOne="thing" attributeTwo="thingtwo" > </Component>

```

Inside the component this.props is an object!

forgot a prop? no big deal

add non string props {}

```javascript
<Component attributeOne={1} attributeTwo={[1,2,3]} > </Component>

```

jsx inject number {} 

can pass anythng as props!

pass a function as props on click,

# Tools

- React dev tools
  - lets you see the react project tree, props 

# Review


# Boilerplate

Chatty app will have a boilerplate set up to get react set up fast

run boilerplate

Dont worry about the config files
not important for making the app and components.
dont have to touch index.jsx only have to use app.
Babel: 
webpack:


# Breakout

- State
- Declarative vs imparative
- Data down actions up
- Looping
