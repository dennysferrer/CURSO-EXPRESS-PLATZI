const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  console.log(limit, offset);
  if (limit && offset){
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parametros...');
  }
})

module.exports = router;
