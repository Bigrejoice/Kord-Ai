function a0_0x3048(_0x421b47,_0x1b0c79){const _0x3809a7=a0_0x3809();return a0_0x3048=function(_0x304800,_0x31ce2a){_0x304800=_0x304800-0x91;let _0x119a09=_0x3809a7[_0x304800];return _0x119a09;},a0_0x3048(_0x421b47,_0x1b0c79);}const a0_0x4a1c88=a0_0x3048;(function(_0x3cfca5,_0x5201fc){const _0x21e937=a0_0x3048,_0x1afd2b=_0x3cfca5();while(!![]){try{const _0x142d8e=parseInt(_0x21e937(0x96))/0x1+parseInt(_0x21e937(0x91))/0x2*(parseInt(_0x21e937(0xb9))/0x3)+parseInt(_0x21e937(0xa2))/0x4+parseInt(_0x21e937(0xb3))/0x5*(-parseInt(_0x21e937(0x95))/0x6)+parseInt(_0x21e937(0xa8))/0x7*(parseInt(_0x21e937(0x97))/0x8)+parseInt(_0x21e937(0x99))/0x9+-parseInt(_0x21e937(0xa3))/0xa*(parseInt(_0x21e937(0x9b))/0xb);if(_0x142d8e===_0x5201fc)break;else _0x1afd2b['push'](_0x1afd2b['shift']());}catch(_0x624551){_0x1afd2b['push'](_0x1afd2b['shift']());}}}(a0_0x3809,0xb4f1e));function a0_0x3809(){const _0x561c7d=['❌\x20Please\x20provide\x20text\x20to\x20generate\x20a\x20neon\x20image.','❌\x20Error\x20fetching\x20the\x20image:\x20','5rYPIya','trim','exports','&apikey=','reply','buffer','32331owsHjE','unlink','246THUVwE','https://giftedapis.us.kg/api/ephoto360/makingneon?text=','gifted','join','5130738NpYfNK','181045bRpkkM','9128SmdrPU','length','6951402XWGzKC','Here\x20is\x20your\x20neon-style\x20image!','1133jROyjz','path','neon','Unknown\x20error','neon_image.jpg','writeFile','node-fetch','5740876ysKQNt','253370jCPEnT','image_url','ephoto360','success','message','3017apLNeC','❌\x20Error\x20downloading\x20the\x20image.','promises','❌\x20An\x20error\x20occurred\x20while\x20processing\x20your\x20request.\x20Please\x20try\x20again.','sendImage','error','temp','status','Generates\x20a\x20neon-style\x20image\x20from\x20the\x20provided\x20text\x20using\x20the\x20Ephoto360\x20API.'];a0_0x3809=function(){return _0x561c7d;};return a0_0x3809();}const fetch=require(a0_0x4a1c88(0xa1)),fs=require('fs'),path=require(a0_0x4a1c88(0x9c)),{promisify}=require('util'),writeFile=promisify(fs[a0_0x4a1c88(0xa0)]),unlink=promisify(fs[a0_0x4a1c88(0xba)]),mkdir=promisify(fs['mkdir']);module[a0_0x4a1c88(0xb5)]={'usage':[a0_0x4a1c88(0x9d)],'desc':a0_0x4a1c88(0xb0),'commandType':a0_0x4a1c88(0xa5),'isGroupOnly':![],'isAdminOnly':![],'isPrivateOnly':![],'emoji':'🖼️',async 'execute'(_0x2d7e38,_0x5dcf5a,_0x3d7d86){const _0x5729ec=a0_0x4a1c88;try{if(!_0x3d7d86[_0x5729ec(0x98)])return kord[_0x5729ec(0xb7)](_0x5dcf5a,_0x5729ec(0xb1));const _0x5e894b=_0x3d7d86[_0x5729ec(0x94)]('\x20');if(typeof _0x5e894b!=='string'||!_0x5e894b[_0x5729ec(0xb4)]())return kord[_0x5729ec(0xb7)](_0x5dcf5a,'❌\x20Invalid\x20text\x20input.');const _0xe1f844=encodeURIComponent(_0x5e894b),_0x4bad26='gifted',_0x41011e=_0x5729ec(0x92)+_0xe1f844+_0x5729ec(0xb6)+_0x4bad26,_0x33fa48=await fetch(_0x41011e),_0x58207e=await _0x33fa48['json']();if(_0x33fa48[_0x5729ec(0xaf)]!==0xc8||!_0x58207e[_0x5729ec(0xa6)])return kord['reply'](_0x5dcf5a,_0x5729ec(0xb2)+(_0x58207e[_0x5729ec(0xa7)]||_0x5729ec(0x9e)));const _0x251f5d=_0x58207e['result'][_0x5729ec(0x93)][_0x5729ec(0xa4)],_0x74f514=path[_0x5729ec(0x94)](__dirname,_0x5729ec(0xae));!fs['existsSync'](_0x74f514)&&await mkdir(_0x74f514);const _0x2ccad4=await fetch(_0x251f5d);if(!_0x2ccad4['ok'])return kord[_0x5729ec(0xb7)](_0x5dcf5a,_0x5729ec(0xa9));const _0x397404=path['join'](_0x74f514,_0x5729ec(0x9f)),_0xd52ed7=await _0x2ccad4[_0x5729ec(0xb8)]();await writeFile(_0x397404,_0xd52ed7);const _0x32b29d=_0x5729ec(0x9a);await kord[_0x5729ec(0xac)](_0x5dcf5a,await fs[_0x5729ec(0xaa)]['readFile'](_0x397404),_0x32b29d),await unlink(_0x397404);}catch(_0x492b7f){console[_0x5729ec(0xad)]('Error\x20executing\x20.neon\x20command:',_0x492b7f),await kord[_0x5729ec(0xb7)](_0x5dcf5a,_0x5729ec(0xab));}}};