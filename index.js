const express = require('express');
require('dotenv').config();

const Pizza = require('./models/pizzaModel');

const app = express();
const db = require('./db.js');
app.use(express.json());
app.use(express.urlencoded({ extended : true }))
const path = require('path');
const cors = require('cors');

app.use(cors({
  origin : "*",
  methods: ["POST", "GET"],
    credentials: true
}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // '*' allows any origin, you can restrict it to specific origins
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// app.use(
//   cors({
//     origin: '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     preflightContinue: false,
//     optionsSuccessStatus: 204,
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
//   })
// );

app.get('/', (req, res) => {
  res.send('Web server started running');

});

const pizzasRoute = require('./routes/pizzasRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');
const seedRoute = require('./routes/seedRoute');

app.use('/api/seed', seedRoute);
app.use('/api/pizzas/', pizzasRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders/', ordersRoute);

// if (process.env.NODE_ENV === 'production') {
//   app.use('/', express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
//   });
// }

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port} 🔥`)
);
