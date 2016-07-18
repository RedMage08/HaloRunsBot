# discord.io
A low-level library for creating a Discord client from Node.js. [Come join the discussion!](https://discord.gg/0MvHMfHcTKVVmIGP)

### Warning:
I'd recommend updating frequently during the start of the project. I've also been told, by one of the developers, "we change it [The API] often", so I'll try to keep the updates regular.

# What you'll need
* An email and password from Discord. The client doesn't support anonymous joining.

# How to install
````javascript
npm install discord.io
````

# Events
Events for the bot.

## ready
````javascript
bot.on('ready', function(rawEvent) { });
````
* **rawEvent** : The entire event received in JSON.


## message
````javascript
bot.on('message', function(user, userID, channelID, message, rawEvent) { });
````

* **user** : The user's name.
* **userID** : The user's ID.
* **channelID** : The ID of the room where the bot received the message.
* **message** : The chat message.
* **rawEvent** : The entire event received in JSON.

## presence
````javascript
bot.on('presence', function(user, userID, status, rawEvent) { });
````
* **user** : The user's name.
* **userID** : The user's ID.
* **status** : The user's status. Currently observed: ['online', 'idle', 'offline']
* **rawEvent** : The entire event received in JSON.

## debug
````javascript
bot.on('debug', function(rawEvent) { });
````
* **rawEvent** : In this section, it logs ANY event received from Discord.

## err
````javascript
bot.on('err', function(error) { });
````
* **error** : Logs the backend error (login, connection issues, etc).

## disconnected
````javascript
bot.on('disconnected', function() { });
````

# Properties

The client comes with a few properties to help your coding.
* **id** -String-
* **username** -String-
* **email** -String-
* **verified** -Bool-
* **discriminator** -String-
* **avatar** -String-
* **servers** -Object-
    * **[Server Choice]** -Object-
        * **channels** -Array-
        * **members** -Array-
        * **roles** -Array-
* **directMessages** -Object-
* **internals** -Object-
    * **token** -String-

# Methods
Methods that get the bot to do things.

## -Connection-

### connect()
Connects to Discord.
````javascript
bot.connect()
````

### disconnect()
Disconnects from Discord and emits the "Disconnected" event.
````javascript
bot.disconnect()
````
## -Bot Status-

### editUserInfo(-Object-, [callback(response)])
````javascript
bot.editUserInfo({
    avatar: 'ImageEncodedIntoBase64String', //Optional
    email: 'youremail@provder.com', //Optional
    new_password: 'supersecretpass123', //Optional
    password: 'supersecretpass', //Required
    username: 'Yuna' //Optional
});
````

### setUserPresence(-Object-)
````javascript
bot.setPresence({
    idle_since: Date.now()  //Optional, sets your presence to idle, 
                            //can also be null for online
    game_id: 405    //Optional, indicates you are playing a game
                    //can also be null to remove game
})
````

## -Bot Content Actions-

**The sendMessages() and sendFiles() helper functions (included in the example.js) accept a third and fourth argument. The third can be either a number interval or a callback function containing an array of responses for messages sent. The fourth is only the callback.**

### sendMessage(-Object-, [callback(response)])
````javascript
bot.sendMessage({
	to: "userID/channelID",
	message: "Hello World",
	nonce: "80085" //Optional
} function(response) { //CB Optional
    console.log(response.id); //Message ID
});

//Or, assuming the helper function is there, from the example

sendMessages(channelID, ["An", "Array", "Of", "Messages"]); 
//Will send them each as their own message
````
A recent Discord update now forbids you from Direct Messaging a user that does not share a server with you.

### uploadFile(-Object-, [callback(response)])
````javascript
bot.uploadFile({
    channel: "Your Channel ID",
    file: "fillsquare.png"
}, function(response) { //CB Optional
    console.log(response)
});

//Or, assuming the helper function is there, from the example

sendFiles(channelID, ["fillsquare.png", "anotherpossibleimage.png"]);
//Will send them each as their own message/file
````
### getMessages(-Object-, callback(messageArray))
````javascript
bot.getMessages({
    channel: "Your Channel ID",
    limit: 50 //If 'limit' isn't added, it defaults to 50, the Discord default
}, function(messageArr) {
    //Do something with your array of messages
});
````

### editMessage(-Object-, [callback(response)])
````javascript
bot.editMessage({
    channel: "Your Channel ID",
    messageID: rawEvent.d.id,
    message: "Your new message"
}, function(response) { //CB Optional
    console.log(response);
});
````

### deleteMessage(-Object-)
````javascript
bot.deleteMessage({
    channel: "Your Channel ID",
    messageID: rawEvent.d.id
});
````

### fixMessage(-String-)
````javascript
//Assuming someone typed "Hello @izy521"
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    console.log(message) //"Hello <@66186356581208064>"
    console.log(bot.fixMessage(message)) //"Hello @izy521"
});
````

## -Bot Management Actions-

### createServer(-Object-, [callback(response)])
````javascript
bot.createServer({
    icon: null,
    name: "Test server",
    region: "london" //If you can't remember your preferred server, the bot will give you a list from Discord
});
````

### deleteServer(-Object-, [callback(response)])
````javascript
bot.deleteServer({
    server: "Your Server ID"
});
````

### createChannel(-Object-, [callback(response)])
````javascript
bot.createChannel({
    server: "Your Server ID",
    type: "text", //or "voice"
    name: "CoolNameBruh"
});
````

### deleteChannel(-Object-, [callback(response)])
````javascript
bot.deleteChannel({
    channel: "Your Channel ID"
});
````

### editChannelInfo(-Object-, [callback(response)])
````javascript
bot.editChannelInfo({
    name: "New Channel", //Optional
    position: 0, //Optional
    topic: "Our new topic" //Optional
});
````

### addToRole(-Object-)
````javascript
bot.addToRole({
    server: "Your Server ID",
    user: "The User ID",
    role: "The Role ID"
});
````

### removeFromRole(-Object-)
````javascript
bot.removeFromRole({
    server: "Your Server ID",
    user: "The User ID",
    role: "The Role ID"
});
````

##### The following are similar in syntax. 

* ### kick(-Object-)
* ### ban(-Object-)
* ### unban(-Object-)
* ### mute(-Object-)
* ### unmute(-Object-)
* ### deafen(-Object-)
* ### undeafen(-Object-)

````javascript
bot.kick({
    channel: "Server or Channel ID",
    target: "User ID",
	lastDays: 1 //ONLY used in banning. A number that can be either 1 or 7. It's also optional.
});

//The rest are the same
````

## -Misc-

### serverFromChannel(-String-)
````javascript
bot.serverFromChannel("76213969290797056") //Returns "66192955777486848"
````

## Special Thanks
* **[Chris92](https://github.com/Chris92de)**
    * Found out Discord's direct messaging method.
    
## Related projects
* [Discord.NET](https://github.com/RogueException/Discord.Net)
* [DiscordSharp](https://github.com/Luigifan/DiscordSharp)
* [discord.js](https://github.com/discord-js/discord.js)
* [Discord4J](https://github.com/knobody/Discord4J)
* [PyDiscord](https://github.com/Rapptz/pydiscord)

