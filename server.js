//mongoose
const mongoose=require ("mongoose");
const express=require("express");

const app = express();
//connectiong to the db
mongoose.connect("mongodb://localhost:27017/slDB");

app.get("/services/:service", (req,res) =>{
    const service=req.params.service;
    Service.find({type : service},function(err,result) {
        if(err){
            console.log(err);
        }else if(result){
            res.json(result);
        }else{
            res.send("there are no services");
        }
    });
}); 

app.get("/", (req,res) =>{
    Review.find(function(err,resultReviews) {
        if(err){
            console.log(err);
        }else if(resultReviews){
            Preview.find(function(err,resultPreview){
                if(err){
                    console.log(err);
                }else if(resultPreview){
                    console.log(resultPreview);
                    res.send({previewOptions:resultPreview, reviews:resultReviews});
                }else{
                    res.send("there are no reviews");
                } 
            });
        }else{
            res.send("there are no reviews");
        }
    });
});

const serviceSchema=new mongoose.Schema({
    type:String,
    typeName:String,
    previewDuration:String,
    name:String,
    discription:String,
    participants:String,
    duration:Array,
    imgName:String,
    specificData:JSON
});
const Service=mongoose.model("Service", serviceSchema);

const reviewSchema=new mongoose.Schema({
    name:String,
    role:String,
    testimonial:String,
    imgName:String
});
const Review=mongoose.model("Review", reviewSchema);

const PreviewSchema=new mongoose.Schema({
    type:String,
    name:String,
    productName:String,
    benefits:Array,
    imgName:String
});
const Preview=mongoose.model("Preview", PreviewSchema);

app.listen(5000,() => {console.log("server is up on port 5000")});

