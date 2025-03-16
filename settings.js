//base by DGXeon
//recode by 𝐉𝐢𝐧𝐰𝐢𝐢𝐥𝐎𝐧𝐠𝐢𝐧𝐣𝐨 
//YouTube: null


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'Bellah~2z40RA7T#VRneuCjwFxSYHupVJSJHZDNmNDE_THLCNxjVd9jGWuw' 
//owmner v card
global.ytname = "YT: Null" //ur yt chanel name
global.socialm = "IG: @JINWIIL ONGINJO" //ur github or insta name
global.location = "Kenya" //ur location

//new
global.botname = process.env.BOT_NAME ||'𝑵𝒂𝒍𝒊𝒏𝒂 𝐗𝐦𝐝' //enter your  bot name here
global.ownernumber = process.env.OWNER_NUMBER ||'254769365617' //ur owner number
global.ownername = '© 𝐉𝐢𝐧𝐰𝐢𝐢𝐥𝐎𝐧𝐠𝐢𝐧𝐣𝐨' //ur owner name
global.websitex = "https://chat.whatsapp.com/EqDVC9BGF9k86ZMHdjxY0d" //"https://chat.whatsapp.com/EqDVC9BGF9k86ZMHdjxY0d"
global.wagc = "https://chat.whatsapp.com/EqDVC9BGF9k86ZMHdjxY0d" //"https://chat.whatsapp.com/JmsgAB8zHfQcJXxES"
global.themeemoji = '🪀'
global.wm = "JINWIIL ONGINJO🏴‍☠️"
global.botscript = 'https://whatsapp.com/channel/0029VaxZbeSDTkJwBgUb9u3N' //'https://chat.whatsapp.com/JmsgzJl8zHfQcJXxES' //script link
global.packname = process.env.PACK_NAME ||"𝑵𝒂𝒍𝒊𝒏𝒂-𝑿𝒎𝒅" //enter your stickers author name here
global.author = "𝐉𝐢𝐧𝐰𝐢𝐢𝐥𝐎𝐧𝐠𝐢𝐧𝐣𝐨"
global.creator = "254769365617@s.whatsapp.net"
global.xprefix = process.env.BOT_PREFIX ||'.'
global.premium = ["254713192684"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = process.env.TYPE_MENU || 'v2' // menu type 'v1' => 'v8' 
global.typereply = process.env.TYPE_REPLY ||'v1' // reply type 'v1' => 'v3'
global.autoblocknumber = process.env.AUTOBLOCK_NUMBER || '201,200' //set autoblock country code
global.antiforeignnumber = process.env.ANTIFOREIGN_NUMBER || '' //set anti foreign number country code
global.welcome = process.env.WELCOME || 'false' //welcome/left in groups
global.anticall = process.env.ANTI_CALL || 'false' //bot blocks user when called
global.autoswview = process.env.AUTOSW_VIEW || 'true' //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.autorecord = process.env.AUTO_RECORD || 'false'
global.autorecordtype = process.env.AUTO_RECORDTYPE || 'false'

global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	owner: 'Nalina Xmd owner only<\>',
    admin: 'Bot is not admin<\>',
    group: 'feature for group only<\>',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./XMEDIA/theme/bellah.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
