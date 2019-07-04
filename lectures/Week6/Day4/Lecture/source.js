//SERVER
// Create Socket Server in wwww
var io = require('socket.io')(server);
//pass the socketserver to the socketserver file 
//not yet created
require('../socketServer.js')(io);


npm install socket.io
//create socketServer.js
module.exports = function(io) {
  // socketserver listener for on connection
  io.on('connection', function(socket) {
    console.log("connection");
    //add listener for custome event message
    socket.on('message', function(message) {
      socket.emit('incommingMessage',message.value);
      console.log('from console',message.value);
    });
    //add listener for custom event attack
    socket.on('attack', function(message) {
      console.log(`opponent ${message.opponent} was attacked`);
      // broadcast attack to all
      socket.broadcast.emit('attack', message);
    });
  });
};

//CLIENT
npm install --save socket.io-client
//In APP
import openSocket from 'socket.io-client';

componentDidMount(){
  this.socket = openSocket('http://supercoolstuff:3000');
  this.socket.on('attack', (data)=>{
    console.log(data);
  });
  this.socket.emit('attack', {opponent: 1});
}

//emit an attack
sendAttack = (opponent) => {
  this.socket.emit('attack', {opponent: opponent});
}

//Add to attacker component
onClick={()=>{this.props.sendAttack(1)}}


// ADD to .on attack listener
if(data.opponent == 1 ){
  this.setState({opponentOne: { number: this.state.opponentOne.number, health: this.state.opponentOne.health -1, attacked: true}}, ()=>{
    setTimeout(()=>{ 
      this.setState({opponentOne: { number: this.state.opponentOne.number, health: this.state.opponentOne.health, attacked: false}})
    }, 500);
  })
}else{
  this.setState({opponentTwo: { number: this.state.opponentTwo.number, health: this.state.opponentTwo.health -1, attacked: true}}, ()=>{
    setTimeout(()=>{ 
      this.setState({opponentTwo: { number: this.state.opponentTwo.number, health: this.state.opponentTwo.health, attacked: false}})
    }, 500);
  })
}

// Add a broadcast when one pokemon wins?
