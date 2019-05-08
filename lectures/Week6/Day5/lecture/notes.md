
---

# JAVASCRIPT PROTOTYPES

![Prototyoes](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day5/lecture/assets/homercar.gif)

Notes and code [here](https://github.com/tborsa/LighthouseLabs/tree/master/lectures/Week1/Day5/lecture)

---


### Preamble 📢

Today we will look at:

- Objects 
- Inheritance
    - classical
    - prototypal
- prototypes


---

# Object Review
    js not fully object oriented oop( Groups related things together as properties and methods of an object)
    allows for -abstraction - inheritance -polymorphism
    js has some oop but is based on
    based on protoypes
    new

    object literal var literal = {key: value, mehtod: function()}

    Creates a single object/ 1 instance of an object

    when an object has one or more methods the object is said to have behavioer

    we can add properties after the fact
    can remove properties after the fact
    delete object.property


---

## Factory

![Factory](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day5/lecture/assets/factory.png)


    allows us to make multiple objects

    function createCircle(radius, location){
        return {
            radius: radius,
            location: location,
            draw: function(){
                console.log("draw");
            }
        }
    }
    function createCircle(radius, location){
        return {
            radius,
            location,
            draw(){
                console.log("draw");
            }
        }
    }

    define our object in one place 

---

## Constructor function

![Constructor](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day5/lecture/assets/bog.jpg)

    //pascal notation uppercase first letter

    function Circle(radius){
        this.radius = radius;
        this.draw = function(){
            console.log("draw");
        }
    }

    const circle = new Circle(1);
    // creates a new empty object {}
    //then sets the context of the function to the empty object
    //then implicitly return "this" from the function

    abstraction: hide properies or functions in constructor without referencing them with this

    NO real difference between factories and constructors but one syntax may be more comfortable or similar to other programming backgrounds. 

---

## Secret object properties

Constructor Property 

    Property of every object that refrences the constructor that created it.
    If no specific constructor was used it will be the build in Object() functon. Objectifies the given parameters

    functions have teh default function() constructor
    array have the default 

Proto Property

    All objects have a parent of prototype which is an object in memory that it inherits from.
    The top of the prototype tree is the "root" protoype that all objects inherit from Object.prototype

    Instance members: propertis or mehhods that are stored int the specific instance on an object. Object.keys(obj) or obj.hasOwnProperty("name")

    Prototype members: properties or methods that are stored in the objects prototypes. for(let key in obj){} both

    When accessing a property or method js walks up the chain of inheritance to see if the object has it

    Can get objects prototype with Object.getPrototypeOf(thing)

    Objects created by the same constructor will have the same prototype

    can get a constructors prototype with Car.prototype

---

# Inheritance

![Simba](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day5/lecture/assets/simba.jpg)


    If all objects inherit from the constructors prototype than we can:
    1. Create a Constructor
    2. Define that constructors prototype how we want
    3. Have all the instances of that constructor inherit the prototype members. 

    ex. Car.prototype.thing = thing;

    can then have another constructor or type of object inherit from the original constructor.

    Toyota.prototype = Object.create(Car.ptototype);
    
    best to also reset the prototype constructor

    Toyota.prototype.constructor = Car;

    Object.create(obj);//creates a new object with obj as teh prototype

---

## Why is this useful?

    NO repeating code

    Cenral source for changes

    Polymorphism
        many forms of the same method

    Object Memory
        evey instance of an object will store all properties and methods in memory.
        If you add a method only to the prototype, then it will only be stored in memory once for all instances of that object. 




BONUS

Parent with constructors use

    Car.call(this, parameters); // to set the members locally

Override
    Override a parents method by redefining the method in the child.
Extend
    Extend a  method by redefining the method in the child and calling the parent method with refernect to the child Car.prototype.method.call(this, parameters);

Object parameters have attributes, can be set with Object.defineProperty(obj, "name", {attribute: value});

constructor private, privileged variables and closure(abstraction)





