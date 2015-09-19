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


//module exports to install middleware
module.exports = middleware;