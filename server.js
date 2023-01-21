//import data 
const preview=require("./preview-data.json");
const review=require("./review-data.json");
const workshop=require("./workshop-data.json");
const course=require("./course-data.json");
const boutiqueBooth=require("./boutiqueBooth-data.json");

const express=require("express");

// mongoose.Promise= global.Promise;
const app = express();

// Rules of API
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Heafers', 'Origin, X-Requested-With, Content-Typr, Accept, Authorization');
    next();
});

app.get("/services/:service", (req,res) =>{
    const service=req.params.service;
    console.log("param "+service);
    switch (service) {
        case "workshop":
            res.send(workshop);
            break;
        case "course":
            res.send(workshop);
            break;
        case "lecture":
            res.send(workshop);
            break;
        case "boutiqueBooth":
            res.send(boutiqueBooth);
            break;
        default:
            res.send("404 - page not found");
            break;
    }
}); 

app.get("/", (req,res) =>{
    console.log("in get");
    res.send({previewOptions:preview, reviews:review});
});

app.listen(8080,() => {console.log("server is up on port 8080")});