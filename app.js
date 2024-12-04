const express = require("express");
const app = express();
//require('dotenv').config()
const PORT = process.env.PORT || 3030;
//console.log(process.env.MARIA)

// your code
app.get('/', function (req, res) {
    res.send('Hello World')
  })
  app.get('/students', function (req, res) {
    var data =[
      {id:1,name:'maria dh'},
      {id:1,name:'rouaa'},
      {id:1,name:'serena'}
    ]
    res.send(data)
  })

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});