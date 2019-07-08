
print "hello"
puts  "howdy"
p "hi"

def method_name (name)
  puts "hello " + name
end
  
a = nil
a.nil?

puts "I push Miracle Whips" if benzColor == "mayonnaise"

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