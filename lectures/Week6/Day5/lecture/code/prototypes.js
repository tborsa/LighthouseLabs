function test() {
    console.log("test");
}


function createThor(attack, speed){
    console.log("Thor is Here!");
    return{
        attack: attack, 
        speed: speed,
        javelinMissle: function(){
            console.log("BOOOOM!!");
        }
    }
}
function createHellion(attack, speed){
    console.log("Im Ready");
    return{
        attack,
        speed,
        flameThrower(){
            console.log("tssssssss");
        }

    }
}

//constructor 
function commandCenter(location){
    this.location = location;
}

commandCenter.prototype.buildSCV = function(){
    console.log("SCV Here!");
};

//
function PlanetaryFortress(location){
    commandCenter.call(this, location);
    this.cannons= function(){
        console.log("BOOM!");
    }
}

PlanetaryFortress.prototype = commandCenter.prototype;


function OrbitalCommand(location){
    commandCenter.call(this, location);
    this.scan= function(){
        console.log("ping...ping");
    }
    this.buildSCV = function(){
        commandCenter.prototype.buildSCV.call(this, null);
        console.log("New scv");
    }
}

OrbitalCommand.prototype = commandCenter.prototype;


//PlanetaryFortress.prototype.test = "hello";


//PlanetaryFortress.prototype.constructor = commandCenter;