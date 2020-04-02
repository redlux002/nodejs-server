const express = require('express');
const app = express();
const _port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname,'dist')));



app.listen(_port, (err) =>{
     if(err){throw err; }
    console.log(`Server running on ${_port}`);
} )