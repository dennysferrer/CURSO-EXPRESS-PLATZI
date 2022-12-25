const express = require('express');
const routerApi = require('./routes');

const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.get("/nueva-ruta", (req, res) => {
  res.send("Hola soy una nueva ruta");
});

routerApi(app);


/* app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  })
})

 */
app.listen('3000', () => {
  console.log('Run server in port 3000');
})
