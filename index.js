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
    restartlog.setTitle('Hi๐, Hallo has been restarted')
    restartlog.setColor('#ffff00')
    restartlog.setTimestamp()
  client.channels.cache.get('838264759899652137').send(restartlog)
  //Set status and activity
  client.user.setPresence({
   status: "online"
  });
  //shows how many servers and uses he bot has the uses is not spot on to true amount
	client.user.setActivity('Sup๐', { type: 'STREAMING', url: 'https://www.youtube.com/watch?v=gghDRJVxFxU' });
  //shows stats on my bot on my server
  let guild = client.guilds.cache.get('814940437751660595');
  let serversin = guild.channels.cache.get('881241918632251543')
  let usesabout = guild.channels.cache.get('881241966753484810')
  serversin.setName('Servers: ' + client.guilds.cache.size)
  usesabout.setName('Uses โ: ' + fsLibrary.readFileSync('times_used.int','utf8'))
});

client.on('guildCreate', guild => {
  const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
  channel.send( "Hey there๐โโ๏ธ, thanks for adding me!!! I will also be here to say hi๐" )
})

client.on('message', async (message) => {

  used = false

  if ((message.channel.type) === 'dm') {
    //need help it's T!help
    if ((message.content.toLowerCase()) == 'help') {
      const Help = new Discord.MessageEmbed()
      Help.setTitle('Hi๐โโ๏ธ, if you want a list of diffrent reponses I say pls type "Hi!commands"')
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
    message.lineReply('I\'m not a NSFW bot!!!! I\'m a bot that say\'s hi๐' );
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
  if (message.content.toLowerCase().includes('hi ') || message.content.toLowerCase().includes('hello ') || (message.content.toLowerCase() == 'hi') || (message.content == 'hello')) {
    var hellos = ['Hi', 'Hello','Sup','What\'s up','Ello','Among us','โGood morningโ, โGood afternoonโ, or โGood eveningโ', 'It\'s good to see you', 'G\'day','Howdy', 'Hey', 'Hey there', 'Yo', '', 'Hallo',''];
    var emojis =[' ๐', ' ๐','',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐ฅฐ',' โบ๏ธ',' ๐',' ๐ค',' ๐',' ๐ค?',' ๐ฅณ',' ๐ฉ',' ๐คก',' ๐ป',' ๐บ',' ๐ธ',' ๐ถ',' ๐ง',' ๐ฆ',' ๐ง', ' ๐ง',' ๐ฑ',' ๐จ', ' ๐ง',' ๐ง',' ๐จโ๐ฆฐ',' ๐จโ๐ฆฑ',' ๐จโ๐ฆณ',' ๐จโ๐ฆฒ',' ๐ฉ',' ๐ฉโ๐ฆฐ',' ๐งโ๐ฆฐ',' ๐ฉโ๐ฆฑ',' ๐งโ๐ฆฑ',' ๐ฉโ๐ฆณ',' ๐งโ๐ฆณ',' ๐ฉโ๐ฆฒ',' ๐ฑโโ๏ธ',' ๐ฑโโ๏ธ',' ๐ง',' ๐ด',' ๐ต',' ๐งโโ๏ธ',' ๐จโโ๏ธ',' ๐ฉโโ๏ธ',' ๐งโ๐',' ๐จโ๐',' ๐ฉโ๐',' ๐งโ๐ซ',' ๐จโ๐ซ',' ๐ฉโ๐ซ',' ๐งโโ๏ธ',' ๐จโโ๏ธ',' ๐จโโ๏ธ',' ๐ฉโโ๏ธ',' ๐', ' ๐','',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐ฅฐ',' โบ๏ธ',' ๐',' ๐ค',' ๐',' ๐', ' ๐','',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐ฅฐ',' โบ๏ธ',' ๐',' ๐ค',' ๐',' ๐', ' ๐','',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐ฅฐ',' โบ๏ธ',' ๐',' ๐ค',' ๐',' ๐', ' ๐','',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐ฅฐ',' โบ๏ธ',' ๐',' ๐ค',' ๐',' ๐', ' ๐','',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐ฅฐ',' โบ๏ธ',' ๐',' ๐ค',' ๐',' ๐', ' ๐','',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐',' ๐ฅฐ',' โบ๏ธ',' ๐',' ๐ค',' ๐','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
    var images =['','','','','','','','','','','',' https://bobjoerules.github.io/Hallo-bot/images/download%20(11).jpeg','','','','','',' https://bobjoerules.github.io/Hallo-bot/images/download%20(10).jpeg','','','','','','','','','','','',' https://bobjoerules.github.io/Hallo-bot/images/download%20(9).jpeg','','','','','',' https://bobjoerules.github.io/Hallo-bot/images/download%20(8).jpeg','','','','','','','','','','','',' https://bobjoerules.github.io/Hallo-bot/images/download%20(7).jpeg','','','','','',' https://bobjoerules.github.io/Hallo-bot/images/download%20(6).jpeg','','','','','','','','','','','',' https://bobjoerules.github.io/Hallo-bot/images/download%20(5).jpeg','','','','','',' https://bobjoerules.github.io/Hallo-bot/images/download%20(4).jpeg','','','','','','','','','','','',' https://bobjoerules.github.io/Hallo-bot/images/download%20(3).jpeg','','','','','',' https://bobjoerules.github.io/Hallo-bot/images/download%20(2).jpeg','','','','','','','','','','','',' https://bobjoerules.github.io/Hallo-bot/images/download%20(1).jpeg','','','','','',' https://bobjoerules.github.io/Hallo-bot/images/cats_who_are_so_excited_to_see_you_18.jpeg',' https://youtu.be/gghDRJVxFxU','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
    var hallo = Math.floor(Math.random() * hellos.length);
    var emoji = Math.floor(Math.random() * emojis.length);
    var image = Math.floor(Math.random() * images.length)
    message.lineReply(hellos[hallo] + emojis[emoji] + images[image]);
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