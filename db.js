const mongoose = require('mongoose');
const dbConfig = require('./config.js').db;

const db = mongoose.connection;

mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`, { useCreateIndex: true, useNewUrlParser: true }).then(() => {
    console.log('connected to database');
}).catch((err) => {
    console.error(err.stack);
});

module.exports = db;