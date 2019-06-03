// using request package to send requests. 
var request = require('request');

//before we had used http and had to parse the chunks
var getRepoIssues = function(name, callback){
    request({
        url: `https://api.github.com/repos/jquery/jquery/issues`,
    }, function(error, response, body) {
        console.log(response.headers);
        var issues = JSON.parse(body);
        callback(issues);
    });
}

// show the resulting code
getRepoIssues("jquery", function(issues){
    console.log(issues);
});

//have to add the correct agent header for the request to work
headers: {
    'user-agent': 'node application'
}

//create gitub access token and add to header
headers: {
    Authorization: 'Bearer 6734b32af0b9396374fedb722ad0f0991b554725'
}

// create enviornment variable in command line wiht export TEST=thing
// console log it in app
console.log(process.env.thing);

//create .env file with GITHUB_TOKEN= 6734b32af0b9396374fedb722ad0f0991b554725

// Add enviornment variables with dotenv
require('dotenv').config();

//update header to use .env variables
headers: {
    'user-agent': 'node application',
    Authorization: 'Bearer ' +process.env.GITHUB_TOKEN
  }

// add .gitignore file
// add .env and node_modules


// Format response output so that it is nicer to read
// call functoin with new format callback
var formatRepoIssues = function(issues){
    issues.forEach(function(issue){
        if(issue.state === "open"){
            console.log('⭕ '+issue.title);
        }else{
            console.log('❌ '+ issue.title);    
        }
    })
}


getRepoIssues("jquery", formatRepoIssues);

