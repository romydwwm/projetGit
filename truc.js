var express = require('express'),
swig = require('swig'),
path = require('path'),
postgres = require('postgres'),

app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', swig.renderFile);

app.set('view engine', 'jade');
app.set('views', __dirname+'/views');

postgres.connect('localhost:')

app.get('/', function(req, res){
    data = {title: 'mon blog'};
    res.render('index.html', data);
})

app.listen(3000);
console.log('app runn');