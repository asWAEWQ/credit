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
        client.channels.get(cid).send(Math.random().toString(36).substring(7));
      }
      nigga = setInterval(LoL,0);
      break;
    case "off":
if (!nigga) return;
      clearInterval(nigga);
      break;
  };
  if (message.content.startsWith('say')) {
      var args = message.content.split(" ");
      if (!args[1]) return;
      message.channel.send(args.join(" ").slice(args[0].length));
  }
});



const child_process = require("child_process");

client.on('message', message => {
if(message.content === prefix+ "restart") {
         message.channel.send(⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**);
        console.log(⚠️ جاري اعادة تشغيل البوت... ⚠️);
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(تم اعادة تشغيل البوت);
    };
  });


client.login(process.env.BOT_TOKEN);
 
