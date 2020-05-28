const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const { productRouter } = require('./routes');

app.use('/product', productRouter);

const db = require('./dataBase').getInstance();
db.setModels();

app.listen(4400, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listen 4400...');
    }
})
