const express = require('express');
const { listen } = require('express/lib/application');
const faker = require('faker');

const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.get("/nueva-ruta", (req, res) => {
  res.send("Hola soy una nueva ruta");
});

app.get("/products", (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const products = [];
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })

  }
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    nombre: "Producto 2",
    precio: 5000
  })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  })
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset){
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parametros...');
  }
})

app.listen('3000', () => {
  console.log('Run server in port 3000');
})
