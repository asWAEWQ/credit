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
  })
      nigga = setInterval(LoL,305);
      break;
    case "off":
if (!nigga) return;
      clearInterval(nigga);
      break;
  };
  

client.on('ready', async() => {
var server = "495608433064673281"; // ايدي السررفر
var channel = "503222054946996224";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})

client.on('ready', async() => {
var server = "495608433064673281"; // ايدي السررفر
var channel = "503222054946996224";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#rep <@314135031029170197>')
    },8.64e+7);
})


client.on('message', message => {
if(message.content.startsWith('1s')) {
if(message.author.id !== "314135031029170197") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 





client.login(process.env.BOT_TOKEN); 
