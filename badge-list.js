const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (client, message, args) => {
        
const members = message.guild.members.cache.array();
const userFlag = [];
   let usersOnArray = `Seçtiğin Rozete Göre Kişiler Aşağıdadır:`;
  //Elminsterxld#0007
  let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
    .setDescription(`Bir Rozet Seç
    <:Discord_Bot_Dev:945920239676305448>  Developer Rozeti İçin
    <:early:945920236190830593> Early Rozeti İçin
    <:partner:945920235389743135> Partner Rozeti İçin
    <:balance:945920240502603816> Balance İçin
    <:bravery:945920233833627689> Bravery İçin
    <:brilliance:945920234731237406> Brilliance İçin
    <:bughunterlevel1:945920233359699968>  Bug Hunter 1 için 
    <:bughunterlevel2:945920239013613609>  Bug Hunter 2 için
    <:hypesquad_etkinlikleri:945920237931483266>  Hypesquad İçin
    <a:000:937796471330320424>  Discord Yetkilisi İçin
    <a:erured:945920237272965160>  Komutu İptal Etmek İçin
    `)
    .setColor(`#E70000`)
    .setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
    .setTimestamp()
    message.channel.send(embed).then(async react => {
        react.react('945920239676305448')
        react.react('945920236190830593')
        react.react('945920235389743135')
       
      react.react("945920240502603816")
             react.react('945920233833627689')    
      
      react.react("945920234731237406")
      react.react('945920233359699968')
          react.react('945920239013613609')
      react.react("945920237931483266")
      
      react.react("937796471330320424")
     
       react.react('945920237272965160')
        const select = react.createReactionCollector((reaction, user) =>
        reaction.emoji.id === "945920239676305448" || "937796471330320424" || "945920236190830593" || "945920235389743135"  ||"945920234731237406"|| "945920233359699968" || " 945920239013613609" || "945920237931483266" || "945920240502603816" || "945920233833627689" || "945920237272965160" &&
        user.id === message.author.id,
      {          
         time: 60000,
         errors: ['time']
});
       select.on("collect", async (reaction, user) => {
        if(user.id === client.user.id) return;
     if(reaction.emoji.id === "945920239676305448"){
       
       for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("VERIFIED_DEVELOPER")
    if (flag) {
      usersOnArray += `\n** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}

await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Developer Tam Liste!')
	.setDescription(usersOnArray)
.setColor(`#E70000`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)


       
   
 
     }
      if(reaction.emoji.id === "945920236190830593") {
         for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("EARLY_SUPPORTER")
    if (flag) {
      usersOnArray += `\n** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Early Supporter Tam Liste!')
.setDescription(usersOnArray)
.setColor(`#E70000`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
      }
         
         if(reaction.emoji.id === "945920235389743135") {
              for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("DISCORD_PARTNER")
    if (flag) {
      usersOnArray += `\n** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Partner Rozet Tam Liste!')
.setDescription(usersOnArray)
.setColor(`#E70000`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
         }
         
         if(reaction.emoji.id === "945920240502603816") {
           for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("HOUSE_BALANCE")
    if (flag) {
      usersOnArray += `\n** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Balance Rozet Tam Liste!')
.setDescription(usersOnArray)
.setColor(`#E70000`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
         }
         if(reaction.emoji.id === "945920233833627689") {
           for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("HOUSE_BRAVERY")
    if (flag) {
      usersOnArray += `\n** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Bravery Rozet Tam Liste!')
.setDescription(usersOnArray)
.setColor(`#E70000`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
         }
         if(reaction.emoji.id === "945920234731237406") {
           for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("HOUSE_BRILLIANCE")
    if (flag) {
      usersOnArray += `\n** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Brilliance Rozet Tam Liste!')
.setDescription(usersOnArray)
.setColor(`#E70000`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
         }
         if(reaction.emoji.id === "945920233359699968") {
           for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("BUGHUNTER_LEVEL_1")
    if (flag) {
      usersOnArray += `\n** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Bug Hunter Level 1 Tam Liste!')
.setDescription(usersOnArray)
.setColor(`#E70000`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
         }
         
         if(reaction.emoji.id === "945920239013613609") {
           for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("BUGHUNTER_LEVEL_2")
    if (flag) {
      usersOnArray += `\n** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Bug Hunter Level 2 Tam Liste!')
.setDescription(usersOnArray)
.setColor(`#E70000`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
         }
         if(reaction.emoji.id === "945920237931483266") {
           for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("HYPESQUAD_EVENTS")
    if (flag) {
      usersOnArray += `\n** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Hypesquad Rozeti Tam Liste!')
.setDescription(usersOnArray)
.setColor(`#E70000`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
         }
          if(reaction.emoji.id === "937796471330320424") {
           for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("DISCORD_EMPLOYEE")
    if (flag) {
      usersOnArray += `\n** \`${member.user.tag}\`** ID: (\`${member.user.id}\`)`;
    }
}
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Discord Yetkili Rozeti Tam Liste!')
.setDescription(usersOnArray)
.setColor(`#E70000`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
         }
         
         
         
         if(reaction.emoji.id === "945920237272965160") {
    await react.reactions.removeAll()
    await select.stop()
    let embedo = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
     .setDescription(`
     Komut İptal Edildi!
     `)
    .setColor(`#E70000`)
    .setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
    .setTimestamp()
  return  react.edit(embedo)
    }

})
    })        .catch(select => {
      return message.channel.send(`Zaman Aşımı!`)
    })



 


      

  


//Elminsterxld#0007
};
exports.conf = 
  {
  enabled: true, 
  guildOnly: true,
  aliases: ["Elminsterxld#0007"],
  permLevel: 0,
}
exports.help = {
  name: "badges"
}
