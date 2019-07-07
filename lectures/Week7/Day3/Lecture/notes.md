

ruby and adding rails

aplroaching rails different than other frameworks
getting dropped into an existing project
mimics a real life job

what is the process of learning a code base?
learning a new framework?

ruby on rails
has existed for awhile 
current version is ---
jungle version ---
common with existing projects to be locked into a version

rails had a forked history merb
created by dh

came out of a piece of software called basecamp
needed structure to make this project 
compaby eventualky released to oublic

acyivr record 
orm

active dispatch
router

active controller
controller libraty

active view
view library

active support
helper methods for ruby 

action mail/ action cable
mail and sockers 

all of these are individual libraries 
rails is the bundle of them used together yo form a framework 
rails is the king of crud 
quick to build out and scaffold
shopiffy airbnb 

rails is big 
137files
you dont beed to know all of that

rails is a resource based framework
restful frework 

user has
user model
user controller
user views

pluralization and singularization

MVC
model view controller 
model for building applications  softwate1975
provides seperation of concerns for these three pieces 

model
representation of the data stored in memory

controllers 
request oriented 
decides how to fufill a request 
decides what data is needed 
takes data from model into view 

view
presentation 
has no or minimal logic just shows 

resources oriented 
relationship of nouns to models to controllers 

order in which it is executed
cmv
that is the order that you debug 

but even before that you have the router
the router decides what controller gets called

rcmv

folliw each route path to understand how a codebase is working 
follow the path of execution
rvmv

filter is this a rails thing or something someone wrote


look at a specific route in jungle rails to understand what it does 
look at routes
look at the controller and show method called
look at the model 
go into db consel select all from products where 
done troubleshooting for data 
then look at the view 
last app view layouts application.erb
for layout and style and linking files 

optional 
helpers
helpers/products_helper
helper methods scopped for all mvc
models/concerns/products_helper
helper methods for models 
controllers/concerns/products_helper
helper methods for controller


application controller
master controller that all controllers inherit from
if you want a method that all controllers can use put it here
 
 rails has a command line suite
 rails --help
 rails new
 gives you options for your project
 puma hosts rails
 sprocket builds all your css js and image files
 being replaced by webpack
 production pipeline 
 can skip active record in favor of other orm 
 
 turtle links
 uses js to only load in the part of the page that changes , faster load times
 has some problems with jquery does not trigger document event
 
 rake 
 for seeding and building svhema of db
 
 rails new example
 look at the files it creates 
 dont need to know everyfile
 try to understand the pattern 
 
 rails -- help tells you new stuff
 
 rails generate example
 rails g 
 scaffold
    look at what it creates 
 controller 
    look at what it creates 
 model
     look at what
 view
     look
 
 rails c
 repl 
 sandbox test
 
 rails s
 start server
 
 rails test
 
 rails db 
 opens command line db access 
 
bin/rake rails runs the app with the versuon of rails associated with the app

run new generated app

rails if you update view it will live get changes
by default you have to reset for models and controllers

active record migration
no need for up and down ar can intuit what the opposite or down is

fat models skinny controller data logic in model

controllers automatically look for view associated with controller method 
in a folder 

scaffold 
look ar different controller methods
migrate table to db 

demo app working with nee scaffold

rake routes 
shows all the route's

shows all params shows which controller and action

before actoin

link_to

Lifecycle of a request in rails
-Don's notes

Lifecycle of a request in Rails

Request is routed to the Rails application (comes in on the port)

ActionDispatch (Router)

Build the request object
params is populated
cookies are handled
sessions are handled
creates a new instance of the appropriate controller
Passes params, request, session to the controller in the constructor
The appropriate action(method) is run on the instance of the controller
ActionController

When created, finds the associated views for the resource (ResourceController -> /app/views/resources), and creates a method for the view(ActionView)
A method is also created for the associated layout
The appropriate action method is run as an instance method on the controller
Most likely, this method is going to activate ActiveRecord and pull data from the database
After the action method is run (accessing the relevant model data for the resource), then the layout method is run behind the scenes, passing the view method as a block
View method results get yielded into the layout
Return value (rendered resource) of the layout method is passed back to the router

ActionDispatch

Takes result of action method and builds an HTTP response around it, and sends the response back to the client

demo jungle

get prebuild app running 
run rake:routes
for each task you are set to build
use the approach of following the flow of execution and understanding the flow that you need to . 

If it seems that you are doing somethng the hard way, in Rails it is very likely that you are doing things the wrong way. 

Future we will cover route helpers and more details about rails 
