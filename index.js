const express = require('express'); 

var secure = require('express-sslify');

const app = express(); 

app.get('/', (function(req,res) {
    res.sendFile(__dirname + '/smultimidia.html');
}));

app.use('/img', express.static('img'));

app.use(enforce.HTTPS({trustProtoHeader: true}));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'));
