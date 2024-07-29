//Bot by 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒//


require("./all/module")
global.owner = "254742491666" 
global.namaCreator = "𝕶𝖎𝖓𝖌 𝕾𝖆𝖒" 
global.autoJoin = false 
global.antilink = false 
global.versisc = '6.0' 
global.codeInvite = "https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e"
global.isLink = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e'
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "𝕶𝖎𝖓𝖌 𝕾𝖆𝖒" 
global.author = "𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6" 
global.jumlah = "5" 
global.namabot = "𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6" 
global.domain = 'https://mamakpakivcs.panellofficial.site' // Isi Domain Lu
global.apikey = 'ptlc_4h32ABuxxTxdvOHR5o2VDJI4urQVkubF0zOLhxkfQwE' // Isi Apikey Plta Lu
global.capikey = 'ptla_tbOCcBRBrbjJeN4VRHzd3zvah6ELpwiGitudeD1V4eV' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.apilinode = ''
global.apitokendo = ''
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
