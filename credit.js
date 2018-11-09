const discord = require("discord.js");
const randomWord = require("random-words")

const TOKEN = "NTA4MzQwMzkxNjUzODAxOTg4.Dr93Kg.8BY-UVvlVcrX3qrSGjtMFjJISCI"; 
 
const bot = new discord.Client();

var spam;

var phrases = ["thing1","another one","keep adding more","there's no limit"];

function startspam()
{
    console.log("Spam starting!")
    var server = bot.guilds.get("497726385637556236");
    var chan = new discord.TextChannel(server,{"id":"497727574773071906"});
    spam = bot.setInterval(()=>
    {
        chan.send(randomWord()).then(msg=>{ // Sticking with randomwords.
            console.log(msg.content);
        });
 
    },500);
}

function stopspam()
{
    bot.clearTimeout(spam);
    console.log("Spam Stopped.")
}

bot.on("ready",()=>{
    console.log("Ready!");
})

bot.on("message",msg=>{
    if(msg.author.id == "408374252291751976")
    {
        if(msg.content.toLowerCase() == "=start")
        {
            startspam()
        }
        else if(msg.content.toLowerCase() == "=stop")
        {
            stopspam()
        }
    }
})

bot.on('message', message => {
    var prefix = "$";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
  
  let args = message.content.split(" ").slice(1);
  let x = args.join(" ")
    if(message.content.startsWith(prefix + '1s')) {
        message.channel.send(''+x);
            message.delete(999)
    }
    
   
  });

bot.login(BOT_TOKEN);
