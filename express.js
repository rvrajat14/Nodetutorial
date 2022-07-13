const express= require('express');
const res = require('express/lib/response');
const app = express();

app.get('',(req,res)=> {
  res.send('Weelcome, this is the homepage');
});

app.get('/about',(req,res)=> {
    res.send('Weelcome, this is the aboutpage');
  });

  app.get('/help',(req,res)=> {
    res.send('Weelcome, this is the helppage');
  });

  app.listen(5000);