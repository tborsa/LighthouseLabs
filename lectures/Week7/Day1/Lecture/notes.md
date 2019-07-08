

# Intro to ruby and OOP

![Ruby](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Lecture/assets/ruby.jpg)

Notes and code [here](https://github.com/tborsa/LighthouseLabs/tree/master/lectures/Week6/Day1/Lecture)

lecture going through weekend stuff 
breakout deep dive oop


# Why this week?

![Job](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Lecture/assets/vincent.gif)

ruby week  => job sym week  
in most jobs you inherit a large code base 
add new features 

how can you go mininum depth into ruby/rails to make the most impact
how do you become okay at ruby to finish the contract

languages are largely transferable, if you know one you know many 

you will feel overwhelmed with new code base and language


# Ruby basics 💎

ruby files .rb

run ruby files with

```
$ ruby file.rb
```

__idiomatic ruby__ = using ruby the way its meant to be used, agreeded upon best practices 

When doing something feels harder then it should, look for a more idiomatic way
shorter code and usually more human readable 
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
Ruby trys to be immediately legible.

Cons? Harder to change a variable back an forth from constant to variable.


## Types

Like javascipt ruby has different data types for variales.
All data in ruby is represented as objects.

In Javascript the difference between primitive number and an object Number is confusing.

Ruby everyhing == object. 

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


Each variable is dynamically typed. We dont have to specify what type it should be. 

## methods 


```ruby
def method_name (var1, var2)
   var1 + var2
end
```
ruby methods
- cannot be not passed by reference 
- implicitly return the last executed thing
- are strict about the number of argumetns passed
- are not first class

implicit return statement: 
The last line of a method is returned unless you use the return keyword to explicitly set what will be returned. 

## nil 🚫

Similar to JavaScripts null

Expresses the lack of an object.

Acts like a keyword for "no object"

can use .nil? as a method to test is something is "not an object"

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
  #do other sfuff
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
for num in 1...10
  puts num
end
```

## while

```ruby
num = 1

while num <= 10
  puts num
  num += 1
end
```

reverse of while

## until

```ruby
until conditional [do]
   code
end
```

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

Ruby is not asynchronous
JavaSript needs lots of things to be happening at once on the browser so it needed to be asynchronous.

ruby does not run on the browser it runs serverside 
synchronously

Ruby is a more traditional Object Oriented Programing language. 

In ruby everything is an Object!
or a method of an object

Methods are not first class
- cannot be passed by reference
- cannot be used as parameters
- cannot be returned

ruby doesent want you to make mistakes 
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

Ruby is not a browser language, it runs serverside/on machines. 
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

A symbol that has the same chatacters as another symbol is the same symbol.

Symbols are used for hashes, and to label things. 

---

## Hashes

Hashes are rubys version of objects...sorta  
You use square brackets for accesing values.

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

You can pass lambdas around 

# Scoping 

What is scoping like in javascript?

__ruby__

Global variable: $variableName available everywhere in your script. 

Local variable: variableName 

__scope gate__

When you define a class, method, or module you enter a new walled garden with it's own unique scope.
Any local variables created before are no longer accesable and new variables will only exist in this new scope. 

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
"concurrency is the ability of different parts or units of a program, algorithm, or problem to be executed out-of-order or in partial order, without affecting the final outcome. This allows for parallel execution of the concurrent units, which can significantly improve overall speed of the execution"


__Async__

__Synchronous__

__process__

An active program.

You can duplicate the process (server) so that it is running multiple instances of it.
The multiple instances can handle multiple requests. 

__threads__

threadsafe code

Ruby not capable of true concurrency?
use GIL global interpreter lock  threads cant modify data at the same time
protects you from thread problems.