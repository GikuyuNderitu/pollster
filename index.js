require('dotenv').config()
const express = require('express');
const http = require('http')
const url = require('url')
const WebSocket = require('ws')
const app = express()
const PORT = process.env.PORT || '1337'

const trimStrArray = str => str.trim()
const keyValueMap = str => str.split('=')
const matchKeyVals = (obj, keyValArr) => {
    obj[keyValArr[0]] = keyValArr[1]
    return obj
}

const parseCookie = cookie => 
    cookie.split(';')
    .map(trimStrArray)
    .map(keyValueMap)
    .reduce(matchKeyVals,{})


require('./server/config/mongooseConfig')
require('./server/config').configureApp(app)

const {makePollGetter, makePollVoter} = require('./server/websocketControllers/pollsSocket')
const POLLS = {}

const getPollFor = makePollGetter(POLLS)
const voteFor = makePollVoter(POLLS)

const server = http.createServer(app);


const ws = new WebSocket.Server({server})

ws.on('connection', (client, req) => {
    const location = url.parse(req.url, true)
    const cookies = parseCookie(req.headers.cookie)
    const id = location.path.substring(1)

    console.log(client);

    
    getPollFor(id)
    .then( poll => {
        client.send(JSON.stringify({
            poll
        }))
    })
    .catch(err => {
        client.send(JSON.stringify({
            err
        }))
    })
    

    ws.on('message', (data) => {
        
    })
})

server.listen(PORT, function listening() {
    console.log(`Server is running on port ${PORT}`);
})
