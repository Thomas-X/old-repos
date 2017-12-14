// import the discord.js module
//noinspection NpmUsedModulesInstalled
const Discord = require('discord.js');
const fs = require("fs");
const ytdl = require("ytdl-core");
const request = require("request");

const bot = new Discord.Client();
const token = require("./token.js").botToken.key;

let channel = null;
let stream = null;
let dispatcher = null;
//noinspection UnterminatedStatementJS
let connectionMaster = null
let timeStamp = 0;
let helpMessage = null;
let index = 0;
let mMessage = null;
let done = false;


//ip locked, don't even bother :)
let key = 'AIzaSyDdf0bdgY7DKqo32a2L19EBCYsJWMPCSj4';


let defaultVolume = 0.15;


let queue = [];
let queueItemsInfo = [];


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


bot.on('ready', () => {

    console.log("Started!");


});

bot.on("message", message => {

    const messageContent = message.content;

    if (message.content[0] == '!') {
        console.log('Command issued!');
        handle_command(message, messageContent.substring(1));
    }
});

const commands = [
        {
            command: "test",
            description: "test!",
            parameters: [],
            execute: function (message) {
                message.reply("test!");

                for (let i = 0; i < queue.length; i++) {
                    console.log(queue)
                }
            }
        },
        {
            command: "play",
            description: "Play music and/or add to queue",
            parameters: ["searchQuery"],
            execute: function (message, params) {
                if (message.member.voiceChannel) {


                    mMessage = message;

                    let query = null;

                    try {
                        query = message.content.substring(6);
                    } catch (err) {
                        message.reply("Invalid search.");
                    }
                    channel = message.member.voiceChannel;

                    //if mobile link or link with a timestamp

                    if (query != null) {
                        if (query.includes("youtu.be")) {
                            handle_search_and_push_to_queue(0, query, message);

                        } else if (query.includes("playlist")) {

                            message.reply("```loading queue, you can do !skip```").catch(error => {
                                console.log(error);
                            });

                            //I don't like counting
                            let playlistId = query.substring((query.indexOf("?list=") + "?list=".length), query.length);


                            let uri = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + playlistId + "&maxResults=50&&key=" + key;

                            request(uri, function (err, res, body) {


                                //TODO add functionality for all pages except only the first 50 items
                                // if (body.nextPageToken) {
                                //
                                // } else {
                                //
                                // }
                                // console.log(JSON.parse(body).items[0].snippet.resourceId.videoId);

                                body = JSON.parse(body);


                                let items = body.items;

                                let i = 0;

                                doAThing(i);

                                //<3 recursion!
                                function doAThing(o) {
                                    if (o == items.length) {
                                        message.reply("```I am done loading!```").catch(error => {
                                            console.log(error);
                                        });
                                    }

                                    if (o <= queue.length) {
                                        if (items[o] != null) {
                                            i++;
                                            try {
                                                items[o] = items[o].snippet.resourceId.videoId;
                                            } catch (err) {
                                                console.log("items[o] is no bueno", items[o]);
                                            }
                                            // items[i] = items[i].snippet.resourceId.videoId;
                                            if (i != queueItemsInfo.length) {
                                                handle_search_and_push_to_queue(2, items[o], message, function () {
                                                    doAThing(i);
                                                });
                                            }
                                        }
                                    }
                                }


                                // if((i - 1) == queue.length) {
                                //     message.reply("```I am done loading!```").catch(error => {
                                //         console.log(error);
                                //     });
                                // }


                            });
                        } else {
                            handle_search_and_push_to_queue(1, query, message);
                        }


                        console.log(queueItemsInfo);

                    }
                }

                else {
                    message.reply("You're not in a voice channel, sorry! You need to be in one");
                }
                message.delete(0);
            }
        },
        {
            command: "leave",
            description: "Leave the voice channel the music bot is in.",
            parameters: [],
            execute: function (message) {
                leave_channel(message);
            }
        }
        ,
        {
            command: "pause",
            description: "Pauses current song.",
            parameters: [],
            execute: function (message) {
                try {
                    dispatcher.pause();
                } catch (err) {
                    console.log("Simple nullpointer. nothing to worry about");
                    message.reply("Couldn't pause video, perhaps there's nothing playing?")
                }
            }
        }
        ,
        {
            command: "resume",
            description: "Resumes paused song.",
            parameters: [],
            execute: function (message) {
                try {
                    dispatcher.resume();

                } catch (err) {
                    console.log("Simple nullpointer. nothing to worry about");
                    message.reply("Couldn't resume video, perhaps there's nothing playing?")
                }
            }
        }
        ,
        {
            command: "stop",
            description: "Stops current song and music playback.",
            parameters: [],
            execute: function (message) {

                index = 0;
                queue = [];

                try {
                    dispatcher.end();
                } catch (err) {
                    console.log("Simple nullpointer. nothing to worry about");
                    message.reply("Couldn't stop video, perhaps there's nothing playing?");
                }
            }
        }
        ,
        {
            command: "volume",
            description: "Changes volume, use info as argument for value",
            parameters: ["volumeValue"],
            execute: function (message, params) {
                const query = parseFloat(message.content.substr(7));

                console.log(params);
                if (params[1] == "info") {
                    message.reply("the volume is: " + defaultVolume);
                } else if (query <= 10 && query >= 0) {
                    try {
                        dispatcher.setVolume(query);
                        message.reply("changed the volume to " + query);
                    } catch (err) {
                        console.log("Someone tried to setVolume while there was nothing playing")
                    }
                    defaultVolume = query;
                } else {
                    message.reply("Invalid argument, only numbers below 10 please.");
                }
            }
        }
        ,
        {
            command: "help",
            description: "Displays all commands and info about the music bot",
            parameters: [],
            execute: function (message) {

                let help = "```css\nHi, I'm a bot. \n/*TODO youtube playlist, soundcloud support*/ \nPlease be nice to my creator [Thomas-X] ```\nWhere I live: https://github.com/Thomas-X/nodejs/tree/master/04-nodejs-discordBot\n```Commands for the bot: \n";

                for (let i = 0; i < commands.length; i++) {
                    help += "\n!" + commands[i].command + " --- " + commands[i].description;


                }
                helpMessage = message.channel.sendMessage(help + "```");
            }
        }
        ,
        {
            command: "qlist",
            description: "Shows the current queue",
            parameters: [],
            execute: function (message) {


                let queueStringFinal = null;
                let queueItems = null;

                if (queueItemsInfo[0] != null) {

                    for (let i = 0; i < queueItemsInfo.length; i++) {
                        queueStringFinal += (("\n [" + i + "]") + queueItemsInfo[i]);
                    }
                    console.log(queueStringFinal);
                    if (queueStringFinal.length > 1900) {
                        queueItems = chunkSubstr(queueStringFinal, 1900);
                        for (let o = 0; o < queueItems.length; o++) {
                            message.reply("```" + queueItems[o] + "```").catch(error => {
                                console.log(error);
                            });

                        }
                    }
                    else {
                        message.reply("```" + queueStringFinal + "```").catch(error => {
                            console.log(error);
                        });
                    }
                } else {
                    queueStringFinal = "The queue is empty!";
                    message.reply("```" + queueStringFinal + "```").catch(error => {
                        console.log(error);
                    });
                }
            }
        }
        ,
        {
            command: "qinfo",
            description: "Gets info of current song",
            parameters: [],
            execute: function (message) {

                //why is this an array??
                var queueInfo = [];


                queueInfo[index] = handle_divided_queue_item(queue[index]);


                message.reply(queueInfo[index]);
                console.log(queueInfo[index]);


                ytdl(queueInfo[index], function (err, info) {

                    try {
                        message.reply("playing: **" + info.title + "**" + " https://www.youtube.com/watch?v=" + queue[index]);
                    } catch (err) {
                        message.reply("couldn't get video data.");
                    }
                });
            }
        }
        ,
        {
          command: "qclear",
            description: "Clears the queue",
            parameters: [],
            execute: function (message) {
                index = 0;
                queue = [];
                message.reply("cleared queue.");
            }
        },
        {
            command: "skip",
            description: "Skips a song",
            parameters: [],
            execute: function (message) {

                /*
                *
                * TODO improve this so you can use a param to skip to a certain position in queue.
                *
                * */

                if ((index + 1) != queue.length) {
                    index++;
                    play_audio(queue[index]);
                    ytdl.getInfo(queue[index], function (err, info) {

                        try {
                            message.reply("now playing: " + info.title);
                        } catch (err) {
                            message.reply("couldn't get video data.");
                        }
                    });
                } else {
                    dispatcher.end();
                    index = 0;
                    queue = [];
                    message.reply("couldn't skip last song, ended music playback.");
                }
            }
        }
        ,
        {
            command: "t",
            description: "Plays a taunt, do help as argument for all taunts",
            parameters: ["taunt"],
            execute: function (message, params) {


                var messages = [];

                params = params[1];

                //all of this to play memes and taunts.... what am I doing with my life :')

                if (params == "help") {

                    fs.readFile("help.txt", 'utf8', function (err, data) {
                        if (err) throw err;
                        console.log('OK: ' + "help.txt");


                        messages = chunkSubstr(data, 1900);


                        messages.forEach(function (element) {
                            message.reply("```" + element + "```");
                        });

                        message.reply("http://pastebin.com/raw/gnqamyAL");

                    });
                }
                if (params == "r") {
                    var random = Math.floor((Math.random() * 999) + 1);

                    fs.readFile("help.txt", 'utf8', function (err, data) {
                        if (err) throw err;


                        messages = chunkSubstr(data, 1900);


                        for (var i = 0; i < messages.length; i++) {
                            if (messages[i].includes(random)) {
                                messages[i] = messages[i].substring(messages[i].indexOf(random), messages[i].indexOf(random + 1));
                                message.reply("your random taunt is: " + "\n " + messages[i]);
                                break;
                            }
                        }


                    });


                    handle_taunt(random, message);

                } else if (params != null && params != undefined) {
                    fs.readFile("help.txt", 'utf8', function (err, data) {
                        if (err) throw err;


                        messages = chunkSubstr(data, 1900);


                        for (var i = 0; i < messages.length; i++) {
                            if (messages[i].includes(params)) {
                                messages[i] = messages[i].substring(messages[i].indexOf(params), messages[i].indexOf(parseInt(params) + 1));
                                message.reply("your taunt is: " + "\n " + messages[i]);
                                break;
                            }
                        }
                    });
                    handle_taunt(params, message);
                }
            }
        }
    ]
    ;

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

