const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname, waver) => {
    return `
_Hi/Halo/Hai, *${pushname}!*_


Berikut adalah beberapa fitur yang ada pada bot ini!✨
 *Ingfo! :*\n_New fiture akan selalu dibawah sesuai katagory!._

\n*⌜Grup Menu ⌟:*

*┏━──────────────────╮*
*┃➥ #kick*
*┃➥ #add*
*┃➥ #klasemen*
*┃➥ #linkgrup*
*┃➥ #ownergrup*
*┃➥ #adminlist*
*┃➥ #me*
*┃➥ #katakasar*
*┃➥ #groupinfo*
*┃➥ #read*
*┃➥ #santet*
*┃➥ #promote*
*┃➥ #jadian*
*┃➥ #mystat*
*┃➥ #promote*
*┃➥ #demote*
*┃➥ #tagall*
*┃➥ #del*
*┃➥ #mutegrup*
*┃➥ #setprofile*
*┃➥ #revoke*
*┃➥ #setgroupname*
*┃➥ #antilik*
*┃➥ #edotensei*
*┃➥ #resend*
*┃➥ #kickall*
*┃➥ #maluser*
*┃➥ #getpic*
*┗━──────────────────╯*







*Downloader Menu ⌟:*
*┏━──────────────────╮*
*┃➥ #igdwn*
*┃➥ #fbdwn*
*┃➥ #tiktokdwn*
*┃➥ #joox*
*┃➥ #ytmp3*
*┃➥ #ytmp4*
*┃➥ #play*
*┃➥ #msc*
*┃➥ #lagu*
*┃➥ #playvid*
*┃➥ #twitter*
*┃➥ #nhpdf*
*┃➥ #filmapikdownload*
*┃➥ #wattpad*
*┃➥ #wattpadstory*
*┃➥ #starwarsfilm*
*┃➥ #wonderwomanfilm*
*┃➥ #spidermanfilm*
*┃➥ #dunkirkfilm*
*┃➥ #1917film*
*┃➥ #ironmanfilm*
*┃➥ #jokerfilm*
*┃➥ #carsfilm*
*┃➥ #avengersfilm*
*┗━──────────────────╯*



*Search Menu ⌟:*
*┏━──────────────────╮*
*┃➥ #artinama*
*┃➥ #cekjodoh*
*┃➥ #howgay*
*┃➥ #images*
*┃➥ #resep*
*┃➥ #wiki*
*┃➥ #cuaca*
*┃➥ #chord*
*┃➥ #lirik*
*┃➥ #movie*
*┃➥ #wait*
*┃➥ #google*
*┃➥ #googlesearch*
*┃➥ #infoalamat*
*┃➥ #pinterest*
*┃➥ #heroml*
*┃➥ #kbbi*
*┃➥ #nomorhoki*
*┃➥ #checkip*
*┃➥ #myzodiak*
*┃➥ #ceksange*
*┃➥ #moddroid*
*┃➥ #happymod*
*┃➥ #images2*
*┃➥ #brainly*
*┃➥ #weather*
*┃➥ #harijadi*
*┃➥ #brainly2*
*┃➥ #wikien*
*┃➥ #prediksicuaca*
*┃➥ #userig*
*┃➥ #translate*
*┃➥ #namemc*
*┃➥ #pinterest2*
*┃➥ #resepmasakan*
*┃➥ #apkpure*
*┃➥ #mapz*
*┃➥ #detail*
*┃➥ #stalktik*
*┃➥ #alkitab*
*┃➥ #kusonime*
*┃➥ #neonime*
*┃➥ #distance*
*┃➥ #matauang*
*┃➥ #kusonime2*
*┃➥ #stalktwit*
*┃➥ #dewabatch*
*┃➥ #iplocation*
*┃➥ #filmapik*
*┃➥ #lirik2*
*┃➥ #jadwaltv*
*┗━──────────────────╯*



*Random Menu ⌟:*
*┏━──────────────────╮*
*┃➥ #memes*
*┃➥ #kpop*
*┃➥ #aiquote*
*┃➥ #doggo*
*┃➥ #fakta*
*┃➥ #bucin2*
*┃➥ #katabijak*
*┃➥ #quote*
*┃➥ #puisi*
*┃➥ #anime*
*┃➥ #bucin*
*┃➥ #wallpaper*
*┃➥ #wallpaper2*
*┃➥ #ameliandani*
*┃➥ #pictcogan*
*┃➥ #pictcecan*
*┃➥ #aesthetic*
*┃➥ #motivasi*
*┃➥ #fakboy*
*┃➥ #fml*
*┃➥ #memeindo*
*┃➥ #darkjokes*
*┃➥ #fotocewek*
*┃➥ #patrickgif*
*┃➥ #randomstiker*
*┃➥ #quotesen*
*┃➥ #kodenegara*
*┃➥ #katailham*
*┃➥ #katadilan*
*┃➥ #katahacker*
*┃➥ #katazeus*
*┃➥ #cerpen*
*┃➥ #randomgif*
*┃➥ #cersex*
*┃➥ #fucklife*
*┃➥ #zeusimg*
*┃➥ #fakta2*
*┃➥ #renungan*
*┃➥ #randomquran*
*┃➥ #retasidentitas*
*┃➥ #nickff*
*┗━──────────────────╯*



*Anime Random Menu ⌟:*
*┏━──────────────────╮*
*┃➥ #wpanime*
*┃➥ #neko*
*┃➥ #animeavatar*
*┃➥ #baka*
*┃➥ #waifu*
*┃➥ #slap*
*┃➥ #rhug*
*┃➥ #doggo*
*┃➥ #pokegif*
*┃➥ #rwink*
*┃➥ #randompat*
*┃➥ #trapnime*
*┃➥ #tickle*
*┗━──────────────────╯*



*Text Maker Menu ⌟:*
*┏━──────────────────╮*
*┃Note : Masih adaa menu yang error!*
*┃➥ #gneontext*
*┃➥ #tintatext*
*┃➥ #lovekayutext*
*┃➥ #textlight*
*┃➥ #screedtext*
*┃➥ #narutotext*
*┃➥ #floweartext*
*┃➥ #textcsgo*
*┃➥ #textcroos*
*┃➥ #textkayu*
*┃➥ #textwarace*
*┃➥ #textpubg*
*┃➥ #textkopi*
*┃➥ #textwater*
*┃➥ #textmetal*
*┃➥ #googletext*
*┃➥ #doublelovetext*
*┃➥ #textgrafity*
*┃➥ #textamerika*
*┃➥ #textfoil*
*┃➥ #textsummer*
*┃➥ #textwhite*
*┃➥ #textgplay*
*┃➥ #textjoker*
*┃➥ #galaxytext*
*┃➥ #blackpink*
*┃➥ #marvel*
*┃➥ #pornhub*
*┃➥ #wolf*
*┃➥ #lion*
*┃➥ #mascotlogo*
*┃➥ #hartatahta*
*┃➥ #tahta*
*┃➥ #partytext*
*┃➥ #silktext*
*┃➥ #romancetext*
*┃➥ #glowtext*
*┃➥ #slidingtext*
*┃➥ #thundertext*
*┃➥ #glitch*
*┃➥ #logoml*
*┃➥ #stikertext*
*┃➥ #logoff*
*┃➥ #goldpb*
*┃➥ #silverpb*
*┃➥ #stickmatrix*
*┃➥ #stickdarcula*
*┃➥ #sticklava*
*┃➥ #tickequal*
*┃➥ #zeusff*
*┃➥ #keytext*
*┃➥ #raingif*
*┃➥ #triggered*
*┃➥ #raingifimg*
*┃➥ #triggeredimg*
*┗━──────────────────╯*



*18+ Menu ⌟:*
*┏━──────────────────╮*
*┃➥ #anal*
*┃➥ #feetgif*
*┃➥ #lesbia*
*┃➥ #analimg*
*┃➥ #feetgifimg*
*┃➥ #lesbianimg*
*┃➥ #bindo*
*┃➥ #bkorea*
*┃➥ #bjapan*
*┃➥ #listhentai*
*┃➥ #nekopoinew*
*┃➥ #stikerhentai*
*┃➥ #bjanime*
*┃➥ #rhentai*
*┃➥ #kissgif*
*┃➥ #cumgif*
*┃➥ #bjgif*
*┃➥ #nsfwgif*
*┃➥ #18+*
*┃➥ #18+2*
*┃➥ #sologif*
*┃➥ #cuddle*
*┃➥ #kuni*
*┃➥ #classic*
*┃➥ #spank*
*┃➥ #ttgif*
*┗━──────────────────╯*



*Other Menu ⌟:*
*┏━──────────────────╮*
*┃➥ #stiker*
*┃➥ #stiker nobg*
*┃➥ #ping*
*┃➥ #stikergif*
*┃➥ #stickergiphy*
*┃➥ #toimg*
*┃➥ #join*
*┃➥ #meme*
*┃➥ #antivirtex*
*┃➥ #nulis*
*┃➥ #quotemaker*
*┃➥ #rate*
*┃➥ #kapan*
*┃➥ #bisakah*
*┃➥ #apakah*
*┃➥ #infosurah*
*┃➥ #tafsir*
*┃➥ #alaudio*
*┃➥ #game*
*┃➥ #sreddit*
*┃➥ #tts*
*┃➥ #resi*
*┃➥ #covidindo*
*┃➥ #shortlink*
*┃➥ #zeusfont*
*┃➥ #listban*
*┃➥ #listblock*
*┃➥ #howmuch*
*┃➥ #mtk*
*┃➥ #grupbot*
*┃➥ #saylist*
*┃➥ #addsay*
*┃➥ #listbacot*
*┃➥ #delbacot*
*┃➥ #addbacot*
*┃➥ #infobmkg*
*┃➥ #botstat*
*┃➥ #ownerbot*
*┃➥ #family100*
*┃➥ #tebakgambar2*
*┃➥ #citacita*
*┃➥ #emojisticker*
*┃➥ #jadwalbola*
*┃➥ #caklontong*
*┃➥ #asupan*
*┃➥ #nulis2*
*┃➥ #spamcall*
*┃➥ #spamcall2*
*┃➥ #qrcode*
*┃➥ #qrread*
*┃➥ #koin*
*┃➥ #dadu*
*┃➥ #tomp3*
*┃➥ #ttp2*
*┃➥ #pastebin*
*┃➥ #nhview*
*┃➥ #nhder*
*┃➥ #ssphone*
*┃➥ #butly*
*┃➥ #tinyurl*
*┃➥ #missing*
*┃➥ #findsticker*
*┃➥ #wa.me*
*┃➥ #infoloker*
*┃➥ #trendtwit*
*┃➥ #bot2*
*┃➥ #bot3*
*┃➥ #us*
*┃➥ #iri*
*┃➥ #jadwaltvnow*
*┃➥ #emojiimg*
*┃➥ #javcosplay*
*┃➥ #covid19*
*┃➥ #infotogel*
*┃➥ #convertduit*
*┃➥ #nulis3*
*┃➥ #nulis4*
*┃➥ #nulis5*
*┃➥ #nulis6*
*┃➥ #nulis7*
*┃➥ #covidword*
*┃➥ #slot*
*┃➥ #hitunghuruf*
*┃➥ #zeusback*
*┃➥ #foliokiri*
*┃➥ #foliokanan*
*┃➥ #quotemaker2*
*┃➥ #newstickerline*
*┃➥ #reportbug*
*┗━──────────────────╯*



*Berita Menu ⌟:*
*┏━──────────────────╮*
*┃➥ #cnn*
*┃➥ #liputan6*
*┃➥ #jalantikus*
*┃➥ #news*
*┃➥ #tribunews*
*┃➥ #foxnews*
*┗━──────────────────╯*



*Owner Menu ⌟:*
*┏━──────────────────╮*
*┃➥ #ban*
*┃➥ #ban del*
*┃➥ #clearall*
*┃➥ #leaveall*
*┃➥ #bc*
*┃➥ #setstatus*
*┃➥ #setpic*
*┃➥ #screen*
*┗━──────────────────╯*

*=>> JOIN GRUP BOT COMMAND :*\n*#grupbot*\n*=>> Github : github.com/ZeusFtrOfc*\n*=>> Channel: ZEUS FITURE OFFICIAL*\n*=>> No spam ya!!!!!.*\n*=>> call = Block!!*\n*=>>Spam = Block!.*\n*=>> jika masih ada menu yang tidak merespon itu berarti error!!*\n*=>> jika error jadi gunakan menu lain saja*\n\n_Terimakasih.._\n\n\n
_Ingat!!:_\n*Jangan lupa berterimakasih!!*`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, ga usah donasi gan bot ini gratis kok..
Doakan aja agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi\ntapi klo mau donasi gapapa si gan buat perkembangan bot ini..
kalau mau donasi hubungi owner aja.Bisa via pulsa dan gopay\nbisa cukup subscribe channel saya saja..
bantu share supaya banyak orng diluar sana yang menikmati bot ini.

Terimakasih. ~Zeus`
}

exports.textLoker = () => {
    return `
"perusahaan": "PT Exel Integrasi Solusindo",\n 
      "link": "https://m.karir.com/opportunities/1301913",\n 
      "profesi": "Sales Business Representative",\n 
      "gaji": "IDR 4.000.000 - 7.000.000",\n 
      "lokasi": "head office - Jakarta Barat",\n 
      "pengalaman": "Setidaknya 2 tahun",\n
      "jobFunction": "Penjualan dan Pemasaran",\n 
      "levelKarir": "Pemula / Staf",\n 
      "edukasi": "Sarjana/S1",\n 
      "desc": "Job Qualification:\u00a0Bachelor or Master degree.Have a quantitative skills and negotiation skill.Responsible for Sales, Business Development, and also Revenue Stream efforts for our company, seeking, overseeing and managing new potential clients.Tasks will include research into new opportunities and markets, updating and maintaining an organised clients of business development and marketing materials.Write, prepare, layout and produce qualifications and proposals, presentation materials upon deadlines.First point of contact for new potential client, collaborators and partners, and to evaluate and pursue new potential projects.Responsible for managing business and marketing on a day-to-day basis, organize and overseeing workflow.",\n 
      "syarat": "Requirements:Female, 18-25 years old.Bachelor or Master DegreePassionate in music industry.Fluently in English.Have a quantitative and negotiation skills.Comfortable working with team, evaluating the data, and applying creative techniques to business problems"\n\nBy : Zeus`
}

























exports.textZeus = () => {
    return `
_Hi, my name is Zeus_ ..\nmy genitals are female\n_I live in Surabaya, East Java, I am 14 years old, my position is as a Zeus bot autor / devoloper bot, I started to enter the Cyber ​​world in March 2020, my profession in the Cyber ​​world as a devoloper, Cyber ​​security, and pentesting. Here I made this bot just to help people out there who need it_ .. \n_Although this is not much, but I sincerely give up my time, energy, thoughts, money just to help you .._ \n_Hopefully with this. You can help this bot.._ \n_Amin.._ \n\n_Thanks_`}
