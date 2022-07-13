const express = require('express');
const dbConnect = require('../mongodbManager');
let app = express();

const getData = async (name) => {
    console.log('parameter:' + name)
    let db = await dbConnect();
    return db.find().toArray();
}

app.use(express.json());
app.get('/', async (req,resp)=> {
console.log(await getData('Little'));
resp.send(await getData('Little'));
})

app.post('/', async (req,resp) => {
    let data = await dbConnect();
     let result = await data.insertOne(req.body)
     console.log(result);
     resp.send(result);
})

app.put("/:name", async (req,resp)=>{
    let db = await dbConnect();
   let result = await db.updateOne(
        {name: req.params.name},
        {$set: req.body}
    )
    console.log(result);
    resp.send(result);
})

app.delete('/:name', async (req,resp) => {
    let db = await dbConnect();
    let result = await db.deleteMany(
        {name: req.params.name}
    )
console.log(result);
    resp.send(result);
})

app.listen(5000);