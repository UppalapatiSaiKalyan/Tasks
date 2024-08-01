import express from "express";
import dbInit from "./db/init";

import routes from "./routes/Demo.routes";

const port = 3001

const app = express();

app.use(express.json());
dbInit()
app.use('/',routes)
app.get('/', (req,res) =>{
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });