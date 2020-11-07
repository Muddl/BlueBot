require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
  
  const args = message.content.slice(process.env.PREFIX.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'args-info') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);