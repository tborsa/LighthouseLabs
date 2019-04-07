var https = require('https');

function whosThatPokemon(number, callback){
    https.get('https://pokeapi.co/api/v2/pokemon/'+number, function(response){
        if(response.statusCode !== 200){
            callback( new Error("request has failed with status code") + response.statusCode, null);
            return;
        }
        var body = '';
        response.setEncoding("utf-8");
        response.on('data', function(chunk){
            body+= chunk;
        });
        response.on('end', function(){
            callback(null, body);
        });

    });
}
whosThatPokemon(5, function(error, body){
    console.log(error, JSON.parse(body).abilities);
})

