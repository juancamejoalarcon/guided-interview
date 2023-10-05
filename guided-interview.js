var Dt = Object.defineProperty;
var Ut = (s, e, t) => e in s ? Dt(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var ue = (s, e, t) => (Ut(s, typeof e != "symbol" ? e + "" : e, t), t);
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vt(s) {
  if (s.__esModule)
    return s;
  var e = s.default;
  if (typeof e == "function") {
    var t = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(e, o);
        return new i();
      }
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(s).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(s, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return s[n];
      }
    });
  }), t;
}
var je = {}, De = {}, yt = {}, Ue = {}, Ve = {};
Object.defineProperty(Ve, "__esModule", {
  value: !0
});
Ve.default = $t;
let Fe;
const Qt = new Uint8Array(16);
function $t() {
  if (!Fe && (Fe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Fe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Fe(Qt);
}
var Ae = {}, Ce = {}, Qe = {};
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.default = void 0;
var qt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
Qe.default = qt;
Object.defineProperty(Ce, "__esModule", {
  value: !0
});
Ce.default = void 0;
var Gt = Wt(Qe);
function Wt(s) {
  return s && s.__esModule ? s : { default: s };
}
function Ht(s) {
  return typeof s == "string" && Gt.default.test(s);
}
var Yt = Ht;
Ce.default = Yt;
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
Ae.unsafeStringify = wt;
var zt = Jt(Ce);
function Jt(s) {
  return s && s.__esModule ? s : { default: s };
}
const de = [];
for (let s = 0; s < 256; ++s)
  de.push((s + 256).toString(16).slice(1));
function wt(s, e = 0) {
  return (de[s[e + 0]] + de[s[e + 1]] + de[s[e + 2]] + de[s[e + 3]] + "-" + de[s[e + 4]] + de[s[e + 5]] + "-" + de[s[e + 6]] + de[s[e + 7]] + "-" + de[s[e + 8]] + de[s[e + 9]] + "-" + de[s[e + 10]] + de[s[e + 11]] + de[s[e + 12]] + de[s[e + 13]] + de[s[e + 14]] + de[s[e + 15]]).toLowerCase();
}
function Xt(s, e = 0) {
  const t = wt(s, e);
  if (!(0, zt.default)(t))
    throw TypeError("Stringified UUID is invalid");
  return t;
}
var Zt = Xt;
Ae.default = Zt;
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.default = void 0;
var en = nn(Ve), tn = Ae;
function nn(s) {
  return s && s.__esModule ? s : { default: s };
}
let dt, st, ot = 0, at = 0;
function rn(s, e, t) {
  let n = e && t || 0;
  const o = e || new Array(16);
  s = s || {};
  let i = s.node || dt, u = s.clockseq !== void 0 ? s.clockseq : st;
  if (i == null || u == null) {
    const B = s.random || (s.rng || en.default)();
    i == null && (i = dt = [B[0] | 1, B[1], B[2], B[3], B[4], B[5]]), u == null && (u = st = (B[6] << 8 | B[7]) & 16383);
  }
  let d = s.msecs !== void 0 ? s.msecs : Date.now(), m = s.nsecs !== void 0 ? s.nsecs : at + 1;
  const y = d - ot + (m - at) / 1e4;
  if (y < 0 && s.clockseq === void 0 && (u = u + 1 & 16383), (y < 0 || d > ot) && s.nsecs === void 0 && (m = 0), m >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ot = d, at = m, st = u, d += 122192928e5;
  const O = ((d & 268435455) * 1e4 + m) % 4294967296;
  o[n++] = O >>> 24 & 255, o[n++] = O >>> 16 & 255, o[n++] = O >>> 8 & 255, o[n++] = O & 255;
  const C = d / 4294967296 * 1e4 & 268435455;
  o[n++] = C >>> 8 & 255, o[n++] = C & 255, o[n++] = C >>> 24 & 15 | 16, o[n++] = C >>> 16 & 255, o[n++] = u >>> 8 | 128, o[n++] = u & 255;
  for (let B = 0; B < 6; ++B)
    o[n + B] = i[B];
  return e || (0, tn.unsafeStringify)(o);
}
var sn = rn;
Ue.default = sn;
var $e = {}, Te = {}, Pe = {};
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.default = void 0;
var on = an(Ce);
function an(s) {
  return s && s.__esModule ? s : { default: s };
}
function ln(s) {
  if (!(0, on.default)(s))
    throw TypeError("Invalid UUID");
  let e;
  const t = new Uint8Array(16);
  return t[0] = (e = parseInt(s.slice(0, 8), 16)) >>> 24, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = e & 255, t[4] = (e = parseInt(s.slice(9, 13), 16)) >>> 8, t[5] = e & 255, t[6] = (e = parseInt(s.slice(14, 18), 16)) >>> 8, t[7] = e & 255, t[8] = (e = parseInt(s.slice(19, 23), 16)) >>> 8, t[9] = e & 255, t[10] = (e = parseInt(s.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = e / 4294967296 & 255, t[12] = e >>> 24 & 255, t[13] = e >>> 16 & 255, t[14] = e >>> 8 & 255, t[15] = e & 255, t;
}
var un = ln;
Pe.default = un;
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.URL = Te.DNS = void 0;
Te.default = dn;
var cn = Ae, fn = hn(Pe);
function hn(s) {
  return s && s.__esModule ? s : { default: s };
}
function pn(s) {
  s = unescape(encodeURIComponent(s));
  const e = [];
  for (let t = 0; t < s.length; ++t)
    e.push(s.charCodeAt(t));
  return e;
}
const _t = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
Te.DNS = _t;
const Et = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
Te.URL = Et;
function dn(s, e, t) {
  function n(o, i, u, d) {
    var m;
    if (typeof o == "string" && (o = pn(o)), typeof i == "string" && (i = (0, fn.default)(i)), ((m = i) === null || m === void 0 ? void 0 : m.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let y = new Uint8Array(16 + o.length);
    if (y.set(i), y.set(o, i.length), y = t(y), y[6] = y[6] & 15 | e, y[8] = y[8] & 63 | 128, u) {
      d = d || 0;
      for (let O = 0; O < 16; ++O)
        u[d + O] = y[O];
      return u;
    }
    return (0, cn.unsafeStringify)(y);
  }
  try {
    n.name = s;
  } catch {
  }
  return n.DNS = _t, n.URL = Et, n;
}
var qe = {};
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.default = void 0;
function vn(s) {
  if (typeof s == "string") {
    const e = unescape(encodeURIComponent(s));
    s = new Uint8Array(e.length);
    for (let t = 0; t < e.length; ++t)
      s[t] = e.charCodeAt(t);
  }
  return mn(gn(yn(s), s.length * 8));
}
function mn(s) {
  const e = [], t = s.length * 32, n = "0123456789abcdef";
  for (let o = 0; o < t; o += 8) {
    const i = s[o >> 5] >>> o % 32 & 255, u = parseInt(n.charAt(i >>> 4 & 15) + n.charAt(i & 15), 16);
    e.push(u);
  }
  return e;
}
function bt(s) {
  return (s + 64 >>> 9 << 4) + 14 + 1;
}
function gn(s, e) {
  s[e >> 5] |= 128 << e % 32, s[bt(e) - 1] = e;
  let t = 1732584193, n = -271733879, o = -1732584194, i = 271733878;
  for (let u = 0; u < s.length; u += 16) {
    const d = t, m = n, y = o, O = i;
    t = ve(t, n, o, i, s[u], 7, -680876936), i = ve(i, t, n, o, s[u + 1], 12, -389564586), o = ve(o, i, t, n, s[u + 2], 17, 606105819), n = ve(n, o, i, t, s[u + 3], 22, -1044525330), t = ve(t, n, o, i, s[u + 4], 7, -176418897), i = ve(i, t, n, o, s[u + 5], 12, 1200080426), o = ve(o, i, t, n, s[u + 6], 17, -1473231341), n = ve(n, o, i, t, s[u + 7], 22, -45705983), t = ve(t, n, o, i, s[u + 8], 7, 1770035416), i = ve(i, t, n, o, s[u + 9], 12, -1958414417), o = ve(o, i, t, n, s[u + 10], 17, -42063), n = ve(n, o, i, t, s[u + 11], 22, -1990404162), t = ve(t, n, o, i, s[u + 12], 7, 1804603682), i = ve(i, t, n, o, s[u + 13], 12, -40341101), o = ve(o, i, t, n, s[u + 14], 17, -1502002290), n = ve(n, o, i, t, s[u + 15], 22, 1236535329), t = me(t, n, o, i, s[u + 1], 5, -165796510), i = me(i, t, n, o, s[u + 6], 9, -1069501632), o = me(o, i, t, n, s[u + 11], 14, 643717713), n = me(n, o, i, t, s[u], 20, -373897302), t = me(t, n, o, i, s[u + 5], 5, -701558691), i = me(i, t, n, o, s[u + 10], 9, 38016083), o = me(o, i, t, n, s[u + 15], 14, -660478335), n = me(n, o, i, t, s[u + 4], 20, -405537848), t = me(t, n, o, i, s[u + 9], 5, 568446438), i = me(i, t, n, o, s[u + 14], 9, -1019803690), o = me(o, i, t, n, s[u + 3], 14, -187363961), n = me(n, o, i, t, s[u + 8], 20, 1163531501), t = me(t, n, o, i, s[u + 13], 5, -1444681467), i = me(i, t, n, o, s[u + 2], 9, -51403784), o = me(o, i, t, n, s[u + 7], 14, 1735328473), n = me(n, o, i, t, s[u + 12], 20, -1926607734), t = ge(t, n, o, i, s[u + 5], 4, -378558), i = ge(i, t, n, o, s[u + 8], 11, -2022574463), o = ge(o, i, t, n, s[u + 11], 16, 1839030562), n = ge(n, o, i, t, s[u + 14], 23, -35309556), t = ge(t, n, o, i, s[u + 1], 4, -1530992060), i = ge(i, t, n, o, s[u + 4], 11, 1272893353), o = ge(o, i, t, n, s[u + 7], 16, -155497632), n = ge(n, o, i, t, s[u + 10], 23, -1094730640), t = ge(t, n, o, i, s[u + 13], 4, 681279174), i = ge(i, t, n, o, s[u], 11, -358537222), o = ge(o, i, t, n, s[u + 3], 16, -722521979), n = ge(n, o, i, t, s[u + 6], 23, 76029189), t = ge(t, n, o, i, s[u + 9], 4, -640364487), i = ge(i, t, n, o, s[u + 12], 11, -421815835), o = ge(o, i, t, n, s[u + 15], 16, 530742520), n = ge(n, o, i, t, s[u + 2], 23, -995338651), t = ye(t, n, o, i, s[u], 6, -198630844), i = ye(i, t, n, o, s[u + 7], 10, 1126891415), o = ye(o, i, t, n, s[u + 14], 15, -1416354905), n = ye(n, o, i, t, s[u + 5], 21, -57434055), t = ye(t, n, o, i, s[u + 12], 6, 1700485571), i = ye(i, t, n, o, s[u + 3], 10, -1894986606), o = ye(o, i, t, n, s[u + 10], 15, -1051523), n = ye(n, o, i, t, s[u + 1], 21, -2054922799), t = ye(t, n, o, i, s[u + 8], 6, 1873313359), i = ye(i, t, n, o, s[u + 15], 10, -30611744), o = ye(o, i, t, n, s[u + 6], 15, -1560198380), n = ye(n, o, i, t, s[u + 13], 21, 1309151649), t = ye(t, n, o, i, s[u + 4], 6, -145523070), i = ye(i, t, n, o, s[u + 11], 10, -1120210379), o = ye(o, i, t, n, s[u + 2], 15, 718787259), n = ye(n, o, i, t, s[u + 9], 21, -343485551), t = xe(t, d), n = xe(n, m), o = xe(o, y), i = xe(i, O);
  }
  return [t, n, o, i];
}
function yn(s) {
  if (s.length === 0)
    return [];
  const e = s.length * 8, t = new Uint32Array(bt(e));
  for (let n = 0; n < e; n += 8)
    t[n >> 5] |= (s[n / 8] & 255) << n % 32;
  return t;
}
function xe(s, e) {
  const t = (s & 65535) + (e & 65535);
  return (s >> 16) + (e >> 16) + (t >> 16) << 16 | t & 65535;
}
function wn(s, e) {
  return s << e | s >>> 32 - e;
}
function Ge(s, e, t, n, o, i) {
  return xe(wn(xe(xe(e, s), xe(n, i)), o), t);
}
function ve(s, e, t, n, o, i, u) {
  return Ge(e & t | ~e & n, s, e, o, i, u);
}
function me(s, e, t, n, o, i, u) {
  return Ge(e & n | t & ~n, s, e, o, i, u);
}
function ge(s, e, t, n, o, i, u) {
  return Ge(e ^ t ^ n, s, e, o, i, u);
}
function ye(s, e, t, n, o, i, u) {
  return Ge(t ^ (e | ~n), s, e, o, i, u);
}
var _n = vn;
qe.default = _n;
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.default = void 0;
var En = kt(Te), bn = kt(qe);
function kt(s) {
  return s && s.__esModule ? s : { default: s };
}
const kn = (0, En.default)("v3", 48, bn.default);
var On = kn;
$e.default = On;
var We = {}, He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.default = void 0;
const Ln = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var xn = {
  randomUUID: Ln
};
He.default = xn;
Object.defineProperty(We, "__esModule", {
  value: !0
});
We.default = void 0;
var vt = Ot(He), Tn = Ot(Ve), An = Ae;
function Ot(s) {
  return s && s.__esModule ? s : { default: s };
}
function Sn(s, e, t) {
  if (vt.default.randomUUID && !e && !s)
    return vt.default.randomUUID();
  s = s || {};
  const n = s.random || (s.rng || Tn.default)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
    t = t || 0;
    for (let o = 0; o < 16; ++o)
      e[t + o] = n[o];
    return e;
  }
  return (0, An.unsafeStringify)(n);
}
var Cn = Sn;
We.default = Cn;
var Ye = {}, ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.default = void 0;
function Nn(s, e, t, n) {
  switch (s) {
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
function lt(s, e) {
  return s << e | s >>> 32 - e;
}
function In(s) {
  const e = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof s == "string") {
    const u = unescape(encodeURIComponent(s));
    s = [];
    for (let d = 0; d < u.length; ++d)
      s.push(u.charCodeAt(d));
  } else
    Array.isArray(s) || (s = Array.prototype.slice.call(s));
  s.push(128);
  const n = s.length / 4 + 2, o = Math.ceil(n / 16), i = new Array(o);
  for (let u = 0; u < o; ++u) {
    const d = new Uint32Array(16);
    for (let m = 0; m < 16; ++m)
      d[m] = s[u * 64 + m * 4] << 24 | s[u * 64 + m * 4 + 1] << 16 | s[u * 64 + m * 4 + 2] << 8 | s[u * 64 + m * 4 + 3];
    i[u] = d;
  }
  i[o - 1][14] = (s.length - 1) * 8 / Math.pow(2, 32), i[o - 1][14] = Math.floor(i[o - 1][14]), i[o - 1][15] = (s.length - 1) * 8 & 4294967295;
  for (let u = 0; u < o; ++u) {
    const d = new Uint32Array(80);
    for (let N = 0; N < 16; ++N)
      d[N] = i[u][N];
    for (let N = 16; N < 80; ++N)
      d[N] = lt(d[N - 3] ^ d[N - 8] ^ d[N - 14] ^ d[N - 16], 1);
    let m = t[0], y = t[1], O = t[2], C = t[3], B = t[4];
    for (let N = 0; N < 80; ++N) {
      const T = Math.floor(N / 20), I = lt(m, 5) + Nn(T, y, O, C) + B + e[T] + d[N] >>> 0;
      B = C, C = O, O = lt(y, 30) >>> 0, y = m, m = I;
    }
    t[0] = t[0] + m >>> 0, t[1] = t[1] + y >>> 0, t[2] = t[2] + O >>> 0, t[3] = t[3] + C >>> 0, t[4] = t[4] + B >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var Rn = In;
ze.default = Rn;
Object.defineProperty(Ye, "__esModule", {
  value: !0
});
Ye.default = void 0;
var Pn = Lt(Te), Bn = Lt(ze);
function Lt(s) {
  return s && s.__esModule ? s : { default: s };
}
const Fn = (0, Pn.default)("v5", 80, Bn.default);
var Mn = Fn;
Ye.default = Mn;
var Je = {};
Object.defineProperty(Je, "__esModule", {
  value: !0
});
Je.default = void 0;
var Kn = "00000000-0000-0000-0000-000000000000";
Je.default = Kn;
var Xe = {};
Object.defineProperty(Xe, "__esModule", {
  value: !0
});
Xe.default = void 0;
var jn = Dn(Ce);
function Dn(s) {
  return s && s.__esModule ? s : { default: s };
}
function Un(s) {
  if (!(0, jn.default)(s))
    throw TypeError("Invalid UUID");
  return parseInt(s.slice(14, 15), 16);
}
var Vn = Un;
Xe.default = Vn;
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "NIL", {
    enumerable: !0,
    get: function() {
      return i.default;
    }
  }), Object.defineProperty(s, "parse", {
    enumerable: !0,
    get: function() {
      return y.default;
    }
  }), Object.defineProperty(s, "stringify", {
    enumerable: !0,
    get: function() {
      return m.default;
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
      return n.default;
    }
  }), Object.defineProperty(s, "v5", {
    enumerable: !0,
    get: function() {
      return o.default;
    }
  }), Object.defineProperty(s, "validate", {
    enumerable: !0,
    get: function() {
      return d.default;
    }
  }), Object.defineProperty(s, "version", {
    enumerable: !0,
    get: function() {
      return u.default;
    }
  });
  var e = O(Ue), t = O($e), n = O(We), o = O(Ye), i = O(Je), u = O(Xe), d = O(Ce), m = O(Ae), y = O(Pe);
  function O(C) {
    return C && C.__esModule ? C : { default: C };
  }
})(yt);
var Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.RandomStringConfig = void 0;
class Qn {
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
Ze.RandomStringConfig = Qn;
var et = {};
Object.defineProperty(et, "__esModule", { value: !0 });
et.RandomStringBuilder = void 0;
class $n {
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
et.RandomStringBuilder = $n;
var tt = {};
const qn = new Proxy({}, {
  get(s, e) {
    throw new Error(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${e}" in client code.  See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
  }
}), Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qn
}, Symbol.toStringTag, { value: "Module" })), Wn = /* @__PURE__ */ Vt(Gn);
var Hn = ct && ct.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.RandomStringGenerator = void 0;
const Yn = Hn(Wn);
class zn {
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
    const n = Yn.default.randomBytes(t), o = e.length - 1;
    let i = "";
    for (; t--; )
      i += e[n[t] & o];
    return i;
  }
}
tt.RandomStringGenerator = zn;
var nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.StringReplacer = void 0;
class Jn {
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
nt.StringReplacer = Jn;
Object.defineProperty(De, "__esModule", { value: !0 });
De.Str = void 0;
const mt = yt, Xn = Ze, Zn = et, ei = tt, ut = nt;
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
    const [n, o] = this.split(e, 2);
    return [n, o];
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
    const t = new Xn.RandomStringConfig(), n = new Zn.RandomStringBuilder(t);
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
    return new ei.RandomStringGenerator(te, e).generate();
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
      const n = Math.floor(Math.random() * t--), o = e[t];
      e[t] = e[n], e[n] = o;
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
const ti = De, be = (s) => new ti.Str(s);
je.Str = be;
be.uuid = () => be().uuid();
be.random = (s) => be().random(s);
be.isString = (s) => be().isString(s);
be.isAlphaNumeric = (s) => be().isAlphaNumeric(s);
be.isSymbol = (s) => be().isSymbol(s);
var ni = je.default = be;
const gt = () => process.env.NODE_ENV === "test", ii = () => "id-" + (Math.random() + 1).toString(36).substring(7), xt = (s) => ni(s).isCamel(), Tt = (s) => /^([a-z]{1,})(_[a-z0-9]{1,})*$/.test(s), At = (s) => {
  let e = null;
  return Object.entries(s).forEach(([t, n]) => {
    if (n.type === "repeat") {
      const i = At(n.questions);
      i && (e = i);
    }
    !xt(t) && !Tt(t) && (e = t);
  }), e;
}, St = (s) => {
  const e = Object.values(s);
  let t = [];
  const n = e.map((o, i) => e.find((u, d) => {
    if (u.type === "repeat" && (t = St(u.questions)), i !== d && u.id === o.id)
      return o;
  })).filter(Boolean);
  return t.length && n.push(...t), n;
}, ri = (s) => {
  var n;
  const e = St(s);
  if (e.length)
    throw new Error(`Duplicated id values: ${(n = e[0]) == null ? void 0 : n.id}`);
  const t = At(s);
  if (t)
    throw new Error(`ID must be in camel case: ${t}`);
  return !0;
}, si = (s, e, t) => s < e ? (gt() || console.warn(`Value ${s} is lower than min ${e}. Returning min.`), e) : s > t ? (gt() || console.warn(`Value ${s} is higher than max ${t}. Returning max.`), t) : s, oi = (s, e) => {
  if (e.type === "repeat" && isNaN(s))
    throw new Error("Value of repeat question must be a number");
}, pt = class {
  constructor() {
    ue(this, "subscribers");
    this.subscribers = {};
  }
  dispatch(e, t) {
    const n = this.subscribers[e];
    n !== void 0 && Object.keys(n).forEach((o) => n[o](t));
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
    return pt.nextId++;
  }
};
let Me = pt;
ue(Me, "nextId", 0);
const ai = {
  text: !0,
  multipleChoice: !0,
  number: !0,
  date: !0,
  repeat: !0
}, li = (s, e = !1) => {
  if (!ai[s.type])
    throw new Error("Invalid question type");
  const t = s.id || ii();
  let n;
  return s.type === "text" ? n = ft(s) : s.type === "date" ? n = ui(s) : s.type === "multipleChoice" ? n = ci(s) : s.type === "repeat" ? n = fi(s) : n = ft(s), {
    id: t,
    type: s.type,
    title: s.title || "",
    indications: s.indications || "",
    logic: s.logic || {},
    options: s.options || {},
    indexInsideRepeat: s.indexInsideRepeat || null,
    ...n
  };
}, ft = (s) => ({
  value: s.value || "",
  required: Boolean(s.required),
  placeholder: s.placeholder || "",
  subType: s.subType || ""
}), ui = (s) => ({
  format: s.format || "dd/mm/yyyy",
  ...ft(s)
}), ci = (s) => {
  var e;
  return {
    value: ((e = s.choices.find((t) => t.checked === !0)) == null ? void 0 : e.label) || "",
    choices: s.choices || [],
    subType: s.subType || "radio"
  };
}, fi = (s) => ({
  value: s.value || "",
  range: s.range || { min: 0, max: 0 },
  questions: s.questions || {}
}), hi = (s, e, t = null) => {
  const n = JSON.parse(JSON.stringify(s));
  return Object.entries(n).forEach(([o, i]) => {
    const u = e + 1;
    i.title && (i.title = i.title.replace(/\<%= index %>/g, u.toString())), t ? i.indexInsideRepeat = t + `.${u}` : i.indexInsideRepeat = u.toString();
  }), n;
};
var Ke = {}, pi = {
  get exports() {
    return Ke;
  },
  set exports(s) {
    Ke = s;
  }
};
/*! Browser bundle of nunjucks 3.2.4  */
(function(s, e) {
  (function(n, o) {
    s.exports = o();
  })(typeof self < "u" ? self : ct, function() {
    return (
      /******/
      function(t) {
        var n = {};
        function o(i) {
          if (n[i])
            return n[i].exports;
          var u = n[i] = {
            /******/
            i,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return t[i].call(u.exports, u, u.exports, o), u.l = !0, u.exports;
        }
        return o.m = t, o.c = n, o.d = function(i, u, d) {
          o.o(i, u) || Object.defineProperty(i, u, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: d
            /******/
          });
        }, o.n = function(i) {
          var u = i && i.__esModule ? (
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
          return o.d(u, "a", u), u;
        }, o.o = function(i, u) {
          return Object.prototype.hasOwnProperty.call(i, u);
        }, o.p = "", o(o.s = 11);
      }([
        /* 0 */
        /***/
        function(t, y, o) {
          var i = Array.prototype, u = Object.prototype, d = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\\": "&#92;"
          }, m = /[&"'<>\\]/g, y = t.exports = {};
          function O(E, S) {
            return u.hasOwnProperty.call(E, S);
          }
          y.hasOwnProp = O;
          function C(E) {
            return d[E];
          }
          function B(E, S, j) {
            if (j.Update || (j = new y.TemplateError(j)), j.Update(E), !S) {
              var D = j;
              j = new Error(D.message), j.name = D.name;
            }
            return j;
          }
          y._prettifyError = B;
          function N(E, S, j) {
            var D, $;
            E instanceof Error && ($ = E, E = $.name + ": " + $.message), Object.setPrototypeOf ? (D = new Error(E), Object.setPrototypeOf(D, N.prototype)) : (D = this, Object.defineProperty(D, "message", {
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
              var ce = new Error(E).stack;
              ne = function() {
                return ce;
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
          Object.setPrototypeOf ? Object.setPrototypeOf(N.prototype, Error.prototype) : N.prototype = Object.create(Error.prototype, {
            constructor: {
              value: N
            }
          }), y.TemplateError = N;
          function T(E) {
            return E.replace(m, C);
          }
          y.escape = T;
          function I(E) {
            return u.toString.call(E) === "[object Function]";
          }
          y.isFunction = I;
          function r(E) {
            return u.toString.call(E) === "[object Array]";
          }
          y.isArray = r;
          function l(E) {
            return u.toString.call(E) === "[object String]";
          }
          y.isString = l;
          function c(E) {
            return u.toString.call(E) === "[object Object]";
          }
          y.isObject = c;
          function k(E) {
            return E ? typeof E == "string" ? E.split(".") : [E] : [];
          }
          function g(E) {
            var S = k(E);
            return function(D) {
              for (var $ = D, ne = 0; ne < S.length; ne++) {
                var z = S[ne];
                if (O($, z))
                  $ = $[z];
                else
                  return;
              }
              return $;
            };
          }
          y.getAttrGetter = g;
          function b(E, S, j) {
            for (var D = {}, $ = I(S) ? S : g(S), ne = 0; ne < E.length; ne++) {
              var z = E[ne], ce = $(z, ne);
              if (ce === void 0 && j === !0)
                throw new TypeError('groupby: attribute "' + S + '" resolved to undefined');
              (D[ce] || (D[ce] = [])).push(z);
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
          function _(E, S, j) {
            var D = -1;
            function $() {
              D++, D < E.length ? S(E[D], D, $, j) : j();
            }
            $();
          }
          y.asyncIter = _;
          function w(E, S, j) {
            var D = P(E || {}), $ = D.length, ne = -1;
            function z() {
              ne++;
              var ce = D[ne];
              ne < $ ? S(ce, E[ce], ne, $, z) : j();
            }
            z();
          }
          y.asyncFor = w;
          function A(E, S, j) {
            return Array.prototype.indexOf.call(E || [], S, j);
          }
          y.indexOf = A;
          function P(E) {
            var S = [];
            for (var j in E)
              O(E, j) && S.push(j);
            return S;
          }
          y.keys = P;
          function R(E) {
            return P(E).map(function(S) {
              return [S, E[S]];
            });
          }
          y._entries = R;
          function F(E) {
            return P(E).map(function(S) {
              return E[S];
            });
          }
          y._values = F;
          function K(E, S) {
            return E = E || {}, P(S).forEach(function(j) {
              E[j] = S[j];
            }), E;
          }
          y._assign = y.extend = K;
          function x(E, S) {
            if (r(S) || l(S))
              return S.indexOf(E) !== -1;
            if (c(S))
              return E in S;
            throw new Error('Cannot use "in" operator to search for "' + E + '" in unexpected types.');
          }
          y.inOperator = x;
        },
        /* 1 */
        /***/
        function(t, n, o) {
          function i(l, c) {
            for (var k = 0; k < c.length; k++) {
              var g = c[k];
              g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(l, d(g.key), g);
            }
          }
          function u(l, c, k) {
            return c && i(l.prototype, c), k && i(l, k), Object.defineProperty(l, "prototype", { writable: !1 }), l;
          }
          function d(l) {
            var c = m(l, "string");
            return typeof c == "symbol" ? c : String(c);
          }
          function m(l, c) {
            if (typeof l != "object" || l === null)
              return l;
            var k = l[Symbol.toPrimitive];
            if (k !== void 0) {
              var g = k.call(l, c || "default");
              if (typeof g != "object")
                return g;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (c === "string" ? String : Number)(l);
          }
          function y(l, c) {
            l.prototype = Object.create(c.prototype), l.prototype.constructor = l, O(l, c);
          }
          function O(l, c) {
            return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, b) {
              return g.__proto__ = b, g;
            }, O(l, c);
          }
          var C = o(16), B = o(0);
          function N(l, c) {
            return typeof l != "function" || typeof c != "function" ? c : function() {
              var g = this.parent;
              this.parent = l;
              var b = c.apply(this, arguments);
              return this.parent = g, b;
            };
          }
          function T(l, c, k) {
            k = k || {}, B.keys(k).forEach(function(b) {
              k[b] = N(l.prototype[b], k[b]);
            });
            var g = /* @__PURE__ */ function(b) {
              y(a, b);
              function a() {
                return b.apply(this, arguments) || this;
              }
              return u(a, [{
                key: "typename",
                get: function() {
                  return c;
                }
              }]), a;
            }(l);
            return B._assign(g.prototype, k), g;
          }
          var I = /* @__PURE__ */ function() {
            function l() {
              this.init.apply(this, arguments);
            }
            var c = l.prototype;
            return c.init = function() {
            }, l.extend = function(g, b) {
              return typeof g == "object" && (b = g, g = "anonymous"), T(this, g, b);
            }, u(l, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), l;
          }(), r = /* @__PURE__ */ function(l) {
            y(c, l);
            function c() {
              var g, b;
              return b = l.call(this) || this, (g = b).init.apply(g, arguments), b;
            }
            var k = c.prototype;
            return k.init = function() {
            }, c.extend = function(b, a) {
              return typeof b == "object" && (a = b, b = "anonymous"), T(this, b, a);
            }, u(c, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), c;
          }(C);
          t.exports = {
            Obj: I,
            EmitterObj: r
          };
        },
        /* 2 */
        /***/
        function(t, n, o) {
          var i = o(0), u = Array.from, d = typeof Symbol == "function" && Symbol.iterator && typeof u == "function", m = /* @__PURE__ */ function() {
            function p(w, A) {
              this.variables = /* @__PURE__ */ Object.create(null), this.parent = w, this.topLevel = !1, this.isolateWrites = A;
            }
            var _ = p.prototype;
            return _.set = function(A, P, R) {
              var F = A.split("."), K = this.variables, x = this;
              if (R && (x = this.resolve(F[0], !0))) {
                x.set(A, P);
                return;
              }
              for (var E = 0; E < F.length - 1; E++) {
                var S = F[E];
                K[S] || (K[S] = {}), K = K[S];
              }
              K[F[F.length - 1]] = P;
            }, _.get = function(A) {
              var P = this.variables[A];
              return P !== void 0 ? P : null;
            }, _.lookup = function(A) {
              var P = this.parent, R = this.variables[A];
              return R !== void 0 ? R : P && P.lookup(A);
            }, _.resolve = function(A, P) {
              var R = P && this.isolateWrites ? void 0 : this.parent, F = this.variables[A];
              return F !== void 0 ? this : R && R.resolve(A);
            }, _.push = function(A) {
              return new p(this, A);
            }, _.pop = function() {
              return this.parent;
            }, p;
          }();
          function y(p, _, w) {
            return function() {
              for (var P = arguments.length, R = new Array(P), F = 0; F < P; F++)
                R[F] = arguments[F];
              var K = N(R), x, E = B(R);
              if (K > p.length)
                x = R.slice(0, p.length), R.slice(x.length, K).forEach(function(D, $) {
                  $ < _.length && (E[_[$]] = D);
                }), x.push(E);
              else if (K < p.length) {
                x = R.slice(0, K);
                for (var S = K; S < p.length; S++) {
                  var j = p[S];
                  x.push(E[j]), delete E[j];
                }
                x.push(E);
              } else
                x = R;
              return w.apply(this, x);
            };
          }
          function O(p) {
            return p.__keywords = !0, p;
          }
          function C(p) {
            return p && Object.prototype.hasOwnProperty.call(p, "__keywords");
          }
          function B(p) {
            var _ = p.length;
            if (_) {
              var w = p[_ - 1];
              if (C(w))
                return w;
            }
            return {};
          }
          function N(p) {
            var _ = p.length;
            if (_ === 0)
              return 0;
            var w = p[_ - 1];
            return C(w) ? _ - 1 : _;
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
          function I(p, _) {
            return p instanceof T ? new T(_) : _.toString();
          }
          function r(p) {
            var _ = typeof p;
            return _ === "string" ? new T(p) : _ !== "function" ? p : function(A) {
              var P = p.apply(this, arguments);
              return typeof P == "string" ? new T(P) : P;
            };
          }
          function l(p, _) {
            return p = p ?? "", _ && !(p instanceof T) && (p = i.escape(p.toString())), p;
          }
          function c(p, _, w) {
            if (p == null)
              throw new i.TemplateError("attempted to output null or undefined value", _ + 1, w + 1);
            return p;
          }
          function k(p, _) {
            if (p != null)
              return typeof p[_] == "function" ? function() {
                for (var w = arguments.length, A = new Array(w), P = 0; P < w; P++)
                  A[P] = arguments[P];
                return p[_].apply(p, A);
              } : p[_];
          }
          function g(p, _, w, A) {
            if (p) {
              if (typeof p != "function")
                throw new Error("Unable to call `" + _ + "`, which is not a function");
            } else
              throw new Error("Unable to call `" + _ + "`, which is undefined or falsey");
            return p.apply(w, A);
          }
          function b(p, _, w) {
            var A = _.lookup(w);
            return A !== void 0 ? A : p.lookup(w);
          }
          function a(p, _, w) {
            return p.lineno ? p : new i.TemplateError(p, _, w);
          }
          function f(p, _, w, A) {
            if (i.isArray(p)) {
              var P = p.length;
              i.asyncIter(p, function(F, K, x) {
                switch (_) {
                  case 1:
                    w(F, K, P, x);
                    break;
                  case 2:
                    w(F[0], F[1], K, P, x);
                    break;
                  case 3:
                    w(F[0], F[1], F[2], K, P, x);
                    break;
                  default:
                    F.push(K, P, x), w.apply(this, F);
                }
              }, A);
            } else
              i.asyncFor(p, function(F, K, x, E, S) {
                w(F, K, x, E, S);
              }, A);
          }
          function v(p, _, w, A) {
            var P = 0, R, F;
            function K($, ne) {
              P++, F[$] = ne, P === R && A(null, F.join(""));
            }
            if (i.isArray(p))
              if (R = p.length, F = new Array(R), R === 0)
                A(null, "");
              else
                for (var x = 0; x < p.length; x++) {
                  var E = p[x];
                  switch (_) {
                    case 1:
                      w(E, x, R, K);
                      break;
                    case 2:
                      w(E[0], E[1], x, R, K);
                      break;
                    case 3:
                      w(E[0], E[1], E[2], x, R, K);
                      break;
                    default:
                      E.push(x, R, K), w.apply(this, E);
                  }
                }
            else {
              var S = i.keys(p || {});
              if (R = S.length, F = new Array(R), R === 0)
                A(null, "");
              else
                for (var j = 0; j < S.length; j++) {
                  var D = S[j];
                  w(D, p[D], j, R, K);
                }
            }
          }
          function h(p) {
            return typeof p != "object" || p === null || i.isArray(p) ? p : d && Symbol.iterator in p ? u(p) : p;
          }
          t.exports = {
            Frame: m,
            makeMacro: y,
            makeKeywordArgs: O,
            numArgs: N,
            suppressValue: l,
            ensureDefined: c,
            memberLookup: k,
            contextOrFrameLookup: b,
            callWrap: g,
            handleError: a,
            isArray: i.isArray,
            keys: i.keys,
            SafeString: T,
            copySafeness: I,
            markSafe: r,
            asyncEach: f,
            asyncAll: v,
            inOperator: i.inOperator,
            fromIterator: h
          };
        },
        /* 3 */
        /***/
        function(t, n, o) {
          function i(W, H) {
            for (var re = 0; re < H.length; re++) {
              var ie = H[re];
              ie.enumerable = ie.enumerable || !1, ie.configurable = !0, "value" in ie && (ie.writable = !0), Object.defineProperty(W, d(ie.key), ie);
            }
          }
          function u(W, H, re) {
            return H && i(W.prototype, H), re && i(W, re), Object.defineProperty(W, "prototype", { writable: !1 }), W;
          }
          function d(W) {
            var H = m(W, "string");
            return typeof H == "symbol" ? H : String(H);
          }
          function m(W, H) {
            if (typeof W != "object" || W === null)
              return W;
            var re = W[Symbol.toPrimitive];
            if (re !== void 0) {
              var ie = re.call(W, H || "default");
              if (typeof ie != "object")
                return ie;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (H === "string" ? String : Number)(W);
          }
          function y(W, H) {
            W.prototype = Object.create(H.prototype), W.prototype.constructor = W, O(W, H);
          }
          function O(W, H) {
            return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(ie, oe) {
              return ie.__proto__ = oe, ie;
            }, O(W, H);
          }
          var C = o(1), B = C.Obj;
          function N(W, H, re) {
            W instanceof H && re.push(W), W instanceof T && W.findAll(H, re);
          }
          var T = /* @__PURE__ */ function(W) {
            y(H, W);
            function H() {
              return W.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, fe) {
              for (var _e = arguments, Se = this, Re = arguments.length, Mt = new Array(Re > 2 ? Re - 2 : 0), Be = 2; Be < Re; Be++)
                Mt[Be - 2] = arguments[Be];
              this.lineno = oe, this.colno = fe, this.fields.forEach(function(Kt, jt) {
                var rt = _e[jt + 2];
                rt === void 0 && (rt = null), Se[Kt] = rt;
              });
            }, re.findAll = function(oe, fe) {
              var _e = this;
              return fe = fe || [], this instanceof r ? this.children.forEach(function(Se) {
                return N(Se, oe, fe);
              }) : this.fields.forEach(function(Se) {
                return N(_e[Se], oe, fe);
              }), fe;
            }, re.iterFields = function(oe) {
              var fe = this;
              this.fields.forEach(function(_e) {
                oe(fe[_e], _e);
              });
            }, H;
          }(B), I = /* @__PURE__ */ function(W) {
            y(H, W);
            function H() {
              return W.apply(this, arguments) || this;
            }
            return u(H, [{
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
          }(T), r = /* @__PURE__ */ function(W) {
            y(H, W);
            function H() {
              return W.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, fe, _e) {
              W.prototype.init.call(this, oe, fe, _e || []);
            }, re.addChild = function(oe) {
              this.children.push(oe);
            }, u(H, [{
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
          }(T), l = r.extend("Root"), c = I.extend("Literal"), k = I.extend("Symbol"), g = r.extend("Group"), b = r.extend("Array"), a = T.extend("Pair", {
            fields: ["key", "value"]
          }), f = r.extend("Dict"), v = T.extend("LookupVal", {
            fields: ["target", "val"]
          }), h = T.extend("If", {
            fields: ["cond", "body", "else_"]
          }), p = h.extend("IfAsync"), _ = T.extend("InlineIf", {
            fields: ["cond", "body", "else_"]
          }), w = T.extend("For", {
            fields: ["arr", "name", "body", "else_"]
          }), A = w.extend("AsyncEach"), P = w.extend("AsyncAll"), R = T.extend("Macro", {
            fields: ["name", "args", "body"]
          }), F = R.extend("Caller"), K = T.extend("Import", {
            fields: ["template", "target", "withContext"]
          }), x = /* @__PURE__ */ function(W) {
            y(H, W);
            function H() {
              return W.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, fe, _e, Se, Re) {
              W.prototype.init.call(this, oe, fe, _e, Se || new r(), Re);
            }, u(H, [{
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
          }), ce = z.extend("Extends"), pe = T.extend("Include", {
            fields: ["template", "ignoreMissing"]
          }), X = T.extend("Set", {
            fields: ["targets", "value"]
          }), Z = T.extend("Switch", {
            fields: ["expr", "cases", "default"]
          }), Q = T.extend("Case", {
            fields: ["cond", "body"]
          }), G = r.extend("Output"), q = T.extend("Capture", {
            fields: ["body"]
          }), se = c.extend("TemplateData"), we = T.extend("UnaryOp", {
            fields: ["target"]
          }), he = T.extend("BinOp", {
            fields: ["left", "right"]
          }), Oe = he.extend("In"), L = he.extend("Is"), M = he.extend("Or"), V = he.extend("And"), U = we.extend("Not"), Y = he.extend("Add"), J = he.extend("Concat"), ae = he.extend("Sub"), ee = he.extend("Mul"), le = he.extend("Div"), Ee = he.extend("FloorDiv"), ke = he.extend("Mod"), Le = he.extend("Pow"), It = we.extend("Neg"), Rt = we.extend("Pos"), Pt = T.extend("Compare", {
            fields: ["expr", "ops"]
          }), Bt = T.extend("CompareOperand", {
            fields: ["expr", "type"]
          }), it = T.extend("CallExtension", {
            init: function(H, re, ie, oe) {
              this.parent(), this.extName = H.__name || H, this.prop = re, this.args = ie || new r(), this.contentArgs = oe || [], this.autoescape = H.autoescape;
            },
            fields: ["extName", "prop", "args", "contentArgs"]
          }), Ft = it.extend("CallExtensionAsync");
          function Ne(W, H, re) {
            var ie = W.split(`
`);
            ie.forEach(function(oe, fe) {
              oe && (re && fe > 0 || !re) && process.stdout.write(" ".repeat(H));
              var _e = fe === ie.length - 1 ? "" : `
`;
              process.stdout.write("" + oe + _e);
            });
          }
          function Ie(W, H) {
            if (H = H || 0, Ne(W.typename + ": ", H), W instanceof r)
              Ne(`
`), W.children.forEach(function(oe) {
                Ie(oe, H + 2);
              });
            else if (W instanceof it)
              Ne(W.extName + "." + W.prop + `
`), W.args && Ie(W.args, H + 2), W.contentArgs && W.contentArgs.forEach(function(oe) {
                Ie(oe, H + 2);
              });
            else {
              var re = [], ie = null;
              W.iterFields(function(oe, fe) {
                oe instanceof T ? re.push([fe, oe]) : (ie = ie || {}, ie[fe] = oe);
              }), ie ? Ne(JSON.stringify(ie, null, 2) + `
`, null, !0) : Ne(`
`), re.forEach(function(oe) {
                var fe = oe[0], _e = oe[1];
                Ne("[" + fe + "] =>", H + 2), Ie(_e, H + 4);
              });
            }
          }
          t.exports = {
            Node: T,
            Root: l,
            NodeList: r,
            Value: I,
            Literal: c,
            Symbol: k,
            Group: g,
            Array: b,
            Pair: a,
            Dict: f,
            Output: G,
            Capture: q,
            TemplateData: se,
            If: h,
            IfAsync: p,
            InlineIf: _,
            For: w,
            AsyncEach: A,
            AsyncAll: P,
            Macro: R,
            Caller: F,
            Import: K,
            FromImport: x,
            FunCall: E,
            Filter: S,
            FilterAsync: j,
            KeywordArgs: D,
            Block: $,
            Super: ne,
            Extends: ce,
            Include: pe,
            Set: X,
            Switch: Z,
            Case: Q,
            LookupVal: v,
            BinOp: he,
            In: Oe,
            Is: L,
            Or: M,
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
            Neg: It,
            Pos: Rt,
            Compare: Pt,
            CompareOperand: Bt,
            CallExtension: it,
            CallExtensionAsync: Ft,
            printNodes: Ie
          };
        },
        /* 4 */
        /***/
        function(t, n) {
        },
        /* 5 */
        /***/
        function(t, n, o) {
          function i(c, k) {
            c.prototype = Object.create(k.prototype), c.prototype.constructor = c, u(c, k);
          }
          function u(c, k) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(b, a) {
              return b.__proto__ = a, b;
            }, u(c, k);
          }
          var d = o(8), m = o(17), y = o(3), O = o(0), C = O.TemplateError, B = o(2), N = B.Frame, T = o(1), I = T.Obj, r = {
            "==": "==",
            "===": "===",
            "!=": "!=",
            "!==": "!==",
            "<": "<",
            ">": ">",
            "<=": "<=",
            ">=": ">="
          }, l = /* @__PURE__ */ function(c) {
            i(k, c);
            function k() {
              return c.apply(this, arguments) || this;
            }
            var g = k.prototype;
            return g.init = function(a, f) {
              this.templateName = a, this.codebuf = [], this.lastId = 0, this.buffer = null, this.bufferStack = [], this._scopeClosers = "", this.inBlock = !1, this.throwOnUndefined = f;
            }, g.fail = function(a, f, v) {
              throw f !== void 0 && (f += 1), v !== void 0 && (v += 1), new C(a, f, v);
            }, g._pushBuffer = function() {
              var a = this._tmpid();
              return this.bufferStack.push(this.buffer), this.buffer = a, this._emit("var " + this.buffer + ' = "";'), a;
            }, g._popBuffer = function() {
              this.buffer = this.bufferStack.pop();
            }, g._emit = function(a) {
              this.codebuf.push(a);
            }, g._emitLine = function(a) {
              this._emit(a + `
`);
            }, g._emitLines = function() {
              for (var a = this, f = arguments.length, v = new Array(f), h = 0; h < f; h++)
                v[h] = arguments[h];
              v.forEach(function(p) {
                return a._emitLine(p);
              });
            }, g._emitFuncBegin = function(a, f) {
              this.buffer = "output", this._scopeClosers = "", this._emitLine("function " + f + "(env, context, frame, runtime, cb) {"), this._emitLine("var lineno = " + a.lineno + ";"), this._emitLine("var colno = " + a.colno + ";"), this._emitLine("var " + this.buffer + ' = "";'), this._emitLine("try {");
            }, g._emitFuncEnd = function(a) {
              a || this._emitLine("cb(null, " + this.buffer + ");"), this._closeScopeLevels(), this._emitLine("} catch (e) {"), this._emitLine("  cb(runtime.handleError(e, lineno, colno));"), this._emitLine("}"), this._emitLine("}"), this.buffer = null;
            }, g._addScopeLevel = function() {
              this._scopeClosers += "})";
            }, g._closeScopeLevels = function() {
              this._emitLine(this._scopeClosers + ";"), this._scopeClosers = "";
            }, g._withScopedSyntax = function(a) {
              var f = this._scopeClosers;
              this._scopeClosers = "", a.call(this), this._closeScopeLevels(), this._scopeClosers = f;
            }, g._makeCallback = function(a) {
              var f = this._tmpid();
              return "function(" + f + (a ? "," + a : "") + `) {
if(` + f + ") { cb(" + f + "); return; }";
            }, g._tmpid = function() {
              return this.lastId++, "t_" + this.lastId;
            }, g._templateName = function() {
              return this.templateName == null ? "undefined" : JSON.stringify(this.templateName);
            }, g._compileChildren = function(a, f) {
              var v = this;
              a.children.forEach(function(h) {
                v.compile(h, f);
              });
            }, g._compileAggregate = function(a, f, v, h) {
              var p = this;
              v && this._emit(v), a.children.forEach(function(_, w) {
                w > 0 && p._emit(","), p.compile(_, f);
              }), h && this._emit(h);
            }, g._compileExpression = function(a, f) {
              this.assertType(a, y.Literal, y.Symbol, y.Group, y.Array, y.Dict, y.FunCall, y.Caller, y.Filter, y.LookupVal, y.Compare, y.InlineIf, y.In, y.Is, y.And, y.Or, y.Not, y.Add, y.Concat, y.Sub, y.Mul, y.Div, y.FloorDiv, y.Mod, y.Pow, y.Neg, y.Pos, y.Compare, y.NodeList), this.compile(a, f);
            }, g.assertType = function(a) {
              for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), h = 1; h < f; h++)
                v[h - 1] = arguments[h];
              v.some(function(p) {
                return a instanceof p;
              }) || this.fail("assertType: invalid type: " + a.typename, a.lineno, a.colno);
            }, g.compileCallExtension = function(a, f, v) {
              var h = this, p = a.args, _ = a.contentArgs, w = typeof a.autoescape == "boolean" ? a.autoescape : !0;
              if (v || this._emit(this.buffer + " += runtime.suppressValue("), this._emit('env.getExtension("' + a.extName + '")["' + a.prop + '"]('), this._emit("context"), (p || _) && this._emit(","), p && (p instanceof y.NodeList || this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"), p.children.forEach(function(P, R) {
                h._compileExpression(P, f), (R !== p.children.length - 1 || _.length) && h._emit(",");
              })), _.length && _.forEach(function(P, R) {
                if (R > 0 && h._emit(","), P) {
                  h._emitLine("function(cb) {"), h._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");
                  var F = h._pushBuffer();
                  h._withScopedSyntax(function() {
                    h.compile(P, f), h._emitLine("cb(null, " + F + ");");
                  }), h._popBuffer(), h._emitLine("return " + F + ";"), h._emitLine("}");
                } else
                  h._emit("null");
              }), v) {
                var A = this._tmpid();
                this._emitLine(", " + this._makeCallback(A)), this._emitLine(this.buffer + " += runtime.suppressValue(" + A + ", " + w + " && env.opts.autoescape);"), this._addScopeLevel();
              } else
                this._emit(")"), this._emit(", " + w + ` && env.opts.autoescape);
`);
            }, g.compileCallExtensionAsync = function(a, f) {
              this.compileCallExtension(a, f, !0);
            }, g.compileNodeList = function(a, f) {
              this._compileChildren(a, f);
            }, g.compileLiteral = function(a) {
              if (typeof a.value == "string") {
                var f = a.value.replace(/\\/g, "\\\\");
                f = f.replace(/"/g, '\\"'), f = f.replace(/\n/g, "\\n"), f = f.replace(/\r/g, "\\r"), f = f.replace(/\t/g, "\\t"), f = f.replace(/\u2028/g, "\\u2028"), this._emit('"' + f + '"');
              } else
                a.value === null ? this._emit("null") : this._emit(a.value.toString());
            }, g.compileSymbol = function(a, f) {
              var v = a.value, h = f.lookup(v);
              h ? this._emit(h) : this._emit('runtime.contextOrFrameLookup(context, frame, "' + v + '")');
            }, g.compileGroup = function(a, f) {
              this._compileAggregate(a, f, "(", ")");
            }, g.compileArray = function(a, f) {
              this._compileAggregate(a, f, "[", "]");
            }, g.compileDict = function(a, f) {
              this._compileAggregate(a, f, "{", "}");
            }, g.compilePair = function(a, f) {
              var v = a.key, h = a.value;
              v instanceof y.Symbol ? v = new y.Literal(v.lineno, v.colno, v.value) : v instanceof y.Literal && typeof v.value == "string" || this.fail("compilePair: Dict keys must be strings or names", v.lineno, v.colno), this.compile(v, f), this._emit(": "), this._compileExpression(h, f);
            }, g.compileInlineIf = function(a, f) {
              this._emit("("), this.compile(a.cond, f), this._emit("?"), this.compile(a.body, f), this._emit(":"), a.else_ !== null ? this.compile(a.else_, f) : this._emit('""'), this._emit(")");
            }, g.compileIn = function(a, f) {
              this._emit("runtime.inOperator("), this.compile(a.left, f), this._emit(","), this.compile(a.right, f), this._emit(")");
            }, g.compileIs = function(a, f) {
              var v = a.right.name ? a.right.name.value : a.right.value;
              this._emit('env.getTest("' + v + '").call(context, '), this.compile(a.left, f), a.right.args && (this._emit(","), this.compile(a.right.args, f)), this._emit(") === true");
            }, g._binOpEmitter = function(a, f, v) {
              this.compile(a.left, f), this._emit(v), this.compile(a.right, f);
            }, g.compileOr = function(a, f) {
              return this._binOpEmitter(a, f, " || ");
            }, g.compileAnd = function(a, f) {
              return this._binOpEmitter(a, f, " && ");
            }, g.compileAdd = function(a, f) {
              return this._binOpEmitter(a, f, " + ");
            }, g.compileConcat = function(a, f) {
              return this._binOpEmitter(a, f, ' + "" + ');
            }, g.compileSub = function(a, f) {
              return this._binOpEmitter(a, f, " - ");
            }, g.compileMul = function(a, f) {
              return this._binOpEmitter(a, f, " * ");
            }, g.compileDiv = function(a, f) {
              return this._binOpEmitter(a, f, " / ");
            }, g.compileMod = function(a, f) {
              return this._binOpEmitter(a, f, " % ");
            }, g.compileNot = function(a, f) {
              this._emit("!"), this.compile(a.target, f);
            }, g.compileFloorDiv = function(a, f) {
              this._emit("Math.floor("), this.compile(a.left, f), this._emit(" / "), this.compile(a.right, f), this._emit(")");
            }, g.compilePow = function(a, f) {
              this._emit("Math.pow("), this.compile(a.left, f), this._emit(", "), this.compile(a.right, f), this._emit(")");
            }, g.compileNeg = function(a, f) {
              this._emit("-"), this.compile(a.target, f);
            }, g.compilePos = function(a, f) {
              this._emit("+"), this.compile(a.target, f);
            }, g.compileCompare = function(a, f) {
              var v = this;
              this.compile(a.expr, f), a.ops.forEach(function(h) {
                v._emit(" " + r[h.type] + " "), v.compile(h.expr, f);
              });
            }, g.compileLookupVal = function(a, f) {
              this._emit("runtime.memberLookup(("), this._compileExpression(a.target, f), this._emit("),"), this._compileExpression(a.val, f), this._emit(")");
            }, g._getNodeName = function(a) {
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
            }, g.compileFunCall = function(a, f) {
              this._emit("(lineno = " + a.lineno + ", colno = " + a.colno + ", "), this._emit("runtime.callWrap("), this._compileExpression(a.name, f), this._emit(', "' + this._getNodeName(a.name).replace(/"/g, '\\"') + '", context, '), this._compileAggregate(a.args, f, "[", "])"), this._emit(")");
            }, g.compileFilter = function(a, f) {
              var v = a.name;
              this.assertType(v, y.Symbol), this._emit('env.getFilter("' + v.value + '").call(context, '), this._compileAggregate(a.args, f), this._emit(")");
            }, g.compileFilterAsync = function(a, f) {
              var v = a.name, h = a.symbol.value;
              this.assertType(v, y.Symbol), f.set(h, h), this._emit('env.getFilter("' + v.value + '").call(context, '), this._compileAggregate(a.args, f), this._emitLine(", " + this._makeCallback(h)), this._addScopeLevel();
            }, g.compileKeywordArgs = function(a, f) {
              this._emit("runtime.makeKeywordArgs("), this.compileDict(a, f), this._emit(")");
            }, g.compileSet = function(a, f) {
              var v = this, h = [];
              a.targets.forEach(function(p) {
                var _ = p.value, w = f.lookup(_);
                w == null && (w = v._tmpid(), v._emitLine("var " + w + ";")), h.push(w);
              }), a.value ? (this._emit(h.join(" = ") + " = "), this._compileExpression(a.value, f), this._emitLine(";")) : (this._emit(h.join(" = ") + " = "), this.compile(a.body, f), this._emitLine(";")), a.targets.forEach(function(p, _) {
                var w = h[_], A = p.value;
                v._emitLine('frame.set("' + A + '", ' + w + ", true);"), v._emitLine("if(frame.topLevel) {"), v._emitLine('context.setVariable("' + A + '", ' + w + ");"), v._emitLine("}"), A.charAt(0) !== "_" && (v._emitLine("if(frame.topLevel) {"), v._emitLine('context.addExport("' + A + '", ' + w + ");"), v._emitLine("}"));
              });
            }, g.compileSwitch = function(a, f) {
              var v = this;
              this._emit("switch ("), this.compile(a.expr, f), this._emit(") {"), a.cases.forEach(function(h, p) {
                v._emit("case "), v.compile(h.cond, f), v._emit(": "), v.compile(h.body, f), h.body.children.length && v._emitLine("break;");
              }), a.default && (this._emit("default:"), this.compile(a.default, f)), this._emit("}");
            }, g.compileIf = function(a, f, v) {
              var h = this;
              this._emit("if("), this._compileExpression(a.cond, f), this._emitLine(") {"), this._withScopedSyntax(function() {
                h.compile(a.body, f), v && h._emit("cb()");
              }), a.else_ ? (this._emitLine(`}
else {`), this._withScopedSyntax(function() {
                h.compile(a.else_, f), v && h._emit("cb()");
              })) : v && (this._emitLine(`}
else {`), this._emit("cb()")), this._emitLine("}");
            }, g.compileIfAsync = function(a, f) {
              this._emit("(function(cb) {"), this.compileIf(a, f, !0), this._emit("})(" + this._makeCallback()), this._addScopeLevel();
            }, g._emitLoopBindings = function(a, f, v, h) {
              var p = this, _ = [{
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
                p._emitLine('frame.set("loop.' + w.name + '", ' + w.val + ");");
              });
            }, g.compileFor = function(a, f) {
              var v = this, h = this._tmpid(), p = this._tmpid(), _ = this._tmpid();
              if (f = f.push(), this._emitLine("frame = frame.push();"), this._emit("var " + _ + " = "), this._compileExpression(a.arr, f), this._emitLine(";"), this._emit("if(" + _ + ") {"), this._emitLine(_ + " = runtime.fromIterator(" + _ + ");"), a.name instanceof y.Array) {
                this._emitLine("var " + h + ";"), this._emitLine("if(runtime.isArray(" + _ + ")) {"), this._emitLine("var " + p + " = " + _ + ".length;"), this._emitLine("for(" + h + "=0; " + h + " < " + _ + ".length; " + h + "++) {"), a.name.children.forEach(function(x, E) {
                  var S = v._tmpid();
                  v._emitLine("var " + S + " = " + _ + "[" + h + "][" + E + "];"), v._emitLine('frame.set("' + x + '", ' + _ + "[" + h + "][" + E + "]);"), f.set(a.name.children[E].value, S);
                }), this._emitLoopBindings(a, _, h, p), this._withScopedSyntax(function() {
                  v.compile(a.body, f);
                }), this._emitLine("}"), this._emitLine("} else {");
                var w = a.name.children, A = w[0], P = w[1], R = this._tmpid(), F = this._tmpid();
                f.set(A.value, R), f.set(P.value, F), this._emitLine(h + " = -1;"), this._emitLine("var " + p + " = runtime.keys(" + _ + ").length;"), this._emitLine("for(var " + R + " in " + _ + ") {"), this._emitLine(h + "++;"), this._emitLine("var " + F + " = " + _ + "[" + R + "];"), this._emitLine('frame.set("' + A.value + '", ' + R + ");"), this._emitLine('frame.set("' + P.value + '", ' + F + ");"), this._emitLoopBindings(a, _, h, p), this._withScopedSyntax(function() {
                  v.compile(a.body, f);
                }), this._emitLine("}"), this._emitLine("}");
              } else {
                var K = this._tmpid();
                f.set(a.name.value, K), this._emitLine("var " + p + " = " + _ + ".length;"), this._emitLine("for(var " + h + "=0; " + h + " < " + _ + ".length; " + h + "++) {"), this._emitLine("var " + K + " = " + _ + "[" + h + "];"), this._emitLine('frame.set("' + a.name.value + '", ' + K + ");"), this._emitLoopBindings(a, _, h, p), this._withScopedSyntax(function() {
                  v.compile(a.body, f);
                }), this._emitLine("}");
              }
              this._emitLine("}"), a.else_ && (this._emitLine("if (!" + p + ") {"), this.compile(a.else_, f), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, g._compileAsyncLoop = function(a, f, v) {
              var h = this, p = this._tmpid(), _ = this._tmpid(), w = this._tmpid(), A = v ? "asyncAll" : "asyncEach";
              if (f = f.push(), this._emitLine("frame = frame.push();"), this._emit("var " + w + " = runtime.fromIterator("), this._compileExpression(a.arr, f), this._emitLine(");"), a.name instanceof y.Array) {
                var P = a.name.children.length;
                this._emit("runtime." + A + "(" + w + ", " + P + ", function("), a.name.children.forEach(function(K) {
                  h._emit(K.value + ",");
                }), this._emit(p + "," + _ + ",next) {"), a.name.children.forEach(function(K) {
                  var x = K.value;
                  f.set(x, x), h._emitLine('frame.set("' + x + '", ' + x + ");");
                });
              } else {
                var R = a.name.value;
                this._emitLine("runtime." + A + "(" + w + ", 1, function(" + R + ", " + p + ", " + _ + ",next) {"), this._emitLine('frame.set("' + R + '", ' + R + ");"), f.set(R, R);
              }
              this._emitLoopBindings(a, w, p, _), this._withScopedSyntax(function() {
                var K;
                v && (K = h._pushBuffer()), h.compile(a.body, f), h._emitLine("next(" + p + (K ? "," + K : "") + ");"), v && h._popBuffer();
              });
              var F = this._tmpid();
              this._emitLine("}, " + this._makeCallback(F)), this._addScopeLevel(), v && this._emitLine(this.buffer + " += " + F + ";"), a.else_ && (this._emitLine("if (!" + w + ".length) {"), this.compile(a.else_, f), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, g.compileAsyncEach = function(a, f) {
              this._compileAsyncLoop(a, f);
            }, g.compileAsyncAll = function(a, f) {
              this._compileAsyncLoop(a, f, !0);
            }, g._compileMacro = function(a, f) {
              var v = this, h = [], p = null, _ = "macro_" + this._tmpid(), w = f !== void 0;
              a.args.children.forEach(function(x, E) {
                E === a.args.children.length - 1 && x instanceof y.Dict ? p = x : (v.assertType(x, y.Symbol), h.push(x));
              });
              var A = [].concat(h.map(function(x) {
                return "l_" + x.value;
              }), ["kwargs"]), P = h.map(function(x) {
                return '"' + x.value + '"';
              }), R = (p && p.children || []).map(function(x) {
                return '"' + x.key.value + '"';
              }), F;
              w ? F = f.push(!0) : F = new N(), this._emitLines("var " + _ + " = runtime.makeMacro(", "[" + P.join(", ") + "], ", "[" + R.join(", ") + "], ", "function (" + A.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (w ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'), h.forEach(function(x) {
                v._emitLine('frame.set("' + x.value + '", l_' + x.value + ");"), F.set(x.value, "l_" + x.value);
              }), p && p.children.forEach(function(x) {
                var E = x.key.value;
                v._emit('frame.set("' + E + '", '), v._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + E + '")'), v._emit(' ? kwargs["' + E + '"] : '), v._compileExpression(x.value, F), v._emit(");");
              });
              var K = this._pushBuffer();
              return this._withScopedSyntax(function() {
                v.compile(a.body, F);
              }), this._emitLine("frame = " + (w ? "frame.pop();" : "callerFrame;")), this._emitLine("return new runtime.SafeString(" + K + ");"), this._emitLine("});"), this._popBuffer(), _;
            }, g.compileMacro = function(a, f) {
              var v = this._compileMacro(a), h = a.name.value;
              f.set(h, v), f.parent ? this._emitLine('frame.set("' + h + '", ' + v + ");") : (a.name.value.charAt(0) !== "_" && this._emitLine('context.addExport("' + h + '");'), this._emitLine('context.setVariable("' + h + '", ' + v + ");"));
            }, g.compileCaller = function(a, f) {
              this._emit("(function (){");
              var v = this._compileMacro(a, f);
              this._emit("return " + v + ";})()");
            }, g._compileGetTemplate = function(a, f, v, h) {
              var p = this._tmpid(), _ = this._templateName(), w = this._makeCallback(p), A = v ? "true" : "false", P = h ? "true" : "false";
              return this._emit("env.getTemplate("), this._compileExpression(a.template, f), this._emitLine(", " + A + ", " + _ + ", " + P + ", " + w), p;
            }, g.compileImport = function(a, f) {
              var v = a.target.value, h = this._compileGetTemplate(a, f, !1, !1);
              this._addScopeLevel(), this._emitLine(h + ".getExported(" + (a.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(h)), this._addScopeLevel(), f.set(v, h), f.parent ? this._emitLine('frame.set("' + v + '", ' + h + ");") : this._emitLine('context.setVariable("' + v + '", ' + h + ");");
            }, g.compileFromImport = function(a, f) {
              var v = this, h = this._compileGetTemplate(a, f, !1, !1);
              this._addScopeLevel(), this._emitLine(h + ".getExported(" + (a.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(h)), this._addScopeLevel(), a.names.children.forEach(function(p) {
                var _, w, A = v._tmpid();
                p instanceof y.Pair ? (_ = p.key.value, w = p.value.value) : (_ = p.value, w = _), v._emitLine("if(Object.prototype.hasOwnProperty.call(" + h + ', "' + _ + '")) {'), v._emitLine("var " + A + " = " + h + "." + _ + ";"), v._emitLine("} else {"), v._emitLine(`cb(new Error("cannot import '` + _ + `'")); return;`), v._emitLine("}"), f.set(w, A), f.parent ? v._emitLine('frame.set("' + w + '", ' + A + ");") : v._emitLine('context.setVariable("' + w + '", ' + A + ");");
              });
            }, g.compileBlock = function(a) {
              var f = this._tmpid();
              this.inBlock || this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '), this._emit('context.getBlock("' + a.name.value + '")'), this.inBlock || this._emit(")"), this._emitLine("(env, context, frame, runtime, " + this._makeCallback(f)), this._emitLine(this.buffer + " += " + f + ";"), this._addScopeLevel();
            }, g.compileSuper = function(a, f) {
              var v = a.blockName.value, h = a.symbol.value, p = this._makeCallback(h);
              this._emitLine('context.getSuper(env, "' + v + '", b_' + v + ", frame, runtime, " + p), this._emitLine(h + " = runtime.markSafe(" + h + ");"), this._addScopeLevel(), f.set(h, h);
            }, g.compileExtends = function(a, f) {
              var v = this._tmpid(), h = this._compileGetTemplate(a, f, !0, !1);
              this._emitLine("parentTemplate = " + h), this._emitLine("for(var " + v + " in parentTemplate.blocks) {"), this._emitLine("context.addBlock(" + v + ", parentTemplate.blocks[" + v + "]);"), this._emitLine("}"), this._addScopeLevel();
            }, g.compileInclude = function(a, f) {
              this._emitLine("var tasks = [];"), this._emitLine("tasks.push("), this._emitLine("function(callback) {");
              var v = this._compileGetTemplate(a, f, !1, a.ignoreMissing);
              this._emitLine("callback(null," + v + ");});"), this._emitLine("});");
              var h = this._tmpid();
              this._emitLine("tasks.push("), this._emitLine("function(template, callback){"), this._emitLine("template.render(context.getVariables(), frame, " + this._makeCallback(h)), this._emitLine("callback(null," + h + ");});"), this._emitLine("});"), this._emitLine("tasks.push("), this._emitLine("function(result, callback){"), this._emitLine(this.buffer + " += result;"), this._emitLine("callback(null);"), this._emitLine("});"), this._emitLine("env.waterfall(tasks, function(){"), this._addScopeLevel();
            }, g.compileTemplateData = function(a, f) {
              this.compileLiteral(a, f);
            }, g.compileCapture = function(a, f) {
              var v = this, h = this.buffer;
              this.buffer = "output", this._emitLine("(function() {"), this._emitLine('var output = "";'), this._withScopedSyntax(function() {
                v.compile(a.body, f);
              }), this._emitLine("return output;"), this._emitLine("})()"), this.buffer = h;
            }, g.compileOutput = function(a, f) {
              var v = this, h = a.children;
              h.forEach(function(p) {
                p instanceof y.TemplateData ? p.value && (v._emit(v.buffer + " += "), v.compileLiteral(p, f), v._emitLine(";")) : (v._emit(v.buffer + " += runtime.suppressValue("), v.throwOnUndefined && v._emit("runtime.ensureDefined("), v.compile(p, f), v.throwOnUndefined && v._emit("," + a.lineno + "," + a.colno + ")"), v._emit(`, env.opts.autoescape);
`));
              });
            }, g.compileRoot = function(a, f) {
              var v = this;
              f && this.fail("compileRoot: root node can't have frame"), f = new N(), this._emitFuncBegin(a, "root"), this._emitLine("var parentTemplate = null;"), this._compileChildren(a, f), this._emitLine("if(parentTemplate) {"), this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"), this._emitLine("} else {"), this._emitLine("cb(null, " + this.buffer + ");"), this._emitLine("}"), this._emitFuncEnd(!0), this.inBlock = !0;
              var h = [], p = a.findAll(y.Block);
              p.forEach(function(_, w) {
                var A = _.name.value;
                if (h.indexOf(A) !== -1)
                  throw new Error('Block "' + A + '" defined more than once.');
                h.push(A), v._emitFuncBegin(_, "b_" + A);
                var P = new N();
                v._emitLine("var frame = frame.push(true);"), v.compile(_.body, P), v._emitFuncEnd();
              }), this._emitLine("return {"), p.forEach(function(_, w) {
                var A = "b_" + _.name.value;
                v._emitLine(A + ": " + A + ",");
              }), this._emitLine(`root: root
};`);
            }, g.compile = function(a, f) {
              var v = this["compile" + a.typename];
              v ? v.call(this, a, f) : this.fail("compile: Cannot compile node: " + a.typename, a.lineno, a.colno);
            }, g.getCode = function() {
              return this.codebuf.join("");
            }, k;
          }(I);
          t.exports = {
            compile: function(k, g, b, a, f) {
              f === void 0 && (f = {});
              var v = new l(a, f.throwOnUndefined), h = (b || []).map(function(_) {
                return _.preprocess;
              }).filter(function(_) {
                return !!_;
              }), p = h.reduce(function(_, w) {
                return w(_);
              }, k);
              return v.compile(m.transform(d.parse(p, b, f), g, a)), v.getCode();
            },
            Compiler: l
          };
        },
        /* 6 */
        /***/
        function(t, n, o) {
          function i(O, C) {
            O.prototype = Object.create(C.prototype), O.prototype.constructor = O, u(O, C);
          }
          function u(O, C) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(N, T) {
              return N.__proto__ = T, N;
            }, u(O, C);
          }
          var d = o(4), m = o(1), y = m.EmitterObj;
          t.exports = /* @__PURE__ */ function(O) {
            i(C, O);
            function C() {
              return O.apply(this, arguments) || this;
            }
            var B = C.prototype;
            return B.resolve = function(T, I) {
              return d.resolve(d.dirname(T), I);
            }, B.isRelative = function(T) {
              return T.indexOf("./") === 0 || T.indexOf("../") === 0;
            }, C;
          }(y);
        },
        /* 7 */
        /***/
        function(t, n, o) {
          function i(P, R) {
            P.prototype = Object.create(R.prototype), P.prototype.constructor = P, u(P, R);
          }
          function u(P, R) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(K, x) {
              return K.__proto__ = x, K;
            }, u(P, R);
          }
          var d = o(12), m = o(15), y = o(0), O = o(5), C = o(18), B = o(10), N = B.FileSystemLoader, T = B.WebLoader, I = B.PrecompiledLoader, r = o(20), l = o(21), c = o(1), k = c.Obj, g = c.EmitterObj, b = o(2), a = b.handleError, f = b.Frame, v = o(22);
          function h(P, R, F) {
            d(function() {
              P(R, F);
            });
          }
          var p = {
            type: "code",
            obj: {
              root: function(R, F, K, x, E) {
                try {
                  E(null, "");
                } catch (S) {
                  E(a(S, null, null));
                }
              }
            }
          }, _ = /* @__PURE__ */ function(P) {
            i(R, P);
            function R() {
              return P.apply(this, arguments) || this;
            }
            var F = R.prototype;
            return F.init = function(x, E) {
              var S = this;
              E = this.opts = E || {}, this.opts.dev = !!E.dev, this.opts.autoescape = E.autoescape != null ? E.autoescape : !0, this.opts.throwOnUndefined = !!E.throwOnUndefined, this.opts.trimBlocks = !!E.trimBlocks, this.opts.lstripBlocks = !!E.lstripBlocks, this.loaders = [], x ? this.loaders = y.isArray(x) ? x : [x] : N ? this.loaders = [new N("views")] : T && (this.loaders = [new T("/views")]), typeof window < "u" && window.nunjucksPrecompiled && this.loaders.unshift(new I(window.nunjucksPrecompiled)), this._initLoaders(), this.globals = l(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], y._entries(C).forEach(function(j) {
                var D = j[0], $ = j[1];
                return S.addFilter(D, $);
              }), y._entries(r).forEach(function(j) {
                var D = j[0], $ = j[1];
                return S.addTest(D, $);
              });
            }, F._initLoaders = function() {
              var x = this;
              this.loaders.forEach(function(E) {
                E.cache = {}, typeof E.on == "function" && (E.on("update", function(S, j) {
                  E.cache[S] = null, x.emit("update", S, j, E);
                }), E.on("load", function(S, j) {
                  x.emit("load", S, j, E);
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
              E && (this.extensionsList = y.without(this.extensionsList, E), delete this.extensions[x]);
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
            }, F.addFilter = function(x, E, S) {
              var j = E;
              return S && this.asyncFilters.push(x), this.filters[x] = j, this;
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
            }, F.resolveTemplate = function(x, E, S) {
              var j = x.isRelative && E ? x.isRelative(S) : !1;
              return j && x.resolve ? x.resolve(E, S) : S;
            }, F.getTemplate = function(x, E, S, j, D) {
              var $ = this, ne = this, z = null;
              if (x && x.raw && (x = x.raw), y.isFunction(S) && (D = S, S = null, E = E || !1), y.isFunction(E) && (D = E, E = !1), x instanceof A)
                z = x;
              else {
                if (typeof x != "string")
                  throw new Error("template names must be a string: " + x);
                for (var ce = 0; ce < this.loaders.length; ce++) {
                  var pe = this.loaders[ce];
                  if (z = pe.cache[this.resolveTemplate(pe, S, x)], z)
                    break;
                }
              }
              if (z)
                if (E && z.compile(), D) {
                  D(null, z);
                  return;
                } else
                  return z;
              var X, Z = function(G, q) {
                if (!q && !G && !j && (G = new Error("template not found: " + x)), G)
                  if (D) {
                    D(G);
                    return;
                  } else
                    throw G;
                var se;
                q ? (se = new A(q.src, $, q.path, E), q.noCache || (q.loader.cache[x] = se)) : se = new A(p, $, "", E), D ? D(null, se) : X = se;
              };
              return y.asyncIter(this.loaders, function(Q, G, q, se) {
                function we(he, Oe) {
                  he ? se(he) : Oe ? (Oe.loader = Q, se(null, Oe)) : q();
                }
                x = ne.resolveTemplate(Q, S, x), Q.async ? Q.getSource(x, we) : we(null, Q.getSource(x));
              }, Z), X;
            }, F.express = function(x) {
              return v(this, x);
            }, F.render = function(x, E, S) {
              y.isFunction(E) && (S = E, E = null);
              var j = null;
              return this.getTemplate(x, function(D, $) {
                if (D && S)
                  h(S, D);
                else {
                  if (D)
                    throw D;
                  j = $.render(E, S);
                }
              }), j;
            }, F.renderString = function(x, E, S, j) {
              y.isFunction(S) && (j = S, S = {}), S = S || {};
              var D = new A(x, this, S.path);
              return D.render(E, j);
            }, F.waterfall = function(x, E, S) {
              return m(x, E, S);
            }, R;
          }(g), w = /* @__PURE__ */ function(P) {
            i(R, P);
            function R() {
              return P.apply(this, arguments) || this;
            }
            var F = R.prototype;
            return F.init = function(x, E, S) {
              var j = this;
              this.env = S || new _(), this.ctx = y.extend({}, x), this.blocks = {}, this.exported = [], y.keys(E).forEach(function(D) {
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
            }, F.getSuper = function(x, E, S, j, D, $) {
              var ne = y.indexOf(this.blocks[E] || [], S), z = this.blocks[E][ne + 1], ce = this;
              if (ne === -1 || !z)
                throw new Error('no super block available for "' + E + '"');
              z(x, ce, j, D, $);
            }, F.addExport = function(x) {
              this.exported.push(x);
            }, F.getExported = function() {
              var x = this, E = {};
              return this.exported.forEach(function(S) {
                E[S] = x.ctx[S];
              }), E;
            }, R;
          }(k), A = /* @__PURE__ */ function(P) {
            i(R, P);
            function R() {
              return P.apply(this, arguments) || this;
            }
            var F = R.prototype;
            return F.init = function(x, E, S, j) {
              if (this.env = E || new _(), y.isObject(x))
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
              else if (y.isString(x))
                this.tmplStr = x;
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
            }, F.render = function(x, E, S) {
              var j = this;
              typeof x == "function" ? (S = x, x = {}) : typeof E == "function" && (S = E, E = null);
              var D = !E;
              try {
                this.compile();
              } catch (X) {
                var $ = y._prettifyError(this.path, this.env.opts.dev, X);
                if (S)
                  return h(S, $);
                throw $;
              }
              var ne = new w(x || {}, this.blocks, this.env), z = E ? E.push(!0) : new f();
              z.topLevel = !0;
              var ce = null, pe = !1;
              return this.rootRenderFunc(this.env, ne, z, b, function(X, Z) {
                if (!(pe && S && typeof Z < "u"))
                  if (X && (X = y._prettifyError(j.path, j.env.opts.dev, X), pe = !0), S)
                    D ? h(S, X, Z) : S(X, Z);
                  else {
                    if (X)
                      throw X;
                    ce = Z;
                  }
              }), ce;
            }, F.getExported = function(x, E, S) {
              typeof x == "function" && (S = x, x = {}), typeof E == "function" && (S = E, E = null);
              try {
                this.compile();
              } catch ($) {
                if (S)
                  return S($);
                throw $;
              }
              var j = E ? E.push() : new f();
              j.topLevel = !0;
              var D = new w(x || {}, this.blocks, this.env);
              this.rootRenderFunc(this.env, D, j, b, function($) {
                $ ? S($, null) : S(null, D.getExported());
              });
            }, F.compile = function() {
              this.compiled || this._compile();
            }, F._compile = function() {
              var x;
              if (this.tmplProps)
                x = this.tmplProps;
              else {
                var E = O.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), S = new Function(E);
                x = S();
              }
              this.blocks = this._getBlocks(x), this.rootRenderFunc = x.root, this.compiled = !0;
            }, F._getBlocks = function(x) {
              var E = {};
              return y.keys(x).forEach(function(S) {
                S.slice(0, 2) === "b_" && (E[S.slice(2)] = x[S]);
              }), E;
            }, R;
          }(k);
          t.exports = {
            Environment: _,
            Template: A
          };
        },
        /* 8 */
        /***/
        function(t, n, o) {
          function i(B, N) {
            B.prototype = Object.create(N.prototype), B.prototype.constructor = B, u(B, N);
          }
          function u(B, N) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(I, r) {
              return I.__proto__ = r, I;
            }, u(B, N);
          }
          var d = o(9), m = o(3), y = o(1).Obj, O = o(0), C = /* @__PURE__ */ function(B) {
            i(N, B);
            function N() {
              return B.apply(this, arguments) || this;
            }
            var T = N.prototype;
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
            }, T.error = function(r, l, c) {
              if (l === void 0 || c === void 0) {
                var k = this.peekToken() || {};
                l = k.lineno, c = k.colno;
              }
              return l !== void 0 && (l += 1), c !== void 0 && (c += 1), new O.TemplateError(r, l, c);
            }, T.fail = function(r, l, c) {
              throw this.error(r, l, c);
            }, T.skip = function(r) {
              var l = this.nextToken();
              return !l || l.type !== r ? (this.pushToken(l), !1) : !0;
            }, T.expect = function(r) {
              var l = this.nextToken();
              return l.type !== r && this.fail("expected " + r + ", got " + l.type, l.lineno, l.colno), l;
            }, T.skipValue = function(r, l) {
              var c = this.nextToken();
              return !c || c.type !== r || c.value !== l ? (this.pushToken(c), !1) : !0;
            }, T.skipSymbol = function(r) {
              return this.skipValue(d.TOKEN_SYMBOL, r);
            }, T.advanceAfterBlockEnd = function(r) {
              var l;
              return r || (l = this.peekToken(), l || this.fail("unexpected end of file"), l.type !== d.TOKEN_SYMBOL && this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"), r = this.nextToken().value), l = this.nextToken(), l && l.type === d.TOKEN_BLOCK_END ? l.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0) : this.fail("expected block end in " + r + " statement"), l;
            }, T.advanceAfterVariableEnd = function() {
              var r = this.nextToken();
              r && r.type === d.TOKEN_VARIABLE_END ? this.dropLeadingWhitespace = r.value.charAt(r.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-" : (this.pushToken(r), this.fail("expected variable end"));
            }, T.parseFor = function() {
              var r = this.peekToken(), l, c;
              this.skipSymbol("for") ? (l = new m.For(r.lineno, r.colno), c = "endfor") : this.skipSymbol("asyncEach") ? (l = new m.AsyncEach(r.lineno, r.colno), c = "endeach") : this.skipSymbol("asyncAll") ? (l = new m.AsyncAll(r.lineno, r.colno), c = "endall") : this.fail("parseFor: expected for{Async}", r.lineno, r.colno), l.name = this.parsePrimary(), l.name instanceof m.Symbol || this.fail("parseFor: variable name expected for loop");
              var k = this.peekToken().type;
              if (k === d.TOKEN_COMMA) {
                var g = l.name;
                for (l.name = new m.Array(g.lineno, g.colno), l.name.addChild(g); this.skip(d.TOKEN_COMMA); ) {
                  var b = this.parsePrimary();
                  l.name.addChild(b);
                }
              }
              return this.skipSymbol("in") || this.fail('parseFor: expected "in" keyword for loop', r.lineno, r.colno), l.arr = this.parseExpression(), this.advanceAfterBlockEnd(r.value), l.body = this.parseUntilBlocks(c, "else"), this.skipSymbol("else") && (this.advanceAfterBlockEnd("else"), l.else_ = this.parseUntilBlocks(c)), this.advanceAfterBlockEnd(), l;
            }, T.parseMacro = function() {
              var r = this.peekToken();
              this.skipSymbol("macro") || this.fail("expected macro");
              var l = this.parsePrimary(!0), c = this.parseSignature(), k = new m.Macro(r.lineno, r.colno, l, c);
              return this.advanceAfterBlockEnd(r.value), k.body = this.parseUntilBlocks("endmacro"), this.advanceAfterBlockEnd(), k;
            }, T.parseCall = function() {
              var r = this.peekToken();
              this.skipSymbol("call") || this.fail("expected call");
              var l = this.parseSignature(!0) || new m.NodeList(), c = this.parsePrimary();
              this.advanceAfterBlockEnd(r.value);
              var k = this.parseUntilBlocks("endcall");
              this.advanceAfterBlockEnd();
              var g = new m.Symbol(r.lineno, r.colno, "caller"), b = new m.Caller(r.lineno, r.colno, g, l, k), a = c.args.children;
              a[a.length - 1] instanceof m.KeywordArgs || a.push(new m.KeywordArgs());
              var f = a[a.length - 1];
              return f.addChild(new m.Pair(r.lineno, r.colno, g, b)), new m.Output(r.lineno, r.colno, [c]);
            }, T.parseWithContext = function() {
              var r = this.peekToken(), l = null;
              return this.skipSymbol("with") ? l = !0 : this.skipSymbol("without") && (l = !1), l !== null && (this.skipSymbol("context") || this.fail("parseFrom: expected context after with/without", r.lineno, r.colno)), l;
            }, T.parseImport = function() {
              var r = this.peekToken();
              this.skipSymbol("import") || this.fail("parseImport: expected import", r.lineno, r.colno);
              var l = this.parseExpression();
              this.skipSymbol("as") || this.fail('parseImport: expected "as" keyword', r.lineno, r.colno);
              var c = this.parseExpression(), k = this.parseWithContext(), g = new m.Import(r.lineno, r.colno, l, c, k);
              return this.advanceAfterBlockEnd(r.value), g;
            }, T.parseFrom = function() {
              var r = this.peekToken();
              this.skipSymbol("from") || this.fail("parseFrom: expected from");
              var l = this.parseExpression();
              this.skipSymbol("import") || this.fail("parseFrom: expected import", r.lineno, r.colno);
              for (var c = new m.NodeList(), k; ; ) {
                var g = this.peekToken();
                if (g.type === d.TOKEN_BLOCK_END) {
                  c.children.length || this.fail("parseFrom: Expected at least one import name", r.lineno, r.colno), g.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0), this.nextToken();
                  break;
                }
                c.children.length > 0 && !this.skip(d.TOKEN_COMMA) && this.fail("parseFrom: expected comma", r.lineno, r.colno);
                var b = this.parsePrimary();
                if (b.value.charAt(0) === "_" && this.fail("parseFrom: names starting with an underscore cannot be imported", b.lineno, b.colno), this.skipSymbol("as")) {
                  var a = this.parsePrimary();
                  c.addChild(new m.Pair(b.lineno, b.colno, b, a));
                } else
                  c.addChild(b);
                k = this.parseWithContext();
              }
              return new m.FromImport(r.lineno, r.colno, l, c, k);
            }, T.parseBlock = function() {
              var r = this.peekToken();
              this.skipSymbol("block") || this.fail("parseBlock: expected block", r.lineno, r.colno);
              var l = new m.Block(r.lineno, r.colno);
              l.name = this.parsePrimary(), l.name instanceof m.Symbol || this.fail("parseBlock: variable name expected", r.lineno, r.colno), this.advanceAfterBlockEnd(r.value), l.body = this.parseUntilBlocks("endblock"), this.skipSymbol("endblock"), this.skipSymbol(l.name.value);
              var c = this.peekToken();
              return c || this.fail("parseBlock: expected endblock, got end of file"), this.advanceAfterBlockEnd(c.value), l;
            }, T.parseExtends = function() {
              var r = "extends", l = this.peekToken();
              this.skipSymbol(r) || this.fail("parseTemplateRef: expected " + r);
              var c = new m.Extends(l.lineno, l.colno);
              return c.template = this.parseExpression(), this.advanceAfterBlockEnd(l.value), c;
            }, T.parseInclude = function() {
              var r = "include", l = this.peekToken();
              this.skipSymbol(r) || this.fail("parseInclude: expected " + r);
              var c = new m.Include(l.lineno, l.colno);
              return c.template = this.parseExpression(), this.skipSymbol("ignore") && this.skipSymbol("missing") && (c.ignoreMissing = !0), this.advanceAfterBlockEnd(l.value), c;
            }, T.parseIf = function() {
              var r = this.peekToken(), l;
              this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif") ? l = new m.If(r.lineno, r.colno) : this.skipSymbol("ifAsync") ? l = new m.IfAsync(r.lineno, r.colno) : this.fail("parseIf: expected if, elif, or elseif", r.lineno, r.colno), l.cond = this.parseExpression(), this.advanceAfterBlockEnd(r.value), l.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
              var c = this.peekToken();
              switch (c && c.value) {
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
              for (var l = new m.Set(r.lineno, r.colno, []), c; (c = this.parsePrimary()) && (l.targets.push(c), !!this.skip(d.TOKEN_COMMA)); )
                ;
              return this.skipValue(d.TOKEN_OPERATOR, "=") ? (l.value = this.parseExpression(), this.advanceAfterBlockEnd(r.value)) : this.skip(d.TOKEN_BLOCK_END) ? (l.body = new m.Capture(r.lineno, r.colno, this.parseUntilBlocks("endset")), l.value = null, this.advanceAfterBlockEnd()) : this.fail("parseSet: expected = or block end in set tag", r.lineno, r.colno), l;
            }, T.parseSwitch = function() {
              var r = "switch", l = "endswitch", c = "case", k = "default", g = this.peekToken();
              !this.skipSymbol(r) && !this.skipSymbol(c) && !this.skipSymbol(k) && this.fail('parseSwitch: expected "switch," "case" or "default"', g.lineno, g.colno);
              var b = this.parseExpression();
              this.advanceAfterBlockEnd(r), this.parseUntilBlocks(c, k, l);
              var a = this.peekToken(), f = [], v;
              do {
                this.skipSymbol(c);
                var h = this.parseExpression();
                this.advanceAfterBlockEnd(r);
                var p = this.parseUntilBlocks(c, k, l);
                f.push(new m.Case(a.line, a.col, h, p)), a = this.peekToken();
              } while (a && a.value === c);
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
              return new m.Switch(g.lineno, g.colno, b, f, v);
            }, T.parseStatement = function() {
              var r = this.peekToken(), l;
              if (r.type !== d.TOKEN_SYMBOL && this.fail("tag name expected", r.lineno, r.colno), this.breakOnBlocks && O.indexOf(this.breakOnBlocks, r.value) !== -1)
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
                    for (var c = 0; c < this.extensions.length; c++) {
                      var k = this.extensions[c];
                      if (O.indexOf(k.tags || [], r.value) !== -1)
                        return k.parse(this, m, d);
                    }
                  this.fail("unknown block tag: " + r.value, r.lineno, r.colno);
              }
              return l;
            }, T.parseRaw = function(r) {
              r = r || "raw";
              for (var l = "end" + r, c = new RegExp("([\\s\\S]*?){%\\s*(" + r + "|" + l + ")\\s*(?=%})%}"), k = 1, g = "", b = null, a = this.advanceAfterBlockEnd(); (b = this.tokens._extractRegex(c)) && k > 0; ) {
                var f = b[0], v = b[1], h = b[2];
                h === r ? k += 1 : h === l && (k -= 1), k === 0 ? (g += v, this.tokens.backN(f.length - v.length)) : g += f;
              }
              return new m.Output(a.lineno, a.colno, [new m.TemplateData(a.lineno, a.colno, g)]);
            }, T.parsePostfix = function(r) {
              for (var l, c = this.peekToken(); c; ) {
                if (c.type === d.TOKEN_LEFT_PAREN)
                  r = new m.FunCall(c.lineno, c.colno, r, this.parseSignature());
                else if (c.type === d.TOKEN_LEFT_BRACKET)
                  l = this.parseAggregate(), l.children.length > 1 && this.fail("invalid index"), r = new m.LookupVal(c.lineno, c.colno, r, l.children[0]);
                else if (c.type === d.TOKEN_OPERATOR && c.value === ".") {
                  this.nextToken();
                  var k = this.nextToken();
                  k.type !== d.TOKEN_SYMBOL && this.fail("expected name as lookup value, got " + k.value, k.lineno, k.colno), l = new m.Literal(k.lineno, k.colno, k.value), r = new m.LookupVal(c.lineno, c.colno, r, l);
                } else
                  break;
                c = this.peekToken();
              }
              return r;
            }, T.parseExpression = function() {
              var r = this.parseInlineIf();
              return r;
            }, T.parseInlineIf = function() {
              var r = this.parseOr();
              if (this.skipSymbol("if")) {
                var l = this.parseOr(), c = r;
                r = new m.InlineIf(r.lineno, r.colno), r.body = c, r.cond = l, this.skipSymbol("else") ? r.else_ = this.parseOr() : r.else_ = null;
              }
              return r;
            }, T.parseOr = function() {
              for (var r = this.parseAnd(); this.skipSymbol("or"); ) {
                var l = this.parseAnd();
                r = new m.Or(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseAnd = function() {
              for (var r = this.parseNot(); this.skipSymbol("and"); ) {
                var l = this.parseNot();
                r = new m.And(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseNot = function() {
              var r = this.peekToken();
              return this.skipSymbol("not") ? new m.Not(r.lineno, r.colno, this.parseNot()) : this.parseIn();
            }, T.parseIn = function() {
              for (var r = this.parseIs(); ; ) {
                var l = this.nextToken();
                if (!l)
                  break;
                var c = l.type === d.TOKEN_SYMBOL && l.value === "not";
                if (c || this.pushToken(l), this.skipSymbol("in")) {
                  var k = this.parseIs();
                  r = new m.In(r.lineno, r.colno, r, k), c && (r = new m.Not(r.lineno, r.colno, r));
                } else {
                  c && this.pushToken(l);
                  break;
                }
              }
              return r;
            }, T.parseIs = function() {
              var r = this.parseCompare();
              if (this.skipSymbol("is")) {
                var l = this.skipSymbol("not"), c = this.parseCompare();
                r = new m.Is(r.lineno, r.colno, r, c), l && (r = new m.Not(r.lineno, r.colno, r));
              }
              return r;
            }, T.parseCompare = function() {
              for (var r = ["==", "===", "!=", "!==", "<", ">", "<=", ">="], l = this.parseConcat(), c = []; ; ) {
                var k = this.nextToken();
                if (k)
                  if (r.indexOf(k.value) !== -1)
                    c.push(new m.CompareOperand(k.lineno, k.colno, this.parseConcat(), k.value));
                  else {
                    this.pushToken(k);
                    break;
                  }
                else
                  break;
              }
              return c.length ? new m.Compare(c[0].lineno, c[0].colno, l, c) : l;
            }, T.parseConcat = function() {
              for (var r = this.parseAdd(); this.skipValue(d.TOKEN_TILDE, "~"); ) {
                var l = this.parseAdd();
                r = new m.Concat(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseAdd = function() {
              for (var r = this.parseSub(); this.skipValue(d.TOKEN_OPERATOR, "+"); ) {
                var l = this.parseSub();
                r = new m.Add(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseSub = function() {
              for (var r = this.parseMul(); this.skipValue(d.TOKEN_OPERATOR, "-"); ) {
                var l = this.parseMul();
                r = new m.Sub(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseMul = function() {
              for (var r = this.parseDiv(); this.skipValue(d.TOKEN_OPERATOR, "*"); ) {
                var l = this.parseDiv();
                r = new m.Mul(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseDiv = function() {
              for (var r = this.parseFloorDiv(); this.skipValue(d.TOKEN_OPERATOR, "/"); ) {
                var l = this.parseFloorDiv();
                r = new m.Div(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseFloorDiv = function() {
              for (var r = this.parseMod(); this.skipValue(d.TOKEN_OPERATOR, "//"); ) {
                var l = this.parseMod();
                r = new m.FloorDiv(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseMod = function() {
              for (var r = this.parsePow(); this.skipValue(d.TOKEN_OPERATOR, "%"); ) {
                var l = this.parsePow();
                r = new m.Mod(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parsePow = function() {
              for (var r = this.parseUnary(); this.skipValue(d.TOKEN_OPERATOR, "**"); ) {
                var l = this.parseUnary();
                r = new m.Pow(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseUnary = function(r) {
              var l = this.peekToken(), c;
              return this.skipValue(d.TOKEN_OPERATOR, "-") ? c = new m.Neg(l.lineno, l.colno, this.parseUnary(!0)) : this.skipValue(d.TOKEN_OPERATOR, "+") ? c = new m.Pos(l.lineno, l.colno, this.parseUnary(!0)) : c = this.parsePrimary(), r || (c = this.parseFilter(c)), c;
            }, T.parsePrimary = function(r) {
              var l = this.nextToken(), c, k = null;
              if (l ? l.type === d.TOKEN_STRING ? c = l.value : l.type === d.TOKEN_INT ? c = parseInt(l.value, 10) : l.type === d.TOKEN_FLOAT ? c = parseFloat(l.value) : l.type === d.TOKEN_BOOLEAN ? l.value === "true" ? c = !0 : l.value === "false" ? c = !1 : this.fail("invalid boolean: " + l.value, l.lineno, l.colno) : l.type === d.TOKEN_NONE ? c = null : l.type === d.TOKEN_REGEX && (c = new RegExp(l.value.body, l.value.flags)) : this.fail("expected expression, got end of file"), c !== void 0 ? k = new m.Literal(l.lineno, l.colno, c) : l.type === d.TOKEN_SYMBOL ? k = new m.Symbol(l.lineno, l.colno, l.value) : (this.pushToken(l), k = this.parseAggregate()), r || (k = this.parsePostfix(k)), k)
                return k;
              throw this.error("unexpected token: " + l.value, l.lineno, l.colno);
            }, T.parseFilterName = function() {
              for (var r = this.expect(d.TOKEN_SYMBOL), l = r.value; this.skipValue(d.TOKEN_OPERATOR, "."); )
                l += "." + this.expect(d.TOKEN_SYMBOL).value;
              return new m.Symbol(r.lineno, r.colno, l);
            }, T.parseFilterArgs = function(r) {
              if (this.peekToken().type === d.TOKEN_LEFT_PAREN) {
                var l = this.parsePostfix(r);
                return l.args.children;
              }
              return [];
            }, T.parseFilter = function(r) {
              for (; this.skip(d.TOKEN_PIPE); ) {
                var l = this.parseFilterName();
                r = new m.Filter(l.lineno, l.colno, l, new m.NodeList(l.lineno, l.colno, [r].concat(this.parseFilterArgs(r))));
              }
              return r;
            }, T.parseFilterStatement = function() {
              var r = this.peekToken();
              this.skipSymbol("filter") || this.fail("parseFilterStatement: expected filter");
              var l = this.parseFilterName(), c = this.parseFilterArgs(l);
              this.advanceAfterBlockEnd(r.value);
              var k = new m.Capture(l.lineno, l.colno, this.parseUntilBlocks("endfilter"));
              this.advanceAfterBlockEnd();
              var g = new m.Filter(l.lineno, l.colno, l, new m.NodeList(l.lineno, l.colno, [k].concat(c)));
              return new m.Output(l.lineno, l.colno, [g]);
            }, T.parseAggregate = function() {
              var r = this.nextToken(), l;
              switch (r.type) {
                case d.TOKEN_LEFT_PAREN:
                  l = new m.Group(r.lineno, r.colno);
                  break;
                case d.TOKEN_LEFT_BRACKET:
                  l = new m.Array(r.lineno, r.colno);
                  break;
                case d.TOKEN_LEFT_CURLY:
                  l = new m.Dict(r.lineno, r.colno);
                  break;
                default:
                  return null;
              }
              for (; ; ) {
                var c = this.peekToken().type;
                if (c === d.TOKEN_RIGHT_PAREN || c === d.TOKEN_RIGHT_BRACKET || c === d.TOKEN_RIGHT_CURLY) {
                  this.nextToken();
                  break;
                }
                if (l.children.length > 0 && (this.skip(d.TOKEN_COMMA) || this.fail("parseAggregate: expected comma after expression", r.lineno, r.colno)), l instanceof m.Dict) {
                  var k = this.parsePrimary();
                  this.skip(d.TOKEN_COLON) || this.fail("parseAggregate: expected colon after dict key", r.lineno, r.colno);
                  var g = this.parseExpression();
                  l.addChild(new m.Pair(k.lineno, k.colno, k, g));
                } else {
                  var b = this.parseExpression();
                  l.addChild(b);
                }
              }
              return l;
            }, T.parseSignature = function(r, l) {
              var c = this.peekToken();
              if (!l && c.type !== d.TOKEN_LEFT_PAREN) {
                if (r)
                  return null;
                this.fail("expected arguments", c.lineno, c.colno);
              }
              c.type === d.TOKEN_LEFT_PAREN && (c = this.nextToken());
              for (var k = new m.NodeList(c.lineno, c.colno), g = new m.KeywordArgs(c.lineno, c.colno), b = !1; ; ) {
                if (c = this.peekToken(), !l && c.type === d.TOKEN_RIGHT_PAREN) {
                  this.nextToken();
                  break;
                } else if (l && c.type === d.TOKEN_BLOCK_END)
                  break;
                if (b && !this.skip(d.TOKEN_COMMA))
                  this.fail("parseSignature: expected comma after expression", c.lineno, c.colno);
                else {
                  var a = this.parseExpression();
                  this.skipValue(d.TOKEN_OPERATOR, "=") ? g.addChild(new m.Pair(a.lineno, a.colno, a, this.parseExpression())) : k.addChild(a);
                }
                b = !0;
              }
              return g.children.length && k.addChild(g), k;
            }, T.parseUntilBlocks = function() {
              for (var r = this.breakOnBlocks, l = arguments.length, c = new Array(l), k = 0; k < l; k++)
                c[k] = arguments[k];
              this.breakOnBlocks = c;
              var g = this.parse();
              return this.breakOnBlocks = r, g;
            }, T.parseNodes = function() {
              for (var r, l = []; r = this.nextToken(); )
                if (r.type === d.TOKEN_DATA) {
                  var c = r.value, k = this.peekToken(), g = k && k.value;
                  this.dropLeadingWhitespace && (c = c.replace(/^\s*/, ""), this.dropLeadingWhitespace = !1), k && (k.type === d.TOKEN_BLOCK_START && g.charAt(g.length - 1) === "-" || k.type === d.TOKEN_VARIABLE_START && g.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || k.type === d.TOKEN_COMMENT && g.charAt(this.tokens.tags.COMMENT_START.length) === "-") && (c = c.replace(/\s*$/, "")), l.push(new m.Output(r.lineno, r.colno, [new m.TemplateData(r.lineno, r.colno, c)]));
                } else if (r.type === d.TOKEN_BLOCK_START) {
                  this.dropLeadingWhitespace = !1;
                  var b = this.parseStatement();
                  if (!b)
                    break;
                  l.push(b);
                } else if (r.type === d.TOKEN_VARIABLE_START) {
                  var a = this.parseExpression();
                  this.dropLeadingWhitespace = !1, this.advanceAfterVariableEnd(), l.push(new m.Output(r.lineno, r.colno, [a]));
                } else
                  r.type === d.TOKEN_COMMENT ? this.dropLeadingWhitespace = r.value.charAt(r.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-" : this.fail("Unexpected token at top-level: " + r.type, r.lineno, r.colno);
              return l;
            }, T.parse = function() {
              return new m.NodeList(0, 0, this.parseNodes());
            }, T.parseAsRoot = function() {
              return new m.Root(0, 0, this.parseNodes());
            }, N;
          }(y);
          t.exports = {
            parse: function(N, T, I) {
              var r = new C(d.lex(N, I));
              return T !== void 0 && (r.extensions = T), r.parseAsRoot();
            },
            Parser: C
          };
        },
        /* 9 */
        /***/
        function(t, n, o) {
          var i = o(0), u = ` 
	\r `, d = "()[]{}%*-+~/#,:|.<>=!", m = "0123456789", y = "{%", O = "%}", C = "{{", B = "}}", N = "{#", T = "#}", I = "string", r = "whitespace", l = "data", c = "block-start", k = "block-end", g = "variable-start", b = "variable-end", a = "comment", f = "left-paren", v = "right-paren", h = "left-bracket", p = "right-bracket", _ = "left-curly", w = "right-curly", A = "operator", P = "comma", R = "colon", F = "tilde", K = "pipe", x = "int", E = "float", S = "boolean", j = "none", D = "symbol", $ = "special", ne = "regex";
          function z(pe, X, Z, Q) {
            return {
              type: pe,
              value: X,
              lineno: Z,
              colno: Q
            };
          }
          var ce = /* @__PURE__ */ function() {
            function pe(Z, Q) {
              this.str = Z, this.index = 0, this.len = Z.length, this.lineno = 0, this.colno = 0, this.in_code = !1, Q = Q || {};
              var G = Q.tags || {};
              this.tags = {
                BLOCK_START: G.blockStart || y,
                BLOCK_END: G.blockEnd || O,
                VARIABLE_START: G.variableStart || C,
                VARIABLE_END: G.variableEnd || B,
                COMMENT_START: G.commentStart || N,
                COMMENT_END: G.commentEnd || T
              }, this.trimBlocks = !!Q.trimBlocks, this.lstripBlocks = !!Q.lstripBlocks;
            }
            var X = pe.prototype;
            return X.nextToken = function() {
              var Q = this.lineno, G = this.colno, q;
              if (this.in_code) {
                var se = this.current();
                if (this.isFinished())
                  return null;
                if (se === '"' || se === "'")
                  return z(I, this._parseString(se), Q, G);
                if (q = this._extract(u))
                  return z(r, q, Q, G);
                if ((q = this._extractString(this.tags.BLOCK_END)) || (q = this._extractString("-" + this.tags.BLOCK_END)))
                  return this.in_code = !1, this.trimBlocks && (se = this.current(), se === `
` ? this.forward() : se === "\r" && (this.forward(), se = this.current(), se === `
` ? this.forward() : this.back())), z(k, q, Q, G);
                if ((q = this._extractString(this.tags.VARIABLE_END)) || (q = this._extractString("-" + this.tags.VARIABLE_END)))
                  return this.in_code = !1, z(b, q, Q, G);
                if (se === "r" && this.str.charAt(this.index + 1) === "/") {
                  this.forwardN(2);
                  for (var we = ""; !this.isFinished(); )
                    if (this.current() === "/" && this.previous() !== "\\") {
                      this.forward();
                      break;
                    } else
                      we += this.current(), this.forward();
                  for (var he = ["g", "i", "m", "y"], Oe = ""; !this.isFinished(); ) {
                    var L = he.indexOf(this.current()) !== -1;
                    if (L)
                      Oe += this.current(), this.forward();
                    else
                      break;
                  }
                  return z(ne, {
                    body: we,
                    flags: Oe
                  }, Q, G);
                } else if (d.indexOf(se) !== -1) {
                  this.forward();
                  var M = ["==", "===", "!=", "!==", "<=", ">=", "//", "**"], V = se + this.current(), U;
                  switch (i.indexOf(M, V) !== -1 && (this.forward(), se = V, i.indexOf(M, V + this.current()) !== -1 && (se = V + this.current(), this.forward())), se) {
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
                      U = _;
                      break;
                    case "}":
                      U = w;
                      break;
                    case ",":
                      U = P;
                      break;
                    case ":":
                      U = R;
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
                  return z(U, se, Q, G);
                } else if (q = this._extractUntil(u + d), q.match(/^[-+]?[0-9]+$/))
                  if (this.current() === ".") {
                    this.forward();
                    var Y = this._extract(m);
                    return z(E, q + "." + Y, Q, G);
                  } else
                    return z(x, q, Q, G);
                else {
                  if (q.match(/^(true|false)$/))
                    return z(S, q, Q, G);
                  if (q === "none")
                    return z(j, q, Q, G);
                  if (q === "null")
                    return z(j, q, Q, G);
                  if (q)
                    return z(D, q, Q, G);
                  throw new Error("Unexpected value while parsing: " + q);
                }
              } else {
                var J = this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);
                if (this.isFinished())
                  return null;
                if ((q = this._extractString(this.tags.BLOCK_START + "-")) || (q = this._extractString(this.tags.BLOCK_START)))
                  return this.in_code = !0, z(c, q, Q, G);
                if ((q = this._extractString(this.tags.VARIABLE_START + "-")) || (q = this._extractString(this.tags.VARIABLE_START)))
                  return this.in_code = !0, z(g, q, Q, G);
                q = "";
                var ae, ee = !1;
                for (this._matches(this.tags.COMMENT_START) && (ee = !0, q = this._extractString(this.tags.COMMENT_START)); (ae = this._extractUntil(J)) !== null; )
                  if (q += ae, (this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !ee) {
                    if (this.lstripBlocks && this._matches(this.tags.BLOCK_START) && this.colno > 0 && this.colno <= q.length) {
                      var le = q.slice(-this.colno);
                      if (/^\s+$/.test(le) && (q = q.slice(0, -this.colno), !q.length))
                        return this.nextToken();
                    }
                    break;
                  } else if (this._matches(this.tags.COMMENT_END)) {
                    if (!ee)
                      throw new Error("unexpected end of comment");
                    q += this._extractString(this.tags.COMMENT_END);
                    break;
                  } else
                    q += this.current(), this.forward();
                if (ae === null && ee)
                  throw new Error("expected end of comment, got end of file");
                return z(ee ? a : l, q, Q, G);
              }
            }, X._parseString = function(Q) {
              this.forward();
              for (var G = ""; !this.isFinished() && this.current() !== Q; ) {
                var q = this.current();
                if (q === "\\") {
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
                  G += q, this.forward();
              }
              return this.forward(), G;
            }, X._matches = function(Q) {
              if (this.index + Q.length > this.len)
                return null;
              var G = this.str.slice(this.index, this.index + Q.length);
              return G === Q;
            }, X._extractString = function(Q) {
              return this._matches(Q) ? (this.forwardN(Q.length), Q) : null;
            }, X._extractUntil = function(Q) {
              return this._extractMatching(!0, Q || "");
            }, X._extract = function(Q) {
              return this._extractMatching(!1, Q);
            }, X._extractMatching = function(Q, G) {
              if (this.isFinished())
                return null;
              var q = G.indexOf(this.current());
              if (Q && q === -1 || !Q && q !== -1) {
                var se = this.current();
                this.forward();
                for (var we = G.indexOf(this.current()); (Q && we === -1 || !Q && we !== -1) && !this.isFinished(); )
                  se += this.current(), this.forward(), we = G.indexOf(this.current());
                return se;
              }
              return "";
            }, X._extractRegex = function(Q) {
              var G = this.currentStr().match(Q);
              return G ? (this.forwardN(G[0].length), G) : null;
            }, X.isFinished = function() {
              return this.index >= this.len;
            }, X.forwardN = function(Q) {
              for (var G = 0; G < Q; G++)
                this.forward();
            }, X.forward = function() {
              this.index++, this.previous() === `
` ? (this.lineno++, this.colno = 0) : this.colno++;
            }, X.backN = function(Q) {
              for (var G = 0; G < Q; G++)
                this.back();
            }, X.back = function() {
              if (this.index--, this.current() === `
`) {
                this.lineno--;
                var Q = this.src.lastIndexOf(`
`, this.index - 1);
                Q === -1 ? this.colno = this.index : this.colno = this.index - Q;
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
            TOKEN_STRING: I,
            TOKEN_WHITESPACE: r,
            TOKEN_DATA: l,
            TOKEN_BLOCK_START: c,
            TOKEN_BLOCK_END: k,
            TOKEN_VARIABLE_START: g,
            TOKEN_VARIABLE_END: b,
            TOKEN_COMMENT: a,
            TOKEN_LEFT_PAREN: f,
            TOKEN_RIGHT_PAREN: v,
            TOKEN_LEFT_BRACKET: h,
            TOKEN_RIGHT_BRACKET: p,
            TOKEN_LEFT_CURLY: _,
            TOKEN_RIGHT_CURLY: w,
            TOKEN_OPERATOR: A,
            TOKEN_COMMA: P,
            TOKEN_COLON: R,
            TOKEN_TILDE: F,
            TOKEN_PIPE: K,
            TOKEN_INT: x,
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
        function(t, n, o) {
          function i(C, B) {
            C.prototype = Object.create(B.prototype), C.prototype.constructor = C, u(C, B);
          }
          function u(C, B) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(T, I) {
              return T.__proto__ = I, T;
            }, u(C, B);
          }
          var d = o(6), m = o(19), y = m.PrecompiledLoader, O = /* @__PURE__ */ function(C) {
            i(B, C);
            function B(T, I) {
              var r;
              return r = C.call(this) || this, r.baseURL = T || ".", I = I || {}, r.useCache = !!I.useCache, r.async = !!I.async, r;
            }
            var N = B.prototype;
            return N.resolve = function(I, r) {
              throw new Error("relative templates not support in the browser yet");
            }, N.getSource = function(I, r) {
              var l = this, c = this.useCache, k;
              return this.fetch(this.baseURL + "/" + I, function(g, b) {
                if (g)
                  if (r)
                    r(g.content);
                  else if (g.status === 404)
                    k = null;
                  else
                    throw g.content;
                else
                  k = {
                    src: b,
                    path: I,
                    noCache: !c
                  }, l.emit("load", I, k), r && r(null, k);
              }), k;
            }, N.fetch = function(I, r) {
              if (typeof window > "u")
                throw new Error("WebLoader can only by used in a browser");
              var l = new XMLHttpRequest(), c = !0;
              l.onreadystatechange = function() {
                l.readyState === 4 && c && (c = !1, l.status === 0 || l.status === 200 ? r(null, l.responseText) : r({
                  status: l.status,
                  content: l.responseText
                }));
              }, I += (I.indexOf("?") === -1 ? "?" : "&") + "s=" + new Date().getTime(), l.open("GET", I, this.async), l.send();
            }, B;
          }(d);
          t.exports = {
            WebLoader: O,
            PrecompiledLoader: y
          };
        },
        /* 11 */
        /***/
        function(t, n, o) {
          var i = o(0), u = o(7), d = u.Environment, m = u.Template, y = o(6), O = o(10), C = o(23), B = o(5), N = o(8), T = o(9), I = o(2), r = o(3), l = o(25), c;
          function k(g, b) {
            b = b || {}, i.isObject(g) && (b = g, g = null);
            var a;
            return O.FileSystemLoader ? a = new O.FileSystemLoader(g, {
              watch: b.watch,
              noCache: b.noCache
            }) : O.WebLoader && (a = new O.WebLoader(g, {
              useCache: b.web && b.web.useCache,
              async: b.web && b.web.async
            })), c = new d(a, b), b && b.express && c.express(b.express), c;
          }
          t.exports = {
            Environment: d,
            Template: m,
            Loader: y,
            FileSystemLoader: O.FileSystemLoader,
            NodeResolveLoader: O.NodeResolveLoader,
            PrecompiledLoader: O.PrecompiledLoader,
            WebLoader: O.WebLoader,
            compiler: B,
            parser: N,
            lexer: T,
            runtime: I,
            lib: i,
            nodes: r,
            installJinjaCompat: l,
            configure: k,
            reset: function() {
              c = void 0;
            },
            compile: function(b, a, f, v) {
              return c || k(), new m(b, a, f, v);
            },
            render: function(b, a, f) {
              return c || k(), c.render(b, a, f);
            },
            renderString: function(b, a, f) {
              return c || k(), c.renderString(b, a, f);
            },
            precompile: C ? C.precompile : void 0,
            precompileString: C ? C.precompileString : void 0
          };
        },
        /* 12 */
        /***/
        function(t, n, o) {
          var i = o(13), u = [], d = [], m = i.makeRequestCallFromTimer(y);
          function y() {
            if (d.length)
              throw d.shift();
          }
          t.exports = O;
          function O(B) {
            var N;
            u.length ? N = u.pop() : N = new C(), N.task = B, i(N);
          }
          function C() {
            this.task = null;
          }
          C.prototype.call = function() {
            try {
              this.task.call();
            } catch (B) {
              O.onerror ? O.onerror(B) : (d.push(B), m());
            } finally {
              this.task = null, u[u.length] = this;
            }
          };
        },
        /* 13 */
        /***/
        function(t, n, o) {
          (function(i) {
            t.exports = u;
            function u(r) {
              d.length || m(), d[d.length] = r;
            }
            var d = [], m, y = 0, O = 1024;
            function C() {
              for (; y < d.length; ) {
                var r = y;
                if (y = y + 1, d[r].call(), y > O) {
                  for (var l = 0, c = d.length - y; l < c; l++)
                    d[l] = d[l + y];
                  d.length -= y, y = 0;
                }
              }
              d.length = 0, y = 0;
            }
            var B = typeof i < "u" ? i : self, N = B.MutationObserver || B.WebKitMutationObserver;
            typeof N == "function" ? m = T(C) : m = I(C), u.requestFlush = m;
            function T(r) {
              var l = 1, c = new N(r), k = document.createTextNode("");
              return c.observe(k, { characterData: !0 }), function() {
                l = -l, k.data = l;
              };
            }
            function I(r) {
              return function() {
                var c = setTimeout(g, 0), k = setInterval(g, 50);
                function g() {
                  clearTimeout(c), clearInterval(k), r();
                }
              };
            }
            u.makeRequestCallFromTimer = I;
          }).call(n, o(14));
        },
        /* 14 */
        /***/
        function(t, n) {
          var o;
          o = function() {
            return this;
          }();
          try {
            o = o || Function("return this")() || (0, eval)("this");
          } catch {
            typeof window == "object" && (o = window);
          }
          t.exports = o;
        },
        /* 15 */
        /***/
        function(t, n, o) {
          var i, u;
          (function(d) {
            var m = function() {
              var N = Array.prototype.slice.call(arguments);
              typeof N[0] == "function" && N[0].apply(null, N.splice(1));
            }, y = function(N) {
              typeof setImmediate == "function" ? setImmediate(N) : typeof process < "u" && process.nextTick ? process.nextTick(N) : setTimeout(N, 0);
            }, O = function(N) {
              var T = function(I) {
                var r = function() {
                  return N.length && N[I].apply(null, arguments), r.next();
                };
                return r.next = function() {
                  return I < N.length - 1 ? T(I + 1) : null;
                }, r;
              };
              return T(0);
            }, C = Array.isArray || function(N) {
              return Object.prototype.toString.call(N) === "[object Array]";
            }, B = function(N, T, I) {
              var r = I ? y : m;
              if (T = T || function() {
              }, !C(N)) {
                var l = new Error("First argument to waterfall must be an array of functions");
                return T(l);
              }
              if (!N.length)
                return T();
              var c = function(k) {
                return function(g) {
                  if (g)
                    T.apply(null, arguments), T = function() {
                    };
                  else {
                    var b = Array.prototype.slice.call(arguments, 1), a = k.next();
                    a ? b.push(c(a)) : b.push(T), r(function() {
                      k.apply(null, b);
                    });
                  }
                };
              };
              c(O(N))();
            };
            i = [], u = function() {
              return B;
            }.apply(n, i), u !== void 0 && (t.exports = u);
          })();
        },
        /* 16 */
        /***/
        function(t, n, o) {
          var i = typeof Reflect == "object" ? Reflect : null, u = i && typeof i.apply == "function" ? i.apply : function(p, _, w) {
            return Function.prototype.apply.call(p, _, w);
          }, d;
          i && typeof i.ownKeys == "function" ? d = i.ownKeys : Object.getOwnPropertySymbols ? d = function(p) {
            return Object.getOwnPropertyNames(p).concat(Object.getOwnPropertySymbols(p));
          } : d = function(p) {
            return Object.getOwnPropertyNames(p);
          };
          function m(h) {
            console && console.warn && console.warn(h);
          }
          var y = Number.isNaN || function(p) {
            return p !== p;
          };
          function O() {
            O.init.call(this);
          }
          t.exports = O, t.exports.once = a, O.EventEmitter = O, O.prototype._events = void 0, O.prototype._eventsCount = 0, O.prototype._maxListeners = void 0;
          var C = 10;
          function B(h) {
            if (typeof h != "function")
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof h);
          }
          Object.defineProperty(O, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
              return C;
            },
            set: function(h) {
              if (typeof h != "number" || h < 0 || y(h))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + h + ".");
              C = h;
            }
          }), O.init = function() {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, O.prototype.setMaxListeners = function(p) {
            if (typeof p != "number" || p < 0 || y(p))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + p + ".");
            return this._maxListeners = p, this;
          };
          function N(h) {
            return h._maxListeners === void 0 ? O.defaultMaxListeners : h._maxListeners;
          }
          O.prototype.getMaxListeners = function() {
            return N(this);
          }, O.prototype.emit = function(p) {
            for (var _ = [], w = 1; w < arguments.length; w++)
              _.push(arguments[w]);
            var A = p === "error", P = this._events;
            if (P !== void 0)
              A = A && P.error === void 0;
            else if (!A)
              return !1;
            if (A) {
              var R;
              if (_.length > 0 && (R = _[0]), R instanceof Error)
                throw R;
              var F = new Error("Unhandled error." + (R ? " (" + R.message + ")" : ""));
              throw F.context = R, F;
            }
            var K = P[p];
            if (K === void 0)
              return !1;
            if (typeof K == "function")
              u(K, this, _);
            else
              for (var x = K.length, E = k(K, x), w = 0; w < x; ++w)
                u(E[w], this, _);
            return !0;
          };
          function T(h, p, _, w) {
            var A, P, R;
            if (B(_), P = h._events, P === void 0 ? (P = h._events = /* @__PURE__ */ Object.create(null), h._eventsCount = 0) : (P.newListener !== void 0 && (h.emit(
              "newListener",
              p,
              _.listener ? _.listener : _
            ), P = h._events), R = P[p]), R === void 0)
              R = P[p] = _, ++h._eventsCount;
            else if (typeof R == "function" ? R = P[p] = w ? [_, R] : [R, _] : w ? R.unshift(_) : R.push(_), A = N(h), A > 0 && R.length > A && !R.warned) {
              R.warned = !0;
              var F = new Error("Possible EventEmitter memory leak detected. " + R.length + " " + String(p) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              F.name = "MaxListenersExceededWarning", F.emitter = h, F.type = p, F.count = R.length, m(F);
            }
            return h;
          }
          O.prototype.addListener = function(p, _) {
            return T(this, p, _, !1);
          }, O.prototype.on = O.prototype.addListener, O.prototype.prependListener = function(p, _) {
            return T(this, p, _, !0);
          };
          function I() {
            if (!this.fired)
              return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function r(h, p, _) {
            var w = { fired: !1, wrapFn: void 0, target: h, type: p, listener: _ }, A = I.bind(w);
            return A.listener = _, w.wrapFn = A, A;
          }
          O.prototype.once = function(p, _) {
            return B(_), this.on(p, r(this, p, _)), this;
          }, O.prototype.prependOnceListener = function(p, _) {
            return B(_), this.prependListener(p, r(this, p, _)), this;
          }, O.prototype.removeListener = function(p, _) {
            var w, A, P, R, F;
            if (B(_), A = this._events, A === void 0)
              return this;
            if (w = A[p], w === void 0)
              return this;
            if (w === _ || w.listener === _)
              --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete A[p], A.removeListener && this.emit("removeListener", p, w.listener || _));
            else if (typeof w != "function") {
              for (P = -1, R = w.length - 1; R >= 0; R--)
                if (w[R] === _ || w[R].listener === _) {
                  F = w[R].listener, P = R;
                  break;
                }
              if (P < 0)
                return this;
              P === 0 ? w.shift() : g(w, P), w.length === 1 && (A[p] = w[0]), A.removeListener !== void 0 && this.emit("removeListener", p, F || _);
            }
            return this;
          }, O.prototype.off = O.prototype.removeListener, O.prototype.removeAllListeners = function(p) {
            var _, w, A;
            if (w = this._events, w === void 0)
              return this;
            if (w.removeListener === void 0)
              return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : w[p] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete w[p]), this;
            if (arguments.length === 0) {
              var P = Object.keys(w), R;
              for (A = 0; A < P.length; ++A)
                R = P[A], R !== "removeListener" && this.removeAllListeners(R);
              return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
            }
            if (_ = w[p], typeof _ == "function")
              this.removeListener(p, _);
            else if (_ !== void 0)
              for (A = _.length - 1; A >= 0; A--)
                this.removeListener(p, _[A]);
            return this;
          };
          function l(h, p, _) {
            var w = h._events;
            if (w === void 0)
              return [];
            var A = w[p];
            return A === void 0 ? [] : typeof A == "function" ? _ ? [A.listener || A] : [A] : _ ? b(A) : k(A, A.length);
          }
          O.prototype.listeners = function(p) {
            return l(this, p, !0);
          }, O.prototype.rawListeners = function(p) {
            return l(this, p, !1);
          }, O.listenerCount = function(h, p) {
            return typeof h.listenerCount == "function" ? h.listenerCount(p) : c.call(h, p);
          }, O.prototype.listenerCount = c;
          function c(h) {
            var p = this._events;
            if (p !== void 0) {
              var _ = p[h];
              if (typeof _ == "function")
                return 1;
              if (_ !== void 0)
                return _.length;
            }
            return 0;
          }
          O.prototype.eventNames = function() {
            return this._eventsCount > 0 ? d(this._events) : [];
          };
          function k(h, p) {
            for (var _ = new Array(p), w = 0; w < p; ++w)
              _[w] = h[w];
            return _;
          }
          function g(h, p) {
            for (; p + 1 < h.length; p++)
              h[p] = h[p + 1];
            h.pop();
          }
          function b(h) {
            for (var p = new Array(h.length), _ = 0; _ < p.length; ++_)
              p[_] = h[_].listener || h[_];
            return p;
          }
          function a(h, p) {
            return new Promise(function(_, w) {
              function A(R) {
                h.removeListener(p, P), w(R);
              }
              function P() {
                typeof h.removeListener == "function" && h.removeListener("error", A), _([].slice.call(arguments));
              }
              v(h, p, P, { once: !0 }), p !== "error" && f(h, A, { once: !0 });
            });
          }
          function f(h, p, _) {
            typeof h.on == "function" && v(h, "error", p, _);
          }
          function v(h, p, _, w) {
            if (typeof h.on == "function")
              w.once ? h.once(p, _) : h.on(p, _);
            else if (typeof h.addEventListener == "function")
              h.addEventListener(p, function A(P) {
                w.once && h.removeEventListener(p, A), _(P);
              });
            else
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof h);
          }
        },
        /* 17 */
        /***/
        function(t, n, o) {
          var i = o(3), u = o(0), d = 0;
          function m() {
            return "hole_" + d++;
          }
          function y(c, k) {
            for (var g = null, b = 0; b < c.length; b++) {
              var a = k(c[b]);
              a !== c[b] && (g || (g = c.slice()), g[b] = a);
            }
            return g || c;
          }
          function O(c, k, g) {
            if (!(c instanceof i.Node))
              return c;
            if (!g) {
              var b = k(c);
              if (b && b !== c)
                return b;
            }
            if (c instanceof i.NodeList) {
              var a = y(c.children, function(_) {
                return O(_, k, g);
              });
              a !== c.children && (c = new i[c.typename](c.lineno, c.colno, a));
            } else if (c instanceof i.CallExtension) {
              var f = O(c.args, k, g), v = y(c.contentArgs, function(_) {
                return O(_, k, g);
              });
              (f !== c.args || v !== c.contentArgs) && (c = new i[c.typename](c.extName, c.prop, f, v));
            } else {
              var h = c.fields.map(function(_) {
                return c[_];
              }), p = y(h, function(_) {
                return O(_, k, g);
              });
              p !== h && (c = new i[c.typename](c.lineno, c.colno), p.forEach(function(_, w) {
                c[c.fields[w]] = _;
              }));
            }
            return g && k(c) || c;
          }
          function C(c, k) {
            return O(c, k, !0);
          }
          function B(c, k, g) {
            var b = [], a = C(g ? c[g] : c, function(f) {
              var v;
              return f instanceof i.Block ? f : ((f instanceof i.Filter && u.indexOf(k, f.name.value) !== -1 || f instanceof i.CallExtensionAsync) && (v = new i.Symbol(f.lineno, f.colno, m()), b.push(new i.FilterAsync(f.lineno, f.colno, f.name, f.args, v))), v);
            });
            return g ? c[g] = a : c = a, b.length ? (b.push(c), new i.NodeList(c.lineno, c.colno, b)) : c;
          }
          function N(c, k) {
            return C(c, function(g) {
              return g instanceof i.Output ? B(g, k) : g instanceof i.Set ? B(g, k, "value") : g instanceof i.For ? B(g, k, "arr") : g instanceof i.If ? B(g, k, "cond") : g instanceof i.CallExtension ? B(g, k, "args") : void 0;
            });
          }
          function T(c) {
            return O(c, function(k) {
              if (k instanceof i.Block) {
                var g = !1, b = m();
                k.body = O(k.body, function(a) {
                  if (a instanceof i.FunCall && a.name.value === "super")
                    return g = !0, new i.Symbol(a.lineno, a.colno, b);
                }), g && k.body.children.unshift(new i.Super(0, 0, k.name, new i.Symbol(0, 0, b)));
              }
            });
          }
          function I(c) {
            return C(c, function(k) {
              if (!(!(k instanceof i.If) && !(k instanceof i.For))) {
                var g = !1;
                if (O(k, function(b) {
                  if (b instanceof i.FilterAsync || b instanceof i.IfAsync || b instanceof i.AsyncEach || b instanceof i.AsyncAll || b instanceof i.CallExtensionAsync)
                    return g = !0, b;
                }), g) {
                  if (k instanceof i.If)
                    return new i.IfAsync(k.lineno, k.colno, k.cond, k.body, k.else_);
                  if (k instanceof i.For && !(k instanceof i.AsyncAll))
                    return new i.AsyncEach(k.lineno, k.colno, k.arr, k.name, k.body, k.else_);
                }
              }
            });
          }
          function r(c, k) {
            return I(T(N(c, k)));
          }
          function l(c, k) {
            return r(c, k || []);
          }
          t.exports = {
            transform: l
          };
        },
        /* 18 */
        /***/
        function(t, d, o) {
          var i = o(0), u = o(2), d = t.exports = {};
          function m(L, M) {
            return L == null || L === !1 ? M : L;
          }
          d.abs = Math.abs;
          function y(L) {
            return L !== L;
          }
          function O(L, M, V) {
            var U, Y = [], J = [];
            for (U = 0; U < L.length; U++)
              U % M === 0 && J.length && (Y.push(J), J = []), J.push(L[U]);
            if (J.length) {
              if (V)
                for (U = J.length; U < M; U++)
                  J.push(V);
              Y.push(J);
            }
            return Y;
          }
          d.batch = O;
          function C(L) {
            L = m(L, "");
            var M = L.toLowerCase();
            return u.copySafeness(L, M.charAt(0).toUpperCase() + M.slice(1));
          }
          d.capitalize = C;
          function B(L, M) {
            if (L = m(L, ""), M = M || 80, L.length >= M)
              return L;
            var V = M - L.length, U = i.repeat(" ", V / 2 - V % 2), Y = i.repeat(" ", V / 2);
            return u.copySafeness(L, U + L + Y);
          }
          d.center = B;
          function N(L, M, V) {
            return V ? L || M : L !== void 0 ? L : M;
          }
          d.default = N;
          function T(L, M, V) {
            if (!i.isObject(L))
              throw new i.TemplateError("dictsort filter: val must be an object");
            var U = [];
            for (var Y in L)
              U.push([Y, L[Y]]);
            var J;
            if (V === void 0 || V === "key")
              J = 0;
            else if (V === "value")
              J = 1;
            else
              throw new i.TemplateError("dictsort filter: You can only sort by either key or value");
            return U.sort(function(ae, ee) {
              var le = ae[J], Ee = ee[J];
              return M || (i.isString(le) && (le = le.toUpperCase()), i.isString(Ee) && (Ee = Ee.toUpperCase())), le > Ee ? 1 : le === Ee ? 0 : -1;
            }), U;
          }
          d.dictsort = T;
          function I(L, M) {
            return JSON.stringify(L, null, M);
          }
          d.dump = I;
          function r(L) {
            return L instanceof u.SafeString ? L : (L = L ?? "", u.markSafe(i.escape(L.toString())));
          }
          d.escape = r;
          function l(L) {
            return L instanceof u.SafeString ? L : (L = L ?? "", u.markSafe(L.toString()));
          }
          d.safe = l;
          function c(L) {
            return L[0];
          }
          d.first = c;
          function k(L) {
            return L = L ?? "", u.markSafe(i.escape(L.toString()));
          }
          d.forceescape = k;
          function g(L, M) {
            return i.groupBy(L, M, this.env.opts.throwOnUndefined);
          }
          d.groupby = g;
          function b(L, M, V) {
            if (L = m(L, ""), L === "")
              return "";
            M = M || 4;
            var U = L.split(`
`), Y = i.repeat(" ", M), J = U.map(function(ae, ee) {
              return ee === 0 && !V ? ae : "" + Y + ae;
            }).join(`
`);
            return u.copySafeness(L, J);
          }
          d.indent = b;
          function a(L, M, V) {
            return M = M || "", V && (L = i.map(L, function(U) {
              return U[V];
            })), L.join(M);
          }
          d.join = a;
          function f(L) {
            return L[L.length - 1];
          }
          d.last = f;
          function v(L) {
            var M = m(L, "");
            return M !== void 0 ? typeof Map == "function" && M instanceof Map || typeof Set == "function" && M instanceof Set ? M.size : i.isObject(M) && !(M instanceof u.SafeString) ? i.keys(M).length : M.length : 0;
          }
          d.length = v;
          function h(L) {
            if (i.isString(L))
              return L.split("");
            if (i.isObject(L))
              return i._entries(L || {}).map(function(M) {
                var V = M[0], U = M[1];
                return {
                  key: V,
                  value: U
                };
              });
            if (i.isArray(L))
              return L;
            throw new i.TemplateError("list filter: type not iterable");
          }
          d.list = h;
          function p(L) {
            return L = m(L, ""), L.toLowerCase();
          }
          d.lower = p;
          function _(L) {
            return L == null ? "" : u.copySafeness(L, L.replace(/\r\n|\n/g, `<br />
`));
          }
          d.nl2br = _;
          function w(L) {
            return L[Math.floor(Math.random() * L.length)];
          }
          d.random = w;
          function A(L) {
            function M(V, U, Y) {
              U === void 0 && (U = "truthy");
              var J = this, ae = J.env.getTest(U);
              return i.toArray(V).filter(function(le) {
                return ae.call(J, le, Y) === L;
              });
            }
            return M;
          }
          d.reject = A(!1);
          function P(L, M) {
            return L.filter(function(V) {
              return !V[M];
            });
          }
          d.rejectattr = P, d.select = A(!0);
          function R(L, M) {
            return L.filter(function(V) {
              return !!V[M];
            });
          }
          d.selectattr = R;
          function F(L, M, V, U) {
            var Y = L;
            if (M instanceof RegExp)
              return L.replace(M, V);
            typeof U > "u" && (U = -1);
            var J = "";
            if (typeof M == "number")
              M = "" + M;
            else if (typeof M != "string")
              return L;
            if (typeof L == "number" && (L = "" + L), typeof L != "string" && !(L instanceof u.SafeString))
              return L;
            if (M === "")
              return J = V + L.split("").join(V) + V, u.copySafeness(L, J);
            var ae = L.indexOf(M);
            if (U === 0 || ae === -1)
              return L;
            for (var ee = 0, le = 0; ae > -1 && (U === -1 || le < U); )
              J += L.substring(ee, ae) + V, ee = ae + M.length, le++, ae = L.indexOf(M, ee);
            return ee < L.length && (J += L.substring(ee)), u.copySafeness(Y, J);
          }
          d.replace = F;
          function K(L) {
            var M;
            return i.isString(L) ? M = h(L) : M = i.map(L, function(V) {
              return V;
            }), M.reverse(), i.isString(L) ? u.copySafeness(L, M.join("")) : M;
          }
          d.reverse = K;
          function x(L, M, V) {
            M = M || 0;
            var U = Math.pow(10, M), Y;
            return V === "ceil" ? Y = Math.ceil : V === "floor" ? Y = Math.floor : Y = Math.round, Y(L * U) / U;
          }
          d.round = x;
          function E(L, M, V) {
            for (var U = Math.floor(L.length / M), Y = L.length % M, J = [], ae = 0, ee = 0; ee < M; ee++) {
              var le = ae + ee * U;
              ee < Y && ae++;
              var Ee = ae + (ee + 1) * U, ke = L.slice(le, Ee);
              V && ee >= Y && ke.push(V), J.push(ke);
            }
            return J;
          }
          d.slice = E;
          function S(L, M, V) {
            return V === void 0 && (V = 0), M && (L = i.map(L, function(U) {
              return U[M];
            })), V + L.reduce(function(U, Y) {
              return U + Y;
            }, 0);
          }
          d.sum = S, d.sort = u.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(M, V, U, Y) {
            var J = this, ae = i.map(M, function(le) {
              return le;
            }), ee = i.getAttrGetter(Y);
            return ae.sort(function(le, Ee) {
              var ke = Y ? ee(le) : le, Le = Y ? ee(Ee) : Ee;
              if (J.env.opts.throwOnUndefined && Y && (ke === void 0 || Le === void 0))
                throw new TypeError('sort: attribute "' + Y + '" resolved to undefined');
              return !U && i.isString(ke) && i.isString(Le) && (ke = ke.toLowerCase(), Le = Le.toLowerCase()), ke < Le ? V ? 1 : -1 : ke > Le ? V ? -1 : 1 : 0;
            }), ae;
          });
          function j(L) {
            return u.copySafeness(L, L);
          }
          d.string = j;
          function D(L, M) {
            L = m(L, "");
            var V = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, U = ne(L.replace(V, "")), Y = "";
            return M ? Y = U.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, `
`).replace(/\n\n\n+/g, `

`) : Y = U.replace(/\s+/gi, " "), u.copySafeness(L, Y);
          }
          d.striptags = D;
          function $(L) {
            L = m(L, "");
            var M = L.split(" ").map(function(V) {
              return C(V);
            });
            return u.copySafeness(L, M.join(" "));
          }
          d.title = $;
          function ne(L) {
            return u.copySafeness(L, L.replace(/^\s*|\s*$/g, ""));
          }
          d.trim = ne;
          function z(L, M, V, U) {
            var Y = L;
            if (L = m(L, ""), M = M || 255, L.length <= M)
              return L;
            if (V)
              L = L.substring(0, M);
            else {
              var J = L.lastIndexOf(" ", M);
              J === -1 && (J = M), L = L.substring(0, J);
            }
            return L += U ?? "...", u.copySafeness(Y, L);
          }
          d.truncate = z;
          function ce(L) {
            return L = m(L, ""), L.toUpperCase();
          }
          d.upper = ce;
          function pe(L) {
            var M = encodeURIComponent;
            if (i.isString(L))
              return M(L);
            var V = i.isArray(L) ? L : i._entries(L);
            return V.map(function(U) {
              var Y = U[0], J = U[1];
              return M(Y) + "=" + M(J);
            }).join("&");
          }
          d.urlencode = pe;
          var X = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, Z = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, Q = /^https?:\/\/.*$/, G = /^www\./, q = /\.(?:org|net|com)(?:\:|\/|$)/;
          function se(L, M, V) {
            y(M) && (M = 1 / 0);
            var U = V === !0 ? ' rel="nofollow"' : "", Y = L.split(/(\s+)/).filter(function(J) {
              return J && J.length;
            }).map(function(J) {
              var ae = J.match(X), ee = ae ? ae[1] : J, le = ee.substr(0, M);
              return Q.test(ee) ? '<a href="' + ee + '"' + U + ">" + le + "</a>" : G.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : Z.test(ee) ? '<a href="mailto:' + ee + '">' + ee + "</a>" : q.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : J;
            });
            return Y.join("");
          }
          d.urlize = se;
          function we(L) {
            L = m(L, "");
            var M = L ? L.match(/\w+/g) : null;
            return M ? M.length : null;
          }
          d.wordcount = we;
          function he(L, M) {
            var V = parseFloat(L);
            return y(V) ? M : V;
          }
          d.float = he;
          var Oe = u.makeMacro(["value", "default", "base"], [], function(M, V, U) {
            U === void 0 && (U = 10);
            var Y = parseInt(M, U);
            return y(Y) ? V : Y;
          });
          d.int = Oe, d.d = d.default, d.e = d.escape;
        },
        /* 19 */
        /***/
        function(t, n, o) {
          function i(y, O) {
            y.prototype = Object.create(O.prototype), y.prototype.constructor = y, u(y, O);
          }
          function u(y, O) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(B, N) {
              return B.__proto__ = N, B;
            }, u(y, O);
          }
          var d = o(6), m = /* @__PURE__ */ function(y) {
            i(O, y);
            function O(B) {
              var N;
              return N = y.call(this) || this, N.precompiled = B || {}, N;
            }
            var C = O.prototype;
            return C.getSource = function(N) {
              return this.precompiled[N] ? {
                src: {
                  type: "code",
                  obj: this.precompiled[N]
                },
                path: N
              } : null;
            }, O;
          }(d);
          t.exports = {
            PrecompiledLoader: m
          };
        },
        /* 20 */
        /***/
        function(t, n, o) {
          var i = o(2).SafeString;
          function u(w) {
            return typeof w == "function";
          }
          n.callable = u;
          function d(w) {
            return w !== void 0;
          }
          n.defined = d;
          function m(w, A) {
            return w % A === 0;
          }
          n.divisibleby = m;
          function y(w) {
            return w instanceof i;
          }
          n.escaped = y;
          function O(w, A) {
            return w === A;
          }
          n.equalto = O, n.eq = n.equalto, n.sameas = n.equalto;
          function C(w) {
            return w % 2 === 0;
          }
          n.even = C;
          function B(w) {
            return !w;
          }
          n.falsy = B;
          function N(w, A) {
            return w >= A;
          }
          n.ge = N;
          function T(w, A) {
            return w > A;
          }
          n.greaterthan = T, n.gt = n.greaterthan;
          function I(w, A) {
            return w <= A;
          }
          n.le = I;
          function r(w, A) {
            return w < A;
          }
          n.lessthan = r, n.lt = n.lessthan;
          function l(w) {
            return w.toLowerCase() === w;
          }
          n.lower = l;
          function c(w, A) {
            return w !== A;
          }
          n.ne = c;
          function k(w) {
            return w === null;
          }
          n.null = k;
          function g(w) {
            return typeof w == "number";
          }
          n.number = g;
          function b(w) {
            return w % 2 === 1;
          }
          n.odd = b;
          function a(w) {
            return typeof w == "string";
          }
          n.string = a;
          function f(w) {
            return !!w;
          }
          n.truthy = f;
          function v(w) {
            return w === void 0;
          }
          n.undefined = v;
          function h(w) {
            return w.toUpperCase() === w;
          }
          n.upper = h;
          function p(w) {
            return typeof Symbol < "u" ? !!w[Symbol.iterator] : Array.isArray(w) || typeof w == "string";
          }
          n.iterable = p;
          function _(w) {
            var A = w != null && typeof w == "object" && !Array.isArray(w);
            return Set ? A && !(w instanceof Set) : A;
          }
          n.mapping = _;
        },
        /* 21 */
        /***/
        function(t, n, o) {
          function i(m) {
            var y = -1;
            return {
              current: null,
              reset: function() {
                y = -1, this.current = null;
              },
              next: function() {
                return y++, y >= m.length && (y = 0), this.current = m[y], this.current;
              }
            };
          }
          function u(m) {
            m = m || ",";
            var y = !0;
            return function() {
              var O = y ? "" : m;
              return y = !1, O;
            };
          }
          function d() {
            return {
              range: function(y, O, C) {
                typeof O > "u" ? (O = y, y = 0, C = 1) : C || (C = 1);
                var B = [];
                if (C > 0)
                  for (var N = y; N < O; N += C)
                    B.push(N);
                else
                  for (var T = y; T > O; T += C)
                    B.push(T);
                return B;
              },
              cycler: function() {
                return i(Array.prototype.slice.call(arguments));
              },
              joiner: function(y) {
                return u(y);
              }
            };
          }
          t.exports = d;
        },
        /* 22 */
        /***/
        function(t, n, o) {
          var i = o(4);
          t.exports = function(d, m) {
            function y(O, C) {
              if (this.name = O, this.path = O, this.defaultEngine = C.defaultEngine, this.ext = i.extname(O), !this.ext && !this.defaultEngine)
                throw new Error("No default engine was specified and no extension was provided.");
              this.ext || (this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine);
            }
            return y.prototype.render = function(C, B) {
              d.render(this.name, C, B);
            }, m.set("view", y), m.set("nunjucksEnv", d), d;
          };
        },
        /* 23 */
        /***/
        function(t, n, o) {
          var i = o(4), u = o(4), d = o(0), m = d._prettifyError, y = o(5), O = o(7), C = O.Environment, B = o(24);
          function N(l, c) {
            return Array.isArray(c) ? c.some(function(k) {
              return l.match(k);
            }) : !1;
          }
          function T(l, c) {
            c = c || {}, c.isString = !0;
            var k = c.env || new C([]), g = c.wrapper || B;
            if (!c.name)
              throw new Error('the "name" option is required when compiling a string');
            return g([r(l, c.name, k)], c);
          }
          function I(l, c) {
            c = c || {};
            var k = c.env || new C([]), g = c.wrapper || B;
            if (c.isString)
              return T(l, c);
            var b = i.existsSync(l) && i.statSync(l), a = [], f = [];
            function v(_) {
              i.readdirSync(_).forEach(function(w) {
                var A = u.join(_, w), P = A.substr(u.join(l, "/").length), R = i.statSync(A);
                R && R.isDirectory() ? (P += "/", N(P, c.exclude) || v(A)) : N(P, c.include) && f.push(A);
              });
            }
            if (b.isFile())
              a.push(r(i.readFileSync(l, "utf-8"), c.name || l, k));
            else if (b.isDirectory()) {
              v(l);
              for (var h = 0; h < f.length; h++) {
                var p = f[h].replace(u.join(l, "/"), "");
                try {
                  a.push(r(i.readFileSync(f[h], "utf-8"), p, k));
                } catch (_) {
                  if (c.force)
                    console.error(_);
                  else
                    throw _;
                }
              }
            }
            return g(a, c);
          }
          function r(l, c, k) {
            k = k || new C([]);
            var g = k.asyncFilters, b = k.extensionsList, a;
            c = c.replace(/\\/g, "/");
            try {
              a = y.compile(l, g, b, c, k.opts);
            } catch (f) {
              throw m(c, !1, f);
            }
            return {
              name: c,
              template: a
            };
          }
          t.exports = {
            precompile: I,
            precompileString: T
          };
        },
        /* 24 */
        /***/
        function(t, n, o) {
          function i(u, d) {
            var m = "";
            d = d || {};
            for (var y = 0; y < u.length; y++) {
              var O = JSON.stringify(u[y].name), C = u[y].template;
              m += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + O + `] = (function() {
` + C + `
})();
`, d.asFunction && (m += "return function(ctx, cb) { return nunjucks.render(" + O + `, ctx, cb); }
`), m += `})();
`;
            }
            return m;
          }
          t.exports = i;
        },
        /* 25 */
        /***/
        function(t, n, o) {
          function i() {
            var u = this.runtime, d = this.lib, m = this.compiler.Compiler, y = this.parser.Parser, O = this.nodes, C = this.lexer, B = u.contextOrFrameLookup, N = u.memberLookup, T, I;
            m && (T = m.prototype.assertType), y && (I = y.prototype.parseAggregate);
            function r() {
              u.contextOrFrameLookup = B, u.memberLookup = N, m && (m.prototype.assertType = T), y && (y.prototype.parseAggregate = I);
            }
            u.contextOrFrameLookup = function(v, h, p) {
              var _ = B.apply(this, arguments);
              if (_ !== void 0)
                return _;
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
            if (O && m && y) {
              var c = O.Node.extend("Slice", {
                fields: ["start", "stop", "step"],
                init: function(v, h, p, _, w) {
                  p = p || new O.Literal(v, h, null), _ = _ || new O.Literal(v, h, null), w = w || new O.Literal(v, h, 1), this.parent(v, h, p, _, w);
                }
              });
              m.prototype.assertType = function(v) {
                v instanceof c || T.apply(this, arguments);
              }, m.prototype.compileSlice = function(v, h) {
                this._emit("("), this._compileExpression(v.start, h), this._emit("),("), this._compileExpression(v.stop, h), this._emit("),("), this._compileExpression(v.step, h), this._emit(")");
              }, y.prototype.parseAggregate = function() {
                var v = this, h = l(this.tokens);
                h.colno--, h.index--;
                try {
                  return I.apply(this);
                } catch (K) {
                  var p = l(this.tokens), _ = function() {
                    return d._assign(v.tokens, p), K;
                  };
                  d._assign(this.tokens, h), this.peeked = !1;
                  var w = this.peekToken();
                  if (w.type !== C.TOKEN_LEFT_BRACKET)
                    throw _();
                  this.nextToken();
                  for (var A = new c(w.lineno, w.colno), P = !1, R = 0; R <= A.fields.length && !this.skip(C.TOKEN_RIGHT_BRACKET); R++) {
                    if (R === A.fields.length)
                      if (P)
                        this.fail("parseSlice: too many slice components", w.lineno, w.colno);
                      else
                        break;
                    if (this.skip(C.TOKEN_COLON))
                      P = !0;
                    else {
                      var F = A.fields[R];
                      A[F] = this.parseExpression(), P = this.skip(C.TOKEN_COLON) || P;
                    }
                  }
                  if (!P)
                    throw _();
                  return new O.Array(w.lineno, w.colno, [A]);
                }
              };
            }
            function k(f, v, h, p) {
              f = f || [], v === null && (v = p < 0 ? f.length - 1 : 0), h === null ? h = p < 0 ? -1 : f.length : h < 0 && (h += f.length), v < 0 && (v += f.length);
              for (var _ = [], w = v; !(w < 0 || w > f.length || p > 0 && w >= h || p < 0 && w <= h); w += p)
                _.push(u.memberLookup(f, w));
              return _;
            }
            function g(f, v) {
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
                return g(this, v);
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
            return a.iteritems = a.items, a.itervalues = a.values, a.iterkeys = a.keys, u.memberLookup = function(v, h, p) {
              return arguments.length === 4 ? k.apply(this, arguments) : (v = v || {}, d.isArray(v) && g(b, h) ? b[h].bind(v) : d.isObject(v) && g(a, h) ? a[h].bind(v) : N.apply(this, arguments));
            }, r;
          }
          t.exports = i;
        }
        /******/
      ])
    );
  });
})(pi);
const di = (s, e) => {
  const t = Ct(s);
  return Ke.configure({ autoescape: !0 }), Ke.renderString(e, t);
}, Ct = (s) => {
  const e = {};
  return Object.entries(s).forEach(([t, n]) => {
    if (vi(n)) {
      const o = Object.values(n.content);
      e[t] = o.filter((i) => !(i != null && i.hidden)).map((i) => Ct(i.questions));
      return;
    }
    e[t] = n.value;
  }), e;
}, vi = (s) => Boolean(s.content);
class ht {
  constructor(e, t, n, o, i, u, d, m, y, O, C) {
    ue(this, "interview", []);
    ue(this, "nested", []);
    ue(this, "result", {});
    ue(this, "questionsInsideRepeat", []);
    ue(this, "getQuestion");
    ue(this, "isLastRadio");
    ue(this, "isEnd");
    ue(this, "nextQuestion");
    ue(this, "previousQuestion");
    ue(this, "getCompletionPercen");
    ue(this, "checkNextRadio");
    ue(this, "checkFirstRadio");
    ue(this, "isRepeat");
    ue(this, "goToEndAndGetIdsAndGoBack");
    ue(this, "setValueOfRepeat");
    ue(this, "separator", "->");
    this.getQuestion = e, this.isLastRadio = t, this.getCompletionPercen = n, this.checkNextRadio = o, this.checkFirstRadio = i, this.isEnd = u, this.nextQuestion = d, this.previousQuestion = m, this.isRepeat = y, this.goToEndAndGetIdsAndGoBack = O, this.setValueOfRepeat = C;
  }
  start(e) {
    this.interview = [], this.addQuestion(e, "start");
  }
  insertQuestionInInterview(e, t) {
    this.interview.push(e), t !== "start" && this.interview.sort(
      (n, o) => n.percentageOfCompletion - o.percentageOfCompletion
    );
  }
  applyLogicToQuestion(e) {
    const t = e;
    t.preLogic || (t.preLogic = []);
    let n = t.preLogic;
    this.nested.forEach((o, i) => {
      const u = this.nested[i + 1];
      let d = n.find((m) => m === o);
      if (d || (n.push(o), d = n.find((m) => m === o)), u) {
        const m = n[n.indexOf(d) + 1];
        if (m)
          if (Array.isArray(m))
            n = m;
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
  getQuestionInsideRepeat(e) {
    return this.questionsInsideRepeat.find((t) => t.id === e);
  }
  setActiveMultipleOption(e, t) {
    this.nested.length && this.nested[this.nested.length - 1].includes(e) && this.nested.pop(), this.nested.push(`${e}${this.separator}${t}`);
  }
  removeActiveMultipleOption() {
    this.nested.pop();
  }
  addQuestion(e, t) {
    const { id: n = "", title: o = "", value: i = "", type: u = "", subType: d = "", indications: m = "", placeholder: y = "", questions: O = {}, other: C = {} } = e, B = { id: n, title: o, value: i, type: u, indications: m, placeholder: y, subType: d, questions: O, other: C };
    t !== "start" && this.applyLogicToQuestion(B);
    const N = B;
    B.type === "multipleChoice" && (N.choices = e.choices), N.percentageOfCompletion = t === "start" ? 0 : t, this.insertQuestionInInterview(B, t);
  }
  async copyRepeat(e) {
    const t = e.id;
    await this.setValueOfRepeat(t, 1);
    const n = await this.goToEndAndGetIdsAndGoBack();
    await this.setValueOfRepeat(t, 2);
    const o = await this.goToEndAndGetIdsAndGoBack();
    await this.setValueOfRepeat(t, 1);
    let i = "";
    for (let m = 0; m < n.length; m++)
      if (n[m] !== o[m]) {
        i = n[m];
        break;
      }
    const u = async () => {
      const m = await this.isEnd();
      await this.nextQuestion();
      const y = await this.getQuestion({ ignoreCopy: !0 });
      return await this.previousQuestion(), y.id === i || m;
    }, d = new ht(
      this.getQuestion,
      this.isLastRadio,
      this.getCompletionPercen,
      this.checkNextRadio,
      this.checkFirstRadio,
      u,
      this.nextQuestion,
      this.previousQuestion,
      this.isRepeat,
      this.goToEndAndGetIdsAndGoBack,
      this.setValueOfRepeat
    );
    await this.nextQuestion(), e.questions = await d.copy(), this.questionsInsideRepeat = [...this.questionsInsideRepeat, ...d.interview];
  }
  async copyQuestion(e = !1, t = !1) {
    const n = await this.getQuestion(), o = n.id;
    if (!this.getQuestionInsideRepeat(o))
      if (this.questionExistsInInterview(o))
        if (n.type === "multipleChoice")
          if (this.nested.find((u) => u.includes(o)) || this.applyLogicToQuestion(
            this.getQuestionInInterview(o)
          ), await this.isLastRadio()) {
            if (t && this.nested.length) {
              const u = await this.checkFirstRadio(n.id);
              this.setActiveMultipleOption(u.id, u.label);
            }
          } else {
            const u = await this.checkNextRadio(o);
            this.setActiveMultipleOption(u.id, u.label);
          }
        else
          this.applyLogicToQuestion(
            this.getQuestionInInterview(o)
          );
      else {
        if (e)
          this.start(n);
        else {
          const i = await this.getCompletionPercen();
          await this.isRepeat(n.id) ? (await this.copyRepeat(n), this.addQuestion(n, i)) : this.addQuestion(n, i);
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
      const t = e[e.length - 1].split(this.separator)[0];
      let n = await this.getQuestion();
      for (; n.id !== t; )
        await this.previousQuestion(), n = await this.getQuestion();
      const o = await this.isLastRadio();
      await this.copyQuestion(), n.type === "multipleChoice" && o && (this.removeActiveMultipleOption(), await this.backToPreviousActive());
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
      const n = (o, i = !1) => {
        o.forEach((u, d) => {
          const m = o[d + 1];
          if (typeof u == "string") {
            const [y, O] = u.split(this.separator);
            t += `${y}.value === '${O}'`, m && (typeof m == "string" && (t += " || "), Array.isArray(m) && (t += " && "));
          }
          Array.isArray(u) && (t += " (", n(u, !0), m && typeof m == "string" && (t += "|| ")), i && !m && (t += ") ");
        });
      };
      n(e.preLogic), e.logic = { showIf: t }, delete e.preLogic;
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
class Nt {
  constructor(e = "empty", t = { isRoot: !0, data: null }) {
    ue(this, "interview", /* @__PURE__ */ new Map());
    ue(this, "events");
    ue(this, "current");
    ue(this, "isRoot", !0);
    ue(this, "data", {});
    ue(this, "Cloner", ht);
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
    ri(e);
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
    const n = li(e);
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
      const o = this.interview.keys(), i = this.interview.values();
      if (!Function(...o, `return ${e.logic.showIf}`).bind(this)(...i))
        return !1;
    }
    if ((n = e.logic) != null && n.hideIf) {
      const o = this.interview.keys(), i = this.interview.values();
      if (!!Function(...o, `return ${e.logic.hideIf}`).bind(this)(...i))
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
    var o;
    let e, t;
    const n = Array.from(this.interview);
    for (let i = 0; i < n.length; i++) {
      const u = n[i][1], d = u == null ? void 0 : u.isCurrent, m = (u == null ? void 0 : u.type) === "repeat";
      if (t = n[i + 1] && n[i + 1][1], d && !m && !t && !this.isRoot) {
        u.isEnd = !0, e = u;
        break;
      }
      if (d && !m && t) {
        u.isCurrent = !1, e = n[i + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (d && m && this.canBeShown(u)) {
        const y = u;
        y.isCurrent = !1, e = Array.from(y.content[0].nestedInterview.interview)[0][1], e.isCurrent = !0;
        break;
      }
      if (d && m && !this.canBeShown(u) && t) {
        u.isCurrent = !1, e = n[i + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (d && m && !this.canBeShown(u) && !t) {
        u.isEnd = !0, e = u;
        break;
      }
      if (!d && m && !this.canBeShown(u) && !t) {
        u.isEnd = !0, e = u;
        break;
      }
      if (!d && m && this.canBeShown(u)) {
        let y = !1;
        const O = u;
        for (let C = 0; C < parseInt(u.value); C++)
          if (!O.content[C].hidden) {
            const B = !O.content[C + 1] || ((o = O.content[C + 1]) == null ? void 0 : o.hidden);
            if (e = O.content[C].nestedInterview.getNextQuestion(), e) {
              if (O.content[C].nestedInterview.isQuestionTheLastOfInterview(e.id) && B && t) {
                const T = e;
                if (T.exitRepeat) {
                  T.isEnd = !1, T.isCurrent = !1, e = n[i + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion()), delete T.exitRepeat;
                  break;
                } else
                  T.exitRepeat = !0;
              }
              if (e.isEnd)
                if (C + 1 < parseInt(u.value))
                  if (!e.isCurrent)
                    e.isEnd = !1, e = null;
                  else {
                    const T = Array.from(O.content[C + 1].nestedInterview.interview);
                    e.isCurrent = !1, e.isEnd = !1, e = T[0][1], e.isCurrent = !0;
                  }
                else {
                  const T = O.content[C].nestedInterview.canBeShown(e);
                  e.isEnd && !T && (e.isCurrent = !1, e = null);
                }
              if (e)
                break;
            } else
              B && t && (y = !0);
          }
        if (y)
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
    const t = Array.from(this.interview), n = t[0][1];
    if (n.isCurrent)
      return this.isRoot ? n : (e && (e.isCurrent = !0), n.isCurrent = !1, e);
    let o = n, i;
    for (let u = 1; u < t.length; u++) {
      const d = t[u][1], m = this.canBeShown(d);
      if (t[u + 1] && t[u + 1][1], d.isCurrent) {
        o.isCurrent = !0, i = o, d.isCurrent = !1;
        break;
      } else if (m && (o = d), d.type === "repeat") {
        const y = d;
        for (let O = 0; O < parseInt(d.value) && !(!y.content[O].hidden && (i = y.content[O].nestedInterview.getPreviousQuestion(o), i != null && i.isPrevious && (i.isPrevious = !1, o = i, i = null), i && i.isCurrent)); O++)
          ;
        if (i && i.isCurrent)
          break;
      }
    }
    if (e && !i) {
      const u = this.reversePreviousUtil(t);
      u && (i = u);
    }
    return i;
  }
  // traverse interview backwards to find previous question
  reversePreviousUtil(e) {
    let t;
    for (let n = e.length - 1; n >= 0; n--) {
      const o = e[n][1];
      if (this.canBeShown(o))
        if (o.type === "repeat") {
          const u = o;
          for (let d = parseInt(o.value) - 1; d >= 0; d--)
            if (!u.content[d].hidden) {
              const m = Array.from(u.content[d].nestedInterview.interview);
              if (t = u.content[d].nestedInterview.reversePreviousUtil(m), t && (t.isPrevious = !0), t)
                break;
            }
          if (t)
            break;
        } else {
          t = o, t.isPrevious = !0;
          break;
        }
    }
    return t;
  }
  // Returns an object whith the current total questions 
  // and the position you are in it
  getProgress() {
    let e = 0, t = 0;
    return Array.from(this.interview).forEach(([o, i]) => {
      e += 1, i.isCurrent && (t = e), i.type === "repeat" && Object.values(i.content).forEach((d) => {
        if (!d.hidden) {
          const m = d.nestedInterview.getProgress();
          m.currentPosition !== 0 && (t = e + m.currentPosition), e += m.total;
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
  isQuestionTheLastOfInterview(e) {
    const t = this.getLastQuestionOfInterview(), n = this.getStepById(e);
    return (n == null ? void 0 : n.indexInsideRepeat) !== null ? (n == null ? void 0 : n.id) === (t == null ? void 0 : t.id) && (n == null ? void 0 : n.indexInsideRepeat) === (t == null ? void 0 : t.indexInsideRepeat) : (t == null ? void 0 : t.id) === n.id;
  }
  getLastQuestionOfInterview() {
    let e = null;
    const t = Array.from(this.interview);
    for (let n = t.length - 1; n >= 0; n--) {
      const o = t[n][1];
      if (this.canBeShown(o))
        if (o.type === "repeat") {
          const u = o;
          for (let d = parseInt(o.value) - 1; d >= 0 && !(!u.content[d].hidden && (e = u.content[d].nestedInterview.getLastQuestionOfInterview(), e)); d--)
            ;
          e || (e = o);
          break;
        } else {
          e = o;
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
      const o = e[n][1];
      if (o.isCurrent) {
        t = this;
        break;
      }
      if (o.type === "repeat") {
        const i = o;
        for (let u = 0; u < parseInt(o.value) && !(!i.content[u].hidden && (t = i.content[u].nestedInterview.getCurrentGuidedInterview(), t)); u++)
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
    oi(t, n), n.value = t, (n == null ? void 0 : n.type) === "multipleChoice" && this.setRadioChecked(n, t), (n == null ? void 0 : n.type) === "repeat" && this.buildContentForRepeatQuestion(n, t), this.data[e] ? this.data[e].value = n.value : this.data[e] = { value: n.value }, this.events.dispatch("set-value", this.interview.get(e));
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
    const { range: n, id: o, questions: i, indexInsideRepeat: u } = e, { min: d, max: m } = n;
    t = si(e.value, d, m), e.value = t, e.content || (e.content = {}), this.data[o] ? this.data[o].value = t : this.data[o] = { value: t, content: {} };
    for (let O = 0; O < t; O++) {
      if (e.content[O]) {
        e.content[O].hidden = !1;
        continue;
      }
      this.data[o].content[O] = { hidden: !1, questions: {} };
      const C = new Nt(hi(i, O, u), {
        isRoot: !1,
        events: this.events,
        data: this.data[o].content[O].questions
      });
      e.content[O] = { hidden: !1, nestedInterview: C };
    }
    const y = Object.keys(e.content);
    if (t < y.length)
      for (let O = t; O < y.length; O++)
        e.content[O].hidden = !0, this.data[o].content[O].hidden = !0;
  }
  applyDataToQuestions(e) {
    Object.entries(e).forEach(([t, { value: n, content: o }]) => {
      this.setValue(t, n), o && Object.values(o).forEach((i, u) => {
        i.hidden || this.getNestedInterview(t, u).applyDataToQuestions(i.questions);
      });
    });
  }
  makeTemplate(e) {
    if (!e)
      throw new Error("No template provided");
    return di(this.data, e);
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
    const o = this.checkIfIdIsValid(t);
    if (!o.isValid)
      throw new Error(o.message);
    const i = Array.from(this.interview, ([d, m]) => ({ name: d, value: m }));
    i.forEach((d, m) => {
      d.name === e && (i[m].value.id = t, i[m].name = t);
    });
    const u = /* @__PURE__ */ new Map();
    i.forEach((d) => {
      u.set(d.name, d.value);
    }), this.interview = u;
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
    const o = this.findMultipleChoiceById(e);
    if (!n)
      throw new Error("No label provided");
    if (!o.choices[t])
      throw new Error("No choice with index:" + t);
    o.choices[t].label = n;
  }
  setDefaultCheckedChoice(e, t) {
    const n = this.findMultipleChoiceById(e);
    if (!n.choices[t])
      throw new Error("No choice with index:" + t);
    n.choices.forEach((o) => o.checked = !1), n.choices[t].checked = !0;
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
    const o = this.findQuestionById(e);
    o.options || (o.options = {}), o.options[t] = n;
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
  Nt as GuidedInterview
};
