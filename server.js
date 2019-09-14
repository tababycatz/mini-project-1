// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 4200;

var tables = [];
var waitlist = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view",function(req,res){
    res.sendFile(path.join(__dirname, "view.html"));

});

app.get("/reserve",function(req,res){
    res.sendFile(path.join(__dirname, "add.html"));
});


app.post("/api/tables",function(req,res){
    app.get("/api/characters", function(req, res) {
        return res.json(tables);
      });      
})


app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});

app.post("/api/reservations", function(req,res) {
    var newtable = req.body;
    console.log(newtable);
    characters.push(newcharacter);
    res.json(newtable);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
