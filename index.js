const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();

app.use(express.json());
const whiteList = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}

app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.get("/nueva-ruta", (req, res) => {
  res.send("Hola soy una nueva ruta");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen('3000', () => {
  console.log('Run server in port 3000');
})
