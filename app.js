let express = require('express');
let bodyParser = require('body-parser');
let exphbs = require('express-handlebars')
let nodemailer = require('nodemailer');
let path = require('path')
//--------------------------------------------------------
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs');

let index = require('./routes/index')
let city = require('./routes/city')

app.use('/', index)
// app.use('/', city)


app.listen(3005, function(){
  console.log('Run... Run... Run...');
})
