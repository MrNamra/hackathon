const mongoose = require('mongoose');

const mongoURL = process.env.MONGODB_URL
mongoose.connect(mongoURL, {});

const db = mongoose.connection
db.once('error', err => console.log(err))
db.on('connected', () => console.log('Database connected'))
db.on('disconnected', () => console.log('Database disconnected'))

module.exports = db