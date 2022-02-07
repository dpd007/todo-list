const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


server.listen(3000, ()=>{
    console.log("server is running at 3000!!");
})