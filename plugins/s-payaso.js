import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let handler = async(m, { conn }) => {
  
let res = await fetch('https://img-16.stickers.cloud/packs/f73a3b52-02ed-4f9c-83ea-969d698b6200/webp/animated/2887d998-3f0c-424a-aaeb-132bad02da58.webp')
let json = await res.json()
let { url } = json 

//const s = [
//'https://img-16.stickers.cloud/packs/f73a3b52-02ed-4f9c-83ea-969d698b6200/webp/animated/2887d998-3f0c-424a-aaeb-132bad02da58.webp' 
//'https://i.waifu.pics/6Y02AB5.gif'
//];  
let stiker = await sticker(null, url, global.packname, global.author)

    //conn.sendFile(m.chat, s, 'sticker.webp', '', m)
    conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
handler.customPrefix = /payaso|🤡|pallaso/
handler.command = new RegExp
export default handler
