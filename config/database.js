const mongoose = require('mongoose')
require('dotenv').config();

const url = process.env.ATLAS_LOGIN

mongoose.connect(url).then(() => {
    console.log('Connection to database successful');
}) .catch((e) => {
    console.log(e.message);
})