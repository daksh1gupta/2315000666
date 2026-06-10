const express=require("express");
const cors=require("cors");

const logger=require("../logging middleware/logger");
const notifications=require("./notifications");
const {calculatePriority}=require("./priorityService");

const app=express();

app.use(cors());
app.use(logger);

app.get("/notifications",(req,res)=>{

    const result=notifications.map(n=>({
        ...n,
        priority:calculatePriority(n)
    }));

    result.sort((a,b)=>b.priority-a.priority);

    res.json(result.slice(0,10));
});

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});