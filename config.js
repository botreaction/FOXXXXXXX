const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6289688206739@s.whatsapp.net"]
global.nomerOwner = "6289688206739"
global.nomorOwner = ['6289688206739']
global.namaDeveloper = "Chio"
global.namaBot = "Asbot"

//DATA BASE STORE
global.namaStore = "FOXstore"
global.noDana = "6289688206739"
global.noGopay = "6289688206739"
global.noOvo = "Gada"
// BATAS BASE STORE

//DATA BASE PUSH
global.packname = ""
global.author = "Sticker By WilyKun"
global.tekspushkon = ""
global.tekspushkonv1 = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
//BATAS DATA BASE PUSH

// GLOBAL MESS
global.mess = {
   owner: "lu siapa ?\n*Hmmmm*",
   proses: "wet proses tod",
   sukses: "*⌜ DONE ⌟*\n udah ya Kak",
   group: "Khusus Di Dalam Group",
   priv: "khusus di chat private",
}
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Di Tulis Dan Di Fix Oleh ZIRO
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/