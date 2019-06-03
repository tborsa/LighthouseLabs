
// make a function that takes a number and returns
// what pokemon that is to a callback function 
function whosThatPokemon(number, callback){
}

// have to make a request to the pokemon api so we have to 
// use a built in node package https to make request
var https = require('https');

// explore pokemon api to get request 

https.get('https://pokeapi.co/api/v2/pokemon/'+number, function(response){
    return response;
})

// explore the response
//and why you use callback
var number = 25;
whosThatPokemon(number,function(response){
    console.log(response);
})

// inside http request add
// explore how data comes in as a stream
if (response.statusCode!== 200){
    callback(new Error("Invalid Response."+ response.statusCode))
}else{
    response.on("data", function(chunk){
        console.log(chunk+"\n");
    });
}  

// buffer the stream together to one string
// call back with data parsed to json
    var body = "";
    response.on("data", function(chunk){
        body += chunk;
    });
    response.on("end", function(){
        callback(null, JSON.parse(body));
    })


// finally get input from user 

if(process.argv[2]){
    number = process.argv[2];
}

//format  functoin call back so its nicer to read. 

whosThatPokemon(number,function(error,data){
    if(error){
        console.log("It's... MISIGNO");
    }else{
        console.log("It's ... " + data.name +"!");
    }
})
