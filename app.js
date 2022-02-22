var ws;
function setConnected(connected) {
	$("#connect").prop("disabled", connected);
	$("#disconnect").prop("disabled", !connected);
}

function connect() {
	ws = new WebSocket('wss://websocket19.herokuapp.com/');
	ws.onmessage = function(data) {
		helloWorld(data.data);
	}
	setConnected(true);
}

function disconnect() {
	if (ws != null) {
		ws.close();
	}
	setConnected(false);
	console.log("Websocket is in disconnected state");
}

function sendData() {
	var data = JSON.stringify(
{"chargePointVendor":"Delta.Electronics","chargePointModel":"EVPE3225MUN","chargePointSerialNumber":"JDJ200300146W0","chargeBoxSerialNumber":"00:18:23:0C:58:02","firmwareVersion":"v02.09.06.00","iccid":"","imsi":""})
	ws.send(data);
}

function helloWorld(message) {
	$("#helloworldmessage").append("<tr><td> " + message + "</td></tr>");
}


