require("./global")

const mess = {
   wait: "*`[ Loading ]` - Wait , Still Processing*",
   success: "*`[ Success ]` - Sent Successful ✅*`",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "*`[ QUERY ]` - Activated?*",
       link: "*`[ NEED ]` - Deactivated?*",
   },
   error: {
       fitur: "*`[ Error ]` - Sorry, Error Feature, Please Chat with the Bot Developer So It Can Be Fixed Immediately*",
   },
   only: {
       group: "*`[ GROUP ]` - This is a group Command*",
       private: "*`[ PRIVATE ]` - Use it on Private Chat*",
       owner: "*`[ OWNER ]` - This CMD is for ther Owner*",
       admin: "*`[ ADMIN ]` - This is admin CMD*",
       badmin: "*`[ BOT ADMIN ]` - Bot must be an admin to use this CMD*",
       premium: "*`[ PREMIUM ]` - premium users only, if you want premium, buy it from the owner using .owner*",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
