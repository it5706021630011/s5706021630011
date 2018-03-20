const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const firebase = require('firebase')


var config = {
    apiKey: "AIzaSyCQ_C4flczT5C8F4SZDy9lvN8oBu1JO_8Q",
    authDomain: "s5706021630011.firebaseapp.com",
    databaseURL: "https://s5706021630011.firebaseio.com",
    projectId: "s5706021630011",
    storageBucket: "s5706021630011.appspot.com",
    messagingSenderId: "718226587809"
  };
  firebase.initializeApp(config);

app.use(bodyParser.json())
var proince = ''
app.get('/', (req, res) =>{

firebase.database().ref('/').once('value').then(snapshop => {
    proince = snapshop.val()
  
    firebase.database().ref('/').once('value').then(snapshop1 => {
        proince1 = snapshop1.val()
    })
    
})


res.send(proince1)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))