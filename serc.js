const WebSocket = require('ws');

     
   

const wss =  new WebSocket(HOST);



wss.on('connection', function connection(wss) {
  wss.on('message', function incoming(message) {

    //Make incoming JSON into javascript object
    var msg = JSON.parse(message)

    // Print whole message to console
    console.log(msg)

    // Print only message type to console. For example BootNotification, Heartbeat etc...
   console.log("Message type: " + msg[2])

    // Send response depending on what the message type is
    if (msg[2] === "BootNotification") {
      //Send correct response

    } // Add all the message types

  });


});