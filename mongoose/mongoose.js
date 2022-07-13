const express = require('express');
const multer = require('multer');
require('./config');
const Resident = require('./resident');
const EventEmitter = require("events");
const { count } = require('console');
const event = new EventEmitter();

let counts = 0
const app = express();
app.use(express.json());

app.post("/create",async(req,resp)=> {
    let data = new Resident(req.body);
    let result = await data.save();
    console.log(req.body);
    resp.send(result);
})

app.put("/update/:name",async(req,resp)=> {
    let data = await Resident.updateOne(
        {name:req.params.name},
        {$set:req.body}
        );
    console.log(req.body);
    resp.send(data);
})

app.delete("/delete/:name", async(req,resp)=> {
    let data = await Resident.deleteOne({
        name: req.params.name
    })
    console.log(data);
    resp.send(data);
})

app.get("/search/:name", async (req, resp)=> {
    event.emit("countApi");
    console.log(req.params.name);
    let data = await Resident.find({
        "$or":[
            {"name": {$regex: req.params.name}}
        ]
    })
    resp.send(data);
})


const upload = multer({

    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, "../uploads")
        },
        filename: function(req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}
).single("user_file")

app.post("/upload", upload, async (req,resp) => {
  resp.send("File Uploaded");
})

event.on("countApi",() => {
    counts++;
    console.log("Event Called" + counts);
})

app.listen(5000);