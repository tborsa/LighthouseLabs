
# Rails and MVC Introduction

![Rails](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day3/Lecture/assets/rails.png)

ruby and adding rails

aplroaching rails different than other frameworks
getting dropped into an existing project
mimics a real life job

what is the process of learning a code base?
learning a new framework?

Those are some of the questions we are going to try to approach today.


# Topics

- Rails
- Jungle
- MVC
- HTTP Request Life cycle
- Debugging / exploration tips


# ruby on rails
>"Rails is a web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern.
Understanding the MVC pattern is key to understanding Rails. MVC divides your application into three layers: Model, View, and Controller, each with a specific responsibility." Rails readme

has existed for awhile  
current version is 6.00  
jungle version 2.3.0  
common with existing projects to be locked into a version

Rails grew out of a piece of software called basecamp
The basecamp team created Rails to structure their product and make development easier. 
The company eventualky released it to the Public


# MVC

![MVC](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day3/Lecture/assets/mvc-rails.png)

MVC is an architectural/design pattern that breaks an application into three logical parts: The Model, View,
and Controller.

__Model__  
The model is in charge of all of the data logic. It provides and interface to the database. A model of the data.

__View__  
The view is in charge of the UI logic. The view thinks about how to show information to the user. 

__Controller__  
The Controller is in charge of communication between the Model and View. It controlls data flow, getting data from the model and passing it to the view, and manipulates data using the model when needed.  

# Collection of Libraries

Rails is a framework that is made up of a collection of libraries. 

__Active Record__  
Active record is an orm(object relational mapping). Active record allows you to query and modify the application data(usually database) in a more intuitive way. 

Rails will pluralize your model class names to find the respective database table. So, for a class Book, you should have a database table called books.


__active view__  
Active view is a view library that handles template lookup and rendering. Provides helpers for building forms and othe UI stuff. 

__active controller__  
Active controller is a controller libraty. It allows you to make controllers that make sense of the request and decide what should be outputted. 

__Action dispatch__  
Action dispatch is the rails router. It handles incomming requests and forwards them to the correct controller.

__active support__
Active support is a collection of helper methods for ruby.

__action mailer/ action cable__  
Action mailer allows you to send emails. Action cable allows you to integrate websockets. 

All of these are individual libraries.
rails is the bundle of them used together to form a framework 


# Why Rails?

Pros?
- rails is the king of crud 
- quick to build out and scaffold
- good for handling large relational databases

Usage?
- shopiffy 
- airbnb
- large active community 

rails is a resource based framework a
restful framework 

You will work with
relationship of nouns to models to controllers 
When we define a user resource it has a:
- Model
- Controller
- Views


# Welcome to the Jungle
![jungle](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day3/Lecture/assets/jungle.jpg)

Rails is big   
100+ files  
You dont beed to know what all of the rails files do.  
You don't need to get bogged down by rails configuration.

Focus on MVC and the execution flow for a normal request/response cycle. 

# Execution flow
![flow](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day3/Lecture/assets/flow.gif)

In rails the controllers are request oriented, a controller will only be called if the correct route is called.

The control flow in rails is RCMV

Router -> Controller -> Model -> View

This should be the order in which you debug a Rails app. 

follow each route path to understand how a codebase is working 
follow the path of execution.

## Goal

- look at a specific route in jungle rails to understand what it does 
- look at routes
- look at the controller and what method was called
- before actions
- Application Controller
- look at the model 
- go into db console select all from products

done troubleshooting for data

- then look at the view 
- last app view layouts application.erb
  for layout and style and linking files 

optional 

__helpers__  
helpers/products_helper
- helper methods scopped for all mvc  
- used in views

models/concerns/products_helper
- helper methods for models
- modules

controllers/concerns/  products_helper
- helper methods for controller
- modules


# Application controller
The Application Controller is a master controller that all controllers inherit from.
if you want a method that all controllers can use put it here.
 


# Rails Command Line

rails has a suite of commands that will help you with development.

```
$ rails --help
```

  List of possible rails commands

# New Rails App 
Lets look at some helpful rails commands in the context of making a new app. 

