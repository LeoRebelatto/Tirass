const express = require('express'); 

var secure = require('express-force-https');

const app = express(); 

app.get('/', (function(req,res) {
    res.sendFile(__dirname + '/smultimidia.html');
}));

app.use('/img', express.static('img'));

app.use(secure);

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'));
