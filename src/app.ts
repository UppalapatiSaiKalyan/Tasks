import express from "express";
 import dbInit from "./db/init";

import doctorRoute from "./routes/Doctor.route";

const port =4000;

const app = express();

app.use(express.json());
 dbInit()
 app.use('/',doctorRoute)

app.get('/', (req,res) =>{
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });



 
 