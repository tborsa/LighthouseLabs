

intro to ruby
thoughts on react
why this week?
lecture going through weekend stuff 
breakout deep dive oop

react use other components ant design

ruby week  > job sym week
in most jobs you inherit a large code base 
add new features 

how can you go mininum depth into ruby/rails to make the most impact
how do you become okay at ruby to finish the contract

languages are largely transferable, if you know one you know many 

you will feel over whelmed with new code base and language

ruby files .rb

run ruby files with
ruby file.rb

variables 
dog = "matt"

idiomatic ruby = using ruby the way its meant to be used, agreeded upon best practices 

research best practices 
when doing something feels harder then it should, look for a more idiomatic way
shorter code and usually more human readable 

print 
puts 
p

methods are functions 
def hello method example 

ruby functions not passed by reference 


ruby is not asynchronous

javasript needs lots of things haplening at once on the browser

ruby does not run on the browser it runs serverside 
synchronously

ruby is strict on how many arguments you give 
ruby doesent want you to make mistakes 

minimalist
ruby is mininalist you can remove extra syntax/noise in a lot of cases 
dont need 
semicolon
brackets 
return 
 implicit return statement 
 last line of function 
 unless you use the word return 
and then the function exits 

unless conditionals
if after the action
have regular if as well

ternary
play around witg unless instead 

nil over null


stack share 

can reassign variable
reassigning variable returns new variable 

capital letter variables are constant variable
better than const bc the variable name itself tells you that it is a constaby
ruby trys to be immediately legible 

for/while loops

dogs.each  do |x| 

kinda looks like a callback?

.times // clearer exactly how many times 
until loop
while not loop?

up till now its same ideas 

symbols!
essentially a string, but you cant change it 
stribg you can upcase string together  can get a substring
sometimes you just eant a label 
same object id for all same lojoking symbols
a symbol that has yhe same chatacters as another symbol is the same symbol
symbols are used for hashes 

hashes
are rubys version of objects 
use square brackets for accessor
hash rocket 
mount a value to another value 
have to access the value using the exact key and type yo usesd

added new syntax for symbol hash mapping
{age: 60, thing: test} //hash with symbol keys

no callbacks in ruby the same way in javascript

Blocks

do declares a block a distant cousin of a callback 

do |thing|

end

Lambda

doThing = lambda { |num| puts num}

can pass lambdas around 