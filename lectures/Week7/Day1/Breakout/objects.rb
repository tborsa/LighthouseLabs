class Pokemon
  @@total_number = 151

  def initialize(type, name, health)
    @type = type
    @species = name
    @health = health
  end

  def health
    @health
  end

  def health=( health)
    @health = health
  end

  def speakOne
    puts @species
  end

  def self.speakTwo
    puts  @species
  end
end

class Pikachu < Pokemon

  def initialize(health)
    super( "electri", "Pikachu", health);
    puts "hello im pikachu"
  end

  def speak_one
    puts "im a talking pokemon"
  end

  def thunderBolt 
    puts "ZAAAPP"
  end

end


nima = Pikachu.new(150)
nima.speakOne
nima.thunderBolt

Products.thisThing

product.price = 34;

class Thing 
end