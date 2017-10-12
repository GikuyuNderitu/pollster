const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const {resolve} = require('path')

const authenticationRouter = require('./routes/authentication')
const userRouter = require('./routes/user')
const pollRouter = require('./routes/poll')

exports.configureApp = (app) => {        
    app.use(cookieParser())
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(express.static(resolve(__dirname, '..', '..', 'public', 'dist')))

    app.use('/api/authenticate', authenticationRouter)
    app.use('/api/users', userRouter)
    app.user('/api/polls', pollRouter)
    app.get('/*', (req, res) => {
        res.sendFile(resolve(__dirname, '..', '..', 'public', 'dist', 'index.html'))
    })
}