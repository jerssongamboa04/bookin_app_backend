require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
const router = require("./routes/routes");

const PORT = process.env.PORT || 8000;

var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://ascdimon:reuUrJ2VAqzbih7YUUSNIPzc-vAvm0re@surus.db.elephantsql.com/ascdimon" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log("conected to database");
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("/", (req,res)=> {

res.send("la pagina de inicion desde app")
})


app.listen(PORT, () => {
    console.log(`server listering on port ${PORT}`);

}); 