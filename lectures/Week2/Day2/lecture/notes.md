---
theme : "white"
transition: "zoom"
highlightTheme: "darkula"
logoImg: ""
center: false
slideNumber: true

---

# HTTP and APIs
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


### Preamble 💻 

Last week you learned about _JavaScript_. You used the language to write programs that satisfy specific requirements and ran them using node. This week you will learn how to take the js you have been learning and start to Interface or communicate with the web. Specifically you will do this with  HTTP requests. 

But first let's get an overview on how the internet works.

<center>![tenor](assets/hack.gif)</center>

---

## Internet 101 📬


We know that in order to load a webpage, we type a URL (aka Link) into the address bar of our browser. Once we hit enter, the browser loads for a few seconds and BAAM the page is on your screen.
<center>![tenor](assets/url.jpg)</center>
Behind the scenes a lot is happening when we load a web page, so let's try and break it down.

---



In order for your computer's browser 💻 (aka client, where frontend code lives) to be able to load webpages 📃, it starts communicating with a server💽. (Another computer or networked device connected to the internet). Your computer sends a request for the resources that it needs from the server in the form of a URL.

Url examoles:

The communication is achieved with a communication channel called HTTP (Hyper-Text-Transfer-Protocol) 

---

## HTTP
Http is the backbone of the web and the primary way of how we communicate over it. if the internet is the information highway 🛣️ http makes up some of the rules of the road.

Http stands for hypertext transfer protocol.which is the technical lingo for what it actually does, helps devices communicate over a network by a series of requests↪️ and responses↩️(i.e. over internet or local network).

---

## Protocol?
If http is a protocol what exactly is a protocol?

*1.*

*the official procedure or system of rules governing affairs of state or diplomatic occasions.*

*"protocol forbids the prince from making any public statement in his defense"*

Protocols are everywhere,
An informal protocol could be the rules that govern a phone.

What are some other informal protocols?

Each party involved must know the rules to communicate effectively.

---

In the context of the networks like the internet, protocols are the rules that determine how to send format and recieved data between networked devices. These could be servers, routers, phones, personal computers and more.

---

### Layers

The internet is like an ogre, and ogres are like onions and onions have layers.

<center>![osi model](assets/osi.svg)</center>

Each of these network layers have protocols that use and build upon the layers underneath them.

