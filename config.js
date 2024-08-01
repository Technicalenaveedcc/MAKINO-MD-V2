const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["madini"];
global.OwnerNumber = ["255715445191"];
global.ownertag = [""]; 
global.OwnerName =  "madini";
global.BotName = "MADINI-MD";
global.packname = "MADINI";                             //Do not change.
global.author = "🐦Madinimd ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.{"noiseKey":{"private":{"type":"Buffer","data":"OITS2331m18n2LuP9pKUPk/MDLh/Bhegd20ITWoZPnQ="},"public":{"type":"Buffer","data":"zhg4jBT0ZzBdjkpTA4yrCOWyErREN6xFnqssptogVm4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"ELIkU2XsJbA8cNqKk1lmCfEZB6YLZG1QFhHOBIfha38="},"public":{"type":"Buffer","data":"kaPiEk9sJeTkHIBCKaH3xozWofkr6vIqDKRvqG40YGo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"cL0Eq/rrXPCvWpGM3C5p0L2eWRvshNvBxxbQ/oTfTVQ="},"public":{"type":"Buffer","data":"lC84m9p643fZewdzVfSbRFSCa9xu+4b8d6z66OlDNTw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"gHEKP5urM0f+fDcpMnjbnNkqqKqf27jorhrS9Je1lm4="},"public":{"type":"Buffer","data":"VcxTDCXRB5n3GXS9XZluhPxLa9ufXkHN9Q+qQ4Yn0DA="}},"signature":{"type":"Buffer","data":"wtT95Easd68c15ce2u8Ed+K1lVgL3vS7x3sasYBBBnb7mpAp0QL+OUHFNhZKr9XOZQRdGBwK4YCd65Gorc08hw=="},"keyId":1},"registrationId":188,"advSecretKey":"BtigubrIpHPRiVjnvcjK7k/vUUhXoABmPIYDt/5bFIU=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"1zQjaolAS1e6HWNrLbEg2Q","phoneId":"d48b5474-ad1b-4e4e-b8b1-6c8e0b59c874","identityId":{"type":"Buffer","data":"lfxwP0+m6MGCkKa4Q8quK52qSHU="},"registered":true,"backupToken":{"type":"Buffer","data":"L1nr6tsgNNEn2dl6+K7IxXm341g="},"registration":{},"pairingCode":"9KJ8SKHP","me":{"id":"255715445191:52@s.whatsapp.net","name":"madinimachine"},"account":{"details":"COfPkYQFENTAp7UGGAIgACgA","accountSignatureKey":"7R7XXdcj4Dl8KnRjzljC34faT4/gxXRqE5yPhEatAh8=","accountSignature":"hTC4zhvg0dGWNfcpDasQdBz17dUDLQ9gGUhO0SQCU4PH0rjS+24/pNo8we0nVA5YaFtA196AimUmFAWh7rjVBg==","deviceSignature":"gSJQo276caNUPVdCJCL4FAkyY4Ai4xUZOTAiDsVz5hQZcnbTZU6yPqnZIOUzpOC+GzhxQbi4UWJZ50qHStOQjQ=="},"signalIdentities":[{"identifier":{"name":"255715445191:52@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Be0e113XI+A5fCp0Y85Ywt+H2k+P4MV0ahOcj4RGrQIf"}}],"platform":"smba","lastAccountSyncTimestamp":1722409057}= process.env.sessID || ``
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
