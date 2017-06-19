function deviceReady () {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("offline", onOffline, false);
	document.addEventListener("online", onOnline, false);
}

function onBackKeyDown(e) {
    // Handle the back button
    // e.preventDefault();
    if(window.location.hash=='#home'){
        e.preventDefault();
        navigator.app.exitApp();
    } else {
        navigator.app.backHistory()
    }
    // navigator.app.exitApp();
    // navigator.app.backHistory();
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);

}

// document.addEventListener("deviceready", onDeviceReady, false);

/*function onDeviceReady() {
    alert("Model = "+device.model + " Manufacturer = " + device.manufacturer);
    checkConnection();
}*/

function onOnline() {
    // Handle the online event
    var networkState = navigator.connection.type;

    if (networkState !== Connection.NONE) {
        alert("You are not connected to internet.")
    }
    // display('Connection type: ' + networkState);
}

function onOffline() {
    // Handle the offline event
    // console.log("lost connection");
    alert("You lost internet connection.")
}

