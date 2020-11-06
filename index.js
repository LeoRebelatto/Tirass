const express = require('express'); 

const app = express(); 

app.get('/', (function(req,res) {
    res.sendFile(__dirname + '/smultimidia.html');
}));

app.use('/img', express.static('img'));

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
  }
  app.use(requireHTTPS);

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'));
