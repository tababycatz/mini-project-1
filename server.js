// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8000;

var tables = [{
    name: "Frankie",
    phone: "9736341318",
    email: "frankiepp@wnyu.org",
    uniqueID: "463728149362"
}];
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


app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});
app.get("/api/reservations",function(req,res){
    return(res.json(tables))
})


app.post("/api/reservations", function(req,res) {
    var newtable = req.body;
    console.log(newtable);
    tables.push(newtable);
    res.json(newtable);
});

app.get("api/reservations:tables", function(req,res) {
var chosentable = req.params.tables;
console.log(chosen)

for (var i = 0; i < 4; i++) {
    if (chosentable === tables[i].routeName) {
        return res.json(tables[i]);
    }
}
return res.json(false);
});