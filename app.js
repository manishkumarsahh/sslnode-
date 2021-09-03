const express  = require('express');
const app = express();

app.get('/',function(req,res){

        res.send('My node app');


});

app.listen(5000, function(err){
    console.log('Server running');

})