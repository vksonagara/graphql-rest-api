const express = require('express');
const config = require('./config.js');
const db = require('./db.js');
const graphqlApp = require('./services/graphql.js');
const restApi = require('./services/rest.js');
const bodyParser = require('body-parser');
const authRouter = require('./auth');


const app = express();
const jsonParser = bodyParser.json();



app.use('/', graphqlApp);
app.use('/api', jsonParser, restApi);
app.use('/auth', jsonParser, authRouter);

app.listen(config.port, (err) => {
    if(!err)
        console.log(`listening on port ${config.port}`);
    else
        console.error(err.stack);
});