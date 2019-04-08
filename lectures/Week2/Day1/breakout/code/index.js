require('dotenv').config();
var request = require('request');

//before we had used http and had to parse the chunks
var getRepoIssues = function(name, callback){
    request({
        url: `https://api.github.com/repos/jquery/jquery/issues`,
        headers: {
          'user-agent': 'node application',
          Authorization: 'Bearer ' +process.env.GITHUB_TOKEN
        }
      }, function(error, response, body) {
        console.log(response.headers);
        var issues = JSON.parse(body);
        callback(issues);
    });
}

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

