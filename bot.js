var Discord = require('discord.io');
var bot = new Discord ({
    token: "MjA0NDYwMDI0MzMwNzE1MTM2.Cm6F6Q.IGkCkr3BbW3QkR0mBUjjs_kEgRc",
    autorun: true
});

var request = require('request');





/*Event area*/
bot.on("err", function(error) {
	console.log(error)
});

bot.on("ready", function(rawEvent) {
	console.log("Connected!");
	console.log("Logged in as: ");
	console.log(bot.username + " - (" + bot.id + ")");
});

bot.on("message", function(user, userID, channelID, message, rawEvent) {
	console.log(user + " - " + userID);
	console.log("in " + channelID);
	console.log(message);
	console.log("----------");
	
	if (message === "ping") {
		sendMessages(channelID, ["Pong"]); //Sending a message with our helper function
	} else if (message === "picture") {
		sendFiles(channelID, ["fillsquare.png"]); //Sending a file with our helper function
	}
});

bot.on("presence", function(user, userID, status, rawEvent) {
	/*console.log(user + " is now: " + status);*/
});

bot.on("debug", function(rawEvent) {
	/*console.log(rawEvent)*/ //Logs every event
});

bot.on("disconnected", function() {
	console.log("Bot disconnected");
	bot.connect() 
});









bot.on("message", function(user, userID, channelID, message, rawEvent) {
  

if (message === "!recent") {
    request('http://www.haloruns.com/api/request.php?recent', function (error, response, body) { 
        if (!error && response.statusCode == 200) {
body = body.replace(/~/g, "|");
            console.log(body);
            sendMessages(channelID, [body]);
        }
    });
}
});



if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(input) {
        return this.substring(0, input.length) === input;
    };
}

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message.startsWith('!wr ')) {
        var wr = message.substring(4, message.length);
        request('http://haloruns.com/api/request.php?wr=' + wr, function(err, res, body) {
            sendMessages(channelID, [body]);
        });
    }
});





if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(input) {
        return this.substring(0, input.length) === input;
    };
}

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message.startsWith('!hr ')) {
        var hr = message.substring(4, message.length);
        request('http://haloruns.com/api/request.php?user=' + hr, function(err, res, body) {
            sendMessages(channelID, [body]);
        });
    }
});






bot.on("message", function(user, userID, channelID, message, rawEvent) {
   

if (message === "!whoslive") {
    request('http://www.haloruns.com/api/request.php?streams', function (error, response, body) { 
        if (!error && response.statusCode == 200) {
            console.log(body);
            sendMessages(channelID, [body]);
        }
    });
}
});



bot.on("message", function(user, userID, channelID, message, rawEvent) {
  



    
if (message === "!floodbump") {
console.log(fb)
var fb = Math.random();
if (fb <= 0.80) {
    
sendMessages(channelID, ["He didn't revive!"]);

} else if(fb <= 0.10) {

sendMessages(channelID, ["He revived but you positioned incorrectly. Gratz on terrible."]);

} else {

sendMessages(channelID, ["He revived!"]);

}
}
    });






















bot.on("presence", function(user, userID, status, rawEvent) {
    /*console.log(user + " is now: " + status);*/
});

bot.on("debug", function(rawEvent) {
    /*console.log(rawEvent)*/ //Logs every event
});

bot.on("disconnected", function() {
    console.log("Bot disconnected");
    /*bot.connect()*/ //Auto reconnect
});





/*Function declaration area*/
function sendMessages(ID, messageArr, interval) {
	var len = messageArr.length;
	var callback;
	var resArr = [];
	typeof(arguments[2]) === 'function' ? callback = arguments[2] : callback = arguments[3];
	if (typeof(interval) !== 'number') interval = 250;
	
	function _sendMessages() {
		setTimeout(function() {
			if (messageArr.length > 0) {
				bot.sendMessage({
					to: ID,
					message: messageArr[0]
				}, function(res) {
					resArr.push(res);
				});
				messageArr.splice(0, 1);
				_sendMessages();
			}
		}, interval);
	}
	_sendMessages();
	
	var checkInt = setInterval(function() {
		if (resArr.length === len) {
			if (typeof(callback) === 'function') {
				callback(resArr);
			}
			clearInterval(checkInt);
		}
	}, 0);
}

function sendFiles(channelID, fileArr, interval) {
	var len = fileArr.length;
	var callback;
	var resArr = [];
	typeof(arguments[2]) === 'function' ? callback = arguments[2] : callback = arguments[3];
	if (typeof(interval) !== 'number') interval = 500;
	
	function _sendFiles() {
		setTimeout(function() {
			if (fileArr.length > 0) {
				bot.uploadFile({
					channel: channelID,
					file: fileArr[0]
				}, function(res) {
					resArr.push(res);
				});
				fileArr.splice(0, 1);
				_sendFiles();
			}
		}, interval);
	}
	_sendFiles();
	
	var checkInt = setInterval(function() {
		if (resArr.length === len) {
			if (typeof(callback) === 'function') {
				callback(resArr);
			}
			clearInterval(checkInt);
		}
	}, 0);
}
		
	 0;


function sendFiles(channelID, fileArr, interval) {
	var len = fileArr.length;
	var callback;
	var resArr = [];
	typeof(arguments[2]) === 'function' ? callback = arguments[2] : callback = arguments[3];
	if (typeof(interval) !== 'number') interval = 500;
	
	function _sendFiles() {
		setTimeout(function() {
			if (fileArr.length > 0) {
				bot.uploadFile({
					channel: channelID,
					file: fileArr[0]
				}, function(res) {
					resArr.push(res);
				});
				fileArr.splice(0, 1);
				_sendFiles();
			}
		}, interval);
	}
	_sendFiles();
	
	var checkInt = setInterval(function() {
		if (resArr.length === len) {
			if (typeof(callback) === 'function') {
				callback(resArr);
			}
			clearInterval(checkInt);
		}
	}, 0);
}


