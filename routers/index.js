const router1 = require("express").Router()
const todo=require("../models/TodoModel");



router1.get("/",async(req,res) =>{
       const alltodo = await todo.find();
       console.log(alltodo)
       res.render('home',{todoname:alltodo})                                 /// respond with welcome when you get a get request for /
}                            //renders home.ejs file

)
module.exports = router1