import express from "express";
 
const port = 9944

const app = express();

app.use(express.json());

app.get('/', (req,res) =>{
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
