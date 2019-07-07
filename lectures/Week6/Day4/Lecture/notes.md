# More Web Sockets
![socket](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/sockets.jpg)
![socket](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/socket2.jpg)
![socket](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/socket3.jpg)
![socket](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/socket4.jpg)


Notes and code [here](https://github.com/tborsa/LighthouseLabs/tree/master/lectures/Week6/Day4/Lecture)

Pokedex React App we built [here](https://github.com/tborsa/pokemonsockets)

# Review

Chatty ?
web sockets from yesterday?
what do we remember?  
- how to hook em up  
- real time communication  
- easy  
- not a lot of code supported by all browser, built in client wise  
- one persistent connection   

- socket.io  


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
  
evolution to sockets is like evolution of static http to ajax

# Topics 📢

this is not a tutorial on websockets
main goal is to get stoked on what you can do with web sockets!

- WebSocket History  
- web sockets with react  
- socket io


# History of Sockets
![history](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/history.jpg)

Websockets was created out of a want/need for open real-time communication

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


 componentDidMount() {
   this.ws = new WebSocket(URL)
   this.ws.onopen = () => {
     // event listener for connection
     console.log('connected')
      this.ws.onmessage = evt => {
        // on incoming message, add it to the list of messages
        const message = JSON.parse(evt.data)
        this.setState({
          messages: [...this.state.messages, message]
        })
      }
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

Render(){
  return(
    <Message socket={this.sockt}/ socketHandlerFunction={this.handlePost} ></Message>
    <Notification socket={this.socket}></Notification>
  )
}

```
Socket as State?  
Props?

When to initiate?

in constructor?
componentDidMount?

this.ws = thing

methods down
keep render as simple as possible


# Socket.io

![Socketio](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/socketio.jpg)

[Docs](https://socket.io/docs/)

Socket.io is websockets wrapped with additional protocol.

A WebSocket client will not be able to successfully connect to a Socket.io server, and a Socket.io client will not be able to connect to a WebSocket server.


Adds more features!

__Custom Events__

```Javascript
socket.on('my other event', function (data) {
   console.log(data);
 });
```

__Server or Socket Emits__

```Javascript
io.emit('this', { will: 'be received by everyone'});
socket.emit('this', {will: 'be received by one socket' })
```

__Broadcast__

Send a message to all sockets except the sending socket

```Javascript
socket.broadcast.emit('this', {will: 'be received by all but the calling socket' });
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




# Battle

![battle](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/battle.jpg)

- add health numbers  
- add socket battle  
- pass attack function down  
- add broadcast when one pokemon wins  
- Battle rooms?  
- ????  
- Profit  





