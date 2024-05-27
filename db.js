const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

module.exports = mongoose;
