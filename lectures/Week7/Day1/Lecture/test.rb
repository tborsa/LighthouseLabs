module Namespace
  thing = 2
  Dog = "lilly"
  module Public
    cat = "apple"
    Cat = "tiger"
  end

  def MyMethod (name) 
    puts "hey " + name
  end
  Thing = 5
  
end 

puts Namespace::MyMethod "travis"