/*
 *  Helper functions
 */


function handle_taunt(id, message) {
    mMessage = message;
    channel = message.member.voiceChannel;
    defaultVolume = 0.7;
    play_audio_file(id);
    message.delete(0);
}


function handle_command(message, text) {
    const params = text.split(" ");
    const command = search_command(params[0]);

    if (message.member.voiceChannel != null) {

        if (command) {
            if (params.length - 1 < command.parameters.length) {
                message.reply("Insufficient parameters!");
            } else {
                command.execute(message, params);
            }
        }
    } else {
        message.reply("You need to be in a voice channel first");
    }
}

function search_command(command_name) {
    for (let i = 0; i < commands.length; i++) {

        //if the 'command' entry of the current command array item is equal to what was searched for, return that command
        if (commands[i].command == command_name.toLowerCase()) {
            return commands[i];
        }
    }
    return false;
}

function play_audio_file(file) {


    channel.join().then(connection => {
        connectionMaster = connection;

        try {
            // file = "taunt ("+file+")";
            console.log(file);
            file = "taunts/i (" + file + ").mp3";
            console.log(file);
            dispatcher = connection.playFile(file, {
                seek: 0,
                volume: 1
            });
        } catch (err) {
            mMessage.reply("Couldn't find taunt");
        }

        dispatcher.on('end', function () {
            // mMessage.reply("queue ended.");
        });

        dispatcher.on('start', function () {
            // console.log("started streaming");
        });

    }).catch(console.error);
}


