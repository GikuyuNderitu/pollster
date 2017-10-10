const mongoose = require('mongoose');
const fs = require('fs');
const {resolve} = require('path');

const MONGO_URI = 'mongodb://localhost/pollster_fcc' 
mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, {}, (err) => {
    console.log(`Connected to mongo on ${MONGO_URI}`);
})

const modelPath = resolve(__dirname, '..', 'models')

fs.readdirSync(modelPath).forEach( file => {
    if(/\.js$/.test(file)) {
        require(resolve(modelPath, file))
    }
})