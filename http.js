var http = require("http");

var callbackAnswer = [];

http.get("http://omdbapi.com/?i=tt0241527", function(res){
    
    res.setEncoding("utf8");
    
    res.on("data", function(data){
        var arr1 = [data];
        callbackAnswer.push(arr1);
        // console.log(arr1);
    });
  
   		res.on("end", function(){

             http.get("http://omdbapi.com/?i=tt0295297", function(res){
    
             res.setEncoding("utf8");
    
             res.on("data", function(data){
        		var arr2 = [data];
             callbackAnswer.push(arr2);
             console.log(callbackAnswer);
              
              });
          });
       });
   	});