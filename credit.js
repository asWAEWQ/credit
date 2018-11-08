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
  
  
  
