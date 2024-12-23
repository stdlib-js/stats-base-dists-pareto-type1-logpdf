// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function i(t,r,i){return n(t)||n(r)||n(i)||r<=0||i<=0?NaN:t>=i?s(r)+r*s(i)-(r+1)*s(t):e}function d(t,i){var d;return n(t)||n(i)||t<=0||i<=0?r(NaN):(d=s(t)+t*s(i),function(r){if(n(r))return NaN;if(r>=i)return d-(t+1)*s(r);return e})}t(i,"factory",d);export{i as default,d as factory};
//# sourceMappingURL=index.mjs.map
