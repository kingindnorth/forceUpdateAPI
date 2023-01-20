const express = require("express")

const app = express()

//body parser

app.use(express.json())

//routes

app.use("/",require("./controllers/forceUpdate").forceUpdate)

const PORT = 3221

app.listen(PORT,()=>{
    console.log(`server started at port: ${PORT}`)
})