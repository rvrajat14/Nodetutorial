const express = require('express');
const con = require('./config');
const app = express();

app.use(express.json());
app.get("/", (req, resp) => {
    con.query("select * from users", (err, result) => {
        if (err) {
            resp.send("error");
        }
        else {
            resp.send(result);
        }
    })
});

app.post("/",(req,resp)=> {
    const data = req.body;
    con.query("INSERT INTO users SET ?", data, (err,result, fields) => {
        if (err) throw err;
            resp.send(result);
    })
});

app.put("/:ID",(req,resp) => {
    const data = [req.body.name, req.body.age, req.body.designation, req.params.ID]
    con.query("UPDATE users SET name = ?, age = ?, designation = ? where ID = ?", data, (err, result, fields) => {
        if (err) throw err;
            resp.send(result);
    })
})

app.delete("/:ID",(req,resp) => {
    con.query("DELETE FROM users WHERE ID =" + req.params.ID, (err, result) => {
        if (err) throw err;
        resp.send(result);
    })
});

app.listen(6000);