var mongo = require('mongodb');
var host = 'localhost';
var port = mongo.Connection.DEFAULT_PORT;

var db = new mongo.Db('test', new mongo.Server(host, port, {}), {safe:false});
db.open(function(err, db) {
    console.log("Connected!");
    db.close();
});
