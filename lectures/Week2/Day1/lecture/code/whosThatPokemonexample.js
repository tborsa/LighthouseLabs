var https = require('https');

function whosThatPokemon(number, callback){
    https.get('https://pokeapi.co/api/v2/pokemon/'+number, function(response){
        if(response.statusCode!== 200){
            callback(new Error("Invalid Response."+ response.statusCode))
        }

        response.setEncoding("utf-8");
        var body = "";
        response.on("data", function(chunk){
            //onsole.log(chunk+"\n");
            body += chunk;
        });
        response.on("end", function(){
            callback(null, JSON.parse(body));
        })
    
    })
}
var number = 25;

if(process.argv[2]){
    number = process.argv[2];
}

whosThatPokemon(number,function(error,data){
    if(error){
        console.log("It's... MISIGNO");
    }else{
        console.log("It's ... " + data.name +"!");
    }
})
