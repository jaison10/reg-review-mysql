var express = require('express');

var mysql= require('mysql');
var app= express();

var connections= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"mydatabase"
});

connections.connect(function(error)
{
    if(!!error)
    {
        console.log("Error in connecting!");
        
    }
    else
    {
        console.log("Connected");
    }
});
app.get('/',function(req,res){
    connections.query("SELECT *FROM dbtable",function(error,row,fields)
{
    if(!!error)
    {
        console.log("Erroe in requesting query");
        res.redirect('/');
    }
    else
    {
        res.json(row);
        //res.render(main.html);
        console.log("data has been sent");
        
    }
});
});

app.listen(1337);
