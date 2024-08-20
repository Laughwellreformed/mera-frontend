/**
* @vue/shared v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function al(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Ce={},jr=[],At=()=>{},H_=()=>!1,Yo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),cl=t=>t.startsWith("onUpdate:"),Fe=Object.assign,ll=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},z_=Object.prototype.hasOwnProperty,ge=(t,e)=>z_.call(t,e),re=Array.isArray,$r=t=>di(t)==="[object Map]",Xo=t=>di(t)==="[object Set]",lh=t=>di(t)==="[object Date]",le=t=>typeof t=="function",Ve=t=>typeof t=="string",Ht=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",bd=t=>(be(t)||le(t))&&le(t.then)&&le(t.catch),Rd=Object.prototype.toString,di=t=>Rd.call(t),K_=t=>di(t).slice(8,-1),Sd=t=>di(t)==="[object Object]",ul=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bs=al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},W_=/-(\w)/g,zt=Zo(t=>t.replace(W_,(e,n)=>n?n.toUpperCase():"")),G_=/\B([A-Z])/g,ss=Zo(t=>t.replace(G_,"-$1").toLowerCase()),ea=Zo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qa=Zo(t=>t?`on${ea(t)}`:""),Un=(t,e)=>!Object.is(t,e),so=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Cd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},wo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Q_=t=>{const e=Ve(t)?Number(t):NaN;return isNaN(e)?t:e};let uh;const Pd=()=>uh||(uh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hl(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ve(r)?Z_(r):hl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ve(t)||be(t))return t}const J_=/;(?![^(]*\))/g,Y_=/:([^]+)/,X_=/\/\*[^]*?\*\//g;function Z_(t){const e={};return t.replace(X_,"").split(J_).forEach(n=>{if(n){const r=n.split(Y_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function fl(t){let e="";if(Ve(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=fl(t[n]);r&&(e+=r+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ey="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ty=al(ey);function Od(t){return!!t||t===""}function ny(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ta(t[r],e[r]);return n}function ta(t,e){if(t===e)return!0;let n=lh(t),r=lh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ht(t),r=Ht(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?ny(t,e):!1;if(n=be(t),r=be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!ta(t[o],e[o]))return!1}}return String(t)===String(e)}function ry(t,e){return t.findIndex(n=>ta(n,e))}const kr=t=>Ve(t)?t:t==null?"":re(t)||be(t)&&(t.toString===Rd||!le(t.toString))?JSON.stringify(t,Nd,2):String(t),Nd=(t,e)=>e&&e.__v_isRef?Nd(t,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ja(r,i)+" =>"]=s,n),{})}:Xo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ja(n))}:Ht(e)?Ja(e):be(e)&&!re(e)&&!Sd(e)?String(e):e,Ja=(t,e="")=>{var n;return Ht(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class kd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function LC(t){return new kd(t)}function sy(t,e=_t){e&&e.active&&e.effects.push(t)}function iy(){return _t}function MC(t){_t&&_t.cleanups.push(t)}let lr;class dl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,sy(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Hn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return cn(),!0;if(oy(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),cn()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Dn,n=lr;try{return Dn=!0,lr=this,this._runnings++,hh(this),this.fn()}finally{fh(this),this._runnings--,lr=n,Dn=e}}stop(){this.active&&(hh(this),fh(this),this.onStop&&this.onStop(),this.active=!1)}}function oy(t){return t.value}function hh(t){t._trackId++,t._depsLength=0}function fh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Dd(t.deps[e],t);t.deps.length=t._depsLength}}function Dd(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Dn=!0,vc=0;const Vd=[];function Hn(){Vd.push(Dn),Dn=!1}function cn(){const t=Vd.pop();Dn=t===void 0?!0:t}function pl(){vc++}function ml(){for(vc--;!vc&&Tc.length;)Tc.shift()()}function xd(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Dd(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Tc=[];function Ld(t,e,n){pl();for(const r of t.keys()){let s;if(!t.computed&&r.computed&&r._runnings>0&&(s??(s=t.get(r)===r._trackId))){r._dirtyLevel=2;continue}r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&Tc.push(r.scheduler)))}ml()}const Md=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Io=new WeakMap,ur=Symbol(""),wc=Symbol("");function ft(t,e,n){if(Dn&&lr){let r=Io.get(t);r||Io.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Md(()=>r.delete(n))),xd(lr,s)}}function rn(t,e,n,r,s,i){const o=Io.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&re(t)){const l=Number(r);o.forEach((h,f)=>{(f==="length"||!Ht(f)&&f>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":re(t)?ul(n)&&c.push(o.get("length")):(c.push(o.get(ur)),$r(t)&&c.push(o.get(wc)));break;case"delete":re(t)||(c.push(o.get(ur)),$r(t)&&c.push(o.get(wc)));break;case"set":$r(t)&&c.push(o.get(ur));break}pl();for(const l of c)l&&Ld(l,5);ml()}function ay(t,e){const n=Io.get(t);return n&&n.get(e)}const cy=al("__proto__,__v_isRef,__isVue"),Fd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ht)),dh=ly();function ly(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ee(this);for(let i=0,o=this.length;i<o;i++)ft(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ee)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Hn(),pl();const r=Ee(this)[e].apply(this,n);return ml(),cn(),r}}),t}function uy(t){Ht(t)||(t=String(t));const e=Ee(this);return ft(e,"has",t),e.hasOwnProperty(t)}class Ud{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Iy:qd:i?$d:jd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){if(o&&ge(dh,n))return Reflect.get(dh,n,r);if(n==="hasOwnProperty")return uy}const c=Reflect.get(e,n,r);return(Ht(n)?Fd.has(n):cy(n))||(s||ft(e,"get",n),i)?c:ct(c)?o&&ul(n)?c:c.value:be(c)?s?Hd(c):yl(c):c}}class Bd extends Ud{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Ys(i);if(!Ao(r)&&!Ys(r)&&(i=Ee(i),r=Ee(r)),!re(e)&&ct(i)&&!ct(r))return l?!1:(i.value=r,!0)}const o=re(e)&&ul(n)?Number(n)<e.length:ge(e,n),c=Reflect.set(e,n,r,s);return e===Ee(s)&&(o?Un(r,i)&&rn(e,"set",n,r):rn(e,"add",n,r)),c}deleteProperty(e,n){const r=ge(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ht(n)||!Fd.has(n))&&ft(e,"has",n),r}ownKeys(e){return ft(e,"iterate",re(e)?"length":ur),Reflect.ownKeys(e)}}class hy extends Ud{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const fy=new Bd,dy=new hy,py=new Bd(!0);const gl=t=>t,na=t=>Reflect.getPrototypeOf(t);function Hi(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ee(t),i=Ee(e);n||(Un(e,i)&&ft(s,"get",e),ft(s,"get",i));const{has:o}=na(s),c=r?gl:n?vl:Xs;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function zi(t,e=!1){const n=this.__v_raw,r=Ee(n),s=Ee(t);return e||(Un(t,s)&&ft(r,"has",t),ft(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ki(t,e=!1){return t=t.__v_raw,!e&&ft(Ee(t),"iterate",ur),Reflect.get(t,"size",t)}function ph(t){t=Ee(t);const e=Ee(this);return na(e).has.call(e,t)||(e.add(t),rn(e,"add",t,t)),this}function mh(t,e){e=Ee(e);const n=Ee(this),{has:r,get:s}=na(n);let i=r.call(n,t);i||(t=Ee(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Un(e,o)&&rn(n,"set",t,e):rn(n,"add",t,e),this}function gh(t){const e=Ee(this),{has:n,get:r}=na(e);let s=n.call(e,t);s||(t=Ee(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rn(e,"delete",t,void 0),i}function _h(){const t=Ee(this),e=t.size!==0,n=t.clear();return e&&rn(t,"clear",void 0,void 0),n}function Wi(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Ee(o),l=e?gl:t?vl:Xs;return!t&&ft(c,"iterate",ur),o.forEach((h,f)=>r.call(s,l(h),l(f),i))}}function Gi(t,e,n){return function(...r){const s=this.__v_raw,i=Ee(s),o=$r(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?gl:e?vl:Xs;return!e&&ft(i,"iterate",l?wc:ur),{next(){const{value:p,done:y}=h.next();return y?{value:p,done:y}:{value:c?[f(p[0]),f(p[1])]:f(p),done:y}},[Symbol.iterator](){return this}}}}function yn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function my(){const t={get(i){return Hi(this,i)},get size(){return Ki(this)},has:zi,add:ph,set:mh,delete:gh,clear:_h,forEach:Wi(!1,!1)},e={get(i){return Hi(this,i,!1,!0)},get size(){return Ki(this)},has:zi,add:ph,set:mh,delete:gh,clear:_h,forEach:Wi(!1,!0)},n={get(i){return Hi(this,i,!0)},get size(){return Ki(this,!0)},has(i){return zi.call(this,i,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Wi(!0,!1)},r={get(i){return Hi(this,i,!0,!0)},get size(){return Ki(this,!0)},has(i){return zi.call(this,i,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Wi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Gi(i,!1,!1),n[i]=Gi(i,!0,!1),e[i]=Gi(i,!1,!0),r[i]=Gi(i,!0,!0)}),[t,n,e,r]}const[gy,_y,yy,Ey]=my();function _l(t,e){const n=e?t?Ey:yy:t?_y:gy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,i)}const vy={get:_l(!1,!1)},Ty={get:_l(!1,!0)},wy={get:_l(!0,!1)};const jd=new WeakMap,$d=new WeakMap,qd=new WeakMap,Iy=new WeakMap;function Ay(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function by(t){return t.__v_skip||!Object.isExtensible(t)?0:Ay(K_(t))}function yl(t){return Ys(t)?t:El(t,!1,fy,vy,jd)}function Ry(t){return El(t,!1,py,Ty,$d)}function Hd(t){return El(t,!0,dy,wy,qd)}function El(t,e,n,r,s){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=by(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function js(t){return Ys(t)?js(t.__v_raw):!!(t&&t.__v_isReactive)}function Ys(t){return!!(t&&t.__v_isReadonly)}function Ao(t){return!!(t&&t.__v_isShallow)}function zd(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function Sy(t){return Object.isExtensible(t)&&Cd(t,"__v_skip",!0),t}const Xs=t=>be(t)?yl(t):t,vl=t=>be(t)?Hd(t):t;class Kd{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new dl(()=>e(this._value),()=>io(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ee(this),n=e.effect._dirtyLevel;return(!e._cacheable||e.effect.dirty)&&Un(e._value,e._value=e.effect.run())&&n!==3&&io(e,5),Wd(e),e.effect._dirtyLevel>=2&&io(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Cy(t,e,n=!1){let r,s;const i=le(t);return i?(r=t,s=At):(r=t.get,s=t.set),new Kd(r,s,i||!s,n)}function Wd(t){var e;Dn&&lr&&(t=Ee(t),xd(lr,(e=t.dep)!=null?e:t.dep=Md(()=>t.dep=void 0,t instanceof Kd?t:void 0)))}function io(t,e=5,n,r){t=Ee(t);const s=t.dep;s&&Ld(s,e)}function ct(t){return!!(t&&t.__v_isRef===!0)}function Xt(t){return Gd(t,!1)}function FC(t){return Gd(t,!0)}function Gd(t,e){return ct(t)?t:new Py(t,e)}class Py{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ee(e),this._value=n?e:Xs(e)}get value(){return Wd(this),this._value}set value(e){const n=this.__v_isShallow||Ao(e)||Ys(e);e=n?e:Ee(e),Un(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Xs(e),io(this,5))}}function Oy(t){return ct(t)?t.value:t}const Ny={get:(t,e,n)=>Oy(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ct(s)&&!ct(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qd(t){return js(t)?t:new Proxy(t,Ny)}function UC(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=Dy(t,n);return e}class ky{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ay(Ee(this._object),this._key)}}function Dy(t,e,n){const r=t[e];return ct(r)?r:new ky(t,e,n)}/**
* @vue/runtime-core v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vn(t,e,n,r){try{return r?t(...r):t()}catch(s){ra(s,e,n)}}function bt(t,e,n,r){if(le(t)){const s=Vn(t,e,n,r);return s&&bd(s)&&s.catch(i=>{ra(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(bt(t[i],e,n,r));return s}}function ra(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Hn(),Vn(l,null,10,[t,o,c]),cn();return}}Vy(t,n,s,r)}function Vy(t,e,n,r=!0){console.error(t)}let Zs=!1,Ic=!1;const st=[];let Ft=0;const qr=[];let An=null,ir=0;const Jd=Promise.resolve();let Tl=null;function Yd(t){const e=Tl||Jd;return t?e.then(this?t.bind(this):t):e}function xy(t){let e=Ft+1,n=st.length;for(;e<n;){const r=e+n>>>1,s=st[r],i=ei(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function wl(t){(!st.length||!st.includes(t,Zs&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?st.push(t):st.splice(xy(t.id),0,t),Xd())}function Xd(){!Zs&&!Ic&&(Ic=!0,Tl=Jd.then(ep))}function Ly(t){const e=st.indexOf(t);e>Ft&&st.splice(e,1)}function My(t){re(t)?qr.push(...t):(!An||!An.includes(t,t.allowRecurse?ir+1:ir))&&qr.push(t),Xd()}function yh(t,e,n=Zs?Ft+1:0){for(;n<st.length;n++){const r=st[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;st.splice(n,1),n--,r()}}}function Zd(t){if(qr.length){const e=[...new Set(qr)].sort((n,r)=>ei(n)-ei(r));if(qr.length=0,An){An.push(...e);return}for(An=e,ir=0;ir<An.length;ir++){const n=An[ir];n.active!==!1&&n()}An=null,ir=0}}const ei=t=>t.id==null?1/0:t.id,Fy=(t,e)=>{const n=ei(t)-ei(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ep(t){Ic=!1,Zs=!0,st.sort(Fy);try{for(Ft=0;Ft<st.length;Ft++){const e=st[Ft];e&&e.active!==!1&&Vn(e,null,14)}}finally{Ft=0,st.length=0,Zd(),Zs=!1,Tl=null,(st.length||qr.length)&&ep()}}function Uy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:y}=r[f]||Ce;y&&(s=n.map(R=>Ve(R)?R.trim():R)),p&&(s=n.map(wo))}let c,l=r[c=Qa(e)]||r[c=Qa(zt(e))];!l&&i&&(l=r[c=Qa(ss(e))]),l&&bt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,bt(h,t,6,s)}}function tp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!le(t)){const l=h=>{const f=tp(h,e,!0);f&&(c=!0,Fe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(be(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>o[l]=null):Fe(o,i),be(t)&&r.set(t,o),o)}function sa(t,e){return!t||!Yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,ss(e))||ge(t,e))}let qe=null,ia=null;function bo(t){const e=qe;return qe=t,ia=t&&t.type.__scopeId||null,e}function BC(t){ia=t}function jC(){ia=null}function In(t,e=qe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Dh(-1);const i=bo(e);let o;try{o=t(...s)}finally{bo(i),r._d&&Dh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ya(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:y,setupState:R,ctx:C,inheritAttrs:P}=t,N=bo(t);let $,G;try{if(n.shapeFlag&4){const Z=s||r,he=Z;$=Mt(h.call(he,Z,f,p,R,y,C)),G=c}else{const Z=e;$=Mt(Z.length>1?Z(p,{attrs:c,slots:o,emit:l}):Z(p,null)),G=e.props?c:By(c)}}catch(Z){zs.length=0,ra(Z,t,1),$=ke(ut)}let U=$;if(G&&P!==!1){const Z=Object.keys(G),{shapeFlag:he}=U;Z.length&&he&7&&(i&&Z.some(cl)&&(G=jy(G,i)),U=Bn(U,G,!1,!0))}return n.dirs&&(U=Bn(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),$=U,bo(N),$}const By=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yo(n))&&((e||(e={}))[n]=t[n]);return e},jy=(t,e)=>{const n={};for(const r in t)(!cl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function $y(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Eh(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const y=f[p];if(o[y]!==r[y]&&!sa(h,y))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Eh(r,o,h):!0:!!o;return!1}function Eh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!sa(n,i))return!0}return!1}function qy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const np="components",Hy="directives";function Dr(t,e){return rp(np,t,!0,e)||t}const zy=Symbol.for("v-ndc");function $C(t){return rp(Hy,t)}function rp(t,e,n=!0,r=!1){const s=qe||Ke;if(s){const i=s.type;if(t===np){const c=qE(i,!1);if(c&&(c===e||c===zt(e)||c===ea(zt(e))))return i}const o=vh(s[t]||i[t],e)||vh(s.appContext[t],e);return!o&&r?i:o}}function vh(t,e){return t&&(t[e]||t[zt(e)]||t[ea(zt(e))])}const Ky=t=>t.__isSuspense;function Wy(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):My(t)}function oa(t,e,n=Ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Hn();const c=pi(n),l=bt(e,n,t,o);return c(),cn(),l});return r?s.unshift(i):s.push(i),i}}const fn=t=>(e,n=Ke)=>{(!la||t==="sp")&&oa(t,(...r)=>e(...r),n)},Gy=fn("bm"),Il=fn("m"),Qy=fn("bu"),Jy=fn("u"),sp=fn("bum"),ip=fn("um"),Yy=fn("sp"),Xy=fn("rtg"),Zy=fn("rtc");function eE(t,e=Ke){oa("ec",t,e)}function Vr(t,e){if(qe===null)return t;const n=ua(qe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ce]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Hn(),bt(l,n,8,[t.el,c,t,e]),cn())}}function tE(t,e,n,r){let s;const i=n;if(re(t)||Ve(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(be(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const h=o[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}/*! #__NO_SIDE_EFFECTS__ */function qC(t,e){return le(t)?Fe({name:t.name},e,{setup:t}):t}const $s=t=>!!t.type.__asyncLoader;function HC(t,e,n={},r,s){if(qe.isCE||qe.parent&&$s(qe.parent)&&qe.parent.isCE)return ke("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),Fr();const o=i&&op(i(n)),c=Sp(yt,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function op(t){return t.some(e=>Co(e)?!(e.type===ut||e.type===yt&&!op(e.children)):!0)?t:null}const Ac=t=>t?Op(t)?ua(t):Ac(t.parent):null,qs=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ac(t.parent),$root:t=>Ac(t.root),$emit:t=>t.emit,$options:t=>Al(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,wl(t.update)}),$nextTick:t=>t.n||(t.n=Yd.bind(t.proxy)),$watch:t=>wE.bind(t)}),Xa=(t,e)=>t!==Ce&&!t.__isScriptSetup&&ge(t,e),nE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const R=o[e];if(R!==void 0)switch(R){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Xa(r,e))return o[e]=1,r[e];if(s!==Ce&&ge(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&ge(h,e))return o[e]=3,i[e];if(n!==Ce&&ge(n,e))return o[e]=4,n[e];bc&&(o[e]=0)}}const f=qs[e];let p,y;if(f)return e==="$attrs"&&ft(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ce&&ge(n,e))return o[e]=4,n[e];if(y=l.config.globalProperties,ge(y,e))return y[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Xa(s,e)?(s[e]=n,!0):r!==Ce&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ce&&ge(t,o)||Xa(e,o)||(c=i[0])&&ge(c,o)||ge(r,o)||ge(qs,o)||ge(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Th(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let bc=!0;function rE(t){const e=Al(t),n=t.proxy,r=t.ctx;bc=!1,e.beforeCreate&&wh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:y,beforeUpdate:R,updated:C,activated:P,deactivated:N,beforeDestroy:$,beforeUnmount:G,destroyed:U,unmounted:Z,render:he,renderTracked:H,renderTriggered:v,errorCaptured:g,serverPrefetch:_,expose:w,inheritAttrs:A,components:I,directives:E,filters:Re}=e;if(h&&sE(h,r,null),o)for(const we in o){const _e=o[we];le(_e)&&(r[we]=_e.bind(n))}if(s){const we=s.call(n,n);be(we)&&(t.data=yl(we))}if(bc=!0,i)for(const we in i){const _e=i[we],St=le(_e)?_e.bind(n,n):le(_e.get)?_e.get.bind(n,n):At,Wn=!le(_e)&&le(_e.set)?_e.set.bind(n):At,Gt=zE({get:St,set:Wn});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:Be=>Gt.value=Be})}if(c)for(const we in c)ap(c[we],r,n,we);if(l){const we=le(l)?l.call(n):l;Reflect.ownKeys(we).forEach(_e=>{uE(_e,we[_e])})}f&&wh(f,t,"c");function xe(we,_e){re(_e)?_e.forEach(St=>we(St.bind(n))):_e&&we(_e.bind(n))}if(xe(Gy,p),xe(Il,y),xe(Qy,R),xe(Jy,C),xe(IE,P),xe(AE,N),xe(eE,g),xe(Zy,H),xe(Xy,v),xe(sp,G),xe(ip,Z),xe(Yy,_),re(w))if(w.length){const we=t.exposed||(t.exposed={});w.forEach(_e=>{Object.defineProperty(we,_e,{get:()=>n[_e],set:St=>n[_e]=St})})}else t.exposed||(t.exposed={});he&&t.render===At&&(t.render=he),A!=null&&(t.inheritAttrs=A),I&&(t.components=I),E&&(t.directives=E)}function sE(t,e,n=At){re(t)&&(t=Rc(t));for(const r in t){const s=t[r];let i;be(s)?"default"in s?i=oo(s.from||r,s.default,!0):i=oo(s.from||r):i=oo(s),ct(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function wh(t,e,n){bt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ap(t,e,n,r){const s=r.includes(".")?Ep(n,r):()=>n[r];if(Ve(t)){const i=e[t];le(i)&&ec(s,i)}else if(le(t))ec(s,t.bind(n));else if(be(t))if(re(t))t.forEach(i=>ap(i,e,n,r));else{const i=le(t.handler)?t.handler.bind(n):e[t.handler];le(i)&&ec(s,i,t)}}function Al(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Ro(l,h,o,!0)),Ro(l,e,o)),be(e)&&i.set(e,l),l}function Ro(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ro(t,i,n,!0),s&&s.forEach(o=>Ro(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=iE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const iE={data:Ih,props:Ah,emits:Ah,methods:Ds,computed:Ds,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:Ds,directives:Ds,watch:aE,provide:Ih,inject:oE};function Ih(t,e){return e?t?function(){return Fe(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function oE(t,e){return Ds(Rc(t),Rc(e))}function Rc(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function at(t,e){return t?[...new Set([].concat(t,e))]:e}function Ds(t,e){return t?Fe(Object.create(null),t,e):e}function Ah(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:Fe(Object.create(null),Th(t),Th(e??{})):e}function aE(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const r in e)n[r]=at(t[r],e[r]);return n}function cp(){return{app:null,config:{isNativeTag:H_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cE=0;function lE(t,e){return function(r,s=null){le(r)||(r=Fe({},r)),s!=null&&!be(s)&&(s=null);const i=cp(),o=new WeakSet;let c=!1;const l=i.app={_uid:cE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:WE,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&le(h.install)?(o.add(h),h.install(l,...f)):le(h)&&(o.add(h),h(l,...f))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,f){return f?(i.components[h]=f,l):i.components[h]},directive(h,f){return f?(i.directives[h]=f,l):i.directives[h]},mount(h,f,p){if(!c){const y=ke(r,s);return y.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(y,h):t(y,h,p),c=!0,l._container=h,h.__vue_app__=l,ua(y.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,f){return i.provides[h]=f,l},runWithContext(h){const f=Hr;Hr=l;try{return h()}finally{Hr=f}}};return l}}let Hr=null;function uE(t,e){if(Ke){let n=Ke.provides;const r=Ke.parent&&Ke.parent.provides;r===n&&(n=Ke.provides=Object.create(r)),n[t]=e}}function oo(t,e,n=!1){const r=Ke||qe;if(r||Hr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Hr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&le(e)?e.call(r&&r.proxy):e}}function zC(){return!!(Ke||qe||Hr)}const lp={},up=()=>Object.create(lp),hp=t=>Object.getPrototypeOf(t)===lp;function hE(t,e,n,r=!1){const s={},i=up();t.propsDefaults=Object.create(null),fp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ry(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function fE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ee(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let y=f[p];if(sa(t.emitsOptions,y))continue;const R=e[y];if(l)if(ge(i,y))R!==i[y]&&(i[y]=R,h=!0);else{const C=zt(y);s[C]=Sc(l,c,C,R,t,!1)}else R!==i[y]&&(i[y]=R,h=!0)}}}else{fp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!ge(e,p)&&((f=ss(p))===p||!ge(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Sc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!ge(e,p))&&(delete i[p],h=!0)}h&&rn(t.attrs,"set","")}function fp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Bs(l))continue;const h=e[l];let f;s&&ge(s,f=zt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:sa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ee(n),h=c||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Sc(s,l,p,h[p],t,!ge(h,p))}}return o}function Sc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=ge(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&le(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=pi(s);r=h[n]=l.call(null,e),f()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===ss(n))&&(r=!0))}return r}function dp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!le(t)){const f=p=>{l=!0;const[y,R]=dp(p,e,!0);Fe(o,y),R&&c.push(...R)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return be(t)&&r.set(t,jr),jr;if(re(i))for(let f=0;f<i.length;f++){const p=zt(i[f]);bh(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=zt(f);if(bh(p)){const y=i[f],R=o[p]=re(y)||le(y)?{type:y}:Fe({},y);if(R){const C=Ch(Boolean,R.type),P=Ch(String,R.type);R[0]=C>-1,R[1]=P<0||C<P,(C>-1||ge(R,"default"))&&c.push(p)}}}const h=[o,c];return be(t)&&r.set(t,h),h}function bh(t){return t[0]!=="$"&&!Bs(t)}function Rh(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Sh(t,e){return Rh(t)===Rh(e)}function Ch(t,e){return re(e)?e.findIndex(n=>Sh(n,t)):le(e)&&Sh(e,t)?0:-1}const pp=t=>t[0]==="_"||t==="$stable",bl=t=>re(t)?t.map(Mt):[Mt(t)],dE=(t,e,n)=>{if(e._n)return e;const r=In((...s)=>bl(e(...s)),n);return r._c=!1,r},mp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(pp(s))continue;const i=t[s];if(le(i))e[s]=dE(s,i,r);else if(i!=null){const o=bl(i);e[s]=()=>o}}},gp=(t,e)=>{const n=bl(e);t.slots.default=()=>n},pE=(t,e)=>{const n=t.slots=up();if(t.vnode.shapeFlag&32){const r=e._;r?(Fe(n,e),Cd(n,"_",r,!0)):mp(e,n)}else e&&gp(t,e)},mE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(Fe(s,e),!n&&c===1&&delete s._):(i=!e.$stable,mp(e,s)),o=e}else e&&(gp(t,e),o={default:1});if(i)for(const c in s)!pp(c)&&o[c]==null&&delete s[c]};function Cc(t,e,n,r,s=!1){if(re(t)){t.forEach((y,R)=>Cc(y,e&&(re(e)?e[R]:e),n,r,s));return}if($s(r)&&!s)return;const i=r.shapeFlag&4?ua(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ce?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==l&&(Ve(h)?(f[h]=null,ge(p,h)&&(p[h]=null)):ct(h)&&(h.value=null)),le(l))Vn(l,c,12,[o,f]);else{const y=Ve(l),R=ct(l);if(y||R){const C=()=>{if(t.f){const P=y?ge(p,l)?p[l]:f[l]:l.value;s?re(P)&&ll(P,i):re(P)?P.includes(i)||P.push(i):y?(f[l]=[i],ge(p,l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else y?(f[l]=o,ge(p,l)&&(p[l]=o)):R&&(l.value=o,t.k&&(f[t.k]=o))};o?(C.id=-1,lt(C,n)):C()}}}const lt=Wy;function gE(t){return _E(t)}function _E(t,e){const n=Pd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:y,setScopeId:R=At,insertStaticContent:C}=t,P=(T,b,D,V=null,x=null,j=null,K=void 0,B=null,q=!!b.dynamicChildren)=>{if(T===b)return;T&&!or(T,b)&&(V=Qt(T),Be(T,x,j,!0),T=null),b.patchFlag===-2&&(q=!1,b.dynamicChildren=null);const{type:F,ref:W,shapeFlag:ee}=b;switch(F){case ca:N(T,b,D,V);break;case ut:$(T,b,D,V);break;case ao:T==null&&G(b,D,V,K);break;case yt:I(T,b,D,V,x,j,K,B,q);break;default:ee&1?he(T,b,D,V,x,j,K,B,q):ee&6?E(T,b,D,V,x,j,K,B,q):(ee&64||ee&128)&&F.process(T,b,D,V,x,j,K,B,q,xt)}W!=null&&x&&Cc(W,T&&T.ref,j,b||T,!b)},N=(T,b,D,V)=>{if(T==null)r(b.el=c(b.children),D,V);else{const x=b.el=T.el;b.children!==T.children&&h(x,b.children)}},$=(T,b,D,V)=>{T==null?r(b.el=l(b.children||""),D,V):b.el=T.el},G=(T,b,D,V)=>{[T.el,T.anchor]=C(T.children,b,D,V,T.el,T.anchor)},U=({el:T,anchor:b},D,V)=>{let x;for(;T&&T!==b;)x=y(T),r(T,D,V),T=x;r(b,D,V)},Z=({el:T,anchor:b})=>{let D;for(;T&&T!==b;)D=y(T),s(T),T=D;s(b)},he=(T,b,D,V,x,j,K,B,q)=>{b.type==="svg"?K="svg":b.type==="math"&&(K="mathml"),T==null?H(b,D,V,x,j,K,B,q):_(T,b,x,j,K,B,q)},H=(T,b,D,V,x,j,K,B)=>{let q,F;const{props:W,shapeFlag:ee,transition:Y,dirs:J}=T;if(q=T.el=o(T.type,j,W&&W.is,W),ee&8?f(q,T.children):ee&16&&g(T.children,q,null,V,x,Za(T,j),K,B),J&&er(T,null,V,"created"),v(q,T,T.scopeId,K,V),W){for(const Te in W)Te!=="value"&&!Bs(Te)&&i(q,Te,null,W[Te],j,T.children,V,x,Ct);"value"in W&&i(q,"value",null,W.value,j),(F=W.onVnodeBeforeMount)&&Lt(F,V,T)}J&&er(T,null,V,"beforeMount");const ne=yE(x,Y);ne&&Y.beforeEnter(q),r(q,b,D),((F=W&&W.onVnodeMounted)||ne||J)&&lt(()=>{F&&Lt(F,V,T),ne&&Y.enter(q),J&&er(T,null,V,"mounted")},x)},v=(T,b,D,V,x)=>{if(D&&R(T,D),V)for(let j=0;j<V.length;j++)R(T,V[j]);if(x){let j=x.subTree;if(b===j){const K=x.vnode;v(T,K,K.scopeId,K.slotScopeIds,x.parent)}}},g=(T,b,D,V,x,j,K,B,q=0)=>{for(let F=q;F<T.length;F++){const W=T[F]=B?Rn(T[F]):Mt(T[F]);P(null,W,b,D,V,x,j,K,B)}},_=(T,b,D,V,x,j,K)=>{const B=b.el=T.el;let{patchFlag:q,dynamicChildren:F,dirs:W}=b;q|=T.patchFlag&16;const ee=T.props||Ce,Y=b.props||Ce;let J;if(D&&tr(D,!1),(J=Y.onVnodeBeforeUpdate)&&Lt(J,D,b,T),W&&er(b,T,D,"beforeUpdate"),D&&tr(D,!0),F?w(T.dynamicChildren,F,B,D,V,Za(b,x),j):K||_e(T,b,B,null,D,V,Za(b,x),j,!1),q>0){if(q&16)A(B,b,ee,Y,D,V,x);else if(q&2&&ee.class!==Y.class&&i(B,"class",null,Y.class,x),q&4&&i(B,"style",ee.style,Y.style,x),q&8){const ne=b.dynamicProps;for(let Te=0;Te<ne.length;Te++){const me=ne[Te],De=ee[me],mt=Y[me];(mt!==De||me==="value")&&i(B,me,De,mt,x,T.children,D,V,Ct)}}q&1&&T.children!==b.children&&f(B,b.children)}else!K&&F==null&&A(B,b,ee,Y,D,V,x);((J=Y.onVnodeUpdated)||W)&&lt(()=>{J&&Lt(J,D,b,T),W&&er(b,T,D,"updated")},V)},w=(T,b,D,V,x,j,K)=>{for(let B=0;B<b.length;B++){const q=T[B],F=b[B],W=q.el&&(q.type===yt||!or(q,F)||q.shapeFlag&70)?p(q.el):D;P(q,F,W,null,V,x,j,K,!0)}},A=(T,b,D,V,x,j,K)=>{if(D!==V){if(D!==Ce)for(const B in D)!Bs(B)&&!(B in V)&&i(T,B,D[B],null,K,b.children,x,j,Ct);for(const B in V){if(Bs(B))continue;const q=V[B],F=D[B];q!==F&&B!=="value"&&i(T,B,F,q,K,b.children,x,j,Ct)}"value"in V&&i(T,"value",D.value,V.value,K)}},I=(T,b,D,V,x,j,K,B,q)=>{const F=b.el=T?T.el:c(""),W=b.anchor=T?T.anchor:c("");let{patchFlag:ee,dynamicChildren:Y,slotScopeIds:J}=b;J&&(B=B?B.concat(J):J),T==null?(r(F,D,V),r(W,D,V),g(b.children||[],D,W,x,j,K,B,q)):ee>0&&ee&64&&Y&&T.dynamicChildren?(w(T.dynamicChildren,Y,D,x,j,K,B),(b.key!=null||x&&b===x.subTree)&&Rl(T,b,!0)):_e(T,b,D,W,x,j,K,B,q)},E=(T,b,D,V,x,j,K,B,q)=>{b.slotScopeIds=B,T==null?b.shapeFlag&512?x.ctx.activate(b,D,V,K,q):Re(b,D,V,x,j,K,q):pt(T,b,q)},Re=(T,b,D,V,x,j,K)=>{const B=T.component=FE(T,V,x);if(aa(T)&&(B.ctx.renderer=xt),UE(B),B.asyncDep){if(x&&x.registerDep(B,xe,K),!T.el){const q=B.subTree=ke(ut);$(null,q,b,D)}}else xe(B,T,b,D,x,j,K)},pt=(T,b,D)=>{const V=b.component=T.component;if($y(T,b,D))if(V.asyncDep&&!V.asyncResolved){we(V,b,D);return}else V.next=b,Ly(V.update),V.effect.dirty=!0,V.update();else b.el=T.el,V.vnode=b},xe=(T,b,D,V,x,j,K)=>{const B=()=>{if(T.isMounted){let{next:W,bu:ee,u:Y,parent:J,vnode:ne}=T;{const vt=_p(T);if(vt){W&&(W.el=ne.el,we(T,W,K)),vt.asyncDep.then(()=>{T.isUnmounted||B()});return}}let Te=W,me;tr(T,!1),W?(W.el=ne.el,we(T,W,K)):W=ne,ee&&so(ee),(me=W.props&&W.props.onVnodeBeforeUpdate)&&Lt(me,J,W,ne),tr(T,!0);const De=Ya(T),mt=T.subTree;T.subTree=De,P(mt,De,p(mt.el),Qt(mt),T,x,j),W.el=De.el,Te===null&&qy(T,De.el),Y&&lt(Y,x),(me=W.props&&W.props.onVnodeUpdated)&&lt(()=>Lt(me,J,W,ne),x)}else{let W;const{el:ee,props:Y}=b,{bm:J,m:ne,parent:Te}=T,me=$s(b);if(tr(T,!1),J&&so(J),!me&&(W=Y&&Y.onVnodeBeforeMount)&&Lt(W,Te,b),tr(T,!0),ee&&br){const De=()=>{T.subTree=Ya(T),br(ee,T.subTree,T,x,null)};me?b.type.__asyncLoader().then(()=>!T.isUnmounted&&De()):De()}else{const De=T.subTree=Ya(T);P(null,De,D,V,T,x,j),b.el=De.el}if(ne&&lt(ne,x),!me&&(W=Y&&Y.onVnodeMounted)){const De=b;lt(()=>Lt(W,Te,De),x)}(b.shapeFlag&256||Te&&$s(Te.vnode)&&Te.vnode.shapeFlag&256)&&T.a&&lt(T.a,x),T.isMounted=!0,b=D=V=null}},q=T.effect=new dl(B,At,()=>wl(F),T.scope),F=T.update=()=>{q.dirty&&q.run()};F.id=T.uid,tr(T,!0),F()},we=(T,b,D)=>{b.component=T;const V=T.vnode.props;T.vnode=b,T.next=null,fE(T,b.props,V,D),mE(T,b.children,D),Hn(),yh(T),cn()},_e=(T,b,D,V,x,j,K,B,q=!1)=>{const F=T&&T.children,W=T?T.shapeFlag:0,ee=b.children,{patchFlag:Y,shapeFlag:J}=b;if(Y>0){if(Y&128){Wn(F,ee,D,V,x,j,K,B,q);return}else if(Y&256){St(F,ee,D,V,x,j,K,B,q);return}}J&8?(W&16&&Ct(F,x,j),ee!==F&&f(D,ee)):W&16?J&16?Wn(F,ee,D,V,x,j,K,B,q):Ct(F,x,j,!0):(W&8&&f(D,""),J&16&&g(ee,D,V,x,j,K,B,q))},St=(T,b,D,V,x,j,K,B,q)=>{T=T||jr,b=b||jr;const F=T.length,W=b.length,ee=Math.min(F,W);let Y;for(Y=0;Y<ee;Y++){const J=b[Y]=q?Rn(b[Y]):Mt(b[Y]);P(T[Y],J,D,null,x,j,K,B,q)}F>W?Ct(T,x,j,!0,!1,ee):g(b,D,V,x,j,K,B,q,ee)},Wn=(T,b,D,V,x,j,K,B,q)=>{let F=0;const W=b.length;let ee=T.length-1,Y=W-1;for(;F<=ee&&F<=Y;){const J=T[F],ne=b[F]=q?Rn(b[F]):Mt(b[F]);if(or(J,ne))P(J,ne,D,null,x,j,K,B,q);else break;F++}for(;F<=ee&&F<=Y;){const J=T[ee],ne=b[Y]=q?Rn(b[Y]):Mt(b[Y]);if(or(J,ne))P(J,ne,D,null,x,j,K,B,q);else break;ee--,Y--}if(F>ee){if(F<=Y){const J=Y+1,ne=J<W?b[J].el:V;for(;F<=Y;)P(null,b[F]=q?Rn(b[F]):Mt(b[F]),D,ne,x,j,K,B,q),F++}}else if(F>Y)for(;F<=ee;)Be(T[F],x,j,!0),F++;else{const J=F,ne=F,Te=new Map;for(F=ne;F<=Y;F++){const it=b[F]=q?Rn(b[F]):Mt(b[F]);it.key!=null&&Te.set(it.key,F)}let me,De=0;const mt=Y-ne+1;let vt=!1,ps=0;const pn=new Array(mt);for(F=0;F<mt;F++)pn[F]=0;for(F=J;F<=ee;F++){const it=T[F];if(De>=mt){Be(it,x,j,!0);continue}let Tt;if(it.key!=null)Tt=Te.get(it.key);else for(me=ne;me<=Y;me++)if(pn[me-ne]===0&&or(it,b[me])){Tt=me;break}Tt===void 0?Be(it,x,j,!0):(pn[Tt-ne]=F+1,Tt>=ps?ps=Tt:vt=!0,P(it,b[Tt],D,null,x,j,K,B,q),De++)}const Rr=vt?EE(pn):jr;for(me=Rr.length-1,F=mt-1;F>=0;F--){const it=ne+F,Tt=b[it],Sr=it+1<W?b[it+1].el:V;pn[F]===0?P(null,Tt,D,Sr,x,j,K,B,q):vt&&(me<0||F!==Rr[me]?Gt(Tt,D,Sr,2):me--)}}},Gt=(T,b,D,V,x=null)=>{const{el:j,type:K,transition:B,children:q,shapeFlag:F}=T;if(F&6){Gt(T.component.subTree,b,D,V);return}if(F&128){T.suspense.move(b,D,V);return}if(F&64){K.move(T,b,D,xt);return}if(K===yt){r(j,b,D);for(let ee=0;ee<q.length;ee++)Gt(q[ee],b,D,V);r(T.anchor,b,D);return}if(K===ao){U(T,b,D);return}if(V!==2&&F&1&&B)if(V===0)B.beforeEnter(j),r(j,b,D),lt(()=>B.enter(j),x);else{const{leave:ee,delayLeave:Y,afterLeave:J}=B,ne=()=>r(j,b,D),Te=()=>{ee(j,()=>{ne(),J&&J()})};Y?Y(j,ne,Te):Te()}else r(j,b,D)},Be=(T,b,D,V=!1,x=!1)=>{const{type:j,props:K,ref:B,children:q,dynamicChildren:F,shapeFlag:W,patchFlag:ee,dirs:Y,memoIndex:J}=T;if(ee===-2&&(x=!1),B!=null&&Cc(B,null,D,T,!0),J!=null&&(b.renderCache[J]=void 0),W&256){b.ctx.deactivate(T);return}const ne=W&1&&Y,Te=!$s(T);let me;if(Te&&(me=K&&K.onVnodeBeforeUnmount)&&Lt(me,b,T),W&6)Gn(T.component,D,V);else{if(W&128){T.suspense.unmount(D,V);return}ne&&er(T,null,b,"beforeUnmount"),W&64?T.type.remove(T,b,D,xt,V):F&&(j!==yt||ee>0&&ee&64)?Ct(F,b,D,!1,!0):(j===yt&&ee&384||!x&&W&16)&&Ct(q,b,D),V&&je(T)}(Te&&(me=K&&K.onVnodeUnmounted)||ne)&&lt(()=>{me&&Lt(me,b,T),ne&&er(T,null,b,"unmounted")},D)},je=T=>{const{type:b,el:D,anchor:V,transition:x}=T;if(b===yt){Va(D,V);return}if(b===ao){Z(T);return}const j=()=>{s(D),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(T.shapeFlag&1&&x&&!x.persisted){const{leave:K,delayLeave:B}=x,q=()=>K(D,j);B?B(T.el,j,q):q()}else j()},Va=(T,b)=>{let D;for(;T!==b;)D=y(T),s(T),T=D;s(b)},Gn=(T,b,D)=>{const{bum:V,scope:x,update:j,subTree:K,um:B,m:q,a:F}=T;Ph(q),Ph(F),V&&so(V),x.stop(),j&&(j.active=!1,Be(K,T,b,D)),B&&lt(B,b),lt(()=>{T.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Ct=(T,b,D,V=!1,x=!1,j=0)=>{for(let K=j;K<T.length;K++)Be(T[K],b,D,V,x)},Qt=T=>T.shapeFlag&6?Qt(T.component.subTree):T.shapeFlag&128?T.suspense.next():y(T.anchor||T.el);let ds=!1;const Pi=(T,b,D)=>{T==null?b._vnode&&Be(b._vnode,null,null,!0):P(b._vnode||null,T,b,null,null,null,D),ds||(ds=!0,yh(),Zd(),ds=!1),b._vnode=T},xt={p:P,um:Be,m:Gt,r:je,mt:Re,mc:g,pc:_e,pbc:w,n:Qt,o:t};let Qn,br;return{render:Pi,hydrate:Qn,createApp:lE(Pi,Qn)}}function Za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function tr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Rl(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Rn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Rl(o,c)),c.type===ca&&(c.el=o.el)}}function EE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function _p(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_p(e)}function Ph(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const vE=Symbol.for("v-scx"),TE=()=>oo(vE),Qi={};function ec(t,e,n){return yp(t,e,n)}function yp(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Ce){if(e&&i){const H=e;e=(...v)=>{H(...v),he()}}const l=Ke,h=H=>r===!0?H:Sn(H,r===!1?1:void 0);let f,p=!1,y=!1;if(ct(t)?(f=()=>t.value,p=Ao(t)):js(t)?(f=()=>h(t),p=!0):re(t)?(y=!0,p=t.some(H=>js(H)||Ao(H)),f=()=>t.map(H=>{if(ct(H))return H.value;if(js(H))return h(H);if(le(H))return Vn(H,l,2)})):le(t)?e?f=()=>Vn(t,l,2):f=()=>(R&&R(),bt(t,l,3,[C])):f=At,e&&r){const H=f;f=()=>Sn(H())}let R,C=H=>{R=U.onStop=()=>{Vn(H,l,4),R=U.onStop=void 0}},P;if(la)if(C=At,e?n&&bt(e,l,3,[f(),y?[]:void 0,C]):f(),s==="sync"){const H=TE();P=H.__watcherHandles||(H.__watcherHandles=[])}else return At;let N=y?new Array(t.length).fill(Qi):Qi;const $=()=>{if(!(!U.active||!U.dirty))if(e){const H=U.run();(r||p||(y?H.some((v,g)=>Un(v,N[g])):Un(H,N)))&&(R&&R(),bt(e,l,3,[H,N===Qi?void 0:y&&N[0]===Qi?[]:N,C]),N=H)}else U.run()};$.allowRecurse=!!e;let G;s==="sync"?G=$:s==="post"?G=()=>lt($,l&&l.suspense):($.pre=!0,l&&($.id=l.uid),G=()=>wl($));const U=new dl(f,At,G),Z=iy(),he=()=>{U.stop(),Z&&ll(Z.effects,U)};return e?n?$():N=U.run():s==="post"?lt(U.run.bind(U),l&&l.suspense):U.run(),P&&P.push(he),he}function wE(t,e,n){const r=this.proxy,s=Ve(t)?t.includes(".")?Ep(r,t):()=>r[t]:t.bind(r,r);let i;le(e)?i=e:(i=e.handler,n=e);const o=pi(this),c=yp(s,i.bind(r),n);return o(),c}function Ep(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Sn(t,e=1/0,n){if(e<=0||!be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ct(t))Sn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)Sn(t[r],e,n);else if(Xo(t)||$r(t))t.forEach(r=>{Sn(r,e,n)});else if(Sd(t)){for(const r in t)Sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Sn(t[r],e,n)}return t}const aa=t=>t.type.__isKeepAlive;function IE(t,e){vp(t,"a",e)}function AE(t,e){vp(t,"da",e)}function vp(t,e,n=Ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(oa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)aa(s.parent.vnode)&&bE(r,e,n,s),s=s.parent}}function bE(t,e,n,r){const s=oa(e,t,r,!0);ip(()=>{ll(r[e],s)},n)}const bn=Symbol("_leaveCb"),Ji=Symbol("_enterCb");function RE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Il(()=>{t.isMounted=!0}),sp(()=>{t.isUnmounting=!0}),t}const wt=[Function,Array],Tp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:wt,onEnter:wt,onAfterEnter:wt,onEnterCancelled:wt,onBeforeLeave:wt,onLeave:wt,onAfterLeave:wt,onLeaveCancelled:wt,onBeforeAppear:wt,onAppear:wt,onAfterAppear:wt,onAppearCancelled:wt},wp=t=>{const e=t.subTree;return e.component?wp(e.component):e},SE={name:"BaseTransition",props:Tp,setup(t,{slots:e}){const n=Pp(),r=RE();return()=>{const s=e.default&&Ap(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const y of s)if(y.type!==ut){i=y;break}}const o=Ee(t),{mode:c}=o;if(r.isLeaving)return tc(i);const l=Oh(i);if(!l)return tc(i);let h=Pc(l,o,r,n,y=>h=y);So(l,h);const f=n.subTree,p=f&&Oh(f);if(p&&p.type!==ut&&!or(l,p)&&wp(n).type!==ut){const y=Pc(p,o,r,n);if(So(p,y),c==="out-in"&&l.type!==ut)return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},tc(i);c==="in-out"&&l.type!==ut&&(y.delayLeave=(R,C,P)=>{const N=Ip(r,p);N[String(p.key)]=p,R[bn]=()=>{C(),R[bn]=void 0,delete h.delayedLeave},h.delayedLeave=P})}return i}}},CE=SE;function Ip(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Pc(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:y,onLeave:R,onAfterLeave:C,onLeaveCancelled:P,onBeforeAppear:N,onAppear:$,onAfterAppear:G,onAppearCancelled:U}=e,Z=String(t.key),he=Ip(n,t),H=(_,w)=>{_&&bt(_,r,9,w)},v=(_,w)=>{const A=w[1];H(_,w),re(_)?_.every(I=>I.length<=1)&&A():_.length<=1&&A()},g={mode:o,persisted:c,beforeEnter(_){let w=l;if(!n.isMounted)if(i)w=N||l;else return;_[bn]&&_[bn](!0);const A=he[Z];A&&or(t,A)&&A.el[bn]&&A.el[bn](),H(w,[_])},enter(_){let w=h,A=f,I=p;if(!n.isMounted)if(i)w=$||h,A=G||f,I=U||p;else return;let E=!1;const Re=_[Ji]=pt=>{E||(E=!0,pt?H(I,[_]):H(A,[_]),g.delayedLeave&&g.delayedLeave(),_[Ji]=void 0)};w?v(w,[_,Re]):Re()},leave(_,w){const A=String(t.key);if(_[Ji]&&_[Ji](!0),n.isUnmounting)return w();H(y,[_]);let I=!1;const E=_[bn]=Re=>{I||(I=!0,w(),Re?H(P,[_]):H(C,[_]),_[bn]=void 0,he[A]===t&&delete he[A])};he[A]=t,R?v(R,[_,E]):E()},clone(_){const w=Pc(_,e,n,r,s);return s&&s(w),w}};return g}function tc(t){if(aa(t))return t=Bn(t),t.children=null,t}function Oh(t){if(!aa(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&le(n.default))return n.default()}}function So(t,e){t.shapeFlag&6&&t.component?So(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ap(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===yt?(o.patchFlag&128&&s++,r=r.concat(Ap(o.children,e,c))):(e||o.type!==ut)&&r.push(c!=null?Bn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const PE=t=>t.__isTeleport,Hs=t=>t&&(t.disabled||t.disabled===""),Nh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,kh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Oc=(t,e)=>{const n=t&&t.to;return Ve(n)?e?e(n):null:n},OE={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,h){const{mc:f,pc:p,pbc:y,o:{insert:R,querySelector:C,createText:P,createComment:N}}=h,$=Hs(e.props);let{shapeFlag:G,children:U,dynamicChildren:Z}=e;if(t==null){const he=e.el=P(""),H=e.anchor=P("");R(he,n,r),R(H,n,r);const v=e.target=Oc(e.props,C),g=e.targetAnchor=P("");v&&(R(g,v),o==="svg"||Nh(v)?o="svg":(o==="mathml"||kh(v))&&(o="mathml"));const _=(w,A)=>{G&16&&f(U,w,A,s,i,o,c,l)};$?_(n,H):v&&_(v,g)}else{e.el=t.el;const he=e.anchor=t.anchor,H=e.target=t.target,v=e.targetAnchor=t.targetAnchor,g=Hs(t.props),_=g?n:H,w=g?he:v;if(o==="svg"||Nh(H)?o="svg":(o==="mathml"||kh(H))&&(o="mathml"),Z?(y(t.dynamicChildren,Z,_,s,i,o,c),Rl(t,e,!0)):l||p(t,e,_,w,s,i,o,c,!1),$)g?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Yi(e,n,he,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const A=e.target=Oc(e.props,C);A&&Yi(e,A,null,h,0)}else g&&Yi(e,H,v,h,1)}bp(e)},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetAnchor:h,target:f,props:p}=t;if(f&&s(h),i&&s(l),o&16){const y=i||!Hs(p);for(let R=0;R<c.length;R++){const C=c[R];r(C,e,n,y,!!C.dynamicChildren)}}},move:Yi,hydrate:NE};function Yi(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:h,props:f}=t,p=i===2;if(p&&r(o,e,n),(!p||Hs(f))&&l&16)for(let y=0;y<h.length;y++)s(h[y],e,n,2);p&&r(c,e,n)}function NE(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l}},h){const f=e.target=Oc(e.props,l);if(f){const p=f._lpa||f.firstChild;if(e.shapeFlag&16)if(Hs(e.props))e.anchor=h(o(t),e,c(t),n,r,s,i),e.targetAnchor=p;else{e.anchor=o(t);let y=p;for(;y;)if(y=o(y),y&&y.nodeType===8&&y.data==="teleport anchor"){e.targetAnchor=y,f._lpa=e.targetAnchor&&o(e.targetAnchor);break}h(p,e,f,n,r,s,i)}bp(e)}return e.anchor&&o(e.anchor)}const KC=OE;function bp(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const yt=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),ao=Symbol.for("v-stc"),zs=[];let Ot=null;function Fr(t=!1){zs.push(Ot=t?null:[])}function kE(){zs.pop(),Ot=zs[zs.length-1]||null}let ti=1;function Dh(t){ti+=t}function Rp(t){return t.dynamicChildren=ti>0?Ot||jr:null,kE(),ti>0&&Ot&&Ot.push(t),t}function Xi(t,e,n,r,s,i){return Rp(X(t,e,n,r,s,i,!0))}function Sp(t,e,n,r,s){return Rp(ke(t,e,n,r,s,!0))}function Co(t){return t?t.__v_isVNode===!0:!1}function or(t,e){return t.type===e.type&&t.key===e.key}const Cp=({key:t})=>t??null,co=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ve(t)||ct(t)||le(t)?{i:qe,r:t,k:e,f:!!n}:t:null);function X(t,e=null,n=null,r=0,s=null,i=t===yt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cp(e),ref:e&&co(e),scopeId:ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qe};return c?(Sl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ve(n)?8:16),ti>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const ke=DE;function DE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===zy)&&(t=ut),Co(t)){const c=Bn(t,e,!0);return n&&Sl(c,n),ti>0&&!i&&Ot&&(c.shapeFlag&6?Ot[Ot.indexOf(t)]=c:Ot.push(c)),c.patchFlag=-2,c}if(HE(t)&&(t=t.__vccOpts),e){e=VE(e);let{class:c,style:l}=e;c&&!Ve(c)&&(e.class=fl(c)),be(l)&&(zd(l)&&!re(l)&&(l=Fe({},l)),e.style=hl(l))}const o=Ve(t)?1:Ky(t)?128:PE(t)?64:be(t)?4:le(t)?2:0;return X(t,e,n,r,s,o,i,!0)}function VE(t){return t?zd(t)||hp(t)?Fe({},t):t:null}function Bn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?xE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Cp(h),ref:e&&e.ref?n&&i?re(i)?i.concat(co(e)):[i,co(e)]:co(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bn(t.ssContent),ssFallback:t.ssFallback&&Bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&So(f,l.clone(f)),f}function Ur(t=" ",e=0){return ke(ca,null,t,e)}function WC(t,e){const n=ke(ao,null,t);return n.staticCount=e,n}function GC(t="",e=!1){return e?(Fr(),Sp(ut,null,t)):ke(ut,null,t)}function Mt(t){return t==null||typeof t=="boolean"?ke(ut):re(t)?ke(yt,null,t.slice()):typeof t=="object"?Rn(t):ke(ca,null,String(t))}function Rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bn(t)}function Sl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Sl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!hp(e)?e._ctx=qe:s===3&&qe&&(qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:qe},n=32):(e=String(e),r&64?(n=16,e=[Ur(e)]):n=8);t.children=e,t.shapeFlag|=n}function xE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=fl([e.class,r.class]));else if(s==="style")e.style=hl([e.style,r.style]);else if(Yo(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Lt(t,e,n,r=null){bt(t,e,7,[n,r])}const LE=cp();let ME=0;function FE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||LE,i={uid:ME++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new kd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dp(r,s),emitsOptions:tp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Uy.bind(null,i),t.ce&&t.ce(i),i}let Ke=null;const Pp=()=>Ke||qe;let Po,Nc;{const t=Pd(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Po=e("__VUE_INSTANCE_SETTERS__",n=>Ke=n),Nc=e("__VUE_SSR_SETTERS__",n=>la=n)}const pi=t=>{const e=Ke;return Po(t),t.scope.on(),()=>{t.scope.off(),Po(e)}},Vh=()=>{Ke&&Ke.scope.off(),Po(null)};function Op(t){return t.vnode.shapeFlag&4}let la=!1;function UE(t,e=!1){e&&Nc(e);const{props:n,children:r}=t.vnode,s=Op(t);hE(t,n,s,e),pE(t,r);const i=s?BE(t,e):void 0;return e&&Nc(!1),i}function BE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,nE);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?$E(t):null,i=pi(t);Hn();const o=Vn(r,t,0,[t.props,s]);if(cn(),i(),bd(o)){if(o.then(Vh,Vh),e)return o.then(c=>{xh(t,c,e)}).catch(c=>{ra(c,t,0)});t.asyncDep=o}else xh(t,o,e)}else Np(t,e)}function xh(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=Qd(e)),Np(t,n)}let Lh;function Np(t,e,n){const r=t.type;if(!t.render){if(!e&&Lh&&!r.render){const s=r.template||Al(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=Fe(Fe({isCustomElement:i,delimiters:c},o),l);r.render=Lh(s,h)}}t.render=r.render||At}{const s=pi(t);Hn();try{rE(t)}finally{cn(),s()}}}const jE={get(t,e){return ft(t,"get",""),t[e]}};function $E(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,jE),slots:t.slots,emit:t.emit,expose:e}}function ua(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Qd(Sy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qs)return qs[n](t)},has(e,n){return n in e||n in qs}})):t.proxy}function qE(t,e=!0){return le(t)?t.displayName||t.name:t.name||e&&t.__name}function HE(t){return le(t)&&"__vccOpts"in t}const zE=(t,e)=>Cy(t,e,la);function KE(t,e,n){const r=arguments.length;return r===2?be(e)&&!re(e)?Co(e)?ke(t,null,[e]):ke(t,e):ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Co(n)&&(n=[n]),ke(t,e,n))}const WE="3.4.30";/**
* @vue/runtime-dom v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const GE="http://www.w3.org/2000/svg",QE="http://www.w3.org/1998/Math/MathML",Zt=typeof document<"u"?document:null,Mh=Zt&&Zt.createElement("template"),JE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Zt.createElementNS(GE,t):e==="mathml"?Zt.createElementNS(QE,t):n?Zt.createElement(t,{is:n}):Zt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Zt.createTextNode(t),createComment:t=>Zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Mh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Mh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},En="transition",Cs="animation",ni=Symbol("_vtc"),kp=(t,{slots:e})=>KE(CE,YE(t),e);kp.displayName="Transition";const Dp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};kp.props=Fe({},Tp,Dp);const nr=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},Fh=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function YE(t){const e={};for(const I in t)I in Dp||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:y=`${n}-leave-active`,leaveToClass:R=`${n}-leave-to`}=t,C=XE(s),P=C&&C[0],N=C&&C[1],{onBeforeEnter:$,onEnter:G,onEnterCancelled:U,onLeave:Z,onLeaveCancelled:he,onBeforeAppear:H=$,onAppear:v=G,onAppearCancelled:g=U}=e,_=(I,E,Re)=>{rr(I,E?f:c),rr(I,E?h:o),Re&&Re()},w=(I,E)=>{I._isLeaving=!1,rr(I,p),rr(I,R),rr(I,y),E&&E()},A=I=>(E,Re)=>{const pt=I?v:G,xe=()=>_(E,I,Re);nr(pt,[E,xe]),Uh(()=>{rr(E,I?l:i),vn(E,I?f:c),Fh(pt)||Bh(E,r,P,xe)})};return Fe(e,{onBeforeEnter(I){nr($,[I]),vn(I,i),vn(I,o)},onBeforeAppear(I){nr(H,[I]),vn(I,l),vn(I,h)},onEnter:A(!1),onAppear:A(!0),onLeave(I,E){I._isLeaving=!0;const Re=()=>w(I,E);vn(I,p),vn(I,y),tv(),Uh(()=>{I._isLeaving&&(rr(I,p),vn(I,R),Fh(Z)||Bh(I,r,N,Re))}),nr(Z,[I,Re])},onEnterCancelled(I){_(I,!1),nr(U,[I])},onAppearCancelled(I){_(I,!0),nr(g,[I])},onLeaveCancelled(I){w(I),nr(he,[I])}})}function XE(t){if(t==null)return null;if(be(t))return[nc(t.enter),nc(t.leave)];{const e=nc(t);return[e,e]}}function nc(t){return Q_(t)}function vn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ni]||(t[ni]=new Set)).add(e)}function rr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ni];n&&(n.delete(e),n.size||(t[ni]=void 0))}function Uh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ZE=0;function Bh(t,e,n,r){const s=t._endId=++ZE,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=ev(t,e);if(!o)return r();const h=o+"end";let f=0;const p=()=>{t.removeEventListener(h,y),i()},y=R=>{R.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(h,y)}function ev(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${En}Delay`),i=r(`${En}Duration`),o=jh(s,i),c=r(`${Cs}Delay`),l=r(`${Cs}Duration`),h=jh(c,l);let f=null,p=0,y=0;e===En?o>0&&(f=En,p=o,y=i.length):e===Cs?h>0&&(f=Cs,p=h,y=l.length):(p=Math.max(o,h),f=p>0?o>h?En:Cs:null,y=f?f===En?i.length:l.length:0);const R=f===En&&/\b(transform|all)(,|$)/.test(r(`${En}Property`).toString());return{type:f,timeout:p,propCount:y,hasTransform:R}}function jh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>$h(n)+$h(t[r])))}function $h(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function tv(){return document.body.offsetHeight}function nv(t,e,n){const r=t[ni];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Oo=Symbol("_vod"),Vp=Symbol("_vsh"),QC={beforeMount(t,{value:e},{transition:n}){t[Oo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ps(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ps(t,!0),r.enter(t)):r.leave(t,()=>{Ps(t,!1)}):Ps(t,e))},beforeUnmount(t,{value:e}){Ps(t,e)}};function Ps(t,e){t.style.display=e?t[Oo]:"none",t[Vp]=!e}const rv=Symbol(""),sv=/(^|;)\s*display\s*:/;function iv(t,e,n){const r=t.style,s=Ve(n);let i=!1;if(n&&!s){if(e)if(Ve(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&lo(r,c,"")}else for(const o in e)n[o]==null&&lo(r,o,"");for(const o in n)o==="display"&&(i=!0),lo(r,o,n[o])}else if(s){if(e!==n){const o=r[rv];o&&(n+=";"+o),r.cssText=n,i=sv.test(n)}}else e&&t.removeAttribute("style");Oo in t&&(t[Oo]=i?r.display:"",t[Vp]&&(r.display="none"))}const qh=/\s*!important$/;function lo(t,e,n){if(re(n))n.forEach(r=>lo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ov(t,e);qh.test(n)?t.setProperty(ss(r),n.replace(qh,""),"important"):t[r]=n}}const Hh=["Webkit","Moz","ms"],rc={};function ov(t,e){const n=rc[e];if(n)return n;let r=zt(e);if(r!=="filter"&&r in t)return rc[e]=r;r=ea(r);for(let s=0;s<Hh.length;s++){const i=Hh[s]+r;if(i in t)return rc[e]=i}return e}const zh="http://www.w3.org/1999/xlink";function Kh(t,e,n,r,s,i=ty(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(zh,e.slice(6,e.length)):t.setAttributeNS(zh,e,n):n==null||i&&!Od(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ht(n)?String(n):n)}function av(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const h=c==="OPTION"?t.getAttribute("value")||"":t.value,f=n==null?"":String(n);(h!==f||!("_value"in t))&&(t.value=f),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const h=typeof t[e];h==="boolean"?n=Od(n):n==null&&h==="string"?(n="",l=!0):h==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function ar(t,e,n,r){t.addEventListener(e,n,r)}function cv(t,e,n,r){t.removeEventListener(e,n,r)}const Wh=Symbol("_vei");function lv(t,e,n,r,s=null){const i=t[Wh]||(t[Wh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=uv(e);if(r){const h=i[e]=dv(r,s);ar(t,c,h,l)}else o&&(cv(t,c,o,l),i[e]=void 0)}}const Gh=/(?:Once|Passive|Capture)$/;function uv(t){let e;if(Gh.test(t)){e={};let r;for(;r=t.match(Gh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ss(t.slice(2)),e]}let sc=0;const hv=Promise.resolve(),fv=()=>sc||(hv.then(()=>sc=0),sc=Date.now());function dv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;bt(pv(r,n.value),e,5,[r])};return n.value=t,n.attached=fv(),n}function pv(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Qh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,mv=(t,e,n,r,s,i,o,c,l)=>{const h=s==="svg";e==="class"?nv(t,r,h):e==="style"?iv(t,n,r):Yo(e)?cl(e)||lv(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gv(t,e,r,h))?(av(t,e,r,i,o,c,l),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kh(t,e,r,h,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Kh(t,e,r,h))};function gv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qh(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qh(e)&&Ve(n)?!1:e in t}const No=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>so(e,n):e};function _v(t){t.target.composing=!0}function Jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zr=Symbol("_assign"),Os={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[zr]=No(s);const i=r||s.props&&s.props.type==="number";ar(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=wo(c)),t[zr](c)}),n&&ar(t,"change",()=>{t.value=t.value.trim()}),e||(ar(t,"compositionstart",_v),ar(t,"compositionend",Jh),ar(t,"change",Jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[zr]=No(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?wo(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},yv={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Xo(e);ar(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?wo(ko(o)):ko(o));t[zr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Yd(()=>{t._assigning=!1})}),t[zr]=No(r)},mounted(t,{value:e,modifiers:{number:n}}){Yh(t,e)},beforeUpdate(t,e,n){t[zr]=No(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Yh(t,e)}};function Yh(t,e,n){const r=t.multiple,s=re(e);if(!(r&&!s&&!Xo(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=ko(c);if(r)if(s){const h=typeof l;h==="string"||h==="number"?c.selected=e.some(f=>String(f)===String(l)):c.selected=ry(e,l)>-1}else c.selected=e.has(l);else if(ta(ko(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ko(t){return"_value"in t?t._value:t.value}const Ev=["ctrl","shift","alt","meta"],vv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ev.some(n=>t[`${n}Key`]&&!e.includes(n))},Tv=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=vv[e[o]];if(c&&c(s,e))return}return t(s,...i)})},wv=Fe({patchProp:mv},JE);let Xh;function Iv(){return Xh||(Xh=gE(wv))}const JC=(...t)=>{const e=Iv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=bv(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Av(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Av(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function bv(t){return Ve(t)?document.querySelector(t):t}var Zh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Rv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Lp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let y=(c&15)<<2|h>>6,R=h&63;l||(R=64,o||(y=64)),r.push(n[f],n[p],n[y],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Rv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new Sv;const y=i<<2|c>>4;if(r.push(y),h!==64){const R=c<<4&240|h>>2;if(r.push(R),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cv=function(t){const e=xp(t);return Lp.encodeByteArray(e,!0)},Do=function(t){return Cv(t).replace(/\./g,"")},Mp=function(t){try{return Lp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=()=>Pv().__FIREBASE_DEFAULTS__,Nv=()=>{if(typeof process>"u"||typeof Zh>"u")return;const t=Zh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mp(t[1]);return e&&JSON.parse(e)},ha=()=>{try{return Ov()||Nv()||kv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fp=t=>{var e,n;return(n=(e=ha())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Dv=t=>{const e=Fp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Up=()=>{var t;return(t=ha())===null||t===void 0?void 0:t.config},Bp=t=>{var e;return(e=ha())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Do(JSON.stringify(n)),Do(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function Mv(){var t;const e=(t=ha())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Uv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bv(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jv(){return!Mv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $v(){try{return typeof indexedDB=="object"}catch{return!1}}function qv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hv,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zv(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new dn(s,c,r)}}function zv(t,e){return t.replace(Kv,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Kv=/\{\$([^}]+)}/g;function Wv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ef(i)&&ef(o)){if(!Vo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ef(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Gv(t,e){const n=new Qv(t,e);return n.subscribe.bind(n)}class Qv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Jv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ic),s.error===void 0&&(s.error=ic),s.complete===void 0&&(s.complete=ic);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ic(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){return t&&t._delegate?t._delegate:t}class dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Vv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zv(e))try{this.getOrInitializeService({instanceIdentifier:sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sr){return this.instances.has(e)}getOptions(e=sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sr){return this.component?this.component.multipleInstances?e:sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xv(t){return t===sr?void 0:t}function Zv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const tT={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},nT=de.INFO,rT={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},sT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cl{constructor(e){this.name=e,this._logLevel=nT,this._logHandler=sT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const iT=(t,e)=>e.some(n=>t instanceof n);let tf,nf;function oT(){return tf||(tf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aT(){return nf||(nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jp=new WeakMap,kc=new WeakMap,$p=new WeakMap,oc=new WeakMap,Pl=new WeakMap;function cT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(xn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jp.set(n,t)}).catch(()=>{}),Pl.set(e,t),e}function lT(t){if(kc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});kc.set(t,e)}let Dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$p.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uT(t){Dc=t(Dc)}function hT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ac(this),e,...n);return $p.set(r,e.sort?e.sort():[e]),xn(r)}:aT().includes(t)?function(...e){return t.apply(ac(this),e),xn(jp.get(this))}:function(...e){return xn(t.apply(ac(this),e))}}function fT(t){return typeof t=="function"?hT(t):(t instanceof IDBTransaction&&lT(t),iT(t,oT())?new Proxy(t,Dc):t)}function xn(t){if(t instanceof IDBRequest)return cT(t);if(oc.has(t))return oc.get(t);const e=fT(t);return e!==t&&(oc.set(t,e),Pl.set(e,t)),e}const ac=t=>Pl.get(t);function dT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=xn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xn(o.result),l.oldVersion,l.newVersion,xn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const pT=["get","getKey","getAll","getAllKeys","count"],mT=["put","add","delete","clear"],cc=new Map;function rf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=mT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return cc.set(e,i),i}uT(t=>({...t,get:(e,n,r)=>rf(e,n)||t.get(e,n,r),has:(e,n)=>!!rf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_T(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _T(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vc="@firebase/app",sf="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Cl("@firebase/app"),yT="@firebase/app-compat",ET="@firebase/analytics-compat",vT="@firebase/analytics",TT="@firebase/app-check-compat",wT="@firebase/app-check",IT="@firebase/auth",AT="@firebase/auth-compat",bT="@firebase/database",RT="@firebase/database-compat",ST="@firebase/functions",CT="@firebase/functions-compat",PT="@firebase/installations",OT="@firebase/installations-compat",NT="@firebase/messaging",kT="@firebase/messaging-compat",DT="@firebase/performance",VT="@firebase/performance-compat",xT="@firebase/remote-config",LT="@firebase/remote-config-compat",MT="@firebase/storage",FT="@firebase/storage-compat",UT="@firebase/firestore",BT="@firebase/vertexai-preview",jT="@firebase/firestore-compat",$T="firebase",qT="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="[DEFAULT]",HT={[Vc]:"fire-core",[yT]:"fire-core-compat",[vT]:"fire-analytics",[ET]:"fire-analytics-compat",[wT]:"fire-app-check",[TT]:"fire-app-check-compat",[IT]:"fire-auth",[AT]:"fire-auth-compat",[bT]:"fire-rtdb",[RT]:"fire-rtdb-compat",[ST]:"fire-fn",[CT]:"fire-fn-compat",[PT]:"fire-iid",[OT]:"fire-iid-compat",[NT]:"fire-fcm",[kT]:"fire-fcm-compat",[DT]:"fire-perf",[VT]:"fire-perf-compat",[xT]:"fire-rc",[LT]:"fire-rc-compat",[MT]:"fire-gcs",[FT]:"fire-gcs-compat",[UT]:"fire-fst",[jT]:"fire-fst-compat",[BT]:"fire-vertex","fire-js":"fire-js",[$T]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Map,zT=new Map,Lc=new Map;function of(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jr(t){const e=t.name;if(Lc.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;Lc.set(e,t);for(const n of xo.values())of(n,t);for(const n of zT.values())of(n,t);return!0}function Ol(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new mi("app","Firebase",KT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=qT;function qp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ln.create("bad-app-name",{appName:String(s)});if(n||(n=Up()),!n)throw Ln.create("no-options");const i=xo.get(s);if(i){if(Vo(n,i.options)&&Vo(r,i.config))return i;throw Ln.create("duplicate-app",{appName:s})}const o=new eT(s);for(const l of Lc.values())o.addComponent(l);const c=new WT(n,r,o);return xo.set(s,c),c}function Hp(t=xc){const e=xo.get(t);if(!e&&t===xc&&Up())return qp();if(!e)throw Ln.create("no-app",{appName:t});return e}function Mn(t,e,n){var r;let s=(r=HT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(c.join(" "));return}Jr(new dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="firebase-heartbeat-database",QT=1,ri="firebase-heartbeat-store";let lc=null;function zp(){return lc||(lc=dT(GT,QT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),lc}async function JT(t){try{const n=(await zp()).transaction(ri),r=await n.objectStore(ri).get(Kp(t));return await n.done,r}catch(e){if(e instanceof dn)pr.warn(e.message);else{const n=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(n.message)}}}async function af(t,e){try{const r=(await zp()).transaction(ri,"readwrite");await r.objectStore(ri).put(e,Kp(t)),await r.done}catch(n){if(n instanceof dn)pr.warn(n.message);else{const r=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function Kp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=1024,XT=30*24*60*60*1e3;class ZT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=XT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cf(),{heartbeatsToSend:r,unsentEntries:s}=ew(this._heartbeatsCache.heartbeats),i=Do(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function cf(){return new Date().toISOString().substring(0,10)}function ew(t,e=YT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),lf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $v()?qv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lf(t){return Do(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t){Jr(new dr("platform-logger",e=>new gT(e),"PRIVATE")),Jr(new dr("heartbeat",e=>new ZT(e),"PRIVATE")),Mn(Vc,sf,t),Mn(Vc,sf,"esm2017"),Mn("fire-js","")}nw("");function Nl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Wp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rw=Wp,Gp=new mi("auth","Firebase",Wp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Cl("@firebase/auth");function sw(t,...e){Lo.logLevel<=de.WARN&&Lo.warn(`Auth (${is}): ${t}`,...e)}function uo(t,...e){Lo.logLevel<=de.ERROR&&Lo.error(`Auth (${is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,...e){throw kl(t,...e)}function Bt(t,...e){return kl(t,...e)}function Qp(t,e,n){const r=Object.assign(Object.assign({},rw()),{[e]:n});return new mi("auth","Firebase",r).create(e,{appName:t.name})}function sn(t){return Qp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gp.create(t,...e)}function ie(t,e,...n){if(!t)throw kl(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uo(e),new Error(e)}function ln(t,e){t||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iw(){return uf()==="http:"||uf()==="https:"}function uf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iw()||Fv()||"connection"in navigator)?navigator.onLine:!0}function aw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.shortDelay=e,this.longDelay=n,ln(n>e,"Short delay should be less than long delay!"),this.isMobile=Lv()||Uv()}get(){return ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t,e){ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=new _i(3e4,6e4);function zn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kn(t,e,n,r,s={}){return Yp(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=gi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Jp.fetch()(Xp(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Yp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cw),e);try{const s=new hw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zi(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Qp(t,f,h);Dt(t,f)}}catch(s){if(s instanceof dn)throw s;Dt(t,"network-request-failed",{message:String(s)})}}async function yi(t,e,n,r,s={}){const i=await Kn(t,e,n,r,s);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Xp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Dl(t.config,s):`${t.config.apiScheme}://${s}`}function uw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),lw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Bt(t,e,r);return s.customData._tokenResponse=n,s}function hf(t){return t!==void 0&&t.enterprise!==void 0}class fw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function dw(t,e){return Kn(t,"GET","/v2/recaptchaConfig",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(t,e){return Kn(t,"POST","/v1/accounts:delete",e)}async function Zp(t,e){return Kn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mw(t,e=!1){const n=dt(t),r=await n.getIdToken(e),s=Vl(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ks(uc(s.auth_time)),issuedAtTime:Ks(uc(s.iat)),expirationTime:Ks(uc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uc(t){return Number(t)*1e3}function Vl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Mp(n);return s?JSON.parse(s):(uo("Failed to decode base64 JWT payload"),null)}catch(s){return uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ff(t){const e=Vl(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&gw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await si(t,Zp(n,{idToken:r}));ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?em(i.providerUserInfo):[],c=Ew(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Fc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function yw(t){const e=dt(t);await Mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ew(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function em(t){return t.map(e=>{var{providerId:n}=e,r=Nl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(t,e){const n=await Yp(t,{},async()=>{const r=gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Xp(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Jp.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tw(t,e){return Kn(t,"POST","/v2/accounts:revokeToken",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ff(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=ff(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Kr;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Nl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _w(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await si(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mw(this,e)}reload(){return yw(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(sn(this.auth));const e=await this.getIdToken();return await si(this,pw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,R=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,$=(h=n.createdAt)!==null&&h!==void 0?h:void 0,G=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:Z,isAnonymous:he,providerData:H,stsTokenManager:v}=n;ie(U&&v,e,"internal-error");const g=Kr.fromJSON(this.name,v);ie(typeof U=="string",e,"internal-error"),Tn(p,e.name),Tn(y,e.name),ie(typeof Z=="boolean",e,"internal-error"),ie(typeof he=="boolean",e,"internal-error"),Tn(R,e.name),Tn(C,e.name),Tn(P,e.name),Tn(N,e.name),Tn($,e.name),Tn(G,e.name);const _=new tn({uid:U,auth:e,email:y,emailVerified:Z,displayName:p,isAnonymous:he,photoURL:C,phoneNumber:R,tenantId:P,stsTokenManager:g,createdAt:$,lastLoginAt:G});return H&&Array.isArray(H)&&(_.providerData=H.map(w=>Object.assign({},w))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Kr;s.updateFromServerResponse(n);const i=new tn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Mo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?em(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Kr;c.updateFromIdToken(r);const l=new tn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=new Map;function nn(t){ln(t instanceof Function,"Expected a class definition");let e=df.get(t);return e?(ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,df.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tm.type="NONE";const pf=tm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t,e,n){return`firebase:${t}:${e}:${n}`}class Wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ho(this.userKey,s.apiKey,i),this.fullPersistenceKey=ho("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wr(nn(pf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||nn(pf);const o=ho(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){const p=tn._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Wr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Wr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(om(e))return"Blackberry";if(am(e))return"Webos";if(xl(e))return"Safari";if((e.includes("chrome/")||rm(e))&&!e.includes("edge/"))return"Chrome";if(im(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nm(t=Ye()){return/firefox\//i.test(t)}function xl(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rm(t=Ye()){return/crios\//i.test(t)}function sm(t=Ye()){return/iemobile/i.test(t)}function im(t=Ye()){return/android/i.test(t)}function om(t=Ye()){return/blackberry/i.test(t)}function am(t=Ye()){return/webos/i.test(t)}function fa(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ww(t=Ye()){var e;return fa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Iw(){return Bv()&&document.documentMode===10}function cm(t=Ye()){return fa(t)||im(t)||am(t)||om(t)||/windows phone/i.test(t)||sm(t)}function Aw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t,e=[]){let n;switch(t){case"Browser":n=mf(Ye());break;case"Worker":n=`${mf(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(t,e={}){return Kn(t,"GET","/v2/passwordPolicy",zn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=6;class Cw{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Sw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gf(this),this.idTokenSubscription=new gf(this),this.beforeStateQueue=new bw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Zp(this,{idToken:e}),r=await tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(sn(this));const n=e?dt(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Rw(this),n=new Cw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Tw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wr(t){return dt(t)}class gf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gv(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ow(t){da=t}function um(t){return da.loadJS(t)}function Nw(){return da.recaptchaEnterpriseScript}function kw(){return da.gapiScript}function Dw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Vw="recaptcha-enterprise",xw="NO_RECAPTCHA";class Lw{constructor(e){this.type=Vw,this.auth=wr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{dw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new fw(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;hf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(xw)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&hf(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Nw();l.length!==0&&(l+=c),um(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function _f(t,e,n,r=!1){const s=new Lw(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Uc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await _f(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _f(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t,e){const n=Ol(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Vo(i,e??{}))return s;Dt(s,"already-initialized")}return n.initialize({options:e})}function Fw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Uw(t,e,n){const r=wr(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=hm(e),{host:o,port:c}=Bw(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),jw()}function hm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bw(t){const e=hm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yf(o)}}}function yf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}async function $w(t,e){return Kn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(t,e){return yi(t,"POST","/v1/accounts:signInWithPassword",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",zn(t,e))}async function zw(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Ll{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ii(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ii(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uc(e,n,"signInWithPassword",qw);case"emailLink":return Hw(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uc(e,r,"signUpPassword",$w);case"emailLink":return zw(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e){return yi(t,"POST","/v1/accounts:signInWithIdp",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="http://localhost";class mr extends Ll{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Nl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new mr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:Kw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gw(t){const e=Vs(xs(t)).link,n=e?Vs(xs(e)).deep_link_id:null,r=Vs(xs(t)).deep_link_id;return(r?Vs(xs(r)).link:null)||r||n||e||t}class Ml{constructor(e){var n,r,s,i,o,c;const l=Vs(xs(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Ww((s=l.mode)!==null&&s!==void 0?s:null);ie(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Gw(e);try{return new Ml(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,n){return ii._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ml.parseLink(n);return ie(r,"argument-error"),ii._fromEmailAndCode(e,r.code,r.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends fm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ei{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Ei{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Ei{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(t,e){return yi(t,"POST","/v1/accounts:signUp",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tn._fromIdTokenResponse(e,r,s),o=Ef(r);return new gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ef(r);return new gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends dn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fo(e,n,r,s)}}function dm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fo._fromErrorAndOperation(t,i,e,r):i})}async function Jw(t,e,n=!1){const r=await si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(sn(r));const s="reauthenticate";try{const i=await si(t,dm(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=Vl(i.idToken);ie(o,r,"internal-error");const{sub:c}=o;return ie(t.uid===c,r,"user-mismatch"),gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(t,e,n=!1){if(Ut(t.app))return Promise.reject(sn(t));const r="signIn",s=await dm(t,r,e),i=await gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Xw(t,e){return pm(wr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(t){const e=wr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Zw(t,e,n){if(Ut(t.app))return Promise.reject(sn(t));const r=wr(t),o=await Uc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Qw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&mm(t),l}),c=await gr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function YC(t,e,n){return Ut(t.app)?Promise.reject(sn(t)):Xw(dt(t),os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mm(t),r})}function eI(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function tI(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function XC(t,e,n,r){return dt(t).onAuthStateChanged(e,n,r)}function ZC(t){return dt(t).signOut()}const Uo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(){const t=Ye();return xl(t)||fa(t)}const rI=1e3,sI=10;class _m extends gm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nI()&&Aw(),this.fallbackToPolling=cm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Iw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_m.type="LOCAL";const iI=_m;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym extends gm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ym.type="SESSION";const Em=ym;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await oI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Fl("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function cI(t){jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function lI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hI(){return vm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="firebaseLocalStorageDb",fI=1,Bo="firebaseLocalStorage",wm="fbase_key";class vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ma(t,e){return t.transaction([Bo],e?"readwrite":"readonly").objectStore(Bo)}function dI(){const t=indexedDB.deleteDatabase(Tm);return new vi(t).toPromise()}function Bc(){const t=indexedDB.open(Tm,fI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bo,{keyPath:wm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bo)?e(r):(r.close(),await dI(),e(await Bc()))})})}async function vf(t,e,n){const r=ma(t,!0).put({[wm]:e,value:n});return new vi(r).toPromise()}async function pI(t,e){const n=ma(t,!1).get(e),r=await new vi(n).toPromise();return r===void 0?null:r.value}function Tf(t,e){const n=ma(t,!0).delete(e);return new vi(n).toPromise()}const mI=800,gI=3;class Im{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(hI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lI(),!this.activeServiceWorker)return;this.sender=new aI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bc();return await vf(e,Uo,"1"),await Tf(e,Uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ma(s,!1).getAll();return new vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Im.type="LOCAL";const _I=Im;new _i(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t,e){return e?nn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends Ll{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EI(t){return pm(t.auth,new Ul(t),t.bypassAuthState)}function vI(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Yw(n,new Ul(t),t.bypassAuthState)}async function TI(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Jw(n,new Ul(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EI;case"linkViaPopup":case"linkViaRedirect":return TI;case"reauthViaPopup":case"reauthViaRedirect":return vI;default:Dt(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=new _i(2e3,1e4);class Br extends Am{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=Fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wI.get())};e()}}Br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="pendingRedirect",fo=new Map;class AI extends Am{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await bI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bI(t,e){const n=CI(e),r=SI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function RI(t,e){fo.set(t._key(),e)}function SI(t){return nn(t._redirectPersistence)}function CI(t){return ho(II,t.config.apiKey,t.name)}async function PI(t,e,n=!1){if(Ut(t.app))return Promise.reject(sn(t));const r=wr(t),s=yI(r,e),o=await new AI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=10*60*1e3;class NI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OI&&this.cachedEventUids.clear(),this.cachedEventUids.has(wf(e))}saveEventToCache(e){this.cachedEventUids.add(wf(e)),this.lastProcessedEventTime=Date.now()}}function wf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,e={}){return Kn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xI=/^https?/;async function LI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DI(t);for(const n of e)try{if(MI(n))return}catch{}Dt(t,"unauthorized-domain")}function MI(t){const e=Mc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xI.test(n))return!1;if(VI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=new _i(3e4,6e4);function If(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UI(t){return new Promise((e,n)=>{var r,s,i;function o(){If(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{If(),n(Bt(t,"network-request-failed"))},timeout:FI.get()})}if(!((s=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=jt().gapi)===null||i===void 0)&&i.load)o();else{const c=Dw("iframefcb");return jt()[c]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},um(`${kw()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw po=null,e})}let po=null;function BI(t){return po=po||UI(t),po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=new _i(5e3,15e3),$I="__/auth/iframe",qI="emulator/auth/iframe",HI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KI(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dl(e,qI):`https://${t.config.authDomain}/${$I}`,r={apiKey:e.apiKey,appName:t.name,v:is},s=zI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${gi(r).slice(1)}`}async function WI(t){const e=await BI(t),n=jt().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:KI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),c=jt().setTimeout(()=>{i(o)},jI.get());function l(){jt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QI=500,JI=600,YI="_blank",XI="http://localhost";class Af{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZI(t,e,n,r=QI,s=JI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},GI),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Ye().toLowerCase();n&&(c=rm(h)?YI:n),nm(h)&&(e=e||XI,l.scrollbars="yes");const f=Object.entries(l).reduce((y,[R,C])=>`${y}${R}=${C},`,"");if(ww(h)&&c!=="_self")return eA(e||"",c),new Af(null);const p=window.open(e||"",c,f);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new Af(p)}function eA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="__/auth/handler",nA="emulator/auth/handler",rA=encodeURIComponent("fac");async function bf(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:is,eventId:s};if(e instanceof fm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ei){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${rA}=${encodeURIComponent(l)}`:"";return`${sA(t)}?${gi(c).slice(1)}${h}`}function sA({config:t}){return t.emulator?Dl(t,nA):`https://${t.authDomain}/${tA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="webStorageSupport";class iA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Em,this._completeRedirectFn=PI,this._overrideRedirectResult=RI}async _openPopup(e,n,r,s){var i;ln((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await bf(e,n,r,Mc(),s);return ZI(e,o,Fl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bf(e,n,r,Mc(),s);return cI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WI(e),r=new NI(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hc,{type:hc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[hc];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cm()||xl()||fa()}}const oA=iA;var Rf="@firebase/auth",Sf="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lA(t){Jr(new dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lm(t)},h=new Pw(r,s,i,l);return Fw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jr(new dr("auth-internal",e=>{const n=wr(e.getProvider("auth").getImmediate());return(r=>new aA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(Rf,Sf,cA(t)),Mn(Rf,Sf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=5*60,hA=Bp("authIdTokenMaxAge")||uA;let Cf=null;const fA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hA)return;const s=n==null?void 0:n.token;Cf!==s&&(Cf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dA(t=Hp()){const e=Ol(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mw(t,{popupRedirectResolver:oA,persistence:[_I,iI,Em]}),r=Bp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=fA(i.toString());tI(n,o,()=>o(n.currentUser)),eI(n,c=>o(c))}}const s=Fp("auth");return s&&Uw(n,`http://${s}`),n}function pA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ow({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Bt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",pA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lA("Browser");var mA="firebase",gA="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn(mA,gA,"app");var Pf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,Rm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function _(){}_.prototype=g.prototype,v.D=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(w,A,I){for(var E=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)E[Re-2]=arguments[Re];return g.prototype[A].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,_){_||(_=0);var w=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)w[A]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(A=0;16>A;++A)w[A]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],A=v.g[2];var I=v.g[3],E=g+(I^_&(A^I))+w[0]+3614090360&4294967295;g=_+(E<<7&4294967295|E>>>25),E=I+(A^g&(_^A))+w[1]+3905402710&4294967295,I=g+(E<<12&4294967295|E>>>20),E=A+(_^I&(g^_))+w[2]+606105819&4294967295,A=I+(E<<17&4294967295|E>>>15),E=_+(g^A&(I^g))+w[3]+3250441966&4294967295,_=A+(E<<22&4294967295|E>>>10),E=g+(I^_&(A^I))+w[4]+4118548399&4294967295,g=_+(E<<7&4294967295|E>>>25),E=I+(A^g&(_^A))+w[5]+1200080426&4294967295,I=g+(E<<12&4294967295|E>>>20),E=A+(_^I&(g^_))+w[6]+2821735955&4294967295,A=I+(E<<17&4294967295|E>>>15),E=_+(g^A&(I^g))+w[7]+4249261313&4294967295,_=A+(E<<22&4294967295|E>>>10),E=g+(I^_&(A^I))+w[8]+1770035416&4294967295,g=_+(E<<7&4294967295|E>>>25),E=I+(A^g&(_^A))+w[9]+2336552879&4294967295,I=g+(E<<12&4294967295|E>>>20),E=A+(_^I&(g^_))+w[10]+4294925233&4294967295,A=I+(E<<17&4294967295|E>>>15),E=_+(g^A&(I^g))+w[11]+2304563134&4294967295,_=A+(E<<22&4294967295|E>>>10),E=g+(I^_&(A^I))+w[12]+1804603682&4294967295,g=_+(E<<7&4294967295|E>>>25),E=I+(A^g&(_^A))+w[13]+4254626195&4294967295,I=g+(E<<12&4294967295|E>>>20),E=A+(_^I&(g^_))+w[14]+2792965006&4294967295,A=I+(E<<17&4294967295|E>>>15),E=_+(g^A&(I^g))+w[15]+1236535329&4294967295,_=A+(E<<22&4294967295|E>>>10),E=g+(A^I&(_^A))+w[1]+4129170786&4294967295,g=_+(E<<5&4294967295|E>>>27),E=I+(_^A&(g^_))+w[6]+3225465664&4294967295,I=g+(E<<9&4294967295|E>>>23),E=A+(g^_&(I^g))+w[11]+643717713&4294967295,A=I+(E<<14&4294967295|E>>>18),E=_+(I^g&(A^I))+w[0]+3921069994&4294967295,_=A+(E<<20&4294967295|E>>>12),E=g+(A^I&(_^A))+w[5]+3593408605&4294967295,g=_+(E<<5&4294967295|E>>>27),E=I+(_^A&(g^_))+w[10]+38016083&4294967295,I=g+(E<<9&4294967295|E>>>23),E=A+(g^_&(I^g))+w[15]+3634488961&4294967295,A=I+(E<<14&4294967295|E>>>18),E=_+(I^g&(A^I))+w[4]+3889429448&4294967295,_=A+(E<<20&4294967295|E>>>12),E=g+(A^I&(_^A))+w[9]+568446438&4294967295,g=_+(E<<5&4294967295|E>>>27),E=I+(_^A&(g^_))+w[14]+3275163606&4294967295,I=g+(E<<9&4294967295|E>>>23),E=A+(g^_&(I^g))+w[3]+4107603335&4294967295,A=I+(E<<14&4294967295|E>>>18),E=_+(I^g&(A^I))+w[8]+1163531501&4294967295,_=A+(E<<20&4294967295|E>>>12),E=g+(A^I&(_^A))+w[13]+2850285829&4294967295,g=_+(E<<5&4294967295|E>>>27),E=I+(_^A&(g^_))+w[2]+4243563512&4294967295,I=g+(E<<9&4294967295|E>>>23),E=A+(g^_&(I^g))+w[7]+1735328473&4294967295,A=I+(E<<14&4294967295|E>>>18),E=_+(I^g&(A^I))+w[12]+2368359562&4294967295,_=A+(E<<20&4294967295|E>>>12),E=g+(_^A^I)+w[5]+4294588738&4294967295,g=_+(E<<4&4294967295|E>>>28),E=I+(g^_^A)+w[8]+2272392833&4294967295,I=g+(E<<11&4294967295|E>>>21),E=A+(I^g^_)+w[11]+1839030562&4294967295,A=I+(E<<16&4294967295|E>>>16),E=_+(A^I^g)+w[14]+4259657740&4294967295,_=A+(E<<23&4294967295|E>>>9),E=g+(_^A^I)+w[1]+2763975236&4294967295,g=_+(E<<4&4294967295|E>>>28),E=I+(g^_^A)+w[4]+1272893353&4294967295,I=g+(E<<11&4294967295|E>>>21),E=A+(I^g^_)+w[7]+4139469664&4294967295,A=I+(E<<16&4294967295|E>>>16),E=_+(A^I^g)+w[10]+3200236656&4294967295,_=A+(E<<23&4294967295|E>>>9),E=g+(_^A^I)+w[13]+681279174&4294967295,g=_+(E<<4&4294967295|E>>>28),E=I+(g^_^A)+w[0]+3936430074&4294967295,I=g+(E<<11&4294967295|E>>>21),E=A+(I^g^_)+w[3]+3572445317&4294967295,A=I+(E<<16&4294967295|E>>>16),E=_+(A^I^g)+w[6]+76029189&4294967295,_=A+(E<<23&4294967295|E>>>9),E=g+(_^A^I)+w[9]+3654602809&4294967295,g=_+(E<<4&4294967295|E>>>28),E=I+(g^_^A)+w[12]+3873151461&4294967295,I=g+(E<<11&4294967295|E>>>21),E=A+(I^g^_)+w[15]+530742520&4294967295,A=I+(E<<16&4294967295|E>>>16),E=_+(A^I^g)+w[2]+3299628645&4294967295,_=A+(E<<23&4294967295|E>>>9),E=g+(A^(_|~I))+w[0]+4096336452&4294967295,g=_+(E<<6&4294967295|E>>>26),E=I+(_^(g|~A))+w[7]+1126891415&4294967295,I=g+(E<<10&4294967295|E>>>22),E=A+(g^(I|~_))+w[14]+2878612391&4294967295,A=I+(E<<15&4294967295|E>>>17),E=_+(I^(A|~g))+w[5]+4237533241&4294967295,_=A+(E<<21&4294967295|E>>>11),E=g+(A^(_|~I))+w[12]+1700485571&4294967295,g=_+(E<<6&4294967295|E>>>26),E=I+(_^(g|~A))+w[3]+2399980690&4294967295,I=g+(E<<10&4294967295|E>>>22),E=A+(g^(I|~_))+w[10]+4293915773&4294967295,A=I+(E<<15&4294967295|E>>>17),E=_+(I^(A|~g))+w[1]+2240044497&4294967295,_=A+(E<<21&4294967295|E>>>11),E=g+(A^(_|~I))+w[8]+1873313359&4294967295,g=_+(E<<6&4294967295|E>>>26),E=I+(_^(g|~A))+w[15]+4264355552&4294967295,I=g+(E<<10&4294967295|E>>>22),E=A+(g^(I|~_))+w[6]+2734768916&4294967295,A=I+(E<<15&4294967295|E>>>17),E=_+(I^(A|~g))+w[13]+1309151649&4294967295,_=A+(E<<21&4294967295|E>>>11),E=g+(A^(_|~I))+w[4]+4149444226&4294967295,g=_+(E<<6&4294967295|E>>>26),E=I+(_^(g|~A))+w[11]+3174756917&4294967295,I=g+(E<<10&4294967295|E>>>22),E=A+(g^(I|~_))+w[2]+718787259&4294967295,A=I+(E<<15&4294967295|E>>>17),E=_+(I^(A|~g))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var _=g-this.blockSize,w=this.B,A=this.h,I=0;I<g;){if(A==0)for(;I<=_;)s(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<g;)if(w[A++]=v.charCodeAt(I++),A==this.blockSize){s(this,w),A=0;break}}else for(;I<g;)if(w[A++]=v[I++],A==this.blockSize){s(this,w),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var _=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=_&255,_/=256;for(this.u(v),v=Array(16),g=_=0;4>g;++g)for(var w=0;32>w;w+=8)v[_++]=this.g[g]>>>w&255;return v};function i(v,g){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function o(v,g){this.h=g;for(var _=[],w=!0,A=v.length-1;0<=A;A--){var I=v[A]|0;w&&I==g||(_[A]=I,w=!1)}this.g=_}var c={};function l(v){return-128<=v&&128>v?i(v,function(g){return new o([g|0],0>g?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return N(h(-v));for(var g=[],_=1,w=0;v>=_;w++)g[w]=v/_|0,_*=4294967296;return new o(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return N(f(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),w=p,A=0;A<v.length;A+=8){var I=Math.min(8,v.length-A),E=parseInt(v.substring(A,A+I),g);8>I?(I=h(Math.pow(g,I)),w=w.j(I).add(h(E))):(w=w.j(_),w=w.add(h(E)))}return w}var p=l(0),y=l(1),R=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();for(var v=0,g=1,_=0;_<this.g.length;_++){var w=this.i(_);v+=(0<=w?w:4294967296+w)*g,g*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(P(this))return"-"+N(this).toString(v);for(var g=h(Math.pow(v,6)),_=this,w="";;){var A=Z(_,g).g;_=$(_,A.j(g));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=A,C(_))return I+w;for(;6>I.length;)I="0"+I;w=I+w}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function P(v){return v.h==-1}t.l=function(v){return v=$(this,v),P(v)?-1:C(v)?0:1};function N(v){for(var g=v.g.length,_=[],w=0;w<g;w++)_[w]=~v.g[w];return new o(_,~v.h).add(y)}t.abs=function(){return P(this)?N(this):this},t.add=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0,A=0;A<=g;A++){var I=w+(this.i(A)&65535)+(v.i(A)&65535),E=(I>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);w=E>>>16,I&=65535,E&=65535,_[A]=E<<16|I}return new o(_,_[_.length-1]&-2147483648?-1:0)};function $(v,g){return v.add(N(g))}t.j=function(v){if(C(this)||C(v))return p;if(P(this))return P(v)?N(this).j(N(v)):N(N(this).j(v));if(P(v))return N(this.j(N(v)));if(0>this.l(R)&&0>v.l(R))return h(this.m()*v.m());for(var g=this.g.length+v.g.length,_=[],w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<v.g.length;A++){var I=this.i(w)>>>16,E=this.i(w)&65535,Re=v.i(A)>>>16,pt=v.i(A)&65535;_[2*w+2*A]+=E*pt,G(_,2*w+2*A),_[2*w+2*A+1]+=I*pt,G(_,2*w+2*A+1),_[2*w+2*A+1]+=E*Re,G(_,2*w+2*A+1),_[2*w+2*A+2]+=I*Re,G(_,2*w+2*A+2)}for(w=0;w<g;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=g;w<2*g;w++)_[w]=0;return new o(_,0)};function G(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function U(v,g){this.g=v,this.h=g}function Z(v,g){if(C(g))throw Error("division by zero");if(C(v))return new U(p,p);if(P(v))return g=Z(N(v),g),new U(N(g.g),N(g.h));if(P(g))return g=Z(v,N(g)),new U(N(g.g),g.h);if(30<v.g.length){if(P(v)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,w=g;0>=w.l(v);)_=he(_),w=he(w);var A=H(_,1),I=H(w,1);for(w=H(w,2),_=H(_,2);!C(w);){var E=I.add(w);0>=E.l(v)&&(A=A.add(_),I=E),w=H(w,1),_=H(_,1)}return g=$(v,A.j(g)),new U(A,g)}for(A=p;0<=v.l(g);){for(_=Math.max(1,Math.floor(v.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),I=h(_),E=I.j(g);P(E)||0<E.l(v);)_-=w,I=h(_),E=I.j(g);C(I)&&(I=y),A=A.add(I),v=$(v,E)}return new U(A,v)}t.A=function(v){return Z(this,v).h},t.and=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)&v.i(w);return new o(_,this.h&v.h)},t.or=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)|v.i(w);return new o(_,this.h|v.h)},t.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)^v.i(w);return new o(_,this.h^v.h)};function he(v){for(var g=v.g.length+1,_=[],w=0;w<g;w++)_[w]=v.i(w)<<1|v.i(w-1)>>>31;return new o(_,v.h)}function H(v,g){var _=g>>5;g%=32;for(var w=v.g.length-_,A=[],I=0;I<w;I++)A[I]=0<g?v.i(I+_)>>>g|v.i(I+_+1)<<32-g:v.i(I+_);return new o(A,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Rm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,hr=o}).apply(typeof Pf<"u"?Pf:typeof self<"u"?self:typeof window<"u"?window:{});var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sm,Cm,Ls,Pm,mo,jc,Om,Nm,km;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof eo=="object"&&eo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in d))break e;d=d[S]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,S={next:function(){if(!m&&d<a.length){var O=d++;return{value:u(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function y(a,u,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,y.apply(null,arguments)}function R(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,S,O){for(var z=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)z[Ie-2]=arguments[Ie];return u.prototype[S].apply(m,z)}}function P(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function N(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const S=a.length||0,O=m.length||0;a.length=S+O;for(let z=0;z<O;z++)a[S+z]=m[z]}else a.push(m)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function G(a){return/^[\s\xa0]*$/.test(a)}function U(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function Z(a){return Z[" "](a),a}Z[" "]=function(){};var he=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function H(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function v(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function g(a){const u={};for(const d in a)u[d]=a[d];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let d,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(d in m)a[d]=m[d];for(let O=0;O<_.length;O++)d=_[O],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function A(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function I(a){c.setTimeout(()=>{throw a},0)}function E(){var a=St;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Re{constructor(){this.h=this.g=null}add(u,d){const m=pt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var pt=new $(()=>new xe,a=>a.reset());class xe{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let we,_e=!1,St=new Re,Wn=()=>{const a=c.Promise.resolve(void 0);we=()=>{a.then(Gt)}};var Gt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){I(d)}var u=pt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}_e=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Va=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function Gn(a,u){if(je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(he){e:{try{Z(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Gn.aa.h.call(this)}}C(Gn,je);var Ct={2:"touch",3:"pen",4:"mouse"};Gn.prototype.h=function(){Gn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Qt="closure_listenable_"+(1e6*Math.random()|0),ds=0;function Pi(a,u,d,m,S){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=S,this.key=++ds,this.da=this.fa=!1}function xt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Qn(a){this.src=a,this.g={},this.h=0}Qn.prototype.add=function(a,u,d,m,S){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var z=T(a,u,m,S);return-1<z?(u=a[z],d||(u.fa=!1)):(u=new Pi(u,this.src,O,!!m,S),u.fa=d,a.push(u)),u};function br(a,u){var d=u.type;if(d in a.g){var m=a.g[d],S=Array.prototype.indexOf.call(m,u,void 0),O;(O=0<=S)&&Array.prototype.splice.call(m,S,1),O&&(xt(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function T(a,u,d,m){for(var S=0;S<a.length;++S){var O=a[S];if(!O.da&&O.listener==u&&O.capture==!!d&&O.ha==m)return S}return-1}var b="closure_lm_"+(1e6*Math.random()|0),D={};function V(a,u,d,m,S){if(Array.isArray(u)){for(var O=0;O<u.length;O++)V(a,u[O],d,m,S);return null}return d=Y(d),a&&a[Qt]?a.K(u,d,h(m)?!!m.capture:!!m,S):x(a,u,d,!1,m,S)}function x(a,u,d,m,S,O){if(!u)throw Error("Invalid event type");var z=h(S)?!!S.capture:!!S,Ie=W(a);if(Ie||(a[b]=Ie=new Qn(a)),d=Ie.add(u,d,m,z,O),d.proxy)return d;if(m=j(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Va||(S=z),S===void 0&&(S=!1),a.addEventListener(u.toString(),m,S);else if(a.attachEvent)a.attachEvent(q(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function j(){function a(d){return u.call(a.src,a.listener,d)}const u=F;return a}function K(a,u,d,m,S){if(Array.isArray(u))for(var O=0;O<u.length;O++)K(a,u[O],d,m,S);else m=h(m)?!!m.capture:!!m,d=Y(d),a&&a[Qt]?(a=a.i,u=String(u).toString(),u in a.g&&(O=a.g[u],d=T(O,d,m,S),-1<d&&(xt(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[u],a.h--)))):a&&(a=W(a))&&(u=a.g[u.toString()],a=-1,u&&(a=T(u,d,m,S)),(d=-1<a?u[a]:null)&&B(d))}function B(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Qt])br(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(q(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=W(u))?(br(d,a),d.h==0&&(d.src=null,u[b]=null)):xt(a)}}}function q(a){return a in D?D[a]:D[a]="on"+a}function F(a,u){if(a.da)a=!0;else{u=new Gn(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&B(a),a=d.call(m,u)}return a}function W(a){return a=a[b],a instanceof Qn?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function Y(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(u){return a.handleEvent(u)}),a[ee])}function J(){Be.call(this),this.i=new Qn(this),this.M=this,this.F=null}C(J,Be),J.prototype[Qt]=!0,J.prototype.removeEventListener=function(a,u,d,m){K(this,a,u,d,m)};function ne(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new je(u,a);else if(u instanceof je)u.target=u.target||a;else{var S=u;u=new je(m,a),w(u,S)}if(S=!0,d)for(var O=d.length-1;0<=O;O--){var z=u.g=d[O];S=Te(z,m,!0,u)&&S}if(z=u.g=a,S=Te(z,m,!0,u)&&S,S=Te(z,m,!1,u)&&S,d)for(O=0;O<d.length;O++)z=u.g=d[O],S=Te(z,m,!1,u)&&S}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)xt(d[m]);delete a.g[u],a.h--}}this.F=null},J.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},J.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Te(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,O=0;O<u.length;++O){var z=u[O];if(z&&!z.da&&z.capture==d){var Ie=z.listener,We=z.ha||z.src;z.fa&&br(a.i,z),S=Ie.call(We,m)!==!1&&S}}return S&&!m.defaultPrevented}function me(a,u,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function De(a){a.g=me(()=>{a.g=null,a.i&&(a.i=!1,De(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class mt extends Be{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:De(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(a){Be.call(this),this.h=a,this.g={}}C(vt,Be);var ps=[];function pn(a){H(a.g,function(u,d){this.g.hasOwnProperty(d)&&B(u)},a),a.g={}}vt.prototype.N=function(){vt.aa.N.call(this),pn(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rr=c.JSON.stringify,it=c.JSON.parse,Tt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Sr(){}Sr.prototype.h=null;function yu(a){return a.h||(a.h=a.i())}function Eu(){}var ms={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xa(){je.call(this,"d")}C(xa,je);function La(){je.call(this,"c")}C(La,je);var Jn={},vu=null;function Oi(){return vu=vu||new J}Jn.La="serverreachability";function Tu(a){je.call(this,Jn.La,a)}C(Tu,je);function gs(a){const u=Oi();ne(u,new Tu(u))}Jn.STAT_EVENT="statevent";function wu(a,u){je.call(this,Jn.STAT_EVENT,a),this.stat=u}C(wu,je);function ot(a){const u=Oi();ne(u,new wu(u,a))}Jn.Ma="timingevent";function Iu(a,u){je.call(this,Jn.Ma,a),this.size=u}C(Iu,je);function _s(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function ys(){this.g=!0}ys.prototype.xa=function(){this.g=!1};function T_(a,u,d,m,S,O){a.info(function(){if(a.g)if(O)for(var z="",Ie=O.split("&"),We=0;We<Ie.length;We++){var ye=Ie[We].split("=");if(1<ye.length){var Ze=ye[0];ye=ye[1];var et=Ze.split("_");z=2<=et.length&&et[1]=="type"?z+(Ze+"="+ye+"&"):z+(Ze+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+u+`
`+d+`
`+z})}function w_(a,u,d,m,S,O,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+u+`
`+d+`
`+O+" "+z})}function Cr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+A_(a,d)+(m?" "+m:"")})}function I_(a,u){a.info(function(){return"TIMEOUT: "+u})}ys.prototype.info=function(){};function A_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var O=S[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<S.length;z++)S[z]=""}}}}return Rr(d)}catch{return u}}var Ni={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Au={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ma;function ki(){}C(ki,Sr),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},Ma=new ki;function mn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bu}function bu(){this.i=null,this.g="",this.h=!1}var Ru={},Fa={};function Ua(a,u,d){a.L=1,a.v=Li(Jt(u)),a.m=d,a.P=!0,Su(a,null)}function Su(a,u){a.F=Date.now(),Di(a),a.A=Jt(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),ju(d.i,"t",m),a.C=0,d=a.j.J,a.h=new bu,a.g=ih(a.j,d?u:null,!a.m),0<a.O&&(a.M=new mt(y(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(ps[0]=S.toString()),S=ps);for(var O=0;O<S.length;O++){var z=V(d,S[O],m||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),gs(),T_(a.i,a.u,a.A,a.l,a.R,a.m)}mn.prototype.ca=function(a){a=a.target;const u=this.M;u&&Yt(a)==3?u.j():this.Y(a)},mn.prototype.Y=function(a){try{if(a==this.g)e:{const et=Yt(this.g);var u=this.g.Ba();const Nr=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||Gu(this.g)))){this.J||et!=4||u==7||(u==8||0>=Nr?gs(3):gs(2)),Ba(this);var d=this.g.Z();this.X=d;t:if(Cu(this)){var m=Gu(this.g);a="";var S=m.length,O=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yn(this),Es(this);var z="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(O&&u==S-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,w_(this.i,this.u,this.A,this.l,this.R,et,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,We=this.g;if((Ie=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Ie)){var ye=Ie;break t}}ye=null}if(d=ye)Cr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ja(this,d);else{this.o=!1,this.s=3,ot(12),Yn(this),Es(this);break e}}if(this.P){d=!0;let Pt;for(;!this.J&&this.C<z.length;)if(Pt=b_(this,z),Pt==Fa){et==4&&(this.s=4,ot(14),d=!1),Cr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==Ru){this.s=4,ot(15),Cr(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Cr(this.i,this.l,Pt,null),ja(this,Pt);if(Cu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||z.length!=0||this.h.h||(this.s=1,ot(16),d=!1),this.o=this.o&&d,!d)Cr(this.i,this.l,z,"[Invalid Chunked Response]"),Yn(this),Es(this);else if(0<z.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Wa(Ze),Ze.M=!0,ot(11))}}else Cr(this.i,this.l,z,null),ja(this,z);et==4&&Yn(this),this.o&&!this.J&&(et==4?th(this.j,this):(this.o=!1,Di(this)))}else $_(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Yn(this),Es(this)}}}catch{}finally{}};function Cu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function b_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Fa:(d=Number(u.substring(d,m)),isNaN(d)?Ru:(m+=1,m+d>u.length?Fa:(u=u.slice(m,m+d),a.C=m+d,u)))}mn.prototype.cancel=function(){this.J=!0,Yn(this)};function Di(a){a.S=Date.now()+a.I,Pu(a,a.I)}function Pu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_s(y(a.ba,a),u)}function Ba(a){a.B&&(c.clearTimeout(a.B),a.B=null)}mn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(I_(this.i,this.A),this.L!=2&&(gs(),ot(17)),Yn(this),this.s=2,Es(this)):Pu(this,this.S-a)};function Es(a){a.j.G==0||a.J||th(a.j,a)}function Yn(a){Ba(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,pn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ja(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||$a(d.h,a))){if(!a.K&&$a(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ji(d),Ui(d);else break e;Ka(d),ot(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=_s(y(d.Za,d),6e3));if(1>=ku(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Zn(d,11)}else if((a.K||d.g==a)&&ji(d),!G(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let ye=S[u];if(d.T=ye[0],ye=ye[1],d.G==2)if(ye[0]=="c"){d.K=ye[1],d.ia=ye[2];const Ze=ye[3];Ze!=null&&(d.la=Ze,d.j.info("VER="+d.la));const et=ye[4];et!=null&&(d.Aa=et,d.j.info("SVER="+d.Aa));const Nr=ye[5];Nr!=null&&typeof Nr=="number"&&0<Nr&&(m=1.5*Nr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Pt=a.g;if(Pt){const qi=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qi){var O=m.h;O.g||qi.indexOf("spdy")==-1&&qi.indexOf("quic")==-1&&qi.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(qa(O,O.h),O.h=null))}if(m.D){const Ga=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ga&&(m.ya=Ga,Se(m.I,m.D,Ga))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var z=a;if(m.qa=sh(m,m.J?m.ia:null,m.W),z.K){Du(m.h,z);var Ie=z,We=m.L;We&&(Ie.I=We),Ie.B&&(Ba(Ie),Di(Ie)),m.g=z}else Zu(m);0<d.i.length&&Bi(d)}else ye[0]!="stop"&&ye[0]!="close"||Zn(d,7);else d.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?Zn(d,7):za(d):ye[0]!="noop"&&d.l&&d.l.ta(ye),d.v=0)}}gs(4)}catch{}}var R_=class{constructor(a,u){this.g=a,this.map=u}};function Ou(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ku(a){return a.h?1:a.g?a.g.size:0}function $a(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function qa(a,u){a.g?a.g.add(u):a.h=u}function Du(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Ou.prototype.cancel=function(){if(this.i=Vu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return P(a.i)}function S_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function C_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function xu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=C_(a),m=S_(a),S=m.length,O=0;O<S;O++)u.call(void 0,m[O],d&&d[O],a)}var Lu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function P_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),S=null;if(0<=m){var O=a[d].substring(0,m);S=a[d].substring(m+1)}else O=a[d];u(O,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Xn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Xn){this.h=a.h,Vi(this,a.j),this.o=a.o,this.g=a.g,xi(this,a.s),this.l=a.l;var u=a.i,d=new ws;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Mu(this,d),this.m=a.m}else a&&(u=String(a).match(Lu))?(this.h=!1,Vi(this,u[1]||"",!0),this.o=vs(u[2]||""),this.g=vs(u[3]||"",!0),xi(this,u[4]),this.l=vs(u[5]||"",!0),Mu(this,u[6]||"",!0),this.m=vs(u[7]||"")):(this.h=!1,this.i=new ws(null,this.h))}Xn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ts(u,Fu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ts(u,Fu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ts(d,d.charAt(0)=="/"?k_:N_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ts(d,V_)),a.join("")};function Jt(a){return new Xn(a)}function Vi(a,u,d){a.j=d?vs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function xi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Mu(a,u,d){u instanceof ws?(a.i=u,x_(a.i,a.h)):(d||(u=Ts(u,D_)),a.i=new ws(u,a.h))}function Se(a,u,d){a.i.set(u,d)}function Li(a){return Se(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function vs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ts(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,O_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function O_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fu=/[#\/\?@]/g,N_=/[#\?:]/g,k_=/[#\?]/g,D_=/[#\?@]/g,V_=/#/g;function ws(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function gn(a){a.g||(a.g=new Map,a.h=0,a.i&&P_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=ws.prototype,t.add=function(a,u){gn(this),this.i=null,a=Pr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Uu(a,u){gn(a),u=Pr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Bu(a,u){return gn(a),u=Pr(a,u),a.g.has(u)}t.forEach=function(a,u){gn(this),this.g.forEach(function(d,m){d.forEach(function(S){a.call(u,S,m,this)},this)},this)},t.na=function(){gn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const S=a[m];for(let O=0;O<S.length;O++)d.push(u[m])}return d},t.V=function(a){gn(this);let u=[];if(typeof a=="string")Bu(this,a)&&(u=u.concat(this.g.get(Pr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return gn(this),this.i=null,a=Pr(this,a),Bu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function ju(a,u,d){Uu(a,u),0<d.length&&(a.i=null,a.g.set(Pr(a,u),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const O=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var S=O;z[m]!==""&&(S+="="+encodeURIComponent(String(z[m]))),a.push(S)}}return this.i=a.join("&")};function Pr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function x_(a,u){u&&!a.j&&(gn(a),a.i=null,a.g.forEach(function(d,m){var S=m.toLowerCase();m!=S&&(Uu(this,m),ju(this,S,d))},a)),a.j=u}function L_(a,u){const d=new ys;if(c.Image){const m=new Image;m.onload=R(_n,d,"TestLoadImage: loaded",!0,u,m),m.onerror=R(_n,d,"TestLoadImage: error",!1,u,m),m.onabort=R(_n,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=R(_n,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function M_(a,u){const d=new ys,m=new AbortController,S=setTimeout(()=>{m.abort(),_n(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(S),O.ok?_n(d,"TestPingServer: ok",!0,u):_n(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),_n(d,"TestPingServer: error",!1,u)})}function _n(a,u,d,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(d)}catch{}}function F_(){this.g=new Tt}function U_(a,u,d){const m=d||"";try{xu(a,function(S,O){let z=S;h(S)&&(z=Rr(S)),u.push(m+O+"="+encodeURIComponent(z))})}catch(S){throw u.push(m+"type="+encodeURIComponent("_badmap")),S}}function Is(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Is,Sr),Is.prototype.g=function(){return new Mi(this.l,this.j)},Is.prototype.i=function(a){return function(){return a}}({});function Mi(a,u){J.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Mi,J),t=Mi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,bs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,As(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$u(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function $u(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?As(this):bs(this),this.readyState==3&&$u(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,As(this))},t.Qa=function(a){this.g&&(this.response=a,As(this))},t.ga=function(){this.g&&As(this)};function As(a){a.readyState=4,a.l=null,a.j=null,a.v=null,bs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function bs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qu(a){let u="";return H(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ha(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=qu(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Se(a,u,d))}function Ne(a){J.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ne,J);var B_=/^https?$/i,j_=["POST","PUT"];t=Ne.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ma.g(),this.v=this.o?yu(this.o):yu(Ma),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(O){Hu(this,O);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)d.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())d.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(j_,u,void 0))||m||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of d)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wu(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Hu(this,O)}};function Hu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,zu(a),Fi(a)}function zu(a){a.A||(a.A=!0,ne(a,"complete"),ne(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ne(this,"complete"),ne(this,"abort"),Fi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fi(this,!0)),Ne.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ku(this):this.bb())},t.bb=function(){Ku(this)};function Ku(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Yt(a)!=4||a.Z()!=2)){if(a.u&&Yt(a)==4)me(a.Ea,0,a);else if(ne(a,"readystatechange"),Yt(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=z===0){var S=String(a.D).match(Lu)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),m=!B_.test(S?S.toLowerCase():"")}d=m}if(d)ne(a,"complete"),ne(a,"success");else{a.m=6;try{var O=2<Yt(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",zu(a)}}finally{Fi(a)}}}}function Fi(a,u){if(a.g){Wu(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ne(a,"ready");try{d.onreadystatechange=m}catch{}}}function Wu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Yt(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),it(u)}};function Gu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $_(a){const u={};a=(a.g&&2<=Yt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(G(a[m]))continue;var d=A(a[m]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=u[S]||[];u[S]=O,O.push(d)}v(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Qu(a){this.Aa=0,this.i=[],this.j=new ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rs("baseRetryDelayMs",5e3,a),this.cb=Rs("retryDelaySeedMs",1e4,a),this.Wa=Rs("forwardChannelMaxRetries",2,a),this.wa=Rs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ou(a&&a.concurrentRequestLimit),this.Da=new F_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qu.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){ot(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=sh(this,null,this.W),Bi(this)};function za(a){if(Ju(a),a.G==3){var u=a.U++,d=Jt(a.I);if(Se(d,"SID",a.K),Se(d,"RID",u),Se(d,"TYPE","terminate"),Ss(a,d),u=new mn(a,a.j,u),u.L=2,u.v=Li(Jt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=ih(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Di(u)}rh(a)}function Ui(a){a.g&&(Wa(a),a.g.cancel(),a.g=null)}function Ju(a){Ui(a),a.u&&(c.clearTimeout(a.u),a.u=null),ji(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Bi(a){if(!Nu(a.h)&&!a.s){a.s=!0;var u=a.Ga;we||Wn(),_e||(we(),_e=!0),St.add(u,a),a.B=0}}function q_(a,u){return ku(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_s(y(a.Ga,a,u),nh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new mn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=g(O),w(O,this.S)):O=this.S),this.m!==null||this.O||(S.H=O,O=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Xu(this,S,u),d=Jt(this.I),Se(d,"RID",a),Se(d,"CVER",22),this.D&&Se(d,"X-HTTP-Session-Id",this.D),Ss(this,d),O&&(this.O?u="headers="+encodeURIComponent(String(qu(O)))+"&"+u:this.m&&Ha(d,this.m,O)),qa(this.h,S),this.Ua&&Se(d,"TYPE","init"),this.P?(Se(d,"$req",u),Se(d,"SID","null"),S.T=!0,Ua(S,d,null)):Ua(S,d,u),this.G=2}}else this.G==3&&(a?Yu(this,a):this.i.length==0||Nu(this.h)||Yu(this))};function Yu(a,u){var d;u?d=u.l:d=a.U++;const m=Jt(a.I);Se(m,"SID",a.K),Se(m,"RID",d),Se(m,"AID",a.T),Ss(a,m),a.m&&a.o&&Ha(m,a.m,a.o),d=new mn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Xu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),qa(a.h,d),Ua(d,m,u)}function Ss(a,u){a.H&&H(a.H,function(d,m){Se(u,m,d)}),a.l&&xu({},function(d,m){Se(u,m,d)})}function Xu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?y(a.l.Na,a.l,a):null;e:{var S=a.i;let O=-1;for(;;){const z=["count="+d];O==-1?0<d?(O=S[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let Ie=!0;for(let We=0;We<d;We++){let ye=S[We].g;const Ze=S[We].map;if(ye-=O,0>ye)O=Math.max(0,S[We].g-100),Ie=!1;else try{U_(Ze,z,"req"+ye+"_")}catch{m&&m(Ze)}}if(Ie){m=z.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Zu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;we||Wn(),_e||(we(),_e=!0),St.add(u,a),a.v=0}}function Ka(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_s(y(a.Fa,a),nh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,eh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_s(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Ui(this),eh(this))};function Wa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function eh(a){a.g=new mn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Jt(a.qa);Se(u,"RID","rpc"),Se(u,"SID",a.K),Se(u,"AID",a.T),Se(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Se(u,"TO",a.ja),Se(u,"TYPE","xmlhttp"),Ss(a,u),a.m&&a.o&&Ha(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Li(Jt(u)),d.m=null,d.P=!0,Su(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ui(this),Ka(this),ot(19))};function ji(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function th(a,u){var d=null;if(a.g==u){ji(a),Wa(a),a.g=null;var m=2}else if($a(a.h,u))d=u.D,Du(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;m=Oi(),ne(m,new Iu(m,d)),Bi(a)}else Zu(a);else if(S=u.s,S==3||S==0&&0<u.X||!(m==1&&q_(a,u)||m==2&&Ka(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),S){case 1:Zn(a,5);break;case 4:Zn(a,10);break;case 3:Zn(a,6);break;default:Zn(a,2)}}}function nh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Zn(a,u){if(a.j.info("Error code "+u),u==2){var d=y(a.fb,a),m=a.Xa;const S=!m;m=new Xn(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Vi(m,"https"),Li(m),S?L_(m.toString(),d):M_(m.toString(),d)}else ot(2);a.G=0,a.l&&a.l.sa(u),rh(a),Ju(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function rh(a){if(a.G=0,a.ka=[],a.l){const u=Vu(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ka,u),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function sh(a,u,d){var m=d instanceof Xn?Jt(d):new Xn(d);if(m.g!="")u&&(m.g=u+"."+m.g),xi(m,m.s);else{var S=c.location;m=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var O=new Xn(null);m&&Vi(O,m),u&&(O.g=u),S&&xi(O,S),d&&(O.l=d),m=O}return d=a.D,u=a.ya,d&&u&&Se(m,d,u),Se(m,"VER",a.la),Ss(a,m),m}function ih(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ne(new Is({eb:d})):new Ne(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function oh(){}t=oh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $i(){}$i.prototype.g=function(a,u){return new gt(a,u)};function gt(a,u){J.call(this),this.g=new Qu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!G(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!G(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Or(this)}C(gt,J),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){za(this.g)},gt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Rr(a),a=d);u.i.push(new R_(u.Ya++,a)),u.G==3&&Bi(u)},gt.prototype.N=function(){this.g.l=null,delete this.j,za(this.g),delete this.g,gt.aa.N.call(this)};function ah(a){xa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(ah,xa);function ch(){La.call(this),this.status=1}C(ch,La);function Or(a){this.g=a}C(Or,oh),Or.prototype.ua=function(){ne(this.g,"a")},Or.prototype.ta=function(a){ne(this.g,new ah(a))},Or.prototype.sa=function(a){ne(this.g,new ch)},Or.prototype.ra=function(){ne(this.g,"b")},$i.prototype.createWebChannel=$i.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,km=function(){return new $i},Nm=function(){return Oi()},Om=Jn,jc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ni.NO_ERROR=0,Ni.TIMEOUT=8,Ni.HTTP_ERROR=6,mo=Ni,Au.COMPLETE="complete",Pm=Au,Eu.EventType=ms,ms.OPEN="a",ms.CLOSE="b",ms.ERROR="c",ms.MESSAGE="d",J.prototype.listen=J.prototype.K,Ls=Eu,Cm=Is,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,Sm=Ne}).apply(typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{});const Of="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Cl("@firebase/firestore");function Ns(){return _r.logLevel}function Q(t,...e){if(_r.logLevel<=de.DEBUG){const n=e.map(Bl);_r.debug(`Firestore (${as}): ${t}`,...n)}}function un(t,...e){if(_r.logLevel<=de.ERROR){const n=e.map(Bl);_r.error(`Firestore (${as}): ${t}`,...n)}}function Yr(t,...e){if(_r.logLevel<=de.WARN){const n=e.map(Bl);_r.warn(`Firestore (${as}): ${t}`,...n)}}function Bl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: `+t;throw un(e),new Error(e)}function Ae(t,e){t||oe()}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class yA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class EA{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new on;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new on,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new on)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new Dm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new nt(e)}}class vA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new wA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=AA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Xr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new He(0,0))}static max(){return new ae(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return oi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof oi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends oi{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const bA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends oi{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return bA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new te(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new te(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Pe.fromString(e))}static fromName(e){return new se(Pe.fromString(e).popFirst(5))}static empty(){return new se(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Pe(e.slice()))}}function RA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new jn(s,se.empty(),e)}function SA(t){return new jn(t.readTime,t.key,-1)}class jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jn(ae.min(),se.empty(),-1)}static max(){return new jn(ae.max(),se.empty(),-1)}}function CA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==PA)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function NA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}jl.oe=-1;function ga(t){return t==null}function jo(t){return t===0&&1/t==-1/0}function kA(t){return typeof t=="number"&&Number.isInteger(t)&&!jo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=s??Ge.EMPTY,this.right=i??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ge(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kf(this.data.getIterator())}getIteratorFrom(e){return new kf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class kf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Je(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Lm("Invalid base64 string: "+i):i}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const DA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=DA.exec(t);if(Ae(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ql(t){const e=t.mapValue.fields.__previous_value__;return $l(e)?ql(e):e}function ai(t){const e=$n(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class ci{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$l(t)?4:xA(t)?9007199254740991:10:oe()}function Kt(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ai(t).isEqual(ai(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=$n(s.timestampValue),c=$n(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return yr(s.bytesValue).isEqual(yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Me(s.doubleValue),c=Me(i.doubleValue);return o===c?jo(o)===jo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Xr(t.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Nf(o)!==Nf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Kt(o[l],c[l])))return!1;return!0}(t,e);default:return oe()}}function li(t,e){return(t.values||[]).find(n=>Kt(n,e))!==void 0}function Zr(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Me(i.integerValue||i.doubleValue),l=Me(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Df(t.timestampValue,e.timestampValue);case 4:return Df(ai(t),ai(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,o){const c=yr(i),l=yr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=ve(c[h],l[h]);if(f!==0)return f}return ve(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ve(Me(i.latitude),Me(o.latitude));return c!==0?c:ve(Me(i.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let h=0;h<c.length&&h<l.length;++h){const f=Zr(c[h],l[h]);if(f)return f}return ve(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===no.mapValue&&o===no.mapValue)return 0;if(i===no.mapValue)return 1;if(o===no.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const y=ve(l[p],f[p]);if(y!==0)return y;const R=Zr(c[l[p]],h[f[p]]);if(R!==0)return R}return ve(l.length,f.length)}(t.mapValue,e.mapValue);default:throw oe()}}function Df(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=$n(t),r=$n(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function es(t){return $c(t)}function $c(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$n(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$c(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$c(n.fields[o])}`;return s+"}"}(t.mapValue):oe()}function qc(t){return!!t&&"integerValue"in t}function Hl(t){return!!t&&"arrayValue"in t}function Vf(t){return!!t&&"nullValue"in t}function xf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function go(t){return!!t&&"mapValue"in t}function Ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ws(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ws(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!go(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(n)}setAll(e){let n=Qe.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ws(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());go(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];go(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){cs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(Ws(this.value))}}function Mm(t){const e=[];return cs(t.fields,(n,r)=>{const s=new Qe([n]);if(go(r)){const i=Mm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new rt(e,0,ae.min(),ae.min(),ae.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new rt(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new rt(e,2,n,ae.min(),ae.min(),It.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,ae.min(),ae.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.position=e,this.inclusive=n}}function Lf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=Zr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function LA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{}class $e extends Fm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FA(e,n,r):n==="array-contains"?new jA(e,r):n==="in"?new $A(e,r):n==="not-in"?new qA(e,r):n==="array-contains-any"?new HA(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UA(e,r):new BA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zr(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(Zr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends Fm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Wt(e,n)}matches(e){return Um(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Um(t){return t.op==="and"}function Bm(t){return MA(t)&&Um(t)}function MA(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function Hc(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+es(t.value);if(Bm(t))return t.filters.map(e=>Hc(e)).join(",");{const e=t.filters.map(n=>Hc(n)).join(",");return`${t.op}(${e})`}}function jm(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&Kt(r.value,s.value)}(t,e):t instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&jm(o,s.filters[c]),!0):!1}(t,e):void oe()}function $m(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${es(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map($m).join(" ,")+"}"}(t):"Filter"}class FA extends $e{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class UA extends $e{constructor(e,n){super(e,"in",n),this.keys=qm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BA extends $e{constructor(e,n){super(e,"not-in",n),this.keys=qm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class jA extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hl(n)&&li(n.arrayValue,this.value)}}class $A extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&li(this.value.arrayValue,n)}}class qA extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!li(this.value.arrayValue,n)}}class HA extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>li(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Ff(t,e=null,n=[],r=[],s=null,i=null,o=null){return new zA(t,e,n,r,s,i,o)}function zl(t){const e=ce(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ga(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>es(r)).join(",")),e.ue=n}return e.ue}function Kl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mf(t.startAt,e.startAt)&&Mf(t.endAt,e.endAt)}function zc(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function KA(t,e,n,r,s,i,o,c){return new _a(t,e,n,r,s,i,o,c)}function Wl(t){return new _a(t)}function Uf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WA(t){return t.collectionGroup!==null}function Gs(t){const e=ce(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Je(Qe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new qo(i,r))}),n.has(Qe.keyField().canonicalString())||e.ce.push(new qo(Qe.keyField(),r))}return e.ce}function $t(t){const e=ce(t);return e.le||(e.le=GA(e,Gs(t))),e.le}function GA(t,e){if(t.limitType==="F")return Ff(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new qo(s.field,i)});const n=t.endAt?new $o(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $o(t.startAt.position,t.startAt.inclusive):null;return Ff(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kc(t,e,n){return new _a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ya(t,e){return Kl($t(t),$t(e))&&t.limitType===e.limitType}function Hm(t){return`${zl($t(t))}|lt:${t.limitType}`}function xr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>$m(s)).join(", ")}]`),ga(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>es(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>es(s)).join(",")),`Target(${r})`}($t(t))}; limitType=${t.limitType})`}function Ea(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Gs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Lf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Gs(r),s)||r.endAt&&!function(o,c,l){const h=Lf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Gs(r),s))}(t,e)}function QA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zm(t){return(e,n)=>{let r=!1;for(const s of Gs(t)){const i=JA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function JA(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Zr(l,h):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return xm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new Oe(se.comparator);function hn(){return YA}const Km=new Oe(se.comparator);function Ms(...t){let e=Km;for(const n of t)e=e.insert(n.key,n);return e}function Wm(t){let e=Km;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return Qs()}function Gm(){return Qs()}function Qs(){return new ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const XA=new Oe(se.comparator),ZA=new Je(se.comparator);function fe(...t){let e=ZA;for(const n of t)e=e.add(n);return e}const e0=new Je(ve);function t0(){return e0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jo(e)?"-0":e}}function Jm(t){return{integerValue:""+t}}function n0(t,e){return kA(e)?Jm(e):Qm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this._=void 0}}function r0(t,e,n){return t instanceof Ho?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$l(i)&&(i=ql(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ui?Xm(t,e):t instanceof hi?Zm(t,e):function(s,i){const o=Ym(s,i),c=Bf(o)+Bf(s.Pe);return qc(o)&&qc(s.Pe)?Jm(c):Qm(s.serializer,c)}(t,e)}function s0(t,e,n){return t instanceof ui?Xm(t,e):t instanceof hi?Zm(t,e):n}function Ym(t,e){return t instanceof zo?function(r){return qc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ho extends va{}class ui extends va{constructor(e){super(),this.elements=e}}function Xm(t,e){const n=eg(e);for(const r of t.elements)n.some(s=>Kt(s,r))||n.push(r);return{arrayValue:{values:n}}}class hi extends va{constructor(e){super(),this.elements=e}}function Zm(t,e){let n=eg(e);for(const r of t.elements)n=n.filter(s=>!Kt(s,r));return{arrayValue:{values:n}}}class zo extends va{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Bf(t){return Me(t.integerValue||t.doubleValue)}function eg(t){return Hl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function i0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ui&&s instanceof ui||r instanceof hi&&s instanceof hi?Xr(r.elements,s.elements,Kt):r instanceof zo&&s instanceof zo?Kt(r.Pe,s.Pe):r instanceof Ho&&s instanceof Ho}(t.transform,e.transform)}class o0{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ta{}function tg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rg(t.key,an.none()):new Ii(t.key,t.data,an.none());{const n=t.data,r=It.empty();let s=new Je(Qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ir(t.key,r,new Nt(s.toArray()),an.none())}}function a0(t,e,n){t instanceof Ii?function(s,i,o){const c=s.value.clone(),l=$f(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(s,i,o){if(!_o(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=$f(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(ng(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Js(t,e,n,r){return t instanceof Ii?function(i,o,c,l){if(!_o(i.precondition,o))return c;const h=i.value.clone(),f=qf(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(i,o,c,l){if(!_o(i.precondition,o))return c;const h=qf(i.fieldTransforms,l,o),f=o.data;return f.setAll(ng(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return _o(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function c0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ym(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function jf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xr(r,s,(i,o)=>i0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ii extends Ta{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ir extends Ta{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ng(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $f(t,e,n){const r=new Map;Ae(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,s0(o,c,n[s]))}return r}function qf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,r0(i,o,e))}return r}class rg extends Ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class l0 extends Ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&a0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Gm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=tg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Xr(this.mutations,e.mutations,(n,r)=>jf(n,r))&&Xr(this.baseMutations,e.baseMutations,(n,r)=>jf(n,r))}}class Gl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ae(e.mutations.length===r.length);let s=function(){return XA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Gl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,pe;function d0(t){switch(t){default:return oe();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function sg(t){if(t===void 0)return un("GRPC error has no .code"),L.UNKNOWN;switch(t){case Le.OK:return L.OK;case Le.CANCELLED:return L.CANCELLED;case Le.UNKNOWN:return L.UNKNOWN;case Le.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Le.INTERNAL:return L.INTERNAL;case Le.UNAVAILABLE:return L.UNAVAILABLE;case Le.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Le.NOT_FOUND:return L.NOT_FOUND;case Le.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Le.ABORTED:return L.ABORTED;case Le.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Le.DATA_LOSS:return L.DATA_LOSS;default:return oe()}}(pe=Le||(Le={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=new hr([4294967295,4294967295],0);function Hf(t){const e=p0().encode(t),n=new Rm;return n.update(e),new Uint8Array(n.digest())}function zf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hr([n,r],0),new hr([s,i],0)]}class Ql{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fs(`Invalid padding: ${n}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=hr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(hr.fromNumber(r)));return s.compare(m0)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Hf(e),[r,s]=zf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ql(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Hf(e),[r,s]=zf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ai.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wa(ae.min(),s,new Oe(ve),hn(),fe())}}class Ai{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ai(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class ig{constructor(e,n){this.targetId=e,this.me=n}}class og{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Kf{constructor(){this.fe=0,this.ge=Gf(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe()}}),new Ai(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Gf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class g0{constructor(e){this.Le=e,this.Be=new Map,this.ke=hn(),this.qe=Wf(),this.Qe=new Oe(ve)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(zc(i))if(r===0){const o=new se(i.path);this.Ue(n,o,rt.newNoDocument(o,ae.min()))}else Ae(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=yr(r).toUint8Array()}catch(l){if(l instanceof Lm)return Yr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ql(o,s,i)}catch(l){return Yr(l instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&zc(c.target)){const l=new se(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,rt.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=fe();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new wa(e,n,this.Qe,this.ke,r);return this.ke=hn(),this.qe=Wf(),this.Qe=new Oe(ve),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Kf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(ve),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Kf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Wf(){return new Oe(se.comparator)}function Gf(){return new Oe(se.comparator)}const _0={asc:"ASCENDING",desc:"DESCENDING"},y0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},E0={and:"AND",or:"OR"};class v0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wc(t,e){return t.useProto3Json||ga(e)?e:{value:e}}function Ko(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ag(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function T0(t,e){return Ko(t,e.toTimestamp())}function qt(t){return Ae(!!t),ae.fromTimestamp(function(n){const r=$n(n);return new He(r.seconds,r.nanos)}(t))}function Jl(t,e){return Gc(t,e).canonicalString()}function Gc(t,e){const n=function(s){return new Pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function cg(t){const e=Pe.fromString(t);return Ae(dg(e)),e}function Qc(t,e){return Jl(t.databaseId,e.path)}function fc(t,e){const n=cg(e);if(n.get(1)!==t.databaseId.projectId)throw new te(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(ug(n))}function lg(t,e){return Jl(t.databaseId,e)}function w0(t){const e=cg(t);return e.length===4?Pe.emptyPath():ug(e)}function Jc(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ug(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qf(t,e,n){return{name:Qc(t,e),fields:n.value.mapValue.fields}}function I0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ae(f===void 0||typeof f=="string"),Xe.fromBase64String(f||"")):(Ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Xe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?L.UNKNOWN:sg(h.code);return new te(f,h.message||"")}(o);n=new og(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fc(t,r.document.name),i=qt(r.document.updateTime),o=r.document.createTime?qt(r.document.createTime):ae.min(),c=new It({mapValue:{fields:r.document.fields}}),l=rt.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new yo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fc(t,r.document),i=r.readTime?qt(r.readTime):ae.min(),o=rt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new yo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fc(t,r.document),i=r.removedTargetIds||[];n=new yo([],i,s,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new f0(s,i),c=r.targetId;n=new ig(c,o)}}return n}function A0(t,e){let n;if(e instanceof Ii)n={update:Qf(t,e.key,e.value)};else if(e instanceof rg)n={delete:Qc(t,e.key)};else if(e instanceof Ir)n={update:Qf(t,e.key,e.data),updateMask:D0(e.fieldMask)};else{if(!(e instanceof l0))return oe();n={verify:Qc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof hi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zo)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:T0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe()}(t,e.precondition)),n}function b0(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?qt(s.updateTime):qt(i);return o.isEqual(ae.min())&&(o=qt(i)),new o0(o,s.transformResults||[])}(n,e))):[]}function R0(t,e){return{documents:[lg(t,e.path)]}}function S0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=lg(t,s);const i=function(h){if(h.length!==0)return fg(Wt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Lr(y.field),direction:O0(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Wc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function C0(t){let e=w0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const y=hg(p);return y instanceof Wt&&Bm(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(C){return new qo(Mr(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(y))}(n.orderBy));let c=null;n.limit&&(c=function(p){let y;return y=typeof p=="object"?p.value:p,ga(y)?null:y}(n.limit));let l=null;n.startAt&&(l=function(p){const y=!!p.before,R=p.values||[];return new $o(R,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,R=p.values||[];return new $o(R,y)}(n.endAt)),KA(e,s,o,i,c,"F",l,h)}function P0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Mr(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Mr(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mr(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Mr(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(Mr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>hg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function O0(t){return _0[t]}function N0(t){return y0[t]}function k0(t){return E0[t]}function Lr(t){return{fieldPath:t.canonicalString()}}function Mr(t){return Qe.fromServerFormat(t.fieldPath)}function fg(t){return t instanceof $e?function(n){if(n.op==="=="){if(xf(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NAN"}};if(Vf(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xf(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NAN"}};if(Vf(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lr(n.field),op:N0(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(s=>fg(s));return r.length===1?r[0]:{compositeFilter:{op:k0(n.op),filters:r}}}(t):oe()}function D0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n,r,s,i=ae.min(),o=ae.min(),c=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.ct=e}}function x0(t){const e=C0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(){this.an=new M0}addToCollectionParentIndex(e,n){return this.an.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(jn.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class M0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new ts(0)}static Bn(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(){this.changes=new ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Js(r.mutation,s,Nt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const s=cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ms();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=hn();const o=Qs(),c=function(){return Qs()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Ir)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Js(f.mutation,h,f.mutation.getFieldMask(),He.now())):o.set(h.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new U0(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Qs();let s=new Oe((o,c)=>o-c),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Nt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||fe()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Gm();f.forEach(y=>{if(!i.has(y)){const R=tg(n.get(y),r.get(y));R!==null&&p.set(y,R),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(cr());let c=-1,l=i;return o.next(h=>M.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{l=l.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,fe())).next(f=>({batchId:c,changes:Wm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Ms();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ms();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,l=>{const h=function(p,y){return new _a(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,rt.newInvalidDocument(f)))});let c=Ms();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Js(f.mutation,h,Nt.empty(),He.now()),Ea(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return M.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:qt(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:x0(s.bundledQuery),readTime:qt(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.overlays=new Oe(se.comparator),this.Pr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=cr(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Oe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=cr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=cr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return M.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new h0(n,r));let i=this.Pr.get(n);i===void 0&&(i=fe(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.Ir=new Je(ze.Tr),this.Er=new Je(ze.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new ze(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new se(new Pe([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.Er.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new se(new Pe([])),r=new ze(n,e),s=new ze(n,e+1);let i=fe();return this.Er.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return se.comparator(e.key,n.key)||ve(e.yr,n.yr)}static dr(e,n){return ve(e.yr,n.yr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new Je(ze.Tr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new u0(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Sr=this.Sr.add(new ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const c=this.br(o.yr);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ve);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],c=>{r=r.add(c.yr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new ze(new se(i),0);let c=new Je(ve);return this.Sr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.yr)),!0)},o),M.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ae(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return M.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new ze(n,0),s=this.Sr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.Fr=e,this.docs=function(){return new Oe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=hn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=hn();const o=n.path,c=new se(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||CA(SA(f),r)<=0||(s.has(f.key)||Ea(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe()}Mr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new K0(this)}getSize(e){return M.resolve(this.size)}}class K0 extends F0{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.persistence=e,this.Or=new ls(n=>zl(n),Kl),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Yl,this.targetCount=0,this.Br=ts.Ln()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),M.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Qn(n),M.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Lr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n){this.kr={},this.overlays={},this.qr=new jl(0),this.Qr=!1,this.Qr=!0,this.Kr=new q0,this.referenceDelegate=e(this),this.$r=new W0(this),this.indexManager=new L0,this.remoteDocumentCache=function(s){return new z0(s)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new V0(n),this.Wr=new j0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new H0(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const s=new Q0(this.qr.next());return this.referenceDelegate.Gr(),r(s).next(i=>this.referenceDelegate.zr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}jr(e,n){return M.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class Q0 extends OA{constructor(e){super(),this.currentSequenceNumber=e}}class Xl{constructor(e){this.persistence=e,this.Hr=new Yl,this.Jr=null}static Yr(e){return new Xl(e)}get Zr(){if(this.Jr)return this.Jr;throw oe()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(s=>this.Zr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Zr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Zr,r=>{const s=se.fromPath(r);return this.Xr(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return M.or([()=>M.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=s}static Ui(e,n){let r=fe(),s=fe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return jv()?8:NA(Ye())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Yi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new J0;return this.Zi(e,n,o).next(c=>{if(i.result=c,this.Gi)return this.Xi(e,n,o,c.size)})}).next(()=>i.result)}Xi(e,n,r,s){return r.documentReadCount<this.zi?(Ns()<=de.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",xr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),M.resolve()):(Ns()<=de.DEBUG&&Q("QueryEngine","Query:",xr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ji*s?(Ns()<=de.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",xr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(n))):M.resolve())}Ji(e,n){if(Uf(n))return M.resolve(null);let r=$t(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Kc(n,null,"F"),r=$t(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=fe(...i);return this.Hi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.es(n,c);return this.ts(n,h,o,l.readTime)?this.Ji(e,Kc(n,null,"F")):this.ns(e,h,n,l)}))})))}Yi(e,n,r,s){return Uf(n)||s.isEqual(ae.min())?M.resolve(null):this.Hi.getDocuments(e,r).next(i=>{const o=this.es(n,i);return this.ts(n,o,r,s)?M.resolve(null):(Ns()<=de.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xr(n)),this.ns(e,o,n,RA(s,-1)).next(c=>c))})}es(e,n){let r=new Je(zm(e));return n.forEach((s,i)=>{Ea(e,i)&&(r=r.add(i))}),r}ts(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Zi(e,n,r){return Ns()<=de.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",xr(n)),this.Hi.getDocumentsMatchingQuery(e,n,jn.min(),r)}ns(e,n,r,s){return this.Hi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n,r,s){this.persistence=e,this.rs=n,this.serializer=s,this.ss=new Oe(ve),this.os=new ls(i=>zl(i),Kl),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new B0(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function Z0(t,e,n,r){return new X0(t,e,n,r)}async function pg(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=fe();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function eb(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.us.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,y=p.keys();let R=M.resolve();return y.forEach(C=>{R=R.next(()=>f.getEntry(l,C)).next(P=>{const N=h.docVersions.get(C);Ae(N!==null),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=fe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function mg(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function tb(t,e){const n=ce(t),r=e.snapshotVersion;let s=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.us.newChangeBuffer({trackRemovals:!0});s=n.ss;const c=[];e.targetChanges.forEach((f,p)=>{const y=s.get(p);if(!y)return;c.push(n.$r.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.$r.addMatchingKeys(i,f.addedDocuments,p)));let R=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(Xe.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),s=s.insert(p,R),function(P,N,$){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(y,R,f)&&c.push(n.$r.updateTargetData(i,R))});let l=hn(),h=fe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(nb(i,o,e.documentUpdates).next(f=>{l=f.hs,h=f.Ps})),!r.isEqual(ae.min())){const f=n.$r.getLastRemoteSnapshotVersion(i).next(p=>n.$r.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return M.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.ss=s,i))}function nb(t,e,n){let r=fe(),s=fe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=hn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Q("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{hs:o,Ps:s}})}function rb(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sb(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.$r.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.$r.allocateTargetId(r).next(o=>(s=new kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function Yc(t,e,n){const r=ce(t),s=r.ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!wi(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(s.target)}function Jf(t,e,n){const r=ce(t);let s=ae.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=ce(l),y=p.os.get(f);return y!==void 0?M.resolve(p.ss.get(y)):p.$r.getTargetData(h,f)}(r,o,$t(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:fe())).next(c=>(ib(r,QA(e),c),{documents:c,Is:i})))}function ib(t,e,n){let r=t._s.get(e)||ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t._s.set(e,r)}class Yf{constructor(){this.activeTargetIds=t0()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ob{constructor(){this.io=new Yf,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new Yf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro=null;function dc(){return ro===null?ro=function(){return 268435456+Math.round(2147483648*Math.random())}():ro++,"0x"+ro.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class ub extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get vo(){return!1}Fo(n,r,s,i,o){const c=dc(),l=this.Mo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(h,i,o),this.Oo(n,l,h,s).then(f=>(Q("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw Yr("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}No(n,r,s,i,o,c){return this.Fo(n,r,s,i,o)}xo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+as}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Mo(n,r){const s=cb[n];return`${this.bo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,s){const i=dc();return new Promise((o,c)=>{const l=new Sm;l.setWithCredentials(!0),l.listenOnce(Pm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case mo.NO_ERROR:const f=l.getResponseJson();Q(tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case mo.TIMEOUT:Q(tt,`RPC '${e}' ${i} timed out`),c(new te(L.DEADLINE_EXCEEDED,"Request time out"));break;case mo.HTTP_ERROR:const p=l.getStatus();if(Q(tt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let y=l.getResponseJson();Array.isArray(y)&&(y=y[0]);const R=y==null?void 0:y.error;if(R&&R.status&&R.message){const C=function(N){const $=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf($)>=0?$:L.UNKNOWN}(R.status);c(new te(C,R.message))}else c(new te(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new te(L.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{Q(tt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Q(tt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Lo(e,n,r){const s=dc(),i=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=km(),c=Nm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Cm({})),this.xo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Q(tt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let y=!1,R=!1;const C=new lb({Po:N=>{R?Q(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(y||(Q(tt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),Q(tt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},Io:()=>p.close()}),P=(N,$,G)=>{N.listen($,U=>{try{G(U)}catch(Z){setTimeout(()=>{throw Z},0)}})};return P(p,Ls.EventType.OPEN,()=>{R||(Q(tt,`RPC '${e}' stream ${s} transport opened.`),C.po())}),P(p,Ls.EventType.CLOSE,()=>{R||(R=!0,Q(tt,`RPC '${e}' stream ${s} transport closed`),C.wo())}),P(p,Ls.EventType.ERROR,N=>{R||(R=!0,Yr(tt,`RPC '${e}' stream ${s} transport errored:`,N),C.wo(new te(L.UNAVAILABLE,"The operation could not be completed")))}),P(p,Ls.EventType.MESSAGE,N=>{var $;if(!R){const G=N.data[0];Ae(!!G);const U=G,Z=U.error||(($=U[0])===null||$===void 0?void 0:$.error);if(Z){Q(tt,`RPC '${e}' stream ${s} received error:`,Z);const he=Z.status;let H=function(_){const w=Le[_];if(w!==void 0)return sg(w)}(he),v=Z.message;H===void 0&&(H=L.INTERNAL,v="Unknown error status: "+he+" with message "+Z.message),R=!0,C.wo(new te(H,v)),p.close()}else Q(tt,`RPC '${e}' stream ${s} received:`,G),C.So(G)}}),P(c,Om.STAT_EVENT,N=>{N.stat===jc.PROXY?Q(tt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===jc.NOPROXY&&Q(tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.yo()},0),C}}function pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){return new v0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=s,this.qo=i,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),s=Math.max(0,n-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,s,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n,r,s,i,o,c,l){this.ai=e,this.jo=r,this.Ho=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new gg(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(un(n.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Jo===n&&this.h_(r,s)},r=>{e(()=>{const s=new te(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(s)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(s=>{r(()=>this.P_(s))}),this.stream.onMessage(s=>{r(()=>++this.Xo==1?this.T_(s):this.onNext(s))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hb extends _g{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=I0(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?qt(o.readTime):ae.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=Jc(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=zc(l)?{documents:R0(i,l)}:{query:S0(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ag(i,o.resumeToken);const h=Wc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ae.min())>0){c.readTime=Ko(i,o.snapshotVersion.toTimestamp());const h=Wc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=P0(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=Jc(this.serializer),n.removeTarget=e,this.__(n)}}class fb extends _g{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=b0(e.writeResults,e.commitTime),r=qt(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=Jc(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>A0(this.serializer,r))};this.__(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.p_=!1}y_(){if(this.p_)throw new te(L.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,Gc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(L.UNKNOWN,i.toString())})}No(e,n,r,s,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.No(e,Gc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(L.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class pb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(un(n),this.b_=!1):Q("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=i,this.B_.oo(o=>{r.enqueueAndForget(async()=>{Ar(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=ce(l);h.N_.add(4),await bi(h),h.k_.set("Unknown"),h.N_.delete(4),await Aa(h)}(this))})}),this.k_=new pb(r,s)}}async function Aa(t){if(Ar(t))for(const e of t.L_)await e(!0)}async function bi(t){for(const e of t.L_)await e(!1)}function yg(t,e){const n=ce(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),ru(n)?nu(n):us(n).n_()&&tu(n,e))}function eu(t,e){const n=ce(t),r=us(n);n.O_.delete(e),r.n_()&&Eg(n,e),n.O_.size===0&&(r.n_()?r.s_():Ar(n)&&n.k_.set("Unknown"))}function tu(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}us(t).d_(e)}function Eg(t,e){t.q_.xe(e),us(t).A_(e)}function nu(t){t.q_=new g0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),us(t).start(),t.k_.D_()}function ru(t){return Ar(t)&&!us(t).t_()&&t.O_.size>0}function Ar(t){return ce(t).N_.size===0}function vg(t){t.q_=void 0}async function gb(t){t.k_.set("Online")}async function _b(t){t.O_.forEach((e,n)=>{tu(t,e)})}async function yb(t,e){vg(t),ru(t)?(t.k_.F_(e),nu(t)):t.k_.set("Unknown")}async function Eb(t,e,n){if(t.k_.set("Online"),e instanceof og&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.O_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.O_.delete(c),s.q_.removeTarget(c))}(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wo(t,r)}else if(e instanceof yo?t.q_.Ke(e):e instanceof ig?t.q_.He(e):t.q_.We(e),!n.isEqual(ae.min()))try{const r=await mg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.O_.get(h);f&&i.O_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.O_.get(l);if(!f)return;i.O_.set(l,f.withResumeToken(Xe.EMPTY_BYTE_STRING,f.snapshotVersion)),Eg(i,l);const p=new kn(f.target,l,h,f.sequenceNumber);tu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await Wo(t,r)}}async function Wo(t,e,n){if(!wi(e))throw e;t.N_.add(1),await bi(t),t.k_.set("Offline"),n||(n=()=>mg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await Aa(t)})}function Tg(t,e){return e().catch(n=>Wo(t,n,e))}async function ba(t){const e=ce(t),n=qn(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;vb(e);)try{const s=await rb(e.localStore,r);if(s===null){e.x_.length===0&&n.s_();break}r=s.batchId,Tb(e,s)}catch(s){await Wo(e,s)}wg(e)&&Ig(e)}function vb(t){return Ar(t)&&t.x_.length<10}function Tb(t,e){t.x_.push(e);const n=qn(t);n.n_()&&n.R_&&n.V_(e.mutations)}function wg(t){return Ar(t)&&!qn(t).t_()&&t.x_.length>0}function Ig(t){qn(t).start()}async function wb(t){qn(t).g_()}async function Ib(t){const e=qn(t);for(const n of t.x_)e.V_(n.mutations)}async function Ab(t,e,n){const r=t.x_.shift(),s=Gl.from(r,e,n);await Tg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ba(t)}async function bb(t,e){e&&qn(t).R_&&await async function(r,s){if(function(o){return d0(o)&&o!==L.ABORTED}(s.code)){const i=r.x_.shift();qn(r).i_(),await Tg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ba(r)}}(t,e),wg(t)&&Ig(t)}async function Zf(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Ar(n);n.N_.add(3),await bi(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await Aa(n)}async function Rb(t,e){const n=ce(t);e?(n.N_.delete(2),await Aa(n)):e||(n.N_.add(2),await bi(n),n.k_.set("Unknown"))}function us(t){return t.Q_||(t.Q_=function(n,r,s){const i=ce(n);return i.y_(),new hb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{To:gb.bind(null,t),Ao:_b.bind(null,t),Vo:yb.bind(null,t),E_:Eb.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),ru(t)?nu(t):t.k_.set("Unknown")):(await t.Q_.stop(),vg(t))})),t.Q_}function qn(t){return t.K_||(t.K_=function(n,r,s){const i=ce(n);return i.y_(),new fb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:wb.bind(null,t),Vo:bb.bind(null,t),m_:Ib.bind(null,t),f_:Ab.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await ba(t)):(await t.K_.stop(),t.x_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new on,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new su(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iu(t,e){if(un("AsyncQueue",`${e}: ${t}`),wi(t))return new te(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Ms(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Qr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.U_=new Oe(se.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):oe():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ns{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ns(e,n,Qr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class Cb{constructor(){this.queries=td(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const s=ce(n),i=s.queries;s.queries=td(),i.forEach((o,c)=>{for(const l of c.z_)l.onError(r)})})(this,new te(L.ABORTED,"Firestore shutting down"))}}function td(){return new ls(t=>Hm(t),ya)}async function Ag(t,e){const n=ce(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.j_()&&e.H_()&&(r=2):(i=new Sb,r=e.H_()?0:1);try{switch(r){case 0:i.G_=await n.onListen(s,!0);break;case 1:i.G_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=iu(o,`Initialization of query '${xr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.z_.push(e),e.Y_(n.onlineState),i.G_&&e.Z_(i.G_)&&ou(n)}async function bg(t,e){const n=ce(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.z_.indexOf(e);o>=0&&(i.z_.splice(o,1),i.z_.length===0?s=e.H_()?0:1:!i.j_()&&e.H_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Pb(t,e){const n=ce(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.z_)c.Z_(s)&&(r=!0);o.G_=s}}r&&ou(n)}function Ob(t,e,n){const r=ce(t),s=r.queries.get(e);if(s)for(const i of s.z_)i.onError(n);r.queries.delete(e)}function ou(t){t.J_.forEach(e=>{e.next()})}var Xc,nd;(nd=Xc||(Xc={})).X_="default",nd.Cache="cache";class Rg{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==Xc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.key=e}}class Cg{constructor(e){this.key=e}}class Nb{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=fe(),this.mutatedKeys=fe(),this.da=zm(e),this.Aa=new Qr(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new ed,s=n?n.Aa:this.Aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const y=s.get(f),R=Ea(this.query,p)?p:null,C=!!y&&this.mutatedKeys.has(y.key),P=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let N=!1;y&&R?y.data.isEqual(R.data)?C!==P&&(r.track({type:3,doc:R}),N=!0):this.fa(y,R)||(r.track({type:2,doc:R}),N=!0,(l&&this.da(R,l)>0||h&&this.da(R,h)<0)&&(c=!0)):!y&&R?(r.track({type:0,doc:R}),N=!0):y&&!R&&(r.track({type:1,doc:y}),N=!0,(l||h)&&(c=!0)),N&&(R?(o=o.add(R),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Aa:o,ma:r,ts:c,mutatedKeys:i}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((f,p)=>function(R,C){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return P(R)-P(C)}(f.type,p.type)||this.da(f.doc,p.doc)),this.ga(r),s=s!=null&&s;const c=n&&!s?this.pa():[],l=this.Ea.size===0&&this.current&&!s?1:0,h=l!==this.Ta;return this.Ta=l,o.length!==0||h?{snapshot:new ns(this.query,e.Aa,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:c}:{ya:c}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new ed,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=fe(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new Cg(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new Sg(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=fe();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return ns.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class kb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Db{constructor(e){this.key=e,this.Da=!1}}class Vb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new ls(c=>Hm(c),ya),this.Fa=new Map,this.Ma=new Set,this.xa=new Oe(se.comparator),this.Oa=new Map,this.Na=new Yl,this.La={},this.Ba=new Map,this.ka=ts.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function xb(t,e,n=!0){const r=Vg(t);let s;const i=r.va.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ba()):s=await Pg(r,e,n,!0),s}async function Lb(t,e){const n=Vg(t);await Pg(n,e,!0,!1)}async function Pg(t,e,n,r){const s=await sb(t.localStore,$t(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await Mb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&yg(t.remoteStore,s),c}async function Mb(t,e,n,r,s){t.Qa=(p,y,R)=>async function(P,N,$,G){let U=N.view.Va($);U.ts&&(U=await Jf(P.localStore,N.query,!1).then(({documents:v})=>N.view.Va(v,U)));const Z=G&&G.targetChanges.get(N.targetId),he=G&&G.targetMismatches.get(N.targetId)!=null,H=N.view.applyChanges(U,P.isPrimaryClient,Z,he);return sd(P,N.targetId,H.ya),H.snapshot}(t,p,y,R);const i=await Jf(t.localStore,e,!0),o=new Nb(e,i.Is),c=o.Va(i.documents),l=Ai.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);sd(t,n,h.ya);const f=new kb(e,n,o);return t.va.set(e,f),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),h.snapshot}async function Fb(t,e,n){const r=ce(t),s=r.va.get(e),i=r.Fa.get(s.targetId);if(i.length>1)return r.Fa.set(s.targetId,i.filter(o=>!ya(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Yc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&eu(r.remoteStore,s.targetId),Zc(r,s.targetId)}).catch(Ti)):(Zc(r,s.targetId),await Yc(r.localStore,s.targetId,!0))}async function Ub(t,e){const n=ce(t),r=n.va.get(e),s=n.Fa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),eu(n.remoteStore,r.targetId))}async function Bb(t,e,n){const r=Wb(t);try{const s=await function(o,c){const l=ce(o),h=He.now(),f=c.reduce((R,C)=>R.add(C.key),fe());let p,y;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=hn(),P=fe();return l.us.getEntries(R,f).next(N=>{C=N,C.forEach(($,G)=>{G.isValidDocument()||(P=P.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,C)).next(N=>{p=N;const $=[];for(const G of c){const U=c0(G,p.get(G.key).overlayedDocument);U!=null&&$.push(new Ir(G.key,U,Mm(U.value.mapValue),an.exists(!0)))}return l.mutationQueue.addMutationBatch(R,h,$,c)}).next(N=>{y=N;const $=N.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(R,N.batchId,$)})}).then(()=>({batchId:y.batchId,changes:Wm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.La[o.currentUser.toKey()];h||(h=new Oe(ve)),h=h.insert(c,l),o.La[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ri(r,s.changes),await ba(r.remoteStore)}catch(s){const i=iu(s,"Failed to persist write");n.reject(i)}}async function Og(t,e){const n=ce(t);try{const r=await tb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Oa.get(i);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Da=!0:s.modifiedDocuments.size>0?Ae(o.Da):s.removedDocuments.size>0&&(Ae(o.Da),o.Da=!1))}),await Ri(n,r,e)}catch(r){await Ti(r)}}function rd(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.va.forEach((i,o)=>{const c=o.view.Y_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ce(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const y of p.z_)y.Y_(c)&&(h=!0)}),h&&ou(l)}(r.eventManager,e),s.length&&r.Ca.E_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jb(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Oa.get(e),i=s&&s.key;if(i){let o=new Oe(se.comparator);o=o.insert(i,rt.newNoDocument(i,ae.min()));const c=fe().add(i),l=new wa(ae.min(),new Map,new Oe(ve),o,c);await Og(r,l),r.xa=r.xa.remove(i),r.Oa.delete(e),au(r)}else await Yc(r.localStore,e,!1).then(()=>Zc(r,e,n)).catch(Ti)}async function $b(t,e){const n=ce(t),r=e.batch.batchId;try{const s=await eb(n.localStore,e);kg(n,r,null),Ng(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ri(n,s)}catch(s){await Ti(s)}}async function qb(t,e,n){const r=ce(t);try{const s=await function(o,c){const l=ce(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ae(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);kg(r,e,n),Ng(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ri(r,s)}catch(s){await Ti(s)}}function Ng(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function kg(t,e,n){const r=ce(t);let s=r.La[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.La[r.currentUser.toKey()]=s}}function Zc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||Dg(t,r)})}function Dg(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(eu(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),au(t))}function sd(t,e,n){for(const r of n)r instanceof Sg?(t.Na.addReference(r.key,e),Hb(t,r)):r instanceof Cg?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||Dg(t,r.key)):oe()}function Hb(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.Ma.add(r),au(t))}function au(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new se(Pe.fromString(e)),r=t.ka.next();t.Oa.set(r,new Db(n)),t.xa=t.xa.insert(n,r),yg(t.remoteStore,new kn($t(Wl(n.path)),r,"TargetPurposeLimboResolution",jl.oe))}}async function Ri(t,e,n){const r=ce(t),s=[],i=[],o=[];r.va.isEmpty()||(r.va.forEach((c,l)=>{o.push(r.Qa(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Zl.Ui(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.E_(s),await async function(l,h){const f=ce(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,y=>M.forEach(y.Ki,R=>f.persistence.referenceDelegate.addReference(p,y.targetId,R)).next(()=>M.forEach(y.$i,R=>f.persistence.referenceDelegate.removeReference(p,y.targetId,R)))))}catch(p){if(!wi(p))throw p;Q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const R=f.ss.get(y),C=R.snapshotVersion,P=R.withLastLimboFreeSnapshotVersion(C);f.ss=f.ss.insert(y,P)}}}(r.localStore,i))}async function zb(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await pg(n.localStore,e);n.currentUser=e,function(i,o){i.Ba.forEach(c=>{c.forEach(l=>{l.reject(new te(L.CANCELLED,o))})}),i.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ri(n,r.ls)}}function Kb(t,e){const n=ce(t),r=n.Oa.get(e);if(r&&r.Da)return fe().add(r.key);{let s=fe();const i=n.Fa.get(e);if(!i)return s;for(const o of i){const c=n.va.get(o);s=s.unionWith(c.view.Ra)}return s}}function Vg(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Og.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jb.bind(null,e),e.Ca.E_=Pb.bind(null,e.eventManager),e.Ca.Ka=Ob.bind(null,e.eventManager),e}function Wb(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$b.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qb.bind(null,e),e}class id{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ia(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Z0(this.persistence,new Y0,e.initialUser,this.serializer)}createPersistence(e){return new G0(Xl.Yr,this.serializer)}createSharedClientState(e){return new ob}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zb.bind(null,this.syncEngine),await Rb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Cb}()}createDatastore(e){const n=Ia(e.databaseInfo.databaseId),r=function(i){return new ub(i)}(e.databaseInfo);return function(i,o,c,l){return new db(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new mb(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>rd(this.syncEngine,n,0),function(){return Xf.D()?new Xf:new ab}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new Vb(s,i,o,c,l,h);return f&&(p.qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ce(s);Q("RemoteStore","RemoteStore shutting down."),i.N_.add(5),await bi(i),i.B_.shutdown(),i.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=Vm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{Q("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(Q("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new te(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new on;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=iu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mc(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await pg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function od(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Yb(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Zf(e.remoteStore,s)),t._onlineComponents=e}function Jb(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Yb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Jb(n))throw n;Yr("Error using user provided cache. Falling back to memory cache: "+n),await mc(t,new id)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await mc(t,new id);return t._offlineComponents}async function Lg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await od(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await od(t,new Gb))),t._onlineComponents}function Xb(t){return Lg(t).then(e=>e.syncEngine)}async function Mg(t){const e=await Lg(t),n=e.eventManager;return n.onListen=xb.bind(null,e.syncEngine),n.onUnlisten=Fb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Lb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ub.bind(null,e.syncEngine),n}function Zb(t,e,n={}){const r=new on;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new xg({next:y=>{o.enqueueAndForget(()=>bg(i,p));const R=y.docs.has(c);!R&&y.fromCache?h.reject(new te(L.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&y.fromCache&&l&&l.source==="server"?h.reject(new te(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new Rg(Wl(c.path),f,{includeMetadataChanges:!0,oa:!0});return Ag(i,p)}(await Mg(t),t.asyncQueue,e,n,r)),r.promise}function eR(t,e,n={}){const r=new on;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new xg({next:y=>{o.enqueueAndForget(()=>bg(i,p)),y.fromCache&&l.source==="server"?h.reject(new te(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new Rg(c,f,{includeMetadataChanges:!0,oa:!0});return Ag(i,p)}(await Mg(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t,e,n){if(!n)throw new te(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tR(t,e,n,r){if(e===!0&&r===!0)throw new te(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cd(t){if(!se.isDocumentKey(t))throw new te(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ld(t){if(se.isDocumentKey(t))throw new te(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function vr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cu(t);throw new te(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ra{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ud({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new te(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new te(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ud(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _A;switch(r.type){case"firstParty":return new TA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ad.get(n);r&&(Q("ComponentProvider","Removing Datastore"),ad.delete(n),r.terminate())}(this),Promise.resolve()}}function nR(t,e,n,r={}){var s;const i=(t=vr(t,Ra))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=nt.MOCK_USER;else{c=xv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new te(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new nt(h)}t._authCredentials=new yA(new Dm(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sa(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class Fn extends Sa{constructor(e,n,r){super(e,n,Wl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new se(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function rR(t,e,...n){if(t=dt(t),Ug("collection","path",e),t instanceof Ra){const r=Pe.fromString(e,...n);return ld(r),new Fn(t,null,r)}{if(!(t instanceof Et||t instanceof Fn))throw new te(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return ld(r),new Fn(t.firestore,null,r)}}function sR(t,e,...n){if(t=dt(t),arguments.length===1&&(e=Vm.newId()),Ug("doc","path",e),t instanceof Ra){const r=Pe.fromString(e,...n);return cd(r),new Et(t,null,new se(r))}{if(!(t instanceof Et||t instanceof Fn))throw new te(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return cd(r),new Et(t.firestore,t instanceof Fn?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new gg(this,"async_queue_retry"),this.Tu=()=>{const n=pc();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=pc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new on;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!wi(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw un("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const s=su.createAndSchedule(this,e,n,r,i=>this.Ru(i));return this.cu.push(s),s}Eu(){this.lu&&oe()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}class Ca extends Ra{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new iR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Bg(this),this._firestoreClient.terminate()}}function oR(t,e){const n=typeof t=="object"?t:Hp(),r=typeof t=="string"?t:"(default)",s=Ol(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dv("firestore");i&&nR(s,...i)}return s}function lu(t){return t._firestoreClient||Bg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Bg(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new VA(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Fg(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Qb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs(Xe.fromBase64String(e))}catch(n){throw new te(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rs(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=/^__.*__$/;class cR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ii(e,this.data,n,this.fieldTransforms)}}function $g(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class fu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new fu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.wu({path:r,bu:!1});return s.Du(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.wu({path:r,bu:!1});return s.pu(),s}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return Go(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if($g(this.yu)&&aR.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class lR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ia(e)}Ou(e,n,r,s=!1){return new fu({yu:e,methodName:n,xu:r,path:Qe.emptyPath(),bu:!1,Mu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uR(t){const e=t._freezeSettings(),n=Ia(t._databaseId);return new lR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hR(t,e,n,r,s,i={}){const o=t.Ou(i.merge||i.mergeFields?2:0,e,n,s);Kg("Data must be an object, but it was:",o,r);const c=Hg(r,o);let l,h;if(i.merge)l=new Nt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const y=fR(e,p,n);if(!o.contains(y))throw new te(L.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);pR(f,y)||f.push(y)}l=new Nt(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new cR(new It(c),l,h)}function qg(t,e){if(zg(t=dt(t)))return Kg("Unsupported field value:",e,t),Hg(t,e);if(t instanceof jg)return function(r,s){if(!$g(s.yu))throw s.Fu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Fu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=qg(c,s.vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return n0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:Ko(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ko(s.serializer,i)}}if(r instanceof hu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rs)return{bytesValue:ag(s.serializer,r._byteString)};if(r instanceof Et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jl(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Fu(`Unsupported field value: ${cu(r)}`)}(t,e)}function Hg(t,e){const n={};return xm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(r,s)=>{const i=qg(s,e.Su(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function zg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof hu||t instanceof rs||t instanceof Et||t instanceof jg)}function Kg(t,e,n){if(!zg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=cu(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function fR(t,e,n){if((e=dt(e))instanceof uu)return e._internalPath;if(typeof e=="string")return Wg(t,e);throw Go("Field path arguments must be of type string or ",t,!1,void 0,n)}const dR=new RegExp("[~\\*/\\[\\]]");function Wg(t,e,n){if(e.search(dR)>=0)throw Go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uu(...e.split("."))._internalPath}catch{throw Go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Go(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new te(L.INVALID_ARGUMENT,c+t+l)}function pR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mR extends Gg{data(){return super.data()}}function Qg(t,e){return typeof e=="string"?Wg(t,e):e instanceof uu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _R{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new hu(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ql(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ai(e));default:return null}}convertTimestamp(e){const n=$n(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);Ae(dg(r));const s=new ci(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jg extends Gg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Eo extends Jg{data(e={}){return super.data(e)}}class ER{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Eo(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:vR(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(t){t=vr(t,Et);const e=vr(t.firestore,Ca);return Zb(lu(e),t._key).then(n=>AR(e,t,n))}class Yg extends _R{constructor(e){super(),this.firestore=e}convertBytes(e){return new rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function TR(t){t=vr(t,Sa);const e=vr(t.firestore,Ca),n=lu(e),r=new Yg(e);return gR(t._query),eR(n,t._query).then(s=>new ER(e,r,t,s))}function wR(t,e,n){t=vr(t,Et);const r=vr(t.firestore,Ca),s=yR(t.converter,e);return IR(r,[hR(uR(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,an.none())])}function IR(t,e){return function(r,s){const i=new on;return r.asyncQueue.enqueueAndForget(async()=>Bb(await Xb(r),s,i)),i.promise}(lu(t),e)}function AR(t,e,n){const r=n.docs.get(e._key),s=new Yg(t);return new Jg(t,s,e._key,r,new Us(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){as=s})(is),Jr(new dr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Ca(new EA(r.getProvider("auth-internal")),new IA(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Mn(Of,"4.6.5",e),Mn(Of,"4.6.5","esm2017")})();const bR={apiKey:"AIzaSyAJzIGk3Q-gKqX8jjAqI9ziPcNXNBGOkuU",authDomain:"mera-geomapping-a34e7.firebaseapp.com",projectId:"mera-geomapping-a34e7",storageBucket:"mera-geomapping-a34e7.appspot.com",messagingSenderId:"1050555560211",appId:"1:1050555560211:web:0cee73753172ea1d3c6ae6",measurementId:"G-BK2RDBZVV6"},RR=qp(bR),hd=oR(RR);function Xg(t,e){return function(){return t.apply(e,arguments)}}const{toString:SR}=Object.prototype,{getPrototypeOf:du}=Object,Pa=(t=>e=>{const n=SR.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Vt=t=>(t=t.toLowerCase(),e=>Pa(e)===t),Oa=t=>e=>typeof e===t,{isArray:hs}=Array,fi=Oa("undefined");function CR(t){return t!==null&&!fi(t)&&t.constructor!==null&&!fi(t.constructor)&&Rt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Zg=Vt("ArrayBuffer");function PR(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Zg(t.buffer),e}const OR=Oa("string"),Rt=Oa("function"),e_=Oa("number"),Na=t=>t!==null&&typeof t=="object",NR=t=>t===!0||t===!1,vo=t=>{if(Pa(t)!=="object")return!1;const e=du(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},kR=Vt("Date"),DR=Vt("File"),VR=Vt("Blob"),xR=Vt("FileList"),LR=t=>Na(t)&&Rt(t.pipe),MR=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Rt(t.append)&&((e=Pa(t))==="formdata"||e==="object"&&Rt(t.toString)&&t.toString()==="[object FormData]"))},FR=Vt("URLSearchParams"),[UR,BR,jR,$R]=["ReadableStream","Request","Response","Headers"].map(Vt),qR=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Si(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),hs(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let c;for(r=0;r<o;r++)c=i[r],e.call(null,t[c],c,t)}}function t_(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const n_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,r_=t=>!fi(t)&&t!==n_;function el(){const{caseless:t}=r_(this)&&this||{},e={},n=(r,s)=>{const i=t&&t_(e,s)||s;vo(e[i])&&vo(r)?e[i]=el(e[i],r):vo(r)?e[i]=el({},r):hs(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Si(arguments[r],n);return e}const HR=(t,e,n,{allOwnKeys:r}={})=>(Si(e,(s,i)=>{n&&Rt(s)?t[i]=Xg(s,n):t[i]=s},{allOwnKeys:r}),t),zR=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),KR=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},WR=(t,e,n,r)=>{let s,i,o;const c={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!c[o]&&(e[o]=t[o],c[o]=!0);t=n!==!1&&du(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},GR=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},QR=t=>{if(!t)return null;if(hs(t))return t;let e=t.length;if(!e_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},JR=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&du(Uint8Array)),YR=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},XR=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},ZR=Vt("HTMLFormElement"),eS=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),fd=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),tS=Vt("RegExp"),s_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Si(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},nS=t=>{s_(t,(e,n)=>{if(Rt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Rt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},rS=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return hs(t)?r(t):r(String(t).split(e)),n},sS=()=>{},iS=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,gc="abcdefghijklmnopqrstuvwxyz",dd="0123456789",i_={DIGIT:dd,ALPHA:gc,ALPHA_DIGIT:gc+gc.toUpperCase()+dd},oS=(t=16,e=i_.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function aS(t){return!!(t&&Rt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const cS=t=>{const e=new Array(10),n=(r,s)=>{if(Na(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=hs(r)?[]:{};return Si(r,(o,c)=>{const l=n(o,s+1);!fi(l)&&(i[c]=l)}),e[s]=void 0,i}}return r};return n(t,0)},lS=Vt("AsyncFunction"),uS=t=>t&&(Na(t)||Rt(t))&&Rt(t.then)&&Rt(t.catch),k={isArray:hs,isArrayBuffer:Zg,isBuffer:CR,isFormData:MR,isArrayBufferView:PR,isString:OR,isNumber:e_,isBoolean:NR,isObject:Na,isPlainObject:vo,isReadableStream:UR,isRequest:BR,isResponse:jR,isHeaders:$R,isUndefined:fi,isDate:kR,isFile:DR,isBlob:VR,isRegExp:tS,isFunction:Rt,isStream:LR,isURLSearchParams:FR,isTypedArray:JR,isFileList:xR,forEach:Si,merge:el,extend:HR,trim:qR,stripBOM:zR,inherits:KR,toFlatObject:WR,kindOf:Pa,kindOfTest:Vt,endsWith:GR,toArray:QR,forEachEntry:YR,matchAll:XR,isHTMLForm:ZR,hasOwnProperty:fd,hasOwnProp:fd,reduceDescriptors:s_,freezeMethods:nS,toObjectSet:rS,toCamelCase:eS,noop:sS,toFiniteNumber:iS,findKey:t_,global:n_,isContextDefined:r_,ALPHABET:i_,generateString:oS,isSpecCompliantForm:aS,toJSONObject:cS,isAsyncFn:lS,isThenable:uS};function ue(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}k.inherits(ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const o_=ue.prototype,a_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{a_[t]={value:t}});Object.defineProperties(ue,a_);Object.defineProperty(o_,"isAxiosError",{value:!0});ue.from=(t,e,n,r,s,i)=>{const o=Object.create(o_);return k.toFlatObject(t,o,function(l){return l!==Error.prototype},c=>c!=="isAxiosError"),ue.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const hS=null;function tl(t){return k.isPlainObject(t)||k.isArray(t)}function c_(t){return k.endsWith(t,"[]")?t.slice(0,-2):t}function pd(t,e,n){return t?t.concat(e).map(function(s,i){return s=c_(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function fS(t){return k.isArray(t)&&!t.some(tl)}const dS=k.toFlatObject(k,{},null,function(e){return/^is[A-Z]/.test(e)});function ka(t,e,n){if(!k.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(P,N){return!k.isUndefined(N[P])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(e);if(!k.isFunction(s))throw new TypeError("visitor must be a function");function h(C){if(C===null)return"";if(k.isDate(C))return C.toISOString();if(!l&&k.isBlob(C))throw new ue("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(C)||k.isTypedArray(C)?l&&typeof Blob=="function"?new Blob([C]):Buffer.from(C):C}function f(C,P,N){let $=C;if(C&&!N&&typeof C=="object"){if(k.endsWith(P,"{}"))P=r?P:P.slice(0,-2),C=JSON.stringify(C);else if(k.isArray(C)&&fS(C)||(k.isFileList(C)||k.endsWith(P,"[]"))&&($=k.toArray(C)))return P=c_(P),$.forEach(function(U,Z){!(k.isUndefined(U)||U===null)&&e.append(o===!0?pd([P],Z,i):o===null?P:P+"[]",h(U))}),!1}return tl(C)?!0:(e.append(pd(N,P,i),h(C)),!1)}const p=[],y=Object.assign(dS,{defaultVisitor:f,convertValue:h,isVisitable:tl});function R(C,P){if(!k.isUndefined(C)){if(p.indexOf(C)!==-1)throw Error("Circular reference detected in "+P.join("."));p.push(C),k.forEach(C,function($,G){(!(k.isUndefined($)||$===null)&&s.call(e,$,k.isString(G)?G.trim():G,P,y))===!0&&R($,P?P.concat(G):[G])}),p.pop()}}if(!k.isObject(t))throw new TypeError("data must be an object");return R(t),e}function md(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function pu(t,e){this._pairs=[],t&&ka(t,this,e)}const l_=pu.prototype;l_.append=function(e,n){this._pairs.push([e,n])};l_.toString=function(e){const n=e?function(r){return e.call(this,r,md)}:md;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function pS(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function u_(t,e,n){if(!e)return t;const r=n&&n.encode||pS,s=n&&n.serialize;let i;if(s?i=s(e,n):i=k.isURLSearchParams(e)?e.toString():new pu(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class gd{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){k.forEach(this.handlers,function(r){r!==null&&e(r)})}}const h_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mS=typeof URLSearchParams<"u"?URLSearchParams:pu,gS=typeof FormData<"u"?FormData:null,_S=typeof Blob<"u"?Blob:null,yS={isBrowser:!0,classes:{URLSearchParams:mS,FormData:gS,Blob:_S},protocols:["http","https","file","blob","url","data"]},mu=typeof window<"u"&&typeof document<"u",ES=(t=>mu&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),vS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",TS=mu&&window.location.href||"http://localhost",wS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:mu,hasStandardBrowserEnv:ES,hasStandardBrowserWebWorkerEnv:vS,origin:TS},Symbol.toStringTag,{value:"Module"})),kt={...wS,...yS};function IS(t,e){return ka(t,new kt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return kt.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function AS(t){return k.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function bS(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function f_(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),l=i>=n.length;return o=!o&&k.isArray(s)?s.length:o,l?(k.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!k.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&k.isArray(s[o])&&(s[o]=bS(s[o])),!c)}if(k.isFormData(t)&&k.isFunction(t.entries)){const n={};return k.forEachEntry(t,(r,s)=>{e(AS(r),s,n,0)}),n}return null}function RS(t,e,n){if(k.isString(t))try{return(e||JSON.parse)(t),k.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Ci={transitional:h_,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=k.isObject(e);if(i&&k.isHTMLForm(e)&&(e=new FormData(e)),k.isFormData(e))return s?JSON.stringify(f_(e)):e;if(k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e)||k.isReadableStream(e))return e;if(k.isArrayBufferView(e))return e.buffer;if(k.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return IS(e,this.formSerializer).toString();if((c=k.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ka(c?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),RS(e)):e}],transformResponse:[function(e){const n=this.transitional||Ci.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(k.isResponse(e)||k.isReadableStream(e))return e;if(e&&k.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(c){if(o)throw c.name==="SyntaxError"?ue.from(c,ue.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:kt.classes.FormData,Blob:kt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],t=>{Ci.headers[t]={}});const SS=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),CS=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&SS[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},_d=Symbol("internals");function ks(t){return t&&String(t).trim().toLowerCase()}function To(t){return t===!1||t==null?t:k.isArray(t)?t.map(To):String(t)}function PS(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const OS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function _c(t,e,n,r,s){if(k.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!k.isString(e)){if(k.isString(r))return e.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(e)}}function NS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function kS(t,e){const n=k.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class ht{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(c,l,h){const f=ks(l);if(!f)throw new Error("header name must be a non-empty string");const p=k.findKey(s,f);(!p||s[p]===void 0||h===!0||h===void 0&&s[p]!==!1)&&(s[p||l]=To(c))}const o=(c,l)=>k.forEach(c,(h,f)=>i(h,f,l));if(k.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(k.isString(e)&&(e=e.trim())&&!OS(e))o(CS(e),n);else if(k.isHeaders(e))for(const[c,l]of e.entries())i(l,c,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=ks(e),e){const r=k.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return PS(s);if(k.isFunction(n))return n.call(this,s,r);if(k.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ks(e),e){const r=k.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||_c(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=ks(o),o){const c=k.findKey(r,o);c&&(!n||_c(r,r[c],c,n))&&(delete r[c],s=!0)}}return k.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||_c(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return k.forEach(this,(s,i)=>{const o=k.findKey(r,i);if(o){n[o]=To(s),delete n[i];return}const c=e?NS(i):String(i).trim();c!==i&&delete n[i],n[c]=To(s),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return k.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[_d]=this[_d]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=ks(o);r[c]||(kS(s,o),r[c]=!0)}return k.isArray(e)?e.forEach(i):i(e),this}}ht.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(ht.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});k.freezeMethods(ht);function yc(t,e){const n=this||Ci,r=e||n,s=ht.from(r.headers);let i=r.data;return k.forEach(t,function(c){i=c.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function d_(t){return!!(t&&t.__CANCEL__)}function fs(t,e,n){ue.call(this,t??"canceled",ue.ERR_CANCELED,e,n),this.name="CanceledError"}k.inherits(fs,ue,{__CANCEL__:!0});function p_(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ue("Request failed with status code "+n.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function DS(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function VS(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const h=Date.now(),f=r[i];o||(o=h),n[s]=l,r[s]=h;let p=i,y=0;for(;p!==s;)y+=n[p++],p=p%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),h-o<e)return;const R=f&&h-f;return R?Math.round(y*1e3/R):void 0}}function xS(t,e){let n=0;const r=1e3/e;let s=null;return function(){const o=this===!0,c=Date.now();if(o||c-n>r)return s&&(clearTimeout(s),s=null),n=c,t.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),t.apply(null,arguments)),r-(c-n)))}}const Qo=(t,e,n=3)=>{let r=0;const s=VS(50,250);return xS(i=>{const o=i.loaded,c=i.lengthComputable?i.total:void 0,l=o-r,h=s(l),f=o<=c;r=o;const p={loaded:o,total:c,progress:c?o/c:void 0,bytes:l,rate:h||void 0,estimated:h&&c&&f?(c-o)/h:void 0,event:i,lengthComputable:c!=null};p[e?"download":"upload"]=!0,t(p)},n)},LS=kt.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=k.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),MS=kt.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];k.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),k.isString(r)&&o.push("path="+r),k.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function FS(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function US(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function m_(t,e){return t&&!FS(e)?US(t,e):e}const yd=t=>t instanceof ht?{...t}:t;function Tr(t,e){e=e||{};const n={};function r(h,f,p){return k.isPlainObject(h)&&k.isPlainObject(f)?k.merge.call({caseless:p},h,f):k.isPlainObject(f)?k.merge({},f):k.isArray(f)?f.slice():f}function s(h,f,p){if(k.isUndefined(f)){if(!k.isUndefined(h))return r(void 0,h,p)}else return r(h,f,p)}function i(h,f){if(!k.isUndefined(f))return r(void 0,f)}function o(h,f){if(k.isUndefined(f)){if(!k.isUndefined(h))return r(void 0,h)}else return r(void 0,f)}function c(h,f,p){if(p in e)return r(h,f);if(p in t)return r(void 0,h)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(h,f)=>s(yd(h),yd(f),!0)};return k.forEach(Object.keys(Object.assign({},t,e)),function(f){const p=l[f]||s,y=p(t[f],e[f],f);k.isUndefined(y)&&p!==c||(n[f]=y)}),n}const g_=t=>{const e=Tr({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:c}=e;e.headers=o=ht.from(o),e.url=u_(m_(e.baseURL,e.url),t.params,t.paramsSerializer),c&&o.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let l;if(k.isFormData(n)){if(kt.hasStandardBrowserEnv||kt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[h,...f]=l?l.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([h||"multipart/form-data",...f].join("; "))}}if(kt.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(e)),r||r!==!1&&LS(e.url))){const h=s&&i&&MS.read(i);h&&o.set(s,h)}return e},BS=typeof XMLHttpRequest<"u",jS=BS&&function(t){return new Promise(function(n,r){const s=g_(t);let i=s.data;const o=ht.from(s.headers).normalize();let{responseType:c}=s,l;function h(){s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}let f=new XMLHttpRequest;f.open(s.method.toUpperCase(),s.url,!0),f.timeout=s.timeout;function p(){if(!f)return;const R=ht.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),P={data:!c||c==="text"||c==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:R,config:t,request:f};p_(function($){n($),h()},function($){r($),h()},P),f=null}"onloadend"in f?f.onloadend=p:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(p)},f.onabort=function(){f&&(r(new ue("Request aborted",ue.ECONNABORTED,s,f)),f=null)},f.onerror=function(){r(new ue("Network Error",ue.ERR_NETWORK,s,f)),f=null},f.ontimeout=function(){let C=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const P=s.transitional||h_;s.timeoutErrorMessage&&(C=s.timeoutErrorMessage),r(new ue(C,P.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,s,f)),f=null},i===void 0&&o.setContentType(null),"setRequestHeader"in f&&k.forEach(o.toJSON(),function(C,P){f.setRequestHeader(P,C)}),k.isUndefined(s.withCredentials)||(f.withCredentials=!!s.withCredentials),c&&c!=="json"&&(f.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&f.addEventListener("progress",Qo(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Qo(s.onUploadProgress)),(s.cancelToken||s.signal)&&(l=R=>{f&&(r(!R||R.type?new fs(null,t,f):R),f.abort(),f=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));const y=DS(s.url);if(y&&kt.protocols.indexOf(y)===-1){r(new ue("Unsupported protocol "+y+":",ue.ERR_BAD_REQUEST,t));return}f.send(i||null)})},$S=(t,e)=>{let n=new AbortController,r;const s=function(l){if(!r){r=!0,o();const h=l instanceof Error?l:this.reason;n.abort(h instanceof ue?h:new fs(h instanceof Error?h.message:h))}};let i=e&&setTimeout(()=>{s(new ue(`timeout ${e} of ms exceeded`,ue.ETIMEDOUT))},e);const o=()=>{t&&(i&&clearTimeout(i),i=null,t.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",s):l.unsubscribe(s))}),t=null)};t.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=o,[c,()=>{i&&clearTimeout(i),i=null}]},qS=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},HS=async function*(t,e,n){for await(const r of t)yield*qS(ArrayBuffer.isView(r)?r:await n(String(r)),e)},Ed=(t,e,n,r,s)=>{const i=HS(t,e,s);let o=0;return new ReadableStream({type:"bytes",async pull(c){const{done:l,value:h}=await i.next();if(l){c.close(),r();return}let f=h.byteLength;n&&n(o+=f),c.enqueue(new Uint8Array(h))},cancel(c){return r(c),i.return()}},{highWaterMark:2})},vd=(t,e)=>{const n=t!=null;return r=>setTimeout(()=>e({lengthComputable:n,total:t,loaded:r}))},Da=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",__=Da&&typeof ReadableStream=="function",nl=Da&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),zS=__&&(()=>{let t=!1;const e=new Request(kt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})(),Td=64*1024,rl=__&&!!(()=>{try{return k.isReadableStream(new Response("").body)}catch{}})(),Jo={stream:rl&&(t=>t.body)};Da&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Jo[e]&&(Jo[e]=k.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new ue(`Response type '${e}' is not supported`,ue.ERR_NOT_SUPPORT,r)})})})(new Response);const KS=async t=>{if(t==null)return 0;if(k.isBlob(t))return t.size;if(k.isSpecCompliantForm(t))return(await new Request(t).arrayBuffer()).byteLength;if(k.isArrayBufferView(t))return t.byteLength;if(k.isURLSearchParams(t)&&(t=t+""),k.isString(t))return(await nl(t)).byteLength},WS=async(t,e)=>{const n=k.toFiniteNumber(t.getContentLength());return n??KS(e)},GS=Da&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:c,onUploadProgress:l,responseType:h,headers:f,withCredentials:p="same-origin",fetchOptions:y}=g_(t);h=h?(h+"").toLowerCase():"text";let[R,C]=s||i||o?$S([s,i],o):[],P,N;const $=()=>{!P&&setTimeout(()=>{R&&R.unsubscribe()}),P=!0};let G;try{if(l&&zS&&n!=="get"&&n!=="head"&&(G=await WS(f,r))!==0){let H=new Request(e,{method:"POST",body:r,duplex:"half"}),v;k.isFormData(r)&&(v=H.headers.get("content-type"))&&f.setContentType(v),H.body&&(r=Ed(H.body,Td,vd(G,Qo(l)),null,nl))}k.isString(p)||(p=p?"cors":"omit"),N=new Request(e,{...y,signal:R,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",withCredentials:p});let U=await fetch(N);const Z=rl&&(h==="stream"||h==="response");if(rl&&(c||Z)){const H={};["status","statusText","headers"].forEach(g=>{H[g]=U[g]});const v=k.toFiniteNumber(U.headers.get("content-length"));U=new Response(Ed(U.body,Td,c&&vd(v,Qo(c,!0)),Z&&$,nl),H)}h=h||"text";let he=await Jo[k.findKey(Jo,h)||"text"](U,t);return!Z&&$(),C&&C(),await new Promise((H,v)=>{p_(H,v,{data:he,headers:ht.from(U.headers),status:U.status,statusText:U.statusText,config:t,request:N})})}catch(U){throw $(),U&&U.name==="TypeError"&&/fetch/i.test(U.message)?Object.assign(new ue("Network Error",ue.ERR_NETWORK,t,N),{cause:U.cause||U}):ue.from(U,U&&U.code,t,N)}}),sl={http:hS,xhr:jS,fetch:GS};k.forEach(sl,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const wd=t=>`- ${t}`,QS=t=>k.isFunction(t)||t===null||t===!1,y_={getAdapter:t=>{t=k.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!QS(n)&&(r=sl[(o=String(n)).toLowerCase()],r===void 0))throw new ue(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(wd).join(`
`):" "+wd(i[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:sl};function Ec(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new fs(null,t)}function Id(t){return Ec(t),t.headers=ht.from(t.headers),t.data=yc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),y_.getAdapter(t.adapter||Ci.adapter)(t).then(function(r){return Ec(t),r.data=yc.call(t,t.transformResponse,r),r.headers=ht.from(r.headers),r},function(r){return d_(r)||(Ec(t),r&&r.response&&(r.response.data=yc.call(t,t.transformResponse,r.response),r.response.headers=ht.from(r.response.headers))),Promise.reject(r)})}const E_="1.7.2",gu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{gu[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Ad={};gu.transitional=function(e,n,r){function s(i,o){return"[Axios v"+E_+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(e===!1)throw new ue(s(o," has been removed"+(n?" in "+n:"")),ue.ERR_DEPRECATED);return n&&!Ad[o]&&(Ad[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,c):!0}};function JS(t,e,n){if(typeof t!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const c=t[i],l=c===void 0||o(c,i,t);if(l!==!0)throw new ue("option "+i+" must be "+l,ue.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ue("Unknown option "+i,ue.ERR_BAD_OPTION)}}const il={assertOptions:JS,validators:gu},wn=il.validators;class fr{constructor(e){this.defaults=e,this.interceptors={request:new gd,response:new gd}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Tr(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&il.assertOptions(r,{silentJSONParsing:wn.transitional(wn.boolean),forcedJSONParsing:wn.transitional(wn.boolean),clarifyTimeoutError:wn.transitional(wn.boolean)},!1),s!=null&&(k.isFunction(s)?n.paramsSerializer={serialize:s}:il.assertOptions(s,{encode:wn.function,serialize:wn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&k.merge(i.common,i[n.method]);i&&k.forEach(["delete","get","head","post","put","patch","common"],C=>{delete i[C]}),n.headers=ht.concat(o,i);const c=[];let l=!0;this.interceptors.request.forEach(function(P){typeof P.runWhen=="function"&&P.runWhen(n)===!1||(l=l&&P.synchronous,c.unshift(P.fulfilled,P.rejected))});const h=[];this.interceptors.response.forEach(function(P){h.push(P.fulfilled,P.rejected)});let f,p=0,y;if(!l){const C=[Id.bind(this),void 0];for(C.unshift.apply(C,c),C.push.apply(C,h),y=C.length,f=Promise.resolve(n);p<y;)f=f.then(C[p++],C[p++]);return f}y=c.length;let R=n;for(p=0;p<y;){const C=c[p++],P=c[p++];try{R=C(R)}catch(N){P.call(this,N);break}}try{f=Id.call(this,R)}catch(C){return Promise.reject(C)}for(p=0,y=h.length;p<y;)f=f.then(h[p++],h[p++]);return f}getUri(e){e=Tr(this.defaults,e);const n=m_(e.baseURL,e.url);return u_(n,e.params,e.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(e){fr.prototype[e]=function(n,r){return this.request(Tr(r||{},{method:e,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,c){return this.request(Tr(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}fr.prototype[e]=n(),fr.prototype[e+"Form"]=n(!0)});class _u{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,c){r.reason||(r.reason=new fs(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new _u(function(s){e=s}),cancel:e}}}function YS(t){return function(n){return t.apply(null,n)}}function XS(t){return k.isObject(t)&&t.isAxiosError===!0}const ol={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ol).forEach(([t,e])=>{ol[e]=t});function v_(t){const e=new fr(t),n=Xg(fr.prototype.request,e);return k.extend(n,fr.prototype,e,{allOwnKeys:!0}),k.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return v_(Tr(t,s))},n}const Ue=v_(Ci);Ue.Axios=fr;Ue.CanceledError=fs;Ue.CancelToken=_u;Ue.isCancel=d_;Ue.VERSION=E_;Ue.toFormData=ka;Ue.AxiosError=ue;Ue.Cancel=Ue.CanceledError;Ue.all=function(e){return Promise.all(e)};Ue.spread=YS;Ue.isAxiosError=XS;Ue.mergeConfig=Tr;Ue.AxiosHeaders=ht;Ue.formToJSON=t=>f_(k.isHTMLForm(t)?new FormData(t):t);Ue.getAdapter=y_.getAdapter;Ue.HttpStatusCode=ol;Ue.default=Ue;const ZS={class:"row"},eC={class:"col-sm-12"},tC={class:"card mb-4"},nC={class:"card-header"},rC={class:"row"},sC=X("div",{class:"col"},[X("strong",null,"Users")],-1),iC={class:"col text-end"},oC={class:"card-body"},aC={class:"table table-hover"},cC=X("thead",null,[X("tr",null,[X("th",null,"#"),X("th",null,"First Name"),X("th",null,"Last Name"),X("th",null,"Username"),X("th",null,"Email"),X("th",null,"Role"),X("th",null,"Action")])],-1),lC={key:0},uC=X("td",{colspan:"7",class:"text-center"},"No users available",-1),hC=[uC],fC={scope:"row"},dC=X("button",{title:"Edit user",class:"btn brand-btn-secondary text-black btn-sm"},[X("i",{class:"b- bi-pencil"}),Ur(" Edit")],-1),pC=["onClick"],mC=X("i",{class:"b- bi-trash"},null,-1),gC=[mC],_C={class:"mb-3"},yC=X("label",{for:"firstName",class:"form-label"},"First Name",-1),EC={class:"mb-3"},vC=X("label",{for:"lastName",class:"form-label"},"Last Name",-1),TC={class:"mb-3"},wC=X("label",{for:"username",class:"form-label"},"Username",-1),IC={class:"mb-3"},AC=X("label",{for:"email",class:"form-label"},"Email",-1),bC={class:"mb-3"},RC=X("label",{for:"_pass_text",class:"form-label"},"Password",-1),SC={class:"mb-3"},CC=X("label",{for:"role",class:"form-label"},"Role",-1),PC=X("option",{selected:""},"Select Role",-1),OC=X("option",{value:"admin"},"Admin",-1),NC=X("option",{value:"inspector"},"Inspector",-1),kC=X("option",{value:"viewer"},"Viewer",-1),DC=[PC,OC,NC,kC],VC=["disabled"],xC={__name:"Users",setup(t){const e=Xt([]),n=Xt(!1),r=Xt(!1),s=Xt(""),i=Xt(""),o=Xt(""),c=Xt(""),l=Xt(""),h=Xt(""),f=dA(),p=async()=>{const P=rR(hd,"users"),N=await TR(P);e.value=N.docs.map($=>$.data())},{proxy:y}=Pp(),R=async()=>{r.value=!0,Zw(f,c.value,l.value).then(async P=>{const N=P.user;await wR(sR(hd,"users",N.uid),{uuid:N.uid,firstname:s.value,lastname:i.value,username:o.value,email:c.value,role:h.value}).then(()=>{n.value=!1,y.$swal.fire("Success","User added successfully","success"),s.value="",i.value="",o.value="",c.value="",l.value="",h.value="",p()}).catch($=>{y.$swal.fire("Error","Error adding user","error")})}).catch(P=>{y.$swal.fire("Error",P.message,"error")}).finally(()=>{r.value=!1})},C=async P=>{y.$swal.fire({title:"Are you sure?",text:"You will not be able to recover this user!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes!",cancelButtonText:"No"}).then(async N=>{if(N.isConfirmed)try{(await Ue.delete(`http://localhost:3000/deleteUser/${P}`)).status===200&&(y.$swal.fire("Success","User deleted successfully","success"),p())}catch($){console.error("Error deleting user:",$),y.$swal.fire("Error","Error deleting user","error")}})};return Il(()=>{p()}),(P,N)=>{const $=Dr("CButton"),G=Dr("CModalTitle"),U=Dr("CModalHeader"),Z=Dr("CModalBody"),he=Dr("CModalFooter"),H=Dr("CModal");return Fr(),Xi("div",ZS,[X("div",eC,[X("div",tC,[X("div",nC,[X("div",rC,[sC,X("div",iC,[ke($,{color:"primary",size:"sm",onClick:N[0]||(N[0]=()=>{n.value=!0}),class:"brand-btn-primary"},{default:In(()=>[Ur("Add User")]),_:1})])])]),X("div",oC,[X("table",aC,[cC,X("tbody",null,[e.value.length===0?(Fr(),Xi("tr",lC,hC)):(Fr(!0),Xi(yt,{key:1},tE(e.value,(v,g)=>(Fr(),Xi("tr",{key:v.id},[X("th",fC,kr(g+1),1),X("td",null,kr(v.firstname),1),X("td",null,kr(v.lastname),1),X("td",null,kr(v.username),1),X("td",null,kr(v.email),1),X("td",null,kr(v.role),1),X("td",null,[dC,Ur("   "),X("button",{title:"Delete user",class:"btn btn-danger text-white btn-sm",onClick:_=>C(v.uuid)},gC,8,pC)])]))),128))])])])])]),ke(H,{visible:n.value,onClose:N[8]||(N[8]=()=>{n.value=!1}),"aria-labelledby":"LiveDemoExampleLabel"},{default:In(()=>[ke(U,null,{default:In(()=>[ke(G,{id:"LiveDemoExampleLabel"},{default:In(()=>[Ur("Create User")]),_:1})]),_:1}),X("form",{onSubmit:Tv(R,["prevent"])},[ke(Z,null,{default:In(()=>[X("div",_C,[yC,Vr(X("input",{type:"text",class:"form-control","onUpdate:modelValue":N[1]||(N[1]=v=>s.value=v),id:"firstName"},null,512),[[Os,s.value]])]),X("div",EC,[vC,Vr(X("input",{type:"text",class:"form-control","onUpdate:modelValue":N[2]||(N[2]=v=>i.value=v),id:"lastName"},null,512),[[Os,i.value]])]),X("div",TC,[wC,Vr(X("input",{type:"text",class:"form-control","onUpdate:modelValue":N[3]||(N[3]=v=>o.value=v),id:"username"},null,512),[[Os,o.value]])]),X("div",IC,[AC,Vr(X("input",{type:"email",class:"form-control","onUpdate:modelValue":N[4]||(N[4]=v=>c.value=v),id:"email"},null,512),[[Os,c.value]])]),X("div",bC,[RC,Vr(X("input",{type:"text",class:"form-control","onUpdate:modelValue":N[5]||(N[5]=v=>l.value=v),id:"_pass_text"},null,512),[[Os,l.value]])]),X("div",SC,[CC,Vr(X("select",{class:"form-select","onUpdate:modelValue":N[6]||(N[6]=v=>h.value=v),id:"role"},DC,512),[[yv,h.value]])])]),_:1}),ke(he,null,{default:In(()=>[ke($,{color:"secondary",onClick:N[7]||(N[7]=()=>{n.value=!1})},{default:In(()=>[Ur(" Close ")]),_:1}),X("button",{type:"submit",class:"btn btn-primary",disabled:r.value},"Create",8,VC)]),_:1})],32)]),_:1},8,["visible"])])}}},sP=Object.freeze(Object.defineProperty({__proto__:null,default:xC},Symbol.toStringTag,{value:"Module"}));export{Ue as $,Vr as A,Gy as B,Il as C,Jy as D,KC as E,Bn as F,QC as G,sp as H,Dr as I,ke as J,Sp as K,GC as L,yt as M,In as N,kr as O,tE as P,Ur as Q,dA as R,XC as S,kp as T,ZC as U,fl as V,xE as W,HC as X,JC as Y,Os as Z,Tv as _,yl as a,Pp as a0,hl as a1,yv as a2,$C as a3,ip as a4,WC as a5,YC as a6,rP as a7,sR as a8,hd as a9,sP as aa,ct as b,js as c,UC as d,LC as e,zE as f,iy as g,zC as h,oo as i,Ry as j,qC as k,KE as l,Sy as m,Yd as n,MC as o,uE as p,Fr as q,Xt as r,FC as s,Ee as t,Oy as u,Xi as v,ec as w,BC as x,jC as y,X as z};
