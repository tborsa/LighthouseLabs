require('dotenv').config();

var request = require('request');

//before we had used http and had to parse the chunks
var getRepoIssues = function(name, callback){
    request({
        url: `https://api.github.com/repos/lighthouse-labs/angular_bookstore/issues/20`,
        qs: {
          sort: 'created',
          access_token: process.env.GITHUB_TOKEN
        },
        headers: {
          'user-agent': 'node application'
        }
      }, function(error, response, body) {
        var issues = JSON.parse(body);
      
        callback(issues);
    });
}

var formatRepoIssues = function(issues){
    issues.forEach(function(issue){
        if(issue.state === "open"){
            console.log(✅+issue.titel);
        }else{
            console.log(❌+ issue.title);    
        }
    })
}


getRepoIssues("jquery", formatRepoIssues);

