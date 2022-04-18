const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../lib/color");
const { getBuffer } = require("../lib/functions");
const fetch = require("node-fetch");
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const settings = JSON.parse(fs.readFileSync('./settings.json'))
AutoWelcome = JSON.parse(fs.readFileSync('./settings.json')).setWelcome.autoWelcome
const fake1 = settings.copyright
const prefix = settings.prefix
const copyright = `© ${fake1}`  
const extream = ["6285156137901-1632578387@g.us","6285156137901-1633160194@g.us"]
  
module.exports = async(client, anu) => {
  	try{
                        if(extream.includes(anu.jid)) return
if(!AutoWelcome){
if(!JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid)) return
}      
                        metdata = await client.groupMetadata(anu.jid);     
                        //Button Location
                        const sendButLocation = async (id, text1, desc1, gam1, but = []) => {
					    kma = gam1
					    mhan = await client.prepareMessage(id, kma, MessageType.location, {thumbnail:kma})
					    buttonMessages = {
						locationMessage: mhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						 }
						 client.sendMessage(id, buttonMessages, MessageType.buttonsMessage)
						 }
                         try {
			             ppimg = await client.getProfilePicture(metdata.id)
				         } catch {
				         ppimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
				         }
				         buffer = await getBuffer(ppimg)
                         let but = [{
						 "buttonId": `y`,
						 "buttonText": {
						 "displayText": `ᴏᴋᴇ`},
						 "type": "RESPONSE"
						 }]
    
    
    
    
    if (anu.announce == "false") {
      teks = `ᴅɪʙᴜᴋᴀ ☕`;
      sendButLocation(metdata.id, teks,copyright, buffer, but)
      
    } else if (anu.announce == "true") {
      teks = `ᴅɪᴛᴜᴛᴜᴩ 👋`;      
      sendButLocation (metdata.id, teks,copyright, buffer, but)
      
    } else if (!anu.desc == "") {
      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
      teks = `*──❒ DESCRIPSI GROUP ❒──*\n\nTelah diubah oleh admin @${
        anu.descOwner.split("@")[0]
      }\n*Deskripsi Baru :* \n${anu.desc}`;      
      sendButLocation (metdata.id, teks,copyright, buffer, but)
      
    } else if (anu.restrict == "false") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;
      sendButLocation (metdata.id, teks,copyright, buffer, but)
      
    } else if (anu.restrict == "true") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;
      client.sendMessage(metdata.id, teks, MessageType.text);
    }
    
     } catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
    if (!e.includes("jid is not defined")) {
    console.log(color('GROUP : %s', 'white'), color(e, 'green'))
        }
	}
}
}
  
