//var http = require('http'); // Import Node.js core module
//var backApi = require(`./home/spatico/skcse03/go/src/imdb`)



// server.listen(5000); //6 - listen for any incoming requests

// console.log('Node.js web server at port 5000 is running..')


var http = require('http')
var Request = require('request')

var server = http.createServer(function (req, res) { 

  //create web server
   if (req.url=='/index.html'){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<html>'+
'<body>'+

'<p>Enter names in the fields, then click "Submit" to submit the form:</p>'+

'<form id="frm1" action="/action_page.php">'+
  'Movie name: <input type="text" name="fname"><br>'+
  'Release year: <input type="text" name="lname"><br>'+
  'Plot: <input type="text" name="plotinput"><br><br>'+
  '<a href="http://localhost:5000/get/movies/list/"> <input type ="button" value="Submit"/></a>'+
'</form>'+

'<script>'+
'function myFunction() {'+
    'document.getElementById("frm1").submit();'+
'}'+
'</script>'+

'</body>'+
'</html>')
   }



    if (req.url == '/get/movies/list/') { //check the URL of the current request
        
   var re = Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:8090/saurabh/imdb/v1/get/movies/list/"
}, (error, response, body) => {
     console.log("saurabh")
    if(error) {
        return console.dir(error);
    }
    //console.dir(JSON.parse(body));
    response.on('data', function(chunk) {
            console.log("Body chunk: " + chunk)
            res.write("chunk-----------------------------------------");
          });
    
});
       res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content 
       re.on('data', function(chunk) {
        var ctr = JSON.parse(chunk)
            console.log("Body chunk: " + chunk ); 
   });
       res.write("get movie list")
        res.end();
    
    }
      if (req.url == '/new/movies/') {
        var removies = Request.post({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:8090/saurabh/imdb/v1/new/movies/",
            "body": JSON.stringify({
                                  "movie":{
                      "movie_name":"ddlj",
                      "release_year":"2016-07-08",
                      "plot":"nitp",
                      "poster":"hungama"
                      
                    },
                    "producer_id":1,
                    "actors_id":[1,2,3]
            })
        }, (error, response, body) => {
             console.log("saurabh")
             if(error) {
               return console.dir(error);
              }
              console.dir(body);
            //   response.on('data', function(chunk) {
            //   console.log("Body chunk: " + chunk)});
           });
       res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
       res.write("add movie");
  
        res.end();
      }
    if (req.url =='/get/actor/') {
      var removies = Request.get({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:8090/saurabh/imdb/v1/get/actor/",
        }, (error, response, body) => {
             //console.log("saurabh")
             if(error) {
               return console.dir(error);
              }
              console.dir(body);
           
          });
       res.writeHead(200, { 'Content-Type': 'text/html' }); 
         removies.on('data', function(chunk) {
        var ctr = JSON.parse(chunk)
            console.log("Body chunk: " + chunk ); 
   });
        // set response content    
       res.write("get actor");
        res.end();
    }
      if (req.url== '/get/producer/') {
      var removies = Request.get({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:8090/saurabh/imdb/v1/get-producer",
        }, (error, response, body) => {
             if(error) {
               return console.dir(error);
              }
              console.dir(body);
           });
       res.writeHead(200, { 'Content-Type': 'text/html' });
        removies.on('data', function(chunk) {
        var ctr = JSON.parse(chunk)
            console.log("Body chunk: " + chunk ); 
   });    
       res.write("get producer");
        res.end();
    }
    if (req.url== '/add/actor/') {
      var removies = Request.post({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:8090/saurabh/imdb/v1/add/actor/",
            "body": JSON.stringify({        
                "actor_name":"srt121",
                "sex":"m",
                "dob":"1997-03-11",
                "bio":"low"
               })
        }, (error, response, body) => {
             if(error) {
               return console.dir(error);
              }
              console.dir(body);
           });
       res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
       res.write("add actor");
  
        res.end();
    }
    if (req.url== '/add/producer/') {
      var removies = Request.post({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:8090/saurabh/imdb/v1/add/producer/",
            "body": JSON.stringify({                          
                "producer_name":"srt121",
                "sex":"m",
                "dob":"1997-03-11",
                "bio":"low"
               })
        }, (error, response, body) => {
             if(error) {
               return console.dir(error);
              }
              console.dir(body);
           });
       res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
       res.write("add producer");
  
        res.end();
    }

    if (req.url== '/update/') {
      var removies = Request.post({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:8090/saurabh/imdb/v1/update/",
            "body": JSON.stringify({                         
                            "movie_name":"3idiots",
                            "release_year":"2016-06-11"
               })
        }, (error, response, body) => {
             if(error) {
               return console.dir(error);
              }
              console.dir(body);
           });
       res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
       res.write("update");
  
        res.end();
    }

    
});

 server.listen(5000);
console.log('Node.js web server at port 5000 is running..')