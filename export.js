const _0x45b33b=_0x51c8;(function(_0x391d17,_0x474a1f){const _0x532f73=_0x51c8,_0x5c7620=_0x391d17();while(!![]){try{const _0x49c21e=parseInt(_0x532f73(0x1c9))/0x1*(-parseInt(_0x532f73(0x1cd))/0x2)+-parseInt(_0x532f73(0x190))/0x3+-parseInt(_0x532f73(0x1b4))/0x4*(-parseInt(_0x532f73(0x194))/0x5)+parseInt(_0x532f73(0x1c6))/0x6*(parseInt(_0x532f73(0x19d))/0x7)+parseInt(_0x532f73(0x17d))/0x8+parseInt(_0x532f73(0x175))/0x9*(-parseInt(_0x532f73(0x1ca))/0xa)+parseInt(_0x532f73(0x19a))/0xb;if(_0x49c21e===_0x474a1f)break;else _0x5c7620['push'](_0x5c7620['shift']());}catch(_0x152982){_0x5c7620['push'](_0x5c7620['shift']());}}}(_0x464d,0x27bc7));const MODEL_URL=_0x45b33b(0x1a0);let result,numbers=new Array();var lottoNumer=[],luckyNumber=[];let generateNumberListFlag=![];var intervalEvent=Array['from'](Array(0xa),()=>new Array(0x6)[_0x45b33b(0x187)](0x0)),stopTime=Array[_0x45b33b(0x1a3)](Array(0xa),()=>new Array(0x6)[_0x45b33b(0x187)](0x0));let learningCount=0x3ee,requestCount=0x3ef;var color=[_0x45b33b(0x1bc),_0x45b33b(0x1b0),_0x45b33b(0x172),_0x45b33b(0x178),'#b0d840','#aaa'];$(document)[_0x45b33b(0x1ba)](function(){const _0x5f2fa1=_0x45b33b;var _0x2b337d=document['getElementById'](_0x5f2fa1(0x1aa));document['querySelector']('#title\x20p\x20span')[_0x5f2fa1(0x1a8)]='('+learningCount+_0x5f2fa1(0x199),_0x2b337d[_0x5f2fa1(0x1a4)]=0x1c2,_0x2b337d['height']=0x2c1;var _0x5aaa9f=_0x2b337d['getContext']('2d');for(let _0x59f4f5=0x0;_0x59f4f5<0xa;_0x59f4f5++){_0x3362b5(_0x59f4f5);}function _0x3362b5(_0x3a7dbd){const _0x175aac=_0x5f2fa1;for(var _0x18e601=0x0;_0x18e601<0x6;_0x18e601++){_0x5aaa9f[_0x175aac(0x17a)](),_0x5aaa9f[_0x175aac(0x1a6)]=color[_0x18e601],_0x5aaa9f['arc'](0x23+_0x18e601*0x46,0x28+_0x3a7dbd*0x46,0x1e,0x0,0x2*Math['PI'],!![]),_0x5aaa9f['fill'](),_0x5aaa9f[_0x175aac(0x1a5)]=_0x175aac(0x198),_0x5aaa9f[_0x175aac(0x1ab)](),_0x5aaa9f['fillStyle']=_0x175aac(0x1b5),_0x5aaa9f[_0x175aac(0x17e)]='bold\x2021pt\x20sans-serif',_0x5aaa9f[_0x175aac(0x1b6)]('?',0x1d+_0x18e601*0x46,0x32+_0x3a7dbd*0x46);}}function _0x278f97(_0x16fafa,_0x3e8d7d,_0x3bb02c){const _0x2bb598=_0x5f2fa1;var _0x24a1c2='';if(_0x3e8d7d<=0xa)_0x24a1c2=color[0x0];else{if(_0x3e8d7d<=0x14)_0x24a1c2=color[0x1];else{if(_0x3e8d7d<=0x1e)_0x24a1c2=color[0x2];else{if(_0x3e8d7d<=0x28)_0x24a1c2=color[0x3];else _0x24a1c2=color[0x4];}}}var _0x10d6e7=_0x3e8d7d<0xa?0x1b+_0x16fafa*0x46:0x12+_0x16fafa*0x46;_0x5aaa9f['beginPath'](),_0x5aaa9f[_0x2bb598(0x1a6)]=_0x24a1c2,_0x5aaa9f[_0x2bb598(0x1b7)](0x23+_0x16fafa*0x46,0x28+_0x3bb02c*0x46,0x1e,0x0,0x2*Math['PI'],!![]),_0x5aaa9f[_0x2bb598(0x187)](),_0x5aaa9f[_0x2bb598(0x1a5)]='#000000',_0x5aaa9f[_0x2bb598(0x1ab)](),_0x5aaa9f[_0x2bb598(0x18e)](),_0x5aaa9f['fillStyle']=_0x2bb598(0x1b5),_0x5aaa9f['font']=_0x2bb598(0x1bd),_0x5aaa9f[_0x2bb598(0x1b6)](_0x3e8d7d,_0x10d6e7,0x32+_0x3bb02c*0x46);}function _0x483079(){const _0x2f9dfd=_0x5f2fa1;setUseStateButton(![]),$(_0x2f9dfd(0x17c))[_0x2f9dfd(0x1bb)](_0x2f9dfd(0x1a7)),numbers=new Array(),tf[_0x2f9dfd(0x1b3)](MODEL_URL,![])['then'](_0x3ae296=>{const _0x16900c=_0x2f9dfd;lastWinNumber=[0x8,0xb,0xf,0x10,0x11,0x25,0x24];let _0x300d1f=numbers2Ohbin(lastWinNumber);const _0x3d6740=tf['tensor3d'](_0x300d1f,[0x1,0x1,0x2d]);result=_0x3ae296['predict'](_0x3d6740);for(i in new Array(0xa)[_0x16900c(0x187)](0x1)){numbers[_0x16900c(0x183)](getNumbers(result[_0x16900c(0x1be)]()[0x0]));}numbers[_0x16900c(0x19b)]();let _0x58695b='';$(_0x16900c(0x17c))['addClass'](_0x16900c(0x1a7));for(let _0x4c05ac in numbers){_0x58695b+=parseInt(_0x4c05ac)+0x1+'번\x20:\x20'+numbers[_0x4c05ac]+'\x0a';}luckyNumber=numbers;for(let _0x495064 in luckyNumber){_0x273d98(_0x495064,_0x58695b);}});}function _0x273d98(_0x18f92f,_0x1d91d1){for(let _0x782e1a in intervalEvent[_0x18f92f]){intervalEvent[_0x18f92f][_0x782e1a]=setInterval(function(){_0x54e1dd(_0x782e1a,_0x18f92f,_0x1d91d1);},0x32);}}function _0x54e1dd(_0x46bdcf,_0x459348,_0x56ae8e){const _0x17b167=_0x5f2fa1;var _0x483bef=Math[_0x17b167(0x1c4)](Math['random']()*0x2d)+0x1;_0x278f97(parseInt(_0x46bdcf),_0x483bef,parseInt(_0x459348)),stopTime[_0x459348][_0x46bdcf]>=0x14+0x5*_0x46bdcf*_0x459348&&(_0x278f97(_0x46bdcf,luckyNumber[_0x459348][_0x46bdcf],_0x459348),clearInterval(intervalEvent[_0x459348][_0x46bdcf]),stopTime[_0x459348][_0x46bdcf]=0x0,_0x46bdcf==0x5&&_0x459348==0x9&&setUseStateButton(!![],_0x56ae8e)),stopTime[_0x459348][_0x46bdcf]++;}$('#btnNumGen')['on'](_0x5f2fa1(0x1ae),_0x483079),$('#btnCopy')['on'](_0x5f2fa1(0x1ae),copy_to_clipboard),$(_0x5f2fa1(0x1ce))['on']('click',showLogicContent);});function _0x464d(){const _0x59c9f4=['1311112pUhKkZ','font','sendCustom','innerText','lottoTxt','addClass','push','log','복사됨!','resumeTimer','fill','random','.kakao-layer','infos','uploadImage','then','btnContent','closePath','https://developers.kakao.com','506352swZnWq','append','Link','charCodeAt','45ulixTY','stopTimer','fire','original','#000000','회까지\x20딥러닝)','3622806iCtrDY','sort','match','85323sijcEb','toDataURL','disabled','/model/model.json','번호\x20예측부터\x20\x5cn눌러주세요','mouseleave','from','width','strokeStyle','fillStyle','hidden','textContent','feed','lotto','stroke','mixin','btnNumGen','click','모든회차를\x20딥러닝한\x20모델','#69c8f2','btnCopy','https://deeplotto.netlify.app','loadLayersModel','68340bNPbyi','#ffffff','fillText','arc','clipboard','sendDefault','ready','removeClass','#fbc400','bold\x2022pt\x20sans-serif','arraySync','a.png','includes','url','번호복사가\x20완료되었습니다.','나도하러가기','floor','disalbed','30ZDluux','writeText','splice','1696zWsghD','60kaYAyq','concat','딥러닝\x20로또번호\x20예측서비스','374QeoGyu','#btnContent','image/png','다시\x20받기','#ff7272','setAttribute','mouseenter','88875xCNXVS','removeAttribute','addEventListener','#aaa','length','beginPath','getElementById','.js-layer'];_0x464d=function(){return _0x59c9f4;};return _0x464d();}function dataURLtoFile(_0x6e8fc1,_0x42f0f8){const _0x131c40=_0x45b33b;var _0x50bb9b=_0x6e8fc1['split'](','),_0x2011a2=_0x50bb9b[0x0][_0x131c40(0x19c)](/:(.*?);/)[0x1],_0xe551cc=atob(_0x50bb9b[0x1]),_0x289e3a=_0xe551cc['length'],_0x3ed2f2=new Uint8Array(_0x289e3a);while(_0x289e3a--){_0x3ed2f2[_0x289e3a]=_0xe551cc[_0x131c40(0x193)](_0x289e3a);}return new File([_0x3ed2f2],_0x42f0f8,{'type':_0x2011a2});}function _0x51c8(_0x679355,_0x55bb5c){const _0x464d2b=_0x464d();return _0x51c8=function(_0x51c87c,_0x4a2105){_0x51c87c=_0x51c87c-0x171;let _0x232293=_0x464d2b[_0x51c87c];return _0x232293;},_0x51c8(_0x679355,_0x55bb5c);}function showLogicContent(){const _0x307606=_0x45b33b;if(checkGenerateNumber())return;let _0x4a4f39=document[_0x307606(0x17b)](_0x307606(0x1aa))[_0x307606(0x19e)](),_0x200e7e=dataURLtoFile(_0x4a4f39,_0x307606(0x1bf)),_0x59d91b=[_0x200e7e];$(_0x307606(0x189))[_0x307606(0x1bb)](_0x307606(0x1a7)),Kakao[_0x307606(0x192)][_0x307606(0x18b)]({'file':_0x59d91b})['then'](function(_0x506f14){const _0x43f16d=_0x307606;Kakao[_0x43f16d(0x192)][_0x43f16d(0x17f)]({'templateId':0x11526,'templateArgs':{'${MainImage}':_0x506f14[_0x43f16d(0x18a)][_0x43f16d(0x197)][_0x43f16d(0x1c1)],'${count}':requestCount,'${learning}':learningCount}}),$(_0x43f16d(0x189))[_0x43f16d(0x182)](_0x43f16d(0x1a7));});}function showLogicContent2(){const _0x44399d=_0x45b33b;if(checkGenerateNumber())return;let _0x31d0f0=document['getElementById'](_0x44399d(0x1aa))['toDataURL'](),_0x2acbb4=dataURLtoFile(_0x31d0f0,_0x44399d(0x1bf)),_0x17af96=[_0x2acbb4];$(_0x44399d(0x189))[_0x44399d(0x1bb)]('hidden'),Kakao['Link'][_0x44399d(0x18b)]({'file':_0x17af96})[_0x44399d(0x18c)](function(_0xf1380b){const _0x2e3f8f=_0x44399d;console[_0x2e3f8f(0x184)](_0xf1380b[_0x2e3f8f(0x18a)][_0x2e3f8f(0x197)][_0x2e3f8f(0x1c1)]),Kakao[_0x2e3f8f(0x192)][_0x2e3f8f(0x1b9)]({'objectType':_0x2e3f8f(0x1a9),'content':{'title':_0x2e3f8f(0x1cc),'description':_0x2e3f8f(0x1af),'imageUrl':_0xf1380b[_0x2e3f8f(0x18a)][_0x2e3f8f(0x197)][_0x2e3f8f(0x1c1)],'link':{'mobileWebUrl':_0x2e3f8f(0x18f),'androidExecutionParams':'test'}},'buttons':[{'title':_0x2e3f8f(0x1c3),'link':{'mobileWebUrl':_0x2e3f8f(0x1b2)}}]})[_0x2e3f8f(0x18c)](function(){const _0x5c134b=_0x2e3f8f;$(_0x5c134b(0x189))['addClass']('hidden');});});}function setUseStateButton(_0x5842cc,_0xd3150f){const _0x3e93e0=_0x45b33b;_0x5842cc?(document[_0x3e93e0(0x17b)](_0x3e93e0(0x1ad))[_0x3e93e0(0x176)]('disabled'),document[_0x3e93e0(0x17b)](_0x3e93e0(0x1b1))[_0x3e93e0(0x176)]('disabled'),document['getElementById'](_0x3e93e0(0x18d))[_0x3e93e0(0x176)](_0x3e93e0(0x19f)),document[_0x3e93e0(0x17b)](_0x3e93e0(0x1ad))[_0x3e93e0(0x180)]=_0x3e93e0(0x171),document[_0x3e93e0(0x17b)](_0x3e93e0(0x181))[_0x3e93e0(0x1a8)]=_0xd3150f,generateNumberListFlag=!![]):(document[_0x3e93e0(0x17b)](_0x3e93e0(0x1ad))['setAttribute'](_0x3e93e0(0x19f),_0x3e93e0(0x1c5)),document[_0x3e93e0(0x17b)](_0x3e93e0(0x1b1))[_0x3e93e0(0x173)](_0x3e93e0(0x19f),'disalbed'),document['getElementById'](_0x3e93e0(0x18d))[_0x3e93e0(0x173)]('disabled',_0x3e93e0(0x1c5)),document['getElementById'](_0x3e93e0(0x1ad))[_0x3e93e0(0x180)]='생성\x20중',generateNumberListFlag=![]);}function makeBlob(){const _0x1d7f3b=_0x45b33b;let _0xfb9a1=document[_0x1d7f3b(0x17b)]('lotto')[_0x1d7f3b(0x19e)]();var _0x263357=atob(_0xfb9a1['split'](',')[0x1]),_0x27b35c=[];for(var _0x495c63=0x0;_0x495c63<_0x263357['length'];_0x495c63++){_0x27b35c['push'](_0x263357[_0x1d7f3b(0x193)](_0x495c63));}var _0x4aaf0d=new Blob([new Uint8Array(_0x27b35c)],{'type':_0x1d7f3b(0x1cf)}),_0x1419a3=new FormData();_0x1419a3[_0x1d7f3b(0x191)]('file',_0x4aaf0d),console[_0x1d7f3b(0x184)](_0xfb9a1);}function getNumbers(_0x8a7eee){const _0x36d435=_0x45b33b;let _0x521402=[],_0x223ab4,_0x47200d;for(let _0x32401c in _0x8a7eee){ballCount=parseInt(_0x8a7eee[_0x32401c]*0x64+0x1),_0x521402[_0x36d435(0x183)](ballCount);}let _0x48eeb4=0x0,_0x2dd26b=findMaxValue(_0x521402),_0x40b3aa=new Array();while(0x1){if(_0x40b3aa[_0x36d435(0x179)]==0x6)break;ball_index=Math[_0x36d435(0x1c4)](Math[_0x36d435(0x188)]()*_0x2dd26b[_0x36d435(0x179)]);let _0x18a585=_0x2dd26b[ball_index];!_0x40b3aa['includes'](_0x18a585)&&_0x18a585!=0x0&&_0x40b3aa[_0x36d435(0x183)](_0x18a585);}return _0x40b3aa['sort']((_0x37e8ad,_0x34866c)=>{return _0x37e8ad-_0x34866c;}),_0x40b3aa;}function getNumbers2(_0x3e71a1){const _0x2e4927=_0x45b33b;let _0x5a1aca=[],_0xf807f6,_0x354645;for(let _0x46f649=0x0;_0x46f649<0x2d;_0x46f649++){ballCount=parseInt(_0x3e71a1[_0x46f649]*0x64+0x1);let _0x465950=new Array(_0xf807f6)[_0x2e4927(0x187)](_0x46f649+0x1);_0x5a1aca[_0x2e4927(0x183)](_0x465950);}for(let _0x5afe40 in _0x5a1aca){_0x5afe40==0x0?tempResult=new Array()[_0x2e4927(0x1cb)](ball_box[_0x5afe40]):tempResult=new Array()[_0x2e4927(0x1cb)](tempResult,_0x5a1aca[_0x5afe40]);}let _0x109dd6=new Array();while(0x1){if(_0x109dd6['length']==0x6)break;ballIndex=Math[_0x2e4927(0x1c4)](Math[_0x2e4927(0x188)]()*tempResult[_0x2e4927(0x179)]);let _0xb74d39=tempResult[ballIndex];!_0x109dd6[_0x2e4927(0x1c0)](_0xb74d39)&&_0xb74d39!=0x0&&_0x109dd6[_0x2e4927(0x183)](_0xb74d39);}return selected_ball[_0x2e4927(0x19b)]((_0x45f2b4,_0x4de55b)=>{return _0x45f2b4-_0x4de55b;}),selected_ball;}function numbers2Ohbin(_0x3a32b4){const _0x1f8693=_0x45b33b;let _0x541a24=new Array(0x2d)[_0x1f8693(0x187)](0x0);for(let _0x36e691 in _0x3a32b4){_0x541a24[_0x3a32b4[_0x36e691]-0x1]=0x1;}return _0x541a24;}function ohbin2Numbers(_0x3f2f65){const _0x2e5d92=_0x45b33b;numbers=new Array();for(let _0x54ea8f in _0x3f2f65){_0x3f2f65[_0x54ea8f]==0x1&&numbers[_0x2e5d92(0x183)](parseInt(_0x54ea8f)+0x1);}return numbers;}function displayNumberList(_0x42a83e){for(let _0x466016 in _0x42a83e){console['log'](parseInt(_0x466016)+0x1+'번째\x20당첨번호\x20:\x20'+_0x42a83e[_0x466016]);}}function findMaxValue(_0x26d930){const _0xfc79d0=_0x45b33b;let _0x20f5dc=[];for(let _0x30f564 in _0x26d930){_0x26d930[_0x30f564]!=0x1&&_0x20f5dc[_0xfc79d0(0x183)](_0x30f564);}return _0x20f5dc['splice'](0x0,0x1),_0x20f5dc;}function findMaxTenValue(_0x1c934b){const _0x272825=_0x45b33b;let _0x58c445=[],_0x1ef7cd,_0x40d7d8;while(0x1){if(_0x58c445[_0x272825(0x179)]==0xf)break;for(let _0x54cee6 in _0x1c934b){_0x1ef7cd<_0x1c934b[_0x54cee6]&&(_0x1ef7cd=_0x1c934b[_0x54cee6],_0x40d7d8=_0x54cee6);}_0x58c445[_0x272825(0x183)](_0x40d7d8),_0x1c934b[_0x272825(0x1c8)](_0x40d7d8,0x1),_0x40d7d8=0x0,_0x1ef7cd=0x0;}return _0x58c445[_0x272825(0x1c8)](0x0,0x1),_0x58c445;}function copy_to_clipboard(){const _0x353ba5=_0x45b33b;if(checkGenerateNumber())return;var _0x3cbde1=document[_0x353ba5(0x17b)](_0x353ba5(0x181)),_0x372468=document['getElementById']('btnCopy');navigator[_0x353ba5(0x1b8)][_0x353ba5(0x1c7)](_0x3cbde1[_0x353ba5(0x1a8)]);if(_0x372468[_0x353ba5(0x1a8)]!==_0x353ba5(0x185)){const _0xd65f0d=_0x372468['textContent'];_0x372468['textContent']='복사됨!',setTimeout(()=>{_0x372468['textContent']=_0xd65f0d;},0x3e8);}const _0x1f1fae=Swal[_0x353ba5(0x1ac)]({'toast':!![],'position':'center-center','showConfirmButton':![],'timer':0x5dc,'timerProgressBar':!![],'didOpen':_0x1e454e=>{const _0x212577=_0x353ba5;_0x1e454e[_0x212577(0x177)](_0x212577(0x174),Swal[_0x212577(0x195)]),_0x1e454e[_0x212577(0x177)](_0x212577(0x1a2),Swal[_0x212577(0x186)]);}});_0x1f1fae[_0x353ba5(0x196)]({'icon':'success','title':_0x353ba5(0x1c2)});}function checkGenerateNumber(){const _0x5d3767=_0x45b33b;if(!generateNumberListFlag)return Swal[_0x5d3767(0x196)]({'icon':'warning','title':_0x5d3767(0x1a1),'text':'예측된\x20당첨번호를\x20받은\x20후에\x20가능합니다.'}),!![];}