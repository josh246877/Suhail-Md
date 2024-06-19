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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_34_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzLFxuICAgICAgICAyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMixcbiAgICAgICAgMjMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzLFxuICAgICAgICA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI3LFxuICAgICAgICA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM4LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxODksXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDQwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMixcbiAgICAgICAgMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZkZYOFY5eDlURTNhUmM2Rmx3eXZIaUtKYzNHZ2xCUmJ3d09VY2JQNDAxQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVUVVT1JCWElRa0tHSHk4bWYybjlvd1wiLFxuICBcInBob25lSWRcIjogXCJkNzJjMzRiYy1hZjQ2LTRlOTctYmY5YS1jNGM3MmIxMTQ5ODhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAxMTgsXG4gICAgICAxNzMsXG4gICAgICAxMixcbiAgICAgIDM4LFxuICAgICAgMzUsXG4gICAgICAzMixcbiAgICAgIDE2MyxcbiAgICAgIDc3LFxuICAgICAgMjE4LFxuICAgICAgNDksXG4gICAgICA0OSxcbiAgICAgIDE5MixcbiAgICAgIDIxOSxcbiAgICAgIDMyLFxuICAgICAgMTcwLFxuICAgICAgMTA3LFxuICAgICAgMTMxLFxuICAgICAgMTQxLFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICA0MSxcbiAgICAgIDkwLFxuICAgICAgMTY4LFxuICAgICAgNjgsXG4gICAgICAzNixcbiAgICAgIDE4MixcbiAgICAgIDE5NCxcbiAgICAgIDI0LFxuICAgICAgMTksXG4gICAgICA1OSxcbiAgICAgIDIwNixcbiAgICAgIDg0LFxuICAgICAgMTAsXG4gICAgICA4NixcbiAgICAgIDIzOCxcbiAgICAgIDEwNSxcbiAgICAgIDIxNyxcbiAgICAgIDcsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjlGUFFHR1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODc2Mjc5Mzc6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKb3NoX0dyYXBoaWNzZGVzaWduLkZyYW1lcyBMdGRcIixcbiAgICBcImxpZFwiOiBcIjE3OTg3MzIzMDM3NzE3OToyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJYk1wczhGRVBqM3liTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9WaWNlNCt6YSt4WHdSSnpWc0crWnRLYVhVdnJvcjhtcDhVcG1ySDRxams9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU0JvN3ZhWTdiRC9JZ1Fqc0wxaWJCdGVnQXBxMzNlS0J4NVEvSkxVZGNHdkQ2MUtwV3REcWcxeUFYbDZuWWgyS01MN3V4dFU2TGJDNzI3cDhKZkozQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieDRtejJGY2ZLTW1wTmh3SHpkNXRNYmdpNHpSUnJJU3hHMGdKd3hobllLVm5zMjg5bEtDYjNwdUxtUFlIL285b0FyeHVkaEFZcnYzZTRrYUk4aXdiaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4NzYyNzkzNzoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODc3ODg3OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
