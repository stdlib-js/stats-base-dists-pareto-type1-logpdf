"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=v(function(k,c){
var t=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-ln/dist'),y=require('@stdlib/constants-float64-ninf/dist');function F(e,r,n){var i,u;return t(e)||t(r)||t(n)||r<=0||n<=0?NaN:e>=n?(u=o(r)+r*o(n),i=(r+1)*o(e),u-i):y}c.exports=F
});var d=v(function(w,N){
var a=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-ln/dist'),g=require('@stdlib/constants-float64-ninf/dist');function I(e,r){var n;if(f(e)||f(r)||e<=0||r<=0)return a(NaN);return n=s(e)+e*s(r),i;function i(u){return f(u)?NaN:u>=r?n-(e+1)*s(u):g}}N.exports=I
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=q(),R=d();O(m,"factory",R);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
