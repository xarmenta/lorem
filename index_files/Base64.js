/*! updated; 02-27-2018 04:46 PM **/


Modulr.define("core.plugins:Base64",["require"],function(require){var _keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",App=function(){};return App.prototype.decode=function(input){var chr1,chr2,chr3,enc1,enc2,enc3,enc4,output="",i=0;for(input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");i<input.length;)enc1=_keyStr.indexOf(input.charAt(i++)),enc2=_keyStr.indexOf(input.charAt(i++)),enc3=_keyStr.indexOf(input.charAt(i++)),enc4=_keyStr.indexOf(input.charAt(i++)),chr1=enc1<<2|enc2>>4,chr2=(15&enc2)<<4|enc3>>2,chr3=(3&enc3)<<6|enc4,output+=String.fromCharCode(chr1),64!==enc3&&(output+=String.fromCharCode(chr2)),64!==enc4&&(output+=String.fromCharCode(chr3));return output},App.prototype.encode=function(input){for(var chr1,chr2,chr3,enc1,enc2,enc3,enc4,output="",i=0;i<input.length;)chr1=input.charCodeAt(i++),chr2=input.charCodeAt(i++),chr3=input.charCodeAt(i++),enc1=chr1>>2,enc2=(3&chr1)<<4|chr2>>4,enc3=(15&chr2)<<2|chr3>>6,enc4=63&chr3,isNaN(chr2)?enc3=enc4=64:isNaN(chr3)&&(enc4=64),output=output+_keyStr.charAt(enc1)+_keyStr.charAt(enc2)+_keyStr.charAt(enc3)+_keyStr.charAt(enc4);return output},new App});