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
        var u = [null];
        u.push.apply(u, arguments);
        var r = Function.bind.apply(e, u);
        return new r();
      }
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(s).forEach(function(i) {
    var u = Object.getOwnPropertyDescriptor(s, i);
    Object.defineProperty(t, i, u.get ? u : {
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
var Ae = {}, Ne = {}, qe = {};
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.default = void 0;
var qt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
qe.default = qt;
Object.defineProperty(Ne, "__esModule", {
  value: !0
});
Ne.default = void 0;
var $t = Wt(qe);
function Wt(s) {
  return s && s.__esModule ? s : { default: s };
}
function Gt(s) {
  return typeof s == "string" && $t.default.test(s);
}
var Qt = Gt;
Ne.default = Qt;
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
Ae.unsafeStringify = yt;
var Ht = Yt(Ne);
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
  const u = e || new Array(16);
  s = s || {};
  let r = s.node || pt, p = s.clockseq !== void 0 ? s.clockseq : st;
  if (r == null || p == null) {
    const M = s.random || (s.rng || Xt.default)();
    r == null && (r = pt = [M[0] | 1, M[1], M[2], M[3], M[4], M[5]]), p == null && (p = st = (M[6] << 8 | M[7]) & 16383);
  }
  let d = s.msecs !== void 0 ? s.msecs : Date.now(), k = s.nsecs !== void 0 ? s.nsecs : at + 1;
  const g = d - ot + (k - at) / 1e4;
  if (g < 0 && s.clockseq === void 0 && (p = p + 1 & 16383), (g < 0 || d > ot) && s.nsecs === void 0 && (k = 0), k >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ot = d, at = k, st = p, d += 122192928e5;
  const x = ((d & 268435455) * 1e4 + k) % 4294967296;
  u[i++] = x >>> 24 & 255, u[i++] = x >>> 16 & 255, u[i++] = x >>> 8 & 255, u[i++] = x & 255;
  const B = d / 4294967296 * 1e4 & 268435455;
  u[i++] = B >>> 8 & 255, u[i++] = B & 255, u[i++] = B >>> 24 & 15 | 16, u[i++] = B >>> 16 & 255, u[i++] = p >>> 8 | 128, u[i++] = p & 255;
  for (let M = 0; M < 6; ++M)
    u[i + M] = r[M];
  return e || (0, Zt.unsafeStringify)(u);
}
var nn = tn;
Ue.default = nn;
var $e = {}, Te = {}, Be = {};
Object.defineProperty(Be, "__esModule", {
  value: !0
});
Be.default = void 0;
var rn = sn(Ne);
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
Be.default = an;
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.URL = Te.DNS = void 0;
Te.default = hn;
var ln = Ae, un = cn(Be);
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
  function i(u, r, p, d) {
    var k;
    if (typeof u == "string" && (u = fn(u)), typeof r == "string" && (r = (0, un.default)(r)), ((k = r) === null || k === void 0 ? void 0 : k.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let g = new Uint8Array(16 + u.length);
    if (g.set(r), g.set(u, r.length), g = t(g), g[6] = g[6] & 15 | e, g[8] = g[8] & 63 | 128, p) {
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
  for (let u = 0; u < t; u += 8) {
    const r = s[u >> 5] >>> u % 32 & 255, p = parseInt(i.charAt(r >>> 4 & 15) + i.charAt(r & 15), 16);
    e.push(p);
  }
  return e;
}
function Et(s) {
  return (s + 64 >>> 9 << 4) + 14 + 1;
}
function vn(s, e) {
  s[e >> 5] |= 128 << e % 32, s[Et(e) - 1] = e;
  let t = 1732584193, i = -271733879, u = -1732584194, r = 271733878;
  for (let p = 0; p < s.length; p += 16) {
    const d = t, k = i, g = u, x = r;
    t = de(t, i, u, r, s[p], 7, -680876936), r = de(r, t, i, u, s[p + 1], 12, -389564586), u = de(u, r, t, i, s[p + 2], 17, 606105819), i = de(i, u, r, t, s[p + 3], 22, -1044525330), t = de(t, i, u, r, s[p + 4], 7, -176418897), r = de(r, t, i, u, s[p + 5], 12, 1200080426), u = de(u, r, t, i, s[p + 6], 17, -1473231341), i = de(i, u, r, t, s[p + 7], 22, -45705983), t = de(t, i, u, r, s[p + 8], 7, 1770035416), r = de(r, t, i, u, s[p + 9], 12, -1958414417), u = de(u, r, t, i, s[p + 10], 17, -42063), i = de(i, u, r, t, s[p + 11], 22, -1990404162), t = de(t, i, u, r, s[p + 12], 7, 1804603682), r = de(r, t, i, u, s[p + 13], 12, -40341101), u = de(u, r, t, i, s[p + 14], 17, -1502002290), i = de(i, u, r, t, s[p + 15], 22, 1236535329), t = ve(t, i, u, r, s[p + 1], 5, -165796510), r = ve(r, t, i, u, s[p + 6], 9, -1069501632), u = ve(u, r, t, i, s[p + 11], 14, 643717713), i = ve(i, u, r, t, s[p], 20, -373897302), t = ve(t, i, u, r, s[p + 5], 5, -701558691), r = ve(r, t, i, u, s[p + 10], 9, 38016083), u = ve(u, r, t, i, s[p + 15], 14, -660478335), i = ve(i, u, r, t, s[p + 4], 20, -405537848), t = ve(t, i, u, r, s[p + 9], 5, 568446438), r = ve(r, t, i, u, s[p + 14], 9, -1019803690), u = ve(u, r, t, i, s[p + 3], 14, -187363961), i = ve(i, u, r, t, s[p + 8], 20, 1163531501), t = ve(t, i, u, r, s[p + 13], 5, -1444681467), r = ve(r, t, i, u, s[p + 2], 9, -51403784), u = ve(u, r, t, i, s[p + 7], 14, 1735328473), i = ve(i, u, r, t, s[p + 12], 20, -1926607734), t = me(t, i, u, r, s[p + 5], 4, -378558), r = me(r, t, i, u, s[p + 8], 11, -2022574463), u = me(u, r, t, i, s[p + 11], 16, 1839030562), i = me(i, u, r, t, s[p + 14], 23, -35309556), t = me(t, i, u, r, s[p + 1], 4, -1530992060), r = me(r, t, i, u, s[p + 4], 11, 1272893353), u = me(u, r, t, i, s[p + 7], 16, -155497632), i = me(i, u, r, t, s[p + 10], 23, -1094730640), t = me(t, i, u, r, s[p + 13], 4, 681279174), r = me(r, t, i, u, s[p], 11, -358537222), u = me(u, r, t, i, s[p + 3], 16, -722521979), i = me(i, u, r, t, s[p + 6], 23, 76029189), t = me(t, i, u, r, s[p + 9], 4, -640364487), r = me(r, t, i, u, s[p + 12], 11, -421815835), u = me(u, r, t, i, s[p + 15], 16, 530742520), i = me(i, u, r, t, s[p + 2], 23, -995338651), t = ge(t, i, u, r, s[p], 6, -198630844), r = ge(r, t, i, u, s[p + 7], 10, 1126891415), u = ge(u, r, t, i, s[p + 14], 15, -1416354905), i = ge(i, u, r, t, s[p + 5], 21, -57434055), t = ge(t, i, u, r, s[p + 12], 6, 1700485571), r = ge(r, t, i, u, s[p + 3], 10, -1894986606), u = ge(u, r, t, i, s[p + 10], 15, -1051523), i = ge(i, u, r, t, s[p + 1], 21, -2054922799), t = ge(t, i, u, r, s[p + 8], 6, 1873313359), r = ge(r, t, i, u, s[p + 15], 10, -30611744), u = ge(u, r, t, i, s[p + 6], 15, -1560198380), i = ge(i, u, r, t, s[p + 13], 21, 1309151649), t = ge(t, i, u, r, s[p + 4], 6, -145523070), r = ge(r, t, i, u, s[p + 11], 10, -1120210379), u = ge(u, r, t, i, s[p + 2], 15, 718787259), i = ge(i, u, r, t, s[p + 9], 21, -343485551), t = xe(t, d), i = xe(i, k), u = xe(u, g), r = xe(r, x);
  }
  return [t, i, u, r];
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
function Ge(s, e, t, i, u, r) {
  return xe(gn(xe(xe(e, s), xe(i, r)), u), t);
}
function de(s, e, t, i, u, r, p) {
  return Ge(e & t | ~e & i, s, e, u, r, p);
}
function ve(s, e, t, i, u, r, p) {
  return Ge(e & i | t & ~i, s, e, u, r, p);
}
function me(s, e, t, i, u, r, p) {
  return Ge(e ^ t ^ i, s, e, u, r, p);
}
function ge(s, e, t, i, u, r, p) {
  return Ge(t ^ (e | ~i), s, e, u, r, p);
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
    for (let u = 0; u < 16; ++u)
      e[t + u] = i[u];
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
function Nn(s) {
  const e = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof s == "string") {
    const p = unescape(encodeURIComponent(s));
    s = [];
    for (let d = 0; d < p.length; ++d)
      s.push(p.charCodeAt(d));
  } else
    Array.isArray(s) || (s = Array.prototype.slice.call(s));
  s.push(128);
  const i = s.length / 4 + 2, u = Math.ceil(i / 16), r = new Array(u);
  for (let p = 0; p < u; ++p) {
    const d = new Uint32Array(16);
    for (let k = 0; k < 16; ++k)
      d[k] = s[p * 64 + k * 4] << 24 | s[p * 64 + k * 4 + 1] << 16 | s[p * 64 + k * 4 + 2] << 8 | s[p * 64 + k * 4 + 3];
    r[p] = d;
  }
  r[u - 1][14] = (s.length - 1) * 8 / Math.pow(2, 32), r[u - 1][14] = Math.floor(r[u - 1][14]), r[u - 1][15] = (s.length - 1) * 8 & 4294967295;
  for (let p = 0; p < u; ++p) {
    const d = new Uint32Array(80);
    for (let R = 0; R < 16; ++R)
      d[R] = r[p][R];
    for (let R = 16; R < 80; ++R)
      d[R] = lt(d[R - 3] ^ d[R - 8] ^ d[R - 14] ^ d[R - 16], 1);
    let k = t[0], g = t[1], x = t[2], B = t[3], M = t[4];
    for (let R = 0; R < 80; ++R) {
      const T = Math.floor(R / 20), N = lt(k, 5) + Sn(T, g, x, B) + M + e[T] + d[R] >>> 0;
      M = B, B = x, x = lt(g, 30) >>> 0, g = k, k = N;
    }
    t[0] = t[0] + k >>> 0, t[1] = t[1] + g >>> 0, t[2] = t[2] + x >>> 0, t[3] = t[3] + B >>> 0, t[4] = t[4] + M >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var Cn = Nn;
ze.default = Cn;
Object.defineProperty(Ye, "__esModule", {
  value: !0
});
Ye.default = void 0;
var Rn = Ot(Te), In = Ot(ze);
function Ot(s) {
  return s && s.__esModule ? s : { default: s };
}
const Bn = (0, Rn.default)("v5", 80, In.default);
var Pn = Bn;
Ye.default = Pn;
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
var Mn = Kn(Ne);
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
      return r.default;
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
      return u.default;
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
  var e = x(Ue), t = x($e), i = x(Qe), u = x(Ye), r = x(Je), p = x(Xe), d = x(Ne), k = x(Ae), g = x(Be);
  function x(B) {
    return B && B.__esModule ? B : { default: B };
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
    const i = Qn.default.randomBytes(t), u = e.length - 1;
    let r = "";
    for (; t--; )
      r += e[i[t] & u];
    return r;
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
    const [i, u] = this.split(e, 2);
    return [i, u];
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
      const i = Math.floor(Math.random() * t--), u = e[t];
      e[t] = e[i], e[i] = u;
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
      const r = xt(i.questions);
      r && (e = r);
    }
    Lt(t) || (e = t);
  }), e;
}, Tt = (s) => {
  const e = Object.values(s);
  let t = [];
  const i = e.map((u, r) => e.find((p, d) => {
    if (p.type === "repeat" && (t = Tt(p.questions)), r !== d && p.id === u.id)
      return u;
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
    i !== void 0 && Object.keys(i).forEach((u) => i[u](t));
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
  return Object.entries(t).forEach(([i, u]) => {
    const r = e + 1;
    u.title && (u.title = u.title.replace(/\<%= index %>/g, r.toString()));
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
  (function(i, u) {
    s.exports = u();
  })(typeof self < "u" ? self : ct, function() {
    return (
      /******/
      function(t) {
        var i = {};
        function u(r) {
          if (i[r])
            return i[r].exports;
          var p = i[r] = {
            /******/
            i: r,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return t[r].call(p.exports, p, p.exports, u), p.l = !0, p.exports;
        }
        return u.m = t, u.c = i, u.d = function(r, p, d) {
          u.o(r, p) || Object.defineProperty(r, p, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: d
            /******/
          });
        }, u.n = function(r) {
          var p = r && r.__esModule ? (
            /******/
            function() {
              return r.default;
            }
          ) : (
            /******/
            function() {
              return r;
            }
          );
          return u.d(p, "a", p), p;
        }, u.o = function(r, p) {
          return Object.prototype.hasOwnProperty.call(r, p);
        }, u.p = "", u(u.s = 11);
      }([
        /* 0 */
        /***/
        function(t, g, u) {
          var r = Array.prototype, p = Object.prototype, d = {
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
          function B(w) {
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
          function R(w, S, j) {
            var D, $;
            w instanceof Error && ($ = w, w = $.name + ": " + $.message), Object.setPrototypeOf ? (D = new Error(w), Object.setPrototypeOf(D, R.prototype)) : (D = this, Object.defineProperty(D, "message", {
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
          Object.setPrototypeOf ? Object.setPrototypeOf(R.prototype, Error.prototype) : R.prototype = Object.create(Error.prototype, {
            constructor: {
              value: R
            }
          }), g.TemplateError = R;
          function T(w) {
            return w.replace(k, B);
          }
          g.escape = T;
          function N(w) {
            return p.toString.call(w) === "[object Function]";
          }
          g.isFunction = N;
          function n(w) {
            return p.toString.call(w) === "[object Array]";
          }
          g.isArray = n;
          function a(w) {
            return p.toString.call(w) === "[object String]";
          }
          g.isString = a;
          function l(w) {
            return p.toString.call(w) === "[object Object]";
          }
          g.isObject = l;
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
            for (var D = {}, $ = N(S) ? S : m(S), ne = 0; ne < w.length; ne++) {
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
              if (r.forEach && w.forEach === r.forEach)
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
            if (r.map && w.map === r.map)
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
            var D = I(w || {}), $ = D.length, ne = -1;
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
          function I(w) {
            var S = [];
            for (var j in w)
              x(w, j) && S.push(j);
            return S;
          }
          g.keys = I;
          function C(w) {
            return I(w).map(function(S) {
              return [S, w[S]];
            });
          }
          g._entries = C;
          function P(w) {
            return I(w).map(function(S) {
              return w[S];
            });
          }
          g._values = P;
          function K(w, S) {
            return w = w || {}, I(S).forEach(function(j) {
              w[j] = S[j];
            }), w;
          }
          g._assign = g.extend = K;
          function L(w, S) {
            if (n(S) || a(S))
              return S.indexOf(w) !== -1;
            if (l(S))
              return w in S;
            throw new Error('Cannot use "in" operator to search for "' + w + '" in unexpected types.');
          }
          g.inOperator = L;
        },
        /* 1 */
        /***/
        function(t, i, u) {
          function r(a, l) {
            for (var b = 0; b < l.length; b++) {
              var m = l[b];
              m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(a, d(m.key), m);
            }
          }
          function p(a, l, b) {
            return l && r(a.prototype, l), b && r(a, b), Object.defineProperty(a, "prototype", { writable: !1 }), a;
          }
          function d(a) {
            var l = k(a, "string");
            return typeof l == "symbol" ? l : String(l);
          }
          function k(a, l) {
            if (typeof a != "object" || a === null)
              return a;
            var b = a[Symbol.toPrimitive];
            if (b !== void 0) {
              var m = b.call(a, l || "default");
              if (typeof m != "object")
                return m;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (l === "string" ? String : Number)(a);
          }
          function g(a, l) {
            a.prototype = Object.create(l.prototype), a.prototype.constructor = a, x(a, l);
          }
          function x(a, l) {
            return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, E) {
              return m.__proto__ = E, m;
            }, x(a, l);
          }
          var B = u(16), M = u(0);
          function R(a, l) {
            return typeof a != "function" || typeof l != "function" ? l : function() {
              var m = this.parent;
              this.parent = a;
              var E = l.apply(this, arguments);
              return this.parent = m, E;
            };
          }
          function T(a, l, b) {
            b = b || {}, M.keys(b).forEach(function(E) {
              b[E] = R(a.prototype[E], b[E]);
            });
            var m = /* @__PURE__ */ function(E) {
              g(o, E);
              function o() {
                return E.apply(this, arguments) || this;
              }
              return p(o, [{
                key: "typename",
                get: function() {
                  return l;
                }
              }]), o;
            }(a);
            return M._assign(m.prototype, b), m;
          }
          var N = /* @__PURE__ */ function() {
            function a() {
              this.init.apply(this, arguments);
            }
            var l = a.prototype;
            return l.init = function() {
            }, a.extend = function(m, E) {
              return typeof m == "object" && (E = m, m = "anonymous"), T(this, m, E);
            }, p(a, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), a;
          }(), n = /* @__PURE__ */ function(a) {
            g(l, a);
            function l() {
              var m, E;
              return E = a.call(this) || this, (m = E).init.apply(m, arguments), E;
            }
            var b = l.prototype;
            return b.init = function() {
            }, l.extend = function(E, o) {
              return typeof E == "object" && (o = E, E = "anonymous"), T(this, E, o);
            }, p(l, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), l;
          }(B);
          t.exports = {
            Obj: N,
            EmitterObj: n
          };
        },
        /* 2 */
        /***/
        function(t, i, u) {
          var r = u(0), p = Array.from, d = typeof Symbol == "function" && Symbol.iterator && typeof p == "function", k = /* @__PURE__ */ function() {
            function h(y, A) {
              this.variables = /* @__PURE__ */ Object.create(null), this.parent = y, this.topLevel = !1, this.isolateWrites = A;
            }
            var _ = h.prototype;
            return _.set = function(A, I, C) {
              var P = A.split("."), K = this.variables, L = this;
              if (C && (L = this.resolve(P[0], !0))) {
                L.set(A, I);
                return;
              }
              for (var w = 0; w < P.length - 1; w++) {
                var S = P[w];
                K[S] || (K[S] = {}), K = K[S];
              }
              K[P[P.length - 1]] = I;
            }, _.get = function(A) {
              var I = this.variables[A];
              return I !== void 0 ? I : null;
            }, _.lookup = function(A) {
              var I = this.parent, C = this.variables[A];
              return C !== void 0 ? C : I && I.lookup(A);
            }, _.resolve = function(A, I) {
              var C = I && this.isolateWrites ? void 0 : this.parent, P = this.variables[A];
              return P !== void 0 ? this : C && C.resolve(A);
            }, _.push = function(A) {
              return new h(this, A);
            }, _.pop = function() {
              return this.parent;
            }, h;
          }();
          function g(h, _, y) {
            return function() {
              for (var I = arguments.length, C = new Array(I), P = 0; P < I; P++)
                C[P] = arguments[P];
              var K = R(C), L, w = M(C);
              if (K > h.length)
                L = C.slice(0, h.length), C.slice(L.length, K).forEach(function(D, $) {
                  $ < _.length && (w[_[$]] = D);
                }), L.push(w);
              else if (K < h.length) {
                L = C.slice(0, K);
                for (var S = K; S < h.length; S++) {
                  var j = h[S];
                  L.push(w[j]), delete w[j];
                }
                L.push(w);
              } else
                L = C;
              return y.apply(this, L);
            };
          }
          function x(h) {
            return h.__keywords = !0, h;
          }
          function B(h) {
            return h && Object.prototype.hasOwnProperty.call(h, "__keywords");
          }
          function M(h) {
            var _ = h.length;
            if (_) {
              var y = h[_ - 1];
              if (B(y))
                return y;
            }
            return {};
          }
          function R(h) {
            var _ = h.length;
            if (_ === 0)
              return 0;
            var y = h[_ - 1];
            return B(y) ? _ - 1 : _;
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
          function N(h, _) {
            return h instanceof T ? new T(_) : _.toString();
          }
          function n(h) {
            var _ = typeof h;
            return _ === "string" ? new T(h) : _ !== "function" ? h : function(A) {
              var I = h.apply(this, arguments);
              return typeof I == "string" ? new T(I) : I;
            };
          }
          function a(h, _) {
            return h = h ?? "", _ && !(h instanceof T) && (h = r.escape(h.toString())), h;
          }
          function l(h, _, y) {
            if (h == null)
              throw new r.TemplateError("attempted to output null or undefined value", _ + 1, y + 1);
            return h;
          }
          function b(h, _) {
            if (h != null)
              return typeof h[_] == "function" ? function() {
                for (var y = arguments.length, A = new Array(y), I = 0; I < y; I++)
                  A[I] = arguments[I];
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
            return h.lineno ? h : new r.TemplateError(h, _, y);
          }
          function c(h, _, y, A) {
            if (r.isArray(h)) {
              var I = h.length;
              r.asyncIter(h, function(P, K, L) {
                switch (_) {
                  case 1:
                    y(P, K, I, L);
                    break;
                  case 2:
                    y(P[0], P[1], K, I, L);
                    break;
                  case 3:
                    y(P[0], P[1], P[2], K, I, L);
                    break;
                  default:
                    P.push(K, I, L), y.apply(this, P);
                }
              }, A);
            } else
              r.asyncFor(h, function(P, K, L, w, S) {
                y(P, K, L, w, S);
              }, A);
          }
          function v(h, _, y, A) {
            var I = 0, C, P;
            function K($, ne) {
              I++, P[$] = ne, I === C && A(null, P.join(""));
            }
            if (r.isArray(h))
              if (C = h.length, P = new Array(C), C === 0)
                A(null, "");
              else
                for (var L = 0; L < h.length; L++) {
                  var w = h[L];
                  switch (_) {
                    case 1:
                      y(w, L, C, K);
                      break;
                    case 2:
                      y(w[0], w[1], L, C, K);
                      break;
                    case 3:
                      y(w[0], w[1], w[2], L, C, K);
                      break;
                    default:
                      w.push(L, C, K), y.apply(this, w);
                  }
                }
            else {
              var S = r.keys(h || {});
              if (C = S.length, P = new Array(C), C === 0)
                A(null, "");
              else
                for (var j = 0; j < S.length; j++) {
                  var D = S[j];
                  y(D, h[D], j, C, K);
                }
            }
          }
          function f(h) {
            return typeof h != "object" || h === null || r.isArray(h) ? h : d && Symbol.iterator in h ? p(h) : h;
          }
          t.exports = {
            Frame: k,
            makeMacro: g,
            makeKeywordArgs: x,
            numArgs: R,
            suppressValue: a,
            ensureDefined: l,
            memberLookup: b,
            contextOrFrameLookup: E,
            callWrap: m,
            handleError: o,
            isArray: r.isArray,
            keys: r.keys,
            SafeString: T,
            copySafeness: N,
            markSafe: n,
            asyncEach: c,
            asyncAll: v,
            inOperator: r.inOperator,
            fromIterator: f
          };
        },
        /* 3 */
        /***/
        function(t, i, u) {
          function r(Q, H) {
            for (var ie = 0; ie < H.length; ie++) {
              var re = H[ie];
              re.enumerable = re.enumerable || !1, re.configurable = !0, "value" in re && (re.writable = !0), Object.defineProperty(Q, d(re.key), re);
            }
          }
          function p(Q, H, ie) {
            return H && r(Q.prototype, H), ie && r(Q, ie), Object.defineProperty(Q, "prototype", { writable: !1 }), Q;
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
          var B = u(1), M = B.Obj;
          function R(Q, H, ie) {
            Q instanceof H && ie.push(Q), Q instanceof T && Q.findAll(H, ie);
          }
          var T = /* @__PURE__ */ function(Q) {
            g(H, Q);
            function H() {
              return Q.apply(this, arguments) || this;
            }
            var ie = H.prototype;
            return ie.init = function(oe, ce) {
              for (var _e = arguments, Se = this, Ie = arguments.length, Pt = new Array(Ie > 2 ? Ie - 2 : 0), Pe = 2; Pe < Ie; Pe++)
                Pt[Pe - 2] = arguments[Pe];
              this.lineno = oe, this.colno = ce, this.fields.forEach(function(Ft, Mt) {
                var it = _e[Mt + 2];
                it === void 0 && (it = null), Se[Ft] = it;
              });
            }, ie.findAll = function(oe, ce) {
              var _e = this;
              return ce = ce || [], this instanceof n ? this.children.forEach(function(Se) {
                return R(Se, oe, ce);
              }) : this.fields.forEach(function(Se) {
                return R(_e[Se], oe, ce);
              }), ce;
            }, ie.iterFields = function(oe) {
              var ce = this;
              this.fields.forEach(function(_e) {
                oe(ce[_e], _e);
              });
            }, H;
          }(M), N = /* @__PURE__ */ function(Q) {
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
          }(T), n = /* @__PURE__ */ function(Q) {
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
          }(T), a = n.extend("Root"), l = N.extend("Literal"), b = N.extend("Symbol"), m = n.extend("Group"), E = n.extend("Array"), o = T.extend("Pair", {
            fields: ["key", "value"]
          }), c = n.extend("Dict"), v = T.extend("LookupVal", {
            fields: ["target", "val"]
          }), f = T.extend("If", {
            fields: ["cond", "body", "else_"]
          }), h = f.extend("IfAsync"), _ = T.extend("InlineIf", {
            fields: ["cond", "body", "else_"]
          }), y = T.extend("For", {
            fields: ["arr", "name", "body", "else_"]
          }), A = y.extend("AsyncEach"), I = y.extend("AsyncAll"), C = T.extend("Macro", {
            fields: ["name", "args", "body"]
          }), P = C.extend("Caller"), K = T.extend("Import", {
            fields: ["template", "target", "withContext"]
          }), L = /* @__PURE__ */ function(Q) {
            g(H, Q);
            function H() {
              return Q.apply(this, arguments) || this;
            }
            var ie = H.prototype;
            return ie.init = function(oe, ce, _e, Se, Ie) {
              Q.prototype.init.call(this, oe, ce, _e, Se || new n(), Ie);
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
          }), G = n.extend("Output"), W = T.extend("Capture", {
            fields: ["body"]
          }), se = l.extend("TemplateData"), ye = T.extend("UnaryOp", {
            fields: ["target"]
          }), fe = T.extend("BinOp", {
            fields: ["left", "right"]
          }), ke = fe.extend("In"), O = fe.extend("Is"), F = fe.extend("Or"), V = fe.extend("And"), U = ye.extend("Not"), Y = fe.extend("Add"), J = fe.extend("Concat"), ae = fe.extend("Sub"), ee = fe.extend("Mul"), le = fe.extend("Div"), we = fe.extend("FloorDiv"), be = fe.extend("Mod"), Oe = fe.extend("Pow"), Nt = ye.extend("Neg"), Ct = ye.extend("Pos"), Rt = T.extend("Compare", {
            fields: ["expr", "ops"]
          }), It = T.extend("CompareOperand", {
            fields: ["expr", "type"]
          }), rt = T.extend("CallExtension", {
            init: function(H, ie, re, oe) {
              this.parent(), this.extName = H.__name || H, this.prop = ie, this.args = re || new n(), this.contentArgs = oe || [], this.autoescape = H.autoescape;
            },
            fields: ["extName", "prop", "args", "contentArgs"]
          }), Bt = rt.extend("CallExtensionAsync");
          function Ce(Q, H, ie) {
            var re = Q.split(`
`);
            re.forEach(function(oe, ce) {
              oe && (ie && ce > 0 || !ie) && process.stdout.write(" ".repeat(H));
              var _e = ce === re.length - 1 ? "" : `
`;
              process.stdout.write("" + oe + _e);
            });
          }
          function Re(Q, H) {
            if (H = H || 0, Ce(Q.typename + ": ", H), Q instanceof n)
              Ce(`
`), Q.children.forEach(function(oe) {
                Re(oe, H + 2);
              });
            else if (Q instanceof rt)
              Ce(Q.extName + "." + Q.prop + `
`), Q.args && Re(Q.args, H + 2), Q.contentArgs && Q.contentArgs.forEach(function(oe) {
                Re(oe, H + 2);
              });
            else {
              var ie = [], re = null;
              Q.iterFields(function(oe, ce) {
                oe instanceof T ? ie.push([ce, oe]) : (re = re || {}, re[ce] = oe);
              }), re ? Ce(JSON.stringify(re, null, 2) + `
`, null, !0) : Ce(`
`), ie.forEach(function(oe) {
                var ce = oe[0], _e = oe[1];
                Ce("[" + ce + "] =>", H + 2), Re(_e, H + 4);
              });
            }
          }
          t.exports = {
            Node: T,
            Root: a,
            NodeList: n,
            Value: N,
            Literal: l,
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
            AsyncAll: I,
            Macro: C,
            Caller: P,
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
            Neg: Nt,
            Pos: Ct,
            Compare: Rt,
            CompareOperand: It,
            CallExtension: rt,
            CallExtensionAsync: Bt,
            printNodes: Re
          };
        },
        /* 4 */
        /***/
        function(t, i) {
        },
        /* 5 */
        /***/
        function(t, i, u) {
          function r(l, b) {
            l.prototype = Object.create(b.prototype), l.prototype.constructor = l, p(l, b);
          }
          function p(l, b) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(E, o) {
              return E.__proto__ = o, E;
            }, p(l, b);
          }
          var d = u(8), k = u(17), g = u(3), x = u(0), B = x.TemplateError, M = u(2), R = M.Frame, T = u(1), N = T.Obj, n = {
            "==": "==",
            "===": "===",
            "!=": "!=",
            "!==": "!==",
            "<": "<",
            ">": ">",
            "<=": "<=",
            ">=": ">="
          }, a = /* @__PURE__ */ function(l) {
            r(b, l);
            function b() {
              return l.apply(this, arguments) || this;
            }
            var m = b.prototype;
            return m.init = function(o, c) {
              this.templateName = o, this.codebuf = [], this.lastId = 0, this.buffer = null, this.bufferStack = [], this._scopeClosers = "", this.inBlock = !1, this.throwOnUndefined = c;
            }, m.fail = function(o, c, v) {
              throw c !== void 0 && (c += 1), v !== void 0 && (v += 1), new B(o, c, v);
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
              if (v || this._emit(this.buffer + " += runtime.suppressValue("), this._emit('env.getExtension("' + o.extName + '")["' + o.prop + '"]('), this._emit("context"), (h || _) && this._emit(","), h && (h instanceof g.NodeList || this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"), h.children.forEach(function(I, C) {
                f._compileExpression(I, c), (C !== h.children.length - 1 || _.length) && f._emit(",");
              })), _.length && _.forEach(function(I, C) {
                if (C > 0 && f._emit(","), I) {
                  f._emitLine("function(cb) {"), f._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");
                  var P = f._pushBuffer();
                  f._withScopedSyntax(function() {
                    f.compile(I, c), f._emitLine("cb(null, " + P + ");");
                  }), f._popBuffer(), f._emitLine("return " + P + ";"), f._emitLine("}");
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
                v._emit(" " + n[f.type] + " "), v.compile(f.expr, c);
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
                var y = o.name.children, A = y[0], I = y[1], C = this._tmpid(), P = this._tmpid();
                c.set(A.value, C), c.set(I.value, P), this._emitLine(f + " = -1;"), this._emitLine("var " + h + " = runtime.keys(" + _ + ").length;"), this._emitLine("for(var " + C + " in " + _ + ") {"), this._emitLine(f + "++;"), this._emitLine("var " + P + " = " + _ + "[" + C + "];"), this._emitLine('frame.set("' + A.value + '", ' + C + ");"), this._emitLine('frame.set("' + I.value + '", ' + P + ");"), this._emitLoopBindings(o, _, f, h), this._withScopedSyntax(function() {
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
                var I = o.name.children.length;
                this._emit("runtime." + A + "(" + y + ", " + I + ", function("), o.name.children.forEach(function(K) {
                  f._emit(K.value + ",");
                }), this._emit(h + "," + _ + ",next) {"), o.name.children.forEach(function(K) {
                  var L = K.value;
                  c.set(L, L), f._emitLine('frame.set("' + L + '", ' + L + ");");
                });
              } else {
                var C = o.name.value;
                this._emitLine("runtime." + A + "(" + y + ", 1, function(" + C + ", " + h + ", " + _ + ",next) {"), this._emitLine('frame.set("' + C + '", ' + C + ");"), c.set(C, C);
              }
              this._emitLoopBindings(o, y, h, _), this._withScopedSyntax(function() {
                var K;
                v && (K = f._pushBuffer()), f.compile(o.body, c), f._emitLine("next(" + h + (K ? "," + K : "") + ");"), v && f._popBuffer();
              });
              var P = this._tmpid();
              this._emitLine("}, " + this._makeCallback(P)), this._addScopeLevel(), v && this._emitLine(this.buffer + " += " + P + ";"), o.else_ && (this._emitLine("if (!" + y + ".length) {"), this.compile(o.else_, c), this._emitLine("}")), this._emitLine("frame = frame.pop();");
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
              }), ["kwargs"]), I = f.map(function(L) {
                return '"' + L.value + '"';
              }), C = (h && h.children || []).map(function(L) {
                return '"' + L.key.value + '"';
              }), P;
              y ? P = c.push(!0) : P = new R(), this._emitLines("var " + _ + " = runtime.makeMacro(", "[" + I.join(", ") + "], ", "[" + C.join(", ") + "], ", "function (" + A.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (y ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'), f.forEach(function(L) {
                v._emitLine('frame.set("' + L.value + '", l_' + L.value + ");"), P.set(L.value, "l_" + L.value);
              }), h && h.children.forEach(function(L) {
                var w = L.key.value;
                v._emit('frame.set("' + w + '", '), v._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + w + '")'), v._emit(' ? kwargs["' + w + '"] : '), v._compileExpression(L.value, P), v._emit(");");
              });
              var K = this._pushBuffer();
              return this._withScopedSyntax(function() {
                v.compile(o.body, P);
              }), this._emitLine("frame = " + (y ? "frame.pop();" : "callerFrame;")), this._emitLine("return new runtime.SafeString(" + K + ");"), this._emitLine("});"), this._popBuffer(), _;
            }, m.compileMacro = function(o, c) {
              var v = this._compileMacro(o), f = o.name.value;
              c.set(f, v), c.parent ? this._emitLine('frame.set("' + f + '", ' + v + ");") : (o.name.value.charAt(0) !== "_" && this._emitLine('context.addExport("' + f + '");'), this._emitLine('context.setVariable("' + f + '", ' + v + ");"));
            }, m.compileCaller = function(o, c) {
              this._emit("(function (){");
              var v = this._compileMacro(o, c);
              this._emit("return " + v + ";})()");
            }, m._compileGetTemplate = function(o, c, v, f) {
              var h = this._tmpid(), _ = this._templateName(), y = this._makeCallback(h), A = v ? "true" : "false", I = f ? "true" : "false";
              return this._emit("env.getTemplate("), this._compileExpression(o.template, c), this._emitLine(", " + A + ", " + _ + ", " + I + ", " + y), h;
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
              c && this.fail("compileRoot: root node can't have frame"), c = new R(), this._emitFuncBegin(o, "root"), this._emitLine("var parentTemplate = null;"), this._compileChildren(o, c), this._emitLine("if(parentTemplate) {"), this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"), this._emitLine("} else {"), this._emitLine("cb(null, " + this.buffer + ");"), this._emitLine("}"), this._emitFuncEnd(!0), this.inBlock = !0;
              var f = [], h = o.findAll(g.Block);
              h.forEach(function(_, y) {
                var A = _.name.value;
                if (f.indexOf(A) !== -1)
                  throw new Error('Block "' + A + '" defined more than once.');
                f.push(A), v._emitFuncBegin(_, "b_" + A);
                var I = new R();
                v._emitLine("var frame = frame.push(true);"), v.compile(_.body, I), v._emitFuncEnd();
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
          }(N);
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
        function(t, i, u) {
          function r(x, B) {
            x.prototype = Object.create(B.prototype), x.prototype.constructor = x, p(x, B);
          }
          function p(x, B) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(R, T) {
              return R.__proto__ = T, R;
            }, p(x, B);
          }
          var d = u(4), k = u(1), g = k.EmitterObj;
          t.exports = /* @__PURE__ */ function(x) {
            r(B, x);
            function B() {
              return x.apply(this, arguments) || this;
            }
            var M = B.prototype;
            return M.resolve = function(T, N) {
              return d.resolve(d.dirname(T), N);
            }, M.isRelative = function(T) {
              return T.indexOf("./") === 0 || T.indexOf("../") === 0;
            }, B;
          }(g);
        },
        /* 7 */
        /***/
        function(t, i, u) {
          function r(I, C) {
            I.prototype = Object.create(C.prototype), I.prototype.constructor = I, p(I, C);
          }
          function p(I, C) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(K, L) {
              return K.__proto__ = L, K;
            }, p(I, C);
          }
          var d = u(12), k = u(15), g = u(0), x = u(5), B = u(18), M = u(10), R = M.FileSystemLoader, T = M.WebLoader, N = M.PrecompiledLoader, n = u(20), a = u(21), l = u(1), b = l.Obj, m = l.EmitterObj, E = u(2), o = E.handleError, c = E.Frame, v = u(22);
          function f(I, C, P) {
            d(function() {
              I(C, P);
            });
          }
          var h = {
            type: "code",
            obj: {
              root: function(C, P, K, L, w) {
                try {
                  w(null, "");
                } catch (S) {
                  w(o(S, null, null));
                }
              }
            }
          }, _ = /* @__PURE__ */ function(I) {
            r(C, I);
            function C() {
              return I.apply(this, arguments) || this;
            }
            var P = C.prototype;
            return P.init = function(L, w) {
              var S = this;
              w = this.opts = w || {}, this.opts.dev = !!w.dev, this.opts.autoescape = w.autoescape != null ? w.autoescape : !0, this.opts.throwOnUndefined = !!w.throwOnUndefined, this.opts.trimBlocks = !!w.trimBlocks, this.opts.lstripBlocks = !!w.lstripBlocks, this.loaders = [], L ? this.loaders = g.isArray(L) ? L : [L] : R ? this.loaders = [new R("views")] : T && (this.loaders = [new T("/views")]), typeof window < "u" && window.nunjucksPrecompiled && this.loaders.unshift(new N(window.nunjucksPrecompiled)), this._initLoaders(), this.globals = a(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], g._entries(B).forEach(function(j) {
                var D = j[0], $ = j[1];
                return S.addFilter(D, $);
              }), g._entries(n).forEach(function(j) {
                var D = j[0], $ = j[1];
                return S.addTest(D, $);
              });
            }, P._initLoaders = function() {
              var L = this;
              this.loaders.forEach(function(w) {
                w.cache = {}, typeof w.on == "function" && (w.on("update", function(S, j) {
                  w.cache[S] = null, L.emit("update", S, j, w);
                }), w.on("load", function(S, j) {
                  L.emit("load", S, j, w);
                }));
              });
            }, P.invalidateCache = function() {
              this.loaders.forEach(function(L) {
                L.cache = {};
              });
            }, P.addExtension = function(L, w) {
              return w.__name = L, this.extensions[L] = w, this.extensionsList.push(w), this;
            }, P.removeExtension = function(L) {
              var w = this.getExtension(L);
              w && (this.extensionsList = g.without(this.extensionsList, w), delete this.extensions[L]);
            }, P.getExtension = function(L) {
              return this.extensions[L];
            }, P.hasExtension = function(L) {
              return !!this.extensions[L];
            }, P.addGlobal = function(L, w) {
              return this.globals[L] = w, this;
            }, P.getGlobal = function(L) {
              if (typeof this.globals[L] > "u")
                throw new Error("global not found: " + L);
              return this.globals[L];
            }, P.addFilter = function(L, w, S) {
              var j = w;
              return S && this.asyncFilters.push(L), this.filters[L] = j, this;
            }, P.getFilter = function(L) {
              if (!this.filters[L])
                throw new Error("filter not found: " + L);
              return this.filters[L];
            }, P.addTest = function(L, w) {
              return this.tests[L] = w, this;
            }, P.getTest = function(L) {
              if (!this.tests[L])
                throw new Error("test not found: " + L);
              return this.tests[L];
            }, P.resolveTemplate = function(L, w, S) {
              var j = L.isRelative && w ? L.isRelative(S) : !1;
              return j && L.resolve ? L.resolve(w, S) : S;
            }, P.getTemplate = function(L, w, S, j, D) {
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
            }, P.express = function(L) {
              return v(this, L);
            }, P.render = function(L, w, S) {
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
            }, P.renderString = function(L, w, S, j) {
              g.isFunction(S) && (j = S, S = {}), S = S || {};
              var D = new A(L, this, S.path);
              return D.render(w, j);
            }, P.waterfall = function(L, w, S) {
              return k(L, w, S);
            }, C;
          }(m), y = /* @__PURE__ */ function(I) {
            r(C, I);
            function C() {
              return I.apply(this, arguments) || this;
            }
            var P = C.prototype;
            return P.init = function(L, w, S) {
              var j = this;
              this.env = S || new _(), this.ctx = g.extend({}, L), this.blocks = {}, this.exported = [], g.keys(w).forEach(function(D) {
                j.addBlock(D, w[D]);
              });
            }, P.lookup = function(L) {
              return L in this.env.globals && !(L in this.ctx) ? this.env.globals[L] : this.ctx[L];
            }, P.setVariable = function(L, w) {
              this.ctx[L] = w;
            }, P.getVariables = function() {
              return this.ctx;
            }, P.addBlock = function(L, w) {
              return this.blocks[L] = this.blocks[L] || [], this.blocks[L].push(w), this;
            }, P.getBlock = function(L) {
              if (!this.blocks[L])
                throw new Error('unknown block "' + L + '"');
              return this.blocks[L][0];
            }, P.getSuper = function(L, w, S, j, D, $) {
              var ne = g.indexOf(this.blocks[w] || [], S), z = this.blocks[w][ne + 1], ue = this;
              if (ne === -1 || !z)
                throw new Error('no super block available for "' + w + '"');
              z(L, ue, j, D, $);
            }, P.addExport = function(L) {
              this.exported.push(L);
            }, P.getExported = function() {
              var L = this, w = {};
              return this.exported.forEach(function(S) {
                w[S] = L.ctx[S];
              }), w;
            }, C;
          }(b), A = /* @__PURE__ */ function(I) {
            r(C, I);
            function C() {
              return I.apply(this, arguments) || this;
            }
            var P = C.prototype;
            return P.init = function(L, w, S, j) {
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
            }, P.render = function(L, w, S) {
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
            }, P.getExported = function(L, w, S) {
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
            }, P.compile = function() {
              this.compiled || this._compile();
            }, P._compile = function() {
              var L;
              if (this.tmplProps)
                L = this.tmplProps;
              else {
                var w = x.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), S = new Function(w);
                L = S();
              }
              this.blocks = this._getBlocks(L), this.rootRenderFunc = L.root, this.compiled = !0;
            }, P._getBlocks = function(L) {
              var w = {};
              return g.keys(L).forEach(function(S) {
                S.slice(0, 2) === "b_" && (w[S.slice(2)] = L[S]);
              }), w;
            }, C;
          }(b);
          t.exports = {
            Environment: _,
            Template: A
          };
        },
        /* 8 */
        /***/
        function(t, i, u) {
          function r(M, R) {
            M.prototype = Object.create(R.prototype), M.prototype.constructor = M, p(M, R);
          }
          function p(M, R) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(N, n) {
              return N.__proto__ = n, N;
            }, p(M, R);
          }
          var d = u(9), k = u(3), g = u(1).Obj, x = u(0), B = /* @__PURE__ */ function(M) {
            r(R, M);
            function R() {
              return M.apply(this, arguments) || this;
            }
            var T = R.prototype;
            return T.init = function(n) {
              this.tokens = n, this.peeked = null, this.breakOnBlocks = null, this.dropLeadingWhitespace = !1, this.extensions = [];
            }, T.nextToken = function(n) {
              var a;
              if (this.peeked)
                if (!n && this.peeked.type === d.TOKEN_WHITESPACE)
                  this.peeked = null;
                else
                  return a = this.peeked, this.peeked = null, a;
              if (a = this.tokens.nextToken(), !n)
                for (; a && a.type === d.TOKEN_WHITESPACE; )
                  a = this.tokens.nextToken();
              return a;
            }, T.peekToken = function() {
              return this.peeked = this.peeked || this.nextToken(), this.peeked;
            }, T.pushToken = function(n) {
              if (this.peeked)
                throw new Error("pushToken: can only push one token on between reads");
              this.peeked = n;
            }, T.error = function(n, a, l) {
              if (a === void 0 || l === void 0) {
                var b = this.peekToken() || {};
                a = b.lineno, l = b.colno;
              }
              return a !== void 0 && (a += 1), l !== void 0 && (l += 1), new x.TemplateError(n, a, l);
            }, T.fail = function(n, a, l) {
              throw this.error(n, a, l);
            }, T.skip = function(n) {
              var a = this.nextToken();
              return !a || a.type !== n ? (this.pushToken(a), !1) : !0;
            }, T.expect = function(n) {
              var a = this.nextToken();
              return a.type !== n && this.fail("expected " + n + ", got " + a.type, a.lineno, a.colno), a;
            }, T.skipValue = function(n, a) {
              var l = this.nextToken();
              return !l || l.type !== n || l.value !== a ? (this.pushToken(l), !1) : !0;
            }, T.skipSymbol = function(n) {
              return this.skipValue(d.TOKEN_SYMBOL, n);
            }, T.advanceAfterBlockEnd = function(n) {
              var a;
              return n || (a = this.peekToken(), a || this.fail("unexpected end of file"), a.type !== d.TOKEN_SYMBOL && this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"), n = this.nextToken().value), a = this.nextToken(), a && a.type === d.TOKEN_BLOCK_END ? a.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0) : this.fail("expected block end in " + n + " statement"), a;
            }, T.advanceAfterVariableEnd = function() {
              var n = this.nextToken();
              n && n.type === d.TOKEN_VARIABLE_END ? this.dropLeadingWhitespace = n.value.charAt(n.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-" : (this.pushToken(n), this.fail("expected variable end"));
            }, T.parseFor = function() {
              var n = this.peekToken(), a, l;
              this.skipSymbol("for") ? (a = new k.For(n.lineno, n.colno), l = "endfor") : this.skipSymbol("asyncEach") ? (a = new k.AsyncEach(n.lineno, n.colno), l = "endeach") : this.skipSymbol("asyncAll") ? (a = new k.AsyncAll(n.lineno, n.colno), l = "endall") : this.fail("parseFor: expected for{Async}", n.lineno, n.colno), a.name = this.parsePrimary(), a.name instanceof k.Symbol || this.fail("parseFor: variable name expected for loop");
              var b = this.peekToken().type;
              if (b === d.TOKEN_COMMA) {
                var m = a.name;
                for (a.name = new k.Array(m.lineno, m.colno), a.name.addChild(m); this.skip(d.TOKEN_COMMA); ) {
                  var E = this.parsePrimary();
                  a.name.addChild(E);
                }
              }
              return this.skipSymbol("in") || this.fail('parseFor: expected "in" keyword for loop', n.lineno, n.colno), a.arr = this.parseExpression(), this.advanceAfterBlockEnd(n.value), a.body = this.parseUntilBlocks(l, "else"), this.skipSymbol("else") && (this.advanceAfterBlockEnd("else"), a.else_ = this.parseUntilBlocks(l)), this.advanceAfterBlockEnd(), a;
            }, T.parseMacro = function() {
              var n = this.peekToken();
              this.skipSymbol("macro") || this.fail("expected macro");
              var a = this.parsePrimary(!0), l = this.parseSignature(), b = new k.Macro(n.lineno, n.colno, a, l);
              return this.advanceAfterBlockEnd(n.value), b.body = this.parseUntilBlocks("endmacro"), this.advanceAfterBlockEnd(), b;
            }, T.parseCall = function() {
              var n = this.peekToken();
              this.skipSymbol("call") || this.fail("expected call");
              var a = this.parseSignature(!0) || new k.NodeList(), l = this.parsePrimary();
              this.advanceAfterBlockEnd(n.value);
              var b = this.parseUntilBlocks("endcall");
              this.advanceAfterBlockEnd();
              var m = new k.Symbol(n.lineno, n.colno, "caller"), E = new k.Caller(n.lineno, n.colno, m, a, b), o = l.args.children;
              o[o.length - 1] instanceof k.KeywordArgs || o.push(new k.KeywordArgs());
              var c = o[o.length - 1];
              return c.addChild(new k.Pair(n.lineno, n.colno, m, E)), new k.Output(n.lineno, n.colno, [l]);
            }, T.parseWithContext = function() {
              var n = this.peekToken(), a = null;
              return this.skipSymbol("with") ? a = !0 : this.skipSymbol("without") && (a = !1), a !== null && (this.skipSymbol("context") || this.fail("parseFrom: expected context after with/without", n.lineno, n.colno)), a;
            }, T.parseImport = function() {
              var n = this.peekToken();
              this.skipSymbol("import") || this.fail("parseImport: expected import", n.lineno, n.colno);
              var a = this.parseExpression();
              this.skipSymbol("as") || this.fail('parseImport: expected "as" keyword', n.lineno, n.colno);
              var l = this.parseExpression(), b = this.parseWithContext(), m = new k.Import(n.lineno, n.colno, a, l, b);
              return this.advanceAfterBlockEnd(n.value), m;
            }, T.parseFrom = function() {
              var n = this.peekToken();
              this.skipSymbol("from") || this.fail("parseFrom: expected from");
              var a = this.parseExpression();
              this.skipSymbol("import") || this.fail("parseFrom: expected import", n.lineno, n.colno);
              for (var l = new k.NodeList(), b; ; ) {
                var m = this.peekToken();
                if (m.type === d.TOKEN_BLOCK_END) {
                  l.children.length || this.fail("parseFrom: Expected at least one import name", n.lineno, n.colno), m.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0), this.nextToken();
                  break;
                }
                l.children.length > 0 && !this.skip(d.TOKEN_COMMA) && this.fail("parseFrom: expected comma", n.lineno, n.colno);
                var E = this.parsePrimary();
                if (E.value.charAt(0) === "_" && this.fail("parseFrom: names starting with an underscore cannot be imported", E.lineno, E.colno), this.skipSymbol("as")) {
                  var o = this.parsePrimary();
                  l.addChild(new k.Pair(E.lineno, E.colno, E, o));
                } else
                  l.addChild(E);
                b = this.parseWithContext();
              }
              return new k.FromImport(n.lineno, n.colno, a, l, b);
            }, T.parseBlock = function() {
              var n = this.peekToken();
              this.skipSymbol("block") || this.fail("parseBlock: expected block", n.lineno, n.colno);
              var a = new k.Block(n.lineno, n.colno);
              a.name = this.parsePrimary(), a.name instanceof k.Symbol || this.fail("parseBlock: variable name expected", n.lineno, n.colno), this.advanceAfterBlockEnd(n.value), a.body = this.parseUntilBlocks("endblock"), this.skipSymbol("endblock"), this.skipSymbol(a.name.value);
              var l = this.peekToken();
              return l || this.fail("parseBlock: expected endblock, got end of file"), this.advanceAfterBlockEnd(l.value), a;
            }, T.parseExtends = function() {
              var n = "extends", a = this.peekToken();
              this.skipSymbol(n) || this.fail("parseTemplateRef: expected " + n);
              var l = new k.Extends(a.lineno, a.colno);
              return l.template = this.parseExpression(), this.advanceAfterBlockEnd(a.value), l;
            }, T.parseInclude = function() {
              var n = "include", a = this.peekToken();
              this.skipSymbol(n) || this.fail("parseInclude: expected " + n);
              var l = new k.Include(a.lineno, a.colno);
              return l.template = this.parseExpression(), this.skipSymbol("ignore") && this.skipSymbol("missing") && (l.ignoreMissing = !0), this.advanceAfterBlockEnd(a.value), l;
            }, T.parseIf = function() {
              var n = this.peekToken(), a;
              this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif") ? a = new k.If(n.lineno, n.colno) : this.skipSymbol("ifAsync") ? a = new k.IfAsync(n.lineno, n.colno) : this.fail("parseIf: expected if, elif, or elseif", n.lineno, n.colno), a.cond = this.parseExpression(), this.advanceAfterBlockEnd(n.value), a.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
              var l = this.peekToken();
              switch (l && l.value) {
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
              var n = this.peekToken();
              this.skipSymbol("set") || this.fail("parseSet: expected set", n.lineno, n.colno);
              for (var a = new k.Set(n.lineno, n.colno, []), l; (l = this.parsePrimary()) && (a.targets.push(l), !!this.skip(d.TOKEN_COMMA)); )
                ;
              return this.skipValue(d.TOKEN_OPERATOR, "=") ? (a.value = this.parseExpression(), this.advanceAfterBlockEnd(n.value)) : this.skip(d.TOKEN_BLOCK_END) ? (a.body = new k.Capture(n.lineno, n.colno, this.parseUntilBlocks("endset")), a.value = null, this.advanceAfterBlockEnd()) : this.fail("parseSet: expected = or block end in set tag", n.lineno, n.colno), a;
            }, T.parseSwitch = function() {
              var n = "switch", a = "endswitch", l = "case", b = "default", m = this.peekToken();
              !this.skipSymbol(n) && !this.skipSymbol(l) && !this.skipSymbol(b) && this.fail('parseSwitch: expected "switch," "case" or "default"', m.lineno, m.colno);
              var E = this.parseExpression();
              this.advanceAfterBlockEnd(n), this.parseUntilBlocks(l, b, a);
              var o = this.peekToken(), c = [], v;
              do {
                this.skipSymbol(l);
                var f = this.parseExpression();
                this.advanceAfterBlockEnd(n);
                var h = this.parseUntilBlocks(l, b, a);
                c.push(new k.Case(o.line, o.col, f, h)), o = this.peekToken();
              } while (o && o.value === l);
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
              var n = this.peekToken(), a;
              if (n.type !== d.TOKEN_SYMBOL && this.fail("tag name expected", n.lineno, n.colno), this.breakOnBlocks && x.indexOf(this.breakOnBlocks, n.value) !== -1)
                return null;
              switch (n.value) {
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
                    for (var l = 0; l < this.extensions.length; l++) {
                      var b = this.extensions[l];
                      if (x.indexOf(b.tags || [], n.value) !== -1)
                        return b.parse(this, k, d);
                    }
                  this.fail("unknown block tag: " + n.value, n.lineno, n.colno);
              }
              return a;
            }, T.parseRaw = function(n) {
              n = n || "raw";
              for (var a = "end" + n, l = new RegExp("([\\s\\S]*?){%\\s*(" + n + "|" + a + ")\\s*(?=%})%}"), b = 1, m = "", E = null, o = this.advanceAfterBlockEnd(); (E = this.tokens._extractRegex(l)) && b > 0; ) {
                var c = E[0], v = E[1], f = E[2];
                f === n ? b += 1 : f === a && (b -= 1), b === 0 ? (m += v, this.tokens.backN(c.length - v.length)) : m += c;
              }
              return new k.Output(o.lineno, o.colno, [new k.TemplateData(o.lineno, o.colno, m)]);
            }, T.parsePostfix = function(n) {
              for (var a, l = this.peekToken(); l; ) {
                if (l.type === d.TOKEN_LEFT_PAREN)
                  n = new k.FunCall(l.lineno, l.colno, n, this.parseSignature());
                else if (l.type === d.TOKEN_LEFT_BRACKET)
                  a = this.parseAggregate(), a.children.length > 1 && this.fail("invalid index"), n = new k.LookupVal(l.lineno, l.colno, n, a.children[0]);
                else if (l.type === d.TOKEN_OPERATOR && l.value === ".") {
                  this.nextToken();
                  var b = this.nextToken();
                  b.type !== d.TOKEN_SYMBOL && this.fail("expected name as lookup value, got " + b.value, b.lineno, b.colno), a = new k.Literal(b.lineno, b.colno, b.value), n = new k.LookupVal(l.lineno, l.colno, n, a);
                } else
                  break;
                l = this.peekToken();
              }
              return n;
            }, T.parseExpression = function() {
              var n = this.parseInlineIf();
              return n;
            }, T.parseInlineIf = function() {
              var n = this.parseOr();
              if (this.skipSymbol("if")) {
                var a = this.parseOr(), l = n;
                n = new k.InlineIf(n.lineno, n.colno), n.body = l, n.cond = a, this.skipSymbol("else") ? n.else_ = this.parseOr() : n.else_ = null;
              }
              return n;
            }, T.parseOr = function() {
              for (var n = this.parseAnd(); this.skipSymbol("or"); ) {
                var a = this.parseAnd();
                n = new k.Or(n.lineno, n.colno, n, a);
              }
              return n;
            }, T.parseAnd = function() {
              for (var n = this.parseNot(); this.skipSymbol("and"); ) {
                var a = this.parseNot();
                n = new k.And(n.lineno, n.colno, n, a);
              }
              return n;
            }, T.parseNot = function() {
              var n = this.peekToken();
              return this.skipSymbol("not") ? new k.Not(n.lineno, n.colno, this.parseNot()) : this.parseIn();
            }, T.parseIn = function() {
              for (var n = this.parseIs(); ; ) {
                var a = this.nextToken();
                if (!a)
                  break;
                var l = a.type === d.TOKEN_SYMBOL && a.value === "not";
                if (l || this.pushToken(a), this.skipSymbol("in")) {
                  var b = this.parseIs();
                  n = new k.In(n.lineno, n.colno, n, b), l && (n = new k.Not(n.lineno, n.colno, n));
                } else {
                  l && this.pushToken(a);
                  break;
                }
              }
              return n;
            }, T.parseIs = function() {
              var n = this.parseCompare();
              if (this.skipSymbol("is")) {
                var a = this.skipSymbol("not"), l = this.parseCompare();
                n = new k.Is(n.lineno, n.colno, n, l), a && (n = new k.Not(n.lineno, n.colno, n));
              }
              return n;
            }, T.parseCompare = function() {
              for (var n = ["==", "===", "!=", "!==", "<", ">", "<=", ">="], a = this.parseConcat(), l = []; ; ) {
                var b = this.nextToken();
                if (b)
                  if (n.indexOf(b.value) !== -1)
                    l.push(new k.CompareOperand(b.lineno, b.colno, this.parseConcat(), b.value));
                  else {
                    this.pushToken(b);
                    break;
                  }
                else
                  break;
              }
              return l.length ? new k.Compare(l[0].lineno, l[0].colno, a, l) : a;
            }, T.parseConcat = function() {
              for (var n = this.parseAdd(); this.skipValue(d.TOKEN_TILDE, "~"); ) {
                var a = this.parseAdd();
                n = new k.Concat(n.lineno, n.colno, n, a);
              }
              return n;
            }, T.parseAdd = function() {
              for (var n = this.parseSub(); this.skipValue(d.TOKEN_OPERATOR, "+"); ) {
                var a = this.parseSub();
                n = new k.Add(n.lineno, n.colno, n, a);
              }
              return n;
            }, T.parseSub = function() {
              for (var n = this.parseMul(); this.skipValue(d.TOKEN_OPERATOR, "-"); ) {
                var a = this.parseMul();
                n = new k.Sub(n.lineno, n.colno, n, a);
              }
              return n;
            }, T.parseMul = function() {
              for (var n = this.parseDiv(); this.skipValue(d.TOKEN_OPERATOR, "*"); ) {
                var a = this.parseDiv();
                n = new k.Mul(n.lineno, n.colno, n, a);
              }
              return n;
            }, T.parseDiv = function() {
              for (var n = this.parseFloorDiv(); this.skipValue(d.TOKEN_OPERATOR, "/"); ) {
                var a = this.parseFloorDiv();
                n = new k.Div(n.lineno, n.colno, n, a);
              }
              return n;
            }, T.parseFloorDiv = function() {
              for (var n = this.parseMod(); this.skipValue(d.TOKEN_OPERATOR, "//"); ) {
                var a = this.parseMod();
                n = new k.FloorDiv(n.lineno, n.colno, n, a);
              }
              return n;
            }, T.parseMod = function() {
              for (var n = this.parsePow(); this.skipValue(d.TOKEN_OPERATOR, "%"); ) {
                var a = this.parsePow();
                n = new k.Mod(n.lineno, n.colno, n, a);
              }
              return n;
            }, T.parsePow = function() {
              for (var n = this.parseUnary(); this.skipValue(d.TOKEN_OPERATOR, "**"); ) {
                var a = this.parseUnary();
                n = new k.Pow(n.lineno, n.colno, n, a);
              }
              return n;
            }, T.parseUnary = function(n) {
              var a = this.peekToken(), l;
              return this.skipValue(d.TOKEN_OPERATOR, "-") ? l = new k.Neg(a.lineno, a.colno, this.parseUnary(!0)) : this.skipValue(d.TOKEN_OPERATOR, "+") ? l = new k.Pos(a.lineno, a.colno, this.parseUnary(!0)) : l = this.parsePrimary(), n || (l = this.parseFilter(l)), l;
            }, T.parsePrimary = function(n) {
              var a = this.nextToken(), l, b = null;
              if (a ? a.type === d.TOKEN_STRING ? l = a.value : a.type === d.TOKEN_INT ? l = parseInt(a.value, 10) : a.type === d.TOKEN_FLOAT ? l = parseFloat(a.value) : a.type === d.TOKEN_BOOLEAN ? a.value === "true" ? l = !0 : a.value === "false" ? l = !1 : this.fail("invalid boolean: " + a.value, a.lineno, a.colno) : a.type === d.TOKEN_NONE ? l = null : a.type === d.TOKEN_REGEX && (l = new RegExp(a.value.body, a.value.flags)) : this.fail("expected expression, got end of file"), l !== void 0 ? b = new k.Literal(a.lineno, a.colno, l) : a.type === d.TOKEN_SYMBOL ? b = new k.Symbol(a.lineno, a.colno, a.value) : (this.pushToken(a), b = this.parseAggregate()), n || (b = this.parsePostfix(b)), b)
                return b;
              throw this.error("unexpected token: " + a.value, a.lineno, a.colno);
            }, T.parseFilterName = function() {
              for (var n = this.expect(d.TOKEN_SYMBOL), a = n.value; this.skipValue(d.TOKEN_OPERATOR, "."); )
                a += "." + this.expect(d.TOKEN_SYMBOL).value;
              return new k.Symbol(n.lineno, n.colno, a);
            }, T.parseFilterArgs = function(n) {
              if (this.peekToken().type === d.TOKEN_LEFT_PAREN) {
                var a = this.parsePostfix(n);
                return a.args.children;
              }
              return [];
            }, T.parseFilter = function(n) {
              for (; this.skip(d.TOKEN_PIPE); ) {
                var a = this.parseFilterName();
                n = new k.Filter(a.lineno, a.colno, a, new k.NodeList(a.lineno, a.colno, [n].concat(this.parseFilterArgs(n))));
              }
              return n;
            }, T.parseFilterStatement = function() {
              var n = this.peekToken();
              this.skipSymbol("filter") || this.fail("parseFilterStatement: expected filter");
              var a = this.parseFilterName(), l = this.parseFilterArgs(a);
              this.advanceAfterBlockEnd(n.value);
              var b = new k.Capture(a.lineno, a.colno, this.parseUntilBlocks("endfilter"));
              this.advanceAfterBlockEnd();
              var m = new k.Filter(a.lineno, a.colno, a, new k.NodeList(a.lineno, a.colno, [b].concat(l)));
              return new k.Output(a.lineno, a.colno, [m]);
            }, T.parseAggregate = function() {
              var n = this.nextToken(), a;
              switch (n.type) {
                case d.TOKEN_LEFT_PAREN:
                  a = new k.Group(n.lineno, n.colno);
                  break;
                case d.TOKEN_LEFT_BRACKET:
                  a = new k.Array(n.lineno, n.colno);
                  break;
                case d.TOKEN_LEFT_CURLY:
                  a = new k.Dict(n.lineno, n.colno);
                  break;
                default:
                  return null;
              }
              for (; ; ) {
                var l = this.peekToken().type;
                if (l === d.TOKEN_RIGHT_PAREN || l === d.TOKEN_RIGHT_BRACKET || l === d.TOKEN_RIGHT_CURLY) {
                  this.nextToken();
                  break;
                }
                if (a.children.length > 0 && (this.skip(d.TOKEN_COMMA) || this.fail("parseAggregate: expected comma after expression", n.lineno, n.colno)), a instanceof k.Dict) {
                  var b = this.parsePrimary();
                  this.skip(d.TOKEN_COLON) || this.fail("parseAggregate: expected colon after dict key", n.lineno, n.colno);
                  var m = this.parseExpression();
                  a.addChild(new k.Pair(b.lineno, b.colno, b, m));
                } else {
                  var E = this.parseExpression();
                  a.addChild(E);
                }
              }
              return a;
            }, T.parseSignature = function(n, a) {
              var l = this.peekToken();
              if (!a && l.type !== d.TOKEN_LEFT_PAREN) {
                if (n)
                  return null;
                this.fail("expected arguments", l.lineno, l.colno);
              }
              l.type === d.TOKEN_LEFT_PAREN && (l = this.nextToken());
              for (var b = new k.NodeList(l.lineno, l.colno), m = new k.KeywordArgs(l.lineno, l.colno), E = !1; ; ) {
                if (l = this.peekToken(), !a && l.type === d.TOKEN_RIGHT_PAREN) {
                  this.nextToken();
                  break;
                } else if (a && l.type === d.TOKEN_BLOCK_END)
                  break;
                if (E && !this.skip(d.TOKEN_COMMA))
                  this.fail("parseSignature: expected comma after expression", l.lineno, l.colno);
                else {
                  var o = this.parseExpression();
                  this.skipValue(d.TOKEN_OPERATOR, "=") ? m.addChild(new k.Pair(o.lineno, o.colno, o, this.parseExpression())) : b.addChild(o);
                }
                E = !0;
              }
              return m.children.length && b.addChild(m), b;
            }, T.parseUntilBlocks = function() {
              for (var n = this.breakOnBlocks, a = arguments.length, l = new Array(a), b = 0; b < a; b++)
                l[b] = arguments[b];
              this.breakOnBlocks = l;
              var m = this.parse();
              return this.breakOnBlocks = n, m;
            }, T.parseNodes = function() {
              for (var n, a = []; n = this.nextToken(); )
                if (n.type === d.TOKEN_DATA) {
                  var l = n.value, b = this.peekToken(), m = b && b.value;
                  this.dropLeadingWhitespace && (l = l.replace(/^\s*/, ""), this.dropLeadingWhitespace = !1), b && (b.type === d.TOKEN_BLOCK_START && m.charAt(m.length - 1) === "-" || b.type === d.TOKEN_VARIABLE_START && m.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || b.type === d.TOKEN_COMMENT && m.charAt(this.tokens.tags.COMMENT_START.length) === "-") && (l = l.replace(/\s*$/, "")), a.push(new k.Output(n.lineno, n.colno, [new k.TemplateData(n.lineno, n.colno, l)]));
                } else if (n.type === d.TOKEN_BLOCK_START) {
                  this.dropLeadingWhitespace = !1;
                  var E = this.parseStatement();
                  if (!E)
                    break;
                  a.push(E);
                } else if (n.type === d.TOKEN_VARIABLE_START) {
                  var o = this.parseExpression();
                  this.dropLeadingWhitespace = !1, this.advanceAfterVariableEnd(), a.push(new k.Output(n.lineno, n.colno, [o]));
                } else
                  n.type === d.TOKEN_COMMENT ? this.dropLeadingWhitespace = n.value.charAt(n.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-" : this.fail("Unexpected token at top-level: " + n.type, n.lineno, n.colno);
              return a;
            }, T.parse = function() {
              return new k.NodeList(0, 0, this.parseNodes());
            }, T.parseAsRoot = function() {
              return new k.Root(0, 0, this.parseNodes());
            }, R;
          }(g);
          t.exports = {
            parse: function(R, T, N) {
              var n = new B(d.lex(R, N));
              return T !== void 0 && (n.extensions = T), n.parseAsRoot();
            },
            Parser: B
          };
        },
        /* 9 */
        /***/
        function(t, i, u) {
          var r = u(0), p = ` 
	\r `, d = "()[]{}%*-+~/#,:|.<>=!", k = "0123456789", g = "{%", x = "%}", B = "{{", M = "}}", R = "{#", T = "#}", N = "string", n = "whitespace", a = "data", l = "block-start", b = "block-end", m = "variable-start", E = "variable-end", o = "comment", c = "left-paren", v = "right-paren", f = "left-bracket", h = "right-bracket", _ = "left-curly", y = "right-curly", A = "operator", I = "comma", C = "colon", P = "tilde", K = "pipe", L = "int", w = "float", S = "boolean", j = "none", D = "symbol", $ = "special", ne = "regex";
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
                VARIABLE_START: G.variableStart || B,
                VARIABLE_END: G.variableEnd || M,
                COMMENT_START: G.commentStart || R,
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
                  return z(N, this._parseString(se), q, G);
                if (W = this._extract(p))
                  return z(n, W, q, G);
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
                  switch (r.indexOf(F, V) !== -1 && (this.forward(), se = V, r.indexOf(F, V + this.current()) !== -1 && (se = V + this.current(), this.forward())), se) {
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
                      U = I;
                      break;
                    case ":":
                      U = C;
                      break;
                    case "~":
                      U = P;
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
                  return this.in_code = !0, z(l, W, q, G);
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
            TOKEN_STRING: N,
            TOKEN_WHITESPACE: n,
            TOKEN_DATA: a,
            TOKEN_BLOCK_START: l,
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
            TOKEN_COMMA: I,
            TOKEN_COLON: C,
            TOKEN_TILDE: P,
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
        function(t, i, u) {
          function r(B, M) {
            B.prototype = Object.create(M.prototype), B.prototype.constructor = B, p(B, M);
          }
          function p(B, M) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(T, N) {
              return T.__proto__ = N, T;
            }, p(B, M);
          }
          var d = u(6), k = u(19), g = k.PrecompiledLoader, x = /* @__PURE__ */ function(B) {
            r(M, B);
            function M(T, N) {
              var n;
              return n = B.call(this) || this, n.baseURL = T || ".", N = N || {}, n.useCache = !!N.useCache, n.async = !!N.async, n;
            }
            var R = M.prototype;
            return R.resolve = function(N, n) {
              throw new Error("relative templates not support in the browser yet");
            }, R.getSource = function(N, n) {
              var a = this, l = this.useCache, b;
              return this.fetch(this.baseURL + "/" + N, function(m, E) {
                if (m)
                  if (n)
                    n(m.content);
                  else if (m.status === 404)
                    b = null;
                  else
                    throw m.content;
                else
                  b = {
                    src: E,
                    path: N,
                    noCache: !l
                  }, a.emit("load", N, b), n && n(null, b);
              }), b;
            }, R.fetch = function(N, n) {
              if (typeof window > "u")
                throw new Error("WebLoader can only by used in a browser");
              var a = new XMLHttpRequest(), l = !0;
              a.onreadystatechange = function() {
                a.readyState === 4 && l && (l = !1, a.status === 0 || a.status === 200 ? n(null, a.responseText) : n({
                  status: a.status,
                  content: a.responseText
                }));
              }, N += (N.indexOf("?") === -1 ? "?" : "&") + "s=" + new Date().getTime(), a.open("GET", N, this.async), a.send();
            }, M;
          }(d);
          t.exports = {
            WebLoader: x,
            PrecompiledLoader: g
          };
        },
        /* 11 */
        /***/
        function(t, i, u) {
          var r = u(0), p = u(7), d = p.Environment, k = p.Template, g = u(6), x = u(10), B = u(23), M = u(5), R = u(8), T = u(9), N = u(2), n = u(3), a = u(25), l;
          function b(m, E) {
            E = E || {}, r.isObject(m) && (E = m, m = null);
            var o;
            return x.FileSystemLoader ? o = new x.FileSystemLoader(m, {
              watch: E.watch,
              noCache: E.noCache
            }) : x.WebLoader && (o = new x.WebLoader(m, {
              useCache: E.web && E.web.useCache,
              async: E.web && E.web.async
            })), l = new d(o, E), E && E.express && l.express(E.express), l;
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
            parser: R,
            lexer: T,
            runtime: N,
            lib: r,
            nodes: n,
            installJinjaCompat: a,
            configure: b,
            reset: function() {
              l = void 0;
            },
            compile: function(E, o, c, v) {
              return l || b(), new k(E, o, c, v);
            },
            render: function(E, o, c) {
              return l || b(), l.render(E, o, c);
            },
            renderString: function(E, o, c) {
              return l || b(), l.renderString(E, o, c);
            },
            precompile: B ? B.precompile : void 0,
            precompileString: B ? B.precompileString : void 0
          };
        },
        /* 12 */
        /***/
        function(t, i, u) {
          var r = u(13), p = [], d = [], k = r.makeRequestCallFromTimer(g);
          function g() {
            if (d.length)
              throw d.shift();
          }
          t.exports = x;
          function x(M) {
            var R;
            p.length ? R = p.pop() : R = new B(), R.task = M, r(R);
          }
          function B() {
            this.task = null;
          }
          B.prototype.call = function() {
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
        function(t, i, u) {
          (function(r) {
            t.exports = p;
            function p(n) {
              d.length || k(), d[d.length] = n;
            }
            var d = [], k, g = 0, x = 1024;
            function B() {
              for (; g < d.length; ) {
                var n = g;
                if (g = g + 1, d[n].call(), g > x) {
                  for (var a = 0, l = d.length - g; a < l; a++)
                    d[a] = d[a + g];
                  d.length -= g, g = 0;
                }
              }
              d.length = 0, g = 0;
            }
            var M = typeof r < "u" ? r : self, R = M.MutationObserver || M.WebKitMutationObserver;
            typeof R == "function" ? k = T(B) : k = N(B), p.requestFlush = k;
            function T(n) {
              var a = 1, l = new R(n), b = document.createTextNode("");
              return l.observe(b, { characterData: !0 }), function() {
                a = -a, b.data = a;
              };
            }
            function N(n) {
              return function() {
                var l = setTimeout(m, 0), b = setInterval(m, 50);
                function m() {
                  clearTimeout(l), clearInterval(b), n();
                }
              };
            }
            p.makeRequestCallFromTimer = N;
          }).call(i, u(14));
        },
        /* 14 */
        /***/
        function(t, i) {
          var u;
          u = function() {
            return this;
          }();
          try {
            u = u || Function("return this")() || (0, eval)("this");
          } catch {
            typeof window == "object" && (u = window);
          }
          t.exports = u;
        },
        /* 15 */
        /***/
        function(t, i, u) {
          var r, p;
          (function(d) {
            var k = function() {
              var R = Array.prototype.slice.call(arguments);
              typeof R[0] == "function" && R[0].apply(null, R.splice(1));
            }, g = function(R) {
              typeof setImmediate == "function" ? setImmediate(R) : typeof process < "u" && process.nextTick ? process.nextTick(R) : setTimeout(R, 0);
            }, x = function(R) {
              var T = function(N) {
                var n = function() {
                  return R.length && R[N].apply(null, arguments), n.next();
                };
                return n.next = function() {
                  return N < R.length - 1 ? T(N + 1) : null;
                }, n;
              };
              return T(0);
            }, B = Array.isArray || function(R) {
              return Object.prototype.toString.call(R) === "[object Array]";
            }, M = function(R, T, N) {
              var n = N ? g : k;
              if (T = T || function() {
              }, !B(R)) {
                var a = new Error("First argument to waterfall must be an array of functions");
                return T(a);
              }
              if (!R.length)
                return T();
              var l = function(b) {
                return function(m) {
                  if (m)
                    T.apply(null, arguments), T = function() {
                    };
                  else {
                    var E = Array.prototype.slice.call(arguments, 1), o = b.next();
                    o ? E.push(l(o)) : E.push(T), n(function() {
                      b.apply(null, E);
                    });
                  }
                };
              };
              l(x(R))();
            };
            r = [], p = function() {
              return M;
            }.apply(i, r), p !== void 0 && (t.exports = p);
          })();
        },
        /* 16 */
        /***/
        function(t, i, u) {
          var r = typeof Reflect == "object" ? Reflect : null, p = r && typeof r.apply == "function" ? r.apply : function(h, _, y) {
            return Function.prototype.apply.call(h, _, y);
          }, d;
          r && typeof r.ownKeys == "function" ? d = r.ownKeys : Object.getOwnPropertySymbols ? d = function(h) {
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
          var B = 10;
          function M(f) {
            if (typeof f != "function")
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof f);
          }
          Object.defineProperty(x, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
              return B;
            },
            set: function(f) {
              if (typeof f != "number" || f < 0 || g(f))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + f + ".");
              B = f;
            }
          }), x.init = function() {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, x.prototype.setMaxListeners = function(h) {
            if (typeof h != "number" || h < 0 || g(h))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + h + ".");
            return this._maxListeners = h, this;
          };
          function R(f) {
            return f._maxListeners === void 0 ? x.defaultMaxListeners : f._maxListeners;
          }
          x.prototype.getMaxListeners = function() {
            return R(this);
          }, x.prototype.emit = function(h) {
            for (var _ = [], y = 1; y < arguments.length; y++)
              _.push(arguments[y]);
            var A = h === "error", I = this._events;
            if (I !== void 0)
              A = A && I.error === void 0;
            else if (!A)
              return !1;
            if (A) {
              var C;
              if (_.length > 0 && (C = _[0]), C instanceof Error)
                throw C;
              var P = new Error("Unhandled error." + (C ? " (" + C.message + ")" : ""));
              throw P.context = C, P;
            }
            var K = I[h];
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
            var A, I, C;
            if (M(_), I = f._events, I === void 0 ? (I = f._events = /* @__PURE__ */ Object.create(null), f._eventsCount = 0) : (I.newListener !== void 0 && (f.emit(
              "newListener",
              h,
              _.listener ? _.listener : _
            ), I = f._events), C = I[h]), C === void 0)
              C = I[h] = _, ++f._eventsCount;
            else if (typeof C == "function" ? C = I[h] = y ? [_, C] : [C, _] : y ? C.unshift(_) : C.push(_), A = R(f), A > 0 && C.length > A && !C.warned) {
              C.warned = !0;
              var P = new Error("Possible EventEmitter memory leak detected. " + C.length + " " + String(h) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              P.name = "MaxListenersExceededWarning", P.emitter = f, P.type = h, P.count = C.length, k(P);
            }
            return f;
          }
          x.prototype.addListener = function(h, _) {
            return T(this, h, _, !1);
          }, x.prototype.on = x.prototype.addListener, x.prototype.prependListener = function(h, _) {
            return T(this, h, _, !0);
          };
          function N() {
            if (!this.fired)
              return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function n(f, h, _) {
            var y = { fired: !1, wrapFn: void 0, target: f, type: h, listener: _ }, A = N.bind(y);
            return A.listener = _, y.wrapFn = A, A;
          }
          x.prototype.once = function(h, _) {
            return M(_), this.on(h, n(this, h, _)), this;
          }, x.prototype.prependOnceListener = function(h, _) {
            return M(_), this.prependListener(h, n(this, h, _)), this;
          }, x.prototype.removeListener = function(h, _) {
            var y, A, I, C, P;
            if (M(_), A = this._events, A === void 0)
              return this;
            if (y = A[h], y === void 0)
              return this;
            if (y === _ || y.listener === _)
              --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete A[h], A.removeListener && this.emit("removeListener", h, y.listener || _));
            else if (typeof y != "function") {
              for (I = -1, C = y.length - 1; C >= 0; C--)
                if (y[C] === _ || y[C].listener === _) {
                  P = y[C].listener, I = C;
                  break;
                }
              if (I < 0)
                return this;
              I === 0 ? y.shift() : m(y, I), y.length === 1 && (A[h] = y[0]), A.removeListener !== void 0 && this.emit("removeListener", h, P || _);
            }
            return this;
          }, x.prototype.off = x.prototype.removeListener, x.prototype.removeAllListeners = function(h) {
            var _, y, A;
            if (y = this._events, y === void 0)
              return this;
            if (y.removeListener === void 0)
              return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : y[h] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete y[h]), this;
            if (arguments.length === 0) {
              var I = Object.keys(y), C;
              for (A = 0; A < I.length; ++A)
                C = I[A], C !== "removeListener" && this.removeAllListeners(C);
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
            return typeof f.listenerCount == "function" ? f.listenerCount(h) : l.call(f, h);
          }, x.prototype.listenerCount = l;
          function l(f) {
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
              function A(C) {
                f.removeListener(h, I), y(C);
              }
              function I() {
                typeof f.removeListener == "function" && f.removeListener("error", A), _([].slice.call(arguments));
              }
              v(f, h, I, { once: !0 }), h !== "error" && c(f, A, { once: !0 });
            });
          }
          function c(f, h, _) {
            typeof f.on == "function" && v(f, "error", h, _);
          }
          function v(f, h, _, y) {
            if (typeof f.on == "function")
              y.once ? f.once(h, _) : f.on(h, _);
            else if (typeof f.addEventListener == "function")
              f.addEventListener(h, function A(I) {
                y.once && f.removeEventListener(h, A), _(I);
              });
            else
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof f);
          }
        },
        /* 17 */
        /***/
        function(t, i, u) {
          var r = u(3), p = u(0), d = 0;
          function k() {
            return "hole_" + d++;
          }
          function g(l, b) {
            for (var m = null, E = 0; E < l.length; E++) {
              var o = b(l[E]);
              o !== l[E] && (m || (m = l.slice()), m[E] = o);
            }
            return m || l;
          }
          function x(l, b, m) {
            if (!(l instanceof r.Node))
              return l;
            if (!m) {
              var E = b(l);
              if (E && E !== l)
                return E;
            }
            if (l instanceof r.NodeList) {
              var o = g(l.children, function(_) {
                return x(_, b, m);
              });
              o !== l.children && (l = new r[l.typename](l.lineno, l.colno, o));
            } else if (l instanceof r.CallExtension) {
              var c = x(l.args, b, m), v = g(l.contentArgs, function(_) {
                return x(_, b, m);
              });
              (c !== l.args || v !== l.contentArgs) && (l = new r[l.typename](l.extName, l.prop, c, v));
            } else {
              var f = l.fields.map(function(_) {
                return l[_];
              }), h = g(f, function(_) {
                return x(_, b, m);
              });
              h !== f && (l = new r[l.typename](l.lineno, l.colno), h.forEach(function(_, y) {
                l[l.fields[y]] = _;
              }));
            }
            return m && b(l) || l;
          }
          function B(l, b) {
            return x(l, b, !0);
          }
          function M(l, b, m) {
            var E = [], o = B(m ? l[m] : l, function(c) {
              var v;
              return c instanceof r.Block ? c : ((c instanceof r.Filter && p.indexOf(b, c.name.value) !== -1 || c instanceof r.CallExtensionAsync) && (v = new r.Symbol(c.lineno, c.colno, k()), E.push(new r.FilterAsync(c.lineno, c.colno, c.name, c.args, v))), v);
            });
            return m ? l[m] = o : l = o, E.length ? (E.push(l), new r.NodeList(l.lineno, l.colno, E)) : l;
          }
          function R(l, b) {
            return B(l, function(m) {
              return m instanceof r.Output ? M(m, b) : m instanceof r.Set ? M(m, b, "value") : m instanceof r.For ? M(m, b, "arr") : m instanceof r.If ? M(m, b, "cond") : m instanceof r.CallExtension ? M(m, b, "args") : void 0;
            });
          }
          function T(l) {
            return x(l, function(b) {
              if (b instanceof r.Block) {
                var m = !1, E = k();
                b.body = x(b.body, function(o) {
                  if (o instanceof r.FunCall && o.name.value === "super")
                    return m = !0, new r.Symbol(o.lineno, o.colno, E);
                }), m && b.body.children.unshift(new r.Super(0, 0, b.name, new r.Symbol(0, 0, E)));
              }
            });
          }
          function N(l) {
            return B(l, function(b) {
              if (!(!(b instanceof r.If) && !(b instanceof r.For))) {
                var m = !1;
                if (x(b, function(E) {
                  if (E instanceof r.FilterAsync || E instanceof r.IfAsync || E instanceof r.AsyncEach || E instanceof r.AsyncAll || E instanceof r.CallExtensionAsync)
                    return m = !0, E;
                }), m) {
                  if (b instanceof r.If)
                    return new r.IfAsync(b.lineno, b.colno, b.cond, b.body, b.else_);
                  if (b instanceof r.For && !(b instanceof r.AsyncAll))
                    return new r.AsyncEach(b.lineno, b.colno, b.arr, b.name, b.body, b.else_);
                }
              }
            });
          }
          function n(l, b) {
            return N(T(R(l, b)));
          }
          function a(l, b) {
            return n(l, b || []);
          }
          t.exports = {
            transform: a
          };
        },
        /* 18 */
        /***/
        function(t, d, u) {
          var r = u(0), p = u(2), d = t.exports = {};
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
          function B(O) {
            O = k(O, "");
            var F = O.toLowerCase();
            return p.copySafeness(O, F.charAt(0).toUpperCase() + F.slice(1));
          }
          d.capitalize = B;
          function M(O, F) {
            if (O = k(O, ""), F = F || 80, O.length >= F)
              return O;
            var V = F - O.length, U = r.repeat(" ", V / 2 - V % 2), Y = r.repeat(" ", V / 2);
            return p.copySafeness(O, U + O + Y);
          }
          d.center = M;
          function R(O, F, V) {
            return V ? O || F : O !== void 0 ? O : F;
          }
          d.default = R;
          function T(O, F, V) {
            if (!r.isObject(O))
              throw new r.TemplateError("dictsort filter: val must be an object");
            var U = [];
            for (var Y in O)
              U.push([Y, O[Y]]);
            var J;
            if (V === void 0 || V === "key")
              J = 0;
            else if (V === "value")
              J = 1;
            else
              throw new r.TemplateError("dictsort filter: You can only sort by either key or value");
            return U.sort(function(ae, ee) {
              var le = ae[J], we = ee[J];
              return F || (r.isString(le) && (le = le.toUpperCase()), r.isString(we) && (we = we.toUpperCase())), le > we ? 1 : le === we ? 0 : -1;
            }), U;
          }
          d.dictsort = T;
          function N(O, F) {
            return JSON.stringify(O, null, F);
          }
          d.dump = N;
          function n(O) {
            return O instanceof p.SafeString ? O : (O = O ?? "", p.markSafe(r.escape(O.toString())));
          }
          d.escape = n;
          function a(O) {
            return O instanceof p.SafeString ? O : (O = O ?? "", p.markSafe(O.toString()));
          }
          d.safe = a;
          function l(O) {
            return O[0];
          }
          d.first = l;
          function b(O) {
            return O = O ?? "", p.markSafe(r.escape(O.toString()));
          }
          d.forceescape = b;
          function m(O, F) {
            return r.groupBy(O, F, this.env.opts.throwOnUndefined);
          }
          d.groupby = m;
          function E(O, F, V) {
            if (O = k(O, ""), O === "")
              return "";
            F = F || 4;
            var U = O.split(`
`), Y = r.repeat(" ", F), J = U.map(function(ae, ee) {
              return ee === 0 && !V ? ae : "" + Y + ae;
            }).join(`
`);
            return p.copySafeness(O, J);
          }
          d.indent = E;
          function o(O, F, V) {
            return F = F || "", V && (O = r.map(O, function(U) {
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
            return F !== void 0 ? typeof Map == "function" && F instanceof Map || typeof Set == "function" && F instanceof Set ? F.size : r.isObject(F) && !(F instanceof p.SafeString) ? r.keys(F).length : F.length : 0;
          }
          d.length = v;
          function f(O) {
            if (r.isString(O))
              return O.split("");
            if (r.isObject(O))
              return r._entries(O || {}).map(function(F) {
                var V = F[0], U = F[1];
                return {
                  key: V,
                  value: U
                };
              });
            if (r.isArray(O))
              return O;
            throw new r.TemplateError("list filter: type not iterable");
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
              return r.toArray(V).filter(function(le) {
                return ae.call(J, le, Y) === O;
              });
            }
            return F;
          }
          d.reject = A(!1);
          function I(O, F) {
            return O.filter(function(V) {
              return !V[F];
            });
          }
          d.rejectattr = I, d.select = A(!0);
          function C(O, F) {
            return O.filter(function(V) {
              return !!V[F];
            });
          }
          d.selectattr = C;
          function P(O, F, V, U) {
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
          d.replace = P;
          function K(O) {
            var F;
            return r.isString(O) ? F = f(O) : F = r.map(O, function(V) {
              return V;
            }), F.reverse(), r.isString(O) ? p.copySafeness(O, F.join("")) : F;
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
            return V === void 0 && (V = 0), F && (O = r.map(O, function(U) {
              return U[F];
            })), V + O.reduce(function(U, Y) {
              return U + Y;
            }, 0);
          }
          d.sum = S, d.sort = p.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(F, V, U, Y) {
            var J = this, ae = r.map(F, function(le) {
              return le;
            }), ee = r.getAttrGetter(Y);
            return ae.sort(function(le, we) {
              var be = Y ? ee(le) : le, Oe = Y ? ee(we) : we;
              if (J.env.opts.throwOnUndefined && Y && (be === void 0 || Oe === void 0))
                throw new TypeError('sort: attribute "' + Y + '" resolved to undefined');
              return !U && r.isString(be) && r.isString(Oe) && (be = be.toLowerCase(), Oe = Oe.toLowerCase()), be < Oe ? V ? 1 : -1 : be > Oe ? V ? -1 : 1 : 0;
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
              return B(V);
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
            if (r.isString(O))
              return F(O);
            var V = r.isArray(O) ? O : r._entries(O);
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
        function(t, i, u) {
          function r(g, x) {
            g.prototype = Object.create(x.prototype), g.prototype.constructor = g, p(g, x);
          }
          function p(g, x) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(M, R) {
              return M.__proto__ = R, M;
            }, p(g, x);
          }
          var d = u(6), k = /* @__PURE__ */ function(g) {
            r(x, g);
            function x(M) {
              var R;
              return R = g.call(this) || this, R.precompiled = M || {}, R;
            }
            var B = x.prototype;
            return B.getSource = function(R) {
              return this.precompiled[R] ? {
                src: {
                  type: "code",
                  obj: this.precompiled[R]
                },
                path: R
              } : null;
            }, x;
          }(d);
          t.exports = {
            PrecompiledLoader: k
          };
        },
        /* 20 */
        /***/
        function(t, i, u) {
          var r = u(2).SafeString;
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
            return y instanceof r;
          }
          i.escaped = g;
          function x(y, A) {
            return y === A;
          }
          i.equalto = x, i.eq = i.equalto, i.sameas = i.equalto;
          function B(y) {
            return y % 2 === 0;
          }
          i.even = B;
          function M(y) {
            return !y;
          }
          i.falsy = M;
          function R(y, A) {
            return y >= A;
          }
          i.ge = R;
          function T(y, A) {
            return y > A;
          }
          i.greaterthan = T, i.gt = i.greaterthan;
          function N(y, A) {
            return y <= A;
          }
          i.le = N;
          function n(y, A) {
            return y < A;
          }
          i.lessthan = n, i.lt = i.lessthan;
          function a(y) {
            return y.toLowerCase() === y;
          }
          i.lower = a;
          function l(y, A) {
            return y !== A;
          }
          i.ne = l;
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
        function(t, i, u) {
          function r(k) {
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
              range: function(g, x, B) {
                typeof x > "u" ? (x = g, g = 0, B = 1) : B || (B = 1);
                var M = [];
                if (B > 0)
                  for (var R = g; R < x; R += B)
                    M.push(R);
                else
                  for (var T = g; T > x; T += B)
                    M.push(T);
                return M;
              },
              cycler: function() {
                return r(Array.prototype.slice.call(arguments));
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
        function(t, i, u) {
          var r = u(4);
          t.exports = function(d, k) {
            function g(x, B) {
              if (this.name = x, this.path = x, this.defaultEngine = B.defaultEngine, this.ext = r.extname(x), !this.ext && !this.defaultEngine)
                throw new Error("No default engine was specified and no extension was provided.");
              this.ext || (this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine);
            }
            return g.prototype.render = function(B, M) {
              d.render(this.name, B, M);
            }, k.set("view", g), k.set("nunjucksEnv", d), d;
          };
        },
        /* 23 */
        /***/
        function(t, i, u) {
          var r = u(4), p = u(4), d = u(0), k = d._prettifyError, g = u(5), x = u(7), B = x.Environment, M = u(24);
          function R(a, l) {
            return Array.isArray(l) ? l.some(function(b) {
              return a.match(b);
            }) : !1;
          }
          function T(a, l) {
            l = l || {}, l.isString = !0;
            var b = l.env || new B([]), m = l.wrapper || M;
            if (!l.name)
              throw new Error('the "name" option is required when compiling a string');
            return m([n(a, l.name, b)], l);
          }
          function N(a, l) {
            l = l || {};
            var b = l.env || new B([]), m = l.wrapper || M;
            if (l.isString)
              return T(a, l);
            var E = r.existsSync(a) && r.statSync(a), o = [], c = [];
            function v(_) {
              r.readdirSync(_).forEach(function(y) {
                var A = p.join(_, y), I = A.substr(p.join(a, "/").length), C = r.statSync(A);
                C && C.isDirectory() ? (I += "/", R(I, l.exclude) || v(A)) : R(I, l.include) && c.push(A);
              });
            }
            if (E.isFile())
              o.push(n(r.readFileSync(a, "utf-8"), l.name || a, b));
            else if (E.isDirectory()) {
              v(a);
              for (var f = 0; f < c.length; f++) {
                var h = c[f].replace(p.join(a, "/"), "");
                try {
                  o.push(n(r.readFileSync(c[f], "utf-8"), h, b));
                } catch (_) {
                  if (l.force)
                    console.error(_);
                  else
                    throw _;
                }
              }
            }
            return m(o, l);
          }
          function n(a, l, b) {
            b = b || new B([]);
            var m = b.asyncFilters, E = b.extensionsList, o;
            l = l.replace(/\\/g, "/");
            try {
              o = g.compile(a, m, E, l, b.opts);
            } catch (c) {
              throw k(l, !1, c);
            }
            return {
              name: l,
              template: o
            };
          }
          t.exports = {
            precompile: N,
            precompileString: T
          };
        },
        /* 24 */
        /***/
        function(t, i, u) {
          function r(p, d) {
            var k = "";
            d = d || {};
            for (var g = 0; g < p.length; g++) {
              var x = JSON.stringify(p[g].name), B = p[g].template;
              k += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + x + `] = (function() {
` + B + `
})();
`, d.asFunction && (k += "return function(ctx, cb) { return nunjucks.render(" + x + `, ctx, cb); }
`), k += `})();
`;
            }
            return k;
          }
          t.exports = r;
        },
        /* 25 */
        /***/
        function(t, i, u) {
          function r() {
            var p = this.runtime, d = this.lib, k = this.compiler.Compiler, g = this.parser.Parser, x = this.nodes, B = this.lexer, M = p.contextOrFrameLookup, R = p.memberLookup, T, N;
            k && (T = k.prototype.assertType), g && (N = g.prototype.parseAggregate);
            function n() {
              p.contextOrFrameLookup = M, p.memberLookup = R, k && (k.prototype.assertType = T), g && (g.prototype.parseAggregate = N);
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
              var l = x.Node.extend("Slice", {
                fields: ["start", "stop", "step"],
                init: function(v, f, h, _, y) {
                  h = h || new x.Literal(v, f, null), _ = _ || new x.Literal(v, f, null), y = y || new x.Literal(v, f, 1), this.parent(v, f, h, _, y);
                }
              });
              k.prototype.assertType = function(v) {
                v instanceof l || T.apply(this, arguments);
              }, k.prototype.compileSlice = function(v, f) {
                this._emit("("), this._compileExpression(v.start, f), this._emit("),("), this._compileExpression(v.stop, f), this._emit("),("), this._compileExpression(v.step, f), this._emit(")");
              }, g.prototype.parseAggregate = function() {
                var v = this, f = a(this.tokens);
                f.colno--, f.index--;
                try {
                  return N.apply(this);
                } catch (K) {
                  var h = a(this.tokens), _ = function() {
                    return d._assign(v.tokens, h), K;
                  };
                  d._assign(this.tokens, f), this.peeked = !1;
                  var y = this.peekToken();
                  if (y.type !== B.TOKEN_LEFT_BRACKET)
                    throw _();
                  this.nextToken();
                  for (var A = new l(y.lineno, y.colno), I = !1, C = 0; C <= A.fields.length && !this.skip(B.TOKEN_RIGHT_BRACKET); C++) {
                    if (C === A.fields.length)
                      if (I)
                        this.fail("parseSlice: too many slice components", y.lineno, y.colno);
                      else
                        break;
                    if (this.skip(B.TOKEN_COLON))
                      I = !0;
                    else {
                      var P = A.fields[C];
                      A[P] = this.parseExpression(), I = this.skip(B.TOKEN_COLON) || I;
                    }
                  }
                  if (!I)
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
              return arguments.length === 4 ? b.apply(this, arguments) : (v = v || {}, d.isArray(v) && m(E, f) ? E[f].bind(v) : d.isObject(v) && m(o, f) ? o[f].bind(v) : R.apply(this, arguments));
            }, n;
          }
          t.exports = r;
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
      const u = Object.values(i.content);
      e[t] = u.filter((r) => !(r != null && r.hidden)).map((r) => At(r.questions));
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
      const u = this.interview.keys(), r = this.interview.values();
      if (!Function(...u, `return ${e.logic.showIf}`).bind(this)(...r))
        return !1;
    }
    if ((i = e.logic) != null && i.hideIf) {
      const u = this.interview.keys(), r = this.interview.values();
      if (!!Function(...u, `return ${e.logic.hideIf}`).bind(this)(...r))
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
    e ? this.setCurrent(e) : this.getCurrent().isCurrent = !0;
  }
  getNextQuestion() {
    let e, t;
    const i = Array.from(this.interview);
    for (let u = 0; u < i.length; u++) {
      const r = i[u][1], p = r == null ? void 0 : r.isCurrent, d = (r == null ? void 0 : r.type) === "repeat";
      if (t = i[u + 1] && i[u + 1][1], p && !d && !t && !this.isRoot) {
        r.isEnd = !0, e = r;
        break;
      }
      if (p && !d && t) {
        r.isCurrent = !1, e = i[u + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (p && d && this.canBeShown(r)) {
        const k = r;
        k.isCurrent = !1, e = Array.from(k.content[0].nestedInterview.interview)[0][1], e.isCurrent = !0;
        break;
      }
      if (p && d && !this.canBeShown(r) && t) {
        r.isCurrent = !1, e = i[u + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (p && d && !this.canBeShown(r) && !t) {
        r.isEnd = !0, e = r;
        break;
      }
      if (!p && d && !this.canBeShown(r) && !t) {
        r.isEnd = !0, e = r;
        break;
      }
      if (!p && d && this.canBeShown(r)) {
        const k = r;
        for (let g = 0; g < parseInt(r.value); g++)
          if (!k.content[g].hidden && (e = k.content[g].nestedInterview.getNextQuestion(), e)) {
            if (e.isEnd)
              if (g + 1 < parseInt(r.value))
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
    let u = i, r;
    for (let p = 1; p < t.length; p++) {
      const d = t[p][1], k = this.canBeShown(d);
      if (t[p + 1] && t[p + 1][1], d.isCurrent) {
        u.isCurrent = !0, r = u, d.isCurrent = !1;
        break;
      } else if (k && (u = d), d.type === "repeat") {
        const g = d;
        for (let x = 0; x < parseInt(d.value) && !(!g.content[x].hidden && (r = g.content[x].nestedInterview.getPreviousQuestion(u), r != null && r.isPrevious && (r.isPrevious = !1, u = r, r = null), r && r.isCurrent)); x++)
          ;
        if (r && r.isCurrent)
          break;
      }
    }
    if (e && !r) {
      const p = this.reversePreviousUtil(t);
      p && (r = p);
    }
    return r;
  }
  // traverse interview backwards to find previous question
  reversePreviousUtil(e) {
    let t;
    for (let i = e.length - 1; i >= 0; i--) {
      const u = e[i][1];
      if (this.canBeShown(u))
        if (u.type === "repeat") {
          const p = u;
          for (let d = parseInt(u.value) - 1; d >= 0; d--)
            if (!p.content[d].hidden) {
              const k = Array.from(p.content[d].nestedInterview.interview);
              if (t = p.content[d].nestedInterview.reversePreviousUtil(k), t && (t.isPrevious = !0), t)
                break;
            }
          if (t)
            break;
        } else {
          t = u, t.isPrevious = !0;
          break;
        }
    }
    return t;
  }
  // Returns interview of current question
  getCurrentGuidedInterview() {
    const e = Array.from(this.interview);
    let t = null;
    for (let i = 0; i < e.length; i++) {
      const u = e[i][1];
      if (u.isCurrent) {
        t = this;
        break;
      }
      if (u.type === "repeat") {
        const r = u;
        for (let p = 0; p < parseInt(u.value) && !(!r.content[p].hidden && (t = r.content[p].nestedInterview.getCurrentGuidedInterview(), t)); p++)
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
    const { range: i, id: u, questions: r } = e, { min: p, max: d } = i;
    t = rr(e.value, p, d), e.value = t, e.content || (e.content = {}), this.data[u] ? this.data[u].value = t : this.data[u] = { value: t, content: {} };
    for (let g = 0; g < t; g++) {
      if (e.content[g]) {
        e.content[g].hidden = !1;
        continue;
      }
      this.data[u].content[g] = { hidden: !1, questions: {} };
      const x = new St(cr(r, g), {
        isRoot: !1,
        events: this.events,
        data: this.data[u].content[g].questions
      });
      e.content[g] = { hidden: !1, nestedInterview: x };
    }
    const k = Object.keys(e.content);
    if (t < k.length)
      for (let g = t; g < k.length; g++)
        e.content[g].hidden = !0, this.data[u].content[g].hidden = !0;
  }
  applyDataToQuestions(e) {
    Object.entries(e).forEach(([t, { value: i, content: u }]) => {
      this.setValue(t, i), u && Object.values(u).forEach((r, p) => {
        r.hidden || this.getNestedInterview(t, p).applyDataToQuestions(r.questions);
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
    const u = this.checkIfIdIsValid(t);
    if (!u.isValid)
      throw new Error(u.message);
    const r = Array.from(this.interview, ([d, k]) => ({ name: d, value: k }));
    r.forEach((d, k) => {
      d.name === e && (r[k].value.id = t, r[k].name = t);
    });
    const p = /* @__PURE__ */ new Map();
    r.forEach((d) => {
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
    const u = this.findMultipleChoiceById(e);
    if (!i)
      throw new Error("No label provided");
    if (!u.choices[t])
      throw new Error("No choice with index:" + t);
    u.choices[t].label = i;
  }
  setDefaultCheckedChoice(e, t) {
    const i = this.findMultipleChoiceById(e);
    if (!i.choices[t])
      throw new Error("No choice with index:" + t);
    i.choices.forEach((u) => u.checked = !1), i.choices[t].checked = !0;
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
    const u = this.findQuestionById(e);
    u.options || (u.options = {}), u.options[t] = i;
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
