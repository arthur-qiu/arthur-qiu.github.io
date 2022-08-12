(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
r("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function pa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.u=this.h=null}
function qa(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
pa.prototype.B=function(a){this.g=a};
function ra(a,b){a.h={Ga:b,sa:!0};a.f=a.l||a.j}
pa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function w(a,b,c){a.f=c;return{value:b}}
pa.prototype.F=function(a){this.f=a};
function sa(a){a.l=2;a.j=3}
function ta(a){a.l=0;a.h=null}
function ua(a){a.u=[a.h];a.l=0;a.j=0}
function va(a){var b=a.u.splice(0)[0];(b=a.h=a.h||b)?b.sa?a.f=a.l||a.j:void 0!=b.F&&a.j<b.F?(a.f=b.F,a.h=null):a.f=a.j:a.f=0}
function wa(a){this.f=new pa;this.g=a}
function xa(a,b){qa(a.f);var c=a.f.i;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return za(a)}
function ya(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,ra(a.f,g),za(a)}a.f.i=null;d.call(a.f,f);return za(a)}
function za(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,ra(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.sa)throw b.Ga;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Aa(a){this.next=function(b){qa(a.f);a.f.i?b=ya(a,a.f.i.next,b,a.f.B):(a.f.B(b),b=za(a));return b};
this["throw"]=function(b){qa(a.f);a.f.i?b=ya(a,a.f.i["throw"],b,a.f.B):(ra(a.f,b),b=za(a));return b};
this["return"]=function(b){return xa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){var c=new Aa(new wa(b));oa&&a.prototype&&oa(c,a.prototype);return c}
r("Reflect",function(a){return a?a:{}});
r("Reflect.construct",function(){return ia});
r("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&g<e;)if(d[g++]!=b[k++])return!1;return k>=f}});
function Ca(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
r("Array.prototype.keys",function(a){return a?a:function(){return Ca(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ca(this,function(b,c){return c})}});
function Da(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Da(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||Ea});
r("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var k=this.i();try{g(k.resolve,k.reject)}catch(h){k.reject(h)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(k){k(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var k=this;this.h(function(){k.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var k=0;k<g.length;++k){var h=g[k];g[k]=null;try{h()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){h||(h=!0,l.call(k,m))}}
var k=this,h=!1;return{resolve:g(this.C),reject:g(this.j)}};
b.prototype.C=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.H(g);else{a:switch(typeof g){case "object":var k=null!=g;break a;case "function":k=!0;break a;default:k=!1}k?this.u(g):this.l(g)}};
b.prototype.u=function(g){var k=void 0;try{k=g.then}catch(h){this.j(h);return}"function"==typeof k?this.I(k,g):this.l(g)};
b.prototype.j=function(g){this.m(2,g)};
b.prototype.l=function(g){this.m(1,g)};
b.prototype.m=function(g,k){if(0!=this.g)throw Error("Cannot settle("+g+", "+k+"): Promise already settled in state"+this.g);this.g=g;this.h=k;this.B()};
b.prototype.B=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.H=function(g){var k=this.i();g.da(k.resolve,k.reject)};
b.prototype.I=function(g,k){var h=this.i();try{g.call(k,h.resolve,h.reject)}catch(l){h.reject(l)}};
b.prototype.then=function(g,k){function h(u,p){return"function"==typeof u?function(y){try{l(u(y))}catch(N){m(N)}}:p}
var l,m,q=new b(function(u,p){l=u;m=p});
this.da(h(g,l),h(k,m));return q};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.da=function(g,k){function h(){switch(l.g){case 1:g(l.h);break;case 2:k(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(h):this.f.push(h)};
b.resolve=d;b.reject=function(g){return new b(function(k,h){h(g)})};
b.race=function(g){return new b(function(k,h){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).da(k,h)})};
b.all=function(g){var k=t(g),h=k.next();return h.done?d([]):new b(function(l,m){function q(y){return function(N){u[y]=N;p--;0==p&&l(u)}}
var u=[],p=0;do u.push(void 0),p++,d(h.value).da(q(u.length-1),m),h=k.next();while(!h.done)})};
return b});
r("Object.setPrototypeOf",function(a){return a||oa});
r("Array.prototype.entries",function(a){return a?a:function(){return Ca(this,function(b,c){return[b,c]})}});
r("WeakMap",function(a){function b(h){this.f=(k+=Math.random()+1).toString();if(h){h=t(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(h){var l=typeof h;return"object"===l&&null!==h||"function"===l}
function e(h){if(!Da(h,g)){var l=new c;ba(h,g,{value:l})}}
function f(h){var l=Object[h];l&&(Object[h]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),l=Object.seal({}),m=new a([[h,2],[l,3]]);if(2!=m.get(h)||3!=m.get(l))return!1;m["delete"](h);m.set(l,4);return!m.has(h)&&4==m.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var k=0;b.prototype.set=function(h,l){if(!d(h))throw Error("Invalid WeakMap key");e(h);if(!Da(h,g))throw Error("WeakMap key fail: "+h);h[g][this.f]=l;return this};
b.prototype.get=function(h){return d(h)&&Da(h,g)?h[g][this.f]:void 0};
b.prototype.has=function(h){return d(h)&&Da(h,g)&&Da(h[g],this.f)};
b.prototype["delete"]=function(h){return d(h)&&Da(h,g)&&Da(h[g],this.f)?delete h[g][this.f]:!1};
return b});
r("Map",function(a){function b(){var k={};return k.previous=k.next=k.head=k}
function c(k,h){var l=k.f;return ea(function(){if(l){for(;l.head!=k.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:h(l)};l=null}return{done:!0,value:void 0}})}
function d(k,h){var l=h&&typeof h;"object"==l||"function"==l?f.has(h)?l=f.get(h):(l=""+ ++g,f.set(h,l)):l="p_"+h;var m=k.g[l];if(m&&Da(k.g,l))for(var q=0;q<m.length;q++){var u=m[q];if(h!==h&&u.key!==u.key||h===u.key)return{id:l,list:m,index:q,A:u}}return{id:l,list:m,index:-1,A:void 0}}
function e(k){this.g={};this.f=b();this.size=0;if(k){k=t(k);for(var h;!(h=k.next()).done;)h=h.value,this.set(h[0],h[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var k=Object.seal({x:4}),h=new a(t([[k,"s"]]));if("s"!=h.get(k)||1!=h.size||h.get({x:4})||h.set({x:4},"t")!=h||2!=h.size)return!1;var l=h.entries(),m=l.next();if(m.done||m.value[0]!=k||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(k,h){k=0===k?0:k;var l=d(this,k);l.list||(l.list=this.g[l.id]=[]);l.A?l.A.value=h:(l.A={next:this.f,previous:this.f.previous,head:this.f,key:k,value:h},l.list.push(l.A),this.f.previous.next=l.A,this.f.previous=l.A,this.size++);return this};
e.prototype["delete"]=function(k){k=d(this,k);return k.A&&k.list?(k.list.splice(k.index,1),k.list.length||delete this.g[k.id],k.A.previous.next=k.A.next,k.A.next.previous=k.A.previous,k.A.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(k){return!!d(this,k).A};
e.prototype.get=function(k){return(k=d(this,k).A)&&k.value};
e.prototype.entries=function(){return c(this,function(k){return[k.key,k.value]})};
e.prototype.keys=function(){return c(this,function(k){return k.key})};
e.prototype.values=function(){return c(this,function(k){return k.value})};
e.prototype.forEach=function(k,h){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,k.call(h,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Da(b,d)&&c.push([d,b[d]]);return c}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
r("Set",function(a){function b(c){this.f=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var z=this||self;function A(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var Fa=/^[\w+/_-]+[=]{0,2}$/,Ga=null;function Ha(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Fa.test(a)?a:""}
function B(a,b){for(var c=a.split("."),d=b||z,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ia(){}
function Ja(a){a.la=void 0;a.getInstance=function(){return a.la?a.la:a.la=new a}}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){return"function"==Ka(a)}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Sa:C=Ta;return C.apply(null,arguments)}
function Ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var D=Date.now;function Va(a,b){A(a,b,void 0)}
function E(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Wa(a){return a}
;function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(F,Error);F.prototype.name="CustomError";function Xa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.i=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;function Ya(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},$a=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var k=f[g];
b.call(void 0,k,g,a)&&(d[e++]=k)}return d},ab=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},bb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function cb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function db(a,b){var c=Za(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function eb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function fb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hb(a,b){var c=La(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function ib(a){var b=jb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function kb(a){for(var b in a)return!1;return!0}
function lb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ob(a){var b=Ka(a);if("object"==b||"array"==b){if(Ma(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=ob(a[c]);return b}return a}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var rb;function sb(){if(void 0===rb){var a=null,b=z.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(c){z.console&&z.console.error(c.message)}rb=a}else rb=a}return rb}
;function tb(a,b){this.f=a===ub&&b||"";this.g=vb}
tb.prototype.M=!0;tb.prototype.L=function(){return this.f};
function wb(a){return a instanceof tb&&a.constructor===tb&&a.g===vb?a.f:"type_error:Const"}
var vb={},ub={};function xb(a,b){this.f=a===yb&&b||"";this.g=zb}
xb.prototype.M=!0;xb.prototype.L=function(){return this.f.toString()};
xb.prototype.ka=!0;xb.prototype.ha=function(){return 1};
function Ab(a){if(a instanceof xb&&a.constructor===xb&&a.g===zb)return a.f;Ka(a);return"type_error:TrustedResourceUrl"}
var zb={};function Bb(a){var b=sb();a=b?b.createScriptURL(a):a;return new xb(yb,a)}
var yb={};var Cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Db(a,b){if(b)a=a.replace(Eb,"&amp;").replace(Fb,"&lt;").replace(Gb,"&gt;").replace(Hb,"&quot;").replace(Ib,"&#39;").replace(Jb,"&#0;");else{if(!Kb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Eb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Fb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Gb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Hb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ib,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Jb,"&#0;"))}return a}
var Eb=/&/g,Fb=/</g,Gb=/>/g,Hb=/"/g,Ib=/'/g,Jb=/\x00/g,Kb=/[\x00&<>"']/;function H(a,b){this.f=a===Lb&&b||"";this.g=Mb}
H.prototype.M=!0;H.prototype.L=function(){return this.f.toString()};
H.prototype.ka=!0;H.prototype.ha=function(){return 1};
function Nb(a){if(a instanceof H&&a.constructor===H&&a.g===Mb)return a.f;Ka(a);return"type_error:SafeUrl"}
var Ob=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Pb(a){if(a instanceof H)return a;a="object"==typeof a&&a.M?a.L():String(a);Ob.test(a)||(a="about:invalid#zClosurez");return new H(Lb,a)}
var Mb={},Qb=new H(Lb,"about:invalid#zClosurez"),Lb={};var Rb;a:{var Sb=z.navigator;if(Sb){var Tb=Sb.userAgent;if(Tb){Rb=Tb;break a}}Rb=""}function I(a){return-1!=Rb.indexOf(a)}
;function Ub(){this.f="";this.h=Wb;this.g=null}
Ub.prototype.ka=!0;Ub.prototype.ha=function(){return this.g};
Ub.prototype.M=!0;Ub.prototype.L=function(){return this.f.toString()};
var Wb={};function Xb(a,b){var c=new Ub,d=sb();c.f=d?d.createHTML(a):a;c.g=b;return c}
;function Yb(a,b){var c=b instanceof H?b:Pb(b);a.href=Nb(c)}
function Zb(a,b){a.src=Ab(b);var c;(c=a.ownerDocument&&a.ownerDocument.defaultView)&&c!=z?c=Ha(c.document):(null===Ga&&(Ga=Ha(z.document)),c=Ga);c&&a.setAttribute("nonce",c)}
;function $b(a){return a=Db(a,void 0)}
function ac(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var bc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a?decodeURI(a):a}
function K(a,b){return b.match(bc)[a]||null}
function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function dc(a){var b=[],c;for(c in a)cc(c,a[c],b);return b.join("&")}
function ec(a,b){var c=dc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var fc=/#|$/;function gc(a,b){var c=a.search(fc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;var hc=I("Opera"),ic=I("Trident")||I("MSIE"),jc=I("Edge"),kc=I("Gecko")&&!(-1!=Rb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),lc=-1!=Rb.toLowerCase().indexOf("webkit")&&!I("Edge");function mc(){var a=z.document;return a?a.documentMode:void 0}
var nc;a:{var oc="",pc=function(){var a=Rb;if(kc)return/rv:([^\);]+)(\)|;)/.exec(a);if(jc)return/Edge\/([\d\.]+)/.exec(a);if(ic)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(lc)return/WebKit\/(\S+)/.exec(a);if(hc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
pc&&(oc=pc?pc[1]:"");if(ic){var qc=mc();if(null!=qc&&qc>parseFloat(oc)){nc=String(qc);break a}}nc=oc}var rc=nc,sc;if(z.document&&ic){var tc=mc();sc=tc?tc:parseInt(rc,10)||void 0}else sc=void 0;var uc=sc;var vc={},wc=null;var L=window;function xc(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,yc[b]?b=yc[b]:(b=String(b),yc[b]||(c=/function\s+([^\(]+)/m.exec(b),yc[b]=c?c[1]:"[Anonymous]"),b=yc[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var yc={};function zc(a){this.f=a||{cookie:""}}
n=zc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Eb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var k=c.ta}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===k&&(k=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";k=0>k?"":0==k?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(D()+1E3*k)).toUTCString();this.f.cookie=a+"="+b+c+g+k+d+(null!=e?";samesite="+e:
"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Cb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ta:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Cb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ac=new zc("undefined"==typeof document?null:document);var Bc=!ic||9<=Number(uc);function Cc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=Cc.prototype;n.clone=function(){return new Cc(this.x,this.y)};
n.equals=function(a){return a instanceof Cc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Dc(a,b){this.width=a;this.height=b}
n=Dc.prototype;n.clone=function(){return new Dc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ec(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Fc(a,b){gb(b,function(c,d){c&&"object"==typeof c&&c.M&&(c=c.L());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Gc.hasOwnProperty(d)?a.setAttribute(Gc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Gc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Hc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Bc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',$b(g.name),'"');if(g.type){f.push(' type="',$b(g.type),'"');var k={};qb(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=Ic(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Fc(f,g));2<d.length&&Jc(e,f,d);return f}
function Jc(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!La(f)||Oa(f)&&0<f.nodeType?d(f):G(Kc(f)?eb(f):f,d)}}
function Ic(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Kc(a){if(a&&"number"==typeof a.length){if(Oa(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ma(a))return"function"==typeof a.item}return!1}
function Lc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Mc(a){Nc();return Bb(a)}
var Nc=Ia;function Oc(a){var b=Pc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Qc(){var a=[];Oc(function(b){a.push(b)});
return a}
var Pc={kb:"allow-forms",lb:"allow-modals",mb:"allow-orientation-lock",nb:"allow-pointer-lock",ob:"allow-popups",pb:"allow-popups-to-escape-sandbox",qb:"allow-presentation",rb:"allow-same-origin",sb:"allow-scripts",tb:"allow-top-navigation",ub:"allow-top-navigation-by-user-activation"},Rc=Ya(function(){return Qc()});
function Sc(){var a=Ic(document,"IFRAME"),b={};G(Rc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function M(){this.g=this.g;this.B=this.B}
M.prototype.g=!1;M.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function Tc(a,b){a.g?b():(a.B||(a.B=[]),a.B.push(b))}
M.prototype.o=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function Uc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Vc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];La(d)?Vc.apply(null,d):Uc(d)}}
;function O(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(h){try{k(b.next(h))}catch(l){e(l)}}
function g(h){try{k(b["throw"](h))}catch(l){e(l)}}
function k(h){h.done?d(h.value):(new c(function(l){l(h.value)})).then(f,g)}
k((b=b.apply(a,void 0)).next())})}
;function Wc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;Bb(wb(new tb(ub,"//fonts.googleapis.com/css")));var Xc=(new Date).getTime();function Yc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";
var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Zc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(q){for(var u=g,p=0;64>p;p+=4)u[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=u[p-3]^u[p-8]^u[p-14]^u[p-16],u[p]=(q<<1|q>>>31)&4294967295;q=e[0];var y=e[1],N=e[2],na=e[3],jd=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var Na=na^y&(N^na);var Vb=1518500249}else Na=y^N^na,Vb=1859775393;else 60>p?(Na=y&N|na&(y|N),Vb=2400959708):(Na=y^N^na,Vb=3395469782);Na=((q<<5|q>>>27)&4294967295)+Na+jd+Vb+u[p]&4294967295;jd=na;na=N;N=(y<<30|y>>>2)&4294967295;y=q;q=Na}e[0]=e[0]+q&4294967295;e[1]=
e[1]+y&4294967295;e[2]=e[2]+N&4294967295;e[3]=e[3]+na&4294967295;e[4]=e[4]+jd&4294967295}
function c(q,u){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],y=0,N=q.length;y<N;++y)p.push(q.charCodeAt(y));q=p}u||(u=q.length);p=0;if(0==l)for(;p+64<u;)b(q.slice(p,p+64)),p+=64,m+=64;for(;p<u;)if(f[l++]=q[p++],m++,64==l)for(l=0,b(f);p+64<u;)b(q.slice(p,p+64)),p+=64,m+=64}
function d(){var q=[],u=8*m;56>l?c(k,56-l):c(k,64-(l-56));for(var p=63;56<=p;p--)f[p]=u&255,u>>>=8;b(f);for(p=u=0;5>p;p++)for(var y=24;0<=y;y-=8)q[u++]=e[p]>>y&255;return q}
for(var e=[],f=[],g=[],k=[128],h=1;64>h;++h)k[h]=0;var l,m;a();return{reset:a,update:c,digest:d,Fa:function(){for(var q=d(),u="",p=0;p<q.length;p++)u+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return u}}}
;function $c(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(k){e.push(k)}),ad(e.join(" "));
var f=[],g=[];G(c,function(k){g.push(k.key);f.push(k.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(k){e.push(k)});
a=ad(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ad(a){var b=Zc();b.update(a);return b.Fa().toLowerCase()}
;function bd(a){var b=Yc(String(z.location.href)),c;(c=z.__SAPISID||z.__APISID||z.__OVERRIDE_SID)?c=!0:(c=new zc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?z.__SAPISID:z.__APISID,c||(c=new zc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(z.location.href);return d&&c&&b?[b,$c(Yc(d),c,a||null)].join(" "):null}return null}
;function cd(){this.g=[];this.f=-1}
cd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
cd.prototype.get=function(a){return!!this.g[a]};
function dd(a){-1==a.f&&(a.f=bb(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function ed(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
ed.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function fd(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function gd(a){z.setTimeout(function(){throw a;},0)}
var hd;
function id(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Ic(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(h){if(("*"==k||h.origin==k)&&h.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,k)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ra;c.ra=null;e()}};
return function(e){d.next={ra:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function kd(){this.g=this.f=null}
var md=new ed(function(){return new ld},function(a){a.reset()});
kd.prototype.add=function(a,b){var c=md.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
kd.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function ld(){this.next=this.scope=this.f=null}
ld.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
ld.prototype.reset=function(){this.next=this.scope=this.f=null};function nd(a,b){od||pd();qd||(od(),qd=!0);rd.add(a,b)}
var od;function pd(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);od=function(){a.then(sd)}}else od=function(){var b=sd;
!Ma(z.setImmediate)||z.Window&&z.Window.prototype&&!I("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(hd||(hd=id()),hd(b)):z.setImmediate(b)}}
var qd=!1,rd=new kd;function sd(){for(var a;a=rd.remove();){try{a.f.call(a.scope)}catch(b){gd(b)}fd(md,a)}qd=!1}
;function td(){this.g=-1}
;function ud(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
E(ud,td);ud.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function vd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],k=a.f[3],h=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var l=1518500249}else f=c^g^k,l=1859775393;else 60>e?(f=c&g|k&(c|g),l=2400959708):
(f=c^g^k,l=3395469782);f=(b<<5|b>>>27)+f+h+l+d[e]&4294967295;h=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+k&4294967295;a.f[4]=a.f[4]+h&4294967295}
ud.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)vd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){vd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){vd(this,e);f=0;break}}this.h=f;this.j+=b}};
ud.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;vd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var wd="StopIteration"in z?z.StopIteration:{message:"StopIteration",stack:""};function xd(){}
xd.prototype.next=function(){throw wd;};
xd.prototype.J=function(){return this};
function yd(a){if(a instanceof xd)return a;if("function"==typeof a.J)return a.J(!1);if(La(a)){var b=0,c=new xd;c.next=function(){for(;;){if(b>=a.length)throw wd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function zd(a,b){if(La(a))try{G(a,b,void 0)}catch(c){if(c!==wd)throw c;}else{a=yd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==wd)throw c;}}}
function Ad(a){if(La(a))return eb(a);a=yd(a);var b=[];zd(a,function(c){b.push(c)});
return b}
;function Bd(a,b){this.h={};this.f=[];this.K=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Bd)for(c=Cd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Cd(a){Dd(a);return a.f.concat()}
n=Bd.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Ed;Dd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Ed(a,b){return a===b}
n.isEmpty=function(){return 0==this.g};
n.clear=function(){this.h={};this.K=this.g=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.K++,this.f.length>2*this.g&&Dd(this),!0):!1};
function Dd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.K++);this.h[a]=b};
n.forEach=function(a,b){for(var c=Cd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Bd(this)};
n.J=function(a){Dd(this);var b=0,c=this.K,d=this,e=new xd;e.next=function(){if(c!=d.K)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw wd;var f=d.f[b++];return a?f:d.h[f]};
return e};function Fd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Gd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Hd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Fd(a).match(/\S+/g)||[],c=0<=Za(c,b);return c}
function Id(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Hd(a,"inverted-hdpi")&&Gd(a,$a(a.classList?a.classList:Fd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Jd(a){var b=[];Kd(new Ld,a,b);return b.join("")}
function Ld(){}
function Kd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Kd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Md(d,c),c.push(":"),Kd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Md(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Nd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Od=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Md(a,b){b.push('"',a.replace(Od,function(c){var d=Nd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Nd[c]=d);return d}),'"')}
;function Pd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function P(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Ia)try{var b=this;a.call(void 0,function(c){Qd(b,2,c)},function(c){Qd(b,3,c)})}catch(c){Qd(this,3,c)}}
function Rd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Rd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Sd=new ed(function(){return new Rd},function(a){a.reset()});
function Td(a,b,c){var d=Sd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Ud(a){if(a instanceof P)return a;var b=new P(Ia);Qd(b,2,a);return b}
function Vd(a){return new P(function(b,c){c(a)})}
P.prototype.then=function(a,b,c){return Wd(this,Ma(a)?a:null,Ma(b)?b:null,c)};
P.prototype.$goog_Thenable=!0;function Xd(a,b){return Wd(a,null,b,void 0)}
P.prototype.cancel=function(a){if(0==this.f){var b=new Yd(a);nd(function(){Zd(this,b)},this)}};
function Zd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Zd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):$d(c),ae(c,e,3,b)))}a.h=null}else Qd(a,3,b)}
function be(a,b){a.g||2!=a.f&&3!=a.f||ce(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Wd(a,b,c,d){var e=Td(null,null,null);e.f=new P(function(f,g){e.g=b?function(k){try{var h=b.call(d,k);f(h)}catch(l){g(l)}}:f;
e.onRejected=c?function(k){try{var h=c.call(d,k);void 0===h&&k instanceof Yd?g(k):f(h)}catch(l){g(l)}}:g});
e.f.h=a;be(a,e);return e.f}
P.prototype.u=function(a){this.f=0;Qd(this,2,a)};
P.prototype.C=function(a){this.f=0;Qd(this,3,a)};
function Qd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.u,f=a.C;if(d instanceof P){be(d,Td(e||Ia,f||null,a));var g=!0}else if(Pd(d))d.then(e,f,a),g=!0;else{if(Oa(d))try{var k=d.then;if(Ma(k)){de(d,k,e,f,a);g=!0;break a}}catch(h){f.call(a,h);g=!0;break a}g=!1}}g||(a.m=c,a.f=b,a.h=null,ce(a),3!=b||c instanceof Yd||ee(a,c))}}
function de(a,b,c,d,e){function f(h){k||(k=!0,d.call(e,h))}
function g(h){k||(k=!0,c.call(e,h))}
var k=!1;try{b.call(a,g,f)}catch(h){f(h)}}
function ce(a){a.l||(a.l=!0,nd(a.B,a))}
function $d(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
P.prototype.B=function(){for(var a;a=$d(this);)ae(this,a,this.f,this.m);this.l=!1};
function ae(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,fe(b,c,d);else try{b.h?b.g.call(b.context):fe(b,c,d)}catch(e){ge.call(null,e)}fd(Sd,b)}
function fe(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ee(a,b){a.j=!0;nd(function(){a.j&&ge.call(null,b)})}
var ge=gd;function Yd(a){F.call(this,a)}
E(Yd,F);Yd.prototype.name="cancel";function Q(a){M.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
E(Q,M);n=Q.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function he(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=cb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.R(b)}}
n.R=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=Ia):(c&&db(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.P=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];ie(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.R(c)}}return 0!=e}return!1};
function ie(a,b,c){nd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(G(b,this.R,this),delete this.h[a])}else this.f.length=0,this.h={}};
n.o=function(){Q.O.o.call(this);this.clear();this.i.length=0};function je(a){this.f=a}
je.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Jd(b))};
je.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
je.prototype.remove=function(a){this.f.remove(a)};function ke(a){this.f=a}
E(ke,je);function le(a){this.data=a}
function me(a){return void 0===a||a instanceof le?a:new le(a)}
ke.prototype.set=function(a,b){ke.O.set.call(this,a,me(b))};
ke.prototype.g=function(a){a=ke.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ke.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ne(a){this.f=a}
E(ne,ke);ne.prototype.set=function(a,b,c){if(b=me(b)){if(c){if(c<D()){ne.prototype.remove.call(this,a);return}b.expiration=c}b.creation=D()}ne.O.set.call(this,a,b)};
ne.prototype.g=function(a){var b=ne.O.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<D()||c&&c>D())ne.prototype.remove.call(this,a);else return b}};function oe(){}
;function pe(){}
E(pe,oe);pe.prototype.clear=function(){var a=Ad(this.J(!0)),b=this;G(a,function(c){b.remove(c)})};function qe(a){this.f=a}
E(qe,pe);n=qe.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.J=function(a){var b=0,c=this.f,d=new xd;d.next=function(){if(b>=c.length)throw wd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function re(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(re,qe);function se(a,b){this.g=a;this.f=null;if(ic&&!(9<=Number(uc))){te||(te=new Bd);this.f=te.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),te.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
E(se,pe);var ue={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},te=null;function ve(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ue[b]})}
n=se.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(ve(a),b);we(this)};
n.get=function(a){a=this.f.getAttribute(ve(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(ve(a));we(this)};
n.J=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new xd;d.next=function(){if(b>=c.length)throw wd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);we(this)};
function we(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function xe(a,b){this.g=a;this.f=b+"::"}
E(xe,pe);xe.prototype.set=function(a,b){this.g.set(this.f+a,b)};
xe.prototype.get=function(a){return this.g.get(this.f+a)};
xe.prototype.remove=function(a){this.g.remove(this.f+a)};
xe.prototype.J=function(a){var b=this.g.J(!0),c=this,d=new xd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function ye(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var ze=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",ze,void 0);function R(a){ye(ze,arguments)}
function S(a,b){return a in ze?ze[a]:b}
function Ae(){return S("PLAYER_CONFIG",{})}
function Be(a){var b=ze.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;function Ce(){var a=De;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a,void 0)}
function Ee(a){A("yt.ads.biscotti.lastId_",a,void 0)}
;var Fe=[];function Ge(a){Fe.forEach(function(b){return b(a)})}
function He(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){T(b),Ge(b)}}:a}
function T(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),R("ERRORS",b))}
function Ie(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),R("ERRORS",b))}
;function Je(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?fb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(h){if("q"!=e[0]){var k=Error("Error decoding URL component");k.params={key:e[0],value:e[1]};T(k)}}}return b}
function Ke(a){var b=[];gb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Le(a){"?"==a.charAt(0)&&(a=a.substr(1));return Je(a)}
function Me(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Le(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ec(a,e)+d}
;function Ne(a){var b=Oe;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Pe(b),Qe(b));b.ca_type="image";a&&(b.bid=a);return b}
function Pe(a){var b={};b.dt=Xc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function Qe(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(q){}try{var e=b.outerWidth;var f=b.outerHeight}catch(q){}try{var g=b.innerWidth;var k=b.innerHeight}catch(q){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.f.top;try{var h=(c||window).document,l="CSS1Compat"==h.compatMode?h.documentElement:h.body;var m=(new Dc(l.clientWidth,l.clientHeight)).round()}catch(q){m=new Dc(-12245933,-12245933)}h=m;m={};l=new cd;z.SVGElement&&
z.document.createElementNS&&l.set(0);c=Sc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);z.crypto&&z.crypto.subtle&&l.set(3);z.TextDecoder&&z.TextEncoder&&l.set(4);l=dd(l);m.bc=l;m.bih=h.height;m.biw=h.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!L.WebGLRenderingContext,m}
var Oe=new function(){var a=window.document;this.f=window;this.g=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return Ke(Ne(a))},void 0);D();function U(a){a=Re(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Se(a,b){var c=Re(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Re(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
;var Te="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function Ue(){if(!Te)return null;var a=Te();return"open"in a?a:null}
function Ve(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function V(a,b){"function"===typeof a&&(a=He(a));return window.setTimeout(a,b)}
function We(a){window.clearTimeout(a)}
;var Xe={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ye="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Ze=!1;
function $e(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=K(1,a),e=J(K(3,a));d&&e?(d=c,c=a.match(bc),d=d.match(bc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?J(K(3,c))==e&&(Number(K(4,c))||null)==(Number(K(4,a))||null):!0;d=U("web_ajax_ignore_global_headers_if_set");for(var f in Xe)e=S(Xe[f]),!e||!c&&!af(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||af(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||af(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||af(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=Ke(Ne(void 0));return b}
function bf(a){var b=window.location.search,c=J(K(3,a)),d=J(K(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Le(b),f={};G(Ye,function(g){e[g]&&(f[g]=e[g])});
return Me(a,f||{},!1)}
function af(a,b){var c=S("CORS_HEADER_WHITELIST")||{},d=J(K(3,a));return d?(c=c[d])?0<=Za(c,b):!1:!0}
function cf(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=df(a,b);var d=ef(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&We(f);var k=g.ok,h=function(l){l=l||{};var m=b.context||z;k?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ma&&b.ma.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(k||400<=g.status&&500>g.status)?g.json().then(h,function(){h(null)}):h(null)}});
b.ya&&0<b.timeout&&(f=V(function(){e||(e=!0,We(f),b.ya.call(b.context||z))},b.timeout))}else ff(a,b)}
function ff(a,b){var c=b.format||"JSON";a=df(a,b);var d=ef(a,b),e=!1,f=gf(a,function(h){if(!e){e=!0;k&&We(k);var l=Ve(h),m=null,q=400<=h.status&&500>h.status,u=500<=h.status&&600>h.status;if(l||q||u)m=hf(a,c,h,b.zb);if(l)a:if(h&&204==h.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};q=b.context||z;l?b.onSuccess&&b.onSuccess.call(q,h,m):b.onError&&b.onError.call(q,h,m);b.ma&&b.ma.call(q,h,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.S&&0<b.timeout){var g=b.S;var k=V(function(){e||(e=!0,f.abort(),We(k),g.call(b.context||z,f))},b.timeout)}return f}
function df(a,b){b.Cb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME",void 0),d=b.jb;d&&(d[c]&&delete d[c],a=Me(a,d||{},!0));return a}
function ef(a,b){var c=S("XSRF_FIELD_NAME",void 0),d=S("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.D,g=S("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.Bb||J(K(3,a))&&!b.withCredentials&&J(K(3,a))!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.D&&b.D[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Le(e),qb(e,f),e=b.za&&"JSON"==b.za?JSON.stringify(e):dc(e));f=e||f&&!kb(f);!Ze&&f&&"POST"!=b.method&&(Ze=!0,T(Error("AJAX request with postData should use POST")));
return e}
function hf(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ie(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?jf(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=kf(g)})}d&&lf(e);
return e}
function lf(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=new tb(ub,"HTML that is escaped and sanitized server-side and passed through yt.net.ajax");wb(e);wb(e);d=Xb(d,null);a[c]=d}else lf(a[b])}}
function jf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function kf(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function gf(a,b,c,d,e,f,g){function k(){4==(h&&"readyState"in h?h.readyState:0)&&b&&He(b)(h)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var h=Ue();if(!h)return null;"onloadend"in h?h.addEventListener("loadend",k,!1):h.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=bf(a));h.open(c,a,!0);f&&(h.responseType=f);g&&(h.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=$e(a,e))for(var l in e)h.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);
return h}
;var mf={},nf=0;
function of(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Rb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.M?a.L():String(a),a=Ob.test(a)?new H(Lb,a):null),b=Nb(a||Qb),"about:invalid#zClosurez"===b?a="":(b instanceof Ub?a=b:(d="object"==typeof b,a=null,d&&b.ka&&(a=b.ha()),b=Db(d&&b.M?b.L():String(b)),a=Xb(b,a)),a instanceof Ub&&a.constructor===Ub&&a.h===Wb?a=a.f:(Ka(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(Jd(a.toString())))),/^[\s\xa0]*$/.test(a)||(a=
Hc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?gf(a,b,"POST",e,d):S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?gf(a,b,"GET","",d):pf(a,b)||qf(a,b))}
function pf(a,b){if(!Be("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(Be("use_sonic_js_library_for_v4_support")){a:{try{var c=new Xa({url:a});if(c.h&&c.g||c.i){var d=J(K(5,a));var e=!(!d||!d.endsWith("/aclk")||"1"!==gc(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=J(K(5,a)),!e||-1==e.indexOf("/aclk")||"1"!==gc(a,"ae")||"1"!==gc(a,"act"))return!1;return rf(a)?(b&&b(),!0):!1}
function rf(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function qf(a,b){var c=new Image,d=""+nf++;mf[d]=c;c.onload=c.onerror=function(){b&&mf[d]&&b();delete mf[d]};
c.src=a}
;var sf=0;A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++sf},void 0);var tf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function uf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in tf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function vf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
uf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
uf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
uf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var jb=z.ytEventsEventsListeners||{};A("ytEventsEventsListeners",jb,void 0);var wf=z.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",wf,void 0);
function xf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ib(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var yf=Ya(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function zf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=xf(a,b,c,d);if(e)return e;e=++wf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(k){k=new uf(k);if(!Lc(k.relatedTarget,function(h){return h==a}))return k.currentTarget=a,k.type=b,c.call(a,k)}:function(k){k=new uf(k);
k.currentTarget=a;return c.call(a,k)};
g=He(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),yf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);jb[e]=[a,b,c,g,d];return e}
function Af(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in jb){var c=jb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?yf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete jb[b]}}))}
;var Bf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Cf(a){this.u=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.H=zf(window,"mousemove",C(this.I,this));a=C(this.C,this);"function"===typeof a&&(a=He(a));this.N=window.setInterval(a,25)}
E(Cf,M);Cf.prototype.I=function(a){void 0===a.f&&vf(a);var b=a.f;void 0===a.g&&vf(a);this.f=new Cc(b,a.g)};
Cf.prototype.C=function(){if(this.f){var a=Bf();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.u();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
Cf.prototype.o=function(){window.clearInterval(this.N);Af(this.H)};function Df(){}
function Ef(a,b){return Ff(a,0,b)}
function Gf(a,b){return Ff(a,1,b)}
;function Hf(){}
v(Hf,Df);function Ff(a,b,c){isNaN(c)&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):V(a,c||0)}
function If(a){if(!isNaN(a)){var b=B("yt.scheduler.instance.cancelJob");b?b(a):We(a)}}
Hf.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Hf.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
Ja(Hf);Hf.getInstance();var Jf={};
function Kf(a){var b=void 0===a?{}:a;a=void 0===b.La?!0:b.La;b=void 0===b.Xa?!1:b.Xa;if(null==B("_lact",window)){var c=parseInt(S("LACT"),10);c=isFinite(c)?D()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&Lf();zf(document,"keydown",Lf);zf(document,"keyup",Lf);zf(document,"mousedown",Lf);zf(document,"mouseup",Lf);a&&(b?zf(window,"touchmove",function(){Mf("touchmove",200)},{passive:!0}):(zf(window,"resize",function(){Mf("resize",200)}),zf(window,"scroll",function(){Mf("scroll",200)})));
new Cf(function(){Mf("mouse",100)});
zf(document,"touchstart",Lf,{passive:!0});zf(document,"touchend",Lf,{passive:!0})}}
function Mf(a,b){Jf[a]||(Jf[a]=!0,Gf(function(){Lf();Jf[a]=!1},b))}
function Lf(){null==B("_lact",window)&&Kf();var a=D();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Nf(){var a=B("_lact",window),b;null==a?b=-1:b=Math.max(D()-a,0);return b}
;var Of=z.ytPubsubPubsubInstance||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.R;Q.prototype.publish=Q.prototype.P;Q.prototype.clear=Q.prototype.clear;A("ytPubsubPubsubInstance",Of,void 0);var Pf=z.ytPubsubPubsubSubscribedKeys||{};A("ytPubsubPubsubSubscribedKeys",Pf,void 0);var Qf=z.ytPubsubPubsubTopicToKeys||{};A("ytPubsubPubsubTopicToKeys",Qf,void 0);var Rf=z.ytPubsubPubsubIsSynchronous||{};A("ytPubsubPubsubIsSynchronous",Rf,void 0);
function Sf(a,b){var c=Tf();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Pf[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Rf[a]?f():V(f,0)}catch(g){T(g)}},void 0);
Pf[d]=!0;Qf[a]||(Qf[a]=[]);Qf[a].push(d);return d}return 0}
function Uf(a){var b=Tf();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete Pf[c]}))}
function Vf(a,b){var c=Tf();c&&c.publish.apply(c,arguments)}
function Wf(a){var b=Tf();if(b)if(b.clear(a),a)Xf(a);else for(var c in Qf)Xf(c)}
function Tf(){return z.ytPubsubPubsubInstance}
function Xf(a){Qf[a]&&(a=Qf[a],G(a,function(b){Pf[b]&&delete Pf[b]}),a.length=0)}
;var Yf=window,W=Yf.ytcsi&&Yf.ytcsi.now?Yf.ytcsi.now:Yf.performance&&Yf.performance.timing&&Yf.performance.now&&Yf.performance.timing.navigationStart?function(){return Yf.performance.timing.navigationStart+Yf.performance.now()}:function(){return(new Date).getTime()};var Zf=Se("initial_gel_batch_timeout",1E3),$f=Math.pow(2,16)-1,ag=null,bg=0,cg=void 0,dg=0,eg=0,fg=0,gg=!0,hg=z.ytLoggingTransportLogPayloadsQueue_||{};A("ytLoggingTransportLogPayloadsQueue_",hg,void 0);var ig=z.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",ig,void 0);var jg=z.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",jg,void 0);
function kg(){We(dg);We(eg);eg=0;cg&&cg.isReady()?(lg(ig),"log_event"in hg&&lg(Object.entries(hg.log_event)),ig.clear(),delete hg.log_event):mg()}
function mg(){U("web_gel_timeout_cap")&&!eg&&(eg=V(kg,6E4));We(dg);var a=S("LOGGING_BATCH_TIMEOUT",Se("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&gg&&(a=Zf);dg=V(kg,a)}
function lg(a){var b=cg,c=Math.round(W());a=t(a);for(var d=a.next();!d.done;d=a.next()){var e=t(d.value);d=e.next().value;var f=e.next().value;e=ob({context:ng(b.f||og())});e.events=f;(f=jg[d])&&pg(e,d,f);delete jg[d];qg(e,c);rg(b,"log_event",e,{retry:!0,onSuccess:function(){bg=Math.round(W()-c)}});
gg=!1}}
function qg(a,b){a.requestTimeMs=String(b);U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=S("EVENT_ID",void 0);if(c){var d=S("BATCH_CLIENT_COUNTER",void 0)||0;!d&&U("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*$f/2));d++;d>$f&&(d=1);R("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;ag&&bg&&U("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:ag,roundtripMs:String(bg)});ag=c;bg=0}}
function pg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var sg=z.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",sg,void 0);
function tg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||W());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Nf())};U("log_sequence_info_on_gel_web")&&d.T&&(a=e.context,b=d.T,sg[b]=b in sg?sg[b]+1:0,a.sequence={index:sg[b],groupKey:b},d.Ab&&delete sg[d.T]);d=d.ga;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),jg[d.token]=a,a=d.token);d=ig.get(a)||[];ig.set(a,d);d.push(e);c&&(cg=new c);c=Se("web_logging_max_batch")||100;e=
W();d.length>=c?kg():10<=e-fg&&(mg(),fg=e)}
;function ug(){for(var a={},b=t(Object.entries(Le(S("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=t(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function vg(){return"INNERTUBE_API_KEY"in ze&&"INNERTUBE_API_VERSION"in ze}
function og(){return{innertubeApiKey:S("INNERTUBE_API_KEY",void 0),innertubeApiVersion:S("INNERTUBE_API_VERSION",void 0),Ma:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Na:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Pa:S("INNERTUBE_CONTEXT_HL",void 0),Oa:S("INNERTUBE_CONTEXT_GL",void 0),Qa:S("INNERTUBE_HOST_OVERRIDE",void 0)||"",Sa:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ra:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1)}}
function ng(a){a={client:{hl:a.Pa,gl:a.Oa,clientName:a.Na,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ma}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=S("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=S("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=S("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
S("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(a.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,ug());return a}
function wg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.xb||S("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().vb:b=bd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=S("SESSION_INDEX",0),U("pageid_as_header_web")&&(d["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return d}
;function xg(a){a=Object.assign({},a);delete a.Authorization;var b=bd();if(b){var c=new ud;c.update(S("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;La(b);void 0===c&&(c=0);if(!wc){wc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));vc[f]=g;for(var k=0;k<g.length;k++){var h=g[k];void 0===wc[h]&&(wc[h]=k)}}}c=vc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;h=(g=e+2<b.length)?b[e+2]:0;k=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|h>>6;h&=63;g||(h=64,f||(m=64));d.push(c[k],c[l],c[m]||"",c[h]||"")}a.hash=d.join("")}return a}
function yg(a){a=xg(a);var b=new ud;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function zg(a,b,c,d){Ac.set(""+a,b,{ta:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Ag(){var a=new re;(a=a.isAvailable()?new xe(a,"yt.innertube"):null)||(a=new se("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new ne(a):null;this.g=document.domain||window.location.hostname}
Ag.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,D()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Jd(b))}catch(f){return}else e=escape(b);zg(a,e,c,this.g)};
Ag.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Ac.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ag.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Ac.remove(""+a,"/",void 0===b?"youtube.com":b)};var Bg;function Cg(){Bg||(Bg=new Ag);return Bg}
function Dg(a,b,c,d){if(d)return null;d=Cg().get("nextId",!0)||1;var e=Cg().get("requests",!0)||{};e[d]={method:a,request:b,authState:xg(c),requestTime:Math.round(W())};Cg().set("nextId",d+1,86400,!0);Cg().set("requests",e,86400,!0);return d}
function Eg(a){var b=Cg().get("requests",!0)||{};delete b[a];Cg().set("requests",b,86400,!0)}
function Fg(a){var b=Cg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=xg(wg(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),rg(a,d.method,e,{}));delete b[c]}}Cg().set("requests",b,86400,!0)}}
;function Gg(){}
;function Hg(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,Hg.prototype)}
v(Hg,Error);function X(a){return new P(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
;function Ig(a){this.f=a}
n=Ig.prototype;n.add=function(a,b,c){return this.G([a],"readwrite").f(a).add(b,c)};
n.clear=function(a){return this.G([a],"readwrite").f(a).clear()};
n.close=function(){this.f.close()};
n.count=function(a,b){return this.G([a]).f(a).count(b)};
n.wa=function(a,b){var c=this.f.createObjectStore(a,b);return new Jg(c)};
n["delete"]=function(a,b){return this.G([a],"readwrite").f(a)["delete"](b)};
n.get=function(a,b){return this.G([a]).f(a).get(b)};
n.getName=function(){return this.f.name};
n.G=function(a,b){var c=this.f.transaction(a,b);return new Kg(c)};
function Jg(a){this.f=a}
n=Jg.prototype;n.add=function(a,b){return X(this.f.add(a,b))};
n.clear=function(){return X(this.f.clear()).then(function(){})};
n.count=function(a){return X(this.f.count(a))};
n["delete"]=function(a){return X(this.f["delete"](a))};
n.get=function(a){return X(this.f.get(a))};
n.index=function(a){return new Lg(this.f.index(a))};
n.getName=function(){return this.f.name};
function Kg(a){var b=this;this.g=a;this.h=new Map;this.done=new P(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(){d(b.g.error)});
b.g.addEventListener("abort",function(){d(new Hg)})})}
Kg.prototype.abort=function(){this.g.abort();return this.done};
Kg.prototype.f=function(a){a=this.g.objectStore(a);var b=this.h.get(a);b||(b=new Jg(a),this.h.set(a,b));return b};
function Lg(a){this.f=a}
Lg.prototype.count=function(a){return X(this.f.count(a))};
Lg.prototype.get=function(a){return X(this.f.get(a))};
Lg.prototype.g=function(a,b){var c=this.f.openCursor(a,b);return Mg(c)};
function Ng(a,b){this.request=a;this.f=b}
function Mg(a){return X(a).then(function(b){return null===b?null:new Ng(a,b)})}
Ng.prototype["delete"]=function(){return X(this.f["delete"]()).then(function(){})};
Ng.prototype.getValue=function(){return this.f.value};
Ng.prototype.update=function(a){return X(this.f.update(a))};function Og(){Ig.apply(this,arguments)}
v(Og,Ig);Og.prototype.wa=function(a,b){var c=this.f.createObjectStore(a,b);return new Pg(c)};
Og.prototype.G=function(a,b){var c=this.f.transaction(a,b);return new Qg(c)};
function Pg(){Jg.apply(this,arguments)}
v(Pg,Jg);Pg.prototype.index=function(a){return new Rg(this.f.index(a))};
function Qg(){Kg.apply(this,arguments);this.i=new Map}
v(Qg,Kg);Qg.prototype.f=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Pg(a),this.i.set(a,b));return b};
function Rg(){Lg.apply(this,arguments)}
v(Rg,Lg);Rg.prototype.g=function(a,b){var c=this.f.openCursor(a,b);return Sg(c)};
function Tg(){Ng.apply(this,arguments)}
v(Tg,Ng);function Sg(a){return X(a).then(function(b){return null===b?null:new Tg(a,b)})}
;function Ug(a,b,c,d,e){function f(){q||(q=new d(g.result));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var k=c.f,h=c.blocking,l=c.g,m=c.upgrade,q;m&&g.addEventListener("upgradeneeded",function(u){if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var p=f(),y=new e(g.transaction);m(p,u.oldVersion,u.newVersion,y)});
k&&g.addEventListener("blocked",function(){k()});
return X(g).then(function(u){h&&u.addEventListener("versionchange",function(){h()});
l&&u.addEventListener("close",function(){l()});
return f()})}
function Vg(a){a=void 0===a?{}:a;return Ug("LogsDataBase",1,a,Ig,Kg)}
function Wg(a,b){b=void 0===b?{}:b;return Ug("yt-idb-test-do-not-use",a,b,Og,Qg)}
;var Xg,Yg=["getAll","getAllKeys","getKey","openKeyCursor"],Zg=["getAll","getAllKeys","getKey","openKeyCursor"];
function $g(){return O(this,function b(){var c,d,e,f,g,k,h,l;return x(b,function(m){switch(m.f){case 1:if(!self.indexedDB)return m["return"](!1);c=t(Yg);for(d=c.next();!d.done;d=c.next())if(e=d.value,!IDBObjectStore.prototype[e])return m["return"](!1);f=t(Zg);for(d=f.next();!d.done;d=f.next())if(g=d.value,!IDBIndex.prototype[g])return m["return"](!1);if(!IDBObjectStore.prototype.getKey)return m["return"](!1);sa(m);l=!1;return w(m,Wg(void 0,{blocking:function(){l=!0;k&&(k.close(),k=void 0)}}),5);
case 5:return k=m.g,w(m,Wg(k.f.version+1),6);case 6:return h=m.g,h.close(),h=void 0,m["return"](l);case 3:ua(m);if(k)try{k.close()}catch(q){}if(h)try{h.close()}catch(q){}va(m);break;case 2:return ta(m),m["return"](!1)}})})}
function ah(){return void 0!==Xg?Ud(Xg):new P(function(a){$g().then(function(b){Xg=b;a(b)})})}
;var bh;function ch(){return O(this,function b(){return x(b,function(c){if(!bh)try{bh=Vg({upgrade:function(d,e){1>e&&d.wa("LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1})}})}catch(d){"VersionError"===d&&T(d),bh=Vg()}return c["return"](bh)})})}
function dh(a){return O(this,function c(){var d,e,f,g,k;return x(c,function(h){switch(h.f){case 1:return w(h,ch(),2);case 2:return d=h.g,e=d.G(["LogsRequestsStore"],"readwrite").f("LogsRequestsStore"),w(h,eh(),3);case 3:return f=h.g,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),wb:f}),w(h,e.add(g),4);case 4:return k=h.g,h["return"](k)}})})}
function fh(){return O(this,function b(){var c,d,e,f,g,k,h,l;return x(b,function(m){switch(m.f){case 1:return w(m,eh(),2);case 2:return c=m.g,d=["NEW",c,0],e=["NEW",c,W()],f=IDBKeyRange.bound(d,e),w(m,ch(),3);case 3:return g=m.g,k=g.G(["LogsRequestsStore"],"readwrite"),w(m,k.f("LogsRequestsStore").index("newRequest").g(f,"prev"),4);case 4:h=m.g;l=void 0;if(null===h||void 0===h||!h.getValue()){m.F(5);break}l=h.getValue();l.status="QUEUED";return w(m,h.update(l),5);case 5:return m["return"](l)}})})}
function gh(a){return O(this,function c(){var d,e,f;return x(c,function(g){switch(g.f){case 1:return w(g,ch(),2);case 2:return d=g.g,e=d.G(["LogsRequestsStore"],"readwrite").f("LogsRequestsStore"),w(g,e.get(a),3);case 3:return f=g.g,f.status="QUEUED",w(g,X(e.f.put(f,void 0)),4);case 4:return g["return"](f)}})})}
function hh(a){return O(this,function c(){var d,e,f;return x(c,function(g){switch(g.f){case 1:return w(g,ch(),2);case 2:return d=g.g,e=d.G(["LogsRequestsStore"],"readwrite").f("LogsRequestsStore"),w(g,e.get(a),3);case 3:return f=g.g,f.status="NEW",f.oa+=1,w(g,X(e.f.put(f,void 0)),4);case 4:return g["return"](f)}})})}
function ih(){return O(this,function b(){var c,d;return x(b,function(e){if(1==e.f)return w(e,ch(),2);if(3!=e.f)return c=e.g,w(e,c.count("LogsRequestsStore"),3);d=e.g;return e["return"](!d)})})}
function jh(a){return O(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,ch(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function eh(){return O(this,function b(){var c;return x(b,function(d){if(1==d.f){Gg.f||(Gg.f=new Gg);var e={};var f=bd([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=S("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in ze||(e["X-Origin"]=window.location.origin),U("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in ze&&(e["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));e=Ud(e);return w(d,e,2)}c=d.g;return d["return"](yg(c))})})}
;var kh=Se("network_polling_interval",3E4);function lh(){this.i=0;this.f=window.navigator.onLine;mh(this);nh(this)}
function oh(){lh.f||(lh.f=new lh);return lh.f}
function ph(a){var b=qh,c=rh;a.i||sh(a);(new P(function(d){a.h=d})).then(function(){b();
c&&(a.g=c)})}
function nh(a){window.addEventListener("online",function(){a.f=!0;a.h&&a.h()})}
function mh(a){window.addEventListener("offline",function(){a.f=!1;a.g&&a.g()})}
function sh(a){a.i=Ef(function(){window.navigator.onLine?(!1===a.f&&T(Error("NetworkStatusManager missed online event.")),a.f=!0,a.h&&a.h()):(!0===a.f&&T(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.g&&a.g());sh(a)},kh)}
;var th=Se("networkless_throttle_timeout")||100,uh=Se("networkless_retry_attempts")||1,vh=0;function wh(a,b){ah().then(function(c){if(c&&!U("networkless_bypass_write")){var d={url:a,options:b,timestamp:W(),status:"NEW",oa:0};dh(d).then(function(e){d.id=e;e=oh();e.f?xh(d):ph(e)})["catch"](function(){xh(d);
T(Error("Networkless Logging: Log request setting to indexedDB failed."))})}else ff(a,b)})}
function qh(){vh||(vh=Gf(function(){xh();vh=0;qh()},th))}
function rh(){If(vh);vh=0}
function xh(a){O(this,function c(){var d=this,e,f,g,k;return x(c,function(h){switch(h.f){case 1:e=d;if(!a)return w(h,fh(),6);if(!a.id){h.F(3);break}return w(h,gh(a.id),5);case 5:a=h.g;h.F(3);break;case 6:if(a=h.g){h.F(3);break}return w(h,ih(),8);case 8:return(f=h.g)&&rh(),h["return"]();case 3:if(yh(a))g=a.options.onError?a.options.onError:function(){},k=a.options.onSuccess?a.options.onSuccess:function(){},a.options.onError=function(l,m){return O(e,function u(){return x(u,function(p){if(1==p.f)return a&&
a.id?a.oa<uh?w(p,hh(a.id),6):w(p,jh(a.id),2):p.F(2);
2!=p.f&&(vh||ph(oh()),g(l,m));g(l,m);p.f=0})})},a.options.onSuccess=function(l,m){return O(e,function u(){return x(u,function(p){if(1==p.f)return a&&a.id?w(p,jh(a.id),2):p.F(2);
k(l,m);p.f=0})})},ff(a.url,a.options);
else if(Ie(Error("Networkless Logging: Stored logs request expired age limit")),a.id)return w(h,jh(a.id),0);h.F(0)}})})}
function yh(a){a=a.timestamp;return 2592E6<=W()-a?!1:!0}
;function zh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(t(c)))}
v(zh,Error);function Ah(a){var b=this;this.f=null;a?this.f=a:vg()&&(this.f=og());Ef(function(){Fg(b)},5E3)}
Ah.prototype.isReady=function(){!this.f&&vg()&&(this.f=og());return!!this.f};
function rg(a,b,c,d){!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ie(new zh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw b=new zh("innertube xhrclient not ready",b,c,d),T(b),b.f=0,b;var e={headers:{"Content-Type":"application/json"},method:"POST",D:c,za:"JSON",S:function(){d.S()},
ya:d.S,onSuccess:function(p,y){if(d.onSuccess)d.onSuccess(y)},
xa:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,y){if(d.onError)d.onError(y)},
Db:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Qa;g&&(f=g);g=a.f.Sa||!1;var k=wg(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var h="/youtubei/"+a.f.innertubeApiVersion+"/"+b,l={alt:"json"};a.f.Ra&&e.headers.Authorization||(l.key=a.f.innertubeApiKey);h=Me(""+f+h,l||{},!0);var m;if(d.retry&&U("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=Dg(b,c,k,g))){var q=e.onSuccess,u=e.xa;e.onSuccess=function(p,y){Eg(m);q(p,y)};
c.xa=function(p,y){Eg(m);u(p,y)}}try{U("use_fetch_for_op_xhr")?cf(h,e):U("networkless_logging")&&d.retry?(e.method="POST",wh(h,e)):(e.method="POST",e.D||(e.D={}),ff(h,e))}catch(p){if("InvalidAccessError"==p.name)m&&(Eg(m),m=0),Ie(Error("An extension is blocking network request."));
else throw p;}m&&Ef(function(){Fg(a)},5E3)}
;function Bh(a,b,c){c=void 0===c?{}:c;var d=Ah;S("ytLoggingEventsDefaultDisabled",!1)&&Ah==Ah&&(d=null);tg(a,b,d,c)}
;var Ch=[{ua:function(a){return"Cannot read property '"+a.key+"'"},
na:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ua:function(a){return"Cannot call '"+a.key+"'"},
na:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];var Dh=new Set,Eh=0;function Fh(a){Gh(a,"WARNING")}
function Gh(a,b,c,d,e){e=void 0===e?{}:e;e.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=e||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var f=void 0===f?!1:f;if(a&&(U("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),(window&&
window.yterr||f)&&!(5<=Eh)&&0!==a.f)){var g=xc(a);f=g.message||"Unknown Error";d=g.name||"UnknownError";e=g.lineNumber||"Not available";var k=g.fileName||"Not available";g=g.stack||a.g||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0,l=0;l<a.args.length;l++){var m=a.args[l],q="params."+l;h+=q.length;if(m)if(Array.isArray(m))for(var u=c,p=0;p<m.length&&!(m[p]&&(h+=Hh(p,m[p],q,u),500<h));p++);else if("object"===typeof m)for(u in u=void 0,p=c,m){if(m[u]&&(h+=Hh(u,m[u],
q,p),500<h))break}else c[q]=String(JSON.stringify(m)).substring(0,500),h+=c[q].length;else c[q]=String(JSON.stringify(m)).substring(0,500),h+=c[q].length;if(500<=h)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in q=0,m){if(m[l]&&(h="params."+l,u=String(JSON.stringify(m[l])).substr(0,500),c[h]=u,q+=h.length+u.length,500<q))break}else c.params=String(JSON.stringify(m)).substr(0,500);c={message:f,name:d,lineNumber:e,fileName:k,stack:g,params:c};a=Number(a.columnNumber);
isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=t(Ch);for(f=a.next();!f.done;f=a.next())if(f=f.value,f.na[c.name])for(e=t(f.na[c.name]),d=e.next();!d.done;d=e.next())if(k=d.value,d=c.message.match(k.regexp)){c.params["error.original"]=d[0];e=k.groups;k={};for(g=0;g<e.length;g++)k[e[g]]=d[g+1],c.params["error."+e[g]]=d[g+1];c.message=f.ua(k);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(!(Dh.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){if(U("kevlar_gel_error_routing")){f=
b;d={stackTrace:c.stack};c.fileName&&(d.filename=c.fileName);a=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(d.lineNumber=Number(a[0]),d.columnNumber=Number(a[1])):d.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:c.message};"ERROR"===f?a.level="ERROR_LEVEL_ERROR":"WARNING"===f&&(a.level="ERROR_LEVEL_WARNNING");f={isObfuscated:!0,browserStackInfo:d};d={pageUrl:window.location.href,
kvPairs:[]};if(e=c.params)for(k=t(Object.keys(e)),g=k.next();!g.done;g=k.next())g=g.value,d.kvPairs.push({key:"client."+g,value:String(e[g])});Bh("clientError",{errorMetadata:d,stackTrace:f,logMessage:a});kg()}a=c.params||{};b={jb:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},D:{url:S("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.D){c.stack&&(b.D.stack=c.stack);f=
t(Object.keys(a));for(d=f.next();!d.done;d=f.next())d=d.value,b.D["client."+d]=a[d];if(a=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=t(Object.keys(a)),d=f.next();!d.done;d=f.next())d=d.value,b.D[d]=a[d];a=S("SERVER_NAME",void 0);f=S("SERVER_VERSION",void 0);a&&f&&(b.D["server.name"]=a,b.D["server.version"]=f)}ff(S("ECATCHER_REPORT_HOST","")+"/error_204",b);Dh.add(c.message);Eh++}}}
function Hh(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Ih(a,b,c,d,e,f){Gh(a,void 0===b?"ERROR":b,c,d,f)}
;var Jh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Jh,void 0);function Kh(a){ye(Jh,arguments)}
;function Lh(a){a&&(a.dataset?a.dataset[Mh("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Nh(a,b){return a?a.dataset?a.dataset[Mh(b)]:a.getAttribute("data-"+b):null}
var Oh={};function Mh(a){return Oh[a]||(Oh[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ph=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Qh=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Rh(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ph,""),c=c.replace(Qh,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Sh(a,b,c)}
function Sh(a,b,c){c=void 0===c?null:c;var d=Th(a),e=document.getElementById(d),f=e&&Nh(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Sf(d,b),b=""+Pa(b),Uh[b]=f),g||(e=Vh(a,d,function(){Nh(e,"loaded")||(Lh(e),Vf(d),V(Ua(Wf,d),0))},c)))}
function Vh(a,b,c,d){d=void 0===d?null:d;var e=Ic(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Zb(e,Mc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Wh(a){a=Th(a);var b=document.getElementById(a);b&&(Wf(a),b.parentNode.removeChild(b))}
function Xh(a,b){if(a&&b){var c=""+Pa(b);(c=Uh[c])&&Uf(c)}}
function Th(a){var b=document.createElement("a");Yb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ac(a)}
var Uh={};var Yh=[],Zh=!1;function $h(){if("1"!=hb(Ae(),"args","privembed")){var a=function(){Zh=!0;"google_ad_status"in window?R("DCLKSTAT",1):R("DCLKSTAT",2)};
Rh("//static.doubleclick.net/instream/ad_status.js",a);Yh.push(Gf(function(){Zh||"google_ad_status"in window||(Xh("//static.doubleclick.net/instream/ad_status.js",a),Zh=!0,R("DCLKSTAT",3))},5E3))}}
function ai(){return parseInt(S("DCLKSTAT",0),10)}
;function bi(){this.g=!1;this.f=null}
bi.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,Rh(b,function(){g.g=!1;window.botguard?ci(g,c,d,f):(Wh(b),Fh(new zh("Unable to load Botguard","from "+b)))},e)):a&&(eval(a),window.botguard?ci(this,c,d,f):Fh(Error("Unable to load Botguard from JS")))};
function ci(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:Ia)}catch(e){Fh(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){Fh(e)}c&&c(b)}}
bi.prototype.dispose=function(){this.f=null};var di=new bi;function ei(){return!!di.f}
function fi(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return di.f?di.f.invoke(void 0,void 0,a):null}
;var gi=D().toString();
function hi(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=D();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(gi)for(a=1,b=0;b<gi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^gi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ii=z.ytLoggingDocDocumentNonce_||hi();A("ytLoggingDocDocumentNonce_",ii,void 0);var ji=1;function ki(a){this.f=a}
ki.prototype.getAsJson=function(){var a={};void 0!==this.f.trackingParams?a.trackingParams=this.f.trackingParams:(a.veType=this.f.veType,void 0!==this.f.veCounter&&(a.veCounter=this.f.veCounter),void 0!==this.f.elementIndex&&(a.elementIndex=this.f.elementIndex));void 0!==this.f.dataElement&&(a.dataElement=this.f.dataElement.getAsJson());void 0!==this.f.youtubeData&&(a.youtubeData=this.f.youtubeData);return a};
ki.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
ki.prototype.isClientVe=function(){return!this.f.trackingParams&&!!this.f.veType};function li(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function mi(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ni(a){return S(mi(void 0===a?0:a),void 0)}
A("yt_logging_screen.getRootVeType",ni,void 0);function oi(){var a=ni(0),b;a?b=new ki({veType:a,youtubeData:void 0}):b=null;return b}
function pi(){var a=S("csn-to-ctt-auth-info");a||(a={},R("csn-to-ctt-auth-info",a));return a}
function qi(a){a=void 0===a?0:a;var b=S(li(a));if(!b&&!S("USE_CSN_FALLBACK",!0))return null;b||0!=a||(U("kevlar_client_side_screens")||U("c3_client_side_screens")?b="UNDEFINED_CSN":b=S("EVENT_ID"));return b?b:null}
A("yt_logging_screen.getCurrentCsn",qi,void 0);function ri(a,b,c){var d=pi();(c=qi(c))&&delete d[c];b&&(d[a]=b)}
function si(a){return pi()[a]}
A("yt_logging_screen.getCttAuthInfo",si,void 0);function ti(a,b,c,d){c=void 0===c?0:c;if(a!==S(li(c))||b!==S(mi(c)))if(ri(a,d,c),R(li(c),a),R(mi(c),b),0==c||U("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&tg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ii,clientScreenNonce:a},Ah)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
A("yt_logging_screen.setCurrentScreen",ti,void 0);function ui(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=J(K(3,window.location.href));g&&f.push(g);g=J(K(3,d));if(0<=Za(f,g)||!g&&0==d.lastIndexOf("/",0))if(U("autoescape_tempdata_url")&&(f=document.createElement("a"),Yb(f,d),d=f.href),d){g=d.match(bc);d=g[5];f=g[6];g=g[7];var k="";d&&(k+=d);f&&(k+="?"+f);g&&(k+="#"+g);d=k;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||
b.ved)&&(b=Object.assign({csn:qi()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&(e=b,b="ST-"+ac(d).toString(36),e=e?dc(e):"",zg(b,e,h||5))}else h=b,e="ST-"+ac(d).toString(36),h=h?dc(h):"",zg(e,h,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=ec(a,l)+m;a=a instanceof H?a:Pb(a);c.href=Nb(a)}return!0}
;function vi(a,b){this.version=a;this.args=b}
;function wi(a,b){this.topic=a;this.f=b}
wi.prototype.toString=function(){return this.topic};var xi=B("ytPubsub2Pubsub2Instance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.R;Q.prototype.publish=Q.prototype.P;Q.prototype.clear=Q.prototype.clear;A("ytPubsub2Pubsub2Instance",xi,void 0);var yi=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",yi,void 0);var zi=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",zi,void 0);var Ai=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",Ai,void 0);
A("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Bi(a,b){var c=Ci();c&&c.publish.call(c,a.toString(),a,b)}
function Di(a){var b=Ei,c=Ci();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(yi[d])try{if(f&&b instanceof wi&&b!=e)try{var k=b.f,h=f;if(!h.args||!h.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.K){var l=new k;k.K=l.version}var m=k.K}catch(q){}if(!m||h.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(k,
eb(h.args))}catch(q){throw q.message="yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+q.message,q;}a.call(window,f)}catch(q){T(q)}},Ai[b.toString()]?B("yt.scheduler.instance")?Gf(g):V(g,0):g())});
yi[d]=!0;zi[b.toString()]||(zi[b.toString()]=[]);zi[b.toString()].push(d);return d}
function Fi(){var a=Gi,b=Di(function(c){a.apply(void 0,arguments);Hi(b)});
return b}
function Hi(a){var b=Ci();b&&("number"===typeof a&&(a=[a]),G(a,function(c){b.unsubscribeByKey(c);delete yi[c]}))}
function Ci(){return B("ytPubsub2Pubsub2Instance")}
;function Ii(a){vi.call(this,1,arguments);this.csn=a}
v(Ii,vi);var Ei=new wi("screen-created",Ii),Ji=[],Ki=0;function Li(a,b,c){var d=U("use_default_events_client")?void 0:Ah;b={csn:a,parentVe:b.getAsJson(),childVes:ab(c,function(f){return f.getAsJson()})};
c=t(c);for(var e=c.next();!e.done;e=c.next())e=e.value.getAsJson(),(kb(e)||!e.trackingParams&&!e.veType)&&Ih(Error("Child VE logged with no data"),"WARNING");c={ga:si(a),T:a};"UNDEFINED_CSN"==a?Mi("visualElementAttached",b,c):d?tg("visualElementAttached",b,d,c):Bh("visualElementAttached",b,c)}
function Mi(a,b,c){Ji.push({payloadName:a,payload:b,options:c});Ki||(Ki=Fi())}
function Gi(a){if(Ji){for(var b=t(Ji),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,tg(c.payloadName,c.payload,null,c.options));Ji.length=0}Ki=0}
;function Ni(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||nb(b);this.assets=a.assets||{};this.attrs=a.attrs||nb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Ni.prototype.clone=function(){var a=new Ni,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ka(c)?a[b]=nb(c):a[b]=c}return a};function Oi(){M.call(this);this.f=[]}
v(Oi,M);Oi.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.yb)}M.prototype.o.call(this)};var Pi=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Qi(a){a=a||"";if(window.spf){var b=a.match(Pi);spf.style.load(a,b?b[1]:"",void 0)}else Ri(a)}
function Ri(a){var b=Si(a),c=document.getElementById(b),d=c&&Nh(c,"loaded");d||c&&!d||(c=Ti(a,b,function(){Nh(c,"loaded")||(Lh(c),Vf(b),V(Ua(Wf,b),0))}))}
function Ti(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Mc(a);d.rel="stylesheet";d.href=Ab(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Si(a){var b=Ic(document,"A"),c=new tb(ub,"This URL is never added to the DOM");wb(c);wb(c);Yb(b,new H(Lb,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ac(a)}
;function Ui(a,b,c,d){M.call(this);var e=this;this.m=this.aa=a;this.X=b;this.u=!1;this.api={};this.Y=this.H=null;this.I=new Q;Tc(this,Ua(Uc,this.I));this.j={};this.U=this.Z=this.h=this.fa=this.f=null;this.N=!1;this.l=this.C=null;this.ba={};this.Ca=["onReady"];this.ea=null;this.qa=NaN;this.V={};this.i=d;Vi(this);this.ca("WATCH_LATER_VIDEO_ADDED",this.Ua.bind(this));this.ca("WATCH_LATER_VIDEO_REMOVED",this.Va.bind(this));this.ca("onAdAnnounce",this.Ea.bind(this));this.Da=new Oi(this);Tc(this,Ua(Uc,this.Da));
this.W=0;c?this.W=V(function(){e.loadNewVideoConfig(c)},0):d&&(Wi(this),Xi(this))}
v(Ui,M);n=Ui.prototype;n.getId=function(){return this.X};
n.loadNewVideoConfig=function(a){if(!this.g){this.W&&(We(this.W),this.W=0);a instanceof Ni||(a=new Ni(a));this.fa=a;this.f=a.clone();Wi(this);this.Z||(this.Z=Yi(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.m.style.width=Wc(Number(a)||a);if(a=this.f.attrs.height)this.m.style.height=Wc(Number(a)||a);Xi(this);this.u&&Zi(this)}};
function Wi(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.X,a.f.attrs.id=a.X);a.m.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
n.Ia=function(){return this.fa};
function Zi(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function $i(a){var b=!0,c=aj(a);c&&a.f&&(a=bj(a),b=Nh(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Xi(a){if(!a.g&&!a.N){var b=$i(a);if(b&&"html5"==(aj(a)?"html5":null))a.U="html5",a.u||cj(a);else if(dj(a),a.U="html5",b&&a.l)a.aa.appendChild(a.l),cj(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.C=function(){c=!0;if(a.i)var d=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(d=a.f.args.fflags);d="true"==Je(d||"").player_bootstrap_method?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.aa,e,a.i);cj(a)};
a.N=!0;b?a.C():(Rh(bj(a),a.C),(b=a.i?a.i.cssUrl:a.f.assets.css)&&Qi(b),ej(a)&&!c&&A("yt.player.Application.create",null,void 0))}}}
function aj(a){var b=Ec(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
function cj(a){if(!a.g){var b=aj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.N=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||fj(a)):a.qa=V(function(){cj(a)},50)}}
function fj(a){Vi(a);a.u=!0;var b=aj(a);b.addEventListener&&(a.H=gj(a,b,"addEventListener"));b.removeEventListener&&(a.Y=gj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=gj(a,b,e))}for(var f in a.j)a.H(f,a.j[f]);Zi(a);a.Z&&a.Z(a.api);a.I.P("onReady",a.api)}
function gj(a,b,c){var d=b[c];return function(){try{return a.ea=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ea=e,Ie(e))}}}
function Vi(a){a.u=!1;if(a.Y)for(var b in a.j)a.Y(b,a.j[b]);for(var c in a.V)We(parseInt(c,10));a.V={};a.H=null;a.Y=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ca.bind(a);a.api.removeEventListener=a.Za.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ja.bind(a);a.api.getPlayerType=a.Ka.bind(a);a.api.getCurrentVideoConfig=a.Ia.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Ta.bind(a)}
n.Ta=function(){return this.u};
n.ca=function(a,b){var c=this,d=Yi(this,b);if(d){if(!(0<=Za(this.Ca,a)||this.j[a])){var e=hj(this,a);this.H&&this.H(a,e)}this.I.subscribe(a,d);"onReady"==a&&this.u&&V(function(){d(c.api)},0)}};
n.Za=function(a,b){if(!this.g){var c=Yi(this,b);c&&he(this.I,a,c)}};
function Yi(a,b){var c=b;if("string"==typeof b){if(a.ba[b])return a.ba[b];c=function(){var d=B(b);d&&d.apply(z,arguments)};
a.ba[b]=c}return c?c:null}
function hj(a,b){var c="ytPlayer"+b+a.X;a.j[b]=c;z[c]=function(d){var e=V(function(){if(!a.g){a.I.P(b,d);var f=a.V,g=String(e);g in f&&delete f[g]}},0);
lb(a.V,String(e))};
return c}
n.Ea=function(a){Vf("a11y-announce",a)};
n.Ua=function(a){Vf("WATCH_LATER_VIDEO_ADDED",a)};
n.Va=function(a){Vf("WATCH_LATER_VIDEO_REMOVED",a)};
n.Ka=function(){return this.U||(aj(this)?"html5":null)};
n.Ja=function(){return this.ea};
function dj(a){a.cancel();Vi(a);a.U=null;a.f&&(a.f.loaded=!1);var b=aj(a);b&&($i(a)||!ej(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));for(a=a.aa;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){if(this.C){var a=bj(this);Xh(a,this.C)}We(this.qa);this.N=!1};
n.o=function(){dj(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){T(b)}this.ba=null;for(var a in this.j)z[this.j[a]]=null;this.fa=this.f=this.api=null;delete this.aa;delete this.m;M.prototype.o.call(this)};
function ej(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function bj(a){return a.i?a.i.jsUrl:a.f.assets.js}
;var ij={},jj="player_uid_"+(1E9*Math.random()>>>0);function kj(a){delete ij[a.getId()]}
;function lj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function mj(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return nj(a)}
function nj(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function oj(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function pj(a){a=void 0===a?!1:a;M.call(this);this.f=new Q(a);Tc(this,Ua(Uc,this.f))}
E(pj,M);pj.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
pj.prototype.j=function(a,b){this.g||this.f.P.apply(this.f,arguments)};function qj(a,b,c){pj.call(this);this.h=a;this.i=b;this.l=c}
v(qj,pj);function rj(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(Jd(a),d.i))}}
qj.prototype.o=function(){this.i=this.h=null;pj.prototype.o.call(this)};function sj(a){M.call(this);this.f=a;this.f.subscribe("command",this.Aa,this);this.h={};this.j=!1}
v(sj,M);n=sj.prototype;n.start=function(){this.j||this.g||(this.j=!0,rj(this.f,"RECEIVING"))};
n.Aa=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=C(this.bb,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&tj(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=uj(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=vj(a,c))&&this.j&&!this.g&&rj(this.f,a,c))}}};
n.bb=function(a,b){this.j&&!this.g&&rj(this.f,a,this.ia(a,b))};
n.ia=function(a,b){if(null!=b)return{value:b}};
function tj(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
n.o=function(){var a=this.f;a.g||he(a.f,"command",this.Aa,this);this.f=null;for(var b in this.h)tj(this,b);M.prototype.o.call(this)};function wj(a,b){sj.call(this,b);this.i=a;this.start()}
v(wj,sj);wj.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
wj.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function uj(a,b){switch(a){case "loadVideoById":return b=nj(b),[b];case "cueVideoById":return b=nj(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=oj(b),[b];case "cuePlaylist":return b=oj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function vj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
wj.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return sj.prototype.ia.call(this,a,b)};
wj.prototype.o=function(){sj.prototype.o.call(this);delete this.i};function xj(a,b,c){M.call(this);var d=this;c=c||S("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.u="*";this.i=c;this.sessionId=null;this.channel="widget";this.C=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.C&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.u=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Za(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
v(xj,M);xj.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.u)}catch(e){Ie(e)}}};
xj.prototype.o=function(){window.removeEventListener("message",this.m);M.prototype.o.call(this)};function yj(){var a=this.g=new xj(!!S("WIDGET_ID_ENFORCE")),b=C(this.Ya,this);a.j=b;a.l=null;this.g.channel="widget";if(a=S("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
n=yj.prototype;n.Ya=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,zj(this,a)),this.j[a]=!0)):this.va(a,b,c)};
n.va=function(){};
function zj(a,b){return C(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Ha=function(){this.l=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");G(this.i,this.Ba,this);this.i=[]};
n.ja=function(){return null};
function Aj(a,b){a.sendMessage("infoDelivery",b)}
n.Ba=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
n.sendMessage=function(a,b){this.Ba({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.g=null};function Bj(a){yj.call(this);this.f=a;this.h=[];this.addEventListener("onReady",C(this.Wa,this));this.addEventListener("onVideoProgress",C(this.gb,this));this.addEventListener("onVolumeChange",C(this.hb,this));this.addEventListener("onApiChange",C(this.ab,this));this.addEventListener("onPlaybackQualityChange",C(this.cb,this));this.addEventListener("onPlaybackRateChange",C(this.eb,this));this.addEventListener("onStateChange",C(this.fb,this));this.addEventListener("onWebglSettingsChanged",C(this.ib,
this))}
v(Bj,yj);n=Bj.prototype;n.va=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&lj(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=nj.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=mj.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=oj.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);lj(a)&&Aj(this,this.ja())}};
n.Wa=function(){var a=C(this.Ha,this);this.g.f=a};
n.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.ja=function(){if(!this.f)return null;var a=this.f.getApiInterface();db(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(k){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=D()/1E3;return b};
n.fb=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());Aj(this,a)};
n.cb=function(a){Aj(this,{playbackQuality:a})};
n.eb=function(a){Aj(this,{playbackRate:a})};
n.ab=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,k=f.length;g<k;g++){var h=f[g],l=this.f.getOption(e,h);b[e][h]=l}}this.sendMessage("apiInfoDelivery",b)};
n.hb=function(){Aj(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.gb=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());Aj(this,a)};
n.ib=function(){var a={sphericalProperties:this.f.getSphericalProperties()};Aj(this,a)};
n.dispose=function(){yj.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function Cj(a,b,c){M.call(this);this.f=a;this.i=c;this.j=zf(window,"message",C(this.l,this));this.h=new qj(this,a,b);Tc(this,Ua(Uc,this.h))}
v(Cj,M);Cj.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
Cj.prototype.o=function(){Af(this.j);this.f=null;M.prototype.o.call(this)};function Dj(){var a=nb(Ej),b;return Xd(new P(function(c,d){a.onSuccess=function(e){Ve(e)?c(e):d(new Fj("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Fj("Unknown request error","net.unknown",e))};
a.S=function(e){d(new Fj("Request timed out","net.timeout",e))};
b=ff("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Yd&&b.abort();
return Vd(c)})}
function Fj(a,b){F.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
v(Fj,F);function Gj(){this.g=0;this.f=null}
Gj.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),Pd(a)?a:Hj(a)):2===this.g&&b?(a=b.call(c,this.f),Pd(a)?a:Ij(a)):this};
Gj.prototype.getValue=function(){return this.f};
Gj.prototype.$goog_Thenable=!0;function Ij(a){var b=new Gj;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function Hj(a){var b=new Gj;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function Jj(a){F.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Kj;this.isTimeout=a instanceof Fj&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Yd}
v(Jj,F);Jj.prototype.name="BiscottiError";function Kj(){F.call(this,"Biscotti ID is missing from server")}
v(Kj,F);Kj.prototype.name="BiscottiMissingError";var Ej={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Lj=null;function De(){if("1"===hb(Ae(),"args","privembed"))return Vd(Error("Biscotti ID is not available in private embed mode"));Lj||(Lj=Xd(Dj().then(Mj),function(a){return Nj(2,a)}));
return Lj}
function Mj(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Kj;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Kj;a=a.id;Ee(a);Lj=Hj(a);Oj(18E5,2);return a}
function Nj(a,b){var c=new Jj(b);Ee("");Lj=Ij(c);0<a&&Oj(12E4,a-1);throw c;}
function Oj(a,b){V(function(){Xd(Dj().then(Mj,function(c){return Nj(b,c)}),Ia)},a)}
function Pj(){try{var a=B("yt.ads.biscotti.getId_");return a?a():De()}catch(b){return Vd(b)}}
;function Qj(a){if("1"!==hb(Ae(),"args","privembed")){a&&Ce();try{Pj().then(function(){},function(){}),V(Qj,18E5)}catch(b){T(b)}}}
;var Y=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function Rj(){this.f=S("ALT_PREF_COOKIE_NAME","PREF");var a=Ac.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
n=Rj.prototype;n.get=function(a,b){Sj(a);Tj(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){Sj(a);Tj(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
n.remove=function(a){Sj(a);Tj(a);delete Y[a]};
n.save=function(){zg(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in Y)delete Y[a]};
n.dump=function(){var a=[],b;for(b in Y)a.push(b+"="+encodeURIComponent(String(Y[b])));return a.join("&")};
function Tj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Sj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Uj(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ja(Rj);function Vj(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Wj(a)||c.some(function(e){return!Wj(e)}))throw Error("Only objects may be merged.");
c=t(c);for(d=c.next();!d.done;d=c.next())Xj(a,d.value);return a}
function Xj(a,b){for(var c in b)if(Wj(b[c])){if(c in a&&!Wj(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Xj(a[c],b[c])}else if(Yj(b[c])){if(c in a&&!Yj(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Zj(a[c],b[c])}else a[c]=b[c];return a}
function Zj(a,b){for(var c=t(b),d=c.next();!d.done;d=c.next())d=d.value,Wj(d)?a.push(Xj({},d)):Yj(d)?a.push(Zj([],d)):a.push(d);return a}
function Wj(a){return"object"===typeof a&&!Array.isArray(a)}
function Yj(a){return"object"===typeof a&&Array.isArray(a)}
;function ak(a,b){vi.call(this,1,arguments)}
v(ak,vi);function bk(a,b){vi.call(this,1,arguments)}
v(bk,vi);var ck=new wi("aft-recorded",ak),dk=new wi("timing-sent",bk);var ek=window;function fk(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var gk=ek.performance||ek.mozPerformance||ek.msPerformance||ek.webkitPerformance||new fk;var hk=!1;C(gk.clearResourceTimings||gk.webkitClearResourceTimings||gk.mozClearResourceTimings||gk.msClearResourceTimings||gk.oClearResourceTimings||Ia,gk);function ik(a){var b=jk(a);if(b.aft)return b.aft;a=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function kk(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Va("ytcsi."+(a||"")+"data_",b));return b}
function lk(a){a=kk(a);a.info||(a.info={});return a.info}
function jk(a){a=kk(a);a.tick||(a.tick={});return a.tick}
function mk(a){var b=kk(a).nonce;b||(b=hi(),kk(a).nonce=b);return b}
function nk(a){var b=jk(a||""),c=ik(a);c&&!hk&&(Bi(ck,new ak(Math.round(c-b._start),a)),hk=!0)}
;function ok(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a,void 0),A("ytcsi.reference",{},void 0));return a}
function pk(a){a=a||"";var b=B("ytcsi.reference");b||(ok(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=ok(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var qk=z.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",qk,void 0);function rk(){this.f=0}
function sk(){rk.f||(rk.f=new rk);return rk.f}
rk.prototype.tick=function(a,b,c){tk(this,"tick_"+a+"_"+b)||Bh("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
rk.prototype.info=function(a,b){var c=Object.keys(a).join("");tk(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,Bh("latencyActionInfo",c))};
rk.prototype.span=function(a,b){var c=Object.keys(a).join("");tk(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,Bh("latencyActionSpan",a))};
function tk(a,b){qk[b]=qk[b]||{count:0};var c=qk[b];c.count++;c.time=W();a.f||(a.f=Ef(function(){var d=W(),e;for(e in qk)qk[e]&&6E4<d-qk[e].time&&delete qk[e];a&&(a.f=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new zh("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Fh(c)),!0):!1}
;var Z={},uk=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid="requestIds",Z.GetBrowse_rid=
"requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",Z.ncnp="webInfo.nonPreloadedNodeCount",
Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",Z.ssdm="shellStartupDurationMs",Z.aq=
"tvInfo.appQuality",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",
Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),vk="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),wk={},xk=(wk.ccs="CANARY_STATE_",
wk.mver="MEASUREMENT_VERSION_",wk.pis="PLAYER_INITIALIZED_STATE_",wk.yt_pt="LATENCY_PLAYER_",wk.pa="LATENCY_ACTION_",wk.yt_vst="VIDEO_STREAM_TYPE_",wk),yk="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function zk(a){return!!S("FORCE_CSI_ON_GEL",!1)||U("csi_on_gel")||!!kk(a).useGel}
function Ak(a){a=kk(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function Bk(a,b,c){if(null!==b)if(lk(c)[a]=b,zk(c)){var d=b;b=Ak(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in uk){b=uk[a];0<=Za(vk,b)&&(d=!!d);a in xk&&"string"===typeof d&&(d=xk[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},k=0;k<d.length-1;k++){var h=d[k];g[h]={};g=g[h]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Vj({},e)}else 0<=Za(yk,a)||Fh(new zh("Unknown label logged with GEL CSI",
a)),f=void 0;f&&zk(c)&&(b=pk(c||""),Vj(b.info,f),b=Ak(c),"gelInfos"in b||(b.gelInfos={}),Vj(b.gelInfos,f),c=mk(c),sk().info(f,c))}else pk(c||"").info[a]=b}
function Ck(a,b,c){var d=jk(c);if(U("use_first_tick")&&Dk(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;gk.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),gk.mark(e))}e=b||W();d[a]=e;e=Ak(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||W();if(zk(c)){pk(c||"").tick[a]=b||W();e=mk(c);if("_start"===a){var f=sk();tk(f,"baseline_"+e)||Bh("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else sk().tick(a,e,b);nk(c);e=!0}else e=!1;if(!e){if(!B("yt.timing."+(c||"")+"pingSent_")&&
(f=S((c||"")+"TIMING_ACTION",void 0),e=jk(c),B("ytglobal.timing"+(c||"")+"ready_")&&f&&Dk("_start")&&ik(c)))if(nk(c),c)Ek(c);else{f=!0;var g=S("TIMING_WAIT",[]);if(g.length)for(var k=0,h=g.length;k<h;++k)if(!(g[k]in e)){f=!1;break}f&&Ek(c)}pk(c||"").tick[a]=b||W()}return d[a]}
function Dk(a,b){var c=jk(b);return a in c}
function Ek(a){if(!zk(a)){var b=jk(a),c=lk(a),d=b._start,e=S("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:S((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=ik(a);var k=jk(a),h=k.pbr,l=k.vc;k=k.pbs;h&&l&&k&&h<l&&l<k&&lk(a).yt_pvis&&"youtube"===e&&(Bk("yt_lt","hot_bg",a),e=b.vc,h=b.pbs,delete b.aft,c.aft=Math.round(h-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=W();m={};e=[];for(var q in b)"_"!==q.charAt(0)&&(h=Math.round(b[q]-d),m[q]=h,e.push(q+"."+h));f.rt=
e.join(",");b=!!c.ap;U("debug_csi_data")&&(c=B("yt.timing.csiData"),c||(c=[],Va("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var u in f)f.hasOwnProperty(u)&&(c+="&"+u+"="+f[u]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var p=void 0===p?"":p;rf(f,p)||of(f,void 0,void 0,void 0,p)}else of(f);A("yt.timing."+(a||"")+"pingSent_",!0,void 0);Bi(dk,new bk(m.aft+(Number(g)||0),a))}}
if(U("overwrite_polyfill_on_logging_lib_loaded")){var Fk=window;Fk.ytcsi&&(Fk.ytcsi.info=Bk,Fk.ytcsi.tick=Ck)};var Gk=null,Hk=null,Ik=null,Jk={};function Kk(a){var b=a.id;a=a.ve_type;var c=ji++;a=new ki({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Jk[b]=a;b=qi();c=oi();b&&c&&Li(b,c,[a])}
function Lk(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(ti(b,a),a=oi()))for(var c in Jk){var d=Jk[c];d&&Li(b,a,[d])}}
function Mk(a){Jk[a.id]=new ki({trackingParams:a.tracking_params})}
function Nk(a){var b=qi(),c=Jk[a.id];if(b&&c){a=U("use_default_events_client")?void 0:Ah;var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={ga:si(b),T:b};"UNDEFINED_CSN"==b?Mi("visualElementGestured",c,d):a?tg("visualElementGestured",c,a,d):Bh("visualElementGestured",c,d)}}
function Ok(a){a=a.ids;var b=qi();if(b)for(var c=0;c<a.length;c++){var d=Jk[a[c]];if(d){var e=b,f=U("use_default_events_client")?void 0:Ah;d={csn:e,ve:d.getAsJson(),eventType:1};var g={ga:si(e),T:e};"UNDEFINED_CSN"==e?Mi("visualElementShown",d,g):f?tg("visualElementShown",d,f,g):Bh("visualElementShown",d,g)}}}
;A("yt.setConfig",R,void 0);A("yt.config.set",R,void 0);A("yt.setMsg",Kh,void 0);A("yt.msgs.set",Kh,void 0);A("yt.logging.errors.log",Ih,void 0);
A("writeEmbed",function(){var a=S("PLAYER_CONFIG",void 0);Qj(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=S("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);S("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");b="player";var d=void 0===d?!0:d;b="string"===typeof b?Ec(b):b;var e=jj+"_"+Pa(b),f=ij[e];f&&d?a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true")?f.api.loadVideoByPlayerVars(a.args||
null):f.loadNewVideoConfig(a):(f=new Ui(b,e,a,void 0),ij[e]=f,Vf("player-added",f.api),Tc(f,Ua(kj,f)));a=f.api;Gk=a;a.addEventListener("onScreenChanged",Lk);a.addEventListener("onLogClientVeCreated",Kk);a.addEventListener("onLogServerVeCreated",Mk);a.addEventListener("onLogVeClicked",Nk);a.addEventListener("onLogVesShown",Ok);d=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?Ik=new Bj(a):S("ENABLE_POST_API")&&"string"===typeof d&&"string"===typeof c&&(Hk=new Cj(window.parent,d,c),Ik=new wj(a,Hk.h));
$h()},void 0);
A("yt.www.watch.ads.restrictioncookie.spr",function(a){of(a+"mac_204?action_fcts=1");return!0},void 0);
var Pk=He(function(){Ck("ol");var a=Rj.getInstance(),b=!!((Uj("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Hd(document.body,"exp-invert-logo"))if(c&&!Hd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Hd(d,"inverted-hdpi")){var e=Fd(d);Gd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Hd(document.body,"inverted-hdpi")&&Id();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Uj(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete Y[b]:(c=d.toString(16),Y[b]=c.toString()),a.save())}),Qk=He(function(){var a=Gk;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();S("PL_ATT")&&di.dispose();a=0;for(var b=Yh.length;a<b;a++)If(Yh[a]);Yh.length=0;Wh("//static.doubleclick.net/instream/ad_status.js");Zh=!1;R("DCLKSTAT",0);Vc(Ik,Hk);if(a=Gk)a.removeEventListener("onScreenChanged",Lk),a.removeEventListener("onLogClientVeCreated",Kk),a.removeEventListener("onLogServerVeCreated",Mk),a.removeEventListener("onLogVeClicked",Nk),a.removeEventListener("onLogVesShown",Ok),a.destroy();Jk={}});
window.addEventListener?(window.addEventListener("load",Pk),window.addEventListener("unload",Qk)):window.attachEvent&&(window.attachEvent("onload",Pk),window.attachEvent("onunload",Qk));Va("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||ei);Va("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||fi);Va("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||ai);
Va("yt.player.exports.navigate",B("yt.player.exports.navigate")||ui);Va("yt.util.activity.init",B("yt.util.activity.init")||Kf);Va("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Nf);Va("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Lf);}).call(this);
