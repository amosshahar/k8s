'use strict';

var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.get('/', (req, res) => res.send('Hello K8s!'))
let port = 8080
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
module.exports.getApp = app;