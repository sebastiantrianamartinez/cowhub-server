const express = require('express');
const app = express();
const ports = [8021, 4499];
const routerApi = require('./routes');

const {errorHandler, boomErrorHandler} = require('./core/middlewares/error.handler');

app.use(express.json());

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
