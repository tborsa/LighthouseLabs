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

This morning we learned about protocols and HTTP, and looked at how http requests can be made by browsers, the terminal, postman, and by a node applicatoin. 

We are going to continue to explore HTTP requests within node applications and work through:

-How to use request ( A node module for HTTP requests)
-Access tokens
-Query String
-Enviornment variables

<center>![tenor](assets/hack.gif)</center>

---

## Request 📬

Request is a node module that makes it easier to do HTTP requests. 
[Request Docs](https://www.npmjs.com/package/request)

Request buffers the response for you (adds all the chunks together) so you don't have to.
---

## Access tokens

some api's will require access tokens. 
These are unique identifiers that identify who you are when you use the api. 
This allows the api/server to 
-block or restrict anonymous traffic.
-controll the number of calls that are made to the api
-identify usage patters

Practically using an access token will allow us to access more and make more requests.

create access token+

---

## Headers

We looked at headers this morning, and now we have a practical example of a situation where we need to use headers. 

To use our access token we have to set it as a header. 


