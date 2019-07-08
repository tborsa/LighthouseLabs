# my ___
# vs your ___

# choose a noun ie house 
# what things does a house have 

# house with windows doors 
# ext

# soecific house has 
# 2 doors 
# 6 windows 
# color red 


# context of a game 
# good platform for understanding oop

# what makes up a game? 


# building a game 
# character can do things
# character can have inventory

# similar character
# same actions
# maybr different inventory

# items are things 

# not talking about code but breaking down thibgs ir nouns 

# naturally lends itself to oop


class Dog  
  attr_accessor :name
  attr_reader :breed

  @@species = 'dog'

  def initialize(breed, name)  
    # Instance variables  
    @breed = breed  
    @name = name  
  end  
  
  def self.what
    puts 'I am a' + @@species
  end

  def bark  
    puts 'Ruff! Ruff!'  
  end  
  
  def display  
    puts "I am of #{@breed} breed and my name is #{@name}"  
  end  
end  

class Shiba < Dog
  def initialize(name)
    super("Shiba", name)
  end
  def bark
    puts "Bork Bork"
  end
end 

# pokemon 
# name 
# type
# breed
# health
# canAttack
# exp
# blueprint


