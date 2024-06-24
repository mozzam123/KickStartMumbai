const express = require("express")
const app = express()
const port = 9999

app.get("/test", (req, res)=>{
    res.json("testing")
})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})