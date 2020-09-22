const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dotenv = require('dotenv/config');

const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/analyze', async function (req, res) {
    const apiResponse = await analyzeSentiment(req.body);
    try {
        res.send(apiResponse)
    } catch (e) {
        console.log(e)
    }
})

const analyzeSentiment = async function(data) {
    const request = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&txt=${data.text}&lang=en`)
    try {
        return request.json();
    } catch (error) {
        console.log('error getting sentiment info', error)
    }
}