The bottom layer handles how bits (0/1's) are physically transmitted from point a to point b so that the higher layers can do more 

Examples of some things the lower layers do.
### Protocols

- FTP [File Transfer Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol)
- POP3 [Post Office Protocol](https://en.wikipedia.org/wiki/Post_Office_Protocol)
- IMAP [Internet Message Access Protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol)
- SMTP [Simple Mail Transfer Protocol](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)
- BitTorrent [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent)
- DHCP [Dynamic Host Configuration Protocol](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)
- DNS [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System)

---

### Hyper Text Transfer Protocol

Http sits in the highest network layer the application layer 👑. King example?
"application-level protocol for distributed, collaborative, hypermedia information systems." 

What? 

HTTP is used when one machine wants to share documents. Any number of clients can make requests on these documents. Using the request response model.


---

## Request Response

 There are two parties. The server sits at home waiting for someone to knock on their door. The client can at any time walk up to the door, knock and ask for something. A client can ask for a cup of sugar. The server will go into their kitchen to grab a cup of sugar only to bring it back and give it to the client.

---### Headers

The headers follow the same structure as with requests. A key and a value.

- Date: Fri, 30 Mar 2018 00:24:55 GMT
- Content-Type: text/html
- Content-Length: 1270

From this information I can tell the date and time the message was created. I can see that it is a 1270 byte html document.

### Content Body

When sending a response the content body is usually a representation of the resource being asked for. This is how a document made up of HTML, Image, JSON, JS, or CSS can be served.

 #  🚪🚶‍

The server sits at home waiting for someone to knock on their door.

---

# 💃 🚪🚶‍

The client can at any time walk up to the door, knock and ask for something.  
A client can ask for a cup of sugar.

All the client needs is a way to ask and a thing to ask for. 'May I please have a cup of sugar?' might be better than 'Give me that sugar!'.

---

# 🚣 🍬

The server will go into their kitchen to grab a cup of sugar. 

---

# 💃🚪🤾 

A server will make a response. They can come back with the thing that was asked for. They could aslo come back and say 'I couldn't find that.' to the client

---

# 💁 🍬 🧒

This is what happens when you type a URL into your browser.

---

### HTTP:

1. A Client connects to the server and transmits a request message.
2. The Server transmits a response message back to the client and disconnects.

---

 #  🚪🚶‍

The server sits at home waiting for someone to knock on their door.

---

# 💃 🚪🚶‍

## The REquest

Using the terminal I can type `curl -v http://example.com` and see the request as plain text.

```HTTP
GET / HTTP/1.1
Host: example.com
User-Agent: curl/7.54.0
Accept: */*

```

The first line of the request message is called the request line. This is the most important part of an HTTP request. You only need to remember two parts of the request line. The first part is the `method`, the second part is the `path`. The method represents how we want to interact with the resource. The path represents where that resource is located.

---

# 💃 🚪🚶‍

After the request line we have the `headers`. These are key/value pairs. There are a lot of different headers. In the example you can see that the `User-Agent` making the request is `curl/7.54.0`.

When we are done adding headers to the message we use `\n\n` to indicate that we want to start the `body` of the request. A `GET` request has no body therefore this is the end of the request message.

---

### Methods

Our goal today is to learn that the most common used request methods are `GET`, `POST`, `PUT`, `DELETE`. We don't need to go into detail on PUT and DELETE. A simple way to put this:

1. I use GET if I want to retrieve data from the server.
2. I use POST if I want to add data to the server.

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

### Path

This a [unix style path](https://en.wikipedia.org/wiki/Path_(computing)#Unix_style) that identifies a resource that you want to take an action on.

The original intent of HTTP was to share documents. Today we use it to build web applications. When learning about HTTP consider the methods to be actions you would take on files. The file that you want to take action on can be found uniquely using a specific path.

---

### Protocol Version

For the purposes of learning how to use HTTP, we don't need to worry about this. If it says HTTP/1.1 then we can leave it at that.

---

### Headers

Don't try and memorize all of the HTTP [headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields). Once you can read an HTTP request you can look up any headers that are unfamiliar to you. The most common ones will become familiar to you over time.

---

### Content Body

Content body is used for sending data to the server. It can be used to upload files or update a database. A POST or PUT request has the option to include the content body.

---

# 💃🚪🤾 

## The Server Response

Using the rest of the output from the request to example.com we can see what a response message looks like.
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
</html>
```

A server response contains three parts. The status line, headers and body data. The status line is similar to the request line. Skip the version and focus on two important parts. The status code (200) and the reason phrase (OK).

If example.com did not have a document to serve it could have started the response with `HTTP/1.1 404 Not Found`.


---

__Status Codes__

Follow the same practice as with headers. Have a bookmark so you can quickly look this up. Learn the most common ones.

- 200 OK
- 301 Moved Permanently
- 302 Found
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

---

### Headers

The headers follow the same structure as with requests. A key and a value.

- Date: Fri, 30 Mar 2018 00:24:55 GMT
- Content-Type: text/html
- Content-Length: 1270

From this information I can tell the date and time the message was created. I can see that it is a 1270 byte html document.

### Content Body

When sending a response the content body is usually a representation of the resource being asked for. This is how a document made up of HTML, Image, JSON, JS, or CSS can be served.


---


## tools

Typically this is the client software making the request. The most common example of this would be your Web Browser. There are other options that can be used specifically for development purposes.

- [cURL](https://curl.haxx.se/)
- [Postman](https://www.getpostman.com/)
- [HTTPie](https://httpie.org/)
- [Paw](https://paw.cloud/)


---

# BREAK

---