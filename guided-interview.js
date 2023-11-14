var Ut = Object.defineProperty;
var Vt = (o, e, t) => e in o ? Ut(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var ae = (o, e, t) => (Vt(o, typeof e != "symbol" ? e + "" : e, t), t);
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $t(o) {
  if (o.__esModule)
    return o;
  var e = o.default;
  if (typeof e == "function") {
    var t = function i() {
      if (this instanceof i) {
        var r = [null];
        r.push.apply(r, arguments);
        var n = Function.bind.apply(e, r);
        return new n();
      }
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(o).forEach(function(i) {
    var r = Object.getOwnPropertyDescriptor(o, i);
    Object.defineProperty(t, i, r.get ? r : {
      enumerable: !0,
      get: function() {
        return o[i];
      }
    });
  }), t;
}
var je = {}, De = {}, yt = {}, Ue = {}, Ve = {};
Object.defineProperty(Ve, "__esModule", {
  value: !0
});
Ve.default = Gt;
let Fe;
const Qt = new Uint8Array(16);
function Gt() {
  if (!Fe && (Fe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Fe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Fe(Qt);
}
var Ae = {}, Ce = {}, $e = {};
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.default = void 0;
var Wt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
$e.default = Wt;
Object.defineProperty(Ce, "__esModule", {
  value: !0
});
Ce.default = void 0;
var qt = Ht($e);
function Ht(o) {
  return o && o.__esModule ? o : { default: o };
}
function Yt(o) {
  return typeof o == "string" && qt.default.test(o);
}
var zt = Yt;
Ce.default = zt;
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
Ae.unsafeStringify = wt;
var Jt = Xt(Ce);
function Xt(o) {
  return o && o.__esModule ? o : { default: o };
}
const de = [];
for (let o = 0; o < 256; ++o)
  de.push((o + 256).toString(16).slice(1));
function wt(o, e = 0) {
  return (de[o[e + 0]] + de[o[e + 1]] + de[o[e + 2]] + de[o[e + 3]] + "-" + de[o[e + 4]] + de[o[e + 5]] + "-" + de[o[e + 6]] + de[o[e + 7]] + "-" + de[o[e + 8]] + de[o[e + 9]] + "-" + de[o[e + 10]] + de[o[e + 11]] + de[o[e + 12]] + de[o[e + 13]] + de[o[e + 14]] + de[o[e + 15]]).toLowerCase();
}
function Zt(o, e = 0) {
  const t = wt(o, e);
  if (!(0, Jt.default)(t))
    throw TypeError("Stringified UUID is invalid");
  return t;
}
var ei = Zt;
Ae.default = ei;
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.default = void 0;
var ti = ni(Ve), ii = Ae;
function ni(o) {
  return o && o.__esModule ? o : { default: o };
}
let dt, st, ot = 0, at = 0;
function ri(o, e, t) {
  let i = e && t || 0;
  const r = e || new Array(16);
  o = o || {};
  let n = o.node || dt, a = o.clockseq !== void 0 ? o.clockseq : st;
  if (n == null || a == null) {
    const P = o.random || (o.rng || ti.default)();
    n == null && (n = dt = [P[0] | 1, P[1], P[2], P[3], P[4], P[5]]), a == null && (a = st = (P[6] << 8 | P[7]) & 16383);
  }
  let p = o.msecs !== void 0 ? o.msecs : Date.now(), g = o.nsecs !== void 0 ? o.nsecs : at + 1;
  const m = p - ot + (g - at) / 1e4;
  if (m < 0 && o.clockseq === void 0 && (a = a + 1 & 16383), (m < 0 || p > ot) && o.nsecs === void 0 && (g = 0), g >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ot = p, at = g, st = a, p += 122192928e5;
  const L = ((p & 268435455) * 1e4 + g) % 4294967296;
  r[i++] = L >>> 24 & 255, r[i++] = L >>> 16 & 255, r[i++] = L >>> 8 & 255, r[i++] = L & 255;
  const S = p / 4294967296 * 1e4 & 268435455;
  r[i++] = S >>> 8 & 255, r[i++] = S & 255, r[i++] = S >>> 24 & 15 | 16, r[i++] = S >>> 16 & 255, r[i++] = a >>> 8 | 128, r[i++] = a & 255;
  for (let P = 0; P < 6; ++P)
    r[i + P] = n[P];
  return e || (0, ii.unsafeStringify)(r);
}
var si = ri;
Ue.default = si;
var Qe = {}, Te = {}, Pe = {};
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.default = void 0;
var oi = ai(Ce);
function ai(o) {
  return o && o.__esModule ? o : { default: o };
}
function li(o) {
  if (!(0, oi.default)(o))
    throw TypeError("Invalid UUID");
  let e;
  const t = new Uint8Array(16);
  return t[0] = (e = parseInt(o.slice(0, 8), 16)) >>> 24, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = e & 255, t[4] = (e = parseInt(o.slice(9, 13), 16)) >>> 8, t[5] = e & 255, t[6] = (e = parseInt(o.slice(14, 18), 16)) >>> 8, t[7] = e & 255, t[8] = (e = parseInt(o.slice(19, 23), 16)) >>> 8, t[9] = e & 255, t[10] = (e = parseInt(o.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = e / 4294967296 & 255, t[12] = e >>> 24 & 255, t[13] = e >>> 16 & 255, t[14] = e >>> 8 & 255, t[15] = e & 255, t;
}
var ui = li;
Pe.default = ui;
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.URL = Te.DNS = void 0;
Te.default = di;
var ci = Ae, fi = hi(Pe);
function hi(o) {
  return o && o.__esModule ? o : { default: o };
}
function pi(o) {
  o = unescape(encodeURIComponent(o));
  const e = [];
  for (let t = 0; t < o.length; ++t)
    e.push(o.charCodeAt(t));
  return e;
}
const _t = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
Te.DNS = _t;
const Et = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
Te.URL = Et;
function di(o, e, t) {
  function i(r, n, a, p) {
    var g;
    if (typeof r == "string" && (r = pi(r)), typeof n == "string" && (n = (0, fi.default)(n)), ((g = n) === null || g === void 0 ? void 0 : g.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let m = new Uint8Array(16 + r.length);
    if (m.set(n), m.set(r, n.length), m = t(m), m[6] = m[6] & 15 | e, m[8] = m[8] & 63 | 128, a) {
      p = p || 0;
      for (let L = 0; L < 16; ++L)
        a[p + L] = m[L];
      return a;
    }
    return (0, ci.unsafeStringify)(m);
  }
  try {
    i.name = o;
  } catch {
  }
  return i.DNS = _t, i.URL = Et, i;
}
var Ge = {};
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.default = void 0;
function vi(o) {
  if (typeof o == "string") {
    const e = unescape(encodeURIComponent(o));
    o = new Uint8Array(e.length);
    for (let t = 0; t < e.length; ++t)
      o[t] = e.charCodeAt(t);
  }
  return mi(gi(yi(o), o.length * 8));
}
function mi(o) {
  const e = [], t = o.length * 32, i = "0123456789abcdef";
  for (let r = 0; r < t; r += 8) {
    const n = o[r >> 5] >>> r % 32 & 255, a = parseInt(i.charAt(n >>> 4 & 15) + i.charAt(n & 15), 16);
    e.push(a);
  }
  return e;
}
function bt(o) {
  return (o + 64 >>> 9 << 4) + 14 + 1;
}
function gi(o, e) {
  o[e >> 5] |= 128 << e % 32, o[bt(e) - 1] = e;
  let t = 1732584193, i = -271733879, r = -1732584194, n = 271733878;
  for (let a = 0; a < o.length; a += 16) {
    const p = t, g = i, m = r, L = n;
    t = ve(t, i, r, n, o[a], 7, -680876936), n = ve(n, t, i, r, o[a + 1], 12, -389564586), r = ve(r, n, t, i, o[a + 2], 17, 606105819), i = ve(i, r, n, t, o[a + 3], 22, -1044525330), t = ve(t, i, r, n, o[a + 4], 7, -176418897), n = ve(n, t, i, r, o[a + 5], 12, 1200080426), r = ve(r, n, t, i, o[a + 6], 17, -1473231341), i = ve(i, r, n, t, o[a + 7], 22, -45705983), t = ve(t, i, r, n, o[a + 8], 7, 1770035416), n = ve(n, t, i, r, o[a + 9], 12, -1958414417), r = ve(r, n, t, i, o[a + 10], 17, -42063), i = ve(i, r, n, t, o[a + 11], 22, -1990404162), t = ve(t, i, r, n, o[a + 12], 7, 1804603682), n = ve(n, t, i, r, o[a + 13], 12, -40341101), r = ve(r, n, t, i, o[a + 14], 17, -1502002290), i = ve(i, r, n, t, o[a + 15], 22, 1236535329), t = me(t, i, r, n, o[a + 1], 5, -165796510), n = me(n, t, i, r, o[a + 6], 9, -1069501632), r = me(r, n, t, i, o[a + 11], 14, 643717713), i = me(i, r, n, t, o[a], 20, -373897302), t = me(t, i, r, n, o[a + 5], 5, -701558691), n = me(n, t, i, r, o[a + 10], 9, 38016083), r = me(r, n, t, i, o[a + 15], 14, -660478335), i = me(i, r, n, t, o[a + 4], 20, -405537848), t = me(t, i, r, n, o[a + 9], 5, 568446438), n = me(n, t, i, r, o[a + 14], 9, -1019803690), r = me(r, n, t, i, o[a + 3], 14, -187363961), i = me(i, r, n, t, o[a + 8], 20, 1163531501), t = me(t, i, r, n, o[a + 13], 5, -1444681467), n = me(n, t, i, r, o[a + 2], 9, -51403784), r = me(r, n, t, i, o[a + 7], 14, 1735328473), i = me(i, r, n, t, o[a + 12], 20, -1926607734), t = ge(t, i, r, n, o[a + 5], 4, -378558), n = ge(n, t, i, r, o[a + 8], 11, -2022574463), r = ge(r, n, t, i, o[a + 11], 16, 1839030562), i = ge(i, r, n, t, o[a + 14], 23, -35309556), t = ge(t, i, r, n, o[a + 1], 4, -1530992060), n = ge(n, t, i, r, o[a + 4], 11, 1272893353), r = ge(r, n, t, i, o[a + 7], 16, -155497632), i = ge(i, r, n, t, o[a + 10], 23, -1094730640), t = ge(t, i, r, n, o[a + 13], 4, 681279174), n = ge(n, t, i, r, o[a], 11, -358537222), r = ge(r, n, t, i, o[a + 3], 16, -722521979), i = ge(i, r, n, t, o[a + 6], 23, 76029189), t = ge(t, i, r, n, o[a + 9], 4, -640364487), n = ge(n, t, i, r, o[a + 12], 11, -421815835), r = ge(r, n, t, i, o[a + 15], 16, 530742520), i = ge(i, r, n, t, o[a + 2], 23, -995338651), t = ye(t, i, r, n, o[a], 6, -198630844), n = ye(n, t, i, r, o[a + 7], 10, 1126891415), r = ye(r, n, t, i, o[a + 14], 15, -1416354905), i = ye(i, r, n, t, o[a + 5], 21, -57434055), t = ye(t, i, r, n, o[a + 12], 6, 1700485571), n = ye(n, t, i, r, o[a + 3], 10, -1894986606), r = ye(r, n, t, i, o[a + 10], 15, -1051523), i = ye(i, r, n, t, o[a + 1], 21, -2054922799), t = ye(t, i, r, n, o[a + 8], 6, 1873313359), n = ye(n, t, i, r, o[a + 15], 10, -30611744), r = ye(r, n, t, i, o[a + 6], 15, -1560198380), i = ye(i, r, n, t, o[a + 13], 21, 1309151649), t = ye(t, i, r, n, o[a + 4], 6, -145523070), n = ye(n, t, i, r, o[a + 11], 10, -1120210379), r = ye(r, n, t, i, o[a + 2], 15, 718787259), i = ye(i, r, n, t, o[a + 9], 21, -343485551), t = xe(t, p), i = xe(i, g), r = xe(r, m), n = xe(n, L);
  }
  return [t, i, r, n];
}
function yi(o) {
  if (o.length === 0)
    return [];
  const e = o.length * 8, t = new Uint32Array(bt(e));
  for (let i = 0; i < e; i += 8)
    t[i >> 5] |= (o[i / 8] & 255) << i % 32;
  return t;
}
function xe(o, e) {
  const t = (o & 65535) + (e & 65535);
  return (o >> 16) + (e >> 16) + (t >> 16) << 16 | t & 65535;
}
function wi(o, e) {
  return o << e | o >>> 32 - e;
}
function We(o, e, t, i, r, n) {
  return xe(wi(xe(xe(e, o), xe(i, n)), r), t);
}
function ve(o, e, t, i, r, n, a) {
  return We(e & t | ~e & i, o, e, r, n, a);
}
function me(o, e, t, i, r, n, a) {
  return We(e & i | t & ~i, o, e, r, n, a);
}
function ge(o, e, t, i, r, n, a) {
  return We(e ^ t ^ i, o, e, r, n, a);
}
function ye(o, e, t, i, r, n, a) {
  return We(t ^ (e | ~i), o, e, r, n, a);
}
var _i = vi;
Ge.default = _i;
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.default = void 0;
var Ei = kt(Te), bi = kt(Ge);
function kt(o) {
  return o && o.__esModule ? o : { default: o };
}
const ki = (0, Ei.default)("v3", 48, bi.default);
var Oi = ki;
Qe.default = Oi;
var qe = {}, He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.default = void 0;
const Li = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var xi = {
  randomUUID: Li
};
He.default = xi;
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.default = void 0;
var vt = Ot(He), Ti = Ot(Ve), Ai = Ae;
function Ot(o) {
  return o && o.__esModule ? o : { default: o };
}
function Si(o, e, t) {
  if (vt.default.randomUUID && !e && !o)
    return vt.default.randomUUID();
  o = o || {};
  const i = o.random || (o.rng || Ti.default)();
  if (i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, e) {
    t = t || 0;
    for (let r = 0; r < 16; ++r)
      e[t + r] = i[r];
    return e;
  }
  return (0, Ai.unsafeStringify)(i);
}
var Ci = Si;
qe.default = Ci;
var Ye = {}, ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.default = void 0;
function Ii(o, e, t, i) {
  switch (o) {
    case 0:
      return e & t ^ ~e & i;
    case 1:
      return e ^ t ^ i;
    case 2:
      return e & t ^ e & i ^ t & i;
    case 3:
      return e ^ t ^ i;
  }
}
function lt(o, e) {
  return o << e | o >>> 32 - e;
}
function Ri(o) {
  const e = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof o == "string") {
    const a = unescape(encodeURIComponent(o));
    o = [];
    for (let p = 0; p < a.length; ++p)
      o.push(a.charCodeAt(p));
  } else
    Array.isArray(o) || (o = Array.prototype.slice.call(o));
  o.push(128);
  const i = o.length / 4 + 2, r = Math.ceil(i / 16), n = new Array(r);
  for (let a = 0; a < r; ++a) {
    const p = new Uint32Array(16);
    for (let g = 0; g < 16; ++g)
      p[g] = o[a * 64 + g * 4] << 24 | o[a * 64 + g * 4 + 1] << 16 | o[a * 64 + g * 4 + 2] << 8 | o[a * 64 + g * 4 + 3];
    n[a] = p;
  }
  n[r - 1][14] = (o.length - 1) * 8 / Math.pow(2, 32), n[r - 1][14] = Math.floor(n[r - 1][14]), n[r - 1][15] = (o.length - 1) * 8 & 4294967295;
  for (let a = 0; a < r; ++a) {
    const p = new Uint32Array(80);
    for (let I = 0; I < 16; ++I)
      p[I] = n[a][I];
    for (let I = 16; I < 80; ++I)
      p[I] = lt(p[I - 3] ^ p[I - 8] ^ p[I - 14] ^ p[I - 16], 1);
    let g = t[0], m = t[1], L = t[2], S = t[3], P = t[4];
    for (let I = 0; I < 80; ++I) {
      const T = Math.floor(I / 20), R = lt(g, 5) + Ii(T, m, L, S) + P + e[T] + p[I] >>> 0;
      P = S, S = L, L = lt(m, 30) >>> 0, m = g, g = R;
    }
    t[0] = t[0] + g >>> 0, t[1] = t[1] + m >>> 0, t[2] = t[2] + L >>> 0, t[3] = t[3] + S >>> 0, t[4] = t[4] + P >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var Ni = Ri;
ze.default = Ni;
Object.defineProperty(Ye, "__esModule", {
  value: !0
});
Ye.default = void 0;
var Pi = Lt(Te), Bi = Lt(ze);
function Lt(o) {
  return o && o.__esModule ? o : { default: o };
}
const Fi = (0, Pi.default)("v5", 80, Bi.default);
var Mi = Fi;
Ye.default = Mi;
var Je = {};
Object.defineProperty(Je, "__esModule", {
  value: !0
});
Je.default = void 0;
var Ki = "00000000-0000-0000-0000-000000000000";
Je.default = Ki;
var Xe = {};
Object.defineProperty(Xe, "__esModule", {
  value: !0
});
Xe.default = void 0;
var ji = Di(Ce);
function Di(o) {
  return o && o.__esModule ? o : { default: o };
}
function Ui(o) {
  if (!(0, ji.default)(o))
    throw TypeError("Invalid UUID");
  return parseInt(o.slice(14, 15), 16);
}
var Vi = Ui;
Xe.default = Vi;
(function(o) {
  Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "NIL", {
    enumerable: !0,
    get: function() {
      return n.default;
    }
  }), Object.defineProperty(o, "parse", {
    enumerable: !0,
    get: function() {
      return m.default;
    }
  }), Object.defineProperty(o, "stringify", {
    enumerable: !0,
    get: function() {
      return g.default;
    }
  }), Object.defineProperty(o, "v1", {
    enumerable: !0,
    get: function() {
      return e.default;
    }
  }), Object.defineProperty(o, "v3", {
    enumerable: !0,
    get: function() {
      return t.default;
    }
  }), Object.defineProperty(o, "v4", {
    enumerable: !0,
    get: function() {
      return i.default;
    }
  }), Object.defineProperty(o, "v5", {
    enumerable: !0,
    get: function() {
      return r.default;
    }
  }), Object.defineProperty(o, "validate", {
    enumerable: !0,
    get: function() {
      return p.default;
    }
  }), Object.defineProperty(o, "version", {
    enumerable: !0,
    get: function() {
      return a.default;
    }
  });
  var e = L(Ue), t = L(Qe), i = L(qe), r = L(Ye), n = L(Je), a = L(Xe), p = L(Ce), g = L(Ae), m = L(Pe);
  function L(S) {
    return S && S.__esModule ? S : { default: S };
  }
})(yt);
var Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.RandomStringConfig = void 0;
class $i {
  /**
   * Create a new instance.
   */
  constructor() {
    this.config = {
      length: 21,
      numbers: !1,
      symbols: !1,
      characters: !1
    };
  }
  /**
   * Returns the configured string length.
   *
   * @returns {Number}
   */
  length() {
    return this.config.length;
  }
  /**
   * Assign the given `length`.
   *
   * @param length
   *
   * @returns {this}
   */
  withLength(e) {
    return e && (this.config.length = e), this;
  }
  /**
   * Use characters when generating a random string.
   *
   * @returns {this}
   */
  useCharacters() {
    return this.config.characters = !0, this;
  }
  /**
   * Determine whether to use characters when generating a random string.
   *
   * @returns {this}
   */
  shouldUseCharacters() {
    return this.config.characters;
  }
  /**
   * Use numbers when generating a random string.
   *
   * @returns {this}
   */
  useNumbers() {
    return this.config.numbers = !0, this;
  }
  /**
   * Determine whether to use numbers when generating a random string.
   *
   * @returns {this}
   */
  shouldUseNumbers() {
    return this.config.numbers;
  }
  /**
   * Use symbols when generating a random string.
   *
   * @returns {this}
   */
  useSymbols() {
    return this.config.symbols = !0, this;
  }
  /**
   * Determine whether to use numbers when generating a random string.
   *
   * @returns {this}
   */
  shouldUseSymbols() {
    return this.config.symbols;
  }
}
Ze.RandomStringConfig = $i;
var et = {};
Object.defineProperty(et, "__esModule", { value: !0 });
et.RandomStringBuilder = void 0;
class Qi {
  /**
   * Create a new random string builder instance.
   */
  constructor(e) {
    this.config = e;
  }
  /**
   * Assign the given `length` for the random string. By default, uses a length of 21 characters.
   *
   * @param length
   *
   * @returns {this}
   */
  length(e) {
    return this.config.withLength(e), this;
  }
  /**
   * Use numbers when generating a random string.
   *
   * @returns {this}
   */
  characters() {
    return this.config.useCharacters(), this;
  }
  /**
   * Use numbers when generating a random string.
   *
   * @returns {this}
   */
  numbers() {
    return this.config.useNumbers(), this;
  }
  /**
   * Use symbols when generating a random string.
   *
   * @returns {this}
   */
  symbols() {
    return this.config.useSymbols(), this;
  }
}
et.RandomStringBuilder = Qi;
var tt = {};
const Gi = new Proxy({}, {
  get(o, e) {
    throw new Error(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${e}" in client code.  See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
  }
}), Wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gi
}, Symbol.toStringTag, { value: "Module" })), qi = /* @__PURE__ */ $t(Wi);
var Hi = ct && ct.__importDefault || function(o) {
  return o && o.__esModule ? o : { default: o };
};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.RandomStringGenerator = void 0;
const Yi = Hi(qi);
class zi {
  /**
   * Create a new random string generator instance.
   */
  constructor(e, t) {
    this.Str = e, this.config = t;
  }
  /**
   * Returns all characters.
   *
   * @returns {String}
   */
  characters() {
    return "ModuleSymbhasOwnPrABCDEFGHNRVfgctiUvzKqYTJkLxpZXIjQW";
  }
  /**
   * Returns all numbers.
   *
   * @returns {String}
   */
  numbers() {
    return "0123456789";
  }
  /**
   * Returns all usable symbols.
   *
   * @returns {String}
   */
  symbols() {
    return "-_";
  }
  /**
   * Returns all usable symbols.
   *
   * @returns {String}
   */
  alphabet() {
    let e = "";
    return this.config.shouldUseCharacters() && (e += this.characters()), this.config.shouldUseNumbers() && (e += this.numbers()), this.config.shouldUseSymbols() && (e += this.symbols()), new this.Str(e).shuffle().get();
  }
  /**
   * Assign the given `length` for the random string. By default, uses a length of 21 characters.
   *
   * @param length
   *
   * @returns {this}
   */
  generate() {
    const e = this.alphabet();
    if (!e)
      throw new Error("You must specify the character set when using the string builder in Str.random(builder => …)");
    let t = this.config.length();
    const i = Yi.default.randomBytes(t), r = e.length - 1;
    let n = "";
    for (; t--; )
      n += e[i[t] & r];
    return n;
  }
}
tt.RandomStringGenerator = zi;
var it = {};
Object.defineProperty(it, "__esModule", { value: !0 });
it.StringReplacer = void 0;
class Ji {
  /**
   * Create a new string replacer instance.
   */
  constructor(e, t) {
    this.strings = e, this.searchValue = t, this.shouldReplaceAll = !1, this.shouldReplaceLast = !1;
  }
  /**
   * Replace all occurences of the search value.
   *
   * @returns {this}
   */
  all() {
    return this.shouldReplaceAll = !0, this;
  }
  /**
   * Replace the last occurence of the search value.
   *
   * @returns {this}
   */
  last() {
    return this.shouldReplaceLast = !0, this;
  }
  with(e) {
    switch (!0) {
      case this.shouldReplaceAll:
        return this.strings.replaceAll(this.searchValue, e ?? "");
      case this.shouldReplaceLast:
        return this.strings.replaceLast(this.searchValue, e ?? "");
      default:
        return this.strings.replace(this.searchValue, e ?? "");
    }
  }
}
it.StringReplacer = Ji;
Object.defineProperty(De, "__esModule", { value: !0 });
De.Str = void 0;
const mt = yt, Xi = Ze, Zi = et, en = tt, ut = it;
class te {
  /**
   * Create a new String instance providing chainable string operations.
   * This instance clones the original string and works with the clone.
   * It won’t modify the original string.
   *
   * @param {String} value
   *
   * @returns {Str}
   */
  constructor(e) {
    this.value = String(e ?? "").slice(0);
  }
  /**
   * Returns the RegEx pattern for alpha-numeric characters.
   *
   * @returns {RegExp}
   */
  get ALPHANUMERIC_PATTERN() {
    return /[A-Za-z0-9\u00C0-\u00FF]/;
  }
  /**
   * Returns the byte order mark (BOM) character code.
   *
   * @returns {Number}
   */
  bomCharCode() {
    return 65279;
  }
  /**
   * Returns the string value.
   *
   * @returns {String}
   */
  get() {
    return this.toString();
  }
  /**
   * Returns the string value.
   *
   * @returns {String}
   */
  toString() {
    return this.value;
  }
  /**
   * Returns the portion of the string after the first occurrence of the given `delimiter`.
   *
   * @param {String} delimiter
   *
   * @returns {Str}
   */
  after(e) {
    if (e === "")
      return this;
    const t = this.split(e);
    return t.length === 1 ? this : new te(t.slice(1).join(e));
  }
  /**
   * Returns the portion of the string after the last occurrence of the given `delimiter`.
   *
   * @param {String} delimiter
   *
   * @return {Str}
   */
  afterLast(e) {
    return e === "" ? this : new te(this.split(e).pop());
  }
  /**
   * Append the given values to the string.
   *
   * @param {any} values
   *
   * @return {Str}
   */
  append(...e) {
    return new te(this.value + [].concat(...e).join(""));
  }
  /**
   * Returns the character at the given `index` or undefined if the index exceeds the set’s size.
   *
   * @param {Number} index
   *
   * @returns {string|undefined}
   */
  at(e) {
    const t = this.length();
    if (e < 0 && (e += t), !(e < 0 || e > t))
      return this.value[e];
  }
  /**
   * Returns the portion of the string before the first occurrence of the given `delimiter`.
   *
   * @param {String} delimiter
   *
   * @returns {Str}
   */
  before(e) {
    return e === "" ? this : new te(this.split(e).shift());
  }
  /**
   * Returns the portion of the string before the last occurrence of the given `delimiter`.
   *
   * @param {String} delimiter
   *
   * @return {Str}
   */
  beforeLast(e) {
    if (e === "")
      return this;
    const t = this.split(e);
    return t.length === 1 ? this : new te(t.slice(0, -1).join(e));
  }
  /**
   * Convert the string to camelCase.
   *
   * @returns {Str}
   */
  camel() {
    return new te(this.replaceAll(/[_-]+/, " ").splitCamel().map((e) => new te(e).lower().ucFirst().get()).join("")).lcFirst();
  }
  /**
   * Returns the list of characters for the given string.
   *
   * @returns {String[]}
   */
  chars() {
    return Array.from(this.toString());
  }
  /**
   * Returns a string that contains the concatenation of two or more strings.
   *
   * @param {String|Array} strings
   *
   * @returns {Str}
   */
  concat(...e) {
    return e = [].concat(...e), new te(this.value.concat(...e));
  }
  /**
   * Determine whether the haystack contains any of the given `needles`.
   *
   * @param {String} needle
   *
   * @returns {Boolean}
   */
  contains(...e) {
    return this.includes(...e);
  }
  /**
   * Determine whether the haystack contains all items if the `needles` array.
   *
   * @param {String} needle
   *
   * @returns {Boolean}
   */
  containsAll(...e) {
    return this.includesAll(...e);
  }
  /**
   * Determine whether the string contains the byte order mark (BOM) at any position in the string.
   *
   * @returns {Boolean}
   */
  containsBom() {
    return this.chars().some((e, t) => this.value.charCodeAt(t) === this.bomCharCode());
  }
  /**
   * Determine whether the haystack does not contain the given `needle`.
   *
   * @param {String} needle
   *
   * @returns {Boolean}
   */
  notContains(e) {
    return !this.contains(e);
  }
  /**
   * Determine whether the string ends with the given `needle`.
   * Optionally, accepts a `length` used as the string length.
   *
   * @param {String} needle
   * @param {Number} length
   *
   * @returns {Boolean}
   */
  endsWith(e, t) {
    return this.value.endsWith(e, t);
  }
  /**
   * Determine whether the string equals the given `value`.
   *
   * @param {String} value
   *
   * @returns {Boolean}
   */
  equals(e) {
    return e instanceof te ? this.value === e.get() : this.value === e;
  }
  /**
   * Determine whether the string equals given `value` when ignoring character casing.
   *
   * @param {String} value
   *
   * @returns {Boolean}
   */
  equalsIgnoreCase(e) {
    return this.lower().equals(new te(e).lower().get());
  }
  /**
   * Determine whether the string does not equal the given `value`.
   *
   * @param {String} value
   *
   * @returns {Boolean}
   */
  notEquals(e) {
    return !this.equals(e);
  }
  /**
   * Append a single instance of the given `suffix` to the end of
   * the string if it doesn’t already ends with the given suffix.
   *
   * @param {String} suffix
   *
   * @returns {Str}
   */
  finish(e) {
    return this.endsWith(e) ? this : this.append(e);
  }
  /**
   * Determine whether the given string contains the `needle`.
   *
   * @param {*} needle
   *
   * @returns {Boolean}
   */
  includes(...e) {
    return [].concat(...e).filter((t) => t !== "").some((t) => this.value.includes(t));
  }
  /**
   * Determine whether the haystack contains all items if the `needles` array.
   *
   * @param {String} needle
   *
   * @returns {Boolean}
   */
  includesAll(...e) {
    return [].concat(...e).every((t) => this.includes(t));
  }
  /**
   * Determine whether the string does not contain the given `needle`.
   *
   * @param {String} needle
   *
   * @returns {Boolean}
   */
  notIncludes(e) {
    return !this.includes(e);
  }
  /**
   * Determine whether the given string is written in camelCase.
   *
   * @returns {Boolean}
   */
  isCamel() {
    return this.equals(this.camel());
  }
  /**
   * Determine whether the given string is empty.
   *
   * @returns {Boolean}
   */
  isEmpty() {
    return this.length() === 0;
  }
  /**
   * Determine whether the string is lowercase.
   *
   * @returns {Boolean}
   */
  isLower() {
    return this.isLowercase();
  }
  /**
   * Determine whether the string is lowercase.
   *
   * @returns {Boolean}
   */
  isLowercase() {
    return this.equals(this.lower());
  }
  /**
   * Determine whether the string is lowercase and consists of letters only.
   *
   * @returns {Boolean}
   */
  isLowerLetters() {
    return this.equals(this.lower()) && this.notEquals(this.upper());
  }
  /**
   * Determine whether the given string is not empty.
   *
   * @returns {Boolean}
   */
  isNotEmpty() {
    return !this.isEmpty();
  }
  /**
   * Determine whether the given `input` is a string.
   *
   * @param {*} input
   *
   * @returns {Boolean}
   */
  isString(e) {
    return typeof e == "string" && Object.prototype.toString.call(e) === "[object String]";
  }
  /**
   * Determine whether the given `input` is an alpha-numeric string.
   *
   * @param input
   */
  isAlphaNumeric(e) {
    return this.isString(e) && e.length > 0 && e.match(/^[A-Za-z0-9\u00C0-\u00FF]*$/) !== null;
  }
  /**
   * Determine whether the given `input` is a symbol.
   *
   * @param {*} input
   *
   * @returns {Boolean}
   */
  isSymbol(e) {
    return Object.prototype.toString.call(e) === "[object Symbol]";
  }
  /**
   * Determine whether the given string is uppercase.
   *
   * @returns {Boolean}
   */
  isUpper() {
    return this.isUppercase();
  }
  /**
   * Determine whether the given string is uppercase.
   *
   * @returns {Boolean}
   */
  isUppercase() {
    return this.equals(this.upper());
  }
  /**
   * Convert the string to kebab-case.
   *
   * @returns {Str}
   */
  kebab(e = "-") {
    return new te(this.value.replace(/[_-\s]+/g, e)).strip().toLowerCase();
  }
  /**
   * Lowercases the first character in the string.
   *
   * @returns {Str}
   */
  lcFirst() {
    return this.isEmpty() ? this : new te(this.value[0].toLowerCase() + this.value.slice(1));
  }
  /**
   * Returns the string’s length.
   *
   * @returns {Number}
   */
  length() {
    return this.value.length;
  }
  /**
   * Determine whether the string has the given `length`.
   *
   * @param {Number} length
   *
   * @returns {Boolean}
   */
  hasLength(e) {
    return this.length() === e;
  }
  /**
   * Returns the first `limit` characters and ends the limited string with `end`.
   *
   * @param {Number} limit
   * @param {String} end
   *
   * @returns {Str}
   */
  limit(e = 0, t = "") {
    return this.length() <= e ? this : new te(this.value.substring(0, e).concat(t));
  }
  /**
   * Splits the string at the newline character and returns all lines.
   *
   * @returns {String[]}
   */
  lines() {
    return this.split(`
`);
  }
  /**
   * Lowercases the string.
   *
   * @returns {Str}
   */
  lower() {
    return this.toLowerCase();
  }
  /**
   * Lowercases the string. Alias for `.lower()`.
   *
   * @returns {Str}
   */
  lowercase() {
    return this.toLowerCase();
  }
  /**
   * Removes whitespaces from the front/start of the string when
   * no argument is present. It trims the provided `characters`
   * from the left of the string if you pass along a value.
   *
   * @param {String} characters
   *
   * @returns {Str}
   */
  ltrim(e = "") {
    if (!e)
      return new te(this.value.trimStart());
    for (; this.startsWith(e); )
      this.value = this.slice(e.length).get();
    return new te(this.value);
  }
  /**
   * Pad both sides, left and right, of the string with the given `pad` string (repeatedly
   * if needed) so that the resulting string reaches a given `length`.
   *
   * @param {Number} length
   * @param {String} pad
   *
   * @returns {Str}
   */
  padBoth(e = 0, t = " ") {
    return e <= this.length() ? this : this.padLeft((this.length() + e) / 2, t).padRight(e, t);
  }
  /**
   * Pad the left side of the string with the given `pad` string (repeatedly
   * if needed) so that the resulting string reaches a given `length`.
   *
   * @param {Number} length
   * @param {String} pad
   *
   * @returns {Str}
   */
  padLeft(e, t = " ") {
    return new te(this.value.padStart(e, t));
  }
  /**
   * Pad the right side of the string with the given `pad` string (repeatedly
   * if needed) so that the resulting string reaches a given `length`.
   *
   * @param {Number} length
   * @param {String} pad
   *
   * @returns {Str}
   */
  padRight(e, t = " ") {
    return new te(this.value.padEnd(e, t));
  }
  /**
   * Parse a Class[@]method style string into the Class and method names.
   *
   * @returns {String[]}
   */
  parseCallback(e = "@", t) {
    if (this.notContains(e))
      return [this.value, t];
    const [i, r] = this.split(e, 2);
    return [i, r];
  }
  /**
   * Convert the string to PascalCase (same as StudlyCase). Alias for `.studly()`.
   *
   * @returns {Str}
   */
  pascal() {
    return this.studly();
  }
  /**
   * Prepend the given values to the string.
   *
   * @param {any[]} values
   *
   * @return {Str}
   */
  prepend(...e) {
    return new te([].concat(...e).join("") + this.value);
  }
  /**
   * Create a random, URL-friendly string. The default length will have 21 symbols.
   *
   * @param {Number} [lengthOrCallback=21] number of symbols in string
   *
   * @returns {String}
   */
  random(e) {
    const t = new Xi.RandomStringConfig(), i = new Zi.RandomStringBuilder(t);
    return e || i.characters().numbers().symbols(), typeof e == "function" && e(i), typeof e == "number" && i.characters().numbers().symbols().length(e), this.generateRandom(t);
  }
  /**
   * Create a random, URL-friendly string. The default length will have 21 symbols.
   *
   * @param {Number} [size=21] number of symbols in string
   *
   * @returns {String}
   */
  generateRandom(e) {
    return new en.RandomStringGenerator(te, e).generate();
  }
  replace(e, t) {
    return t == null ? new ut.StringReplacer(this, e) : new te(this.value.replace(e, t));
  }
  replaceAll(e, t) {
    if (t == null)
      return new ut.StringReplacer(this, e).all();
    const i = new RegExp(e, "g");
    return new te(this.value.replace(i, t));
  }
  replaceLast(e, t) {
    return t == null ? new ut.StringReplacer(this, e).last() : this.notContains(e.toString()) ? this : new te(this.beforeLast(e.toString()).get() + t + this.afterLast(e.toString()).get());
  }
  /**
   * Returns the reversed string.
   *
   * @returns {Str}
   */
  reverse() {
    return new te(this.chars().reverse().join(""));
  }
  /**
  * Removes whitespaces from the tail or end of the string when
  * no argument is present. It trims the provided `characters`
  * from the left of the string if you pass along a value.
    *
    * @param {String} characters
    *
    * @returns {Str}
    */
  rtrim(e = "") {
    if (!e)
      return new te(this.value.trimEnd());
    for (; this.endsWith(e); )
      this.value = this.replaceLast(e).with("").get();
    return new te(this.value);
  }
  /**
   * Shuffles the characters of the string using the Fisher-Yates
   * shuffle algorithm (also known as the Knuth-Shuffle).
   *
   * @returns {Str}
   */
  shuffle() {
    const e = this.chars();
    let t = e.length;
    for (; t; ) {
      const i = Math.floor(Math.random() * t--), r = e[t];
      e[t] = e[i], e[i] = r;
    }
    return new te(e.join(""));
  }
  /**
   * Returns a section of the string starting from the given `start` until the given `end`.
   *
   * @param {Number} start
   * @param {Number} end
   *
   * @returns {Str}
   */
  slice(e, t) {
    return new te(this.value.slice(e, t));
  }
  /**
   * Convert the string to a URL-friendly “slug” in kebab-case.
   *
   * @param {String} separator
   *
   * @returns {Str}
   */
  slug(e = "-") {
    return this.kebab(e);
  }
  /**
   * Convert the string to snake_case.
   *
   * @returns {Str}
   */
  snake() {
    return new te(this.value.replace(/[_-\s]+/g, "_")).strip().toLowerCase();
  }
  /**
   * Splits up the string into an array of strings by separating
   * the string at each of the specified `separator` string.
   *
   * @param {String|RegExp} separator
   * @param {Number} limit
   *
   * @returns {String[]}
   */
  split(e, t) {
    return this.value.split(e, t);
  }
  /**
   * Split up the camelCased string into an array of strings.
   *
   * @returns {String[]}
   */
  splitCamel() {
    return this.split(new RegExp("([^\\p{L}\\d]+|(?<=\\p{L})(?=\\d)|(?<=\\d)(?=\\p{L})|(?<=[\\p{Ll}\\d])(?=\\p{Lu})|(?<=\\p{Lu})(?=\\p{Lu}\\p{Ll})|(?<=[\\p{L}\\d])(?=\\p{Lu}\\p{Ll}))", "gu")).map((e) => e.trim()).filter((e) => e.match(new RegExp(this.ALPHANUMERIC_PATTERN, "g")));
  }
  /**
   * Removes all extra spaces from the string and leaves a single space at the
   * position. In contrast to `stripExtraSpaces`, this method also strips a
   * leading or trailing space of the given string.
   *
   * @returns {Str}
   */
  squish() {
    return this.stripExtraSpaces().trim();
  }
  /**
   * Prepends a single instance of the given `prefix` to the start of
   * the string if it doesn’t already start with the given prefix.
   *
   * @param {String} prefix
   *
   * @returns {Str}
   */
  start(e) {
    return this.startsWith(e) ? this : this.prepend(e);
  }
  /**
   * Determine whether the string starts with the given `needle`.
   * Optionally, accepts the position in the string at which
   * to begin searching for the `needle` (defaults to `0`).
   *
   * @param {*} needle
   * @param {Number} position
   *
   * @returns {Boolean}
   */
  startsWith(e, t) {
    return this.value.startsWith(e, t);
  }
  /**
   * Determine whether the string starts with the byte order mark (BOM).
   *
   * @returns {Boolean}
   */
  startsWithBom() {
    return this.value.charCodeAt(0) === this.bomCharCode();
  }
  /**
   * Removes all whitespace from the string, everywhere.
   *
   * @returns {Str}
   */
  strip() {
    return new te(this.value.replace(/\s+/g, ""));
  }
  /**
   * Removes the byte order mark (BOM) from the beginning of the string.
   *
   * @returns {Str}
   */
  stripBom() {
    return this.startsWithBom() ? new te(this.slice(1)) : this;
  }
  /**
   * Removes HTML tags from the string.
   *
   * @returns {Str}
   */
  stripHtml() {
    return this.replace(/(<([^>]+)>)/gi, "");
  }
  /**
   * Removes all numbers from the string.
   *
   * @returns {Str}
   */
  stripNums() {
    return this.replaceAll(/\d+/, "");
  }
  /**
   * Removes all extra spaces from the string and leaves a single space at the position.
   *
   * @returns {Str}
   */
  stripExtraSpaces() {
    return new te(this.value.replace(/\s+/g, " "));
  }
  /**
   * Convert the string to StudlyCase. StudlyCase is similar to camelCase
   * except that the first character is uppercase instead of lowercase.
   *
   * @returns {Str}
   */
  studly() {
    return this.camel().ucFirst();
  }
  /**
   * Returns the substring.
   *
   * @param {Number} start
   * @param {Number} length
   *
   * @returns {Str}
   */
  substr(e, t) {
    return new te(this.value.substring(e, t));
  }
  /**
   * Convert the string to title case.
   *
   * @returns {Str}
   */
  title() {
    return new te(this.split(" ").filter((e) => e).map((e) => new te(e)).map((e) => (e.isUpper() || (e = e.lower().replace(this.ALPHANUMERIC_PATTERN, (t) => t.toUpperCase())), e.get())).join(" "));
  }
  /**
   * Lowercases the string. Alias for `.lower()` and convenience
   * method to comply with the global String’s `.toLowerCase()`.
   *
   * @returns {Str}
   */
  toLowerCase() {
    return new te(this.value.toLowerCase());
  }
  /**
   * Uppercases the string. Alias for `.upper()` and convenience
   * method to comply with the global String’s `.toUpperCase()`.
   *
   * @returns {Str}
   */
  toUpperCase() {
    return new te(this.value.toUpperCase());
  }
  /**
   * Removes whitespace around the string, front and back when no argument
   * is present. It trims the given `characters` from the left and right
   * of the string if you pass along a value.
   *
   * @param {String} characters
   *
   * @returns {Str}
   */
  trim(e = "") {
    return this.ltrim(e).rtrim(e);
  }
  /**
   * Uppercases the first character in the string.
   *
   * @returns {Str}
   */
  ucFirst() {
    return this.isEmpty() ? this : new te(this.value[0].toUpperCase() + this.value.slice(1));
  }
  /**
   * Uppercases the string.
   *
   * @returns {Str}
   */
  upper() {
    return this.toUpperCase();
  }
  /**
   * Uppercases the string. Alias for `.upper()`.
   *
   * @returns {Str}
   */
  uppercase() {
    return this.toUpperCase();
  }
  /**
   * Create a UUID (version 4).
   *
   * @returns {String}
   */
  uuid() {
    return (0, mt.v4)();
  }
  /**
   * Determine whether the given string is a valid UUID (no matter what version).
   *
   * @returns {Boolean}
   */
  isUuid() {
    return (0, mt.validate)(this.value);
  }
  /**
   * Returns the list of words for the given string.
   *
   * @returns {String[]}
   */
  words() {
    return this.splitCamel();
  }
}
De.Str = te;
Object.defineProperty(je, "__esModule", { value: !0 });
je.Str = void 0;
const tn = De, be = (o) => new tn.Str(o);
je.Str = be;
be.uuid = () => be().uuid();
be.random = (o) => be().random(o);
be.isString = (o) => be().isString(o);
be.isAlphaNumeric = (o) => be().isAlphaNumeric(o);
be.isSymbol = (o) => be().isSymbol(o);
var nn = je.default = be;
const gt = () => process.env.NODE_ENV === "test", rn = () => "id-" + (Math.random() + 1).toString(36).substring(7), xt = (o) => nn(o).isCamel(), Tt = (o) => /^([a-z]{1,})(_[a-z0-9]{1,})*$/.test(o), At = (o) => {
  let e = null;
  return Object.entries(o).forEach(([t, i]) => {
    if (i.type === "repeat") {
      const n = At(i.questions);
      n && (e = n);
    }
    !xt(t) && !Tt(t) && (e = t);
  }), e;
}, St = (o) => {
  const e = Object.values(o);
  let t = [];
  const i = e.map((r, n) => e.find((a, p) => {
    if (a.type === "repeat" && (t = St(a.questions)), n !== p && a.id === r.id)
      return r;
  })).filter(Boolean);
  return t.length && i.push(...t), i;
}, sn = (o) => {
  var i;
  const e = St(o);
  if (e.length)
    throw new Error(`Duplicated id values: ${(i = e[0]) == null ? void 0 : i.id}`);
  const t = At(o);
  if (t)
    throw new Error(`ID must be in camel case: ${t}`);
  return !0;
}, on = (o, e, t) => o < e ? (gt() || console.warn(`Value ${o} is lower than min ${e}. Returning min.`), e) : o > t ? (gt() || console.warn(`Value ${o} is higher than max ${t}. Returning max.`), t) : o, an = (o, e) => {
  if (e.type === "repeat" && isNaN(o))
    throw new Error("Value of repeat question must be a number");
}, pt = class {
  constructor() {
    ae(this, "subscribers");
    this.subscribers = {};
  }
  dispatch(e, t) {
    const i = this.subscribers[e];
    i !== void 0 && Object.keys(i).forEach((r) => i[r](t));
  }
  register(e, t) {
    const i = this.getNextId();
    return this.subscribers[e] || (this.subscribers[e] = {}), this.subscribers[e][i] = t, {
      unregister: () => {
        delete this.subscribers[e][i], Object.keys(this.subscribers[e]).length === 0 && delete this.subscribers[e];
      }
    };
  }
  getNextId() {
    return pt.nextId++;
  }
};
let Me = pt;
ae(Me, "nextId", 0);
const ln = {
  text: !0,
  multipleChoice: !0,
  number: !0,
  date: !0,
  repeat: !0
}, un = (o, e = !1) => {
  if (!ln[o.type])
    throw new Error("Invalid question type");
  const t = o.id || rn();
  let i;
  return o.type === "text" ? i = ft(o) : o.type === "date" ? i = cn(o) : o.type === "multipleChoice" ? i = fn(o) : o.type === "repeat" ? i = hn(o) : i = ft(o), {
    id: t,
    type: o.type,
    title: o.title || "",
    indications: o.indications || "",
    logic: o.logic || {},
    options: o.options || {},
    indexInsideRepeat: o.indexInsideRepeat || null,
    ...i
  };
}, ft = (o) => ({
  value: o.value || "",
  required: Boolean(o.required),
  placeholder: o.placeholder || "",
  subType: o.subType || ""
}), cn = (o) => ({
  format: o.format || "dd/mm/yyyy",
  ...ft(o)
}), fn = (o) => {
  var e, t;
  if (o.subType === "multiSelect") {
    const i = o.values || [];
    return (e = o.choices) == null || e.forEach((r) => {
      const n = i.includes(r.label);
      r.checked && !n && i.push(r.label), r.checked = n || r.checked;
    }), {
      value: "",
      values: i,
      choices: o.choices || [],
      subType: o.subType
    };
  }
  return {
    value: ((t = o.choices.find((i) => i.checked === !0)) == null ? void 0 : t.label) || "",
    choices: o.choices || [],
    subType: o.subType || "radio"
  };
}, hn = (o) => ({
  value: o.value || "",
  range: o.range || { min: 0, max: 0 },
  questions: o.questions || {}
}), pn = (o, e, t = null) => {
  const i = JSON.parse(JSON.stringify(o));
  return Object.entries(i).forEach(([r, n]) => {
    const a = e + 1;
    n.title && (n.title = n.title.replace(/\<%= index %>/g, a.toString())), t ? n.indexInsideRepeat = t + `.${a}` : n.indexInsideRepeat = a.toString();
  }), i;
};
var Ke = {}, dn = {
  get exports() {
    return Ke;
  },
  set exports(o) {
    Ke = o;
  }
};
/*! Browser bundle of nunjucks 3.2.4  */
(function(o, e) {
  (function(i, r) {
    o.exports = r();
  })(typeof self < "u" ? self : ct, function() {
    return (
      /******/
      function(t) {
        var i = {};
        function r(n) {
          if (i[n])
            return i[n].exports;
          var a = i[n] = {
            /******/
            i: n,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return t[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
        }
        return r.m = t, r.c = i, r.d = function(n, a, p) {
          r.o(n, a) || Object.defineProperty(n, a, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: p
            /******/
          });
        }, r.n = function(n) {
          var a = n && n.__esModule ? (
            /******/
            function() {
              return n.default;
            }
          ) : (
            /******/
            function() {
              return n;
            }
          );
          return r.d(a, "a", a), a;
        }, r.o = function(n, a) {
          return Object.prototype.hasOwnProperty.call(n, a);
        }, r.p = "", r(r.s = 11);
      }([
        /* 0 */
        /***/
        function(t, m, r) {
          var n = Array.prototype, a = Object.prototype, p = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\\": "&#92;"
          }, g = /[&"'<>\\]/g, m = t.exports = {};
          function L(E, C) {
            return a.hasOwnProperty.call(E, C);
          }
          m.hasOwnProp = L;
          function S(E) {
            return p[E];
          }
          function P(E, C, j) {
            if (j.Update || (j = new m.TemplateError(j)), j.Update(E), !C) {
              var D = j;
              j = new Error(D.message), j.name = D.name;
            }
            return j;
          }
          m._prettifyError = P;
          function I(E, C, j) {
            var D, Q;
            E instanceof Error && (Q = E, E = Q.name + ": " + Q.message), Object.setPrototypeOf ? (D = new Error(E), Object.setPrototypeOf(D, I.prototype)) : (D = this, Object.defineProperty(D, "message", {
              enumerable: !1,
              writable: !0,
              value: E
            })), Object.defineProperty(D, "name", {
              value: "Template render error"
            }), Error.captureStackTrace && Error.captureStackTrace(D, this.constructor);
            var ie;
            if (Q) {
              var z = Object.getOwnPropertyDescriptor(Q, "stack");
              ie = z && (z.get || function() {
                return z.value;
              }), ie || (ie = function() {
                return Q.stack;
              });
            } else {
              var ce = new Error(E).stack;
              ie = function() {
                return ce;
              };
            }
            return Object.defineProperty(D, "stack", {
              get: function() {
                return ie.call(D);
              }
            }), Object.defineProperty(D, "cause", {
              value: Q
            }), D.lineno = C, D.colno = j, D.firstUpdate = !0, D.Update = function(X) {
              var Z = "(" + (X || "unknown path") + ")";
              return this.firstUpdate && (this.lineno && this.colno ? Z += " [Line " + this.lineno + ", Column " + this.colno + "]" : this.lineno && (Z += " [Line " + this.lineno + "]")), Z += `
 `, this.firstUpdate && (Z += " "), this.message = Z + (this.message || ""), this.firstUpdate = !1, this;
            }, D;
          }
          Object.setPrototypeOf ? Object.setPrototypeOf(I.prototype, Error.prototype) : I.prototype = Object.create(Error.prototype, {
            constructor: {
              value: I
            }
          }), m.TemplateError = I;
          function T(E) {
            return E.replace(g, S);
          }
          m.escape = T;
          function R(E) {
            return a.toString.call(E) === "[object Function]";
          }
          m.isFunction = R;
          function s(E) {
            return a.toString.call(E) === "[object Array]";
          }
          m.isArray = s;
          function u(E) {
            return a.toString.call(E) === "[object String]";
          }
          m.isString = u;
          function c(E) {
            return a.toString.call(E) === "[object Object]";
          }
          m.isObject = c;
          function k(E) {
            return E ? typeof E == "string" ? E.split(".") : [E] : [];
          }
          function y(E) {
            var C = k(E);
            return function(D) {
              for (var Q = D, ie = 0; ie < C.length; ie++) {
                var z = C[ie];
                if (L(Q, z))
                  Q = Q[z];
                else
                  return;
              }
              return Q;
            };
          }
          m.getAttrGetter = y;
          function b(E, C, j) {
            for (var D = {}, Q = R(C) ? C : y(C), ie = 0; ie < E.length; ie++) {
              var z = E[ie], ce = Q(z, ie);
              if (ce === void 0 && j === !0)
                throw new TypeError('groupby: attribute "' + C + '" resolved to undefined');
              (D[ce] || (D[ce] = [])).push(z);
            }
            return D;
          }
          m.groupBy = b;
          function l(E) {
            return Array.prototype.slice.call(E);
          }
          m.toArray = l;
          function f(E) {
            var C = [];
            if (!E)
              return C;
            for (var j = E.length, D = l(arguments).slice(1), Q = -1; ++Q < j; )
              A(D, E[Q]) === -1 && C.push(E[Q]);
            return C;
          }
          m.without = f;
          function v(E, C) {
            for (var j = "", D = 0; D < C; D++)
              j += E;
            return j;
          }
          m.repeat = v;
          function h(E, C, j) {
            if (E != null) {
              if (n.forEach && E.forEach === n.forEach)
                E.forEach(C, j);
              else if (E.length === +E.length)
                for (var D = 0, Q = E.length; D < Q; D++)
                  C.call(j, E[D], D, E);
            }
          }
          m.each = h;
          function d(E, C) {
            var j = [];
            if (E == null)
              return j;
            if (n.map && E.map === n.map)
              return E.map(C);
            for (var D = 0; D < E.length; D++)
              j[j.length] = C(E[D], D);
            return E.length === +E.length && (j.length = E.length), j;
          }
          m.map = d;
          function _(E, C, j) {
            var D = -1;
            function Q() {
              D++, D < E.length ? C(E[D], D, Q, j) : j();
            }
            Q();
          }
          m.asyncIter = _;
          function w(E, C, j) {
            var D = B(E || {}), Q = D.length, ie = -1;
            function z() {
              ie++;
              var ce = D[ie];
              ie < Q ? C(ce, E[ce], ie, Q, z) : j();
            }
            z();
          }
          m.asyncFor = w;
          function A(E, C, j) {
            return Array.prototype.indexOf.call(E || [], C, j);
          }
          m.indexOf = A;
          function B(E) {
            var C = [];
            for (var j in E)
              L(E, j) && C.push(j);
            return C;
          }
          m.keys = B;
          function N(E) {
            return B(E).map(function(C) {
              return [C, E[C]];
            });
          }
          m._entries = N;
          function F(E) {
            return B(E).map(function(C) {
              return E[C];
            });
          }
          m._values = F;
          function K(E, C) {
            return E = E || {}, B(C).forEach(function(j) {
              E[j] = C[j];
            }), E;
          }
          m._assign = m.extend = K;
          function x(E, C) {
            if (s(C) || u(C))
              return C.indexOf(E) !== -1;
            if (c(C))
              return E in C;
            throw new Error('Cannot use "in" operator to search for "' + E + '" in unexpected types.');
          }
          m.inOperator = x;
        },
        /* 1 */
        /***/
        function(t, i, r) {
          function n(u, c) {
            for (var k = 0; k < c.length; k++) {
              var y = c[k];
              y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(u, p(y.key), y);
            }
          }
          function a(u, c, k) {
            return c && n(u.prototype, c), k && n(u, k), Object.defineProperty(u, "prototype", { writable: !1 }), u;
          }
          function p(u) {
            var c = g(u, "string");
            return typeof c == "symbol" ? c : String(c);
          }
          function g(u, c) {
            if (typeof u != "object" || u === null)
              return u;
            var k = u[Symbol.toPrimitive];
            if (k !== void 0) {
              var y = k.call(u, c || "default");
              if (typeof y != "object")
                return y;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (c === "string" ? String : Number)(u);
          }
          function m(u, c) {
            u.prototype = Object.create(c.prototype), u.prototype.constructor = u, L(u, c);
          }
          function L(u, c) {
            return L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, b) {
              return y.__proto__ = b, y;
            }, L(u, c);
          }
          var S = r(16), P = r(0);
          function I(u, c) {
            return typeof u != "function" || typeof c != "function" ? c : function() {
              var y = this.parent;
              this.parent = u;
              var b = c.apply(this, arguments);
              return this.parent = y, b;
            };
          }
          function T(u, c, k) {
            k = k || {}, P.keys(k).forEach(function(b) {
              k[b] = I(u.prototype[b], k[b]);
            });
            var y = /* @__PURE__ */ function(b) {
              m(l, b);
              function l() {
                return b.apply(this, arguments) || this;
              }
              return a(l, [{
                key: "typename",
                get: function() {
                  return c;
                }
              }]), l;
            }(u);
            return P._assign(y.prototype, k), y;
          }
          var R = /* @__PURE__ */ function() {
            function u() {
              this.init.apply(this, arguments);
            }
            var c = u.prototype;
            return c.init = function() {
            }, u.extend = function(y, b) {
              return typeof y == "object" && (b = y, y = "anonymous"), T(this, y, b);
            }, a(u, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), u;
          }(), s = /* @__PURE__ */ function(u) {
            m(c, u);
            function c() {
              var y, b;
              return b = u.call(this) || this, (y = b).init.apply(y, arguments), b;
            }
            var k = c.prototype;
            return k.init = function() {
            }, c.extend = function(b, l) {
              return typeof b == "object" && (l = b, b = "anonymous"), T(this, b, l);
            }, a(c, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), c;
          }(S);
          t.exports = {
            Obj: R,
            EmitterObj: s
          };
        },
        /* 2 */
        /***/
        function(t, i, r) {
          var n = r(0), a = Array.from, p = typeof Symbol == "function" && Symbol.iterator && typeof a == "function", g = /* @__PURE__ */ function() {
            function d(w, A) {
              this.variables = /* @__PURE__ */ Object.create(null), this.parent = w, this.topLevel = !1, this.isolateWrites = A;
            }
            var _ = d.prototype;
            return _.set = function(A, B, N) {
              var F = A.split("."), K = this.variables, x = this;
              if (N && (x = this.resolve(F[0], !0))) {
                x.set(A, B);
                return;
              }
              for (var E = 0; E < F.length - 1; E++) {
                var C = F[E];
                K[C] || (K[C] = {}), K = K[C];
              }
              K[F[F.length - 1]] = B;
            }, _.get = function(A) {
              var B = this.variables[A];
              return B !== void 0 ? B : null;
            }, _.lookup = function(A) {
              var B = this.parent, N = this.variables[A];
              return N !== void 0 ? N : B && B.lookup(A);
            }, _.resolve = function(A, B) {
              var N = B && this.isolateWrites ? void 0 : this.parent, F = this.variables[A];
              return F !== void 0 ? this : N && N.resolve(A);
            }, _.push = function(A) {
              return new d(this, A);
            }, _.pop = function() {
              return this.parent;
            }, d;
          }();
          function m(d, _, w) {
            return function() {
              for (var B = arguments.length, N = new Array(B), F = 0; F < B; F++)
                N[F] = arguments[F];
              var K = I(N), x, E = P(N);
              if (K > d.length)
                x = N.slice(0, d.length), N.slice(x.length, K).forEach(function(D, Q) {
                  Q < _.length && (E[_[Q]] = D);
                }), x.push(E);
              else if (K < d.length) {
                x = N.slice(0, K);
                for (var C = K; C < d.length; C++) {
                  var j = d[C];
                  x.push(E[j]), delete E[j];
                }
                x.push(E);
              } else
                x = N;
              return w.apply(this, x);
            };
          }
          function L(d) {
            return d.__keywords = !0, d;
          }
          function S(d) {
            return d && Object.prototype.hasOwnProperty.call(d, "__keywords");
          }
          function P(d) {
            var _ = d.length;
            if (_) {
              var w = d[_ - 1];
              if (S(w))
                return w;
            }
            return {};
          }
          function I(d) {
            var _ = d.length;
            if (_ === 0)
              return 0;
            var w = d[_ - 1];
            return S(w) ? _ - 1 : _;
          }
          function T(d) {
            if (typeof d != "string")
              return d;
            this.val = d, this.length = d.length;
          }
          T.prototype = Object.create(String.prototype, {
            length: {
              writable: !0,
              configurable: !0,
              value: 0
            }
          }), T.prototype.valueOf = function() {
            return this.val;
          }, T.prototype.toString = function() {
            return this.val;
          };
          function R(d, _) {
            return d instanceof T ? new T(_) : _.toString();
          }
          function s(d) {
            var _ = typeof d;
            return _ === "string" ? new T(d) : _ !== "function" ? d : function(A) {
              var B = d.apply(this, arguments);
              return typeof B == "string" ? new T(B) : B;
            };
          }
          function u(d, _) {
            return d = d ?? "", _ && !(d instanceof T) && (d = n.escape(d.toString())), d;
          }
          function c(d, _, w) {
            if (d == null)
              throw new n.TemplateError("attempted to output null or undefined value", _ + 1, w + 1);
            return d;
          }
          function k(d, _) {
            if (d != null)
              return typeof d[_] == "function" ? function() {
                for (var w = arguments.length, A = new Array(w), B = 0; B < w; B++)
                  A[B] = arguments[B];
                return d[_].apply(d, A);
              } : d[_];
          }
          function y(d, _, w, A) {
            if (d) {
              if (typeof d != "function")
                throw new Error("Unable to call `" + _ + "`, which is not a function");
            } else
              throw new Error("Unable to call `" + _ + "`, which is undefined or falsey");
            return d.apply(w, A);
          }
          function b(d, _, w) {
            var A = _.lookup(w);
            return A !== void 0 ? A : d.lookup(w);
          }
          function l(d, _, w) {
            return d.lineno ? d : new n.TemplateError(d, _, w);
          }
          function f(d, _, w, A) {
            if (n.isArray(d)) {
              var B = d.length;
              n.asyncIter(d, function(F, K, x) {
                switch (_) {
                  case 1:
                    w(F, K, B, x);
                    break;
                  case 2:
                    w(F[0], F[1], K, B, x);
                    break;
                  case 3:
                    w(F[0], F[1], F[2], K, B, x);
                    break;
                  default:
                    F.push(K, B, x), w.apply(this, F);
                }
              }, A);
            } else
              n.asyncFor(d, function(F, K, x, E, C) {
                w(F, K, x, E, C);
              }, A);
          }
          function v(d, _, w, A) {
            var B = 0, N, F;
            function K(Q, ie) {
              B++, F[Q] = ie, B === N && A(null, F.join(""));
            }
            if (n.isArray(d))
              if (N = d.length, F = new Array(N), N === 0)
                A(null, "");
              else
                for (var x = 0; x < d.length; x++) {
                  var E = d[x];
                  switch (_) {
                    case 1:
                      w(E, x, N, K);
                      break;
                    case 2:
                      w(E[0], E[1], x, N, K);
                      break;
                    case 3:
                      w(E[0], E[1], E[2], x, N, K);
                      break;
                    default:
                      E.push(x, N, K), w.apply(this, E);
                  }
                }
            else {
              var C = n.keys(d || {});
              if (N = C.length, F = new Array(N), N === 0)
                A(null, "");
              else
                for (var j = 0; j < C.length; j++) {
                  var D = C[j];
                  w(D, d[D], j, N, K);
                }
            }
          }
          function h(d) {
            return typeof d != "object" || d === null || n.isArray(d) ? d : p && Symbol.iterator in d ? a(d) : d;
          }
          t.exports = {
            Frame: g,
            makeMacro: m,
            makeKeywordArgs: L,
            numArgs: I,
            suppressValue: u,
            ensureDefined: c,
            memberLookup: k,
            contextOrFrameLookup: b,
            callWrap: y,
            handleError: l,
            isArray: n.isArray,
            keys: n.keys,
            SafeString: T,
            copySafeness: R,
            markSafe: s,
            asyncEach: f,
            asyncAll: v,
            inOperator: n.inOperator,
            fromIterator: h
          };
        },
        /* 3 */
        /***/
        function(t, i, r) {
          function n(q, H) {
            for (var re = 0; re < H.length; re++) {
              var ne = H[re];
              ne.enumerable = ne.enumerable || !1, ne.configurable = !0, "value" in ne && (ne.writable = !0), Object.defineProperty(q, p(ne.key), ne);
            }
          }
          function a(q, H, re) {
            return H && n(q.prototype, H), re && n(q, re), Object.defineProperty(q, "prototype", { writable: !1 }), q;
          }
          function p(q) {
            var H = g(q, "string");
            return typeof H == "symbol" ? H : String(H);
          }
          function g(q, H) {
            if (typeof q != "object" || q === null)
              return q;
            var re = q[Symbol.toPrimitive];
            if (re !== void 0) {
              var ne = re.call(q, H || "default");
              if (typeof ne != "object")
                return ne;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (H === "string" ? String : Number)(q);
          }
          function m(q, H) {
            q.prototype = Object.create(H.prototype), q.prototype.constructor = q, L(q, H);
          }
          function L(q, H) {
            return L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(ne, oe) {
              return ne.__proto__ = oe, ne;
            }, L(q, H);
          }
          var S = r(1), P = S.Obj;
          function I(q, H, re) {
            q instanceof H && re.push(q), q instanceof T && q.findAll(H, re);
          }
          var T = /* @__PURE__ */ function(q) {
            m(H, q);
            function H() {
              return q.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, fe) {
              for (var _e = arguments, Se = this, Ne = arguments.length, Kt = new Array(Ne > 2 ? Ne - 2 : 0), Be = 2; Be < Ne; Be++)
                Kt[Be - 2] = arguments[Be];
              this.lineno = oe, this.colno = fe, this.fields.forEach(function(jt, Dt) {
                var rt = _e[Dt + 2];
                rt === void 0 && (rt = null), Se[jt] = rt;
              });
            }, re.findAll = function(oe, fe) {
              var _e = this;
              return fe = fe || [], this instanceof s ? this.children.forEach(function(Se) {
                return I(Se, oe, fe);
              }) : this.fields.forEach(function(Se) {
                return I(_e[Se], oe, fe);
              }), fe;
            }, re.iterFields = function(oe) {
              var fe = this;
              this.fields.forEach(function(_e) {
                oe(fe[_e], _e);
              });
            }, H;
          }(P), R = /* @__PURE__ */ function(q) {
            m(H, q);
            function H() {
              return q.apply(this, arguments) || this;
            }
            return a(H, [{
              key: "typename",
              get: function() {
                return "Value";
              }
            }, {
              key: "fields",
              get: function() {
                return ["value"];
              }
            }]), H;
          }(T), s = /* @__PURE__ */ function(q) {
            m(H, q);
            function H() {
              return q.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, fe, _e) {
              q.prototype.init.call(this, oe, fe, _e || []);
            }, re.addChild = function(oe) {
              this.children.push(oe);
            }, a(H, [{
              key: "typename",
              get: function() {
                return "NodeList";
              }
            }, {
              key: "fields",
              get: function() {
                return ["children"];
              }
            }]), H;
          }(T), u = s.extend("Root"), c = R.extend("Literal"), k = R.extend("Symbol"), y = s.extend("Group"), b = s.extend("Array"), l = T.extend("Pair", {
            fields: ["key", "value"]
          }), f = s.extend("Dict"), v = T.extend("LookupVal", {
            fields: ["target", "val"]
          }), h = T.extend("If", {
            fields: ["cond", "body", "else_"]
          }), d = h.extend("IfAsync"), _ = T.extend("InlineIf", {
            fields: ["cond", "body", "else_"]
          }), w = T.extend("For", {
            fields: ["arr", "name", "body", "else_"]
          }), A = w.extend("AsyncEach"), B = w.extend("AsyncAll"), N = T.extend("Macro", {
            fields: ["name", "args", "body"]
          }), F = N.extend("Caller"), K = T.extend("Import", {
            fields: ["template", "target", "withContext"]
          }), x = /* @__PURE__ */ function(q) {
            m(H, q);
            function H() {
              return q.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, fe, _e, Se, Ne) {
              q.prototype.init.call(this, oe, fe, _e, Se || new s(), Ne);
            }, a(H, [{
              key: "typename",
              get: function() {
                return "FromImport";
              }
            }, {
              key: "fields",
              get: function() {
                return ["template", "names", "withContext"];
              }
            }]), H;
          }(T), E = T.extend("FunCall", {
            fields: ["name", "args"]
          }), C = E.extend("Filter"), j = C.extend("FilterAsync", {
            fields: ["name", "args", "symbol"]
          }), D = f.extend("KeywordArgs"), Q = T.extend("Block", {
            fields: ["name", "body"]
          }), ie = T.extend("Super", {
            fields: ["blockName", "symbol"]
          }), z = T.extend("TemplateRef", {
            fields: ["template"]
          }), ce = z.extend("Extends"), pe = T.extend("Include", {
            fields: ["template", "ignoreMissing"]
          }), X = T.extend("Set", {
            fields: ["targets", "value"]
          }), Z = T.extend("Switch", {
            fields: ["expr", "cases", "default"]
          }), $ = T.extend("Case", {
            fields: ["cond", "body"]
          }), W = s.extend("Output"), G = T.extend("Capture", {
            fields: ["body"]
          }), se = c.extend("TemplateData"), we = T.extend("UnaryOp", {
            fields: ["target"]
          }), he = T.extend("BinOp", {
            fields: ["left", "right"]
          }), Oe = he.extend("In"), O = he.extend("Is"), M = he.extend("Or"), V = he.extend("And"), U = we.extend("Not"), Y = he.extend("Add"), J = he.extend("Concat"), le = he.extend("Sub"), ee = he.extend("Mul"), ue = he.extend("Div"), Ee = he.extend("FloorDiv"), ke = he.extend("Mod"), Le = he.extend("Pow"), Nt = we.extend("Neg"), Pt = we.extend("Pos"), Bt = T.extend("Compare", {
            fields: ["expr", "ops"]
          }), Ft = T.extend("CompareOperand", {
            fields: ["expr", "type"]
          }), nt = T.extend("CallExtension", {
            init: function(H, re, ne, oe) {
              this.parent(), this.extName = H.__name || H, this.prop = re, this.args = ne || new s(), this.contentArgs = oe || [], this.autoescape = H.autoescape;
            },
            fields: ["extName", "prop", "args", "contentArgs"]
          }), Mt = nt.extend("CallExtensionAsync");
          function Ie(q, H, re) {
            var ne = q.split(`
`);
            ne.forEach(function(oe, fe) {
              oe && (re && fe > 0 || !re) && process.stdout.write(" ".repeat(H));
              var _e = fe === ne.length - 1 ? "" : `
`;
              process.stdout.write("" + oe + _e);
            });
          }
          function Re(q, H) {
            if (H = H || 0, Ie(q.typename + ": ", H), q instanceof s)
              Ie(`
`), q.children.forEach(function(oe) {
                Re(oe, H + 2);
              });
            else if (q instanceof nt)
              Ie(q.extName + "." + q.prop + `
`), q.args && Re(q.args, H + 2), q.contentArgs && q.contentArgs.forEach(function(oe) {
                Re(oe, H + 2);
              });
            else {
              var re = [], ne = null;
              q.iterFields(function(oe, fe) {
                oe instanceof T ? re.push([fe, oe]) : (ne = ne || {}, ne[fe] = oe);
              }), ne ? Ie(JSON.stringify(ne, null, 2) + `
`, null, !0) : Ie(`
`), re.forEach(function(oe) {
                var fe = oe[0], _e = oe[1];
                Ie("[" + fe + "] =>", H + 2), Re(_e, H + 4);
              });
            }
          }
          t.exports = {
            Node: T,
            Root: u,
            NodeList: s,
            Value: R,
            Literal: c,
            Symbol: k,
            Group: y,
            Array: b,
            Pair: l,
            Dict: f,
            Output: W,
            Capture: G,
            TemplateData: se,
            If: h,
            IfAsync: d,
            InlineIf: _,
            For: w,
            AsyncEach: A,
            AsyncAll: B,
            Macro: N,
            Caller: F,
            Import: K,
            FromImport: x,
            FunCall: E,
            Filter: C,
            FilterAsync: j,
            KeywordArgs: D,
            Block: Q,
            Super: ie,
            Extends: ce,
            Include: pe,
            Set: X,
            Switch: Z,
            Case: $,
            LookupVal: v,
            BinOp: he,
            In: Oe,
            Is: O,
            Or: M,
            And: V,
            Not: U,
            Add: Y,
            Concat: J,
            Sub: le,
            Mul: ee,
            Div: ue,
            FloorDiv: Ee,
            Mod: ke,
            Pow: Le,
            Neg: Nt,
            Pos: Pt,
            Compare: Bt,
            CompareOperand: Ft,
            CallExtension: nt,
            CallExtensionAsync: Mt,
            printNodes: Re
          };
        },
        /* 4 */
        /***/
        function(t, i) {
        },
        /* 5 */
        /***/
        function(t, i, r) {
          function n(c, k) {
            c.prototype = Object.create(k.prototype), c.prototype.constructor = c, a(c, k);
          }
          function a(c, k) {
            return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(b, l) {
              return b.__proto__ = l, b;
            }, a(c, k);
          }
          var p = r(8), g = r(17), m = r(3), L = r(0), S = L.TemplateError, P = r(2), I = P.Frame, T = r(1), R = T.Obj, s = {
            "==": "==",
            "===": "===",
            "!=": "!=",
            "!==": "!==",
            "<": "<",
            ">": ">",
            "<=": "<=",
            ">=": ">="
          }, u = /* @__PURE__ */ function(c) {
            n(k, c);
            function k() {
              return c.apply(this, arguments) || this;
            }
            var y = k.prototype;
            return y.init = function(l, f) {
              this.templateName = l, this.codebuf = [], this.lastId = 0, this.buffer = null, this.bufferStack = [], this._scopeClosers = "", this.inBlock = !1, this.throwOnUndefined = f;
            }, y.fail = function(l, f, v) {
              throw f !== void 0 && (f += 1), v !== void 0 && (v += 1), new S(l, f, v);
            }, y._pushBuffer = function() {
              var l = this._tmpid();
              return this.bufferStack.push(this.buffer), this.buffer = l, this._emit("var " + this.buffer + ' = "";'), l;
            }, y._popBuffer = function() {
              this.buffer = this.bufferStack.pop();
            }, y._emit = function(l) {
              this.codebuf.push(l);
            }, y._emitLine = function(l) {
              this._emit(l + `
`);
            }, y._emitLines = function() {
              for (var l = this, f = arguments.length, v = new Array(f), h = 0; h < f; h++)
                v[h] = arguments[h];
              v.forEach(function(d) {
                return l._emitLine(d);
              });
            }, y._emitFuncBegin = function(l, f) {
              this.buffer = "output", this._scopeClosers = "", this._emitLine("function " + f + "(env, context, frame, runtime, cb) {"), this._emitLine("var lineno = " + l.lineno + ";"), this._emitLine("var colno = " + l.colno + ";"), this._emitLine("var " + this.buffer + ' = "";'), this._emitLine("try {");
            }, y._emitFuncEnd = function(l) {
              l || this._emitLine("cb(null, " + this.buffer + ");"), this._closeScopeLevels(), this._emitLine("} catch (e) {"), this._emitLine("  cb(runtime.handleError(e, lineno, colno));"), this._emitLine("}"), this._emitLine("}"), this.buffer = null;
            }, y._addScopeLevel = function() {
              this._scopeClosers += "})";
            }, y._closeScopeLevels = function() {
              this._emitLine(this._scopeClosers + ";"), this._scopeClosers = "";
            }, y._withScopedSyntax = function(l) {
              var f = this._scopeClosers;
              this._scopeClosers = "", l.call(this), this._closeScopeLevels(), this._scopeClosers = f;
            }, y._makeCallback = function(l) {
              var f = this._tmpid();
              return "function(" + f + (l ? "," + l : "") + `) {
if(` + f + ") { cb(" + f + "); return; }";
            }, y._tmpid = function() {
              return this.lastId++, "t_" + this.lastId;
            }, y._templateName = function() {
              return this.templateName == null ? "undefined" : JSON.stringify(this.templateName);
            }, y._compileChildren = function(l, f) {
              var v = this;
              l.children.forEach(function(h) {
                v.compile(h, f);
              });
            }, y._compileAggregate = function(l, f, v, h) {
              var d = this;
              v && this._emit(v), l.children.forEach(function(_, w) {
                w > 0 && d._emit(","), d.compile(_, f);
              }), h && this._emit(h);
            }, y._compileExpression = function(l, f) {
              this.assertType(l, m.Literal, m.Symbol, m.Group, m.Array, m.Dict, m.FunCall, m.Caller, m.Filter, m.LookupVal, m.Compare, m.InlineIf, m.In, m.Is, m.And, m.Or, m.Not, m.Add, m.Concat, m.Sub, m.Mul, m.Div, m.FloorDiv, m.Mod, m.Pow, m.Neg, m.Pos, m.Compare, m.NodeList), this.compile(l, f);
            }, y.assertType = function(l) {
              for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), h = 1; h < f; h++)
                v[h - 1] = arguments[h];
              v.some(function(d) {
                return l instanceof d;
              }) || this.fail("assertType: invalid type: " + l.typename, l.lineno, l.colno);
            }, y.compileCallExtension = function(l, f, v) {
              var h = this, d = l.args, _ = l.contentArgs, w = typeof l.autoescape == "boolean" ? l.autoescape : !0;
              if (v || this._emit(this.buffer + " += runtime.suppressValue("), this._emit('env.getExtension("' + l.extName + '")["' + l.prop + '"]('), this._emit("context"), (d || _) && this._emit(","), d && (d instanceof m.NodeList || this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"), d.children.forEach(function(B, N) {
                h._compileExpression(B, f), (N !== d.children.length - 1 || _.length) && h._emit(",");
              })), _.length && _.forEach(function(B, N) {
                if (N > 0 && h._emit(","), B) {
                  h._emitLine("function(cb) {"), h._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");
                  var F = h._pushBuffer();
                  h._withScopedSyntax(function() {
                    h.compile(B, f), h._emitLine("cb(null, " + F + ");");
                  }), h._popBuffer(), h._emitLine("return " + F + ";"), h._emitLine("}");
                } else
                  h._emit("null");
              }), v) {
                var A = this._tmpid();
                this._emitLine(", " + this._makeCallback(A)), this._emitLine(this.buffer + " += runtime.suppressValue(" + A + ", " + w + " && env.opts.autoescape);"), this._addScopeLevel();
              } else
                this._emit(")"), this._emit(", " + w + ` && env.opts.autoescape);
`);
            }, y.compileCallExtensionAsync = function(l, f) {
              this.compileCallExtension(l, f, !0);
            }, y.compileNodeList = function(l, f) {
              this._compileChildren(l, f);
            }, y.compileLiteral = function(l) {
              if (typeof l.value == "string") {
                var f = l.value.replace(/\\/g, "\\\\");
                f = f.replace(/"/g, '\\"'), f = f.replace(/\n/g, "\\n"), f = f.replace(/\r/g, "\\r"), f = f.replace(/\t/g, "\\t"), f = f.replace(/\u2028/g, "\\u2028"), this._emit('"' + f + '"');
              } else
                l.value === null ? this._emit("null") : this._emit(l.value.toString());
            }, y.compileSymbol = function(l, f) {
              var v = l.value, h = f.lookup(v);
              h ? this._emit(h) : this._emit('runtime.contextOrFrameLookup(context, frame, "' + v + '")');
            }, y.compileGroup = function(l, f) {
              this._compileAggregate(l, f, "(", ")");
            }, y.compileArray = function(l, f) {
              this._compileAggregate(l, f, "[", "]");
            }, y.compileDict = function(l, f) {
              this._compileAggregate(l, f, "{", "}");
            }, y.compilePair = function(l, f) {
              var v = l.key, h = l.value;
              v instanceof m.Symbol ? v = new m.Literal(v.lineno, v.colno, v.value) : v instanceof m.Literal && typeof v.value == "string" || this.fail("compilePair: Dict keys must be strings or names", v.lineno, v.colno), this.compile(v, f), this._emit(": "), this._compileExpression(h, f);
            }, y.compileInlineIf = function(l, f) {
              this._emit("("), this.compile(l.cond, f), this._emit("?"), this.compile(l.body, f), this._emit(":"), l.else_ !== null ? this.compile(l.else_, f) : this._emit('""'), this._emit(")");
            }, y.compileIn = function(l, f) {
              this._emit("runtime.inOperator("), this.compile(l.left, f), this._emit(","), this.compile(l.right, f), this._emit(")");
            }, y.compileIs = function(l, f) {
              var v = l.right.name ? l.right.name.value : l.right.value;
              this._emit('env.getTest("' + v + '").call(context, '), this.compile(l.left, f), l.right.args && (this._emit(","), this.compile(l.right.args, f)), this._emit(") === true");
            }, y._binOpEmitter = function(l, f, v) {
              this.compile(l.left, f), this._emit(v), this.compile(l.right, f);
            }, y.compileOr = function(l, f) {
              return this._binOpEmitter(l, f, " || ");
            }, y.compileAnd = function(l, f) {
              return this._binOpEmitter(l, f, " && ");
            }, y.compileAdd = function(l, f) {
              return this._binOpEmitter(l, f, " + ");
            }, y.compileConcat = function(l, f) {
              return this._binOpEmitter(l, f, ' + "" + ');
            }, y.compileSub = function(l, f) {
              return this._binOpEmitter(l, f, " - ");
            }, y.compileMul = function(l, f) {
              return this._binOpEmitter(l, f, " * ");
            }, y.compileDiv = function(l, f) {
              return this._binOpEmitter(l, f, " / ");
            }, y.compileMod = function(l, f) {
              return this._binOpEmitter(l, f, " % ");
            }, y.compileNot = function(l, f) {
              this._emit("!"), this.compile(l.target, f);
            }, y.compileFloorDiv = function(l, f) {
              this._emit("Math.floor("), this.compile(l.left, f), this._emit(" / "), this.compile(l.right, f), this._emit(")");
            }, y.compilePow = function(l, f) {
              this._emit("Math.pow("), this.compile(l.left, f), this._emit(", "), this.compile(l.right, f), this._emit(")");
            }, y.compileNeg = function(l, f) {
              this._emit("-"), this.compile(l.target, f);
            }, y.compilePos = function(l, f) {
              this._emit("+"), this.compile(l.target, f);
            }, y.compileCompare = function(l, f) {
              var v = this;
              this.compile(l.expr, f), l.ops.forEach(function(h) {
                v._emit(" " + s[h.type] + " "), v.compile(h.expr, f);
              });
            }, y.compileLookupVal = function(l, f) {
              this._emit("runtime.memberLookup(("), this._compileExpression(l.target, f), this._emit("),"), this._compileExpression(l.val, f), this._emit(")");
            }, y._getNodeName = function(l) {
              switch (l.typename) {
                case "Symbol":
                  return l.value;
                case "FunCall":
                  return "the return value of (" + this._getNodeName(l.name) + ")";
                case "LookupVal":
                  return this._getNodeName(l.target) + '["' + this._getNodeName(l.val) + '"]';
                case "Literal":
                  return l.value.toString();
                default:
                  return "--expression--";
              }
            }, y.compileFunCall = function(l, f) {
              this._emit("(lineno = " + l.lineno + ", colno = " + l.colno + ", "), this._emit("runtime.callWrap("), this._compileExpression(l.name, f), this._emit(', "' + this._getNodeName(l.name).replace(/"/g, '\\"') + '", context, '), this._compileAggregate(l.args, f, "[", "])"), this._emit(")");
            }, y.compileFilter = function(l, f) {
              var v = l.name;
              this.assertType(v, m.Symbol), this._emit('env.getFilter("' + v.value + '").call(context, '), this._compileAggregate(l.args, f), this._emit(")");
            }, y.compileFilterAsync = function(l, f) {
              var v = l.name, h = l.symbol.value;
              this.assertType(v, m.Symbol), f.set(h, h), this._emit('env.getFilter("' + v.value + '").call(context, '), this._compileAggregate(l.args, f), this._emitLine(", " + this._makeCallback(h)), this._addScopeLevel();
            }, y.compileKeywordArgs = function(l, f) {
              this._emit("runtime.makeKeywordArgs("), this.compileDict(l, f), this._emit(")");
            }, y.compileSet = function(l, f) {
              var v = this, h = [];
              l.targets.forEach(function(d) {
                var _ = d.value, w = f.lookup(_);
                w == null && (w = v._tmpid(), v._emitLine("var " + w + ";")), h.push(w);
              }), l.value ? (this._emit(h.join(" = ") + " = "), this._compileExpression(l.value, f), this._emitLine(";")) : (this._emit(h.join(" = ") + " = "), this.compile(l.body, f), this._emitLine(";")), l.targets.forEach(function(d, _) {
                var w = h[_], A = d.value;
                v._emitLine('frame.set("' + A + '", ' + w + ", true);"), v._emitLine("if(frame.topLevel) {"), v._emitLine('context.setVariable("' + A + '", ' + w + ");"), v._emitLine("}"), A.charAt(0) !== "_" && (v._emitLine("if(frame.topLevel) {"), v._emitLine('context.addExport("' + A + '", ' + w + ");"), v._emitLine("}"));
              });
            }, y.compileSwitch = function(l, f) {
              var v = this;
              this._emit("switch ("), this.compile(l.expr, f), this._emit(") {"), l.cases.forEach(function(h, d) {
                v._emit("case "), v.compile(h.cond, f), v._emit(": "), v.compile(h.body, f), h.body.children.length && v._emitLine("break;");
              }), l.default && (this._emit("default:"), this.compile(l.default, f)), this._emit("}");
            }, y.compileIf = function(l, f, v) {
              var h = this;
              this._emit("if("), this._compileExpression(l.cond, f), this._emitLine(") {"), this._withScopedSyntax(function() {
                h.compile(l.body, f), v && h._emit("cb()");
              }), l.else_ ? (this._emitLine(`}
else {`), this._withScopedSyntax(function() {
                h.compile(l.else_, f), v && h._emit("cb()");
              })) : v && (this._emitLine(`}
else {`), this._emit("cb()")), this._emitLine("}");
            }, y.compileIfAsync = function(l, f) {
              this._emit("(function(cb) {"), this.compileIf(l, f, !0), this._emit("})(" + this._makeCallback()), this._addScopeLevel();
            }, y._emitLoopBindings = function(l, f, v, h) {
              var d = this, _ = [{
                name: "index",
                val: v + " + 1"
              }, {
                name: "index0",
                val: v
              }, {
                name: "revindex",
                val: h + " - " + v
              }, {
                name: "revindex0",
                val: h + " - " + v + " - 1"
              }, {
                name: "first",
                val: v + " === 0"
              }, {
                name: "last",
                val: v + " === " + h + " - 1"
              }, {
                name: "length",
                val: h
              }];
              _.forEach(function(w) {
                d._emitLine('frame.set("loop.' + w.name + '", ' + w.val + ");");
              });
            }, y.compileFor = function(l, f) {
              var v = this, h = this._tmpid(), d = this._tmpid(), _ = this._tmpid();
              if (f = f.push(), this._emitLine("frame = frame.push();"), this._emit("var " + _ + " = "), this._compileExpression(l.arr, f), this._emitLine(";"), this._emit("if(" + _ + ") {"), this._emitLine(_ + " = runtime.fromIterator(" + _ + ");"), l.name instanceof m.Array) {
                this._emitLine("var " + h + ";"), this._emitLine("if(runtime.isArray(" + _ + ")) {"), this._emitLine("var " + d + " = " + _ + ".length;"), this._emitLine("for(" + h + "=0; " + h + " < " + _ + ".length; " + h + "++) {"), l.name.children.forEach(function(x, E) {
                  var C = v._tmpid();
                  v._emitLine("var " + C + " = " + _ + "[" + h + "][" + E + "];"), v._emitLine('frame.set("' + x + '", ' + _ + "[" + h + "][" + E + "]);"), f.set(l.name.children[E].value, C);
                }), this._emitLoopBindings(l, _, h, d), this._withScopedSyntax(function() {
                  v.compile(l.body, f);
                }), this._emitLine("}"), this._emitLine("} else {");
                var w = l.name.children, A = w[0], B = w[1], N = this._tmpid(), F = this._tmpid();
                f.set(A.value, N), f.set(B.value, F), this._emitLine(h + " = -1;"), this._emitLine("var " + d + " = runtime.keys(" + _ + ").length;"), this._emitLine("for(var " + N + " in " + _ + ") {"), this._emitLine(h + "++;"), this._emitLine("var " + F + " = " + _ + "[" + N + "];"), this._emitLine('frame.set("' + A.value + '", ' + N + ");"), this._emitLine('frame.set("' + B.value + '", ' + F + ");"), this._emitLoopBindings(l, _, h, d), this._withScopedSyntax(function() {
                  v.compile(l.body, f);
                }), this._emitLine("}"), this._emitLine("}");
              } else {
                var K = this._tmpid();
                f.set(l.name.value, K), this._emitLine("var " + d + " = " + _ + ".length;"), this._emitLine("for(var " + h + "=0; " + h + " < " + _ + ".length; " + h + "++) {"), this._emitLine("var " + K + " = " + _ + "[" + h + "];"), this._emitLine('frame.set("' + l.name.value + '", ' + K + ");"), this._emitLoopBindings(l, _, h, d), this._withScopedSyntax(function() {
                  v.compile(l.body, f);
                }), this._emitLine("}");
              }
              this._emitLine("}"), l.else_ && (this._emitLine("if (!" + d + ") {"), this.compile(l.else_, f), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, y._compileAsyncLoop = function(l, f, v) {
              var h = this, d = this._tmpid(), _ = this._tmpid(), w = this._tmpid(), A = v ? "asyncAll" : "asyncEach";
              if (f = f.push(), this._emitLine("frame = frame.push();"), this._emit("var " + w + " = runtime.fromIterator("), this._compileExpression(l.arr, f), this._emitLine(");"), l.name instanceof m.Array) {
                var B = l.name.children.length;
                this._emit("runtime." + A + "(" + w + ", " + B + ", function("), l.name.children.forEach(function(K) {
                  h._emit(K.value + ",");
                }), this._emit(d + "," + _ + ",next) {"), l.name.children.forEach(function(K) {
                  var x = K.value;
                  f.set(x, x), h._emitLine('frame.set("' + x + '", ' + x + ");");
                });
              } else {
                var N = l.name.value;
                this._emitLine("runtime." + A + "(" + w + ", 1, function(" + N + ", " + d + ", " + _ + ",next) {"), this._emitLine('frame.set("' + N + '", ' + N + ");"), f.set(N, N);
              }
              this._emitLoopBindings(l, w, d, _), this._withScopedSyntax(function() {
                var K;
                v && (K = h._pushBuffer()), h.compile(l.body, f), h._emitLine("next(" + d + (K ? "," + K : "") + ");"), v && h._popBuffer();
              });
              var F = this._tmpid();
              this._emitLine("}, " + this._makeCallback(F)), this._addScopeLevel(), v && this._emitLine(this.buffer + " += " + F + ";"), l.else_ && (this._emitLine("if (!" + w + ".length) {"), this.compile(l.else_, f), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, y.compileAsyncEach = function(l, f) {
              this._compileAsyncLoop(l, f);
            }, y.compileAsyncAll = function(l, f) {
              this._compileAsyncLoop(l, f, !0);
            }, y._compileMacro = function(l, f) {
              var v = this, h = [], d = null, _ = "macro_" + this._tmpid(), w = f !== void 0;
              l.args.children.forEach(function(x, E) {
                E === l.args.children.length - 1 && x instanceof m.Dict ? d = x : (v.assertType(x, m.Symbol), h.push(x));
              });
              var A = [].concat(h.map(function(x) {
                return "l_" + x.value;
              }), ["kwargs"]), B = h.map(function(x) {
                return '"' + x.value + '"';
              }), N = (d && d.children || []).map(function(x) {
                return '"' + x.key.value + '"';
              }), F;
              w ? F = f.push(!0) : F = new I(), this._emitLines("var " + _ + " = runtime.makeMacro(", "[" + B.join(", ") + "], ", "[" + N.join(", ") + "], ", "function (" + A.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (w ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'), h.forEach(function(x) {
                v._emitLine('frame.set("' + x.value + '", l_' + x.value + ");"), F.set(x.value, "l_" + x.value);
              }), d && d.children.forEach(function(x) {
                var E = x.key.value;
                v._emit('frame.set("' + E + '", '), v._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + E + '")'), v._emit(' ? kwargs["' + E + '"] : '), v._compileExpression(x.value, F), v._emit(");");
              });
              var K = this._pushBuffer();
              return this._withScopedSyntax(function() {
                v.compile(l.body, F);
              }), this._emitLine("frame = " + (w ? "frame.pop();" : "callerFrame;")), this._emitLine("return new runtime.SafeString(" + K + ");"), this._emitLine("});"), this._popBuffer(), _;
            }, y.compileMacro = function(l, f) {
              var v = this._compileMacro(l), h = l.name.value;
              f.set(h, v), f.parent ? this._emitLine('frame.set("' + h + '", ' + v + ");") : (l.name.value.charAt(0) !== "_" && this._emitLine('context.addExport("' + h + '");'), this._emitLine('context.setVariable("' + h + '", ' + v + ");"));
            }, y.compileCaller = function(l, f) {
              this._emit("(function (){");
              var v = this._compileMacro(l, f);
              this._emit("return " + v + ";})()");
            }, y._compileGetTemplate = function(l, f, v, h) {
              var d = this._tmpid(), _ = this._templateName(), w = this._makeCallback(d), A = v ? "true" : "false", B = h ? "true" : "false";
              return this._emit("env.getTemplate("), this._compileExpression(l.template, f), this._emitLine(", " + A + ", " + _ + ", " + B + ", " + w), d;
            }, y.compileImport = function(l, f) {
              var v = l.target.value, h = this._compileGetTemplate(l, f, !1, !1);
              this._addScopeLevel(), this._emitLine(h + ".getExported(" + (l.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(h)), this._addScopeLevel(), f.set(v, h), f.parent ? this._emitLine('frame.set("' + v + '", ' + h + ");") : this._emitLine('context.setVariable("' + v + '", ' + h + ");");
            }, y.compileFromImport = function(l, f) {
              var v = this, h = this._compileGetTemplate(l, f, !1, !1);
              this._addScopeLevel(), this._emitLine(h + ".getExported(" + (l.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(h)), this._addScopeLevel(), l.names.children.forEach(function(d) {
                var _, w, A = v._tmpid();
                d instanceof m.Pair ? (_ = d.key.value, w = d.value.value) : (_ = d.value, w = _), v._emitLine("if(Object.prototype.hasOwnProperty.call(" + h + ', "' + _ + '")) {'), v._emitLine("var " + A + " = " + h + "." + _ + ";"), v._emitLine("} else {"), v._emitLine(`cb(new Error("cannot import '` + _ + `'")); return;`), v._emitLine("}"), f.set(w, A), f.parent ? v._emitLine('frame.set("' + w + '", ' + A + ");") : v._emitLine('context.setVariable("' + w + '", ' + A + ");");
              });
            }, y.compileBlock = function(l) {
              var f = this._tmpid();
              this.inBlock || this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '), this._emit('context.getBlock("' + l.name.value + '")'), this.inBlock || this._emit(")"), this._emitLine("(env, context, frame, runtime, " + this._makeCallback(f)), this._emitLine(this.buffer + " += " + f + ";"), this._addScopeLevel();
            }, y.compileSuper = function(l, f) {
              var v = l.blockName.value, h = l.symbol.value, d = this._makeCallback(h);
              this._emitLine('context.getSuper(env, "' + v + '", b_' + v + ", frame, runtime, " + d), this._emitLine(h + " = runtime.markSafe(" + h + ");"), this._addScopeLevel(), f.set(h, h);
            }, y.compileExtends = function(l, f) {
              var v = this._tmpid(), h = this._compileGetTemplate(l, f, !0, !1);
              this._emitLine("parentTemplate = " + h), this._emitLine("for(var " + v + " in parentTemplate.blocks) {"), this._emitLine("context.addBlock(" + v + ", parentTemplate.blocks[" + v + "]);"), this._emitLine("}"), this._addScopeLevel();
            }, y.compileInclude = function(l, f) {
              this._emitLine("var tasks = [];"), this._emitLine("tasks.push("), this._emitLine("function(callback) {");
              var v = this._compileGetTemplate(l, f, !1, l.ignoreMissing);
              this._emitLine("callback(null," + v + ");});"), this._emitLine("});");
              var h = this._tmpid();
              this._emitLine("tasks.push("), this._emitLine("function(template, callback){"), this._emitLine("template.render(context.getVariables(), frame, " + this._makeCallback(h)), this._emitLine("callback(null," + h + ");});"), this._emitLine("});"), this._emitLine("tasks.push("), this._emitLine("function(result, callback){"), this._emitLine(this.buffer + " += result;"), this._emitLine("callback(null);"), this._emitLine("});"), this._emitLine("env.waterfall(tasks, function(){"), this._addScopeLevel();
            }, y.compileTemplateData = function(l, f) {
              this.compileLiteral(l, f);
            }, y.compileCapture = function(l, f) {
              var v = this, h = this.buffer;
              this.buffer = "output", this._emitLine("(function() {"), this._emitLine('var output = "";'), this._withScopedSyntax(function() {
                v.compile(l.body, f);
              }), this._emitLine("return output;"), this._emitLine("})()"), this.buffer = h;
            }, y.compileOutput = function(l, f) {
              var v = this, h = l.children;
              h.forEach(function(d) {
                d instanceof m.TemplateData ? d.value && (v._emit(v.buffer + " += "), v.compileLiteral(d, f), v._emitLine(";")) : (v._emit(v.buffer + " += runtime.suppressValue("), v.throwOnUndefined && v._emit("runtime.ensureDefined("), v.compile(d, f), v.throwOnUndefined && v._emit("," + l.lineno + "," + l.colno + ")"), v._emit(`, env.opts.autoescape);
`));
              });
            }, y.compileRoot = function(l, f) {
              var v = this;
              f && this.fail("compileRoot: root node can't have frame"), f = new I(), this._emitFuncBegin(l, "root"), this._emitLine("var parentTemplate = null;"), this._compileChildren(l, f), this._emitLine("if(parentTemplate) {"), this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"), this._emitLine("} else {"), this._emitLine("cb(null, " + this.buffer + ");"), this._emitLine("}"), this._emitFuncEnd(!0), this.inBlock = !0;
              var h = [], d = l.findAll(m.Block);
              d.forEach(function(_, w) {
                var A = _.name.value;
                if (h.indexOf(A) !== -1)
                  throw new Error('Block "' + A + '" defined more than once.');
                h.push(A), v._emitFuncBegin(_, "b_" + A);
                var B = new I();
                v._emitLine("var frame = frame.push(true);"), v.compile(_.body, B), v._emitFuncEnd();
              }), this._emitLine("return {"), d.forEach(function(_, w) {
                var A = "b_" + _.name.value;
                v._emitLine(A + ": " + A + ",");
              }), this._emitLine(`root: root
};`);
            }, y.compile = function(l, f) {
              var v = this["compile" + l.typename];
              v ? v.call(this, l, f) : this.fail("compile: Cannot compile node: " + l.typename, l.lineno, l.colno);
            }, y.getCode = function() {
              return this.codebuf.join("");
            }, k;
          }(R);
          t.exports = {
            compile: function(k, y, b, l, f) {
              f === void 0 && (f = {});
              var v = new u(l, f.throwOnUndefined), h = (b || []).map(function(_) {
                return _.preprocess;
              }).filter(function(_) {
                return !!_;
              }), d = h.reduce(function(_, w) {
                return w(_);
              }, k);
              return v.compile(g.transform(p.parse(d, b, f), y, l)), v.getCode();
            },
            Compiler: u
          };
        },
        /* 6 */
        /***/
        function(t, i, r) {
          function n(L, S) {
            L.prototype = Object.create(S.prototype), L.prototype.constructor = L, a(L, S);
          }
          function a(L, S) {
            return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(I, T) {
              return I.__proto__ = T, I;
            }, a(L, S);
          }
          var p = r(4), g = r(1), m = g.EmitterObj;
          t.exports = /* @__PURE__ */ function(L) {
            n(S, L);
            function S() {
              return L.apply(this, arguments) || this;
            }
            var P = S.prototype;
            return P.resolve = function(T, R) {
              return p.resolve(p.dirname(T), R);
            }, P.isRelative = function(T) {
              return T.indexOf("./") === 0 || T.indexOf("../") === 0;
            }, S;
          }(m);
        },
        /* 7 */
        /***/
        function(t, i, r) {
          function n(B, N) {
            B.prototype = Object.create(N.prototype), B.prototype.constructor = B, a(B, N);
          }
          function a(B, N) {
            return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(K, x) {
              return K.__proto__ = x, K;
            }, a(B, N);
          }
          var p = r(12), g = r(15), m = r(0), L = r(5), S = r(18), P = r(10), I = P.FileSystemLoader, T = P.WebLoader, R = P.PrecompiledLoader, s = r(20), u = r(21), c = r(1), k = c.Obj, y = c.EmitterObj, b = r(2), l = b.handleError, f = b.Frame, v = r(22);
          function h(B, N, F) {
            p(function() {
              B(N, F);
            });
          }
          var d = {
            type: "code",
            obj: {
              root: function(N, F, K, x, E) {
                try {
                  E(null, "");
                } catch (C) {
                  E(l(C, null, null));
                }
              }
            }
          }, _ = /* @__PURE__ */ function(B) {
            n(N, B);
            function N() {
              return B.apply(this, arguments) || this;
            }
            var F = N.prototype;
            return F.init = function(x, E) {
              var C = this;
              E = this.opts = E || {}, this.opts.dev = !!E.dev, this.opts.autoescape = E.autoescape != null ? E.autoescape : !0, this.opts.throwOnUndefined = !!E.throwOnUndefined, this.opts.trimBlocks = !!E.trimBlocks, this.opts.lstripBlocks = !!E.lstripBlocks, this.loaders = [], x ? this.loaders = m.isArray(x) ? x : [x] : I ? this.loaders = [new I("views")] : T && (this.loaders = [new T("/views")]), typeof window < "u" && window.nunjucksPrecompiled && this.loaders.unshift(new R(window.nunjucksPrecompiled)), this._initLoaders(), this.globals = u(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], m._entries(S).forEach(function(j) {
                var D = j[0], Q = j[1];
                return C.addFilter(D, Q);
              }), m._entries(s).forEach(function(j) {
                var D = j[0], Q = j[1];
                return C.addTest(D, Q);
              });
            }, F._initLoaders = function() {
              var x = this;
              this.loaders.forEach(function(E) {
                E.cache = {}, typeof E.on == "function" && (E.on("update", function(C, j) {
                  E.cache[C] = null, x.emit("update", C, j, E);
                }), E.on("load", function(C, j) {
                  x.emit("load", C, j, E);
                }));
              });
            }, F.invalidateCache = function() {
              this.loaders.forEach(function(x) {
                x.cache = {};
              });
            }, F.addExtension = function(x, E) {
              return E.__name = x, this.extensions[x] = E, this.extensionsList.push(E), this;
            }, F.removeExtension = function(x) {
              var E = this.getExtension(x);
              E && (this.extensionsList = m.without(this.extensionsList, E), delete this.extensions[x]);
            }, F.getExtension = function(x) {
              return this.extensions[x];
            }, F.hasExtension = function(x) {
              return !!this.extensions[x];
            }, F.addGlobal = function(x, E) {
              return this.globals[x] = E, this;
            }, F.getGlobal = function(x) {
              if (typeof this.globals[x] > "u")
                throw new Error("global not found: " + x);
              return this.globals[x];
            }, F.addFilter = function(x, E, C) {
              var j = E;
              return C && this.asyncFilters.push(x), this.filters[x] = j, this;
            }, F.getFilter = function(x) {
              if (!this.filters[x])
                throw new Error("filter not found: " + x);
              return this.filters[x];
            }, F.addTest = function(x, E) {
              return this.tests[x] = E, this;
            }, F.getTest = function(x) {
              if (!this.tests[x])
                throw new Error("test not found: " + x);
              return this.tests[x];
            }, F.resolveTemplate = function(x, E, C) {
              var j = x.isRelative && E ? x.isRelative(C) : !1;
              return j && x.resolve ? x.resolve(E, C) : C;
            }, F.getTemplate = function(x, E, C, j, D) {
              var Q = this, ie = this, z = null;
              if (x && x.raw && (x = x.raw), m.isFunction(C) && (D = C, C = null, E = E || !1), m.isFunction(E) && (D = E, E = !1), x instanceof A)
                z = x;
              else {
                if (typeof x != "string")
                  throw new Error("template names must be a string: " + x);
                for (var ce = 0; ce < this.loaders.length; ce++) {
                  var pe = this.loaders[ce];
                  if (z = pe.cache[this.resolveTemplate(pe, C, x)], z)
                    break;
                }
              }
              if (z)
                if (E && z.compile(), D) {
                  D(null, z);
                  return;
                } else
                  return z;
              var X, Z = function(W, G) {
                if (!G && !W && !j && (W = new Error("template not found: " + x)), W)
                  if (D) {
                    D(W);
                    return;
                  } else
                    throw W;
                var se;
                G ? (se = new A(G.src, Q, G.path, E), G.noCache || (G.loader.cache[x] = se)) : se = new A(d, Q, "", E), D ? D(null, se) : X = se;
              };
              return m.asyncIter(this.loaders, function($, W, G, se) {
                function we(he, Oe) {
                  he ? se(he) : Oe ? (Oe.loader = $, se(null, Oe)) : G();
                }
                x = ie.resolveTemplate($, C, x), $.async ? $.getSource(x, we) : we(null, $.getSource(x));
              }, Z), X;
            }, F.express = function(x) {
              return v(this, x);
            }, F.render = function(x, E, C) {
              m.isFunction(E) && (C = E, E = null);
              var j = null;
              return this.getTemplate(x, function(D, Q) {
                if (D && C)
                  h(C, D);
                else {
                  if (D)
                    throw D;
                  j = Q.render(E, C);
                }
              }), j;
            }, F.renderString = function(x, E, C, j) {
              m.isFunction(C) && (j = C, C = {}), C = C || {};
              var D = new A(x, this, C.path);
              return D.render(E, j);
            }, F.waterfall = function(x, E, C) {
              return g(x, E, C);
            }, N;
          }(y), w = /* @__PURE__ */ function(B) {
            n(N, B);
            function N() {
              return B.apply(this, arguments) || this;
            }
            var F = N.prototype;
            return F.init = function(x, E, C) {
              var j = this;
              this.env = C || new _(), this.ctx = m.extend({}, x), this.blocks = {}, this.exported = [], m.keys(E).forEach(function(D) {
                j.addBlock(D, E[D]);
              });
            }, F.lookup = function(x) {
              return x in this.env.globals && !(x in this.ctx) ? this.env.globals[x] : this.ctx[x];
            }, F.setVariable = function(x, E) {
              this.ctx[x] = E;
            }, F.getVariables = function() {
              return this.ctx;
            }, F.addBlock = function(x, E) {
              return this.blocks[x] = this.blocks[x] || [], this.blocks[x].push(E), this;
            }, F.getBlock = function(x) {
              if (!this.blocks[x])
                throw new Error('unknown block "' + x + '"');
              return this.blocks[x][0];
            }, F.getSuper = function(x, E, C, j, D, Q) {
              var ie = m.indexOf(this.blocks[E] || [], C), z = this.blocks[E][ie + 1], ce = this;
              if (ie === -1 || !z)
                throw new Error('no super block available for "' + E + '"');
              z(x, ce, j, D, Q);
            }, F.addExport = function(x) {
              this.exported.push(x);
            }, F.getExported = function() {
              var x = this, E = {};
              return this.exported.forEach(function(C) {
                E[C] = x.ctx[C];
              }), E;
            }, N;
          }(k), A = /* @__PURE__ */ function(B) {
            n(N, B);
            function N() {
              return B.apply(this, arguments) || this;
            }
            var F = N.prototype;
            return F.init = function(x, E, C, j) {
              if (this.env = E || new _(), m.isObject(x))
                switch (x.type) {
                  case "code":
                    this.tmplProps = x.obj;
                    break;
                  case "string":
                    this.tmplStr = x.obj;
                    break;
                  default:
                    throw new Error("Unexpected template object type " + x.type + "; expected 'code', or 'string'");
                }
              else if (m.isString(x))
                this.tmplStr = x;
              else
                throw new Error("src must be a string or an object describing the source");
              if (this.path = C, j)
                try {
                  this._compile();
                } catch (D) {
                  throw m._prettifyError(this.path, this.env.opts.dev, D);
                }
              else
                this.compiled = !1;
            }, F.render = function(x, E, C) {
              var j = this;
              typeof x == "function" ? (C = x, x = {}) : typeof E == "function" && (C = E, E = null);
              var D = !E;
              try {
                this.compile();
              } catch (X) {
                var Q = m._prettifyError(this.path, this.env.opts.dev, X);
                if (C)
                  return h(C, Q);
                throw Q;
              }
              var ie = new w(x || {}, this.blocks, this.env), z = E ? E.push(!0) : new f();
              z.topLevel = !0;
              var ce = null, pe = !1;
              return this.rootRenderFunc(this.env, ie, z, b, function(X, Z) {
                if (!(pe && C && typeof Z < "u"))
                  if (X && (X = m._prettifyError(j.path, j.env.opts.dev, X), pe = !0), C)
                    D ? h(C, X, Z) : C(X, Z);
                  else {
                    if (X)
                      throw X;
                    ce = Z;
                  }
              }), ce;
            }, F.getExported = function(x, E, C) {
              typeof x == "function" && (C = x, x = {}), typeof E == "function" && (C = E, E = null);
              try {
                this.compile();
              } catch (Q) {
                if (C)
                  return C(Q);
                throw Q;
              }
              var j = E ? E.push() : new f();
              j.topLevel = !0;
              var D = new w(x || {}, this.blocks, this.env);
              this.rootRenderFunc(this.env, D, j, b, function(Q) {
                Q ? C(Q, null) : C(null, D.getExported());
              });
            }, F.compile = function() {
              this.compiled || this._compile();
            }, F._compile = function() {
              var x;
              if (this.tmplProps)
                x = this.tmplProps;
              else {
                var E = L.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), C = new Function(E);
                x = C();
              }
              this.blocks = this._getBlocks(x), this.rootRenderFunc = x.root, this.compiled = !0;
            }, F._getBlocks = function(x) {
              var E = {};
              return m.keys(x).forEach(function(C) {
                C.slice(0, 2) === "b_" && (E[C.slice(2)] = x[C]);
              }), E;
            }, N;
          }(k);
          t.exports = {
            Environment: _,
            Template: A
          };
        },
        /* 8 */
        /***/
        function(t, i, r) {
          function n(P, I) {
            P.prototype = Object.create(I.prototype), P.prototype.constructor = P, a(P, I);
          }
          function a(P, I) {
            return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(R, s) {
              return R.__proto__ = s, R;
            }, a(P, I);
          }
          var p = r(9), g = r(3), m = r(1).Obj, L = r(0), S = /* @__PURE__ */ function(P) {
            n(I, P);
            function I() {
              return P.apply(this, arguments) || this;
            }
            var T = I.prototype;
            return T.init = function(s) {
              this.tokens = s, this.peeked = null, this.breakOnBlocks = null, this.dropLeadingWhitespace = !1, this.extensions = [];
            }, T.nextToken = function(s) {
              var u;
              if (this.peeked)
                if (!s && this.peeked.type === p.TOKEN_WHITESPACE)
                  this.peeked = null;
                else
                  return u = this.peeked, this.peeked = null, u;
              if (u = this.tokens.nextToken(), !s)
                for (; u && u.type === p.TOKEN_WHITESPACE; )
                  u = this.tokens.nextToken();
              return u;
            }, T.peekToken = function() {
              return this.peeked = this.peeked || this.nextToken(), this.peeked;
            }, T.pushToken = function(s) {
              if (this.peeked)
                throw new Error("pushToken: can only push one token on between reads");
              this.peeked = s;
            }, T.error = function(s, u, c) {
              if (u === void 0 || c === void 0) {
                var k = this.peekToken() || {};
                u = k.lineno, c = k.colno;
              }
              return u !== void 0 && (u += 1), c !== void 0 && (c += 1), new L.TemplateError(s, u, c);
            }, T.fail = function(s, u, c) {
              throw this.error(s, u, c);
            }, T.skip = function(s) {
              var u = this.nextToken();
              return !u || u.type !== s ? (this.pushToken(u), !1) : !0;
            }, T.expect = function(s) {
              var u = this.nextToken();
              return u.type !== s && this.fail("expected " + s + ", got " + u.type, u.lineno, u.colno), u;
            }, T.skipValue = function(s, u) {
              var c = this.nextToken();
              return !c || c.type !== s || c.value !== u ? (this.pushToken(c), !1) : !0;
            }, T.skipSymbol = function(s) {
              return this.skipValue(p.TOKEN_SYMBOL, s);
            }, T.advanceAfterBlockEnd = function(s) {
              var u;
              return s || (u = this.peekToken(), u || this.fail("unexpected end of file"), u.type !== p.TOKEN_SYMBOL && this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"), s = this.nextToken().value), u = this.nextToken(), u && u.type === p.TOKEN_BLOCK_END ? u.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0) : this.fail("expected block end in " + s + " statement"), u;
            }, T.advanceAfterVariableEnd = function() {
              var s = this.nextToken();
              s && s.type === p.TOKEN_VARIABLE_END ? this.dropLeadingWhitespace = s.value.charAt(s.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-" : (this.pushToken(s), this.fail("expected variable end"));
            }, T.parseFor = function() {
              var s = this.peekToken(), u, c;
              this.skipSymbol("for") ? (u = new g.For(s.lineno, s.colno), c = "endfor") : this.skipSymbol("asyncEach") ? (u = new g.AsyncEach(s.lineno, s.colno), c = "endeach") : this.skipSymbol("asyncAll") ? (u = new g.AsyncAll(s.lineno, s.colno), c = "endall") : this.fail("parseFor: expected for{Async}", s.lineno, s.colno), u.name = this.parsePrimary(), u.name instanceof g.Symbol || this.fail("parseFor: variable name expected for loop");
              var k = this.peekToken().type;
              if (k === p.TOKEN_COMMA) {
                var y = u.name;
                for (u.name = new g.Array(y.lineno, y.colno), u.name.addChild(y); this.skip(p.TOKEN_COMMA); ) {
                  var b = this.parsePrimary();
                  u.name.addChild(b);
                }
              }
              return this.skipSymbol("in") || this.fail('parseFor: expected "in" keyword for loop', s.lineno, s.colno), u.arr = this.parseExpression(), this.advanceAfterBlockEnd(s.value), u.body = this.parseUntilBlocks(c, "else"), this.skipSymbol("else") && (this.advanceAfterBlockEnd("else"), u.else_ = this.parseUntilBlocks(c)), this.advanceAfterBlockEnd(), u;
            }, T.parseMacro = function() {
              var s = this.peekToken();
              this.skipSymbol("macro") || this.fail("expected macro");
              var u = this.parsePrimary(!0), c = this.parseSignature(), k = new g.Macro(s.lineno, s.colno, u, c);
              return this.advanceAfterBlockEnd(s.value), k.body = this.parseUntilBlocks("endmacro"), this.advanceAfterBlockEnd(), k;
            }, T.parseCall = function() {
              var s = this.peekToken();
              this.skipSymbol("call") || this.fail("expected call");
              var u = this.parseSignature(!0) || new g.NodeList(), c = this.parsePrimary();
              this.advanceAfterBlockEnd(s.value);
              var k = this.parseUntilBlocks("endcall");
              this.advanceAfterBlockEnd();
              var y = new g.Symbol(s.lineno, s.colno, "caller"), b = new g.Caller(s.lineno, s.colno, y, u, k), l = c.args.children;
              l[l.length - 1] instanceof g.KeywordArgs || l.push(new g.KeywordArgs());
              var f = l[l.length - 1];
              return f.addChild(new g.Pair(s.lineno, s.colno, y, b)), new g.Output(s.lineno, s.colno, [c]);
            }, T.parseWithContext = function() {
              var s = this.peekToken(), u = null;
              return this.skipSymbol("with") ? u = !0 : this.skipSymbol("without") && (u = !1), u !== null && (this.skipSymbol("context") || this.fail("parseFrom: expected context after with/without", s.lineno, s.colno)), u;
            }, T.parseImport = function() {
              var s = this.peekToken();
              this.skipSymbol("import") || this.fail("parseImport: expected import", s.lineno, s.colno);
              var u = this.parseExpression();
              this.skipSymbol("as") || this.fail('parseImport: expected "as" keyword', s.lineno, s.colno);
              var c = this.parseExpression(), k = this.parseWithContext(), y = new g.Import(s.lineno, s.colno, u, c, k);
              return this.advanceAfterBlockEnd(s.value), y;
            }, T.parseFrom = function() {
              var s = this.peekToken();
              this.skipSymbol("from") || this.fail("parseFrom: expected from");
              var u = this.parseExpression();
              this.skipSymbol("import") || this.fail("parseFrom: expected import", s.lineno, s.colno);
              for (var c = new g.NodeList(), k; ; ) {
                var y = this.peekToken();
                if (y.type === p.TOKEN_BLOCK_END) {
                  c.children.length || this.fail("parseFrom: Expected at least one import name", s.lineno, s.colno), y.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0), this.nextToken();
                  break;
                }
                c.children.length > 0 && !this.skip(p.TOKEN_COMMA) && this.fail("parseFrom: expected comma", s.lineno, s.colno);
                var b = this.parsePrimary();
                if (b.value.charAt(0) === "_" && this.fail("parseFrom: names starting with an underscore cannot be imported", b.lineno, b.colno), this.skipSymbol("as")) {
                  var l = this.parsePrimary();
                  c.addChild(new g.Pair(b.lineno, b.colno, b, l));
                } else
                  c.addChild(b);
                k = this.parseWithContext();
              }
              return new g.FromImport(s.lineno, s.colno, u, c, k);
            }, T.parseBlock = function() {
              var s = this.peekToken();
              this.skipSymbol("block") || this.fail("parseBlock: expected block", s.lineno, s.colno);
              var u = new g.Block(s.lineno, s.colno);
              u.name = this.parsePrimary(), u.name instanceof g.Symbol || this.fail("parseBlock: variable name expected", s.lineno, s.colno), this.advanceAfterBlockEnd(s.value), u.body = this.parseUntilBlocks("endblock"), this.skipSymbol("endblock"), this.skipSymbol(u.name.value);
              var c = this.peekToken();
              return c || this.fail("parseBlock: expected endblock, got end of file"), this.advanceAfterBlockEnd(c.value), u;
            }, T.parseExtends = function() {
              var s = "extends", u = this.peekToken();
              this.skipSymbol(s) || this.fail("parseTemplateRef: expected " + s);
              var c = new g.Extends(u.lineno, u.colno);
              return c.template = this.parseExpression(), this.advanceAfterBlockEnd(u.value), c;
            }, T.parseInclude = function() {
              var s = "include", u = this.peekToken();
              this.skipSymbol(s) || this.fail("parseInclude: expected " + s);
              var c = new g.Include(u.lineno, u.colno);
              return c.template = this.parseExpression(), this.skipSymbol("ignore") && this.skipSymbol("missing") && (c.ignoreMissing = !0), this.advanceAfterBlockEnd(u.value), c;
            }, T.parseIf = function() {
              var s = this.peekToken(), u;
              this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif") ? u = new g.If(s.lineno, s.colno) : this.skipSymbol("ifAsync") ? u = new g.IfAsync(s.lineno, s.colno) : this.fail("parseIf: expected if, elif, or elseif", s.lineno, s.colno), u.cond = this.parseExpression(), this.advanceAfterBlockEnd(s.value), u.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
              var c = this.peekToken();
              switch (c && c.value) {
                case "elseif":
                case "elif":
                  u.else_ = this.parseIf();
                  break;
                case "else":
                  this.advanceAfterBlockEnd(), u.else_ = this.parseUntilBlocks("endif"), this.advanceAfterBlockEnd();
                  break;
                case "endif":
                  u.else_ = null, this.advanceAfterBlockEnd();
                  break;
                default:
                  this.fail("parseIf: expected elif, else, or endif, got end of file");
              }
              return u;
            }, T.parseSet = function() {
              var s = this.peekToken();
              this.skipSymbol("set") || this.fail("parseSet: expected set", s.lineno, s.colno);
              for (var u = new g.Set(s.lineno, s.colno, []), c; (c = this.parsePrimary()) && (u.targets.push(c), !!this.skip(p.TOKEN_COMMA)); )
                ;
              return this.skipValue(p.TOKEN_OPERATOR, "=") ? (u.value = this.parseExpression(), this.advanceAfterBlockEnd(s.value)) : this.skip(p.TOKEN_BLOCK_END) ? (u.body = new g.Capture(s.lineno, s.colno, this.parseUntilBlocks("endset")), u.value = null, this.advanceAfterBlockEnd()) : this.fail("parseSet: expected = or block end in set tag", s.lineno, s.colno), u;
            }, T.parseSwitch = function() {
              var s = "switch", u = "endswitch", c = "case", k = "default", y = this.peekToken();
              !this.skipSymbol(s) && !this.skipSymbol(c) && !this.skipSymbol(k) && this.fail('parseSwitch: expected "switch," "case" or "default"', y.lineno, y.colno);
              var b = this.parseExpression();
              this.advanceAfterBlockEnd(s), this.parseUntilBlocks(c, k, u);
              var l = this.peekToken(), f = [], v;
              do {
                this.skipSymbol(c);
                var h = this.parseExpression();
                this.advanceAfterBlockEnd(s);
                var d = this.parseUntilBlocks(c, k, u);
                f.push(new g.Case(l.line, l.col, h, d)), l = this.peekToken();
              } while (l && l.value === c);
              switch (l.value) {
                case k:
                  this.advanceAfterBlockEnd(), v = this.parseUntilBlocks(u), this.advanceAfterBlockEnd();
                  break;
                case u:
                  this.advanceAfterBlockEnd();
                  break;
                default:
                  this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.');
              }
              return new g.Switch(y.lineno, y.colno, b, f, v);
            }, T.parseStatement = function() {
              var s = this.peekToken(), u;
              if (s.type !== p.TOKEN_SYMBOL && this.fail("tag name expected", s.lineno, s.colno), this.breakOnBlocks && L.indexOf(this.breakOnBlocks, s.value) !== -1)
                return null;
              switch (s.value) {
                case "raw":
                  return this.parseRaw();
                case "verbatim":
                  return this.parseRaw("verbatim");
                case "if":
                case "ifAsync":
                  return this.parseIf();
                case "for":
                case "asyncEach":
                case "asyncAll":
                  return this.parseFor();
                case "block":
                  return this.parseBlock();
                case "extends":
                  return this.parseExtends();
                case "include":
                  return this.parseInclude();
                case "set":
                  return this.parseSet();
                case "macro":
                  return this.parseMacro();
                case "call":
                  return this.parseCall();
                case "import":
                  return this.parseImport();
                case "from":
                  return this.parseFrom();
                case "filter":
                  return this.parseFilterStatement();
                case "switch":
                  return this.parseSwitch();
                default:
                  if (this.extensions.length)
                    for (var c = 0; c < this.extensions.length; c++) {
                      var k = this.extensions[c];
                      if (L.indexOf(k.tags || [], s.value) !== -1)
                        return k.parse(this, g, p);
                    }
                  this.fail("unknown block tag: " + s.value, s.lineno, s.colno);
              }
              return u;
            }, T.parseRaw = function(s) {
              s = s || "raw";
              for (var u = "end" + s, c = new RegExp("([\\s\\S]*?){%\\s*(" + s + "|" + u + ")\\s*(?=%})%}"), k = 1, y = "", b = null, l = this.advanceAfterBlockEnd(); (b = this.tokens._extractRegex(c)) && k > 0; ) {
                var f = b[0], v = b[1], h = b[2];
                h === s ? k += 1 : h === u && (k -= 1), k === 0 ? (y += v, this.tokens.backN(f.length - v.length)) : y += f;
              }
              return new g.Output(l.lineno, l.colno, [new g.TemplateData(l.lineno, l.colno, y)]);
            }, T.parsePostfix = function(s) {
              for (var u, c = this.peekToken(); c; ) {
                if (c.type === p.TOKEN_LEFT_PAREN)
                  s = new g.FunCall(c.lineno, c.colno, s, this.parseSignature());
                else if (c.type === p.TOKEN_LEFT_BRACKET)
                  u = this.parseAggregate(), u.children.length > 1 && this.fail("invalid index"), s = new g.LookupVal(c.lineno, c.colno, s, u.children[0]);
                else if (c.type === p.TOKEN_OPERATOR && c.value === ".") {
                  this.nextToken();
                  var k = this.nextToken();
                  k.type !== p.TOKEN_SYMBOL && this.fail("expected name as lookup value, got " + k.value, k.lineno, k.colno), u = new g.Literal(k.lineno, k.colno, k.value), s = new g.LookupVal(c.lineno, c.colno, s, u);
                } else
                  break;
                c = this.peekToken();
              }
              return s;
            }, T.parseExpression = function() {
              var s = this.parseInlineIf();
              return s;
            }, T.parseInlineIf = function() {
              var s = this.parseOr();
              if (this.skipSymbol("if")) {
                var u = this.parseOr(), c = s;
                s = new g.InlineIf(s.lineno, s.colno), s.body = c, s.cond = u, this.skipSymbol("else") ? s.else_ = this.parseOr() : s.else_ = null;
              }
              return s;
            }, T.parseOr = function() {
              for (var s = this.parseAnd(); this.skipSymbol("or"); ) {
                var u = this.parseAnd();
                s = new g.Or(s.lineno, s.colno, s, u);
              }
              return s;
            }, T.parseAnd = function() {
              for (var s = this.parseNot(); this.skipSymbol("and"); ) {
                var u = this.parseNot();
                s = new g.And(s.lineno, s.colno, s, u);
              }
              return s;
            }, T.parseNot = function() {
              var s = this.peekToken();
              return this.skipSymbol("not") ? new g.Not(s.lineno, s.colno, this.parseNot()) : this.parseIn();
            }, T.parseIn = function() {
              for (var s = this.parseIs(); ; ) {
                var u = this.nextToken();
                if (!u)
                  break;
                var c = u.type === p.TOKEN_SYMBOL && u.value === "not";
                if (c || this.pushToken(u), this.skipSymbol("in")) {
                  var k = this.parseIs();
                  s = new g.In(s.lineno, s.colno, s, k), c && (s = new g.Not(s.lineno, s.colno, s));
                } else {
                  c && this.pushToken(u);
                  break;
                }
              }
              return s;
            }, T.parseIs = function() {
              var s = this.parseCompare();
              if (this.skipSymbol("is")) {
                var u = this.skipSymbol("not"), c = this.parseCompare();
                s = new g.Is(s.lineno, s.colno, s, c), u && (s = new g.Not(s.lineno, s.colno, s));
              }
              return s;
            }, T.parseCompare = function() {
              for (var s = ["==", "===", "!=", "!==", "<", ">", "<=", ">="], u = this.parseConcat(), c = []; ; ) {
                var k = this.nextToken();
                if (k)
                  if (s.indexOf(k.value) !== -1)
                    c.push(new g.CompareOperand(k.lineno, k.colno, this.parseConcat(), k.value));
                  else {
                    this.pushToken(k);
                    break;
                  }
                else
                  break;
              }
              return c.length ? new g.Compare(c[0].lineno, c[0].colno, u, c) : u;
            }, T.parseConcat = function() {
              for (var s = this.parseAdd(); this.skipValue(p.TOKEN_TILDE, "~"); ) {
                var u = this.parseAdd();
                s = new g.Concat(s.lineno, s.colno, s, u);
              }
              return s;
            }, T.parseAdd = function() {
              for (var s = this.parseSub(); this.skipValue(p.TOKEN_OPERATOR, "+"); ) {
                var u = this.parseSub();
                s = new g.Add(s.lineno, s.colno, s, u);
              }
              return s;
            }, T.parseSub = function() {
              for (var s = this.parseMul(); this.skipValue(p.TOKEN_OPERATOR, "-"); ) {
                var u = this.parseMul();
                s = new g.Sub(s.lineno, s.colno, s, u);
              }
              return s;
            }, T.parseMul = function() {
              for (var s = this.parseDiv(); this.skipValue(p.TOKEN_OPERATOR, "*"); ) {
                var u = this.parseDiv();
                s = new g.Mul(s.lineno, s.colno, s, u);
              }
              return s;
            }, T.parseDiv = function() {
              for (var s = this.parseFloorDiv(); this.skipValue(p.TOKEN_OPERATOR, "/"); ) {
                var u = this.parseFloorDiv();
                s = new g.Div(s.lineno, s.colno, s, u);
              }
              return s;
            }, T.parseFloorDiv = function() {
              for (var s = this.parseMod(); this.skipValue(p.TOKEN_OPERATOR, "//"); ) {
                var u = this.parseMod();
                s = new g.FloorDiv(s.lineno, s.colno, s, u);
              }
              return s;
            }, T.parseMod = function() {
              for (var s = this.parsePow(); this.skipValue(p.TOKEN_OPERATOR, "%"); ) {
                var u = this.parsePow();
                s = new g.Mod(s.lineno, s.colno, s, u);
              }
              return s;
            }, T.parsePow = function() {
              for (var s = this.parseUnary(); this.skipValue(p.TOKEN_OPERATOR, "**"); ) {
                var u = this.parseUnary();
                s = new g.Pow(s.lineno, s.colno, s, u);
              }
              return s;
            }, T.parseUnary = function(s) {
              var u = this.peekToken(), c;
              return this.skipValue(p.TOKEN_OPERATOR, "-") ? c = new g.Neg(u.lineno, u.colno, this.parseUnary(!0)) : this.skipValue(p.TOKEN_OPERATOR, "+") ? c = new g.Pos(u.lineno, u.colno, this.parseUnary(!0)) : c = this.parsePrimary(), s || (c = this.parseFilter(c)), c;
            }, T.parsePrimary = function(s) {
              var u = this.nextToken(), c, k = null;
              if (u ? u.type === p.TOKEN_STRING ? c = u.value : u.type === p.TOKEN_INT ? c = parseInt(u.value, 10) : u.type === p.TOKEN_FLOAT ? c = parseFloat(u.value) : u.type === p.TOKEN_BOOLEAN ? u.value === "true" ? c = !0 : u.value === "false" ? c = !1 : this.fail("invalid boolean: " + u.value, u.lineno, u.colno) : u.type === p.TOKEN_NONE ? c = null : u.type === p.TOKEN_REGEX && (c = new RegExp(u.value.body, u.value.flags)) : this.fail("expected expression, got end of file"), c !== void 0 ? k = new g.Literal(u.lineno, u.colno, c) : u.type === p.TOKEN_SYMBOL ? k = new g.Symbol(u.lineno, u.colno, u.value) : (this.pushToken(u), k = this.parseAggregate()), s || (k = this.parsePostfix(k)), k)
                return k;
              throw this.error("unexpected token: " + u.value, u.lineno, u.colno);
            }, T.parseFilterName = function() {
              for (var s = this.expect(p.TOKEN_SYMBOL), u = s.value; this.skipValue(p.TOKEN_OPERATOR, "."); )
                u += "." + this.expect(p.TOKEN_SYMBOL).value;
              return new g.Symbol(s.lineno, s.colno, u);
            }, T.parseFilterArgs = function(s) {
              if (this.peekToken().type === p.TOKEN_LEFT_PAREN) {
                var u = this.parsePostfix(s);
                return u.args.children;
              }
              return [];
            }, T.parseFilter = function(s) {
              for (; this.skip(p.TOKEN_PIPE); ) {
                var u = this.parseFilterName();
                s = new g.Filter(u.lineno, u.colno, u, new g.NodeList(u.lineno, u.colno, [s].concat(this.parseFilterArgs(s))));
              }
              return s;
            }, T.parseFilterStatement = function() {
              var s = this.peekToken();
              this.skipSymbol("filter") || this.fail("parseFilterStatement: expected filter");
              var u = this.parseFilterName(), c = this.parseFilterArgs(u);
              this.advanceAfterBlockEnd(s.value);
              var k = new g.Capture(u.lineno, u.colno, this.parseUntilBlocks("endfilter"));
              this.advanceAfterBlockEnd();
              var y = new g.Filter(u.lineno, u.colno, u, new g.NodeList(u.lineno, u.colno, [k].concat(c)));
              return new g.Output(u.lineno, u.colno, [y]);
            }, T.parseAggregate = function() {
              var s = this.nextToken(), u;
              switch (s.type) {
                case p.TOKEN_LEFT_PAREN:
                  u = new g.Group(s.lineno, s.colno);
                  break;
                case p.TOKEN_LEFT_BRACKET:
                  u = new g.Array(s.lineno, s.colno);
                  break;
                case p.TOKEN_LEFT_CURLY:
                  u = new g.Dict(s.lineno, s.colno);
                  break;
                default:
                  return null;
              }
              for (; ; ) {
                var c = this.peekToken().type;
                if (c === p.TOKEN_RIGHT_PAREN || c === p.TOKEN_RIGHT_BRACKET || c === p.TOKEN_RIGHT_CURLY) {
                  this.nextToken();
                  break;
                }
                if (u.children.length > 0 && (this.skip(p.TOKEN_COMMA) || this.fail("parseAggregate: expected comma after expression", s.lineno, s.colno)), u instanceof g.Dict) {
                  var k = this.parsePrimary();
                  this.skip(p.TOKEN_COLON) || this.fail("parseAggregate: expected colon after dict key", s.lineno, s.colno);
                  var y = this.parseExpression();
                  u.addChild(new g.Pair(k.lineno, k.colno, k, y));
                } else {
                  var b = this.parseExpression();
                  u.addChild(b);
                }
              }
              return u;
            }, T.parseSignature = function(s, u) {
              var c = this.peekToken();
              if (!u && c.type !== p.TOKEN_LEFT_PAREN) {
                if (s)
                  return null;
                this.fail("expected arguments", c.lineno, c.colno);
              }
              c.type === p.TOKEN_LEFT_PAREN && (c = this.nextToken());
              for (var k = new g.NodeList(c.lineno, c.colno), y = new g.KeywordArgs(c.lineno, c.colno), b = !1; ; ) {
                if (c = this.peekToken(), !u && c.type === p.TOKEN_RIGHT_PAREN) {
                  this.nextToken();
                  break;
                } else if (u && c.type === p.TOKEN_BLOCK_END)
                  break;
                if (b && !this.skip(p.TOKEN_COMMA))
                  this.fail("parseSignature: expected comma after expression", c.lineno, c.colno);
                else {
                  var l = this.parseExpression();
                  this.skipValue(p.TOKEN_OPERATOR, "=") ? y.addChild(new g.Pair(l.lineno, l.colno, l, this.parseExpression())) : k.addChild(l);
                }
                b = !0;
              }
              return y.children.length && k.addChild(y), k;
            }, T.parseUntilBlocks = function() {
              for (var s = this.breakOnBlocks, u = arguments.length, c = new Array(u), k = 0; k < u; k++)
                c[k] = arguments[k];
              this.breakOnBlocks = c;
              var y = this.parse();
              return this.breakOnBlocks = s, y;
            }, T.parseNodes = function() {
              for (var s, u = []; s = this.nextToken(); )
                if (s.type === p.TOKEN_DATA) {
                  var c = s.value, k = this.peekToken(), y = k && k.value;
                  this.dropLeadingWhitespace && (c = c.replace(/^\s*/, ""), this.dropLeadingWhitespace = !1), k && (k.type === p.TOKEN_BLOCK_START && y.charAt(y.length - 1) === "-" || k.type === p.TOKEN_VARIABLE_START && y.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || k.type === p.TOKEN_COMMENT && y.charAt(this.tokens.tags.COMMENT_START.length) === "-") && (c = c.replace(/\s*$/, "")), u.push(new g.Output(s.lineno, s.colno, [new g.TemplateData(s.lineno, s.colno, c)]));
                } else if (s.type === p.TOKEN_BLOCK_START) {
                  this.dropLeadingWhitespace = !1;
                  var b = this.parseStatement();
                  if (!b)
                    break;
                  u.push(b);
                } else if (s.type === p.TOKEN_VARIABLE_START) {
                  var l = this.parseExpression();
                  this.dropLeadingWhitespace = !1, this.advanceAfterVariableEnd(), u.push(new g.Output(s.lineno, s.colno, [l]));
                } else
                  s.type === p.TOKEN_COMMENT ? this.dropLeadingWhitespace = s.value.charAt(s.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-" : this.fail("Unexpected token at top-level: " + s.type, s.lineno, s.colno);
              return u;
            }, T.parse = function() {
              return new g.NodeList(0, 0, this.parseNodes());
            }, T.parseAsRoot = function() {
              return new g.Root(0, 0, this.parseNodes());
            }, I;
          }(m);
          t.exports = {
            parse: function(I, T, R) {
              var s = new S(p.lex(I, R));
              return T !== void 0 && (s.extensions = T), s.parseAsRoot();
            },
            Parser: S
          };
        },
        /* 9 */
        /***/
        function(t, i, r) {
          var n = r(0), a = ` 
	\r `, p = "()[]{}%*-+~/#,:|.<>=!", g = "0123456789", m = "{%", L = "%}", S = "{{", P = "}}", I = "{#", T = "#}", R = "string", s = "whitespace", u = "data", c = "block-start", k = "block-end", y = "variable-start", b = "variable-end", l = "comment", f = "left-paren", v = "right-paren", h = "left-bracket", d = "right-bracket", _ = "left-curly", w = "right-curly", A = "operator", B = "comma", N = "colon", F = "tilde", K = "pipe", x = "int", E = "float", C = "boolean", j = "none", D = "symbol", Q = "special", ie = "regex";
          function z(pe, X, Z, $) {
            return {
              type: pe,
              value: X,
              lineno: Z,
              colno: $
            };
          }
          var ce = /* @__PURE__ */ function() {
            function pe(Z, $) {
              this.str = Z, this.index = 0, this.len = Z.length, this.lineno = 0, this.colno = 0, this.in_code = !1, $ = $ || {};
              var W = $.tags || {};
              this.tags = {
                BLOCK_START: W.blockStart || m,
                BLOCK_END: W.blockEnd || L,
                VARIABLE_START: W.variableStart || S,
                VARIABLE_END: W.variableEnd || P,
                COMMENT_START: W.commentStart || I,
                COMMENT_END: W.commentEnd || T
              }, this.trimBlocks = !!$.trimBlocks, this.lstripBlocks = !!$.lstripBlocks;
            }
            var X = pe.prototype;
            return X.nextToken = function() {
              var $ = this.lineno, W = this.colno, G;
              if (this.in_code) {
                var se = this.current();
                if (this.isFinished())
                  return null;
                if (se === '"' || se === "'")
                  return z(R, this._parseString(se), $, W);
                if (G = this._extract(a))
                  return z(s, G, $, W);
                if ((G = this._extractString(this.tags.BLOCK_END)) || (G = this._extractString("-" + this.tags.BLOCK_END)))
                  return this.in_code = !1, this.trimBlocks && (se = this.current(), se === `
` ? this.forward() : se === "\r" && (this.forward(), se = this.current(), se === `
` ? this.forward() : this.back())), z(k, G, $, W);
                if ((G = this._extractString(this.tags.VARIABLE_END)) || (G = this._extractString("-" + this.tags.VARIABLE_END)))
                  return this.in_code = !1, z(b, G, $, W);
                if (se === "r" && this.str.charAt(this.index + 1) === "/") {
                  this.forwardN(2);
                  for (var we = ""; !this.isFinished(); )
                    if (this.current() === "/" && this.previous() !== "\\") {
                      this.forward();
                      break;
                    } else
                      we += this.current(), this.forward();
                  for (var he = ["g", "i", "m", "y"], Oe = ""; !this.isFinished(); ) {
                    var O = he.indexOf(this.current()) !== -1;
                    if (O)
                      Oe += this.current(), this.forward();
                    else
                      break;
                  }
                  return z(ie, {
                    body: we,
                    flags: Oe
                  }, $, W);
                } else if (p.indexOf(se) !== -1) {
                  this.forward();
                  var M = ["==", "===", "!=", "!==", "<=", ">=", "//", "**"], V = se + this.current(), U;
                  switch (n.indexOf(M, V) !== -1 && (this.forward(), se = V, n.indexOf(M, V + this.current()) !== -1 && (se = V + this.current(), this.forward())), se) {
                    case "(":
                      U = f;
                      break;
                    case ")":
                      U = v;
                      break;
                    case "[":
                      U = h;
                      break;
                    case "]":
                      U = d;
                      break;
                    case "{":
                      U = _;
                      break;
                    case "}":
                      U = w;
                      break;
                    case ",":
                      U = B;
                      break;
                    case ":":
                      U = N;
                      break;
                    case "~":
                      U = F;
                      break;
                    case "|":
                      U = K;
                      break;
                    default:
                      U = A;
                  }
                  return z(U, se, $, W);
                } else if (G = this._extractUntil(a + p), G.match(/^[-+]?[0-9]+$/))
                  if (this.current() === ".") {
                    this.forward();
                    var Y = this._extract(g);
                    return z(E, G + "." + Y, $, W);
                  } else
                    return z(x, G, $, W);
                else {
                  if (G.match(/^(true|false)$/))
                    return z(C, G, $, W);
                  if (G === "none")
                    return z(j, G, $, W);
                  if (G === "null")
                    return z(j, G, $, W);
                  if (G)
                    return z(D, G, $, W);
                  throw new Error("Unexpected value while parsing: " + G);
                }
              } else {
                var J = this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);
                if (this.isFinished())
                  return null;
                if ((G = this._extractString(this.tags.BLOCK_START + "-")) || (G = this._extractString(this.tags.BLOCK_START)))
                  return this.in_code = !0, z(c, G, $, W);
                if ((G = this._extractString(this.tags.VARIABLE_START + "-")) || (G = this._extractString(this.tags.VARIABLE_START)))
                  return this.in_code = !0, z(y, G, $, W);
                G = "";
                var le, ee = !1;
                for (this._matches(this.tags.COMMENT_START) && (ee = !0, G = this._extractString(this.tags.COMMENT_START)); (le = this._extractUntil(J)) !== null; )
                  if (G += le, (this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !ee) {
                    if (this.lstripBlocks && this._matches(this.tags.BLOCK_START) && this.colno > 0 && this.colno <= G.length) {
                      var ue = G.slice(-this.colno);
                      if (/^\s+$/.test(ue) && (G = G.slice(0, -this.colno), !G.length))
                        return this.nextToken();
                    }
                    break;
                  } else if (this._matches(this.tags.COMMENT_END)) {
                    if (!ee)
                      throw new Error("unexpected end of comment");
                    G += this._extractString(this.tags.COMMENT_END);
                    break;
                  } else
                    G += this.current(), this.forward();
                if (le === null && ee)
                  throw new Error("expected end of comment, got end of file");
                return z(ee ? l : u, G, $, W);
              }
            }, X._parseString = function($) {
              this.forward();
              for (var W = ""; !this.isFinished() && this.current() !== $; ) {
                var G = this.current();
                if (G === "\\") {
                  switch (this.forward(), this.current()) {
                    case "n":
                      W += `
`;
                      break;
                    case "t":
                      W += "	";
                      break;
                    case "r":
                      W += "\r";
                      break;
                    default:
                      W += this.current();
                  }
                  this.forward();
                } else
                  W += G, this.forward();
              }
              return this.forward(), W;
            }, X._matches = function($) {
              if (this.index + $.length > this.len)
                return null;
              var W = this.str.slice(this.index, this.index + $.length);
              return W === $;
            }, X._extractString = function($) {
              return this._matches($) ? (this.forwardN($.length), $) : null;
            }, X._extractUntil = function($) {
              return this._extractMatching(!0, $ || "");
            }, X._extract = function($) {
              return this._extractMatching(!1, $);
            }, X._extractMatching = function($, W) {
              if (this.isFinished())
                return null;
              var G = W.indexOf(this.current());
              if ($ && G === -1 || !$ && G !== -1) {
                var se = this.current();
                this.forward();
                for (var we = W.indexOf(this.current()); ($ && we === -1 || !$ && we !== -1) && !this.isFinished(); )
                  se += this.current(), this.forward(), we = W.indexOf(this.current());
                return se;
              }
              return "";
            }, X._extractRegex = function($) {
              var W = this.currentStr().match($);
              return W ? (this.forwardN(W[0].length), W) : null;
            }, X.isFinished = function() {
              return this.index >= this.len;
            }, X.forwardN = function($) {
              for (var W = 0; W < $; W++)
                this.forward();
            }, X.forward = function() {
              this.index++, this.previous() === `
` ? (this.lineno++, this.colno = 0) : this.colno++;
            }, X.backN = function($) {
              for (var W = 0; W < $; W++)
                this.back();
            }, X.back = function() {
              if (this.index--, this.current() === `
`) {
                this.lineno--;
                var $ = this.src.lastIndexOf(`
`, this.index - 1);
                $ === -1 ? this.colno = this.index : this.colno = this.index - $;
              } else
                this.colno--;
            }, X.current = function() {
              return this.isFinished() ? "" : this.str.charAt(this.index);
            }, X.currentStr = function() {
              return this.isFinished() ? "" : this.str.substr(this.index);
            }, X.previous = function() {
              return this.str.charAt(this.index - 1);
            }, pe;
          }();
          t.exports = {
            lex: function(X, Z) {
              return new ce(X, Z);
            },
            TOKEN_STRING: R,
            TOKEN_WHITESPACE: s,
            TOKEN_DATA: u,
            TOKEN_BLOCK_START: c,
            TOKEN_BLOCK_END: k,
            TOKEN_VARIABLE_START: y,
            TOKEN_VARIABLE_END: b,
            TOKEN_COMMENT: l,
            TOKEN_LEFT_PAREN: f,
            TOKEN_RIGHT_PAREN: v,
            TOKEN_LEFT_BRACKET: h,
            TOKEN_RIGHT_BRACKET: d,
            TOKEN_LEFT_CURLY: _,
            TOKEN_RIGHT_CURLY: w,
            TOKEN_OPERATOR: A,
            TOKEN_COMMA: B,
            TOKEN_COLON: N,
            TOKEN_TILDE: F,
            TOKEN_PIPE: K,
            TOKEN_INT: x,
            TOKEN_FLOAT: E,
            TOKEN_BOOLEAN: C,
            TOKEN_NONE: j,
            TOKEN_SYMBOL: D,
            TOKEN_SPECIAL: Q,
            TOKEN_REGEX: ie
          };
        },
        /* 10 */
        /***/
        function(t, i, r) {
          function n(S, P) {
            S.prototype = Object.create(P.prototype), S.prototype.constructor = S, a(S, P);
          }
          function a(S, P) {
            return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(T, R) {
              return T.__proto__ = R, T;
            }, a(S, P);
          }
          var p = r(6), g = r(19), m = g.PrecompiledLoader, L = /* @__PURE__ */ function(S) {
            n(P, S);
            function P(T, R) {
              var s;
              return s = S.call(this) || this, s.baseURL = T || ".", R = R || {}, s.useCache = !!R.useCache, s.async = !!R.async, s;
            }
            var I = P.prototype;
            return I.resolve = function(R, s) {
              throw new Error("relative templates not support in the browser yet");
            }, I.getSource = function(R, s) {
              var u = this, c = this.useCache, k;
              return this.fetch(this.baseURL + "/" + R, function(y, b) {
                if (y)
                  if (s)
                    s(y.content);
                  else if (y.status === 404)
                    k = null;
                  else
                    throw y.content;
                else
                  k = {
                    src: b,
                    path: R,
                    noCache: !c
                  }, u.emit("load", R, k), s && s(null, k);
              }), k;
            }, I.fetch = function(R, s) {
              if (typeof window > "u")
                throw new Error("WebLoader can only by used in a browser");
              var u = new XMLHttpRequest(), c = !0;
              u.onreadystatechange = function() {
                u.readyState === 4 && c && (c = !1, u.status === 0 || u.status === 200 ? s(null, u.responseText) : s({
                  status: u.status,
                  content: u.responseText
                }));
              }, R += (R.indexOf("?") === -1 ? "?" : "&") + "s=" + new Date().getTime(), u.open("GET", R, this.async), u.send();
            }, P;
          }(p);
          t.exports = {
            WebLoader: L,
            PrecompiledLoader: m
          };
        },
        /* 11 */
        /***/
        function(t, i, r) {
          var n = r(0), a = r(7), p = a.Environment, g = a.Template, m = r(6), L = r(10), S = r(23), P = r(5), I = r(8), T = r(9), R = r(2), s = r(3), u = r(25), c;
          function k(y, b) {
            b = b || {}, n.isObject(y) && (b = y, y = null);
            var l;
            return L.FileSystemLoader ? l = new L.FileSystemLoader(y, {
              watch: b.watch,
              noCache: b.noCache
            }) : L.WebLoader && (l = new L.WebLoader(y, {
              useCache: b.web && b.web.useCache,
              async: b.web && b.web.async
            })), c = new p(l, b), b && b.express && c.express(b.express), c;
          }
          t.exports = {
            Environment: p,
            Template: g,
            Loader: m,
            FileSystemLoader: L.FileSystemLoader,
            NodeResolveLoader: L.NodeResolveLoader,
            PrecompiledLoader: L.PrecompiledLoader,
            WebLoader: L.WebLoader,
            compiler: P,
            parser: I,
            lexer: T,
            runtime: R,
            lib: n,
            nodes: s,
            installJinjaCompat: u,
            configure: k,
            reset: function() {
              c = void 0;
            },
            compile: function(b, l, f, v) {
              return c || k(), new g(b, l, f, v);
            },
            render: function(b, l, f) {
              return c || k(), c.render(b, l, f);
            },
            renderString: function(b, l, f) {
              return c || k(), c.renderString(b, l, f);
            },
            precompile: S ? S.precompile : void 0,
            precompileString: S ? S.precompileString : void 0
          };
        },
        /* 12 */
        /***/
        function(t, i, r) {
          var n = r(13), a = [], p = [], g = n.makeRequestCallFromTimer(m);
          function m() {
            if (p.length)
              throw p.shift();
          }
          t.exports = L;
          function L(P) {
            var I;
            a.length ? I = a.pop() : I = new S(), I.task = P, n(I);
          }
          function S() {
            this.task = null;
          }
          S.prototype.call = function() {
            try {
              this.task.call();
            } catch (P) {
              L.onerror ? L.onerror(P) : (p.push(P), g());
            } finally {
              this.task = null, a[a.length] = this;
            }
          };
        },
        /* 13 */
        /***/
        function(t, i, r) {
          (function(n) {
            t.exports = a;
            function a(s) {
              p.length || g(), p[p.length] = s;
            }
            var p = [], g, m = 0, L = 1024;
            function S() {
              for (; m < p.length; ) {
                var s = m;
                if (m = m + 1, p[s].call(), m > L) {
                  for (var u = 0, c = p.length - m; u < c; u++)
                    p[u] = p[u + m];
                  p.length -= m, m = 0;
                }
              }
              p.length = 0, m = 0;
            }
            var P = typeof n < "u" ? n : self, I = P.MutationObserver || P.WebKitMutationObserver;
            typeof I == "function" ? g = T(S) : g = R(S), a.requestFlush = g;
            function T(s) {
              var u = 1, c = new I(s), k = document.createTextNode("");
              return c.observe(k, { characterData: !0 }), function() {
                u = -u, k.data = u;
              };
            }
            function R(s) {
              return function() {
                var c = setTimeout(y, 0), k = setInterval(y, 50);
                function y() {
                  clearTimeout(c), clearInterval(k), s();
                }
              };
            }
            a.makeRequestCallFromTimer = R;
          }).call(i, r(14));
        },
        /* 14 */
        /***/
        function(t, i) {
          var r;
          r = function() {
            return this;
          }();
          try {
            r = r || Function("return this")() || (0, eval)("this");
          } catch {
            typeof window == "object" && (r = window);
          }
          t.exports = r;
        },
        /* 15 */
        /***/
        function(t, i, r) {
          var n, a;
          (function(p) {
            var g = function() {
              var I = Array.prototype.slice.call(arguments);
              typeof I[0] == "function" && I[0].apply(null, I.splice(1));
            }, m = function(I) {
              typeof setImmediate == "function" ? setImmediate(I) : typeof process < "u" && process.nextTick ? process.nextTick(I) : setTimeout(I, 0);
            }, L = function(I) {
              var T = function(R) {
                var s = function() {
                  return I.length && I[R].apply(null, arguments), s.next();
                };
                return s.next = function() {
                  return R < I.length - 1 ? T(R + 1) : null;
                }, s;
              };
              return T(0);
            }, S = Array.isArray || function(I) {
              return Object.prototype.toString.call(I) === "[object Array]";
            }, P = function(I, T, R) {
              var s = R ? m : g;
              if (T = T || function() {
              }, !S(I)) {
                var u = new Error("First argument to waterfall must be an array of functions");
                return T(u);
              }
              if (!I.length)
                return T();
              var c = function(k) {
                return function(y) {
                  if (y)
                    T.apply(null, arguments), T = function() {
                    };
                  else {
                    var b = Array.prototype.slice.call(arguments, 1), l = k.next();
                    l ? b.push(c(l)) : b.push(T), s(function() {
                      k.apply(null, b);
                    });
                  }
                };
              };
              c(L(I))();
            };
            n = [], a = function() {
              return P;
            }.apply(i, n), a !== void 0 && (t.exports = a);
          })();
        },
        /* 16 */
        /***/
        function(t, i, r) {
          var n = typeof Reflect == "object" ? Reflect : null, a = n && typeof n.apply == "function" ? n.apply : function(d, _, w) {
            return Function.prototype.apply.call(d, _, w);
          }, p;
          n && typeof n.ownKeys == "function" ? p = n.ownKeys : Object.getOwnPropertySymbols ? p = function(d) {
            return Object.getOwnPropertyNames(d).concat(Object.getOwnPropertySymbols(d));
          } : p = function(d) {
            return Object.getOwnPropertyNames(d);
          };
          function g(h) {
            console && console.warn && console.warn(h);
          }
          var m = Number.isNaN || function(d) {
            return d !== d;
          };
          function L() {
            L.init.call(this);
          }
          t.exports = L, t.exports.once = l, L.EventEmitter = L, L.prototype._events = void 0, L.prototype._eventsCount = 0, L.prototype._maxListeners = void 0;
          var S = 10;
          function P(h) {
            if (typeof h != "function")
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof h);
          }
          Object.defineProperty(L, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
              return S;
            },
            set: function(h) {
              if (typeof h != "number" || h < 0 || m(h))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + h + ".");
              S = h;
            }
          }), L.init = function() {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, L.prototype.setMaxListeners = function(d) {
            if (typeof d != "number" || d < 0 || m(d))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + d + ".");
            return this._maxListeners = d, this;
          };
          function I(h) {
            return h._maxListeners === void 0 ? L.defaultMaxListeners : h._maxListeners;
          }
          L.prototype.getMaxListeners = function() {
            return I(this);
          }, L.prototype.emit = function(d) {
            for (var _ = [], w = 1; w < arguments.length; w++)
              _.push(arguments[w]);
            var A = d === "error", B = this._events;
            if (B !== void 0)
              A = A && B.error === void 0;
            else if (!A)
              return !1;
            if (A) {
              var N;
              if (_.length > 0 && (N = _[0]), N instanceof Error)
                throw N;
              var F = new Error("Unhandled error." + (N ? " (" + N.message + ")" : ""));
              throw F.context = N, F;
            }
            var K = B[d];
            if (K === void 0)
              return !1;
            if (typeof K == "function")
              a(K, this, _);
            else
              for (var x = K.length, E = k(K, x), w = 0; w < x; ++w)
                a(E[w], this, _);
            return !0;
          };
          function T(h, d, _, w) {
            var A, B, N;
            if (P(_), B = h._events, B === void 0 ? (B = h._events = /* @__PURE__ */ Object.create(null), h._eventsCount = 0) : (B.newListener !== void 0 && (h.emit(
              "newListener",
              d,
              _.listener ? _.listener : _
            ), B = h._events), N = B[d]), N === void 0)
              N = B[d] = _, ++h._eventsCount;
            else if (typeof N == "function" ? N = B[d] = w ? [_, N] : [N, _] : w ? N.unshift(_) : N.push(_), A = I(h), A > 0 && N.length > A && !N.warned) {
              N.warned = !0;
              var F = new Error("Possible EventEmitter memory leak detected. " + N.length + " " + String(d) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              F.name = "MaxListenersExceededWarning", F.emitter = h, F.type = d, F.count = N.length, g(F);
            }
            return h;
          }
          L.prototype.addListener = function(d, _) {
            return T(this, d, _, !1);
          }, L.prototype.on = L.prototype.addListener, L.prototype.prependListener = function(d, _) {
            return T(this, d, _, !0);
          };
          function R() {
            if (!this.fired)
              return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function s(h, d, _) {
            var w = { fired: !1, wrapFn: void 0, target: h, type: d, listener: _ }, A = R.bind(w);
            return A.listener = _, w.wrapFn = A, A;
          }
          L.prototype.once = function(d, _) {
            return P(_), this.on(d, s(this, d, _)), this;
          }, L.prototype.prependOnceListener = function(d, _) {
            return P(_), this.prependListener(d, s(this, d, _)), this;
          }, L.prototype.removeListener = function(d, _) {
            var w, A, B, N, F;
            if (P(_), A = this._events, A === void 0)
              return this;
            if (w = A[d], w === void 0)
              return this;
            if (w === _ || w.listener === _)
              --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete A[d], A.removeListener && this.emit("removeListener", d, w.listener || _));
            else if (typeof w != "function") {
              for (B = -1, N = w.length - 1; N >= 0; N--)
                if (w[N] === _ || w[N].listener === _) {
                  F = w[N].listener, B = N;
                  break;
                }
              if (B < 0)
                return this;
              B === 0 ? w.shift() : y(w, B), w.length === 1 && (A[d] = w[0]), A.removeListener !== void 0 && this.emit("removeListener", d, F || _);
            }
            return this;
          }, L.prototype.off = L.prototype.removeListener, L.prototype.removeAllListeners = function(d) {
            var _, w, A;
            if (w = this._events, w === void 0)
              return this;
            if (w.removeListener === void 0)
              return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : w[d] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete w[d]), this;
            if (arguments.length === 0) {
              var B = Object.keys(w), N;
              for (A = 0; A < B.length; ++A)
                N = B[A], N !== "removeListener" && this.removeAllListeners(N);
              return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
            }
            if (_ = w[d], typeof _ == "function")
              this.removeListener(d, _);
            else if (_ !== void 0)
              for (A = _.length - 1; A >= 0; A--)
                this.removeListener(d, _[A]);
            return this;
          };
          function u(h, d, _) {
            var w = h._events;
            if (w === void 0)
              return [];
            var A = w[d];
            return A === void 0 ? [] : typeof A == "function" ? _ ? [A.listener || A] : [A] : _ ? b(A) : k(A, A.length);
          }
          L.prototype.listeners = function(d) {
            return u(this, d, !0);
          }, L.prototype.rawListeners = function(d) {
            return u(this, d, !1);
          }, L.listenerCount = function(h, d) {
            return typeof h.listenerCount == "function" ? h.listenerCount(d) : c.call(h, d);
          }, L.prototype.listenerCount = c;
          function c(h) {
            var d = this._events;
            if (d !== void 0) {
              var _ = d[h];
              if (typeof _ == "function")
                return 1;
              if (_ !== void 0)
                return _.length;
            }
            return 0;
          }
          L.prototype.eventNames = function() {
            return this._eventsCount > 0 ? p(this._events) : [];
          };
          function k(h, d) {
            for (var _ = new Array(d), w = 0; w < d; ++w)
              _[w] = h[w];
            return _;
          }
          function y(h, d) {
            for (; d + 1 < h.length; d++)
              h[d] = h[d + 1];
            h.pop();
          }
          function b(h) {
            for (var d = new Array(h.length), _ = 0; _ < d.length; ++_)
              d[_] = h[_].listener || h[_];
            return d;
          }
          function l(h, d) {
            return new Promise(function(_, w) {
              function A(N) {
                h.removeListener(d, B), w(N);
              }
              function B() {
                typeof h.removeListener == "function" && h.removeListener("error", A), _([].slice.call(arguments));
              }
              v(h, d, B, { once: !0 }), d !== "error" && f(h, A, { once: !0 });
            });
          }
          function f(h, d, _) {
            typeof h.on == "function" && v(h, "error", d, _);
          }
          function v(h, d, _, w) {
            if (typeof h.on == "function")
              w.once ? h.once(d, _) : h.on(d, _);
            else if (typeof h.addEventListener == "function")
              h.addEventListener(d, function A(B) {
                w.once && h.removeEventListener(d, A), _(B);
              });
            else
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof h);
          }
        },
        /* 17 */
        /***/
        function(t, i, r) {
          var n = r(3), a = r(0), p = 0;
          function g() {
            return "hole_" + p++;
          }
          function m(c, k) {
            for (var y = null, b = 0; b < c.length; b++) {
              var l = k(c[b]);
              l !== c[b] && (y || (y = c.slice()), y[b] = l);
            }
            return y || c;
          }
          function L(c, k, y) {
            if (!(c instanceof n.Node))
              return c;
            if (!y) {
              var b = k(c);
              if (b && b !== c)
                return b;
            }
            if (c instanceof n.NodeList) {
              var l = m(c.children, function(_) {
                return L(_, k, y);
              });
              l !== c.children && (c = new n[c.typename](c.lineno, c.colno, l));
            } else if (c instanceof n.CallExtension) {
              var f = L(c.args, k, y), v = m(c.contentArgs, function(_) {
                return L(_, k, y);
              });
              (f !== c.args || v !== c.contentArgs) && (c = new n[c.typename](c.extName, c.prop, f, v));
            } else {
              var h = c.fields.map(function(_) {
                return c[_];
              }), d = m(h, function(_) {
                return L(_, k, y);
              });
              d !== h && (c = new n[c.typename](c.lineno, c.colno), d.forEach(function(_, w) {
                c[c.fields[w]] = _;
              }));
            }
            return y && k(c) || c;
          }
          function S(c, k) {
            return L(c, k, !0);
          }
          function P(c, k, y) {
            var b = [], l = S(y ? c[y] : c, function(f) {
              var v;
              return f instanceof n.Block ? f : ((f instanceof n.Filter && a.indexOf(k, f.name.value) !== -1 || f instanceof n.CallExtensionAsync) && (v = new n.Symbol(f.lineno, f.colno, g()), b.push(new n.FilterAsync(f.lineno, f.colno, f.name, f.args, v))), v);
            });
            return y ? c[y] = l : c = l, b.length ? (b.push(c), new n.NodeList(c.lineno, c.colno, b)) : c;
          }
          function I(c, k) {
            return S(c, function(y) {
              return y instanceof n.Output ? P(y, k) : y instanceof n.Set ? P(y, k, "value") : y instanceof n.For ? P(y, k, "arr") : y instanceof n.If ? P(y, k, "cond") : y instanceof n.CallExtension ? P(y, k, "args") : void 0;
            });
          }
          function T(c) {
            return L(c, function(k) {
              if (k instanceof n.Block) {
                var y = !1, b = g();
                k.body = L(k.body, function(l) {
                  if (l instanceof n.FunCall && l.name.value === "super")
                    return y = !0, new n.Symbol(l.lineno, l.colno, b);
                }), y && k.body.children.unshift(new n.Super(0, 0, k.name, new n.Symbol(0, 0, b)));
              }
            });
          }
          function R(c) {
            return S(c, function(k) {
              if (!(!(k instanceof n.If) && !(k instanceof n.For))) {
                var y = !1;
                if (L(k, function(b) {
                  if (b instanceof n.FilterAsync || b instanceof n.IfAsync || b instanceof n.AsyncEach || b instanceof n.AsyncAll || b instanceof n.CallExtensionAsync)
                    return y = !0, b;
                }), y) {
                  if (k instanceof n.If)
                    return new n.IfAsync(k.lineno, k.colno, k.cond, k.body, k.else_);
                  if (k instanceof n.For && !(k instanceof n.AsyncAll))
                    return new n.AsyncEach(k.lineno, k.colno, k.arr, k.name, k.body, k.else_);
                }
              }
            });
          }
          function s(c, k) {
            return R(T(I(c, k)));
          }
          function u(c, k) {
            return s(c, k || []);
          }
          t.exports = {
            transform: u
          };
        },
        /* 18 */
        /***/
        function(t, p, r) {
          var n = r(0), a = r(2), p = t.exports = {};
          function g(O, M) {
            return O == null || O === !1 ? M : O;
          }
          p.abs = Math.abs;
          function m(O) {
            return O !== O;
          }
          function L(O, M, V) {
            var U, Y = [], J = [];
            for (U = 0; U < O.length; U++)
              U % M === 0 && J.length && (Y.push(J), J = []), J.push(O[U]);
            if (J.length) {
              if (V)
                for (U = J.length; U < M; U++)
                  J.push(V);
              Y.push(J);
            }
            return Y;
          }
          p.batch = L;
          function S(O) {
            O = g(O, "");
            var M = O.toLowerCase();
            return a.copySafeness(O, M.charAt(0).toUpperCase() + M.slice(1));
          }
          p.capitalize = S;
          function P(O, M) {
            if (O = g(O, ""), M = M || 80, O.length >= M)
              return O;
            var V = M - O.length, U = n.repeat(" ", V / 2 - V % 2), Y = n.repeat(" ", V / 2);
            return a.copySafeness(O, U + O + Y);
          }
          p.center = P;
          function I(O, M, V) {
            return V ? O || M : O !== void 0 ? O : M;
          }
          p.default = I;
          function T(O, M, V) {
            if (!n.isObject(O))
              throw new n.TemplateError("dictsort filter: val must be an object");
            var U = [];
            for (var Y in O)
              U.push([Y, O[Y]]);
            var J;
            if (V === void 0 || V === "key")
              J = 0;
            else if (V === "value")
              J = 1;
            else
              throw new n.TemplateError("dictsort filter: You can only sort by either key or value");
            return U.sort(function(le, ee) {
              var ue = le[J], Ee = ee[J];
              return M || (n.isString(ue) && (ue = ue.toUpperCase()), n.isString(Ee) && (Ee = Ee.toUpperCase())), ue > Ee ? 1 : ue === Ee ? 0 : -1;
            }), U;
          }
          p.dictsort = T;
          function R(O, M) {
            return JSON.stringify(O, null, M);
          }
          p.dump = R;
          function s(O) {
            return O instanceof a.SafeString ? O : (O = O ?? "", a.markSafe(n.escape(O.toString())));
          }
          p.escape = s;
          function u(O) {
            return O instanceof a.SafeString ? O : (O = O ?? "", a.markSafe(O.toString()));
          }
          p.safe = u;
          function c(O) {
            return O[0];
          }
          p.first = c;
          function k(O) {
            return O = O ?? "", a.markSafe(n.escape(O.toString()));
          }
          p.forceescape = k;
          function y(O, M) {
            return n.groupBy(O, M, this.env.opts.throwOnUndefined);
          }
          p.groupby = y;
          function b(O, M, V) {
            if (O = g(O, ""), O === "")
              return "";
            M = M || 4;
            var U = O.split(`
`), Y = n.repeat(" ", M), J = U.map(function(le, ee) {
              return ee === 0 && !V ? le : "" + Y + le;
            }).join(`
`);
            return a.copySafeness(O, J);
          }
          p.indent = b;
          function l(O, M, V) {
            return M = M || "", V && (O = n.map(O, function(U) {
              return U[V];
            })), O.join(M);
          }
          p.join = l;
          function f(O) {
            return O[O.length - 1];
          }
          p.last = f;
          function v(O) {
            var M = g(O, "");
            return M !== void 0 ? typeof Map == "function" && M instanceof Map || typeof Set == "function" && M instanceof Set ? M.size : n.isObject(M) && !(M instanceof a.SafeString) ? n.keys(M).length : M.length : 0;
          }
          p.length = v;
          function h(O) {
            if (n.isString(O))
              return O.split("");
            if (n.isObject(O))
              return n._entries(O || {}).map(function(M) {
                var V = M[0], U = M[1];
                return {
                  key: V,
                  value: U
                };
              });
            if (n.isArray(O))
              return O;
            throw new n.TemplateError("list filter: type not iterable");
          }
          p.list = h;
          function d(O) {
            return O = g(O, ""), O.toLowerCase();
          }
          p.lower = d;
          function _(O) {
            return O == null ? "" : a.copySafeness(O, O.replace(/\r\n|\n/g, `<br />
`));
          }
          p.nl2br = _;
          function w(O) {
            return O[Math.floor(Math.random() * O.length)];
          }
          p.random = w;
          function A(O) {
            function M(V, U, Y) {
              U === void 0 && (U = "truthy");
              var J = this, le = J.env.getTest(U);
              return n.toArray(V).filter(function(ue) {
                return le.call(J, ue, Y) === O;
              });
            }
            return M;
          }
          p.reject = A(!1);
          function B(O, M) {
            return O.filter(function(V) {
              return !V[M];
            });
          }
          p.rejectattr = B, p.select = A(!0);
          function N(O, M) {
            return O.filter(function(V) {
              return !!V[M];
            });
          }
          p.selectattr = N;
          function F(O, M, V, U) {
            var Y = O;
            if (M instanceof RegExp)
              return O.replace(M, V);
            typeof U > "u" && (U = -1);
            var J = "";
            if (typeof M == "number")
              M = "" + M;
            else if (typeof M != "string")
              return O;
            if (typeof O == "number" && (O = "" + O), typeof O != "string" && !(O instanceof a.SafeString))
              return O;
            if (M === "")
              return J = V + O.split("").join(V) + V, a.copySafeness(O, J);
            var le = O.indexOf(M);
            if (U === 0 || le === -1)
              return O;
            for (var ee = 0, ue = 0; le > -1 && (U === -1 || ue < U); )
              J += O.substring(ee, le) + V, ee = le + M.length, ue++, le = O.indexOf(M, ee);
            return ee < O.length && (J += O.substring(ee)), a.copySafeness(Y, J);
          }
          p.replace = F;
          function K(O) {
            var M;
            return n.isString(O) ? M = h(O) : M = n.map(O, function(V) {
              return V;
            }), M.reverse(), n.isString(O) ? a.copySafeness(O, M.join("")) : M;
          }
          p.reverse = K;
          function x(O, M, V) {
            M = M || 0;
            var U = Math.pow(10, M), Y;
            return V === "ceil" ? Y = Math.ceil : V === "floor" ? Y = Math.floor : Y = Math.round, Y(O * U) / U;
          }
          p.round = x;
          function E(O, M, V) {
            for (var U = Math.floor(O.length / M), Y = O.length % M, J = [], le = 0, ee = 0; ee < M; ee++) {
              var ue = le + ee * U;
              ee < Y && le++;
              var Ee = le + (ee + 1) * U, ke = O.slice(ue, Ee);
              V && ee >= Y && ke.push(V), J.push(ke);
            }
            return J;
          }
          p.slice = E;
          function C(O, M, V) {
            return V === void 0 && (V = 0), M && (O = n.map(O, function(U) {
              return U[M];
            })), V + O.reduce(function(U, Y) {
              return U + Y;
            }, 0);
          }
          p.sum = C, p.sort = a.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(M, V, U, Y) {
            var J = this, le = n.map(M, function(ue) {
              return ue;
            }), ee = n.getAttrGetter(Y);
            return le.sort(function(ue, Ee) {
              var ke = Y ? ee(ue) : ue, Le = Y ? ee(Ee) : Ee;
              if (J.env.opts.throwOnUndefined && Y && (ke === void 0 || Le === void 0))
                throw new TypeError('sort: attribute "' + Y + '" resolved to undefined');
              return !U && n.isString(ke) && n.isString(Le) && (ke = ke.toLowerCase(), Le = Le.toLowerCase()), ke < Le ? V ? 1 : -1 : ke > Le ? V ? -1 : 1 : 0;
            }), le;
          });
          function j(O) {
            return a.copySafeness(O, O);
          }
          p.string = j;
          function D(O, M) {
            O = g(O, "");
            var V = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, U = ie(O.replace(V, "")), Y = "";
            return M ? Y = U.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, `
`).replace(/\n\n\n+/g, `

`) : Y = U.replace(/\s+/gi, " "), a.copySafeness(O, Y);
          }
          p.striptags = D;
          function Q(O) {
            O = g(O, "");
            var M = O.split(" ").map(function(V) {
              return S(V);
            });
            return a.copySafeness(O, M.join(" "));
          }
          p.title = Q;
          function ie(O) {
            return a.copySafeness(O, O.replace(/^\s*|\s*$/g, ""));
          }
          p.trim = ie;
          function z(O, M, V, U) {
            var Y = O;
            if (O = g(O, ""), M = M || 255, O.length <= M)
              return O;
            if (V)
              O = O.substring(0, M);
            else {
              var J = O.lastIndexOf(" ", M);
              J === -1 && (J = M), O = O.substring(0, J);
            }
            return O += U ?? "...", a.copySafeness(Y, O);
          }
          p.truncate = z;
          function ce(O) {
            return O = g(O, ""), O.toUpperCase();
          }
          p.upper = ce;
          function pe(O) {
            var M = encodeURIComponent;
            if (n.isString(O))
              return M(O);
            var V = n.isArray(O) ? O : n._entries(O);
            return V.map(function(U) {
              var Y = U[0], J = U[1];
              return M(Y) + "=" + M(J);
            }).join("&");
          }
          p.urlencode = pe;
          var X = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, Z = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, $ = /^https?:\/\/.*$/, W = /^www\./, G = /\.(?:org|net|com)(?:\:|\/|$)/;
          function se(O, M, V) {
            m(M) && (M = 1 / 0);
            var U = V === !0 ? ' rel="nofollow"' : "", Y = O.split(/(\s+)/).filter(function(J) {
              return J && J.length;
            }).map(function(J) {
              var le = J.match(X), ee = le ? le[1] : J, ue = ee.substr(0, M);
              return $.test(ee) ? '<a href="' + ee + '"' + U + ">" + ue + "</a>" : W.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + ue + "</a>" : Z.test(ee) ? '<a href="mailto:' + ee + '">' + ee + "</a>" : G.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + ue + "</a>" : J;
            });
            return Y.join("");
          }
          p.urlize = se;
          function we(O) {
            O = g(O, "");
            var M = O ? O.match(/\w+/g) : null;
            return M ? M.length : null;
          }
          p.wordcount = we;
          function he(O, M) {
            var V = parseFloat(O);
            return m(V) ? M : V;
          }
          p.float = he;
          var Oe = a.makeMacro(["value", "default", "base"], [], function(M, V, U) {
            U === void 0 && (U = 10);
            var Y = parseInt(M, U);
            return m(Y) ? V : Y;
          });
          p.int = Oe, p.d = p.default, p.e = p.escape;
        },
        /* 19 */
        /***/
        function(t, i, r) {
          function n(m, L) {
            m.prototype = Object.create(L.prototype), m.prototype.constructor = m, a(m, L);
          }
          function a(m, L) {
            return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(P, I) {
              return P.__proto__ = I, P;
            }, a(m, L);
          }
          var p = r(6), g = /* @__PURE__ */ function(m) {
            n(L, m);
            function L(P) {
              var I;
              return I = m.call(this) || this, I.precompiled = P || {}, I;
            }
            var S = L.prototype;
            return S.getSource = function(I) {
              return this.precompiled[I] ? {
                src: {
                  type: "code",
                  obj: this.precompiled[I]
                },
                path: I
              } : null;
            }, L;
          }(p);
          t.exports = {
            PrecompiledLoader: g
          };
        },
        /* 20 */
        /***/
        function(t, i, r) {
          var n = r(2).SafeString;
          function a(w) {
            return typeof w == "function";
          }
          i.callable = a;
          function p(w) {
            return w !== void 0;
          }
          i.defined = p;
          function g(w, A) {
            return w % A === 0;
          }
          i.divisibleby = g;
          function m(w) {
            return w instanceof n;
          }
          i.escaped = m;
          function L(w, A) {
            return w === A;
          }
          i.equalto = L, i.eq = i.equalto, i.sameas = i.equalto;
          function S(w) {
            return w % 2 === 0;
          }
          i.even = S;
          function P(w) {
            return !w;
          }
          i.falsy = P;
          function I(w, A) {
            return w >= A;
          }
          i.ge = I;
          function T(w, A) {
            return w > A;
          }
          i.greaterthan = T, i.gt = i.greaterthan;
          function R(w, A) {
            return w <= A;
          }
          i.le = R;
          function s(w, A) {
            return w < A;
          }
          i.lessthan = s, i.lt = i.lessthan;
          function u(w) {
            return w.toLowerCase() === w;
          }
          i.lower = u;
          function c(w, A) {
            return w !== A;
          }
          i.ne = c;
          function k(w) {
            return w === null;
          }
          i.null = k;
          function y(w) {
            return typeof w == "number";
          }
          i.number = y;
          function b(w) {
            return w % 2 === 1;
          }
          i.odd = b;
          function l(w) {
            return typeof w == "string";
          }
          i.string = l;
          function f(w) {
            return !!w;
          }
          i.truthy = f;
          function v(w) {
            return w === void 0;
          }
          i.undefined = v;
          function h(w) {
            return w.toUpperCase() === w;
          }
          i.upper = h;
          function d(w) {
            return typeof Symbol < "u" ? !!w[Symbol.iterator] : Array.isArray(w) || typeof w == "string";
          }
          i.iterable = d;
          function _(w) {
            var A = w != null && typeof w == "object" && !Array.isArray(w);
            return Set ? A && !(w instanceof Set) : A;
          }
          i.mapping = _;
        },
        /* 21 */
        /***/
        function(t, i, r) {
          function n(g) {
            var m = -1;
            return {
              current: null,
              reset: function() {
                m = -1, this.current = null;
              },
              next: function() {
                return m++, m >= g.length && (m = 0), this.current = g[m], this.current;
              }
            };
          }
          function a(g) {
            g = g || ",";
            var m = !0;
            return function() {
              var L = m ? "" : g;
              return m = !1, L;
            };
          }
          function p() {
            return {
              range: function(m, L, S) {
                typeof L > "u" ? (L = m, m = 0, S = 1) : S || (S = 1);
                var P = [];
                if (S > 0)
                  for (var I = m; I < L; I += S)
                    P.push(I);
                else
                  for (var T = m; T > L; T += S)
                    P.push(T);
                return P;
              },
              cycler: function() {
                return n(Array.prototype.slice.call(arguments));
              },
              joiner: function(m) {
                return a(m);
              }
            };
          }
          t.exports = p;
        },
        /* 22 */
        /***/
        function(t, i, r) {
          var n = r(4);
          t.exports = function(p, g) {
            function m(L, S) {
              if (this.name = L, this.path = L, this.defaultEngine = S.defaultEngine, this.ext = n.extname(L), !this.ext && !this.defaultEngine)
                throw new Error("No default engine was specified and no extension was provided.");
              this.ext || (this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine);
            }
            return m.prototype.render = function(S, P) {
              p.render(this.name, S, P);
            }, g.set("view", m), g.set("nunjucksEnv", p), p;
          };
        },
        /* 23 */
        /***/
        function(t, i, r) {
          var n = r(4), a = r(4), p = r(0), g = p._prettifyError, m = r(5), L = r(7), S = L.Environment, P = r(24);
          function I(u, c) {
            return Array.isArray(c) ? c.some(function(k) {
              return u.match(k);
            }) : !1;
          }
          function T(u, c) {
            c = c || {}, c.isString = !0;
            var k = c.env || new S([]), y = c.wrapper || P;
            if (!c.name)
              throw new Error('the "name" option is required when compiling a string');
            return y([s(u, c.name, k)], c);
          }
          function R(u, c) {
            c = c || {};
            var k = c.env || new S([]), y = c.wrapper || P;
            if (c.isString)
              return T(u, c);
            var b = n.existsSync(u) && n.statSync(u), l = [], f = [];
            function v(_) {
              n.readdirSync(_).forEach(function(w) {
                var A = a.join(_, w), B = A.substr(a.join(u, "/").length), N = n.statSync(A);
                N && N.isDirectory() ? (B += "/", I(B, c.exclude) || v(A)) : I(B, c.include) && f.push(A);
              });
            }
            if (b.isFile())
              l.push(s(n.readFileSync(u, "utf-8"), c.name || u, k));
            else if (b.isDirectory()) {
              v(u);
              for (var h = 0; h < f.length; h++) {
                var d = f[h].replace(a.join(u, "/"), "");
                try {
                  l.push(s(n.readFileSync(f[h], "utf-8"), d, k));
                } catch (_) {
                  if (c.force)
                    console.error(_);
                  else
                    throw _;
                }
              }
            }
            return y(l, c);
          }
          function s(u, c, k) {
            k = k || new S([]);
            var y = k.asyncFilters, b = k.extensionsList, l;
            c = c.replace(/\\/g, "/");
            try {
              l = m.compile(u, y, b, c, k.opts);
            } catch (f) {
              throw g(c, !1, f);
            }
            return {
              name: c,
              template: l
            };
          }
          t.exports = {
            precompile: R,
            precompileString: T
          };
        },
        /* 24 */
        /***/
        function(t, i, r) {
          function n(a, p) {
            var g = "";
            p = p || {};
            for (var m = 0; m < a.length; m++) {
              var L = JSON.stringify(a[m].name), S = a[m].template;
              g += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + L + `] = (function() {
` + S + `
})();
`, p.asFunction && (g += "return function(ctx, cb) { return nunjucks.render(" + L + `, ctx, cb); }
`), g += `})();
`;
            }
            return g;
          }
          t.exports = n;
        },
        /* 25 */
        /***/
        function(t, i, r) {
          function n() {
            var a = this.runtime, p = this.lib, g = this.compiler.Compiler, m = this.parser.Parser, L = this.nodes, S = this.lexer, P = a.contextOrFrameLookup, I = a.memberLookup, T, R;
            g && (T = g.prototype.assertType), m && (R = m.prototype.parseAggregate);
            function s() {
              a.contextOrFrameLookup = P, a.memberLookup = I, g && (g.prototype.assertType = T), m && (m.prototype.parseAggregate = R);
            }
            a.contextOrFrameLookup = function(v, h, d) {
              var _ = P.apply(this, arguments);
              if (_ !== void 0)
                return _;
              switch (d) {
                case "True":
                  return !0;
                case "False":
                  return !1;
                case "None":
                  return null;
                default:
                  return;
              }
            };
            function u(f) {
              return {
                index: f.index,
                lineno: f.lineno,
                colno: f.colno
              };
            }
            if (L && g && m) {
              var c = L.Node.extend("Slice", {
                fields: ["start", "stop", "step"],
                init: function(v, h, d, _, w) {
                  d = d || new L.Literal(v, h, null), _ = _ || new L.Literal(v, h, null), w = w || new L.Literal(v, h, 1), this.parent(v, h, d, _, w);
                }
              });
              g.prototype.assertType = function(v) {
                v instanceof c || T.apply(this, arguments);
              }, g.prototype.compileSlice = function(v, h) {
                this._emit("("), this._compileExpression(v.start, h), this._emit("),("), this._compileExpression(v.stop, h), this._emit("),("), this._compileExpression(v.step, h), this._emit(")");
              }, m.prototype.parseAggregate = function() {
                var v = this, h = u(this.tokens);
                h.colno--, h.index--;
                try {
                  return R.apply(this);
                } catch (K) {
                  var d = u(this.tokens), _ = function() {
                    return p._assign(v.tokens, d), K;
                  };
                  p._assign(this.tokens, h), this.peeked = !1;
                  var w = this.peekToken();
                  if (w.type !== S.TOKEN_LEFT_BRACKET)
                    throw _();
                  this.nextToken();
                  for (var A = new c(w.lineno, w.colno), B = !1, N = 0; N <= A.fields.length && !this.skip(S.TOKEN_RIGHT_BRACKET); N++) {
                    if (N === A.fields.length)
                      if (B)
                        this.fail("parseSlice: too many slice components", w.lineno, w.colno);
                      else
                        break;
                    if (this.skip(S.TOKEN_COLON))
                      B = !0;
                    else {
                      var F = A.fields[N];
                      A[F] = this.parseExpression(), B = this.skip(S.TOKEN_COLON) || B;
                    }
                  }
                  if (!B)
                    throw _();
                  return new L.Array(w.lineno, w.colno, [A]);
                }
              };
            }
            function k(f, v, h, d) {
              f = f || [], v === null && (v = d < 0 ? f.length - 1 : 0), h === null ? h = d < 0 ? -1 : f.length : h < 0 && (h += f.length), v < 0 && (v += f.length);
              for (var _ = [], w = v; !(w < 0 || w > f.length || d > 0 && w >= h || d < 0 && w <= h); w += d)
                _.push(a.memberLookup(f, w));
              return _;
            }
            function y(f, v) {
              return Object.prototype.hasOwnProperty.call(f, v);
            }
            var b = {
              pop: function(v) {
                if (v === void 0)
                  return this.pop();
                if (v >= this.length || v < 0)
                  throw new Error("KeyError");
                return this.splice(v, 1);
              },
              append: function(v) {
                return this.push(v);
              },
              remove: function(v) {
                for (var h = 0; h < this.length; h++)
                  if (this[h] === v)
                    return this.splice(h, 1);
                throw new Error("ValueError");
              },
              count: function(v) {
                for (var h = 0, d = 0; d < this.length; d++)
                  this[d] === v && h++;
                return h;
              },
              index: function(v) {
                var h;
                if ((h = this.indexOf(v)) === -1)
                  throw new Error("ValueError");
                return h;
              },
              find: function(v) {
                return this.indexOf(v);
              },
              insert: function(v, h) {
                return this.splice(v, 0, h);
              }
            }, l = {
              items: function() {
                return p._entries(this);
              },
              values: function() {
                return p._values(this);
              },
              keys: function() {
                return p.keys(this);
              },
              get: function(v, h) {
                var d = this[v];
                return d === void 0 && (d = h), d;
              },
              has_key: function(v) {
                return y(this, v);
              },
              pop: function(v, h) {
                var d = this[v];
                if (d === void 0 && h !== void 0)
                  d = h;
                else {
                  if (d === void 0)
                    throw new Error("KeyError");
                  delete this[v];
                }
                return d;
              },
              popitem: function() {
                var v = p.keys(this);
                if (!v.length)
                  throw new Error("KeyError");
                var h = v[0], d = this[h];
                return delete this[h], [h, d];
              },
              setdefault: function(v, h) {
                return h === void 0 && (h = null), v in this || (this[v] = h), this[v];
              },
              update: function(v) {
                return p._assign(this, v), null;
              }
            };
            return l.iteritems = l.items, l.itervalues = l.values, l.iterkeys = l.keys, a.memberLookup = function(v, h, d) {
              return arguments.length === 4 ? k.apply(this, arguments) : (v = v || {}, p.isArray(v) && y(b, h) ? b[h].bind(v) : p.isObject(v) && y(l, h) ? l[h].bind(v) : I.apply(this, arguments));
            }, s;
          }
          t.exports = n;
        }
        /******/
      ])
    );
  });
})(dn);
const vn = (o, e, t = { cleanHtml: !1 }) => {
  const i = Ct(o);
  Ke.configure({ autoescape: !0 });
  let r = e;
  return t != null && t.cleanHtml && (r = It(e)), Ke.renderString(r, i);
}, Ct = (o) => {
  const e = {};
  return Object.entries(o).forEach(([t, i]) => {
    if (mn(i)) {
      const r = Object.values(i.content);
      e[t] = r.filter((n) => !(n != null && n.hidden)).map((n) => Ct(n.questions));
      return;
    }
    if (gn(i)) {
      e[t] = i.values;
      return;
    }
    e[t] = i.value;
  }), e;
}, mn = (o) => Boolean(o.content), gn = (o) => Boolean(o.values), It = (o) => {
  const e = (n) => {
    let a = n.replace(/<mark(.*?)>/gm, "");
    return a = a.replace(/<\/mark>/gm, ""), a;
  }, t = (n) => {
    let a = n.replace(/<p class="paragraph-condition"[^>]*>({%[\s\S]*?%})\s*?<\/p>/gm, "$1");
    return a = a.replace(/<(?:p|div)[^>]*>({% (?:if|elseif|else)(?:[^%}]|\n)*? %})[\s]*?<\/(?:p|div)>/gm, "$1"), a = a.replace(/<(?:p|div)[^>]*>({% (?:endif|endfor) %})[^<]*<\/(?:p|div)>/gm, "$1"), a = a.replace(/<(?:p|div)[^>]*>({% for[\s\S]*?%})[^<]*<\/(?:p|div)>/gm, "$1"), a;
  }, i = (n) => {
    let a = n.replace(new RegExp("(?<={%.*?)(&nbsp;)(?=.*?%})", "gm"), " ");
    return a = a.replace(new RegExp("(?<={%.*?)(&gt;)(?=.*?%})", "gm"), ">"), a = a.replace(new RegExp("(?<={%.*?)(&lt;)(?=.*?%})", "gm"), "<"), a;
  };
  let r = e(o);
  return r = t(r), r = i(r), r;
};
class ht {
  constructor(e, t, i, r, n, a, p, g, m, L, S, P, I = [], T = {}) {
    ae(this, "interview", []);
    ae(this, "nested", []);
    ae(this, "ignoreIds", []);
    ae(this, "endsForRepeat", {});
    ae(this, "result", {});
    ae(this, "questionsInsideRepeat", []);
    ae(this, "getQuestion");
    ae(this, "isLastRadio");
    ae(this, "isEnd");
    ae(this, "nextQuestion");
    ae(this, "previousQuestion");
    ae(this, "getCompletionPercen");
    ae(this, "checkNextRadio");
    ae(this, "checkFirstRadio");
    ae(this, "isRepeat");
    ae(this, "goToEndAndGetIdsAndGoBack");
    ae(this, "setValueOfRepeat");
    ae(this, "waitPreviousActive");
    ae(this, "separator", "->");
    this.getQuestion = e, this.isLastRadio = t, this.getCompletionPercen = i, this.checkNextRadio = r, this.checkFirstRadio = n, this.isEnd = a, this.nextQuestion = p, this.previousQuestion = g, this.isRepeat = m, this.goToEndAndGetIdsAndGoBack = L, this.setValueOfRepeat = S, this.waitPreviousActive = P, this.ignoreIds = I, this.endsForRepeat = T;
  }
  async start(e) {
    this.interview = [], await this.isRepeat(e.id) && await this.copyRepeat(e), this.addQuestion(e, "start");
  }
  insertQuestionInInterview(e, t) {
    this.interview.push(e), t !== "start" && this.interview.sort(
      (i, r) => i.percentageOfCompletion - r.percentageOfCompletion
    );
  }
  applyLogicToQuestion(e) {
    const t = e;
    t.preLogic || (t.preLogic = []);
    let i = t.preLogic;
    this.nested.forEach((r, n) => {
      const a = this.nested[n + 1];
      let p = i.find((g) => g === r);
      if (p || (i.push(r), p = i.find((g) => g === r)), a) {
        const g = i[i.indexOf(p) + 1];
        if (g)
          if (Array.isArray(g))
            i = g;
          else {
            const m = [];
            i.splice(
              i[i.indexOf(p) + 1],
              0,
              m
            ), i = m;
          }
        else {
          const m = [];
          i.push(m), i = m;
        }
      }
    });
  }
  questionExistsInInterview(e) {
    return this.getQuestionInInterview(e);
  }
  getQuestionInInterview(e) {
    return this.interview.find((t) => t.id === e);
  }
  getQuestionInsideRepeat(e) {
    return this.questionsInsideRepeat.find((t) => t.id === e);
  }
  setActiveMultipleOption(e, t, i = "") {
    this.nested.length && this.nested[this.nested.length - 1].includes(e) && this.nested[this.nested.length - 1].split(this.separator)[0] === e && this.nested.pop(), i === "multiSelect" ? this.nested.push(`${e}${this.separator}${t}(multiSelect)`) : this.nested.push(`${e}${this.separator}${t}`);
  }
  removeActiveMultipleOption() {
    this.nested.pop();
  }
  addQuestion(e, t) {
    const { id: i = "", title: r = "", value: n = "", type: a = "", subType: p = "", indications: g = "", placeholder: m = "", questions: L = {}, other: S = {} } = e, P = { id: i, title: r, value: n, type: a, indications: g, placeholder: m, subType: p, questions: L, other: S };
    t !== "start" && this.applyLogicToQuestion(P);
    const I = P;
    P.type === "multipleChoice" && (I.choices = e.choices), I.percentageOfCompletion = t === "start" ? 0 : t, this.insertQuestionInInterview(P, t);
  }
  async copyRepeat(e) {
    console.log("--Copy repeat with id: " + e.id);
    const t = e.id;
    let i = "";
    await this.setValueOfRepeat(t, 1);
    const r = await this.goToEndAndGetIdsAndGoBack();
    await this.setValueOfRepeat(t, 2);
    const n = await this.goToEndAndGetIdsAndGoBack();
    if (await this.setValueOfRepeat(t, 1, { checkAfterIdsGotten: !0 }), this.endsForRepeat[t])
      i = this.endsForRepeat[t];
    else
      for (let g = 0; g < r.length; g++)
        if (r[g] !== n[g]) {
          i = r[g];
          break;
        }
    console.log("End for repeat " + t + " = " + i);
    const a = async () => {
      const g = await this.isEnd();
      await this.nextQuestion();
      const m = await this.getQuestion({ ignoreCopy: !0 });
      return await this.previousQuestion(), m.id === i || g;
    }, p = new ht(
      this.getQuestion,
      this.isLastRadio,
      this.getCompletionPercen,
      this.checkNextRadio,
      this.checkFirstRadio,
      a,
      this.nextQuestion,
      this.previousQuestion,
      this.isRepeat,
      this.goToEndAndGetIdsAndGoBack,
      this.setValueOfRepeat,
      this.waitPreviousActive,
      this.ignoreIds
    );
    await this.nextQuestion(), e.questions = await p.copy(), console.log("--END Copy repeat: " + e.id), this.questionsInsideRepeat = [...this.questionsInsideRepeat, ...p.interview];
  }
  async copyQuestion(e = !1, t = !1) {
    const i = await this.getQuestion(), r = i.id;
    if (r && this.ignoreIds.includes(r)) {
      console.log("Ignore: " + r);
      return;
    }
    if (!this.getQuestionInsideRepeat(r))
      if (this.questionExistsInInterview(r))
        if (i.type === "multipleChoice")
          if (this.nested.find((a) => a.includes(r)) || this.applyLogicToQuestion(
            this.getQuestionInInterview(r)
          ), await this.isLastRadio()) {
            if (t && this.nested.length) {
              const a = await this.checkFirstRadio(i.id);
              this.setActiveMultipleOption(a.id, a.label, i.subType);
            }
          } else {
            const a = await this.checkNextRadio(r);
            this.setActiveMultipleOption(a.id, a.label, i.subType);
          }
        else
          this.applyLogicToQuestion(
            this.getQuestionInInterview(r)
          );
      else {
        if (e)
          await this.start(i);
        else {
          const n = await this.getCompletionPercen();
          await this.isRepeat(i.id) ? (await this.copyRepeat(i), this.addQuestion(i, n)) : this.addQuestion(i, n);
        }
        if (i.type === "multipleChoice") {
          const n = await this.checkFirstRadio(i.id);
          this.setActiveMultipleOption(n.id, n.label, i == null ? void 0 : i.subType);
        }
      }
  }
  async backToPreviousActive() {
    const e = this.nested;
    if (e.length) {
      console.log("----"), console.log(e), console.log("----");
      const t = e[e.length - 1].split(this.separator)[0];
      let i = await this.getQuestion();
      for (; (i == null ? void 0 : i.id) !== t; )
        await this.previousQuestion(), i = await this.getQuestion();
      const r = await this.isLastRadio();
      await this.copyQuestion(), i.type === "multipleChoice" && r && (this.removeActiveMultipleOption(), await this.backToPreviousActive());
    }
  }
  async happyPath() {
    let e = await this.isEnd();
    for (; !e; )
      await this.nextQuestion(), await this.copyQuestion(!1, !0), e = await this.isEnd();
    this.nested.length && (this.waitPreviousActive && await this.waitPreviousActive(), await this.backToPreviousActive(), await this.happyPath());
  }
  transform() {
    this.interview.forEach((e) => {
      if (delete e.percentageOfCompletion, !e.preLogic)
        return;
      let t = "";
      const i = (r, n = !1) => {
        r.forEach((a, p) => {
          const g = r[p + 1];
          if (typeof a == "string") {
            const [m, L] = a.split(this.separator);
            if (L.includes("(multiSelect)"))
              if (L.includes("checked")) {
                const S = L.replace("(multiSelect)", "");
                t += `${S.includes("Not checked") ? "!" : ""}${m}.values.includes('Checked')`;
              } else
                t += `${m}.values.includes('${L.replace("(multiSelect)", "")}')`;
            else
              t += `${m}.value === '${L}'`;
            g && (typeof g == "string" && (t += " || "), Array.isArray(g) && (t += " && "));
          }
          Array.isArray(a) && (t += " (", i(a, !0), g && typeof g == "string" && (t += "|| ")), n && !g && (t += ") ");
        });
      };
      i(e.preLogic), e.logic = { showIf: t }, delete e.preLogic;
    });
  }
  createResult() {
    this.interview.forEach((e) => {
      this.result[e.id] = e;
    });
  }
  async copy() {
    return await this.copyQuestion(!0), await this.happyPath(), this.transform(), this.createResult(), this.result;
  }
}
class Rt {
  constructor(e = "empty", t = { isRoot: !0, data: null, isLastContentInterviewOfRepeat: !1 }) {
    ae(this, "interview", /* @__PURE__ */ new Map());
    ae(this, "events");
    ae(this, "current");
    ae(this, "isRoot", !0);
    ae(this, "isLastContentInterviewOfRepeat", !1);
    ae(this, "data", {});
    ae(this, "Cloner", ht);
    this.events = t.events || new Me(), this.isRoot = t.isRoot, this.data = t.data || this.data, this.isLastContentInterviewOfRepeat = t.isLastContentInterviewOfRepeat || !1;
    const i = t.data ? JSON.parse(JSON.stringify(this.data)) : null;
    e !== "empty" && this.init(e), i && this.applyDataToQuestions(i);
  }
  get questionsMap() {
    return this.interview;
  }
  setInterview(e) {
    this.interview = e;
  }
  init(e) {
    if (e === null)
      throw new Error("Interview init param is null");
    sn(e);
    for (const t of Object.values(e))
      this.add(t);
  }
  getInterviewParams() {
    const e = {};
    return this.interview.forEach((t, i) => {
      e[i] = t, t.type === "repeat" && (e[i].content = {});
    }), e;
  }
  add(e, t = !1) {
    const i = un(e);
    return i.type === "repeat" && this.buildContentForRepeatQuestion(i), this.interview.set(i.id, i), this.setValue(i.id, i.value), this.events.dispatch("question-added", i), i;
  }
  remove(e) {
    if (!this.interview.has(e))
      throw new Error("No question with id:" + e);
    this.interview.delete(e);
  }
  getNestedInterview(e, t) {
    const i = this.interview.get(e);
    if (!i)
      throw new Error("No question with id:" + e);
    if ((i == null ? void 0 : i.type) !== "repeat")
      throw new Error("Question with id " + e + " is not a repeat question");
    return i.content[t].nestedInterview;
  }
  canBeShown(e) {
    var t, i;
    if ((t = e.logic) != null && t.showIf) {
      const r = this.interview.keys(), n = this.interview.values();
      if (!Function(...r, `return ${e.logic.showIf}`).bind(this)(...n))
        return !1;
    }
    if ((i = e.logic) != null && i.hideIf) {
      const r = this.interview.keys(), n = this.interview.values();
      if (!!Function(...r, `return ${e.logic.hideIf}`).bind(this)(...n))
        return !1;
    }
    return !0;
  }
  // This question should be private
  setCurrent(e) {
    if (!e)
      throw new Error("No question provided");
    if (typeof e != "object")
      throw new Error("No question provided");
    this.current = e, this.events.dispatch("set-current", this.getCurrent());
  }
  next() {
    let e = this.getNextQuestion();
    e ? this.setCurrent(e) : this.getCurrent().isCurrent = !0, this.getCurrent().isEnd = !1;
  }
  getNextQuestion() {
    var r;
    let e, t;
    const i = Array.from(this.interview);
    for (let n = 0; n < i.length; n++) {
      const a = i[n][1], p = a == null ? void 0 : a.isCurrent, g = (a == null ? void 0 : a.type) === "repeat";
      if (t = i[n + 1] && i[n + 1][1], p && !g && !t && !this.isRoot) {
        if (this.canBeShown(a)) {
          a.isEnd = !0, e = a;
          break;
        }
        a.isCurrent = !1;
        for (let m = 0; m < i.length; m++) {
          const L = i[m][1];
          if (L.exitRepeat) {
            e = L;
            break;
          }
        }
      }
      if (p && !g && t) {
        a.isCurrent = !1, e = i[n + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (p && g && this.canBeShown(a)) {
        const m = a;
        m.isCurrent = !1, e = Array.from(m.content[0].nestedInterview.interview)[0][1], e.isCurrent = !0;
        break;
      }
      if (p && g && !this.canBeShown(a) && t) {
        a.isCurrent = !1, e = i[n + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (p && g && !this.canBeShown(a) && !t) {
        a.isEnd = !0, e = a;
        break;
      }
      if (!p && g && !this.canBeShown(a) && !t) {
        a.isEnd = !0, e = a;
        break;
      }
      if (!p && g && this.canBeShown(a)) {
        let m = !1;
        const L = a;
        for (let S = 0; S < parseInt(a.value); S++)
          if (!L.content[S].hidden) {
            const P = !L.content[S + 1] || ((r = L.content[S + 1]) == null ? void 0 : r.hidden);
            if (e = L.content[S].nestedInterview.getNextQuestion(), e) {
              if (L.content[S].nestedInterview.isQuestionTheLastOfInterview(e.id))
                if (P && t) {
                  const T = e;
                  if (T.exitRepeat) {
                    T.isEnd = !1, T.isCurrent = !1, e = i[n + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion()), delete T.exitRepeat;
                    break;
                  } else
                    T.exitRepeat = !0;
                } else
                  P || (e.isLast = !0);
              if (e != null && e.isEnd)
                if (S + 1 < parseInt(a.value))
                  if (!e.isCurrent)
                    e.isEnd = !1, e = null;
                  else {
                    const T = Array.from(L.content[S + 1].nestedInterview.interview);
                    e.isCurrent = !1, e.isEnd = !1, e = T[0][1], e.isCurrent = !0;
                  }
                else {
                  const T = L.content[S].nestedInterview.canBeShown(e);
                  e.isEnd && !T && (e.isCurrent = !1, e = null);
                }
              if (e)
                break;
            } else if (P && t)
              m = !0;
            else if (!P && !e) {
              const I = Array.from(L.content[S].nestedInterview.interview).find((T) => T[1].isLast);
              if (I) {
                delete I[1].isLast;
                const T = Array.from(L.content[S + 1].nestedInterview.interview);
                if (!T[0][1].isCurrent) {
                  T[0][1].isCurrent = !0, e = T[0][1];
                  break;
                }
              }
            }
          }
        if (m)
          continue;
        break;
      }
    }
    return e;
  }
  previous() {
    let e = this.getPreviousQuestion();
    e && this.setCurrent(e);
  }
  getPreviousQuestion(e = null) {
    const t = Array.from(this.interview), i = t[0][1];
    if (i.isCurrent)
      return this.isRoot ? i : (e && (e.isCurrent = !0), i.isCurrent = !1, e);
    let r = i, n;
    for (let a = 0; a < t.length; a++) {
      const p = t[a][1], g = this.canBeShown(p);
      if (t[a + 1] && t[a + 1][1], p.exitRepeat && delete p.exitRepeat, p.isLast && delete p.isLast, p.isNotLastOfRepeatContent && delete p.isNotLastOfRepeatContent, p.isCurrent) {
        r.isCurrent = !0, n = r, p.isCurrent = !1;
        break;
      } else if (g && (r = p), p.type === "repeat") {
        const m = p;
        for (let L = 0; L < parseInt(p.value) && !(!m.content[L].hidden && (n = m.content[L].nestedInterview.getPreviousQuestion(r), n != null && n.isPrevious && (n.isPrevious = !1, r = n, n = null), n && n.isCurrent)); L++)
          ;
        if (n && n.isCurrent)
          break;
      }
    }
    if (e && !n) {
      const a = this.reversePreviousUtil(t);
      a && (n = a);
    }
    return n && !this.isRoot && this.isQuestionTheLastOfInterview(n.id) && (this.isLastContentInterviewOfRepeat ? (n.isLast = !0, n.exitRepeat = !0) : n.isNotLastOfRepeatContent = !0), n && this.isRoot && n.indexInsideRepeat && n.isNotLastOfRepeatContent && (n.isLast = !0), n;
  }
  // traverse interview backwards to find previous question
  reversePreviousUtil(e) {
    let t;
    for (let i = e.length - 1; i >= 0; i--) {
      const r = e[i][1];
      if (this.canBeShown(r))
        if (r.type === "repeat") {
          const a = r;
          for (let p = parseInt(r.value) - 1; p >= 0; p--)
            if (!a.content[p].hidden) {
              const g = Array.from(a.content[p].nestedInterview.interview);
              if (t = a.content[p].nestedInterview.reversePreviousUtil(g), t && (t.isPrevious = !0), t)
                break;
            }
          if (t)
            break;
        } else {
          t = r, t.isPrevious = !0;
          break;
        }
    }
    return t;
  }
  // Returns an object whith the current total questions 
  // and the position you are in it
  getProgress() {
    let e = 0, t = 0;
    return Array.from(this.interview).forEach(([r, n]) => {
      e += 1, n.isCurrent && (t = e), n.type === "repeat" && Object.values(n.content).forEach((p) => {
        if (!p.hidden) {
          const g = p.nestedInterview.getProgress();
          g.currentPosition !== 0 && (t = e + g.currentPosition), e += g.total;
        }
      });
    }), {
      total: e,
      currentPosition: t,
      percentageOfCompletion: Math.round(t * 100 / e)
    };
  }
  // returns true if you are at the first question
  isStart() {
    const t = Array.from(this.interview)[0][1].id, i = this.getCurrent().id;
    return t === i;
  }
  // returns true if you reach the last question
  isEnd() {
    const e = this.getLastQuestionOfInterview(), t = this.getCurrent();
    return t.indexInsideRepeat !== null ? t.id === (e == null ? void 0 : e.id) && t.indexInsideRepeat === e.indexInsideRepeat : (e == null ? void 0 : e.id) === t.id;
  }
  isQuestionTheLastOfInterview(e) {
    const t = this.getLastQuestionOfInterview(), i = this.getStepById(e);
    return (i == null ? void 0 : i.indexInsideRepeat) !== null ? (i == null ? void 0 : i.id) === (t == null ? void 0 : t.id) && (i == null ? void 0 : i.indexInsideRepeat) === (t == null ? void 0 : t.indexInsideRepeat) : (t == null ? void 0 : t.id) === i.id;
  }
  getLastQuestionOfInterview() {
    let e = null;
    const t = Array.from(this.interview);
    for (let i = t.length - 1; i >= 0; i--) {
      const r = t[i][1];
      if (this.canBeShown(r))
        if (r.type === "repeat") {
          const a = r;
          for (let p = parseInt(r.value) - 1; p >= 0 && !(!a.content[p].hidden && (e = a.content[p].nestedInterview.getLastQuestionOfInterview(), e)); p--)
            ;
          e || (e = r);
          break;
        } else {
          e = r;
          break;
        }
    }
    return e;
  }
  // Returns interview of current question
  getCurrentGuidedInterview() {
    const e = Array.from(this.interview);
    let t = null;
    for (let i = 0; i < e.length; i++) {
      const r = e[i][1];
      if (r.isCurrent) {
        t = this;
        break;
      }
      if (r.type === "repeat") {
        const n = r;
        for (let a = 0; a < parseInt(r.value) && !(!n.content[a].hidden && (t = n.content[a].nestedInterview.getCurrentGuidedInterview(), t)); a++)
          ;
      }
      if (t)
        break;
    }
    return this.isRoot && !t && (t = this), t;
  }
  getCurrent() {
    return this.current || (this.current = Array.from(this.interview)[0][1], this.isRoot && (Array.from(this.interview)[0][1].isCurrent = !0)), this.current;
  }
  setValue(e, t, i = {}) {
    if (!this.interview.has(e))
      throw new Error("No question with id:" + e);
    const r = this.interview.get(e);
    if (!r)
      throw new Error("No question with id:" + e);
    an(t, r), r.subType !== "multiSelect" && (r.value = t), (r == null ? void 0 : r.type) === "multipleChoice" && this.setRadioChecked(r, t, i), (r == null ? void 0 : r.type) === "repeat" && this.buildContentForRepeatQuestion(r, t), this.data[e] ? this.data[e].value = r.value : this.data[e] = { value: r.value }, r.subType === "multiSelect" && (this.data[e].values = r.values), this.events.dispatch("set-value", this.interview.get(e));
  }
  on(e, t) {
    this.events.register(e, t);
  }
  getData() {
    return this.data;
  }
  setRadioChecked(e, t, i = {}) {
    if (e.subType === "multiSelect") {
      if (Array.isArray(t))
        e.values = t, e.choices.forEach((r) => {
          r.checked = t.includes(r.label);
        });
      else {
        if (e.values || (e.values = []), !e.values.includes(t) && t) {
          if (!e.choices.find((n) => n.label === t))
            throw new Error("Value does not exists");
          e.values.push(t), e.choices.forEach((n) => {
            n.checked = e.values.includes(n.label);
          });
        }
        if (i.unselect) {
          const r = e.choices.find((a) => a.label === t);
          if (!r)
            throw new Error("Value does not exists");
          const n = e.values.indexOf(r.label);
          n !== -1 && e.values.splice(n, 1), r.checked = !1;
          return;
        }
      }
      return;
    }
    e.choices.forEach((r) => {
      r.checked = r.label === t;
    });
  }
  buildContentForRepeatQuestion(e, t = null) {
    const { range: i, id: r, questions: n, indexInsideRepeat: a } = e, { min: p, max: g } = i;
    t = t && parseInt(t), t = on(e.value, p, g), e.value = t, e.content || (e.content = {}), this.data[r] ? this.data[r].value = t : this.data[r] = { value: t, content: {} };
    for (let S = 0; S < t; S++) {
      if (e.content[S]) {
        e.content[S].hidden = !1, this.data[r].content[S].hidden = !1;
        continue;
      }
      this.data[r].content[S] = { hidden: !1, questions: {} };
      const P = new Rt(pn(n, S, a), {
        isRoot: !1,
        events: this.events,
        data: this.data[r].content[S].questions
      });
      e.content[S] = { hidden: !1, nestedInterview: P };
    }
    const m = Object.keys(e.content);
    if (t < m.length)
      for (let S = t; S < m.length; S++)
        e.content[S].hidden = !0, this.data[r].content[S].hidden = !0;
    Object.values(e.content).forEach((S, P) => {
      P + 1 === parseInt(t) ? S.nestedInterview.isLastContentInterviewOfRepeat = !0 : S.nestedInterview.isLastContentInterviewOfRepeat = !1;
    });
  }
  applyDataToQuestions(e) {
    Object.entries(e).forEach(([t, { value: i, content: r }]) => {
      this.setValue(t, i), r && Object.values(r).forEach((n, a) => {
        n.hidden || this.getNestedInterview(t, a).applyDataToQuestions(n.questions);
      });
    });
  }
  makeTemplate(e, t = !1) {
    if (!e)
      throw new Error("No template provided");
    return vn(this.data, e, { cleanHtml: t });
  }
  getCleanHTML(e) {
    if (!e)
      throw new Error("No template provided");
    return It(e);
  }
  getStepById(e) {
    const t = this.interview.get(e);
    return t || null;
  }
  checkIfIdIsValid(e) {
    if (!e)
      throw new Error("No id provided");
    return this.interview.has(e) ? { isValid: !1, message: "Id already exists" } : !xt(e) && !Tt(e) ? { isValid: !1, message: "Id must be in camel case" } : { isValid: !0, message: "" };
  }
  changeIdOfQuestion(e, t) {
    if (!this.interview.get(e))
      throw new Error("No question with id:" + e);
    const r = this.checkIfIdIsValid(t);
    if (!r.isValid)
      throw new Error(r.message);
    const n = Array.from(this.interview, ([p, g]) => ({ name: p, value: g }));
    n.forEach((p, g) => {
      p.name === e && (n[g].value.id = t, n[g].name = t);
    });
    const a = /* @__PURE__ */ new Map();
    n.forEach((p) => {
      a.set(p.name, p.value);
    }), this.interview = a;
  }
  findQuestionById(e) {
    const t = this.interview.get(e);
    if (!t)
      throw new Error("No question with id:" + e);
    return t;
  }
  findMultipleChoiceById(e) {
    const t = this.interview.get(e);
    if (!t)
      throw new Error("No question with id:" + e);
    if ((t == null ? void 0 : t.type) !== "multipleChoice")
      throw new Error("Question with id " + e + " is not a multiple choice question");
    return t;
  }
  addChoiceToMultipleChoice(e, t) {
    this.findMultipleChoiceById(e).choices.push(t);
  }
  removeChoiceFromMultipleChoice(e, t) {
    this.findMultipleChoiceById(e).choices.splice(t, 1);
  }
  changeLabelOfChoice(e, t, i) {
    const r = this.findMultipleChoiceById(e);
    if (!i)
      throw new Error("No label provided");
    if (!r.choices[t])
      throw new Error("No choice with index:" + t);
    r.choices[t].label = i;
  }
  setDefaultCheckedChoice(e, t) {
    const i = this.findMultipleChoiceById(e);
    if (!i.choices[t])
      throw new Error("No choice with index:" + t);
    i.choices.forEach((r) => r.checked = !1), i.choices[t].checked = !0;
  }
  setQuestionAsRequired(e, t) {
    const i = this.findQuestionById(e);
    i.required = t;
  }
  setTitleOfQuestion(e, t) {
    const i = this.findQuestionById(e);
    i.title = t;
  }
  setPlaceholder(e, t) {
    const i = this.findQuestionById(e);
    i.placeholder = t;
  }
  setExtraOption(e, t, i) {
    const r = this.findQuestionById(e);
    r.options || (r.options = {}), r.options[t] = i;
  }
  setIndications(e, t) {
    const i = this.findQuestionById(e);
    i.indications = t;
  }
  setLogic(e, t) {
    this.findQuestionById(e).logic = t;
  }
  setRange(e, t) {
    const i = this.findQuestionById(e);
    if ((i == null ? void 0 : i.type) !== "repeat")
      throw new Error("Question with id " + e + " is not a repeat question");
    i.range = t;
  }
}
export {
  Rt as GuidedInterview
};
