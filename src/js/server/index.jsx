// ./index.js
/* global document */
import React from 'react';
import {renderToString} from 'react-dom/server';
// Import Main
import Main from './serverApp'
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
// compression
const compression = require('compression');
// ejs
const ejs = require("ejs").__express;
// routes
require("./routes")(app);
// static path to web folder
app.use(express.static('dist'));
// compress
app.use(compression());
// set the view engine to ejs
app.set('view engine', 'ejs');
// this is required after webpack interpolation
app.engine('.ejs', ejs);
// set the view directory for ejs templates
app.set('views', './dist/views');
// complex route
app.get("/*", (req, res) => {

    const appHtml = renderToString(<Main/>);

    return res.headersSent ? res.end() : res.render("index", {
        appHtml
    });
});

app.listen(port);

console.log(`serving on port ${port}`);