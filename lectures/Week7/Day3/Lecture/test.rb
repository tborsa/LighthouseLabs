

class Car 

  attr_reader :wheels
  attr_writer :wheels

  def initialize
    @wheels = 4
    @color = "red"
  end

  def wheels #getter reader
    return @wheels
  end


end

myCar = Car.new


myCar.wheels # <= 4
myCar.wheels = 0

