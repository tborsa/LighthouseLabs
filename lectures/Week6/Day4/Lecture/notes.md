# More Web Sockets
![socket](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/sockets.jpg)
![socket](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/socket2.jpg)
![socket](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/socket3.jpg)
![socket](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/socket4.jpg)


# Review

chatty ? 
web sockets from yesterday?
what do we remember from yesterday?
what does it mean?

---

# Use Cases
what can it be used for? 
    google docs
    online multiplayergames
    .io games sockets 
    more than chat 
    
eveloution to sockets is like evolutuon to ajax
article on websockers for some history 


this is not a tutorial on websockets 
main goal is to get stoked on what you can do with web sockets!

# Topics 📢

- web sockets with react
- socket io


# History of Sockets
![history](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/history.jpg)

Websockets was created out of a want/need for open real-time communication

- Typically slower real time with Hacked HTTP methods
- 1995 browser wars netscape vs explorer
  - 1999 Birth of AJAX 
  - There was no real notion of allowing a server to contact the user proactively

- long polling
  Open a XMLHttpRequest connection and leave it open to allow for ongoing communication.
  - No clear formating on data
  - tricky and has complications

- 2008 Websockets were coined and work began on bidirectional real time communication
- The idea made it into a W3C standards draft 
- 2010 Google chrome shipped with full support of the new Websockets protocol
- 2011 RFC 6455 – The WebSocket Protocol – was published 
- Today all major browsers support websockets

[Deep Dive](https://www.ably.io/concepts/websockets)



websockets is a protocol there are many options for socket servers 

__Server__
- websockets
  - Barebones almost pure JS implementation of WebSocket protocol
  - client uses native websocket object

- ws
  -
  -client uses native websocket object

- socket io 
  - client uses socket.io client
  - additional features + fallback options
  - parses incomming data to JSON
  - message types 

__Client__

- WebSocket
  - WebSocket protocol is natively supported by browsers
  - Built in client api
- Socket.io
  - Wraps WebSocket ApI with some additional features

ws vs wss

add client side socket 
what can i use as state and props?

how would i add ws as state?
in constructor? 
component will mount
this.ws = thing

twitch group play example 
red vs blue 
pokemon battle 

pass method down to let the child components use socket


show dev tool trying to connect and getting communication back 


look at socket io
and the differences
websocket built into the client raw
but have to use a client side client for socket io
makes it easy tocrrate types of messages
a level of abstraction

keep render as simple as possible
 

![battle](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day1/Lecture/assets/battle.jpg)

2nd half hackathon style coding session 
maybe have julian demo 

