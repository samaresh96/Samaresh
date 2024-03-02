const express = require("express")
const status = require("express-status-monitor")
const fs = require("fs")

const app = express()
const PORT = 3000

app.use(status())

app.get("/" ,(req, res)=>{
   const stream = fs.createReadStream("./demo.txt" ,"utf-8")
   stream.on("data" ,(chunk)=>{
    res.write(chunk)
   })
   stream.on("end",()=> res.end())

// fs.readFile("./demo.txt" , (err,data)=>{
//     res.end(data)
// } )
})

app.listen(PORT , ()=>{
    console.log(`App is running on port ${PORT}`)
})