const express = require('express');

const productsRouter = require('./products.routers');
const usersRouter = require('./users.routers');
const categoriesRouter = require('./categories.routers');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);

}

module.exports = routerApi;
