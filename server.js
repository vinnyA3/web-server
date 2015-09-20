var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

//middeware module exports
var middleware = require('./middleware.js');
//middleware
var middleware = {
    requireAuthenication: function(req,res,next){
        console.log("private route hit!");
        next();
    },
    logger: function(req,res,next){
        console.log("Request: " + req.method + ' for: ' + req.originalUrl + " on: "+ new Date().toString() );
        next();
    }
}
//order is important here, middlewear is best specified up top
app.use(middleware.logger);

app.get('/about', middleware.requireAuthenication, function(req,res){
    res.send("About Us");
});

app.use(express.static(__dirname + '/public'));


app.listen(port, function(){
    console.log("Express server started on port: " + port);
});