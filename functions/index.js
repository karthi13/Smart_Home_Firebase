const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const http = require('request');
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
var util = require('util');
const IFTTT = require('node-ifttt-maker');
const ifttt = new IFTTT('dOHcgTyYl_mtffiUVOJzHD');
admin.initializeApp();

const database = admin.database().ref('/thingy');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

function makeRequest (params, cb){
    http(params, function (error, response, body) {
      if (response) {
          if (response.statusCode == 200) {
            return cb('');
          }
          return cb(JSON.parse(body)['errors']);
      }
      else {
          return cb('Failed');
      }
    });
  }

exports.getSensorData = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        if (req.method !== 'GET') {
            return res.status(404).json({
                message: 'Not allowed'
            })
        }
        console.log("Hello everybody karthik here!!!"); //process.env.NODE_ENV
        let items = [];

        return database.on('value', (snapshot) => {
            snapshot.forEach((item) => {
                items.push({
                    item
                });
            });

            res.status(200).json(items)
        }, (error) => {
            res.status(error.code).json({
                message: `Something went wrong. ${error.message}`
            })
        })
    })
})

exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log('Hi friends');
    response.send("Hello from Firebase!");
});

exports.getCurrentEnvironemntData = functions.http.onRequest((request,response)=>{
    return cors(req, res, () => {
        if (req.method !== 'GET') {
            return res.status(404).json({
                message: 'Not allowed'
            })
        }
        // console.log("Hello everybody karthik here!!!"); //process.env.NODE_ENV
        let items = [];

        var thingyDatabase = admin.database().ref('/thingy');
        return database.on('value', (snapshot) => {
            snapshot.forEach((item) => {
                items.push({
                    item
                });
            });

            res.status(200).json(items)
        }, (error) => {
            res.status(error.code).json({
                message: `Something went wrong. ${error.message}`
            })
        })
    })
});

exports.sendTriggerIFTTT = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        if (req.method !== 'GET') {
            return res.status(404).json({
                message: 'Not allowed'
            })
        }
        let maker_evt = 'TurnPlugOnOff';
        let maker_key = 'dOHcgTyYl_mtffiUVOJzHD';
        var BASE_URL = 'https://maker.ifttt.com/trigger/%s/with/key/%s';
        // Simple request
        var requestParams = {
            url: util.format(BASE_URL, maker_evt, maker_key),
            method: 'GET'
          };
        console.log(requestParams.url);
        makeRequest(requestParams, function (err) {
              console.log('Gas data pushed to IFTTT ' + err)
        });

    });
});


