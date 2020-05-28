const express = require('express');

const db = require('./dataBase').getInstance()
db.setModels();

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const { userRouter } = require('./routes');

app.use('/users', userRouter);


app.listen(1618, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listen 1618...');
    }
})
