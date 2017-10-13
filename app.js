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
let dataperson = require('./routes/dataperson')
let datapassenger = require('./routes/dataPassenger')
// let city = require('./routes/city')
// let customer = require('./routes/customer')


// let city=require('./routes/city')
let costumer=require('./routes/costumer')

// app.use('/',city)
// app.use('/costumer',costumer)
// app.use('/',city)

app.use('/', index)
app.use('/dataperson', dataperson)
app.use('/datapassenger', datapassenger)
// app.use('/customer', customer)
// app.use('/', city)


app.listen(3005, function(){
  console.log('Run... Run... Run...');
})
