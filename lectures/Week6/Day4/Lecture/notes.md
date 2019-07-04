# More Web Sockets
![socket](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/sockets.jpg)
![socket](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/socket2.jpg)
![socket](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/socket3.jpg)
![socket](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/socket4.jpg)


# Review

Chatty ?
web sockets from yesterday?
what do we remember?
-
-
-


---

# Use Cases
what can it be used for?
 - shared docs
     - google docs
 - online multiplayer games
 - .io games sockets
   [slither](http://slither.io/)
   [diep](https://diep.io/)
 - more than chat
  
evolution to sockets is like evolution to ajax
article on websockets for some history

# Topics 📢

this is not a tutorial on websockets
main goal is to get stoked on what you can do with web sockets!

- WebSocket History
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
 Open an XMLHttpRequest connection and leave it open to allow for ongoing communication.
 - No clear formatting on data
 - tricky and has complications

- 2008 Websockets were coined and work began on bidirectional real time communication
- The idea made it into a W3C standards draft
- 2010 Google chrome shipped with full support of the new Websockets protocol
- 2011 RFC 6455 – The WebSocket Protocol – was published
- Today all major browsers support websockets

[Deep Dive](https://www.ably.io/concepts/websockets)


# Websockets as a Protocol

websockets is a protocol there are many options for socket servers

__Server__
- websockets
 - Barebones almost pure JS implementation of WebSocket protocol
 - client uses native websocket object

- ws 
 - "ws is a simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation."
 - client uses native websocket object

- socket io
 - client uses socket.io client
 - additional features + fallback options
 - parses incoming data to JSON
 - message types

__Client__

- WebSocket
 - WebSocket protocol is natively supported by browsers
 - Built in client api
- Socket.io
 - Wraps WebSocket ApI with some additional features

# React and Websockets

__Server__
- Generic setup


__Client__
```JavaScript
import React, { Component } from 'react'
const URL = 'ws://localhost:3000'

class Chat extends Component {
 state = {
   name: 'Travis',
   messages: [],
 }

 ws = new WebSocket(URL)

 componentDidMount() {
   this.ws.onopen = () => {
     // event listener for connection
     console.log('connected')
   }

   this.ws.onmessage = evt => {
     // on incoming message, add it to the list of messages
     const message = JSON.parse(evt.data)
     this.setState({
       messages: [...this.state.messages, message]
     })
   }
   //Could add connection on close

 }
 .
 .
 .
 submitMessage = messageString => {
   // on submitting the ChatInput form, send the message, add it to the list and reset the input
   const message = { name: this.state.name, message: messageString }
   this.ws.send(JSON.stringify(message))
   this.setState({
     messages: [...this.state.messages, message]
   })
 }
```
Socket as State?
Props?

When to initiate?

in constructor?
componentWillMount?

this.ws = thing

methods down
keep render as simple as possible


# Socket.io

![Socketio](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/socketio.jpg)

[Docs](https://socket.io/docs/)

A WebSocket client will not be able to successfully connect to a Socket.io server, and a Socket.io client will not be able to connect to a WebSocket server.

Socket.io is websockets wrapped with additional protocol.

Adds more features!

__Custom Events__
```Javascript
socket.on('my other event', function (data) {
   console.log(data);
 });
```

__server or Socket Emits__

```Javascript
io.emit('this', { will: 'be received by everyone'});
socket.emit('this', {will: 'be received by one socket' })
```

__Broadcast__

Send a message to all sockets except the sending socket
```Javascript
socket.broadcast.emit('user connected');
```

__Rooms__

Join a specific room
```Javascript
io.on('connection', function(socket){
 socket.join('some room');
});
```
emit only to those in a specific room
```Javascript
io.to('some room').emit('some event');
```


show dev tool trying to connect and getting communication back

# Battle

![battle](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/battle.jpg)

- add health numbers
- add socket battle
- pass attack function down
- add broadcast when one pokemon wins
- Battle rooms?
- ????
- Profit





