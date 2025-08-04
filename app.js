const express = require("express");
const app = express();
var cors=require('cors');
app.use(cors());
//require('dotenv').config()
const xlsx = require('xlsx');
let wb = xlsx.readFile('data.xlsx');
let ws=wb.Sheets['names'];
let _data = xlsx.utils.sheet_to_json(ws);
const PORT = process.env.PORT || 3030;
//console.log(process.env.MARIA)


app.get('/', function (req, res) {
    res.send('Hello World')
  })
  app.get('/students', function (req, res) {
    // var data =[
    //   {id:1,name:'maria dh'},
    //   {id:1,name:'rouaa'},
    //   {id:1,name:'serena'}
    // ]
    res.send(_data )
  })

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});