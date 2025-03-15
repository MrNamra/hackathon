const express = require('express');
const db = require('./config/db');
const dotenv = require('dotenv');
const UserRoutes = require('./routes/user');
const IoTRoutes = require('./routes/iot');

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('api/user/', UserRoutes)
app.use('api/iot/', IoTRoutes)

app.listen(process.env.PORT||3000, () => {
    console.log(`Server started on port ${process.env.PORT}`)
});