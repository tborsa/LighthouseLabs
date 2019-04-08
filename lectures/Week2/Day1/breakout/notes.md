---
theme : "white"
transition: "zoom"
highlightTheme: "darkula"
logoImg: ""
center: false
slideNumber: true

---

# Node and APIs
<center> ![internet](assets/internet.gif)</center>
<style type="text/css">
  .reveal p {
    text-align: left;
  }
  .reveal ul {
    display: block;
  }
  .reveal ol {
    display: block;
  }
</style>

---


### Preamble 📢 

This morning we learned about protocols and HTTP, and looked at how http requests can be made by browsers, the terminal, postman, and by a node application. 

We are going to continue to explore HTTP requests with node applications and work through:

- How to use request ( A node module for HTTP requests)
- Access tokens
- Headers
- Enviornment variables

<center>![tenor](assets/hack.gif)</center>

---

## Request 📬

Request is a node module that makes it easier to do HTTP requests. 
[Request Docs](https://www.npmjs.com/package/request)

Request buffers the response for you (adds all the chunks together) so you don't have to.

Make an application that gets all the issues from a node repository and displays them. Lets start by exploring the githubapi. https://developer.github.com/v3/repos/#get

+create a request to https://api.github.com/repos/jquery/jquery/issues

---

## Headers 👦

We looked at headers this morning, and now we have a practical example for when we need to use headers. 

For our request to be successful we have to set the user-agent header. The user-agent header lets the server know what 'agent' the request is comming from. Browsers automatically set this header for us. 

+Set user-agent header

---

## Access tokens 🎫

Some api's will require access tokens. 
These are unique identifiers that identify who you are when you use the api. 
This allows the api/server to 
- block or restrict anonymous traffic
- control the number of calls that are made to the api
- identify usage patters

Practically using an access token will allow us to access more and make more requests.

+create access token  
+set header Authorization: Bearer *token*

---

## Separating Code and Config

I should be able to share the source code of my application, while keeping it's configuration separate. 
- Each developer on a team may need to provide a different configuration. 
- It is also common to change the configuration based on the deployment of the application.

An example of this is using a different database for development vs production.

---

### Enviornment Variables

Your operating system will run processes within an environment. A user or administrator can set variables within the environment.

You can list the current environment variables by using the command export. One way to set a variable is to use the command export KEY=VALUE. This variable will only be set for the terminal session that it executed within.

---

Another common technique is to set an environment variable when running a process.

>KEY=VALUE node script.js

Within your application these variables can be accessed with process.env.*variable*

+set github token as enviornment variable

---

## dotenv

[dotenv docs](https://www.npmjs.com/package/dotenv)

Using the dotenv library is a more convinient way of setting enviornmet variables and separating code and config. By creating a file named .env in the root directory of your project.

.env

You are able to list any key value pairs that need to be set as enviornment variables. 

---

Configuring dotenv at the top of your file will give you access to the enviornment variables set in .env

require('dotenv').config();

+add .env file and configure dotenv 

---

## Secrets 🙊

Some of an applications configuration should be kept private. We often need to include secret keys, tokens and passwords in our code. You do not want to publish this confidential information to a publicly accessible server. The separation of code and configuration supports this goal.

To keep our .env file private we can add it to the .gitignore file so it is not tracked by our repository, and does not get published to github or shared with our project members.

---

Keeping code and configuration separate allows us to hide our configuration while still being able to share the source code. We use a .gitignore file to exclude certain files from our version control system.

+add .env to .gitignore

---


This means that everyone who wants to run the application would need their own .env file. It's a good idea to create a .env.example file that you do commit. This will allow you to inform other developers of the environment variables that have to be set.

.env.example

GITHUT_TOKEN=  
DB_USERNAME=  
DB_PASSWORD=

Now a new developer could copy and fill in the values with their own credentials. The app would load their .env file and use the variables contained for it's configuration.

+add .env.example