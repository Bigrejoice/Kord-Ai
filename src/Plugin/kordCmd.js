const a0_0xdf374f=a0_0x4991;(function(_0x1e68dd,_0x4d6a35){const _0x5c1635=a0_0x4991,_0x3db69d=_0x1e68dd();while(!![]){try{const _0x12c3b5=-parseInt(_0x5c1635(0xf4))/0x1*(-parseInt(_0x5c1635(0xeb))/0x2)+-parseInt(_0x5c1635(0xc2))/0x3*(parseInt(_0x5c1635(0xac))/0x4)+-parseInt(_0x5c1635(0x103))/0x5*(-parseInt(_0x5c1635(0xe4))/0x6)+parseInt(_0x5c1635(0xe2))/0x7*(-parseInt(_0x5c1635(0xd6))/0x8)+parseInt(_0x5c1635(0xda))/0x9*(parseInt(_0x5c1635(0xcf))/0xa)+-parseInt(_0x5c1635(0xb8))/0xb+-parseInt(_0x5c1635(0xaa))/0xc;if(_0x12c3b5===_0x4d6a35)break;else _0x3db69d['push'](_0x3db69d['shift']());}catch(_0x35e47f){_0x3db69d['push'](_0x3db69d['shift']());}}}(a0_0x295b,0x2f224));const fs=require('fs'),path=require(a0_0xdf374f(0x100)),{getCommand}=require(a0_0xdf374f(0xdb)),COOLDOWNS=new Map(),RATE_LIMITS=new Map(),BAN_LIST_PATH=path[a0_0xdf374f(0xc6)](__dirname,'..',a0_0xdf374f(0xe7),a0_0xdf374f(0xd4)),SUDO_LIST_PATH=path[a0_0xdf374f(0xc6)](__dirname,'..','Database',a0_0xdf374f(0xd7)),IGNORE_LIST_PATH=path[a0_0xdf374f(0xc6)](__dirname,'..','Database',a0_0xdf374f(0xc7));let bannedUsers=[],sudoUsers=[],ignoredJids=[];function loadBanList(){const _0x1cbd12=a0_0xdf374f;try{return JSON[_0x1cbd12(0xd5)](fs[_0x1cbd12(0xd8)](BAN_LIST_PATH,'utf8'));}catch(_0x5e624e){return console[_0x1cbd12(0xc8)]('Error\x20loading\x20ban\x20list:',_0x5e624e),[];}}function loadSudoList(){const _0x1ce30c=a0_0xdf374f;try{return JSON[_0x1ce30c(0xd5)](fs[_0x1ce30c(0xd8)](SUDO_LIST_PATH,_0x1ce30c(0xd0)));}catch(_0x10cbd0){return console[_0x1ce30c(0xc8)](_0x1ce30c(0xf0),_0x10cbd0),[];}}function loadIgnoreList(){const _0x3afa73=a0_0xdf374f;try{return JSON[_0x3afa73(0xd5)](fs[_0x3afa73(0xd8)](IGNORE_LIST_PATH,'utf8'));}catch(_0x511a84){return console['error'](_0x3afa73(0xb4),_0x511a84),[];}}function a0_0x4991(_0x4f4bff,_0x1f2b9c){const _0x295b02=a0_0x295b();return a0_0x4991=function(_0x499198,_0x4be92c){_0x499198=_0x499198-0xa8;let _0x19858c=_0x295b02[_0x499198];return _0x19858c;},a0_0x4991(_0x4f4bff,_0x1f2b9c);}fs['watch'](BAN_LIST_PATH,_0x296be7=>{const _0x1763e2=a0_0xdf374f;_0x296be7===_0x1763e2(0xd1)&&(console['log'](_0x1763e2(0xf9)),bannedUsers=loadBanList());}),fs[a0_0xdf374f(0xba)](SUDO_LIST_PATH,_0x2a5e16=>{const _0x4dd812=a0_0xdf374f;_0x2a5e16==='change'&&(console[_0x4dd812(0xfe)](_0x4dd812(0xb3)),sudoUsers=loadSudoList());}),fs[a0_0xdf374f(0xba)](IGNORE_LIST_PATH,_0x675ab7=>{const _0x572ef3=a0_0xdf374f;_0x675ab7===_0x572ef3(0xd1)&&(console[_0x572ef3(0xfe)]('Ignore\x20list\x20file\x20changed.\x20Reloading...'),ignoredJids=loadIgnoreList());}),bannedUsers=loadBanList(),sudoUsers=loadSudoList(),ignoredJids=loadIgnoreList();function extractTextFromMessage(_0x57e015){const _0x164092=a0_0xdf374f,_0x4ae8e8=[_0x164092(0xbe),_0x164092(0xee),_0x164092(0xd9),_0x164092(0xb6)];return _0x4ae8e8[_0x164092(0xb9)]((_0x4acab7,_0x385d13)=>_0x4acab7||_0x57e015[_0x385d13]&&(_0x57e015[_0x385d13]['text']||_0x57e015[_0x385d13][_0x164092(0xc4)]||_0x57e015[_0x385d13])||'','')[_0x164092(0xf7)]();}async function buildContext(_0x18f9e2,_0x3d9a1b,_0x4b7caa){const _0x50d8cd=a0_0xdf374f,_0x12c5bf=_0x3d9a1b['key'][_0x50d8cd(0xc5)]?_0x18f9e2[_0x50d8cd(0xb2)]['id']['split'](':')[0x0]:_0x3d9a1b['key'][_0x50d8cd(0xb7)]?_0x3d9a1b['key'][_0x50d8cd(0xb7)]['split']('@')[0x0]:_0x3d9a1b[_0x50d8cd(0xdf)][_0x50d8cd(0xc0)][_0x50d8cd(0xcb)]('@')[0x0],_0x1ce69d=settings['OWNER_NUMBERS']['includes'](_0x12c5bf),_0x315b03=_0x3d9a1b[_0x50d8cd(0xdf)]['remoteJid'][_0x50d8cd(0xca)](_0x50d8cd(0xce)),_0x37c66c=_0x3d9a1b['key']['remoteJid'][_0x50d8cd(0xca)](_0x50d8cd(0xd3));let _0x3c261a=![],_0x151cab=![];if(_0x315b03)try{const _0x424438=await _0x18f9e2[_0x50d8cd(0xc9)](_0x3d9a1b[_0x50d8cd(0xdf)][_0x50d8cd(0xc0)]),_0x39185e=_0x424438['participants']['filter'](_0x173844=>_0x173844['admin'])[_0x50d8cd(0xe3)](_0x3f465f=>_0x3f465f['id']['split']('@')[0x0]);_0x3c261a=_0x39185e[_0x50d8cd(0x101)](_0x12c5bf);}catch(_0xfdae58){console[_0x50d8cd(0xc8)](_0x50d8cd(0xe9),_0xfdae58),_0x3c261a=![];}if(_0x37c66c)try{const _0x3c35ce=await _0x18f9e2[_0x50d8cd(0xe0)](_0x3d9a1b['key'][_0x50d8cd(0xc0)]),_0x577989=_0x3c35ce[_0x50d8cd(0xe6)]?.['map'](_0xb219fd=>_0xb219fd[_0x50d8cd(0xcb)]('@')[0x0])||[],_0x1e665e=_0x3c35ce[_0x50d8cd(0xfa)]?.[_0x50d8cd(0xcb)]('@')[0x0];_0x151cab=_0x577989[_0x50d8cd(0x101)](_0x12c5bf)||_0x1e665e===_0x12c5bf;}catch(_0x4351d1){console[_0x50d8cd(0xc8)]('Error\x20getting\x20channel\x20metadata:',_0x4351d1),_0x151cab=![];}return{'isOwner':_0x1ce69d,'isGroupAdmin':_0x3c261a,'isChannelAdmin':_0x151cab,'isGroup':_0x315b03,'isChannel':_0x37c66c,'senderNumber':_0x12c5bf};}async function checkPermissions(_0x2fe9e9,_0x240e9d,_0x3b8643,_0x424b60){const _0x1b94d9=a0_0xdf374f,{isOwner:_0xfba56a,isGroupAdmin:_0x124f92,isChannelAdmin:_0x513d7c,isGroup:_0x2e7b25,isChannel:_0x5f4bde,senderNumber:_0x1de088}=_0x424b60,_0x451495={'isOwnerOnly':'This\x20command\x20is\x20restricted\x20to\x20bot\x20owner\x20only!','isAdminOnly':_0x1b94d9(0xf1),'isGroupOnly':_0x1b94d9(0xec),'isPrivateOnly':_0x1b94d9(0xad),'isGroupAdminOnly':'This\x20command\x20requires\x20group\x20admin\x20privileges.'},_0x2d70a4=async _0x17e6c4=>{const _0x5fa17e=_0x1b94d9;return await _0x2fe9e9[_0x5fa17e(0xb5)](_0x240e9d[_0x5fa17e(0xdf)]['remoteJid'],{'text':_0x17e6c4,'contextInfo':{'externalAdReply':{'title':_0x5fa17e(0xde),'body':'','thumbnail':await getBuffer(_0x5fa17e(0xa8)),'showAdAttribution':!![],'mediaType':0x1,'renderLargerThumbnail':![]}}},{'quoted':_0x240e9d});};if(_0x3b8643[_0x1b94d9(0xd2)]&&!_0xfba56a)return await _0x2d70a4(_0x451495['isOwnerOnly']),![];if(_0x3b8643[_0x1b94d9(0xcc)]&&!_0x124f92&&!_0x513d7c)return await _0x2d70a4(_0x451495[_0x1b94d9(0xcc)]),![];if(_0x3b8643['isGroupAdminOnly']&&!_0x124f92)return await _0x2d70a4(_0x451495['isGroupAdminOnly']),![];if(_0x3b8643[_0x1b94d9(0xe5)]&&!_0x2e7b25)return await _0x2d70a4(_0x451495[_0x1b94d9(0xe5)]),![];if(_0x3b8643[_0x1b94d9(0xb0)]&&(_0x2e7b25||_0x5f4bde))return await _0x2d70a4(_0x451495['isPrivateOnly']),![];return!![];}async function getBuffer(_0x218eac){const _0x4169ca=a0_0xdf374f;try{const _0x2f5d2c=await fetch(_0x218eac),_0x539847=await _0x2f5d2c[_0x4169ca(0xe8)]();return _0x539847;}catch(_0x4fa18b){return console['error']('Error\x20fetching\x20buffer:',_0x4fa18b),null;}}async function checkCooldownAndRateLimit(_0x3a247b,_0x286162,_0x2e5fe5,_0x43dec2){const _0x542044=a0_0xdf374f,_0x13e137=Date[_0x542044(0xc1)](),_0x6323d0=_0x2e5fe5['cooldown']||settings[_0x542044(0xf6)]||0x7d0,_0x1912f1=settings[_0x542044(0xfc)]||0xa,_0x1a5e78=COOLDOWNS[_0x542044(0x104)](_0x43dec2)||new Map();if(_0x1a5e78[_0x542044(0xc3)](_0x2e5fe5[_0x542044(0xef)])){const _0x1b722e=_0x1a5e78[_0x542044(0x104)](_0x2e5fe5['usage'])+_0x6323d0;if(_0x13e137<_0x1b722e){const _0x2b548e=(_0x1b722e-_0x13e137)/0x3e8;return await _0x3a247b[_0x542044(0xb5)](_0x286162[_0x542044(0xdf)]['remoteJid'],{'text':_0x542044(0xaf)+_0x2b548e[_0x542044(0xdd)](0x1)+_0x542044(0x102)+_0x2e5fe5['usage']+_0x542044(0xfd),'contextInfo':{'externalAdReply':{'showAdAttribution':![],'title':'','body':'','mediaType':0x2,'sourceUrl':_0x542044(0xa8),'thumbnail':null}}},{'quoted':_0x286162}),![];}}_0x1a5e78[_0x542044(0xa9)](_0x2e5fe5[_0x542044(0xef)],_0x13e137),COOLDOWNS[_0x542044(0xa9)](_0x43dec2,_0x1a5e78),setTimeout(()=>_0x1a5e78[_0x542044(0xed)](_0x2e5fe5['usage']),_0x6323d0);const _0x45743f=RATE_LIMITS[_0x542044(0x104)](_0x43dec2)||{'count':0x0,'resetTime':_0x13e137+0xea60};_0x13e137>_0x45743f[_0x542044(0x105)]?(_0x45743f[_0x542044(0xff)]=0x1,_0x45743f['resetTime']=_0x13e137+0xea60):_0x45743f[_0x542044(0xff)]++;RATE_LIMITS[_0x542044(0xa9)](_0x43dec2,_0x45743f);if(_0x45743f['count']>_0x1912f1)return await _0x3a247b['sendMessage'](_0x286162[_0x542044(0xdf)][_0x542044(0xc0)],{'text':_0x542044(0xea),'contextInfo':{'externalAdReply':{'showAdAttribution':![],'title':'','body':'','mediaType':0x2,'sourceUrl':_0x542044(0xa8),'thumbnail':null}}},{'quoted':_0x286162}),![];return!![];}async function kordCmdUpsert(_0x9c4333,_0x2ae3df){const _0x5a291b=a0_0xdf374f;try{if(!_0x2ae3df||!_0x2ae3df[_0x5a291b(0xbc)])return;const _0x548947=extractTextFromMessage(_0x2ae3df[_0x5a291b(0xbc)]),_0x180cf1=settings[_0x5a291b(0xfb)]['find'](_0x302e51=>_0x548947[_0x5a291b(0xdc)]()['startsWith'](_0x302e51[_0x5a291b(0xdc)]()));if(!_0x180cf1)return;let _0x2fc971,_0x52a960;if(_0x2ae3df[_0x5a291b(0xdf)][_0x5a291b(0xc5)])_0x2fc971=_0x9c4333[_0x5a291b(0xb2)]['id'][_0x5a291b(0xcb)](':')[0x0],_0x52a960=_0x2ae3df['key'][_0x5a291b(0xc0)];else _0x2ae3df[_0x5a291b(0xdf)][_0x5a291b(0xb7)]?(_0x2fc971=_0x2ae3df['key'][_0x5a291b(0xb7)]['split']('@')[0x0],_0x52a960=_0x2ae3df[_0x5a291b(0xdf)][_0x5a291b(0xc0)]):(_0x2fc971=_0x2ae3df[_0x5a291b(0xdf)][_0x5a291b(0xc0)][_0x5a291b(0xcb)]('@')[0x0],_0x52a960=_0x2ae3df[_0x5a291b(0xdf)]['remoteJid']);if(ignoredJids[_0x5a291b(0x101)](_0x52a960)&&!settings[_0x5a291b(0xf3)][_0x5a291b(0x101)](_0x2fc971))return;if(settings[_0x5a291b(0xbd)][_0x5a291b(0xdc)]()===_0x5a291b(0xcd)&&!settings[_0x5a291b(0xf3)]['includes'](_0x2fc971)&&!sudoUsers['includes'](_0x2fc971))return;const _0x5cb759=_0x2ae3df[_0x5a291b(0xdf)][_0x5a291b(0xb7)]||_0x2ae3df[_0x5a291b(0xdf)][_0x5a291b(0xc0)],_0x1cb451=await buildContext(_0x9c4333,_0x2ae3df,_0x5cb759),[_0x2ea642,..._0x5565a9]=_0x548947[_0x5a291b(0xf2)](_0x180cf1['length'])[_0x5a291b(0xab)]()[_0x5a291b(0xcb)](/\s+/),_0x16120d=getCommand(_0x2ea642['toLowerCase']());if(!_0x16120d)return;if(bannedUsers[_0x5a291b(0x101)](_0x5cb759)&&!_0x1cb451[_0x5a291b(0xf8)]){await _0x9c4333['sendMessage'](_0x2ae3df[_0x5a291b(0xdf)][_0x5a291b(0xc0)],{'text':_0x5a291b(0xb1),'contextInfo':{'externalAdReply':{'showAdAttribution':![],'title':'','body':'','mediaType':0x2,'sourceUrl':'https://files.catbox.moe/xdzljz.png','thumbnail':null}}},{'quoted':_0x2ae3df});return;}if(!await checkPermissions(_0x9c4333,_0x2ae3df,_0x16120d,_0x1cb451)||!await checkCooldownAndRateLimit(_0x9c4333,_0x2ae3df,_0x16120d,_0x5cb759))return;try{if(_0x16120d[_0x5a291b(0xbb)])await _0x9c4333[_0x5a291b(0xb5)](_0x2ae3df[_0x5a291b(0xdf)][_0x5a291b(0xc0)],{'react':{'text':_0x16120d[_0x5a291b(0xbb)],'key':_0x2ae3df[_0x5a291b(0xdf)]}});if(settings['READ_ALL_MESSAGES'])await _0x9c4333[_0x5a291b(0xe1)]([_0x2ae3df['key']]);await _0x16120d[_0x5a291b(0xf5)](_0x9c4333,_0x2ae3df,_0x5565a9,_0x1cb451);}catch(_0x32b490){console['error'](_0x5a291b(0xae)+_0x2ea642+':',_0x32b490),await _0x9c4333[_0x5a291b(0xb5)](_0x2ae3df[_0x5a291b(0xdf)]['remoteJid'],{'text':'An\x20error\x20occurred\x20while\x20processing\x20your\x20command.','contextInfo':{'externalAdReply':{'showAdAttribution':![],'title':'','body':'','mediaType':0x2,'sourceUrl':_0x5a291b(0xa8),'thumbnail':null}}},{'quoted':_0x2ae3df});}}catch(_0x53560b){console[_0x5a291b(0xc8)](_0x5a291b(0xbf),_0x53560b);}}function a0_0x295b(){const _0x1ef525=['map','57720yzXNaf','isGroupOnly','admin_jids','Database','buffer','Error\x20getting\x20group\x20metadata:','You\x27ve\x20reached\x20the\x20maximum\x20number\x20of\x20commands\x20per\x20minute.\x20Please\x20wait\x20before\x20trying\x20again.','74XFQCbN','This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.','delete','conversation','usage','Error\x20loading\x20sudo\x20list:','You\x20need\x20to\x20be\x20an\x20admin\x20to\x20use\x20this\x20command.','slice','OWNER_NUMBERS','8849qNjnKB','execute','COMMAND_COOLDOWN_TIME_IN_MS','toString','isOwner','Ban\x20list\x20file\x20changed.\x20Reloading...','owner_jid','PREFIX','MAX_COMMANDS_PER_MINUTE','`\x20command.','log','count','path','includes','\x20more\x20second(s)\x20before\x20reusing\x20the\x20`','95HacENc','get','resetTime','https://files.catbox.moe/xdzljz.png','set','2277492uUBPLJ','trim','22492ZHpqnb','This\x20command\x20can\x20only\x20be\x20used\x20in\x20private\x20chats.','Error\x20executing\x20command\x20','Please\x20wait\x20','isPrivateOnly','⛔\x20*You\x20are\x20banned\x20from\x20using\x20this\x20bot.*','user','Sudo\x20list\x20file\x20changed.\x20Reloading...','Error\x20loading\x20ignore\x20list:','sendMessage','videoMessage','participant','1138929qVLyYM','reduce','watch','emoji','message','WORK_MODE','extendedTextMessage','Error\x20in\x20Command\x20Execute:','remoteJid','now','24rZnpAP','has','caption','fromMe','join','ignoreList.json','error','groupMetadata','endsWith','split','isAdminOnly','private','@g.us','10510PjdcDH','utf8','change','isOwnerOnly','@newsletter.whatsapp.com','banList.json','parse','48520CXTPZW','sudo.json','readFileSync','imageMessage','2934kXtdIG','./kordLoadCmd','toLowerCase','toFixed','Invalid\x20Usage','key','channelInfo','readMessages','371OjBvjZ'];a0_0x295b=function(){return _0x1ef525;};return a0_0x295b();}module['exports']={'kordCmdUpsert':kordCmdUpsert};