
# object oriented program 
![Job](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Lecture/assets/vincent.gif)

You have used some oop (react)
but we havent looked at it directly


# OOP

OOP is a programming pradigm.( An idea on how code should be written )

OOP is the idea of grouping related data and functionality in structures known as objects. (encapsulation)



# Class
![blueprint](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Breakout/assets/blueprint.jpg)

A Class is a blueprint for what an object should look like. 

Classes try to take real world concepts and represent them within programming.


In ruby all things are objects ( Instances of a class )


# Example
![clases](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Breakout/assets/classes.png)
pick a noun? 

blueprint for noun


my ___
vs your ___

choose a noun ie house 
what things does a house have 

house with windows doors 
ext

soecific house has 
2 doors 
6 windows 
color red 


context of a game 
good platform for understanding oop

what makes up a game? 


building a game 
character can do things
character can have inventory

similar character
same actions
maybr different inventory

items are things 

not talking about code but breaking down thibgs ir nouns 

naturally lends itself to oop


pokemon 
name 
type
breed
health
canAttack
exp
blueprint

# Syntax

You declare a class in Ruby with the class keyword.

```Ruby
class Car
end
```
__Initialize__
Initialize is a special method in classes that is called when a class object is created with .new
Initialize methods are used to set the initial state of an object. 

```Ruby
class Car
  def initialize (color, year, model)
    @color = color
    @year = year
    @model = model 
  end
end

myCar = Car.new("red", 2007, "matrix")
```

__Accesor && Readers__

You can set default read and write methods for instanc variables with accesor and readers. 

```Ruby
class Car
  attr_accessor :color
  attr_reader :year
  attr_writer :model
  def initialize (color, year, model)
    @color = color
    @year = year
    @model = model 
  end
end
```

Same as

```Ruby
class Car
  def initialize (color, year, model)
    @color = color
    @year = year
    @model = model 
  end
  def color
    @color
  end
  def color=(value)
    @color = value
  end
  def year
    @year
  end
  def model=(value)
    @model = value
  end
end
```


# Scoping 

![scope](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Breakout/assets/scope.jpg)

__Class variable__ @@variableName  
Available from the class definition and any sub classes. All class instances share the same class variable. 

__Instance variable__ @variableName  
Available in a specific object or instance of a class. 

# Class Vs. Instance Methods

__Class Methods__
```Ruby
  def self.bar
    puts 'class method'
  end
```
Can be called direcly on the class, without need to initialize an object of the class. 

__Instance Methods__

```Ruby
  def baz
    puts 'instance method'
  end
```
Requires a particular class instance to be executed. 

# Class based vs. Prototype based

In JavaScript we have OOP as a paradigm but it is Prototype based.

Javascript does not really have classes it has prototypes.

Where classes are a blueprint or an idea on how an object shoulde be created, prototypes are an object themselves that model how all future versions of that objec should look. 

instead of this.thing in ruby
@thing to save the variable global to the objevt 

# Encapsulation
![encapsulatoin](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Breakout/assets/encapsulation.jpg)

Encapsulation is the grouping of data and functionality while hidding/protecting some data and functionality from the outside.  

can't access properties outside of the class unless 
a method gives access to it.

```Ruby
class Document
  def initialize(name)
    @name = name
  end

  def set_name(name)
    @name = name
  end
end
```
I can create a Document and set it's name, but I cannot change the name property outside of the methods made available to me. 


# Polymorphism
![poly](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Breakout/assets/polymorphism.gif)

Can make different versions from a single idea. Many things. 

__Inheritance__ 
Classes can inherit from other classes. 
```Ruby
class Mammal  
  def breathe  
    puts "inhale and exhale"  
  end  
end  
  
class Cat < Mammal  
  def speak  
    puts "Meow"  
  end  
end  
  
rani = Cat.new  
rani.breathe  
rani.speak  
```
Allows us to extend the usefulness of existing classes, and reduce repeating code. 

Allows us to better represent real world concepts within programming. 
