const functions = require('firebase-functions');
const express   = require('express');

const app = express();

app.get('/timestamp',(request, response)=>{
    response.send(`${Date.now()}`);
});

app.get('/timestamp-cached',(request, response)=>{
    response.set('Cache-Control','public, max-age=300, s-max-age=600')
    response.send(`${Date.now()}`);
});

app.post('/user',(request, response)=>{
    console.log(request.body.firstname);
    response.send(`${request.body.firstname} - ${request.body.lastname}`);
});

exports.app = functions.https.onRequest(app);
