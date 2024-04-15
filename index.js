const express = require('express');
const app = express();
const ports = [8021, 4499];
const cors = require('cors');
const routerApi = require('./routes');

const {errorHandler, boomErrorHandler} = require('./core/middlewares/error.handler');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8096, http://localhost:8021, http://localhost:8021, 127.0.0.1:8021',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }));

app.get('/', (req, res) => {
    res.json({
        "message": "welcome"
    });
})

routerApi(app);

app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(ports[0], () => {
    console.log('Server running on port: ' + ports[0])
});
