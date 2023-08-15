var Kt = Object.defineProperty;
var jt = (s, e, t) => e in s ? Kt(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var Le = (s, e, t) => (jt(s, typeof e != "symbol" ? e + "" : e, t), t);
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dt(s) {
  if (s.__esModule)
    return s;
  var e = s.default;
  if (typeof e == "function") {
    var t = function i() {
      if (this instanceof i) {
        var l = [null];
        l.push.apply(l, arguments);
        var n = Function.bind.apply(e, l);
        return new n();
      }
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(s).forEach(function(i) {
    var l = Object.getOwnPropertyDescriptor(s, i);
    Object.defineProperty(t, i, l.get ? l : {
      enumerable: !0,
      get: function() {
        return s[i];
      }
    });
  }), t;
}
var je = {}, De = {}, gt = {}, Ue = {}, Ve = {};
Object.defineProperty(Ve, "__esModule", {
  value: !0
});
Ve.default = Vt;
let Fe;
const Ut = new Uint8Array(16);
function Vt() {
  if (!Fe && (Fe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Fe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Fe(Ut);
}
var Ae = {}, Ce = {}, qe = {};
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.default = void 0;
var qt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
qe.default = qt;
Object.defineProperty(Ce, "__esModule", {
  value: !0
});
Ce.default = void 0;
var $t = Wt(qe);
function Wt(s) {
  return s && s.__esModule ? s : { default: s };
}
function Gt(s) {
  return typeof s == "string" && $t.default.test(s);
}
var Qt = Gt;
Ce.default = Qt;
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
Ae.unsafeStringify = yt;
var Ht = Yt(Ce);
function Yt(s) {
  return s && s.__esModule ? s : { default: s };
}
const pe = [];
for (let s = 0; s < 256; ++s)
  pe.push((s + 256).toString(16).slice(1));
function yt(s, e = 0) {
  return (pe[s[e + 0]] + pe[s[e + 1]] + pe[s[e + 2]] + pe[s[e + 3]] + "-" + pe[s[e + 4]] + pe[s[e + 5]] + "-" + pe[s[e + 6]] + pe[s[e + 7]] + "-" + pe[s[e + 8]] + pe[s[e + 9]] + "-" + pe[s[e + 10]] + pe[s[e + 11]] + pe[s[e + 12]] + pe[s[e + 13]] + pe[s[e + 14]] + pe[s[e + 15]]).toLowerCase();
}
function zt(s, e = 0) {
  const t = yt(s, e);
  if (!(0, Ht.default)(t))
    throw TypeError("Stringified UUID is invalid");
  return t;
}
var Jt = zt;
Ae.default = Jt;
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.default = void 0;
var Xt = en(Ve), Zt = Ae;
function en(s) {
  return s && s.__esModule ? s : { default: s };
}
let pt, st, ot = 0, at = 0;
function tn(s, e, t) {
  let i = e && t || 0;
  const l = e || new Array(16);
  s = s || {};
  let n = s.node || pt, p = s.clockseq !== void 0 ? s.clockseq : st;
  if (n == null || p == null) {
    const M = s.random || (s.rng || Xt.default)();
    n == null && (n = pt = [M[0] | 1, M[1], M[2], M[3], M[4], M[5]]), p == null && (p = st = (M[6] << 8 | M[7]) & 16383);
  }
  let d = s.msecs !== void 0 ? s.msecs : Date.now(), k = s.nsecs !== void 0 ? s.nsecs : at + 1;
  const g = d - ot + (k - at) / 1e4;
  if (g < 0 && s.clockseq === void 0 && (p = p + 1 & 16383), (g < 0 || d > ot) && s.nsecs === void 0 && (k = 0), k >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ot = d, at = k, st = p, d += 122192928e5;
  const x = ((d & 268435455) * 1e4 + k) % 4294967296;
  l[i++] = x >>> 24 & 255, l[i++] = x >>> 16 & 255, l[i++] = x >>> 8 & 255, l[i++] = x & 255;
  const P = d / 4294967296 * 1e4 & 268435455;
  l[i++] = P >>> 8 & 255, l[i++] = P & 255, l[i++] = P >>> 24 & 15 | 16, l[i++] = P >>> 16 & 255, l[i++] = p >>> 8 | 128, l[i++] = p & 255;
  for (let M = 0; M < 6; ++M)
    l[i + M] = n[M];
  return e || (0, Zt.unsafeStringify)(l);
}
var nn = tn;
Ue.default = nn;
var $e = {}, Te = {}, Pe = {};
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.default = void 0;
var rn = sn(Ce);
function sn(s) {
  return s && s.__esModule ? s : { default: s };
}
function on(s) {
  if (!(0, rn.default)(s))
    throw TypeError("Invalid UUID");
  let e;
  const t = new Uint8Array(16);
  return t[0] = (e = parseInt(s.slice(0, 8), 16)) >>> 24, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = e & 255, t[4] = (e = parseInt(s.slice(9, 13), 16)) >>> 8, t[5] = e & 255, t[6] = (e = parseInt(s.slice(14, 18), 16)) >>> 8, t[7] = e & 255, t[8] = (e = parseInt(s.slice(19, 23), 16)) >>> 8, t[9] = e & 255, t[10] = (e = parseInt(s.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = e / 4294967296 & 255, t[12] = e >>> 24 & 255, t[13] = e >>> 16 & 255, t[14] = e >>> 8 & 255, t[15] = e & 255, t;
}
var an = on;
Pe.default = an;
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.URL = Te.DNS = void 0;
Te.default = hn;
var ln = Ae, un = cn(Pe);
function cn(s) {
  return s && s.__esModule ? s : { default: s };
}
function fn(s) {
  s = unescape(encodeURIComponent(s));
  const e = [];
  for (let t = 0; t < s.length; ++t)
    e.push(s.charCodeAt(t));
  return e;
}
const _t = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
Te.DNS = _t;
const wt = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
Te.URL = wt;
function hn(s, e, t) {
  function i(l, n, p, d) {
    var k;
    if (typeof l == "string" && (l = fn(l)), typeof n == "string" && (n = (0, un.default)(n)), ((k = n) === null || k === void 0 ? void 0 : k.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let g = new Uint8Array(16 + l.length);
    if (g.set(n), g.set(l, n.length), g = t(g), g[6] = g[6] & 15 | e, g[8] = g[8] & 63 | 128, p) {
      d = d || 0;
      for (let x = 0; x < 16; ++x)
        p[d + x] = g[x];
      return p;
    }
    return (0, ln.unsafeStringify)(g);
  }
  try {
    i.name = s;
  } catch {
  }
  return i.DNS = _t, i.URL = wt, i;
}
var We = {};
Object.defineProperty(We, "__esModule", {
  value: !0
});
We.default = void 0;
function pn(s) {
  if (typeof s == "string") {
    const e = unescape(encodeURIComponent(s));
    s = new Uint8Array(e.length);
    for (let t = 0; t < e.length; ++t)
      s[t] = e.charCodeAt(t);
  }
  return dn(vn(mn(s), s.length * 8));
}
function dn(s) {
  const e = [], t = s.length * 32, i = "0123456789abcdef";
  for (let l = 0; l < t; l += 8) {
    const n = s[l >> 5] >>> l % 32 & 255, p = parseInt(i.charAt(n >>> 4 & 15) + i.charAt(n & 15), 16);
    e.push(p);
  }
  return e;
}
function Et(s) {
  return (s + 64 >>> 9 << 4) + 14 + 1;
}
function vn(s, e) {
  s[e >> 5] |= 128 << e % 32, s[Et(e) - 1] = e;
  let t = 1732584193, i = -271733879, l = -1732584194, n = 271733878;
  for (let p = 0; p < s.length; p += 16) {
    const d = t, k = i, g = l, x = n;
    t = de(t, i, l, n, s[p], 7, -680876936), n = de(n, t, i, l, s[p + 1], 12, -389564586), l = de(l, n, t, i, s[p + 2], 17, 606105819), i = de(i, l, n, t, s[p + 3], 22, -1044525330), t = de(t, i, l, n, s[p + 4], 7, -176418897), n = de(n, t, i, l, s[p + 5], 12, 1200080426), l = de(l, n, t, i, s[p + 6], 17, -1473231341), i = de(i, l, n, t, s[p + 7], 22, -45705983), t = de(t, i, l, n, s[p + 8], 7, 1770035416), n = de(n, t, i, l, s[p + 9], 12, -1958414417), l = de(l, n, t, i, s[p + 10], 17, -42063), i = de(i, l, n, t, s[p + 11], 22, -1990404162), t = de(t, i, l, n, s[p + 12], 7, 1804603682), n = de(n, t, i, l, s[p + 13], 12, -40341101), l = de(l, n, t, i, s[p + 14], 17, -1502002290), i = de(i, l, n, t, s[p + 15], 22, 1236535329), t = ve(t, i, l, n, s[p + 1], 5, -165796510), n = ve(n, t, i, l, s[p + 6], 9, -1069501632), l = ve(l, n, t, i, s[p + 11], 14, 643717713), i = ve(i, l, n, t, s[p], 20, -373897302), t = ve(t, i, l, n, s[p + 5], 5, -701558691), n = ve(n, t, i, l, s[p + 10], 9, 38016083), l = ve(l, n, t, i, s[p + 15], 14, -660478335), i = ve(i, l, n, t, s[p + 4], 20, -405537848), t = ve(t, i, l, n, s[p + 9], 5, 568446438), n = ve(n, t, i, l, s[p + 14], 9, -1019803690), l = ve(l, n, t, i, s[p + 3], 14, -187363961), i = ve(i, l, n, t, s[p + 8], 20, 1163531501), t = ve(t, i, l, n, s[p + 13], 5, -1444681467), n = ve(n, t, i, l, s[p + 2], 9, -51403784), l = ve(l, n, t, i, s[p + 7], 14, 1735328473), i = ve(i, l, n, t, s[p + 12], 20, -1926607734), t = me(t, i, l, n, s[p + 5], 4, -378558), n = me(n, t, i, l, s[p + 8], 11, -2022574463), l = me(l, n, t, i, s[p + 11], 16, 1839030562), i = me(i, l, n, t, s[p + 14], 23, -35309556), t = me(t, i, l, n, s[p + 1], 4, -1530992060), n = me(n, t, i, l, s[p + 4], 11, 1272893353), l = me(l, n, t, i, s[p + 7], 16, -155497632), i = me(i, l, n, t, s[p + 10], 23, -1094730640), t = me(t, i, l, n, s[p + 13], 4, 681279174), n = me(n, t, i, l, s[p], 11, -358537222), l = me(l, n, t, i, s[p + 3], 16, -722521979), i = me(i, l, n, t, s[p + 6], 23, 76029189), t = me(t, i, l, n, s[p + 9], 4, -640364487), n = me(n, t, i, l, s[p + 12], 11, -421815835), l = me(l, n, t, i, s[p + 15], 16, 530742520), i = me(i, l, n, t, s[p + 2], 23, -995338651), t = ge(t, i, l, n, s[p], 6, -198630844), n = ge(n, t, i, l, s[p + 7], 10, 1126891415), l = ge(l, n, t, i, s[p + 14], 15, -1416354905), i = ge(i, l, n, t, s[p + 5], 21, -57434055), t = ge(t, i, l, n, s[p + 12], 6, 1700485571), n = ge(n, t, i, l, s[p + 3], 10, -1894986606), l = ge(l, n, t, i, s[p + 10], 15, -1051523), i = ge(i, l, n, t, s[p + 1], 21, -2054922799), t = ge(t, i, l, n, s[p + 8], 6, 1873313359), n = ge(n, t, i, l, s[p + 15], 10, -30611744), l = ge(l, n, t, i, s[p + 6], 15, -1560198380), i = ge(i, l, n, t, s[p + 13], 21, 1309151649), t = ge(t, i, l, n, s[p + 4], 6, -145523070), n = ge(n, t, i, l, s[p + 11], 10, -1120210379), l = ge(l, n, t, i, s[p + 2], 15, 718787259), i = ge(i, l, n, t, s[p + 9], 21, -343485551), t = xe(t, d), i = xe(i, k), l = xe(l, g), n = xe(n, x);
  }
  return [t, i, l, n];
}
function mn(s) {
  if (s.length === 0)
    return [];
  const e = s.length * 8, t = new Uint32Array(Et(e));
  for (let i = 0; i < e; i += 8)
    t[i >> 5] |= (s[i / 8] & 255) << i % 32;
  return t;
}
function xe(s, e) {
  const t = (s & 65535) + (e & 65535);
  return (s >> 16) + (e >> 16) + (t >> 16) << 16 | t & 65535;
}
function gn(s, e) {
  return s << e | s >>> 32 - e;
}
function Ge(s, e, t, i, l, n) {
  return xe(gn(xe(xe(e, s), xe(i, n)), l), t);
}
function de(s, e, t, i, l, n, p) {
  return Ge(e & t | ~e & i, s, e, l, n, p);
}
function ve(s, e, t, i, l, n, p) {
  return Ge(e & i | t & ~i, s, e, l, n, p);
}
function me(s, e, t, i, l, n, p) {
  return Ge(e ^ t ^ i, s, e, l, n, p);
}
function ge(s, e, t, i, l, n, p) {
  return Ge(t ^ (e | ~i), s, e, l, n, p);
}
var yn = pn;
We.default = yn;
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.default = void 0;
var _n = bt(Te), wn = bt(We);
function bt(s) {
  return s && s.__esModule ? s : { default: s };
}
const En = (0, _n.default)("v3", 48, wn.default);
var bn = En;
$e.default = bn;
var Qe = {}, He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.default = void 0;
const kn = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var On = {
  randomUUID: kn
};
He.default = On;
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.default = void 0;
var dt = kt(He), Ln = kt(Ve), xn = Ae;
function kt(s) {
  return s && s.__esModule ? s : { default: s };
}
function Tn(s, e, t) {
  if (dt.default.randomUUID && !e && !s)
    return dt.default.randomUUID();
  s = s || {};
  const i = s.random || (s.rng || Ln.default)();
  if (i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, e) {
    t = t || 0;
    for (let l = 0; l < 16; ++l)
      e[t + l] = i[l];
    return e;
  }
  return (0, xn.unsafeStringify)(i);
}
var An = Tn;
Qe.default = An;
var Ye = {}, ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.default = void 0;
function Sn(s, e, t, i) {
  switch (s) {
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
function lt(s, e) {
  return s << e | s >>> 32 - e;
}
function Cn(s) {
  const e = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof s == "string") {
    const p = unescape(encodeURIComponent(s));
    s = [];
    for (let d = 0; d < p.length; ++d)
      s.push(p.charCodeAt(d));
  } else
    Array.isArray(s) || (s = Array.prototype.slice.call(s));
  s.push(128);
  const i = s.length / 4 + 2, l = Math.ceil(i / 16), n = new Array(l);
  for (let p = 0; p < l; ++p) {
    const d = new Uint32Array(16);
    for (let k = 0; k < 16; ++k)
      d[k] = s[p * 64 + k * 4] << 24 | s[p * 64 + k * 4 + 1] << 16 | s[p * 64 + k * 4 + 2] << 8 | s[p * 64 + k * 4 + 3];
    n[p] = d;
  }
  n[l - 1][14] = (s.length - 1) * 8 / Math.pow(2, 32), n[l - 1][14] = Math.floor(n[l - 1][14]), n[l - 1][15] = (s.length - 1) * 8 & 4294967295;
  for (let p = 0; p < l; ++p) {
    const d = new Uint32Array(80);
    for (let I = 0; I < 16; ++I)
      d[I] = n[p][I];
    for (let I = 16; I < 80; ++I)
      d[I] = lt(d[I - 3] ^ d[I - 8] ^ d[I - 14] ^ d[I - 16], 1);
    let k = t[0], g = t[1], x = t[2], P = t[3], M = t[4];
    for (let I = 0; I < 80; ++I) {
      const T = Math.floor(I / 20), C = lt(k, 5) + Sn(T, g, x, P) + M + e[T] + d[I] >>> 0;
      M = P, P = x, x = lt(g, 30) >>> 0, g = k, k = C;
    }
    t[0] = t[0] + k >>> 0, t[1] = t[1] + g >>> 0, t[2] = t[2] + x >>> 0, t[3] = t[3] + P >>> 0, t[4] = t[4] + M >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var Nn = Cn;
ze.default = Nn;
Object.defineProperty(Ye, "__esModule", {
  value: !0
});
Ye.default = void 0;
var In = Ot(Te), Rn = Ot(ze);
function Ot(s) {
  return s && s.__esModule ? s : { default: s };
}
const Pn = (0, In.default)("v5", 80, Rn.default);
var Bn = Pn;
Ye.default = Bn;
var Je = {};
Object.defineProperty(Je, "__esModule", {
  value: !0
});
Je.default = void 0;
var Fn = "00000000-0000-0000-0000-000000000000";
Je.default = Fn;
var Xe = {};
Object.defineProperty(Xe, "__esModule", {
  value: !0
});
Xe.default = void 0;
var Mn = Kn(Ce);
function Kn(s) {
  return s && s.__esModule ? s : { default: s };
}
function jn(s) {
  if (!(0, Mn.default)(s))
    throw TypeError("Invalid UUID");
  return parseInt(s.slice(14, 15), 16);
}
var Dn = jn;
Xe.default = Dn;
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "NIL", {
    enumerable: !0,
    get: function() {
      return n.default;
    }
  }), Object.defineProperty(s, "parse", {
    enumerable: !0,
    get: function() {
      return g.default;
    }
  }), Object.defineProperty(s, "stringify", {
    enumerable: !0,
    get: function() {
      return k.default;
    }
  }), Object.defineProperty(s, "v1", {
    enumerable: !0,
    get: function() {
      return e.default;
    }
  }), Object.defineProperty(s, "v3", {
    enumerable: !0,
    get: function() {
      return t.default;
    }
  }), Object.defineProperty(s, "v4", {
    enumerable: !0,
    get: function() {
      return i.default;
    }
  }), Object.defineProperty(s, "v5", {
    enumerable: !0,
    get: function() {
      return l.default;
    }
  }), Object.defineProperty(s, "validate", {
    enumerable: !0,
    get: function() {
      return d.default;
    }
  }), Object.defineProperty(s, "version", {
    enumerable: !0,
    get: function() {
      return p.default;
    }
  });
  var e = x(Ue), t = x($e), i = x(Qe), l = x(Ye), n = x(Je), p = x(Xe), d = x(Ce), k = x(Ae), g = x(Pe);
  function x(P) {
    return P && P.__esModule ? P : { default: P };
  }
})(gt);
var Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.RandomStringConfig = void 0;
class Un {
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
Ze.RandomStringConfig = Un;
var et = {};
Object.defineProperty(et, "__esModule", { value: !0 });
et.RandomStringBuilder = void 0;
class Vn {
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
et.RandomStringBuilder = Vn;
var tt = {};
const qn = {}, $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qn
}, Symbol.toStringTag, { value: "Module" })), Wn = /* @__PURE__ */ Dt($n);
var Gn = ct && ct.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.RandomStringGenerator = void 0;
const Qn = Gn(Wn);
class Hn {
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
    const i = Qn.default.randomBytes(t), l = e.length - 1;
    let n = "";
    for (; t--; )
      n += e[i[t] & l];
    return n;
  }
}
tt.RandomStringGenerator = Hn;
var nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.StringReplacer = void 0;
class Yn {
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
nt.StringReplacer = Yn;
Object.defineProperty(De, "__esModule", { value: !0 });
De.Str = void 0;
const vt = gt, zn = Ze, Jn = et, Xn = tt, ut = nt;
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
    const [i, l] = this.split(e, 2);
    return [i, l];
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
    const t = new zn.RandomStringConfig(), i = new Jn.RandomStringBuilder(t);
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
    return new Xn.RandomStringGenerator(te, e).generate();
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
      const i = Math.floor(Math.random() * t--), l = e[t];
      e[t] = e[i], e[i] = l;
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
    return (0, vt.v4)();
  }
  /**
   * Determine whether the given string is a valid UUID (no matter what version).
   *
   * @returns {Boolean}
   */
  isUuid() {
    return (0, vt.validate)(this.value);
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
const Zn = De, Ee = (s) => new Zn.Str(s);
je.Str = Ee;
Ee.uuid = () => Ee().uuid();
Ee.random = (s) => Ee().random(s);
Ee.isString = (s) => Ee().isString(s);
Ee.isAlphaNumeric = (s) => Ee().isAlphaNumeric(s);
Ee.isSymbol = (s) => Ee().isSymbol(s);
var er = je.default = Ee;
const mt = () => process.env.NODE_ENV === "test", tr = () => "id-" + (Math.random() + 1).toString(36).substring(7), Lt = (s) => er(s).isCamel(), xt = (s) => {
  let e = null;
  return Object.entries(s).forEach(([t, i]) => {
    if (i.type === "repeat") {
      const n = xt(i.questions);
      n && (e = n);
    }
    Lt(t) || (e = t);
  }), e;
}, Tt = (s) => {
  const e = Object.values(s);
  let t = [];
  const i = e.map((l, n) => e.find((p, d) => {
    if (p.type === "repeat" && (t = Tt(p.questions)), n !== d && p.id === l.id)
      return l;
  })).filter(Boolean);
  return t.length && i.push(...t), i;
}, nr = (s) => {
  var i;
  const e = Tt(s);
  if (e.length)
    throw new Error(`Duplicated id values: ${(i = e[0]) == null ? void 0 : i.id}`);
  const t = xt(s);
  if (t)
    throw new Error(`ID must be in camel case: ${t}`);
  return !0;
}, rr = (s, e, t) => s < e ? (mt() || console.warn(`Value ${s} is lower than min ${e}. Returning min.`), e) : s > t ? (mt() || console.warn(`Value ${s} is higher than max ${t}. Returning max.`), t) : s, ir = (s, e) => {
  if (e.type === "repeat" && isNaN(s))
    throw new Error("Value of repeat question must be a number");
}, ht = class {
  constructor() {
    Le(this, "subscribers");
    this.subscribers = {};
  }
  dispatch(e, t) {
    const i = this.subscribers[e];
    i !== void 0 && Object.keys(i).forEach((l) => i[l](t));
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
    return ht.nextId++;
  }
};
let Me = ht;
Le(Me, "nextId", 0);
const sr = {
  text: !0,
  multipleChoice: !0,
  number: !0,
  date: !0,
  repeat: !0
}, or = (s, e = !1) => {
  if (!sr[s.type])
    throw new Error("Invalid question type");
  const t = s.id || tr();
  let i;
  return s.type === "text" ? i = ft(s) : s.type === "date" ? i = ar(s) : s.type === "multipleChoice" ? i = lr(s) : s.type === "repeat" ? i = ur(s) : i = ft(s), {
    id: t,
    type: s.type,
    title: s.title || "",
    indications: s.indications || "",
    logic: s.logic || {},
    options: s.options || {},
    indexInsideRepeat: s.indexInsideRepeat || null,
    ...i
  };
}, ft = (s) => ({
  value: s.value || "",
  required: Boolean(s.required),
  placeholder: s.placeholder || "",
  subType: s.subType || ""
}), ar = (s) => ({
  format: s.format || "dd/mm/yyyy",
  ...ft(s)
}), lr = (s) => {
  var e;
  return {
    value: ((e = s.choices.find((t) => t.checked === !0)) == null ? void 0 : e.label) || "",
    choices: s.choices || [],
    subType: s.subType || "radio"
  };
}, ur = (s) => ({
  value: s.value || "",
  range: s.range || { min: 0, max: 0 },
  questions: s.questions || {}
}), cr = (s, e) => {
  const t = JSON.parse(JSON.stringify(s));
  return Object.entries(t).forEach(([i, l]) => {
    const n = e + 1;
    l.title && (l.title = l.title.replace(/\<%= index %>/g, n.toString())), l.indexInsideRepeat = n;
  }), t;
};
var Ke = {}, fr = {
  get exports() {
    return Ke;
  },
  set exports(s) {
    Ke = s;
  }
};
/*! Browser bundle of nunjucks 3.2.4  */
(function(s, e) {
  (function(i, l) {
    s.exports = l();
  })(typeof self < "u" ? self : ct, function() {
    return (
      /******/
      function(t) {
        var i = {};
        function l(n) {
          if (i[n])
            return i[n].exports;
          var p = i[n] = {
            /******/
            i: n,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return t[n].call(p.exports, p, p.exports, l), p.l = !0, p.exports;
        }
        return l.m = t, l.c = i, l.d = function(n, p, d) {
          l.o(n, p) || Object.defineProperty(n, p, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: d
            /******/
          });
        }, l.n = function(n) {
          var p = n && n.__esModule ? (
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
          return l.d(p, "a", p), p;
        }, l.o = function(n, p) {
          return Object.prototype.hasOwnProperty.call(n, p);
        }, l.p = "", l(l.s = 11);
      }([
        /* 0 */
        /***/
        function(t, g, l) {
          var n = Array.prototype, p = Object.prototype, d = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\\": "&#92;"
          }, k = /[&"'<>\\]/g, g = t.exports = {};
          function x(w, S) {
            return p.hasOwnProperty.call(w, S);
          }
          g.hasOwnProp = x;
          function P(w) {
            return d[w];
          }
          function M(w, S, j) {
            if (j.Update || (j = new g.TemplateError(j)), j.Update(w), !S) {
              var D = j;
              j = new Error(D.message), j.name = D.name;
            }
            return j;
          }
          g._prettifyError = M;
          function I(w, S, j) {
            var D, $;
            w instanceof Error && ($ = w, w = $.name + ": " + $.message), Object.setPrototypeOf ? (D = new Error(w), Object.setPrototypeOf(D, I.prototype)) : (D = this, Object.defineProperty(D, "message", {
              enumerable: !1,
              writable: !0,
              value: w
            })), Object.defineProperty(D, "name", {
              value: "Template render error"
            }), Error.captureStackTrace && Error.captureStackTrace(D, this.constructor);
            var ne;
            if ($) {
              var z = Object.getOwnPropertyDescriptor($, "stack");
              ne = z && (z.get || function() {
                return z.value;
              }), ne || (ne = function() {
                return $.stack;
              });
            } else {
              var ue = new Error(w).stack;
              ne = function() {
                return ue;
              };
            }
            return Object.defineProperty(D, "stack", {
              get: function() {
                return ne.call(D);
              }
            }), Object.defineProperty(D, "cause", {
              value: $
            }), D.lineno = S, D.colno = j, D.firstUpdate = !0, D.Update = function(X) {
              var Z = "(" + (X || "unknown path") + ")";
              return this.firstUpdate && (this.lineno && this.colno ? Z += " [Line " + this.lineno + ", Column " + this.colno + "]" : this.lineno && (Z += " [Line " + this.lineno + "]")), Z += `
 `, this.firstUpdate && (Z += " "), this.message = Z + (this.message || ""), this.firstUpdate = !1, this;
            }, D;
          }
          Object.setPrototypeOf ? Object.setPrototypeOf(I.prototype, Error.prototype) : I.prototype = Object.create(Error.prototype, {
            constructor: {
              value: I
            }
          }), g.TemplateError = I;
          function T(w) {
            return w.replace(k, P);
          }
          g.escape = T;
          function C(w) {
            return p.toString.call(w) === "[object Function]";
          }
          g.isFunction = C;
          function r(w) {
            return p.toString.call(w) === "[object Array]";
          }
          g.isArray = r;
          function a(w) {
            return p.toString.call(w) === "[object String]";
          }
          g.isString = a;
          function u(w) {
            return p.toString.call(w) === "[object Object]";
          }
          g.isObject = u;
          function b(w) {
            return w ? typeof w == "string" ? w.split(".") : [w] : [];
          }
          function m(w) {
            var S = b(w);
            return function(D) {
              for (var $ = D, ne = 0; ne < S.length; ne++) {
                var z = S[ne];
                if (x($, z))
                  $ = $[z];
                else
                  return;
              }
              return $;
            };
          }
          g.getAttrGetter = m;
          function E(w, S, j) {
            for (var D = {}, $ = C(S) ? S : m(S), ne = 0; ne < w.length; ne++) {
              var z = w[ne], ue = $(z, ne);
              if (ue === void 0 && j === !0)
                throw new TypeError('groupby: attribute "' + S + '" resolved to undefined');
              (D[ue] || (D[ue] = [])).push(z);
            }
            return D;
          }
          g.groupBy = E;
          function o(w) {
            return Array.prototype.slice.call(w);
          }
          g.toArray = o;
          function c(w) {
            var S = [];
            if (!w)
              return S;
            for (var j = w.length, D = o(arguments).slice(1), $ = -1; ++$ < j; )
              A(D, w[$]) === -1 && S.push(w[$]);
            return S;
          }
          g.without = c;
          function v(w, S) {
            for (var j = "", D = 0; D < S; D++)
              j += w;
            return j;
          }
          g.repeat = v;
          function f(w, S, j) {
            if (w != null) {
              if (n.forEach && w.forEach === n.forEach)
                w.forEach(S, j);
              else if (w.length === +w.length)
                for (var D = 0, $ = w.length; D < $; D++)
                  S.call(j, w[D], D, w);
            }
          }
          g.each = f;
          function h(w, S) {
            var j = [];
            if (w == null)
              return j;
            if (n.map && w.map === n.map)
              return w.map(S);
            for (var D = 0; D < w.length; D++)
              j[j.length] = S(w[D], D);
            return w.length === +w.length && (j.length = w.length), j;
          }
          g.map = h;
          function _(w, S, j) {
            var D = -1;
            function $() {
              D++, D < w.length ? S(w[D], D, $, j) : j();
            }
            $();
          }
          g.asyncIter = _;
          function y(w, S, j) {
            var D = R(w || {}), $ = D.length, ne = -1;
            function z() {
              ne++;
              var ue = D[ne];
              ne < $ ? S(ue, w[ue], ne, $, z) : j();
            }
            z();
          }
          g.asyncFor = y;
          function A(w, S, j) {
            return Array.prototype.indexOf.call(w || [], S, j);
          }
          g.indexOf = A;
          function R(w) {
            var S = [];
            for (var j in w)
              x(w, j) && S.push(j);
            return S;
          }
          g.keys = R;
          function N(w) {
            return R(w).map(function(S) {
              return [S, w[S]];
            });
          }
          g._entries = N;
          function B(w) {
            return R(w).map(function(S) {
              return w[S];
            });
          }
          g._values = B;
          function K(w, S) {
            return w = w || {}, R(S).forEach(function(j) {
              w[j] = S[j];
            }), w;
          }
          g._assign = g.extend = K;
          function L(w, S) {
            if (r(S) || a(S))
              return S.indexOf(w) !== -1;
            if (u(S))
              return w in S;
            throw new Error('Cannot use "in" operator to search for "' + w + '" in unexpected types.');
          }
          g.inOperator = L;
        },
        /* 1 */
        /***/
        function(t, i, l) {
          function n(a, u) {
            for (var b = 0; b < u.length; b++) {
              var m = u[b];
              m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(a, d(m.key), m);
            }
          }
          function p(a, u, b) {
            return u && n(a.prototype, u), b && n(a, b), Object.defineProperty(a, "prototype", { writable: !1 }), a;
          }
          function d(a) {
            var u = k(a, "string");
            return typeof u == "symbol" ? u : String(u);
          }
          function k(a, u) {
            if (typeof a != "object" || a === null)
              return a;
            var b = a[Symbol.toPrimitive];
            if (b !== void 0) {
              var m = b.call(a, u || "default");
              if (typeof m != "object")
                return m;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (u === "string" ? String : Number)(a);
          }
          function g(a, u) {
            a.prototype = Object.create(u.prototype), a.prototype.constructor = a, x(a, u);
          }
          function x(a, u) {
            return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, E) {
              return m.__proto__ = E, m;
            }, x(a, u);
          }
          var P = l(16), M = l(0);
          function I(a, u) {
            return typeof a != "function" || typeof u != "function" ? u : function() {
              var m = this.parent;
              this.parent = a;
              var E = u.apply(this, arguments);
              return this.parent = m, E;
            };
          }
          function T(a, u, b) {
            b = b || {}, M.keys(b).forEach(function(E) {
              b[E] = I(a.prototype[E], b[E]);
            });
            var m = /* @__PURE__ */ function(E) {
              g(o, E);
              function o() {
                return E.apply(this, arguments) || this;
              }
              return p(o, [{
                key: "typename",
                get: function() {
                  return u;
                }
              }]), o;
            }(a);
            return M._assign(m.prototype, b), m;
          }
          var C = /* @__PURE__ */ function() {
            function a() {
              this.init.apply(this, arguments);
            }
            var u = a.prototype;
            return u.init = function() {
            }, a.extend = function(m, E) {
              return typeof m == "object" && (E = m, m = "anonymous"), T(this, m, E);
            }, p(a, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), a;
          }(), r = /* @__PURE__ */ function(a) {
            g(u, a);
            function u() {
              var m, E;
              return E = a.call(this) || this, (m = E).init.apply(m, arguments), E;
            }
            var b = u.prototype;
            return b.init = function() {
            }, u.extend = function(E, o) {
              return typeof E == "object" && (o = E, E = "anonymous"), T(this, E, o);
            }, p(u, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), u;
          }(P);
          t.exports = {
            Obj: C,
            EmitterObj: r
          };
        },
        /* 2 */
        /***/
        function(t, i, l) {
          var n = l(0), p = Array.from, d = typeof Symbol == "function" && Symbol.iterator && typeof p == "function", k = /* @__PURE__ */ function() {
            function h(y, A) {
              this.variables = /* @__PURE__ */ Object.create(null), this.parent = y, this.topLevel = !1, this.isolateWrites = A;
            }
            var _ = h.prototype;
            return _.set = function(A, R, N) {
              var B = A.split("."), K = this.variables, L = this;
              if (N && (L = this.resolve(B[0], !0))) {
                L.set(A, R);
                return;
              }
              for (var w = 0; w < B.length - 1; w++) {
                var S = B[w];
                K[S] || (K[S] = {}), K = K[S];
              }
              K[B[B.length - 1]] = R;
            }, _.get = function(A) {
              var R = this.variables[A];
              return R !== void 0 ? R : null;
            }, _.lookup = function(A) {
              var R = this.parent, N = this.variables[A];
              return N !== void 0 ? N : R && R.lookup(A);
            }, _.resolve = function(A, R) {
              var N = R && this.isolateWrites ? void 0 : this.parent, B = this.variables[A];
              return B !== void 0 ? this : N && N.resolve(A);
            }, _.push = function(A) {
              return new h(this, A);
            }, _.pop = function() {
              return this.parent;
            }, h;
          }();
          function g(h, _, y) {
            return function() {
              for (var R = arguments.length, N = new Array(R), B = 0; B < R; B++)
                N[B] = arguments[B];
              var K = I(N), L, w = M(N);
              if (K > h.length)
                L = N.slice(0, h.length), N.slice(L.length, K).forEach(function(D, $) {
                  $ < _.length && (w[_[$]] = D);
                }), L.push(w);
              else if (K < h.length) {
                L = N.slice(0, K);
                for (var S = K; S < h.length; S++) {
                  var j = h[S];
                  L.push(w[j]), delete w[j];
                }
                L.push(w);
              } else
                L = N;
              return y.apply(this, L);
            };
          }
          function x(h) {
            return h.__keywords = !0, h;
          }
          function P(h) {
            return h && Object.prototype.hasOwnProperty.call(h, "__keywords");
          }
          function M(h) {
            var _ = h.length;
            if (_) {
              var y = h[_ - 1];
              if (P(y))
                return y;
            }
            return {};
          }
          function I(h) {
            var _ = h.length;
            if (_ === 0)
              return 0;
            var y = h[_ - 1];
            return P(y) ? _ - 1 : _;
          }
          function T(h) {
            if (typeof h != "string")
              return h;
            this.val = h, this.length = h.length;
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
          function C(h, _) {
            return h instanceof T ? new T(_) : _.toString();
          }
          function r(h) {
            var _ = typeof h;
            return _ === "string" ? new T(h) : _ !== "function" ? h : function(A) {
              var R = h.apply(this, arguments);
              return typeof R == "string" ? new T(R) : R;
            };
          }
          function a(h, _) {
            return h = h ?? "", _ && !(h instanceof T) && (h = n.escape(h.toString())), h;
          }
          function u(h, _, y) {
            if (h == null)
              throw new n.TemplateError("attempted to output null or undefined value", _ + 1, y + 1);
            return h;
          }
          function b(h, _) {
            if (h != null)
              return typeof h[_] == "function" ? function() {
                for (var y = arguments.length, A = new Array(y), R = 0; R < y; R++)
                  A[R] = arguments[R];
                return h[_].apply(h, A);
              } : h[_];
          }
          function m(h, _, y, A) {
            if (h) {
              if (typeof h != "function")
                throw new Error("Unable to call `" + _ + "`, which is not a function");
            } else
              throw new Error("Unable to call `" + _ + "`, which is undefined or falsey");
            return h.apply(y, A);
          }
          function E(h, _, y) {
            var A = _.lookup(y);
            return A !== void 0 ? A : h.lookup(y);
          }
          function o(h, _, y) {
            return h.lineno ? h : new n.TemplateError(h, _, y);
          }
          function c(h, _, y, A) {
            if (n.isArray(h)) {
              var R = h.length;
              n.asyncIter(h, function(B, K, L) {
                switch (_) {
                  case 1:
                    y(B, K, R, L);
                    break;
                  case 2:
                    y(B[0], B[1], K, R, L);
                    break;
                  case 3:
                    y(B[0], B[1], B[2], K, R, L);
                    break;
                  default:
                    B.push(K, R, L), y.apply(this, B);
                }
              }, A);
            } else
              n.asyncFor(h, function(B, K, L, w, S) {
                y(B, K, L, w, S);
              }, A);
          }
          function v(h, _, y, A) {
            var R = 0, N, B;
            function K($, ne) {
              R++, B[$] = ne, R === N && A(null, B.join(""));
            }
            if (n.isArray(h))
              if (N = h.length, B = new Array(N), N === 0)
                A(null, "");
              else
                for (var L = 0; L < h.length; L++) {
                  var w = h[L];
                  switch (_) {
                    case 1:
                      y(w, L, N, K);
                      break;
                    case 2:
                      y(w[0], w[1], L, N, K);
                      break;
                    case 3:
                      y(w[0], w[1], w[2], L, N, K);
                      break;
                    default:
                      w.push(L, N, K), y.apply(this, w);
                  }
                }
            else {
              var S = n.keys(h || {});
              if (N = S.length, B = new Array(N), N === 0)
                A(null, "");
              else
                for (var j = 0; j < S.length; j++) {
                  var D = S[j];
                  y(D, h[D], j, N, K);
                }
            }
          }
          function f(h) {
            return typeof h != "object" || h === null || n.isArray(h) ? h : d && Symbol.iterator in h ? p(h) : h;
          }
          t.exports = {
            Frame: k,
            makeMacro: g,
            makeKeywordArgs: x,
            numArgs: I,
            suppressValue: a,
            ensureDefined: u,
            memberLookup: b,
            contextOrFrameLookup: E,
            callWrap: m,
            handleError: o,
            isArray: n.isArray,
            keys: n.keys,
            SafeString: T,
            copySafeness: C,
            markSafe: r,
            asyncEach: c,
            asyncAll: v,
            inOperator: n.inOperator,
            fromIterator: f
          };
        },
        /* 3 */
        /***/
        function(t, i, l) {
          function n(Q, H) {
            for (var ie = 0; ie < H.length; ie++) {
              var re = H[ie];
              re.enumerable = re.enumerable || !1, re.configurable = !0, "value" in re && (re.writable = !0), Object.defineProperty(Q, d(re.key), re);
            }
          }
          function p(Q, H, ie) {
            return H && n(Q.prototype, H), ie && n(Q, ie), Object.defineProperty(Q, "prototype", { writable: !1 }), Q;
          }
          function d(Q) {
            var H = k(Q, "string");
            return typeof H == "symbol" ? H : String(H);
          }
          function k(Q, H) {
            if (typeof Q != "object" || Q === null)
              return Q;
            var ie = Q[Symbol.toPrimitive];
            if (ie !== void 0) {
              var re = ie.call(Q, H || "default");
              if (typeof re != "object")
                return re;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (H === "string" ? String : Number)(Q);
          }
          function g(Q, H) {
            Q.prototype = Object.create(H.prototype), Q.prototype.constructor = Q, x(Q, H);
          }
          function x(Q, H) {
            return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(re, oe) {
              return re.__proto__ = oe, re;
            }, x(Q, H);
          }
          var P = l(1), M = P.Obj;
          function I(Q, H, ie) {
            Q instanceof H && ie.push(Q), Q instanceof T && Q.findAll(H, ie);
          }
          var T = /* @__PURE__ */ function(Q) {
            g(H, Q);
            function H() {
              return Q.apply(this, arguments) || this;
            }
            var ie = H.prototype;
            return ie.init = function(oe, ce) {
              for (var _e = arguments, Se = this, Re = arguments.length, Bt = new Array(Re > 2 ? Re - 2 : 0), Be = 2; Be < Re; Be++)
                Bt[Be - 2] = arguments[Be];
              this.lineno = oe, this.colno = ce, this.fields.forEach(function(Ft, Mt) {
                var it = _e[Mt + 2];
                it === void 0 && (it = null), Se[Ft] = it;
              });
            }, ie.findAll = function(oe, ce) {
              var _e = this;
              return ce = ce || [], this instanceof r ? this.children.forEach(function(Se) {
                return I(Se, oe, ce);
              }) : this.fields.forEach(function(Se) {
                return I(_e[Se], oe, ce);
              }), ce;
            }, ie.iterFields = function(oe) {
              var ce = this;
              this.fields.forEach(function(_e) {
                oe(ce[_e], _e);
              });
            }, H;
          }(M), C = /* @__PURE__ */ function(Q) {
            g(H, Q);
            function H() {
              return Q.apply(this, arguments) || this;
            }
            return p(H, [{
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
          }(T), r = /* @__PURE__ */ function(Q) {
            g(H, Q);
            function H() {
              return Q.apply(this, arguments) || this;
            }
            var ie = H.prototype;
            return ie.init = function(oe, ce, _e) {
              Q.prototype.init.call(this, oe, ce, _e || []);
            }, ie.addChild = function(oe) {
              this.children.push(oe);
            }, p(H, [{
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
          }(T), a = r.extend("Root"), u = C.extend("Literal"), b = C.extend("Symbol"), m = r.extend("Group"), E = r.extend("Array"), o = T.extend("Pair", {
            fields: ["key", "value"]
          }), c = r.extend("Dict"), v = T.extend("LookupVal", {
            fields: ["target", "val"]
          }), f = T.extend("If", {
            fields: ["cond", "body", "else_"]
          }), h = f.extend("IfAsync"), _ = T.extend("InlineIf", {
            fields: ["cond", "body", "else_"]
          }), y = T.extend("For", {
            fields: ["arr", "name", "body", "else_"]
          }), A = y.extend("AsyncEach"), R = y.extend("AsyncAll"), N = T.extend("Macro", {
            fields: ["name", "args", "body"]
          }), B = N.extend("Caller"), K = T.extend("Import", {
            fields: ["template", "target", "withContext"]
          }), L = /* @__PURE__ */ function(Q) {
            g(H, Q);
            function H() {
              return Q.apply(this, arguments) || this;
            }
            var ie = H.prototype;
            return ie.init = function(oe, ce, _e, Se, Re) {
              Q.prototype.init.call(this, oe, ce, _e, Se || new r(), Re);
            }, p(H, [{
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
          }(T), w = T.extend("FunCall", {
            fields: ["name", "args"]
          }), S = w.extend("Filter"), j = S.extend("FilterAsync", {
            fields: ["name", "args", "symbol"]
          }), D = c.extend("KeywordArgs"), $ = T.extend("Block", {
            fields: ["name", "body"]
          }), ne = T.extend("Super", {
            fields: ["blockName", "symbol"]
          }), z = T.extend("TemplateRef", {
            fields: ["template"]
          }), ue = z.extend("Extends"), he = T.extend("Include", {
            fields: ["template", "ignoreMissing"]
          }), X = T.extend("Set", {
            fields: ["targets", "value"]
          }), Z = T.extend("Switch", {
            fields: ["expr", "cases", "default"]
          }), q = T.extend("Case", {
            fields: ["cond", "body"]
          }), G = r.extend("Output"), W = T.extend("Capture", {
            fields: ["body"]
          }), se = u.extend("TemplateData"), ye = T.extend("UnaryOp", {
            fields: ["target"]
          }), fe = T.extend("BinOp", {
            fields: ["left", "right"]
          }), ke = fe.extend("In"), O = fe.extend("Is"), F = fe.extend("Or"), V = fe.extend("And"), U = ye.extend("Not"), Y = fe.extend("Add"), J = fe.extend("Concat"), ae = fe.extend("Sub"), ee = fe.extend("Mul"), le = fe.extend("Div"), we = fe.extend("FloorDiv"), be = fe.extend("Mod"), Oe = fe.extend("Pow"), Ct = ye.extend("Neg"), Nt = ye.extend("Pos"), It = T.extend("Compare", {
            fields: ["expr", "ops"]
          }), Rt = T.extend("CompareOperand", {
            fields: ["expr", "type"]
          }), rt = T.extend("CallExtension", {
            init: function(H, ie, re, oe) {
              this.parent(), this.extName = H.__name || H, this.prop = ie, this.args = re || new r(), this.contentArgs = oe || [], this.autoescape = H.autoescape;
            },
            fields: ["extName", "prop", "args", "contentArgs"]
          }), Pt = rt.extend("CallExtensionAsync");
          function Ne(Q, H, ie) {
            var re = Q.split(`
`);
            re.forEach(function(oe, ce) {
              oe && (ie && ce > 0 || !ie) && process.stdout.write(" ".repeat(H));
              var _e = ce === re.length - 1 ? "" : `
`;
              process.stdout.write("" + oe + _e);
            });
          }
          function Ie(Q, H) {
            if (H = H || 0, Ne(Q.typename + ": ", H), Q instanceof r)
              Ne(`
`), Q.children.forEach(function(oe) {
                Ie(oe, H + 2);
              });
            else if (Q instanceof rt)
              Ne(Q.extName + "." + Q.prop + `
`), Q.args && Ie(Q.args, H + 2), Q.contentArgs && Q.contentArgs.forEach(function(oe) {
                Ie(oe, H + 2);
              });
            else {
              var ie = [], re = null;
              Q.iterFields(function(oe, ce) {
                oe instanceof T ? ie.push([ce, oe]) : (re = re || {}, re[ce] = oe);
              }), re ? Ne(JSON.stringify(re, null, 2) + `
`, null, !0) : Ne(`
`), ie.forEach(function(oe) {
                var ce = oe[0], _e = oe[1];
                Ne("[" + ce + "] =>", H + 2), Ie(_e, H + 4);
              });
            }
          }
          t.exports = {
            Node: T,
            Root: a,
            NodeList: r,
            Value: C,
            Literal: u,
            Symbol: b,
            Group: m,
            Array: E,
            Pair: o,
            Dict: c,
            Output: G,
            Capture: W,
            TemplateData: se,
            If: f,
            IfAsync: h,
            InlineIf: _,
            For: y,
            AsyncEach: A,
            AsyncAll: R,
            Macro: N,
            Caller: B,
            Import: K,
            FromImport: L,
            FunCall: w,
            Filter: S,
            FilterAsync: j,
            KeywordArgs: D,
            Block: $,
            Super: ne,
            Extends: ue,
            Include: he,
            Set: X,
            Switch: Z,
            Case: q,
            LookupVal: v,
            BinOp: fe,
            In: ke,
            Is: O,
            Or: F,
            And: V,
            Not: U,
            Add: Y,
            Concat: J,
            Sub: ae,
            Mul: ee,
            Div: le,
            FloorDiv: we,
            Mod: be,
            Pow: Oe,
            Neg: Ct,
            Pos: Nt,
            Compare: It,
            CompareOperand: Rt,
            CallExtension: rt,
            CallExtensionAsync: Pt,
            printNodes: Ie
          };
        },
        /* 4 */
        /***/
        function(t, i) {
        },
        /* 5 */
        /***/
        function(t, i, l) {
          function n(u, b) {
            u.prototype = Object.create(b.prototype), u.prototype.constructor = u, p(u, b);
          }
          function p(u, b) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(E, o) {
              return E.__proto__ = o, E;
            }, p(u, b);
          }
          var d = l(8), k = l(17), g = l(3), x = l(0), P = x.TemplateError, M = l(2), I = M.Frame, T = l(1), C = T.Obj, r = {
            "==": "==",
            "===": "===",
            "!=": "!=",
            "!==": "!==",
            "<": "<",
            ">": ">",
            "<=": "<=",
            ">=": ">="
          }, a = /* @__PURE__ */ function(u) {
            n(b, u);
            function b() {
              return u.apply(this, arguments) || this;
            }
            var m = b.prototype;
            return m.init = function(o, c) {
              this.templateName = o, this.codebuf = [], this.lastId = 0, this.buffer = null, this.bufferStack = [], this._scopeClosers = "", this.inBlock = !1, this.throwOnUndefined = c;
            }, m.fail = function(o, c, v) {
              throw c !== void 0 && (c += 1), v !== void 0 && (v += 1), new P(o, c, v);
            }, m._pushBuffer = function() {
              var o = this._tmpid();
              return this.bufferStack.push(this.buffer), this.buffer = o, this._emit("var " + this.buffer + ' = "";'), o;
            }, m._popBuffer = function() {
              this.buffer = this.bufferStack.pop();
            }, m._emit = function(o) {
              this.codebuf.push(o);
            }, m._emitLine = function(o) {
              this._emit(o + `
`);
            }, m._emitLines = function() {
              for (var o = this, c = arguments.length, v = new Array(c), f = 0; f < c; f++)
                v[f] = arguments[f];
              v.forEach(function(h) {
                return o._emitLine(h);
              });
            }, m._emitFuncBegin = function(o, c) {
              this.buffer = "output", this._scopeClosers = "", this._emitLine("function " + c + "(env, context, frame, runtime, cb) {"), this._emitLine("var lineno = " + o.lineno + ";"), this._emitLine("var colno = " + o.colno + ";"), this._emitLine("var " + this.buffer + ' = "";'), this._emitLine("try {");
            }, m._emitFuncEnd = function(o) {
              o || this._emitLine("cb(null, " + this.buffer + ");"), this._closeScopeLevels(), this._emitLine("} catch (e) {"), this._emitLine("  cb(runtime.handleError(e, lineno, colno));"), this._emitLine("}"), this._emitLine("}"), this.buffer = null;
            }, m._addScopeLevel = function() {
              this._scopeClosers += "})";
            }, m._closeScopeLevels = function() {
              this._emitLine(this._scopeClosers + ";"), this._scopeClosers = "";
            }, m._withScopedSyntax = function(o) {
              var c = this._scopeClosers;
              this._scopeClosers = "", o.call(this), this._closeScopeLevels(), this._scopeClosers = c;
            }, m._makeCallback = function(o) {
              var c = this._tmpid();
              return "function(" + c + (o ? "," + o : "") + `) {
if(` + c + ") { cb(" + c + "); return; }";
            }, m._tmpid = function() {
              return this.lastId++, "t_" + this.lastId;
            }, m._templateName = function() {
              return this.templateName == null ? "undefined" : JSON.stringify(this.templateName);
            }, m._compileChildren = function(o, c) {
              var v = this;
              o.children.forEach(function(f) {
                v.compile(f, c);
              });
            }, m._compileAggregate = function(o, c, v, f) {
              var h = this;
              v && this._emit(v), o.children.forEach(function(_, y) {
                y > 0 && h._emit(","), h.compile(_, c);
              }), f && this._emit(f);
            }, m._compileExpression = function(o, c) {
              this.assertType(o, g.Literal, g.Symbol, g.Group, g.Array, g.Dict, g.FunCall, g.Caller, g.Filter, g.LookupVal, g.Compare, g.InlineIf, g.In, g.Is, g.And, g.Or, g.Not, g.Add, g.Concat, g.Sub, g.Mul, g.Div, g.FloorDiv, g.Mod, g.Pow, g.Neg, g.Pos, g.Compare, g.NodeList), this.compile(o, c);
            }, m.assertType = function(o) {
              for (var c = arguments.length, v = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
                v[f - 1] = arguments[f];
              v.some(function(h) {
                return o instanceof h;
              }) || this.fail("assertType: invalid type: " + o.typename, o.lineno, o.colno);
            }, m.compileCallExtension = function(o, c, v) {
              var f = this, h = o.args, _ = o.contentArgs, y = typeof o.autoescape == "boolean" ? o.autoescape : !0;
              if (v || this._emit(this.buffer + " += runtime.suppressValue("), this._emit('env.getExtension("' + o.extName + '")["' + o.prop + '"]('), this._emit("context"), (h || _) && this._emit(","), h && (h instanceof g.NodeList || this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"), h.children.forEach(function(R, N) {
                f._compileExpression(R, c), (N !== h.children.length - 1 || _.length) && f._emit(",");
              })), _.length && _.forEach(function(R, N) {
                if (N > 0 && f._emit(","), R) {
                  f._emitLine("function(cb) {"), f._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");
                  var B = f._pushBuffer();
                  f._withScopedSyntax(function() {
                    f.compile(R, c), f._emitLine("cb(null, " + B + ");");
                  }), f._popBuffer(), f._emitLine("return " + B + ";"), f._emitLine("}");
                } else
                  f._emit("null");
              }), v) {
                var A = this._tmpid();
                this._emitLine(", " + this._makeCallback(A)), this._emitLine(this.buffer + " += runtime.suppressValue(" + A + ", " + y + " && env.opts.autoescape);"), this._addScopeLevel();
              } else
                this._emit(")"), this._emit(", " + y + ` && env.opts.autoescape);
`);
            }, m.compileCallExtensionAsync = function(o, c) {
              this.compileCallExtension(o, c, !0);
            }, m.compileNodeList = function(o, c) {
              this._compileChildren(o, c);
            }, m.compileLiteral = function(o) {
              if (typeof o.value == "string") {
                var c = o.value.replace(/\\/g, "\\\\");
                c = c.replace(/"/g, '\\"'), c = c.replace(/\n/g, "\\n"), c = c.replace(/\r/g, "\\r"), c = c.replace(/\t/g, "\\t"), c = c.replace(/\u2028/g, "\\u2028"), this._emit('"' + c + '"');
              } else
                o.value === null ? this._emit("null") : this._emit(o.value.toString());
            }, m.compileSymbol = function(o, c) {
              var v = o.value, f = c.lookup(v);
              f ? this._emit(f) : this._emit('runtime.contextOrFrameLookup(context, frame, "' + v + '")');
            }, m.compileGroup = function(o, c) {
              this._compileAggregate(o, c, "(", ")");
            }, m.compileArray = function(o, c) {
              this._compileAggregate(o, c, "[", "]");
            }, m.compileDict = function(o, c) {
              this._compileAggregate(o, c, "{", "}");
            }, m.compilePair = function(o, c) {
              var v = o.key, f = o.value;
              v instanceof g.Symbol ? v = new g.Literal(v.lineno, v.colno, v.value) : v instanceof g.Literal && typeof v.value == "string" || this.fail("compilePair: Dict keys must be strings or names", v.lineno, v.colno), this.compile(v, c), this._emit(": "), this._compileExpression(f, c);
            }, m.compileInlineIf = function(o, c) {
              this._emit("("), this.compile(o.cond, c), this._emit("?"), this.compile(o.body, c), this._emit(":"), o.else_ !== null ? this.compile(o.else_, c) : this._emit('""'), this._emit(")");
            }, m.compileIn = function(o, c) {
              this._emit("runtime.inOperator("), this.compile(o.left, c), this._emit(","), this.compile(o.right, c), this._emit(")");
            }, m.compileIs = function(o, c) {
              var v = o.right.name ? o.right.name.value : o.right.value;
              this._emit('env.getTest("' + v + '").call(context, '), this.compile(o.left, c), o.right.args && (this._emit(","), this.compile(o.right.args, c)), this._emit(") === true");
            }, m._binOpEmitter = function(o, c, v) {
              this.compile(o.left, c), this._emit(v), this.compile(o.right, c);
            }, m.compileOr = function(o, c) {
              return this._binOpEmitter(o, c, " || ");
            }, m.compileAnd = function(o, c) {
              return this._binOpEmitter(o, c, " && ");
            }, m.compileAdd = function(o, c) {
              return this._binOpEmitter(o, c, " + ");
            }, m.compileConcat = function(o, c) {
              return this._binOpEmitter(o, c, ' + "" + ');
            }, m.compileSub = function(o, c) {
              return this._binOpEmitter(o, c, " - ");
            }, m.compileMul = function(o, c) {
              return this._binOpEmitter(o, c, " * ");
            }, m.compileDiv = function(o, c) {
              return this._binOpEmitter(o, c, " / ");
            }, m.compileMod = function(o, c) {
              return this._binOpEmitter(o, c, " % ");
            }, m.compileNot = function(o, c) {
              this._emit("!"), this.compile(o.target, c);
            }, m.compileFloorDiv = function(o, c) {
              this._emit("Math.floor("), this.compile(o.left, c), this._emit(" / "), this.compile(o.right, c), this._emit(")");
            }, m.compilePow = function(o, c) {
              this._emit("Math.pow("), this.compile(o.left, c), this._emit(", "), this.compile(o.right, c), this._emit(")");
            }, m.compileNeg = function(o, c) {
              this._emit("-"), this.compile(o.target, c);
            }, m.compilePos = function(o, c) {
              this._emit("+"), this.compile(o.target, c);
            }, m.compileCompare = function(o, c) {
              var v = this;
              this.compile(o.expr, c), o.ops.forEach(function(f) {
                v._emit(" " + r[f.type] + " "), v.compile(f.expr, c);
              });
            }, m.compileLookupVal = function(o, c) {
              this._emit("runtime.memberLookup(("), this._compileExpression(o.target, c), this._emit("),"), this._compileExpression(o.val, c), this._emit(")");
            }, m._getNodeName = function(o) {
              switch (o.typename) {
                case "Symbol":
                  return o.value;
                case "FunCall":
                  return "the return value of (" + this._getNodeName(o.name) + ")";
                case "LookupVal":
                  return this._getNodeName(o.target) + '["' + this._getNodeName(o.val) + '"]';
                case "Literal":
                  return o.value.toString();
                default:
                  return "--expression--";
              }
            }, m.compileFunCall = function(o, c) {
              this._emit("(lineno = " + o.lineno + ", colno = " + o.colno + ", "), this._emit("runtime.callWrap("), this._compileExpression(o.name, c), this._emit(', "' + this._getNodeName(o.name).replace(/"/g, '\\"') + '", context, '), this._compileAggregate(o.args, c, "[", "])"), this._emit(")");
            }, m.compileFilter = function(o, c) {
              var v = o.name;
              this.assertType(v, g.Symbol), this._emit('env.getFilter("' + v.value + '").call(context, '), this._compileAggregate(o.args, c), this._emit(")");
            }, m.compileFilterAsync = function(o, c) {
              var v = o.name, f = o.symbol.value;
              this.assertType(v, g.Symbol), c.set(f, f), this._emit('env.getFilter("' + v.value + '").call(context, '), this._compileAggregate(o.args, c), this._emitLine(", " + this._makeCallback(f)), this._addScopeLevel();
            }, m.compileKeywordArgs = function(o, c) {
              this._emit("runtime.makeKeywordArgs("), this.compileDict(o, c), this._emit(")");
            }, m.compileSet = function(o, c) {
              var v = this, f = [];
              o.targets.forEach(function(h) {
                var _ = h.value, y = c.lookup(_);
                y == null && (y = v._tmpid(), v._emitLine("var " + y + ";")), f.push(y);
              }), o.value ? (this._emit(f.join(" = ") + " = "), this._compileExpression(o.value, c), this._emitLine(";")) : (this._emit(f.join(" = ") + " = "), this.compile(o.body, c), this._emitLine(";")), o.targets.forEach(function(h, _) {
                var y = f[_], A = h.value;
                v._emitLine('frame.set("' + A + '", ' + y + ", true);"), v._emitLine("if(frame.topLevel) {"), v._emitLine('context.setVariable("' + A + '", ' + y + ");"), v._emitLine("}"), A.charAt(0) !== "_" && (v._emitLine("if(frame.topLevel) {"), v._emitLine('context.addExport("' + A + '", ' + y + ");"), v._emitLine("}"));
              });
            }, m.compileSwitch = function(o, c) {
              var v = this;
              this._emit("switch ("), this.compile(o.expr, c), this._emit(") {"), o.cases.forEach(function(f, h) {
                v._emit("case "), v.compile(f.cond, c), v._emit(": "), v.compile(f.body, c), f.body.children.length && v._emitLine("break;");
              }), o.default && (this._emit("default:"), this.compile(o.default, c)), this._emit("}");
            }, m.compileIf = function(o, c, v) {
              var f = this;
              this._emit("if("), this._compileExpression(o.cond, c), this._emitLine(") {"), this._withScopedSyntax(function() {
                f.compile(o.body, c), v && f._emit("cb()");
              }), o.else_ ? (this._emitLine(`}
else {`), this._withScopedSyntax(function() {
                f.compile(o.else_, c), v && f._emit("cb()");
              })) : v && (this._emitLine(`}
else {`), this._emit("cb()")), this._emitLine("}");
            }, m.compileIfAsync = function(o, c) {
              this._emit("(function(cb) {"), this.compileIf(o, c, !0), this._emit("})(" + this._makeCallback()), this._addScopeLevel();
            }, m._emitLoopBindings = function(o, c, v, f) {
              var h = this, _ = [{
                name: "index",
                val: v + " + 1"
              }, {
                name: "index0",
                val: v
              }, {
                name: "revindex",
                val: f + " - " + v
              }, {
                name: "revindex0",
                val: f + " - " + v + " - 1"
              }, {
                name: "first",
                val: v + " === 0"
              }, {
                name: "last",
                val: v + " === " + f + " - 1"
              }, {
                name: "length",
                val: f
              }];
              _.forEach(function(y) {
                h._emitLine('frame.set("loop.' + y.name + '", ' + y.val + ");");
              });
            }, m.compileFor = function(o, c) {
              var v = this, f = this._tmpid(), h = this._tmpid(), _ = this._tmpid();
              if (c = c.push(), this._emitLine("frame = frame.push();"), this._emit("var " + _ + " = "), this._compileExpression(o.arr, c), this._emitLine(";"), this._emit("if(" + _ + ") {"), this._emitLine(_ + " = runtime.fromIterator(" + _ + ");"), o.name instanceof g.Array) {
                this._emitLine("var " + f + ";"), this._emitLine("if(runtime.isArray(" + _ + ")) {"), this._emitLine("var " + h + " = " + _ + ".length;"), this._emitLine("for(" + f + "=0; " + f + " < " + _ + ".length; " + f + "++) {"), o.name.children.forEach(function(L, w) {
                  var S = v._tmpid();
                  v._emitLine("var " + S + " = " + _ + "[" + f + "][" + w + "];"), v._emitLine('frame.set("' + L + '", ' + _ + "[" + f + "][" + w + "]);"), c.set(o.name.children[w].value, S);
                }), this._emitLoopBindings(o, _, f, h), this._withScopedSyntax(function() {
                  v.compile(o.body, c);
                }), this._emitLine("}"), this._emitLine("} else {");
                var y = o.name.children, A = y[0], R = y[1], N = this._tmpid(), B = this._tmpid();
                c.set(A.value, N), c.set(R.value, B), this._emitLine(f + " = -1;"), this._emitLine("var " + h + " = runtime.keys(" + _ + ").length;"), this._emitLine("for(var " + N + " in " + _ + ") {"), this._emitLine(f + "++;"), this._emitLine("var " + B + " = " + _ + "[" + N + "];"), this._emitLine('frame.set("' + A.value + '", ' + N + ");"), this._emitLine('frame.set("' + R.value + '", ' + B + ");"), this._emitLoopBindings(o, _, f, h), this._withScopedSyntax(function() {
                  v.compile(o.body, c);
                }), this._emitLine("}"), this._emitLine("}");
              } else {
                var K = this._tmpid();
                c.set(o.name.value, K), this._emitLine("var " + h + " = " + _ + ".length;"), this._emitLine("for(var " + f + "=0; " + f + " < " + _ + ".length; " + f + "++) {"), this._emitLine("var " + K + " = " + _ + "[" + f + "];"), this._emitLine('frame.set("' + o.name.value + '", ' + K + ");"), this._emitLoopBindings(o, _, f, h), this._withScopedSyntax(function() {
                  v.compile(o.body, c);
                }), this._emitLine("}");
              }
              this._emitLine("}"), o.else_ && (this._emitLine("if (!" + h + ") {"), this.compile(o.else_, c), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, m._compileAsyncLoop = function(o, c, v) {
              var f = this, h = this._tmpid(), _ = this._tmpid(), y = this._tmpid(), A = v ? "asyncAll" : "asyncEach";
              if (c = c.push(), this._emitLine("frame = frame.push();"), this._emit("var " + y + " = runtime.fromIterator("), this._compileExpression(o.arr, c), this._emitLine(");"), o.name instanceof g.Array) {
                var R = o.name.children.length;
                this._emit("runtime." + A + "(" + y + ", " + R + ", function("), o.name.children.forEach(function(K) {
                  f._emit(K.value + ",");
                }), this._emit(h + "," + _ + ",next) {"), o.name.children.forEach(function(K) {
                  var L = K.value;
                  c.set(L, L), f._emitLine('frame.set("' + L + '", ' + L + ");");
                });
              } else {
                var N = o.name.value;
                this._emitLine("runtime." + A + "(" + y + ", 1, function(" + N + ", " + h + ", " + _ + ",next) {"), this._emitLine('frame.set("' + N + '", ' + N + ");"), c.set(N, N);
              }
              this._emitLoopBindings(o, y, h, _), this._withScopedSyntax(function() {
                var K;
                v && (K = f._pushBuffer()), f.compile(o.body, c), f._emitLine("next(" + h + (K ? "," + K : "") + ");"), v && f._popBuffer();
              });
              var B = this._tmpid();
              this._emitLine("}, " + this._makeCallback(B)), this._addScopeLevel(), v && this._emitLine(this.buffer + " += " + B + ";"), o.else_ && (this._emitLine("if (!" + y + ".length) {"), this.compile(o.else_, c), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, m.compileAsyncEach = function(o, c) {
              this._compileAsyncLoop(o, c);
            }, m.compileAsyncAll = function(o, c) {
              this._compileAsyncLoop(o, c, !0);
            }, m._compileMacro = function(o, c) {
              var v = this, f = [], h = null, _ = "macro_" + this._tmpid(), y = c !== void 0;
              o.args.children.forEach(function(L, w) {
                w === o.args.children.length - 1 && L instanceof g.Dict ? h = L : (v.assertType(L, g.Symbol), f.push(L));
              });
              var A = [].concat(f.map(function(L) {
                return "l_" + L.value;
              }), ["kwargs"]), R = f.map(function(L) {
                return '"' + L.value + '"';
              }), N = (h && h.children || []).map(function(L) {
                return '"' + L.key.value + '"';
              }), B;
              y ? B = c.push(!0) : B = new I(), this._emitLines("var " + _ + " = runtime.makeMacro(", "[" + R.join(", ") + "], ", "[" + N.join(", ") + "], ", "function (" + A.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (y ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'), f.forEach(function(L) {
                v._emitLine('frame.set("' + L.value + '", l_' + L.value + ");"), B.set(L.value, "l_" + L.value);
              }), h && h.children.forEach(function(L) {
                var w = L.key.value;
                v._emit('frame.set("' + w + '", '), v._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + w + '")'), v._emit(' ? kwargs["' + w + '"] : '), v._compileExpression(L.value, B), v._emit(");");
              });
              var K = this._pushBuffer();
              return this._withScopedSyntax(function() {
                v.compile(o.body, B);
              }), this._emitLine("frame = " + (y ? "frame.pop();" : "callerFrame;")), this._emitLine("return new runtime.SafeString(" + K + ");"), this._emitLine("});"), this._popBuffer(), _;
            }, m.compileMacro = function(o, c) {
              var v = this._compileMacro(o), f = o.name.value;
              c.set(f, v), c.parent ? this._emitLine('frame.set("' + f + '", ' + v + ");") : (o.name.value.charAt(0) !== "_" && this._emitLine('context.addExport("' + f + '");'), this._emitLine('context.setVariable("' + f + '", ' + v + ");"));
            }, m.compileCaller = function(o, c) {
              this._emit("(function (){");
              var v = this._compileMacro(o, c);
              this._emit("return " + v + ";})()");
            }, m._compileGetTemplate = function(o, c, v, f) {
              var h = this._tmpid(), _ = this._templateName(), y = this._makeCallback(h), A = v ? "true" : "false", R = f ? "true" : "false";
              return this._emit("env.getTemplate("), this._compileExpression(o.template, c), this._emitLine(", " + A + ", " + _ + ", " + R + ", " + y), h;
            }, m.compileImport = function(o, c) {
              var v = o.target.value, f = this._compileGetTemplate(o, c, !1, !1);
              this._addScopeLevel(), this._emitLine(f + ".getExported(" + (o.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(f)), this._addScopeLevel(), c.set(v, f), c.parent ? this._emitLine('frame.set("' + v + '", ' + f + ");") : this._emitLine('context.setVariable("' + v + '", ' + f + ");");
            }, m.compileFromImport = function(o, c) {
              var v = this, f = this._compileGetTemplate(o, c, !1, !1);
              this._addScopeLevel(), this._emitLine(f + ".getExported(" + (o.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(f)), this._addScopeLevel(), o.names.children.forEach(function(h) {
                var _, y, A = v._tmpid();
                h instanceof g.Pair ? (_ = h.key.value, y = h.value.value) : (_ = h.value, y = _), v._emitLine("if(Object.prototype.hasOwnProperty.call(" + f + ', "' + _ + '")) {'), v._emitLine("var " + A + " = " + f + "." + _ + ";"), v._emitLine("} else {"), v._emitLine(`cb(new Error("cannot import '` + _ + `'")); return;`), v._emitLine("}"), c.set(y, A), c.parent ? v._emitLine('frame.set("' + y + '", ' + A + ");") : v._emitLine('context.setVariable("' + y + '", ' + A + ");");
              });
            }, m.compileBlock = function(o) {
              var c = this._tmpid();
              this.inBlock || this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '), this._emit('context.getBlock("' + o.name.value + '")'), this.inBlock || this._emit(")"), this._emitLine("(env, context, frame, runtime, " + this._makeCallback(c)), this._emitLine(this.buffer + " += " + c + ";"), this._addScopeLevel();
            }, m.compileSuper = function(o, c) {
              var v = o.blockName.value, f = o.symbol.value, h = this._makeCallback(f);
              this._emitLine('context.getSuper(env, "' + v + '", b_' + v + ", frame, runtime, " + h), this._emitLine(f + " = runtime.markSafe(" + f + ");"), this._addScopeLevel(), c.set(f, f);
            }, m.compileExtends = function(o, c) {
              var v = this._tmpid(), f = this._compileGetTemplate(o, c, !0, !1);
              this._emitLine("parentTemplate = " + f), this._emitLine("for(var " + v + " in parentTemplate.blocks) {"), this._emitLine("context.addBlock(" + v + ", parentTemplate.blocks[" + v + "]);"), this._emitLine("}"), this._addScopeLevel();
            }, m.compileInclude = function(o, c) {
              this._emitLine("var tasks = [];"), this._emitLine("tasks.push("), this._emitLine("function(callback) {");
              var v = this._compileGetTemplate(o, c, !1, o.ignoreMissing);
              this._emitLine("callback(null," + v + ");});"), this._emitLine("});");
              var f = this._tmpid();
              this._emitLine("tasks.push("), this._emitLine("function(template, callback){"), this._emitLine("template.render(context.getVariables(), frame, " + this._makeCallback(f)), this._emitLine("callback(null," + f + ");});"), this._emitLine("});"), this._emitLine("tasks.push("), this._emitLine("function(result, callback){"), this._emitLine(this.buffer + " += result;"), this._emitLine("callback(null);"), this._emitLine("});"), this._emitLine("env.waterfall(tasks, function(){"), this._addScopeLevel();
            }, m.compileTemplateData = function(o, c) {
              this.compileLiteral(o, c);
            }, m.compileCapture = function(o, c) {
              var v = this, f = this.buffer;
              this.buffer = "output", this._emitLine("(function() {"), this._emitLine('var output = "";'), this._withScopedSyntax(function() {
                v.compile(o.body, c);
              }), this._emitLine("return output;"), this._emitLine("})()"), this.buffer = f;
            }, m.compileOutput = function(o, c) {
              var v = this, f = o.children;
              f.forEach(function(h) {
                h instanceof g.TemplateData ? h.value && (v._emit(v.buffer + " += "), v.compileLiteral(h, c), v._emitLine(";")) : (v._emit(v.buffer + " += runtime.suppressValue("), v.throwOnUndefined && v._emit("runtime.ensureDefined("), v.compile(h, c), v.throwOnUndefined && v._emit("," + o.lineno + "," + o.colno + ")"), v._emit(`, env.opts.autoescape);
`));
              });
            }, m.compileRoot = function(o, c) {
              var v = this;
              c && this.fail("compileRoot: root node can't have frame"), c = new I(), this._emitFuncBegin(o, "root"), this._emitLine("var parentTemplate = null;"), this._compileChildren(o, c), this._emitLine("if(parentTemplate) {"), this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"), this._emitLine("} else {"), this._emitLine("cb(null, " + this.buffer + ");"), this._emitLine("}"), this._emitFuncEnd(!0), this.inBlock = !0;
              var f = [], h = o.findAll(g.Block);
              h.forEach(function(_, y) {
                var A = _.name.value;
                if (f.indexOf(A) !== -1)
                  throw new Error('Block "' + A + '" defined more than once.');
                f.push(A), v._emitFuncBegin(_, "b_" + A);
                var R = new I();
                v._emitLine("var frame = frame.push(true);"), v.compile(_.body, R), v._emitFuncEnd();
              }), this._emitLine("return {"), h.forEach(function(_, y) {
                var A = "b_" + _.name.value;
                v._emitLine(A + ": " + A + ",");
              }), this._emitLine(`root: root
};`);
            }, m.compile = function(o, c) {
              var v = this["compile" + o.typename];
              v ? v.call(this, o, c) : this.fail("compile: Cannot compile node: " + o.typename, o.lineno, o.colno);
            }, m.getCode = function() {
              return this.codebuf.join("");
            }, b;
          }(C);
          t.exports = {
            compile: function(b, m, E, o, c) {
              c === void 0 && (c = {});
              var v = new a(o, c.throwOnUndefined), f = (E || []).map(function(_) {
                return _.preprocess;
              }).filter(function(_) {
                return !!_;
              }), h = f.reduce(function(_, y) {
                return y(_);
              }, b);
              return v.compile(k.transform(d.parse(h, E, c), m, o)), v.getCode();
            },
            Compiler: a
          };
        },
        /* 6 */
        /***/
        function(t, i, l) {
          function n(x, P) {
            x.prototype = Object.create(P.prototype), x.prototype.constructor = x, p(x, P);
          }
          function p(x, P) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(I, T) {
              return I.__proto__ = T, I;
            }, p(x, P);
          }
          var d = l(4), k = l(1), g = k.EmitterObj;
          t.exports = /* @__PURE__ */ function(x) {
            n(P, x);
            function P() {
              return x.apply(this, arguments) || this;
            }
            var M = P.prototype;
            return M.resolve = function(T, C) {
              return d.resolve(d.dirname(T), C);
            }, M.isRelative = function(T) {
              return T.indexOf("./") === 0 || T.indexOf("../") === 0;
            }, P;
          }(g);
        },
        /* 7 */
        /***/
        function(t, i, l) {
          function n(R, N) {
            R.prototype = Object.create(N.prototype), R.prototype.constructor = R, p(R, N);
          }
          function p(R, N) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(K, L) {
              return K.__proto__ = L, K;
            }, p(R, N);
          }
          var d = l(12), k = l(15), g = l(0), x = l(5), P = l(18), M = l(10), I = M.FileSystemLoader, T = M.WebLoader, C = M.PrecompiledLoader, r = l(20), a = l(21), u = l(1), b = u.Obj, m = u.EmitterObj, E = l(2), o = E.handleError, c = E.Frame, v = l(22);
          function f(R, N, B) {
            d(function() {
              R(N, B);
            });
          }
          var h = {
            type: "code",
            obj: {
              root: function(N, B, K, L, w) {
                try {
                  w(null, "");
                } catch (S) {
                  w(o(S, null, null));
                }
              }
            }
          }, _ = /* @__PURE__ */ function(R) {
            n(N, R);
            function N() {
              return R.apply(this, arguments) || this;
            }
            var B = N.prototype;
            return B.init = function(L, w) {
              var S = this;
              w = this.opts = w || {}, this.opts.dev = !!w.dev, this.opts.autoescape = w.autoescape != null ? w.autoescape : !0, this.opts.throwOnUndefined = !!w.throwOnUndefined, this.opts.trimBlocks = !!w.trimBlocks, this.opts.lstripBlocks = !!w.lstripBlocks, this.loaders = [], L ? this.loaders = g.isArray(L) ? L : [L] : I ? this.loaders = [new I("views")] : T && (this.loaders = [new T("/views")]), typeof window < "u" && window.nunjucksPrecompiled && this.loaders.unshift(new C(window.nunjucksPrecompiled)), this._initLoaders(), this.globals = a(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], g._entries(P).forEach(function(j) {
                var D = j[0], $ = j[1];
                return S.addFilter(D, $);
              }), g._entries(r).forEach(function(j) {
                var D = j[0], $ = j[1];
                return S.addTest(D, $);
              });
            }, B._initLoaders = function() {
              var L = this;
              this.loaders.forEach(function(w) {
                w.cache = {}, typeof w.on == "function" && (w.on("update", function(S, j) {
                  w.cache[S] = null, L.emit("update", S, j, w);
                }), w.on("load", function(S, j) {
                  L.emit("load", S, j, w);
                }));
              });
            }, B.invalidateCache = function() {
              this.loaders.forEach(function(L) {
                L.cache = {};
              });
            }, B.addExtension = function(L, w) {
              return w.__name = L, this.extensions[L] = w, this.extensionsList.push(w), this;
            }, B.removeExtension = function(L) {
              var w = this.getExtension(L);
              w && (this.extensionsList = g.without(this.extensionsList, w), delete this.extensions[L]);
            }, B.getExtension = function(L) {
              return this.extensions[L];
            }, B.hasExtension = function(L) {
              return !!this.extensions[L];
            }, B.addGlobal = function(L, w) {
              return this.globals[L] = w, this;
            }, B.getGlobal = function(L) {
              if (typeof this.globals[L] > "u")
                throw new Error("global not found: " + L);
              return this.globals[L];
            }, B.addFilter = function(L, w, S) {
              var j = w;
              return S && this.asyncFilters.push(L), this.filters[L] = j, this;
            }, B.getFilter = function(L) {
              if (!this.filters[L])
                throw new Error("filter not found: " + L);
              return this.filters[L];
            }, B.addTest = function(L, w) {
              return this.tests[L] = w, this;
            }, B.getTest = function(L) {
              if (!this.tests[L])
                throw new Error("test not found: " + L);
              return this.tests[L];
            }, B.resolveTemplate = function(L, w, S) {
              var j = L.isRelative && w ? L.isRelative(S) : !1;
              return j && L.resolve ? L.resolve(w, S) : S;
            }, B.getTemplate = function(L, w, S, j, D) {
              var $ = this, ne = this, z = null;
              if (L && L.raw && (L = L.raw), g.isFunction(S) && (D = S, S = null, w = w || !1), g.isFunction(w) && (D = w, w = !1), L instanceof A)
                z = L;
              else {
                if (typeof L != "string")
                  throw new Error("template names must be a string: " + L);
                for (var ue = 0; ue < this.loaders.length; ue++) {
                  var he = this.loaders[ue];
                  if (z = he.cache[this.resolveTemplate(he, S, L)], z)
                    break;
                }
              }
              if (z)
                if (w && z.compile(), D) {
                  D(null, z);
                  return;
                } else
                  return z;
              var X, Z = function(G, W) {
                if (!W && !G && !j && (G = new Error("template not found: " + L)), G)
                  if (D) {
                    D(G);
                    return;
                  } else
                    throw G;
                var se;
                W ? (se = new A(W.src, $, W.path, w), W.noCache || (W.loader.cache[L] = se)) : se = new A(h, $, "", w), D ? D(null, se) : X = se;
              };
              return g.asyncIter(this.loaders, function(q, G, W, se) {
                function ye(fe, ke) {
                  fe ? se(fe) : ke ? (ke.loader = q, se(null, ke)) : W();
                }
                L = ne.resolveTemplate(q, S, L), q.async ? q.getSource(L, ye) : ye(null, q.getSource(L));
              }, Z), X;
            }, B.express = function(L) {
              return v(this, L);
            }, B.render = function(L, w, S) {
              g.isFunction(w) && (S = w, w = null);
              var j = null;
              return this.getTemplate(L, function(D, $) {
                if (D && S)
                  f(S, D);
                else {
                  if (D)
                    throw D;
                  j = $.render(w, S);
                }
              }), j;
            }, B.renderString = function(L, w, S, j) {
              g.isFunction(S) && (j = S, S = {}), S = S || {};
              var D = new A(L, this, S.path);
              return D.render(w, j);
            }, B.waterfall = function(L, w, S) {
              return k(L, w, S);
            }, N;
          }(m), y = /* @__PURE__ */ function(R) {
            n(N, R);
            function N() {
              return R.apply(this, arguments) || this;
            }
            var B = N.prototype;
            return B.init = function(L, w, S) {
              var j = this;
              this.env = S || new _(), this.ctx = g.extend({}, L), this.blocks = {}, this.exported = [], g.keys(w).forEach(function(D) {
                j.addBlock(D, w[D]);
              });
            }, B.lookup = function(L) {
              return L in this.env.globals && !(L in this.ctx) ? this.env.globals[L] : this.ctx[L];
            }, B.setVariable = function(L, w) {
              this.ctx[L] = w;
            }, B.getVariables = function() {
              return this.ctx;
            }, B.addBlock = function(L, w) {
              return this.blocks[L] = this.blocks[L] || [], this.blocks[L].push(w), this;
            }, B.getBlock = function(L) {
              if (!this.blocks[L])
                throw new Error('unknown block "' + L + '"');
              return this.blocks[L][0];
            }, B.getSuper = function(L, w, S, j, D, $) {
              var ne = g.indexOf(this.blocks[w] || [], S), z = this.blocks[w][ne + 1], ue = this;
              if (ne === -1 || !z)
                throw new Error('no super block available for "' + w + '"');
              z(L, ue, j, D, $);
            }, B.addExport = function(L) {
              this.exported.push(L);
            }, B.getExported = function() {
              var L = this, w = {};
              return this.exported.forEach(function(S) {
                w[S] = L.ctx[S];
              }), w;
            }, N;
          }(b), A = /* @__PURE__ */ function(R) {
            n(N, R);
            function N() {
              return R.apply(this, arguments) || this;
            }
            var B = N.prototype;
            return B.init = function(L, w, S, j) {
              if (this.env = w || new _(), g.isObject(L))
                switch (L.type) {
                  case "code":
                    this.tmplProps = L.obj;
                    break;
                  case "string":
                    this.tmplStr = L.obj;
                    break;
                  default:
                    throw new Error("Unexpected template object type " + L.type + "; expected 'code', or 'string'");
                }
              else if (g.isString(L))
                this.tmplStr = L;
              else
                throw new Error("src must be a string or an object describing the source");
              if (this.path = S, j)
                try {
                  this._compile();
                } catch (D) {
                  throw g._prettifyError(this.path, this.env.opts.dev, D);
                }
              else
                this.compiled = !1;
            }, B.render = function(L, w, S) {
              var j = this;
              typeof L == "function" ? (S = L, L = {}) : typeof w == "function" && (S = w, w = null);
              var D = !w;
              try {
                this.compile();
              } catch (X) {
                var $ = g._prettifyError(this.path, this.env.opts.dev, X);
                if (S)
                  return f(S, $);
                throw $;
              }
              var ne = new y(L || {}, this.blocks, this.env), z = w ? w.push(!0) : new c();
              z.topLevel = !0;
              var ue = null, he = !1;
              return this.rootRenderFunc(this.env, ne, z, E, function(X, Z) {
                if (!(he && S && typeof Z < "u"))
                  if (X && (X = g._prettifyError(j.path, j.env.opts.dev, X), he = !0), S)
                    D ? f(S, X, Z) : S(X, Z);
                  else {
                    if (X)
                      throw X;
                    ue = Z;
                  }
              }), ue;
            }, B.getExported = function(L, w, S) {
              typeof L == "function" && (S = L, L = {}), typeof w == "function" && (S = w, w = null);
              try {
                this.compile();
              } catch ($) {
                if (S)
                  return S($);
                throw $;
              }
              var j = w ? w.push() : new c();
              j.topLevel = !0;
              var D = new y(L || {}, this.blocks, this.env);
              this.rootRenderFunc(this.env, D, j, E, function($) {
                $ ? S($, null) : S(null, D.getExported());
              });
            }, B.compile = function() {
              this.compiled || this._compile();
            }, B._compile = function() {
              var L;
              if (this.tmplProps)
                L = this.tmplProps;
              else {
                var w = x.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), S = new Function(w);
                L = S();
              }
              this.blocks = this._getBlocks(L), this.rootRenderFunc = L.root, this.compiled = !0;
            }, B._getBlocks = function(L) {
              var w = {};
              return g.keys(L).forEach(function(S) {
                S.slice(0, 2) === "b_" && (w[S.slice(2)] = L[S]);
              }), w;
            }, N;
          }(b);
          t.exports = {
            Environment: _,
            Template: A
          };
        },
        /* 8 */
        /***/
        function(t, i, l) {
          function n(M, I) {
            M.prototype = Object.create(I.prototype), M.prototype.constructor = M, p(M, I);
          }
          function p(M, I) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(C, r) {
              return C.__proto__ = r, C;
            }, p(M, I);
          }
          var d = l(9), k = l(3), g = l(1).Obj, x = l(0), P = /* @__PURE__ */ function(M) {
            n(I, M);
            function I() {
              return M.apply(this, arguments) || this;
            }
            var T = I.prototype;
            return T.init = function(r) {
              this.tokens = r, this.peeked = null, this.breakOnBlocks = null, this.dropLeadingWhitespace = !1, this.extensions = [];
            }, T.nextToken = function(r) {
              var a;
              if (this.peeked)
                if (!r && this.peeked.type === d.TOKEN_WHITESPACE)
                  this.peeked = null;
                else
                  return a = this.peeked, this.peeked = null, a;
              if (a = this.tokens.nextToken(), !r)
                for (; a && a.type === d.TOKEN_WHITESPACE; )
                  a = this.tokens.nextToken();
              return a;
            }, T.peekToken = function() {
              return this.peeked = this.peeked || this.nextToken(), this.peeked;
            }, T.pushToken = function(r) {
              if (this.peeked)
                throw new Error("pushToken: can only push one token on between reads");
              this.peeked = r;
            }, T.error = function(r, a, u) {
              if (a === void 0 || u === void 0) {
                var b = this.peekToken() || {};
                a = b.lineno, u = b.colno;
              }
              return a !== void 0 && (a += 1), u !== void 0 && (u += 1), new x.TemplateError(r, a, u);
            }, T.fail = function(r, a, u) {
              throw this.error(r, a, u);
            }, T.skip = function(r) {
              var a = this.nextToken();
              return !a || a.type !== r ? (this.pushToken(a), !1) : !0;
            }, T.expect = function(r) {
              var a = this.nextToken();
              return a.type !== r && this.fail("expected " + r + ", got " + a.type, a.lineno, a.colno), a;
            }, T.skipValue = function(r, a) {
              var u = this.nextToken();
              return !u || u.type !== r || u.value !== a ? (this.pushToken(u), !1) : !0;
            }, T.skipSymbol = function(r) {
              return this.skipValue(d.TOKEN_SYMBOL, r);
            }, T.advanceAfterBlockEnd = function(r) {
              var a;
              return r || (a = this.peekToken(), a || this.fail("unexpected end of file"), a.type !== d.TOKEN_SYMBOL && this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"), r = this.nextToken().value), a = this.nextToken(), a && a.type === d.TOKEN_BLOCK_END ? a.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0) : this.fail("expected block end in " + r + " statement"), a;
            }, T.advanceAfterVariableEnd = function() {
              var r = this.nextToken();
              r && r.type === d.TOKEN_VARIABLE_END ? this.dropLeadingWhitespace = r.value.charAt(r.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-" : (this.pushToken(r), this.fail("expected variable end"));
            }, T.parseFor = function() {
              var r = this.peekToken(), a, u;
              this.skipSymbol("for") ? (a = new k.For(r.lineno, r.colno), u = "endfor") : this.skipSymbol("asyncEach") ? (a = new k.AsyncEach(r.lineno, r.colno), u = "endeach") : this.skipSymbol("asyncAll") ? (a = new k.AsyncAll(r.lineno, r.colno), u = "endall") : this.fail("parseFor: expected for{Async}", r.lineno, r.colno), a.name = this.parsePrimary(), a.name instanceof k.Symbol || this.fail("parseFor: variable name expected for loop");
              var b = this.peekToken().type;
              if (b === d.TOKEN_COMMA) {
                var m = a.name;
                for (a.name = new k.Array(m.lineno, m.colno), a.name.addChild(m); this.skip(d.TOKEN_COMMA); ) {
                  var E = this.parsePrimary();
                  a.name.addChild(E);
                }
              }
              return this.skipSymbol("in") || this.fail('parseFor: expected "in" keyword for loop', r.lineno, r.colno), a.arr = this.parseExpression(), this.advanceAfterBlockEnd(r.value), a.body = this.parseUntilBlocks(u, "else"), this.skipSymbol("else") && (this.advanceAfterBlockEnd("else"), a.else_ = this.parseUntilBlocks(u)), this.advanceAfterBlockEnd(), a;
            }, T.parseMacro = function() {
              var r = this.peekToken();
              this.skipSymbol("macro") || this.fail("expected macro");
              var a = this.parsePrimary(!0), u = this.parseSignature(), b = new k.Macro(r.lineno, r.colno, a, u);
              return this.advanceAfterBlockEnd(r.value), b.body = this.parseUntilBlocks("endmacro"), this.advanceAfterBlockEnd(), b;
            }, T.parseCall = function() {
              var r = this.peekToken();
              this.skipSymbol("call") || this.fail("expected call");
              var a = this.parseSignature(!0) || new k.NodeList(), u = this.parsePrimary();
              this.advanceAfterBlockEnd(r.value);
              var b = this.parseUntilBlocks("endcall");
              this.advanceAfterBlockEnd();
              var m = new k.Symbol(r.lineno, r.colno, "caller"), E = new k.Caller(r.lineno, r.colno, m, a, b), o = u.args.children;
              o[o.length - 1] instanceof k.KeywordArgs || o.push(new k.KeywordArgs());
              var c = o[o.length - 1];
              return c.addChild(new k.Pair(r.lineno, r.colno, m, E)), new k.Output(r.lineno, r.colno, [u]);
            }, T.parseWithContext = function() {
              var r = this.peekToken(), a = null;
              return this.skipSymbol("with") ? a = !0 : this.skipSymbol("without") && (a = !1), a !== null && (this.skipSymbol("context") || this.fail("parseFrom: expected context after with/without", r.lineno, r.colno)), a;
            }, T.parseImport = function() {
              var r = this.peekToken();
              this.skipSymbol("import") || this.fail("parseImport: expected import", r.lineno, r.colno);
              var a = this.parseExpression();
              this.skipSymbol("as") || this.fail('parseImport: expected "as" keyword', r.lineno, r.colno);
              var u = this.parseExpression(), b = this.parseWithContext(), m = new k.Import(r.lineno, r.colno, a, u, b);
              return this.advanceAfterBlockEnd(r.value), m;
            }, T.parseFrom = function() {
              var r = this.peekToken();
              this.skipSymbol("from") || this.fail("parseFrom: expected from");
              var a = this.parseExpression();
              this.skipSymbol("import") || this.fail("parseFrom: expected import", r.lineno, r.colno);
              for (var u = new k.NodeList(), b; ; ) {
                var m = this.peekToken();
                if (m.type === d.TOKEN_BLOCK_END) {
                  u.children.length || this.fail("parseFrom: Expected at least one import name", r.lineno, r.colno), m.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0), this.nextToken();
                  break;
                }
                u.children.length > 0 && !this.skip(d.TOKEN_COMMA) && this.fail("parseFrom: expected comma", r.lineno, r.colno);
                var E = this.parsePrimary();
                if (E.value.charAt(0) === "_" && this.fail("parseFrom: names starting with an underscore cannot be imported", E.lineno, E.colno), this.skipSymbol("as")) {
                  var o = this.parsePrimary();
                  u.addChild(new k.Pair(E.lineno, E.colno, E, o));
                } else
                  u.addChild(E);
                b = this.parseWithContext();
              }
              return new k.FromImport(r.lineno, r.colno, a, u, b);
            }, T.parseBlock = function() {
              var r = this.peekToken();
              this.skipSymbol("block") || this.fail("parseBlock: expected block", r.lineno, r.colno);
              var a = new k.Block(r.lineno, r.colno);
              a.name = this.parsePrimary(), a.name instanceof k.Symbol || this.fail("parseBlock: variable name expected", r.lineno, r.colno), this.advanceAfterBlockEnd(r.value), a.body = this.parseUntilBlocks("endblock"), this.skipSymbol("endblock"), this.skipSymbol(a.name.value);
              var u = this.peekToken();
              return u || this.fail("parseBlock: expected endblock, got end of file"), this.advanceAfterBlockEnd(u.value), a;
            }, T.parseExtends = function() {
              var r = "extends", a = this.peekToken();
              this.skipSymbol(r) || this.fail("parseTemplateRef: expected " + r);
              var u = new k.Extends(a.lineno, a.colno);
              return u.template = this.parseExpression(), this.advanceAfterBlockEnd(a.value), u;
            }, T.parseInclude = function() {
              var r = "include", a = this.peekToken();
              this.skipSymbol(r) || this.fail("parseInclude: expected " + r);
              var u = new k.Include(a.lineno, a.colno);
              return u.template = this.parseExpression(), this.skipSymbol("ignore") && this.skipSymbol("missing") && (u.ignoreMissing = !0), this.advanceAfterBlockEnd(a.value), u;
            }, T.parseIf = function() {
              var r = this.peekToken(), a;
              this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif") ? a = new k.If(r.lineno, r.colno) : this.skipSymbol("ifAsync") ? a = new k.IfAsync(r.lineno, r.colno) : this.fail("parseIf: expected if, elif, or elseif", r.lineno, r.colno), a.cond = this.parseExpression(), this.advanceAfterBlockEnd(r.value), a.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
              var u = this.peekToken();
              switch (u && u.value) {
                case "elseif":
                case "elif":
                  a.else_ = this.parseIf();
                  break;
                case "else":
                  this.advanceAfterBlockEnd(), a.else_ = this.parseUntilBlocks("endif"), this.advanceAfterBlockEnd();
                  break;
                case "endif":
                  a.else_ = null, this.advanceAfterBlockEnd();
                  break;
                default:
                  this.fail("parseIf: expected elif, else, or endif, got end of file");
              }
              return a;
            }, T.parseSet = function() {
              var r = this.peekToken();
              this.skipSymbol("set") || this.fail("parseSet: expected set", r.lineno, r.colno);
              for (var a = new k.Set(r.lineno, r.colno, []), u; (u = this.parsePrimary()) && (a.targets.push(u), !!this.skip(d.TOKEN_COMMA)); )
                ;
              return this.skipValue(d.TOKEN_OPERATOR, "=") ? (a.value = this.parseExpression(), this.advanceAfterBlockEnd(r.value)) : this.skip(d.TOKEN_BLOCK_END) ? (a.body = new k.Capture(r.lineno, r.colno, this.parseUntilBlocks("endset")), a.value = null, this.advanceAfterBlockEnd()) : this.fail("parseSet: expected = or block end in set tag", r.lineno, r.colno), a;
            }, T.parseSwitch = function() {
              var r = "switch", a = "endswitch", u = "case", b = "default", m = this.peekToken();
              !this.skipSymbol(r) && !this.skipSymbol(u) && !this.skipSymbol(b) && this.fail('parseSwitch: expected "switch," "case" or "default"', m.lineno, m.colno);
              var E = this.parseExpression();
              this.advanceAfterBlockEnd(r), this.parseUntilBlocks(u, b, a);
              var o = this.peekToken(), c = [], v;
              do {
                this.skipSymbol(u);
                var f = this.parseExpression();
                this.advanceAfterBlockEnd(r);
                var h = this.parseUntilBlocks(u, b, a);
                c.push(new k.Case(o.line, o.col, f, h)), o = this.peekToken();
              } while (o && o.value === u);
              switch (o.value) {
                case b:
                  this.advanceAfterBlockEnd(), v = this.parseUntilBlocks(a), this.advanceAfterBlockEnd();
                  break;
                case a:
                  this.advanceAfterBlockEnd();
                  break;
                default:
                  this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.');
              }
              return new k.Switch(m.lineno, m.colno, E, c, v);
            }, T.parseStatement = function() {
              var r = this.peekToken(), a;
              if (r.type !== d.TOKEN_SYMBOL && this.fail("tag name expected", r.lineno, r.colno), this.breakOnBlocks && x.indexOf(this.breakOnBlocks, r.value) !== -1)
                return null;
              switch (r.value) {
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
                    for (var u = 0; u < this.extensions.length; u++) {
                      var b = this.extensions[u];
                      if (x.indexOf(b.tags || [], r.value) !== -1)
                        return b.parse(this, k, d);
                    }
                  this.fail("unknown block tag: " + r.value, r.lineno, r.colno);
              }
              return a;
            }, T.parseRaw = function(r) {
              r = r || "raw";
              for (var a = "end" + r, u = new RegExp("([\\s\\S]*?){%\\s*(" + r + "|" + a + ")\\s*(?=%})%}"), b = 1, m = "", E = null, o = this.advanceAfterBlockEnd(); (E = this.tokens._extractRegex(u)) && b > 0; ) {
                var c = E[0], v = E[1], f = E[2];
                f === r ? b += 1 : f === a && (b -= 1), b === 0 ? (m += v, this.tokens.backN(c.length - v.length)) : m += c;
              }
              return new k.Output(o.lineno, o.colno, [new k.TemplateData(o.lineno, o.colno, m)]);
            }, T.parsePostfix = function(r) {
              for (var a, u = this.peekToken(); u; ) {
                if (u.type === d.TOKEN_LEFT_PAREN)
                  r = new k.FunCall(u.lineno, u.colno, r, this.parseSignature());
                else if (u.type === d.TOKEN_LEFT_BRACKET)
                  a = this.parseAggregate(), a.children.length > 1 && this.fail("invalid index"), r = new k.LookupVal(u.lineno, u.colno, r, a.children[0]);
                else if (u.type === d.TOKEN_OPERATOR && u.value === ".") {
                  this.nextToken();
                  var b = this.nextToken();
                  b.type !== d.TOKEN_SYMBOL && this.fail("expected name as lookup value, got " + b.value, b.lineno, b.colno), a = new k.Literal(b.lineno, b.colno, b.value), r = new k.LookupVal(u.lineno, u.colno, r, a);
                } else
                  break;
                u = this.peekToken();
              }
              return r;
            }, T.parseExpression = function() {
              var r = this.parseInlineIf();
              return r;
            }, T.parseInlineIf = function() {
              var r = this.parseOr();
              if (this.skipSymbol("if")) {
                var a = this.parseOr(), u = r;
                r = new k.InlineIf(r.lineno, r.colno), r.body = u, r.cond = a, this.skipSymbol("else") ? r.else_ = this.parseOr() : r.else_ = null;
              }
              return r;
            }, T.parseOr = function() {
              for (var r = this.parseAnd(); this.skipSymbol("or"); ) {
                var a = this.parseAnd();
                r = new k.Or(r.lineno, r.colno, r, a);
              }
              return r;
            }, T.parseAnd = function() {
              for (var r = this.parseNot(); this.skipSymbol("and"); ) {
                var a = this.parseNot();
                r = new k.And(r.lineno, r.colno, r, a);
              }
              return r;
            }, T.parseNot = function() {
              var r = this.peekToken();
              return this.skipSymbol("not") ? new k.Not(r.lineno, r.colno, this.parseNot()) : this.parseIn();
            }, T.parseIn = function() {
              for (var r = this.parseIs(); ; ) {
                var a = this.nextToken();
                if (!a)
                  break;
                var u = a.type === d.TOKEN_SYMBOL && a.value === "not";
                if (u || this.pushToken(a), this.skipSymbol("in")) {
                  var b = this.parseIs();
                  r = new k.In(r.lineno, r.colno, r, b), u && (r = new k.Not(r.lineno, r.colno, r));
                } else {
                  u && this.pushToken(a);
                  break;
                }
              }
              return r;
            }, T.parseIs = function() {
              var r = this.parseCompare();
              if (this.skipSymbol("is")) {
                var a = this.skipSymbol("not"), u = this.parseCompare();
                r = new k.Is(r.lineno, r.colno, r, u), a && (r = new k.Not(r.lineno, r.colno, r));
              }
              return r;
            }, T.parseCompare = function() {
              for (var r = ["==", "===", "!=", "!==", "<", ">", "<=", ">="], a = this.parseConcat(), u = []; ; ) {
                var b = this.nextToken();
                if (b)
                  if (r.indexOf(b.value) !== -1)
                    u.push(new k.CompareOperand(b.lineno, b.colno, this.parseConcat(), b.value));
                  else {
                    this.pushToken(b);
                    break;
                  }
                else
                  break;
              }
              return u.length ? new k.Compare(u[0].lineno, u[0].colno, a, u) : a;
            }, T.parseConcat = function() {
              for (var r = this.parseAdd(); this.skipValue(d.TOKEN_TILDE, "~"); ) {
                var a = this.parseAdd();
                r = new k.Concat(r.lineno, r.colno, r, a);
              }
              return r;
            }, T.parseAdd = function() {
              for (var r = this.parseSub(); this.skipValue(d.TOKEN_OPERATOR, "+"); ) {
                var a = this.parseSub();
                r = new k.Add(r.lineno, r.colno, r, a);
              }
              return r;
            }, T.parseSub = function() {
              for (var r = this.parseMul(); this.skipValue(d.TOKEN_OPERATOR, "-"); ) {
                var a = this.parseMul();
                r = new k.Sub(r.lineno, r.colno, r, a);
              }
              return r;
            }, T.parseMul = function() {
              for (var r = this.parseDiv(); this.skipValue(d.TOKEN_OPERATOR, "*"); ) {
                var a = this.parseDiv();
                r = new k.Mul(r.lineno, r.colno, r, a);
              }
              return r;
            }, T.parseDiv = function() {
              for (var r = this.parseFloorDiv(); this.skipValue(d.TOKEN_OPERATOR, "/"); ) {
                var a = this.parseFloorDiv();
                r = new k.Div(r.lineno, r.colno, r, a);
              }
              return r;
            }, T.parseFloorDiv = function() {
              for (var r = this.parseMod(); this.skipValue(d.TOKEN_OPERATOR, "//"); ) {
                var a = this.parseMod();
                r = new k.FloorDiv(r.lineno, r.colno, r, a);
              }
              return r;
            }, T.parseMod = function() {
              for (var r = this.parsePow(); this.skipValue(d.TOKEN_OPERATOR, "%"); ) {
                var a = this.parsePow();
                r = new k.Mod(r.lineno, r.colno, r, a);
              }
              return r;
            }, T.parsePow = function() {
              for (var r = this.parseUnary(); this.skipValue(d.TOKEN_OPERATOR, "**"); ) {
                var a = this.parseUnary();
                r = new k.Pow(r.lineno, r.colno, r, a);
              }
              return r;
            }, T.parseUnary = function(r) {
              var a = this.peekToken(), u;
              return this.skipValue(d.TOKEN_OPERATOR, "-") ? u = new k.Neg(a.lineno, a.colno, this.parseUnary(!0)) : this.skipValue(d.TOKEN_OPERATOR, "+") ? u = new k.Pos(a.lineno, a.colno, this.parseUnary(!0)) : u = this.parsePrimary(), r || (u = this.parseFilter(u)), u;
            }, T.parsePrimary = function(r) {
              var a = this.nextToken(), u, b = null;
              if (a ? a.type === d.TOKEN_STRING ? u = a.value : a.type === d.TOKEN_INT ? u = parseInt(a.value, 10) : a.type === d.TOKEN_FLOAT ? u = parseFloat(a.value) : a.type === d.TOKEN_BOOLEAN ? a.value === "true" ? u = !0 : a.value === "false" ? u = !1 : this.fail("invalid boolean: " + a.value, a.lineno, a.colno) : a.type === d.TOKEN_NONE ? u = null : a.type === d.TOKEN_REGEX && (u = new RegExp(a.value.body, a.value.flags)) : this.fail("expected expression, got end of file"), u !== void 0 ? b = new k.Literal(a.lineno, a.colno, u) : a.type === d.TOKEN_SYMBOL ? b = new k.Symbol(a.lineno, a.colno, a.value) : (this.pushToken(a), b = this.parseAggregate()), r || (b = this.parsePostfix(b)), b)
                return b;
              throw this.error("unexpected token: " + a.value, a.lineno, a.colno);
            }, T.parseFilterName = function() {
              for (var r = this.expect(d.TOKEN_SYMBOL), a = r.value; this.skipValue(d.TOKEN_OPERATOR, "."); )
                a += "." + this.expect(d.TOKEN_SYMBOL).value;
              return new k.Symbol(r.lineno, r.colno, a);
            }, T.parseFilterArgs = function(r) {
              if (this.peekToken().type === d.TOKEN_LEFT_PAREN) {
                var a = this.parsePostfix(r);
                return a.args.children;
              }
              return [];
            }, T.parseFilter = function(r) {
              for (; this.skip(d.TOKEN_PIPE); ) {
                var a = this.parseFilterName();
                r = new k.Filter(a.lineno, a.colno, a, new k.NodeList(a.lineno, a.colno, [r].concat(this.parseFilterArgs(r))));
              }
              return r;
            }, T.parseFilterStatement = function() {
              var r = this.peekToken();
              this.skipSymbol("filter") || this.fail("parseFilterStatement: expected filter");
              var a = this.parseFilterName(), u = this.parseFilterArgs(a);
              this.advanceAfterBlockEnd(r.value);
              var b = new k.Capture(a.lineno, a.colno, this.parseUntilBlocks("endfilter"));
              this.advanceAfterBlockEnd();
              var m = new k.Filter(a.lineno, a.colno, a, new k.NodeList(a.lineno, a.colno, [b].concat(u)));
              return new k.Output(a.lineno, a.colno, [m]);
            }, T.parseAggregate = function() {
              var r = this.nextToken(), a;
              switch (r.type) {
                case d.TOKEN_LEFT_PAREN:
                  a = new k.Group(r.lineno, r.colno);
                  break;
                case d.TOKEN_LEFT_BRACKET:
                  a = new k.Array(r.lineno, r.colno);
                  break;
                case d.TOKEN_LEFT_CURLY:
                  a = new k.Dict(r.lineno, r.colno);
                  break;
                default:
                  return null;
              }
              for (; ; ) {
                var u = this.peekToken().type;
                if (u === d.TOKEN_RIGHT_PAREN || u === d.TOKEN_RIGHT_BRACKET || u === d.TOKEN_RIGHT_CURLY) {
                  this.nextToken();
                  break;
                }
                if (a.children.length > 0 && (this.skip(d.TOKEN_COMMA) || this.fail("parseAggregate: expected comma after expression", r.lineno, r.colno)), a instanceof k.Dict) {
                  var b = this.parsePrimary();
                  this.skip(d.TOKEN_COLON) || this.fail("parseAggregate: expected colon after dict key", r.lineno, r.colno);
                  var m = this.parseExpression();
                  a.addChild(new k.Pair(b.lineno, b.colno, b, m));
                } else {
                  var E = this.parseExpression();
                  a.addChild(E);
                }
              }
              return a;
            }, T.parseSignature = function(r, a) {
              var u = this.peekToken();
              if (!a && u.type !== d.TOKEN_LEFT_PAREN) {
                if (r)
                  return null;
                this.fail("expected arguments", u.lineno, u.colno);
              }
              u.type === d.TOKEN_LEFT_PAREN && (u = this.nextToken());
              for (var b = new k.NodeList(u.lineno, u.colno), m = new k.KeywordArgs(u.lineno, u.colno), E = !1; ; ) {
                if (u = this.peekToken(), !a && u.type === d.TOKEN_RIGHT_PAREN) {
                  this.nextToken();
                  break;
                } else if (a && u.type === d.TOKEN_BLOCK_END)
                  break;
                if (E && !this.skip(d.TOKEN_COMMA))
                  this.fail("parseSignature: expected comma after expression", u.lineno, u.colno);
                else {
                  var o = this.parseExpression();
                  this.skipValue(d.TOKEN_OPERATOR, "=") ? m.addChild(new k.Pair(o.lineno, o.colno, o, this.parseExpression())) : b.addChild(o);
                }
                E = !0;
              }
              return m.children.length && b.addChild(m), b;
            }, T.parseUntilBlocks = function() {
              for (var r = this.breakOnBlocks, a = arguments.length, u = new Array(a), b = 0; b < a; b++)
                u[b] = arguments[b];
              this.breakOnBlocks = u;
              var m = this.parse();
              return this.breakOnBlocks = r, m;
            }, T.parseNodes = function() {
              for (var r, a = []; r = this.nextToken(); )
                if (r.type === d.TOKEN_DATA) {
                  var u = r.value, b = this.peekToken(), m = b && b.value;
                  this.dropLeadingWhitespace && (u = u.replace(/^\s*/, ""), this.dropLeadingWhitespace = !1), b && (b.type === d.TOKEN_BLOCK_START && m.charAt(m.length - 1) === "-" || b.type === d.TOKEN_VARIABLE_START && m.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || b.type === d.TOKEN_COMMENT && m.charAt(this.tokens.tags.COMMENT_START.length) === "-") && (u = u.replace(/\s*$/, "")), a.push(new k.Output(r.lineno, r.colno, [new k.TemplateData(r.lineno, r.colno, u)]));
                } else if (r.type === d.TOKEN_BLOCK_START) {
                  this.dropLeadingWhitespace = !1;
                  var E = this.parseStatement();
                  if (!E)
                    break;
                  a.push(E);
                } else if (r.type === d.TOKEN_VARIABLE_START) {
                  var o = this.parseExpression();
                  this.dropLeadingWhitespace = !1, this.advanceAfterVariableEnd(), a.push(new k.Output(r.lineno, r.colno, [o]));
                } else
                  r.type === d.TOKEN_COMMENT ? this.dropLeadingWhitespace = r.value.charAt(r.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-" : this.fail("Unexpected token at top-level: " + r.type, r.lineno, r.colno);
              return a;
            }, T.parse = function() {
              return new k.NodeList(0, 0, this.parseNodes());
            }, T.parseAsRoot = function() {
              return new k.Root(0, 0, this.parseNodes());
            }, I;
          }(g);
          t.exports = {
            parse: function(I, T, C) {
              var r = new P(d.lex(I, C));
              return T !== void 0 && (r.extensions = T), r.parseAsRoot();
            },
            Parser: P
          };
        },
        /* 9 */
        /***/
        function(t, i, l) {
          var n = l(0), p = ` 
	\r `, d = "()[]{}%*-+~/#,:|.<>=!", k = "0123456789", g = "{%", x = "%}", P = "{{", M = "}}", I = "{#", T = "#}", C = "string", r = "whitespace", a = "data", u = "block-start", b = "block-end", m = "variable-start", E = "variable-end", o = "comment", c = "left-paren", v = "right-paren", f = "left-bracket", h = "right-bracket", _ = "left-curly", y = "right-curly", A = "operator", R = "comma", N = "colon", B = "tilde", K = "pipe", L = "int", w = "float", S = "boolean", j = "none", D = "symbol", $ = "special", ne = "regex";
          function z(he, X, Z, q) {
            return {
              type: he,
              value: X,
              lineno: Z,
              colno: q
            };
          }
          var ue = /* @__PURE__ */ function() {
            function he(Z, q) {
              this.str = Z, this.index = 0, this.len = Z.length, this.lineno = 0, this.colno = 0, this.in_code = !1, q = q || {};
              var G = q.tags || {};
              this.tags = {
                BLOCK_START: G.blockStart || g,
                BLOCK_END: G.blockEnd || x,
                VARIABLE_START: G.variableStart || P,
                VARIABLE_END: G.variableEnd || M,
                COMMENT_START: G.commentStart || I,
                COMMENT_END: G.commentEnd || T
              }, this.trimBlocks = !!q.trimBlocks, this.lstripBlocks = !!q.lstripBlocks;
            }
            var X = he.prototype;
            return X.nextToken = function() {
              var q = this.lineno, G = this.colno, W;
              if (this.in_code) {
                var se = this.current();
                if (this.isFinished())
                  return null;
                if (se === '"' || se === "'")
                  return z(C, this._parseString(se), q, G);
                if (W = this._extract(p))
                  return z(r, W, q, G);
                if ((W = this._extractString(this.tags.BLOCK_END)) || (W = this._extractString("-" + this.tags.BLOCK_END)))
                  return this.in_code = !1, this.trimBlocks && (se = this.current(), se === `
` ? this.forward() : se === "\r" && (this.forward(), se = this.current(), se === `
` ? this.forward() : this.back())), z(b, W, q, G);
                if ((W = this._extractString(this.tags.VARIABLE_END)) || (W = this._extractString("-" + this.tags.VARIABLE_END)))
                  return this.in_code = !1, z(E, W, q, G);
                if (se === "r" && this.str.charAt(this.index + 1) === "/") {
                  this.forwardN(2);
                  for (var ye = ""; !this.isFinished(); )
                    if (this.current() === "/" && this.previous() !== "\\") {
                      this.forward();
                      break;
                    } else
                      ye += this.current(), this.forward();
                  for (var fe = ["g", "i", "m", "y"], ke = ""; !this.isFinished(); ) {
                    var O = fe.indexOf(this.current()) !== -1;
                    if (O)
                      ke += this.current(), this.forward();
                    else
                      break;
                  }
                  return z(ne, {
                    body: ye,
                    flags: ke
                  }, q, G);
                } else if (d.indexOf(se) !== -1) {
                  this.forward();
                  var F = ["==", "===", "!=", "!==", "<=", ">=", "//", "**"], V = se + this.current(), U;
                  switch (n.indexOf(F, V) !== -1 && (this.forward(), se = V, n.indexOf(F, V + this.current()) !== -1 && (se = V + this.current(), this.forward())), se) {
                    case "(":
                      U = c;
                      break;
                    case ")":
                      U = v;
                      break;
                    case "[":
                      U = f;
                      break;
                    case "]":
                      U = h;
                      break;
                    case "{":
                      U = _;
                      break;
                    case "}":
                      U = y;
                      break;
                    case ",":
                      U = R;
                      break;
                    case ":":
                      U = N;
                      break;
                    case "~":
                      U = B;
                      break;
                    case "|":
                      U = K;
                      break;
                    default:
                      U = A;
                  }
                  return z(U, se, q, G);
                } else if (W = this._extractUntil(p + d), W.match(/^[-+]?[0-9]+$/))
                  if (this.current() === ".") {
                    this.forward();
                    var Y = this._extract(k);
                    return z(w, W + "." + Y, q, G);
                  } else
                    return z(L, W, q, G);
                else {
                  if (W.match(/^(true|false)$/))
                    return z(S, W, q, G);
                  if (W === "none")
                    return z(j, W, q, G);
                  if (W === "null")
                    return z(j, W, q, G);
                  if (W)
                    return z(D, W, q, G);
                  throw new Error("Unexpected value while parsing: " + W);
                }
              } else {
                var J = this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);
                if (this.isFinished())
                  return null;
                if ((W = this._extractString(this.tags.BLOCK_START + "-")) || (W = this._extractString(this.tags.BLOCK_START)))
                  return this.in_code = !0, z(u, W, q, G);
                if ((W = this._extractString(this.tags.VARIABLE_START + "-")) || (W = this._extractString(this.tags.VARIABLE_START)))
                  return this.in_code = !0, z(m, W, q, G);
                W = "";
                var ae, ee = !1;
                for (this._matches(this.tags.COMMENT_START) && (ee = !0, W = this._extractString(this.tags.COMMENT_START)); (ae = this._extractUntil(J)) !== null; )
                  if (W += ae, (this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !ee) {
                    if (this.lstripBlocks && this._matches(this.tags.BLOCK_START) && this.colno > 0 && this.colno <= W.length) {
                      var le = W.slice(-this.colno);
                      if (/^\s+$/.test(le) && (W = W.slice(0, -this.colno), !W.length))
                        return this.nextToken();
                    }
                    break;
                  } else if (this._matches(this.tags.COMMENT_END)) {
                    if (!ee)
                      throw new Error("unexpected end of comment");
                    W += this._extractString(this.tags.COMMENT_END);
                    break;
                  } else
                    W += this.current(), this.forward();
                if (ae === null && ee)
                  throw new Error("expected end of comment, got end of file");
                return z(ee ? o : a, W, q, G);
              }
            }, X._parseString = function(q) {
              this.forward();
              for (var G = ""; !this.isFinished() && this.current() !== q; ) {
                var W = this.current();
                if (W === "\\") {
                  switch (this.forward(), this.current()) {
                    case "n":
                      G += `
`;
                      break;
                    case "t":
                      G += "	";
                      break;
                    case "r":
                      G += "\r";
                      break;
                    default:
                      G += this.current();
                  }
                  this.forward();
                } else
                  G += W, this.forward();
              }
              return this.forward(), G;
            }, X._matches = function(q) {
              if (this.index + q.length > this.len)
                return null;
              var G = this.str.slice(this.index, this.index + q.length);
              return G === q;
            }, X._extractString = function(q) {
              return this._matches(q) ? (this.forwardN(q.length), q) : null;
            }, X._extractUntil = function(q) {
              return this._extractMatching(!0, q || "");
            }, X._extract = function(q) {
              return this._extractMatching(!1, q);
            }, X._extractMatching = function(q, G) {
              if (this.isFinished())
                return null;
              var W = G.indexOf(this.current());
              if (q && W === -1 || !q && W !== -1) {
                var se = this.current();
                this.forward();
                for (var ye = G.indexOf(this.current()); (q && ye === -1 || !q && ye !== -1) && !this.isFinished(); )
                  se += this.current(), this.forward(), ye = G.indexOf(this.current());
                return se;
              }
              return "";
            }, X._extractRegex = function(q) {
              var G = this.currentStr().match(q);
              return G ? (this.forwardN(G[0].length), G) : null;
            }, X.isFinished = function() {
              return this.index >= this.len;
            }, X.forwardN = function(q) {
              for (var G = 0; G < q; G++)
                this.forward();
            }, X.forward = function() {
              this.index++, this.previous() === `
` ? (this.lineno++, this.colno = 0) : this.colno++;
            }, X.backN = function(q) {
              for (var G = 0; G < q; G++)
                this.back();
            }, X.back = function() {
              if (this.index--, this.current() === `
`) {
                this.lineno--;
                var q = this.src.lastIndexOf(`
`, this.index - 1);
                q === -1 ? this.colno = this.index : this.colno = this.index - q;
              } else
                this.colno--;
            }, X.current = function() {
              return this.isFinished() ? "" : this.str.charAt(this.index);
            }, X.currentStr = function() {
              return this.isFinished() ? "" : this.str.substr(this.index);
            }, X.previous = function() {
              return this.str.charAt(this.index - 1);
            }, he;
          }();
          t.exports = {
            lex: function(X, Z) {
              return new ue(X, Z);
            },
            TOKEN_STRING: C,
            TOKEN_WHITESPACE: r,
            TOKEN_DATA: a,
            TOKEN_BLOCK_START: u,
            TOKEN_BLOCK_END: b,
            TOKEN_VARIABLE_START: m,
            TOKEN_VARIABLE_END: E,
            TOKEN_COMMENT: o,
            TOKEN_LEFT_PAREN: c,
            TOKEN_RIGHT_PAREN: v,
            TOKEN_LEFT_BRACKET: f,
            TOKEN_RIGHT_BRACKET: h,
            TOKEN_LEFT_CURLY: _,
            TOKEN_RIGHT_CURLY: y,
            TOKEN_OPERATOR: A,
            TOKEN_COMMA: R,
            TOKEN_COLON: N,
            TOKEN_TILDE: B,
            TOKEN_PIPE: K,
            TOKEN_INT: L,
            TOKEN_FLOAT: w,
            TOKEN_BOOLEAN: S,
            TOKEN_NONE: j,
            TOKEN_SYMBOL: D,
            TOKEN_SPECIAL: $,
            TOKEN_REGEX: ne
          };
        },
        /* 10 */
        /***/
        function(t, i, l) {
          function n(P, M) {
            P.prototype = Object.create(M.prototype), P.prototype.constructor = P, p(P, M);
          }
          function p(P, M) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(T, C) {
              return T.__proto__ = C, T;
            }, p(P, M);
          }
          var d = l(6), k = l(19), g = k.PrecompiledLoader, x = /* @__PURE__ */ function(P) {
            n(M, P);
            function M(T, C) {
              var r;
              return r = P.call(this) || this, r.baseURL = T || ".", C = C || {}, r.useCache = !!C.useCache, r.async = !!C.async, r;
            }
            var I = M.prototype;
            return I.resolve = function(C, r) {
              throw new Error("relative templates not support in the browser yet");
            }, I.getSource = function(C, r) {
              var a = this, u = this.useCache, b;
              return this.fetch(this.baseURL + "/" + C, function(m, E) {
                if (m)
                  if (r)
                    r(m.content);
                  else if (m.status === 404)
                    b = null;
                  else
                    throw m.content;
                else
                  b = {
                    src: E,
                    path: C,
                    noCache: !u
                  }, a.emit("load", C, b), r && r(null, b);
              }), b;
            }, I.fetch = function(C, r) {
              if (typeof window > "u")
                throw new Error("WebLoader can only by used in a browser");
              var a = new XMLHttpRequest(), u = !0;
              a.onreadystatechange = function() {
                a.readyState === 4 && u && (u = !1, a.status === 0 || a.status === 200 ? r(null, a.responseText) : r({
                  status: a.status,
                  content: a.responseText
                }));
              }, C += (C.indexOf("?") === -1 ? "?" : "&") + "s=" + new Date().getTime(), a.open("GET", C, this.async), a.send();
            }, M;
          }(d);
          t.exports = {
            WebLoader: x,
            PrecompiledLoader: g
          };
        },
        /* 11 */
        /***/
        function(t, i, l) {
          var n = l(0), p = l(7), d = p.Environment, k = p.Template, g = l(6), x = l(10), P = l(23), M = l(5), I = l(8), T = l(9), C = l(2), r = l(3), a = l(25), u;
          function b(m, E) {
            E = E || {}, n.isObject(m) && (E = m, m = null);
            var o;
            return x.FileSystemLoader ? o = new x.FileSystemLoader(m, {
              watch: E.watch,
              noCache: E.noCache
            }) : x.WebLoader && (o = new x.WebLoader(m, {
              useCache: E.web && E.web.useCache,
              async: E.web && E.web.async
            })), u = new d(o, E), E && E.express && u.express(E.express), u;
          }
          t.exports = {
            Environment: d,
            Template: k,
            Loader: g,
            FileSystemLoader: x.FileSystemLoader,
            NodeResolveLoader: x.NodeResolveLoader,
            PrecompiledLoader: x.PrecompiledLoader,
            WebLoader: x.WebLoader,
            compiler: M,
            parser: I,
            lexer: T,
            runtime: C,
            lib: n,
            nodes: r,
            installJinjaCompat: a,
            configure: b,
            reset: function() {
              u = void 0;
            },
            compile: function(E, o, c, v) {
              return u || b(), new k(E, o, c, v);
            },
            render: function(E, o, c) {
              return u || b(), u.render(E, o, c);
            },
            renderString: function(E, o, c) {
              return u || b(), u.renderString(E, o, c);
            },
            precompile: P ? P.precompile : void 0,
            precompileString: P ? P.precompileString : void 0
          };
        },
        /* 12 */
        /***/
        function(t, i, l) {
          var n = l(13), p = [], d = [], k = n.makeRequestCallFromTimer(g);
          function g() {
            if (d.length)
              throw d.shift();
          }
          t.exports = x;
          function x(M) {
            var I;
            p.length ? I = p.pop() : I = new P(), I.task = M, n(I);
          }
          function P() {
            this.task = null;
          }
          P.prototype.call = function() {
            try {
              this.task.call();
            } catch (M) {
              x.onerror ? x.onerror(M) : (d.push(M), k());
            } finally {
              this.task = null, p[p.length] = this;
            }
          };
        },
        /* 13 */
        /***/
        function(t, i, l) {
          (function(n) {
            t.exports = p;
            function p(r) {
              d.length || k(), d[d.length] = r;
            }
            var d = [], k, g = 0, x = 1024;
            function P() {
              for (; g < d.length; ) {
                var r = g;
                if (g = g + 1, d[r].call(), g > x) {
                  for (var a = 0, u = d.length - g; a < u; a++)
                    d[a] = d[a + g];
                  d.length -= g, g = 0;
                }
              }
              d.length = 0, g = 0;
            }
            var M = typeof n < "u" ? n : self, I = M.MutationObserver || M.WebKitMutationObserver;
            typeof I == "function" ? k = T(P) : k = C(P), p.requestFlush = k;
            function T(r) {
              var a = 1, u = new I(r), b = document.createTextNode("");
              return u.observe(b, { characterData: !0 }), function() {
                a = -a, b.data = a;
              };
            }
            function C(r) {
              return function() {
                var u = setTimeout(m, 0), b = setInterval(m, 50);
                function m() {
                  clearTimeout(u), clearInterval(b), r();
                }
              };
            }
            p.makeRequestCallFromTimer = C;
          }).call(i, l(14));
        },
        /* 14 */
        /***/
        function(t, i) {
          var l;
          l = function() {
            return this;
          }();
          try {
            l = l || Function("return this")() || (0, eval)("this");
          } catch {
            typeof window == "object" && (l = window);
          }
          t.exports = l;
        },
        /* 15 */
        /***/
        function(t, i, l) {
          var n, p;
          (function(d) {
            var k = function() {
              var I = Array.prototype.slice.call(arguments);
              typeof I[0] == "function" && I[0].apply(null, I.splice(1));
            }, g = function(I) {
              typeof setImmediate == "function" ? setImmediate(I) : typeof process < "u" && process.nextTick ? process.nextTick(I) : setTimeout(I, 0);
            }, x = function(I) {
              var T = function(C) {
                var r = function() {
                  return I.length && I[C].apply(null, arguments), r.next();
                };
                return r.next = function() {
                  return C < I.length - 1 ? T(C + 1) : null;
                }, r;
              };
              return T(0);
            }, P = Array.isArray || function(I) {
              return Object.prototype.toString.call(I) === "[object Array]";
            }, M = function(I, T, C) {
              var r = C ? g : k;
              if (T = T || function() {
              }, !P(I)) {
                var a = new Error("First argument to waterfall must be an array of functions");
                return T(a);
              }
              if (!I.length)
                return T();
              var u = function(b) {
                return function(m) {
                  if (m)
                    T.apply(null, arguments), T = function() {
                    };
                  else {
                    var E = Array.prototype.slice.call(arguments, 1), o = b.next();
                    o ? E.push(u(o)) : E.push(T), r(function() {
                      b.apply(null, E);
                    });
                  }
                };
              };
              u(x(I))();
            };
            n = [], p = function() {
              return M;
            }.apply(i, n), p !== void 0 && (t.exports = p);
          })();
        },
        /* 16 */
        /***/
        function(t, i, l) {
          var n = typeof Reflect == "object" ? Reflect : null, p = n && typeof n.apply == "function" ? n.apply : function(h, _, y) {
            return Function.prototype.apply.call(h, _, y);
          }, d;
          n && typeof n.ownKeys == "function" ? d = n.ownKeys : Object.getOwnPropertySymbols ? d = function(h) {
            return Object.getOwnPropertyNames(h).concat(Object.getOwnPropertySymbols(h));
          } : d = function(h) {
            return Object.getOwnPropertyNames(h);
          };
          function k(f) {
            console && console.warn && console.warn(f);
          }
          var g = Number.isNaN || function(h) {
            return h !== h;
          };
          function x() {
            x.init.call(this);
          }
          t.exports = x, t.exports.once = o, x.EventEmitter = x, x.prototype._events = void 0, x.prototype._eventsCount = 0, x.prototype._maxListeners = void 0;
          var P = 10;
          function M(f) {
            if (typeof f != "function")
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof f);
          }
          Object.defineProperty(x, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
              return P;
            },
            set: function(f) {
              if (typeof f != "number" || f < 0 || g(f))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + f + ".");
              P = f;
            }
          }), x.init = function() {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, x.prototype.setMaxListeners = function(h) {
            if (typeof h != "number" || h < 0 || g(h))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + h + ".");
            return this._maxListeners = h, this;
          };
          function I(f) {
            return f._maxListeners === void 0 ? x.defaultMaxListeners : f._maxListeners;
          }
          x.prototype.getMaxListeners = function() {
            return I(this);
          }, x.prototype.emit = function(h) {
            for (var _ = [], y = 1; y < arguments.length; y++)
              _.push(arguments[y]);
            var A = h === "error", R = this._events;
            if (R !== void 0)
              A = A && R.error === void 0;
            else if (!A)
              return !1;
            if (A) {
              var N;
              if (_.length > 0 && (N = _[0]), N instanceof Error)
                throw N;
              var B = new Error("Unhandled error." + (N ? " (" + N.message + ")" : ""));
              throw B.context = N, B;
            }
            var K = R[h];
            if (K === void 0)
              return !1;
            if (typeof K == "function")
              p(K, this, _);
            else
              for (var L = K.length, w = b(K, L), y = 0; y < L; ++y)
                p(w[y], this, _);
            return !0;
          };
          function T(f, h, _, y) {
            var A, R, N;
            if (M(_), R = f._events, R === void 0 ? (R = f._events = /* @__PURE__ */ Object.create(null), f._eventsCount = 0) : (R.newListener !== void 0 && (f.emit(
              "newListener",
              h,
              _.listener ? _.listener : _
            ), R = f._events), N = R[h]), N === void 0)
              N = R[h] = _, ++f._eventsCount;
            else if (typeof N == "function" ? N = R[h] = y ? [_, N] : [N, _] : y ? N.unshift(_) : N.push(_), A = I(f), A > 0 && N.length > A && !N.warned) {
              N.warned = !0;
              var B = new Error("Possible EventEmitter memory leak detected. " + N.length + " " + String(h) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              B.name = "MaxListenersExceededWarning", B.emitter = f, B.type = h, B.count = N.length, k(B);
            }
            return f;
          }
          x.prototype.addListener = function(h, _) {
            return T(this, h, _, !1);
          }, x.prototype.on = x.prototype.addListener, x.prototype.prependListener = function(h, _) {
            return T(this, h, _, !0);
          };
          function C() {
            if (!this.fired)
              return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function r(f, h, _) {
            var y = { fired: !1, wrapFn: void 0, target: f, type: h, listener: _ }, A = C.bind(y);
            return A.listener = _, y.wrapFn = A, A;
          }
          x.prototype.once = function(h, _) {
            return M(_), this.on(h, r(this, h, _)), this;
          }, x.prototype.prependOnceListener = function(h, _) {
            return M(_), this.prependListener(h, r(this, h, _)), this;
          }, x.prototype.removeListener = function(h, _) {
            var y, A, R, N, B;
            if (M(_), A = this._events, A === void 0)
              return this;
            if (y = A[h], y === void 0)
              return this;
            if (y === _ || y.listener === _)
              --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete A[h], A.removeListener && this.emit("removeListener", h, y.listener || _));
            else if (typeof y != "function") {
              for (R = -1, N = y.length - 1; N >= 0; N--)
                if (y[N] === _ || y[N].listener === _) {
                  B = y[N].listener, R = N;
                  break;
                }
              if (R < 0)
                return this;
              R === 0 ? y.shift() : m(y, R), y.length === 1 && (A[h] = y[0]), A.removeListener !== void 0 && this.emit("removeListener", h, B || _);
            }
            return this;
          }, x.prototype.off = x.prototype.removeListener, x.prototype.removeAllListeners = function(h) {
            var _, y, A;
            if (y = this._events, y === void 0)
              return this;
            if (y.removeListener === void 0)
              return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : y[h] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete y[h]), this;
            if (arguments.length === 0) {
              var R = Object.keys(y), N;
              for (A = 0; A < R.length; ++A)
                N = R[A], N !== "removeListener" && this.removeAllListeners(N);
              return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
            }
            if (_ = y[h], typeof _ == "function")
              this.removeListener(h, _);
            else if (_ !== void 0)
              for (A = _.length - 1; A >= 0; A--)
                this.removeListener(h, _[A]);
            return this;
          };
          function a(f, h, _) {
            var y = f._events;
            if (y === void 0)
              return [];
            var A = y[h];
            return A === void 0 ? [] : typeof A == "function" ? _ ? [A.listener || A] : [A] : _ ? E(A) : b(A, A.length);
          }
          x.prototype.listeners = function(h) {
            return a(this, h, !0);
          }, x.prototype.rawListeners = function(h) {
            return a(this, h, !1);
          }, x.listenerCount = function(f, h) {
            return typeof f.listenerCount == "function" ? f.listenerCount(h) : u.call(f, h);
          }, x.prototype.listenerCount = u;
          function u(f) {
            var h = this._events;
            if (h !== void 0) {
              var _ = h[f];
              if (typeof _ == "function")
                return 1;
              if (_ !== void 0)
                return _.length;
            }
            return 0;
          }
          x.prototype.eventNames = function() {
            return this._eventsCount > 0 ? d(this._events) : [];
          };
          function b(f, h) {
            for (var _ = new Array(h), y = 0; y < h; ++y)
              _[y] = f[y];
            return _;
          }
          function m(f, h) {
            for (; h + 1 < f.length; h++)
              f[h] = f[h + 1];
            f.pop();
          }
          function E(f) {
            for (var h = new Array(f.length), _ = 0; _ < h.length; ++_)
              h[_] = f[_].listener || f[_];
            return h;
          }
          function o(f, h) {
            return new Promise(function(_, y) {
              function A(N) {
                f.removeListener(h, R), y(N);
              }
              function R() {
                typeof f.removeListener == "function" && f.removeListener("error", A), _([].slice.call(arguments));
              }
              v(f, h, R, { once: !0 }), h !== "error" && c(f, A, { once: !0 });
            });
          }
          function c(f, h, _) {
            typeof f.on == "function" && v(f, "error", h, _);
          }
          function v(f, h, _, y) {
            if (typeof f.on == "function")
              y.once ? f.once(h, _) : f.on(h, _);
            else if (typeof f.addEventListener == "function")
              f.addEventListener(h, function A(R) {
                y.once && f.removeEventListener(h, A), _(R);
              });
            else
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof f);
          }
        },
        /* 17 */
        /***/
        function(t, i, l) {
          var n = l(3), p = l(0), d = 0;
          function k() {
            return "hole_" + d++;
          }
          function g(u, b) {
            for (var m = null, E = 0; E < u.length; E++) {
              var o = b(u[E]);
              o !== u[E] && (m || (m = u.slice()), m[E] = o);
            }
            return m || u;
          }
          function x(u, b, m) {
            if (!(u instanceof n.Node))
              return u;
            if (!m) {
              var E = b(u);
              if (E && E !== u)
                return E;
            }
            if (u instanceof n.NodeList) {
              var o = g(u.children, function(_) {
                return x(_, b, m);
              });
              o !== u.children && (u = new n[u.typename](u.lineno, u.colno, o));
            } else if (u instanceof n.CallExtension) {
              var c = x(u.args, b, m), v = g(u.contentArgs, function(_) {
                return x(_, b, m);
              });
              (c !== u.args || v !== u.contentArgs) && (u = new n[u.typename](u.extName, u.prop, c, v));
            } else {
              var f = u.fields.map(function(_) {
                return u[_];
              }), h = g(f, function(_) {
                return x(_, b, m);
              });
              h !== f && (u = new n[u.typename](u.lineno, u.colno), h.forEach(function(_, y) {
                u[u.fields[y]] = _;
              }));
            }
            return m && b(u) || u;
          }
          function P(u, b) {
            return x(u, b, !0);
          }
          function M(u, b, m) {
            var E = [], o = P(m ? u[m] : u, function(c) {
              var v;
              return c instanceof n.Block ? c : ((c instanceof n.Filter && p.indexOf(b, c.name.value) !== -1 || c instanceof n.CallExtensionAsync) && (v = new n.Symbol(c.lineno, c.colno, k()), E.push(new n.FilterAsync(c.lineno, c.colno, c.name, c.args, v))), v);
            });
            return m ? u[m] = o : u = o, E.length ? (E.push(u), new n.NodeList(u.lineno, u.colno, E)) : u;
          }
          function I(u, b) {
            return P(u, function(m) {
              return m instanceof n.Output ? M(m, b) : m instanceof n.Set ? M(m, b, "value") : m instanceof n.For ? M(m, b, "arr") : m instanceof n.If ? M(m, b, "cond") : m instanceof n.CallExtension ? M(m, b, "args") : void 0;
            });
          }
          function T(u) {
            return x(u, function(b) {
              if (b instanceof n.Block) {
                var m = !1, E = k();
                b.body = x(b.body, function(o) {
                  if (o instanceof n.FunCall && o.name.value === "super")
                    return m = !0, new n.Symbol(o.lineno, o.colno, E);
                }), m && b.body.children.unshift(new n.Super(0, 0, b.name, new n.Symbol(0, 0, E)));
              }
            });
          }
          function C(u) {
            return P(u, function(b) {
              if (!(!(b instanceof n.If) && !(b instanceof n.For))) {
                var m = !1;
                if (x(b, function(E) {
                  if (E instanceof n.FilterAsync || E instanceof n.IfAsync || E instanceof n.AsyncEach || E instanceof n.AsyncAll || E instanceof n.CallExtensionAsync)
                    return m = !0, E;
                }), m) {
                  if (b instanceof n.If)
                    return new n.IfAsync(b.lineno, b.colno, b.cond, b.body, b.else_);
                  if (b instanceof n.For && !(b instanceof n.AsyncAll))
                    return new n.AsyncEach(b.lineno, b.colno, b.arr, b.name, b.body, b.else_);
                }
              }
            });
          }
          function r(u, b) {
            return C(T(I(u, b)));
          }
          function a(u, b) {
            return r(u, b || []);
          }
          t.exports = {
            transform: a
          };
        },
        /* 18 */
        /***/
        function(t, d, l) {
          var n = l(0), p = l(2), d = t.exports = {};
          function k(O, F) {
            return O == null || O === !1 ? F : O;
          }
          d.abs = Math.abs;
          function g(O) {
            return O !== O;
          }
          function x(O, F, V) {
            var U, Y = [], J = [];
            for (U = 0; U < O.length; U++)
              U % F === 0 && J.length && (Y.push(J), J = []), J.push(O[U]);
            if (J.length) {
              if (V)
                for (U = J.length; U < F; U++)
                  J.push(V);
              Y.push(J);
            }
            return Y;
          }
          d.batch = x;
          function P(O) {
            O = k(O, "");
            var F = O.toLowerCase();
            return p.copySafeness(O, F.charAt(0).toUpperCase() + F.slice(1));
          }
          d.capitalize = P;
          function M(O, F) {
            if (O = k(O, ""), F = F || 80, O.length >= F)
              return O;
            var V = F - O.length, U = n.repeat(" ", V / 2 - V % 2), Y = n.repeat(" ", V / 2);
            return p.copySafeness(O, U + O + Y);
          }
          d.center = M;
          function I(O, F, V) {
            return V ? O || F : O !== void 0 ? O : F;
          }
          d.default = I;
          function T(O, F, V) {
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
            return U.sort(function(ae, ee) {
              var le = ae[J], we = ee[J];
              return F || (n.isString(le) && (le = le.toUpperCase()), n.isString(we) && (we = we.toUpperCase())), le > we ? 1 : le === we ? 0 : -1;
            }), U;
          }
          d.dictsort = T;
          function C(O, F) {
            return JSON.stringify(O, null, F);
          }
          d.dump = C;
          function r(O) {
            return O instanceof p.SafeString ? O : (O = O ?? "", p.markSafe(n.escape(O.toString())));
          }
          d.escape = r;
          function a(O) {
            return O instanceof p.SafeString ? O : (O = O ?? "", p.markSafe(O.toString()));
          }
          d.safe = a;
          function u(O) {
            return O[0];
          }
          d.first = u;
          function b(O) {
            return O = O ?? "", p.markSafe(n.escape(O.toString()));
          }
          d.forceescape = b;
          function m(O, F) {
            return n.groupBy(O, F, this.env.opts.throwOnUndefined);
          }
          d.groupby = m;
          function E(O, F, V) {
            if (O = k(O, ""), O === "")
              return "";
            F = F || 4;
            var U = O.split(`
`), Y = n.repeat(" ", F), J = U.map(function(ae, ee) {
              return ee === 0 && !V ? ae : "" + Y + ae;
            }).join(`
`);
            return p.copySafeness(O, J);
          }
          d.indent = E;
          function o(O, F, V) {
            return F = F || "", V && (O = n.map(O, function(U) {
              return U[V];
            })), O.join(F);
          }
          d.join = o;
          function c(O) {
            return O[O.length - 1];
          }
          d.last = c;
          function v(O) {
            var F = k(O, "");
            return F !== void 0 ? typeof Map == "function" && F instanceof Map || typeof Set == "function" && F instanceof Set ? F.size : n.isObject(F) && !(F instanceof p.SafeString) ? n.keys(F).length : F.length : 0;
          }
          d.length = v;
          function f(O) {
            if (n.isString(O))
              return O.split("");
            if (n.isObject(O))
              return n._entries(O || {}).map(function(F) {
                var V = F[0], U = F[1];
                return {
                  key: V,
                  value: U
                };
              });
            if (n.isArray(O))
              return O;
            throw new n.TemplateError("list filter: type not iterable");
          }
          d.list = f;
          function h(O) {
            return O = k(O, ""), O.toLowerCase();
          }
          d.lower = h;
          function _(O) {
            return O == null ? "" : p.copySafeness(O, O.replace(/\r\n|\n/g, `<br />
`));
          }
          d.nl2br = _;
          function y(O) {
            return O[Math.floor(Math.random() * O.length)];
          }
          d.random = y;
          function A(O) {
            function F(V, U, Y) {
              U === void 0 && (U = "truthy");
              var J = this, ae = J.env.getTest(U);
              return n.toArray(V).filter(function(le) {
                return ae.call(J, le, Y) === O;
              });
            }
            return F;
          }
          d.reject = A(!1);
          function R(O, F) {
            return O.filter(function(V) {
              return !V[F];
            });
          }
          d.rejectattr = R, d.select = A(!0);
          function N(O, F) {
            return O.filter(function(V) {
              return !!V[F];
            });
          }
          d.selectattr = N;
          function B(O, F, V, U) {
            var Y = O;
            if (F instanceof RegExp)
              return O.replace(F, V);
            typeof U > "u" && (U = -1);
            var J = "";
            if (typeof F == "number")
              F = "" + F;
            else if (typeof F != "string")
              return O;
            if (typeof O == "number" && (O = "" + O), typeof O != "string" && !(O instanceof p.SafeString))
              return O;
            if (F === "")
              return J = V + O.split("").join(V) + V, p.copySafeness(O, J);
            var ae = O.indexOf(F);
            if (U === 0 || ae === -1)
              return O;
            for (var ee = 0, le = 0; ae > -1 && (U === -1 || le < U); )
              J += O.substring(ee, ae) + V, ee = ae + F.length, le++, ae = O.indexOf(F, ee);
            return ee < O.length && (J += O.substring(ee)), p.copySafeness(Y, J);
          }
          d.replace = B;
          function K(O) {
            var F;
            return n.isString(O) ? F = f(O) : F = n.map(O, function(V) {
              return V;
            }), F.reverse(), n.isString(O) ? p.copySafeness(O, F.join("")) : F;
          }
          d.reverse = K;
          function L(O, F, V) {
            F = F || 0;
            var U = Math.pow(10, F), Y;
            return V === "ceil" ? Y = Math.ceil : V === "floor" ? Y = Math.floor : Y = Math.round, Y(O * U) / U;
          }
          d.round = L;
          function w(O, F, V) {
            for (var U = Math.floor(O.length / F), Y = O.length % F, J = [], ae = 0, ee = 0; ee < F; ee++) {
              var le = ae + ee * U;
              ee < Y && ae++;
              var we = ae + (ee + 1) * U, be = O.slice(le, we);
              V && ee >= Y && be.push(V), J.push(be);
            }
            return J;
          }
          d.slice = w;
          function S(O, F, V) {
            return V === void 0 && (V = 0), F && (O = n.map(O, function(U) {
              return U[F];
            })), V + O.reduce(function(U, Y) {
              return U + Y;
            }, 0);
          }
          d.sum = S, d.sort = p.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(F, V, U, Y) {
            var J = this, ae = n.map(F, function(le) {
              return le;
            }), ee = n.getAttrGetter(Y);
            return ae.sort(function(le, we) {
              var be = Y ? ee(le) : le, Oe = Y ? ee(we) : we;
              if (J.env.opts.throwOnUndefined && Y && (be === void 0 || Oe === void 0))
                throw new TypeError('sort: attribute "' + Y + '" resolved to undefined');
              return !U && n.isString(be) && n.isString(Oe) && (be = be.toLowerCase(), Oe = Oe.toLowerCase()), be < Oe ? V ? 1 : -1 : be > Oe ? V ? -1 : 1 : 0;
            }), ae;
          });
          function j(O) {
            return p.copySafeness(O, O);
          }
          d.string = j;
          function D(O, F) {
            O = k(O, "");
            var V = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, U = ne(O.replace(V, "")), Y = "";
            return F ? Y = U.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, `
`).replace(/\n\n\n+/g, `

`) : Y = U.replace(/\s+/gi, " "), p.copySafeness(O, Y);
          }
          d.striptags = D;
          function $(O) {
            O = k(O, "");
            var F = O.split(" ").map(function(V) {
              return P(V);
            });
            return p.copySafeness(O, F.join(" "));
          }
          d.title = $;
          function ne(O) {
            return p.copySafeness(O, O.replace(/^\s*|\s*$/g, ""));
          }
          d.trim = ne;
          function z(O, F, V, U) {
            var Y = O;
            if (O = k(O, ""), F = F || 255, O.length <= F)
              return O;
            if (V)
              O = O.substring(0, F);
            else {
              var J = O.lastIndexOf(" ", F);
              J === -1 && (J = F), O = O.substring(0, J);
            }
            return O += U ?? "...", p.copySafeness(Y, O);
          }
          d.truncate = z;
          function ue(O) {
            return O = k(O, ""), O.toUpperCase();
          }
          d.upper = ue;
          function he(O) {
            var F = encodeURIComponent;
            if (n.isString(O))
              return F(O);
            var V = n.isArray(O) ? O : n._entries(O);
            return V.map(function(U) {
              var Y = U[0], J = U[1];
              return F(Y) + "=" + F(J);
            }).join("&");
          }
          d.urlencode = he;
          var X = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, Z = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, q = /^https?:\/\/.*$/, G = /^www\./, W = /\.(?:org|net|com)(?:\:|\/|$)/;
          function se(O, F, V) {
            g(F) && (F = 1 / 0);
            var U = V === !0 ? ' rel="nofollow"' : "", Y = O.split(/(\s+)/).filter(function(J) {
              return J && J.length;
            }).map(function(J) {
              var ae = J.match(X), ee = ae ? ae[1] : J, le = ee.substr(0, F);
              return q.test(ee) ? '<a href="' + ee + '"' + U + ">" + le + "</a>" : G.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : Z.test(ee) ? '<a href="mailto:' + ee + '">' + ee + "</a>" : W.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : J;
            });
            return Y.join("");
          }
          d.urlize = se;
          function ye(O) {
            O = k(O, "");
            var F = O ? O.match(/\w+/g) : null;
            return F ? F.length : null;
          }
          d.wordcount = ye;
          function fe(O, F) {
            var V = parseFloat(O);
            return g(V) ? F : V;
          }
          d.float = fe;
          var ke = p.makeMacro(["value", "default", "base"], [], function(F, V, U) {
            U === void 0 && (U = 10);
            var Y = parseInt(F, U);
            return g(Y) ? V : Y;
          });
          d.int = ke, d.d = d.default, d.e = d.escape;
        },
        /* 19 */
        /***/
        function(t, i, l) {
          function n(g, x) {
            g.prototype = Object.create(x.prototype), g.prototype.constructor = g, p(g, x);
          }
          function p(g, x) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(M, I) {
              return M.__proto__ = I, M;
            }, p(g, x);
          }
          var d = l(6), k = /* @__PURE__ */ function(g) {
            n(x, g);
            function x(M) {
              var I;
              return I = g.call(this) || this, I.precompiled = M || {}, I;
            }
            var P = x.prototype;
            return P.getSource = function(I) {
              return this.precompiled[I] ? {
                src: {
                  type: "code",
                  obj: this.precompiled[I]
                },
                path: I
              } : null;
            }, x;
          }(d);
          t.exports = {
            PrecompiledLoader: k
          };
        },
        /* 20 */
        /***/
        function(t, i, l) {
          var n = l(2).SafeString;
          function p(y) {
            return typeof y == "function";
          }
          i.callable = p;
          function d(y) {
            return y !== void 0;
          }
          i.defined = d;
          function k(y, A) {
            return y % A === 0;
          }
          i.divisibleby = k;
          function g(y) {
            return y instanceof n;
          }
          i.escaped = g;
          function x(y, A) {
            return y === A;
          }
          i.equalto = x, i.eq = i.equalto, i.sameas = i.equalto;
          function P(y) {
            return y % 2 === 0;
          }
          i.even = P;
          function M(y) {
            return !y;
          }
          i.falsy = M;
          function I(y, A) {
            return y >= A;
          }
          i.ge = I;
          function T(y, A) {
            return y > A;
          }
          i.greaterthan = T, i.gt = i.greaterthan;
          function C(y, A) {
            return y <= A;
          }
          i.le = C;
          function r(y, A) {
            return y < A;
          }
          i.lessthan = r, i.lt = i.lessthan;
          function a(y) {
            return y.toLowerCase() === y;
          }
          i.lower = a;
          function u(y, A) {
            return y !== A;
          }
          i.ne = u;
          function b(y) {
            return y === null;
          }
          i.null = b;
          function m(y) {
            return typeof y == "number";
          }
          i.number = m;
          function E(y) {
            return y % 2 === 1;
          }
          i.odd = E;
          function o(y) {
            return typeof y == "string";
          }
          i.string = o;
          function c(y) {
            return !!y;
          }
          i.truthy = c;
          function v(y) {
            return y === void 0;
          }
          i.undefined = v;
          function f(y) {
            return y.toUpperCase() === y;
          }
          i.upper = f;
          function h(y) {
            return typeof Symbol < "u" ? !!y[Symbol.iterator] : Array.isArray(y) || typeof y == "string";
          }
          i.iterable = h;
          function _(y) {
            var A = y != null && typeof y == "object" && !Array.isArray(y);
            return Set ? A && !(y instanceof Set) : A;
          }
          i.mapping = _;
        },
        /* 21 */
        /***/
        function(t, i, l) {
          function n(k) {
            var g = -1;
            return {
              current: null,
              reset: function() {
                g = -1, this.current = null;
              },
              next: function() {
                return g++, g >= k.length && (g = 0), this.current = k[g], this.current;
              }
            };
          }
          function p(k) {
            k = k || ",";
            var g = !0;
            return function() {
              var x = g ? "" : k;
              return g = !1, x;
            };
          }
          function d() {
            return {
              range: function(g, x, P) {
                typeof x > "u" ? (x = g, g = 0, P = 1) : P || (P = 1);
                var M = [];
                if (P > 0)
                  for (var I = g; I < x; I += P)
                    M.push(I);
                else
                  for (var T = g; T > x; T += P)
                    M.push(T);
                return M;
              },
              cycler: function() {
                return n(Array.prototype.slice.call(arguments));
              },
              joiner: function(g) {
                return p(g);
              }
            };
          }
          t.exports = d;
        },
        /* 22 */
        /***/
        function(t, i, l) {
          var n = l(4);
          t.exports = function(d, k) {
            function g(x, P) {
              if (this.name = x, this.path = x, this.defaultEngine = P.defaultEngine, this.ext = n.extname(x), !this.ext && !this.defaultEngine)
                throw new Error("No default engine was specified and no extension was provided.");
              this.ext || (this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine);
            }
            return g.prototype.render = function(P, M) {
              d.render(this.name, P, M);
            }, k.set("view", g), k.set("nunjucksEnv", d), d;
          };
        },
        /* 23 */
        /***/
        function(t, i, l) {
          var n = l(4), p = l(4), d = l(0), k = d._prettifyError, g = l(5), x = l(7), P = x.Environment, M = l(24);
          function I(a, u) {
            return Array.isArray(u) ? u.some(function(b) {
              return a.match(b);
            }) : !1;
          }
          function T(a, u) {
            u = u || {}, u.isString = !0;
            var b = u.env || new P([]), m = u.wrapper || M;
            if (!u.name)
              throw new Error('the "name" option is required when compiling a string');
            return m([r(a, u.name, b)], u);
          }
          function C(a, u) {
            u = u || {};
            var b = u.env || new P([]), m = u.wrapper || M;
            if (u.isString)
              return T(a, u);
            var E = n.existsSync(a) && n.statSync(a), o = [], c = [];
            function v(_) {
              n.readdirSync(_).forEach(function(y) {
                var A = p.join(_, y), R = A.substr(p.join(a, "/").length), N = n.statSync(A);
                N && N.isDirectory() ? (R += "/", I(R, u.exclude) || v(A)) : I(R, u.include) && c.push(A);
              });
            }
            if (E.isFile())
              o.push(r(n.readFileSync(a, "utf-8"), u.name || a, b));
            else if (E.isDirectory()) {
              v(a);
              for (var f = 0; f < c.length; f++) {
                var h = c[f].replace(p.join(a, "/"), "");
                try {
                  o.push(r(n.readFileSync(c[f], "utf-8"), h, b));
                } catch (_) {
                  if (u.force)
                    console.error(_);
                  else
                    throw _;
                }
              }
            }
            return m(o, u);
          }
          function r(a, u, b) {
            b = b || new P([]);
            var m = b.asyncFilters, E = b.extensionsList, o;
            u = u.replace(/\\/g, "/");
            try {
              o = g.compile(a, m, E, u, b.opts);
            } catch (c) {
              throw k(u, !1, c);
            }
            return {
              name: u,
              template: o
            };
          }
          t.exports = {
            precompile: C,
            precompileString: T
          };
        },
        /* 24 */
        /***/
        function(t, i, l) {
          function n(p, d) {
            var k = "";
            d = d || {};
            for (var g = 0; g < p.length; g++) {
              var x = JSON.stringify(p[g].name), P = p[g].template;
              k += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + x + `] = (function() {
` + P + `
})();
`, d.asFunction && (k += "return function(ctx, cb) { return nunjucks.render(" + x + `, ctx, cb); }
`), k += `})();
`;
            }
            return k;
          }
          t.exports = n;
        },
        /* 25 */
        /***/
        function(t, i, l) {
          function n() {
            var p = this.runtime, d = this.lib, k = this.compiler.Compiler, g = this.parser.Parser, x = this.nodes, P = this.lexer, M = p.contextOrFrameLookup, I = p.memberLookup, T, C;
            k && (T = k.prototype.assertType), g && (C = g.prototype.parseAggregate);
            function r() {
              p.contextOrFrameLookup = M, p.memberLookup = I, k && (k.prototype.assertType = T), g && (g.prototype.parseAggregate = C);
            }
            p.contextOrFrameLookup = function(v, f, h) {
              var _ = M.apply(this, arguments);
              if (_ !== void 0)
                return _;
              switch (h) {
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
            function a(c) {
              return {
                index: c.index,
                lineno: c.lineno,
                colno: c.colno
              };
            }
            if (x && k && g) {
              var u = x.Node.extend("Slice", {
                fields: ["start", "stop", "step"],
                init: function(v, f, h, _, y) {
                  h = h || new x.Literal(v, f, null), _ = _ || new x.Literal(v, f, null), y = y || new x.Literal(v, f, 1), this.parent(v, f, h, _, y);
                }
              });
              k.prototype.assertType = function(v) {
                v instanceof u || T.apply(this, arguments);
              }, k.prototype.compileSlice = function(v, f) {
                this._emit("("), this._compileExpression(v.start, f), this._emit("),("), this._compileExpression(v.stop, f), this._emit("),("), this._compileExpression(v.step, f), this._emit(")");
              }, g.prototype.parseAggregate = function() {
                var v = this, f = a(this.tokens);
                f.colno--, f.index--;
                try {
                  return C.apply(this);
                } catch (K) {
                  var h = a(this.tokens), _ = function() {
                    return d._assign(v.tokens, h), K;
                  };
                  d._assign(this.tokens, f), this.peeked = !1;
                  var y = this.peekToken();
                  if (y.type !== P.TOKEN_LEFT_BRACKET)
                    throw _();
                  this.nextToken();
                  for (var A = new u(y.lineno, y.colno), R = !1, N = 0; N <= A.fields.length && !this.skip(P.TOKEN_RIGHT_BRACKET); N++) {
                    if (N === A.fields.length)
                      if (R)
                        this.fail("parseSlice: too many slice components", y.lineno, y.colno);
                      else
                        break;
                    if (this.skip(P.TOKEN_COLON))
                      R = !0;
                    else {
                      var B = A.fields[N];
                      A[B] = this.parseExpression(), R = this.skip(P.TOKEN_COLON) || R;
                    }
                  }
                  if (!R)
                    throw _();
                  return new x.Array(y.lineno, y.colno, [A]);
                }
              };
            }
            function b(c, v, f, h) {
              c = c || [], v === null && (v = h < 0 ? c.length - 1 : 0), f === null ? f = h < 0 ? -1 : c.length : f < 0 && (f += c.length), v < 0 && (v += c.length);
              for (var _ = [], y = v; !(y < 0 || y > c.length || h > 0 && y >= f || h < 0 && y <= f); y += h)
                _.push(p.memberLookup(c, y));
              return _;
            }
            function m(c, v) {
              return Object.prototype.hasOwnProperty.call(c, v);
            }
            var E = {
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
                for (var f = 0; f < this.length; f++)
                  if (this[f] === v)
                    return this.splice(f, 1);
                throw new Error("ValueError");
              },
              count: function(v) {
                for (var f = 0, h = 0; h < this.length; h++)
                  this[h] === v && f++;
                return f;
              },
              index: function(v) {
                var f;
                if ((f = this.indexOf(v)) === -1)
                  throw new Error("ValueError");
                return f;
              },
              find: function(v) {
                return this.indexOf(v);
              },
              insert: function(v, f) {
                return this.splice(v, 0, f);
              }
            }, o = {
              items: function() {
                return d._entries(this);
              },
              values: function() {
                return d._values(this);
              },
              keys: function() {
                return d.keys(this);
              },
              get: function(v, f) {
                var h = this[v];
                return h === void 0 && (h = f), h;
              },
              has_key: function(v) {
                return m(this, v);
              },
              pop: function(v, f) {
                var h = this[v];
                if (h === void 0 && f !== void 0)
                  h = f;
                else {
                  if (h === void 0)
                    throw new Error("KeyError");
                  delete this[v];
                }
                return h;
              },
              popitem: function() {
                var v = d.keys(this);
                if (!v.length)
                  throw new Error("KeyError");
                var f = v[0], h = this[f];
                return delete this[f], [f, h];
              },
              setdefault: function(v, f) {
                return f === void 0 && (f = null), v in this || (this[v] = f), this[v];
              },
              update: function(v) {
                return d._assign(this, v), null;
              }
            };
            return o.iteritems = o.items, o.itervalues = o.values, o.iterkeys = o.keys, p.memberLookup = function(v, f, h) {
              return arguments.length === 4 ? b.apply(this, arguments) : (v = v || {}, d.isArray(v) && m(E, f) ? E[f].bind(v) : d.isObject(v) && m(o, f) ? o[f].bind(v) : I.apply(this, arguments));
            }, r;
          }
          t.exports = n;
        }
        /******/
      ])
    );
  });
})(fr);
const hr = (s, e) => {
  const t = At(s);
  return Ke.configure({ autoescape: !0 }), Ke.renderString(e, t);
}, At = (s) => {
  const e = {};
  return Object.entries(s).forEach(([t, i]) => {
    if (pr(i)) {
      const l = Object.values(i.content);
      e[t] = l.filter((n) => !(n != null && n.hidden)).map((n) => At(n.questions));
      return;
    }
    e[t] = i.value;
  }), e;
}, pr = (s) => Boolean(s.content);
class St {
  constructor(e = "empty", t = { isRoot: !0, data: null }) {
    Le(this, "interview", /* @__PURE__ */ new Map());
    Le(this, "events");
    Le(this, "current");
    Le(this, "isRoot", !0);
    Le(this, "data", {});
    this.events = t.events || new Me(), this.isRoot = t.isRoot, this.data = t.data || this.data;
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
    nr(e);
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
    const i = or(e);
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
      const l = this.interview.keys(), n = this.interview.values();
      if (!Function(...l, `return ${e.logic.showIf}`).bind(this)(...n))
        return !1;
    }
    if ((i = e.logic) != null && i.hideIf) {
      const l = this.interview.keys(), n = this.interview.values();
      if (!!Function(...l, `return ${e.logic.hideIf}`).bind(this)(...n))
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
    let e, t;
    const i = Array.from(this.interview);
    for (let l = 0; l < i.length; l++) {
      const n = i[l][1], p = n == null ? void 0 : n.isCurrent, d = (n == null ? void 0 : n.type) === "repeat";
      if (t = i[l + 1] && i[l + 1][1], p && !d && !t && !this.isRoot) {
        n.isEnd = !0, e = n;
        break;
      }
      if (p && !d && t) {
        n.isCurrent = !1, e = i[l + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (p && d && this.canBeShown(n)) {
        const k = n;
        k.isCurrent = !1, e = Array.from(k.content[0].nestedInterview.interview)[0][1], e.isCurrent = !0;
        break;
      }
      if (p && d && !this.canBeShown(n) && t) {
        n.isCurrent = !1, e = i[l + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (p && d && !this.canBeShown(n) && !t) {
        n.isEnd = !0, e = n;
        break;
      }
      if (!p && d && !this.canBeShown(n) && !t) {
        n.isEnd = !0, e = n;
        break;
      }
      if (!p && d && this.canBeShown(n)) {
        const k = n;
        for (let g = 0; g < parseInt(n.value); g++)
          if (!k.content[g].hidden && (e = k.content[g].nestedInterview.getNextQuestion(), e)) {
            if (e.isEnd)
              if (g + 1 < parseInt(n.value))
                if (!e.isCurrent)
                  e.isEnd = !1, e = null;
                else {
                  const x = Array.from(k.content[g + 1].nestedInterview.interview);
                  e.isCurrent = !1, e.isEnd = !1, e = x[0][1], e.isCurrent = !0;
                }
              else {
                const x = k.content[g].nestedInterview.canBeShown(e);
                e.isEnd && !x && (e.isCurrent = !1, e = null);
              }
            if (e)
              break;
          }
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
    let l = i, n;
    for (let p = 1; p < t.length; p++) {
      const d = t[p][1], k = this.canBeShown(d);
      if (t[p + 1] && t[p + 1][1], d.isCurrent) {
        l.isCurrent = !0, n = l, d.isCurrent = !1;
        break;
      } else if (k && (l = d), d.type === "repeat") {
        const g = d;
        for (let x = 0; x < parseInt(d.value) && !(!g.content[x].hidden && (n = g.content[x].nestedInterview.getPreviousQuestion(l), n != null && n.isPrevious && (n.isPrevious = !1, l = n, n = null), n && n.isCurrent)); x++)
          ;
        if (n && n.isCurrent)
          break;
      }
    }
    if (e && !n) {
      const p = this.reversePreviousUtil(t);
      p && (n = p);
    }
    return n;
  }
  // traverse interview backwards to find previous question
  reversePreviousUtil(e) {
    let t;
    for (let i = e.length - 1; i >= 0; i--) {
      const l = e[i][1];
      if (this.canBeShown(l))
        if (l.type === "repeat") {
          const p = l;
          for (let d = parseInt(l.value) - 1; d >= 0; d--)
            if (!p.content[d].hidden) {
              const k = Array.from(p.content[d].nestedInterview.interview);
              if (t = p.content[d].nestedInterview.reversePreviousUtil(k), t && (t.isPrevious = !0), t)
                break;
            }
          if (t)
            break;
        } else {
          t = l, t.isPrevious = !0;
          break;
        }
    }
    return t;
  }
  // Returns an object whith the current total questions 
  // and the position you are in it
  getProgress() {
    let e = 0, t = 0;
    return Array.from(this.interview).forEach(([l, n]) => {
      e += 1, n.isCurrent && (t = e), n.type === "repeat" && Object.values(n.content).forEach((d) => {
        if (!d.hidden) {
          const k = d.nestedInterview.getProgress();
          k.currentPosition !== 0 && (t = e + k.currentPosition), e += k.total;
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
  getLastQuestionOfInterview() {
    let e = null;
    const t = Array.from(this.interview);
    for (let i = t.length - 1; i >= 0; i--) {
      const l = t[i][1];
      if (this.canBeShown(l))
        if (l.type === "repeat") {
          const p = l;
          for (let d = parseInt(l.value) - 1; d >= 0 && !(!p.content[d].hidden && (e = p.content[d].nestedInterview.getLastQuestionOfInterview(), e)); d--)
            ;
          e || (e = l);
          break;
        } else {
          e = l;
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
      const l = e[i][1];
      if (l.isCurrent) {
        t = this;
        break;
      }
      if (l.type === "repeat") {
        const n = l;
        for (let p = 0; p < parseInt(l.value) && !(!n.content[p].hidden && (t = n.content[p].nestedInterview.getCurrentGuidedInterview(), t)); p++)
          ;
      }
    }
    return this.isRoot && !t && (t = this), t;
  }
  getCurrent() {
    return this.current || (this.current = Array.from(this.interview)[0][1], this.isRoot && (Array.from(this.interview)[0][1].isCurrent = !0)), this.current;
  }
  setValue(e, t) {
    if (!this.interview.has(e))
      throw new Error("No question with id:" + e);
    const i = this.interview.get(e);
    if (!i)
      throw new Error("No question with id:" + e);
    ir(t, i), i.value = t, (i == null ? void 0 : i.type) === "multipleChoice" && this.setRadioChecked(i, t), (i == null ? void 0 : i.type) === "repeat" && this.buildContentForRepeatQuestion(i, t), this.data[e] ? this.data[e].value = i.value : this.data[e] = { value: i.value }, this.events.dispatch("set-value", this.interview.get(e));
  }
  on(e, t) {
    this.events.register(e, t);
  }
  getData() {
    return this.data;
  }
  setRadioChecked(e, t) {
    e.choices.forEach((i) => {
      i.checked = i.label === t;
    });
  }
  buildContentForRepeatQuestion(e, t = null) {
    const { range: i, id: l, questions: n } = e, { min: p, max: d } = i;
    t = rr(e.value, p, d), e.value = t, e.content || (e.content = {}), this.data[l] ? this.data[l].value = t : this.data[l] = { value: t, content: {} };
    for (let g = 0; g < t; g++) {
      if (e.content[g]) {
        e.content[g].hidden = !1;
        continue;
      }
      this.data[l].content[g] = { hidden: !1, questions: {} };
      const x = new St(cr(n, g), {
        isRoot: !1,
        events: this.events,
        data: this.data[l].content[g].questions
      });
      e.content[g] = { hidden: !1, nestedInterview: x };
    }
    const k = Object.keys(e.content);
    if (t < k.length)
      for (let g = t; g < k.length; g++)
        e.content[g].hidden = !0, this.data[l].content[g].hidden = !0;
  }
  applyDataToQuestions(e) {
    Object.entries(e).forEach(([t, { value: i, content: l }]) => {
      this.setValue(t, i), l && Object.values(l).forEach((n, p) => {
        n.hidden || this.getNestedInterview(t, p).applyDataToQuestions(n.questions);
      });
    });
  }
  makeTemplate(e) {
    if (!e)
      throw new Error("No template provided");
    return hr(this.data, e);
  }
  getStepById(e) {
    const t = this.interview.get(e);
    return t || null;
  }
  checkIfIdIsValid(e) {
    if (!e)
      throw new Error("No id provided");
    return this.interview.has(e) ? { isValid: !1, message: "Id already exists" } : Lt(e) ? { isValid: !0, message: "" } : { isValid: !1, message: "Id must be in camel case" };
  }
  changeIdOfQuestion(e, t) {
    if (!this.interview.get(e))
      throw new Error("No question with id:" + e);
    const l = this.checkIfIdIsValid(t);
    if (!l.isValid)
      throw new Error(l.message);
    const n = Array.from(this.interview, ([d, k]) => ({ name: d, value: k }));
    n.forEach((d, k) => {
      d.name === e && (n[k].value.id = t, n[k].name = t);
    });
    const p = /* @__PURE__ */ new Map();
    n.forEach((d) => {
      p.set(d.name, d.value);
    }), this.interview = p;
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
    const l = this.findMultipleChoiceById(e);
    if (!i)
      throw new Error("No label provided");
    if (!l.choices[t])
      throw new Error("No choice with index:" + t);
    l.choices[t].label = i;
  }
  setDefaultCheckedChoice(e, t) {
    const i = this.findMultipleChoiceById(e);
    if (!i.choices[t])
      throw new Error("No choice with index:" + t);
    i.choices.forEach((l) => l.checked = !1), i.choices[t].checked = !0;
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
    const l = this.findQuestionById(e);
    l.options || (l.options = {}), l.options[t] = i;
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
  St as GuidedInterview
};
