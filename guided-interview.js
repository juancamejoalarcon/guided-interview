var Kt = Object.defineProperty;
var jt = (o, e, t) => e in o ? Kt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var he = (o, e, t) => (jt(o, typeof e != "symbol" ? e + "" : e, t), t);
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dt(o) {
  if (o.__esModule)
    return o;
  var e = o.default;
  if (typeof e == "function") {
    var t = function n() {
      if (this instanceof n) {
        var s = [null];
        s.push.apply(s, arguments);
        var i = Function.bind.apply(e, s);
        return new i();
      }
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(o).forEach(function(n) {
    var s = Object.getOwnPropertyDescriptor(o, n);
    Object.defineProperty(t, n, s.get ? s : {
      enumerable: !0,
      get: function() {
        return o[n];
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
var $t = Qt(qe);
function Qt(o) {
  return o && o.__esModule ? o : { default: o };
}
function Wt(o) {
  return typeof o == "string" && $t.default.test(o);
}
var Gt = Wt;
Ce.default = Gt;
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
Ae.unsafeStringify = yt;
var Ht = Yt(Ce);
function Yt(o) {
  return o && o.__esModule ? o : { default: o };
}
const de = [];
for (let o = 0; o < 256; ++o)
  de.push((o + 256).toString(16).slice(1));
function yt(o, e = 0) {
  return (de[o[e + 0]] + de[o[e + 1]] + de[o[e + 2]] + de[o[e + 3]] + "-" + de[o[e + 4]] + de[o[e + 5]] + "-" + de[o[e + 6]] + de[o[e + 7]] + "-" + de[o[e + 8]] + de[o[e + 9]] + "-" + de[o[e + 10]] + de[o[e + 11]] + de[o[e + 12]] + de[o[e + 13]] + de[o[e + 14]] + de[o[e + 15]]).toLowerCase();
}
function zt(o, e = 0) {
  const t = yt(o, e);
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
function en(o) {
  return o && o.__esModule ? o : { default: o };
}
let pt, st, ot = 0, at = 0;
function tn(o, e, t) {
  let n = e && t || 0;
  const s = e || new Array(16);
  o = o || {};
  let i = o.node || pt, c = o.clockseq !== void 0 ? o.clockseq : st;
  if (i == null || c == null) {
    const M = o.random || (o.rng || Xt.default)();
    i == null && (i = pt = [M[0] | 1, M[1], M[2], M[3], M[4], M[5]]), c == null && (c = st = (M[6] << 8 | M[7]) & 16383);
  }
  let d = o.msecs !== void 0 ? o.msecs : Date.now(), g = o.nsecs !== void 0 ? o.nsecs : at + 1;
  const y = d - ot + (g - at) / 1e4;
  if (y < 0 && o.clockseq === void 0 && (c = c + 1 & 16383), (y < 0 || d > ot) && o.nsecs === void 0 && (g = 0), g >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ot = d, at = g, st = c, d += 122192928e5;
  const x = ((d & 268435455) * 1e4 + g) % 4294967296;
  s[n++] = x >>> 24 & 255, s[n++] = x >>> 16 & 255, s[n++] = x >>> 8 & 255, s[n++] = x & 255;
  const P = d / 4294967296 * 1e4 & 268435455;
  s[n++] = P >>> 8 & 255, s[n++] = P & 255, s[n++] = P >>> 24 & 15 | 16, s[n++] = P >>> 16 & 255, s[n++] = c >>> 8 | 128, s[n++] = c & 255;
  for (let M = 0; M < 6; ++M)
    s[n + M] = i[M];
  return e || (0, Zt.unsafeStringify)(s);
}
var nn = tn;
Ue.default = nn;
var $e = {}, Te = {}, Pe = {};
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.default = void 0;
var rn = sn(Ce);
function sn(o) {
  return o && o.__esModule ? o : { default: o };
}
function on(o) {
  if (!(0, rn.default)(o))
    throw TypeError("Invalid UUID");
  let e;
  const t = new Uint8Array(16);
  return t[0] = (e = parseInt(o.slice(0, 8), 16)) >>> 24, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = e & 255, t[4] = (e = parseInt(o.slice(9, 13), 16)) >>> 8, t[5] = e & 255, t[6] = (e = parseInt(o.slice(14, 18), 16)) >>> 8, t[7] = e & 255, t[8] = (e = parseInt(o.slice(19, 23), 16)) >>> 8, t[9] = e & 255, t[10] = (e = parseInt(o.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = e / 4294967296 & 255, t[12] = e >>> 24 & 255, t[13] = e >>> 16 & 255, t[14] = e >>> 8 & 255, t[15] = e & 255, t;
}
var an = on;
Pe.default = an;
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.URL = Te.DNS = void 0;
Te.default = hn;
var ln = Ae, un = cn(Pe);
function cn(o) {
  return o && o.__esModule ? o : { default: o };
}
function fn(o) {
  o = unescape(encodeURIComponent(o));
  const e = [];
  for (let t = 0; t < o.length; ++t)
    e.push(o.charCodeAt(t));
  return e;
}
const _t = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
Te.DNS = _t;
const wt = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
Te.URL = wt;
function hn(o, e, t) {
  function n(s, i, c, d) {
    var g;
    if (typeof s == "string" && (s = fn(s)), typeof i == "string" && (i = (0, un.default)(i)), ((g = i) === null || g === void 0 ? void 0 : g.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let y = new Uint8Array(16 + s.length);
    if (y.set(i), y.set(s, i.length), y = t(y), y[6] = y[6] & 15 | e, y[8] = y[8] & 63 | 128, c) {
      d = d || 0;
      for (let x = 0; x < 16; ++x)
        c[d + x] = y[x];
      return c;
    }
    return (0, ln.unsafeStringify)(y);
  }
  try {
    n.name = o;
  } catch {
  }
  return n.DNS = _t, n.URL = wt, n;
}
var Qe = {};
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.default = void 0;
function pn(o) {
  if (typeof o == "string") {
    const e = unescape(encodeURIComponent(o));
    o = new Uint8Array(e.length);
    for (let t = 0; t < e.length; ++t)
      o[t] = e.charCodeAt(t);
  }
  return dn(vn(mn(o), o.length * 8));
}
function dn(o) {
  const e = [], t = o.length * 32, n = "0123456789abcdef";
  for (let s = 0; s < t; s += 8) {
    const i = o[s >> 5] >>> s % 32 & 255, c = parseInt(n.charAt(i >>> 4 & 15) + n.charAt(i & 15), 16);
    e.push(c);
  }
  return e;
}
function Et(o) {
  return (o + 64 >>> 9 << 4) + 14 + 1;
}
function vn(o, e) {
  o[e >> 5] |= 128 << e % 32, o[Et(e) - 1] = e;
  let t = 1732584193, n = -271733879, s = -1732584194, i = 271733878;
  for (let c = 0; c < o.length; c += 16) {
    const d = t, g = n, y = s, x = i;
    t = ve(t, n, s, i, o[c], 7, -680876936), i = ve(i, t, n, s, o[c + 1], 12, -389564586), s = ve(s, i, t, n, o[c + 2], 17, 606105819), n = ve(n, s, i, t, o[c + 3], 22, -1044525330), t = ve(t, n, s, i, o[c + 4], 7, -176418897), i = ve(i, t, n, s, o[c + 5], 12, 1200080426), s = ve(s, i, t, n, o[c + 6], 17, -1473231341), n = ve(n, s, i, t, o[c + 7], 22, -45705983), t = ve(t, n, s, i, o[c + 8], 7, 1770035416), i = ve(i, t, n, s, o[c + 9], 12, -1958414417), s = ve(s, i, t, n, o[c + 10], 17, -42063), n = ve(n, s, i, t, o[c + 11], 22, -1990404162), t = ve(t, n, s, i, o[c + 12], 7, 1804603682), i = ve(i, t, n, s, o[c + 13], 12, -40341101), s = ve(s, i, t, n, o[c + 14], 17, -1502002290), n = ve(n, s, i, t, o[c + 15], 22, 1236535329), t = me(t, n, s, i, o[c + 1], 5, -165796510), i = me(i, t, n, s, o[c + 6], 9, -1069501632), s = me(s, i, t, n, o[c + 11], 14, 643717713), n = me(n, s, i, t, o[c], 20, -373897302), t = me(t, n, s, i, o[c + 5], 5, -701558691), i = me(i, t, n, s, o[c + 10], 9, 38016083), s = me(s, i, t, n, o[c + 15], 14, -660478335), n = me(n, s, i, t, o[c + 4], 20, -405537848), t = me(t, n, s, i, o[c + 9], 5, 568446438), i = me(i, t, n, s, o[c + 14], 9, -1019803690), s = me(s, i, t, n, o[c + 3], 14, -187363961), n = me(n, s, i, t, o[c + 8], 20, 1163531501), t = me(t, n, s, i, o[c + 13], 5, -1444681467), i = me(i, t, n, s, o[c + 2], 9, -51403784), s = me(s, i, t, n, o[c + 7], 14, 1735328473), n = me(n, s, i, t, o[c + 12], 20, -1926607734), t = ge(t, n, s, i, o[c + 5], 4, -378558), i = ge(i, t, n, s, o[c + 8], 11, -2022574463), s = ge(s, i, t, n, o[c + 11], 16, 1839030562), n = ge(n, s, i, t, o[c + 14], 23, -35309556), t = ge(t, n, s, i, o[c + 1], 4, -1530992060), i = ge(i, t, n, s, o[c + 4], 11, 1272893353), s = ge(s, i, t, n, o[c + 7], 16, -155497632), n = ge(n, s, i, t, o[c + 10], 23, -1094730640), t = ge(t, n, s, i, o[c + 13], 4, 681279174), i = ge(i, t, n, s, o[c], 11, -358537222), s = ge(s, i, t, n, o[c + 3], 16, -722521979), n = ge(n, s, i, t, o[c + 6], 23, 76029189), t = ge(t, n, s, i, o[c + 9], 4, -640364487), i = ge(i, t, n, s, o[c + 12], 11, -421815835), s = ge(s, i, t, n, o[c + 15], 16, 530742520), n = ge(n, s, i, t, o[c + 2], 23, -995338651), t = ye(t, n, s, i, o[c], 6, -198630844), i = ye(i, t, n, s, o[c + 7], 10, 1126891415), s = ye(s, i, t, n, o[c + 14], 15, -1416354905), n = ye(n, s, i, t, o[c + 5], 21, -57434055), t = ye(t, n, s, i, o[c + 12], 6, 1700485571), i = ye(i, t, n, s, o[c + 3], 10, -1894986606), s = ye(s, i, t, n, o[c + 10], 15, -1051523), n = ye(n, s, i, t, o[c + 1], 21, -2054922799), t = ye(t, n, s, i, o[c + 8], 6, 1873313359), i = ye(i, t, n, s, o[c + 15], 10, -30611744), s = ye(s, i, t, n, o[c + 6], 15, -1560198380), n = ye(n, s, i, t, o[c + 13], 21, 1309151649), t = ye(t, n, s, i, o[c + 4], 6, -145523070), i = ye(i, t, n, s, o[c + 11], 10, -1120210379), s = ye(s, i, t, n, o[c + 2], 15, 718787259), n = ye(n, s, i, t, o[c + 9], 21, -343485551), t = xe(t, d), n = xe(n, g), s = xe(s, y), i = xe(i, x);
  }
  return [t, n, s, i];
}
function mn(o) {
  if (o.length === 0)
    return [];
  const e = o.length * 8, t = new Uint32Array(Et(e));
  for (let n = 0; n < e; n += 8)
    t[n >> 5] |= (o[n / 8] & 255) << n % 32;
  return t;
}
function xe(o, e) {
  const t = (o & 65535) + (e & 65535);
  return (o >> 16) + (e >> 16) + (t >> 16) << 16 | t & 65535;
}
function gn(o, e) {
  return o << e | o >>> 32 - e;
}
function We(o, e, t, n, s, i) {
  return xe(gn(xe(xe(e, o), xe(n, i)), s), t);
}
function ve(o, e, t, n, s, i, c) {
  return We(e & t | ~e & n, o, e, s, i, c);
}
function me(o, e, t, n, s, i, c) {
  return We(e & n | t & ~n, o, e, s, i, c);
}
function ge(o, e, t, n, s, i, c) {
  return We(e ^ t ^ n, o, e, s, i, c);
}
function ye(o, e, t, n, s, i, c) {
  return We(t ^ (e | ~n), o, e, s, i, c);
}
var yn = pn;
Qe.default = yn;
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.default = void 0;
var _n = bt(Te), wn = bt(Qe);
function bt(o) {
  return o && o.__esModule ? o : { default: o };
}
const En = (0, _n.default)("v3", 48, wn.default);
var bn = En;
$e.default = bn;
var Ge = {}, He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.default = void 0;
const kn = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var On = {
  randomUUID: kn
};
He.default = On;
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.default = void 0;
var dt = kt(He), Ln = kt(Ve), xn = Ae;
function kt(o) {
  return o && o.__esModule ? o : { default: o };
}
function Tn(o, e, t) {
  if (dt.default.randomUUID && !e && !o)
    return dt.default.randomUUID();
  o = o || {};
  const n = o.random || (o.rng || Ln.default)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
    t = t || 0;
    for (let s = 0; s < 16; ++s)
      e[t + s] = n[s];
    return e;
  }
  return (0, xn.unsafeStringify)(n);
}
var An = Tn;
Ge.default = An;
var Ye = {}, ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.default = void 0;
function Sn(o, e, t, n) {
  switch (o) {
    case 0:
      return e & t ^ ~e & n;
    case 1:
      return e ^ t ^ n;
    case 2:
      return e & t ^ e & n ^ t & n;
    case 3:
      return e ^ t ^ n;
  }
}
function lt(o, e) {
  return o << e | o >>> 32 - e;
}
function Cn(o) {
  const e = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof o == "string") {
    const c = unescape(encodeURIComponent(o));
    o = [];
    for (let d = 0; d < c.length; ++d)
      o.push(c.charCodeAt(d));
  } else
    Array.isArray(o) || (o = Array.prototype.slice.call(o));
  o.push(128);
  const n = o.length / 4 + 2, s = Math.ceil(n / 16), i = new Array(s);
  for (let c = 0; c < s; ++c) {
    const d = new Uint32Array(16);
    for (let g = 0; g < 16; ++g)
      d[g] = o[c * 64 + g * 4] << 24 | o[c * 64 + g * 4 + 1] << 16 | o[c * 64 + g * 4 + 2] << 8 | o[c * 64 + g * 4 + 3];
    i[c] = d;
  }
  i[s - 1][14] = (o.length - 1) * 8 / Math.pow(2, 32), i[s - 1][14] = Math.floor(i[s - 1][14]), i[s - 1][15] = (o.length - 1) * 8 & 4294967295;
  for (let c = 0; c < s; ++c) {
    const d = new Uint32Array(80);
    for (let I = 0; I < 16; ++I)
      d[I] = i[c][I];
    for (let I = 16; I < 80; ++I)
      d[I] = lt(d[I - 3] ^ d[I - 8] ^ d[I - 14] ^ d[I - 16], 1);
    let g = t[0], y = t[1], x = t[2], P = t[3], M = t[4];
    for (let I = 0; I < 80; ++I) {
      const T = Math.floor(I / 20), C = lt(g, 5) + Sn(T, y, x, P) + M + e[T] + d[I] >>> 0;
      M = P, P = x, x = lt(y, 30) >>> 0, y = g, g = C;
    }
    t[0] = t[0] + g >>> 0, t[1] = t[1] + y >>> 0, t[2] = t[2] + x >>> 0, t[3] = t[3] + P >>> 0, t[4] = t[4] + M >>> 0;
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
function Ot(o) {
  return o && o.__esModule ? o : { default: o };
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
function Kn(o) {
  return o && o.__esModule ? o : { default: o };
}
function jn(o) {
  if (!(0, Mn.default)(o))
    throw TypeError("Invalid UUID");
  return parseInt(o.slice(14, 15), 16);
}
var Dn = jn;
Xe.default = Dn;
(function(o) {
  Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "NIL", {
    enumerable: !0,
    get: function() {
      return i.default;
    }
  }), Object.defineProperty(o, "parse", {
    enumerable: !0,
    get: function() {
      return y.default;
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
      return n.default;
    }
  }), Object.defineProperty(o, "v5", {
    enumerable: !0,
    get: function() {
      return s.default;
    }
  }), Object.defineProperty(o, "validate", {
    enumerable: !0,
    get: function() {
      return d.default;
    }
  }), Object.defineProperty(o, "version", {
    enumerable: !0,
    get: function() {
      return c.default;
    }
  });
  var e = x(Ue), t = x($e), n = x(Ge), s = x(Ye), i = x(Je), c = x(Xe), d = x(Ce), g = x(Ae), y = x(Pe);
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
}, Symbol.toStringTag, { value: "Module" })), Qn = /* @__PURE__ */ Dt($n);
var Wn = ct && ct.__importDefault || function(o) {
  return o && o.__esModule ? o : { default: o };
};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.RandomStringGenerator = void 0;
const Gn = Wn(Qn);
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
    const n = Gn.default.randomBytes(t), s = e.length - 1;
    let i = "";
    for (; t--; )
      i += e[n[t] & s];
    return i;
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
    const [n, s] = this.split(e, 2);
    return [n, s];
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
    const t = new zn.RandomStringConfig(), n = new Jn.RandomStringBuilder(t);
    return e || n.characters().numbers().symbols(), typeof e == "function" && e(n), typeof e == "number" && n.characters().numbers().symbols().length(e), this.generateRandom(t);
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
    const n = new RegExp(e, "g");
    return new te(this.value.replace(n, t));
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
      const n = Math.floor(Math.random() * t--), s = e[t];
      e[t] = e[n], e[n] = s;
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
const Zn = De, be = (o) => new Zn.Str(o);
je.Str = be;
be.uuid = () => be().uuid();
be.random = (o) => be().random(o);
be.isString = (o) => be().isString(o);
be.isAlphaNumeric = (o) => be().isAlphaNumeric(o);
be.isSymbol = (o) => be().isSymbol(o);
var ei = je.default = be;
const mt = () => process.env.NODE_ENV === "test", ti = () => "id-" + (Math.random() + 1).toString(36).substring(7), Lt = (o) => ei(o).isCamel(), xt = (o) => {
  let e = null;
  return Object.entries(o).forEach(([t, n]) => {
    if (n.type === "repeat") {
      const i = xt(n.questions);
      i && (e = i);
    }
    Lt(t) || (e = t);
  }), e;
}, Tt = (o) => {
  const e = Object.values(o);
  let t = [];
  const n = e.map((s, i) => e.find((c, d) => {
    if (c.type === "repeat" && (t = Tt(c.questions)), i !== d && c.id === s.id)
      return s;
  })).filter(Boolean);
  return t.length && n.push(...t), n;
}, ni = (o) => {
  var n;
  const e = Tt(o);
  if (e.length)
    throw new Error(`Duplicated id values: ${(n = e[0]) == null ? void 0 : n.id}`);
  const t = xt(o);
  if (t)
    throw new Error(`ID must be in camel case: ${t}`);
  return !0;
}, ii = (o, e, t) => o < e ? (mt() || console.warn(`Value ${o} is lower than min ${e}. Returning min.`), e) : o > t ? (mt() || console.warn(`Value ${o} is higher than max ${t}. Returning max.`), t) : o, ri = (o, e) => {
  if (e.type === "repeat" && isNaN(o))
    throw new Error("Value of repeat question must be a number");
}, ht = class {
  constructor() {
    he(this, "subscribers");
    this.subscribers = {};
  }
  dispatch(e, t) {
    const n = this.subscribers[e];
    n !== void 0 && Object.keys(n).forEach((s) => n[s](t));
  }
  register(e, t) {
    const n = this.getNextId();
    return this.subscribers[e] || (this.subscribers[e] = {}), this.subscribers[e][n] = t, {
      unregister: () => {
        delete this.subscribers[e][n], Object.keys(this.subscribers[e]).length === 0 && delete this.subscribers[e];
      }
    };
  }
  getNextId() {
    return ht.nextId++;
  }
};
let Me = ht;
he(Me, "nextId", 0);
const si = {
  text: !0,
  multipleChoice: !0,
  number: !0,
  date: !0,
  repeat: !0
}, oi = (o, e = !1) => {
  if (!si[o.type])
    throw new Error("Invalid question type");
  const t = o.id || ti();
  let n;
  return o.type === "text" ? n = ft(o) : o.type === "date" ? n = ai(o) : o.type === "multipleChoice" ? n = li(o) : o.type === "repeat" ? n = ui(o) : n = ft(o), {
    id: t,
    type: o.type,
    title: o.title || "",
    indications: o.indications || "",
    logic: o.logic || {},
    options: o.options || {},
    indexInsideRepeat: o.indexInsideRepeat || null,
    ...n
  };
}, ft = (o) => ({
  value: o.value || "",
  required: Boolean(o.required),
  placeholder: o.placeholder || "",
  subType: o.subType || ""
}), ai = (o) => ({
  format: o.format || "dd/mm/yyyy",
  ...ft(o)
}), li = (o) => {
  var e;
  return {
    value: ((e = o.choices.find((t) => t.checked === !0)) == null ? void 0 : e.label) || "",
    choices: o.choices || [],
    subType: o.subType || "radio"
  };
}, ui = (o) => ({
  value: o.value || "",
  range: o.range || { min: 0, max: 0 },
  questions: o.questions || {}
}), ci = (o, e, t = null) => {
  const n = JSON.parse(JSON.stringify(o));
  return Object.entries(n).forEach(([s, i]) => {
    const c = e + 1;
    i.title && (i.title = i.title.replace(/\<%= index %>/g, c.toString())), t ? i.indexInsideRepeat = t + `.${c}` : i.indexInsideRepeat = c.toString();
  }), n;
};
var Ke = {}, fi = {
  get exports() {
    return Ke;
  },
  set exports(o) {
    Ke = o;
  }
};
/*! Browser bundle of nunjucks 3.2.4  */
(function(o, e) {
  (function(n, s) {
    o.exports = s();
  })(typeof self < "u" ? self : ct, function() {
    return (
      /******/
      function(t) {
        var n = {};
        function s(i) {
          if (n[i])
            return n[i].exports;
          var c = n[i] = {
            /******/
            i,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return t[i].call(c.exports, c, c.exports, s), c.l = !0, c.exports;
        }
        return s.m = t, s.c = n, s.d = function(i, c, d) {
          s.o(i, c) || Object.defineProperty(i, c, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: d
            /******/
          });
        }, s.n = function(i) {
          var c = i && i.__esModule ? (
            /******/
            function() {
              return i.default;
            }
          ) : (
            /******/
            function() {
              return i;
            }
          );
          return s.d(c, "a", c), c;
        }, s.o = function(i, c) {
          return Object.prototype.hasOwnProperty.call(i, c);
        }, s.p = "", s(s.s = 11);
      }([
        /* 0 */
        /***/
        function(t, y, s) {
          var i = Array.prototype, c = Object.prototype, d = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\\": "&#92;"
          }, g = /[&"'<>\\]/g, y = t.exports = {};
          function x(E, S) {
            return c.hasOwnProperty.call(E, S);
          }
          y.hasOwnProp = x;
          function P(E) {
            return d[E];
          }
          function M(E, S, j) {
            if (j.Update || (j = new y.TemplateError(j)), j.Update(E), !S) {
              var D = j;
              j = new Error(D.message), j.name = D.name;
            }
            return j;
          }
          y._prettifyError = M;
          function I(E, S, j) {
            var D, $;
            E instanceof Error && ($ = E, E = $.name + ": " + $.message), Object.setPrototypeOf ? (D = new Error(E), Object.setPrototypeOf(D, I.prototype)) : (D = this, Object.defineProperty(D, "message", {
              enumerable: !1,
              writable: !0,
              value: E
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
              var ue = new Error(E).stack;
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
          }), y.TemplateError = I;
          function T(E) {
            return E.replace(g, P);
          }
          y.escape = T;
          function C(E) {
            return c.toString.call(E) === "[object Function]";
          }
          y.isFunction = C;
          function r(E) {
            return c.toString.call(E) === "[object Array]";
          }
          y.isArray = r;
          function l(E) {
            return c.toString.call(E) === "[object String]";
          }
          y.isString = l;
          function u(E) {
            return c.toString.call(E) === "[object Object]";
          }
          y.isObject = u;
          function k(E) {
            return E ? typeof E == "string" ? E.split(".") : [E] : [];
          }
          function m(E) {
            var S = k(E);
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
          y.getAttrGetter = m;
          function b(E, S, j) {
            for (var D = {}, $ = C(S) ? S : m(S), ne = 0; ne < E.length; ne++) {
              var z = E[ne], ue = $(z, ne);
              if (ue === void 0 && j === !0)
                throw new TypeError('groupby: attribute "' + S + '" resolved to undefined');
              (D[ue] || (D[ue] = [])).push(z);
            }
            return D;
          }
          y.groupBy = b;
          function a(E) {
            return Array.prototype.slice.call(E);
          }
          y.toArray = a;
          function f(E) {
            var S = [];
            if (!E)
              return S;
            for (var j = E.length, D = a(arguments).slice(1), $ = -1; ++$ < j; )
              A(D, E[$]) === -1 && S.push(E[$]);
            return S;
          }
          y.without = f;
          function v(E, S) {
            for (var j = "", D = 0; D < S; D++)
              j += E;
            return j;
          }
          y.repeat = v;
          function h(E, S, j) {
            if (E != null) {
              if (i.forEach && E.forEach === i.forEach)
                E.forEach(S, j);
              else if (E.length === +E.length)
                for (var D = 0, $ = E.length; D < $; D++)
                  S.call(j, E[D], D, E);
            }
          }
          y.each = h;
          function p(E, S) {
            var j = [];
            if (E == null)
              return j;
            if (i.map && E.map === i.map)
              return E.map(S);
            for (var D = 0; D < E.length; D++)
              j[j.length] = S(E[D], D);
            return E.length === +E.length && (j.length = E.length), j;
          }
          y.map = p;
          function w(E, S, j) {
            var D = -1;
            function $() {
              D++, D < E.length ? S(E[D], D, $, j) : j();
            }
            $();
          }
          y.asyncIter = w;
          function _(E, S, j) {
            var D = R(E || {}), $ = D.length, ne = -1;
            function z() {
              ne++;
              var ue = D[ne];
              ne < $ ? S(ue, E[ue], ne, $, z) : j();
            }
            z();
          }
          y.asyncFor = _;
          function A(E, S, j) {
            return Array.prototype.indexOf.call(E || [], S, j);
          }
          y.indexOf = A;
          function R(E) {
            var S = [];
            for (var j in E)
              x(E, j) && S.push(j);
            return S;
          }
          y.keys = R;
          function N(E) {
            return R(E).map(function(S) {
              return [S, E[S]];
            });
          }
          y._entries = N;
          function B(E) {
            return R(E).map(function(S) {
              return E[S];
            });
          }
          y._values = B;
          function K(E, S) {
            return E = E || {}, R(S).forEach(function(j) {
              E[j] = S[j];
            }), E;
          }
          y._assign = y.extend = K;
          function L(E, S) {
            if (r(S) || l(S))
              return S.indexOf(E) !== -1;
            if (u(S))
              return E in S;
            throw new Error('Cannot use "in" operator to search for "' + E + '" in unexpected types.');
          }
          y.inOperator = L;
        },
        /* 1 */
        /***/
        function(t, n, s) {
          function i(l, u) {
            for (var k = 0; k < u.length; k++) {
              var m = u[k];
              m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(l, d(m.key), m);
            }
          }
          function c(l, u, k) {
            return u && i(l.prototype, u), k && i(l, k), Object.defineProperty(l, "prototype", { writable: !1 }), l;
          }
          function d(l) {
            var u = g(l, "string");
            return typeof u == "symbol" ? u : String(u);
          }
          function g(l, u) {
            if (typeof l != "object" || l === null)
              return l;
            var k = l[Symbol.toPrimitive];
            if (k !== void 0) {
              var m = k.call(l, u || "default");
              if (typeof m != "object")
                return m;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (u === "string" ? String : Number)(l);
          }
          function y(l, u) {
            l.prototype = Object.create(u.prototype), l.prototype.constructor = l, x(l, u);
          }
          function x(l, u) {
            return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, b) {
              return m.__proto__ = b, m;
            }, x(l, u);
          }
          var P = s(16), M = s(0);
          function I(l, u) {
            return typeof l != "function" || typeof u != "function" ? u : function() {
              var m = this.parent;
              this.parent = l;
              var b = u.apply(this, arguments);
              return this.parent = m, b;
            };
          }
          function T(l, u, k) {
            k = k || {}, M.keys(k).forEach(function(b) {
              k[b] = I(l.prototype[b], k[b]);
            });
            var m = /* @__PURE__ */ function(b) {
              y(a, b);
              function a() {
                return b.apply(this, arguments) || this;
              }
              return c(a, [{
                key: "typename",
                get: function() {
                  return u;
                }
              }]), a;
            }(l);
            return M._assign(m.prototype, k), m;
          }
          var C = /* @__PURE__ */ function() {
            function l() {
              this.init.apply(this, arguments);
            }
            var u = l.prototype;
            return u.init = function() {
            }, l.extend = function(m, b) {
              return typeof m == "object" && (b = m, m = "anonymous"), T(this, m, b);
            }, c(l, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), l;
          }(), r = /* @__PURE__ */ function(l) {
            y(u, l);
            function u() {
              var m, b;
              return b = l.call(this) || this, (m = b).init.apply(m, arguments), b;
            }
            var k = u.prototype;
            return k.init = function() {
            }, u.extend = function(b, a) {
              return typeof b == "object" && (a = b, b = "anonymous"), T(this, b, a);
            }, c(u, [{
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
        function(t, n, s) {
          var i = s(0), c = Array.from, d = typeof Symbol == "function" && Symbol.iterator && typeof c == "function", g = /* @__PURE__ */ function() {
            function p(_, A) {
              this.variables = /* @__PURE__ */ Object.create(null), this.parent = _, this.topLevel = !1, this.isolateWrites = A;
            }
            var w = p.prototype;
            return w.set = function(A, R, N) {
              var B = A.split("."), K = this.variables, L = this;
              if (N && (L = this.resolve(B[0], !0))) {
                L.set(A, R);
                return;
              }
              for (var E = 0; E < B.length - 1; E++) {
                var S = B[E];
                K[S] || (K[S] = {}), K = K[S];
              }
              K[B[B.length - 1]] = R;
            }, w.get = function(A) {
              var R = this.variables[A];
              return R !== void 0 ? R : null;
            }, w.lookup = function(A) {
              var R = this.parent, N = this.variables[A];
              return N !== void 0 ? N : R && R.lookup(A);
            }, w.resolve = function(A, R) {
              var N = R && this.isolateWrites ? void 0 : this.parent, B = this.variables[A];
              return B !== void 0 ? this : N && N.resolve(A);
            }, w.push = function(A) {
              return new p(this, A);
            }, w.pop = function() {
              return this.parent;
            }, p;
          }();
          function y(p, w, _) {
            return function() {
              for (var R = arguments.length, N = new Array(R), B = 0; B < R; B++)
                N[B] = arguments[B];
              var K = I(N), L, E = M(N);
              if (K > p.length)
                L = N.slice(0, p.length), N.slice(L.length, K).forEach(function(D, $) {
                  $ < w.length && (E[w[$]] = D);
                }), L.push(E);
              else if (K < p.length) {
                L = N.slice(0, K);
                for (var S = K; S < p.length; S++) {
                  var j = p[S];
                  L.push(E[j]), delete E[j];
                }
                L.push(E);
              } else
                L = N;
              return _.apply(this, L);
            };
          }
          function x(p) {
            return p.__keywords = !0, p;
          }
          function P(p) {
            return p && Object.prototype.hasOwnProperty.call(p, "__keywords");
          }
          function M(p) {
            var w = p.length;
            if (w) {
              var _ = p[w - 1];
              if (P(_))
                return _;
            }
            return {};
          }
          function I(p) {
            var w = p.length;
            if (w === 0)
              return 0;
            var _ = p[w - 1];
            return P(_) ? w - 1 : w;
          }
          function T(p) {
            if (typeof p != "string")
              return p;
            this.val = p, this.length = p.length;
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
          function C(p, w) {
            return p instanceof T ? new T(w) : w.toString();
          }
          function r(p) {
            var w = typeof p;
            return w === "string" ? new T(p) : w !== "function" ? p : function(A) {
              var R = p.apply(this, arguments);
              return typeof R == "string" ? new T(R) : R;
            };
          }
          function l(p, w) {
            return p = p ?? "", w && !(p instanceof T) && (p = i.escape(p.toString())), p;
          }
          function u(p, w, _) {
            if (p == null)
              throw new i.TemplateError("attempted to output null or undefined value", w + 1, _ + 1);
            return p;
          }
          function k(p, w) {
            if (p != null)
              return typeof p[w] == "function" ? function() {
                for (var _ = arguments.length, A = new Array(_), R = 0; R < _; R++)
                  A[R] = arguments[R];
                return p[w].apply(p, A);
              } : p[w];
          }
          function m(p, w, _, A) {
            if (p) {
              if (typeof p != "function")
                throw new Error("Unable to call `" + w + "`, which is not a function");
            } else
              throw new Error("Unable to call `" + w + "`, which is undefined or falsey");
            return p.apply(_, A);
          }
          function b(p, w, _) {
            var A = w.lookup(_);
            return A !== void 0 ? A : p.lookup(_);
          }
          function a(p, w, _) {
            return p.lineno ? p : new i.TemplateError(p, w, _);
          }
          function f(p, w, _, A) {
            if (i.isArray(p)) {
              var R = p.length;
              i.asyncIter(p, function(B, K, L) {
                switch (w) {
                  case 1:
                    _(B, K, R, L);
                    break;
                  case 2:
                    _(B[0], B[1], K, R, L);
                    break;
                  case 3:
                    _(B[0], B[1], B[2], K, R, L);
                    break;
                  default:
                    B.push(K, R, L), _.apply(this, B);
                }
              }, A);
            } else
              i.asyncFor(p, function(B, K, L, E, S) {
                _(B, K, L, E, S);
              }, A);
          }
          function v(p, w, _, A) {
            var R = 0, N, B;
            function K($, ne) {
              R++, B[$] = ne, R === N && A(null, B.join(""));
            }
            if (i.isArray(p))
              if (N = p.length, B = new Array(N), N === 0)
                A(null, "");
              else
                for (var L = 0; L < p.length; L++) {
                  var E = p[L];
                  switch (w) {
                    case 1:
                      _(E, L, N, K);
                      break;
                    case 2:
                      _(E[0], E[1], L, N, K);
                      break;
                    case 3:
                      _(E[0], E[1], E[2], L, N, K);
                      break;
                    default:
                      E.push(L, N, K), _.apply(this, E);
                  }
                }
            else {
              var S = i.keys(p || {});
              if (N = S.length, B = new Array(N), N === 0)
                A(null, "");
              else
                for (var j = 0; j < S.length; j++) {
                  var D = S[j];
                  _(D, p[D], j, N, K);
                }
            }
          }
          function h(p) {
            return typeof p != "object" || p === null || i.isArray(p) ? p : d && Symbol.iterator in p ? c(p) : p;
          }
          t.exports = {
            Frame: g,
            makeMacro: y,
            makeKeywordArgs: x,
            numArgs: I,
            suppressValue: l,
            ensureDefined: u,
            memberLookup: k,
            contextOrFrameLookup: b,
            callWrap: m,
            handleError: a,
            isArray: i.isArray,
            keys: i.keys,
            SafeString: T,
            copySafeness: C,
            markSafe: r,
            asyncEach: f,
            asyncAll: v,
            inOperator: i.inOperator,
            fromIterator: h
          };
        },
        /* 3 */
        /***/
        function(t, n, s) {
          function i(G, H) {
            for (var re = 0; re < H.length; re++) {
              var ie = H[re];
              ie.enumerable = ie.enumerable || !1, ie.configurable = !0, "value" in ie && (ie.writable = !0), Object.defineProperty(G, d(ie.key), ie);
            }
          }
          function c(G, H, re) {
            return H && i(G.prototype, H), re && i(G, re), Object.defineProperty(G, "prototype", { writable: !1 }), G;
          }
          function d(G) {
            var H = g(G, "string");
            return typeof H == "symbol" ? H : String(H);
          }
          function g(G, H) {
            if (typeof G != "object" || G === null)
              return G;
            var re = G[Symbol.toPrimitive];
            if (re !== void 0) {
              var ie = re.call(G, H || "default");
              if (typeof ie != "object")
                return ie;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (H === "string" ? String : Number)(G);
          }
          function y(G, H) {
            G.prototype = Object.create(H.prototype), G.prototype.constructor = G, x(G, H);
          }
          function x(G, H) {
            return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(ie, oe) {
              return ie.__proto__ = oe, ie;
            }, x(G, H);
          }
          var P = s(1), M = P.Obj;
          function I(G, H, re) {
            G instanceof H && re.push(G), G instanceof T && G.findAll(H, re);
          }
          var T = /* @__PURE__ */ function(G) {
            y(H, G);
            function H() {
              return G.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, ce) {
              for (var we = arguments, Se = this, Re = arguments.length, Bt = new Array(Re > 2 ? Re - 2 : 0), Be = 2; Be < Re; Be++)
                Bt[Be - 2] = arguments[Be];
              this.lineno = oe, this.colno = ce, this.fields.forEach(function(Ft, Mt) {
                var rt = we[Mt + 2];
                rt === void 0 && (rt = null), Se[Ft] = rt;
              });
            }, re.findAll = function(oe, ce) {
              var we = this;
              return ce = ce || [], this instanceof r ? this.children.forEach(function(Se) {
                return I(Se, oe, ce);
              }) : this.fields.forEach(function(Se) {
                return I(we[Se], oe, ce);
              }), ce;
            }, re.iterFields = function(oe) {
              var ce = this;
              this.fields.forEach(function(we) {
                oe(ce[we], we);
              });
            }, H;
          }(M), C = /* @__PURE__ */ function(G) {
            y(H, G);
            function H() {
              return G.apply(this, arguments) || this;
            }
            return c(H, [{
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
          }(T), r = /* @__PURE__ */ function(G) {
            y(H, G);
            function H() {
              return G.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, ce, we) {
              G.prototype.init.call(this, oe, ce, we || []);
            }, re.addChild = function(oe) {
              this.children.push(oe);
            }, c(H, [{
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
          }(T), l = r.extend("Root"), u = C.extend("Literal"), k = C.extend("Symbol"), m = r.extend("Group"), b = r.extend("Array"), a = T.extend("Pair", {
            fields: ["key", "value"]
          }), f = r.extend("Dict"), v = T.extend("LookupVal", {
            fields: ["target", "val"]
          }), h = T.extend("If", {
            fields: ["cond", "body", "else_"]
          }), p = h.extend("IfAsync"), w = T.extend("InlineIf", {
            fields: ["cond", "body", "else_"]
          }), _ = T.extend("For", {
            fields: ["arr", "name", "body", "else_"]
          }), A = _.extend("AsyncEach"), R = _.extend("AsyncAll"), N = T.extend("Macro", {
            fields: ["name", "args", "body"]
          }), B = N.extend("Caller"), K = T.extend("Import", {
            fields: ["template", "target", "withContext"]
          }), L = /* @__PURE__ */ function(G) {
            y(H, G);
            function H() {
              return G.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, ce, we, Se, Re) {
              G.prototype.init.call(this, oe, ce, we, Se || new r(), Re);
            }, c(H, [{
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
          }), S = E.extend("Filter"), j = S.extend("FilterAsync", {
            fields: ["name", "args", "symbol"]
          }), D = f.extend("KeywordArgs"), $ = T.extend("Block", {
            fields: ["name", "body"]
          }), ne = T.extend("Super", {
            fields: ["blockName", "symbol"]
          }), z = T.extend("TemplateRef", {
            fields: ["template"]
          }), ue = z.extend("Extends"), pe = T.extend("Include", {
            fields: ["template", "ignoreMissing"]
          }), X = T.extend("Set", {
            fields: ["targets", "value"]
          }), Z = T.extend("Switch", {
            fields: ["expr", "cases", "default"]
          }), q = T.extend("Case", {
            fields: ["cond", "body"]
          }), W = r.extend("Output"), Q = T.extend("Capture", {
            fields: ["body"]
          }), se = u.extend("TemplateData"), _e = T.extend("UnaryOp", {
            fields: ["target"]
          }), fe = T.extend("BinOp", {
            fields: ["left", "right"]
          }), Oe = fe.extend("In"), O = fe.extend("Is"), F = fe.extend("Or"), V = fe.extend("And"), U = _e.extend("Not"), Y = fe.extend("Add"), J = fe.extend("Concat"), ae = fe.extend("Sub"), ee = fe.extend("Mul"), le = fe.extend("Div"), Ee = fe.extend("FloorDiv"), ke = fe.extend("Mod"), Le = fe.extend("Pow"), Ct = _e.extend("Neg"), Nt = _e.extend("Pos"), It = T.extend("Compare", {
            fields: ["expr", "ops"]
          }), Rt = T.extend("CompareOperand", {
            fields: ["expr", "type"]
          }), it = T.extend("CallExtension", {
            init: function(H, re, ie, oe) {
              this.parent(), this.extName = H.__name || H, this.prop = re, this.args = ie || new r(), this.contentArgs = oe || [], this.autoescape = H.autoescape;
            },
            fields: ["extName", "prop", "args", "contentArgs"]
          }), Pt = it.extend("CallExtensionAsync");
          function Ne(G, H, re) {
            var ie = G.split(`
`);
            ie.forEach(function(oe, ce) {
              oe && (re && ce > 0 || !re) && process.stdout.write(" ".repeat(H));
              var we = ce === ie.length - 1 ? "" : `
`;
              process.stdout.write("" + oe + we);
            });
          }
          function Ie(G, H) {
            if (H = H || 0, Ne(G.typename + ": ", H), G instanceof r)
              Ne(`
`), G.children.forEach(function(oe) {
                Ie(oe, H + 2);
              });
            else if (G instanceof it)
              Ne(G.extName + "." + G.prop + `
`), G.args && Ie(G.args, H + 2), G.contentArgs && G.contentArgs.forEach(function(oe) {
                Ie(oe, H + 2);
              });
            else {
              var re = [], ie = null;
              G.iterFields(function(oe, ce) {
                oe instanceof T ? re.push([ce, oe]) : (ie = ie || {}, ie[ce] = oe);
              }), ie ? Ne(JSON.stringify(ie, null, 2) + `
`, null, !0) : Ne(`
`), re.forEach(function(oe) {
                var ce = oe[0], we = oe[1];
                Ne("[" + ce + "] =>", H + 2), Ie(we, H + 4);
              });
            }
          }
          t.exports = {
            Node: T,
            Root: l,
            NodeList: r,
            Value: C,
            Literal: u,
            Symbol: k,
            Group: m,
            Array: b,
            Pair: a,
            Dict: f,
            Output: W,
            Capture: Q,
            TemplateData: se,
            If: h,
            IfAsync: p,
            InlineIf: w,
            For: _,
            AsyncEach: A,
            AsyncAll: R,
            Macro: N,
            Caller: B,
            Import: K,
            FromImport: L,
            FunCall: E,
            Filter: S,
            FilterAsync: j,
            KeywordArgs: D,
            Block: $,
            Super: ne,
            Extends: ue,
            Include: pe,
            Set: X,
            Switch: Z,
            Case: q,
            LookupVal: v,
            BinOp: fe,
            In: Oe,
            Is: O,
            Or: F,
            And: V,
            Not: U,
            Add: Y,
            Concat: J,
            Sub: ae,
            Mul: ee,
            Div: le,
            FloorDiv: Ee,
            Mod: ke,
            Pow: Le,
            Neg: Ct,
            Pos: Nt,
            Compare: It,
            CompareOperand: Rt,
            CallExtension: it,
            CallExtensionAsync: Pt,
            printNodes: Ie
          };
        },
        /* 4 */
        /***/
        function(t, n) {
        },
        /* 5 */
        /***/
        function(t, n, s) {
          function i(u, k) {
            u.prototype = Object.create(k.prototype), u.prototype.constructor = u, c(u, k);
          }
          function c(u, k) {
            return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(b, a) {
              return b.__proto__ = a, b;
            }, c(u, k);
          }
          var d = s(8), g = s(17), y = s(3), x = s(0), P = x.TemplateError, M = s(2), I = M.Frame, T = s(1), C = T.Obj, r = {
            "==": "==",
            "===": "===",
            "!=": "!=",
            "!==": "!==",
            "<": "<",
            ">": ">",
            "<=": "<=",
            ">=": ">="
          }, l = /* @__PURE__ */ function(u) {
            i(k, u);
            function k() {
              return u.apply(this, arguments) || this;
            }
            var m = k.prototype;
            return m.init = function(a, f) {
              this.templateName = a, this.codebuf = [], this.lastId = 0, this.buffer = null, this.bufferStack = [], this._scopeClosers = "", this.inBlock = !1, this.throwOnUndefined = f;
            }, m.fail = function(a, f, v) {
              throw f !== void 0 && (f += 1), v !== void 0 && (v += 1), new P(a, f, v);
            }, m._pushBuffer = function() {
              var a = this._tmpid();
              return this.bufferStack.push(this.buffer), this.buffer = a, this._emit("var " + this.buffer + ' = "";'), a;
            }, m._popBuffer = function() {
              this.buffer = this.bufferStack.pop();
            }, m._emit = function(a) {
              this.codebuf.push(a);
            }, m._emitLine = function(a) {
              this._emit(a + `
`);
            }, m._emitLines = function() {
              for (var a = this, f = arguments.length, v = new Array(f), h = 0; h < f; h++)
                v[h] = arguments[h];
              v.forEach(function(p) {
                return a._emitLine(p);
              });
            }, m._emitFuncBegin = function(a, f) {
              this.buffer = "output", this._scopeClosers = "", this._emitLine("function " + f + "(env, context, frame, runtime, cb) {"), this._emitLine("var lineno = " + a.lineno + ";"), this._emitLine("var colno = " + a.colno + ";"), this._emitLine("var " + this.buffer + ' = "";'), this._emitLine("try {");
            }, m._emitFuncEnd = function(a) {
              a || this._emitLine("cb(null, " + this.buffer + ");"), this._closeScopeLevels(), this._emitLine("} catch (e) {"), this._emitLine("  cb(runtime.handleError(e, lineno, colno));"), this._emitLine("}"), this._emitLine("}"), this.buffer = null;
            }, m._addScopeLevel = function() {
              this._scopeClosers += "})";
            }, m._closeScopeLevels = function() {
              this._emitLine(this._scopeClosers + ";"), this._scopeClosers = "";
            }, m._withScopedSyntax = function(a) {
              var f = this._scopeClosers;
              this._scopeClosers = "", a.call(this), this._closeScopeLevels(), this._scopeClosers = f;
            }, m._makeCallback = function(a) {
              var f = this._tmpid();
              return "function(" + f + (a ? "," + a : "") + `) {
if(` + f + ") { cb(" + f + "); return; }";
            }, m._tmpid = function() {
              return this.lastId++, "t_" + this.lastId;
            }, m._templateName = function() {
              return this.templateName == null ? "undefined" : JSON.stringify(this.templateName);
            }, m._compileChildren = function(a, f) {
              var v = this;
              a.children.forEach(function(h) {
                v.compile(h, f);
              });
            }, m._compileAggregate = function(a, f, v, h) {
              var p = this;
              v && this._emit(v), a.children.forEach(function(w, _) {
                _ > 0 && p._emit(","), p.compile(w, f);
              }), h && this._emit(h);
            }, m._compileExpression = function(a, f) {
              this.assertType(a, y.Literal, y.Symbol, y.Group, y.Array, y.Dict, y.FunCall, y.Caller, y.Filter, y.LookupVal, y.Compare, y.InlineIf, y.In, y.Is, y.And, y.Or, y.Not, y.Add, y.Concat, y.Sub, y.Mul, y.Div, y.FloorDiv, y.Mod, y.Pow, y.Neg, y.Pos, y.Compare, y.NodeList), this.compile(a, f);
            }, m.assertType = function(a) {
              for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), h = 1; h < f; h++)
                v[h - 1] = arguments[h];
              v.some(function(p) {
                return a instanceof p;
              }) || this.fail("assertType: invalid type: " + a.typename, a.lineno, a.colno);
            }, m.compileCallExtension = function(a, f, v) {
              var h = this, p = a.args, w = a.contentArgs, _ = typeof a.autoescape == "boolean" ? a.autoescape : !0;
              if (v || this._emit(this.buffer + " += runtime.suppressValue("), this._emit('env.getExtension("' + a.extName + '")["' + a.prop + '"]('), this._emit("context"), (p || w) && this._emit(","), p && (p instanceof y.NodeList || this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"), p.children.forEach(function(R, N) {
                h._compileExpression(R, f), (N !== p.children.length - 1 || w.length) && h._emit(",");
              })), w.length && w.forEach(function(R, N) {
                if (N > 0 && h._emit(","), R) {
                  h._emitLine("function(cb) {"), h._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");
                  var B = h._pushBuffer();
                  h._withScopedSyntax(function() {
                    h.compile(R, f), h._emitLine("cb(null, " + B + ");");
                  }), h._popBuffer(), h._emitLine("return " + B + ";"), h._emitLine("}");
                } else
                  h._emit("null");
              }), v) {
                var A = this._tmpid();
                this._emitLine(", " + this._makeCallback(A)), this._emitLine(this.buffer + " += runtime.suppressValue(" + A + ", " + _ + " && env.opts.autoescape);"), this._addScopeLevel();
              } else
                this._emit(")"), this._emit(", " + _ + ` && env.opts.autoescape);
`);
            }, m.compileCallExtensionAsync = function(a, f) {
              this.compileCallExtension(a, f, !0);
            }, m.compileNodeList = function(a, f) {
              this._compileChildren(a, f);
            }, m.compileLiteral = function(a) {
              if (typeof a.value == "string") {
                var f = a.value.replace(/\\/g, "\\\\");
                f = f.replace(/"/g, '\\"'), f = f.replace(/\n/g, "\\n"), f = f.replace(/\r/g, "\\r"), f = f.replace(/\t/g, "\\t"), f = f.replace(/\u2028/g, "\\u2028"), this._emit('"' + f + '"');
              } else
                a.value === null ? this._emit("null") : this._emit(a.value.toString());
            }, m.compileSymbol = function(a, f) {
              var v = a.value, h = f.lookup(v);
              h ? this._emit(h) : this._emit('runtime.contextOrFrameLookup(context, frame, "' + v + '")');
            }, m.compileGroup = function(a, f) {
              this._compileAggregate(a, f, "(", ")");
            }, m.compileArray = function(a, f) {
              this._compileAggregate(a, f, "[", "]");
            }, m.compileDict = function(a, f) {
              this._compileAggregate(a, f, "{", "}");
            }, m.compilePair = function(a, f) {
              var v = a.key, h = a.value;
              v instanceof y.Symbol ? v = new y.Literal(v.lineno, v.colno, v.value) : v instanceof y.Literal && typeof v.value == "string" || this.fail("compilePair: Dict keys must be strings or names", v.lineno, v.colno), this.compile(v, f), this._emit(": "), this._compileExpression(h, f);
            }, m.compileInlineIf = function(a, f) {
              this._emit("("), this.compile(a.cond, f), this._emit("?"), this.compile(a.body, f), this._emit(":"), a.else_ !== null ? this.compile(a.else_, f) : this._emit('""'), this._emit(")");
            }, m.compileIn = function(a, f) {
              this._emit("runtime.inOperator("), this.compile(a.left, f), this._emit(","), this.compile(a.right, f), this._emit(")");
            }, m.compileIs = function(a, f) {
              var v = a.right.name ? a.right.name.value : a.right.value;
              this._emit('env.getTest("' + v + '").call(context, '), this.compile(a.left, f), a.right.args && (this._emit(","), this.compile(a.right.args, f)), this._emit(") === true");
            }, m._binOpEmitter = function(a, f, v) {
              this.compile(a.left, f), this._emit(v), this.compile(a.right, f);
            }, m.compileOr = function(a, f) {
              return this._binOpEmitter(a, f, " || ");
            }, m.compileAnd = function(a, f) {
              return this._binOpEmitter(a, f, " && ");
            }, m.compileAdd = function(a, f) {
              return this._binOpEmitter(a, f, " + ");
            }, m.compileConcat = function(a, f) {
              return this._binOpEmitter(a, f, ' + "" + ');
            }, m.compileSub = function(a, f) {
              return this._binOpEmitter(a, f, " - ");
            }, m.compileMul = function(a, f) {
              return this._binOpEmitter(a, f, " * ");
            }, m.compileDiv = function(a, f) {
              return this._binOpEmitter(a, f, " / ");
            }, m.compileMod = function(a, f) {
              return this._binOpEmitter(a, f, " % ");
            }, m.compileNot = function(a, f) {
              this._emit("!"), this.compile(a.target, f);
            }, m.compileFloorDiv = function(a, f) {
              this._emit("Math.floor("), this.compile(a.left, f), this._emit(" / "), this.compile(a.right, f), this._emit(")");
            }, m.compilePow = function(a, f) {
              this._emit("Math.pow("), this.compile(a.left, f), this._emit(", "), this.compile(a.right, f), this._emit(")");
            }, m.compileNeg = function(a, f) {
              this._emit("-"), this.compile(a.target, f);
            }, m.compilePos = function(a, f) {
              this._emit("+"), this.compile(a.target, f);
            }, m.compileCompare = function(a, f) {
              var v = this;
              this.compile(a.expr, f), a.ops.forEach(function(h) {
                v._emit(" " + r[h.type] + " "), v.compile(h.expr, f);
              });
            }, m.compileLookupVal = function(a, f) {
              this._emit("runtime.memberLookup(("), this._compileExpression(a.target, f), this._emit("),"), this._compileExpression(a.val, f), this._emit(")");
            }, m._getNodeName = function(a) {
              switch (a.typename) {
                case "Symbol":
                  return a.value;
                case "FunCall":
                  return "the return value of (" + this._getNodeName(a.name) + ")";
                case "LookupVal":
                  return this._getNodeName(a.target) + '["' + this._getNodeName(a.val) + '"]';
                case "Literal":
                  return a.value.toString();
                default:
                  return "--expression--";
              }
            }, m.compileFunCall = function(a, f) {
              this._emit("(lineno = " + a.lineno + ", colno = " + a.colno + ", "), this._emit("runtime.callWrap("), this._compileExpression(a.name, f), this._emit(', "' + this._getNodeName(a.name).replace(/"/g, '\\"') + '", context, '), this._compileAggregate(a.args, f, "[", "])"), this._emit(")");
            }, m.compileFilter = function(a, f) {
              var v = a.name;
              this.assertType(v, y.Symbol), this._emit('env.getFilter("' + v.value + '").call(context, '), this._compileAggregate(a.args, f), this._emit(")");
            }, m.compileFilterAsync = function(a, f) {
              var v = a.name, h = a.symbol.value;
              this.assertType(v, y.Symbol), f.set(h, h), this._emit('env.getFilter("' + v.value + '").call(context, '), this._compileAggregate(a.args, f), this._emitLine(", " + this._makeCallback(h)), this._addScopeLevel();
            }, m.compileKeywordArgs = function(a, f) {
              this._emit("runtime.makeKeywordArgs("), this.compileDict(a, f), this._emit(")");
            }, m.compileSet = function(a, f) {
              var v = this, h = [];
              a.targets.forEach(function(p) {
                var w = p.value, _ = f.lookup(w);
                _ == null && (_ = v._tmpid(), v._emitLine("var " + _ + ";")), h.push(_);
              }), a.value ? (this._emit(h.join(" = ") + " = "), this._compileExpression(a.value, f), this._emitLine(";")) : (this._emit(h.join(" = ") + " = "), this.compile(a.body, f), this._emitLine(";")), a.targets.forEach(function(p, w) {
                var _ = h[w], A = p.value;
                v._emitLine('frame.set("' + A + '", ' + _ + ", true);"), v._emitLine("if(frame.topLevel) {"), v._emitLine('context.setVariable("' + A + '", ' + _ + ");"), v._emitLine("}"), A.charAt(0) !== "_" && (v._emitLine("if(frame.topLevel) {"), v._emitLine('context.addExport("' + A + '", ' + _ + ");"), v._emitLine("}"));
              });
            }, m.compileSwitch = function(a, f) {
              var v = this;
              this._emit("switch ("), this.compile(a.expr, f), this._emit(") {"), a.cases.forEach(function(h, p) {
                v._emit("case "), v.compile(h.cond, f), v._emit(": "), v.compile(h.body, f), h.body.children.length && v._emitLine("break;");
              }), a.default && (this._emit("default:"), this.compile(a.default, f)), this._emit("}");
            }, m.compileIf = function(a, f, v) {
              var h = this;
              this._emit("if("), this._compileExpression(a.cond, f), this._emitLine(") {"), this._withScopedSyntax(function() {
                h.compile(a.body, f), v && h._emit("cb()");
              }), a.else_ ? (this._emitLine(`}
else {`), this._withScopedSyntax(function() {
                h.compile(a.else_, f), v && h._emit("cb()");
              })) : v && (this._emitLine(`}
else {`), this._emit("cb()")), this._emitLine("}");
            }, m.compileIfAsync = function(a, f) {
              this._emit("(function(cb) {"), this.compileIf(a, f, !0), this._emit("})(" + this._makeCallback()), this._addScopeLevel();
            }, m._emitLoopBindings = function(a, f, v, h) {
              var p = this, w = [{
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
              w.forEach(function(_) {
                p._emitLine('frame.set("loop.' + _.name + '", ' + _.val + ");");
              });
            }, m.compileFor = function(a, f) {
              var v = this, h = this._tmpid(), p = this._tmpid(), w = this._tmpid();
              if (f = f.push(), this._emitLine("frame = frame.push();"), this._emit("var " + w + " = "), this._compileExpression(a.arr, f), this._emitLine(";"), this._emit("if(" + w + ") {"), this._emitLine(w + " = runtime.fromIterator(" + w + ");"), a.name instanceof y.Array) {
                this._emitLine("var " + h + ";"), this._emitLine("if(runtime.isArray(" + w + ")) {"), this._emitLine("var " + p + " = " + w + ".length;"), this._emitLine("for(" + h + "=0; " + h + " < " + w + ".length; " + h + "++) {"), a.name.children.forEach(function(L, E) {
                  var S = v._tmpid();
                  v._emitLine("var " + S + " = " + w + "[" + h + "][" + E + "];"), v._emitLine('frame.set("' + L + '", ' + w + "[" + h + "][" + E + "]);"), f.set(a.name.children[E].value, S);
                }), this._emitLoopBindings(a, w, h, p), this._withScopedSyntax(function() {
                  v.compile(a.body, f);
                }), this._emitLine("}"), this._emitLine("} else {");
                var _ = a.name.children, A = _[0], R = _[1], N = this._tmpid(), B = this._tmpid();
                f.set(A.value, N), f.set(R.value, B), this._emitLine(h + " = -1;"), this._emitLine("var " + p + " = runtime.keys(" + w + ").length;"), this._emitLine("for(var " + N + " in " + w + ") {"), this._emitLine(h + "++;"), this._emitLine("var " + B + " = " + w + "[" + N + "];"), this._emitLine('frame.set("' + A.value + '", ' + N + ");"), this._emitLine('frame.set("' + R.value + '", ' + B + ");"), this._emitLoopBindings(a, w, h, p), this._withScopedSyntax(function() {
                  v.compile(a.body, f);
                }), this._emitLine("}"), this._emitLine("}");
              } else {
                var K = this._tmpid();
                f.set(a.name.value, K), this._emitLine("var " + p + " = " + w + ".length;"), this._emitLine("for(var " + h + "=0; " + h + " < " + w + ".length; " + h + "++) {"), this._emitLine("var " + K + " = " + w + "[" + h + "];"), this._emitLine('frame.set("' + a.name.value + '", ' + K + ");"), this._emitLoopBindings(a, w, h, p), this._withScopedSyntax(function() {
                  v.compile(a.body, f);
                }), this._emitLine("}");
              }
              this._emitLine("}"), a.else_ && (this._emitLine("if (!" + p + ") {"), this.compile(a.else_, f), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, m._compileAsyncLoop = function(a, f, v) {
              var h = this, p = this._tmpid(), w = this._tmpid(), _ = this._tmpid(), A = v ? "asyncAll" : "asyncEach";
              if (f = f.push(), this._emitLine("frame = frame.push();"), this._emit("var " + _ + " = runtime.fromIterator("), this._compileExpression(a.arr, f), this._emitLine(");"), a.name instanceof y.Array) {
                var R = a.name.children.length;
                this._emit("runtime." + A + "(" + _ + ", " + R + ", function("), a.name.children.forEach(function(K) {
                  h._emit(K.value + ",");
                }), this._emit(p + "," + w + ",next) {"), a.name.children.forEach(function(K) {
                  var L = K.value;
                  f.set(L, L), h._emitLine('frame.set("' + L + '", ' + L + ");");
                });
              } else {
                var N = a.name.value;
                this._emitLine("runtime." + A + "(" + _ + ", 1, function(" + N + ", " + p + ", " + w + ",next) {"), this._emitLine('frame.set("' + N + '", ' + N + ");"), f.set(N, N);
              }
              this._emitLoopBindings(a, _, p, w), this._withScopedSyntax(function() {
                var K;
                v && (K = h._pushBuffer()), h.compile(a.body, f), h._emitLine("next(" + p + (K ? "," + K : "") + ");"), v && h._popBuffer();
              });
              var B = this._tmpid();
              this._emitLine("}, " + this._makeCallback(B)), this._addScopeLevel(), v && this._emitLine(this.buffer + " += " + B + ";"), a.else_ && (this._emitLine("if (!" + _ + ".length) {"), this.compile(a.else_, f), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, m.compileAsyncEach = function(a, f) {
              this._compileAsyncLoop(a, f);
            }, m.compileAsyncAll = function(a, f) {
              this._compileAsyncLoop(a, f, !0);
            }, m._compileMacro = function(a, f) {
              var v = this, h = [], p = null, w = "macro_" + this._tmpid(), _ = f !== void 0;
              a.args.children.forEach(function(L, E) {
                E === a.args.children.length - 1 && L instanceof y.Dict ? p = L : (v.assertType(L, y.Symbol), h.push(L));
              });
              var A = [].concat(h.map(function(L) {
                return "l_" + L.value;
              }), ["kwargs"]), R = h.map(function(L) {
                return '"' + L.value + '"';
              }), N = (p && p.children || []).map(function(L) {
                return '"' + L.key.value + '"';
              }), B;
              _ ? B = f.push(!0) : B = new I(), this._emitLines("var " + w + " = runtime.makeMacro(", "[" + R.join(", ") + "], ", "[" + N.join(", ") + "], ", "function (" + A.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (_ ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'), h.forEach(function(L) {
                v._emitLine('frame.set("' + L.value + '", l_' + L.value + ");"), B.set(L.value, "l_" + L.value);
              }), p && p.children.forEach(function(L) {
                var E = L.key.value;
                v._emit('frame.set("' + E + '", '), v._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + E + '")'), v._emit(' ? kwargs["' + E + '"] : '), v._compileExpression(L.value, B), v._emit(");");
              });
              var K = this._pushBuffer();
              return this._withScopedSyntax(function() {
                v.compile(a.body, B);
              }), this._emitLine("frame = " + (_ ? "frame.pop();" : "callerFrame;")), this._emitLine("return new runtime.SafeString(" + K + ");"), this._emitLine("});"), this._popBuffer(), w;
            }, m.compileMacro = function(a, f) {
              var v = this._compileMacro(a), h = a.name.value;
              f.set(h, v), f.parent ? this._emitLine('frame.set("' + h + '", ' + v + ");") : (a.name.value.charAt(0) !== "_" && this._emitLine('context.addExport("' + h + '");'), this._emitLine('context.setVariable("' + h + '", ' + v + ");"));
            }, m.compileCaller = function(a, f) {
              this._emit("(function (){");
              var v = this._compileMacro(a, f);
              this._emit("return " + v + ";})()");
            }, m._compileGetTemplate = function(a, f, v, h) {
              var p = this._tmpid(), w = this._templateName(), _ = this._makeCallback(p), A = v ? "true" : "false", R = h ? "true" : "false";
              return this._emit("env.getTemplate("), this._compileExpression(a.template, f), this._emitLine(", " + A + ", " + w + ", " + R + ", " + _), p;
            }, m.compileImport = function(a, f) {
              var v = a.target.value, h = this._compileGetTemplate(a, f, !1, !1);
              this._addScopeLevel(), this._emitLine(h + ".getExported(" + (a.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(h)), this._addScopeLevel(), f.set(v, h), f.parent ? this._emitLine('frame.set("' + v + '", ' + h + ");") : this._emitLine('context.setVariable("' + v + '", ' + h + ");");
            }, m.compileFromImport = function(a, f) {
              var v = this, h = this._compileGetTemplate(a, f, !1, !1);
              this._addScopeLevel(), this._emitLine(h + ".getExported(" + (a.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(h)), this._addScopeLevel(), a.names.children.forEach(function(p) {
                var w, _, A = v._tmpid();
                p instanceof y.Pair ? (w = p.key.value, _ = p.value.value) : (w = p.value, _ = w), v._emitLine("if(Object.prototype.hasOwnProperty.call(" + h + ', "' + w + '")) {'), v._emitLine("var " + A + " = " + h + "." + w + ";"), v._emitLine("} else {"), v._emitLine(`cb(new Error("cannot import '` + w + `'")); return;`), v._emitLine("}"), f.set(_, A), f.parent ? v._emitLine('frame.set("' + _ + '", ' + A + ");") : v._emitLine('context.setVariable("' + _ + '", ' + A + ");");
              });
            }, m.compileBlock = function(a) {
              var f = this._tmpid();
              this.inBlock || this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '), this._emit('context.getBlock("' + a.name.value + '")'), this.inBlock || this._emit(")"), this._emitLine("(env, context, frame, runtime, " + this._makeCallback(f)), this._emitLine(this.buffer + " += " + f + ";"), this._addScopeLevel();
            }, m.compileSuper = function(a, f) {
              var v = a.blockName.value, h = a.symbol.value, p = this._makeCallback(h);
              this._emitLine('context.getSuper(env, "' + v + '", b_' + v + ", frame, runtime, " + p), this._emitLine(h + " = runtime.markSafe(" + h + ");"), this._addScopeLevel(), f.set(h, h);
            }, m.compileExtends = function(a, f) {
              var v = this._tmpid(), h = this._compileGetTemplate(a, f, !0, !1);
              this._emitLine("parentTemplate = " + h), this._emitLine("for(var " + v + " in parentTemplate.blocks) {"), this._emitLine("context.addBlock(" + v + ", parentTemplate.blocks[" + v + "]);"), this._emitLine("}"), this._addScopeLevel();
            }, m.compileInclude = function(a, f) {
              this._emitLine("var tasks = [];"), this._emitLine("tasks.push("), this._emitLine("function(callback) {");
              var v = this._compileGetTemplate(a, f, !1, a.ignoreMissing);
              this._emitLine("callback(null," + v + ");});"), this._emitLine("});");
              var h = this._tmpid();
              this._emitLine("tasks.push("), this._emitLine("function(template, callback){"), this._emitLine("template.render(context.getVariables(), frame, " + this._makeCallback(h)), this._emitLine("callback(null," + h + ");});"), this._emitLine("});"), this._emitLine("tasks.push("), this._emitLine("function(result, callback){"), this._emitLine(this.buffer + " += result;"), this._emitLine("callback(null);"), this._emitLine("});"), this._emitLine("env.waterfall(tasks, function(){"), this._addScopeLevel();
            }, m.compileTemplateData = function(a, f) {
              this.compileLiteral(a, f);
            }, m.compileCapture = function(a, f) {
              var v = this, h = this.buffer;
              this.buffer = "output", this._emitLine("(function() {"), this._emitLine('var output = "";'), this._withScopedSyntax(function() {
                v.compile(a.body, f);
              }), this._emitLine("return output;"), this._emitLine("})()"), this.buffer = h;
            }, m.compileOutput = function(a, f) {
              var v = this, h = a.children;
              h.forEach(function(p) {
                p instanceof y.TemplateData ? p.value && (v._emit(v.buffer + " += "), v.compileLiteral(p, f), v._emitLine(";")) : (v._emit(v.buffer + " += runtime.suppressValue("), v.throwOnUndefined && v._emit("runtime.ensureDefined("), v.compile(p, f), v.throwOnUndefined && v._emit("," + a.lineno + "," + a.colno + ")"), v._emit(`, env.opts.autoescape);
`));
              });
            }, m.compileRoot = function(a, f) {
              var v = this;
              f && this.fail("compileRoot: root node can't have frame"), f = new I(), this._emitFuncBegin(a, "root"), this._emitLine("var parentTemplate = null;"), this._compileChildren(a, f), this._emitLine("if(parentTemplate) {"), this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"), this._emitLine("} else {"), this._emitLine("cb(null, " + this.buffer + ");"), this._emitLine("}"), this._emitFuncEnd(!0), this.inBlock = !0;
              var h = [], p = a.findAll(y.Block);
              p.forEach(function(w, _) {
                var A = w.name.value;
                if (h.indexOf(A) !== -1)
                  throw new Error('Block "' + A + '" defined more than once.');
                h.push(A), v._emitFuncBegin(w, "b_" + A);
                var R = new I();
                v._emitLine("var frame = frame.push(true);"), v.compile(w.body, R), v._emitFuncEnd();
              }), this._emitLine("return {"), p.forEach(function(w, _) {
                var A = "b_" + w.name.value;
                v._emitLine(A + ": " + A + ",");
              }), this._emitLine(`root: root
};`);
            }, m.compile = function(a, f) {
              var v = this["compile" + a.typename];
              v ? v.call(this, a, f) : this.fail("compile: Cannot compile node: " + a.typename, a.lineno, a.colno);
            }, m.getCode = function() {
              return this.codebuf.join("");
            }, k;
          }(C);
          t.exports = {
            compile: function(k, m, b, a, f) {
              f === void 0 && (f = {});
              var v = new l(a, f.throwOnUndefined), h = (b || []).map(function(w) {
                return w.preprocess;
              }).filter(function(w) {
                return !!w;
              }), p = h.reduce(function(w, _) {
                return _(w);
              }, k);
              return v.compile(g.transform(d.parse(p, b, f), m, a)), v.getCode();
            },
            Compiler: l
          };
        },
        /* 6 */
        /***/
        function(t, n, s) {
          function i(x, P) {
            x.prototype = Object.create(P.prototype), x.prototype.constructor = x, c(x, P);
          }
          function c(x, P) {
            return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(I, T) {
              return I.__proto__ = T, I;
            }, c(x, P);
          }
          var d = s(4), g = s(1), y = g.EmitterObj;
          t.exports = /* @__PURE__ */ function(x) {
            i(P, x);
            function P() {
              return x.apply(this, arguments) || this;
            }
            var M = P.prototype;
            return M.resolve = function(T, C) {
              return d.resolve(d.dirname(T), C);
            }, M.isRelative = function(T) {
              return T.indexOf("./") === 0 || T.indexOf("../") === 0;
            }, P;
          }(y);
        },
        /* 7 */
        /***/
        function(t, n, s) {
          function i(R, N) {
            R.prototype = Object.create(N.prototype), R.prototype.constructor = R, c(R, N);
          }
          function c(R, N) {
            return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(K, L) {
              return K.__proto__ = L, K;
            }, c(R, N);
          }
          var d = s(12), g = s(15), y = s(0), x = s(5), P = s(18), M = s(10), I = M.FileSystemLoader, T = M.WebLoader, C = M.PrecompiledLoader, r = s(20), l = s(21), u = s(1), k = u.Obj, m = u.EmitterObj, b = s(2), a = b.handleError, f = b.Frame, v = s(22);
          function h(R, N, B) {
            d(function() {
              R(N, B);
            });
          }
          var p = {
            type: "code",
            obj: {
              root: function(N, B, K, L, E) {
                try {
                  E(null, "");
                } catch (S) {
                  E(a(S, null, null));
                }
              }
            }
          }, w = /* @__PURE__ */ function(R) {
            i(N, R);
            function N() {
              return R.apply(this, arguments) || this;
            }
            var B = N.prototype;
            return B.init = function(L, E) {
              var S = this;
              E = this.opts = E || {}, this.opts.dev = !!E.dev, this.opts.autoescape = E.autoescape != null ? E.autoescape : !0, this.opts.throwOnUndefined = !!E.throwOnUndefined, this.opts.trimBlocks = !!E.trimBlocks, this.opts.lstripBlocks = !!E.lstripBlocks, this.loaders = [], L ? this.loaders = y.isArray(L) ? L : [L] : I ? this.loaders = [new I("views")] : T && (this.loaders = [new T("/views")]), typeof window < "u" && window.nunjucksPrecompiled && this.loaders.unshift(new C(window.nunjucksPrecompiled)), this._initLoaders(), this.globals = l(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], y._entries(P).forEach(function(j) {
                var D = j[0], $ = j[1];
                return S.addFilter(D, $);
              }), y._entries(r).forEach(function(j) {
                var D = j[0], $ = j[1];
                return S.addTest(D, $);
              });
            }, B._initLoaders = function() {
              var L = this;
              this.loaders.forEach(function(E) {
                E.cache = {}, typeof E.on == "function" && (E.on("update", function(S, j) {
                  E.cache[S] = null, L.emit("update", S, j, E);
                }), E.on("load", function(S, j) {
                  L.emit("load", S, j, E);
                }));
              });
            }, B.invalidateCache = function() {
              this.loaders.forEach(function(L) {
                L.cache = {};
              });
            }, B.addExtension = function(L, E) {
              return E.__name = L, this.extensions[L] = E, this.extensionsList.push(E), this;
            }, B.removeExtension = function(L) {
              var E = this.getExtension(L);
              E && (this.extensionsList = y.without(this.extensionsList, E), delete this.extensions[L]);
            }, B.getExtension = function(L) {
              return this.extensions[L];
            }, B.hasExtension = function(L) {
              return !!this.extensions[L];
            }, B.addGlobal = function(L, E) {
              return this.globals[L] = E, this;
            }, B.getGlobal = function(L) {
              if (typeof this.globals[L] > "u")
                throw new Error("global not found: " + L);
              return this.globals[L];
            }, B.addFilter = function(L, E, S) {
              var j = E;
              return S && this.asyncFilters.push(L), this.filters[L] = j, this;
            }, B.getFilter = function(L) {
              if (!this.filters[L])
                throw new Error("filter not found: " + L);
              return this.filters[L];
            }, B.addTest = function(L, E) {
              return this.tests[L] = E, this;
            }, B.getTest = function(L) {
              if (!this.tests[L])
                throw new Error("test not found: " + L);
              return this.tests[L];
            }, B.resolveTemplate = function(L, E, S) {
              var j = L.isRelative && E ? L.isRelative(S) : !1;
              return j && L.resolve ? L.resolve(E, S) : S;
            }, B.getTemplate = function(L, E, S, j, D) {
              var $ = this, ne = this, z = null;
              if (L && L.raw && (L = L.raw), y.isFunction(S) && (D = S, S = null, E = E || !1), y.isFunction(E) && (D = E, E = !1), L instanceof A)
                z = L;
              else {
                if (typeof L != "string")
                  throw new Error("template names must be a string: " + L);
                for (var ue = 0; ue < this.loaders.length; ue++) {
                  var pe = this.loaders[ue];
                  if (z = pe.cache[this.resolveTemplate(pe, S, L)], z)
                    break;
                }
              }
              if (z)
                if (E && z.compile(), D) {
                  D(null, z);
                  return;
                } else
                  return z;
              var X, Z = function(W, Q) {
                if (!Q && !W && !j && (W = new Error("template not found: " + L)), W)
                  if (D) {
                    D(W);
                    return;
                  } else
                    throw W;
                var se;
                Q ? (se = new A(Q.src, $, Q.path, E), Q.noCache || (Q.loader.cache[L] = se)) : se = new A(p, $, "", E), D ? D(null, se) : X = se;
              };
              return y.asyncIter(this.loaders, function(q, W, Q, se) {
                function _e(fe, Oe) {
                  fe ? se(fe) : Oe ? (Oe.loader = q, se(null, Oe)) : Q();
                }
                L = ne.resolveTemplate(q, S, L), q.async ? q.getSource(L, _e) : _e(null, q.getSource(L));
              }, Z), X;
            }, B.express = function(L) {
              return v(this, L);
            }, B.render = function(L, E, S) {
              y.isFunction(E) && (S = E, E = null);
              var j = null;
              return this.getTemplate(L, function(D, $) {
                if (D && S)
                  h(S, D);
                else {
                  if (D)
                    throw D;
                  j = $.render(E, S);
                }
              }), j;
            }, B.renderString = function(L, E, S, j) {
              y.isFunction(S) && (j = S, S = {}), S = S || {};
              var D = new A(L, this, S.path);
              return D.render(E, j);
            }, B.waterfall = function(L, E, S) {
              return g(L, E, S);
            }, N;
          }(m), _ = /* @__PURE__ */ function(R) {
            i(N, R);
            function N() {
              return R.apply(this, arguments) || this;
            }
            var B = N.prototype;
            return B.init = function(L, E, S) {
              var j = this;
              this.env = S || new w(), this.ctx = y.extend({}, L), this.blocks = {}, this.exported = [], y.keys(E).forEach(function(D) {
                j.addBlock(D, E[D]);
              });
            }, B.lookup = function(L) {
              return L in this.env.globals && !(L in this.ctx) ? this.env.globals[L] : this.ctx[L];
            }, B.setVariable = function(L, E) {
              this.ctx[L] = E;
            }, B.getVariables = function() {
              return this.ctx;
            }, B.addBlock = function(L, E) {
              return this.blocks[L] = this.blocks[L] || [], this.blocks[L].push(E), this;
            }, B.getBlock = function(L) {
              if (!this.blocks[L])
                throw new Error('unknown block "' + L + '"');
              return this.blocks[L][0];
            }, B.getSuper = function(L, E, S, j, D, $) {
              var ne = y.indexOf(this.blocks[E] || [], S), z = this.blocks[E][ne + 1], ue = this;
              if (ne === -1 || !z)
                throw new Error('no super block available for "' + E + '"');
              z(L, ue, j, D, $);
            }, B.addExport = function(L) {
              this.exported.push(L);
            }, B.getExported = function() {
              var L = this, E = {};
              return this.exported.forEach(function(S) {
                E[S] = L.ctx[S];
              }), E;
            }, N;
          }(k), A = /* @__PURE__ */ function(R) {
            i(N, R);
            function N() {
              return R.apply(this, arguments) || this;
            }
            var B = N.prototype;
            return B.init = function(L, E, S, j) {
              if (this.env = E || new w(), y.isObject(L))
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
              else if (y.isString(L))
                this.tmplStr = L;
              else
                throw new Error("src must be a string or an object describing the source");
              if (this.path = S, j)
                try {
                  this._compile();
                } catch (D) {
                  throw y._prettifyError(this.path, this.env.opts.dev, D);
                }
              else
                this.compiled = !1;
            }, B.render = function(L, E, S) {
              var j = this;
              typeof L == "function" ? (S = L, L = {}) : typeof E == "function" && (S = E, E = null);
              var D = !E;
              try {
                this.compile();
              } catch (X) {
                var $ = y._prettifyError(this.path, this.env.opts.dev, X);
                if (S)
                  return h(S, $);
                throw $;
              }
              var ne = new _(L || {}, this.blocks, this.env), z = E ? E.push(!0) : new f();
              z.topLevel = !0;
              var ue = null, pe = !1;
              return this.rootRenderFunc(this.env, ne, z, b, function(X, Z) {
                if (!(pe && S && typeof Z < "u"))
                  if (X && (X = y._prettifyError(j.path, j.env.opts.dev, X), pe = !0), S)
                    D ? h(S, X, Z) : S(X, Z);
                  else {
                    if (X)
                      throw X;
                    ue = Z;
                  }
              }), ue;
            }, B.getExported = function(L, E, S) {
              typeof L == "function" && (S = L, L = {}), typeof E == "function" && (S = E, E = null);
              try {
                this.compile();
              } catch ($) {
                if (S)
                  return S($);
                throw $;
              }
              var j = E ? E.push() : new f();
              j.topLevel = !0;
              var D = new _(L || {}, this.blocks, this.env);
              this.rootRenderFunc(this.env, D, j, b, function($) {
                $ ? S($, null) : S(null, D.getExported());
              });
            }, B.compile = function() {
              this.compiled || this._compile();
            }, B._compile = function() {
              var L;
              if (this.tmplProps)
                L = this.tmplProps;
              else {
                var E = x.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), S = new Function(E);
                L = S();
              }
              this.blocks = this._getBlocks(L), this.rootRenderFunc = L.root, this.compiled = !0;
            }, B._getBlocks = function(L) {
              var E = {};
              return y.keys(L).forEach(function(S) {
                S.slice(0, 2) === "b_" && (E[S.slice(2)] = L[S]);
              }), E;
            }, N;
          }(k);
          t.exports = {
            Environment: w,
            Template: A
          };
        },
        /* 8 */
        /***/
        function(t, n, s) {
          function i(M, I) {
            M.prototype = Object.create(I.prototype), M.prototype.constructor = M, c(M, I);
          }
          function c(M, I) {
            return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(C, r) {
              return C.__proto__ = r, C;
            }, c(M, I);
          }
          var d = s(9), g = s(3), y = s(1).Obj, x = s(0), P = /* @__PURE__ */ function(M) {
            i(I, M);
            function I() {
              return M.apply(this, arguments) || this;
            }
            var T = I.prototype;
            return T.init = function(r) {
              this.tokens = r, this.peeked = null, this.breakOnBlocks = null, this.dropLeadingWhitespace = !1, this.extensions = [];
            }, T.nextToken = function(r) {
              var l;
              if (this.peeked)
                if (!r && this.peeked.type === d.TOKEN_WHITESPACE)
                  this.peeked = null;
                else
                  return l = this.peeked, this.peeked = null, l;
              if (l = this.tokens.nextToken(), !r)
                for (; l && l.type === d.TOKEN_WHITESPACE; )
                  l = this.tokens.nextToken();
              return l;
            }, T.peekToken = function() {
              return this.peeked = this.peeked || this.nextToken(), this.peeked;
            }, T.pushToken = function(r) {
              if (this.peeked)
                throw new Error("pushToken: can only push one token on between reads");
              this.peeked = r;
            }, T.error = function(r, l, u) {
              if (l === void 0 || u === void 0) {
                var k = this.peekToken() || {};
                l = k.lineno, u = k.colno;
              }
              return l !== void 0 && (l += 1), u !== void 0 && (u += 1), new x.TemplateError(r, l, u);
            }, T.fail = function(r, l, u) {
              throw this.error(r, l, u);
            }, T.skip = function(r) {
              var l = this.nextToken();
              return !l || l.type !== r ? (this.pushToken(l), !1) : !0;
            }, T.expect = function(r) {
              var l = this.nextToken();
              return l.type !== r && this.fail("expected " + r + ", got " + l.type, l.lineno, l.colno), l;
            }, T.skipValue = function(r, l) {
              var u = this.nextToken();
              return !u || u.type !== r || u.value !== l ? (this.pushToken(u), !1) : !0;
            }, T.skipSymbol = function(r) {
              return this.skipValue(d.TOKEN_SYMBOL, r);
            }, T.advanceAfterBlockEnd = function(r) {
              var l;
              return r || (l = this.peekToken(), l || this.fail("unexpected end of file"), l.type !== d.TOKEN_SYMBOL && this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"), r = this.nextToken().value), l = this.nextToken(), l && l.type === d.TOKEN_BLOCK_END ? l.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0) : this.fail("expected block end in " + r + " statement"), l;
            }, T.advanceAfterVariableEnd = function() {
              var r = this.nextToken();
              r && r.type === d.TOKEN_VARIABLE_END ? this.dropLeadingWhitespace = r.value.charAt(r.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-" : (this.pushToken(r), this.fail("expected variable end"));
            }, T.parseFor = function() {
              var r = this.peekToken(), l, u;
              this.skipSymbol("for") ? (l = new g.For(r.lineno, r.colno), u = "endfor") : this.skipSymbol("asyncEach") ? (l = new g.AsyncEach(r.lineno, r.colno), u = "endeach") : this.skipSymbol("asyncAll") ? (l = new g.AsyncAll(r.lineno, r.colno), u = "endall") : this.fail("parseFor: expected for{Async}", r.lineno, r.colno), l.name = this.parsePrimary(), l.name instanceof g.Symbol || this.fail("parseFor: variable name expected for loop");
              var k = this.peekToken().type;
              if (k === d.TOKEN_COMMA) {
                var m = l.name;
                for (l.name = new g.Array(m.lineno, m.colno), l.name.addChild(m); this.skip(d.TOKEN_COMMA); ) {
                  var b = this.parsePrimary();
                  l.name.addChild(b);
                }
              }
              return this.skipSymbol("in") || this.fail('parseFor: expected "in" keyword for loop', r.lineno, r.colno), l.arr = this.parseExpression(), this.advanceAfterBlockEnd(r.value), l.body = this.parseUntilBlocks(u, "else"), this.skipSymbol("else") && (this.advanceAfterBlockEnd("else"), l.else_ = this.parseUntilBlocks(u)), this.advanceAfterBlockEnd(), l;
            }, T.parseMacro = function() {
              var r = this.peekToken();
              this.skipSymbol("macro") || this.fail("expected macro");
              var l = this.parsePrimary(!0), u = this.parseSignature(), k = new g.Macro(r.lineno, r.colno, l, u);
              return this.advanceAfterBlockEnd(r.value), k.body = this.parseUntilBlocks("endmacro"), this.advanceAfterBlockEnd(), k;
            }, T.parseCall = function() {
              var r = this.peekToken();
              this.skipSymbol("call") || this.fail("expected call");
              var l = this.parseSignature(!0) || new g.NodeList(), u = this.parsePrimary();
              this.advanceAfterBlockEnd(r.value);
              var k = this.parseUntilBlocks("endcall");
              this.advanceAfterBlockEnd();
              var m = new g.Symbol(r.lineno, r.colno, "caller"), b = new g.Caller(r.lineno, r.colno, m, l, k), a = u.args.children;
              a[a.length - 1] instanceof g.KeywordArgs || a.push(new g.KeywordArgs());
              var f = a[a.length - 1];
              return f.addChild(new g.Pair(r.lineno, r.colno, m, b)), new g.Output(r.lineno, r.colno, [u]);
            }, T.parseWithContext = function() {
              var r = this.peekToken(), l = null;
              return this.skipSymbol("with") ? l = !0 : this.skipSymbol("without") && (l = !1), l !== null && (this.skipSymbol("context") || this.fail("parseFrom: expected context after with/without", r.lineno, r.colno)), l;
            }, T.parseImport = function() {
              var r = this.peekToken();
              this.skipSymbol("import") || this.fail("parseImport: expected import", r.lineno, r.colno);
              var l = this.parseExpression();
              this.skipSymbol("as") || this.fail('parseImport: expected "as" keyword', r.lineno, r.colno);
              var u = this.parseExpression(), k = this.parseWithContext(), m = new g.Import(r.lineno, r.colno, l, u, k);
              return this.advanceAfterBlockEnd(r.value), m;
            }, T.parseFrom = function() {
              var r = this.peekToken();
              this.skipSymbol("from") || this.fail("parseFrom: expected from");
              var l = this.parseExpression();
              this.skipSymbol("import") || this.fail("parseFrom: expected import", r.lineno, r.colno);
              for (var u = new g.NodeList(), k; ; ) {
                var m = this.peekToken();
                if (m.type === d.TOKEN_BLOCK_END) {
                  u.children.length || this.fail("parseFrom: Expected at least one import name", r.lineno, r.colno), m.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0), this.nextToken();
                  break;
                }
                u.children.length > 0 && !this.skip(d.TOKEN_COMMA) && this.fail("parseFrom: expected comma", r.lineno, r.colno);
                var b = this.parsePrimary();
                if (b.value.charAt(0) === "_" && this.fail("parseFrom: names starting with an underscore cannot be imported", b.lineno, b.colno), this.skipSymbol("as")) {
                  var a = this.parsePrimary();
                  u.addChild(new g.Pair(b.lineno, b.colno, b, a));
                } else
                  u.addChild(b);
                k = this.parseWithContext();
              }
              return new g.FromImport(r.lineno, r.colno, l, u, k);
            }, T.parseBlock = function() {
              var r = this.peekToken();
              this.skipSymbol("block") || this.fail("parseBlock: expected block", r.lineno, r.colno);
              var l = new g.Block(r.lineno, r.colno);
              l.name = this.parsePrimary(), l.name instanceof g.Symbol || this.fail("parseBlock: variable name expected", r.lineno, r.colno), this.advanceAfterBlockEnd(r.value), l.body = this.parseUntilBlocks("endblock"), this.skipSymbol("endblock"), this.skipSymbol(l.name.value);
              var u = this.peekToken();
              return u || this.fail("parseBlock: expected endblock, got end of file"), this.advanceAfterBlockEnd(u.value), l;
            }, T.parseExtends = function() {
              var r = "extends", l = this.peekToken();
              this.skipSymbol(r) || this.fail("parseTemplateRef: expected " + r);
              var u = new g.Extends(l.lineno, l.colno);
              return u.template = this.parseExpression(), this.advanceAfterBlockEnd(l.value), u;
            }, T.parseInclude = function() {
              var r = "include", l = this.peekToken();
              this.skipSymbol(r) || this.fail("parseInclude: expected " + r);
              var u = new g.Include(l.lineno, l.colno);
              return u.template = this.parseExpression(), this.skipSymbol("ignore") && this.skipSymbol("missing") && (u.ignoreMissing = !0), this.advanceAfterBlockEnd(l.value), u;
            }, T.parseIf = function() {
              var r = this.peekToken(), l;
              this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif") ? l = new g.If(r.lineno, r.colno) : this.skipSymbol("ifAsync") ? l = new g.IfAsync(r.lineno, r.colno) : this.fail("parseIf: expected if, elif, or elseif", r.lineno, r.colno), l.cond = this.parseExpression(), this.advanceAfterBlockEnd(r.value), l.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
              var u = this.peekToken();
              switch (u && u.value) {
                case "elseif":
                case "elif":
                  l.else_ = this.parseIf();
                  break;
                case "else":
                  this.advanceAfterBlockEnd(), l.else_ = this.parseUntilBlocks("endif"), this.advanceAfterBlockEnd();
                  break;
                case "endif":
                  l.else_ = null, this.advanceAfterBlockEnd();
                  break;
                default:
                  this.fail("parseIf: expected elif, else, or endif, got end of file");
              }
              return l;
            }, T.parseSet = function() {
              var r = this.peekToken();
              this.skipSymbol("set") || this.fail("parseSet: expected set", r.lineno, r.colno);
              for (var l = new g.Set(r.lineno, r.colno, []), u; (u = this.parsePrimary()) && (l.targets.push(u), !!this.skip(d.TOKEN_COMMA)); )
                ;
              return this.skipValue(d.TOKEN_OPERATOR, "=") ? (l.value = this.parseExpression(), this.advanceAfterBlockEnd(r.value)) : this.skip(d.TOKEN_BLOCK_END) ? (l.body = new g.Capture(r.lineno, r.colno, this.parseUntilBlocks("endset")), l.value = null, this.advanceAfterBlockEnd()) : this.fail("parseSet: expected = or block end in set tag", r.lineno, r.colno), l;
            }, T.parseSwitch = function() {
              var r = "switch", l = "endswitch", u = "case", k = "default", m = this.peekToken();
              !this.skipSymbol(r) && !this.skipSymbol(u) && !this.skipSymbol(k) && this.fail('parseSwitch: expected "switch," "case" or "default"', m.lineno, m.colno);
              var b = this.parseExpression();
              this.advanceAfterBlockEnd(r), this.parseUntilBlocks(u, k, l);
              var a = this.peekToken(), f = [], v;
              do {
                this.skipSymbol(u);
                var h = this.parseExpression();
                this.advanceAfterBlockEnd(r);
                var p = this.parseUntilBlocks(u, k, l);
                f.push(new g.Case(a.line, a.col, h, p)), a = this.peekToken();
              } while (a && a.value === u);
              switch (a.value) {
                case k:
                  this.advanceAfterBlockEnd(), v = this.parseUntilBlocks(l), this.advanceAfterBlockEnd();
                  break;
                case l:
                  this.advanceAfterBlockEnd();
                  break;
                default:
                  this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.');
              }
              return new g.Switch(m.lineno, m.colno, b, f, v);
            }, T.parseStatement = function() {
              var r = this.peekToken(), l;
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
                      var k = this.extensions[u];
                      if (x.indexOf(k.tags || [], r.value) !== -1)
                        return k.parse(this, g, d);
                    }
                  this.fail("unknown block tag: " + r.value, r.lineno, r.colno);
              }
              return l;
            }, T.parseRaw = function(r) {
              r = r || "raw";
              for (var l = "end" + r, u = new RegExp("([\\s\\S]*?){%\\s*(" + r + "|" + l + ")\\s*(?=%})%}"), k = 1, m = "", b = null, a = this.advanceAfterBlockEnd(); (b = this.tokens._extractRegex(u)) && k > 0; ) {
                var f = b[0], v = b[1], h = b[2];
                h === r ? k += 1 : h === l && (k -= 1), k === 0 ? (m += v, this.tokens.backN(f.length - v.length)) : m += f;
              }
              return new g.Output(a.lineno, a.colno, [new g.TemplateData(a.lineno, a.colno, m)]);
            }, T.parsePostfix = function(r) {
              for (var l, u = this.peekToken(); u; ) {
                if (u.type === d.TOKEN_LEFT_PAREN)
                  r = new g.FunCall(u.lineno, u.colno, r, this.parseSignature());
                else if (u.type === d.TOKEN_LEFT_BRACKET)
                  l = this.parseAggregate(), l.children.length > 1 && this.fail("invalid index"), r = new g.LookupVal(u.lineno, u.colno, r, l.children[0]);
                else if (u.type === d.TOKEN_OPERATOR && u.value === ".") {
                  this.nextToken();
                  var k = this.nextToken();
                  k.type !== d.TOKEN_SYMBOL && this.fail("expected name as lookup value, got " + k.value, k.lineno, k.colno), l = new g.Literal(k.lineno, k.colno, k.value), r = new g.LookupVal(u.lineno, u.colno, r, l);
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
                var l = this.parseOr(), u = r;
                r = new g.InlineIf(r.lineno, r.colno), r.body = u, r.cond = l, this.skipSymbol("else") ? r.else_ = this.parseOr() : r.else_ = null;
              }
              return r;
            }, T.parseOr = function() {
              for (var r = this.parseAnd(); this.skipSymbol("or"); ) {
                var l = this.parseAnd();
                r = new g.Or(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseAnd = function() {
              for (var r = this.parseNot(); this.skipSymbol("and"); ) {
                var l = this.parseNot();
                r = new g.And(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseNot = function() {
              var r = this.peekToken();
              return this.skipSymbol("not") ? new g.Not(r.lineno, r.colno, this.parseNot()) : this.parseIn();
            }, T.parseIn = function() {
              for (var r = this.parseIs(); ; ) {
                var l = this.nextToken();
                if (!l)
                  break;
                var u = l.type === d.TOKEN_SYMBOL && l.value === "not";
                if (u || this.pushToken(l), this.skipSymbol("in")) {
                  var k = this.parseIs();
                  r = new g.In(r.lineno, r.colno, r, k), u && (r = new g.Not(r.lineno, r.colno, r));
                } else {
                  u && this.pushToken(l);
                  break;
                }
              }
              return r;
            }, T.parseIs = function() {
              var r = this.parseCompare();
              if (this.skipSymbol("is")) {
                var l = this.skipSymbol("not"), u = this.parseCompare();
                r = new g.Is(r.lineno, r.colno, r, u), l && (r = new g.Not(r.lineno, r.colno, r));
              }
              return r;
            }, T.parseCompare = function() {
              for (var r = ["==", "===", "!=", "!==", "<", ">", "<=", ">="], l = this.parseConcat(), u = []; ; ) {
                var k = this.nextToken();
                if (k)
                  if (r.indexOf(k.value) !== -1)
                    u.push(new g.CompareOperand(k.lineno, k.colno, this.parseConcat(), k.value));
                  else {
                    this.pushToken(k);
                    break;
                  }
                else
                  break;
              }
              return u.length ? new g.Compare(u[0].lineno, u[0].colno, l, u) : l;
            }, T.parseConcat = function() {
              for (var r = this.parseAdd(); this.skipValue(d.TOKEN_TILDE, "~"); ) {
                var l = this.parseAdd();
                r = new g.Concat(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseAdd = function() {
              for (var r = this.parseSub(); this.skipValue(d.TOKEN_OPERATOR, "+"); ) {
                var l = this.parseSub();
                r = new g.Add(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseSub = function() {
              for (var r = this.parseMul(); this.skipValue(d.TOKEN_OPERATOR, "-"); ) {
                var l = this.parseMul();
                r = new g.Sub(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseMul = function() {
              for (var r = this.parseDiv(); this.skipValue(d.TOKEN_OPERATOR, "*"); ) {
                var l = this.parseDiv();
                r = new g.Mul(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseDiv = function() {
              for (var r = this.parseFloorDiv(); this.skipValue(d.TOKEN_OPERATOR, "/"); ) {
                var l = this.parseFloorDiv();
                r = new g.Div(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseFloorDiv = function() {
              for (var r = this.parseMod(); this.skipValue(d.TOKEN_OPERATOR, "//"); ) {
                var l = this.parseMod();
                r = new g.FloorDiv(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseMod = function() {
              for (var r = this.parsePow(); this.skipValue(d.TOKEN_OPERATOR, "%"); ) {
                var l = this.parsePow();
                r = new g.Mod(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parsePow = function() {
              for (var r = this.parseUnary(); this.skipValue(d.TOKEN_OPERATOR, "**"); ) {
                var l = this.parseUnary();
                r = new g.Pow(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseUnary = function(r) {
              var l = this.peekToken(), u;
              return this.skipValue(d.TOKEN_OPERATOR, "-") ? u = new g.Neg(l.lineno, l.colno, this.parseUnary(!0)) : this.skipValue(d.TOKEN_OPERATOR, "+") ? u = new g.Pos(l.lineno, l.colno, this.parseUnary(!0)) : u = this.parsePrimary(), r || (u = this.parseFilter(u)), u;
            }, T.parsePrimary = function(r) {
              var l = this.nextToken(), u, k = null;
              if (l ? l.type === d.TOKEN_STRING ? u = l.value : l.type === d.TOKEN_INT ? u = parseInt(l.value, 10) : l.type === d.TOKEN_FLOAT ? u = parseFloat(l.value) : l.type === d.TOKEN_BOOLEAN ? l.value === "true" ? u = !0 : l.value === "false" ? u = !1 : this.fail("invalid boolean: " + l.value, l.lineno, l.colno) : l.type === d.TOKEN_NONE ? u = null : l.type === d.TOKEN_REGEX && (u = new RegExp(l.value.body, l.value.flags)) : this.fail("expected expression, got end of file"), u !== void 0 ? k = new g.Literal(l.lineno, l.colno, u) : l.type === d.TOKEN_SYMBOL ? k = new g.Symbol(l.lineno, l.colno, l.value) : (this.pushToken(l), k = this.parseAggregate()), r || (k = this.parsePostfix(k)), k)
                return k;
              throw this.error("unexpected token: " + l.value, l.lineno, l.colno);
            }, T.parseFilterName = function() {
              for (var r = this.expect(d.TOKEN_SYMBOL), l = r.value; this.skipValue(d.TOKEN_OPERATOR, "."); )
                l += "." + this.expect(d.TOKEN_SYMBOL).value;
              return new g.Symbol(r.lineno, r.colno, l);
            }, T.parseFilterArgs = function(r) {
              if (this.peekToken().type === d.TOKEN_LEFT_PAREN) {
                var l = this.parsePostfix(r);
                return l.args.children;
              }
              return [];
            }, T.parseFilter = function(r) {
              for (; this.skip(d.TOKEN_PIPE); ) {
                var l = this.parseFilterName();
                r = new g.Filter(l.lineno, l.colno, l, new g.NodeList(l.lineno, l.colno, [r].concat(this.parseFilterArgs(r))));
              }
              return r;
            }, T.parseFilterStatement = function() {
              var r = this.peekToken();
              this.skipSymbol("filter") || this.fail("parseFilterStatement: expected filter");
              var l = this.parseFilterName(), u = this.parseFilterArgs(l);
              this.advanceAfterBlockEnd(r.value);
              var k = new g.Capture(l.lineno, l.colno, this.parseUntilBlocks("endfilter"));
              this.advanceAfterBlockEnd();
              var m = new g.Filter(l.lineno, l.colno, l, new g.NodeList(l.lineno, l.colno, [k].concat(u)));
              return new g.Output(l.lineno, l.colno, [m]);
            }, T.parseAggregate = function() {
              var r = this.nextToken(), l;
              switch (r.type) {
                case d.TOKEN_LEFT_PAREN:
                  l = new g.Group(r.lineno, r.colno);
                  break;
                case d.TOKEN_LEFT_BRACKET:
                  l = new g.Array(r.lineno, r.colno);
                  break;
                case d.TOKEN_LEFT_CURLY:
                  l = new g.Dict(r.lineno, r.colno);
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
                if (l.children.length > 0 && (this.skip(d.TOKEN_COMMA) || this.fail("parseAggregate: expected comma after expression", r.lineno, r.colno)), l instanceof g.Dict) {
                  var k = this.parsePrimary();
                  this.skip(d.TOKEN_COLON) || this.fail("parseAggregate: expected colon after dict key", r.lineno, r.colno);
                  var m = this.parseExpression();
                  l.addChild(new g.Pair(k.lineno, k.colno, k, m));
                } else {
                  var b = this.parseExpression();
                  l.addChild(b);
                }
              }
              return l;
            }, T.parseSignature = function(r, l) {
              var u = this.peekToken();
              if (!l && u.type !== d.TOKEN_LEFT_PAREN) {
                if (r)
                  return null;
                this.fail("expected arguments", u.lineno, u.colno);
              }
              u.type === d.TOKEN_LEFT_PAREN && (u = this.nextToken());
              for (var k = new g.NodeList(u.lineno, u.colno), m = new g.KeywordArgs(u.lineno, u.colno), b = !1; ; ) {
                if (u = this.peekToken(), !l && u.type === d.TOKEN_RIGHT_PAREN) {
                  this.nextToken();
                  break;
                } else if (l && u.type === d.TOKEN_BLOCK_END)
                  break;
                if (b && !this.skip(d.TOKEN_COMMA))
                  this.fail("parseSignature: expected comma after expression", u.lineno, u.colno);
                else {
                  var a = this.parseExpression();
                  this.skipValue(d.TOKEN_OPERATOR, "=") ? m.addChild(new g.Pair(a.lineno, a.colno, a, this.parseExpression())) : k.addChild(a);
                }
                b = !0;
              }
              return m.children.length && k.addChild(m), k;
            }, T.parseUntilBlocks = function() {
              for (var r = this.breakOnBlocks, l = arguments.length, u = new Array(l), k = 0; k < l; k++)
                u[k] = arguments[k];
              this.breakOnBlocks = u;
              var m = this.parse();
              return this.breakOnBlocks = r, m;
            }, T.parseNodes = function() {
              for (var r, l = []; r = this.nextToken(); )
                if (r.type === d.TOKEN_DATA) {
                  var u = r.value, k = this.peekToken(), m = k && k.value;
                  this.dropLeadingWhitespace && (u = u.replace(/^\s*/, ""), this.dropLeadingWhitespace = !1), k && (k.type === d.TOKEN_BLOCK_START && m.charAt(m.length - 1) === "-" || k.type === d.TOKEN_VARIABLE_START && m.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || k.type === d.TOKEN_COMMENT && m.charAt(this.tokens.tags.COMMENT_START.length) === "-") && (u = u.replace(/\s*$/, "")), l.push(new g.Output(r.lineno, r.colno, [new g.TemplateData(r.lineno, r.colno, u)]));
                } else if (r.type === d.TOKEN_BLOCK_START) {
                  this.dropLeadingWhitespace = !1;
                  var b = this.parseStatement();
                  if (!b)
                    break;
                  l.push(b);
                } else if (r.type === d.TOKEN_VARIABLE_START) {
                  var a = this.parseExpression();
                  this.dropLeadingWhitespace = !1, this.advanceAfterVariableEnd(), l.push(new g.Output(r.lineno, r.colno, [a]));
                } else
                  r.type === d.TOKEN_COMMENT ? this.dropLeadingWhitespace = r.value.charAt(r.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-" : this.fail("Unexpected token at top-level: " + r.type, r.lineno, r.colno);
              return l;
            }, T.parse = function() {
              return new g.NodeList(0, 0, this.parseNodes());
            }, T.parseAsRoot = function() {
              return new g.Root(0, 0, this.parseNodes());
            }, I;
          }(y);
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
        function(t, n, s) {
          var i = s(0), c = ` 
	\r `, d = "()[]{}%*-+~/#,:|.<>=!", g = "0123456789", y = "{%", x = "%}", P = "{{", M = "}}", I = "{#", T = "#}", C = "string", r = "whitespace", l = "data", u = "block-start", k = "block-end", m = "variable-start", b = "variable-end", a = "comment", f = "left-paren", v = "right-paren", h = "left-bracket", p = "right-bracket", w = "left-curly", _ = "right-curly", A = "operator", R = "comma", N = "colon", B = "tilde", K = "pipe", L = "int", E = "float", S = "boolean", j = "none", D = "symbol", $ = "special", ne = "regex";
          function z(pe, X, Z, q) {
            return {
              type: pe,
              value: X,
              lineno: Z,
              colno: q
            };
          }
          var ue = /* @__PURE__ */ function() {
            function pe(Z, q) {
              this.str = Z, this.index = 0, this.len = Z.length, this.lineno = 0, this.colno = 0, this.in_code = !1, q = q || {};
              var W = q.tags || {};
              this.tags = {
                BLOCK_START: W.blockStart || y,
                BLOCK_END: W.blockEnd || x,
                VARIABLE_START: W.variableStart || P,
                VARIABLE_END: W.variableEnd || M,
                COMMENT_START: W.commentStart || I,
                COMMENT_END: W.commentEnd || T
              }, this.trimBlocks = !!q.trimBlocks, this.lstripBlocks = !!q.lstripBlocks;
            }
            var X = pe.prototype;
            return X.nextToken = function() {
              var q = this.lineno, W = this.colno, Q;
              if (this.in_code) {
                var se = this.current();
                if (this.isFinished())
                  return null;
                if (se === '"' || se === "'")
                  return z(C, this._parseString(se), q, W);
                if (Q = this._extract(c))
                  return z(r, Q, q, W);
                if ((Q = this._extractString(this.tags.BLOCK_END)) || (Q = this._extractString("-" + this.tags.BLOCK_END)))
                  return this.in_code = !1, this.trimBlocks && (se = this.current(), se === `
` ? this.forward() : se === "\r" && (this.forward(), se = this.current(), se === `
` ? this.forward() : this.back())), z(k, Q, q, W);
                if ((Q = this._extractString(this.tags.VARIABLE_END)) || (Q = this._extractString("-" + this.tags.VARIABLE_END)))
                  return this.in_code = !1, z(b, Q, q, W);
                if (se === "r" && this.str.charAt(this.index + 1) === "/") {
                  this.forwardN(2);
                  for (var _e = ""; !this.isFinished(); )
                    if (this.current() === "/" && this.previous() !== "\\") {
                      this.forward();
                      break;
                    } else
                      _e += this.current(), this.forward();
                  for (var fe = ["g", "i", "m", "y"], Oe = ""; !this.isFinished(); ) {
                    var O = fe.indexOf(this.current()) !== -1;
                    if (O)
                      Oe += this.current(), this.forward();
                    else
                      break;
                  }
                  return z(ne, {
                    body: _e,
                    flags: Oe
                  }, q, W);
                } else if (d.indexOf(se) !== -1) {
                  this.forward();
                  var F = ["==", "===", "!=", "!==", "<=", ">=", "//", "**"], V = se + this.current(), U;
                  switch (i.indexOf(F, V) !== -1 && (this.forward(), se = V, i.indexOf(F, V + this.current()) !== -1 && (se = V + this.current(), this.forward())), se) {
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
                      U = p;
                      break;
                    case "{":
                      U = w;
                      break;
                    case "}":
                      U = _;
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
                  return z(U, se, q, W);
                } else if (Q = this._extractUntil(c + d), Q.match(/^[-+]?[0-9]+$/))
                  if (this.current() === ".") {
                    this.forward();
                    var Y = this._extract(g);
                    return z(E, Q + "." + Y, q, W);
                  } else
                    return z(L, Q, q, W);
                else {
                  if (Q.match(/^(true|false)$/))
                    return z(S, Q, q, W);
                  if (Q === "none")
                    return z(j, Q, q, W);
                  if (Q === "null")
                    return z(j, Q, q, W);
                  if (Q)
                    return z(D, Q, q, W);
                  throw new Error("Unexpected value while parsing: " + Q);
                }
              } else {
                var J = this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);
                if (this.isFinished())
                  return null;
                if ((Q = this._extractString(this.tags.BLOCK_START + "-")) || (Q = this._extractString(this.tags.BLOCK_START)))
                  return this.in_code = !0, z(u, Q, q, W);
                if ((Q = this._extractString(this.tags.VARIABLE_START + "-")) || (Q = this._extractString(this.tags.VARIABLE_START)))
                  return this.in_code = !0, z(m, Q, q, W);
                Q = "";
                var ae, ee = !1;
                for (this._matches(this.tags.COMMENT_START) && (ee = !0, Q = this._extractString(this.tags.COMMENT_START)); (ae = this._extractUntil(J)) !== null; )
                  if (Q += ae, (this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !ee) {
                    if (this.lstripBlocks && this._matches(this.tags.BLOCK_START) && this.colno > 0 && this.colno <= Q.length) {
                      var le = Q.slice(-this.colno);
                      if (/^\s+$/.test(le) && (Q = Q.slice(0, -this.colno), !Q.length))
                        return this.nextToken();
                    }
                    break;
                  } else if (this._matches(this.tags.COMMENT_END)) {
                    if (!ee)
                      throw new Error("unexpected end of comment");
                    Q += this._extractString(this.tags.COMMENT_END);
                    break;
                  } else
                    Q += this.current(), this.forward();
                if (ae === null && ee)
                  throw new Error("expected end of comment, got end of file");
                return z(ee ? a : l, Q, q, W);
              }
            }, X._parseString = function(q) {
              this.forward();
              for (var W = ""; !this.isFinished() && this.current() !== q; ) {
                var Q = this.current();
                if (Q === "\\") {
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
                  W += Q, this.forward();
              }
              return this.forward(), W;
            }, X._matches = function(q) {
              if (this.index + q.length > this.len)
                return null;
              var W = this.str.slice(this.index, this.index + q.length);
              return W === q;
            }, X._extractString = function(q) {
              return this._matches(q) ? (this.forwardN(q.length), q) : null;
            }, X._extractUntil = function(q) {
              return this._extractMatching(!0, q || "");
            }, X._extract = function(q) {
              return this._extractMatching(!1, q);
            }, X._extractMatching = function(q, W) {
              if (this.isFinished())
                return null;
              var Q = W.indexOf(this.current());
              if (q && Q === -1 || !q && Q !== -1) {
                var se = this.current();
                this.forward();
                for (var _e = W.indexOf(this.current()); (q && _e === -1 || !q && _e !== -1) && !this.isFinished(); )
                  se += this.current(), this.forward(), _e = W.indexOf(this.current());
                return se;
              }
              return "";
            }, X._extractRegex = function(q) {
              var W = this.currentStr().match(q);
              return W ? (this.forwardN(W[0].length), W) : null;
            }, X.isFinished = function() {
              return this.index >= this.len;
            }, X.forwardN = function(q) {
              for (var W = 0; W < q; W++)
                this.forward();
            }, X.forward = function() {
              this.index++, this.previous() === `
` ? (this.lineno++, this.colno = 0) : this.colno++;
            }, X.backN = function(q) {
              for (var W = 0; W < q; W++)
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
            }, pe;
          }();
          t.exports = {
            lex: function(X, Z) {
              return new ue(X, Z);
            },
            TOKEN_STRING: C,
            TOKEN_WHITESPACE: r,
            TOKEN_DATA: l,
            TOKEN_BLOCK_START: u,
            TOKEN_BLOCK_END: k,
            TOKEN_VARIABLE_START: m,
            TOKEN_VARIABLE_END: b,
            TOKEN_COMMENT: a,
            TOKEN_LEFT_PAREN: f,
            TOKEN_RIGHT_PAREN: v,
            TOKEN_LEFT_BRACKET: h,
            TOKEN_RIGHT_BRACKET: p,
            TOKEN_LEFT_CURLY: w,
            TOKEN_RIGHT_CURLY: _,
            TOKEN_OPERATOR: A,
            TOKEN_COMMA: R,
            TOKEN_COLON: N,
            TOKEN_TILDE: B,
            TOKEN_PIPE: K,
            TOKEN_INT: L,
            TOKEN_FLOAT: E,
            TOKEN_BOOLEAN: S,
            TOKEN_NONE: j,
            TOKEN_SYMBOL: D,
            TOKEN_SPECIAL: $,
            TOKEN_REGEX: ne
          };
        },
        /* 10 */
        /***/
        function(t, n, s) {
          function i(P, M) {
            P.prototype = Object.create(M.prototype), P.prototype.constructor = P, c(P, M);
          }
          function c(P, M) {
            return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(T, C) {
              return T.__proto__ = C, T;
            }, c(P, M);
          }
          var d = s(6), g = s(19), y = g.PrecompiledLoader, x = /* @__PURE__ */ function(P) {
            i(M, P);
            function M(T, C) {
              var r;
              return r = P.call(this) || this, r.baseURL = T || ".", C = C || {}, r.useCache = !!C.useCache, r.async = !!C.async, r;
            }
            var I = M.prototype;
            return I.resolve = function(C, r) {
              throw new Error("relative templates not support in the browser yet");
            }, I.getSource = function(C, r) {
              var l = this, u = this.useCache, k;
              return this.fetch(this.baseURL + "/" + C, function(m, b) {
                if (m)
                  if (r)
                    r(m.content);
                  else if (m.status === 404)
                    k = null;
                  else
                    throw m.content;
                else
                  k = {
                    src: b,
                    path: C,
                    noCache: !u
                  }, l.emit("load", C, k), r && r(null, k);
              }), k;
            }, I.fetch = function(C, r) {
              if (typeof window > "u")
                throw new Error("WebLoader can only by used in a browser");
              var l = new XMLHttpRequest(), u = !0;
              l.onreadystatechange = function() {
                l.readyState === 4 && u && (u = !1, l.status === 0 || l.status === 200 ? r(null, l.responseText) : r({
                  status: l.status,
                  content: l.responseText
                }));
              }, C += (C.indexOf("?") === -1 ? "?" : "&") + "s=" + new Date().getTime(), l.open("GET", C, this.async), l.send();
            }, M;
          }(d);
          t.exports = {
            WebLoader: x,
            PrecompiledLoader: y
          };
        },
        /* 11 */
        /***/
        function(t, n, s) {
          var i = s(0), c = s(7), d = c.Environment, g = c.Template, y = s(6), x = s(10), P = s(23), M = s(5), I = s(8), T = s(9), C = s(2), r = s(3), l = s(25), u;
          function k(m, b) {
            b = b || {}, i.isObject(m) && (b = m, m = null);
            var a;
            return x.FileSystemLoader ? a = new x.FileSystemLoader(m, {
              watch: b.watch,
              noCache: b.noCache
            }) : x.WebLoader && (a = new x.WebLoader(m, {
              useCache: b.web && b.web.useCache,
              async: b.web && b.web.async
            })), u = new d(a, b), b && b.express && u.express(b.express), u;
          }
          t.exports = {
            Environment: d,
            Template: g,
            Loader: y,
            FileSystemLoader: x.FileSystemLoader,
            NodeResolveLoader: x.NodeResolveLoader,
            PrecompiledLoader: x.PrecompiledLoader,
            WebLoader: x.WebLoader,
            compiler: M,
            parser: I,
            lexer: T,
            runtime: C,
            lib: i,
            nodes: r,
            installJinjaCompat: l,
            configure: k,
            reset: function() {
              u = void 0;
            },
            compile: function(b, a, f, v) {
              return u || k(), new g(b, a, f, v);
            },
            render: function(b, a, f) {
              return u || k(), u.render(b, a, f);
            },
            renderString: function(b, a, f) {
              return u || k(), u.renderString(b, a, f);
            },
            precompile: P ? P.precompile : void 0,
            precompileString: P ? P.precompileString : void 0
          };
        },
        /* 12 */
        /***/
        function(t, n, s) {
          var i = s(13), c = [], d = [], g = i.makeRequestCallFromTimer(y);
          function y() {
            if (d.length)
              throw d.shift();
          }
          t.exports = x;
          function x(M) {
            var I;
            c.length ? I = c.pop() : I = new P(), I.task = M, i(I);
          }
          function P() {
            this.task = null;
          }
          P.prototype.call = function() {
            try {
              this.task.call();
            } catch (M) {
              x.onerror ? x.onerror(M) : (d.push(M), g());
            } finally {
              this.task = null, c[c.length] = this;
            }
          };
        },
        /* 13 */
        /***/
        function(t, n, s) {
          (function(i) {
            t.exports = c;
            function c(r) {
              d.length || g(), d[d.length] = r;
            }
            var d = [], g, y = 0, x = 1024;
            function P() {
              for (; y < d.length; ) {
                var r = y;
                if (y = y + 1, d[r].call(), y > x) {
                  for (var l = 0, u = d.length - y; l < u; l++)
                    d[l] = d[l + y];
                  d.length -= y, y = 0;
                }
              }
              d.length = 0, y = 0;
            }
            var M = typeof i < "u" ? i : self, I = M.MutationObserver || M.WebKitMutationObserver;
            typeof I == "function" ? g = T(P) : g = C(P), c.requestFlush = g;
            function T(r) {
              var l = 1, u = new I(r), k = document.createTextNode("");
              return u.observe(k, { characterData: !0 }), function() {
                l = -l, k.data = l;
              };
            }
            function C(r) {
              return function() {
                var u = setTimeout(m, 0), k = setInterval(m, 50);
                function m() {
                  clearTimeout(u), clearInterval(k), r();
                }
              };
            }
            c.makeRequestCallFromTimer = C;
          }).call(n, s(14));
        },
        /* 14 */
        /***/
        function(t, n) {
          var s;
          s = function() {
            return this;
          }();
          try {
            s = s || Function("return this")() || (0, eval)("this");
          } catch {
            typeof window == "object" && (s = window);
          }
          t.exports = s;
        },
        /* 15 */
        /***/
        function(t, n, s) {
          var i, c;
          (function(d) {
            var g = function() {
              var I = Array.prototype.slice.call(arguments);
              typeof I[0] == "function" && I[0].apply(null, I.splice(1));
            }, y = function(I) {
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
              var r = C ? y : g;
              if (T = T || function() {
              }, !P(I)) {
                var l = new Error("First argument to waterfall must be an array of functions");
                return T(l);
              }
              if (!I.length)
                return T();
              var u = function(k) {
                return function(m) {
                  if (m)
                    T.apply(null, arguments), T = function() {
                    };
                  else {
                    var b = Array.prototype.slice.call(arguments, 1), a = k.next();
                    a ? b.push(u(a)) : b.push(T), r(function() {
                      k.apply(null, b);
                    });
                  }
                };
              };
              u(x(I))();
            };
            i = [], c = function() {
              return M;
            }.apply(n, i), c !== void 0 && (t.exports = c);
          })();
        },
        /* 16 */
        /***/
        function(t, n, s) {
          var i = typeof Reflect == "object" ? Reflect : null, c = i && typeof i.apply == "function" ? i.apply : function(p, w, _) {
            return Function.prototype.apply.call(p, w, _);
          }, d;
          i && typeof i.ownKeys == "function" ? d = i.ownKeys : Object.getOwnPropertySymbols ? d = function(p) {
            return Object.getOwnPropertyNames(p).concat(Object.getOwnPropertySymbols(p));
          } : d = function(p) {
            return Object.getOwnPropertyNames(p);
          };
          function g(h) {
            console && console.warn && console.warn(h);
          }
          var y = Number.isNaN || function(p) {
            return p !== p;
          };
          function x() {
            x.init.call(this);
          }
          t.exports = x, t.exports.once = a, x.EventEmitter = x, x.prototype._events = void 0, x.prototype._eventsCount = 0, x.prototype._maxListeners = void 0;
          var P = 10;
          function M(h) {
            if (typeof h != "function")
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof h);
          }
          Object.defineProperty(x, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
              return P;
            },
            set: function(h) {
              if (typeof h != "number" || h < 0 || y(h))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + h + ".");
              P = h;
            }
          }), x.init = function() {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, x.prototype.setMaxListeners = function(p) {
            if (typeof p != "number" || p < 0 || y(p))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + p + ".");
            return this._maxListeners = p, this;
          };
          function I(h) {
            return h._maxListeners === void 0 ? x.defaultMaxListeners : h._maxListeners;
          }
          x.prototype.getMaxListeners = function() {
            return I(this);
          }, x.prototype.emit = function(p) {
            for (var w = [], _ = 1; _ < arguments.length; _++)
              w.push(arguments[_]);
            var A = p === "error", R = this._events;
            if (R !== void 0)
              A = A && R.error === void 0;
            else if (!A)
              return !1;
            if (A) {
              var N;
              if (w.length > 0 && (N = w[0]), N instanceof Error)
                throw N;
              var B = new Error("Unhandled error." + (N ? " (" + N.message + ")" : ""));
              throw B.context = N, B;
            }
            var K = R[p];
            if (K === void 0)
              return !1;
            if (typeof K == "function")
              c(K, this, w);
            else
              for (var L = K.length, E = k(K, L), _ = 0; _ < L; ++_)
                c(E[_], this, w);
            return !0;
          };
          function T(h, p, w, _) {
            var A, R, N;
            if (M(w), R = h._events, R === void 0 ? (R = h._events = /* @__PURE__ */ Object.create(null), h._eventsCount = 0) : (R.newListener !== void 0 && (h.emit(
              "newListener",
              p,
              w.listener ? w.listener : w
            ), R = h._events), N = R[p]), N === void 0)
              N = R[p] = w, ++h._eventsCount;
            else if (typeof N == "function" ? N = R[p] = _ ? [w, N] : [N, w] : _ ? N.unshift(w) : N.push(w), A = I(h), A > 0 && N.length > A && !N.warned) {
              N.warned = !0;
              var B = new Error("Possible EventEmitter memory leak detected. " + N.length + " " + String(p) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              B.name = "MaxListenersExceededWarning", B.emitter = h, B.type = p, B.count = N.length, g(B);
            }
            return h;
          }
          x.prototype.addListener = function(p, w) {
            return T(this, p, w, !1);
          }, x.prototype.on = x.prototype.addListener, x.prototype.prependListener = function(p, w) {
            return T(this, p, w, !0);
          };
          function C() {
            if (!this.fired)
              return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function r(h, p, w) {
            var _ = { fired: !1, wrapFn: void 0, target: h, type: p, listener: w }, A = C.bind(_);
            return A.listener = w, _.wrapFn = A, A;
          }
          x.prototype.once = function(p, w) {
            return M(w), this.on(p, r(this, p, w)), this;
          }, x.prototype.prependOnceListener = function(p, w) {
            return M(w), this.prependListener(p, r(this, p, w)), this;
          }, x.prototype.removeListener = function(p, w) {
            var _, A, R, N, B;
            if (M(w), A = this._events, A === void 0)
              return this;
            if (_ = A[p], _ === void 0)
              return this;
            if (_ === w || _.listener === w)
              --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete A[p], A.removeListener && this.emit("removeListener", p, _.listener || w));
            else if (typeof _ != "function") {
              for (R = -1, N = _.length - 1; N >= 0; N--)
                if (_[N] === w || _[N].listener === w) {
                  B = _[N].listener, R = N;
                  break;
                }
              if (R < 0)
                return this;
              R === 0 ? _.shift() : m(_, R), _.length === 1 && (A[p] = _[0]), A.removeListener !== void 0 && this.emit("removeListener", p, B || w);
            }
            return this;
          }, x.prototype.off = x.prototype.removeListener, x.prototype.removeAllListeners = function(p) {
            var w, _, A;
            if (_ = this._events, _ === void 0)
              return this;
            if (_.removeListener === void 0)
              return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : _[p] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete _[p]), this;
            if (arguments.length === 0) {
              var R = Object.keys(_), N;
              for (A = 0; A < R.length; ++A)
                N = R[A], N !== "removeListener" && this.removeAllListeners(N);
              return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
            }
            if (w = _[p], typeof w == "function")
              this.removeListener(p, w);
            else if (w !== void 0)
              for (A = w.length - 1; A >= 0; A--)
                this.removeListener(p, w[A]);
            return this;
          };
          function l(h, p, w) {
            var _ = h._events;
            if (_ === void 0)
              return [];
            var A = _[p];
            return A === void 0 ? [] : typeof A == "function" ? w ? [A.listener || A] : [A] : w ? b(A) : k(A, A.length);
          }
          x.prototype.listeners = function(p) {
            return l(this, p, !0);
          }, x.prototype.rawListeners = function(p) {
            return l(this, p, !1);
          }, x.listenerCount = function(h, p) {
            return typeof h.listenerCount == "function" ? h.listenerCount(p) : u.call(h, p);
          }, x.prototype.listenerCount = u;
          function u(h) {
            var p = this._events;
            if (p !== void 0) {
              var w = p[h];
              if (typeof w == "function")
                return 1;
              if (w !== void 0)
                return w.length;
            }
            return 0;
          }
          x.prototype.eventNames = function() {
            return this._eventsCount > 0 ? d(this._events) : [];
          };
          function k(h, p) {
            for (var w = new Array(p), _ = 0; _ < p; ++_)
              w[_] = h[_];
            return w;
          }
          function m(h, p) {
            for (; p + 1 < h.length; p++)
              h[p] = h[p + 1];
            h.pop();
          }
          function b(h) {
            for (var p = new Array(h.length), w = 0; w < p.length; ++w)
              p[w] = h[w].listener || h[w];
            return p;
          }
          function a(h, p) {
            return new Promise(function(w, _) {
              function A(N) {
                h.removeListener(p, R), _(N);
              }
              function R() {
                typeof h.removeListener == "function" && h.removeListener("error", A), w([].slice.call(arguments));
              }
              v(h, p, R, { once: !0 }), p !== "error" && f(h, A, { once: !0 });
            });
          }
          function f(h, p, w) {
            typeof h.on == "function" && v(h, "error", p, w);
          }
          function v(h, p, w, _) {
            if (typeof h.on == "function")
              _.once ? h.once(p, w) : h.on(p, w);
            else if (typeof h.addEventListener == "function")
              h.addEventListener(p, function A(R) {
                _.once && h.removeEventListener(p, A), w(R);
              });
            else
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof h);
          }
        },
        /* 17 */
        /***/
        function(t, n, s) {
          var i = s(3), c = s(0), d = 0;
          function g() {
            return "hole_" + d++;
          }
          function y(u, k) {
            for (var m = null, b = 0; b < u.length; b++) {
              var a = k(u[b]);
              a !== u[b] && (m || (m = u.slice()), m[b] = a);
            }
            return m || u;
          }
          function x(u, k, m) {
            if (!(u instanceof i.Node))
              return u;
            if (!m) {
              var b = k(u);
              if (b && b !== u)
                return b;
            }
            if (u instanceof i.NodeList) {
              var a = y(u.children, function(w) {
                return x(w, k, m);
              });
              a !== u.children && (u = new i[u.typename](u.lineno, u.colno, a));
            } else if (u instanceof i.CallExtension) {
              var f = x(u.args, k, m), v = y(u.contentArgs, function(w) {
                return x(w, k, m);
              });
              (f !== u.args || v !== u.contentArgs) && (u = new i[u.typename](u.extName, u.prop, f, v));
            } else {
              var h = u.fields.map(function(w) {
                return u[w];
              }), p = y(h, function(w) {
                return x(w, k, m);
              });
              p !== h && (u = new i[u.typename](u.lineno, u.colno), p.forEach(function(w, _) {
                u[u.fields[_]] = w;
              }));
            }
            return m && k(u) || u;
          }
          function P(u, k) {
            return x(u, k, !0);
          }
          function M(u, k, m) {
            var b = [], a = P(m ? u[m] : u, function(f) {
              var v;
              return f instanceof i.Block ? f : ((f instanceof i.Filter && c.indexOf(k, f.name.value) !== -1 || f instanceof i.CallExtensionAsync) && (v = new i.Symbol(f.lineno, f.colno, g()), b.push(new i.FilterAsync(f.lineno, f.colno, f.name, f.args, v))), v);
            });
            return m ? u[m] = a : u = a, b.length ? (b.push(u), new i.NodeList(u.lineno, u.colno, b)) : u;
          }
          function I(u, k) {
            return P(u, function(m) {
              return m instanceof i.Output ? M(m, k) : m instanceof i.Set ? M(m, k, "value") : m instanceof i.For ? M(m, k, "arr") : m instanceof i.If ? M(m, k, "cond") : m instanceof i.CallExtension ? M(m, k, "args") : void 0;
            });
          }
          function T(u) {
            return x(u, function(k) {
              if (k instanceof i.Block) {
                var m = !1, b = g();
                k.body = x(k.body, function(a) {
                  if (a instanceof i.FunCall && a.name.value === "super")
                    return m = !0, new i.Symbol(a.lineno, a.colno, b);
                }), m && k.body.children.unshift(new i.Super(0, 0, k.name, new i.Symbol(0, 0, b)));
              }
            });
          }
          function C(u) {
            return P(u, function(k) {
              if (!(!(k instanceof i.If) && !(k instanceof i.For))) {
                var m = !1;
                if (x(k, function(b) {
                  if (b instanceof i.FilterAsync || b instanceof i.IfAsync || b instanceof i.AsyncEach || b instanceof i.AsyncAll || b instanceof i.CallExtensionAsync)
                    return m = !0, b;
                }), m) {
                  if (k instanceof i.If)
                    return new i.IfAsync(k.lineno, k.colno, k.cond, k.body, k.else_);
                  if (k instanceof i.For && !(k instanceof i.AsyncAll))
                    return new i.AsyncEach(k.lineno, k.colno, k.arr, k.name, k.body, k.else_);
                }
              }
            });
          }
          function r(u, k) {
            return C(T(I(u, k)));
          }
          function l(u, k) {
            return r(u, k || []);
          }
          t.exports = {
            transform: l
          };
        },
        /* 18 */
        /***/
        function(t, d, s) {
          var i = s(0), c = s(2), d = t.exports = {};
          function g(O, F) {
            return O == null || O === !1 ? F : O;
          }
          d.abs = Math.abs;
          function y(O) {
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
            O = g(O, "");
            var F = O.toLowerCase();
            return c.copySafeness(O, F.charAt(0).toUpperCase() + F.slice(1));
          }
          d.capitalize = P;
          function M(O, F) {
            if (O = g(O, ""), F = F || 80, O.length >= F)
              return O;
            var V = F - O.length, U = i.repeat(" ", V / 2 - V % 2), Y = i.repeat(" ", V / 2);
            return c.copySafeness(O, U + O + Y);
          }
          d.center = M;
          function I(O, F, V) {
            return V ? O || F : O !== void 0 ? O : F;
          }
          d.default = I;
          function T(O, F, V) {
            if (!i.isObject(O))
              throw new i.TemplateError("dictsort filter: val must be an object");
            var U = [];
            for (var Y in O)
              U.push([Y, O[Y]]);
            var J;
            if (V === void 0 || V === "key")
              J = 0;
            else if (V === "value")
              J = 1;
            else
              throw new i.TemplateError("dictsort filter: You can only sort by either key or value");
            return U.sort(function(ae, ee) {
              var le = ae[J], Ee = ee[J];
              return F || (i.isString(le) && (le = le.toUpperCase()), i.isString(Ee) && (Ee = Ee.toUpperCase())), le > Ee ? 1 : le === Ee ? 0 : -1;
            }), U;
          }
          d.dictsort = T;
          function C(O, F) {
            return JSON.stringify(O, null, F);
          }
          d.dump = C;
          function r(O) {
            return O instanceof c.SafeString ? O : (O = O ?? "", c.markSafe(i.escape(O.toString())));
          }
          d.escape = r;
          function l(O) {
            return O instanceof c.SafeString ? O : (O = O ?? "", c.markSafe(O.toString()));
          }
          d.safe = l;
          function u(O) {
            return O[0];
          }
          d.first = u;
          function k(O) {
            return O = O ?? "", c.markSafe(i.escape(O.toString()));
          }
          d.forceescape = k;
          function m(O, F) {
            return i.groupBy(O, F, this.env.opts.throwOnUndefined);
          }
          d.groupby = m;
          function b(O, F, V) {
            if (O = g(O, ""), O === "")
              return "";
            F = F || 4;
            var U = O.split(`
`), Y = i.repeat(" ", F), J = U.map(function(ae, ee) {
              return ee === 0 && !V ? ae : "" + Y + ae;
            }).join(`
`);
            return c.copySafeness(O, J);
          }
          d.indent = b;
          function a(O, F, V) {
            return F = F || "", V && (O = i.map(O, function(U) {
              return U[V];
            })), O.join(F);
          }
          d.join = a;
          function f(O) {
            return O[O.length - 1];
          }
          d.last = f;
          function v(O) {
            var F = g(O, "");
            return F !== void 0 ? typeof Map == "function" && F instanceof Map || typeof Set == "function" && F instanceof Set ? F.size : i.isObject(F) && !(F instanceof c.SafeString) ? i.keys(F).length : F.length : 0;
          }
          d.length = v;
          function h(O) {
            if (i.isString(O))
              return O.split("");
            if (i.isObject(O))
              return i._entries(O || {}).map(function(F) {
                var V = F[0], U = F[1];
                return {
                  key: V,
                  value: U
                };
              });
            if (i.isArray(O))
              return O;
            throw new i.TemplateError("list filter: type not iterable");
          }
          d.list = h;
          function p(O) {
            return O = g(O, ""), O.toLowerCase();
          }
          d.lower = p;
          function w(O) {
            return O == null ? "" : c.copySafeness(O, O.replace(/\r\n|\n/g, `<br />
`));
          }
          d.nl2br = w;
          function _(O) {
            return O[Math.floor(Math.random() * O.length)];
          }
          d.random = _;
          function A(O) {
            function F(V, U, Y) {
              U === void 0 && (U = "truthy");
              var J = this, ae = J.env.getTest(U);
              return i.toArray(V).filter(function(le) {
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
            if (typeof O == "number" && (O = "" + O), typeof O != "string" && !(O instanceof c.SafeString))
              return O;
            if (F === "")
              return J = V + O.split("").join(V) + V, c.copySafeness(O, J);
            var ae = O.indexOf(F);
            if (U === 0 || ae === -1)
              return O;
            for (var ee = 0, le = 0; ae > -1 && (U === -1 || le < U); )
              J += O.substring(ee, ae) + V, ee = ae + F.length, le++, ae = O.indexOf(F, ee);
            return ee < O.length && (J += O.substring(ee)), c.copySafeness(Y, J);
          }
          d.replace = B;
          function K(O) {
            var F;
            return i.isString(O) ? F = h(O) : F = i.map(O, function(V) {
              return V;
            }), F.reverse(), i.isString(O) ? c.copySafeness(O, F.join("")) : F;
          }
          d.reverse = K;
          function L(O, F, V) {
            F = F || 0;
            var U = Math.pow(10, F), Y;
            return V === "ceil" ? Y = Math.ceil : V === "floor" ? Y = Math.floor : Y = Math.round, Y(O * U) / U;
          }
          d.round = L;
          function E(O, F, V) {
            for (var U = Math.floor(O.length / F), Y = O.length % F, J = [], ae = 0, ee = 0; ee < F; ee++) {
              var le = ae + ee * U;
              ee < Y && ae++;
              var Ee = ae + (ee + 1) * U, ke = O.slice(le, Ee);
              V && ee >= Y && ke.push(V), J.push(ke);
            }
            return J;
          }
          d.slice = E;
          function S(O, F, V) {
            return V === void 0 && (V = 0), F && (O = i.map(O, function(U) {
              return U[F];
            })), V + O.reduce(function(U, Y) {
              return U + Y;
            }, 0);
          }
          d.sum = S, d.sort = c.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(F, V, U, Y) {
            var J = this, ae = i.map(F, function(le) {
              return le;
            }), ee = i.getAttrGetter(Y);
            return ae.sort(function(le, Ee) {
              var ke = Y ? ee(le) : le, Le = Y ? ee(Ee) : Ee;
              if (J.env.opts.throwOnUndefined && Y && (ke === void 0 || Le === void 0))
                throw new TypeError('sort: attribute "' + Y + '" resolved to undefined');
              return !U && i.isString(ke) && i.isString(Le) && (ke = ke.toLowerCase(), Le = Le.toLowerCase()), ke < Le ? V ? 1 : -1 : ke > Le ? V ? -1 : 1 : 0;
            }), ae;
          });
          function j(O) {
            return c.copySafeness(O, O);
          }
          d.string = j;
          function D(O, F) {
            O = g(O, "");
            var V = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, U = ne(O.replace(V, "")), Y = "";
            return F ? Y = U.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, `
`).replace(/\n\n\n+/g, `

`) : Y = U.replace(/\s+/gi, " "), c.copySafeness(O, Y);
          }
          d.striptags = D;
          function $(O) {
            O = g(O, "");
            var F = O.split(" ").map(function(V) {
              return P(V);
            });
            return c.copySafeness(O, F.join(" "));
          }
          d.title = $;
          function ne(O) {
            return c.copySafeness(O, O.replace(/^\s*|\s*$/g, ""));
          }
          d.trim = ne;
          function z(O, F, V, U) {
            var Y = O;
            if (O = g(O, ""), F = F || 255, O.length <= F)
              return O;
            if (V)
              O = O.substring(0, F);
            else {
              var J = O.lastIndexOf(" ", F);
              J === -1 && (J = F), O = O.substring(0, J);
            }
            return O += U ?? "...", c.copySafeness(Y, O);
          }
          d.truncate = z;
          function ue(O) {
            return O = g(O, ""), O.toUpperCase();
          }
          d.upper = ue;
          function pe(O) {
            var F = encodeURIComponent;
            if (i.isString(O))
              return F(O);
            var V = i.isArray(O) ? O : i._entries(O);
            return V.map(function(U) {
              var Y = U[0], J = U[1];
              return F(Y) + "=" + F(J);
            }).join("&");
          }
          d.urlencode = pe;
          var X = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, Z = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, q = /^https?:\/\/.*$/, W = /^www\./, Q = /\.(?:org|net|com)(?:\:|\/|$)/;
          function se(O, F, V) {
            y(F) && (F = 1 / 0);
            var U = V === !0 ? ' rel="nofollow"' : "", Y = O.split(/(\s+)/).filter(function(J) {
              return J && J.length;
            }).map(function(J) {
              var ae = J.match(X), ee = ae ? ae[1] : J, le = ee.substr(0, F);
              return q.test(ee) ? '<a href="' + ee + '"' + U + ">" + le + "</a>" : W.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : Z.test(ee) ? '<a href="mailto:' + ee + '">' + ee + "</a>" : Q.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : J;
            });
            return Y.join("");
          }
          d.urlize = se;
          function _e(O) {
            O = g(O, "");
            var F = O ? O.match(/\w+/g) : null;
            return F ? F.length : null;
          }
          d.wordcount = _e;
          function fe(O, F) {
            var V = parseFloat(O);
            return y(V) ? F : V;
          }
          d.float = fe;
          var Oe = c.makeMacro(["value", "default", "base"], [], function(F, V, U) {
            U === void 0 && (U = 10);
            var Y = parseInt(F, U);
            return y(Y) ? V : Y;
          });
          d.int = Oe, d.d = d.default, d.e = d.escape;
        },
        /* 19 */
        /***/
        function(t, n, s) {
          function i(y, x) {
            y.prototype = Object.create(x.prototype), y.prototype.constructor = y, c(y, x);
          }
          function c(y, x) {
            return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(M, I) {
              return M.__proto__ = I, M;
            }, c(y, x);
          }
          var d = s(6), g = /* @__PURE__ */ function(y) {
            i(x, y);
            function x(M) {
              var I;
              return I = y.call(this) || this, I.precompiled = M || {}, I;
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
            PrecompiledLoader: g
          };
        },
        /* 20 */
        /***/
        function(t, n, s) {
          var i = s(2).SafeString;
          function c(_) {
            return typeof _ == "function";
          }
          n.callable = c;
          function d(_) {
            return _ !== void 0;
          }
          n.defined = d;
          function g(_, A) {
            return _ % A === 0;
          }
          n.divisibleby = g;
          function y(_) {
            return _ instanceof i;
          }
          n.escaped = y;
          function x(_, A) {
            return _ === A;
          }
          n.equalto = x, n.eq = n.equalto, n.sameas = n.equalto;
          function P(_) {
            return _ % 2 === 0;
          }
          n.even = P;
          function M(_) {
            return !_;
          }
          n.falsy = M;
          function I(_, A) {
            return _ >= A;
          }
          n.ge = I;
          function T(_, A) {
            return _ > A;
          }
          n.greaterthan = T, n.gt = n.greaterthan;
          function C(_, A) {
            return _ <= A;
          }
          n.le = C;
          function r(_, A) {
            return _ < A;
          }
          n.lessthan = r, n.lt = n.lessthan;
          function l(_) {
            return _.toLowerCase() === _;
          }
          n.lower = l;
          function u(_, A) {
            return _ !== A;
          }
          n.ne = u;
          function k(_) {
            return _ === null;
          }
          n.null = k;
          function m(_) {
            return typeof _ == "number";
          }
          n.number = m;
          function b(_) {
            return _ % 2 === 1;
          }
          n.odd = b;
          function a(_) {
            return typeof _ == "string";
          }
          n.string = a;
          function f(_) {
            return !!_;
          }
          n.truthy = f;
          function v(_) {
            return _ === void 0;
          }
          n.undefined = v;
          function h(_) {
            return _.toUpperCase() === _;
          }
          n.upper = h;
          function p(_) {
            return typeof Symbol < "u" ? !!_[Symbol.iterator] : Array.isArray(_) || typeof _ == "string";
          }
          n.iterable = p;
          function w(_) {
            var A = _ != null && typeof _ == "object" && !Array.isArray(_);
            return Set ? A && !(_ instanceof Set) : A;
          }
          n.mapping = w;
        },
        /* 21 */
        /***/
        function(t, n, s) {
          function i(g) {
            var y = -1;
            return {
              current: null,
              reset: function() {
                y = -1, this.current = null;
              },
              next: function() {
                return y++, y >= g.length && (y = 0), this.current = g[y], this.current;
              }
            };
          }
          function c(g) {
            g = g || ",";
            var y = !0;
            return function() {
              var x = y ? "" : g;
              return y = !1, x;
            };
          }
          function d() {
            return {
              range: function(y, x, P) {
                typeof x > "u" ? (x = y, y = 0, P = 1) : P || (P = 1);
                var M = [];
                if (P > 0)
                  for (var I = y; I < x; I += P)
                    M.push(I);
                else
                  for (var T = y; T > x; T += P)
                    M.push(T);
                return M;
              },
              cycler: function() {
                return i(Array.prototype.slice.call(arguments));
              },
              joiner: function(y) {
                return c(y);
              }
            };
          }
          t.exports = d;
        },
        /* 22 */
        /***/
        function(t, n, s) {
          var i = s(4);
          t.exports = function(d, g) {
            function y(x, P) {
              if (this.name = x, this.path = x, this.defaultEngine = P.defaultEngine, this.ext = i.extname(x), !this.ext && !this.defaultEngine)
                throw new Error("No default engine was specified and no extension was provided.");
              this.ext || (this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine);
            }
            return y.prototype.render = function(P, M) {
              d.render(this.name, P, M);
            }, g.set("view", y), g.set("nunjucksEnv", d), d;
          };
        },
        /* 23 */
        /***/
        function(t, n, s) {
          var i = s(4), c = s(4), d = s(0), g = d._prettifyError, y = s(5), x = s(7), P = x.Environment, M = s(24);
          function I(l, u) {
            return Array.isArray(u) ? u.some(function(k) {
              return l.match(k);
            }) : !1;
          }
          function T(l, u) {
            u = u || {}, u.isString = !0;
            var k = u.env || new P([]), m = u.wrapper || M;
            if (!u.name)
              throw new Error('the "name" option is required when compiling a string');
            return m([r(l, u.name, k)], u);
          }
          function C(l, u) {
            u = u || {};
            var k = u.env || new P([]), m = u.wrapper || M;
            if (u.isString)
              return T(l, u);
            var b = i.existsSync(l) && i.statSync(l), a = [], f = [];
            function v(w) {
              i.readdirSync(w).forEach(function(_) {
                var A = c.join(w, _), R = A.substr(c.join(l, "/").length), N = i.statSync(A);
                N && N.isDirectory() ? (R += "/", I(R, u.exclude) || v(A)) : I(R, u.include) && f.push(A);
              });
            }
            if (b.isFile())
              a.push(r(i.readFileSync(l, "utf-8"), u.name || l, k));
            else if (b.isDirectory()) {
              v(l);
              for (var h = 0; h < f.length; h++) {
                var p = f[h].replace(c.join(l, "/"), "");
                try {
                  a.push(r(i.readFileSync(f[h], "utf-8"), p, k));
                } catch (w) {
                  if (u.force)
                    console.error(w);
                  else
                    throw w;
                }
              }
            }
            return m(a, u);
          }
          function r(l, u, k) {
            k = k || new P([]);
            var m = k.asyncFilters, b = k.extensionsList, a;
            u = u.replace(/\\/g, "/");
            try {
              a = y.compile(l, m, b, u, k.opts);
            } catch (f) {
              throw g(u, !1, f);
            }
            return {
              name: u,
              template: a
            };
          }
          t.exports = {
            precompile: C,
            precompileString: T
          };
        },
        /* 24 */
        /***/
        function(t, n, s) {
          function i(c, d) {
            var g = "";
            d = d || {};
            for (var y = 0; y < c.length; y++) {
              var x = JSON.stringify(c[y].name), P = c[y].template;
              g += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + x + `] = (function() {
` + P + `
})();
`, d.asFunction && (g += "return function(ctx, cb) { return nunjucks.render(" + x + `, ctx, cb); }
`), g += `})();
`;
            }
            return g;
          }
          t.exports = i;
        },
        /* 25 */
        /***/
        function(t, n, s) {
          function i() {
            var c = this.runtime, d = this.lib, g = this.compiler.Compiler, y = this.parser.Parser, x = this.nodes, P = this.lexer, M = c.contextOrFrameLookup, I = c.memberLookup, T, C;
            g && (T = g.prototype.assertType), y && (C = y.prototype.parseAggregate);
            function r() {
              c.contextOrFrameLookup = M, c.memberLookup = I, g && (g.prototype.assertType = T), y && (y.prototype.parseAggregate = C);
            }
            c.contextOrFrameLookup = function(v, h, p) {
              var w = M.apply(this, arguments);
              if (w !== void 0)
                return w;
              switch (p) {
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
            function l(f) {
              return {
                index: f.index,
                lineno: f.lineno,
                colno: f.colno
              };
            }
            if (x && g && y) {
              var u = x.Node.extend("Slice", {
                fields: ["start", "stop", "step"],
                init: function(v, h, p, w, _) {
                  p = p || new x.Literal(v, h, null), w = w || new x.Literal(v, h, null), _ = _ || new x.Literal(v, h, 1), this.parent(v, h, p, w, _);
                }
              });
              g.prototype.assertType = function(v) {
                v instanceof u || T.apply(this, arguments);
              }, g.prototype.compileSlice = function(v, h) {
                this._emit("("), this._compileExpression(v.start, h), this._emit("),("), this._compileExpression(v.stop, h), this._emit("),("), this._compileExpression(v.step, h), this._emit(")");
              }, y.prototype.parseAggregate = function() {
                var v = this, h = l(this.tokens);
                h.colno--, h.index--;
                try {
                  return C.apply(this);
                } catch (K) {
                  var p = l(this.tokens), w = function() {
                    return d._assign(v.tokens, p), K;
                  };
                  d._assign(this.tokens, h), this.peeked = !1;
                  var _ = this.peekToken();
                  if (_.type !== P.TOKEN_LEFT_BRACKET)
                    throw w();
                  this.nextToken();
                  for (var A = new u(_.lineno, _.colno), R = !1, N = 0; N <= A.fields.length && !this.skip(P.TOKEN_RIGHT_BRACKET); N++) {
                    if (N === A.fields.length)
                      if (R)
                        this.fail("parseSlice: too many slice components", _.lineno, _.colno);
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
                    throw w();
                  return new x.Array(_.lineno, _.colno, [A]);
                }
              };
            }
            function k(f, v, h, p) {
              f = f || [], v === null && (v = p < 0 ? f.length - 1 : 0), h === null ? h = p < 0 ? -1 : f.length : h < 0 && (h += f.length), v < 0 && (v += f.length);
              for (var w = [], _ = v; !(_ < 0 || _ > f.length || p > 0 && _ >= h || p < 0 && _ <= h); _ += p)
                w.push(c.memberLookup(f, _));
              return w;
            }
            function m(f, v) {
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
                for (var h = 0, p = 0; p < this.length; p++)
                  this[p] === v && h++;
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
            }, a = {
              items: function() {
                return d._entries(this);
              },
              values: function() {
                return d._values(this);
              },
              keys: function() {
                return d.keys(this);
              },
              get: function(v, h) {
                var p = this[v];
                return p === void 0 && (p = h), p;
              },
              has_key: function(v) {
                return m(this, v);
              },
              pop: function(v, h) {
                var p = this[v];
                if (p === void 0 && h !== void 0)
                  p = h;
                else {
                  if (p === void 0)
                    throw new Error("KeyError");
                  delete this[v];
                }
                return p;
              },
              popitem: function() {
                var v = d.keys(this);
                if (!v.length)
                  throw new Error("KeyError");
                var h = v[0], p = this[h];
                return delete this[h], [h, p];
              },
              setdefault: function(v, h) {
                return h === void 0 && (h = null), v in this || (this[v] = h), this[v];
              },
              update: function(v) {
                return d._assign(this, v), null;
              }
            };
            return a.iteritems = a.items, a.itervalues = a.values, a.iterkeys = a.keys, c.memberLookup = function(v, h, p) {
              return arguments.length === 4 ? k.apply(this, arguments) : (v = v || {}, d.isArray(v) && m(b, h) ? b[h].bind(v) : d.isObject(v) && m(a, h) ? a[h].bind(v) : I.apply(this, arguments));
            }, r;
          }
          t.exports = i;
        }
        /******/
      ])
    );
  });
})(fi);
const hi = (o, e) => {
  const t = At(o);
  return Ke.configure({ autoescape: !0 }), Ke.renderString(e, t);
}, At = (o) => {
  const e = {};
  return Object.entries(o).forEach(([t, n]) => {
    if (pi(n)) {
      const s = Object.values(n.content);
      e[t] = s.filter((i) => !(i != null && i.hidden)).map((i) => At(i.questions));
      return;
    }
    e[t] = n.value;
  }), e;
}, pi = (o) => Boolean(o.content);
class di {
  constructor(e, t, n, s, i, c, d, g) {
    he(this, "interview", []);
    he(this, "nested", []);
    he(this, "getQuestion");
    he(this, "isLastRadio");
    he(this, "isEnd");
    he(this, "nextQuestion");
    he(this, "previousQuestion");
    he(this, "getCompletionPercen");
    he(this, "checkNextRadio");
    he(this, "checkFirstRadio");
    he(this, "alphabetMap", { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f" });
    this.getQuestion = e, this.isLastRadio = t, this.getCompletionPercen = n, this.checkNextRadio = s, this.checkFirstRadio = i, this.isEnd = c, this.nextQuestion = d, this.previousQuestion = g;
  }
  start(e) {
    this.interview = [], this.addQuestion(e, "start");
  }
  insertQuestionInInterview(e, t) {
    this.interview.push(e), t !== "start" && this.interview.sort(
      (n, s) => n.percentageOfCompletion - s.percentageOfCompletion
    );
  }
  applyLogicToQuestion(e) {
    const t = e;
    t.preLogic || (t.preLogic = []);
    let n = t.preLogic;
    this.nested.forEach((s, i) => {
      const c = this.nested[i + 1];
      let d = n.find((g) => g === s);
      if (d || (n.push(s), d = n.find((g) => g === s)), c) {
        const g = n[n.indexOf(d) + 1];
        if (g)
          if (Array.isArray(g))
            n = g;
          else {
            const y = [];
            n.splice(
              n[n.indexOf(d) + 1],
              0,
              y
            ), n = y;
          }
        else {
          const y = [];
          n.push(y), n = y;
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
  setActiveMultipleOption(e, t) {
    this.nested.length && this.nested[this.nested.length - 1].includes(e) && this.nested.pop(), this.nested.push(`${e}-${t}`);
  }
  removeActiveMultipleOption() {
    this.nested.pop();
  }
  addQuestion(e, t) {
    const { id: n = "", title: s = "", value: i = "", type: c = "" } = e, d = { id: n, title: s, value: i, type: c };
    t !== "start" && this.applyLogicToQuestion(d);
    const g = d;
    d.type === "multipleChoice" && (g.choices = e.choices), g.percentageOfCompletion = t === "start" ? 0 : t, this.insertQuestionInInterview(d, t);
  }
  async copyQuestion(e = !1, t = !1) {
    const n = await this.getQuestion(), s = n.id;
    if (this.questionExistsInInterview(s))
      if (n.type === "multipleChoice")
        if (this.nested.find((c) => c.includes(s)) || this.applyLogicToQuestion(this.getQuestionInInterview(s)), await this.isLastRadio()) {
          if (t && this.nested.length) {
            const c = await this.checkFirstRadio(n.id);
            this.setActiveMultipleOption(c.id, c.label);
          }
        } else {
          const c = await this.checkNextRadio(s);
          this.setActiveMultipleOption(c.id, c.label);
        }
      else
        this.applyLogicToQuestion(this.getQuestionInInterview(s));
    else {
      if (e)
        this.start(n);
      else {
        const i = await this.getCompletionPercen();
        this.addQuestion(n, i);
      }
      if (n.type === "multipleChoice") {
        const i = await this.checkFirstRadio(n.id);
        this.setActiveMultipleOption(i.id, i.label);
      }
    }
  }
  async backToPreviousActive() {
    const e = this.nested;
    if (e.length) {
      const t = e[e.length - 1].split("-")[0];
      let n = await this.getQuestion();
      for (; n.id !== t; )
        await this.previousQuestion(), n = await this.getQuestion();
      const s = await this.isLastRadio();
      await this.copyQuestion(), n.type === "multipleChoice" && s && (this.removeActiveMultipleOption(), await this.backToPreviousActive());
    }
  }
  async happyPath() {
    let e = await this.isEnd();
    for (; !e; )
      await this.nextQuestion(), await this.copyQuestion(!1, !0), e = await this.isEnd();
    this.nested.length && (await this.backToPreviousActive(), await this.happyPath());
  }
  transform() {
    this.interview.forEach((e) => {
      if (delete e.percentageOfCompletion, !e.preLogic)
        return;
      let t = "";
      const n = (s, i = !1) => {
        s.forEach((c, d) => {
          const g = s[d + 1];
          if (typeof c == "string") {
            const [y, x] = c.split("-");
            t += `${y}.value === '${x}'`, g && (typeof g == "string" && (t += " || "), Array.isArray(g) && (t += " && "));
          }
          Array.isArray(c) && (t += " (", n(c, !0), g && typeof g == "string" && (t += "|| ")), i && !g && (t += ") ");
        });
      };
      n(e.preLogic), e.logic = { showIf: t }, delete e.preLogic;
    });
  }
  async copy() {
    await this.copyQuestion(!0), await this.happyPath(), this.transform();
  }
}
class St {
  constructor(e = "empty", t = { isRoot: !0, data: null }) {
    he(this, "interview", /* @__PURE__ */ new Map());
    he(this, "events");
    he(this, "current");
    he(this, "isRoot", !0);
    he(this, "data", {});
    he(this, "Cloner", di);
    this.events = t.events || new Me(), this.isRoot = t.isRoot, this.data = t.data || this.data;
    const n = t.data ? JSON.parse(JSON.stringify(this.data)) : null;
    e !== "empty" && this.init(e), n && this.applyDataToQuestions(n);
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
    ni(e);
    for (const t of Object.values(e))
      this.add(t);
  }
  getInterviewParams() {
    const e = {};
    return this.interview.forEach((t, n) => {
      e[n] = t, t.type === "repeat" && (e[n].content = {});
    }), e;
  }
  add(e, t = !1) {
    const n = oi(e);
    return n.type === "repeat" && this.buildContentForRepeatQuestion(n), this.interview.set(n.id, n), this.setValue(n.id, n.value), this.events.dispatch("question-added", n), n;
  }
  remove(e) {
    if (!this.interview.has(e))
      throw new Error("No question with id:" + e);
    this.interview.delete(e);
  }
  getNestedInterview(e, t) {
    const n = this.interview.get(e);
    if (!n)
      throw new Error("No question with id:" + e);
    if ((n == null ? void 0 : n.type) !== "repeat")
      throw new Error("Question with id " + e + " is not a repeat question");
    return n.content[t].nestedInterview;
  }
  canBeShown(e) {
    var t, n;
    if ((t = e.logic) != null && t.showIf) {
      const s = this.interview.keys(), i = this.interview.values();
      if (!Function(...s, `return ${e.logic.showIf}`).bind(this)(...i))
        return !1;
    }
    if ((n = e.logic) != null && n.hideIf) {
      const s = this.interview.keys(), i = this.interview.values();
      if (!!Function(...s, `return ${e.logic.hideIf}`).bind(this)(...i))
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
    const n = Array.from(this.interview);
    for (let s = 0; s < n.length; s++) {
      const i = n[s][1], c = i == null ? void 0 : i.isCurrent, d = (i == null ? void 0 : i.type) === "repeat";
      if (t = n[s + 1] && n[s + 1][1], c && !d && !t && !this.isRoot) {
        i.isEnd = !0, e = i;
        break;
      }
      if (c && !d && t) {
        i.isCurrent = !1, e = n[s + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (c && d && this.canBeShown(i)) {
        const g = i;
        g.isCurrent = !1, e = Array.from(g.content[0].nestedInterview.interview)[0][1], e.isCurrent = !0;
        break;
      }
      if (c && d && !this.canBeShown(i) && t) {
        i.isCurrent = !1, e = n[s + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (c && d && !this.canBeShown(i) && !t) {
        i.isEnd = !0, e = i;
        break;
      }
      if (!c && d && !this.canBeShown(i) && !t) {
        i.isEnd = !0, e = i;
        break;
      }
      if (!c && d && this.canBeShown(i)) {
        const g = i;
        for (let y = 0; y < parseInt(i.value); y++)
          if (!g.content[y].hidden && (e = g.content[y].nestedInterview.getNextQuestion(), e)) {
            if (e.isEnd)
              if (y + 1 < parseInt(i.value))
                if (!e.isCurrent)
                  e.isEnd = !1, e = null;
                else {
                  const x = Array.from(g.content[y + 1].nestedInterview.interview);
                  e.isCurrent = !1, e.isEnd = !1, e = x[0][1], e.isCurrent = !0;
                }
              else {
                const x = g.content[y].nestedInterview.canBeShown(e);
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
    const t = Array.from(this.interview), n = t[0][1];
    if (n.isCurrent)
      return this.isRoot ? n : (e && (e.isCurrent = !0), n.isCurrent = !1, e);
    let s = n, i;
    for (let c = 1; c < t.length; c++) {
      const d = t[c][1], g = this.canBeShown(d);
      if (t[c + 1] && t[c + 1][1], d.isCurrent) {
        s.isCurrent = !0, i = s, d.isCurrent = !1;
        break;
      } else if (g && (s = d), d.type === "repeat") {
        const y = d;
        for (let x = 0; x < parseInt(d.value) && !(!y.content[x].hidden && (i = y.content[x].nestedInterview.getPreviousQuestion(s), i != null && i.isPrevious && (i.isPrevious = !1, s = i, i = null), i && i.isCurrent)); x++)
          ;
        if (i && i.isCurrent)
          break;
      }
    }
    if (e && !i) {
      const c = this.reversePreviousUtil(t);
      c && (i = c);
    }
    return i;
  }
  // traverse interview backwards to find previous question
  reversePreviousUtil(e) {
    let t;
    for (let n = e.length - 1; n >= 0; n--) {
      const s = e[n][1];
      if (this.canBeShown(s))
        if (s.type === "repeat") {
          const c = s;
          for (let d = parseInt(s.value) - 1; d >= 0; d--)
            if (!c.content[d].hidden) {
              const g = Array.from(c.content[d].nestedInterview.interview);
              if (t = c.content[d].nestedInterview.reversePreviousUtil(g), t && (t.isPrevious = !0), t)
                break;
            }
          if (t)
            break;
        } else {
          t = s, t.isPrevious = !0;
          break;
        }
    }
    return t;
  }
  // Returns an object whith the current total questions 
  // and the position you are in it
  getProgress() {
    let e = 0, t = 0;
    return Array.from(this.interview).forEach(([s, i]) => {
      e += 1, i.isCurrent && (t = e), i.type === "repeat" && Object.values(i.content).forEach((d) => {
        if (!d.hidden) {
          const g = d.nestedInterview.getProgress();
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
    const t = Array.from(this.interview)[0][1].id, n = this.getCurrent().id;
    return t === n;
  }
  // returns true if you reach the last question
  isEnd() {
    const e = this.getLastQuestionOfInterview(), t = this.getCurrent();
    return t.indexInsideRepeat !== null ? t.id === (e == null ? void 0 : e.id) && t.indexInsideRepeat === e.indexInsideRepeat : (e == null ? void 0 : e.id) === t.id;
  }
  getLastQuestionOfInterview() {
    let e = null;
    const t = Array.from(this.interview);
    for (let n = t.length - 1; n >= 0; n--) {
      const s = t[n][1];
      if (this.canBeShown(s))
        if (s.type === "repeat") {
          const c = s;
          for (let d = parseInt(s.value) - 1; d >= 0 && !(!c.content[d].hidden && (e = c.content[d].nestedInterview.getLastQuestionOfInterview(), e)); d--)
            ;
          e || (e = s);
          break;
        } else {
          e = s;
          break;
        }
    }
    return e;
  }
  // Returns interview of current question
  getCurrentGuidedInterview() {
    const e = Array.from(this.interview);
    let t = null;
    for (let n = 0; n < e.length; n++) {
      const s = e[n][1];
      if (s.isCurrent) {
        t = this;
        break;
      }
      if (s.type === "repeat") {
        const i = s;
        for (let c = 0; c < parseInt(s.value) && !(!i.content[c].hidden && (t = i.content[c].nestedInterview.getCurrentGuidedInterview(), t)); c++)
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
    const n = this.interview.get(e);
    if (!n)
      throw new Error("No question with id:" + e);
    ri(t, n), n.value = t, (n == null ? void 0 : n.type) === "multipleChoice" && this.setRadioChecked(n, t), (n == null ? void 0 : n.type) === "repeat" && this.buildContentForRepeatQuestion(n, t), this.data[e] ? this.data[e].value = n.value : this.data[e] = { value: n.value }, this.events.dispatch("set-value", this.interview.get(e));
  }
  on(e, t) {
    this.events.register(e, t);
  }
  getData() {
    return this.data;
  }
  setRadioChecked(e, t) {
    e.choices.forEach((n) => {
      n.checked = n.label === t;
    });
  }
  buildContentForRepeatQuestion(e, t = null) {
    const { range: n, id: s, questions: i, indexInsideRepeat: c } = e, { min: d, max: g } = n;
    t = ii(e.value, d, g), e.value = t, e.content || (e.content = {}), this.data[s] ? this.data[s].value = t : this.data[s] = { value: t, content: {} };
    for (let x = 0; x < t; x++) {
      if (e.content[x]) {
        e.content[x].hidden = !1;
        continue;
      }
      this.data[s].content[x] = { hidden: !1, questions: {} };
      const P = new St(ci(i, x, c), {
        isRoot: !1,
        events: this.events,
        data: this.data[s].content[x].questions
      });
      e.content[x] = { hidden: !1, nestedInterview: P };
    }
    const y = Object.keys(e.content);
    if (t < y.length)
      for (let x = t; x < y.length; x++)
        e.content[x].hidden = !0, this.data[s].content[x].hidden = !0;
  }
  applyDataToQuestions(e) {
    Object.entries(e).forEach(([t, { value: n, content: s }]) => {
      this.setValue(t, n), s && Object.values(s).forEach((i, c) => {
        i.hidden || this.getNestedInterview(t, c).applyDataToQuestions(i.questions);
      });
    });
  }
  makeTemplate(e) {
    if (!e)
      throw new Error("No template provided");
    return hi(this.data, e);
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
    const s = this.checkIfIdIsValid(t);
    if (!s.isValid)
      throw new Error(s.message);
    const i = Array.from(this.interview, ([d, g]) => ({ name: d, value: g }));
    i.forEach((d, g) => {
      d.name === e && (i[g].value.id = t, i[g].name = t);
    });
    const c = /* @__PURE__ */ new Map();
    i.forEach((d) => {
      c.set(d.name, d.value);
    }), this.interview = c;
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
  changeLabelOfChoice(e, t, n) {
    const s = this.findMultipleChoiceById(e);
    if (!n)
      throw new Error("No label provided");
    if (!s.choices[t])
      throw new Error("No choice with index:" + t);
    s.choices[t].label = n;
  }
  setDefaultCheckedChoice(e, t) {
    const n = this.findMultipleChoiceById(e);
    if (!n.choices[t])
      throw new Error("No choice with index:" + t);
    n.choices.forEach((s) => s.checked = !1), n.choices[t].checked = !0;
  }
  setQuestionAsRequired(e, t) {
    const n = this.findQuestionById(e);
    n.required = t;
  }
  setTitleOfQuestion(e, t) {
    const n = this.findQuestionById(e);
    n.title = t;
  }
  setPlaceholder(e, t) {
    const n = this.findQuestionById(e);
    n.placeholder = t;
  }
  setExtraOption(e, t, n) {
    const s = this.findQuestionById(e);
    s.options || (s.options = {}), s.options[t] = n;
  }
  setIndications(e, t) {
    const n = this.findQuestionById(e);
    n.indications = t;
  }
  setLogic(e, t) {
    this.findQuestionById(e).logic = t;
  }
  setRange(e, t) {
    const n = this.findQuestionById(e);
    if ((n == null ? void 0 : n.type) !== "repeat")
      throw new Error("Question with id " + e + " is not a repeat question");
    n.range = t;
  }
}
export {
  St as GuidedInterview
};
