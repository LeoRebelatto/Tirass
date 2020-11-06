const express = require('express'); 

const app = express(); 

app.get('/', (function(req,res) {
    res.sendFile(__dirname + '/smultimidia.html');
})); 

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'));