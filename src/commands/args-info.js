module.exports = {
  name: 'args-info',
  description: 'Information about the arguments provided.',
  cooldown: 10,
  usage: '<arg 1> ... <arg n>',
  args: true,
  execute(message, args) {
    if (args[0] === 'foo') {
      return message.channel.send('bar');
    }
    message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
  },
};