const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_33_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgODIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxODksXG4gICAgICAgIDk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICA3NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDcyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4LFxuICAgICAgICA0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia2gwbkcvNko0YXV1MEJYYzBmeDRRLzVqdVo4WGxxRHhlNmlmbXIxOEx2QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicWFiSXlkeHdUakNPVE9PWC1xWTdId1wiLFxuICBcInBob25lSWRcIjogXCI4MjkxNWIyNC1kYWE1LTRhZmQtOGE3MC1lOGQ2MTUxZTFkYjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgMTE2LFxuICAgICAgMTYsXG4gICAgICA5OSxcbiAgICAgIDg0LFxuICAgICAgMjQ4LFxuICAgICAgMTYwLFxuICAgICAgNzEsXG4gICAgICAyMDEsXG4gICAgICAxMDQsXG4gICAgICA1MyxcbiAgICAgIDksXG4gICAgICAyMDQsXG4gICAgICA3NixcbiAgICAgIDE2MSxcbiAgICAgIDIzOCxcbiAgICAgIDIyMSxcbiAgICAgIDE3MyxcbiAgICAgIDY4LFxuICAgICAgMTQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMjMzLFxuICAgICAgMTIsXG4gICAgICA4MixcbiAgICAgIDc4LFxuICAgICAgMjQ1LFxuICAgICAgODEsXG4gICAgICAxNjEsXG4gICAgICAxMzMsXG4gICAgICAxNzgsXG4gICAgICAzMSxcbiAgICAgIDE4MSxcbiAgICAgIDQyLFxuICAgICAgMjI2LFxuICAgICAgOCxcbiAgICAgIDI1LFxuICAgICAgNCxcbiAgICAgIDIwNSxcbiAgICAgIDIwNCxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJESDlGRUI3TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4NzYyNzkzNzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpvc2hfR3JhcGhpY3NkZXNpZ24uRnJhbWVzIEx0ZFwiLFxuICAgIFwibGlkXCI6IFwiMTc5ODczMjMwMzc3MTc5OjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lETXBzOEZFUHFKeDdNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL1ZpY2U0K3phK3hYd1JKelZzRytadEthWFV2cm9yOG1wOFVwbXJINHFqaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNRU9wMVpFV0VxM0xjemxubUR4OTVrL1FWUHplWWR1WDhxODk0LzNsSG80UzJ2U1hHYk5ISTFQeEwxcTBBejhReStmN21qMThHc1YyTm8zWS9wQ29CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4Z0ZqalZhTERzOGg5T3ZjWVdvZ0w2azg0ZkxrSzh6dmtwQmpDekFaMVgzTWNEVERuK3piZ09ZUDhFNlgzeWJwQmowUlRmK2M4ek02WFlwU1JXUUxqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDg3NjI3OTM3OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NzMyMDMwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDZXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQNlcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNR1BkZndhNCtFL2Z6eUhyS2IrSlNITmNwcWhGejRsMXZNdXdIdys2RkZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MDg0ODQ2MDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg3MTA4MzgzMTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
