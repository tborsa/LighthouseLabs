

# Intro to ruby and OOP

![Ruby](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Lecture/assets/ruby.jpg)

Notes and code [here](https://github.com/tborsa/LighthouseLabs/tree/master/lectures/Week7/Day1/Lecture)

lecture going through weekend stuff
breakout deep dive oop


# Why this week?

![Job](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Lecture/assets/vincent.gif)

Ruby week  => job sym week 
in most jobs you inherit a large code base   
and have to add new features

- What is the minimum depth you have to go into ruby/rails to make the most impact.  
- how do you become okay at ruby in order to finish the contract  

languages are largely transferable, if you know the one you know many  

You will feel overwhelmed with the new code base and language. This week is to learn how to deal with that.


# Ruby basics 💎

Ruby files .rb  

run ruby files with  

```
$ ruby file.rb
```

__idiomatic ruby__ = using ruby the way it's meant to be used, agreed upon best practices

If doing something feels harder than it should, look for a more idiomatic way.   
It is usually shorter code and more human readable.   
research what the best practices are.   

## Interactive Ruby

Typing __irb__ into your terminal will start the interactive ruby command line tool.  
This allows you to write ruby code in your terminal.  

irb always shows the result/return of the expressions we run.  

## variables

```ruby
dog = "matt"
```
You can reassign variables in ruby.  
Unlike javascript you do not have to declare a variable with any special keyword (let,const, var ext.)  

## Constants

```ruby
Dog = "matt"
```
Capital letter variables are constant variables.  
You cannot change their value after they have been set.  

This is advantageous over javascript constants because
the variable name itself tells you that it is a constant.  

You don't need to look at where a variable was declared to know if it is a constant.  
Ruby tries to be immediately legible.  

Cons? Harder to change a variable back and forth from constant to variable.


## Types

Like javascript ruby has different data types for variables.  
All data in ruby is represented as objects.  

In Javascript the difference between a primitive number and an object Number is confusing.  

In Ruby everything == object.

- Booleans   
- Numbers 
  - Integer  
    - fixnum  
    - bignum   
  - Float  
    - float  
    - bigdecimal   
  - rational  
- Strings 
- Arrays 
- Symbols 
- Hashes 


Each variable is dynamically typed. We don't have to specify what type it should be.

## methods


```ruby
def method_name (var1, var2)
  var1 + var2
end
```

Ruby methods  
- cannot be not passed by reference  
- implicitly return the last executed thing*   
- are strict about the number of arguments passed  
- are not first class**  

__*implicit return statement:__  
The last line of a method is returned unless you use the return keyword to explicitly set what will be returned.  

__**First Class:__ A first class function is one that can be passed as an argument to other functions, returned as a value from other functions, and assigned to variables or stored in data structures.  

## nil 🚫

Similar to JavaScripts null  

Expresses the lack of an object.  

Acts like a keyword for "no object"  

can use .nil? as a method to test if something is "not an object"  

```ruby  
a = nil
a.nil?
```

## program flow 🌊

Control flow is the same as JavaScript with some additional syntax options

```ruby
if true
 #do stuff
elsif
 #do other stuff
else
 # do final stuff
end
```

also

```ruby
puts "I push Miracle Whips" if benzColor == "mayonnaise"
```
```ruby
puts "I push Miracle Whips" unless benzColor != "mayonnaise"
```

**Note
in ruby === is not strict equals! (it is often case subsumption)  
use == in ruby for comparison

## for

```ruby
for num in 1...10 do
 puts num
end
```

## while

```ruby
num = 1

while num <= 10 do
 puts num
 num += 1
end
```

reverse of while

## until

```ruby
until conditional do
  code
end
```
*do is optional for the above loops

## each
```ruby
[1, 2, 3, 4, 5].each do |num|
 puts num
end
```

## times ⌚

```ruby
10.times { puts "hello" }
```

# Big picture differences 🗻
![picture](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Lecture/assets/bigpicture.jpg)


Ruby is not asynchronous  
JavaScript needs lots of things to be happening at once on the browser so it needed to be asynchronous.

Ruby does not run on the browser it runs server side
synchronously

Ruby is a more traditional Object Oriented Programing language.

In ruby everything is an Object!  
or a method of an object

Methods are not first class  
- cannot be passed by reference  
- cannot be used as parameters  
- cannot be returned  
 
Ruby doesn't want you to make mistakes
- forced number of params

>"Often people, especially computer engineers, focus on the machines. They think, "By doing this, the machine will run fast. By doing this, the machine will run more effectively. By doing this, the machine will something something something." They are focusing on machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines. We are the masters. They are the slaves." - Matz

# minimalist
![minimal](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Lecture/assets/minimalism.jpg)

Ruby is a minimalist language you can remove extra syntax/noise in a lot of cases.

you don't need  
 - semicolon  
 - brackets  
 - return  

# Ecosystem

![Ecosystem](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Lecture/assets/ecosystem.jpg)
__gems__
rubygems.org  
RubyGems is a package manager for ruby libraries and programs called gems. Similar to node packages and NPM.

```
$ gem install gem_name
```
__gemspec:__ file defines the gem    
Gemfile: a list of dependencies.
```
$ bundle install
```
will install all of a projects dependencies

__Rakefile:__ specifies rake scripts that you can run with the rake command. Usually for testing and building operations.

```
$ rake test
```

# Usage

Ruby is not a browser language, it runs server side/on machines.  
Ruby is a cross-platform language.

Ruby is used for cross-platform computer applications.  
- Vagrant  
- Homebrew  

Ruby is also used for web development
- rails  
  - AirBnB   
  - Github  
  - Hulu  
  - more!  
- Discourse  
- Jekyll  
- Sass  


# New Stuff ?

![new](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Lecture/assets/new.png)

What does ruby have that JavaScript doesn't?

---

## symbols! 🔰

Symbols are essentially a string that you cannot change.

Sometimes you just want a label.

Symbols have the same object id for all similar symbols.
They are more efficient than strings.  

A symbol that has the same characters as another symbol is the same symbol.

Symbols are used for hashes, and to label things.

---

## Hashes

Hashes are ruby’s version of objects...sorta 
You use square brackets for accessing values.  

hash rocket =>
mounts a value to another value

```Ruby
topFive = { "one" => "dylan", "two" => "dylan", "three" => "dylan", "four" => "dylan", "five" => "dylan" }

puts dictionary["one"]
```
have to access the value using the exact key and type you used.

Ruby added new syntax for symbol hash mapping

```ruby
topFive = { :one => "dylan", :two => "dylan", :three => "dylan", :four => "dylan", :five => "dylan" }

topFive = { one: "dylan", two: "dylan", three: "dylan", four: "dylan", five: "dylan" }
```

---

## Blocks

```ruby
dogs.each  do |x|
 #stuff
end
```
The do end part kinda looks like a callback?

Maybe a distant cousin..

In ruby you use blocks for control flow to define a chunk of code that should be executed.

---

## Lambda

![Lambda](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Lecture/assets/lamba.gif)

A Lambda is a block that can be defined for later use.

doThing = lambda { |num| puts num}

```ruby
say_something = -> { puts "This is a lambda" }
```
*run a lambda using lambda_name.call() 
You can pass lambdas around

# Scoping

![scope](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Breakout/assets/scope.jpg)

What is scoping like in javascript?

__ruby__

Global variable: $variableName available everywhere in your script.

Local variable: variableName

__scope gate__

When you define a class, method, or module you enter a new walled garden with it's own unique scope.
Any local variables created before are no longer accessible and new variables will only exist in this new scope.

Blocks (do, end) are not scope gates

[In Depth](https://www.sitepoint.com/understanding-scope-in-ruby/)


# Namespace
In Ruby a module creates a new Namespace.
A Namespace is a context/container for constant variables.
Allows you to use modules without muddying up your scope.

```ruby
module Namespace
 module Public
 end
 Thing = 5
end

Namespace::Public # => Namespace::Public
Namespace::Thing # => 5
```

# Concurrency?

![Concurrency](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Lecture/assets/concurrency.png)

"concurrency is the ability of different parts or units of a program, algorithm, or problem to be executed out-of-order or in partial order, without affecting the final outcome. This allows for parallel execution of the concurrent units, which can significantly improve overall speed of the execution"

An application is making progress on more than one task at the same time.


__Async__

Ruby is not an asynchronous language so it does not have thiis option for concurrent execution. 
__Synchronous__
Synchronous code needs some help to become concurrent. 

__process__

An active program.

You can duplicate the process (server) so that it is running multiple instances of it.
The multiple instances of a synchronous program can handle multiple requests.

__threads__

A single process (active program) can make use of more than one thread (independantly run code by the operating system) to run code in parallel (at the same time)

