const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode, mentionedJid } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../lib/color");
const { getBuffer, banner, start, success, getGroupAdmins,close} = require("../lib/functions");
const fetch = require("node-fetch");
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const { ngebucin } = require("./messages.js");
const extream = ["6285156137901-1632578387@g.us","6285156137901-1633160194@g.us"]
AutoWelcome = JSON.parse(fs.readFileSync('./settings.json')).setWelcome.autoWelcome
Background = JSON.parse(fs.readFileSync('./settings.json')).setWelcome.background




module.exports = async(client, anu) => {
try{
const fake1 = settings.copyright
const prefix = settings.prefix
const copyright = `© ${fake1}`  
const groupMet = await client.groupMetadata(anu.jid)
const groupName = groupMet.subject
const allmem = groupMet.participants.length
const mem = anu.participants[0];
const memNumber = mem.split("@")[0];
const timeWib = moment.tz("Asia/Jakarta").format("HH:mm");
const from = anu.jid
const cintakupadamu = ngebucin[Math.floor(Math.random() * ngebucin.length)]
const groupMembers = groupMet.participants;
const groupAdmins = getGroupAdmins(groupMembers);                        
const conts = client.contacts[mem] || { notify: anu.jid.replace(/@.+/, '') }
const pushname = conts.notify || conts.vname || conts.name || PhoneNumber('+' + mem.replace('@s.whatsapp.net', '')).getNumber('international').replace(new RegExp("[()+-/ +/]", "gi"), "")
//const pushname = client.contacts[mem] != undefined ? client.contacts[mem].notify = undefined ? PhoneNumber('+' + mem.replace('@s.whatsapp.net', '')).getNumber('international') : client.contacts[mem].notify || client.contacts[mem].vname || client.contacts[mem].name : PhoneNumber('+' + mem.replace('@s.whatsapp.net', '')).getNumber('international').replace(new RegExp("[()+-/ +/]", "gi"), "")                 
const Add = anu.action == "add" 
const Remove = anu.action == "remove"
const Promote = anu.action == "promote" 
const Demote = anu.action == "demote"
Type1 = client.welcome === "type1" 
Type2 = client.welcome === "type2" 
Type3 = client.welcome === "type3" 
Type4 = client.welcome === "type4" 
const OneMem = anu.participants.length === 1
const onMe = !mem.includes(client.user.jid) 
const intro = `*──⌞ WELCOME ⌟──* Beban @${memNumber}
In Group ${groupName}


Dengan Grup Ini , Disini Kita Bisa Saling
Silahturahmi Bercerita, Curhat, Cari
Teman, Sahabat, Pasangan, Bestfriend !

Jangan Buat Onar Kalo Gak Mau Dikick

*#TUTORIAL KICK*
⦁ Send link GC
⦁ Send Virtex
⦁ Send Sticker Sadis/Hentong
⦁ Spam ga jelas
⦁ Send Video Porno
⦁️ Rusuh
⦁️ Ngemis Admin
⦁ Toxic Berlebihan
*#SEMOGA BETAH .*
`
  
  
try {
var pp_user = await client.getProfilePicture(mem)
} catch (e) {
var pp_user = 'https://telegra.ph/file/7ef2915cd786897228450.jpg'
};    
try {
var pp_grup = await client.getProfilePicture(from);
} catch (e) {
var pp_grup = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}
                   

    
//Button In    
let butIn= [{
buttonId: `y`, 
buttonText: { 
displayText: "ᴡᴇʟᴄᴏᴍᴇ 🤗" }, 
type: 1 } 
 ];         
 
//Button out
let butOut= [{ 
buttonId: `y`, 
buttonText: { 
displayText: "ɴɪᴛɪᴩ ᴇꜱ ʙᴜᴀʜ 🗿" },
type: 1 }
];        
 
//Button imge2         
const sendButImage2 = async(id, text1, desc1, gam1, but = []) => {
mhan = await client.prepareMessage(from, gam1, image, {thumbnail: gam1, contextInfo: { mentionedJid: [mem] }})
//imageMsg = ( await client.prepareMessageMedia(gam1, "imageMessage", { contextInfo: { mentionedJid: [mem] }, thumbnail: gam1})).imageMessage;
buttonsMessage = {
contentText: text1,
footerText: desc1,
imageMessage: mhan.message.imageMessage,
buttons: but,
headerType: 4,
};
prep = await client.prepareMessageFromContent(id, { buttonsMessage },{});
client.relayWAMessage(prep);
}
			
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, image)
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
const buttonMessages = {
imageMessage: locmhan.message.imageMessage,
contentText:  text1,
footerText: desc1,
buttons: but,
headerType: 4
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, { contextInfo: { mentionedJid: [mem] }})
}
             
//Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(id, {jpegThumbnail: kma}, MessageType.location)
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
buttonMessages = {
locationMessage: locmhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 'LOCATION',
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage,{ contextInfo: { mentionedJid: [mem] }})
}
             
//Group Update           
if (anu.action == "remove" && anu.participants.length === 1){
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah keluar dari gc`,`green`), color(`${groupName}`,`magenta`))
} else  if (anu.action == "add" && anu.participants.length === 1){ 
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah bergabung di gc`,`green`), color(`${groupName}`,`magenta`))
}

//Auto Welcome    
if(!AutoWelcome){
if(!JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid)) return
console.log("Auto Welcome Off")
}      
 
//Welcome Type1        
if(Add && Type1 && OneMem && onMe){
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${allmem}&gcname=${encodeURI(groupName)}&pp=${pp_user}&bg=${Background}`)        
sendButImage2(from, intro, copyright, buff, butIn)
} else if (Remove && Type1 && onMe) {    	
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${allmem}&gcname=${encodeURI(groupName)}&pp=${pp_user}&bg=${Background}`)       
sendButImage(from, outro, copyright, buff, butOut)
}

//welcome Type2          
if (Add && Type2 && OneMem && onMe) {     
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${allmem}&gcname=${encodeURI(groupName)}&gcicon=${pp_grup}&pp=${pp_user}&bg=${Background}`)
sendButImage2(from, intro, copyright, buff, butIn)
} else if (Remove && Type2 && onMe) {       
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${allmem}&gcname=${encodeURI(groupName)}&gcicon=${pp_grup}&pp=${pp_user}&bg=${Background}`)
sendButImage(from, outro, copyright, buff, butOut)
}
 

//Welcome Type4
if(Add && Type3 && OneMem && onMe){ 
ppUser = await getBuffer(pp_user)  
sendButLocation(from, intro, copyright, ppUser, butIn)
} else if(Remove && Type3 && onMe){      
ppUser = await getBuffer(pp_user)  
sendButLocation(from, outro, copyright, ppUser, butOut)
}  

//Promote / Demote  


  
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
if (!e.includes("jid is not defined")) {
console.log(color('GROUP : %s', 'white'), color(e, 'green'))
}
}
}   
}



















