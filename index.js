const express = require('express');
require("./config");
const todo = require('./todo');
const app = express();

app.use(express.json());
app.post("/create", async (req, resp) => {
    let data = new todo(req.body);
    const result = await data.save();
    resp.send(result);
});

app.get("/list", async (req, resp) => {
    let data = await todo.find();
    resp.send(data);
})

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await todo.deleteOne(req.params);
    resp.send(data);
})


app.put("/update/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await todo.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})

app.listen(5000)