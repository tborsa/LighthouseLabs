
print "hello"
puts  "howdy"
p "hi"

def method_name (name)
  puts "hello " + name
end
  
a = nil
a.nil?

# show how ruby is more flexible in syntax and how you can reverse
# flow with loops and conditionals

puts "I push Miracle Whips" if benzColor == "mayonnaise"


x = 0
begin
  x += 1
end until x <10
p  x  # prints 1

# symbols

puts :symbol.object_id  
puts :symbol.object_id  


# hashes

topFive = { "one" => "dylan", "two" => "dylan", "three" => "dylan", "four" => "dylan", "five" => "dylan" }
topFive = { :one => "dylan", :two => "dylan", :three => "dylan", :four => "dylan", :five => "dylan" }
topFive = { one: "dylan", two: "dylan", three: "dylan", four: "dylan", five: "dylan" }


# blocks lambdas

say_something = -> { puts "This is a lambda" }
dogs.each  do &say_something

# multi-line
l = lambda do |a, b|
  tmp = a * 3
  tmp * b / 2
end
l.call(1, 2)


# scope

varname = 2
def methodGuy (param)
  varName = 4
  puts varname
end

puts varname


module MyModule
  varOne = 1
  varTwo = 2
  def Action(param)
    puts varOne
  end
end
puts varOne

# namespace

module Namespace
  module Public
  end
  Thing = 5
end

Namespace::Public # => Namespace::Public
Namespace::Thing # => 5