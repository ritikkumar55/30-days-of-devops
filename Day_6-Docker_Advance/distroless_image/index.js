import express from "express";

const app = express();
const PORT = 5000;

app.get("/",(req,res) => {
    return res.json([
        {id:1, name:"Ritik"},
        {id:2, name:"Rohit"},
        {id:3, name:"Raman"}
    ]);
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})