let express = require('express');
let bodyParser = require('body-parser');
let exphbs=require('express-handlebars')
let nodemailer=require('nodemailer');
//--------------------------------------------------------
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');


let city=require('./routes/city')

app.use('/',city)


app.listen(3005, function(){
  console.log('Run... Run... Run...');
})
