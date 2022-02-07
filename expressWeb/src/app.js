const express=require('express')
const path=require('path');
const app=express();  
const port=process.env.PORT||8000;
const hbs=require('hbs')

const static_path=(path.join("../public"))
const template_path=(path.join(__dirname,"../templates/views"))
const partial_path=(path.join(__dirname,"../templates/partials"))

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
hbs.registerPartials(partial_path);



app.set('views',template_path)



app.use(express.static(static_path))




app.get("/",(req,res)=>{
    res.render("index.hbs");
                                       
})
app.get("/about",(req,res)=>{
    res.render("about.hbs")
})
app.get("/weather",(req,res)=>{
    res.render("weather.hbs")
})
app.get("*",(req,res)=>{
    res.render("404error.hbs",{
        errorMsg:"OOPS! NO DATA FOUND",

    })
    
})
app.listen(port,()=>{
    console.log("listening to the port");
})