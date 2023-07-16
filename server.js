require('./config/database');
const express = require('express');
const userRoutes = require('./routes/userRouter')
const recordRoutes = require('./routes/recordRouter')


const PORT = 2400;
const app = express();

// Allows data to be passed through request body
app.use(express.json());


app.use('/api', userRoutes)
app.use('/api', recordRoutes)

app.listen(PORT, () => {
    console.log(`Server is now listening to PORT: ${PORT}`);
});