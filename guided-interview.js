var jt = Object.defineProperty;
var Dt = (o, e, t) => e in o ? jt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var le = (o, e, t) => (Dt(o, typeof e != "symbol" ? e + "" : e, t), t);
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ut(o) {
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
Ve.default = $t;
let Fe;
const Vt = new Uint8Array(16);
function $t() {
  if (!Fe && (Fe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Fe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Fe(Vt);
}
var Ae = {}, Ce = {}, $e = {};
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.default = void 0;
var qt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
$e.default = qt;
Object.defineProperty(Ce, "__esModule", {
  value: !0
});
Ce.default = void 0;
var Qt = Gt($e);
function Gt(o) {
  return o && o.__esModule ? o : { default: o };
}
function Wt(o) {
  return typeof o == "string" && Qt.default.test(o);
}
var Ht = Wt;
Ce.default = Ht;
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
Ae.unsafeStringify = yt;
var Yt = zt(Ce);
function zt(o) {
  return o && o.__esModule ? o : { default: o };
}
const de = [];
for (let o = 0; o < 256; ++o)
  de.push((o + 256).toString(16).slice(1));
function yt(o, e = 0) {
  return (de[o[e + 0]] + de[o[e + 1]] + de[o[e + 2]] + de[o[e + 3]] + "-" + de[o[e + 4]] + de[o[e + 5]] + "-" + de[o[e + 6]] + de[o[e + 7]] + "-" + de[o[e + 8]] + de[o[e + 9]] + "-" + de[o[e + 10]] + de[o[e + 11]] + de[o[e + 12]] + de[o[e + 13]] + de[o[e + 14]] + de[o[e + 15]]).toLowerCase();
}
function Jt(o, e = 0) {
  const t = yt(o, e);
  if (!(0, Yt.default)(t))
    throw TypeError("Stringified UUID is invalid");
  return t;
}
var Xt = Jt;
Ae.default = Xt;
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.default = void 0;
var Zt = tn(Ve), en = Ae;
function tn(o) {
  return o && o.__esModule ? o : { default: o };
}
let pt, st, ot = 0, at = 0;
function nn(o, e, t) {
  let n = e && t || 0;
  const s = e || new Array(16);
  o = o || {};
  let i = o.node || pt, c = o.clockseq !== void 0 ? o.clockseq : st;
  if (i == null || c == null) {
    const M = o.random || (o.rng || Zt.default)();
    i == null && (i = pt = [M[0] | 1, M[1], M[2], M[3], M[4], M[5]]), c == null && (c = st = (M[6] << 8 | M[7]) & 16383);
  }
  let d = o.msecs !== void 0 ? o.msecs : Date.now(), y = o.nsecs !== void 0 ? o.nsecs : at + 1;
  const m = d - ot + (y - at) / 1e4;
  if (m < 0 && o.clockseq === void 0 && (c = c + 1 & 16383), (m < 0 || d > ot) && o.nsecs === void 0 && (y = 0), y >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ot = d, at = y, st = c, d += 122192928e5;
  const O = ((d & 268435455) * 1e4 + y) % 4294967296;
  s[n++] = O >>> 24 & 255, s[n++] = O >>> 16 & 255, s[n++] = O >>> 8 & 255, s[n++] = O & 255;
  const C = d / 4294967296 * 1e4 & 268435455;
  s[n++] = C >>> 8 & 255, s[n++] = C & 255, s[n++] = C >>> 24 & 15 | 16, s[n++] = C >>> 16 & 255, s[n++] = c >>> 8 | 128, s[n++] = c & 255;
  for (let M = 0; M < 6; ++M)
    s[n + M] = i[M];
  return e || (0, en.unsafeStringify)(s);
}
var rn = nn;
Ue.default = rn;
var qe = {}, Te = {}, Pe = {};
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.default = void 0;
var sn = on(Ce);
function on(o) {
  return o && o.__esModule ? o : { default: o };
}
function an(o) {
  if (!(0, sn.default)(o))
    throw TypeError("Invalid UUID");
  let e;
  const t = new Uint8Array(16);
  return t[0] = (e = parseInt(o.slice(0, 8), 16)) >>> 24, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = e & 255, t[4] = (e = parseInt(o.slice(9, 13), 16)) >>> 8, t[5] = e & 255, t[6] = (e = parseInt(o.slice(14, 18), 16)) >>> 8, t[7] = e & 255, t[8] = (e = parseInt(o.slice(19, 23), 16)) >>> 8, t[9] = e & 255, t[10] = (e = parseInt(o.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = e / 4294967296 & 255, t[12] = e >>> 24 & 255, t[13] = e >>> 16 & 255, t[14] = e >>> 8 & 255, t[15] = e & 255, t;
}
var ln = an;
Pe.default = ln;
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.URL = Te.DNS = void 0;
Te.default = pn;
var un = Ae, cn = fn(Pe);
function fn(o) {
  return o && o.__esModule ? o : { default: o };
}
function hn(o) {
  o = unescape(encodeURIComponent(o));
  const e = [];
  for (let t = 0; t < o.length; ++t)
    e.push(o.charCodeAt(t));
  return e;
}
const wt = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
Te.DNS = wt;
const _t = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
Te.URL = _t;
function pn(o, e, t) {
  function n(s, i, c, d) {
    var y;
    if (typeof s == "string" && (s = hn(s)), typeof i == "string" && (i = (0, cn.default)(i)), ((y = i) === null || y === void 0 ? void 0 : y.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let m = new Uint8Array(16 + s.length);
    if (m.set(i), m.set(s, i.length), m = t(m), m[6] = m[6] & 15 | e, m[8] = m[8] & 63 | 128, c) {
      d = d || 0;
      for (let O = 0; O < 16; ++O)
        c[d + O] = m[O];
      return c;
    }
    return (0, un.unsafeStringify)(m);
  }
  try {
    n.name = o;
  } catch {
  }
  return n.DNS = wt, n.URL = _t, n;
}
var Qe = {};
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.default = void 0;
function dn(o) {
  if (typeof o == "string") {
    const e = unescape(encodeURIComponent(o));
    o = new Uint8Array(e.length);
    for (let t = 0; t < e.length; ++t)
      o[t] = e.charCodeAt(t);
  }
  return vn(mn(gn(o), o.length * 8));
}
function vn(o) {
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
function mn(o, e) {
  o[e >> 5] |= 128 << e % 32, o[Et(e) - 1] = e;
  let t = 1732584193, n = -271733879, s = -1732584194, i = 271733878;
  for (let c = 0; c < o.length; c += 16) {
    const d = t, y = n, m = s, O = i;
    t = ve(t, n, s, i, o[c], 7, -680876936), i = ve(i, t, n, s, o[c + 1], 12, -389564586), s = ve(s, i, t, n, o[c + 2], 17, 606105819), n = ve(n, s, i, t, o[c + 3], 22, -1044525330), t = ve(t, n, s, i, o[c + 4], 7, -176418897), i = ve(i, t, n, s, o[c + 5], 12, 1200080426), s = ve(s, i, t, n, o[c + 6], 17, -1473231341), n = ve(n, s, i, t, o[c + 7], 22, -45705983), t = ve(t, n, s, i, o[c + 8], 7, 1770035416), i = ve(i, t, n, s, o[c + 9], 12, -1958414417), s = ve(s, i, t, n, o[c + 10], 17, -42063), n = ve(n, s, i, t, o[c + 11], 22, -1990404162), t = ve(t, n, s, i, o[c + 12], 7, 1804603682), i = ve(i, t, n, s, o[c + 13], 12, -40341101), s = ve(s, i, t, n, o[c + 14], 17, -1502002290), n = ve(n, s, i, t, o[c + 15], 22, 1236535329), t = me(t, n, s, i, o[c + 1], 5, -165796510), i = me(i, t, n, s, o[c + 6], 9, -1069501632), s = me(s, i, t, n, o[c + 11], 14, 643717713), n = me(n, s, i, t, o[c], 20, -373897302), t = me(t, n, s, i, o[c + 5], 5, -701558691), i = me(i, t, n, s, o[c + 10], 9, 38016083), s = me(s, i, t, n, o[c + 15], 14, -660478335), n = me(n, s, i, t, o[c + 4], 20, -405537848), t = me(t, n, s, i, o[c + 9], 5, 568446438), i = me(i, t, n, s, o[c + 14], 9, -1019803690), s = me(s, i, t, n, o[c + 3], 14, -187363961), n = me(n, s, i, t, o[c + 8], 20, 1163531501), t = me(t, n, s, i, o[c + 13], 5, -1444681467), i = me(i, t, n, s, o[c + 2], 9, -51403784), s = me(s, i, t, n, o[c + 7], 14, 1735328473), n = me(n, s, i, t, o[c + 12], 20, -1926607734), t = ge(t, n, s, i, o[c + 5], 4, -378558), i = ge(i, t, n, s, o[c + 8], 11, -2022574463), s = ge(s, i, t, n, o[c + 11], 16, 1839030562), n = ge(n, s, i, t, o[c + 14], 23, -35309556), t = ge(t, n, s, i, o[c + 1], 4, -1530992060), i = ge(i, t, n, s, o[c + 4], 11, 1272893353), s = ge(s, i, t, n, o[c + 7], 16, -155497632), n = ge(n, s, i, t, o[c + 10], 23, -1094730640), t = ge(t, n, s, i, o[c + 13], 4, 681279174), i = ge(i, t, n, s, o[c], 11, -358537222), s = ge(s, i, t, n, o[c + 3], 16, -722521979), n = ge(n, s, i, t, o[c + 6], 23, 76029189), t = ge(t, n, s, i, o[c + 9], 4, -640364487), i = ge(i, t, n, s, o[c + 12], 11, -421815835), s = ge(s, i, t, n, o[c + 15], 16, 530742520), n = ge(n, s, i, t, o[c + 2], 23, -995338651), t = ye(t, n, s, i, o[c], 6, -198630844), i = ye(i, t, n, s, o[c + 7], 10, 1126891415), s = ye(s, i, t, n, o[c + 14], 15, -1416354905), n = ye(n, s, i, t, o[c + 5], 21, -57434055), t = ye(t, n, s, i, o[c + 12], 6, 1700485571), i = ye(i, t, n, s, o[c + 3], 10, -1894986606), s = ye(s, i, t, n, o[c + 10], 15, -1051523), n = ye(n, s, i, t, o[c + 1], 21, -2054922799), t = ye(t, n, s, i, o[c + 8], 6, 1873313359), i = ye(i, t, n, s, o[c + 15], 10, -30611744), s = ye(s, i, t, n, o[c + 6], 15, -1560198380), n = ye(n, s, i, t, o[c + 13], 21, 1309151649), t = ye(t, n, s, i, o[c + 4], 6, -145523070), i = ye(i, t, n, s, o[c + 11], 10, -1120210379), s = ye(s, i, t, n, o[c + 2], 15, 718787259), n = ye(n, s, i, t, o[c + 9], 21, -343485551), t = xe(t, d), n = xe(n, y), s = xe(s, m), i = xe(i, O);
  }
  return [t, n, s, i];
}
function gn(o) {
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
function yn(o, e) {
  return o << e | o >>> 32 - e;
}
function Ge(o, e, t, n, s, i) {
  return xe(yn(xe(xe(e, o), xe(n, i)), s), t);
}
function ve(o, e, t, n, s, i, c) {
  return Ge(e & t | ~e & n, o, e, s, i, c);
}
function me(o, e, t, n, s, i, c) {
  return Ge(e & n | t & ~n, o, e, s, i, c);
}
function ge(o, e, t, n, s, i, c) {
  return Ge(e ^ t ^ n, o, e, s, i, c);
}
function ye(o, e, t, n, s, i, c) {
  return Ge(t ^ (e | ~n), o, e, s, i, c);
}
var wn = dn;
Qe.default = wn;
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.default = void 0;
var _n = bt(Te), En = bt(Qe);
function bt(o) {
  return o && o.__esModule ? o : { default: o };
}
const bn = (0, _n.default)("v3", 48, En.default);
var kn = bn;
qe.default = kn;
var We = {}, He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.default = void 0;
const On = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var Ln = {
  randomUUID: On
};
He.default = Ln;
Object.defineProperty(We, "__esModule", {
  value: !0
});
We.default = void 0;
var dt = kt(He), xn = kt(Ve), Tn = Ae;
function kt(o) {
  return o && o.__esModule ? o : { default: o };
}
function An(o, e, t) {
  if (dt.default.randomUUID && !e && !o)
    return dt.default.randomUUID();
  o = o || {};
  const n = o.random || (o.rng || xn.default)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
    t = t || 0;
    for (let s = 0; s < 16; ++s)
      e[t + s] = n[s];
    return e;
  }
  return (0, Tn.unsafeStringify)(n);
}
var Sn = An;
We.default = Sn;
var Ye = {}, ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.default = void 0;
function Cn(o, e, t, n) {
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
function Nn(o) {
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
    for (let y = 0; y < 16; ++y)
      d[y] = o[c * 64 + y * 4] << 24 | o[c * 64 + y * 4 + 1] << 16 | o[c * 64 + y * 4 + 2] << 8 | o[c * 64 + y * 4 + 3];
    i[c] = d;
  }
  i[s - 1][14] = (o.length - 1) * 8 / Math.pow(2, 32), i[s - 1][14] = Math.floor(i[s - 1][14]), i[s - 1][15] = (o.length - 1) * 8 & 4294967295;
  for (let c = 0; c < s; ++c) {
    const d = new Uint32Array(80);
    for (let I = 0; I < 16; ++I)
      d[I] = i[c][I];
    for (let I = 16; I < 80; ++I)
      d[I] = lt(d[I - 3] ^ d[I - 8] ^ d[I - 14] ^ d[I - 16], 1);
    let y = t[0], m = t[1], O = t[2], C = t[3], M = t[4];
    for (let I = 0; I < 80; ++I) {
      const T = Math.floor(I / 20), N = lt(y, 5) + Cn(T, m, O, C) + M + e[T] + d[I] >>> 0;
      M = C, C = O, O = lt(m, 30) >>> 0, m = y, y = N;
    }
    t[0] = t[0] + y >>> 0, t[1] = t[1] + m >>> 0, t[2] = t[2] + O >>> 0, t[3] = t[3] + C >>> 0, t[4] = t[4] + M >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var Rn = Nn;
ze.default = Rn;
Object.defineProperty(Ye, "__esModule", {
  value: !0
});
Ye.default = void 0;
var In = Ot(Te), Pn = Ot(ze);
function Ot(o) {
  return o && o.__esModule ? o : { default: o };
}
const Bn = (0, In.default)("v5", 80, Pn.default);
var Fn = Bn;
Ye.default = Fn;
var Je = {};
Object.defineProperty(Je, "__esModule", {
  value: !0
});
Je.default = void 0;
var Mn = "00000000-0000-0000-0000-000000000000";
Je.default = Mn;
var Xe = {};
Object.defineProperty(Xe, "__esModule", {
  value: !0
});
Xe.default = void 0;
var Kn = jn(Ce);
function jn(o) {
  return o && o.__esModule ? o : { default: o };
}
function Dn(o) {
  if (!(0, Kn.default)(o))
    throw TypeError("Invalid UUID");
  return parseInt(o.slice(14, 15), 16);
}
var Un = Dn;
Xe.default = Un;
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
      return m.default;
    }
  }), Object.defineProperty(o, "stringify", {
    enumerable: !0,
    get: function() {
      return y.default;
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
  var e = O(Ue), t = O(qe), n = O(We), s = O(Ye), i = O(Je), c = O(Xe), d = O(Ce), y = O(Ae), m = O(Pe);
  function O(C) {
    return C && C.__esModule ? C : { default: C };
  }
})(gt);
var Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.RandomStringConfig = void 0;
class Vn {
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
Ze.RandomStringConfig = Vn;
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
const qn = {}, Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qn
}, Symbol.toStringTag, { value: "Module" })), Gn = /* @__PURE__ */ Ut(Qn);
var Wn = ct && ct.__importDefault || function(o) {
  return o && o.__esModule ? o : { default: o };
};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.RandomStringGenerator = void 0;
const Hn = Wn(Gn);
class Yn {
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
    const n = Hn.default.randomBytes(t), s = e.length - 1;
    let i = "";
    for (; t--; )
      i += e[n[t] & s];
    return i;
  }
}
tt.RandomStringGenerator = Yn;
var nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.StringReplacer = void 0;
class zn {
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
nt.StringReplacer = zn;
Object.defineProperty(De, "__esModule", { value: !0 });
De.Str = void 0;
const vt = gt, Jn = Ze, Xn = et, Zn = tt, ut = nt;
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
    const t = new Jn.RandomStringConfig(), n = new Xn.RandomStringBuilder(t);
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
    return new Zn.RandomStringGenerator(te, e).generate();
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
const ei = De, be = (o) => new ei.Str(o);
je.Str = be;
be.uuid = () => be().uuid();
be.random = (o) => be().random(o);
be.isString = (o) => be().isString(o);
be.isAlphaNumeric = (o) => be().isAlphaNumeric(o);
be.isSymbol = (o) => be().isSymbol(o);
var ti = je.default = be;
const mt = () => process.env.NODE_ENV === "test", ni = () => "id-" + (Math.random() + 1).toString(36).substring(7), Lt = (o) => ti(o).isCamel(), xt = (o) => /^([a-z]{1,})(_[a-z0-9]{1,})*$/.test(o), Tt = (o) => {
  let e = null;
  return Object.entries(o).forEach(([t, n]) => {
    if (n.type === "repeat") {
      const i = Tt(n.questions);
      i && (e = i);
    }
    !Lt(t) && !xt(t) && (e = t);
  }), e;
}, At = (o) => {
  const e = Object.values(o);
  let t = [];
  const n = e.map((s, i) => e.find((c, d) => {
    if (c.type === "repeat" && (t = At(c.questions)), i !== d && c.id === s.id)
      return s;
  })).filter(Boolean);
  return t.length && n.push(...t), n;
}, ii = (o) => {
  var n;
  const e = At(o);
  if (e.length)
    throw new Error(`Duplicated id values: ${(n = e[0]) == null ? void 0 : n.id}`);
  const t = Tt(o);
  if (t)
    throw new Error(`ID must be in camel case: ${t}`);
  return !0;
}, ri = (o, e, t) => o < e ? (mt() || console.warn(`Value ${o} is lower than min ${e}. Returning min.`), e) : o > t ? (mt() || console.warn(`Value ${o} is higher than max ${t}. Returning max.`), t) : o, si = (o, e) => {
  if (e.type === "repeat" && isNaN(o))
    throw new Error("Value of repeat question must be a number");
}, ht = class {
  constructor() {
    le(this, "subscribers");
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
le(Me, "nextId", 0);
const oi = {
  text: !0,
  multipleChoice: !0,
  number: !0,
  date: !0,
  repeat: !0
}, ai = (o, e = !1) => {
  if (!oi[o.type])
    throw new Error("Invalid question type");
  const t = o.id || ni();
  let n;
  return o.type === "text" ? n = ft(o) : o.type === "date" ? n = li(o) : o.type === "multipleChoice" ? n = ui(o) : o.type === "repeat" ? n = ci(o) : n = ft(o), {
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
}), li = (o) => ({
  format: o.format || "dd/mm/yyyy",
  ...ft(o)
}), ui = (o) => {
  var e;
  return {
    value: ((e = o.choices.find((t) => t.checked === !0)) == null ? void 0 : e.label) || "",
    choices: o.choices || [],
    subType: o.subType || "radio"
  };
}, ci = (o) => ({
  value: o.value || "",
  range: o.range || { min: 0, max: 0 },
  questions: o.questions || {}
}), fi = (o, e, t = null) => {
  const n = JSON.parse(JSON.stringify(o));
  return Object.entries(n).forEach(([s, i]) => {
    const c = e + 1;
    i.title && (i.title = i.title.replace(/\<%= index %>/g, c.toString())), t ? i.indexInsideRepeat = t + `.${c}` : i.indexInsideRepeat = c.toString();
  }), n;
};
var Ke = {}, hi = {
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
        function(t, m, s) {
          var i = Array.prototype, c = Object.prototype, d = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\\": "&#92;"
          }, y = /[&"'<>\\]/g, m = t.exports = {};
          function O(E, S) {
            return c.hasOwnProperty.call(E, S);
          }
          m.hasOwnProp = O;
          function C(E) {
            return d[E];
          }
          function M(E, S, j) {
            if (j.Update || (j = new m.TemplateError(j)), j.Update(E), !S) {
              var D = j;
              j = new Error(D.message), j.name = D.name;
            }
            return j;
          }
          m._prettifyError = M;
          function I(E, S, j) {
            var D, q;
            E instanceof Error && (q = E, E = q.name + ": " + q.message), Object.setPrototypeOf ? (D = new Error(E), Object.setPrototypeOf(D, I.prototype)) : (D = this, Object.defineProperty(D, "message", {
              enumerable: !1,
              writable: !0,
              value: E
            })), Object.defineProperty(D, "name", {
              value: "Template render error"
            }), Error.captureStackTrace && Error.captureStackTrace(D, this.constructor);
            var ne;
            if (q) {
              var z = Object.getOwnPropertyDescriptor(q, "stack");
              ne = z && (z.get || function() {
                return z.value;
              }), ne || (ne = function() {
                return q.stack;
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
              value: q
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
          }), m.TemplateError = I;
          function T(E) {
            return E.replace(y, C);
          }
          m.escape = T;
          function N(E) {
            return c.toString.call(E) === "[object Function]";
          }
          m.isFunction = N;
          function r(E) {
            return c.toString.call(E) === "[object Array]";
          }
          m.isArray = r;
          function l(E) {
            return c.toString.call(E) === "[object String]";
          }
          m.isString = l;
          function u(E) {
            return c.toString.call(E) === "[object Object]";
          }
          m.isObject = u;
          function k(E) {
            return E ? typeof E == "string" ? E.split(".") : [E] : [];
          }
          function g(E) {
            var S = k(E);
            return function(D) {
              for (var q = D, ne = 0; ne < S.length; ne++) {
                var z = S[ne];
                if (O(q, z))
                  q = q[z];
                else
                  return;
              }
              return q;
            };
          }
          m.getAttrGetter = g;
          function b(E, S, j) {
            for (var D = {}, q = N(S) ? S : g(S), ne = 0; ne < E.length; ne++) {
              var z = E[ne], ce = q(z, ne);
              if (ce === void 0 && j === !0)
                throw new TypeError('groupby: attribute "' + S + '" resolved to undefined');
              (D[ce] || (D[ce] = [])).push(z);
            }
            return D;
          }
          m.groupBy = b;
          function a(E) {
            return Array.prototype.slice.call(E);
          }
          m.toArray = a;
          function f(E) {
            var S = [];
            if (!E)
              return S;
            for (var j = E.length, D = a(arguments).slice(1), q = -1; ++q < j; )
              A(D, E[q]) === -1 && S.push(E[q]);
            return S;
          }
          m.without = f;
          function v(E, S) {
            for (var j = "", D = 0; D < S; D++)
              j += E;
            return j;
          }
          m.repeat = v;
          function h(E, S, j) {
            if (E != null) {
              if (i.forEach && E.forEach === i.forEach)
                E.forEach(S, j);
              else if (E.length === +E.length)
                for (var D = 0, q = E.length; D < q; D++)
                  S.call(j, E[D], D, E);
            }
          }
          m.each = h;
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
          m.map = p;
          function _(E, S, j) {
            var D = -1;
            function q() {
              D++, D < E.length ? S(E[D], D, q, j) : j();
            }
            q();
          }
          m.asyncIter = _;
          function w(E, S, j) {
            var D = P(E || {}), q = D.length, ne = -1;
            function z() {
              ne++;
              var ce = D[ne];
              ne < q ? S(ce, E[ce], ne, q, z) : j();
            }
            z();
          }
          m.asyncFor = w;
          function A(E, S, j) {
            return Array.prototype.indexOf.call(E || [], S, j);
          }
          m.indexOf = A;
          function P(E) {
            var S = [];
            for (var j in E)
              O(E, j) && S.push(j);
            return S;
          }
          m.keys = P;
          function R(E) {
            return P(E).map(function(S) {
              return [S, E[S]];
            });
          }
          m._entries = R;
          function B(E) {
            return P(E).map(function(S) {
              return E[S];
            });
          }
          m._values = B;
          function K(E, S) {
            return E = E || {}, P(S).forEach(function(j) {
              E[j] = S[j];
            }), E;
          }
          m._assign = m.extend = K;
          function x(E, S) {
            if (r(S) || l(S))
              return S.indexOf(E) !== -1;
            if (u(S))
              return E in S;
            throw new Error('Cannot use "in" operator to search for "' + E + '" in unexpected types.');
          }
          m.inOperator = x;
        },
        /* 1 */
        /***/
        function(t, n, s) {
          function i(l, u) {
            for (var k = 0; k < u.length; k++) {
              var g = u[k];
              g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(l, d(g.key), g);
            }
          }
          function c(l, u, k) {
            return u && i(l.prototype, u), k && i(l, k), Object.defineProperty(l, "prototype", { writable: !1 }), l;
          }
          function d(l) {
            var u = y(l, "string");
            return typeof u == "symbol" ? u : String(u);
          }
          function y(l, u) {
            if (typeof l != "object" || l === null)
              return l;
            var k = l[Symbol.toPrimitive];
            if (k !== void 0) {
              var g = k.call(l, u || "default");
              if (typeof g != "object")
                return g;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (u === "string" ? String : Number)(l);
          }
          function m(l, u) {
            l.prototype = Object.create(u.prototype), l.prototype.constructor = l, O(l, u);
          }
          function O(l, u) {
            return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, b) {
              return g.__proto__ = b, g;
            }, O(l, u);
          }
          var C = s(16), M = s(0);
          function I(l, u) {
            return typeof l != "function" || typeof u != "function" ? u : function() {
              var g = this.parent;
              this.parent = l;
              var b = u.apply(this, arguments);
              return this.parent = g, b;
            };
          }
          function T(l, u, k) {
            k = k || {}, M.keys(k).forEach(function(b) {
              k[b] = I(l.prototype[b], k[b]);
            });
            var g = /* @__PURE__ */ function(b) {
              m(a, b);
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
            return M._assign(g.prototype, k), g;
          }
          var N = /* @__PURE__ */ function() {
            function l() {
              this.init.apply(this, arguments);
            }
            var u = l.prototype;
            return u.init = function() {
            }, l.extend = function(g, b) {
              return typeof g == "object" && (b = g, g = "anonymous"), T(this, g, b);
            }, c(l, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), l;
          }(), r = /* @__PURE__ */ function(l) {
            m(u, l);
            function u() {
              var g, b;
              return b = l.call(this) || this, (g = b).init.apply(g, arguments), b;
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
          }(C);
          t.exports = {
            Obj: N,
            EmitterObj: r
          };
        },
        /* 2 */
        /***/
        function(t, n, s) {
          var i = s(0), c = Array.from, d = typeof Symbol == "function" && Symbol.iterator && typeof c == "function", y = /* @__PURE__ */ function() {
            function p(w, A) {
              this.variables = /* @__PURE__ */ Object.create(null), this.parent = w, this.topLevel = !1, this.isolateWrites = A;
            }
            var _ = p.prototype;
            return _.set = function(A, P, R) {
              var B = A.split("."), K = this.variables, x = this;
              if (R && (x = this.resolve(B[0], !0))) {
                x.set(A, P);
                return;
              }
              for (var E = 0; E < B.length - 1; E++) {
                var S = B[E];
                K[S] || (K[S] = {}), K = K[S];
              }
              K[B[B.length - 1]] = P;
            }, _.get = function(A) {
              var P = this.variables[A];
              return P !== void 0 ? P : null;
            }, _.lookup = function(A) {
              var P = this.parent, R = this.variables[A];
              return R !== void 0 ? R : P && P.lookup(A);
            }, _.resolve = function(A, P) {
              var R = P && this.isolateWrites ? void 0 : this.parent, B = this.variables[A];
              return B !== void 0 ? this : R && R.resolve(A);
            }, _.push = function(A) {
              return new p(this, A);
            }, _.pop = function() {
              return this.parent;
            }, p;
          }();
          function m(p, _, w) {
            return function() {
              for (var P = arguments.length, R = new Array(P), B = 0; B < P; B++)
                R[B] = arguments[B];
              var K = I(R), x, E = M(R);
              if (K > p.length)
                x = R.slice(0, p.length), R.slice(x.length, K).forEach(function(D, q) {
                  q < _.length && (E[_[q]] = D);
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
          function M(p) {
            var _ = p.length;
            if (_) {
              var w = p[_ - 1];
              if (C(w))
                return w;
            }
            return {};
          }
          function I(p) {
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
          function N(p, _) {
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
          function u(p, _, w) {
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
              i.asyncIter(p, function(B, K, x) {
                switch (_) {
                  case 1:
                    w(B, K, P, x);
                    break;
                  case 2:
                    w(B[0], B[1], K, P, x);
                    break;
                  case 3:
                    w(B[0], B[1], B[2], K, P, x);
                    break;
                  default:
                    B.push(K, P, x), w.apply(this, B);
                }
              }, A);
            } else
              i.asyncFor(p, function(B, K, x, E, S) {
                w(B, K, x, E, S);
              }, A);
          }
          function v(p, _, w, A) {
            var P = 0, R, B;
            function K(q, ne) {
              P++, B[q] = ne, P === R && A(null, B.join(""));
            }
            if (i.isArray(p))
              if (R = p.length, B = new Array(R), R === 0)
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
              if (R = S.length, B = new Array(R), R === 0)
                A(null, "");
              else
                for (var j = 0; j < S.length; j++) {
                  var D = S[j];
                  w(D, p[D], j, R, K);
                }
            }
          }
          function h(p) {
            return typeof p != "object" || p === null || i.isArray(p) ? p : d && Symbol.iterator in p ? c(p) : p;
          }
          t.exports = {
            Frame: y,
            makeMacro: m,
            makeKeywordArgs: O,
            numArgs: I,
            suppressValue: l,
            ensureDefined: u,
            memberLookup: k,
            contextOrFrameLookup: b,
            callWrap: g,
            handleError: a,
            isArray: i.isArray,
            keys: i.keys,
            SafeString: T,
            copySafeness: N,
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
          function i(W, H) {
            for (var re = 0; re < H.length; re++) {
              var ie = H[re];
              ie.enumerable = ie.enumerable || !1, ie.configurable = !0, "value" in ie && (ie.writable = !0), Object.defineProperty(W, d(ie.key), ie);
            }
          }
          function c(W, H, re) {
            return H && i(W.prototype, H), re && i(W, re), Object.defineProperty(W, "prototype", { writable: !1 }), W;
          }
          function d(W) {
            var H = y(W, "string");
            return typeof H == "symbol" ? H : String(H);
          }
          function y(W, H) {
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
          function m(W, H) {
            W.prototype = Object.create(H.prototype), W.prototype.constructor = W, O(W, H);
          }
          function O(W, H) {
            return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(ie, oe) {
              return ie.__proto__ = oe, ie;
            }, O(W, H);
          }
          var C = s(1), M = C.Obj;
          function I(W, H, re) {
            W instanceof H && re.push(W), W instanceof T && W.findAll(H, re);
          }
          var T = /* @__PURE__ */ function(W) {
            m(H, W);
            function H() {
              return W.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, fe) {
              for (var _e = arguments, Se = this, Ie = arguments.length, Ft = new Array(Ie > 2 ? Ie - 2 : 0), Be = 2; Be < Ie; Be++)
                Ft[Be - 2] = arguments[Be];
              this.lineno = oe, this.colno = fe, this.fields.forEach(function(Mt, Kt) {
                var rt = _e[Kt + 2];
                rt === void 0 && (rt = null), Se[Mt] = rt;
              });
            }, re.findAll = function(oe, fe) {
              var _e = this;
              return fe = fe || [], this instanceof r ? this.children.forEach(function(Se) {
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
          }(M), N = /* @__PURE__ */ function(W) {
            m(H, W);
            function H() {
              return W.apply(this, arguments) || this;
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
          }(T), r = /* @__PURE__ */ function(W) {
            m(H, W);
            function H() {
              return W.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, fe, _e) {
              W.prototype.init.call(this, oe, fe, _e || []);
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
          }(T), l = r.extend("Root"), u = N.extend("Literal"), k = N.extend("Symbol"), g = r.extend("Group"), b = r.extend("Array"), a = T.extend("Pair", {
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
          }), B = R.extend("Caller"), K = T.extend("Import", {
            fields: ["template", "target", "withContext"]
          }), x = /* @__PURE__ */ function(W) {
            m(H, W);
            function H() {
              return W.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, fe, _e, Se, Ie) {
              W.prototype.init.call(this, oe, fe, _e, Se || new r(), Ie);
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
          }), D = f.extend("KeywordArgs"), q = T.extend("Block", {
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
          }), $ = T.extend("Case", {
            fields: ["cond", "body"]
          }), G = r.extend("Output"), Q = T.extend("Capture", {
            fields: ["body"]
          }), se = u.extend("TemplateData"), we = T.extend("UnaryOp", {
            fields: ["target"]
          }), he = T.extend("BinOp", {
            fields: ["left", "right"]
          }), Oe = he.extend("In"), L = he.extend("Is"), F = he.extend("Or"), V = he.extend("And"), U = we.extend("Not"), Y = he.extend("Add"), J = he.extend("Concat"), ae = he.extend("Sub"), ee = he.extend("Mul"), ue = he.extend("Div"), Ee = he.extend("FloorDiv"), ke = he.extend("Mod"), Le = he.extend("Pow"), Nt = we.extend("Neg"), Rt = we.extend("Pos"), It = T.extend("Compare", {
            fields: ["expr", "ops"]
          }), Pt = T.extend("CompareOperand", {
            fields: ["expr", "type"]
          }), it = T.extend("CallExtension", {
            init: function(H, re, ie, oe) {
              this.parent(), this.extName = H.__name || H, this.prop = re, this.args = ie || new r(), this.contentArgs = oe || [], this.autoescape = H.autoescape;
            },
            fields: ["extName", "prop", "args", "contentArgs"]
          }), Bt = it.extend("CallExtensionAsync");
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
          function Re(W, H) {
            if (H = H || 0, Ne(W.typename + ": ", H), W instanceof r)
              Ne(`
`), W.children.forEach(function(oe) {
                Re(oe, H + 2);
              });
            else if (W instanceof it)
              Ne(W.extName + "." + W.prop + `
`), W.args && Re(W.args, H + 2), W.contentArgs && W.contentArgs.forEach(function(oe) {
                Re(oe, H + 2);
              });
            else {
              var re = [], ie = null;
              W.iterFields(function(oe, fe) {
                oe instanceof T ? re.push([fe, oe]) : (ie = ie || {}, ie[fe] = oe);
              }), ie ? Ne(JSON.stringify(ie, null, 2) + `
`, null, !0) : Ne(`
`), re.forEach(function(oe) {
                var fe = oe[0], _e = oe[1];
                Ne("[" + fe + "] =>", H + 2), Re(_e, H + 4);
              });
            }
          }
          t.exports = {
            Node: T,
            Root: l,
            NodeList: r,
            Value: N,
            Literal: u,
            Symbol: k,
            Group: g,
            Array: b,
            Pair: a,
            Dict: f,
            Output: G,
            Capture: Q,
            TemplateData: se,
            If: h,
            IfAsync: p,
            InlineIf: _,
            For: w,
            AsyncEach: A,
            AsyncAll: P,
            Macro: R,
            Caller: B,
            Import: K,
            FromImport: x,
            FunCall: E,
            Filter: S,
            FilterAsync: j,
            KeywordArgs: D,
            Block: q,
            Super: ne,
            Extends: ce,
            Include: pe,
            Set: X,
            Switch: Z,
            Case: $,
            LookupVal: v,
            BinOp: he,
            In: Oe,
            Is: L,
            Or: F,
            And: V,
            Not: U,
            Add: Y,
            Concat: J,
            Sub: ae,
            Mul: ee,
            Div: ue,
            FloorDiv: Ee,
            Mod: ke,
            Pow: Le,
            Neg: Nt,
            Pos: Rt,
            Compare: It,
            CompareOperand: Pt,
            CallExtension: it,
            CallExtensionAsync: Bt,
            printNodes: Re
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
          var d = s(8), y = s(17), m = s(3), O = s(0), C = O.TemplateError, M = s(2), I = M.Frame, T = s(1), N = T.Obj, r = {
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
              this.assertType(a, m.Literal, m.Symbol, m.Group, m.Array, m.Dict, m.FunCall, m.Caller, m.Filter, m.LookupVal, m.Compare, m.InlineIf, m.In, m.Is, m.And, m.Or, m.Not, m.Add, m.Concat, m.Sub, m.Mul, m.Div, m.FloorDiv, m.Mod, m.Pow, m.Neg, m.Pos, m.Compare, m.NodeList), this.compile(a, f);
            }, g.assertType = function(a) {
              for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), h = 1; h < f; h++)
                v[h - 1] = arguments[h];
              v.some(function(p) {
                return a instanceof p;
              }) || this.fail("assertType: invalid type: " + a.typename, a.lineno, a.colno);
            }, g.compileCallExtension = function(a, f, v) {
              var h = this, p = a.args, _ = a.contentArgs, w = typeof a.autoescape == "boolean" ? a.autoescape : !0;
              if (v || this._emit(this.buffer + " += runtime.suppressValue("), this._emit('env.getExtension("' + a.extName + '")["' + a.prop + '"]('), this._emit("context"), (p || _) && this._emit(","), p && (p instanceof m.NodeList || this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"), p.children.forEach(function(P, R) {
                h._compileExpression(P, f), (R !== p.children.length - 1 || _.length) && h._emit(",");
              })), _.length && _.forEach(function(P, R) {
                if (R > 0 && h._emit(","), P) {
                  h._emitLine("function(cb) {"), h._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");
                  var B = h._pushBuffer();
                  h._withScopedSyntax(function() {
                    h.compile(P, f), h._emitLine("cb(null, " + B + ");");
                  }), h._popBuffer(), h._emitLine("return " + B + ";"), h._emitLine("}");
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
              v instanceof m.Symbol ? v = new m.Literal(v.lineno, v.colno, v.value) : v instanceof m.Literal && typeof v.value == "string" || this.fail("compilePair: Dict keys must be strings or names", v.lineno, v.colno), this.compile(v, f), this._emit(": "), this._compileExpression(h, f);
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
              this.assertType(v, m.Symbol), this._emit('env.getFilter("' + v.value + '").call(context, '), this._compileAggregate(a.args, f), this._emit(")");
            }, g.compileFilterAsync = function(a, f) {
              var v = a.name, h = a.symbol.value;
              this.assertType(v, m.Symbol), f.set(h, h), this._emit('env.getFilter("' + v.value + '").call(context, '), this._compileAggregate(a.args, f), this._emitLine(", " + this._makeCallback(h)), this._addScopeLevel();
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
              if (f = f.push(), this._emitLine("frame = frame.push();"), this._emit("var " + _ + " = "), this._compileExpression(a.arr, f), this._emitLine(";"), this._emit("if(" + _ + ") {"), this._emitLine(_ + " = runtime.fromIterator(" + _ + ");"), a.name instanceof m.Array) {
                this._emitLine("var " + h + ";"), this._emitLine("if(runtime.isArray(" + _ + ")) {"), this._emitLine("var " + p + " = " + _ + ".length;"), this._emitLine("for(" + h + "=0; " + h + " < " + _ + ".length; " + h + "++) {"), a.name.children.forEach(function(x, E) {
                  var S = v._tmpid();
                  v._emitLine("var " + S + " = " + _ + "[" + h + "][" + E + "];"), v._emitLine('frame.set("' + x + '", ' + _ + "[" + h + "][" + E + "]);"), f.set(a.name.children[E].value, S);
                }), this._emitLoopBindings(a, _, h, p), this._withScopedSyntax(function() {
                  v.compile(a.body, f);
                }), this._emitLine("}"), this._emitLine("} else {");
                var w = a.name.children, A = w[0], P = w[1], R = this._tmpid(), B = this._tmpid();
                f.set(A.value, R), f.set(P.value, B), this._emitLine(h + " = -1;"), this._emitLine("var " + p + " = runtime.keys(" + _ + ").length;"), this._emitLine("for(var " + R + " in " + _ + ") {"), this._emitLine(h + "++;"), this._emitLine("var " + B + " = " + _ + "[" + R + "];"), this._emitLine('frame.set("' + A.value + '", ' + R + ");"), this._emitLine('frame.set("' + P.value + '", ' + B + ");"), this._emitLoopBindings(a, _, h, p), this._withScopedSyntax(function() {
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
              if (f = f.push(), this._emitLine("frame = frame.push();"), this._emit("var " + w + " = runtime.fromIterator("), this._compileExpression(a.arr, f), this._emitLine(");"), a.name instanceof m.Array) {
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
              var B = this._tmpid();
              this._emitLine("}, " + this._makeCallback(B)), this._addScopeLevel(), v && this._emitLine(this.buffer + " += " + B + ";"), a.else_ && (this._emitLine("if (!" + w + ".length) {"), this.compile(a.else_, f), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, g.compileAsyncEach = function(a, f) {
              this._compileAsyncLoop(a, f);
            }, g.compileAsyncAll = function(a, f) {
              this._compileAsyncLoop(a, f, !0);
            }, g._compileMacro = function(a, f) {
              var v = this, h = [], p = null, _ = "macro_" + this._tmpid(), w = f !== void 0;
              a.args.children.forEach(function(x, E) {
                E === a.args.children.length - 1 && x instanceof m.Dict ? p = x : (v.assertType(x, m.Symbol), h.push(x));
              });
              var A = [].concat(h.map(function(x) {
                return "l_" + x.value;
              }), ["kwargs"]), P = h.map(function(x) {
                return '"' + x.value + '"';
              }), R = (p && p.children || []).map(function(x) {
                return '"' + x.key.value + '"';
              }), B;
              w ? B = f.push(!0) : B = new I(), this._emitLines("var " + _ + " = runtime.makeMacro(", "[" + P.join(", ") + "], ", "[" + R.join(", ") + "], ", "function (" + A.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (w ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'), h.forEach(function(x) {
                v._emitLine('frame.set("' + x.value + '", l_' + x.value + ");"), B.set(x.value, "l_" + x.value);
              }), p && p.children.forEach(function(x) {
                var E = x.key.value;
                v._emit('frame.set("' + E + '", '), v._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + E + '")'), v._emit(' ? kwargs["' + E + '"] : '), v._compileExpression(x.value, B), v._emit(");");
              });
              var K = this._pushBuffer();
              return this._withScopedSyntax(function() {
                v.compile(a.body, B);
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
                p instanceof m.Pair ? (_ = p.key.value, w = p.value.value) : (_ = p.value, w = _), v._emitLine("if(Object.prototype.hasOwnProperty.call(" + h + ', "' + _ + '")) {'), v._emitLine("var " + A + " = " + h + "." + _ + ";"), v._emitLine("} else {"), v._emitLine(`cb(new Error("cannot import '` + _ + `'")); return;`), v._emitLine("}"), f.set(w, A), f.parent ? v._emitLine('frame.set("' + w + '", ' + A + ");") : v._emitLine('context.setVariable("' + w + '", ' + A + ");");
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
                p instanceof m.TemplateData ? p.value && (v._emit(v.buffer + " += "), v.compileLiteral(p, f), v._emitLine(";")) : (v._emit(v.buffer + " += runtime.suppressValue("), v.throwOnUndefined && v._emit("runtime.ensureDefined("), v.compile(p, f), v.throwOnUndefined && v._emit("," + a.lineno + "," + a.colno + ")"), v._emit(`, env.opts.autoescape);
`));
              });
            }, g.compileRoot = function(a, f) {
              var v = this;
              f && this.fail("compileRoot: root node can't have frame"), f = new I(), this._emitFuncBegin(a, "root"), this._emitLine("var parentTemplate = null;"), this._compileChildren(a, f), this._emitLine("if(parentTemplate) {"), this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"), this._emitLine("} else {"), this._emitLine("cb(null, " + this.buffer + ");"), this._emitLine("}"), this._emitFuncEnd(!0), this.inBlock = !0;
              var h = [], p = a.findAll(m.Block);
              p.forEach(function(_, w) {
                var A = _.name.value;
                if (h.indexOf(A) !== -1)
                  throw new Error('Block "' + A + '" defined more than once.');
                h.push(A), v._emitFuncBegin(_, "b_" + A);
                var P = new I();
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
          }(N);
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
              return v.compile(y.transform(d.parse(p, b, f), g, a)), v.getCode();
            },
            Compiler: l
          };
        },
        /* 6 */
        /***/
        function(t, n, s) {
          function i(O, C) {
            O.prototype = Object.create(C.prototype), O.prototype.constructor = O, c(O, C);
          }
          function c(O, C) {
            return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(I, T) {
              return I.__proto__ = T, I;
            }, c(O, C);
          }
          var d = s(4), y = s(1), m = y.EmitterObj;
          t.exports = /* @__PURE__ */ function(O) {
            i(C, O);
            function C() {
              return O.apply(this, arguments) || this;
            }
            var M = C.prototype;
            return M.resolve = function(T, N) {
              return d.resolve(d.dirname(T), N);
            }, M.isRelative = function(T) {
              return T.indexOf("./") === 0 || T.indexOf("../") === 0;
            }, C;
          }(m);
        },
        /* 7 */
        /***/
        function(t, n, s) {
          function i(P, R) {
            P.prototype = Object.create(R.prototype), P.prototype.constructor = P, c(P, R);
          }
          function c(P, R) {
            return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(K, x) {
              return K.__proto__ = x, K;
            }, c(P, R);
          }
          var d = s(12), y = s(15), m = s(0), O = s(5), C = s(18), M = s(10), I = M.FileSystemLoader, T = M.WebLoader, N = M.PrecompiledLoader, r = s(20), l = s(21), u = s(1), k = u.Obj, g = u.EmitterObj, b = s(2), a = b.handleError, f = b.Frame, v = s(22);
          function h(P, R, B) {
            d(function() {
              P(R, B);
            });
          }
          var p = {
            type: "code",
            obj: {
              root: function(R, B, K, x, E) {
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
            var B = R.prototype;
            return B.init = function(x, E) {
              var S = this;
              E = this.opts = E || {}, this.opts.dev = !!E.dev, this.opts.autoescape = E.autoescape != null ? E.autoescape : !0, this.opts.throwOnUndefined = !!E.throwOnUndefined, this.opts.trimBlocks = !!E.trimBlocks, this.opts.lstripBlocks = !!E.lstripBlocks, this.loaders = [], x ? this.loaders = m.isArray(x) ? x : [x] : I ? this.loaders = [new I("views")] : T && (this.loaders = [new T("/views")]), typeof window < "u" && window.nunjucksPrecompiled && this.loaders.unshift(new N(window.nunjucksPrecompiled)), this._initLoaders(), this.globals = l(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], m._entries(C).forEach(function(j) {
                var D = j[0], q = j[1];
                return S.addFilter(D, q);
              }), m._entries(r).forEach(function(j) {
                var D = j[0], q = j[1];
                return S.addTest(D, q);
              });
            }, B._initLoaders = function() {
              var x = this;
              this.loaders.forEach(function(E) {
                E.cache = {}, typeof E.on == "function" && (E.on("update", function(S, j) {
                  E.cache[S] = null, x.emit("update", S, j, E);
                }), E.on("load", function(S, j) {
                  x.emit("load", S, j, E);
                }));
              });
            }, B.invalidateCache = function() {
              this.loaders.forEach(function(x) {
                x.cache = {};
              });
            }, B.addExtension = function(x, E) {
              return E.__name = x, this.extensions[x] = E, this.extensionsList.push(E), this;
            }, B.removeExtension = function(x) {
              var E = this.getExtension(x);
              E && (this.extensionsList = m.without(this.extensionsList, E), delete this.extensions[x]);
            }, B.getExtension = function(x) {
              return this.extensions[x];
            }, B.hasExtension = function(x) {
              return !!this.extensions[x];
            }, B.addGlobal = function(x, E) {
              return this.globals[x] = E, this;
            }, B.getGlobal = function(x) {
              if (typeof this.globals[x] > "u")
                throw new Error("global not found: " + x);
              return this.globals[x];
            }, B.addFilter = function(x, E, S) {
              var j = E;
              return S && this.asyncFilters.push(x), this.filters[x] = j, this;
            }, B.getFilter = function(x) {
              if (!this.filters[x])
                throw new Error("filter not found: " + x);
              return this.filters[x];
            }, B.addTest = function(x, E) {
              return this.tests[x] = E, this;
            }, B.getTest = function(x) {
              if (!this.tests[x])
                throw new Error("test not found: " + x);
              return this.tests[x];
            }, B.resolveTemplate = function(x, E, S) {
              var j = x.isRelative && E ? x.isRelative(S) : !1;
              return j && x.resolve ? x.resolve(E, S) : S;
            }, B.getTemplate = function(x, E, S, j, D) {
              var q = this, ne = this, z = null;
              if (x && x.raw && (x = x.raw), m.isFunction(S) && (D = S, S = null, E = E || !1), m.isFunction(E) && (D = E, E = !1), x instanceof A)
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
              var X, Z = function(G, Q) {
                if (!Q && !G && !j && (G = new Error("template not found: " + x)), G)
                  if (D) {
                    D(G);
                    return;
                  } else
                    throw G;
                var se;
                Q ? (se = new A(Q.src, q, Q.path, E), Q.noCache || (Q.loader.cache[x] = se)) : se = new A(p, q, "", E), D ? D(null, se) : X = se;
              };
              return m.asyncIter(this.loaders, function($, G, Q, se) {
                function we(he, Oe) {
                  he ? se(he) : Oe ? (Oe.loader = $, se(null, Oe)) : Q();
                }
                x = ne.resolveTemplate($, S, x), $.async ? $.getSource(x, we) : we(null, $.getSource(x));
              }, Z), X;
            }, B.express = function(x) {
              return v(this, x);
            }, B.render = function(x, E, S) {
              m.isFunction(E) && (S = E, E = null);
              var j = null;
              return this.getTemplate(x, function(D, q) {
                if (D && S)
                  h(S, D);
                else {
                  if (D)
                    throw D;
                  j = q.render(E, S);
                }
              }), j;
            }, B.renderString = function(x, E, S, j) {
              m.isFunction(S) && (j = S, S = {}), S = S || {};
              var D = new A(x, this, S.path);
              return D.render(E, j);
            }, B.waterfall = function(x, E, S) {
              return y(x, E, S);
            }, R;
          }(g), w = /* @__PURE__ */ function(P) {
            i(R, P);
            function R() {
              return P.apply(this, arguments) || this;
            }
            var B = R.prototype;
            return B.init = function(x, E, S) {
              var j = this;
              this.env = S || new _(), this.ctx = m.extend({}, x), this.blocks = {}, this.exported = [], m.keys(E).forEach(function(D) {
                j.addBlock(D, E[D]);
              });
            }, B.lookup = function(x) {
              return x in this.env.globals && !(x in this.ctx) ? this.env.globals[x] : this.ctx[x];
            }, B.setVariable = function(x, E) {
              this.ctx[x] = E;
            }, B.getVariables = function() {
              return this.ctx;
            }, B.addBlock = function(x, E) {
              return this.blocks[x] = this.blocks[x] || [], this.blocks[x].push(E), this;
            }, B.getBlock = function(x) {
              if (!this.blocks[x])
                throw new Error('unknown block "' + x + '"');
              return this.blocks[x][0];
            }, B.getSuper = function(x, E, S, j, D, q) {
              var ne = m.indexOf(this.blocks[E] || [], S), z = this.blocks[E][ne + 1], ce = this;
              if (ne === -1 || !z)
                throw new Error('no super block available for "' + E + '"');
              z(x, ce, j, D, q);
            }, B.addExport = function(x) {
              this.exported.push(x);
            }, B.getExported = function() {
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
            var B = R.prototype;
            return B.init = function(x, E, S, j) {
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
              if (this.path = S, j)
                try {
                  this._compile();
                } catch (D) {
                  throw m._prettifyError(this.path, this.env.opts.dev, D);
                }
              else
                this.compiled = !1;
            }, B.render = function(x, E, S) {
              var j = this;
              typeof x == "function" ? (S = x, x = {}) : typeof E == "function" && (S = E, E = null);
              var D = !E;
              try {
                this.compile();
              } catch (X) {
                var q = m._prettifyError(this.path, this.env.opts.dev, X);
                if (S)
                  return h(S, q);
                throw q;
              }
              var ne = new w(x || {}, this.blocks, this.env), z = E ? E.push(!0) : new f();
              z.topLevel = !0;
              var ce = null, pe = !1;
              return this.rootRenderFunc(this.env, ne, z, b, function(X, Z) {
                if (!(pe && S && typeof Z < "u"))
                  if (X && (X = m._prettifyError(j.path, j.env.opts.dev, X), pe = !0), S)
                    D ? h(S, X, Z) : S(X, Z);
                  else {
                    if (X)
                      throw X;
                    ce = Z;
                  }
              }), ce;
            }, B.getExported = function(x, E, S) {
              typeof x == "function" && (S = x, x = {}), typeof E == "function" && (S = E, E = null);
              try {
                this.compile();
              } catch (q) {
                if (S)
                  return S(q);
                throw q;
              }
              var j = E ? E.push() : new f();
              j.topLevel = !0;
              var D = new w(x || {}, this.blocks, this.env);
              this.rootRenderFunc(this.env, D, j, b, function(q) {
                q ? S(q, null) : S(null, D.getExported());
              });
            }, B.compile = function() {
              this.compiled || this._compile();
            }, B._compile = function() {
              var x;
              if (this.tmplProps)
                x = this.tmplProps;
              else {
                var E = O.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), S = new Function(E);
                x = S();
              }
              this.blocks = this._getBlocks(x), this.rootRenderFunc = x.root, this.compiled = !0;
            }, B._getBlocks = function(x) {
              var E = {};
              return m.keys(x).forEach(function(S) {
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
        function(t, n, s) {
          function i(M, I) {
            M.prototype = Object.create(I.prototype), M.prototype.constructor = M, c(M, I);
          }
          function c(M, I) {
            return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(N, r) {
              return N.__proto__ = r, N;
            }, c(M, I);
          }
          var d = s(9), y = s(3), m = s(1).Obj, O = s(0), C = /* @__PURE__ */ function(M) {
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
              return l !== void 0 && (l += 1), u !== void 0 && (u += 1), new O.TemplateError(r, l, u);
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
              this.skipSymbol("for") ? (l = new y.For(r.lineno, r.colno), u = "endfor") : this.skipSymbol("asyncEach") ? (l = new y.AsyncEach(r.lineno, r.colno), u = "endeach") : this.skipSymbol("asyncAll") ? (l = new y.AsyncAll(r.lineno, r.colno), u = "endall") : this.fail("parseFor: expected for{Async}", r.lineno, r.colno), l.name = this.parsePrimary(), l.name instanceof y.Symbol || this.fail("parseFor: variable name expected for loop");
              var k = this.peekToken().type;
              if (k === d.TOKEN_COMMA) {
                var g = l.name;
                for (l.name = new y.Array(g.lineno, g.colno), l.name.addChild(g); this.skip(d.TOKEN_COMMA); ) {
                  var b = this.parsePrimary();
                  l.name.addChild(b);
                }
              }
              return this.skipSymbol("in") || this.fail('parseFor: expected "in" keyword for loop', r.lineno, r.colno), l.arr = this.parseExpression(), this.advanceAfterBlockEnd(r.value), l.body = this.parseUntilBlocks(u, "else"), this.skipSymbol("else") && (this.advanceAfterBlockEnd("else"), l.else_ = this.parseUntilBlocks(u)), this.advanceAfterBlockEnd(), l;
            }, T.parseMacro = function() {
              var r = this.peekToken();
              this.skipSymbol("macro") || this.fail("expected macro");
              var l = this.parsePrimary(!0), u = this.parseSignature(), k = new y.Macro(r.lineno, r.colno, l, u);
              return this.advanceAfterBlockEnd(r.value), k.body = this.parseUntilBlocks("endmacro"), this.advanceAfterBlockEnd(), k;
            }, T.parseCall = function() {
              var r = this.peekToken();
              this.skipSymbol("call") || this.fail("expected call");
              var l = this.parseSignature(!0) || new y.NodeList(), u = this.parsePrimary();
              this.advanceAfterBlockEnd(r.value);
              var k = this.parseUntilBlocks("endcall");
              this.advanceAfterBlockEnd();
              var g = new y.Symbol(r.lineno, r.colno, "caller"), b = new y.Caller(r.lineno, r.colno, g, l, k), a = u.args.children;
              a[a.length - 1] instanceof y.KeywordArgs || a.push(new y.KeywordArgs());
              var f = a[a.length - 1];
              return f.addChild(new y.Pair(r.lineno, r.colno, g, b)), new y.Output(r.lineno, r.colno, [u]);
            }, T.parseWithContext = function() {
              var r = this.peekToken(), l = null;
              return this.skipSymbol("with") ? l = !0 : this.skipSymbol("without") && (l = !1), l !== null && (this.skipSymbol("context") || this.fail("parseFrom: expected context after with/without", r.lineno, r.colno)), l;
            }, T.parseImport = function() {
              var r = this.peekToken();
              this.skipSymbol("import") || this.fail("parseImport: expected import", r.lineno, r.colno);
              var l = this.parseExpression();
              this.skipSymbol("as") || this.fail('parseImport: expected "as" keyword', r.lineno, r.colno);
              var u = this.parseExpression(), k = this.parseWithContext(), g = new y.Import(r.lineno, r.colno, l, u, k);
              return this.advanceAfterBlockEnd(r.value), g;
            }, T.parseFrom = function() {
              var r = this.peekToken();
              this.skipSymbol("from") || this.fail("parseFrom: expected from");
              var l = this.parseExpression();
              this.skipSymbol("import") || this.fail("parseFrom: expected import", r.lineno, r.colno);
              for (var u = new y.NodeList(), k; ; ) {
                var g = this.peekToken();
                if (g.type === d.TOKEN_BLOCK_END) {
                  u.children.length || this.fail("parseFrom: Expected at least one import name", r.lineno, r.colno), g.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0), this.nextToken();
                  break;
                }
                u.children.length > 0 && !this.skip(d.TOKEN_COMMA) && this.fail("parseFrom: expected comma", r.lineno, r.colno);
                var b = this.parsePrimary();
                if (b.value.charAt(0) === "_" && this.fail("parseFrom: names starting with an underscore cannot be imported", b.lineno, b.colno), this.skipSymbol("as")) {
                  var a = this.parsePrimary();
                  u.addChild(new y.Pair(b.lineno, b.colno, b, a));
                } else
                  u.addChild(b);
                k = this.parseWithContext();
              }
              return new y.FromImport(r.lineno, r.colno, l, u, k);
            }, T.parseBlock = function() {
              var r = this.peekToken();
              this.skipSymbol("block") || this.fail("parseBlock: expected block", r.lineno, r.colno);
              var l = new y.Block(r.lineno, r.colno);
              l.name = this.parsePrimary(), l.name instanceof y.Symbol || this.fail("parseBlock: variable name expected", r.lineno, r.colno), this.advanceAfterBlockEnd(r.value), l.body = this.parseUntilBlocks("endblock"), this.skipSymbol("endblock"), this.skipSymbol(l.name.value);
              var u = this.peekToken();
              return u || this.fail("parseBlock: expected endblock, got end of file"), this.advanceAfterBlockEnd(u.value), l;
            }, T.parseExtends = function() {
              var r = "extends", l = this.peekToken();
              this.skipSymbol(r) || this.fail("parseTemplateRef: expected " + r);
              var u = new y.Extends(l.lineno, l.colno);
              return u.template = this.parseExpression(), this.advanceAfterBlockEnd(l.value), u;
            }, T.parseInclude = function() {
              var r = "include", l = this.peekToken();
              this.skipSymbol(r) || this.fail("parseInclude: expected " + r);
              var u = new y.Include(l.lineno, l.colno);
              return u.template = this.parseExpression(), this.skipSymbol("ignore") && this.skipSymbol("missing") && (u.ignoreMissing = !0), this.advanceAfterBlockEnd(l.value), u;
            }, T.parseIf = function() {
              var r = this.peekToken(), l;
              this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif") ? l = new y.If(r.lineno, r.colno) : this.skipSymbol("ifAsync") ? l = new y.IfAsync(r.lineno, r.colno) : this.fail("parseIf: expected if, elif, or elseif", r.lineno, r.colno), l.cond = this.parseExpression(), this.advanceAfterBlockEnd(r.value), l.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
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
              for (var l = new y.Set(r.lineno, r.colno, []), u; (u = this.parsePrimary()) && (l.targets.push(u), !!this.skip(d.TOKEN_COMMA)); )
                ;
              return this.skipValue(d.TOKEN_OPERATOR, "=") ? (l.value = this.parseExpression(), this.advanceAfterBlockEnd(r.value)) : this.skip(d.TOKEN_BLOCK_END) ? (l.body = new y.Capture(r.lineno, r.colno, this.parseUntilBlocks("endset")), l.value = null, this.advanceAfterBlockEnd()) : this.fail("parseSet: expected = or block end in set tag", r.lineno, r.colno), l;
            }, T.parseSwitch = function() {
              var r = "switch", l = "endswitch", u = "case", k = "default", g = this.peekToken();
              !this.skipSymbol(r) && !this.skipSymbol(u) && !this.skipSymbol(k) && this.fail('parseSwitch: expected "switch," "case" or "default"', g.lineno, g.colno);
              var b = this.parseExpression();
              this.advanceAfterBlockEnd(r), this.parseUntilBlocks(u, k, l);
              var a = this.peekToken(), f = [], v;
              do {
                this.skipSymbol(u);
                var h = this.parseExpression();
                this.advanceAfterBlockEnd(r);
                var p = this.parseUntilBlocks(u, k, l);
                f.push(new y.Case(a.line, a.col, h, p)), a = this.peekToken();
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
              return new y.Switch(g.lineno, g.colno, b, f, v);
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
                    for (var u = 0; u < this.extensions.length; u++) {
                      var k = this.extensions[u];
                      if (O.indexOf(k.tags || [], r.value) !== -1)
                        return k.parse(this, y, d);
                    }
                  this.fail("unknown block tag: " + r.value, r.lineno, r.colno);
              }
              return l;
            }, T.parseRaw = function(r) {
              r = r || "raw";
              for (var l = "end" + r, u = new RegExp("([\\s\\S]*?){%\\s*(" + r + "|" + l + ")\\s*(?=%})%}"), k = 1, g = "", b = null, a = this.advanceAfterBlockEnd(); (b = this.tokens._extractRegex(u)) && k > 0; ) {
                var f = b[0], v = b[1], h = b[2];
                h === r ? k += 1 : h === l && (k -= 1), k === 0 ? (g += v, this.tokens.backN(f.length - v.length)) : g += f;
              }
              return new y.Output(a.lineno, a.colno, [new y.TemplateData(a.lineno, a.colno, g)]);
            }, T.parsePostfix = function(r) {
              for (var l, u = this.peekToken(); u; ) {
                if (u.type === d.TOKEN_LEFT_PAREN)
                  r = new y.FunCall(u.lineno, u.colno, r, this.parseSignature());
                else if (u.type === d.TOKEN_LEFT_BRACKET)
                  l = this.parseAggregate(), l.children.length > 1 && this.fail("invalid index"), r = new y.LookupVal(u.lineno, u.colno, r, l.children[0]);
                else if (u.type === d.TOKEN_OPERATOR && u.value === ".") {
                  this.nextToken();
                  var k = this.nextToken();
                  k.type !== d.TOKEN_SYMBOL && this.fail("expected name as lookup value, got " + k.value, k.lineno, k.colno), l = new y.Literal(k.lineno, k.colno, k.value), r = new y.LookupVal(u.lineno, u.colno, r, l);
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
                r = new y.InlineIf(r.lineno, r.colno), r.body = u, r.cond = l, this.skipSymbol("else") ? r.else_ = this.parseOr() : r.else_ = null;
              }
              return r;
            }, T.parseOr = function() {
              for (var r = this.parseAnd(); this.skipSymbol("or"); ) {
                var l = this.parseAnd();
                r = new y.Or(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseAnd = function() {
              for (var r = this.parseNot(); this.skipSymbol("and"); ) {
                var l = this.parseNot();
                r = new y.And(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseNot = function() {
              var r = this.peekToken();
              return this.skipSymbol("not") ? new y.Not(r.lineno, r.colno, this.parseNot()) : this.parseIn();
            }, T.parseIn = function() {
              for (var r = this.parseIs(); ; ) {
                var l = this.nextToken();
                if (!l)
                  break;
                var u = l.type === d.TOKEN_SYMBOL && l.value === "not";
                if (u || this.pushToken(l), this.skipSymbol("in")) {
                  var k = this.parseIs();
                  r = new y.In(r.lineno, r.colno, r, k), u && (r = new y.Not(r.lineno, r.colno, r));
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
                r = new y.Is(r.lineno, r.colno, r, u), l && (r = new y.Not(r.lineno, r.colno, r));
              }
              return r;
            }, T.parseCompare = function() {
              for (var r = ["==", "===", "!=", "!==", "<", ">", "<=", ">="], l = this.parseConcat(), u = []; ; ) {
                var k = this.nextToken();
                if (k)
                  if (r.indexOf(k.value) !== -1)
                    u.push(new y.CompareOperand(k.lineno, k.colno, this.parseConcat(), k.value));
                  else {
                    this.pushToken(k);
                    break;
                  }
                else
                  break;
              }
              return u.length ? new y.Compare(u[0].lineno, u[0].colno, l, u) : l;
            }, T.parseConcat = function() {
              for (var r = this.parseAdd(); this.skipValue(d.TOKEN_TILDE, "~"); ) {
                var l = this.parseAdd();
                r = new y.Concat(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseAdd = function() {
              for (var r = this.parseSub(); this.skipValue(d.TOKEN_OPERATOR, "+"); ) {
                var l = this.parseSub();
                r = new y.Add(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseSub = function() {
              for (var r = this.parseMul(); this.skipValue(d.TOKEN_OPERATOR, "-"); ) {
                var l = this.parseMul();
                r = new y.Sub(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseMul = function() {
              for (var r = this.parseDiv(); this.skipValue(d.TOKEN_OPERATOR, "*"); ) {
                var l = this.parseDiv();
                r = new y.Mul(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseDiv = function() {
              for (var r = this.parseFloorDiv(); this.skipValue(d.TOKEN_OPERATOR, "/"); ) {
                var l = this.parseFloorDiv();
                r = new y.Div(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseFloorDiv = function() {
              for (var r = this.parseMod(); this.skipValue(d.TOKEN_OPERATOR, "//"); ) {
                var l = this.parseMod();
                r = new y.FloorDiv(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseMod = function() {
              for (var r = this.parsePow(); this.skipValue(d.TOKEN_OPERATOR, "%"); ) {
                var l = this.parsePow();
                r = new y.Mod(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parsePow = function() {
              for (var r = this.parseUnary(); this.skipValue(d.TOKEN_OPERATOR, "**"); ) {
                var l = this.parseUnary();
                r = new y.Pow(r.lineno, r.colno, r, l);
              }
              return r;
            }, T.parseUnary = function(r) {
              var l = this.peekToken(), u;
              return this.skipValue(d.TOKEN_OPERATOR, "-") ? u = new y.Neg(l.lineno, l.colno, this.parseUnary(!0)) : this.skipValue(d.TOKEN_OPERATOR, "+") ? u = new y.Pos(l.lineno, l.colno, this.parseUnary(!0)) : u = this.parsePrimary(), r || (u = this.parseFilter(u)), u;
            }, T.parsePrimary = function(r) {
              var l = this.nextToken(), u, k = null;
              if (l ? l.type === d.TOKEN_STRING ? u = l.value : l.type === d.TOKEN_INT ? u = parseInt(l.value, 10) : l.type === d.TOKEN_FLOAT ? u = parseFloat(l.value) : l.type === d.TOKEN_BOOLEAN ? l.value === "true" ? u = !0 : l.value === "false" ? u = !1 : this.fail("invalid boolean: " + l.value, l.lineno, l.colno) : l.type === d.TOKEN_NONE ? u = null : l.type === d.TOKEN_REGEX && (u = new RegExp(l.value.body, l.value.flags)) : this.fail("expected expression, got end of file"), u !== void 0 ? k = new y.Literal(l.lineno, l.colno, u) : l.type === d.TOKEN_SYMBOL ? k = new y.Symbol(l.lineno, l.colno, l.value) : (this.pushToken(l), k = this.parseAggregate()), r || (k = this.parsePostfix(k)), k)
                return k;
              throw this.error("unexpected token: " + l.value, l.lineno, l.colno);
            }, T.parseFilterName = function() {
              for (var r = this.expect(d.TOKEN_SYMBOL), l = r.value; this.skipValue(d.TOKEN_OPERATOR, "."); )
                l += "." + this.expect(d.TOKEN_SYMBOL).value;
              return new y.Symbol(r.lineno, r.colno, l);
            }, T.parseFilterArgs = function(r) {
              if (this.peekToken().type === d.TOKEN_LEFT_PAREN) {
                var l = this.parsePostfix(r);
                return l.args.children;
              }
              return [];
            }, T.parseFilter = function(r) {
              for (; this.skip(d.TOKEN_PIPE); ) {
                var l = this.parseFilterName();
                r = new y.Filter(l.lineno, l.colno, l, new y.NodeList(l.lineno, l.colno, [r].concat(this.parseFilterArgs(r))));
              }
              return r;
            }, T.parseFilterStatement = function() {
              var r = this.peekToken();
              this.skipSymbol("filter") || this.fail("parseFilterStatement: expected filter");
              var l = this.parseFilterName(), u = this.parseFilterArgs(l);
              this.advanceAfterBlockEnd(r.value);
              var k = new y.Capture(l.lineno, l.colno, this.parseUntilBlocks("endfilter"));
              this.advanceAfterBlockEnd();
              var g = new y.Filter(l.lineno, l.colno, l, new y.NodeList(l.lineno, l.colno, [k].concat(u)));
              return new y.Output(l.lineno, l.colno, [g]);
            }, T.parseAggregate = function() {
              var r = this.nextToken(), l;
              switch (r.type) {
                case d.TOKEN_LEFT_PAREN:
                  l = new y.Group(r.lineno, r.colno);
                  break;
                case d.TOKEN_LEFT_BRACKET:
                  l = new y.Array(r.lineno, r.colno);
                  break;
                case d.TOKEN_LEFT_CURLY:
                  l = new y.Dict(r.lineno, r.colno);
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
                if (l.children.length > 0 && (this.skip(d.TOKEN_COMMA) || this.fail("parseAggregate: expected comma after expression", r.lineno, r.colno)), l instanceof y.Dict) {
                  var k = this.parsePrimary();
                  this.skip(d.TOKEN_COLON) || this.fail("parseAggregate: expected colon after dict key", r.lineno, r.colno);
                  var g = this.parseExpression();
                  l.addChild(new y.Pair(k.lineno, k.colno, k, g));
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
              for (var k = new y.NodeList(u.lineno, u.colno), g = new y.KeywordArgs(u.lineno, u.colno), b = !1; ; ) {
                if (u = this.peekToken(), !l && u.type === d.TOKEN_RIGHT_PAREN) {
                  this.nextToken();
                  break;
                } else if (l && u.type === d.TOKEN_BLOCK_END)
                  break;
                if (b && !this.skip(d.TOKEN_COMMA))
                  this.fail("parseSignature: expected comma after expression", u.lineno, u.colno);
                else {
                  var a = this.parseExpression();
                  this.skipValue(d.TOKEN_OPERATOR, "=") ? g.addChild(new y.Pair(a.lineno, a.colno, a, this.parseExpression())) : k.addChild(a);
                }
                b = !0;
              }
              return g.children.length && k.addChild(g), k;
            }, T.parseUntilBlocks = function() {
              for (var r = this.breakOnBlocks, l = arguments.length, u = new Array(l), k = 0; k < l; k++)
                u[k] = arguments[k];
              this.breakOnBlocks = u;
              var g = this.parse();
              return this.breakOnBlocks = r, g;
            }, T.parseNodes = function() {
              for (var r, l = []; r = this.nextToken(); )
                if (r.type === d.TOKEN_DATA) {
                  var u = r.value, k = this.peekToken(), g = k && k.value;
                  this.dropLeadingWhitespace && (u = u.replace(/^\s*/, ""), this.dropLeadingWhitespace = !1), k && (k.type === d.TOKEN_BLOCK_START && g.charAt(g.length - 1) === "-" || k.type === d.TOKEN_VARIABLE_START && g.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || k.type === d.TOKEN_COMMENT && g.charAt(this.tokens.tags.COMMENT_START.length) === "-") && (u = u.replace(/\s*$/, "")), l.push(new y.Output(r.lineno, r.colno, [new y.TemplateData(r.lineno, r.colno, u)]));
                } else if (r.type === d.TOKEN_BLOCK_START) {
                  this.dropLeadingWhitespace = !1;
                  var b = this.parseStatement();
                  if (!b)
                    break;
                  l.push(b);
                } else if (r.type === d.TOKEN_VARIABLE_START) {
                  var a = this.parseExpression();
                  this.dropLeadingWhitespace = !1, this.advanceAfterVariableEnd(), l.push(new y.Output(r.lineno, r.colno, [a]));
                } else
                  r.type === d.TOKEN_COMMENT ? this.dropLeadingWhitespace = r.value.charAt(r.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-" : this.fail("Unexpected token at top-level: " + r.type, r.lineno, r.colno);
              return l;
            }, T.parse = function() {
              return new y.NodeList(0, 0, this.parseNodes());
            }, T.parseAsRoot = function() {
              return new y.Root(0, 0, this.parseNodes());
            }, I;
          }(m);
          t.exports = {
            parse: function(I, T, N) {
              var r = new C(d.lex(I, N));
              return T !== void 0 && (r.extensions = T), r.parseAsRoot();
            },
            Parser: C
          };
        },
        /* 9 */
        /***/
        function(t, n, s) {
          var i = s(0), c = ` 
	\r `, d = "()[]{}%*-+~/#,:|.<>=!", y = "0123456789", m = "{%", O = "%}", C = "{{", M = "}}", I = "{#", T = "#}", N = "string", r = "whitespace", l = "data", u = "block-start", k = "block-end", g = "variable-start", b = "variable-end", a = "comment", f = "left-paren", v = "right-paren", h = "left-bracket", p = "right-bracket", _ = "left-curly", w = "right-curly", A = "operator", P = "comma", R = "colon", B = "tilde", K = "pipe", x = "int", E = "float", S = "boolean", j = "none", D = "symbol", q = "special", ne = "regex";
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
              var G = $.tags || {};
              this.tags = {
                BLOCK_START: G.blockStart || m,
                BLOCK_END: G.blockEnd || O,
                VARIABLE_START: G.variableStart || C,
                VARIABLE_END: G.variableEnd || M,
                COMMENT_START: G.commentStart || I,
                COMMENT_END: G.commentEnd || T
              }, this.trimBlocks = !!$.trimBlocks, this.lstripBlocks = !!$.lstripBlocks;
            }
            var X = pe.prototype;
            return X.nextToken = function() {
              var $ = this.lineno, G = this.colno, Q;
              if (this.in_code) {
                var se = this.current();
                if (this.isFinished())
                  return null;
                if (se === '"' || se === "'")
                  return z(N, this._parseString(se), $, G);
                if (Q = this._extract(c))
                  return z(r, Q, $, G);
                if ((Q = this._extractString(this.tags.BLOCK_END)) || (Q = this._extractString("-" + this.tags.BLOCK_END)))
                  return this.in_code = !1, this.trimBlocks && (se = this.current(), se === `
` ? this.forward() : se === "\r" && (this.forward(), se = this.current(), se === `
` ? this.forward() : this.back())), z(k, Q, $, G);
                if ((Q = this._extractString(this.tags.VARIABLE_END)) || (Q = this._extractString("-" + this.tags.VARIABLE_END)))
                  return this.in_code = !1, z(b, Q, $, G);
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
                  }, $, G);
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
                      U = B;
                      break;
                    case "|":
                      U = K;
                      break;
                    default:
                      U = A;
                  }
                  return z(U, se, $, G);
                } else if (Q = this._extractUntil(c + d), Q.match(/^[-+]?[0-9]+$/))
                  if (this.current() === ".") {
                    this.forward();
                    var Y = this._extract(y);
                    return z(E, Q + "." + Y, $, G);
                  } else
                    return z(x, Q, $, G);
                else {
                  if (Q.match(/^(true|false)$/))
                    return z(S, Q, $, G);
                  if (Q === "none")
                    return z(j, Q, $, G);
                  if (Q === "null")
                    return z(j, Q, $, G);
                  if (Q)
                    return z(D, Q, $, G);
                  throw new Error("Unexpected value while parsing: " + Q);
                }
              } else {
                var J = this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);
                if (this.isFinished())
                  return null;
                if ((Q = this._extractString(this.tags.BLOCK_START + "-")) || (Q = this._extractString(this.tags.BLOCK_START)))
                  return this.in_code = !0, z(u, Q, $, G);
                if ((Q = this._extractString(this.tags.VARIABLE_START + "-")) || (Q = this._extractString(this.tags.VARIABLE_START)))
                  return this.in_code = !0, z(g, Q, $, G);
                Q = "";
                var ae, ee = !1;
                for (this._matches(this.tags.COMMENT_START) && (ee = !0, Q = this._extractString(this.tags.COMMENT_START)); (ae = this._extractUntil(J)) !== null; )
                  if (Q += ae, (this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !ee) {
                    if (this.lstripBlocks && this._matches(this.tags.BLOCK_START) && this.colno > 0 && this.colno <= Q.length) {
                      var ue = Q.slice(-this.colno);
                      if (/^\s+$/.test(ue) && (Q = Q.slice(0, -this.colno), !Q.length))
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
                return z(ee ? a : l, Q, $, G);
              }
            }, X._parseString = function($) {
              this.forward();
              for (var G = ""; !this.isFinished() && this.current() !== $; ) {
                var Q = this.current();
                if (Q === "\\") {
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
                  G += Q, this.forward();
              }
              return this.forward(), G;
            }, X._matches = function($) {
              if (this.index + $.length > this.len)
                return null;
              var G = this.str.slice(this.index, this.index + $.length);
              return G === $;
            }, X._extractString = function($) {
              return this._matches($) ? (this.forwardN($.length), $) : null;
            }, X._extractUntil = function($) {
              return this._extractMatching(!0, $ || "");
            }, X._extract = function($) {
              return this._extractMatching(!1, $);
            }, X._extractMatching = function($, G) {
              if (this.isFinished())
                return null;
              var Q = G.indexOf(this.current());
              if ($ && Q === -1 || !$ && Q !== -1) {
                var se = this.current();
                this.forward();
                for (var we = G.indexOf(this.current()); ($ && we === -1 || !$ && we !== -1) && !this.isFinished(); )
                  se += this.current(), this.forward(), we = G.indexOf(this.current());
                return se;
              }
              return "";
            }, X._extractRegex = function($) {
              var G = this.currentStr().match($);
              return G ? (this.forwardN(G[0].length), G) : null;
            }, X.isFinished = function() {
              return this.index >= this.len;
            }, X.forwardN = function($) {
              for (var G = 0; G < $; G++)
                this.forward();
            }, X.forward = function() {
              this.index++, this.previous() === `
` ? (this.lineno++, this.colno = 0) : this.colno++;
            }, X.backN = function($) {
              for (var G = 0; G < $; G++)
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
            TOKEN_STRING: N,
            TOKEN_WHITESPACE: r,
            TOKEN_DATA: l,
            TOKEN_BLOCK_START: u,
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
            TOKEN_TILDE: B,
            TOKEN_PIPE: K,
            TOKEN_INT: x,
            TOKEN_FLOAT: E,
            TOKEN_BOOLEAN: S,
            TOKEN_NONE: j,
            TOKEN_SYMBOL: D,
            TOKEN_SPECIAL: q,
            TOKEN_REGEX: ne
          };
        },
        /* 10 */
        /***/
        function(t, n, s) {
          function i(C, M) {
            C.prototype = Object.create(M.prototype), C.prototype.constructor = C, c(C, M);
          }
          function c(C, M) {
            return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(T, N) {
              return T.__proto__ = N, T;
            }, c(C, M);
          }
          var d = s(6), y = s(19), m = y.PrecompiledLoader, O = /* @__PURE__ */ function(C) {
            i(M, C);
            function M(T, N) {
              var r;
              return r = C.call(this) || this, r.baseURL = T || ".", N = N || {}, r.useCache = !!N.useCache, r.async = !!N.async, r;
            }
            var I = M.prototype;
            return I.resolve = function(N, r) {
              throw new Error("relative templates not support in the browser yet");
            }, I.getSource = function(N, r) {
              var l = this, u = this.useCache, k;
              return this.fetch(this.baseURL + "/" + N, function(g, b) {
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
                    path: N,
                    noCache: !u
                  }, l.emit("load", N, k), r && r(null, k);
              }), k;
            }, I.fetch = function(N, r) {
              if (typeof window > "u")
                throw new Error("WebLoader can only by used in a browser");
              var l = new XMLHttpRequest(), u = !0;
              l.onreadystatechange = function() {
                l.readyState === 4 && u && (u = !1, l.status === 0 || l.status === 200 ? r(null, l.responseText) : r({
                  status: l.status,
                  content: l.responseText
                }));
              }, N += (N.indexOf("?") === -1 ? "?" : "&") + "s=" + new Date().getTime(), l.open("GET", N, this.async), l.send();
            }, M;
          }(d);
          t.exports = {
            WebLoader: O,
            PrecompiledLoader: m
          };
        },
        /* 11 */
        /***/
        function(t, n, s) {
          var i = s(0), c = s(7), d = c.Environment, y = c.Template, m = s(6), O = s(10), C = s(23), M = s(5), I = s(8), T = s(9), N = s(2), r = s(3), l = s(25), u;
          function k(g, b) {
            b = b || {}, i.isObject(g) && (b = g, g = null);
            var a;
            return O.FileSystemLoader ? a = new O.FileSystemLoader(g, {
              watch: b.watch,
              noCache: b.noCache
            }) : O.WebLoader && (a = new O.WebLoader(g, {
              useCache: b.web && b.web.useCache,
              async: b.web && b.web.async
            })), u = new d(a, b), b && b.express && u.express(b.express), u;
          }
          t.exports = {
            Environment: d,
            Template: y,
            Loader: m,
            FileSystemLoader: O.FileSystemLoader,
            NodeResolveLoader: O.NodeResolveLoader,
            PrecompiledLoader: O.PrecompiledLoader,
            WebLoader: O.WebLoader,
            compiler: M,
            parser: I,
            lexer: T,
            runtime: N,
            lib: i,
            nodes: r,
            installJinjaCompat: l,
            configure: k,
            reset: function() {
              u = void 0;
            },
            compile: function(b, a, f, v) {
              return u || k(), new y(b, a, f, v);
            },
            render: function(b, a, f) {
              return u || k(), u.render(b, a, f);
            },
            renderString: function(b, a, f) {
              return u || k(), u.renderString(b, a, f);
            },
            precompile: C ? C.precompile : void 0,
            precompileString: C ? C.precompileString : void 0
          };
        },
        /* 12 */
        /***/
        function(t, n, s) {
          var i = s(13), c = [], d = [], y = i.makeRequestCallFromTimer(m);
          function m() {
            if (d.length)
              throw d.shift();
          }
          t.exports = O;
          function O(M) {
            var I;
            c.length ? I = c.pop() : I = new C(), I.task = M, i(I);
          }
          function C() {
            this.task = null;
          }
          C.prototype.call = function() {
            try {
              this.task.call();
            } catch (M) {
              O.onerror ? O.onerror(M) : (d.push(M), y());
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
              d.length || y(), d[d.length] = r;
            }
            var d = [], y, m = 0, O = 1024;
            function C() {
              for (; m < d.length; ) {
                var r = m;
                if (m = m + 1, d[r].call(), m > O) {
                  for (var l = 0, u = d.length - m; l < u; l++)
                    d[l] = d[l + m];
                  d.length -= m, m = 0;
                }
              }
              d.length = 0, m = 0;
            }
            var M = typeof i < "u" ? i : self, I = M.MutationObserver || M.WebKitMutationObserver;
            typeof I == "function" ? y = T(C) : y = N(C), c.requestFlush = y;
            function T(r) {
              var l = 1, u = new I(r), k = document.createTextNode("");
              return u.observe(k, { characterData: !0 }), function() {
                l = -l, k.data = l;
              };
            }
            function N(r) {
              return function() {
                var u = setTimeout(g, 0), k = setInterval(g, 50);
                function g() {
                  clearTimeout(u), clearInterval(k), r();
                }
              };
            }
            c.makeRequestCallFromTimer = N;
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
            var y = function() {
              var I = Array.prototype.slice.call(arguments);
              typeof I[0] == "function" && I[0].apply(null, I.splice(1));
            }, m = function(I) {
              typeof setImmediate == "function" ? setImmediate(I) : typeof process < "u" && process.nextTick ? process.nextTick(I) : setTimeout(I, 0);
            }, O = function(I) {
              var T = function(N) {
                var r = function() {
                  return I.length && I[N].apply(null, arguments), r.next();
                };
                return r.next = function() {
                  return N < I.length - 1 ? T(N + 1) : null;
                }, r;
              };
              return T(0);
            }, C = Array.isArray || function(I) {
              return Object.prototype.toString.call(I) === "[object Array]";
            }, M = function(I, T, N) {
              var r = N ? m : y;
              if (T = T || function() {
              }, !C(I)) {
                var l = new Error("First argument to waterfall must be an array of functions");
                return T(l);
              }
              if (!I.length)
                return T();
              var u = function(k) {
                return function(g) {
                  if (g)
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
              u(O(I))();
            };
            i = [], c = function() {
              return M;
            }.apply(n, i), c !== void 0 && (t.exports = c);
          })();
        },
        /* 16 */
        /***/
        function(t, n, s) {
          var i = typeof Reflect == "object" ? Reflect : null, c = i && typeof i.apply == "function" ? i.apply : function(p, _, w) {
            return Function.prototype.apply.call(p, _, w);
          }, d;
          i && typeof i.ownKeys == "function" ? d = i.ownKeys : Object.getOwnPropertySymbols ? d = function(p) {
            return Object.getOwnPropertyNames(p).concat(Object.getOwnPropertySymbols(p));
          } : d = function(p) {
            return Object.getOwnPropertyNames(p);
          };
          function y(h) {
            console && console.warn && console.warn(h);
          }
          var m = Number.isNaN || function(p) {
            return p !== p;
          };
          function O() {
            O.init.call(this);
          }
          t.exports = O, t.exports.once = a, O.EventEmitter = O, O.prototype._events = void 0, O.prototype._eventsCount = 0, O.prototype._maxListeners = void 0;
          var C = 10;
          function M(h) {
            if (typeof h != "function")
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof h);
          }
          Object.defineProperty(O, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
              return C;
            },
            set: function(h) {
              if (typeof h != "number" || h < 0 || m(h))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + h + ".");
              C = h;
            }
          }), O.init = function() {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, O.prototype.setMaxListeners = function(p) {
            if (typeof p != "number" || p < 0 || m(p))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + p + ".");
            return this._maxListeners = p, this;
          };
          function I(h) {
            return h._maxListeners === void 0 ? O.defaultMaxListeners : h._maxListeners;
          }
          O.prototype.getMaxListeners = function() {
            return I(this);
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
              var B = new Error("Unhandled error." + (R ? " (" + R.message + ")" : ""));
              throw B.context = R, B;
            }
            var K = P[p];
            if (K === void 0)
              return !1;
            if (typeof K == "function")
              c(K, this, _);
            else
              for (var x = K.length, E = k(K, x), w = 0; w < x; ++w)
                c(E[w], this, _);
            return !0;
          };
          function T(h, p, _, w) {
            var A, P, R;
            if (M(_), P = h._events, P === void 0 ? (P = h._events = /* @__PURE__ */ Object.create(null), h._eventsCount = 0) : (P.newListener !== void 0 && (h.emit(
              "newListener",
              p,
              _.listener ? _.listener : _
            ), P = h._events), R = P[p]), R === void 0)
              R = P[p] = _, ++h._eventsCount;
            else if (typeof R == "function" ? R = P[p] = w ? [_, R] : [R, _] : w ? R.unshift(_) : R.push(_), A = I(h), A > 0 && R.length > A && !R.warned) {
              R.warned = !0;
              var B = new Error("Possible EventEmitter memory leak detected. " + R.length + " " + String(p) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              B.name = "MaxListenersExceededWarning", B.emitter = h, B.type = p, B.count = R.length, y(B);
            }
            return h;
          }
          O.prototype.addListener = function(p, _) {
            return T(this, p, _, !1);
          }, O.prototype.on = O.prototype.addListener, O.prototype.prependListener = function(p, _) {
            return T(this, p, _, !0);
          };
          function N() {
            if (!this.fired)
              return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function r(h, p, _) {
            var w = { fired: !1, wrapFn: void 0, target: h, type: p, listener: _ }, A = N.bind(w);
            return A.listener = _, w.wrapFn = A, A;
          }
          O.prototype.once = function(p, _) {
            return M(_), this.on(p, r(this, p, _)), this;
          }, O.prototype.prependOnceListener = function(p, _) {
            return M(_), this.prependListener(p, r(this, p, _)), this;
          }, O.prototype.removeListener = function(p, _) {
            var w, A, P, R, B;
            if (M(_), A = this._events, A === void 0)
              return this;
            if (w = A[p], w === void 0)
              return this;
            if (w === _ || w.listener === _)
              --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete A[p], A.removeListener && this.emit("removeListener", p, w.listener || _));
            else if (typeof w != "function") {
              for (P = -1, R = w.length - 1; R >= 0; R--)
                if (w[R] === _ || w[R].listener === _) {
                  B = w[R].listener, P = R;
                  break;
                }
              if (P < 0)
                return this;
              P === 0 ? w.shift() : g(w, P), w.length === 1 && (A[p] = w[0]), A.removeListener !== void 0 && this.emit("removeListener", p, B || _);
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
            return typeof h.listenerCount == "function" ? h.listenerCount(p) : u.call(h, p);
          }, O.prototype.listenerCount = u;
          function u(h) {
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
        function(t, n, s) {
          var i = s(3), c = s(0), d = 0;
          function y() {
            return "hole_" + d++;
          }
          function m(u, k) {
            for (var g = null, b = 0; b < u.length; b++) {
              var a = k(u[b]);
              a !== u[b] && (g || (g = u.slice()), g[b] = a);
            }
            return g || u;
          }
          function O(u, k, g) {
            if (!(u instanceof i.Node))
              return u;
            if (!g) {
              var b = k(u);
              if (b && b !== u)
                return b;
            }
            if (u instanceof i.NodeList) {
              var a = m(u.children, function(_) {
                return O(_, k, g);
              });
              a !== u.children && (u = new i[u.typename](u.lineno, u.colno, a));
            } else if (u instanceof i.CallExtension) {
              var f = O(u.args, k, g), v = m(u.contentArgs, function(_) {
                return O(_, k, g);
              });
              (f !== u.args || v !== u.contentArgs) && (u = new i[u.typename](u.extName, u.prop, f, v));
            } else {
              var h = u.fields.map(function(_) {
                return u[_];
              }), p = m(h, function(_) {
                return O(_, k, g);
              });
              p !== h && (u = new i[u.typename](u.lineno, u.colno), p.forEach(function(_, w) {
                u[u.fields[w]] = _;
              }));
            }
            return g && k(u) || u;
          }
          function C(u, k) {
            return O(u, k, !0);
          }
          function M(u, k, g) {
            var b = [], a = C(g ? u[g] : u, function(f) {
              var v;
              return f instanceof i.Block ? f : ((f instanceof i.Filter && c.indexOf(k, f.name.value) !== -1 || f instanceof i.CallExtensionAsync) && (v = new i.Symbol(f.lineno, f.colno, y()), b.push(new i.FilterAsync(f.lineno, f.colno, f.name, f.args, v))), v);
            });
            return g ? u[g] = a : u = a, b.length ? (b.push(u), new i.NodeList(u.lineno, u.colno, b)) : u;
          }
          function I(u, k) {
            return C(u, function(g) {
              return g instanceof i.Output ? M(g, k) : g instanceof i.Set ? M(g, k, "value") : g instanceof i.For ? M(g, k, "arr") : g instanceof i.If ? M(g, k, "cond") : g instanceof i.CallExtension ? M(g, k, "args") : void 0;
            });
          }
          function T(u) {
            return O(u, function(k) {
              if (k instanceof i.Block) {
                var g = !1, b = y();
                k.body = O(k.body, function(a) {
                  if (a instanceof i.FunCall && a.name.value === "super")
                    return g = !0, new i.Symbol(a.lineno, a.colno, b);
                }), g && k.body.children.unshift(new i.Super(0, 0, k.name, new i.Symbol(0, 0, b)));
              }
            });
          }
          function N(u) {
            return C(u, function(k) {
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
          function r(u, k) {
            return N(T(I(u, k)));
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
          function y(L, F) {
            return L == null || L === !1 ? F : L;
          }
          d.abs = Math.abs;
          function m(L) {
            return L !== L;
          }
          function O(L, F, V) {
            var U, Y = [], J = [];
            for (U = 0; U < L.length; U++)
              U % F === 0 && J.length && (Y.push(J), J = []), J.push(L[U]);
            if (J.length) {
              if (V)
                for (U = J.length; U < F; U++)
                  J.push(V);
              Y.push(J);
            }
            return Y;
          }
          d.batch = O;
          function C(L) {
            L = y(L, "");
            var F = L.toLowerCase();
            return c.copySafeness(L, F.charAt(0).toUpperCase() + F.slice(1));
          }
          d.capitalize = C;
          function M(L, F) {
            if (L = y(L, ""), F = F || 80, L.length >= F)
              return L;
            var V = F - L.length, U = i.repeat(" ", V / 2 - V % 2), Y = i.repeat(" ", V / 2);
            return c.copySafeness(L, U + L + Y);
          }
          d.center = M;
          function I(L, F, V) {
            return V ? L || F : L !== void 0 ? L : F;
          }
          d.default = I;
          function T(L, F, V) {
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
              var ue = ae[J], Ee = ee[J];
              return F || (i.isString(ue) && (ue = ue.toUpperCase()), i.isString(Ee) && (Ee = Ee.toUpperCase())), ue > Ee ? 1 : ue === Ee ? 0 : -1;
            }), U;
          }
          d.dictsort = T;
          function N(L, F) {
            return JSON.stringify(L, null, F);
          }
          d.dump = N;
          function r(L) {
            return L instanceof c.SafeString ? L : (L = L ?? "", c.markSafe(i.escape(L.toString())));
          }
          d.escape = r;
          function l(L) {
            return L instanceof c.SafeString ? L : (L = L ?? "", c.markSafe(L.toString()));
          }
          d.safe = l;
          function u(L) {
            return L[0];
          }
          d.first = u;
          function k(L) {
            return L = L ?? "", c.markSafe(i.escape(L.toString()));
          }
          d.forceescape = k;
          function g(L, F) {
            return i.groupBy(L, F, this.env.opts.throwOnUndefined);
          }
          d.groupby = g;
          function b(L, F, V) {
            if (L = y(L, ""), L === "")
              return "";
            F = F || 4;
            var U = L.split(`
`), Y = i.repeat(" ", F), J = U.map(function(ae, ee) {
              return ee === 0 && !V ? ae : "" + Y + ae;
            }).join(`
`);
            return c.copySafeness(L, J);
          }
          d.indent = b;
          function a(L, F, V) {
            return F = F || "", V && (L = i.map(L, function(U) {
              return U[V];
            })), L.join(F);
          }
          d.join = a;
          function f(L) {
            return L[L.length - 1];
          }
          d.last = f;
          function v(L) {
            var F = y(L, "");
            return F !== void 0 ? typeof Map == "function" && F instanceof Map || typeof Set == "function" && F instanceof Set ? F.size : i.isObject(F) && !(F instanceof c.SafeString) ? i.keys(F).length : F.length : 0;
          }
          d.length = v;
          function h(L) {
            if (i.isString(L))
              return L.split("");
            if (i.isObject(L))
              return i._entries(L || {}).map(function(F) {
                var V = F[0], U = F[1];
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
            return L = y(L, ""), L.toLowerCase();
          }
          d.lower = p;
          function _(L) {
            return L == null ? "" : c.copySafeness(L, L.replace(/\r\n|\n/g, `<br />
`));
          }
          d.nl2br = _;
          function w(L) {
            return L[Math.floor(Math.random() * L.length)];
          }
          d.random = w;
          function A(L) {
            function F(V, U, Y) {
              U === void 0 && (U = "truthy");
              var J = this, ae = J.env.getTest(U);
              return i.toArray(V).filter(function(ue) {
                return ae.call(J, ue, Y) === L;
              });
            }
            return F;
          }
          d.reject = A(!1);
          function P(L, F) {
            return L.filter(function(V) {
              return !V[F];
            });
          }
          d.rejectattr = P, d.select = A(!0);
          function R(L, F) {
            return L.filter(function(V) {
              return !!V[F];
            });
          }
          d.selectattr = R;
          function B(L, F, V, U) {
            var Y = L;
            if (F instanceof RegExp)
              return L.replace(F, V);
            typeof U > "u" && (U = -1);
            var J = "";
            if (typeof F == "number")
              F = "" + F;
            else if (typeof F != "string")
              return L;
            if (typeof L == "number" && (L = "" + L), typeof L != "string" && !(L instanceof c.SafeString))
              return L;
            if (F === "")
              return J = V + L.split("").join(V) + V, c.copySafeness(L, J);
            var ae = L.indexOf(F);
            if (U === 0 || ae === -1)
              return L;
            for (var ee = 0, ue = 0; ae > -1 && (U === -1 || ue < U); )
              J += L.substring(ee, ae) + V, ee = ae + F.length, ue++, ae = L.indexOf(F, ee);
            return ee < L.length && (J += L.substring(ee)), c.copySafeness(Y, J);
          }
          d.replace = B;
          function K(L) {
            var F;
            return i.isString(L) ? F = h(L) : F = i.map(L, function(V) {
              return V;
            }), F.reverse(), i.isString(L) ? c.copySafeness(L, F.join("")) : F;
          }
          d.reverse = K;
          function x(L, F, V) {
            F = F || 0;
            var U = Math.pow(10, F), Y;
            return V === "ceil" ? Y = Math.ceil : V === "floor" ? Y = Math.floor : Y = Math.round, Y(L * U) / U;
          }
          d.round = x;
          function E(L, F, V) {
            for (var U = Math.floor(L.length / F), Y = L.length % F, J = [], ae = 0, ee = 0; ee < F; ee++) {
              var ue = ae + ee * U;
              ee < Y && ae++;
              var Ee = ae + (ee + 1) * U, ke = L.slice(ue, Ee);
              V && ee >= Y && ke.push(V), J.push(ke);
            }
            return J;
          }
          d.slice = E;
          function S(L, F, V) {
            return V === void 0 && (V = 0), F && (L = i.map(L, function(U) {
              return U[F];
            })), V + L.reduce(function(U, Y) {
              return U + Y;
            }, 0);
          }
          d.sum = S, d.sort = c.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(F, V, U, Y) {
            var J = this, ae = i.map(F, function(ue) {
              return ue;
            }), ee = i.getAttrGetter(Y);
            return ae.sort(function(ue, Ee) {
              var ke = Y ? ee(ue) : ue, Le = Y ? ee(Ee) : Ee;
              if (J.env.opts.throwOnUndefined && Y && (ke === void 0 || Le === void 0))
                throw new TypeError('sort: attribute "' + Y + '" resolved to undefined');
              return !U && i.isString(ke) && i.isString(Le) && (ke = ke.toLowerCase(), Le = Le.toLowerCase()), ke < Le ? V ? 1 : -1 : ke > Le ? V ? -1 : 1 : 0;
            }), ae;
          });
          function j(L) {
            return c.copySafeness(L, L);
          }
          d.string = j;
          function D(L, F) {
            L = y(L, "");
            var V = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, U = ne(L.replace(V, "")), Y = "";
            return F ? Y = U.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, `
`).replace(/\n\n\n+/g, `

`) : Y = U.replace(/\s+/gi, " "), c.copySafeness(L, Y);
          }
          d.striptags = D;
          function q(L) {
            L = y(L, "");
            var F = L.split(" ").map(function(V) {
              return C(V);
            });
            return c.copySafeness(L, F.join(" "));
          }
          d.title = q;
          function ne(L) {
            return c.copySafeness(L, L.replace(/^\s*|\s*$/g, ""));
          }
          d.trim = ne;
          function z(L, F, V, U) {
            var Y = L;
            if (L = y(L, ""), F = F || 255, L.length <= F)
              return L;
            if (V)
              L = L.substring(0, F);
            else {
              var J = L.lastIndexOf(" ", F);
              J === -1 && (J = F), L = L.substring(0, J);
            }
            return L += U ?? "...", c.copySafeness(Y, L);
          }
          d.truncate = z;
          function ce(L) {
            return L = y(L, ""), L.toUpperCase();
          }
          d.upper = ce;
          function pe(L) {
            var F = encodeURIComponent;
            if (i.isString(L))
              return F(L);
            var V = i.isArray(L) ? L : i._entries(L);
            return V.map(function(U) {
              var Y = U[0], J = U[1];
              return F(Y) + "=" + F(J);
            }).join("&");
          }
          d.urlencode = pe;
          var X = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, Z = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, $ = /^https?:\/\/.*$/, G = /^www\./, Q = /\.(?:org|net|com)(?:\:|\/|$)/;
          function se(L, F, V) {
            m(F) && (F = 1 / 0);
            var U = V === !0 ? ' rel="nofollow"' : "", Y = L.split(/(\s+)/).filter(function(J) {
              return J && J.length;
            }).map(function(J) {
              var ae = J.match(X), ee = ae ? ae[1] : J, ue = ee.substr(0, F);
              return $.test(ee) ? '<a href="' + ee + '"' + U + ">" + ue + "</a>" : G.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + ue + "</a>" : Z.test(ee) ? '<a href="mailto:' + ee + '">' + ee + "</a>" : Q.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + ue + "</a>" : J;
            });
            return Y.join("");
          }
          d.urlize = se;
          function we(L) {
            L = y(L, "");
            var F = L ? L.match(/\w+/g) : null;
            return F ? F.length : null;
          }
          d.wordcount = we;
          function he(L, F) {
            var V = parseFloat(L);
            return m(V) ? F : V;
          }
          d.float = he;
          var Oe = c.makeMacro(["value", "default", "base"], [], function(F, V, U) {
            U === void 0 && (U = 10);
            var Y = parseInt(F, U);
            return m(Y) ? V : Y;
          });
          d.int = Oe, d.d = d.default, d.e = d.escape;
        },
        /* 19 */
        /***/
        function(t, n, s) {
          function i(m, O) {
            m.prototype = Object.create(O.prototype), m.prototype.constructor = m, c(m, O);
          }
          function c(m, O) {
            return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(M, I) {
              return M.__proto__ = I, M;
            }, c(m, O);
          }
          var d = s(6), y = /* @__PURE__ */ function(m) {
            i(O, m);
            function O(M) {
              var I;
              return I = m.call(this) || this, I.precompiled = M || {}, I;
            }
            var C = O.prototype;
            return C.getSource = function(I) {
              return this.precompiled[I] ? {
                src: {
                  type: "code",
                  obj: this.precompiled[I]
                },
                path: I
              } : null;
            }, O;
          }(d);
          t.exports = {
            PrecompiledLoader: y
          };
        },
        /* 20 */
        /***/
        function(t, n, s) {
          var i = s(2).SafeString;
          function c(w) {
            return typeof w == "function";
          }
          n.callable = c;
          function d(w) {
            return w !== void 0;
          }
          n.defined = d;
          function y(w, A) {
            return w % A === 0;
          }
          n.divisibleby = y;
          function m(w) {
            return w instanceof i;
          }
          n.escaped = m;
          function O(w, A) {
            return w === A;
          }
          n.equalto = O, n.eq = n.equalto, n.sameas = n.equalto;
          function C(w) {
            return w % 2 === 0;
          }
          n.even = C;
          function M(w) {
            return !w;
          }
          n.falsy = M;
          function I(w, A) {
            return w >= A;
          }
          n.ge = I;
          function T(w, A) {
            return w > A;
          }
          n.greaterthan = T, n.gt = n.greaterthan;
          function N(w, A) {
            return w <= A;
          }
          n.le = N;
          function r(w, A) {
            return w < A;
          }
          n.lessthan = r, n.lt = n.lessthan;
          function l(w) {
            return w.toLowerCase() === w;
          }
          n.lower = l;
          function u(w, A) {
            return w !== A;
          }
          n.ne = u;
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
        function(t, n, s) {
          function i(y) {
            var m = -1;
            return {
              current: null,
              reset: function() {
                m = -1, this.current = null;
              },
              next: function() {
                return m++, m >= y.length && (m = 0), this.current = y[m], this.current;
              }
            };
          }
          function c(y) {
            y = y || ",";
            var m = !0;
            return function() {
              var O = m ? "" : y;
              return m = !1, O;
            };
          }
          function d() {
            return {
              range: function(m, O, C) {
                typeof O > "u" ? (O = m, m = 0, C = 1) : C || (C = 1);
                var M = [];
                if (C > 0)
                  for (var I = m; I < O; I += C)
                    M.push(I);
                else
                  for (var T = m; T > O; T += C)
                    M.push(T);
                return M;
              },
              cycler: function() {
                return i(Array.prototype.slice.call(arguments));
              },
              joiner: function(m) {
                return c(m);
              }
            };
          }
          t.exports = d;
        },
        /* 22 */
        /***/
        function(t, n, s) {
          var i = s(4);
          t.exports = function(d, y) {
            function m(O, C) {
              if (this.name = O, this.path = O, this.defaultEngine = C.defaultEngine, this.ext = i.extname(O), !this.ext && !this.defaultEngine)
                throw new Error("No default engine was specified and no extension was provided.");
              this.ext || (this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine);
            }
            return m.prototype.render = function(C, M) {
              d.render(this.name, C, M);
            }, y.set("view", m), y.set("nunjucksEnv", d), d;
          };
        },
        /* 23 */
        /***/
        function(t, n, s) {
          var i = s(4), c = s(4), d = s(0), y = d._prettifyError, m = s(5), O = s(7), C = O.Environment, M = s(24);
          function I(l, u) {
            return Array.isArray(u) ? u.some(function(k) {
              return l.match(k);
            }) : !1;
          }
          function T(l, u) {
            u = u || {}, u.isString = !0;
            var k = u.env || new C([]), g = u.wrapper || M;
            if (!u.name)
              throw new Error('the "name" option is required when compiling a string');
            return g([r(l, u.name, k)], u);
          }
          function N(l, u) {
            u = u || {};
            var k = u.env || new C([]), g = u.wrapper || M;
            if (u.isString)
              return T(l, u);
            var b = i.existsSync(l) && i.statSync(l), a = [], f = [];
            function v(_) {
              i.readdirSync(_).forEach(function(w) {
                var A = c.join(_, w), P = A.substr(c.join(l, "/").length), R = i.statSync(A);
                R && R.isDirectory() ? (P += "/", I(P, u.exclude) || v(A)) : I(P, u.include) && f.push(A);
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
                } catch (_) {
                  if (u.force)
                    console.error(_);
                  else
                    throw _;
                }
              }
            }
            return g(a, u);
          }
          function r(l, u, k) {
            k = k || new C([]);
            var g = k.asyncFilters, b = k.extensionsList, a;
            u = u.replace(/\\/g, "/");
            try {
              a = m.compile(l, g, b, u, k.opts);
            } catch (f) {
              throw y(u, !1, f);
            }
            return {
              name: u,
              template: a
            };
          }
          t.exports = {
            precompile: N,
            precompileString: T
          };
        },
        /* 24 */
        /***/
        function(t, n, s) {
          function i(c, d) {
            var y = "";
            d = d || {};
            for (var m = 0; m < c.length; m++) {
              var O = JSON.stringify(c[m].name), C = c[m].template;
              y += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + O + `] = (function() {
` + C + `
})();
`, d.asFunction && (y += "return function(ctx, cb) { return nunjucks.render(" + O + `, ctx, cb); }
`), y += `})();
`;
            }
            return y;
          }
          t.exports = i;
        },
        /* 25 */
        /***/
        function(t, n, s) {
          function i() {
            var c = this.runtime, d = this.lib, y = this.compiler.Compiler, m = this.parser.Parser, O = this.nodes, C = this.lexer, M = c.contextOrFrameLookup, I = c.memberLookup, T, N;
            y && (T = y.prototype.assertType), m && (N = m.prototype.parseAggregate);
            function r() {
              c.contextOrFrameLookup = M, c.memberLookup = I, y && (y.prototype.assertType = T), m && (m.prototype.parseAggregate = N);
            }
            c.contextOrFrameLookup = function(v, h, p) {
              var _ = M.apply(this, arguments);
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
            if (O && y && m) {
              var u = O.Node.extend("Slice", {
                fields: ["start", "stop", "step"],
                init: function(v, h, p, _, w) {
                  p = p || new O.Literal(v, h, null), _ = _ || new O.Literal(v, h, null), w = w || new O.Literal(v, h, 1), this.parent(v, h, p, _, w);
                }
              });
              y.prototype.assertType = function(v) {
                v instanceof u || T.apply(this, arguments);
              }, y.prototype.compileSlice = function(v, h) {
                this._emit("("), this._compileExpression(v.start, h), this._emit("),("), this._compileExpression(v.stop, h), this._emit("),("), this._compileExpression(v.step, h), this._emit(")");
              }, m.prototype.parseAggregate = function() {
                var v = this, h = l(this.tokens);
                h.colno--, h.index--;
                try {
                  return N.apply(this);
                } catch (K) {
                  var p = l(this.tokens), _ = function() {
                    return d._assign(v.tokens, p), K;
                  };
                  d._assign(this.tokens, h), this.peeked = !1;
                  var w = this.peekToken();
                  if (w.type !== C.TOKEN_LEFT_BRACKET)
                    throw _();
                  this.nextToken();
                  for (var A = new u(w.lineno, w.colno), P = !1, R = 0; R <= A.fields.length && !this.skip(C.TOKEN_RIGHT_BRACKET); R++) {
                    if (R === A.fields.length)
                      if (P)
                        this.fail("parseSlice: too many slice components", w.lineno, w.colno);
                      else
                        break;
                    if (this.skip(C.TOKEN_COLON))
                      P = !0;
                    else {
                      var B = A.fields[R];
                      A[B] = this.parseExpression(), P = this.skip(C.TOKEN_COLON) || P;
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
                _.push(c.memberLookup(f, w));
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
            return a.iteritems = a.items, a.itervalues = a.values, a.iterkeys = a.keys, c.memberLookup = function(v, h, p) {
              return arguments.length === 4 ? k.apply(this, arguments) : (v = v || {}, d.isArray(v) && g(b, h) ? b[h].bind(v) : d.isObject(v) && g(a, h) ? a[h].bind(v) : I.apply(this, arguments));
            }, r;
          }
          t.exports = i;
        }
        /******/
      ])
    );
  });
})(hi);
const pi = (o, e) => {
  const t = St(o);
  return Ke.configure({ autoescape: !0 }), Ke.renderString(e, t);
}, St = (o) => {
  const e = {};
  return Object.entries(o).forEach(([t, n]) => {
    if (di(n)) {
      const s = Object.values(n.content);
      e[t] = s.filter((i) => !(i != null && i.hidden)).map((i) => St(i.questions));
      return;
    }
    e[t] = n.value;
  }), e;
}, di = (o) => Boolean(o.content);
class vi {
  constructor(e, t, n, s, i, c, d, y, m, O, C) {
    le(this, "interview", []);
    le(this, "nested", []);
    le(this, "currentRepeat", []);
    le(this, "currentRepeatEnd", []);
    le(this, "result", {});
    le(this, "getQuestion");
    le(this, "isLastRadio");
    le(this, "isEnd");
    le(this, "nextQuestion");
    le(this, "previousQuestion");
    le(this, "getCompletionPercen");
    le(this, "checkNextRadio");
    le(this, "checkFirstRadio");
    le(this, "isRepeat");
    le(this, "goToEndAndGetIdsAndGoBack");
    le(this, "setValueOfRepeat");
    le(this, "alphabetMap", { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f" });
    this.getQuestion = e, this.isLastRadio = t, this.getCompletionPercen = n, this.checkNextRadio = s, this.checkFirstRadio = i, this.isEnd = c, this.nextQuestion = d, this.previousQuestion = y, this.isRepeat = m, this.goToEndAndGetIdsAndGoBack = O, this.setValueOfRepeat = C;
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
      let d = n.find((y) => y === s);
      if (d || (n.push(s), d = n.find((y) => y === s)), c) {
        const y = n[n.indexOf(d) + 1];
        if (y)
          if (Array.isArray(y))
            n = y;
          else {
            const m = [];
            n.splice(
              n[n.indexOf(d) + 1],
              0,
              m
            ), n = m;
          }
        else {
          const m = [];
          n.push(m), n = m;
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
    const { id: n = "", title: s = "", value: i = "", type: c = "", indications: d = "", placeholder: y = "" } = e, m = { id: n, title: s, value: i, type: c, indications: d, placeholder: y };
    let O = this.currentRepeatEnd[this.currentRepeatEnd.length - 1];
    m.id === O && (this.currentRepeat.pop(), this.currentRepeatEnd.pop(), O = ""), t !== "start" && this.applyLogicToQuestion(m);
    const C = m;
    m.type === "multipleChoice" && (C.choices = e.choices), O && (C.belongsToRepeat = this.currentRepeat[this.currentRepeat.length - 1]), C.percentageOfCompletion = t === "start" ? 0 : t, this.insertQuestionInInterview(m, t);
  }
  async copyRepeat(e) {
    const t = e.id;
    await this.setValueOfRepeat(t, 1);
    const n = await this.goToEndAndGetIdsAndGoBack();
    await this.setValueOfRepeat(t, 2);
    const s = await this.goToEndAndGetIdsAndGoBack();
    await this.setValueOfRepeat(t, 1);
    for (let i = 0; i < n.length; i++)
      if (n[i] !== s[i]) {
        this.currentRepeatEnd.push(n[i]), this.currentRepeat.push(t);
        break;
      }
  }
  async copyQuestion(e = !1, t = !1) {
    const n = await this.getQuestion(), s = n.id;
    if (this.questionExistsInInterview(s))
      if (n.type === "multipleChoice")
        if (this.nested.find((c) => c.includes(s)) || this.applyLogicToQuestion(
          this.getQuestionInInterview(s)
        ), await this.isLastRadio()) {
          if (t && this.nested.length) {
            const c = await this.checkFirstRadio(n.id);
            this.setActiveMultipleOption(c.id, c.label);
          }
        } else {
          const c = await this.checkNextRadio(s);
          this.setActiveMultipleOption(c.id, c.label);
        }
      else
        this.applyLogicToQuestion(
          this.getQuestionInInterview(s)
        );
    else {
      if (e)
        this.start(n);
      else {
        const i = await this.getCompletionPercen();
        await this.isRepeat(n.id) ? (this.addQuestion(n, i), await this.copyRepeat(n)) : this.addQuestion(n, i);
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
          const y = s[d + 1];
          if (typeof c == "string") {
            const [m, O] = c.split("-");
            t += `${m}.value === '${O}'`, y && (typeof y == "string" && (t += " || "), Array.isArray(y) && (t += " && "));
          }
          Array.isArray(c) && (t += " (", n(c, !0), y && typeof y == "string" && (t += "|| ")), i && !y && (t += ") ");
        });
      };
      n(e.preLogic), e.logic = { showIf: t }, delete e.preLogic;
    });
  }
  relocateQuestionsInsideRepeat() {
    const e = [];
    for (let t = 0; t < this.interview.length; t++) {
      const n = this.interview[t];
      if (n.belongsToRepeat) {
        const s = this.interview.find(
          (i) => i.id === n.belongsToRepeat
        );
        s.questions || (s.questions = {}), s.questions[n.id] = n, delete n.belongsToRepeat, e.push(n.id);
      }
    }
    e.forEach((t) => {
      this.interview = this.interview.filter((n) => n.id !== t);
    });
  }
  createResult() {
    this.interview.forEach((e) => {
      this.result[e.id] = e;
    });
  }
  async copy() {
    return await this.copyQuestion(!0), await this.happyPath(), this.transform(), this.relocateQuestionsInsideRepeat(), this.createResult(), this.result;
  }
}
class Ct {
  constructor(e = "empty", t = { isRoot: !0, data: null }) {
    le(this, "interview", /* @__PURE__ */ new Map());
    le(this, "events");
    le(this, "current");
    le(this, "isRoot", !0);
    le(this, "data", {});
    le(this, "Cloner", vi);
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
    ii(e);
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
    const n = ai(e);
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
    var s;
    let e, t;
    const n = Array.from(this.interview);
    for (let i = 0; i < n.length; i++) {
      const c = n[i][1], d = c == null ? void 0 : c.isCurrent, y = (c == null ? void 0 : c.type) === "repeat";
      if (t = n[i + 1] && n[i + 1][1], d && !y && !t && !this.isRoot) {
        c.isEnd = !0, e = c;
        break;
      }
      if (d && !y && t) {
        c.isCurrent = !1, e = n[i + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (d && y && this.canBeShown(c)) {
        const m = c;
        m.isCurrent = !1, e = Array.from(m.content[0].nestedInterview.interview)[0][1], e.isCurrent = !0;
        break;
      }
      if (d && y && !this.canBeShown(c) && t) {
        c.isCurrent = !1, e = n[i + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (d && y && !this.canBeShown(c) && !t) {
        c.isEnd = !0, e = c;
        break;
      }
      if (!d && y && !this.canBeShown(c) && !t) {
        c.isEnd = !0, e = c;
        break;
      }
      if (!d && y && this.canBeShown(c)) {
        let m = !1;
        const O = c;
        for (let C = 0; C < parseInt(c.value); C++)
          if (!O.content[C].hidden) {
            const M = !O.content[C + 1] || ((s = O.content[C + 1]) == null ? void 0 : s.hidden);
            if (e = O.content[C].nestedInterview.getNextQuestion(), e) {
              if (O.content[C].nestedInterview.isQuestionTheLastOfInterview(e.id) && M && t) {
                const T = e;
                if (T.exitRepeat) {
                  T.isEnd = !1, T.isCurrent = !1, e = n[i + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion()), delete T.exitRepeat;
                  break;
                } else
                  T.exitRepeat = !0;
              }
              if (e.isEnd)
                if (C + 1 < parseInt(c.value))
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
              M && t && (m = !0);
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
    const t = Array.from(this.interview), n = t[0][1];
    if (n.isCurrent)
      return this.isRoot ? n : (e && (e.isCurrent = !0), n.isCurrent = !1, e);
    let s = n, i;
    for (let c = 1; c < t.length; c++) {
      const d = t[c][1], y = this.canBeShown(d);
      if (t[c + 1] && t[c + 1][1], d.isCurrent) {
        s.isCurrent = !0, i = s, d.isCurrent = !1;
        break;
      } else if (y && (s = d), d.type === "repeat") {
        const m = d;
        for (let O = 0; O < parseInt(d.value) && !(!m.content[O].hidden && (i = m.content[O].nestedInterview.getPreviousQuestion(s), i != null && i.isPrevious && (i.isPrevious = !1, s = i, i = null), i && i.isCurrent)); O++)
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
              const y = Array.from(c.content[d].nestedInterview.interview);
              if (t = c.content[d].nestedInterview.reversePreviousUtil(y), t && (t.isPrevious = !0), t)
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
          const y = d.nestedInterview.getProgress();
          y.currentPosition !== 0 && (t = e + y.currentPosition), e += y.total;
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
    si(t, n), n.value = t, (n == null ? void 0 : n.type) === "multipleChoice" && this.setRadioChecked(n, t), (n == null ? void 0 : n.type) === "repeat" && this.buildContentForRepeatQuestion(n, t), this.data[e] ? this.data[e].value = n.value : this.data[e] = { value: n.value }, this.events.dispatch("set-value", this.interview.get(e));
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
    const { range: n, id: s, questions: i, indexInsideRepeat: c } = e, { min: d, max: y } = n;
    t = ri(e.value, d, y), e.value = t, e.content || (e.content = {}), this.data[s] ? this.data[s].value = t : this.data[s] = { value: t, content: {} };
    for (let O = 0; O < t; O++) {
      if (e.content[O]) {
        e.content[O].hidden = !1;
        continue;
      }
      this.data[s].content[O] = { hidden: !1, questions: {} };
      const C = new Ct(fi(i, O, c), {
        isRoot: !1,
        events: this.events,
        data: this.data[s].content[O].questions
      });
      e.content[O] = { hidden: !1, nestedInterview: C };
    }
    const m = Object.keys(e.content);
    if (t < m.length)
      for (let O = t; O < m.length; O++)
        e.content[O].hidden = !0, this.data[s].content[O].hidden = !0;
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
    return pi(this.data, e);
  }
  getStepById(e) {
    const t = this.interview.get(e);
    return t || null;
  }
  checkIfIdIsValid(e) {
    if (!e)
      throw new Error("No id provided");
    return this.interview.has(e) ? { isValid: !1, message: "Id already exists" } : !Lt(e) && !xt(e) ? { isValid: !1, message: "Id must be in camel case" } : { isValid: !0, message: "" };
  }
  changeIdOfQuestion(e, t) {
    if (!this.interview.get(e))
      throw new Error("No question with id:" + e);
    const s = this.checkIfIdIsValid(t);
    if (!s.isValid)
      throw new Error(s.message);
    const i = Array.from(this.interview, ([d, y]) => ({ name: d, value: y }));
    i.forEach((d, y) => {
      d.name === e && (i[y].value.id = t, i[y].name = t);
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
  Ct as GuidedInterview
};
