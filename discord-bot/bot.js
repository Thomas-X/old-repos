const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./botToken').botToken.key;
const youtubeKey = require('./botToken').ytToken.key;
const request = require('request');
const axios = require('axios');

const commands = [
    {
        command: "test",
        description: "test!",
        parameters: ['search'],
        execute: function (message, params) {

        }
    },
    {
        command: "test2",
        description: "test2",
        parameters: ['botMessageBack'],
        execute: function (message, params) {
            params.botMessageBack = params[1];
            console.log('test!');
            message.reply(params.botMessageBack);
        }
    },
    {
        command: "emoji",
        description: "reply with an emoji",
        parameters: ['emoji'],
        execute: function (message, params) {
            message.reply(params[1]);
        }
    },
    {
        command: "gif",
        description: "gif",
        parameters: ["search"],
        execute: function (message, params) {
            let userInput = message.content.substr(4);


            let link = "http://api.giphy.com/v1/gifs/search?q=" + encodeURI(userInput) + "&api_key=dc6zaTOxFJmzC";

            axios.get(link).then(function (responseJson) {
                let data = responseJson.data.data;
                message.reply(responseJson.data.data[Math.floor(Math.random()* data.length)].url);
                console.log(Math.floor(Math.random()* data.length));
                console.log(data.length);
            //    TODO: doe iets als het niets vind
            //    TODO: random command 20k text https://github.com/first20hours/google-10000-english/blob/master/20k.txt


            })


        }
    }
];


function handle_command(message, text) {
    const params = text.split(" ");
    const command = search_command(params[0]);

    if (command) {
        if (params.length - 1 < command.parameters.length) {
            message.reply("Insufficient parameters!");
        } else {
            command.execute(message, params);
        }
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


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', function (message) {
    if (message.content === 'ping') {
        message.reply('pong');
    }
    const messageContent = message.content;

    if (message.content[0] == '!') {
        console.log('Command issued!');
        handle_command(message, messageContent.substring(1));
    }
});


client.login(token);