```
$ rails new  
```

Initiates a new rails project.  


# Rails Directory

## /app
Application specific code 

__/app/assets__  
The static files that the front-end requires.  

__/app/controllers__  
The controllers  

/app/helpers  
Where helper functions reside  

/app/channels   
Socket stuff  

/app/jobs  
Jobs (scheduled tasks)  

/app/mailer  
Mailer stuff  

__/app/models__  
models  

__/app/views__  
views  

## /bin
Code for executable gems. ex. bundle, rails, rake, setup... 

## /config
Application configuration files

config/application.rb  
basic application config

config/database.yml 

config/eniornment.rb  
initializes application  

config/routes.rb

## /db
Database files

/db/seeds.rb  
seed information

/db/schema.rb  
Specifies what your db looks like

__/db/migrate__  
A list of your database migrations.
Files that udate the schema. 
 
 
## /lib
applications specific libraries/gems

## /test
test files


dont need to know everyfile
try to understand the pattern 
 
$ rails --help

tells you new stuff

## start the app

```
$ bin/rails s
``` 
runs the app with the versuon of rails associated with the app

# Rails Generate
A suite of rails commands that let you quickly build out parts of your application. 

__controller__   
```
$ rails g controller [name(plural)] [actions/methods]
```

Will generate a 
- controller 
- corresponding view for each method
- a route for each method

controllers automatically look for view associated with a controller method 

__model__  
```
$ rails g model [name(singular)] [field: type, ... ]
```
Will generate a model file.  
Will generate a migration.

But does it exist in our db?  
```
$ rake db:setup //creates the rails db
$ rake db:migrate //runs the migration for the model we created
```

__scaffold__  
```
$ rails g scaffold [name(singular)] [field: type, ... ]
```
Will generate a...
- model
- migration
- controller
- set of views
- route in route file
- more..

## Rake
```
$ rake --tasks
```
Gives a list of rake tasks available.

ruby make, uses a rakefile.  

Used for common administration tasks  

Used for seeding and building schema of the db  

## Rails Console

Gives us a ruby terminal, with the context of our application. 

```
$ rails c
```

use to interact with Active Record and test models and creation
 
```
$ rails db 
```
opens command line db access.
If you are using postgres opens up psql in with the correct table. 
 

# Migrations

![Migration](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day3/Lecture/assets/migration.gif)

Migrations are generated when a model is generated.  
>*DO NOT change schema file yourself, schema will be automatically updated with the migrations that you run. 

```
$ rake db:setup
```
run to create a database for the project

```
$ rake db:migrate
```
runs migrations that have not been executed.

No need for up and down Active Record can intuit what the opposite or down is

fat models skinny controller data logic in model


# Routes

Routes are are created in config/routes.rb

You can specify individual routes
```
get 'monsters/show'
```

Or you can specify a group of resource routes

```ruby
  resources :cars
```

Creates a set of routes for CRUD actions around the resource

```
$ rake routes 
```

Shows all the routes of your application

shows all params and which controller and action will be used


# Review

Lifecycle of a request in rails
-From Don's notes!

Request is routed to the Rails application (comes in on the port)

__ActionDispatch (Router)__

- Build the request object
- params is populated
- cookies are handled
- sessions are handled
- creates a new instance of the appropriate controller
- Passes params, request, session to the controller in the constructor
- The appropriate action(method) is run on the instance of the controller

__ActionController__

- When created, finds the associated views for the resource (ResourceController -> /app/views/resources), and creates a method for the view(ActionView)
- A method is also created for the associated layout
- The appropriate action method is run as an instance method on the controller
- Most likely, this method is going to activate ActiveRecord and pull data from the database
- After the action method is run (accessing the relevant model data for the resource), then the layout method is run behind the scenes, passing the view method as a block
- View method results get yielded into the layout
- Return value (rendered resource) of the layout method is passed back to the router

__ActionDispatch__

- Takes result of action method and builds an HTTP response around it, and sends the response back to the client


# Moving forward
In the Future we will cover route helpers, link_to,  and more details about rails.
