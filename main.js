const Discord = require("discord.js");
const Client = new Discord.Client()

const fs = require("fs")

Client.on("ready",()=>{
    console.log("Am In!")
})

Client.login(process.env.token)

Client.on("message",async (message)=>{
    const Prefix = ";"
    let arg = message.content.substring(Prefix.length).split(" ");

    const Role = {
        member: message.guild.roles.cache.get("851359946276208660")
    }

    function Send(msg){
        message.channel.send(msg)
    }

    if(message.channel.id=="851365772210077737" && !message.author.bot){
        message.channel.bulkDelete(parseInt(1))
    }

    switch(arg[0]){
        case "hello":
            message.channel.send("Hello")
            break

        case "auth":
            if(message.channel.id != "851365772210077737"){break}
            var id = require("./id").id
            
            if(id.includes(Number(arg[1]))){
                message.member.roles.add(Role.member)
            }
            break

        case "sendAuth":
            var formatEmbed = new Discord.MessageEmbed()
                .setColor("#00e322")
                .addField("พิมพ์ ;auth <รหัสนิสิต>","Example: `;auth 6312345678`")
            Send(formatEmbed)
            break
    }
})