function play_audio(searchQuery, timeSeconds) {

    //we have to get video ID through youtube API first before we can make the link and play it.
    if (channel != null) {
        channel.join()
            .then(connection => {
                connectionMaster = connection;

                console.log(searchQuery);

                stream = ytdl('https://www.youtube.com/watch?v=' + searchQuery, console.log('Connected to channel'), {filter: 'audioonly'});
                dispatcher = connection.playStream(stream, {
                    seek: timeSeconds,
                    volume: defaultVolume
                });
                dispatcher.setVolume(defaultVolume);

                stream.on('end', function () {

                    console.log("stream end called!");


                    index++;

                    if (index < queue.length) {

                        if (queue[index].includes("thisisAdivider")) {

                            const query = queue[index].substring(0, queue[index].indexOf("thisisAdivider"));
                            const timeStamp = queue[index].substring(queue[index].lastIndexOf("thisisAdivider"));


                            //video ID and timestamp
                            play_audio(query, timeStamp);


                        } else {
                            //just the video ID and pass along required timeStamp param
                            play_audio(queue[index], 0);
                        }

                    } else {
                        queue = [];
                        index = 0;
                        mMessage.reply("queue ended.");
                    }

                });


            }).catch(console.error);
    } else {
        mMessage.reply("You need to be in a voice channel first!");
    }
    //to be tested, probably redundant
}

function leave_channel(message) {

    if (connectionMaster != null) {
        connectionMaster.disconnect();
        message.reply("left voice channel!");
    } else {
        console.log("Couldn't leave voice channel");
    }
}

