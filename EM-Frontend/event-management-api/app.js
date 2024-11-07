const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
connectDB();

app.use(bodyParser.json());
app.use('/api', eventRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));