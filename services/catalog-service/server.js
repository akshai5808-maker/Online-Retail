const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req,res)=>{

   res.send("Smart Retail Running");

});

app.get("/cpu",(req,res)=>{

   let total = 0;

   for(let i=0;i<100000000;i++){

       total += Math.sqrt(i);

   }

   res.json({
       result: total
   });

});

app.listen(PORT,()=>{

   console.log("Catalog Service Started");

});
