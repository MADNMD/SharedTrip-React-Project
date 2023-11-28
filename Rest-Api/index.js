const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const expressConfig = require('./config/expressConfig');
const { initDB } = require('./config/databaseConfig');
const { PORT } = require('./config/env');
const router = require('./routes');
const { auth } = require('./middlewares/authMiddleware')
const { getErrorMessage } = require('./utils/errorHellper');

const app = express();

expressConfig(app);
// app.use(cors({ origin: 'http://127.0.0.1:5173', credentials: true }));
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(cookieParser());
app.use(auth);
app.use(router);
app.use(getErrorMessage);

initDB();

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`))