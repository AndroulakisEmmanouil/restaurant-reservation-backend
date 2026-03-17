const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.raw());
// Route δοκιμής
app.get('/', (req, res) => {
    res.send('Το backend τρέχει σωστά!');
});

const logger = require('./middleware/logger');
const userRoutes = require('./routes/users');
app.use(logger);

app.use('/users', userRoutes);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Εκκίνηση του server

