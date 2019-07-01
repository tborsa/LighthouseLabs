# Intro to React

![React](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day1/Lecture/assets/react.gif)

Notes and code [here](https://github.com/tborsa/LighthouseLabs/tree/master/lectures/Week6/Day1/Lecture)

Pokedex React App we built [here](https://github.com/tborsa/pokedex)

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

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

API's are backends that make data and actions available

Extra Security challenges  
- server-side code has no control over the environment they run in.  
- Extra careful about sensitive data used on the front end  

# Components
![Lego](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day1/Lecture/assets/lego.png)

A component is a Visual block of user interface that can be conditionally rendered where it is needed.  
- lego pieces that make our react app  
- Similar structure with different data/some  polymorphism  
- Visual block and it's behaviors  

Similar to EJS partials but more flexible, and with behavior.

Site Example!

__Component Hierarchy__ 
Components get used together with parent child relationships. A component can render other components.  
This forms a Hierarchy.

To visualize this you can draw rectangles around similar Elements of your User Interface, and rectangles inside these rectangles. 
rectangles = components?

# W6 Project

let's look at finished Chatty


# Demo

Show us React already...

---

# Component stuff

- __classes?__  
 - Classes group similar functionality and data together.(similar to objects) A class acts as a blueprint to create a specific instance(object) of the class.  
- __render__  
 - A built in method for component classes that is executed when the component is called to render.  
 - return  
   - The render method can return JSX a mix of javascript and xml/html  

# JSX
JavaScript + xml (html)  
JSX allows you to use html within javascript files. This allows for integrated templating with components.  

For multiple lines surround your JSX return with  ()

Use {} In JSX to run pure JS.


# Visual Planning

React is a Front-End Visual framework so it helps to start from a visual place!

Plan components based on your wireframe, drawings, visual plan.

Identify what parts of the UI should be components.


# Pokedex

What components do we need.


Demo Cont..


# props! 👊

If Components are like functions that return visual stuff then..

props = parameters

With props you can input anything in the form of attributes.

```javascript 
<Component attributeOne="thing" attributeTwo="thingtwo" > </Component>

```

Inside the component this.props is an object!

Forgetting a prop will not break the component by itself.

Inject non string props using {}

```javascript
<Component attributeOne={1} attributeTwo={[1,2,3]} > </Component>

```

With jsx you can inject any javascript with {}

You can pass anything as props!

primitives, objects, arrays, functions

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




