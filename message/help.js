
exports.menu = (dateIslamic, thisHit, listcmdblock, explain, kyun, process, timeWit, timeWita, timeWib,
multi, fs, isPremium, getLimit, limitCount, getBalance, senderNumber, blocked, ban, listerror, user, autosticker,
forwarding, fake,autoread, autovn, typing, Antibuggc,antibugtroli,Toxic, isAntihidetag, isKickarea, isAntilinkGc,
AntiVirtex, isAntiviewonce, hitnya, pushname, ucapanWaktu, prefix, publik, week, weton, calender) => {
return`*──❒ MENU BOTZ ❒──*

${ucapanWaktu} Beban Group

*🆔️ Nama :* ${pushname}
*💳 Status :* ${isPremium ? '🎫 Premium':'Free'}
*📈 Limit :* ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}
*🔰 Prefix :* ⌜ ${prefix} ⌝
*⛔ Mode :* ${publik ? "Public" : "Self"}
*⏱ Time :* ${timeWib} WIB
*⏱ Time :* ${timeWit} WIT 
*⏱ Time :* ${timeWita} WITA
*🕋 Tahun islam :* ${dateIslamic}        
*📆 Tanggal now :* ${week}_${calender}

*⌜───── GRUP SYSTEM ─────⌝*
𑇐 Antivirtex : ${AntiVirtex ? 'ON ✔' : 'OFF ❌'}
𑇐 Antitoxic : ${Toxic ? 'ON ✔' : 'OFF ❌'}
𑇐 AntilinkGc : ${isAntilinkGc ? 'ON ✔' : 'OFF ❌'}
𑇐 Antiasing : ${isKickarea ? 'ON ✔' : 'OFF ❌'}
𑇐 Forward : ${forwarding ? 'ON ✔' : 'OFF ❌'}
𑇐 Autotyping : ${typing ? 'ON ✔' : 'OFF ❌'}
𑇐 Antibuggc : ${Antibuggc ? 'ON ✔' : 'OFF ❌'}
*⌞───── GRUP SYSTEM ─────⌟*
`
}