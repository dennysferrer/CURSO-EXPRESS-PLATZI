const express = require('express');
const faker = require('faker');

const router = express.Router();


router.get("/", (req, res) => {
  const { size } = req.query;
  console.log(size);
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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    nombre: "Producto 2",
    precio: 5000
  })
})


module.exports = router;
