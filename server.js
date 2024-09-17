'use strict';

const express = require('express');

const HOST = '0.0.0.0';
const PORT = 8080;

// App
const app = express();
const app_nocache = express();

const cacheHandler = (req, res, next) => {
  res.set('Cache-Control', 'no-store');
  res.set('Expires', '-1');
  next();
};
app_nocache.use(cacheHandler);

// use static files
app.use(express.static('public'));
app_nocache.use(express.static('public'));

app.listen(PORT, () => console.log(`Running on http://${HOST}:${PORT} ...`));
app_nocache.listen(PORT + 1, () =>
  console.log(`Running on http://${HOST}:${PORT + 1} ...`)
);
