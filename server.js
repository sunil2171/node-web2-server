var express = require("express");
var hbs = require("hbs");

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set("view engine", 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', function(){
    return new Date().getFullYear();
});

var user = {
    name: "Sunil",
    age: 23,
    todo: [1,2,3,4,5,6]
}

app.get("/", function(req, res){
    res.render('home.hbs',{
        pageTitle: "Home Page",
        
    });
});

app.get("/about", function(req, res){
    res.render('about.hbs',{
        pageTitle: "About Page",
       
        });
});

app.get("/bad", function(req, res){
    res.send({
        error:"unable to handle request"
    })
});



app.listen(3000,function(){
    console.log("Server is up at 3000");
})