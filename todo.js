const mongoose = require('mongoose');
const todoSchema= mongoose.Schema({
    task:String,
    is_completed:String,
    end_date:new Date()
});

module.exports= mongoose.model("todo",todoSchema);