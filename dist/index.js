"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(k,v){
var f=require('@stdlib/stats-base-dnanvariancepn/dist').ndarray;function x(e,r,n,a,y){return f(e,r,n,a,y)}v.exports=x
});var c=i(function(w,s){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=t();function l(e,r,n,a){return m(e,r,n,a,j(e,a))}s.exports=l
});var o=i(function(z,q){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),_=t();R(d,"ndarray",_);q.exports=d
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=o(),u,p=O(E(__dirname,"./native.js"));b(p)?u=g:u=p;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
