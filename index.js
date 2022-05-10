const express = require('express')
const cors =require('cors')
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express()
const port = process.env.PROT || 5000

app.use(cors())
app.use(express.json())

const uri =
  "mongodb+srv://doctor-admin:<password>@cluster0.nwhtf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.get('/', (req, res) => {
  res.send('Hello my website')
})

app.listen(port, () => {
  console.log(`my app listening on port ${port}`);
});