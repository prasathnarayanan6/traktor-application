const {Client} = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: "3306",
  password: "1234",
  database: "postgres"
})
client.connect(function(err) {
  if(err) throw err;
  else{
    console.log("connected");
  } 
});
module.exports = client;
