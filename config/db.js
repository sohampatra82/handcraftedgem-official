const mongoose = require('mongoose')
const dbConnect = mongoose.connect('mongodb://0.0.0.0/ecommerce').then(() => {
    console.log('Database is ready...');
    
})

module.exports - dbConnect
