const express = require('express');
const path = require('path');
// const { getHelloWorld } = require('./src/controllers/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});