//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let list1items = ["Practise on leetcode","Submit assignment","Learn DSA concepts"];
let list2items = [];

app.get("/",function(req,res)
{
    let today = new Date();
    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    let day = today.toLocaleDateString("en-US",options);
    res.render("list",{listTitle : "List 1", day: day, items : list1items });
});

app.get("/list2",function(req,res)
{
    let today = new Date();
    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    let day = today.toLocaleDateString("en-US",options);
    res.render("list",{listTitle : "List 2", day: day, items : list2items });
});

app.post("/",function(req,res)
{   
    let item = req.body.newItem;
    if(req.body.list == "List 2"){
        list2items.push(item);
        res.redirect("/list2");
    }
    else{
        res.render("/");
    }
});

app.listen(3000,function(){
    console.log("Server started on port 3000.");
});