const express = require('express');
const app = express();
const port = 3000;

const logger = require('./middleware/logger');
const userRoutes = require('./routes/users');

app.use(logger);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});