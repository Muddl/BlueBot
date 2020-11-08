module.exports = {
  name: 'avatar',
  description: 'Sets the avatar of Blue!',
  aliases: ['setavatar'],
  usage: '<imageURL>',
  execute(message, args) {
    if (!args.length) return message.channel.send(`You didn't pass any image to upload, ${message.author}!`);
    if (args.length > 1) return message.channel.send(`You can't have more than one avatar! Please try again with a single image link.`);
    client.user.setAvatar(args[0])
      .then(user => console.log('New avatar set!'))
      .catch(console.err);  
  },
};