const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./app");
const mysql = require('mysql');
require('./app/knex');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use('/api/v1', routes);

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "pavan",
//     password: "Pavan@12345",
//     database: "naukri_data"
// });

// connection.connect(function(err){
//     if(err) throw err;
//     // console.log('connected success');
//     connection.query("select * from user", function(err, result, fields){
//         if(err) throw err;
//         console.log(result);
//     })
// })

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
