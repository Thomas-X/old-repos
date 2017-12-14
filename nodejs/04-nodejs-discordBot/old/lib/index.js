'use strict';

const fs      = require('fs');
const Clapp   = require('./modules/clapp-discord');
const cfg     = require('../config.js');
const pkg     = require('../package.json');
//noinspection NpmUsedModulesInstalled
const Discord = require('discord.js');
const bot     = new Discord.Client();



var app = new Clapp.App({
  name: cfg.name,
  desc: pkg.description,
  prefix: cfg.prefix,
  version: pkg.version,
  onReply: (msg, context) => {
    // Fired when input is needed to be shown to the user.

    context.msg.reply('\n' + msg).then(bot_response => {
      if (cfg.deleteAfterReply.enabled) {
        context.msg.delete(cfg.deleteAfterReply.time)
          .then(msg => console.log(`Deleted message from ${msg.author}`))
          .catch(console.log);
        bot_response.delete(cfg.deleteAfterReply.time)
          .then(msg => console.log(`Deleted message from ${msg.author}`))
          .catch(console.log);
      }
    });
  }
});


// Load every command in the commands folder
fs.readdirSync('./lib/commands/').forEach(file => {
  app.addCommand(require("./commands/" + file));
});

bot.on('message', msg  => {
  // Fired when someone sends a message


  if (app.isCliSentence(msg.content)) {
    app.parseInput(msg.content, {
      msg: msg
      // Keep adding properties to the context as you need them
    });
  }
});

bot.login(cfg.token).then(() => {
  console.log('Running!');
});


bot.on('ready', () => {


  //run stuff when bot is ready



  const ytdl = require('ytdl-core');
  const streamOptions = { seek: 0, volume: 1 };
  channel.join()
    .then(connection => {
      const stream = ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', console.log('Connected to channel'), {filter : 'audioonly'});
      const dispatcher = connection.playStream(stream, streamOptions);
    })
    .catch(console.error);

});

bot.on('typingStart', (channel, user) => {
  console.log(`${user.username} is typing in ${channel.name}`);
});
