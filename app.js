const express = require ('express');
const routes = require('./routes/index.js')
const app = express();
const port = process.env.PORT || 3000;
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'pairproject',
    resave: false,
    saveUninitialized: true,
}))

app.use('/', routes)

app.listen (port, () => {
    console.log ('running on port: ', port);
});