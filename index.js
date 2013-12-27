var fs = require("fs"),
	window = require("jsdom").jsdom().createWindow();

window.WebSocket = require("ws");
window.EventSource = require("eventsource");
window.eval(fs.readFileSync(__dirname + "/atmosphere.js", "utf-8"));

module.exports = window.atmosphere;