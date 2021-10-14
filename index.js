const keepAlive = require("./server.js")
const Discord = require('discord.js');
require('discord-reply');
const client = new Discord.Client();
const fsLibrary  = require('fs'); 
const got = require('got');

keepAlive()

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  //Tell the bot is ready
	console.log('Ready!');
  //How many servers is the bot in
  console.log('In ' + client.guilds.cache.size + ' servers')
  //Tacanote server shows that the bot restarted
  //new embed
  const restartlog = new Discord.MessageEmbed()
    restartlog.setTitle('Hi👋, Hallo has been restarted')
    restartlog.setColor('#ffff00')
    restartlog.setTimestamp()
  client.channels.cache.get('838264759899652137').send(restartlog)
  //Set status and activity
  client.user.setPresence({
   status: "online"
  });
  //shows how many servers and uses he bot has the uses is not spot on to true amount
	client.user.setActivity('Sup👋', { type: 'STREAMING', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' });
  //shows stats on my bot on my server
  let guild = client.guilds.cache.get('814940437751660595');
  let serversin = guild.channels.cache.get('881241918632251543')
  let usesabout = guild.channels.cache.get('881241966753484810')
  serversin.setName('Servers: ' + client.guilds.cache.size)
  usesabout.setName('Uses ↔: ' + fsLibrary.readFileSync('times_used.int','utf8'))
});

client.on('guildCreate', guild => {
  const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
  channel.send( "Hey there🙋‍♂️, thanks for adding me!!! I will also be here to say hi😊" )
})

client.on('message', async (message) => {

  used = false

  if ((message.channel.type) === 'dm') {
    //need help it's T!help
    if ((message.content.toLowerCase()) == 'help') {
      const Help = new Discord.MessageEmbed()
      Help.setTitle('Hi🙋‍♀️, if you want a list of diffrent reponses I say pls type "Hi!commands"')
      message.reply(Help);
      var used = true
    }
  }

  if ((message.content) == 'Hi!commands') {
    //for help use T!help instead
    const Help = new Discord.MessageEmbed()
    Help.setTitle('command not ready')
    message.reply(Help);
    var used = true
  }

  //Bot doesn't trigger it's self and other bots don't also
  if (message.author.bot) return
  //Help

  if ((message.content) == 'Hi!invite') {
    const link = new Discord.MessageEmbed()
    link.setDescription('Get Hallo bot here: Not ready to be added by others')
    message.channel.send(link)
    var used = true
  }

  if ((message.content.slice(2)) == 'Hi!server') {
    message.lineReply('Go to the help server here: https://discord.gg/RHNhkEbVa7')
    var used = true
  }

  
  if (message.content.includes("Hi!reply")) {
    //reply random reply
    message.lineReply('Hi replied')
    var used = true
  }


  if ((message.content.toLowerCase()) == 'Hi!nsfw') {
    //This is the wrong bot bro
    message.lineReply('I\'m not a NSFW bot!!!! I\'m a bot that say\'s hi👋' );
    var used = true
  }



  
  //suggest command
  if (message.content.startsWith('Hi!suggestion')) {
    const suggest = new Discord.MessageEmbed()
    suggest.setTitle('Suggestion made by: ' + message.author.username)
    suggest.setColor('#5cf000')
    suggest.setDescription(message.content.slice(13))
    suggest.setTimestamp()
    var used = true
    //send to bot suggestions channel
    client.channels.cache.get('846452836615061564').send(suggest)
  }

  if ((message.content.slice(3)) == 'how many times have you been used?'){
    const timesused = new Discord.MessageEmbed()
    timesused.setDescription('I have been used ' + fsLibrary.readFileSync('times_used.int','utf8') + ' times')
    message.reply(timesused)
   var used = true
  }
  if (message.content.toLowerCase().includes('hi') || message.content.toLowerCase().includes('hello')) {
    var hellos = ['Hi 👋', 'Hello 👋','Sup 👋','What\'s up 👋','Ello 👋','Sup hotty 👋 ||Lol||','“Good morning”, “Good afternoon”, or “Good evening” 👋', 'It\'s good to see you 👋', 'G\'day 👋','Howdy 👋', 'Hey 👋', 'Hey there 👋', 'Yo 👋', '👋', 'Hallo 👋'];
    var hallo = Math.floor(Math.random() * hellos.length);
    message.lineReply(hellos[hallo]);
    var used = true
  }
  if (used) {
    //add used
    var usedtimes = 0
    usedtimes = Number(fsLibrary.readFileSync('times_used.int','utf8'))
    usedtimes +=1
    fsLibrary.writeFileSync('times_used.int',usedtimes)
    console.log(usedtimes)
  };
});

client.login(process.env.TOKEN)