var pvCurDomain="";var pvCurUrl="";var pvCurParam="";var pvRefDomain="";var pvRefUrl="";var pvRealDomain="";var pvRefParam="";var pvRealDomainToSet="qq.com";var pvGifUrl="http://pingfore.";var pvHotUrl="http://pinghot.";var pvDoc=document;var pgvImage;var pgvExtParam="";var pgvReserved1Param="";var pvUseCookie="";function pgvCircleQueue(a){this.initialize(a)}pgvCircleQueue.prototype={initialize:function(a){this.list=[];this.capacity=a+1;this.head=0;this.tail=0},push:function(b){if(b=="undefined"||b==""){return}var c=this.find(b);if(c==-1){this.list[this.head]=b;this.head=(this.head+1)%this.capacity;if(this.head==this.tail){this.tail=(this.tail+1)%this.capacity}}else{var a=(c+1)%this.capacity;while(a!=this.head){this.list[c]=this.list[a];c=a;a=(a+1)%this.capacity}this.list[c]=b}},join:function(a){if(this.head==this.tail){return new String()}var c=this.tail;var b=new String(this.list[c]);c=(c+1)%this.capacity;while(c!=this.head){b+=a+new String(this.list[c]);c=(c+1)%this.capacity}return b},size:function(){if(this.head>=this.tail){return this.head-this.tail}else{return this.head-this.tail+this.capacity}},set:function(f,c){var a=f.split(c);var d=a.length;for(var b=0;b<d;++b){this.push(a[b])}},find:function(a){var b=this.tail;while(b!=this.head){if(this.list[b]==a){return b}else{b=(b+1)%this.capacity}}return -1}};if(window!=top){try{pvDoc=top.document}catch(e){}}var pvLoc=pvDoc.location;var pvBody=pvDoc.body;var pvNone="-";var pvVersion="tcss.3.2";if(typeof(pvRepeatCount)=="undefined"){var pvRepeatCount=1}function pgvGetParameter(b,d){if(b&&d){var c=new RegExp("(\\?|#|&)"+b+"=([^&^#]*)(#|&|$)");var a=d.match(c);return !a?"":a[2]}return""}function pgvVoid(){return}function pgvGetCookieByName(c){var d=pvNone;var f=pvDoc.cookie.indexOf(c);var b=0,a=0;if(f!=-1){f+=c.length;b=pvDoc.cookie.indexOf(";",f);if(b==-1){b=pvDoc.cookie.length}a=pvDoc.cookie.indexOf("&",f);if(a!=-1){b=Math.min(b,a)}d=unescape(pvDoc.cookie.substring(f,b))}return d}function pgvRealSetCookie(a){pvDoc.cookie=a+";path=/;domain="+pvRealDomainToSet+";expires=Sun, 18 Jan 2038 00:00:00 GMT;"}function pgvRealDelCookie(a){pvDoc.cookie=a+";path=/;domain="+pvRealDomainToSet+";expires=Sun, 18 Jan 1970 00:00:00 GMT;"}function pgvGetCookieSetDomain(){var c=new Array();var f,a=0;var g=pvRealDomain.length;for(var b=0;b<g;b++){if(pvRealDomain.charAt(b)=="."){c[a]=b;a++}}var h=pvRealDomain.indexOf(".cn");var d=c.length;if(h!=-1){d--}if(d<1){f="qq.com"}else{if(d==1){f=pvRealDomain}else{f=pvRealDomain.substring(c[d-2]+1,pvRealDomain.length)}}return f}function pgvGetDomainByUrl(){var a=pvDoc.domain;if(pgvVirtualDomain!=pvNone&&pgvVirtualDomain!=""){a=pgvVirtualDomain}else{var d=pvDoc.URL.indexOf("://");if(d!=-1){var c=pvDoc.URL.substr(d+3,pvDoc.URL.length-d-3);var b=c.indexOf("/");if(b!=-1){a=c.substr(0,b)}}}return a}function pgvGetCurrentUrl(){var a="";if(pgvVirtualURL!=pvNone&&pgvVirtualURL!=""){a=pgvVirtualURL}else{a=escape(pvCurUrl);if(pvCurUrl==""&&pvLoc.pathname){pvCurUrl=a=escape(pvLoc.pathname);pvCurParam=escape(pvLoc.search.substr(1))}if(pgvSenseParam!=pvNone&&pgvSenseParam!=""){var b=pgvGetParameter(pgvSenseParam,pvDoc.URL);if(b!=pvNone&&b!=""){a+="_"+b}}}return a}function pgvGetDomainInfo(c,d){var a="",b="",f="";a=pvCurDomain;if(pvCurDomain==""){a=pgvGetDomainByUrl()}pvRealDomain=pvCurDomain=a;b=pgvGetCurrentUrl();f=pvNone;if(pgvVirtualTitle!=pvNone&&pgvVirtualTitle!=""){f=pgvVirtualTitle}else{if(pvDoc.title){f=pvDoc.title}}if(d){a+=".hot"}if(c&&c=="title"){return("dm="+a+"&url="+escape(b))}else{return("dm="+a+"&url="+escape(b)+"&tt="+escape(f))}}function pgvGetRefInfo(){var g=refurl=pvNone,f=pvDoc.referrer;if(pgvStatIframe||pvUseCookie=="true"){f=pgvGetCookieByName("pgvReferrer=");var b=pvDoc.URL;var a=b.indexOf("?");if(a!=-1){b=b.substr(0,a)}pgvSetSessionCookie("pgvReferrer",b)}else{if(pvUseCookie=="set"&&pvRefDomain!=""&&pvRefUrl!=""){var b=(("https:"==document.location.protocol)?"https://":"http://");b+=pvRefDomain+pvRefUrl;pgvSetSessionCookie("pgvReferrer",b)}else{if(pvUseCookie=="set"&&(pgvVirtualDomain!=pvNone||pgvVirtualURL!=pvNone)){var b=(("https:"==document.location.protocol)?"https://":"http://");b+=pgvVirtualDomain==pvNone?pvCurDomain:pgvVirtualDomain;b+=pgvVirtualURL==pvNone?pvCurUrl:pgvVirtualURL;pgvSetSessionCookie("pgvReferrer",b)}else{if(pvUseCookie=="get"){var n=pgvGetCookieByName("pgvReferrer=");if(n!=""){f=n}pgvSetSessionCookie("pgvReferrer","")}else{pgvSetSessionCookie("pgvReferrer","")}}}}var h="ADTAG";if(pgvTagParamName!=""&&pgvTagParamName!=pvNone){h=pgvTagParamName}var i=pgvGetParameter(h,pvDoc.URL);if(i!=pvNone&&i!=""){g="ADTAG";refurl=i}var l=f.indexOf("://");if(l!=-1&&g==pvNone){var k=f.substr(l+3,f.length);g=k;var l=k.indexOf("/");if(l!=-1){g=k.substr(0,l);var j=k.substr(l,k.length);refurl=j;l=j.indexOf("?");if(l!=-1){pvRefParam=escape(j.substr(l+1));var m=new RegExp("^(.*)(\\?.*)$");var d=j.match(m);if(d){refurl=d[1]}}l=refurl.indexOf("#");if(l!=-1){var o=new RegExp("^(.*)(\\#.*)$");var c=refurl.match(o);if(c){refurl=c[1]}}}}if(pvRefDomain!=""&&pvUseCookie=="false"){g=pvRefDomain}if(pvRefUrl!=""&&pvUseCookie=="false"){refurl=pvRefUrl}pvRealReferInfo=g;pvRefDomain=g;pvRefUrl=escape(refurl);return("&rdm="+g+"&rurl="+escape(refurl))}function pgvGetUserInfo(){try{if(!navigator.cookieEnabled){return"&pvid=NoCookie"}}catch(b){return"&pvid=NoCookie"}var a=pgvGetCookieByName("pgv_pvid=");pgvSetCookies(a);pvRealPvid=a;pvUserid=(pvUserid=="")?pvRealPvid:pvUserid;return"&pvid="+a}function pgvSetCookies(c){var d=c;if(c==pvNone){var b=new Date();var a=b.getUTCMilliseconds();d=(Math.round(Math.random()*2147483647)*a)%10000000000;pvUserid=d}pvRealDomainToSet=pgvGetCookieSetDomain();pgvRealSetCookie("pgv_pvid="+d)}function pgvGetMainEnvInfo(){var b="";try{var f=scl=lang=flash=cpuc=pf=ce=tz=pvNone,c=0;var g=navigator;if(self.screen){f=screen.width+"x"+screen.height;scl=screen.colorDepth+"-bit"}if(g.language){lang=g.language.toLowerCase()}else{if(g.browserLanguage){lang=g.browserLanguage.toLowerCase()}}c=g.javaEnabled()?1:0;cpuc=g.cpuClass;pf=g.platform;var a=new Date();tz=a.getTimezoneOffset()/60;b="&scr="+f+"&scl="+scl+"&lang="+lang+"&java="+c+"&cc="+cpuc+"&pf="+pf+"&tz="+tz}catch(d){}finally{return b}}function pgvGetExtendEnvInfo(){var c="";try{var b=pgvGetCookieByName("pgv_flv=");if(b==pvNone){c+="&flash="+pgvFlashInfo()}var g=pvLoc.href;var d="N";if(pvBody.addBehavior&&pvBody.isHomePage){pvBody.addBehavior("#default#homePage");d=pvBody.isHomePage(g)?"Y":"N"}if(d=="Y"){c+="&hp=Y"}var a=pvNone;if(pvBody.addBehavior){pvBody.addBehavior("#default#clientCaps");var a=pvBody.connectionType}c+="&ct="+a}catch(f){}finally{return c}}function pgvGetEnvInfo(){return(pgvGetMainEnvInfo()+pgvGetExtendEnvInfo())}function pgvFlashInfo(){var f=pvNone,n=navigator;try{var nplugins=n.plugins;var npluginsLen=nplugins.length;if(nplugins&&npluginsLen){for(var i=0;i<npluginsLen;i++){if(nplugins[i].name.indexOf("Shockwave Flash")!=-1){f=nplugins[i].description.split("Shockwave Flash ")[1];break}}}else{if(window.ActiveXObject){for(var i=10;i>=2;i--){try{var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+i+"');");if(fl){f=i+".0";break}}catch(e){}}}}pgvRealSetCookie("pgv_flv="+f)}catch(e){}return f}function pgvSendInfo(a){pgvImage=new Image(1,1);pgvImage.src=a}function pgvGenImageUrl(){var a=pgvGetDomainInfo();a+=pgvGetRefInfo();a+=pgvGetUserInfo();a+=pgvGetEnvInfo();a+="&vs="+pvVersion;a=pvGifUrl+pgvGetCookieSetDomain()+"/pingd?"+a;return a}function pgvGetCstm(){var a=pvDoc.domain;if(pvCurDomain!=""){a=pvCurDomain}return"&cstm="+a.replace(/\./g,"_")+"_"+pvCSTM}var pvRealReferInfo=pvNone;var pvCSTM="";var pvRealPvid=pvNone;var pvUserid="";function initGlobalVariable(a){if(a){if(a.statIframe){pgvStatIframe=a.statIframe;pgvInitStatIframe(a.statIframe)}if(a.senseParam){pgvSenseParam=a.senseParam}if(a.tagParamName){pgvTagParamName=a.tagParamName}if(a.virtualURL){pgvVirtualURL=a.virtualURL}if(a.virtualDomain){pgvVirtualDomain=a.virtualDomain}if(a.virtualTitle){pgvVirtualTitle=escape(a.virtualTitle)}if(a.sessionSpan){pgvSessionSpan=a.sessionSpan}if(a.originalReferer){pgvOriginalReferer=a.originalReferer}if(a.extParam){pgvExtParam=a.extParam}if(a.reserved1Param){pgvReserved1Param=a.reserved1Param}if(a.virtualRefDomain){pvRefDomain=a.virtualRefDomain}if(a.virtualRefURL){pvRefUrl=a.virtualRefURL}if(a.useCookie){pvUseCookie=a.useCookie}}}function pgvMain(b,f){try{var d=new Date();var a=d.getTime();initGlobalVariable(f);if(pvRepeatCount==1){pvRepeatCount=2}else{return}pgvInitSessionCookie();var h=pgvGenImageUrl();if(pvCSTM&&pvCSTM!=""){h+=pgvGetCstm()}if(b&&b=="return_url"){return h}pgvSetSsIdCookie();h+=pgvPathTrace(b,f);pgvFlushSessionCookies();if(pgvOriginalReferer!=""){h+="&or="+pgvOriginalReferer}d=new Date();var c=d.getTime();if(pgvExtParam==""){h+="&ext="+escape((c-a))}else{h+="&ext="+escape(pgvExtParam+"|"+(c-a))}h+="&reserved1="+escape(pgvReserved1Param);h+="&rand="+Math.round(Math.random()*100000);pgvSendInfo(h)}catch(g){}}var pgvStatIframe=false;var pgvSenseParam=pvNone;var pgvTagParamName=pvNone;var pgvVirtualURL=pvNone;var pgvVirtualDomain=pvNone;var pgvVirtualTitle=pvNone;var pgvSessionSpan=0;var pgvOriginalReferer="";function pgvInitStatIframe(a){if(a&&a==true){pvDoc=document;pvLoc=pvDoc.location;pvBody=pvDoc.body}else{pvDoc=document;if(window!=top){try{pvDoc=top.document}catch(b){}}pvLoc=pvDoc.location;pvBody=pvDoc.body}}var pvSCA=null;var pvSCK=null;var pvSCO=null;function pgvInitSessionCookie(){pvSCA=new Array();pvSCK=new Array();pvSCO=new Object();var a=pvDoc.cookie.indexOf("pgv_info=");if(a==-1){return}a+=9;var c=pvDoc.cookie.indexOf(";",a);if(c==-1){c=pvDoc.cookie.length}var m=unescape(pvDoc.cookie.substring(a,c));var g=m.split("&");var l=g.length;for(var f=0;f<l;f++){var k=g[f].split("=");pvSCO[k[0]]=k[1];var h=false;var b=pvSCK.length;for(var d=0;d<b;d++){if(k[0]==pvSCK[d]){h=true;break}}if(!h){pvSCK.push(k[0])}}}function pgvSetSessionCookie(b,f){pvSCO[b]=f;var d=false;var c=pvSCK.length;for(var a=0;a<c;a++){if(b==pvSCK[a]){d=true;break}}if(!d){pvSCK.push(b)}}function pgvFlushSessionCookies(){if(pgvSessionSpan&&pgvSessionSpan!=0){var a=new Date();a.setTime(a.getTime()+(pgvSessionSpan*60*1000))}var f=pvSCK.length;for(var d=0;d<f;d++){pvSCA.push(pvSCK[d]+"="+pvSCO[pvSCK[d]])}var c="";var b=pvSCA.length;for(var d=0;d<b;d++){c+=pvSCA[d];if(d!=b-1){c+="&"}}var g="pgv_info="+c;if(a){g+="; expires="+a.toGMTString()}g+="; path=/; domain="+pgvGetCookieSetDomain()+";";pvDoc.cookie=g}function pgvSetSsIdCookie(){var c=pgvGetCookieByName("ssid=");if(c==pvNone){var b=new Date();var a=b.getUTCMilliseconds();c="s"+(Math.round(Math.random()*2147483647)*a)%10000000000}pgvSetSessionCookie("ssid",c);return c}function pgvPathTrace(c,m){var b="";if(c!="pathtrace"){return b}if(m){if(m.pathStart){var n=pgvGetCookieByName("SPATHTAG=");var d="";var a=1;var j;if(m.spQueueLen!=null){a=Math.max(1,m.spQueueLen)}j=new pgvCircleQueue(a);if(n=="-"){n=""}j.set(n,"!");if(n==""||n==pvNone||n==pvNone+pvNone||typeof(m.override)=="undefined"||m.override==true){var r=true;if(pvRefDomain=="ADTAG"){d=pvRefUrl}else{if(m.useRefUrl){if(m.careSameDomainRef||pvCurDomain!=pvRefDomain){d=pvRefDomain+pvRefUrl}else{r=false}}}if(r){if(d==""||d==pvNone||d==pvNone+pvNone){d="NONE_REF"}d=pvCurDomain+pvCurUrl+"|"+d;if(d!=null&&d!=""&&d!=pvNone){var q;j.push(d);q=j.join("!");pgvSetSessionCookie("SPATHTAG",q);b+="&spt="+d}}}}if(m.keyPathTag&&m.nodeIndex){var p=pvNone;var f=pvNone;var o=pvNone;p=m.keyPathTag;f=m.nodeIndex;var k=p.split("|");if(m.nodeName){o=m.nodeName}else{o=escape(pgvGetCurrentUrl());if(k.length>1){var l=o;for(var h=1;h<k.length;h++){o+="|"+l}}}var g=o.split("|");b+="&kpt="+p+"&ni="+f+"&nn="+o;pgvSetSessionCookie("KEYPATHTAG",p)}if(m.endPath){b+="&ep=true"}}return b}function pgvWatchClick(g){try{initGlobalVariable(g);var a=window.event.srcElement;if(a.tagName=="A"||a.tagName=="IMG"||a.tagName=="INPUT"||a.tagName=="BUTTON"||a.tagName=="SELECT"){var d="";switch(a.tagName){case"A":d="<A href="+a.href+">"+a.innerHTML+"</a>";break;case"IMG":d="<IMG src="+a.src+">";break;case"INPUT":d="<INPUT type="+a.type+" value="+a.value+">";break;case"BUTTON":d="<BUTTON>"+a.innerText+"</BUTTON>";break;case"SELECT":d="SELECT";break}var h=pgvGetElementPos(a);if(g&&g.coordinateId){var b=pgvGetElementPos(document.getElementById(g.coordinateId));h.x-=b.x}var c=pgvGetDomainInfo("",true);c+="&hottag="+escape(d);c+="&hotx="+h.x;c+="&hoty="+h.y;c+="&rand="+Math.round(Math.random()*100000);c=pvHotUrl+pgvGetCookieSetDomain()+"/pingd?"+c;pgvSendInfo(c)}}catch(f){}}function pgvSendClick(b){if(b&&b.hottag){initGlobalVariable(b);var a=pgvGetDomainInfo("",true);a+="&hottag="+escape(b.hottag);a+="&hotx=9999";a+="&hoty=9999";a+="&rand="+Math.round(Math.random()*100000);a=pvHotUrl+pgvGetCookieSetDomain()+"/pingd?"+a;pgvSendInfo(a)}}function pgvGetElementPos(d){var a=navigator.userAgent.toLowerCase();var b=(a.indexOf("opera")!=-1);var f=(a.indexOf("msie")!=-1&&!b);if(d.parentNode===null||d.style.display=="none"){return false}var n=null;var m=[];var j;if(d.getBoundingClientRect){j=d.getBoundingClientRect();var c=Math.max(document.documentElement.scrollTop,document.body.scrollTop);var g=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);var i=document.body.clientTop;var k=document.body.clientLeft;return{x:j.left+g-k,y:j.top+c-i}}else{if(document.getBoxObjectFor){j=document.getBoxObjectFor(d);var l=(d.style.borderLeftWidth)?parseInt(d.style.borderLeftWidth):0;var h=(d.style.borderTopWidth)?parseInt(d.style.borderTopWidth):0;m=[j.x-l,j.y-h]}else{m=[d.offsetLeft,d.offsetTop];n=d.offsetParent;if(n!=d){while(n){m[0]+=n.offsetLeft;m[1]+=n.offsetTop;n=n.offsetParent}}if(a.indexOf("opera")!=-1||(a.indexOf("safari")!=-1&&d.style.position=="absolute")){m[0]-=document.body.offsetLeft;m[1]-=document.body.offsetTop}}}if(d.parentNode){n=d.parentNode}else{n=null}while(n&&n.tagName!="BODY"&&n.tagName!="HTML"){m[0]-=n.scrollLeft;m[1]-=n.scrollTop;if(n.parentNode){n=n.parentNode}else{n=null}}return{x:m[0],y:m[1]}};/*  |xGv00|3f2c3a091a65e24e46bfb45305084416 */
