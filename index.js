const express = require('express')
const app = express()

var bodyParser = require("body-parser");
var cors = require('cors')
const port = 3000
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());
app.use(jsonParser);
app.use(urlencodedParser);


app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.post('/login', (req, res) => {

  const username = 'nadhif'
  const password = 'nadhif123'

  if (req.body.username !== username) {
    res.json({
      status: "error, username not found",
    });
    return;
  }
  //check password valid
  if (req.body.password !== password) {
    res.json({
      status: "error, wrong password",
    });
    return;
  }

  //return kondisi sukses
  res.json({ status: "success" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})