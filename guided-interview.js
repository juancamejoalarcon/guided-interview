var Dt = Object.defineProperty;
var Ut = (o, e, t) => e in o ? Dt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var le = (o, e, t) => (Ut(o, typeof e != "symbol" ? e + "" : e, t), t);
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vt(o) {
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
var Gt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
Qe.default = Gt;
Object.defineProperty(Ce, "__esModule", {
  value: !0
});
Ce.default = void 0;
var qt = Wt(Qe);
function Wt(o) {
  return o && o.__esModule ? o : { default: o };
}
function Ht(o) {
  return typeof o == "string" && qt.default.test(o);
}
var Yt = Ht;
Ce.default = Yt;
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
Ae.unsafeStringify = wt;
var zt = Jt(Ce);
function Jt(o) {
  return o && o.__esModule ? o : { default: o };
}
const de = [];
for (let o = 0; o < 256; ++o)
  de.push((o + 256).toString(16).slice(1));
function wt(o, e = 0) {
  return (de[o[e + 0]] + de[o[e + 1]] + de[o[e + 2]] + de[o[e + 3]] + "-" + de[o[e + 4]] + de[o[e + 5]] + "-" + de[o[e + 6]] + de[o[e + 7]] + "-" + de[o[e + 8]] + de[o[e + 9]] + "-" + de[o[e + 10]] + de[o[e + 11]] + de[o[e + 12]] + de[o[e + 13]] + de[o[e + 14]] + de[o[e + 15]]).toLowerCase();
}
function Xt(o, e = 0) {
  const t = wt(o, e);
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
var ei = ii(Ve), ti = Ae;
function ii(o) {
  return o && o.__esModule ? o : { default: o };
}
let dt, st, ot = 0, at = 0;
function ni(o, e, t) {
  let i = e && t || 0;
  const r = e || new Array(16);
  o = o || {};
  let n = o.node || dt, u = o.clockseq !== void 0 ? o.clockseq : st;
  if (n == null || u == null) {
    const P = o.random || (o.rng || ei.default)();
    n == null && (n = dt = [P[0] | 1, P[1], P[2], P[3], P[4], P[5]]), u == null && (u = st = (P[6] << 8 | P[7]) & 16383);
  }
  let p = o.msecs !== void 0 ? o.msecs : Date.now(), m = o.nsecs !== void 0 ? o.nsecs : at + 1;
  const g = p - ot + (m - at) / 1e4;
  if (g < 0 && o.clockseq === void 0 && (u = u + 1 & 16383), (g < 0 || p > ot) && o.nsecs === void 0 && (m = 0), m >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ot = p, at = m, st = u, p += 122192928e5;
  const x = ((p & 268435455) * 1e4 + m) % 4294967296;
  r[i++] = x >>> 24 & 255, r[i++] = x >>> 16 & 255, r[i++] = x >>> 8 & 255, r[i++] = x & 255;
  const S = p / 4294967296 * 1e4 & 268435455;
  r[i++] = S >>> 8 & 255, r[i++] = S & 255, r[i++] = S >>> 24 & 15 | 16, r[i++] = S >>> 16 & 255, r[i++] = u >>> 8 | 128, r[i++] = u & 255;
  for (let P = 0; P < 6; ++P)
    r[i + P] = n[P];
  return e || (0, ti.unsafeStringify)(r);
}
var ri = ni;
Ue.default = ri;
var $e = {}, Te = {}, Pe = {};
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.default = void 0;
var si = oi(Ce);
function oi(o) {
  return o && o.__esModule ? o : { default: o };
}
function ai(o) {
  if (!(0, si.default)(o))
    throw TypeError("Invalid UUID");
  let e;
  const t = new Uint8Array(16);
  return t[0] = (e = parseInt(o.slice(0, 8), 16)) >>> 24, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = e & 255, t[4] = (e = parseInt(o.slice(9, 13), 16)) >>> 8, t[5] = e & 255, t[6] = (e = parseInt(o.slice(14, 18), 16)) >>> 8, t[7] = e & 255, t[8] = (e = parseInt(o.slice(19, 23), 16)) >>> 8, t[9] = e & 255, t[10] = (e = parseInt(o.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = e / 4294967296 & 255, t[12] = e >>> 24 & 255, t[13] = e >>> 16 & 255, t[14] = e >>> 8 & 255, t[15] = e & 255, t;
}
var li = ai;
Pe.default = li;
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.URL = Te.DNS = void 0;
Te.default = pi;
var ui = Ae, ci = fi(Pe);
function fi(o) {
  return o && o.__esModule ? o : { default: o };
}
function hi(o) {
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
function pi(o, e, t) {
  function i(r, n, u, p) {
    var m;
    if (typeof r == "string" && (r = hi(r)), typeof n == "string" && (n = (0, ci.default)(n)), ((m = n) === null || m === void 0 ? void 0 : m.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let g = new Uint8Array(16 + r.length);
    if (g.set(n), g.set(r, n.length), g = t(g), g[6] = g[6] & 15 | e, g[8] = g[8] & 63 | 128, u) {
      p = p || 0;
      for (let x = 0; x < 16; ++x)
        u[p + x] = g[x];
      return u;
    }
    return (0, ui.unsafeStringify)(g);
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
function di(o) {
  if (typeof o == "string") {
    const e = unescape(encodeURIComponent(o));
    o = new Uint8Array(e.length);
    for (let t = 0; t < e.length; ++t)
      o[t] = e.charCodeAt(t);
  }
  return vi(mi(gi(o), o.length * 8));
}
function vi(o) {
  const e = [], t = o.length * 32, i = "0123456789abcdef";
  for (let r = 0; r < t; r += 8) {
    const n = o[r >> 5] >>> r % 32 & 255, u = parseInt(i.charAt(n >>> 4 & 15) + i.charAt(n & 15), 16);
    e.push(u);
  }
  return e;
}
function bt(o) {
  return (o + 64 >>> 9 << 4) + 14 + 1;
}
function mi(o, e) {
  o[e >> 5] |= 128 << e % 32, o[bt(e) - 1] = e;
  let t = 1732584193, i = -271733879, r = -1732584194, n = 271733878;
  for (let u = 0; u < o.length; u += 16) {
    const p = t, m = i, g = r, x = n;
    t = ve(t, i, r, n, o[u], 7, -680876936), n = ve(n, t, i, r, o[u + 1], 12, -389564586), r = ve(r, n, t, i, o[u + 2], 17, 606105819), i = ve(i, r, n, t, o[u + 3], 22, -1044525330), t = ve(t, i, r, n, o[u + 4], 7, -176418897), n = ve(n, t, i, r, o[u + 5], 12, 1200080426), r = ve(r, n, t, i, o[u + 6], 17, -1473231341), i = ve(i, r, n, t, o[u + 7], 22, -45705983), t = ve(t, i, r, n, o[u + 8], 7, 1770035416), n = ve(n, t, i, r, o[u + 9], 12, -1958414417), r = ve(r, n, t, i, o[u + 10], 17, -42063), i = ve(i, r, n, t, o[u + 11], 22, -1990404162), t = ve(t, i, r, n, o[u + 12], 7, 1804603682), n = ve(n, t, i, r, o[u + 13], 12, -40341101), r = ve(r, n, t, i, o[u + 14], 17, -1502002290), i = ve(i, r, n, t, o[u + 15], 22, 1236535329), t = me(t, i, r, n, o[u + 1], 5, -165796510), n = me(n, t, i, r, o[u + 6], 9, -1069501632), r = me(r, n, t, i, o[u + 11], 14, 643717713), i = me(i, r, n, t, o[u], 20, -373897302), t = me(t, i, r, n, o[u + 5], 5, -701558691), n = me(n, t, i, r, o[u + 10], 9, 38016083), r = me(r, n, t, i, o[u + 15], 14, -660478335), i = me(i, r, n, t, o[u + 4], 20, -405537848), t = me(t, i, r, n, o[u + 9], 5, 568446438), n = me(n, t, i, r, o[u + 14], 9, -1019803690), r = me(r, n, t, i, o[u + 3], 14, -187363961), i = me(i, r, n, t, o[u + 8], 20, 1163531501), t = me(t, i, r, n, o[u + 13], 5, -1444681467), n = me(n, t, i, r, o[u + 2], 9, -51403784), r = me(r, n, t, i, o[u + 7], 14, 1735328473), i = me(i, r, n, t, o[u + 12], 20, -1926607734), t = ge(t, i, r, n, o[u + 5], 4, -378558), n = ge(n, t, i, r, o[u + 8], 11, -2022574463), r = ge(r, n, t, i, o[u + 11], 16, 1839030562), i = ge(i, r, n, t, o[u + 14], 23, -35309556), t = ge(t, i, r, n, o[u + 1], 4, -1530992060), n = ge(n, t, i, r, o[u + 4], 11, 1272893353), r = ge(r, n, t, i, o[u + 7], 16, -155497632), i = ge(i, r, n, t, o[u + 10], 23, -1094730640), t = ge(t, i, r, n, o[u + 13], 4, 681279174), n = ge(n, t, i, r, o[u], 11, -358537222), r = ge(r, n, t, i, o[u + 3], 16, -722521979), i = ge(i, r, n, t, o[u + 6], 23, 76029189), t = ge(t, i, r, n, o[u + 9], 4, -640364487), n = ge(n, t, i, r, o[u + 12], 11, -421815835), r = ge(r, n, t, i, o[u + 15], 16, 530742520), i = ge(i, r, n, t, o[u + 2], 23, -995338651), t = ye(t, i, r, n, o[u], 6, -198630844), n = ye(n, t, i, r, o[u + 7], 10, 1126891415), r = ye(r, n, t, i, o[u + 14], 15, -1416354905), i = ye(i, r, n, t, o[u + 5], 21, -57434055), t = ye(t, i, r, n, o[u + 12], 6, 1700485571), n = ye(n, t, i, r, o[u + 3], 10, -1894986606), r = ye(r, n, t, i, o[u + 10], 15, -1051523), i = ye(i, r, n, t, o[u + 1], 21, -2054922799), t = ye(t, i, r, n, o[u + 8], 6, 1873313359), n = ye(n, t, i, r, o[u + 15], 10, -30611744), r = ye(r, n, t, i, o[u + 6], 15, -1560198380), i = ye(i, r, n, t, o[u + 13], 21, 1309151649), t = ye(t, i, r, n, o[u + 4], 6, -145523070), n = ye(n, t, i, r, o[u + 11], 10, -1120210379), r = ye(r, n, t, i, o[u + 2], 15, 718787259), i = ye(i, r, n, t, o[u + 9], 21, -343485551), t = xe(t, p), i = xe(i, m), r = xe(r, g), n = xe(n, x);
  }
  return [t, i, r, n];
}
function gi(o) {
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
function yi(o, e) {
  return o << e | o >>> 32 - e;
}
function qe(o, e, t, i, r, n) {
  return xe(yi(xe(xe(e, o), xe(i, n)), r), t);
}
function ve(o, e, t, i, r, n, u) {
  return qe(e & t | ~e & i, o, e, r, n, u);
}
function me(o, e, t, i, r, n, u) {
  return qe(e & i | t & ~i, o, e, r, n, u);
}
function ge(o, e, t, i, r, n, u) {
  return qe(e ^ t ^ i, o, e, r, n, u);
}
function ye(o, e, t, i, r, n, u) {
  return qe(t ^ (e | ~i), o, e, r, n, u);
}
var wi = di;
Ge.default = wi;
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.default = void 0;
var _i = Ot(Te), Ei = Ot(Ge);
function Ot(o) {
  return o && o.__esModule ? o : { default: o };
}
const bi = (0, _i.default)("v3", 48, Ei.default);
var Oi = bi;
$e.default = Oi;
var We = {}, He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.default = void 0;
const ki = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var Li = {
  randomUUID: ki
};
He.default = Li;
Object.defineProperty(We, "__esModule", {
  value: !0
});
We.default = void 0;
var vt = kt(He), xi = kt(Ve), Ti = Ae;
function kt(o) {
  return o && o.__esModule ? o : { default: o };
}
function Ai(o, e, t) {
  if (vt.default.randomUUID && !e && !o)
    return vt.default.randomUUID();
  o = o || {};
  const i = o.random || (o.rng || xi.default)();
  if (i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, e) {
    t = t || 0;
    for (let r = 0; r < 16; ++r)
      e[t + r] = i[r];
    return e;
  }
  return (0, Ti.unsafeStringify)(i);
}
var Si = Ai;
We.default = Si;
var Ye = {}, ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.default = void 0;
function Ci(o, e, t, i) {
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
function Ii(o) {
  const e = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof o == "string") {
    const u = unescape(encodeURIComponent(o));
    o = [];
    for (let p = 0; p < u.length; ++p)
      o.push(u.charCodeAt(p));
  } else
    Array.isArray(o) || (o = Array.prototype.slice.call(o));
  o.push(128);
  const i = o.length / 4 + 2, r = Math.ceil(i / 16), n = new Array(r);
  for (let u = 0; u < r; ++u) {
    const p = new Uint32Array(16);
    for (let m = 0; m < 16; ++m)
      p[m] = o[u * 64 + m * 4] << 24 | o[u * 64 + m * 4 + 1] << 16 | o[u * 64 + m * 4 + 2] << 8 | o[u * 64 + m * 4 + 3];
    n[u] = p;
  }
  n[r - 1][14] = (o.length - 1) * 8 / Math.pow(2, 32), n[r - 1][14] = Math.floor(n[r - 1][14]), n[r - 1][15] = (o.length - 1) * 8 & 4294967295;
  for (let u = 0; u < r; ++u) {
    const p = new Uint32Array(80);
    for (let I = 0; I < 16; ++I)
      p[I] = n[u][I];
    for (let I = 16; I < 80; ++I)
      p[I] = lt(p[I - 3] ^ p[I - 8] ^ p[I - 14] ^ p[I - 16], 1);
    let m = t[0], g = t[1], x = t[2], S = t[3], P = t[4];
    for (let I = 0; I < 80; ++I) {
      const T = Math.floor(I / 20), R = lt(m, 5) + Ci(T, g, x, S) + P + e[T] + p[I] >>> 0;
      P = S, S = x, x = lt(g, 30) >>> 0, g = m, m = R;
    }
    t[0] = t[0] + m >>> 0, t[1] = t[1] + g >>> 0, t[2] = t[2] + x >>> 0, t[3] = t[3] + S >>> 0, t[4] = t[4] + P >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var Ri = Ii;
ze.default = Ri;
Object.defineProperty(Ye, "__esModule", {
  value: !0
});
Ye.default = void 0;
var Ni = Lt(Te), Pi = Lt(ze);
function Lt(o) {
  return o && o.__esModule ? o : { default: o };
}
const Bi = (0, Ni.default)("v5", 80, Pi.default);
var Fi = Bi;
Ye.default = Fi;
var Je = {};
Object.defineProperty(Je, "__esModule", {
  value: !0
});
Je.default = void 0;
var Mi = "00000000-0000-0000-0000-000000000000";
Je.default = Mi;
var Xe = {};
Object.defineProperty(Xe, "__esModule", {
  value: !0
});
Xe.default = void 0;
var Ki = ji(Ce);
function ji(o) {
  return o && o.__esModule ? o : { default: o };
}
function Di(o) {
  if (!(0, Ki.default)(o))
    throw TypeError("Invalid UUID");
  return parseInt(o.slice(14, 15), 16);
}
var Ui = Di;
Xe.default = Ui;
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
      return g.default;
    }
  }), Object.defineProperty(o, "stringify", {
    enumerable: !0,
    get: function() {
      return m.default;
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
      return u.default;
    }
  });
  var e = x(Ue), t = x($e), i = x(We), r = x(Ye), n = x(Je), u = x(Xe), p = x(Ce), m = x(Ae), g = x(Pe);
  function x(S) {
    return S && S.__esModule ? S : { default: S };
  }
})(yt);
var Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.RandomStringConfig = void 0;
class Vi {
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
Ze.RandomStringConfig = Vi;
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
const $i = {}, Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $i
}, Symbol.toStringTag, { value: "Module" })), qi = /* @__PURE__ */ Vt(Gi);
var Wi = ct && ct.__importDefault || function(o) {
  return o && o.__esModule ? o : { default: o };
};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.RandomStringGenerator = void 0;
const Hi = Wi(qi);
class Yi {
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
    const i = Hi.default.randomBytes(t), r = e.length - 1;
    let n = "";
    for (; t--; )
      n += e[i[t] & r];
    return n;
  }
}
tt.RandomStringGenerator = Yi;
var it = {};
Object.defineProperty(it, "__esModule", { value: !0 });
it.StringReplacer = void 0;
class zi {
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
it.StringReplacer = zi;
Object.defineProperty(De, "__esModule", { value: !0 });
De.Str = void 0;
const mt = yt, Ji = Ze, Xi = et, Zi = tt, ut = it;
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
    const t = new Ji.RandomStringConfig(), i = new Xi.RandomStringBuilder(t);
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
    return new Zi.RandomStringGenerator(te, e).generate();
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
const en = De, be = (o) => new en.Str(o);
je.Str = be;
be.uuid = () => be().uuid();
be.random = (o) => be().random(o);
be.isString = (o) => be().isString(o);
be.isAlphaNumeric = (o) => be().isAlphaNumeric(o);
be.isSymbol = (o) => be().isSymbol(o);
var tn = je.default = be;
const gt = () => process.env.NODE_ENV === "test", nn = () => "id-" + (Math.random() + 1).toString(36).substring(7), xt = (o) => tn(o).isCamel(), Tt = (o) => /^([a-z]{1,})(_[a-z0-9]{1,})*$/.test(o), At = (o) => {
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
  const i = e.map((r, n) => e.find((u, p) => {
    if (u.type === "repeat" && (t = St(u.questions)), n !== p && u.id === r.id)
      return r;
  })).filter(Boolean);
  return t.length && i.push(...t), i;
}, rn = (o) => {
  var i;
  const e = St(o);
  if (e.length)
    throw new Error(`Duplicated id values: ${(i = e[0]) == null ? void 0 : i.id}`);
  const t = At(o);
  if (t)
    throw new Error(`ID must be in camel case: ${t}`);
  return !0;
}, sn = (o, e, t) => o < e ? (gt() || console.warn(`Value ${o} is lower than min ${e}. Returning min.`), e) : o > t ? (gt() || console.warn(`Value ${o} is higher than max ${t}. Returning max.`), t) : o, on = (o, e) => {
  if (e.type === "repeat" && isNaN(o))
    throw new Error("Value of repeat question must be a number");
}, pt = class {
  constructor() {
    le(this, "subscribers");
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
le(Me, "nextId", 0);
const an = {
  text: !0,
  multipleChoice: !0,
  number: !0,
  date: !0,
  repeat: !0
}, ln = (o, e = !1) => {
  if (!an[o.type])
    throw new Error("Invalid question type");
  const t = o.id || nn();
  let i;
  return o.type === "text" ? i = ft(o) : o.type === "date" ? i = un(o) : o.type === "multipleChoice" ? i = cn(o) : o.type === "repeat" ? i = fn(o) : i = ft(o), {
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
}), un = (o) => ({
  format: o.format || "dd/mm/yyyy",
  ...ft(o)
}), cn = (o) => {
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
}, fn = (o) => ({
  value: o.value || "",
  range: o.range || { min: 0, max: 0 },
  questions: o.questions || {}
}), hn = (o, e, t = null) => {
  const i = JSON.parse(JSON.stringify(o));
  return Object.entries(i).forEach(([r, n]) => {
    const u = e + 1;
    n.title && (n.title = n.title.replace(/\<%= index %>/g, u.toString())), t ? n.indexInsideRepeat = t + `.${u}` : n.indexInsideRepeat = u.toString();
  }), i;
};
var Ke = {}, pn = {
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
          var u = i[n] = {
            /******/
            i: n,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return t[n].call(u.exports, u, u.exports, r), u.l = !0, u.exports;
        }
        return r.m = t, r.c = i, r.d = function(n, u, p) {
          r.o(n, u) || Object.defineProperty(n, u, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: p
            /******/
          });
        }, r.n = function(n) {
          var u = n && n.__esModule ? (
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
          return r.d(u, "a", u), u;
        }, r.o = function(n, u) {
          return Object.prototype.hasOwnProperty.call(n, u);
        }, r.p = "", r(r.s = 11);
      }([
        /* 0 */
        /***/
        function(t, g, r) {
          var n = Array.prototype, u = Object.prototype, p = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\\": "&#92;"
          }, m = /[&"'<>\\]/g, g = t.exports = {};
          function x(E, C) {
            return u.hasOwnProperty.call(E, C);
          }
          g.hasOwnProp = x;
          function S(E) {
            return p[E];
          }
          function P(E, C, j) {
            if (j.Update || (j = new g.TemplateError(j)), j.Update(E), !C) {
              var D = j;
              j = new Error(D.message), j.name = D.name;
            }
            return j;
          }
          g._prettifyError = P;
          function I(E, C, j) {
            var D, $;
            E instanceof Error && ($ = E, E = $.name + ": " + $.message), Object.setPrototypeOf ? (D = new Error(E), Object.setPrototypeOf(D, I.prototype)) : (D = this, Object.defineProperty(D, "message", {
              enumerable: !1,
              writable: !0,
              value: E
            })), Object.defineProperty(D, "name", {
              value: "Template render error"
            }), Error.captureStackTrace && Error.captureStackTrace(D, this.constructor);
            var ie;
            if ($) {
              var z = Object.getOwnPropertyDescriptor($, "stack");
              ie = z && (z.get || function() {
                return z.value;
              }), ie || (ie = function() {
                return $.stack;
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
              value: $
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
          }), g.TemplateError = I;
          function T(E) {
            return E.replace(m, S);
          }
          g.escape = T;
          function R(E) {
            return u.toString.call(E) === "[object Function]";
          }
          g.isFunction = R;
          function s(E) {
            return u.toString.call(E) === "[object Array]";
          }
          g.isArray = s;
          function l(E) {
            return u.toString.call(E) === "[object String]";
          }
          g.isString = l;
          function c(E) {
            return u.toString.call(E) === "[object Object]";
          }
          g.isObject = c;
          function O(E) {
            return E ? typeof E == "string" ? E.split(".") : [E] : [];
          }
          function y(E) {
            var C = O(E);
            return function(D) {
              for (var $ = D, ie = 0; ie < C.length; ie++) {
                var z = C[ie];
                if (x($, z))
                  $ = $[z];
                else
                  return;
              }
              return $;
            };
          }
          g.getAttrGetter = y;
          function b(E, C, j) {
            for (var D = {}, $ = R(C) ? C : y(C), ie = 0; ie < E.length; ie++) {
              var z = E[ie], ce = $(z, ie);
              if (ce === void 0 && j === !0)
                throw new TypeError('groupby: attribute "' + C + '" resolved to undefined');
              (D[ce] || (D[ce] = [])).push(z);
            }
            return D;
          }
          g.groupBy = b;
          function a(E) {
            return Array.prototype.slice.call(E);
          }
          g.toArray = a;
          function f(E) {
            var C = [];
            if (!E)
              return C;
            for (var j = E.length, D = a(arguments).slice(1), $ = -1; ++$ < j; )
              A(D, E[$]) === -1 && C.push(E[$]);
            return C;
          }
          g.without = f;
          function v(E, C) {
            for (var j = "", D = 0; D < C; D++)
              j += E;
            return j;
          }
          g.repeat = v;
          function h(E, C, j) {
            if (E != null) {
              if (n.forEach && E.forEach === n.forEach)
                E.forEach(C, j);
              else if (E.length === +E.length)
                for (var D = 0, $ = E.length; D < $; D++)
                  C.call(j, E[D], D, E);
            }
          }
          g.each = h;
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
          g.map = d;
          function _(E, C, j) {
            var D = -1;
            function $() {
              D++, D < E.length ? C(E[D], D, $, j) : j();
            }
            $();
          }
          g.asyncIter = _;
          function w(E, C, j) {
            var D = B(E || {}), $ = D.length, ie = -1;
            function z() {
              ie++;
              var ce = D[ie];
              ie < $ ? C(ce, E[ce], ie, $, z) : j();
            }
            z();
          }
          g.asyncFor = w;
          function A(E, C, j) {
            return Array.prototype.indexOf.call(E || [], C, j);
          }
          g.indexOf = A;
          function B(E) {
            var C = [];
            for (var j in E)
              x(E, j) && C.push(j);
            return C;
          }
          g.keys = B;
          function N(E) {
            return B(E).map(function(C) {
              return [C, E[C]];
            });
          }
          g._entries = N;
          function F(E) {
            return B(E).map(function(C) {
              return E[C];
            });
          }
          g._values = F;
          function K(E, C) {
            return E = E || {}, B(C).forEach(function(j) {
              E[j] = C[j];
            }), E;
          }
          g._assign = g.extend = K;
          function L(E, C) {
            if (s(C) || l(C))
              return C.indexOf(E) !== -1;
            if (c(C))
              return E in C;
            throw new Error('Cannot use "in" operator to search for "' + E + '" in unexpected types.');
          }
          g.inOperator = L;
        },
        /* 1 */
        /***/
        function(t, i, r) {
          function n(l, c) {
            for (var O = 0; O < c.length; O++) {
              var y = c[O];
              y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(l, p(y.key), y);
            }
          }
          function u(l, c, O) {
            return c && n(l.prototype, c), O && n(l, O), Object.defineProperty(l, "prototype", { writable: !1 }), l;
          }
          function p(l) {
            var c = m(l, "string");
            return typeof c == "symbol" ? c : String(c);
          }
          function m(l, c) {
            if (typeof l != "object" || l === null)
              return l;
            var O = l[Symbol.toPrimitive];
            if (O !== void 0) {
              var y = O.call(l, c || "default");
              if (typeof y != "object")
                return y;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (c === "string" ? String : Number)(l);
          }
          function g(l, c) {
            l.prototype = Object.create(c.prototype), l.prototype.constructor = l, x(l, c);
          }
          function x(l, c) {
            return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, b) {
              return y.__proto__ = b, y;
            }, x(l, c);
          }
          var S = r(16), P = r(0);
          function I(l, c) {
            return typeof l != "function" || typeof c != "function" ? c : function() {
              var y = this.parent;
              this.parent = l;
              var b = c.apply(this, arguments);
              return this.parent = y, b;
            };
          }
          function T(l, c, O) {
            O = O || {}, P.keys(O).forEach(function(b) {
              O[b] = I(l.prototype[b], O[b]);
            });
            var y = /* @__PURE__ */ function(b) {
              g(a, b);
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
            return P._assign(y.prototype, O), y;
          }
          var R = /* @__PURE__ */ function() {
            function l() {
              this.init.apply(this, arguments);
            }
            var c = l.prototype;
            return c.init = function() {
            }, l.extend = function(y, b) {
              return typeof y == "object" && (b = y, y = "anonymous"), T(this, y, b);
            }, u(l, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), l;
          }(), s = /* @__PURE__ */ function(l) {
            g(c, l);
            function c() {
              var y, b;
              return b = l.call(this) || this, (y = b).init.apply(y, arguments), b;
            }
            var O = c.prototype;
            return O.init = function() {
            }, c.extend = function(b, a) {
              return typeof b == "object" && (a = b, b = "anonymous"), T(this, b, a);
            }, u(c, [{
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
          var n = r(0), u = Array.from, p = typeof Symbol == "function" && Symbol.iterator && typeof u == "function", m = /* @__PURE__ */ function() {
            function d(w, A) {
              this.variables = /* @__PURE__ */ Object.create(null), this.parent = w, this.topLevel = !1, this.isolateWrites = A;
            }
            var _ = d.prototype;
            return _.set = function(A, B, N) {
              var F = A.split("."), K = this.variables, L = this;
              if (N && (L = this.resolve(F[0], !0))) {
                L.set(A, B);
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
          function g(d, _, w) {
            return function() {
              for (var B = arguments.length, N = new Array(B), F = 0; F < B; F++)
                N[F] = arguments[F];
              var K = I(N), L, E = P(N);
              if (K > d.length)
                L = N.slice(0, d.length), N.slice(L.length, K).forEach(function(D, $) {
                  $ < _.length && (E[_[$]] = D);
                }), L.push(E);
              else if (K < d.length) {
                L = N.slice(0, K);
                for (var C = K; C < d.length; C++) {
                  var j = d[C];
                  L.push(E[j]), delete E[j];
                }
                L.push(E);
              } else
                L = N;
              return w.apply(this, L);
            };
          }
          function x(d) {
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
          function l(d, _) {
            return d = d ?? "", _ && !(d instanceof T) && (d = n.escape(d.toString())), d;
          }
          function c(d, _, w) {
            if (d == null)
              throw new n.TemplateError("attempted to output null or undefined value", _ + 1, w + 1);
            return d;
          }
          function O(d, _) {
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
          function a(d, _, w) {
            return d.lineno ? d : new n.TemplateError(d, _, w);
          }
          function f(d, _, w, A) {
            if (n.isArray(d)) {
              var B = d.length;
              n.asyncIter(d, function(F, K, L) {
                switch (_) {
                  case 1:
                    w(F, K, B, L);
                    break;
                  case 2:
                    w(F[0], F[1], K, B, L);
                    break;
                  case 3:
                    w(F[0], F[1], F[2], K, B, L);
                    break;
                  default:
                    F.push(K, B, L), w.apply(this, F);
                }
              }, A);
            } else
              n.asyncFor(d, function(F, K, L, E, C) {
                w(F, K, L, E, C);
              }, A);
          }
          function v(d, _, w, A) {
            var B = 0, N, F;
            function K($, ie) {
              B++, F[$] = ie, B === N && A(null, F.join(""));
            }
            if (n.isArray(d))
              if (N = d.length, F = new Array(N), N === 0)
                A(null, "");
              else
                for (var L = 0; L < d.length; L++) {
                  var E = d[L];
                  switch (_) {
                    case 1:
                      w(E, L, N, K);
                      break;
                    case 2:
                      w(E[0], E[1], L, N, K);
                      break;
                    case 3:
                      w(E[0], E[1], E[2], L, N, K);
                      break;
                    default:
                      E.push(L, N, K), w.apply(this, E);
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
            return typeof d != "object" || d === null || n.isArray(d) ? d : p && Symbol.iterator in d ? u(d) : d;
          }
          t.exports = {
            Frame: m,
            makeMacro: g,
            makeKeywordArgs: x,
            numArgs: I,
            suppressValue: l,
            ensureDefined: c,
            memberLookup: O,
            contextOrFrameLookup: b,
            callWrap: y,
            handleError: a,
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
          function n(W, H) {
            for (var re = 0; re < H.length; re++) {
              var ne = H[re];
              ne.enumerable = ne.enumerable || !1, ne.configurable = !0, "value" in ne && (ne.writable = !0), Object.defineProperty(W, p(ne.key), ne);
            }
          }
          function u(W, H, re) {
            return H && n(W.prototype, H), re && n(W, re), Object.defineProperty(W, "prototype", { writable: !1 }), W;
          }
          function p(W) {
            var H = m(W, "string");
            return typeof H == "symbol" ? H : String(H);
          }
          function m(W, H) {
            if (typeof W != "object" || W === null)
              return W;
            var re = W[Symbol.toPrimitive];
            if (re !== void 0) {
              var ne = re.call(W, H || "default");
              if (typeof ne != "object")
                return ne;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (H === "string" ? String : Number)(W);
          }
          function g(W, H) {
            W.prototype = Object.create(H.prototype), W.prototype.constructor = W, x(W, H);
          }
          function x(W, H) {
            return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(ne, oe) {
              return ne.__proto__ = oe, ne;
            }, x(W, H);
          }
          var S = r(1), P = S.Obj;
          function I(W, H, re) {
            W instanceof H && re.push(W), W instanceof T && W.findAll(H, re);
          }
          var T = /* @__PURE__ */ function(W) {
            g(H, W);
            function H() {
              return W.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, fe) {
              for (var _e = arguments, Se = this, Ne = arguments.length, Mt = new Array(Ne > 2 ? Ne - 2 : 0), Be = 2; Be < Ne; Be++)
                Mt[Be - 2] = arguments[Be];
              this.lineno = oe, this.colno = fe, this.fields.forEach(function(Kt, jt) {
                var rt = _e[jt + 2];
                rt === void 0 && (rt = null), Se[Kt] = rt;
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
          }(P), R = /* @__PURE__ */ function(W) {
            g(H, W);
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
          }(T), s = /* @__PURE__ */ function(W) {
            g(H, W);
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
          }(T), l = s.extend("Root"), c = R.extend("Literal"), O = R.extend("Symbol"), y = s.extend("Group"), b = s.extend("Array"), a = T.extend("Pair", {
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
          }), L = /* @__PURE__ */ function(W) {
            g(H, W);
            function H() {
              return W.apply(this, arguments) || this;
            }
            var re = H.prototype;
            return re.init = function(oe, fe, _e, Se, Ne) {
              W.prototype.init.call(this, oe, fe, _e, Se || new s(), Ne);
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
          }), C = E.extend("Filter"), j = C.extend("FilterAsync", {
            fields: ["name", "args", "symbol"]
          }), D = f.extend("KeywordArgs"), $ = T.extend("Block", {
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
          }), Q = T.extend("Case", {
            fields: ["cond", "body"]
          }), q = s.extend("Output"), G = T.extend("Capture", {
            fields: ["body"]
          }), se = c.extend("TemplateData"), we = T.extend("UnaryOp", {
            fields: ["target"]
          }), he = T.extend("BinOp", {
            fields: ["left", "right"]
          }), ke = he.extend("In"), k = he.extend("Is"), M = he.extend("Or"), V = he.extend("And"), U = we.extend("Not"), Y = he.extend("Add"), J = he.extend("Concat"), ae = he.extend("Sub"), ee = he.extend("Mul"), ue = he.extend("Div"), Ee = he.extend("FloorDiv"), Oe = he.extend("Mod"), Le = he.extend("Pow"), Rt = we.extend("Neg"), Nt = we.extend("Pos"), Pt = T.extend("Compare", {
            fields: ["expr", "ops"]
          }), Bt = T.extend("CompareOperand", {
            fields: ["expr", "type"]
          }), nt = T.extend("CallExtension", {
            init: function(H, re, ne, oe) {
              this.parent(), this.extName = H.__name || H, this.prop = re, this.args = ne || new s(), this.contentArgs = oe || [], this.autoescape = H.autoescape;
            },
            fields: ["extName", "prop", "args", "contentArgs"]
          }), Ft = nt.extend("CallExtensionAsync");
          function Ie(W, H, re) {
            var ne = W.split(`
`);
            ne.forEach(function(oe, fe) {
              oe && (re && fe > 0 || !re) && process.stdout.write(" ".repeat(H));
              var _e = fe === ne.length - 1 ? "" : `
`;
              process.stdout.write("" + oe + _e);
            });
          }
          function Re(W, H) {
            if (H = H || 0, Ie(W.typename + ": ", H), W instanceof s)
              Ie(`
`), W.children.forEach(function(oe) {
                Re(oe, H + 2);
              });
            else if (W instanceof nt)
              Ie(W.extName + "." + W.prop + `
`), W.args && Re(W.args, H + 2), W.contentArgs && W.contentArgs.forEach(function(oe) {
                Re(oe, H + 2);
              });
            else {
              var re = [], ne = null;
              W.iterFields(function(oe, fe) {
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
            Root: l,
            NodeList: s,
            Value: R,
            Literal: c,
            Symbol: O,
            Group: y,
            Array: b,
            Pair: a,
            Dict: f,
            Output: q,
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
            FromImport: L,
            FunCall: E,
            Filter: C,
            FilterAsync: j,
            KeywordArgs: D,
            Block: $,
            Super: ie,
            Extends: ce,
            Include: pe,
            Set: X,
            Switch: Z,
            Case: Q,
            LookupVal: v,
            BinOp: he,
            In: ke,
            Is: k,
            Or: M,
            And: V,
            Not: U,
            Add: Y,
            Concat: J,
            Sub: ae,
            Mul: ee,
            Div: ue,
            FloorDiv: Ee,
            Mod: Oe,
            Pow: Le,
            Neg: Rt,
            Pos: Nt,
            Compare: Pt,
            CompareOperand: Bt,
            CallExtension: nt,
            CallExtensionAsync: Ft,
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
          function n(c, O) {
            c.prototype = Object.create(O.prototype), c.prototype.constructor = c, u(c, O);
          }
          function u(c, O) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(b, a) {
              return b.__proto__ = a, b;
            }, u(c, O);
          }
          var p = r(8), m = r(17), g = r(3), x = r(0), S = x.TemplateError, P = r(2), I = P.Frame, T = r(1), R = T.Obj, s = {
            "==": "==",
            "===": "===",
            "!=": "!=",
            "!==": "!==",
            "<": "<",
            ">": ">",
            "<=": "<=",
            ">=": ">="
          }, l = /* @__PURE__ */ function(c) {
            n(O, c);
            function O() {
              return c.apply(this, arguments) || this;
            }
            var y = O.prototype;
            return y.init = function(a, f) {
              this.templateName = a, this.codebuf = [], this.lastId = 0, this.buffer = null, this.bufferStack = [], this._scopeClosers = "", this.inBlock = !1, this.throwOnUndefined = f;
            }, y.fail = function(a, f, v) {
              throw f !== void 0 && (f += 1), v !== void 0 && (v += 1), new S(a, f, v);
            }, y._pushBuffer = function() {
              var a = this._tmpid();
              return this.bufferStack.push(this.buffer), this.buffer = a, this._emit("var " + this.buffer + ' = "";'), a;
            }, y._popBuffer = function() {
              this.buffer = this.bufferStack.pop();
            }, y._emit = function(a) {
              this.codebuf.push(a);
            }, y._emitLine = function(a) {
              this._emit(a + `
`);
            }, y._emitLines = function() {
              for (var a = this, f = arguments.length, v = new Array(f), h = 0; h < f; h++)
                v[h] = arguments[h];
              v.forEach(function(d) {
                return a._emitLine(d);
              });
            }, y._emitFuncBegin = function(a, f) {
              this.buffer = "output", this._scopeClosers = "", this._emitLine("function " + f + "(env, context, frame, runtime, cb) {"), this._emitLine("var lineno = " + a.lineno + ";"), this._emitLine("var colno = " + a.colno + ";"), this._emitLine("var " + this.buffer + ' = "";'), this._emitLine("try {");
            }, y._emitFuncEnd = function(a) {
              a || this._emitLine("cb(null, " + this.buffer + ");"), this._closeScopeLevels(), this._emitLine("} catch (e) {"), this._emitLine("  cb(runtime.handleError(e, lineno, colno));"), this._emitLine("}"), this._emitLine("}"), this.buffer = null;
            }, y._addScopeLevel = function() {
              this._scopeClosers += "})";
            }, y._closeScopeLevels = function() {
              this._emitLine(this._scopeClosers + ";"), this._scopeClosers = "";
            }, y._withScopedSyntax = function(a) {
              var f = this._scopeClosers;
              this._scopeClosers = "", a.call(this), this._closeScopeLevels(), this._scopeClosers = f;
            }, y._makeCallback = function(a) {
              var f = this._tmpid();
              return "function(" + f + (a ? "," + a : "") + `) {
if(` + f + ") { cb(" + f + "); return; }";
            }, y._tmpid = function() {
              return this.lastId++, "t_" + this.lastId;
            }, y._templateName = function() {
              return this.templateName == null ? "undefined" : JSON.stringify(this.templateName);
            }, y._compileChildren = function(a, f) {
              var v = this;
              a.children.forEach(function(h) {
                v.compile(h, f);
              });
            }, y._compileAggregate = function(a, f, v, h) {
              var d = this;
              v && this._emit(v), a.children.forEach(function(_, w) {
                w > 0 && d._emit(","), d.compile(_, f);
              }), h && this._emit(h);
            }, y._compileExpression = function(a, f) {
              this.assertType(a, g.Literal, g.Symbol, g.Group, g.Array, g.Dict, g.FunCall, g.Caller, g.Filter, g.LookupVal, g.Compare, g.InlineIf, g.In, g.Is, g.And, g.Or, g.Not, g.Add, g.Concat, g.Sub, g.Mul, g.Div, g.FloorDiv, g.Mod, g.Pow, g.Neg, g.Pos, g.Compare, g.NodeList), this.compile(a, f);
            }, y.assertType = function(a) {
              for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), h = 1; h < f; h++)
                v[h - 1] = arguments[h];
              v.some(function(d) {
                return a instanceof d;
              }) || this.fail("assertType: invalid type: " + a.typename, a.lineno, a.colno);
            }, y.compileCallExtension = function(a, f, v) {
              var h = this, d = a.args, _ = a.contentArgs, w = typeof a.autoescape == "boolean" ? a.autoescape : !0;
              if (v || this._emit(this.buffer + " += runtime.suppressValue("), this._emit('env.getExtension("' + a.extName + '")["' + a.prop + '"]('), this._emit("context"), (d || _) && this._emit(","), d && (d instanceof g.NodeList || this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"), d.children.forEach(function(B, N) {
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
            }, y.compileCallExtensionAsync = function(a, f) {
              this.compileCallExtension(a, f, !0);
            }, y.compileNodeList = function(a, f) {
              this._compileChildren(a, f);
            }, y.compileLiteral = function(a) {
              if (typeof a.value == "string") {
                var f = a.value.replace(/\\/g, "\\\\");
                f = f.replace(/"/g, '\\"'), f = f.replace(/\n/g, "\\n"), f = f.replace(/\r/g, "\\r"), f = f.replace(/\t/g, "\\t"), f = f.replace(/\u2028/g, "\\u2028"), this._emit('"' + f + '"');
              } else
                a.value === null ? this._emit("null") : this._emit(a.value.toString());
            }, y.compileSymbol = function(a, f) {
              var v = a.value, h = f.lookup(v);
              h ? this._emit(h) : this._emit('runtime.contextOrFrameLookup(context, frame, "' + v + '")');
            }, y.compileGroup = function(a, f) {
              this._compileAggregate(a, f, "(", ")");
            }, y.compileArray = function(a, f) {
              this._compileAggregate(a, f, "[", "]");
            }, y.compileDict = function(a, f) {
              this._compileAggregate(a, f, "{", "}");
            }, y.compilePair = function(a, f) {
              var v = a.key, h = a.value;
              v instanceof g.Symbol ? v = new g.Literal(v.lineno, v.colno, v.value) : v instanceof g.Literal && typeof v.value == "string" || this.fail("compilePair: Dict keys must be strings or names", v.lineno, v.colno), this.compile(v, f), this._emit(": "), this._compileExpression(h, f);
            }, y.compileInlineIf = function(a, f) {
              this._emit("("), this.compile(a.cond, f), this._emit("?"), this.compile(a.body, f), this._emit(":"), a.else_ !== null ? this.compile(a.else_, f) : this._emit('""'), this._emit(")");
            }, y.compileIn = function(a, f) {
              this._emit("runtime.inOperator("), this.compile(a.left, f), this._emit(","), this.compile(a.right, f), this._emit(")");
            }, y.compileIs = function(a, f) {
              var v = a.right.name ? a.right.name.value : a.right.value;
              this._emit('env.getTest("' + v + '").call(context, '), this.compile(a.left, f), a.right.args && (this._emit(","), this.compile(a.right.args, f)), this._emit(") === true");
            }, y._binOpEmitter = function(a, f, v) {
              this.compile(a.left, f), this._emit(v), this.compile(a.right, f);
            }, y.compileOr = function(a, f) {
              return this._binOpEmitter(a, f, " || ");
            }, y.compileAnd = function(a, f) {
              return this._binOpEmitter(a, f, " && ");
            }, y.compileAdd = function(a, f) {
              return this._binOpEmitter(a, f, " + ");
            }, y.compileConcat = function(a, f) {
              return this._binOpEmitter(a, f, ' + "" + ');
            }, y.compileSub = function(a, f) {
              return this._binOpEmitter(a, f, " - ");
            }, y.compileMul = function(a, f) {
              return this._binOpEmitter(a, f, " * ");
            }, y.compileDiv = function(a, f) {
              return this._binOpEmitter(a, f, " / ");
            }, y.compileMod = function(a, f) {
              return this._binOpEmitter(a, f, " % ");
            }, y.compileNot = function(a, f) {
              this._emit("!"), this.compile(a.target, f);
            }, y.compileFloorDiv = function(a, f) {
              this._emit("Math.floor("), this.compile(a.left, f), this._emit(" / "), this.compile(a.right, f), this._emit(")");
            }, y.compilePow = function(a, f) {
              this._emit("Math.pow("), this.compile(a.left, f), this._emit(", "), this.compile(a.right, f), this._emit(")");
            }, y.compileNeg = function(a, f) {
              this._emit("-"), this.compile(a.target, f);
            }, y.compilePos = function(a, f) {
              this._emit("+"), this.compile(a.target, f);
            }, y.compileCompare = function(a, f) {
              var v = this;
              this.compile(a.expr, f), a.ops.forEach(function(h) {
                v._emit(" " + s[h.type] + " "), v.compile(h.expr, f);
              });
            }, y.compileLookupVal = function(a, f) {
              this._emit("runtime.memberLookup(("), this._compileExpression(a.target, f), this._emit("),"), this._compileExpression(a.val, f), this._emit(")");
            }, y._getNodeName = function(a) {
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
            }, y.compileFunCall = function(a, f) {
              this._emit("(lineno = " + a.lineno + ", colno = " + a.colno + ", "), this._emit("runtime.callWrap("), this._compileExpression(a.name, f), this._emit(', "' + this._getNodeName(a.name).replace(/"/g, '\\"') + '", context, '), this._compileAggregate(a.args, f, "[", "])"), this._emit(")");
            }, y.compileFilter = function(a, f) {
              var v = a.name;
              this.assertType(v, g.Symbol), this._emit('env.getFilter("' + v.value + '").call(context, '), this._compileAggregate(a.args, f), this._emit(")");
            }, y.compileFilterAsync = function(a, f) {
              var v = a.name, h = a.symbol.value;
              this.assertType(v, g.Symbol), f.set(h, h), this._emit('env.getFilter("' + v.value + '").call(context, '), this._compileAggregate(a.args, f), this._emitLine(", " + this._makeCallback(h)), this._addScopeLevel();
            }, y.compileKeywordArgs = function(a, f) {
              this._emit("runtime.makeKeywordArgs("), this.compileDict(a, f), this._emit(")");
            }, y.compileSet = function(a, f) {
              var v = this, h = [];
              a.targets.forEach(function(d) {
                var _ = d.value, w = f.lookup(_);
                w == null && (w = v._tmpid(), v._emitLine("var " + w + ";")), h.push(w);
              }), a.value ? (this._emit(h.join(" = ") + " = "), this._compileExpression(a.value, f), this._emitLine(";")) : (this._emit(h.join(" = ") + " = "), this.compile(a.body, f), this._emitLine(";")), a.targets.forEach(function(d, _) {
                var w = h[_], A = d.value;
                v._emitLine('frame.set("' + A + '", ' + w + ", true);"), v._emitLine("if(frame.topLevel) {"), v._emitLine('context.setVariable("' + A + '", ' + w + ");"), v._emitLine("}"), A.charAt(0) !== "_" && (v._emitLine("if(frame.topLevel) {"), v._emitLine('context.addExport("' + A + '", ' + w + ");"), v._emitLine("}"));
              });
            }, y.compileSwitch = function(a, f) {
              var v = this;
              this._emit("switch ("), this.compile(a.expr, f), this._emit(") {"), a.cases.forEach(function(h, d) {
                v._emit("case "), v.compile(h.cond, f), v._emit(": "), v.compile(h.body, f), h.body.children.length && v._emitLine("break;");
              }), a.default && (this._emit("default:"), this.compile(a.default, f)), this._emit("}");
            }, y.compileIf = function(a, f, v) {
              var h = this;
              this._emit("if("), this._compileExpression(a.cond, f), this._emitLine(") {"), this._withScopedSyntax(function() {
                h.compile(a.body, f), v && h._emit("cb()");
              }), a.else_ ? (this._emitLine(`}
else {`), this._withScopedSyntax(function() {
                h.compile(a.else_, f), v && h._emit("cb()");
              })) : v && (this._emitLine(`}
else {`), this._emit("cb()")), this._emitLine("}");
            }, y.compileIfAsync = function(a, f) {
              this._emit("(function(cb) {"), this.compileIf(a, f, !0), this._emit("})(" + this._makeCallback()), this._addScopeLevel();
            }, y._emitLoopBindings = function(a, f, v, h) {
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
            }, y.compileFor = function(a, f) {
              var v = this, h = this._tmpid(), d = this._tmpid(), _ = this._tmpid();
              if (f = f.push(), this._emitLine("frame = frame.push();"), this._emit("var " + _ + " = "), this._compileExpression(a.arr, f), this._emitLine(";"), this._emit("if(" + _ + ") {"), this._emitLine(_ + " = runtime.fromIterator(" + _ + ");"), a.name instanceof g.Array) {
                this._emitLine("var " + h + ";"), this._emitLine("if(runtime.isArray(" + _ + ")) {"), this._emitLine("var " + d + " = " + _ + ".length;"), this._emitLine("for(" + h + "=0; " + h + " < " + _ + ".length; " + h + "++) {"), a.name.children.forEach(function(L, E) {
                  var C = v._tmpid();
                  v._emitLine("var " + C + " = " + _ + "[" + h + "][" + E + "];"), v._emitLine('frame.set("' + L + '", ' + _ + "[" + h + "][" + E + "]);"), f.set(a.name.children[E].value, C);
                }), this._emitLoopBindings(a, _, h, d), this._withScopedSyntax(function() {
                  v.compile(a.body, f);
                }), this._emitLine("}"), this._emitLine("} else {");
                var w = a.name.children, A = w[0], B = w[1], N = this._tmpid(), F = this._tmpid();
                f.set(A.value, N), f.set(B.value, F), this._emitLine(h + " = -1;"), this._emitLine("var " + d + " = runtime.keys(" + _ + ").length;"), this._emitLine("for(var " + N + " in " + _ + ") {"), this._emitLine(h + "++;"), this._emitLine("var " + F + " = " + _ + "[" + N + "];"), this._emitLine('frame.set("' + A.value + '", ' + N + ");"), this._emitLine('frame.set("' + B.value + '", ' + F + ");"), this._emitLoopBindings(a, _, h, d), this._withScopedSyntax(function() {
                  v.compile(a.body, f);
                }), this._emitLine("}"), this._emitLine("}");
              } else {
                var K = this._tmpid();
                f.set(a.name.value, K), this._emitLine("var " + d + " = " + _ + ".length;"), this._emitLine("for(var " + h + "=0; " + h + " < " + _ + ".length; " + h + "++) {"), this._emitLine("var " + K + " = " + _ + "[" + h + "];"), this._emitLine('frame.set("' + a.name.value + '", ' + K + ");"), this._emitLoopBindings(a, _, h, d), this._withScopedSyntax(function() {
                  v.compile(a.body, f);
                }), this._emitLine("}");
              }
              this._emitLine("}"), a.else_ && (this._emitLine("if (!" + d + ") {"), this.compile(a.else_, f), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, y._compileAsyncLoop = function(a, f, v) {
              var h = this, d = this._tmpid(), _ = this._tmpid(), w = this._tmpid(), A = v ? "asyncAll" : "asyncEach";
              if (f = f.push(), this._emitLine("frame = frame.push();"), this._emit("var " + w + " = runtime.fromIterator("), this._compileExpression(a.arr, f), this._emitLine(");"), a.name instanceof g.Array) {
                var B = a.name.children.length;
                this._emit("runtime." + A + "(" + w + ", " + B + ", function("), a.name.children.forEach(function(K) {
                  h._emit(K.value + ",");
                }), this._emit(d + "," + _ + ",next) {"), a.name.children.forEach(function(K) {
                  var L = K.value;
                  f.set(L, L), h._emitLine('frame.set("' + L + '", ' + L + ");");
                });
              } else {
                var N = a.name.value;
                this._emitLine("runtime." + A + "(" + w + ", 1, function(" + N + ", " + d + ", " + _ + ",next) {"), this._emitLine('frame.set("' + N + '", ' + N + ");"), f.set(N, N);
              }
              this._emitLoopBindings(a, w, d, _), this._withScopedSyntax(function() {
                var K;
                v && (K = h._pushBuffer()), h.compile(a.body, f), h._emitLine("next(" + d + (K ? "," + K : "") + ");"), v && h._popBuffer();
              });
              var F = this._tmpid();
              this._emitLine("}, " + this._makeCallback(F)), this._addScopeLevel(), v && this._emitLine(this.buffer + " += " + F + ";"), a.else_ && (this._emitLine("if (!" + w + ".length) {"), this.compile(a.else_, f), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, y.compileAsyncEach = function(a, f) {
              this._compileAsyncLoop(a, f);
            }, y.compileAsyncAll = function(a, f) {
              this._compileAsyncLoop(a, f, !0);
            }, y._compileMacro = function(a, f) {
              var v = this, h = [], d = null, _ = "macro_" + this._tmpid(), w = f !== void 0;
              a.args.children.forEach(function(L, E) {
                E === a.args.children.length - 1 && L instanceof g.Dict ? d = L : (v.assertType(L, g.Symbol), h.push(L));
              });
              var A = [].concat(h.map(function(L) {
                return "l_" + L.value;
              }), ["kwargs"]), B = h.map(function(L) {
                return '"' + L.value + '"';
              }), N = (d && d.children || []).map(function(L) {
                return '"' + L.key.value + '"';
              }), F;
              w ? F = f.push(!0) : F = new I(), this._emitLines("var " + _ + " = runtime.makeMacro(", "[" + B.join(", ") + "], ", "[" + N.join(", ") + "], ", "function (" + A.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (w ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'), h.forEach(function(L) {
                v._emitLine('frame.set("' + L.value + '", l_' + L.value + ");"), F.set(L.value, "l_" + L.value);
              }), d && d.children.forEach(function(L) {
                var E = L.key.value;
                v._emit('frame.set("' + E + '", '), v._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + E + '")'), v._emit(' ? kwargs["' + E + '"] : '), v._compileExpression(L.value, F), v._emit(");");
              });
              var K = this._pushBuffer();
              return this._withScopedSyntax(function() {
                v.compile(a.body, F);
              }), this._emitLine("frame = " + (w ? "frame.pop();" : "callerFrame;")), this._emitLine("return new runtime.SafeString(" + K + ");"), this._emitLine("});"), this._popBuffer(), _;
            }, y.compileMacro = function(a, f) {
              var v = this._compileMacro(a), h = a.name.value;
              f.set(h, v), f.parent ? this._emitLine('frame.set("' + h + '", ' + v + ");") : (a.name.value.charAt(0) !== "_" && this._emitLine('context.addExport("' + h + '");'), this._emitLine('context.setVariable("' + h + '", ' + v + ");"));
            }, y.compileCaller = function(a, f) {
              this._emit("(function (){");
              var v = this._compileMacro(a, f);
              this._emit("return " + v + ";})()");
            }, y._compileGetTemplate = function(a, f, v, h) {
              var d = this._tmpid(), _ = this._templateName(), w = this._makeCallback(d), A = v ? "true" : "false", B = h ? "true" : "false";
              return this._emit("env.getTemplate("), this._compileExpression(a.template, f), this._emitLine(", " + A + ", " + _ + ", " + B + ", " + w), d;
            }, y.compileImport = function(a, f) {
              var v = a.target.value, h = this._compileGetTemplate(a, f, !1, !1);
              this._addScopeLevel(), this._emitLine(h + ".getExported(" + (a.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(h)), this._addScopeLevel(), f.set(v, h), f.parent ? this._emitLine('frame.set("' + v + '", ' + h + ");") : this._emitLine('context.setVariable("' + v + '", ' + h + ");");
            }, y.compileFromImport = function(a, f) {
              var v = this, h = this._compileGetTemplate(a, f, !1, !1);
              this._addScopeLevel(), this._emitLine(h + ".getExported(" + (a.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(h)), this._addScopeLevel(), a.names.children.forEach(function(d) {
                var _, w, A = v._tmpid();
                d instanceof g.Pair ? (_ = d.key.value, w = d.value.value) : (_ = d.value, w = _), v._emitLine("if(Object.prototype.hasOwnProperty.call(" + h + ', "' + _ + '")) {'), v._emitLine("var " + A + " = " + h + "." + _ + ";"), v._emitLine("} else {"), v._emitLine(`cb(new Error("cannot import '` + _ + `'")); return;`), v._emitLine("}"), f.set(w, A), f.parent ? v._emitLine('frame.set("' + w + '", ' + A + ");") : v._emitLine('context.setVariable("' + w + '", ' + A + ");");
              });
            }, y.compileBlock = function(a) {
              var f = this._tmpid();
              this.inBlock || this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '), this._emit('context.getBlock("' + a.name.value + '")'), this.inBlock || this._emit(")"), this._emitLine("(env, context, frame, runtime, " + this._makeCallback(f)), this._emitLine(this.buffer + " += " + f + ";"), this._addScopeLevel();
            }, y.compileSuper = function(a, f) {
              var v = a.blockName.value, h = a.symbol.value, d = this._makeCallback(h);
              this._emitLine('context.getSuper(env, "' + v + '", b_' + v + ", frame, runtime, " + d), this._emitLine(h + " = runtime.markSafe(" + h + ");"), this._addScopeLevel(), f.set(h, h);
            }, y.compileExtends = function(a, f) {
              var v = this._tmpid(), h = this._compileGetTemplate(a, f, !0, !1);
              this._emitLine("parentTemplate = " + h), this._emitLine("for(var " + v + " in parentTemplate.blocks) {"), this._emitLine("context.addBlock(" + v + ", parentTemplate.blocks[" + v + "]);"), this._emitLine("}"), this._addScopeLevel();
            }, y.compileInclude = function(a, f) {
              this._emitLine("var tasks = [];"), this._emitLine("tasks.push("), this._emitLine("function(callback) {");
              var v = this._compileGetTemplate(a, f, !1, a.ignoreMissing);
              this._emitLine("callback(null," + v + ");});"), this._emitLine("});");
              var h = this._tmpid();
              this._emitLine("tasks.push("), this._emitLine("function(template, callback){"), this._emitLine("template.render(context.getVariables(), frame, " + this._makeCallback(h)), this._emitLine("callback(null," + h + ");});"), this._emitLine("});"), this._emitLine("tasks.push("), this._emitLine("function(result, callback){"), this._emitLine(this.buffer + " += result;"), this._emitLine("callback(null);"), this._emitLine("});"), this._emitLine("env.waterfall(tasks, function(){"), this._addScopeLevel();
            }, y.compileTemplateData = function(a, f) {
              this.compileLiteral(a, f);
            }, y.compileCapture = function(a, f) {
              var v = this, h = this.buffer;
              this.buffer = "output", this._emitLine("(function() {"), this._emitLine('var output = "";'), this._withScopedSyntax(function() {
                v.compile(a.body, f);
              }), this._emitLine("return output;"), this._emitLine("})()"), this.buffer = h;
            }, y.compileOutput = function(a, f) {
              var v = this, h = a.children;
              h.forEach(function(d) {
                d instanceof g.TemplateData ? d.value && (v._emit(v.buffer + " += "), v.compileLiteral(d, f), v._emitLine(";")) : (v._emit(v.buffer + " += runtime.suppressValue("), v.throwOnUndefined && v._emit("runtime.ensureDefined("), v.compile(d, f), v.throwOnUndefined && v._emit("," + a.lineno + "," + a.colno + ")"), v._emit(`, env.opts.autoescape);
`));
              });
            }, y.compileRoot = function(a, f) {
              var v = this;
              f && this.fail("compileRoot: root node can't have frame"), f = new I(), this._emitFuncBegin(a, "root"), this._emitLine("var parentTemplate = null;"), this._compileChildren(a, f), this._emitLine("if(parentTemplate) {"), this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"), this._emitLine("} else {"), this._emitLine("cb(null, " + this.buffer + ");"), this._emitLine("}"), this._emitFuncEnd(!0), this.inBlock = !0;
              var h = [], d = a.findAll(g.Block);
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
            }, y.compile = function(a, f) {
              var v = this["compile" + a.typename];
              v ? v.call(this, a, f) : this.fail("compile: Cannot compile node: " + a.typename, a.lineno, a.colno);
            }, y.getCode = function() {
              return this.codebuf.join("");
            }, O;
          }(R);
          t.exports = {
            compile: function(O, y, b, a, f) {
              f === void 0 && (f = {});
              var v = new l(a, f.throwOnUndefined), h = (b || []).map(function(_) {
                return _.preprocess;
              }).filter(function(_) {
                return !!_;
              }), d = h.reduce(function(_, w) {
                return w(_);
              }, O);
              return v.compile(m.transform(p.parse(d, b, f), y, a)), v.getCode();
            },
            Compiler: l
          };
        },
        /* 6 */
        /***/
        function(t, i, r) {
          function n(x, S) {
            x.prototype = Object.create(S.prototype), x.prototype.constructor = x, u(x, S);
          }
          function u(x, S) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(I, T) {
              return I.__proto__ = T, I;
            }, u(x, S);
          }
          var p = r(4), m = r(1), g = m.EmitterObj;
          t.exports = /* @__PURE__ */ function(x) {
            n(S, x);
            function S() {
              return x.apply(this, arguments) || this;
            }
            var P = S.prototype;
            return P.resolve = function(T, R) {
              return p.resolve(p.dirname(T), R);
            }, P.isRelative = function(T) {
              return T.indexOf("./") === 0 || T.indexOf("../") === 0;
            }, S;
          }(g);
        },
        /* 7 */
        /***/
        function(t, i, r) {
          function n(B, N) {
            B.prototype = Object.create(N.prototype), B.prototype.constructor = B, u(B, N);
          }
          function u(B, N) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(K, L) {
              return K.__proto__ = L, K;
            }, u(B, N);
          }
          var p = r(12), m = r(15), g = r(0), x = r(5), S = r(18), P = r(10), I = P.FileSystemLoader, T = P.WebLoader, R = P.PrecompiledLoader, s = r(20), l = r(21), c = r(1), O = c.Obj, y = c.EmitterObj, b = r(2), a = b.handleError, f = b.Frame, v = r(22);
          function h(B, N, F) {
            p(function() {
              B(N, F);
            });
          }
          var d = {
            type: "code",
            obj: {
              root: function(N, F, K, L, E) {
                try {
                  E(null, "");
                } catch (C) {
                  E(a(C, null, null));
                }
              }
            }
          }, _ = /* @__PURE__ */ function(B) {
            n(N, B);
            function N() {
              return B.apply(this, arguments) || this;
            }
            var F = N.prototype;
            return F.init = function(L, E) {
              var C = this;
              E = this.opts = E || {}, this.opts.dev = !!E.dev, this.opts.autoescape = E.autoescape != null ? E.autoescape : !0, this.opts.throwOnUndefined = !!E.throwOnUndefined, this.opts.trimBlocks = !!E.trimBlocks, this.opts.lstripBlocks = !!E.lstripBlocks, this.loaders = [], L ? this.loaders = g.isArray(L) ? L : [L] : I ? this.loaders = [new I("views")] : T && (this.loaders = [new T("/views")]), typeof window < "u" && window.nunjucksPrecompiled && this.loaders.unshift(new R(window.nunjucksPrecompiled)), this._initLoaders(), this.globals = l(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], g._entries(S).forEach(function(j) {
                var D = j[0], $ = j[1];
                return C.addFilter(D, $);
              }), g._entries(s).forEach(function(j) {
                var D = j[0], $ = j[1];
                return C.addTest(D, $);
              });
            }, F._initLoaders = function() {
              var L = this;
              this.loaders.forEach(function(E) {
                E.cache = {}, typeof E.on == "function" && (E.on("update", function(C, j) {
                  E.cache[C] = null, L.emit("update", C, j, E);
                }), E.on("load", function(C, j) {
                  L.emit("load", C, j, E);
                }));
              });
            }, F.invalidateCache = function() {
              this.loaders.forEach(function(L) {
                L.cache = {};
              });
            }, F.addExtension = function(L, E) {
              return E.__name = L, this.extensions[L] = E, this.extensionsList.push(E), this;
            }, F.removeExtension = function(L) {
              var E = this.getExtension(L);
              E && (this.extensionsList = g.without(this.extensionsList, E), delete this.extensions[L]);
            }, F.getExtension = function(L) {
              return this.extensions[L];
            }, F.hasExtension = function(L) {
              return !!this.extensions[L];
            }, F.addGlobal = function(L, E) {
              return this.globals[L] = E, this;
            }, F.getGlobal = function(L) {
              if (typeof this.globals[L] > "u")
                throw new Error("global not found: " + L);
              return this.globals[L];
            }, F.addFilter = function(L, E, C) {
              var j = E;
              return C && this.asyncFilters.push(L), this.filters[L] = j, this;
            }, F.getFilter = function(L) {
              if (!this.filters[L])
                throw new Error("filter not found: " + L);
              return this.filters[L];
            }, F.addTest = function(L, E) {
              return this.tests[L] = E, this;
            }, F.getTest = function(L) {
              if (!this.tests[L])
                throw new Error("test not found: " + L);
              return this.tests[L];
            }, F.resolveTemplate = function(L, E, C) {
              var j = L.isRelative && E ? L.isRelative(C) : !1;
              return j && L.resolve ? L.resolve(E, C) : C;
            }, F.getTemplate = function(L, E, C, j, D) {
              var $ = this, ie = this, z = null;
              if (L && L.raw && (L = L.raw), g.isFunction(C) && (D = C, C = null, E = E || !1), g.isFunction(E) && (D = E, E = !1), L instanceof A)
                z = L;
              else {
                if (typeof L != "string")
                  throw new Error("template names must be a string: " + L);
                for (var ce = 0; ce < this.loaders.length; ce++) {
                  var pe = this.loaders[ce];
                  if (z = pe.cache[this.resolveTemplate(pe, C, L)], z)
                    break;
                }
              }
              if (z)
                if (E && z.compile(), D) {
                  D(null, z);
                  return;
                } else
                  return z;
              var X, Z = function(q, G) {
                if (!G && !q && !j && (q = new Error("template not found: " + L)), q)
                  if (D) {
                    D(q);
                    return;
                  } else
                    throw q;
                var se;
                G ? (se = new A(G.src, $, G.path, E), G.noCache || (G.loader.cache[L] = se)) : se = new A(d, $, "", E), D ? D(null, se) : X = se;
              };
              return g.asyncIter(this.loaders, function(Q, q, G, se) {
                function we(he, ke) {
                  he ? se(he) : ke ? (ke.loader = Q, se(null, ke)) : G();
                }
                L = ie.resolveTemplate(Q, C, L), Q.async ? Q.getSource(L, we) : we(null, Q.getSource(L));
              }, Z), X;
            }, F.express = function(L) {
              return v(this, L);
            }, F.render = function(L, E, C) {
              g.isFunction(E) && (C = E, E = null);
              var j = null;
              return this.getTemplate(L, function(D, $) {
                if (D && C)
                  h(C, D);
                else {
                  if (D)
                    throw D;
                  j = $.render(E, C);
                }
              }), j;
            }, F.renderString = function(L, E, C, j) {
              g.isFunction(C) && (j = C, C = {}), C = C || {};
              var D = new A(L, this, C.path);
              return D.render(E, j);
            }, F.waterfall = function(L, E, C) {
              return m(L, E, C);
            }, N;
          }(y), w = /* @__PURE__ */ function(B) {
            n(N, B);
            function N() {
              return B.apply(this, arguments) || this;
            }
            var F = N.prototype;
            return F.init = function(L, E, C) {
              var j = this;
              this.env = C || new _(), this.ctx = g.extend({}, L), this.blocks = {}, this.exported = [], g.keys(E).forEach(function(D) {
                j.addBlock(D, E[D]);
              });
            }, F.lookup = function(L) {
              return L in this.env.globals && !(L in this.ctx) ? this.env.globals[L] : this.ctx[L];
            }, F.setVariable = function(L, E) {
              this.ctx[L] = E;
            }, F.getVariables = function() {
              return this.ctx;
            }, F.addBlock = function(L, E) {
              return this.blocks[L] = this.blocks[L] || [], this.blocks[L].push(E), this;
            }, F.getBlock = function(L) {
              if (!this.blocks[L])
                throw new Error('unknown block "' + L + '"');
              return this.blocks[L][0];
            }, F.getSuper = function(L, E, C, j, D, $) {
              var ie = g.indexOf(this.blocks[E] || [], C), z = this.blocks[E][ie + 1], ce = this;
              if (ie === -1 || !z)
                throw new Error('no super block available for "' + E + '"');
              z(L, ce, j, D, $);
            }, F.addExport = function(L) {
              this.exported.push(L);
            }, F.getExported = function() {
              var L = this, E = {};
              return this.exported.forEach(function(C) {
                E[C] = L.ctx[C];
              }), E;
            }, N;
          }(O), A = /* @__PURE__ */ function(B) {
            n(N, B);
            function N() {
              return B.apply(this, arguments) || this;
            }
            var F = N.prototype;
            return F.init = function(L, E, C, j) {
              if (this.env = E || new _(), g.isObject(L))
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
              if (this.path = C, j)
                try {
                  this._compile();
                } catch (D) {
                  throw g._prettifyError(this.path, this.env.opts.dev, D);
                }
              else
                this.compiled = !1;
            }, F.render = function(L, E, C) {
              var j = this;
              typeof L == "function" ? (C = L, L = {}) : typeof E == "function" && (C = E, E = null);
              var D = !E;
              try {
                this.compile();
              } catch (X) {
                var $ = g._prettifyError(this.path, this.env.opts.dev, X);
                if (C)
                  return h(C, $);
                throw $;
              }
              var ie = new w(L || {}, this.blocks, this.env), z = E ? E.push(!0) : new f();
              z.topLevel = !0;
              var ce = null, pe = !1;
              return this.rootRenderFunc(this.env, ie, z, b, function(X, Z) {
                if (!(pe && C && typeof Z < "u"))
                  if (X && (X = g._prettifyError(j.path, j.env.opts.dev, X), pe = !0), C)
                    D ? h(C, X, Z) : C(X, Z);
                  else {
                    if (X)
                      throw X;
                    ce = Z;
                  }
              }), ce;
            }, F.getExported = function(L, E, C) {
              typeof L == "function" && (C = L, L = {}), typeof E == "function" && (C = E, E = null);
              try {
                this.compile();
              } catch ($) {
                if (C)
                  return C($);
                throw $;
              }
              var j = E ? E.push() : new f();
              j.topLevel = !0;
              var D = new w(L || {}, this.blocks, this.env);
              this.rootRenderFunc(this.env, D, j, b, function($) {
                $ ? C($, null) : C(null, D.getExported());
              });
            }, F.compile = function() {
              this.compiled || this._compile();
            }, F._compile = function() {
              var L;
              if (this.tmplProps)
                L = this.tmplProps;
              else {
                var E = x.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), C = new Function(E);
                L = C();
              }
              this.blocks = this._getBlocks(L), this.rootRenderFunc = L.root, this.compiled = !0;
            }, F._getBlocks = function(L) {
              var E = {};
              return g.keys(L).forEach(function(C) {
                C.slice(0, 2) === "b_" && (E[C.slice(2)] = L[C]);
              }), E;
            }, N;
          }(O);
          t.exports = {
            Environment: _,
            Template: A
          };
        },
        /* 8 */
        /***/
        function(t, i, r) {
          function n(P, I) {
            P.prototype = Object.create(I.prototype), P.prototype.constructor = P, u(P, I);
          }
          function u(P, I) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(R, s) {
              return R.__proto__ = s, R;
            }, u(P, I);
          }
          var p = r(9), m = r(3), g = r(1).Obj, x = r(0), S = /* @__PURE__ */ function(P) {
            n(I, P);
            function I() {
              return P.apply(this, arguments) || this;
            }
            var T = I.prototype;
            return T.init = function(s) {
              this.tokens = s, this.peeked = null, this.breakOnBlocks = null, this.dropLeadingWhitespace = !1, this.extensions = [];
            }, T.nextToken = function(s) {
              var l;
              if (this.peeked)
                if (!s && this.peeked.type === p.TOKEN_WHITESPACE)
                  this.peeked = null;
                else
                  return l = this.peeked, this.peeked = null, l;
              if (l = this.tokens.nextToken(), !s)
                for (; l && l.type === p.TOKEN_WHITESPACE; )
                  l = this.tokens.nextToken();
              return l;
            }, T.peekToken = function() {
              return this.peeked = this.peeked || this.nextToken(), this.peeked;
            }, T.pushToken = function(s) {
              if (this.peeked)
                throw new Error("pushToken: can only push one token on between reads");
              this.peeked = s;
            }, T.error = function(s, l, c) {
              if (l === void 0 || c === void 0) {
                var O = this.peekToken() || {};
                l = O.lineno, c = O.colno;
              }
              return l !== void 0 && (l += 1), c !== void 0 && (c += 1), new x.TemplateError(s, l, c);
            }, T.fail = function(s, l, c) {
              throw this.error(s, l, c);
            }, T.skip = function(s) {
              var l = this.nextToken();
              return !l || l.type !== s ? (this.pushToken(l), !1) : !0;
            }, T.expect = function(s) {
              var l = this.nextToken();
              return l.type !== s && this.fail("expected " + s + ", got " + l.type, l.lineno, l.colno), l;
            }, T.skipValue = function(s, l) {
              var c = this.nextToken();
              return !c || c.type !== s || c.value !== l ? (this.pushToken(c), !1) : !0;
            }, T.skipSymbol = function(s) {
              return this.skipValue(p.TOKEN_SYMBOL, s);
            }, T.advanceAfterBlockEnd = function(s) {
              var l;
              return s || (l = this.peekToken(), l || this.fail("unexpected end of file"), l.type !== p.TOKEN_SYMBOL && this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"), s = this.nextToken().value), l = this.nextToken(), l && l.type === p.TOKEN_BLOCK_END ? l.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0) : this.fail("expected block end in " + s + " statement"), l;
            }, T.advanceAfterVariableEnd = function() {
              var s = this.nextToken();
              s && s.type === p.TOKEN_VARIABLE_END ? this.dropLeadingWhitespace = s.value.charAt(s.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-" : (this.pushToken(s), this.fail("expected variable end"));
            }, T.parseFor = function() {
              var s = this.peekToken(), l, c;
              this.skipSymbol("for") ? (l = new m.For(s.lineno, s.colno), c = "endfor") : this.skipSymbol("asyncEach") ? (l = new m.AsyncEach(s.lineno, s.colno), c = "endeach") : this.skipSymbol("asyncAll") ? (l = new m.AsyncAll(s.lineno, s.colno), c = "endall") : this.fail("parseFor: expected for{Async}", s.lineno, s.colno), l.name = this.parsePrimary(), l.name instanceof m.Symbol || this.fail("parseFor: variable name expected for loop");
              var O = this.peekToken().type;
              if (O === p.TOKEN_COMMA) {
                var y = l.name;
                for (l.name = new m.Array(y.lineno, y.colno), l.name.addChild(y); this.skip(p.TOKEN_COMMA); ) {
                  var b = this.parsePrimary();
                  l.name.addChild(b);
                }
              }
              return this.skipSymbol("in") || this.fail('parseFor: expected "in" keyword for loop', s.lineno, s.colno), l.arr = this.parseExpression(), this.advanceAfterBlockEnd(s.value), l.body = this.parseUntilBlocks(c, "else"), this.skipSymbol("else") && (this.advanceAfterBlockEnd("else"), l.else_ = this.parseUntilBlocks(c)), this.advanceAfterBlockEnd(), l;
            }, T.parseMacro = function() {
              var s = this.peekToken();
              this.skipSymbol("macro") || this.fail("expected macro");
              var l = this.parsePrimary(!0), c = this.parseSignature(), O = new m.Macro(s.lineno, s.colno, l, c);
              return this.advanceAfterBlockEnd(s.value), O.body = this.parseUntilBlocks("endmacro"), this.advanceAfterBlockEnd(), O;
            }, T.parseCall = function() {
              var s = this.peekToken();
              this.skipSymbol("call") || this.fail("expected call");
              var l = this.parseSignature(!0) || new m.NodeList(), c = this.parsePrimary();
              this.advanceAfterBlockEnd(s.value);
              var O = this.parseUntilBlocks("endcall");
              this.advanceAfterBlockEnd();
              var y = new m.Symbol(s.lineno, s.colno, "caller"), b = new m.Caller(s.lineno, s.colno, y, l, O), a = c.args.children;
              a[a.length - 1] instanceof m.KeywordArgs || a.push(new m.KeywordArgs());
              var f = a[a.length - 1];
              return f.addChild(new m.Pair(s.lineno, s.colno, y, b)), new m.Output(s.lineno, s.colno, [c]);
            }, T.parseWithContext = function() {
              var s = this.peekToken(), l = null;
              return this.skipSymbol("with") ? l = !0 : this.skipSymbol("without") && (l = !1), l !== null && (this.skipSymbol("context") || this.fail("parseFrom: expected context after with/without", s.lineno, s.colno)), l;
            }, T.parseImport = function() {
              var s = this.peekToken();
              this.skipSymbol("import") || this.fail("parseImport: expected import", s.lineno, s.colno);
              var l = this.parseExpression();
              this.skipSymbol("as") || this.fail('parseImport: expected "as" keyword', s.lineno, s.colno);
              var c = this.parseExpression(), O = this.parseWithContext(), y = new m.Import(s.lineno, s.colno, l, c, O);
              return this.advanceAfterBlockEnd(s.value), y;
            }, T.parseFrom = function() {
              var s = this.peekToken();
              this.skipSymbol("from") || this.fail("parseFrom: expected from");
              var l = this.parseExpression();
              this.skipSymbol("import") || this.fail("parseFrom: expected import", s.lineno, s.colno);
              for (var c = new m.NodeList(), O; ; ) {
                var y = this.peekToken();
                if (y.type === p.TOKEN_BLOCK_END) {
                  c.children.length || this.fail("parseFrom: Expected at least one import name", s.lineno, s.colno), y.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0), this.nextToken();
                  break;
                }
                c.children.length > 0 && !this.skip(p.TOKEN_COMMA) && this.fail("parseFrom: expected comma", s.lineno, s.colno);
                var b = this.parsePrimary();
                if (b.value.charAt(0) === "_" && this.fail("parseFrom: names starting with an underscore cannot be imported", b.lineno, b.colno), this.skipSymbol("as")) {
                  var a = this.parsePrimary();
                  c.addChild(new m.Pair(b.lineno, b.colno, b, a));
                } else
                  c.addChild(b);
                O = this.parseWithContext();
              }
              return new m.FromImport(s.lineno, s.colno, l, c, O);
            }, T.parseBlock = function() {
              var s = this.peekToken();
              this.skipSymbol("block") || this.fail("parseBlock: expected block", s.lineno, s.colno);
              var l = new m.Block(s.lineno, s.colno);
              l.name = this.parsePrimary(), l.name instanceof m.Symbol || this.fail("parseBlock: variable name expected", s.lineno, s.colno), this.advanceAfterBlockEnd(s.value), l.body = this.parseUntilBlocks("endblock"), this.skipSymbol("endblock"), this.skipSymbol(l.name.value);
              var c = this.peekToken();
              return c || this.fail("parseBlock: expected endblock, got end of file"), this.advanceAfterBlockEnd(c.value), l;
            }, T.parseExtends = function() {
              var s = "extends", l = this.peekToken();
              this.skipSymbol(s) || this.fail("parseTemplateRef: expected " + s);
              var c = new m.Extends(l.lineno, l.colno);
              return c.template = this.parseExpression(), this.advanceAfterBlockEnd(l.value), c;
            }, T.parseInclude = function() {
              var s = "include", l = this.peekToken();
              this.skipSymbol(s) || this.fail("parseInclude: expected " + s);
              var c = new m.Include(l.lineno, l.colno);
              return c.template = this.parseExpression(), this.skipSymbol("ignore") && this.skipSymbol("missing") && (c.ignoreMissing = !0), this.advanceAfterBlockEnd(l.value), c;
            }, T.parseIf = function() {
              var s = this.peekToken(), l;
              this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif") ? l = new m.If(s.lineno, s.colno) : this.skipSymbol("ifAsync") ? l = new m.IfAsync(s.lineno, s.colno) : this.fail("parseIf: expected if, elif, or elseif", s.lineno, s.colno), l.cond = this.parseExpression(), this.advanceAfterBlockEnd(s.value), l.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
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
              var s = this.peekToken();
              this.skipSymbol("set") || this.fail("parseSet: expected set", s.lineno, s.colno);
              for (var l = new m.Set(s.lineno, s.colno, []), c; (c = this.parsePrimary()) && (l.targets.push(c), !!this.skip(p.TOKEN_COMMA)); )
                ;
              return this.skipValue(p.TOKEN_OPERATOR, "=") ? (l.value = this.parseExpression(), this.advanceAfterBlockEnd(s.value)) : this.skip(p.TOKEN_BLOCK_END) ? (l.body = new m.Capture(s.lineno, s.colno, this.parseUntilBlocks("endset")), l.value = null, this.advanceAfterBlockEnd()) : this.fail("parseSet: expected = or block end in set tag", s.lineno, s.colno), l;
            }, T.parseSwitch = function() {
              var s = "switch", l = "endswitch", c = "case", O = "default", y = this.peekToken();
              !this.skipSymbol(s) && !this.skipSymbol(c) && !this.skipSymbol(O) && this.fail('parseSwitch: expected "switch," "case" or "default"', y.lineno, y.colno);
              var b = this.parseExpression();
              this.advanceAfterBlockEnd(s), this.parseUntilBlocks(c, O, l);
              var a = this.peekToken(), f = [], v;
              do {
                this.skipSymbol(c);
                var h = this.parseExpression();
                this.advanceAfterBlockEnd(s);
                var d = this.parseUntilBlocks(c, O, l);
                f.push(new m.Case(a.line, a.col, h, d)), a = this.peekToken();
              } while (a && a.value === c);
              switch (a.value) {
                case O:
                  this.advanceAfterBlockEnd(), v = this.parseUntilBlocks(l), this.advanceAfterBlockEnd();
                  break;
                case l:
                  this.advanceAfterBlockEnd();
                  break;
                default:
                  this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.');
              }
              return new m.Switch(y.lineno, y.colno, b, f, v);
            }, T.parseStatement = function() {
              var s = this.peekToken(), l;
              if (s.type !== p.TOKEN_SYMBOL && this.fail("tag name expected", s.lineno, s.colno), this.breakOnBlocks && x.indexOf(this.breakOnBlocks, s.value) !== -1)
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
                      var O = this.extensions[c];
                      if (x.indexOf(O.tags || [], s.value) !== -1)
                        return O.parse(this, m, p);
                    }
                  this.fail("unknown block tag: " + s.value, s.lineno, s.colno);
              }
              return l;
            }, T.parseRaw = function(s) {
              s = s || "raw";
              for (var l = "end" + s, c = new RegExp("([\\s\\S]*?){%\\s*(" + s + "|" + l + ")\\s*(?=%})%}"), O = 1, y = "", b = null, a = this.advanceAfterBlockEnd(); (b = this.tokens._extractRegex(c)) && O > 0; ) {
                var f = b[0], v = b[1], h = b[2];
                h === s ? O += 1 : h === l && (O -= 1), O === 0 ? (y += v, this.tokens.backN(f.length - v.length)) : y += f;
              }
              return new m.Output(a.lineno, a.colno, [new m.TemplateData(a.lineno, a.colno, y)]);
            }, T.parsePostfix = function(s) {
              for (var l, c = this.peekToken(); c; ) {
                if (c.type === p.TOKEN_LEFT_PAREN)
                  s = new m.FunCall(c.lineno, c.colno, s, this.parseSignature());
                else if (c.type === p.TOKEN_LEFT_BRACKET)
                  l = this.parseAggregate(), l.children.length > 1 && this.fail("invalid index"), s = new m.LookupVal(c.lineno, c.colno, s, l.children[0]);
                else if (c.type === p.TOKEN_OPERATOR && c.value === ".") {
                  this.nextToken();
                  var O = this.nextToken();
                  O.type !== p.TOKEN_SYMBOL && this.fail("expected name as lookup value, got " + O.value, O.lineno, O.colno), l = new m.Literal(O.lineno, O.colno, O.value), s = new m.LookupVal(c.lineno, c.colno, s, l);
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
                var l = this.parseOr(), c = s;
                s = new m.InlineIf(s.lineno, s.colno), s.body = c, s.cond = l, this.skipSymbol("else") ? s.else_ = this.parseOr() : s.else_ = null;
              }
              return s;
            }, T.parseOr = function() {
              for (var s = this.parseAnd(); this.skipSymbol("or"); ) {
                var l = this.parseAnd();
                s = new m.Or(s.lineno, s.colno, s, l);
              }
              return s;
            }, T.parseAnd = function() {
              for (var s = this.parseNot(); this.skipSymbol("and"); ) {
                var l = this.parseNot();
                s = new m.And(s.lineno, s.colno, s, l);
              }
              return s;
            }, T.parseNot = function() {
              var s = this.peekToken();
              return this.skipSymbol("not") ? new m.Not(s.lineno, s.colno, this.parseNot()) : this.parseIn();
            }, T.parseIn = function() {
              for (var s = this.parseIs(); ; ) {
                var l = this.nextToken();
                if (!l)
                  break;
                var c = l.type === p.TOKEN_SYMBOL && l.value === "not";
                if (c || this.pushToken(l), this.skipSymbol("in")) {
                  var O = this.parseIs();
                  s = new m.In(s.lineno, s.colno, s, O), c && (s = new m.Not(s.lineno, s.colno, s));
                } else {
                  c && this.pushToken(l);
                  break;
                }
              }
              return s;
            }, T.parseIs = function() {
              var s = this.parseCompare();
              if (this.skipSymbol("is")) {
                var l = this.skipSymbol("not"), c = this.parseCompare();
                s = new m.Is(s.lineno, s.colno, s, c), l && (s = new m.Not(s.lineno, s.colno, s));
              }
              return s;
            }, T.parseCompare = function() {
              for (var s = ["==", "===", "!=", "!==", "<", ">", "<=", ">="], l = this.parseConcat(), c = []; ; ) {
                var O = this.nextToken();
                if (O)
                  if (s.indexOf(O.value) !== -1)
                    c.push(new m.CompareOperand(O.lineno, O.colno, this.parseConcat(), O.value));
                  else {
                    this.pushToken(O);
                    break;
                  }
                else
                  break;
              }
              return c.length ? new m.Compare(c[0].lineno, c[0].colno, l, c) : l;
            }, T.parseConcat = function() {
              for (var s = this.parseAdd(); this.skipValue(p.TOKEN_TILDE, "~"); ) {
                var l = this.parseAdd();
                s = new m.Concat(s.lineno, s.colno, s, l);
              }
              return s;
            }, T.parseAdd = function() {
              for (var s = this.parseSub(); this.skipValue(p.TOKEN_OPERATOR, "+"); ) {
                var l = this.parseSub();
                s = new m.Add(s.lineno, s.colno, s, l);
              }
              return s;
            }, T.parseSub = function() {
              for (var s = this.parseMul(); this.skipValue(p.TOKEN_OPERATOR, "-"); ) {
                var l = this.parseMul();
                s = new m.Sub(s.lineno, s.colno, s, l);
              }
              return s;
            }, T.parseMul = function() {
              for (var s = this.parseDiv(); this.skipValue(p.TOKEN_OPERATOR, "*"); ) {
                var l = this.parseDiv();
                s = new m.Mul(s.lineno, s.colno, s, l);
              }
              return s;
            }, T.parseDiv = function() {
              for (var s = this.parseFloorDiv(); this.skipValue(p.TOKEN_OPERATOR, "/"); ) {
                var l = this.parseFloorDiv();
                s = new m.Div(s.lineno, s.colno, s, l);
              }
              return s;
            }, T.parseFloorDiv = function() {
              for (var s = this.parseMod(); this.skipValue(p.TOKEN_OPERATOR, "//"); ) {
                var l = this.parseMod();
                s = new m.FloorDiv(s.lineno, s.colno, s, l);
              }
              return s;
            }, T.parseMod = function() {
              for (var s = this.parsePow(); this.skipValue(p.TOKEN_OPERATOR, "%"); ) {
                var l = this.parsePow();
                s = new m.Mod(s.lineno, s.colno, s, l);
              }
              return s;
            }, T.parsePow = function() {
              for (var s = this.parseUnary(); this.skipValue(p.TOKEN_OPERATOR, "**"); ) {
                var l = this.parseUnary();
                s = new m.Pow(s.lineno, s.colno, s, l);
              }
              return s;
            }, T.parseUnary = function(s) {
              var l = this.peekToken(), c;
              return this.skipValue(p.TOKEN_OPERATOR, "-") ? c = new m.Neg(l.lineno, l.colno, this.parseUnary(!0)) : this.skipValue(p.TOKEN_OPERATOR, "+") ? c = new m.Pos(l.lineno, l.colno, this.parseUnary(!0)) : c = this.parsePrimary(), s || (c = this.parseFilter(c)), c;
            }, T.parsePrimary = function(s) {
              var l = this.nextToken(), c, O = null;
              if (l ? l.type === p.TOKEN_STRING ? c = l.value : l.type === p.TOKEN_INT ? c = parseInt(l.value, 10) : l.type === p.TOKEN_FLOAT ? c = parseFloat(l.value) : l.type === p.TOKEN_BOOLEAN ? l.value === "true" ? c = !0 : l.value === "false" ? c = !1 : this.fail("invalid boolean: " + l.value, l.lineno, l.colno) : l.type === p.TOKEN_NONE ? c = null : l.type === p.TOKEN_REGEX && (c = new RegExp(l.value.body, l.value.flags)) : this.fail("expected expression, got end of file"), c !== void 0 ? O = new m.Literal(l.lineno, l.colno, c) : l.type === p.TOKEN_SYMBOL ? O = new m.Symbol(l.lineno, l.colno, l.value) : (this.pushToken(l), O = this.parseAggregate()), s || (O = this.parsePostfix(O)), O)
                return O;
              throw this.error("unexpected token: " + l.value, l.lineno, l.colno);
            }, T.parseFilterName = function() {
              for (var s = this.expect(p.TOKEN_SYMBOL), l = s.value; this.skipValue(p.TOKEN_OPERATOR, "."); )
                l += "." + this.expect(p.TOKEN_SYMBOL).value;
              return new m.Symbol(s.lineno, s.colno, l);
            }, T.parseFilterArgs = function(s) {
              if (this.peekToken().type === p.TOKEN_LEFT_PAREN) {
                var l = this.parsePostfix(s);
                return l.args.children;
              }
              return [];
            }, T.parseFilter = function(s) {
              for (; this.skip(p.TOKEN_PIPE); ) {
                var l = this.parseFilterName();
                s = new m.Filter(l.lineno, l.colno, l, new m.NodeList(l.lineno, l.colno, [s].concat(this.parseFilterArgs(s))));
              }
              return s;
            }, T.parseFilterStatement = function() {
              var s = this.peekToken();
              this.skipSymbol("filter") || this.fail("parseFilterStatement: expected filter");
              var l = this.parseFilterName(), c = this.parseFilterArgs(l);
              this.advanceAfterBlockEnd(s.value);
              var O = new m.Capture(l.lineno, l.colno, this.parseUntilBlocks("endfilter"));
              this.advanceAfterBlockEnd();
              var y = new m.Filter(l.lineno, l.colno, l, new m.NodeList(l.lineno, l.colno, [O].concat(c)));
              return new m.Output(l.lineno, l.colno, [y]);
            }, T.parseAggregate = function() {
              var s = this.nextToken(), l;
              switch (s.type) {
                case p.TOKEN_LEFT_PAREN:
                  l = new m.Group(s.lineno, s.colno);
                  break;
                case p.TOKEN_LEFT_BRACKET:
                  l = new m.Array(s.lineno, s.colno);
                  break;
                case p.TOKEN_LEFT_CURLY:
                  l = new m.Dict(s.lineno, s.colno);
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
                if (l.children.length > 0 && (this.skip(p.TOKEN_COMMA) || this.fail("parseAggregate: expected comma after expression", s.lineno, s.colno)), l instanceof m.Dict) {
                  var O = this.parsePrimary();
                  this.skip(p.TOKEN_COLON) || this.fail("parseAggregate: expected colon after dict key", s.lineno, s.colno);
                  var y = this.parseExpression();
                  l.addChild(new m.Pair(O.lineno, O.colno, O, y));
                } else {
                  var b = this.parseExpression();
                  l.addChild(b);
                }
              }
              return l;
            }, T.parseSignature = function(s, l) {
              var c = this.peekToken();
              if (!l && c.type !== p.TOKEN_LEFT_PAREN) {
                if (s)
                  return null;
                this.fail("expected arguments", c.lineno, c.colno);
              }
              c.type === p.TOKEN_LEFT_PAREN && (c = this.nextToken());
              for (var O = new m.NodeList(c.lineno, c.colno), y = new m.KeywordArgs(c.lineno, c.colno), b = !1; ; ) {
                if (c = this.peekToken(), !l && c.type === p.TOKEN_RIGHT_PAREN) {
                  this.nextToken();
                  break;
                } else if (l && c.type === p.TOKEN_BLOCK_END)
                  break;
                if (b && !this.skip(p.TOKEN_COMMA))
                  this.fail("parseSignature: expected comma after expression", c.lineno, c.colno);
                else {
                  var a = this.parseExpression();
                  this.skipValue(p.TOKEN_OPERATOR, "=") ? y.addChild(new m.Pair(a.lineno, a.colno, a, this.parseExpression())) : O.addChild(a);
                }
                b = !0;
              }
              return y.children.length && O.addChild(y), O;
            }, T.parseUntilBlocks = function() {
              for (var s = this.breakOnBlocks, l = arguments.length, c = new Array(l), O = 0; O < l; O++)
                c[O] = arguments[O];
              this.breakOnBlocks = c;
              var y = this.parse();
              return this.breakOnBlocks = s, y;
            }, T.parseNodes = function() {
              for (var s, l = []; s = this.nextToken(); )
                if (s.type === p.TOKEN_DATA) {
                  var c = s.value, O = this.peekToken(), y = O && O.value;
                  this.dropLeadingWhitespace && (c = c.replace(/^\s*/, ""), this.dropLeadingWhitespace = !1), O && (O.type === p.TOKEN_BLOCK_START && y.charAt(y.length - 1) === "-" || O.type === p.TOKEN_VARIABLE_START && y.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || O.type === p.TOKEN_COMMENT && y.charAt(this.tokens.tags.COMMENT_START.length) === "-") && (c = c.replace(/\s*$/, "")), l.push(new m.Output(s.lineno, s.colno, [new m.TemplateData(s.lineno, s.colno, c)]));
                } else if (s.type === p.TOKEN_BLOCK_START) {
                  this.dropLeadingWhitespace = !1;
                  var b = this.parseStatement();
                  if (!b)
                    break;
                  l.push(b);
                } else if (s.type === p.TOKEN_VARIABLE_START) {
                  var a = this.parseExpression();
                  this.dropLeadingWhitespace = !1, this.advanceAfterVariableEnd(), l.push(new m.Output(s.lineno, s.colno, [a]));
                } else
                  s.type === p.TOKEN_COMMENT ? this.dropLeadingWhitespace = s.value.charAt(s.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-" : this.fail("Unexpected token at top-level: " + s.type, s.lineno, s.colno);
              return l;
            }, T.parse = function() {
              return new m.NodeList(0, 0, this.parseNodes());
            }, T.parseAsRoot = function() {
              return new m.Root(0, 0, this.parseNodes());
            }, I;
          }(g);
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
          var n = r(0), u = ` 
	\r `, p = "()[]{}%*-+~/#,:|.<>=!", m = "0123456789", g = "{%", x = "%}", S = "{{", P = "}}", I = "{#", T = "#}", R = "string", s = "whitespace", l = "data", c = "block-start", O = "block-end", y = "variable-start", b = "variable-end", a = "comment", f = "left-paren", v = "right-paren", h = "left-bracket", d = "right-bracket", _ = "left-curly", w = "right-curly", A = "operator", B = "comma", N = "colon", F = "tilde", K = "pipe", L = "int", E = "float", C = "boolean", j = "none", D = "symbol", $ = "special", ie = "regex";
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
              var q = Q.tags || {};
              this.tags = {
                BLOCK_START: q.blockStart || g,
                BLOCK_END: q.blockEnd || x,
                VARIABLE_START: q.variableStart || S,
                VARIABLE_END: q.variableEnd || P,
                COMMENT_START: q.commentStart || I,
                COMMENT_END: q.commentEnd || T
              }, this.trimBlocks = !!Q.trimBlocks, this.lstripBlocks = !!Q.lstripBlocks;
            }
            var X = pe.prototype;
            return X.nextToken = function() {
              var Q = this.lineno, q = this.colno, G;
              if (this.in_code) {
                var se = this.current();
                if (this.isFinished())
                  return null;
                if (se === '"' || se === "'")
                  return z(R, this._parseString(se), Q, q);
                if (G = this._extract(u))
                  return z(s, G, Q, q);
                if ((G = this._extractString(this.tags.BLOCK_END)) || (G = this._extractString("-" + this.tags.BLOCK_END)))
                  return this.in_code = !1, this.trimBlocks && (se = this.current(), se === `
` ? this.forward() : se === "\r" && (this.forward(), se = this.current(), se === `
` ? this.forward() : this.back())), z(O, G, Q, q);
                if ((G = this._extractString(this.tags.VARIABLE_END)) || (G = this._extractString("-" + this.tags.VARIABLE_END)))
                  return this.in_code = !1, z(b, G, Q, q);
                if (se === "r" && this.str.charAt(this.index + 1) === "/") {
                  this.forwardN(2);
                  for (var we = ""; !this.isFinished(); )
                    if (this.current() === "/" && this.previous() !== "\\") {
                      this.forward();
                      break;
                    } else
                      we += this.current(), this.forward();
                  for (var he = ["g", "i", "m", "y"], ke = ""; !this.isFinished(); ) {
                    var k = he.indexOf(this.current()) !== -1;
                    if (k)
                      ke += this.current(), this.forward();
                    else
                      break;
                  }
                  return z(ie, {
                    body: we,
                    flags: ke
                  }, Q, q);
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
                  return z(U, se, Q, q);
                } else if (G = this._extractUntil(u + p), G.match(/^[-+]?[0-9]+$/))
                  if (this.current() === ".") {
                    this.forward();
                    var Y = this._extract(m);
                    return z(E, G + "." + Y, Q, q);
                  } else
                    return z(L, G, Q, q);
                else {
                  if (G.match(/^(true|false)$/))
                    return z(C, G, Q, q);
                  if (G === "none")
                    return z(j, G, Q, q);
                  if (G === "null")
                    return z(j, G, Q, q);
                  if (G)
                    return z(D, G, Q, q);
                  throw new Error("Unexpected value while parsing: " + G);
                }
              } else {
                var J = this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);
                if (this.isFinished())
                  return null;
                if ((G = this._extractString(this.tags.BLOCK_START + "-")) || (G = this._extractString(this.tags.BLOCK_START)))
                  return this.in_code = !0, z(c, G, Q, q);
                if ((G = this._extractString(this.tags.VARIABLE_START + "-")) || (G = this._extractString(this.tags.VARIABLE_START)))
                  return this.in_code = !0, z(y, G, Q, q);
                G = "";
                var ae, ee = !1;
                for (this._matches(this.tags.COMMENT_START) && (ee = !0, G = this._extractString(this.tags.COMMENT_START)); (ae = this._extractUntil(J)) !== null; )
                  if (G += ae, (this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !ee) {
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
                if (ae === null && ee)
                  throw new Error("expected end of comment, got end of file");
                return z(ee ? a : l, G, Q, q);
              }
            }, X._parseString = function(Q) {
              this.forward();
              for (var q = ""; !this.isFinished() && this.current() !== Q; ) {
                var G = this.current();
                if (G === "\\") {
                  switch (this.forward(), this.current()) {
                    case "n":
                      q += `
`;
                      break;
                    case "t":
                      q += "	";
                      break;
                    case "r":
                      q += "\r";
                      break;
                    default:
                      q += this.current();
                  }
                  this.forward();
                } else
                  q += G, this.forward();
              }
              return this.forward(), q;
            }, X._matches = function(Q) {
              if (this.index + Q.length > this.len)
                return null;
              var q = this.str.slice(this.index, this.index + Q.length);
              return q === Q;
            }, X._extractString = function(Q) {
              return this._matches(Q) ? (this.forwardN(Q.length), Q) : null;
            }, X._extractUntil = function(Q) {
              return this._extractMatching(!0, Q || "");
            }, X._extract = function(Q) {
              return this._extractMatching(!1, Q);
            }, X._extractMatching = function(Q, q) {
              if (this.isFinished())
                return null;
              var G = q.indexOf(this.current());
              if (Q && G === -1 || !Q && G !== -1) {
                var se = this.current();
                this.forward();
                for (var we = q.indexOf(this.current()); (Q && we === -1 || !Q && we !== -1) && !this.isFinished(); )
                  se += this.current(), this.forward(), we = q.indexOf(this.current());
                return se;
              }
              return "";
            }, X._extractRegex = function(Q) {
              var q = this.currentStr().match(Q);
              return q ? (this.forwardN(q[0].length), q) : null;
            }, X.isFinished = function() {
              return this.index >= this.len;
            }, X.forwardN = function(Q) {
              for (var q = 0; q < Q; q++)
                this.forward();
            }, X.forward = function() {
              this.index++, this.previous() === `
` ? (this.lineno++, this.colno = 0) : this.colno++;
            }, X.backN = function(Q) {
              for (var q = 0; q < Q; q++)
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
            TOKEN_STRING: R,
            TOKEN_WHITESPACE: s,
            TOKEN_DATA: l,
            TOKEN_BLOCK_START: c,
            TOKEN_BLOCK_END: O,
            TOKEN_VARIABLE_START: y,
            TOKEN_VARIABLE_END: b,
            TOKEN_COMMENT: a,
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
            TOKEN_INT: L,
            TOKEN_FLOAT: E,
            TOKEN_BOOLEAN: C,
            TOKEN_NONE: j,
            TOKEN_SYMBOL: D,
            TOKEN_SPECIAL: $,
            TOKEN_REGEX: ie
          };
        },
        /* 10 */
        /***/
        function(t, i, r) {
          function n(S, P) {
            S.prototype = Object.create(P.prototype), S.prototype.constructor = S, u(S, P);
          }
          function u(S, P) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(T, R) {
              return T.__proto__ = R, T;
            }, u(S, P);
          }
          var p = r(6), m = r(19), g = m.PrecompiledLoader, x = /* @__PURE__ */ function(S) {
            n(P, S);
            function P(T, R) {
              var s;
              return s = S.call(this) || this, s.baseURL = T || ".", R = R || {}, s.useCache = !!R.useCache, s.async = !!R.async, s;
            }
            var I = P.prototype;
            return I.resolve = function(R, s) {
              throw new Error("relative templates not support in the browser yet");
            }, I.getSource = function(R, s) {
              var l = this, c = this.useCache, O;
              return this.fetch(this.baseURL + "/" + R, function(y, b) {
                if (y)
                  if (s)
                    s(y.content);
                  else if (y.status === 404)
                    O = null;
                  else
                    throw y.content;
                else
                  O = {
                    src: b,
                    path: R,
                    noCache: !c
                  }, l.emit("load", R, O), s && s(null, O);
              }), O;
            }, I.fetch = function(R, s) {
              if (typeof window > "u")
                throw new Error("WebLoader can only by used in a browser");
              var l = new XMLHttpRequest(), c = !0;
              l.onreadystatechange = function() {
                l.readyState === 4 && c && (c = !1, l.status === 0 || l.status === 200 ? s(null, l.responseText) : s({
                  status: l.status,
                  content: l.responseText
                }));
              }, R += (R.indexOf("?") === -1 ? "?" : "&") + "s=" + new Date().getTime(), l.open("GET", R, this.async), l.send();
            }, P;
          }(p);
          t.exports = {
            WebLoader: x,
            PrecompiledLoader: g
          };
        },
        /* 11 */
        /***/
        function(t, i, r) {
          var n = r(0), u = r(7), p = u.Environment, m = u.Template, g = r(6), x = r(10), S = r(23), P = r(5), I = r(8), T = r(9), R = r(2), s = r(3), l = r(25), c;
          function O(y, b) {
            b = b || {}, n.isObject(y) && (b = y, y = null);
            var a;
            return x.FileSystemLoader ? a = new x.FileSystemLoader(y, {
              watch: b.watch,
              noCache: b.noCache
            }) : x.WebLoader && (a = new x.WebLoader(y, {
              useCache: b.web && b.web.useCache,
              async: b.web && b.web.async
            })), c = new p(a, b), b && b.express && c.express(b.express), c;
          }
          t.exports = {
            Environment: p,
            Template: m,
            Loader: g,
            FileSystemLoader: x.FileSystemLoader,
            NodeResolveLoader: x.NodeResolveLoader,
            PrecompiledLoader: x.PrecompiledLoader,
            WebLoader: x.WebLoader,
            compiler: P,
            parser: I,
            lexer: T,
            runtime: R,
            lib: n,
            nodes: s,
            installJinjaCompat: l,
            configure: O,
            reset: function() {
              c = void 0;
            },
            compile: function(b, a, f, v) {
              return c || O(), new m(b, a, f, v);
            },
            render: function(b, a, f) {
              return c || O(), c.render(b, a, f);
            },
            renderString: function(b, a, f) {
              return c || O(), c.renderString(b, a, f);
            },
            precompile: S ? S.precompile : void 0,
            precompileString: S ? S.precompileString : void 0
          };
        },
        /* 12 */
        /***/
        function(t, i, r) {
          var n = r(13), u = [], p = [], m = n.makeRequestCallFromTimer(g);
          function g() {
            if (p.length)
              throw p.shift();
          }
          t.exports = x;
          function x(P) {
            var I;
            u.length ? I = u.pop() : I = new S(), I.task = P, n(I);
          }
          function S() {
            this.task = null;
          }
          S.prototype.call = function() {
            try {
              this.task.call();
            } catch (P) {
              x.onerror ? x.onerror(P) : (p.push(P), m());
            } finally {
              this.task = null, u[u.length] = this;
            }
          };
        },
        /* 13 */
        /***/
        function(t, i, r) {
          (function(n) {
            t.exports = u;
            function u(s) {
              p.length || m(), p[p.length] = s;
            }
            var p = [], m, g = 0, x = 1024;
            function S() {
              for (; g < p.length; ) {
                var s = g;
                if (g = g + 1, p[s].call(), g > x) {
                  for (var l = 0, c = p.length - g; l < c; l++)
                    p[l] = p[l + g];
                  p.length -= g, g = 0;
                }
              }
              p.length = 0, g = 0;
            }
            var P = typeof n < "u" ? n : self, I = P.MutationObserver || P.WebKitMutationObserver;
            typeof I == "function" ? m = T(S) : m = R(S), u.requestFlush = m;
            function T(s) {
              var l = 1, c = new I(s), O = document.createTextNode("");
              return c.observe(O, { characterData: !0 }), function() {
                l = -l, O.data = l;
              };
            }
            function R(s) {
              return function() {
                var c = setTimeout(y, 0), O = setInterval(y, 50);
                function y() {
                  clearTimeout(c), clearInterval(O), s();
                }
              };
            }
            u.makeRequestCallFromTimer = R;
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
          var n, u;
          (function(p) {
            var m = function() {
              var I = Array.prototype.slice.call(arguments);
              typeof I[0] == "function" && I[0].apply(null, I.splice(1));
            }, g = function(I) {
              typeof setImmediate == "function" ? setImmediate(I) : typeof process < "u" && process.nextTick ? process.nextTick(I) : setTimeout(I, 0);
            }, x = function(I) {
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
              var s = R ? g : m;
              if (T = T || function() {
              }, !S(I)) {
                var l = new Error("First argument to waterfall must be an array of functions");
                return T(l);
              }
              if (!I.length)
                return T();
              var c = function(O) {
                return function(y) {
                  if (y)
                    T.apply(null, arguments), T = function() {
                    };
                  else {
                    var b = Array.prototype.slice.call(arguments, 1), a = O.next();
                    a ? b.push(c(a)) : b.push(T), s(function() {
                      O.apply(null, b);
                    });
                  }
                };
              };
              c(x(I))();
            };
            n = [], u = function() {
              return P;
            }.apply(i, n), u !== void 0 && (t.exports = u);
          })();
        },
        /* 16 */
        /***/
        function(t, i, r) {
          var n = typeof Reflect == "object" ? Reflect : null, u = n && typeof n.apply == "function" ? n.apply : function(d, _, w) {
            return Function.prototype.apply.call(d, _, w);
          }, p;
          n && typeof n.ownKeys == "function" ? p = n.ownKeys : Object.getOwnPropertySymbols ? p = function(d) {
            return Object.getOwnPropertyNames(d).concat(Object.getOwnPropertySymbols(d));
          } : p = function(d) {
            return Object.getOwnPropertyNames(d);
          };
          function m(h) {
            console && console.warn && console.warn(h);
          }
          var g = Number.isNaN || function(d) {
            return d !== d;
          };
          function x() {
            x.init.call(this);
          }
          t.exports = x, t.exports.once = a, x.EventEmitter = x, x.prototype._events = void 0, x.prototype._eventsCount = 0, x.prototype._maxListeners = void 0;
          var S = 10;
          function P(h) {
            if (typeof h != "function")
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof h);
          }
          Object.defineProperty(x, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
              return S;
            },
            set: function(h) {
              if (typeof h != "number" || h < 0 || g(h))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + h + ".");
              S = h;
            }
          }), x.init = function() {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, x.prototype.setMaxListeners = function(d) {
            if (typeof d != "number" || d < 0 || g(d))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + d + ".");
            return this._maxListeners = d, this;
          };
          function I(h) {
            return h._maxListeners === void 0 ? x.defaultMaxListeners : h._maxListeners;
          }
          x.prototype.getMaxListeners = function() {
            return I(this);
          }, x.prototype.emit = function(d) {
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
              u(K, this, _);
            else
              for (var L = K.length, E = O(K, L), w = 0; w < L; ++w)
                u(E[w], this, _);
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
              F.name = "MaxListenersExceededWarning", F.emitter = h, F.type = d, F.count = N.length, m(F);
            }
            return h;
          }
          x.prototype.addListener = function(d, _) {
            return T(this, d, _, !1);
          }, x.prototype.on = x.prototype.addListener, x.prototype.prependListener = function(d, _) {
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
          x.prototype.once = function(d, _) {
            return P(_), this.on(d, s(this, d, _)), this;
          }, x.prototype.prependOnceListener = function(d, _) {
            return P(_), this.prependListener(d, s(this, d, _)), this;
          }, x.prototype.removeListener = function(d, _) {
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
          }, x.prototype.off = x.prototype.removeListener, x.prototype.removeAllListeners = function(d) {
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
          function l(h, d, _) {
            var w = h._events;
            if (w === void 0)
              return [];
            var A = w[d];
            return A === void 0 ? [] : typeof A == "function" ? _ ? [A.listener || A] : [A] : _ ? b(A) : O(A, A.length);
          }
          x.prototype.listeners = function(d) {
            return l(this, d, !0);
          }, x.prototype.rawListeners = function(d) {
            return l(this, d, !1);
          }, x.listenerCount = function(h, d) {
            return typeof h.listenerCount == "function" ? h.listenerCount(d) : c.call(h, d);
          }, x.prototype.listenerCount = c;
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
          x.prototype.eventNames = function() {
            return this._eventsCount > 0 ? p(this._events) : [];
          };
          function O(h, d) {
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
          function a(h, d) {
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
          var n = r(3), u = r(0), p = 0;
          function m() {
            return "hole_" + p++;
          }
          function g(c, O) {
            for (var y = null, b = 0; b < c.length; b++) {
              var a = O(c[b]);
              a !== c[b] && (y || (y = c.slice()), y[b] = a);
            }
            return y || c;
          }
          function x(c, O, y) {
            if (!(c instanceof n.Node))
              return c;
            if (!y) {
              var b = O(c);
              if (b && b !== c)
                return b;
            }
            if (c instanceof n.NodeList) {
              var a = g(c.children, function(_) {
                return x(_, O, y);
              });
              a !== c.children && (c = new n[c.typename](c.lineno, c.colno, a));
            } else if (c instanceof n.CallExtension) {
              var f = x(c.args, O, y), v = g(c.contentArgs, function(_) {
                return x(_, O, y);
              });
              (f !== c.args || v !== c.contentArgs) && (c = new n[c.typename](c.extName, c.prop, f, v));
            } else {
              var h = c.fields.map(function(_) {
                return c[_];
              }), d = g(h, function(_) {
                return x(_, O, y);
              });
              d !== h && (c = new n[c.typename](c.lineno, c.colno), d.forEach(function(_, w) {
                c[c.fields[w]] = _;
              }));
            }
            return y && O(c) || c;
          }
          function S(c, O) {
            return x(c, O, !0);
          }
          function P(c, O, y) {
            var b = [], a = S(y ? c[y] : c, function(f) {
              var v;
              return f instanceof n.Block ? f : ((f instanceof n.Filter && u.indexOf(O, f.name.value) !== -1 || f instanceof n.CallExtensionAsync) && (v = new n.Symbol(f.lineno, f.colno, m()), b.push(new n.FilterAsync(f.lineno, f.colno, f.name, f.args, v))), v);
            });
            return y ? c[y] = a : c = a, b.length ? (b.push(c), new n.NodeList(c.lineno, c.colno, b)) : c;
          }
          function I(c, O) {
            return S(c, function(y) {
              return y instanceof n.Output ? P(y, O) : y instanceof n.Set ? P(y, O, "value") : y instanceof n.For ? P(y, O, "arr") : y instanceof n.If ? P(y, O, "cond") : y instanceof n.CallExtension ? P(y, O, "args") : void 0;
            });
          }
          function T(c) {
            return x(c, function(O) {
              if (O instanceof n.Block) {
                var y = !1, b = m();
                O.body = x(O.body, function(a) {
                  if (a instanceof n.FunCall && a.name.value === "super")
                    return y = !0, new n.Symbol(a.lineno, a.colno, b);
                }), y && O.body.children.unshift(new n.Super(0, 0, O.name, new n.Symbol(0, 0, b)));
              }
            });
          }
          function R(c) {
            return S(c, function(O) {
              if (!(!(O instanceof n.If) && !(O instanceof n.For))) {
                var y = !1;
                if (x(O, function(b) {
                  if (b instanceof n.FilterAsync || b instanceof n.IfAsync || b instanceof n.AsyncEach || b instanceof n.AsyncAll || b instanceof n.CallExtensionAsync)
                    return y = !0, b;
                }), y) {
                  if (O instanceof n.If)
                    return new n.IfAsync(O.lineno, O.colno, O.cond, O.body, O.else_);
                  if (O instanceof n.For && !(O instanceof n.AsyncAll))
                    return new n.AsyncEach(O.lineno, O.colno, O.arr, O.name, O.body, O.else_);
                }
              }
            });
          }
          function s(c, O) {
            return R(T(I(c, O)));
          }
          function l(c, O) {
            return s(c, O || []);
          }
          t.exports = {
            transform: l
          };
        },
        /* 18 */
        /***/
        function(t, p, r) {
          var n = r(0), u = r(2), p = t.exports = {};
          function m(k, M) {
            return k == null || k === !1 ? M : k;
          }
          p.abs = Math.abs;
          function g(k) {
            return k !== k;
          }
          function x(k, M, V) {
            var U, Y = [], J = [];
            for (U = 0; U < k.length; U++)
              U % M === 0 && J.length && (Y.push(J), J = []), J.push(k[U]);
            if (J.length) {
              if (V)
                for (U = J.length; U < M; U++)
                  J.push(V);
              Y.push(J);
            }
            return Y;
          }
          p.batch = x;
          function S(k) {
            k = m(k, "");
            var M = k.toLowerCase();
            return u.copySafeness(k, M.charAt(0).toUpperCase() + M.slice(1));
          }
          p.capitalize = S;
          function P(k, M) {
            if (k = m(k, ""), M = M || 80, k.length >= M)
              return k;
            var V = M - k.length, U = n.repeat(" ", V / 2 - V % 2), Y = n.repeat(" ", V / 2);
            return u.copySafeness(k, U + k + Y);
          }
          p.center = P;
          function I(k, M, V) {
            return V ? k || M : k !== void 0 ? k : M;
          }
          p.default = I;
          function T(k, M, V) {
            if (!n.isObject(k))
              throw new n.TemplateError("dictsort filter: val must be an object");
            var U = [];
            for (var Y in k)
              U.push([Y, k[Y]]);
            var J;
            if (V === void 0 || V === "key")
              J = 0;
            else if (V === "value")
              J = 1;
            else
              throw new n.TemplateError("dictsort filter: You can only sort by either key or value");
            return U.sort(function(ae, ee) {
              var ue = ae[J], Ee = ee[J];
              return M || (n.isString(ue) && (ue = ue.toUpperCase()), n.isString(Ee) && (Ee = Ee.toUpperCase())), ue > Ee ? 1 : ue === Ee ? 0 : -1;
            }), U;
          }
          p.dictsort = T;
          function R(k, M) {
            return JSON.stringify(k, null, M);
          }
          p.dump = R;
          function s(k) {
            return k instanceof u.SafeString ? k : (k = k ?? "", u.markSafe(n.escape(k.toString())));
          }
          p.escape = s;
          function l(k) {
            return k instanceof u.SafeString ? k : (k = k ?? "", u.markSafe(k.toString()));
          }
          p.safe = l;
          function c(k) {
            return k[0];
          }
          p.first = c;
          function O(k) {
            return k = k ?? "", u.markSafe(n.escape(k.toString()));
          }
          p.forceescape = O;
          function y(k, M) {
            return n.groupBy(k, M, this.env.opts.throwOnUndefined);
          }
          p.groupby = y;
          function b(k, M, V) {
            if (k = m(k, ""), k === "")
              return "";
            M = M || 4;
            var U = k.split(`
`), Y = n.repeat(" ", M), J = U.map(function(ae, ee) {
              return ee === 0 && !V ? ae : "" + Y + ae;
            }).join(`
`);
            return u.copySafeness(k, J);
          }
          p.indent = b;
          function a(k, M, V) {
            return M = M || "", V && (k = n.map(k, function(U) {
              return U[V];
            })), k.join(M);
          }
          p.join = a;
          function f(k) {
            return k[k.length - 1];
          }
          p.last = f;
          function v(k) {
            var M = m(k, "");
            return M !== void 0 ? typeof Map == "function" && M instanceof Map || typeof Set == "function" && M instanceof Set ? M.size : n.isObject(M) && !(M instanceof u.SafeString) ? n.keys(M).length : M.length : 0;
          }
          p.length = v;
          function h(k) {
            if (n.isString(k))
              return k.split("");
            if (n.isObject(k))
              return n._entries(k || {}).map(function(M) {
                var V = M[0], U = M[1];
                return {
                  key: V,
                  value: U
                };
              });
            if (n.isArray(k))
              return k;
            throw new n.TemplateError("list filter: type not iterable");
          }
          p.list = h;
          function d(k) {
            return k = m(k, ""), k.toLowerCase();
          }
          p.lower = d;
          function _(k) {
            return k == null ? "" : u.copySafeness(k, k.replace(/\r\n|\n/g, `<br />
`));
          }
          p.nl2br = _;
          function w(k) {
            return k[Math.floor(Math.random() * k.length)];
          }
          p.random = w;
          function A(k) {
            function M(V, U, Y) {
              U === void 0 && (U = "truthy");
              var J = this, ae = J.env.getTest(U);
              return n.toArray(V).filter(function(ue) {
                return ae.call(J, ue, Y) === k;
              });
            }
            return M;
          }
          p.reject = A(!1);
          function B(k, M) {
            return k.filter(function(V) {
              return !V[M];
            });
          }
          p.rejectattr = B, p.select = A(!0);
          function N(k, M) {
            return k.filter(function(V) {
              return !!V[M];
            });
          }
          p.selectattr = N;
          function F(k, M, V, U) {
            var Y = k;
            if (M instanceof RegExp)
              return k.replace(M, V);
            typeof U > "u" && (U = -1);
            var J = "";
            if (typeof M == "number")
              M = "" + M;
            else if (typeof M != "string")
              return k;
            if (typeof k == "number" && (k = "" + k), typeof k != "string" && !(k instanceof u.SafeString))
              return k;
            if (M === "")
              return J = V + k.split("").join(V) + V, u.copySafeness(k, J);
            var ae = k.indexOf(M);
            if (U === 0 || ae === -1)
              return k;
            for (var ee = 0, ue = 0; ae > -1 && (U === -1 || ue < U); )
              J += k.substring(ee, ae) + V, ee = ae + M.length, ue++, ae = k.indexOf(M, ee);
            return ee < k.length && (J += k.substring(ee)), u.copySafeness(Y, J);
          }
          p.replace = F;
          function K(k) {
            var M;
            return n.isString(k) ? M = h(k) : M = n.map(k, function(V) {
              return V;
            }), M.reverse(), n.isString(k) ? u.copySafeness(k, M.join("")) : M;
          }
          p.reverse = K;
          function L(k, M, V) {
            M = M || 0;
            var U = Math.pow(10, M), Y;
            return V === "ceil" ? Y = Math.ceil : V === "floor" ? Y = Math.floor : Y = Math.round, Y(k * U) / U;
          }
          p.round = L;
          function E(k, M, V) {
            for (var U = Math.floor(k.length / M), Y = k.length % M, J = [], ae = 0, ee = 0; ee < M; ee++) {
              var ue = ae + ee * U;
              ee < Y && ae++;
              var Ee = ae + (ee + 1) * U, Oe = k.slice(ue, Ee);
              V && ee >= Y && Oe.push(V), J.push(Oe);
            }
            return J;
          }
          p.slice = E;
          function C(k, M, V) {
            return V === void 0 && (V = 0), M && (k = n.map(k, function(U) {
              return U[M];
            })), V + k.reduce(function(U, Y) {
              return U + Y;
            }, 0);
          }
          p.sum = C, p.sort = u.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(M, V, U, Y) {
            var J = this, ae = n.map(M, function(ue) {
              return ue;
            }), ee = n.getAttrGetter(Y);
            return ae.sort(function(ue, Ee) {
              var Oe = Y ? ee(ue) : ue, Le = Y ? ee(Ee) : Ee;
              if (J.env.opts.throwOnUndefined && Y && (Oe === void 0 || Le === void 0))
                throw new TypeError('sort: attribute "' + Y + '" resolved to undefined');
              return !U && n.isString(Oe) && n.isString(Le) && (Oe = Oe.toLowerCase(), Le = Le.toLowerCase()), Oe < Le ? V ? 1 : -1 : Oe > Le ? V ? -1 : 1 : 0;
            }), ae;
          });
          function j(k) {
            return u.copySafeness(k, k);
          }
          p.string = j;
          function D(k, M) {
            k = m(k, "");
            var V = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, U = ie(k.replace(V, "")), Y = "";
            return M ? Y = U.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, `
`).replace(/\n\n\n+/g, `

`) : Y = U.replace(/\s+/gi, " "), u.copySafeness(k, Y);
          }
          p.striptags = D;
          function $(k) {
            k = m(k, "");
            var M = k.split(" ").map(function(V) {
              return S(V);
            });
            return u.copySafeness(k, M.join(" "));
          }
          p.title = $;
          function ie(k) {
            return u.copySafeness(k, k.replace(/^\s*|\s*$/g, ""));
          }
          p.trim = ie;
          function z(k, M, V, U) {
            var Y = k;
            if (k = m(k, ""), M = M || 255, k.length <= M)
              return k;
            if (V)
              k = k.substring(0, M);
            else {
              var J = k.lastIndexOf(" ", M);
              J === -1 && (J = M), k = k.substring(0, J);
            }
            return k += U ?? "...", u.copySafeness(Y, k);
          }
          p.truncate = z;
          function ce(k) {
            return k = m(k, ""), k.toUpperCase();
          }
          p.upper = ce;
          function pe(k) {
            var M = encodeURIComponent;
            if (n.isString(k))
              return M(k);
            var V = n.isArray(k) ? k : n._entries(k);
            return V.map(function(U) {
              var Y = U[0], J = U[1];
              return M(Y) + "=" + M(J);
            }).join("&");
          }
          p.urlencode = pe;
          var X = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, Z = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, Q = /^https?:\/\/.*$/, q = /^www\./, G = /\.(?:org|net|com)(?:\:|\/|$)/;
          function se(k, M, V) {
            g(M) && (M = 1 / 0);
            var U = V === !0 ? ' rel="nofollow"' : "", Y = k.split(/(\s+)/).filter(function(J) {
              return J && J.length;
            }).map(function(J) {
              var ae = J.match(X), ee = ae ? ae[1] : J, ue = ee.substr(0, M);
              return Q.test(ee) ? '<a href="' + ee + '"' + U + ">" + ue + "</a>" : q.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + ue + "</a>" : Z.test(ee) ? '<a href="mailto:' + ee + '">' + ee + "</a>" : G.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + ue + "</a>" : J;
            });
            return Y.join("");
          }
          p.urlize = se;
          function we(k) {
            k = m(k, "");
            var M = k ? k.match(/\w+/g) : null;
            return M ? M.length : null;
          }
          p.wordcount = we;
          function he(k, M) {
            var V = parseFloat(k);
            return g(V) ? M : V;
          }
          p.float = he;
          var ke = u.makeMacro(["value", "default", "base"], [], function(M, V, U) {
            U === void 0 && (U = 10);
            var Y = parseInt(M, U);
            return g(Y) ? V : Y;
          });
          p.int = ke, p.d = p.default, p.e = p.escape;
        },
        /* 19 */
        /***/
        function(t, i, r) {
          function n(g, x) {
            g.prototype = Object.create(x.prototype), g.prototype.constructor = g, u(g, x);
          }
          function u(g, x) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(P, I) {
              return P.__proto__ = I, P;
            }, u(g, x);
          }
          var p = r(6), m = /* @__PURE__ */ function(g) {
            n(x, g);
            function x(P) {
              var I;
              return I = g.call(this) || this, I.precompiled = P || {}, I;
            }
            var S = x.prototype;
            return S.getSource = function(I) {
              return this.precompiled[I] ? {
                src: {
                  type: "code",
                  obj: this.precompiled[I]
                },
                path: I
              } : null;
            }, x;
          }(p);
          t.exports = {
            PrecompiledLoader: m
          };
        },
        /* 20 */
        /***/
        function(t, i, r) {
          var n = r(2).SafeString;
          function u(w) {
            return typeof w == "function";
          }
          i.callable = u;
          function p(w) {
            return w !== void 0;
          }
          i.defined = p;
          function m(w, A) {
            return w % A === 0;
          }
          i.divisibleby = m;
          function g(w) {
            return w instanceof n;
          }
          i.escaped = g;
          function x(w, A) {
            return w === A;
          }
          i.equalto = x, i.eq = i.equalto, i.sameas = i.equalto;
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
          function l(w) {
            return w.toLowerCase() === w;
          }
          i.lower = l;
          function c(w, A) {
            return w !== A;
          }
          i.ne = c;
          function O(w) {
            return w === null;
          }
          i.null = O;
          function y(w) {
            return typeof w == "number";
          }
          i.number = y;
          function b(w) {
            return w % 2 === 1;
          }
          i.odd = b;
          function a(w) {
            return typeof w == "string";
          }
          i.string = a;
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
          function n(m) {
            var g = -1;
            return {
              current: null,
              reset: function() {
                g = -1, this.current = null;
              },
              next: function() {
                return g++, g >= m.length && (g = 0), this.current = m[g], this.current;
              }
            };
          }
          function u(m) {
            m = m || ",";
            var g = !0;
            return function() {
              var x = g ? "" : m;
              return g = !1, x;
            };
          }
          function p() {
            return {
              range: function(g, x, S) {
                typeof x > "u" ? (x = g, g = 0, S = 1) : S || (S = 1);
                var P = [];
                if (S > 0)
                  for (var I = g; I < x; I += S)
                    P.push(I);
                else
                  for (var T = g; T > x; T += S)
                    P.push(T);
                return P;
              },
              cycler: function() {
                return n(Array.prototype.slice.call(arguments));
              },
              joiner: function(g) {
                return u(g);
              }
            };
          }
          t.exports = p;
        },
        /* 22 */
        /***/
        function(t, i, r) {
          var n = r(4);
          t.exports = function(p, m) {
            function g(x, S) {
              if (this.name = x, this.path = x, this.defaultEngine = S.defaultEngine, this.ext = n.extname(x), !this.ext && !this.defaultEngine)
                throw new Error("No default engine was specified and no extension was provided.");
              this.ext || (this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine);
            }
            return g.prototype.render = function(S, P) {
              p.render(this.name, S, P);
            }, m.set("view", g), m.set("nunjucksEnv", p), p;
          };
        },
        /* 23 */
        /***/
        function(t, i, r) {
          var n = r(4), u = r(4), p = r(0), m = p._prettifyError, g = r(5), x = r(7), S = x.Environment, P = r(24);
          function I(l, c) {
            return Array.isArray(c) ? c.some(function(O) {
              return l.match(O);
            }) : !1;
          }
          function T(l, c) {
            c = c || {}, c.isString = !0;
            var O = c.env || new S([]), y = c.wrapper || P;
            if (!c.name)
              throw new Error('the "name" option is required when compiling a string');
            return y([s(l, c.name, O)], c);
          }
          function R(l, c) {
            c = c || {};
            var O = c.env || new S([]), y = c.wrapper || P;
            if (c.isString)
              return T(l, c);
            var b = n.existsSync(l) && n.statSync(l), a = [], f = [];
            function v(_) {
              n.readdirSync(_).forEach(function(w) {
                var A = u.join(_, w), B = A.substr(u.join(l, "/").length), N = n.statSync(A);
                N && N.isDirectory() ? (B += "/", I(B, c.exclude) || v(A)) : I(B, c.include) && f.push(A);
              });
            }
            if (b.isFile())
              a.push(s(n.readFileSync(l, "utf-8"), c.name || l, O));
            else if (b.isDirectory()) {
              v(l);
              for (var h = 0; h < f.length; h++) {
                var d = f[h].replace(u.join(l, "/"), "");
                try {
                  a.push(s(n.readFileSync(f[h], "utf-8"), d, O));
                } catch (_) {
                  if (c.force)
                    console.error(_);
                  else
                    throw _;
                }
              }
            }
            return y(a, c);
          }
          function s(l, c, O) {
            O = O || new S([]);
            var y = O.asyncFilters, b = O.extensionsList, a;
            c = c.replace(/\\/g, "/");
            try {
              a = g.compile(l, y, b, c, O.opts);
            } catch (f) {
              throw m(c, !1, f);
            }
            return {
              name: c,
              template: a
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
          function n(u, p) {
            var m = "";
            p = p || {};
            for (var g = 0; g < u.length; g++) {
              var x = JSON.stringify(u[g].name), S = u[g].template;
              m += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + x + `] = (function() {
` + S + `
})();
`, p.asFunction && (m += "return function(ctx, cb) { return nunjucks.render(" + x + `, ctx, cb); }
`), m += `})();
`;
            }
            return m;
          }
          t.exports = n;
        },
        /* 25 */
        /***/
        function(t, i, r) {
          function n() {
            var u = this.runtime, p = this.lib, m = this.compiler.Compiler, g = this.parser.Parser, x = this.nodes, S = this.lexer, P = u.contextOrFrameLookup, I = u.memberLookup, T, R;
            m && (T = m.prototype.assertType), g && (R = g.prototype.parseAggregate);
            function s() {
              u.contextOrFrameLookup = P, u.memberLookup = I, m && (m.prototype.assertType = T), g && (g.prototype.parseAggregate = R);
            }
            u.contextOrFrameLookup = function(v, h, d) {
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
            function l(f) {
              return {
                index: f.index,
                lineno: f.lineno,
                colno: f.colno
              };
            }
            if (x && m && g) {
              var c = x.Node.extend("Slice", {
                fields: ["start", "stop", "step"],
                init: function(v, h, d, _, w) {
                  d = d || new x.Literal(v, h, null), _ = _ || new x.Literal(v, h, null), w = w || new x.Literal(v, h, 1), this.parent(v, h, d, _, w);
                }
              });
              m.prototype.assertType = function(v) {
                v instanceof c || T.apply(this, arguments);
              }, m.prototype.compileSlice = function(v, h) {
                this._emit("("), this._compileExpression(v.start, h), this._emit("),("), this._compileExpression(v.stop, h), this._emit("),("), this._compileExpression(v.step, h), this._emit(")");
              }, g.prototype.parseAggregate = function() {
                var v = this, h = l(this.tokens);
                h.colno--, h.index--;
                try {
                  return R.apply(this);
                } catch (K) {
                  var d = l(this.tokens), _ = function() {
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
                  return new x.Array(w.lineno, w.colno, [A]);
                }
              };
            }
            function O(f, v, h, d) {
              f = f || [], v === null && (v = d < 0 ? f.length - 1 : 0), h === null ? h = d < 0 ? -1 : f.length : h < 0 && (h += f.length), v < 0 && (v += f.length);
              for (var _ = [], w = v; !(w < 0 || w > f.length || d > 0 && w >= h || d < 0 && w <= h); w += d)
                _.push(u.memberLookup(f, w));
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
            }, a = {
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
            return a.iteritems = a.items, a.itervalues = a.values, a.iterkeys = a.keys, u.memberLookup = function(v, h, d) {
              return arguments.length === 4 ? O.apply(this, arguments) : (v = v || {}, p.isArray(v) && y(b, h) ? b[h].bind(v) : p.isObject(v) && y(a, h) ? a[h].bind(v) : I.apply(this, arguments));
            }, s;
          }
          t.exports = n;
        }
        /******/
      ])
    );
  });
})(pn);
const dn = (o, e) => {
  const t = Ct(o);
  return Ke.configure({ autoescape: !0 }), Ke.renderString(e, t);
}, Ct = (o) => {
  const e = {};
  return Object.entries(o).forEach(([t, i]) => {
    if (vn(i)) {
      const r = Object.values(i.content);
      e[t] = r.filter((n) => !(n != null && n.hidden)).map((n) => Ct(n.questions));
      return;
    }
    if (mn(i)) {
      e[t] = i.values;
      return;
    }
    e[t] = i.value;
  }), e;
}, vn = (o) => Boolean(o.content), mn = (o) => Boolean(o.values);
class ht {
  constructor(e, t, i, r, n, u, p, m, g, x, S) {
    le(this, "interview", []);
    le(this, "nested", []);
    le(this, "result", {});
    le(this, "questionsInsideRepeat", []);
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
    le(this, "separator", "->");
    this.getQuestion = e, this.isLastRadio = t, this.getCompletionPercen = i, this.checkNextRadio = r, this.checkFirstRadio = n, this.isEnd = u, this.nextQuestion = p, this.previousQuestion = m, this.isRepeat = g, this.goToEndAndGetIdsAndGoBack = x, this.setValueOfRepeat = S;
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
      const u = this.nested[n + 1];
      let p = i.find((m) => m === r);
      if (p || (i.push(r), p = i.find((m) => m === r)), u) {
        const m = i[i.indexOf(p) + 1];
        if (m)
          if (Array.isArray(m))
            i = m;
          else {
            const g = [];
            i.splice(
              i[i.indexOf(p) + 1],
              0,
              g
            ), i = g;
          }
        else {
          const g = [];
          i.push(g), i = g;
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
    const { id: i = "", title: r = "", value: n = "", type: u = "", subType: p = "", indications: m = "", placeholder: g = "", questions: x = {}, other: S = {} } = e, P = { id: i, title: r, value: n, type: u, indications: m, placeholder: g, subType: p, questions: x, other: S };
    t !== "start" && this.applyLogicToQuestion(P);
    const I = P;
    P.type === "multipleChoice" && (I.choices = e.choices), I.percentageOfCompletion = t === "start" ? 0 : t, this.insertQuestionInInterview(P, t);
  }
  async copyRepeat(e) {
    const t = e.id;
    await this.setValueOfRepeat(t, 1);
    const i = await this.goToEndAndGetIdsAndGoBack();
    await this.setValueOfRepeat(t, 2);
    const r = await this.goToEndAndGetIdsAndGoBack();
    await this.setValueOfRepeat(t, 1, { checkAfterIdsGotten: !0 });
    let n = "";
    for (let m = 0; m < i.length; m++)
      if (i[m] !== r[m]) {
        n = i[m];
        break;
      }
    const u = async () => {
      const m = await this.isEnd();
      await this.nextQuestion();
      const g = await this.getQuestion({ ignoreCopy: !0 });
      return await this.previousQuestion(), g.id === n || m;
    }, p = new ht(
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
    await this.nextQuestion(), e.questions = await p.copy(), this.questionsInsideRepeat = [...this.questionsInsideRepeat, ...p.interview];
  }
  async copyQuestion(e = !1, t = !1) {
    const i = await this.getQuestion(), r = i.id;
    if (!this.getQuestionInsideRepeat(r))
      if (this.questionExistsInInterview(r))
        if (i.type === "multipleChoice")
          if (this.nested.find((u) => u.includes(r)) || this.applyLogicToQuestion(
            this.getQuestionInInterview(r)
          ), await this.isLastRadio()) {
            if (t && this.nested.length) {
              const u = await this.checkFirstRadio(i.id);
              this.setActiveMultipleOption(u.id, u.label);
            }
          } else {
            const u = await this.checkNextRadio(r);
            this.setActiveMultipleOption(u.id, u.label);
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
          this.setActiveMultipleOption(n.id, n.label);
        }
      }
  }
  async backToPreviousActive() {
    const e = this.nested;
    if (e.length) {
      const t = e[e.length - 1].split(this.separator)[0];
      let i = await this.getQuestion();
      for (; i.id !== t; )
        await this.previousQuestion(), i = await this.getQuestion();
      const r = await this.isLastRadio();
      await this.copyQuestion(), i.type === "multipleChoice" && r && (this.removeActiveMultipleOption(), await this.backToPreviousActive());
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
      const i = (r, n = !1) => {
        r.forEach((u, p) => {
          const m = r[p + 1];
          if (typeof u == "string") {
            const [g, x] = u.split(this.separator);
            t += `${g}.value === '${x}'`, m && (typeof m == "string" && (t += " || "), Array.isArray(m) && (t += " && "));
          }
          Array.isArray(u) && (t += " (", i(u, !0), m && typeof m == "string" && (t += "|| ")), n && !m && (t += ") ");
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
class It {
  constructor(e = "empty", t = { isRoot: !0, data: null, isLastContentInterviewOfRepeat: !1 }) {
    le(this, "interview", /* @__PURE__ */ new Map());
    le(this, "events");
    le(this, "current");
    le(this, "isRoot", !0);
    le(this, "isLastContentInterviewOfRepeat", !1);
    le(this, "data", {});
    le(this, "Cloner", ht);
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
    rn(e);
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
    const i = ln(e);
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
      const u = i[n][1], p = u == null ? void 0 : u.isCurrent, m = (u == null ? void 0 : u.type) === "repeat";
      if (t = i[n + 1] && i[n + 1][1], p && !m && !t && !this.isRoot) {
        if (this.canBeShown(u)) {
          u.isEnd = !0, e = u;
          break;
        }
        u.isCurrent = !1;
        for (let g = 0; g < i.length; g++) {
          const x = i[g][1];
          if (x.exitRepeat) {
            e = x;
            break;
          }
        }
      }
      if (p && !m && t) {
        u.isCurrent = !1, e = i[n + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (p && m && this.canBeShown(u)) {
        const g = u;
        g.isCurrent = !1, e = Array.from(g.content[0].nestedInterview.interview)[0][1], e.isCurrent = !0;
        break;
      }
      if (p && m && !this.canBeShown(u) && t) {
        u.isCurrent = !1, e = i[n + 1][1], e.isCurrent = !0, this.canBeShown(e) || (e = this.getNextQuestion());
        break;
      }
      if (p && m && !this.canBeShown(u) && !t) {
        u.isEnd = !0, e = u;
        break;
      }
      if (!p && m && !this.canBeShown(u) && !t) {
        u.isEnd = !0, e = u;
        break;
      }
      if (!p && m && this.canBeShown(u)) {
        let g = !1;
        const x = u;
        for (let S = 0; S < parseInt(u.value); S++)
          if (!x.content[S].hidden) {
            const P = !x.content[S + 1] || ((r = x.content[S + 1]) == null ? void 0 : r.hidden);
            if (e = x.content[S].nestedInterview.getNextQuestion(), e) {
              if (x.content[S].nestedInterview.isQuestionTheLastOfInterview(e.id))
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
                if (S + 1 < parseInt(u.value))
                  if (!e.isCurrent)
                    e.isEnd = !1, e = null;
                  else {
                    const T = Array.from(x.content[S + 1].nestedInterview.interview);
                    e.isCurrent = !1, e.isEnd = !1, e = T[0][1], e.isCurrent = !0;
                  }
                else {
                  const T = x.content[S].nestedInterview.canBeShown(e);
                  e.isEnd && !T && (e.isCurrent = !1, e = null);
                }
              if (e)
                break;
            } else if (P && t)
              g = !0;
            else if (!P && !e) {
              const I = Array.from(x.content[S].nestedInterview.interview).find((T) => T[1].isLast);
              if (I) {
                delete I[1].isLast;
                const T = Array.from(x.content[S + 1].nestedInterview.interview);
                if (!T[0][1].isCurrent) {
                  T[0][1].isCurrent = !0, e = T[0][1];
                  break;
                }
              }
            }
          }
        if (g)
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
    for (let u = 0; u < t.length; u++) {
      const p = t[u][1], m = this.canBeShown(p);
      if (t[u + 1] && t[u + 1][1], p.exitRepeat && delete p.exitRepeat, p.isLast && delete p.isLast, p.isNotLastOfRepeatContent && delete p.isNotLastOfRepeatContent, p.isCurrent) {
        r.isCurrent = !0, n = r, p.isCurrent = !1;
        break;
      } else if (m && (r = p), p.type === "repeat") {
        const g = p;
        for (let x = 0; x < parseInt(p.value) && !(!g.content[x].hidden && (n = g.content[x].nestedInterview.getPreviousQuestion(r), n != null && n.isPrevious && (n.isPrevious = !1, r = n, n = null), n && n.isCurrent)); x++)
          ;
        if (n && n.isCurrent)
          break;
      }
    }
    if (e && !n) {
      const u = this.reversePreviousUtil(t);
      u && (n = u);
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
          const u = r;
          for (let p = parseInt(r.value) - 1; p >= 0; p--)
            if (!u.content[p].hidden) {
              const m = Array.from(u.content[p].nestedInterview.interview);
              if (t = u.content[p].nestedInterview.reversePreviousUtil(m), t && (t.isPrevious = !0), t)
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
          const m = p.nestedInterview.getProgress();
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
          const u = r;
          for (let p = parseInt(r.value) - 1; p >= 0 && !(!u.content[p].hidden && (e = u.content[p].nestedInterview.getLastQuestionOfInterview(), e)); p--)
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
        for (let u = 0; u < parseInt(r.value) && !(!n.content[u].hidden && (t = n.content[u].nestedInterview.getCurrentGuidedInterview(), t)); u++)
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
    on(t, r), r.subType !== "multiSelect" && (r.value = t), (r == null ? void 0 : r.type) === "multipleChoice" && this.setRadioChecked(r, t, i), (r == null ? void 0 : r.type) === "repeat" && this.buildContentForRepeatQuestion(r, t), this.data[e] ? this.data[e].value = r.value : this.data[e] = { value: r.value }, r.subType === "multiSelect" && (this.data[e].values = r.values), this.events.dispatch("set-value", this.interview.get(e));
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
          const r = e.choices.find((u) => u.label === t);
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
    const { range: i, id: r, questions: n, indexInsideRepeat: u } = e, { min: p, max: m } = i;
    t = t && parseInt(t), t = sn(e.value, p, m), e.value = t, e.content || (e.content = {}), this.data[r] ? this.data[r].value = t : this.data[r] = { value: t, content: {} };
    for (let S = 0; S < t; S++) {
      if (e.content[S]) {
        e.content[S].hidden = !1, this.data[r].content[S].hidden = !1;
        continue;
      }
      this.data[r].content[S] = { hidden: !1, questions: {} };
      const P = new It(hn(n, S, u), {
        isRoot: !1,
        events: this.events,
        data: this.data[r].content[S].questions
      });
      e.content[S] = { hidden: !1, nestedInterview: P };
    }
    const g = Object.keys(e.content);
    if (t < g.length)
      for (let S = t; S < g.length; S++)
        e.content[S].hidden = !0, this.data[r].content[S].hidden = !0;
    Object.values(e.content).forEach((S, P) => {
      P + 1 === parseInt(t) ? S.nestedInterview.isLastContentInterviewOfRepeat = !0 : S.nestedInterview.isLastContentInterviewOfRepeat = !1;
    });
  }
  applyDataToQuestions(e) {
    Object.entries(e).forEach(([t, { value: i, content: r }]) => {
      this.setValue(t, i), r && Object.values(r).forEach((n, u) => {
        n.hidden || this.getNestedInterview(t, u).applyDataToQuestions(n.questions);
      });
    });
  }
  makeTemplate(e) {
    if (!e)
      throw new Error("No template provided");
    return dn(this.data, e);
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
    const n = Array.from(this.interview, ([p, m]) => ({ name: p, value: m }));
    n.forEach((p, m) => {
      p.name === e && (n[m].value.id = t, n[m].name = t);
    });
    const u = /* @__PURE__ */ new Map();
    n.forEach((p) => {
      u.set(p.name, p.value);
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
  It as GuidedInterview
};
