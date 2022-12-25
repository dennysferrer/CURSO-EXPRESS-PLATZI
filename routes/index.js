const productsRouter = require('./products.routers');
const usersRouter = require('./users.routers');

const routerApi = (app) => {
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);

}

module.exports = routerApi;
