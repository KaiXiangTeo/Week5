let express =require('express')
let app = express()
let bodyParser = require('body-parser')
let db=[];

app.use(express.static("public/img"))
app.use(express.static("views"))

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.engine("html",require('ejs').renderFile);
app.set('view engine',"html");


app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
});

app.get("/newtask",function(req,res){
    res.sendFile(__dirname+"/views/newtask.html")
});

app.post('/addtask',function(req,res){
    db.push(req.body)
    res.render("listtask.html",{    //render file must in "views"
        tasks:db
    });
})

app.get("/listtask",function(req,res){ 
    res.render("listtask.html",{    //render file must in "views"
        tasks:db
    });
})
app.listen(8080);