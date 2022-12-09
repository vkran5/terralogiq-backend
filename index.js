const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const PORT = 8000;
const cors = require("cors");

app.use(express.json()); // membaca bod.req
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('<h1>Terralogic test</h1>');
})

// DB connection
const { dbConf } = require('./config/db');
dbConf.getConnection((err, connection) => {
    if (err) {
        console.log('Error MySql connection:', err.sqlMessage);
    }

    console.log('Connected to MySQL ✅:', connection.threadId);
})

// // CONFIGURASI ROUTERS
const { authRouter} = require('./routers');
app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`Running at ${PORT}`));
