//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const list1items = ["Practise on leetcode","Submit assignment","Learn DSA concepts"];
const list2items = [];

app.get("/",function(req,res)
{
    const day = date.getDate();
    res.render("list",{listTitle : "List 1", day: day, items : list1items });
});

app.get("/list2",function(req,res)
{
    const day = date.getDate();
    res.render("list",{listTitle : "List 2", day: day, items : list2items });
});

app.post("/",function(req,res)
{   
    const item = req.body.newItem;
    if(req.body.list == "List 2"){
        list2items.push(item);
        res.redirect("/list2");
    }
    else{
        list1items.push(item);
        res.render("/");
    }
});

app.listen(3000,function(){
    console.log("Server started on port 3000.");
});