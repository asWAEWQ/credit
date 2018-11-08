const Discord = require('discord.js');
const client = new Discord.Client();
var cid = "502449717565718531"; // آيدي الروم هنا
var nigga;
client.on('warn', console.warn);
client.on('error', console.error);
client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));
client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));
client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));
client.on("message", message => {
  var prefix = "!";
  var command = message.content.split(" ")[0].slice(prefix.length);
  switch(command) {
    case "on":
      function LoL(){
        client.on('ready', async() => {
    client.guilds.get(server).channels.get(channel).send('** فرعونفؤعونفؤعونفؤعونفؤعونفؤعونفرعونفؤعونفؤعونفؤعونفؤعونفرعونفرعونفرعونفؤعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفؤعونفؤعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفؤعونفرعونفرعونفؤعونفرعونفرعونفؤعونفؤعونفؤعونفؤعونفؤعونفؤعونفرعونفرعونفرعونفرعونفرعونفؤعونفرعونفرعونفرعومفرعون **')
    }
})
      nigga = setInterval(LoL,305);
      break;
    case "off":
if (!nigga) return;
      clearInterval(nigga);
      break;
  };
  
  
  
