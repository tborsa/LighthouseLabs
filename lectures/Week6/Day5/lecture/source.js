//create these in the console itself. 

var literal = { 
    keyName: "someValue",
    keyTwo: 2
};

// have to re write the whole structure of an object
// in order to make another one. 

var literal = { 
    keyName: "someValue",
    keyTwo: 2,
    behavior: function(){ console.log("hello")}
};


literal.newKey = "newValue";


delete literal.newKey;

//==================================================>
// MAKE IN INDEX.JS FILE
//creates a single object but what if we want more

function createThor(attack, speed){
    console.log("Thor is HERE!");
    return {
        attack: attack, 
        speed: speed,
        javelinMissle: function(){
            console.log("fire");
        }
    }
}


function createHellion(attack, speed){
    return {
        attack, 
        speed,
        flameThrower(){
            console.log("fire");
        }
    }
}

var hellion = createHellion(24, 12);


//===========================================>

function ComandCenter(location){
    this.location = location;
    this.buildScv = function(){
        console.log("SCV Ready!");
    }
}

var commandCenter = new CommandCenter([20,20]);

//===========================================>

ComandCenter.prototype.buildScv = function(){
    console.log("SCV READY!");
}



//===========================================>

//check the proto and constructor properties of the created
//elements

function PlanetaryFortress(){
    this.cannons = function(){
        console.log("BOOM!");
    }
}



PlanetaryFortress.prototype = Object.create(CommandCenter.prototype);


PlanetaryFortress.prototype.constuctor = CommandCenter; 

//look at PlanetaryFortress prototype & constructor
// notice that child does not have location set

function PlanetaryFortress(){
    CommandCenter.call(this, [20,20]);
    this.cannons = function(){
        console.log("BOOM!");
    }
}
//====================================================>

// add this.loadSCV = function(){ console.log("loaded")}; to command center


function OrbitalCommand(){
    this.scan = function(){
        console.log("Ping..Ping...");
    }
    this.loadSCV = function(){
        console.log("Cant do that.");
    }
}

OrbitalCommand.prototype = Object.create(CommandCenter.prototype);

//look at orbitalCommands prototype & constructor

OrbitalCommand.prototype.constuctor = CommandCenter; 


//==================================================>
