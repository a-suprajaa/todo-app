const router2 =require('express').Router()


const todomodel=require('../models/TodoModel')
router2.post("/addtodo",(req,res)=>{
      const a= req.body.todoentry
      console.log(a);
      const newtodo = new todomodel({todoname:a})
      newtodo.save()
      .then(()=>console.log("saved to db"))
      .catch(err => console.log(err))
      res.redirect("/")
      res.end()
})

router2.get("/delete/todo/:_id",(req,res) => {
      const {_id}= req.params;
      console.log(_id)
      todomodel.deleteOne({_id})
      
      .then(()=>console.log("deleted success"))
      .catch(err => console.log(err))
      res.redirect("/")
      res.end()
})
module.exports=router2