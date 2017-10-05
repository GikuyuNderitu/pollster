const express = require('express');
const app = express()
const PORT = process.env.PORT || '1337'

require('./server/config/mongooseConfig')
require('./server/config').configureApp(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
