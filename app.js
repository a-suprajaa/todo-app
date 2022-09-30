const express = require("express")
const { default: mongoose } = require("mongoose")
const mongooose = require("mongoose")
const bodyparser = require("body-parser")
const router1 = require("./routers/index")
const router2 = require("./routers/addtodo")
const app = express()

mongoose.connect("mongodb://localhost/todoapp",{
    useNewUrlParser : true,
   
})
.then(()=>console.log("db connected"))
.catch(err => console.log(err))


app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.static("public"))
app.set("view engine","ejs")



//routes
app.use(router1)
app.use(router2)   //routers should be the last thing you call and come after body parser

app.listen(3000,()=>console.log("server started on port 3000"))
