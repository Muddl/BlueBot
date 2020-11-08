const { getPlayers, getAllPlayers } = require('../queries/Players.js');

module.exports = {
  name: 'players',
  description: 'Shows all TL current players and their social links!',
  usage: '[game] [playerName]',
  async execute(message, args) {
    const data = [];

    if (!args.length) {
      const players = await getPlayers('leagueoflegends');
      data.push(players);

      return message.author.send(data, { split: true })
        .then(() => {
          if (message.channel.type === 'dm') return;
          message.reply('I\'ve sent you a DM with the full active player list!');
        })
        .catch((err) => {
          console.error(`Could not send help DM to ${message.author.tag}.\n`, err);
          message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
        });
    }
  },
};