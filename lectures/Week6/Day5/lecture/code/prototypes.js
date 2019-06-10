function test() {
    console.log("test");
}


let literal = { key: 4};

literal.newthing = "Hey";

delete literal.newthing;


const factory = function( attack, speed){
    console.log("THOR IS HERE!");
    return{
        attack: attack,
        speed: speed,
        name: "thor",
        javelinMissle: function(){
            console.log('BAM!!');
        }
    }
}


const CommandCenter = function(location){
    this.location = location;
}


CommandCenter.prototype.buildSCV = function(){
    console.log("SCV READY!");
};
CommandCenter.prototype.loadSCV = function(){
    console.log("LOADED");
}


const OrbitalCommand = function(location){
    this.location = location;
}

OrbitalCommand.prototype = Object.create(CommandCenter.prototype);
OrbitalCommand.prototype.constructor = OrbitalCommand;



OrbitalCommand.prototype.scannerSweep = function(){
    console.log("Ping.... ping.. ");
};
OrbitalCommand.prototype.muleDrop = function(){
    console.log("New MULES");
};

const PlanetaryDefense = function(location){
    this.location= location;
}

PlanetaryDefense.prototype = Object.create(CommandCenter.prototype);

PlanetaryDefense.prototype.cannons = function(){
    console.log("BOOM!");
}
PlanetaryDefense.prototype.loadSCV = function(){
   
}