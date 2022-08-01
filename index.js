// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).dnanvariance={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(r,t)||c.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,e.get),p&&f&&f.call(r,t,e.set),r};var l=e;function s(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(r){var t=function(r){return"/"===r.charAt(0)}(r),e="/"===b(r,-1);return(r=function(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}(y(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function y(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var b="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},v=/./;function d(r){return"boolean"==typeof r}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return j&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var h,m="function"==typeof Symbol?Symbol.toStringTag:"";h=_()?function(r){var t,e,n,o,u;if(null==r)return g.call(r);e=r[m],u=m,t=null!=(o=r)&&w.call(o,u);try{r[m]=void 0}catch(t){return g.call(r)}return n=g.call(r),t?r[m]=e:delete r[m],n}:function(r){return g.call(r)};var O=h,E=Boolean.prototype.toString;var S=_();function N(r){return"object"==typeof r&&(r instanceof Boolean||(S?function(r){try{return E.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function A(r){return d(r)||N(r)}function P(){return new Function("return this;")()}s(A,"isPrimitive",d),s(A,"isObject",N);var T="object"==typeof self?self:null,B="object"==typeof window?window:null,x="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},k="object"==typeof x?x:null;var M=function(r){if(arguments.length){if(!d(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return P()}if(T)return T;if(B)return B;if(k)return k;throw new Error("unexpected error. Unable to resolve global object.")}(),V=M.document&&M.document.childNodes,C=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var G,L=/^\s*function\s*([^(]*)/i;s(F,"REGEXP",L),G=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};var q=G;function I(r){return null!==r&&"object"==typeof r}var J=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!q(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(I);function R(r){var t,e,n,o;if(("Object"===(e=O(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=L.exec(n.toString()))return t[1]}return I(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(I,"isObjectLikeArray",J);var U="function"==typeof v||"object"==typeof C||"function"==typeof V?function(r){return R(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?R(r).toLowerCase():t};var X,z,D=Object.getPrototypeOf;z=Object.getPrototypeOf,X="function"===U(z)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===O(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var H=X;function K(r){return null==r?null:(r=Object(r),H(r))}var Q=Math.floor;function W(r,t,e,n,o){var u,i,f,a,c,l,s,p,y,b,v,d,j,_;if(u=o,r<8){for(v=0,d=0,_=0;_<r;_++)(j=e[u])==j&&(v+=j,d+=1),u+=n;return t[0]+=v,t[1]+=d,t}if(r<=128){for(i=0,f=0,a=0,c=0,l=0,s=0,p=0,y=0,d=0,b=r%8,_=0;_<r-b;_+=8)(j=e[u])==j&&(i+=j,d+=1),(j=e[u+=n])==j&&(f+=j,d+=1),(j=e[u+=n])==j&&(a+=j,d+=1),(j=e[u+=n])==j&&(c+=j,d+=1),(j=e[u+=n])==j&&(l+=j,d+=1),(j=e[u+=n])==j&&(s+=j,d+=1),(j=e[u+=n])==j&&(p+=j,d+=1),(j=e[u+=n])==j&&(y+=j,d+=1),u+=n;for(v=i+f+(a+c)+(l+s+(p+y));_<r;_++)(j=e[u])==j&&(v+=j,d+=1),u+=n;return t[0]+=v,t[1]+=d,t}return d=Q(r/2),W(d-=d%8,t,e,n,u)+W(r-d,t,e,n,u+d*n)}var Y=[0,0];function Z(r,t,e,n){var o,u,i,f,a,c,l,s,p;if(r<=0)return NaN;if(1===r||0===n)return(l=e[0])==l&&r-t>0?0:NaN;if(u=n<0?(1-r)*n:0,Y[0]=0,Y[1]=0,W(r,Y,e,n,u),(f=(s=Y[1])-t)<=0)return NaN;for(o=Y[0]/s,i=0,a=0,p=0;p<r;p++)(l=e[u])==l&&(i+=(c=l-o)*c,a+=c),u+=n;return i/f-a/s*(a/f)}var $,rr=[0,0];s(Z,"ndarray",(function(r,t,e,n,o){var u,i,f,a,c,l,s,p,y;if(r<=0)return NaN;if(1===r||0===n)return(s=e[o])==s&&r-t>0?0:NaN;if(rr[0]=0,rr[1]=0,W(r,rr,e,n,o),(a=(p=rr[1])-t)<=0)return NaN;for(u=rr[0]/p,i=o,f=0,c=0,y=0;y<r;y++)(s=e[i])==s&&(f+=(l=s-u)*l,c+=l),i+=n;return f/a-c/p*(c/a)}));var tr=function(r){try{return require(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===O(r))return!0;r=K(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}(function(){var r=Array.prototype.slice.call(arguments,0);return p(y(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}("/home/runner/work/stats-base-dnanvariance/stats-base-dnanvariance/node_modules/@stdlib/stats-base-dnanvariancepn/lib","./native.js")),er=$=tr instanceof Error?Z:tr;const{ndarray:nr}=$;function or(r,t,e,n){return er(r,t,e,n)}function ur(r,t,e,n,o){return nr(r,t,e,n,o)}s(or,"ndarray",ur),r.default=or,r.ndarray=ur,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map