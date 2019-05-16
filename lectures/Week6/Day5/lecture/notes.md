
---

# JAVASCRIPT PROTOTYPES

![Prototypes](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day5/lecture/assets/homercar.gif)

Notes and code [here](https://github.com/tborsa/LighthouseLabs/tree/master/lectures/Week6/Day5/lecture)

---


### Preamble 📢

Today we will look at:

- Objects  
   - factories
   - constructors
   - secret object properties
- OOP
- Prototypes
- Inheritance 


---

# Object Review

In JavaScript objects are data structures that store information in key value pairs.

```javascript
var literal = {keyName: "value"};
```

The above is called an object literal.

Creates a single object/ 1 instance of an object.

We can also add functions as object members, and when an object has one or more methods the object is said to have behavior.

we can add properties after the fact
can remove properties after the fact with...

```javascript
delete literal.keyName;
```

There are also other ways of making objects.

---

## Factory

![Factory](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day5/lecture/assets/factory.png)


A Factory allows us to make multiple objects. It is essentially a function that returns an object.

```javascript
function createCar(model, year){
   return {
       model: model,
       year: year,
       start: function(){
           console.log("vroom");
       }
   }
}
```

This allows us to define our object in one place, and make many copies of it.

---

## Constructor function

![Constructor](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day5/lecture/assets/bob.jpg)

Another way of making multiple objects.


```javascript
function Car(model, year){
   this.model = model;
   this.year = year;
   this.start = function(){
       console.log("vroom");
   }
}
```
\* constructors use pascal notation (uppercase first letter)

and to use the constructor

```javascript
const car = new Car("toyota", 2007);
```

This syntax is less straightforward.

What is NEW?

- creates a new empty object {}
- sets the context of the function to the empty object
- implicitly returns "this" from the function

---

# Secret object properties

All objects have certain inherent properties that are created with the object.

## Proto Property

All objects have a parent or prototype which is
an object in memory that it inherits from.
The top of the prototype tree is the "root" prototype that all objects inherit from Object.prototype.

Instance members:

- properties or methods that are stored in the specific instance on an object.
- Object.keys(obj)
- obj.hasOwnProperty("name")

Prototype members:

- properties or methods that are stored in the objects prototypes.
- for(let key in obj){} both

When accessing a property or method js walks up the chain of inheritance to see if the object has it

Can access an objects prototype with Object.getPrototypeOf(thing)

Objects created by the same constructor will have the same prototype.

can get a constructor's prototype with Car.prototype

---

## Constructor Property

Property of every prototype that references the constructor that created it.
If no specific constructor was used it will be the built in Object() constructor function.

functions have the default function() constructor
arrays have the default array() constructor.

---

## OOP aside

JavaScript is not a traditional object oriented oop( Groups related things together as properties and methods of an object).
The benefits of OOP are...

- abstraction
- inheritance
- polymorphism

You can can accomplish these goals in JS using prototypes.

---

# Inheritance

![Simba](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day5/lecture/assets/simba.jpg)


If all objects inherit from the constructors prototype than we can:

1. Create a Constructor
2. Define that constructors prototype how we want

   ```JavaScript
   Car.prototype.thing = thing;
   ````
3. Have all the instances of that constructor inherit the prototype members.
   ```JavaScript
   Toyota.prototype = Object.create(Car.prototype);
   ```

*best to also reset the prototype constructor

```JavaScript
Object.create(obj);//creates a new object with obj as the prototype
```
---

## Why is this useful?

- NO repeating code

- Central source for changes

- Polymorphism

   - many forms of the same method

- Object Memory

   - every instance of an object will store all properties and methods in memory.
   If you add a method only to the prototype, then it will only be stored in memory once for all instances of that object.


---

BONUS

Parent with constructors use

   Car.call(this, parameters); // to set the members locally

Override

   Override a parents method by redefining the method in the child.

Extend

   Extend a  method by redefining the method in the child and calling the parent method with reference to the child Car.prototype.method.call(this, parameters);









