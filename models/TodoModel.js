const mongoose = require('mongoose')


const TodoSchema = new mongoose.Schema(
    {
        todoname : {
            type:String,
            required:true
        }
    }
)

module.exports = new mongoose.model("todoCollection",TodoSchema)