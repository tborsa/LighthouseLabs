
---
transition: "none"
highlightTheme: "darkula"
logoImg: ""
center: false
slideNumber: true

---

# LECTURE

---

# HTTP and APIs
<center> ![internet](assets/internet.gif)</center>
<style type="text/css">
  .reveal p {
    text-align: left;
    font-size: 0.8em !important;


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

Last week you learned about _JavaScript_. You used the language to write programs that satisfy specific requirements and ran them using node. This week you will learn how to use js to Interface or communicate with the web. Specifically you will do this with  HTTP requests. 

Today we will look at:
- protocol
- network layers
- Http requests

ACTIVATE PRIOR KNOWLEDGE BRAINSTORM

But first let's get an overview on how the internet works.

<center>![tenor](assets/hack.gif)</center>

---

## Internet 101 🖥


We know that in order to load a webpage, we type a URL (aka Link) into the address bar of our browser and once we hit enter the browser loads for a few seconds...

 and [BAAM](https://theuselessweb.com/) the page is on the screen. you
<center>![tenor](assets/url.jpg)</center>


Behind the scenes a lot is happening so let's try and break it down.

---

#### cont'd

In order for your computer's browser 💻 (aka client, where frontend code lives) to be able to load a webpage 📃, it starts communicating with a server💽. (Another computer or networked device connected to the internet). Your computer sends a request for the resources that it needs from the server in the form of a URL, and the server in turn responds with the requested data.

Resource examples:
Webpage/image/more...
https://jimmychin.com/wp-content/uploads/2016/09/JIC00172.jpg


This is achieved with a communication channel called HTTP (Hyper-Text-Transfer-Protocol) 

---

## HTTP 📬

Http is the backbone of the web and the primary way we communicate over it. If the internet is the information highway 🛣️ http makes up some of the rules of the road.

Http stands for hypertext transfer protocol. Which is the technical lingo for:
> Helping devices communicate over a network by a series of requests↪️ and responses↩️

---

## Protocol 📔

If http is a protocol then what exactly is a protocol?

>__*1. the official procedure or system of rules governing affairs of state or diplomatic occasions.*__

>__*"protocol forbids the prince from making any public statement in his defense"*__

Protocols are everywhere,
An informal protocol could be the rules that govern a phone call.📱

What are some other informal protocols?

For these examples each involved party must know the rules in order to communicate effectively.

---

In the context of networks like the internet:
> __Protocols are the rules that determine how to send, format, and recieved data between networked devices. These could be servers, routers, phones, personal computers and more.__

---

<section data-background-color="#1CF31C" *style="color:black"*>

<h3> Layers 🌈</h3>

<strong>The internet is like an ogre, and ogres are like onions, and onions have layers.</strong>

<center>![osi model](assets/osi.svg)</center>
</section>

---

#### cont'd

The internet is divided into layers.
Each of these network layers have protocols that use and build on the layers underneath them.

The bottom layer handles how bits (0/1's) are physically transmitted from point a to point b so that the higher layers don't have to .

Lets look at some of the things each layer does. 

---

### Protocols 📔

What are some network protocols that you have heard of or used?

---

Here are some more.

- FTP [File Transfer Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol)
- POP3 [Post Office Protocol](https://en.wikipedia.org/wiki/Post_Office_Protocol)
- IMAP [Internet Message Access Protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol)
- SMTP [Simple Mail Transfer Protocol](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)
- BitTorrent [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent)
- DHCP [Dynamic Host Configuration Protocol](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)
- DNS [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System)

---

### Hyper Text Transfer Protocol 📬

Http sits in the highest network layer the application layer 👑. The application layer is responsible for process to process communication over the network.

HTTP is used when one machine wants to share documents 📃 and Any number of clients can make requests on these documents. Using the request response model.


---

## Request and Response

 There are two parties. A server that sits at home waiting for someone to knock on their door and a client that can at any time walk up to the door, knock and ask for something.

---

 #  🚪🚶‍

The server sits at home waiting for someone to knock on their door.

---

# 💃 🚪🚶‍
 
The client can ask for a cup of sugar, flour ..

All the client needs is a way to ask, and a thing to ask for.  
'May I please have a cup of sugar?' might be better than 'Give me that sugar!'.

---

# 🚣 🍬

The server will go into their kitchen to grab a cup of sugar. 

---

# 💃🚪🤾 

The server then makes a response. They can come back with the thing that was asked for or they could also come back and say 'I couldn't find that.' to the client

---

# 💁 🍬 🧒

This is what happens when you type a URL into your browser.

---

Curl, postman examples  
https://example.com  
https://swapi.co/api/films

---

### HTTP 📬

1. __The Request:__ A Client connects to the server and transmits a request message.
2. __The Response:__ The Server transmits a response message back to the client and disconnects.

---

## The Request 💃 🚪🚶‍

Using the terminal I c  an type `curl -v http://example.com` and see the request as plain text.

```HTTP
GET / HTTP/1.1
Host: example.com
User-Agent: curl/7.54.0
Accept: */*

```

The first line of the request message is called the request line. This is the most important part of an HTTP request. You only need to remember two parts of the request line. The first part is the `method`, the second part is the `path`. The method represents how we want to interact with the resource. The path represents where that resource is located.

---

#### The Request CONT'd

```HTTP
GET / HTTP/1.1
Host: example.com
User-Agent: curl/7.54.0
Accept: */*```

After the request line we have the `headers`. These are key/value pairs. There are a lot of different headers. In the example you can see that the `User-Agent` making the request is `curl/7.54.0`.

When we are done adding headers to the message we use `\n\n` to indicate that we want to start the `body` of the request. A `GET` request has no body therefore this is the end of the request message.

---

### Methods 📂

Our goal today is to learn about the most common used request methods: `GET`, `POST` `PUT`, `DELETE`.

1. I use GET if I want to retrieve data from the server.
2. I use POST if I want to add data to the server.
3. I use PUT if I want to edit data on the server.
4. I use DELETE if I want to remove data from the server.

---

__GET__

A GET request is always a __safe__ operation. A server has the same state before and after when this type of request is made.

__POST__

A POST is unsafe and will mutate the server states in some way. A typical example of a POST request results in a new data entry into a database. A POST request can optionally contain body data.

__PUT__

A PUT is unsafe. It will also mutate the server. This is used to replace an existing resource. If the resource does not exist then it will be created.

__DELETE__

The DELETE method deletes the specified resource. Definitely unsafe.

---

### Path 🚏

The path identifies a resource that you want to take an action on.

The original intent of HTTP was to share documents. Today we use it to build web applications. When learning about HTTP consider the methods to be actions you would take on files. The file that you want to take action on can be found uniquely using a specific path.

<center>![tenor](assets/url.jpg)</center>

---

### Protocol Version

For the purposes of learning how to use HTTP, we don't need to worry about this. If it says HTTP/1.1 then we can leave it at that.

---

### Headers 👦

Don't try and memorize all of the HTTP [headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields). Once you can read an HTTP request you can look up any headers that are unfamiliar to you. The most common ones will become familiar to you over time.

---

### Content Body 🕺

Content body is used for sending data to the server. It can be used to upload files or update a database. A POST or PUT request has the option to include the content body.

---

## The Server Response 💃🚪🤾

Looking at the rest of the output from our request to example.com we can see what a response message looks like.

__Anatomy of a response__

```HTTP
HTTP/1.1 200 OK
Cache-Control: max-age=604800
Content-Type: text/html
Date: Fri, 30 Mar 2018 00:24:55 GMT
Etag: "1541025663+gzip+ident"
Expires: Fri, 06 Apr 2018 00:24:55 GMT
Last-Modified: Fri, 09 Aug 2013 23:54:35 GMT
Server: ECS (dfw/279D)
Vary: Accept-Encoding
X-Cache: HIT
Content-Length: 1270

<!doctype html>
<html>
  <!-- more html content >
</html>ers and body data. The status line is similar to the request line. Skip the version and focus on two import
```

A server response contains three parts. The status line, headant parts. The status code (200) and the reason phrase (OK).

---

If example.com did not have a document to serve it could have started the response with  

`HTTP/1.1 404 Not Found`.


---

## Status Codes 📟

Follow the same practice as with headers. Have a bookmark so you can quickly look this up. Learn the most common ones.

- 200 OK
- 301 Moved Permanently
- 302 Found
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

[http cats](https://http.cat/)

EVERYONE LOOK UP YOUR OWN HTTP CAT

---

### Headers 👦

Response headers follow the same structure as request headers. A key and a value.

- Date: Fri, 30 Mar 2018 00:24:55 GMT
- Content-Type: text/html
- Content-Length: 1270

From this information I can tell the date and time the message was created, and I can see that it is a 1270 byte html document.

---

### Content Body 🕺

Within a response the content body is usually a representation of the resource that was asked for. This is how a document made up of HTML, Image, JSON, JS, or CSS can be served.


---


## tools 🔧

Typically it is the client software making requests. The most common example of this would be your Web Browser. There are other options that can be used specifically for development purposes.

- [cURL](https://curl.haxx.se/)
- [Postman](https://www.getpostman.com/)
- [HTTPie](https://httpie.org/)
- [Paw](https://paw.cloud/)


---

# BREAK

---

# CODING Goal 

Build a node application that can make an http request to pokemon api returning __Whos That Pokemon?__

https://pokeapi.co/api

https://pokeapi.co/api/v2/pokemon/

---

```javascript
var https = require('https');
var https = require("https");

function whosThatPokemon(number, callback){
    https.get('https://pokeapi.co/api/v2/pokemon/'+number, function(response){
        if(response.statusCode!== 200){
            callback(new Error("Invalid Response."+ response.statusCode))
        }

        response.setEncoding("utf-8");
        var body = "";
        response.on("data", function(chunk){
            //onsole.log(chunk+"\n");
            body += chunk;
        });
        response.on("end", function(){
            callback(null, JSON.parse(body));
        })
    
    })
}
var number = 25;

if(process.argv[2]){
    number = process.argv[2];
}

whosThatPokemon(number,function(error,data){
    if(error){
        console.log("It's... MISIGNO");
    }else{
        console.log("It's ... " + data.name +"!");
    }
})

```

---

## REVIEW

- protocol
- network layers
- Http requests
  - METHODS
  - HEADERS
  - PATH
  - STATUS CODE


---

  # BREAKOUT

---

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

+create a request to https://api.github.com/repos/jquery/jquery

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

---

``` javacript

require('dotenv').config();
var request = require('request');

//before we had used http and had to parse the chunks
var getRepoIssues = function(name, callback){
    request({
        url: `https://api.github.com/repos/jquery/jquery/issues`,
        headers: {
          'user-agent': 'node application',
          Authorization: 'Bearer ' +process.env.GITHUB_TOKEN
        }
      }, function(error, response, body) {
        console.log(response.headers);
        var issues = JSON.parse(body);
        callback(issues);
    });
}

var formatRepoIssues = function(issues){
    issues.forEach(function(issue){
        if(issue.state === "open"){
            console.log('⭕ '+issue.title);
        }else{
            console.log('❌ '+ issue.title);    
        }
    })
}


getRepoIssues("jquery", formatRepoIssues);

```
