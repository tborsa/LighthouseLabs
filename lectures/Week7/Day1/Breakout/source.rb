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