function handle_timestamp(time) {

    let hour = null;
    let minute = null;
    let seconds = null;

    if (time.includes("h")) {

        //we don't know the length of the hour or minute etc, because it could be 1 or 2 digits, better to use .indexOf
        hour = time.substring(0, time.indexOf("h"));
        minute = time.substring((time.indexOf("h") + 1), time.indexOf("m"));
        seconds = time.substring((time.indexOf("m") + 1), time.indexOf("s"));

        return ((parseInt(hour) * 3600) + (parseInt(minute) * 60) + parseInt(seconds));

    } else if (time.includes("m")) {

        minute = time.substring((time.indexOf("h") + 1), time.indexOf("m"));

        seconds = time.substring((time.indexOf("m") + 1), time.indexOf("s"));


        //we have to parse to int because it's otherwise seen as a string
        return ((parseInt(minute) * 60) + parseInt(seconds));

    } else if (time.includes("s")) {
        seconds = time.substring((time.indexOf("m") + 1), time.indexOf("s"));

        //for good measure
        return parseInt(seconds);
    }
}

function handle_divided_queue_item(queueItem) {

    //double check just in case function is called invalid-ly
    try {
        if (queueItem.includes("thisisAdivider")) {
            queueItem = queueItem.substring(0, queueItem.indexOf("thisisAdivider"));
            return queueItem;
        } else if (queueItem != null) {
            return queueItem;
        } else {
            return "couldn't process queueItem at function handle_divided_queue_item"
        }
    } catch (err) {
        console.log(":(");
    }
}


function handle_search_and_push_to_queue(type, query, message, callback) {


    //shortened link
    if (type === 0) {

        try {


            //for readibility
            const length1 = query.indexOf("youtu.be/") + 9;
            const length2 = query.indexOf("?t=");
            let videoId = null;


            timeStamp = query.substring((query.lastIndexOf("?t=") + 3));
            query = query.substring(length1, length2);

            timeStamp = handle_timestamp(timeStamp);
            query = query + "thisisAdivider" + timeStamp;


            videoId = query.substring(0, query.indexOf("thisisAdivider"));


            ytdl.getInfo(videoId, function (err, info) {


                const timeStamp = query.substring(query.lastIndexOf("thisisAdivider") + "thisisAdivider".length);


                //if this is the first song the play start playback
                if (queue[0] == null) {
                    queue.push(query);
                    queueItemsInfo.push(info.title);
                    message.reply("added " + info.title + " to the queue.");

                    //video ID and timestamp
                    play_audio(videoId, timeStamp);
                }
                else {
                    queue.push(query);
                    queueItemsInfo.push(info.title);
                    message.reply("added " + info.title + " to the queue.");
                }
            });


        } catch (err) {
            message.reply("Something went wrong, try again.");
            console.log("Something went wrong with the shortened link handling");
        }

    }
    //normal link
    else if (type === 1) {
        console.log(query);

        const queryApi = "https://www.googleapis.com/youtube/v3/search?part=id&q=" + encodeURI(query) + "&key=" + key + "&type=video&maxResults=1";

        request(queryApi, function (err, res, body) {
            let response = JSON.parse(body);

            try {
                response = response.items[0].id.videoId;

                ytdl.getInfo(response, function (err, info) {


                    if (queue[0] == null) {
                        queue.push(response);
                        queueItemsInfo.push(info.title);

                        message.reply("added " + info.title + " to the queue.");

                        play_audio(queue[0], 0);
                    } else {
                        queue.push(response);
                        queueItemsInfo.push(info.title);

                        message.reply("added " + info.title + " to the queue.");
                    }
                });
            } catch (err) {
                message.reply("couldn't find the video you searched for.")
            }
        });
    }
    //playlist
    else if (type === 2) {
        try {
            ytdl.getInfo(query, function (err, info) {
                if (queue[0] == null) {
                    queue.push(query);
                    queueItemsInfo.push(info.title);

                    play_audio(query, 0);
                } else {
                    queue.push(query);
                    queueItemsInfo.push(info.title);
                    console.log(info.title);
                }
                if (index <= queueItemsInfo.length) {

                }
                callback();
            });
        } catch (err) {
            console.log("error getting youtube data for playlists");
        }
    }
}


function chunkSubstr(str, size) {
    var numChunks = Math.ceil(str.length / size),
        chunks = new Array(numChunks);

    for (var i = 0, o = 0; i < numChunks; ++i, o += size) {
        chunks[i] = str.substr(o, size);
    }

    return chunks;
}

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

/*
 *
 *   Checking if stream has ended, if so, play next in queue,
 *   this might be deprecated but I don't have time to test it.
 *
 * */


if (channel != null && stream != null) {

    console.log("checking for stream end!!")


} else if (channel != null && stream == null && queue[0] != null) {
    play_audio(queue[0]);
}


// log bot in
login = bot.login(token);
