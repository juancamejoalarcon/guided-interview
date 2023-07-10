var Kt = Object.defineProperty;
var jt = (i, e, t) => e in i ? Kt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Le = (i, e, t) => (jt(i, typeof e != "symbol" ? e + "" : e, t), t);
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dt(i) {
  if (i.__esModule)
    return i;
  var e = i.default;
  if (typeof e == "function") {
    var t = function s() {
      if (this instanceof s) {
        var f = [null];
        f.push.apply(f, arguments);
        var a = Function.bind.apply(e, f);
        return new a();
      }
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(i).forEach(function(s) {
    var f = Object.getOwnPropertyDescriptor(i, s);
    Object.defineProperty(t, s, f.get ? f : {
      enumerable: !0,
      get: function() {
        return i[s];
      }
    });
  }), t;
}
var je = {}, De = {}, gt = {}, Ue = {}, Ve = {};
Object.defineProperty(Ve, "__esModule", {
  value: !0
});
Ve.default = Vt;
let Be;
const Ut = new Uint8Array(16);
function Vt() {
  if (!Be && (Be = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Be))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Be(Ut);
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
function Wt(i) {
  return i && i.__esModule ? i : { default: i };
}
function Gt(i) {
  return typeof i == "string" && $t.default.test(i);
}
var Ht = Gt;
Ne.default = Ht;
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
Ae.unsafeStringify = yt;
var Yt = Qt(Ne);
function Qt(i) {
  return i && i.__esModule ? i : { default: i };
}
const pe = [];
for (let i = 0; i < 256; ++i)
  pe.push((i + 256).toString(16).slice(1));
function yt(i, e = 0) {
  return (pe[i[e + 0]] + pe[i[e + 1]] + pe[i[e + 2]] + pe[i[e + 3]] + "-" + pe[i[e + 4]] + pe[i[e + 5]] + "-" + pe[i[e + 6]] + pe[i[e + 7]] + "-" + pe[i[e + 8]] + pe[i[e + 9]] + "-" + pe[i[e + 10]] + pe[i[e + 11]] + pe[i[e + 12]] + pe[i[e + 13]] + pe[i[e + 14]] + pe[i[e + 15]]).toLowerCase();
}
function zt(i, e = 0) {
  const t = yt(i, e);
  if (!(0, Yt.default)(t))
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
function en(i) {
  return i && i.__esModule ? i : { default: i };
}
let pt, st, ot = 0, at = 0;
function tn(i, e, t) {
  let s = e && t || 0;
  const f = e || new Array(16);
  i = i || {};
  let a = i.node || pt, d = i.clockseq !== void 0 ? i.clockseq : st;
  if (a == null || d == null) {
    const M = i.random || (i.rng || Xt.default)();
    a == null && (a = pt = [M[0] | 1, M[1], M[2], M[3], M[4], M[5]]), d == null && (d = st = (M[6] << 8 | M[7]) & 16383);
  }
  let m = i.msecs !== void 0 ? i.msecs : Date.now(), O = i.nsecs !== void 0 ? i.nsecs : at + 1;
  const _ = m - ot + (O - at) / 1e4;
  if (_ < 0 && i.clockseq === void 0 && (d = d + 1 & 16383), (_ < 0 || m > ot) && i.nsecs === void 0 && (O = 0), O >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ot = m, at = O, st = d, m += 122192928e5;
  const T = ((m & 268435455) * 1e4 + O) % 4294967296;
  f[s++] = T >>> 24 & 255, f[s++] = T >>> 16 & 255, f[s++] = T >>> 8 & 255, f[s++] = T & 255;
  const P = m / 4294967296 * 1e4 & 268435455;
  f[s++] = P >>> 8 & 255, f[s++] = P & 255, f[s++] = P >>> 24 & 15 | 16, f[s++] = P >>> 16 & 255, f[s++] = d >>> 8 | 128, f[s++] = d & 255;
  for (let M = 0; M < 6; ++M)
    f[s + M] = a[M];
  return e || (0, Zt.unsafeStringify)(f);
}
var nn = tn;
Ue.default = nn;
var $e = {}, Te = {}, Pe = {};
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.default = void 0;
var rn = sn(Ne);
function sn(i) {
  return i && i.__esModule ? i : { default: i };
}
function on(i) {
  if (!(0, rn.default)(i))
    throw TypeError("Invalid UUID");
  let e;
  const t = new Uint8Array(16);
  return t[0] = (e = parseInt(i.slice(0, 8), 16)) >>> 24, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = e & 255, t[4] = (e = parseInt(i.slice(9, 13), 16)) >>> 8, t[5] = e & 255, t[6] = (e = parseInt(i.slice(14, 18), 16)) >>> 8, t[7] = e & 255, t[8] = (e = parseInt(i.slice(19, 23), 16)) >>> 8, t[9] = e & 255, t[10] = (e = parseInt(i.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = e / 4294967296 & 255, t[12] = e >>> 24 & 255, t[13] = e >>> 16 & 255, t[14] = e >>> 8 & 255, t[15] = e & 255, t;
}
var an = on;
Pe.default = an;
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.URL = Te.DNS = void 0;
Te.default = hn;
var ln = Ae, un = cn(Pe);
function cn(i) {
  return i && i.__esModule ? i : { default: i };
}
function fn(i) {
  i = unescape(encodeURIComponent(i));
  const e = [];
  for (let t = 0; t < i.length; ++t)
    e.push(i.charCodeAt(t));
  return e;
}
const _t = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
Te.DNS = _t;
const wt = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
Te.URL = wt;
function hn(i, e, t) {
  function s(f, a, d, m) {
    var O;
    if (typeof f == "string" && (f = fn(f)), typeof a == "string" && (a = (0, un.default)(a)), ((O = a) === null || O === void 0 ? void 0 : O.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let _ = new Uint8Array(16 + f.length);
    if (_.set(a), _.set(f, a.length), _ = t(_), _[6] = _[6] & 15 | e, _[8] = _[8] & 63 | 128, d) {
      m = m || 0;
      for (let T = 0; T < 16; ++T)
        d[m + T] = _[T];
      return d;
    }
    return (0, ln.unsafeStringify)(_);
  }
  try {
    s.name = i;
  } catch {
  }
  return s.DNS = _t, s.URL = wt, s;
}
var We = {};
Object.defineProperty(We, "__esModule", {
  value: !0
});
We.default = void 0;
function pn(i) {
  if (typeof i == "string") {
    const e = unescape(encodeURIComponent(i));
    i = new Uint8Array(e.length);
    for (let t = 0; t < e.length; ++t)
      i[t] = e.charCodeAt(t);
  }
  return dn(vn(mn(i), i.length * 8));
}
function dn(i) {
  const e = [], t = i.length * 32, s = "0123456789abcdef";
  for (let f = 0; f < t; f += 8) {
    const a = i[f >> 5] >>> f % 32 & 255, d = parseInt(s.charAt(a >>> 4 & 15) + s.charAt(a & 15), 16);
    e.push(d);
  }
  return e;
}
function Et(i) {
  return (i + 64 >>> 9 << 4) + 14 + 1;
}
function vn(i, e) {
  i[e >> 5] |= 128 << e % 32, i[Et(e) - 1] = e;
  let t = 1732584193, s = -271733879, f = -1732584194, a = 271733878;
  for (let d = 0; d < i.length; d += 16) {
    const m = t, O = s, _ = f, T = a;
    t = de(t, s, f, a, i[d], 7, -680876936), a = de(a, t, s, f, i[d + 1], 12, -389564586), f = de(f, a, t, s, i[d + 2], 17, 606105819), s = de(s, f, a, t, i[d + 3], 22, -1044525330), t = de(t, s, f, a, i[d + 4], 7, -176418897), a = de(a, t, s, f, i[d + 5], 12, 1200080426), f = de(f, a, t, s, i[d + 6], 17, -1473231341), s = de(s, f, a, t, i[d + 7], 22, -45705983), t = de(t, s, f, a, i[d + 8], 7, 1770035416), a = de(a, t, s, f, i[d + 9], 12, -1958414417), f = de(f, a, t, s, i[d + 10], 17, -42063), s = de(s, f, a, t, i[d + 11], 22, -1990404162), t = de(t, s, f, a, i[d + 12], 7, 1804603682), a = de(a, t, s, f, i[d + 13], 12, -40341101), f = de(f, a, t, s, i[d + 14], 17, -1502002290), s = de(s, f, a, t, i[d + 15], 22, 1236535329), t = ve(t, s, f, a, i[d + 1], 5, -165796510), a = ve(a, t, s, f, i[d + 6], 9, -1069501632), f = ve(f, a, t, s, i[d + 11], 14, 643717713), s = ve(s, f, a, t, i[d], 20, -373897302), t = ve(t, s, f, a, i[d + 5], 5, -701558691), a = ve(a, t, s, f, i[d + 10], 9, 38016083), f = ve(f, a, t, s, i[d + 15], 14, -660478335), s = ve(s, f, a, t, i[d + 4], 20, -405537848), t = ve(t, s, f, a, i[d + 9], 5, 568446438), a = ve(a, t, s, f, i[d + 14], 9, -1019803690), f = ve(f, a, t, s, i[d + 3], 14, -187363961), s = ve(s, f, a, t, i[d + 8], 20, 1163531501), t = ve(t, s, f, a, i[d + 13], 5, -1444681467), a = ve(a, t, s, f, i[d + 2], 9, -51403784), f = ve(f, a, t, s, i[d + 7], 14, 1735328473), s = ve(s, f, a, t, i[d + 12], 20, -1926607734), t = me(t, s, f, a, i[d + 5], 4, -378558), a = me(a, t, s, f, i[d + 8], 11, -2022574463), f = me(f, a, t, s, i[d + 11], 16, 1839030562), s = me(s, f, a, t, i[d + 14], 23, -35309556), t = me(t, s, f, a, i[d + 1], 4, -1530992060), a = me(a, t, s, f, i[d + 4], 11, 1272893353), f = me(f, a, t, s, i[d + 7], 16, -155497632), s = me(s, f, a, t, i[d + 10], 23, -1094730640), t = me(t, s, f, a, i[d + 13], 4, 681279174), a = me(a, t, s, f, i[d], 11, -358537222), f = me(f, a, t, s, i[d + 3], 16, -722521979), s = me(s, f, a, t, i[d + 6], 23, 76029189), t = me(t, s, f, a, i[d + 9], 4, -640364487), a = me(a, t, s, f, i[d + 12], 11, -421815835), f = me(f, a, t, s, i[d + 15], 16, 530742520), s = me(s, f, a, t, i[d + 2], 23, -995338651), t = ge(t, s, f, a, i[d], 6, -198630844), a = ge(a, t, s, f, i[d + 7], 10, 1126891415), f = ge(f, a, t, s, i[d + 14], 15, -1416354905), s = ge(s, f, a, t, i[d + 5], 21, -57434055), t = ge(t, s, f, a, i[d + 12], 6, 1700485571), a = ge(a, t, s, f, i[d + 3], 10, -1894986606), f = ge(f, a, t, s, i[d + 10], 15, -1051523), s = ge(s, f, a, t, i[d + 1], 21, -2054922799), t = ge(t, s, f, a, i[d + 8], 6, 1873313359), a = ge(a, t, s, f, i[d + 15], 10, -30611744), f = ge(f, a, t, s, i[d + 6], 15, -1560198380), s = ge(s, f, a, t, i[d + 13], 21, 1309151649), t = ge(t, s, f, a, i[d + 4], 6, -145523070), a = ge(a, t, s, f, i[d + 11], 10, -1120210379), f = ge(f, a, t, s, i[d + 2], 15, 718787259), s = ge(s, f, a, t, i[d + 9], 21, -343485551), t = xe(t, m), s = xe(s, O), f = xe(f, _), a = xe(a, T);
  }
  return [t, s, f, a];
}
function mn(i) {
  if (i.length === 0)
    return [];
  const e = i.length * 8, t = new Uint32Array(Et(e));
  for (let s = 0; s < e; s += 8)
    t[s >> 5] |= (i[s / 8] & 255) << s % 32;
  return t;
}
function xe(i, e) {
  const t = (i & 65535) + (e & 65535);
  return (i >> 16) + (e >> 16) + (t >> 16) << 16 | t & 65535;
}
function gn(i, e) {
  return i << e | i >>> 32 - e;
}
function Ge(i, e, t, s, f, a) {
  return xe(gn(xe(xe(e, i), xe(s, a)), f), t);
}
function de(i, e, t, s, f, a, d) {
  return Ge(e & t | ~e & s, i, e, f, a, d);
}
function ve(i, e, t, s, f, a, d) {
  return Ge(e & s | t & ~s, i, e, f, a, d);
}
function me(i, e, t, s, f, a, d) {
  return Ge(e ^ t ^ s, i, e, f, a, d);
}
function ge(i, e, t, s, f, a, d) {
  return Ge(t ^ (e | ~s), i, e, f, a, d);
}
var yn = pn;
We.default = yn;
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.default = void 0;
var _n = bt(Te), wn = bt(We);
function bt(i) {
  return i && i.__esModule ? i : { default: i };
}
const En = (0, _n.default)("v3", 48, wn.default);
var bn = En;
$e.default = bn;
var He = {}, Ye = {};
Object.defineProperty(Ye, "__esModule", {
  value: !0
});
Ye.default = void 0;
const On = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var kn = {
  randomUUID: On
};
Ye.default = kn;
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.default = void 0;
var dt = Ot(Ye), Ln = Ot(Ve), xn = Ae;
function Ot(i) {
  return i && i.__esModule ? i : { default: i };
}
function Tn(i, e, t) {
  if (dt.default.randomUUID && !e && !i)
    return dt.default.randomUUID();
  i = i || {};
  const s = i.random || (i.rng || Ln.default)();
  if (s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, e) {
    t = t || 0;
    for (let f = 0; f < 16; ++f)
      e[t + f] = s[f];
    return e;
  }
  return (0, xn.unsafeStringify)(s);
}
var An = Tn;
He.default = An;
var Qe = {}, ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.default = void 0;
function Sn(i, e, t, s) {
  switch (i) {
    case 0:
      return e & t ^ ~e & s;
    case 1:
      return e ^ t ^ s;
    case 2:
      return e & t ^ e & s ^ t & s;
    case 3:
      return e ^ t ^ s;
  }
}
function lt(i, e) {
  return i << e | i >>> 32 - e;
}
function Nn(i) {
  const e = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof i == "string") {
    const d = unescape(encodeURIComponent(i));
    i = [];
    for (let m = 0; m < d.length; ++m)
      i.push(d.charCodeAt(m));
  } else
    Array.isArray(i) || (i = Array.prototype.slice.call(i));
  i.push(128);
  const s = i.length / 4 + 2, f = Math.ceil(s / 16), a = new Array(f);
  for (let d = 0; d < f; ++d) {
    const m = new Uint32Array(16);
    for (let O = 0; O < 16; ++O)
      m[O] = i[d * 64 + O * 4] << 24 | i[d * 64 + O * 4 + 1] << 16 | i[d * 64 + O * 4 + 2] << 8 | i[d * 64 + O * 4 + 3];
    a[d] = m;
  }
  a[f - 1][14] = (i.length - 1) * 8 / Math.pow(2, 32), a[f - 1][14] = Math.floor(a[f - 1][14]), a[f - 1][15] = (i.length - 1) * 8 & 4294967295;
  for (let d = 0; d < f; ++d) {
    const m = new Uint32Array(80);
    for (let R = 0; R < 16; ++R)
      m[R] = a[d][R];
    for (let R = 16; R < 80; ++R)
      m[R] = lt(m[R - 3] ^ m[R - 8] ^ m[R - 14] ^ m[R - 16], 1);
    let O = t[0], _ = t[1], T = t[2], P = t[3], M = t[4];
    for (let R = 0; R < 80; ++R) {
      const x = Math.floor(R / 20), N = lt(O, 5) + Sn(x, _, T, P) + M + e[x] + m[R] >>> 0;
      M = P, P = T, T = lt(_, 30) >>> 0, _ = O, O = N;
    }
    t[0] = t[0] + O >>> 0, t[1] = t[1] + _ >>> 0, t[2] = t[2] + T >>> 0, t[3] = t[3] + P >>> 0, t[4] = t[4] + M >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var Cn = Nn;
ze.default = Cn;
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.default = void 0;
var Rn = kt(Te), In = kt(ze);
function kt(i) {
  return i && i.__esModule ? i : { default: i };
}
const Pn = (0, Rn.default)("v5", 80, In.default);
var Fn = Pn;
Qe.default = Fn;
var Je = {};
Object.defineProperty(Je, "__esModule", {
  value: !0
});
Je.default = void 0;
var Bn = "00000000-0000-0000-0000-000000000000";
Je.default = Bn;
var Xe = {};
Object.defineProperty(Xe, "__esModule", {
  value: !0
});
Xe.default = void 0;
var Mn = Kn(Ne);
function Kn(i) {
  return i && i.__esModule ? i : { default: i };
}
function jn(i) {
  if (!(0, Mn.default)(i))
    throw TypeError("Invalid UUID");
  return parseInt(i.slice(14, 15), 16);
}
var Dn = jn;
Xe.default = Dn;
(function(i) {
  Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "NIL", {
    enumerable: !0,
    get: function() {
      return a.default;
    }
  }), Object.defineProperty(i, "parse", {
    enumerable: !0,
    get: function() {
      return _.default;
    }
  }), Object.defineProperty(i, "stringify", {
    enumerable: !0,
    get: function() {
      return O.default;
    }
  }), Object.defineProperty(i, "v1", {
    enumerable: !0,
    get: function() {
      return e.default;
    }
  }), Object.defineProperty(i, "v3", {
    enumerable: !0,
    get: function() {
      return t.default;
    }
  }), Object.defineProperty(i, "v4", {
    enumerable: !0,
    get: function() {
      return s.default;
    }
  }), Object.defineProperty(i, "v5", {
    enumerable: !0,
    get: function() {
      return f.default;
    }
  }), Object.defineProperty(i, "validate", {
    enumerable: !0,
    get: function() {
      return m.default;
    }
  }), Object.defineProperty(i, "version", {
    enumerable: !0,
    get: function() {
      return d.default;
    }
  });
  var e = T(Ue), t = T($e), s = T(He), f = T(Qe), a = T(Je), d = T(Xe), m = T(Ne), O = T(Ae), _ = T(Pe);
  function T(P) {
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
var Gn = ct && ct.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.RandomStringGenerator = void 0;
const Hn = Gn(Wn);
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
    const s = Hn.default.randomBytes(t), f = e.length - 1;
    let a = "";
    for (; t--; )
      a += e[s[t] & f];
    return a;
  }
}
tt.RandomStringGenerator = Yn;
var nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.StringReplacer = void 0;
class Qn {
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
nt.StringReplacer = Qn;
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
    const [s, f] = this.split(e, 2);
    return [s, f];
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
    const t = new zn.RandomStringConfig(), s = new Jn.RandomStringBuilder(t);
    return e || s.characters().numbers().symbols(), typeof e == "function" && e(s), typeof e == "number" && s.characters().numbers().symbols().length(e), this.generateRandom(t);
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
    const s = new RegExp(e, "g");
    return new te(this.value.replace(s, t));
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
      const s = Math.floor(Math.random() * t--), f = e[t];
      e[t] = e[s], e[s] = f;
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
const Zn = De, Ee = (i) => new Zn.Str(i);
je.Str = Ee;
Ee.uuid = () => Ee().uuid();
Ee.random = (i) => Ee().random(i);
Ee.isString = (i) => Ee().isString(i);
Ee.isAlphaNumeric = (i) => Ee().isAlphaNumeric(i);
Ee.isSymbol = (i) => Ee().isSymbol(i);
var er = je.default = Ee;
const mt = () => process.env.NODE_ENV === "test", tr = () => "id-" + (Math.random() + 1).toString(36).substring(7), Lt = (i) => er(i).isCamel(), xt = (i) => {
  let e = null;
  return Object.entries(i).forEach(([t, s]) => {
    if (s.type === "repeat") {
      const a = xt(s.questions);
      a && (e = a);
    }
    Lt(t) || (e = t);
  }), e;
}, Tt = (i) => {
  const e = Object.values(i);
  let t = [];
  const s = e.map((f, a) => e.find((d, m) => {
    if (d.type === "repeat" && (t = Tt(d.questions)), a !== m && d.id === f.id)
      return f;
  })).filter(Boolean);
  return t.length && s.push(...t), s;
}, nr = (i) => {
  var s;
  const e = Tt(i);
  if (e.length)
    throw new Error(`Duplicated id values: ${(s = e[0]) == null ? void 0 : s.id}`);
  const t = xt(i);
  if (t)
    throw new Error(`ID must be in camel case: ${t}`);
  return !0;
}, rr = (i, e, t) => i < e ? (mt() || console.warn(`Value ${i} is lower than min ${e}. Returning min.`), e) : i > t ? (mt() || console.warn(`Value ${i} is higher than max ${t}. Returning max.`), t) : i, ir = (i, e) => {
  if (e.type === "repeat" && isNaN(i))
    throw new Error("Value of repeat question must be a number");
}, ht = class {
  constructor() {
    Le(this, "subscribers");
    this.subscribers = {};
  }
  dispatch(e, t) {
    const s = this.subscribers[e];
    s !== void 0 && Object.keys(s).forEach((f) => s[f](t));
  }
  register(e, t) {
    const s = this.getNextId();
    return this.subscribers[e] || (this.subscribers[e] = {}), this.subscribers[e][s] = t, {
      unregister: () => {
        delete this.subscribers[e][s], Object.keys(this.subscribers[e]).length === 0 && delete this.subscribers[e];
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
}, or = (i, e = !1) => {
  if (!sr[i.type])
    throw new Error("Invalid question type");
  const t = i.id || tr();
  let s;
  return i.type === "text" ? s = ft(i) : i.type === "date" ? s = ar(i) : i.type === "multipleChoice" ? s = lr(i) : i.type === "repeat" ? s = ur(i) : s = ft(i), {
    id: t,
    type: i.type,
    title: i.title || "",
    indications: i.indications || "",
    logic: i.logic || {},
    ...s
  };
}, ft = (i) => ({
  value: i.value || "",
  required: Boolean(i.required),
  placeholder: i.placeholder || "",
  subType: i.subType || ""
}), ar = (i) => ({
  format: i.format || "dd/mm/yyyy",
  ...ft(i)
}), lr = (i) => {
  var e;
  return {
    value: ((e = i.choices.find((t) => t.checked === !0)) == null ? void 0 : e.label) || "",
    choices: i.choices || [],
    subType: i.subType || "radio"
  };
}, ur = (i) => ({
  value: i.value || "",
  range: i.range || { min: 0, max: 0 },
  questions: i.questions || {}
}), cr = (i, e) => {
  const t = JSON.parse(JSON.stringify(i));
  return Object.entries(t).forEach(([s, f]) => {
    const a = e + 1;
    f.title && (f.title = f.title.replace(/\<%= index %>/g, a.toString()));
  }), t;
};
var Ke = {}, fr = {
  get exports() {
    return Ke;
  },
  set exports(i) {
    Ke = i;
  }
};
/*! Browser bundle of nunjucks 3.2.4  */
(function(i, e) {
  (function(s, f) {
    i.exports = f();
  })(typeof self < "u" ? self : ct, function() {
    return (
      /******/
      function(t) {
        var s = {};
        function f(a) {
          if (s[a])
            return s[a].exports;
          var d = s[a] = {
            /******/
            i: a,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return t[a].call(d.exports, d, d.exports, f), d.l = !0, d.exports;
        }
        return f.m = t, f.c = s, f.d = function(a, d, m) {
          f.o(a, d) || Object.defineProperty(a, d, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: m
            /******/
          });
        }, f.n = function(a) {
          var d = a && a.__esModule ? (
            /******/
            function() {
              return a.default;
            }
          ) : (
            /******/
            function() {
              return a;
            }
          );
          return f.d(d, "a", d), d;
        }, f.o = function(a, d) {
          return Object.prototype.hasOwnProperty.call(a, d);
        }, f.p = "", f(f.s = 11);
      }([
        /* 0 */
        /***/
        function(t, _, f) {
          var a = Array.prototype, d = Object.prototype, m = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\\": "&#92;"
          }, O = /[&"'<>\\]/g, _ = t.exports = {};
          function T(w, S) {
            return d.hasOwnProperty.call(w, S);
          }
          _.hasOwnProp = T;
          function P(w) {
            return m[w];
          }
          function M(w, S, j) {
            if (j.Update || (j = new _.TemplateError(j)), j.Update(w), !S) {
              var D = j;
              j = new Error(D.message), j.name = D.name;
            }
            return j;
          }
          _._prettifyError = M;
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
          }), _.TemplateError = R;
          function x(w) {
            return w.replace(O, P);
          }
          _.escape = x;
          function N(w) {
            return d.toString.call(w) === "[object Function]";
          }
          _.isFunction = N;
          function n(w) {
            return d.toString.call(w) === "[object Array]";
          }
          _.isArray = n;
          function o(w) {
            return d.toString.call(w) === "[object String]";
          }
          _.isString = o;
          function l(w) {
            return d.toString.call(w) === "[object Object]";
          }
          _.isObject = l;
          function b(w) {
            return w ? typeof w == "string" ? w.split(".") : [w] : [];
          }
          function v(w) {
            var S = b(w);
            return function(D) {
              for (var $ = D, ne = 0; ne < S.length; ne++) {
                var z = S[ne];
                if (T($, z))
                  $ = $[z];
                else
                  return;
              }
              return $;
            };
          }
          _.getAttrGetter = v;
          function E(w, S, j) {
            for (var D = {}, $ = N(S) ? S : v(S), ne = 0; ne < w.length; ne++) {
              var z = w[ne], ue = $(z, ne);
              if (ue === void 0 && j === !0)
                throw new TypeError('groupby: attribute "' + S + '" resolved to undefined');
              (D[ue] || (D[ue] = [])).push(z);
            }
            return D;
          }
          _.groupBy = E;
          function r(w) {
            return Array.prototype.slice.call(w);
          }
          _.toArray = r;
          function u(w) {
            var S = [];
            if (!w)
              return S;
            for (var j = w.length, D = r(arguments).slice(1), $ = -1; ++$ < j; )
              A(D, w[$]) === -1 && S.push(w[$]);
            return S;
          }
          _.without = u;
          function p(w, S) {
            for (var j = "", D = 0; D < S; D++)
              j += w;
            return j;
          }
          _.repeat = p;
          function c(w, S, j) {
            if (w != null) {
              if (a.forEach && w.forEach === a.forEach)
                w.forEach(S, j);
              else if (w.length === +w.length)
                for (var D = 0, $ = w.length; D < $; D++)
                  S.call(j, w[D], D, w);
            }
          }
          _.each = c;
          function h(w, S) {
            var j = [];
            if (w == null)
              return j;
            if (a.map && w.map === a.map)
              return w.map(S);
            for (var D = 0; D < w.length; D++)
              j[j.length] = S(w[D], D);
            return w.length === +w.length && (j.length = w.length), j;
          }
          _.map = h;
          function y(w, S, j) {
            var D = -1;
            function $() {
              D++, D < w.length ? S(w[D], D, $, j) : j();
            }
            $();
          }
          _.asyncIter = y;
          function g(w, S, j) {
            var D = I(w || {}), $ = D.length, ne = -1;
            function z() {
              ne++;
              var ue = D[ne];
              ne < $ ? S(ue, w[ue], ne, $, z) : j();
            }
            z();
          }
          _.asyncFor = g;
          function A(w, S, j) {
            return Array.prototype.indexOf.call(w || [], S, j);
          }
          _.indexOf = A;
          function I(w) {
            var S = [];
            for (var j in w)
              T(w, j) && S.push(j);
            return S;
          }
          _.keys = I;
          function C(w) {
            return I(w).map(function(S) {
              return [S, w[S]];
            });
          }
          _._entries = C;
          function F(w) {
            return I(w).map(function(S) {
              return w[S];
            });
          }
          _._values = F;
          function K(w, S) {
            return w = w || {}, I(S).forEach(function(j) {
              w[j] = S[j];
            }), w;
          }
          _._assign = _.extend = K;
          function L(w, S) {
            if (n(S) || o(S))
              return S.indexOf(w) !== -1;
            if (l(S))
              return w in S;
            throw new Error('Cannot use "in" operator to search for "' + w + '" in unexpected types.');
          }
          _.inOperator = L;
        },
        /* 1 */
        /***/
        function(t, s, f) {
          function a(o, l) {
            for (var b = 0; b < l.length; b++) {
              var v = l[b];
              v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(o, m(v.key), v);
            }
          }
          function d(o, l, b) {
            return l && a(o.prototype, l), b && a(o, b), Object.defineProperty(o, "prototype", { writable: !1 }), o;
          }
          function m(o) {
            var l = O(o, "string");
            return typeof l == "symbol" ? l : String(l);
          }
          function O(o, l) {
            if (typeof o != "object" || o === null)
              return o;
            var b = o[Symbol.toPrimitive];
            if (b !== void 0) {
              var v = b.call(o, l || "default");
              if (typeof v != "object")
                return v;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (l === "string" ? String : Number)(o);
          }
          function _(o, l) {
            o.prototype = Object.create(l.prototype), o.prototype.constructor = o, T(o, l);
          }
          function T(o, l) {
            return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, E) {
              return v.__proto__ = E, v;
            }, T(o, l);
          }
          var P = f(16), M = f(0);
          function R(o, l) {
            return typeof o != "function" || typeof l != "function" ? l : function() {
              var v = this.parent;
              this.parent = o;
              var E = l.apply(this, arguments);
              return this.parent = v, E;
            };
          }
          function x(o, l, b) {
            b = b || {}, M.keys(b).forEach(function(E) {
              b[E] = R(o.prototype[E], b[E]);
            });
            var v = /* @__PURE__ */ function(E) {
              _(r, E);
              function r() {
                return E.apply(this, arguments) || this;
              }
              return d(r, [{
                key: "typename",
                get: function() {
                  return l;
                }
              }]), r;
            }(o);
            return M._assign(v.prototype, b), v;
          }
          var N = /* @__PURE__ */ function() {
            function o() {
              this.init.apply(this, arguments);
            }
            var l = o.prototype;
            return l.init = function() {
            }, o.extend = function(v, E) {
              return typeof v == "object" && (E = v, v = "anonymous"), x(this, v, E);
            }, d(o, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), o;
          }(), n = /* @__PURE__ */ function(o) {
            _(l, o);
            function l() {
              var v, E;
              return E = o.call(this) || this, (v = E).init.apply(v, arguments), E;
            }
            var b = l.prototype;
            return b.init = function() {
            }, l.extend = function(E, r) {
              return typeof E == "object" && (r = E, E = "anonymous"), x(this, E, r);
            }, d(l, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), l;
          }(P);
          t.exports = {
            Obj: N,
            EmitterObj: n
          };
        },
        /* 2 */
        /***/
        function(t, s, f) {
          var a = f(0), d = Array.from, m = typeof Symbol == "function" && Symbol.iterator && typeof d == "function", O = /* @__PURE__ */ function() {
            function h(g, A) {
              this.variables = /* @__PURE__ */ Object.create(null), this.parent = g, this.topLevel = !1, this.isolateWrites = A;
            }
            var y = h.prototype;
            return y.set = function(A, I, C) {
              var F = A.split("."), K = this.variables, L = this;
              if (C && (L = this.resolve(F[0], !0))) {
                L.set(A, I);
                return;
              }
              for (var w = 0; w < F.length - 1; w++) {
                var S = F[w];
                K[S] || (K[S] = {}), K = K[S];
              }
              K[F[F.length - 1]] = I;
            }, y.get = function(A) {
              var I = this.variables[A];
              return I !== void 0 ? I : null;
            }, y.lookup = function(A) {
              var I = this.parent, C = this.variables[A];
              return C !== void 0 ? C : I && I.lookup(A);
            }, y.resolve = function(A, I) {
              var C = I && this.isolateWrites ? void 0 : this.parent, F = this.variables[A];
              return F !== void 0 ? this : C && C.resolve(A);
            }, y.push = function(A) {
              return new h(this, A);
            }, y.pop = function() {
              return this.parent;
            }, h;
          }();
          function _(h, y, g) {
            return function() {
              for (var I = arguments.length, C = new Array(I), F = 0; F < I; F++)
                C[F] = arguments[F];
              var K = R(C), L, w = M(C);
              if (K > h.length)
                L = C.slice(0, h.length), C.slice(L.length, K).forEach(function(D, $) {
                  $ < y.length && (w[y[$]] = D);
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
              return g.apply(this, L);
            };
          }
          function T(h) {
            return h.__keywords = !0, h;
          }
          function P(h) {
            return h && Object.prototype.hasOwnProperty.call(h, "__keywords");
          }
          function M(h) {
            var y = h.length;
            if (y) {
              var g = h[y - 1];
              if (P(g))
                return g;
            }
            return {};
          }
          function R(h) {
            var y = h.length;
            if (y === 0)
              return 0;
            var g = h[y - 1];
            return P(g) ? y - 1 : y;
          }
          function x(h) {
            if (typeof h != "string")
              return h;
            this.val = h, this.length = h.length;
          }
          x.prototype = Object.create(String.prototype, {
            length: {
              writable: !0,
              configurable: !0,
              value: 0
            }
          }), x.prototype.valueOf = function() {
            return this.val;
          }, x.prototype.toString = function() {
            return this.val;
          };
          function N(h, y) {
            return h instanceof x ? new x(y) : y.toString();
          }
          function n(h) {
            var y = typeof h;
            return y === "string" ? new x(h) : y !== "function" ? h : function(A) {
              var I = h.apply(this, arguments);
              return typeof I == "string" ? new x(I) : I;
            };
          }
          function o(h, y) {
            return h = h ?? "", y && !(h instanceof x) && (h = a.escape(h.toString())), h;
          }
          function l(h, y, g) {
            if (h == null)
              throw new a.TemplateError("attempted to output null or undefined value", y + 1, g + 1);
            return h;
          }
          function b(h, y) {
            if (h != null)
              return typeof h[y] == "function" ? function() {
                for (var g = arguments.length, A = new Array(g), I = 0; I < g; I++)
                  A[I] = arguments[I];
                return h[y].apply(h, A);
              } : h[y];
          }
          function v(h, y, g, A) {
            if (h) {
              if (typeof h != "function")
                throw new Error("Unable to call `" + y + "`, which is not a function");
            } else
              throw new Error("Unable to call `" + y + "`, which is undefined or falsey");
            return h.apply(g, A);
          }
          function E(h, y, g) {
            var A = y.lookup(g);
            return A !== void 0 ? A : h.lookup(g);
          }
          function r(h, y, g) {
            return h.lineno ? h : new a.TemplateError(h, y, g);
          }
          function u(h, y, g, A) {
            if (a.isArray(h)) {
              var I = h.length;
              a.asyncIter(h, function(F, K, L) {
                switch (y) {
                  case 1:
                    g(F, K, I, L);
                    break;
                  case 2:
                    g(F[0], F[1], K, I, L);
                    break;
                  case 3:
                    g(F[0], F[1], F[2], K, I, L);
                    break;
                  default:
                    F.push(K, I, L), g.apply(this, F);
                }
              }, A);
            } else
              a.asyncFor(h, function(F, K, L, w, S) {
                g(F, K, L, w, S);
              }, A);
          }
          function p(h, y, g, A) {
            var I = 0, C, F;
            function K($, ne) {
              I++, F[$] = ne, I === C && A(null, F.join(""));
            }
            if (a.isArray(h))
              if (C = h.length, F = new Array(C), C === 0)
                A(null, "");
              else
                for (var L = 0; L < h.length; L++) {
                  var w = h[L];
                  switch (y) {
                    case 1:
                      g(w, L, C, K);
                      break;
                    case 2:
                      g(w[0], w[1], L, C, K);
                      break;
                    case 3:
                      g(w[0], w[1], w[2], L, C, K);
                      break;
                    default:
                      w.push(L, C, K), g.apply(this, w);
                  }
                }
            else {
              var S = a.keys(h || {});
              if (C = S.length, F = new Array(C), C === 0)
                A(null, "");
              else
                for (var j = 0; j < S.length; j++) {
                  var D = S[j];
                  g(D, h[D], j, C, K);
                }
            }
          }
          function c(h) {
            return typeof h != "object" || h === null || a.isArray(h) ? h : m && Symbol.iterator in h ? d(h) : h;
          }
          t.exports = {
            Frame: O,
            makeMacro: _,
            makeKeywordArgs: T,
            numArgs: R,
            suppressValue: o,
            ensureDefined: l,
            memberLookup: b,
            contextOrFrameLookup: E,
            callWrap: v,
            handleError: r,
            isArray: a.isArray,
            keys: a.keys,
            SafeString: x,
            copySafeness: N,
            markSafe: n,
            asyncEach: u,
            asyncAll: p,
            inOperator: a.inOperator,
            fromIterator: c
          };
        },
        /* 3 */
        /***/
        function(t, s, f) {
          function a(H, Y) {
            for (var ie = 0; ie < Y.length; ie++) {
              var re = Y[ie];
              re.enumerable = re.enumerable || !1, re.configurable = !0, "value" in re && (re.writable = !0), Object.defineProperty(H, m(re.key), re);
            }
          }
          function d(H, Y, ie) {
            return Y && a(H.prototype, Y), ie && a(H, ie), Object.defineProperty(H, "prototype", { writable: !1 }), H;
          }
          function m(H) {
            var Y = O(H, "string");
            return typeof Y == "symbol" ? Y : String(Y);
          }
          function O(H, Y) {
            if (typeof H != "object" || H === null)
              return H;
            var ie = H[Symbol.toPrimitive];
            if (ie !== void 0) {
              var re = ie.call(H, Y || "default");
              if (typeof re != "object")
                return re;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (Y === "string" ? String : Number)(H);
          }
          function _(H, Y) {
            H.prototype = Object.create(Y.prototype), H.prototype.constructor = H, T(H, Y);
          }
          function T(H, Y) {
            return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(re, oe) {
              return re.__proto__ = oe, re;
            }, T(H, Y);
          }
          var P = f(1), M = P.Obj;
          function R(H, Y, ie) {
            H instanceof Y && ie.push(H), H instanceof x && H.findAll(Y, ie);
          }
          var x = /* @__PURE__ */ function(H) {
            _(Y, H);
            function Y() {
              return H.apply(this, arguments) || this;
            }
            var ie = Y.prototype;
            return ie.init = function(oe, ce) {
              for (var _e = arguments, Se = this, Ie = arguments.length, Ft = new Array(Ie > 2 ? Ie - 2 : 0), Fe = 2; Fe < Ie; Fe++)
                Ft[Fe - 2] = arguments[Fe];
              this.lineno = oe, this.colno = ce, this.fields.forEach(function(Bt, Mt) {
                var it = _e[Mt + 2];
                it === void 0 && (it = null), Se[Bt] = it;
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
            }, Y;
          }(M), N = /* @__PURE__ */ function(H) {
            _(Y, H);
            function Y() {
              return H.apply(this, arguments) || this;
            }
            return d(Y, [{
              key: "typename",
              get: function() {
                return "Value";
              }
            }, {
              key: "fields",
              get: function() {
                return ["value"];
              }
            }]), Y;
          }(x), n = /* @__PURE__ */ function(H) {
            _(Y, H);
            function Y() {
              return H.apply(this, arguments) || this;
            }
            var ie = Y.prototype;
            return ie.init = function(oe, ce, _e) {
              H.prototype.init.call(this, oe, ce, _e || []);
            }, ie.addChild = function(oe) {
              this.children.push(oe);
            }, d(Y, [{
              key: "typename",
              get: function() {
                return "NodeList";
              }
            }, {
              key: "fields",
              get: function() {
                return ["children"];
              }
            }]), Y;
          }(x), o = n.extend("Root"), l = N.extend("Literal"), b = N.extend("Symbol"), v = n.extend("Group"), E = n.extend("Array"), r = x.extend("Pair", {
            fields: ["key", "value"]
          }), u = n.extend("Dict"), p = x.extend("LookupVal", {
            fields: ["target", "val"]
          }), c = x.extend("If", {
            fields: ["cond", "body", "else_"]
          }), h = c.extend("IfAsync"), y = x.extend("InlineIf", {
            fields: ["cond", "body", "else_"]
          }), g = x.extend("For", {
            fields: ["arr", "name", "body", "else_"]
          }), A = g.extend("AsyncEach"), I = g.extend("AsyncAll"), C = x.extend("Macro", {
            fields: ["name", "args", "body"]
          }), F = C.extend("Caller"), K = x.extend("Import", {
            fields: ["template", "target", "withContext"]
          }), L = /* @__PURE__ */ function(H) {
            _(Y, H);
            function Y() {
              return H.apply(this, arguments) || this;
            }
            var ie = Y.prototype;
            return ie.init = function(oe, ce, _e, Se, Ie) {
              H.prototype.init.call(this, oe, ce, _e, Se || new n(), Ie);
            }, d(Y, [{
              key: "typename",
              get: function() {
                return "FromImport";
              }
            }, {
              key: "fields",
              get: function() {
                return ["template", "names", "withContext"];
              }
            }]), Y;
          }(x), w = x.extend("FunCall", {
            fields: ["name", "args"]
          }), S = w.extend("Filter"), j = S.extend("FilterAsync", {
            fields: ["name", "args", "symbol"]
          }), D = u.extend("KeywordArgs"), $ = x.extend("Block", {
            fields: ["name", "body"]
          }), ne = x.extend("Super", {
            fields: ["blockName", "symbol"]
          }), z = x.extend("TemplateRef", {
            fields: ["template"]
          }), ue = z.extend("Extends"), he = x.extend("Include", {
            fields: ["template", "ignoreMissing"]
          }), X = x.extend("Set", {
            fields: ["targets", "value"]
          }), Z = x.extend("Switch", {
            fields: ["expr", "cases", "default"]
          }), q = x.extend("Case", {
            fields: ["cond", "body"]
          }), G = n.extend("Output"), W = x.extend("Capture", {
            fields: ["body"]
          }), se = l.extend("TemplateData"), ye = x.extend("UnaryOp", {
            fields: ["target"]
          }), fe = x.extend("BinOp", {
            fields: ["left", "right"]
          }), Oe = fe.extend("In"), k = fe.extend("Is"), B = fe.extend("Or"), V = fe.extend("And"), U = ye.extend("Not"), Q = fe.extend("Add"), J = fe.extend("Concat"), ae = fe.extend("Sub"), ee = fe.extend("Mul"), le = fe.extend("Div"), we = fe.extend("FloorDiv"), be = fe.extend("Mod"), ke = fe.extend("Pow"), Nt = ye.extend("Neg"), Ct = ye.extend("Pos"), Rt = x.extend("Compare", {
            fields: ["expr", "ops"]
          }), It = x.extend("CompareOperand", {
            fields: ["expr", "type"]
          }), rt = x.extend("CallExtension", {
            init: function(Y, ie, re, oe) {
              this.parent(), this.extName = Y.__name || Y, this.prop = ie, this.args = re || new n(), this.contentArgs = oe || [], this.autoescape = Y.autoescape;
            },
            fields: ["extName", "prop", "args", "contentArgs"]
          }), Pt = rt.extend("CallExtensionAsync");
          function Ce(H, Y, ie) {
            var re = H.split(`
`);
            re.forEach(function(oe, ce) {
              oe && (ie && ce > 0 || !ie) && process.stdout.write(" ".repeat(Y));
              var _e = ce === re.length - 1 ? "" : `
`;
              process.stdout.write("" + oe + _e);
            });
          }
          function Re(H, Y) {
            if (Y = Y || 0, Ce(H.typename + ": ", Y), H instanceof n)
              Ce(`
`), H.children.forEach(function(oe) {
                Re(oe, Y + 2);
              });
            else if (H instanceof rt)
              Ce(H.extName + "." + H.prop + `
`), H.args && Re(H.args, Y + 2), H.contentArgs && H.contentArgs.forEach(function(oe) {
                Re(oe, Y + 2);
              });
            else {
              var ie = [], re = null;
              H.iterFields(function(oe, ce) {
                oe instanceof x ? ie.push([ce, oe]) : (re = re || {}, re[ce] = oe);
              }), re ? Ce(JSON.stringify(re, null, 2) + `
`, null, !0) : Ce(`
`), ie.forEach(function(oe) {
                var ce = oe[0], _e = oe[1];
                Ce("[" + ce + "] =>", Y + 2), Re(_e, Y + 4);
              });
            }
          }
          t.exports = {
            Node: x,
            Root: o,
            NodeList: n,
            Value: N,
            Literal: l,
            Symbol: b,
            Group: v,
            Array: E,
            Pair: r,
            Dict: u,
            Output: G,
            Capture: W,
            TemplateData: se,
            If: c,
            IfAsync: h,
            InlineIf: y,
            For: g,
            AsyncEach: A,
            AsyncAll: I,
            Macro: C,
            Caller: F,
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
            LookupVal: p,
            BinOp: fe,
            In: Oe,
            Is: k,
            Or: B,
            And: V,
            Not: U,
            Add: Q,
            Concat: J,
            Sub: ae,
            Mul: ee,
            Div: le,
            FloorDiv: we,
            Mod: be,
            Pow: ke,
            Neg: Nt,
            Pos: Ct,
            Compare: Rt,
            CompareOperand: It,
            CallExtension: rt,
            CallExtensionAsync: Pt,
            printNodes: Re
          };
        },
        /* 4 */
        /***/
        function(t, s) {
        },
        /* 5 */
        /***/
        function(t, s, f) {
          function a(l, b) {
            l.prototype = Object.create(b.prototype), l.prototype.constructor = l, d(l, b);
          }
          function d(l, b) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(E, r) {
              return E.__proto__ = r, E;
            }, d(l, b);
          }
          var m = f(8), O = f(17), _ = f(3), T = f(0), P = T.TemplateError, M = f(2), R = M.Frame, x = f(1), N = x.Obj, n = {
            "==": "==",
            "===": "===",
            "!=": "!=",
            "!==": "!==",
            "<": "<",
            ">": ">",
            "<=": "<=",
            ">=": ">="
          }, o = /* @__PURE__ */ function(l) {
            a(b, l);
            function b() {
              return l.apply(this, arguments) || this;
            }
            var v = b.prototype;
            return v.init = function(r, u) {
              this.templateName = r, this.codebuf = [], this.lastId = 0, this.buffer = null, this.bufferStack = [], this._scopeClosers = "", this.inBlock = !1, this.throwOnUndefined = u;
            }, v.fail = function(r, u, p) {
              throw u !== void 0 && (u += 1), p !== void 0 && (p += 1), new P(r, u, p);
            }, v._pushBuffer = function() {
              var r = this._tmpid();
              return this.bufferStack.push(this.buffer), this.buffer = r, this._emit("var " + this.buffer + ' = "";'), r;
            }, v._popBuffer = function() {
              this.buffer = this.bufferStack.pop();
            }, v._emit = function(r) {
              this.codebuf.push(r);
            }, v._emitLine = function(r) {
              this._emit(r + `
`);
            }, v._emitLines = function() {
              for (var r = this, u = arguments.length, p = new Array(u), c = 0; c < u; c++)
                p[c] = arguments[c];
              p.forEach(function(h) {
                return r._emitLine(h);
              });
            }, v._emitFuncBegin = function(r, u) {
              this.buffer = "output", this._scopeClosers = "", this._emitLine("function " + u + "(env, context, frame, runtime, cb) {"), this._emitLine("var lineno = " + r.lineno + ";"), this._emitLine("var colno = " + r.colno + ";"), this._emitLine("var " + this.buffer + ' = "";'), this._emitLine("try {");
            }, v._emitFuncEnd = function(r) {
              r || this._emitLine("cb(null, " + this.buffer + ");"), this._closeScopeLevels(), this._emitLine("} catch (e) {"), this._emitLine("  cb(runtime.handleError(e, lineno, colno));"), this._emitLine("}"), this._emitLine("}"), this.buffer = null;
            }, v._addScopeLevel = function() {
              this._scopeClosers += "})";
            }, v._closeScopeLevels = function() {
              this._emitLine(this._scopeClosers + ";"), this._scopeClosers = "";
            }, v._withScopedSyntax = function(r) {
              var u = this._scopeClosers;
              this._scopeClosers = "", r.call(this), this._closeScopeLevels(), this._scopeClosers = u;
            }, v._makeCallback = function(r) {
              var u = this._tmpid();
              return "function(" + u + (r ? "," + r : "") + `) {
if(` + u + ") { cb(" + u + "); return; }";
            }, v._tmpid = function() {
              return this.lastId++, "t_" + this.lastId;
            }, v._templateName = function() {
              return this.templateName == null ? "undefined" : JSON.stringify(this.templateName);
            }, v._compileChildren = function(r, u) {
              var p = this;
              r.children.forEach(function(c) {
                p.compile(c, u);
              });
            }, v._compileAggregate = function(r, u, p, c) {
              var h = this;
              p && this._emit(p), r.children.forEach(function(y, g) {
                g > 0 && h._emit(","), h.compile(y, u);
              }), c && this._emit(c);
            }, v._compileExpression = function(r, u) {
              this.assertType(r, _.Literal, _.Symbol, _.Group, _.Array, _.Dict, _.FunCall, _.Caller, _.Filter, _.LookupVal, _.Compare, _.InlineIf, _.In, _.Is, _.And, _.Or, _.Not, _.Add, _.Concat, _.Sub, _.Mul, _.Div, _.FloorDiv, _.Mod, _.Pow, _.Neg, _.Pos, _.Compare, _.NodeList), this.compile(r, u);
            }, v.assertType = function(r) {
              for (var u = arguments.length, p = new Array(u > 1 ? u - 1 : 0), c = 1; c < u; c++)
                p[c - 1] = arguments[c];
              p.some(function(h) {
                return r instanceof h;
              }) || this.fail("assertType: invalid type: " + r.typename, r.lineno, r.colno);
            }, v.compileCallExtension = function(r, u, p) {
              var c = this, h = r.args, y = r.contentArgs, g = typeof r.autoescape == "boolean" ? r.autoescape : !0;
              if (p || this._emit(this.buffer + " += runtime.suppressValue("), this._emit('env.getExtension("' + r.extName + '")["' + r.prop + '"]('), this._emit("context"), (h || y) && this._emit(","), h && (h instanceof _.NodeList || this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"), h.children.forEach(function(I, C) {
                c._compileExpression(I, u), (C !== h.children.length - 1 || y.length) && c._emit(",");
              })), y.length && y.forEach(function(I, C) {
                if (C > 0 && c._emit(","), I) {
                  c._emitLine("function(cb) {"), c._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");
                  var F = c._pushBuffer();
                  c._withScopedSyntax(function() {
                    c.compile(I, u), c._emitLine("cb(null, " + F + ");");
                  }), c._popBuffer(), c._emitLine("return " + F + ";"), c._emitLine("}");
                } else
                  c._emit("null");
              }), p) {
                var A = this._tmpid();
                this._emitLine(", " + this._makeCallback(A)), this._emitLine(this.buffer + " += runtime.suppressValue(" + A + ", " + g + " && env.opts.autoescape);"), this._addScopeLevel();
              } else
                this._emit(")"), this._emit(", " + g + ` && env.opts.autoescape);
`);
            }, v.compileCallExtensionAsync = function(r, u) {
              this.compileCallExtension(r, u, !0);
            }, v.compileNodeList = function(r, u) {
              this._compileChildren(r, u);
            }, v.compileLiteral = function(r) {
              if (typeof r.value == "string") {
                var u = r.value.replace(/\\/g, "\\\\");
                u = u.replace(/"/g, '\\"'), u = u.replace(/\n/g, "\\n"), u = u.replace(/\r/g, "\\r"), u = u.replace(/\t/g, "\\t"), u = u.replace(/\u2028/g, "\\u2028"), this._emit('"' + u + '"');
              } else
                r.value === null ? this._emit("null") : this._emit(r.value.toString());
            }, v.compileSymbol = function(r, u) {
              var p = r.value, c = u.lookup(p);
              c ? this._emit(c) : this._emit('runtime.contextOrFrameLookup(context, frame, "' + p + '")');
            }, v.compileGroup = function(r, u) {
              this._compileAggregate(r, u, "(", ")");
            }, v.compileArray = function(r, u) {
              this._compileAggregate(r, u, "[", "]");
            }, v.compileDict = function(r, u) {
              this._compileAggregate(r, u, "{", "}");
            }, v.compilePair = function(r, u) {
              var p = r.key, c = r.value;
              p instanceof _.Symbol ? p = new _.Literal(p.lineno, p.colno, p.value) : p instanceof _.Literal && typeof p.value == "string" || this.fail("compilePair: Dict keys must be strings or names", p.lineno, p.colno), this.compile(p, u), this._emit(": "), this._compileExpression(c, u);
            }, v.compileInlineIf = function(r, u) {
              this._emit("("), this.compile(r.cond, u), this._emit("?"), this.compile(r.body, u), this._emit(":"), r.else_ !== null ? this.compile(r.else_, u) : this._emit('""'), this._emit(")");
            }, v.compileIn = function(r, u) {
              this._emit("runtime.inOperator("), this.compile(r.left, u), this._emit(","), this.compile(r.right, u), this._emit(")");
            }, v.compileIs = function(r, u) {
              var p = r.right.name ? r.right.name.value : r.right.value;
              this._emit('env.getTest("' + p + '").call(context, '), this.compile(r.left, u), r.right.args && (this._emit(","), this.compile(r.right.args, u)), this._emit(") === true");
            }, v._binOpEmitter = function(r, u, p) {
              this.compile(r.left, u), this._emit(p), this.compile(r.right, u);
            }, v.compileOr = function(r, u) {
              return this._binOpEmitter(r, u, " || ");
            }, v.compileAnd = function(r, u) {
              return this._binOpEmitter(r, u, " && ");
            }, v.compileAdd = function(r, u) {
              return this._binOpEmitter(r, u, " + ");
            }, v.compileConcat = function(r, u) {
              return this._binOpEmitter(r, u, ' + "" + ');
            }, v.compileSub = function(r, u) {
              return this._binOpEmitter(r, u, " - ");
            }, v.compileMul = function(r, u) {
              return this._binOpEmitter(r, u, " * ");
            }, v.compileDiv = function(r, u) {
              return this._binOpEmitter(r, u, " / ");
            }, v.compileMod = function(r, u) {
              return this._binOpEmitter(r, u, " % ");
            }, v.compileNot = function(r, u) {
              this._emit("!"), this.compile(r.target, u);
            }, v.compileFloorDiv = function(r, u) {
              this._emit("Math.floor("), this.compile(r.left, u), this._emit(" / "), this.compile(r.right, u), this._emit(")");
            }, v.compilePow = function(r, u) {
              this._emit("Math.pow("), this.compile(r.left, u), this._emit(", "), this.compile(r.right, u), this._emit(")");
            }, v.compileNeg = function(r, u) {
              this._emit("-"), this.compile(r.target, u);
            }, v.compilePos = function(r, u) {
              this._emit("+"), this.compile(r.target, u);
            }, v.compileCompare = function(r, u) {
              var p = this;
              this.compile(r.expr, u), r.ops.forEach(function(c) {
                p._emit(" " + n[c.type] + " "), p.compile(c.expr, u);
              });
            }, v.compileLookupVal = function(r, u) {
              this._emit("runtime.memberLookup(("), this._compileExpression(r.target, u), this._emit("),"), this._compileExpression(r.val, u), this._emit(")");
            }, v._getNodeName = function(r) {
              switch (r.typename) {
                case "Symbol":
                  return r.value;
                case "FunCall":
                  return "the return value of (" + this._getNodeName(r.name) + ")";
                case "LookupVal":
                  return this._getNodeName(r.target) + '["' + this._getNodeName(r.val) + '"]';
                case "Literal":
                  return r.value.toString();
                default:
                  return "--expression--";
              }
            }, v.compileFunCall = function(r, u) {
              this._emit("(lineno = " + r.lineno + ", colno = " + r.colno + ", "), this._emit("runtime.callWrap("), this._compileExpression(r.name, u), this._emit(', "' + this._getNodeName(r.name).replace(/"/g, '\\"') + '", context, '), this._compileAggregate(r.args, u, "[", "])"), this._emit(")");
            }, v.compileFilter = function(r, u) {
              var p = r.name;
              this.assertType(p, _.Symbol), this._emit('env.getFilter("' + p.value + '").call(context, '), this._compileAggregate(r.args, u), this._emit(")");
            }, v.compileFilterAsync = function(r, u) {
              var p = r.name, c = r.symbol.value;
              this.assertType(p, _.Symbol), u.set(c, c), this._emit('env.getFilter("' + p.value + '").call(context, '), this._compileAggregate(r.args, u), this._emitLine(", " + this._makeCallback(c)), this._addScopeLevel();
            }, v.compileKeywordArgs = function(r, u) {
              this._emit("runtime.makeKeywordArgs("), this.compileDict(r, u), this._emit(")");
            }, v.compileSet = function(r, u) {
              var p = this, c = [];
              r.targets.forEach(function(h) {
                var y = h.value, g = u.lookup(y);
                g == null && (g = p._tmpid(), p._emitLine("var " + g + ";")), c.push(g);
              }), r.value ? (this._emit(c.join(" = ") + " = "), this._compileExpression(r.value, u), this._emitLine(";")) : (this._emit(c.join(" = ") + " = "), this.compile(r.body, u), this._emitLine(";")), r.targets.forEach(function(h, y) {
                var g = c[y], A = h.value;
                p._emitLine('frame.set("' + A + '", ' + g + ", true);"), p._emitLine("if(frame.topLevel) {"), p._emitLine('context.setVariable("' + A + '", ' + g + ");"), p._emitLine("}"), A.charAt(0) !== "_" && (p._emitLine("if(frame.topLevel) {"), p._emitLine('context.addExport("' + A + '", ' + g + ");"), p._emitLine("}"));
              });
            }, v.compileSwitch = function(r, u) {
              var p = this;
              this._emit("switch ("), this.compile(r.expr, u), this._emit(") {"), r.cases.forEach(function(c, h) {
                p._emit("case "), p.compile(c.cond, u), p._emit(": "), p.compile(c.body, u), c.body.children.length && p._emitLine("break;");
              }), r.default && (this._emit("default:"), this.compile(r.default, u)), this._emit("}");
            }, v.compileIf = function(r, u, p) {
              var c = this;
              this._emit("if("), this._compileExpression(r.cond, u), this._emitLine(") {"), this._withScopedSyntax(function() {
                c.compile(r.body, u), p && c._emit("cb()");
              }), r.else_ ? (this._emitLine(`}
else {`), this._withScopedSyntax(function() {
                c.compile(r.else_, u), p && c._emit("cb()");
              })) : p && (this._emitLine(`}
else {`), this._emit("cb()")), this._emitLine("}");
            }, v.compileIfAsync = function(r, u) {
              this._emit("(function(cb) {"), this.compileIf(r, u, !0), this._emit("})(" + this._makeCallback()), this._addScopeLevel();
            }, v._emitLoopBindings = function(r, u, p, c) {
              var h = this, y = [{
                name: "index",
                val: p + " + 1"
              }, {
                name: "index0",
                val: p
              }, {
                name: "revindex",
                val: c + " - " + p
              }, {
                name: "revindex0",
                val: c + " - " + p + " - 1"
              }, {
                name: "first",
                val: p + " === 0"
              }, {
                name: "last",
                val: p + " === " + c + " - 1"
              }, {
                name: "length",
                val: c
              }];
              y.forEach(function(g) {
                h._emitLine('frame.set("loop.' + g.name + '", ' + g.val + ");");
              });
            }, v.compileFor = function(r, u) {
              var p = this, c = this._tmpid(), h = this._tmpid(), y = this._tmpid();
              if (u = u.push(), this._emitLine("frame = frame.push();"), this._emit("var " + y + " = "), this._compileExpression(r.arr, u), this._emitLine(";"), this._emit("if(" + y + ") {"), this._emitLine(y + " = runtime.fromIterator(" + y + ");"), r.name instanceof _.Array) {
                this._emitLine("var " + c + ";"), this._emitLine("if(runtime.isArray(" + y + ")) {"), this._emitLine("var " + h + " = " + y + ".length;"), this._emitLine("for(" + c + "=0; " + c + " < " + y + ".length; " + c + "++) {"), r.name.children.forEach(function(L, w) {
                  var S = p._tmpid();
                  p._emitLine("var " + S + " = " + y + "[" + c + "][" + w + "];"), p._emitLine('frame.set("' + L + '", ' + y + "[" + c + "][" + w + "]);"), u.set(r.name.children[w].value, S);
                }), this._emitLoopBindings(r, y, c, h), this._withScopedSyntax(function() {
                  p.compile(r.body, u);
                }), this._emitLine("}"), this._emitLine("} else {");
                var g = r.name.children, A = g[0], I = g[1], C = this._tmpid(), F = this._tmpid();
                u.set(A.value, C), u.set(I.value, F), this._emitLine(c + " = -1;"), this._emitLine("var " + h + " = runtime.keys(" + y + ").length;"), this._emitLine("for(var " + C + " in " + y + ") {"), this._emitLine(c + "++;"), this._emitLine("var " + F + " = " + y + "[" + C + "];"), this._emitLine('frame.set("' + A.value + '", ' + C + ");"), this._emitLine('frame.set("' + I.value + '", ' + F + ");"), this._emitLoopBindings(r, y, c, h), this._withScopedSyntax(function() {
                  p.compile(r.body, u);
                }), this._emitLine("}"), this._emitLine("}");
              } else {
                var K = this._tmpid();
                u.set(r.name.value, K), this._emitLine("var " + h + " = " + y + ".length;"), this._emitLine("for(var " + c + "=0; " + c + " < " + y + ".length; " + c + "++) {"), this._emitLine("var " + K + " = " + y + "[" + c + "];"), this._emitLine('frame.set("' + r.name.value + '", ' + K + ");"), this._emitLoopBindings(r, y, c, h), this._withScopedSyntax(function() {
                  p.compile(r.body, u);
                }), this._emitLine("}");
              }
              this._emitLine("}"), r.else_ && (this._emitLine("if (!" + h + ") {"), this.compile(r.else_, u), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, v._compileAsyncLoop = function(r, u, p) {
              var c = this, h = this._tmpid(), y = this._tmpid(), g = this._tmpid(), A = p ? "asyncAll" : "asyncEach";
              if (u = u.push(), this._emitLine("frame = frame.push();"), this._emit("var " + g + " = runtime.fromIterator("), this._compileExpression(r.arr, u), this._emitLine(");"), r.name instanceof _.Array) {
                var I = r.name.children.length;
                this._emit("runtime." + A + "(" + g + ", " + I + ", function("), r.name.children.forEach(function(K) {
                  c._emit(K.value + ",");
                }), this._emit(h + "," + y + ",next) {"), r.name.children.forEach(function(K) {
                  var L = K.value;
                  u.set(L, L), c._emitLine('frame.set("' + L + '", ' + L + ");");
                });
              } else {
                var C = r.name.value;
                this._emitLine("runtime." + A + "(" + g + ", 1, function(" + C + ", " + h + ", " + y + ",next) {"), this._emitLine('frame.set("' + C + '", ' + C + ");"), u.set(C, C);
              }
              this._emitLoopBindings(r, g, h, y), this._withScopedSyntax(function() {
                var K;
                p && (K = c._pushBuffer()), c.compile(r.body, u), c._emitLine("next(" + h + (K ? "," + K : "") + ");"), p && c._popBuffer();
              });
              var F = this._tmpid();
              this._emitLine("}, " + this._makeCallback(F)), this._addScopeLevel(), p && this._emitLine(this.buffer + " += " + F + ";"), r.else_ && (this._emitLine("if (!" + g + ".length) {"), this.compile(r.else_, u), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, v.compileAsyncEach = function(r, u) {
              this._compileAsyncLoop(r, u);
            }, v.compileAsyncAll = function(r, u) {
              this._compileAsyncLoop(r, u, !0);
            }, v._compileMacro = function(r, u) {
              var p = this, c = [], h = null, y = "macro_" + this._tmpid(), g = u !== void 0;
              r.args.children.forEach(function(L, w) {
                w === r.args.children.length - 1 && L instanceof _.Dict ? h = L : (p.assertType(L, _.Symbol), c.push(L));
              });
              var A = [].concat(c.map(function(L) {
                return "l_" + L.value;
              }), ["kwargs"]), I = c.map(function(L) {
                return '"' + L.value + '"';
              }), C = (h && h.children || []).map(function(L) {
                return '"' + L.key.value + '"';
              }), F;
              g ? F = u.push(!0) : F = new R(), this._emitLines("var " + y + " = runtime.makeMacro(", "[" + I.join(", ") + "], ", "[" + C.join(", ") + "], ", "function (" + A.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (g ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'), c.forEach(function(L) {
                p._emitLine('frame.set("' + L.value + '", l_' + L.value + ");"), F.set(L.value, "l_" + L.value);
              }), h && h.children.forEach(function(L) {
                var w = L.key.value;
                p._emit('frame.set("' + w + '", '), p._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + w + '")'), p._emit(' ? kwargs["' + w + '"] : '), p._compileExpression(L.value, F), p._emit(");");
              });
              var K = this._pushBuffer();
              return this._withScopedSyntax(function() {
                p.compile(r.body, F);
              }), this._emitLine("frame = " + (g ? "frame.pop();" : "callerFrame;")), this._emitLine("return new runtime.SafeString(" + K + ");"), this._emitLine("});"), this._popBuffer(), y;
            }, v.compileMacro = function(r, u) {
              var p = this._compileMacro(r), c = r.name.value;
              u.set(c, p), u.parent ? this._emitLine('frame.set("' + c + '", ' + p + ");") : (r.name.value.charAt(0) !== "_" && this._emitLine('context.addExport("' + c + '");'), this._emitLine('context.setVariable("' + c + '", ' + p + ");"));
            }, v.compileCaller = function(r, u) {
              this._emit("(function (){");
              var p = this._compileMacro(r, u);
              this._emit("return " + p + ";})()");
            }, v._compileGetTemplate = function(r, u, p, c) {
              var h = this._tmpid(), y = this._templateName(), g = this._makeCallback(h), A = p ? "true" : "false", I = c ? "true" : "false";
              return this._emit("env.getTemplate("), this._compileExpression(r.template, u), this._emitLine(", " + A + ", " + y + ", " + I + ", " + g), h;
            }, v.compileImport = function(r, u) {
              var p = r.target.value, c = this._compileGetTemplate(r, u, !1, !1);
              this._addScopeLevel(), this._emitLine(c + ".getExported(" + (r.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(c)), this._addScopeLevel(), u.set(p, c), u.parent ? this._emitLine('frame.set("' + p + '", ' + c + ");") : this._emitLine('context.setVariable("' + p + '", ' + c + ");");
            }, v.compileFromImport = function(r, u) {
              var p = this, c = this._compileGetTemplate(r, u, !1, !1);
              this._addScopeLevel(), this._emitLine(c + ".getExported(" + (r.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(c)), this._addScopeLevel(), r.names.children.forEach(function(h) {
                var y, g, A = p._tmpid();
                h instanceof _.Pair ? (y = h.key.value, g = h.value.value) : (y = h.value, g = y), p._emitLine("if(Object.prototype.hasOwnProperty.call(" + c + ', "' + y + '")) {'), p._emitLine("var " + A + " = " + c + "." + y + ";"), p._emitLine("} else {"), p._emitLine(`cb(new Error("cannot import '` + y + `'")); return;`), p._emitLine("}"), u.set(g, A), u.parent ? p._emitLine('frame.set("' + g + '", ' + A + ");") : p._emitLine('context.setVariable("' + g + '", ' + A + ");");
              });
            }, v.compileBlock = function(r) {
              var u = this._tmpid();
              this.inBlock || this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '), this._emit('context.getBlock("' + r.name.value + '")'), this.inBlock || this._emit(")"), this._emitLine("(env, context, frame, runtime, " + this._makeCallback(u)), this._emitLine(this.buffer + " += " + u + ";"), this._addScopeLevel();
            }, v.compileSuper = function(r, u) {
              var p = r.blockName.value, c = r.symbol.value, h = this._makeCallback(c);
              this._emitLine('context.getSuper(env, "' + p + '", b_' + p + ", frame, runtime, " + h), this._emitLine(c + " = runtime.markSafe(" + c + ");"), this._addScopeLevel(), u.set(c, c);
            }, v.compileExtends = function(r, u) {
              var p = this._tmpid(), c = this._compileGetTemplate(r, u, !0, !1);
              this._emitLine("parentTemplate = " + c), this._emitLine("for(var " + p + " in parentTemplate.blocks) {"), this._emitLine("context.addBlock(" + p + ", parentTemplate.blocks[" + p + "]);"), this._emitLine("}"), this._addScopeLevel();
            }, v.compileInclude = function(r, u) {
              this._emitLine("var tasks = [];"), this._emitLine("tasks.push("), this._emitLine("function(callback) {");
              var p = this._compileGetTemplate(r, u, !1, r.ignoreMissing);
              this._emitLine("callback(null," + p + ");});"), this._emitLine("});");
              var c = this._tmpid();
              this._emitLine("tasks.push("), this._emitLine("function(template, callback){"), this._emitLine("template.render(context.getVariables(), frame, " + this._makeCallback(c)), this._emitLine("callback(null," + c + ");});"), this._emitLine("});"), this._emitLine("tasks.push("), this._emitLine("function(result, callback){"), this._emitLine(this.buffer + " += result;"), this._emitLine("callback(null);"), this._emitLine("});"), this._emitLine("env.waterfall(tasks, function(){"), this._addScopeLevel();
            }, v.compileTemplateData = function(r, u) {
              this.compileLiteral(r, u);
            }, v.compileCapture = function(r, u) {
              var p = this, c = this.buffer;
              this.buffer = "output", this._emitLine("(function() {"), this._emitLine('var output = "";'), this._withScopedSyntax(function() {
                p.compile(r.body, u);
              }), this._emitLine("return output;"), this._emitLine("})()"), this.buffer = c;
            }, v.compileOutput = function(r, u) {
              var p = this, c = r.children;
              c.forEach(function(h) {
                h instanceof _.TemplateData ? h.value && (p._emit(p.buffer + " += "), p.compileLiteral(h, u), p._emitLine(";")) : (p._emit(p.buffer + " += runtime.suppressValue("), p.throwOnUndefined && p._emit("runtime.ensureDefined("), p.compile(h, u), p.throwOnUndefined && p._emit("," + r.lineno + "," + r.colno + ")"), p._emit(`, env.opts.autoescape);
`));
              });
            }, v.compileRoot = function(r, u) {
              var p = this;
              u && this.fail("compileRoot: root node can't have frame"), u = new R(), this._emitFuncBegin(r, "root"), this._emitLine("var parentTemplate = null;"), this._compileChildren(r, u), this._emitLine("if(parentTemplate) {"), this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"), this._emitLine("} else {"), this._emitLine("cb(null, " + this.buffer + ");"), this._emitLine("}"), this._emitFuncEnd(!0), this.inBlock = !0;
              var c = [], h = r.findAll(_.Block);
              h.forEach(function(y, g) {
                var A = y.name.value;
                if (c.indexOf(A) !== -1)
                  throw new Error('Block "' + A + '" defined more than once.');
                c.push(A), p._emitFuncBegin(y, "b_" + A);
                var I = new R();
                p._emitLine("var frame = frame.push(true);"), p.compile(y.body, I), p._emitFuncEnd();
              }), this._emitLine("return {"), h.forEach(function(y, g) {
                var A = "b_" + y.name.value;
                p._emitLine(A + ": " + A + ",");
              }), this._emitLine(`root: root
};`);
            }, v.compile = function(r, u) {
              var p = this["compile" + r.typename];
              p ? p.call(this, r, u) : this.fail("compile: Cannot compile node: " + r.typename, r.lineno, r.colno);
            }, v.getCode = function() {
              return this.codebuf.join("");
            }, b;
          }(N);
          t.exports = {
            compile: function(b, v, E, r, u) {
              u === void 0 && (u = {});
              var p = new o(r, u.throwOnUndefined), c = (E || []).map(function(y) {
                return y.preprocess;
              }).filter(function(y) {
                return !!y;
              }), h = c.reduce(function(y, g) {
                return g(y);
              }, b);
              return p.compile(O.transform(m.parse(h, E, u), v, r)), p.getCode();
            },
            Compiler: o
          };
        },
        /* 6 */
        /***/
        function(t, s, f) {
          function a(T, P) {
            T.prototype = Object.create(P.prototype), T.prototype.constructor = T, d(T, P);
          }
          function d(T, P) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(R, x) {
              return R.__proto__ = x, R;
            }, d(T, P);
          }
          var m = f(4), O = f(1), _ = O.EmitterObj;
          t.exports = /* @__PURE__ */ function(T) {
            a(P, T);
            function P() {
              return T.apply(this, arguments) || this;
            }
            var M = P.prototype;
            return M.resolve = function(x, N) {
              return m.resolve(m.dirname(x), N);
            }, M.isRelative = function(x) {
              return x.indexOf("./") === 0 || x.indexOf("../") === 0;
            }, P;
          }(_);
        },
        /* 7 */
        /***/
        function(t, s, f) {
          function a(I, C) {
            I.prototype = Object.create(C.prototype), I.prototype.constructor = I, d(I, C);
          }
          function d(I, C) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(K, L) {
              return K.__proto__ = L, K;
            }, d(I, C);
          }
          var m = f(12), O = f(15), _ = f(0), T = f(5), P = f(18), M = f(10), R = M.FileSystemLoader, x = M.WebLoader, N = M.PrecompiledLoader, n = f(20), o = f(21), l = f(1), b = l.Obj, v = l.EmitterObj, E = f(2), r = E.handleError, u = E.Frame, p = f(22);
          function c(I, C, F) {
            m(function() {
              I(C, F);
            });
          }
          var h = {
            type: "code",
            obj: {
              root: function(C, F, K, L, w) {
                try {
                  w(null, "");
                } catch (S) {
                  w(r(S, null, null));
                }
              }
            }
          }, y = /* @__PURE__ */ function(I) {
            a(C, I);
            function C() {
              return I.apply(this, arguments) || this;
            }
            var F = C.prototype;
            return F.init = function(L, w) {
              var S = this;
              w = this.opts = w || {}, this.opts.dev = !!w.dev, this.opts.autoescape = w.autoescape != null ? w.autoescape : !0, this.opts.throwOnUndefined = !!w.throwOnUndefined, this.opts.trimBlocks = !!w.trimBlocks, this.opts.lstripBlocks = !!w.lstripBlocks, this.loaders = [], L ? this.loaders = _.isArray(L) ? L : [L] : R ? this.loaders = [new R("views")] : x && (this.loaders = [new x("/views")]), typeof window < "u" && window.nunjucksPrecompiled && this.loaders.unshift(new N(window.nunjucksPrecompiled)), this._initLoaders(), this.globals = o(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], _._entries(P).forEach(function(j) {
                var D = j[0], $ = j[1];
                return S.addFilter(D, $);
              }), _._entries(n).forEach(function(j) {
                var D = j[0], $ = j[1];
                return S.addTest(D, $);
              });
            }, F._initLoaders = function() {
              var L = this;
              this.loaders.forEach(function(w) {
                w.cache = {}, typeof w.on == "function" && (w.on("update", function(S, j) {
                  w.cache[S] = null, L.emit("update", S, j, w);
                }), w.on("load", function(S, j) {
                  L.emit("load", S, j, w);
                }));
              });
            }, F.invalidateCache = function() {
              this.loaders.forEach(function(L) {
                L.cache = {};
              });
            }, F.addExtension = function(L, w) {
              return w.__name = L, this.extensions[L] = w, this.extensionsList.push(w), this;
            }, F.removeExtension = function(L) {
              var w = this.getExtension(L);
              w && (this.extensionsList = _.without(this.extensionsList, w), delete this.extensions[L]);
            }, F.getExtension = function(L) {
              return this.extensions[L];
            }, F.hasExtension = function(L) {
              return !!this.extensions[L];
            }, F.addGlobal = function(L, w) {
              return this.globals[L] = w, this;
            }, F.getGlobal = function(L) {
              if (typeof this.globals[L] > "u")
                throw new Error("global not found: " + L);
              return this.globals[L];
            }, F.addFilter = function(L, w, S) {
              var j = w;
              return S && this.asyncFilters.push(L), this.filters[L] = j, this;
            }, F.getFilter = function(L) {
              if (!this.filters[L])
                throw new Error("filter not found: " + L);
              return this.filters[L];
            }, F.addTest = function(L, w) {
              return this.tests[L] = w, this;
            }, F.getTest = function(L) {
              if (!this.tests[L])
                throw new Error("test not found: " + L);
              return this.tests[L];
            }, F.resolveTemplate = function(L, w, S) {
              var j = L.isRelative && w ? L.isRelative(S) : !1;
              return j && L.resolve ? L.resolve(w, S) : S;
            }, F.getTemplate = function(L, w, S, j, D) {
              var $ = this, ne = this, z = null;
              if (L && L.raw && (L = L.raw), _.isFunction(S) && (D = S, S = null, w = w || !1), _.isFunction(w) && (D = w, w = !1), L instanceof A)
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
              return _.asyncIter(this.loaders, function(q, G, W, se) {
                function ye(fe, Oe) {
                  fe ? se(fe) : Oe ? (Oe.loader = q, se(null, Oe)) : W();
                }
                L = ne.resolveTemplate(q, S, L), q.async ? q.getSource(L, ye) : ye(null, q.getSource(L));
              }, Z), X;
            }, F.express = function(L) {
              return p(this, L);
            }, F.render = function(L, w, S) {
              _.isFunction(w) && (S = w, w = null);
              var j = null;
              return this.getTemplate(L, function(D, $) {
                if (D && S)
                  c(S, D);
                else {
                  if (D)
                    throw D;
                  j = $.render(w, S);
                }
              }), j;
            }, F.renderString = function(L, w, S, j) {
              _.isFunction(S) && (j = S, S = {}), S = S || {};
              var D = new A(L, this, S.path);
              return D.render(w, j);
            }, F.waterfall = function(L, w, S) {
              return O(L, w, S);
            }, C;
          }(v), g = /* @__PURE__ */ function(I) {
            a(C, I);
            function C() {
              return I.apply(this, arguments) || this;
            }
            var F = C.prototype;
            return F.init = function(L, w, S) {
              var j = this;
              this.env = S || new y(), this.ctx = _.extend({}, L), this.blocks = {}, this.exported = [], _.keys(w).forEach(function(D) {
                j.addBlock(D, w[D]);
              });
            }, F.lookup = function(L) {
              return L in this.env.globals && !(L in this.ctx) ? this.env.globals[L] : this.ctx[L];
            }, F.setVariable = function(L, w) {
              this.ctx[L] = w;
            }, F.getVariables = function() {
              return this.ctx;
            }, F.addBlock = function(L, w) {
              return this.blocks[L] = this.blocks[L] || [], this.blocks[L].push(w), this;
            }, F.getBlock = function(L) {
              if (!this.blocks[L])
                throw new Error('unknown block "' + L + '"');
              return this.blocks[L][0];
            }, F.getSuper = function(L, w, S, j, D, $) {
              var ne = _.indexOf(this.blocks[w] || [], S), z = this.blocks[w][ne + 1], ue = this;
              if (ne === -1 || !z)
                throw new Error('no super block available for "' + w + '"');
              z(L, ue, j, D, $);
            }, F.addExport = function(L) {
              this.exported.push(L);
            }, F.getExported = function() {
              var L = this, w = {};
              return this.exported.forEach(function(S) {
                w[S] = L.ctx[S];
              }), w;
            }, C;
          }(b), A = /* @__PURE__ */ function(I) {
            a(C, I);
            function C() {
              return I.apply(this, arguments) || this;
            }
            var F = C.prototype;
            return F.init = function(L, w, S, j) {
              if (this.env = w || new y(), _.isObject(L))
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
              else if (_.isString(L))
                this.tmplStr = L;
              else
                throw new Error("src must be a string or an object describing the source");
              if (this.path = S, j)
                try {
                  this._compile();
                } catch (D) {
                  throw _._prettifyError(this.path, this.env.opts.dev, D);
                }
              else
                this.compiled = !1;
            }, F.render = function(L, w, S) {
              var j = this;
              typeof L == "function" ? (S = L, L = {}) : typeof w == "function" && (S = w, w = null);
              var D = !w;
              try {
                this.compile();
              } catch (X) {
                var $ = _._prettifyError(this.path, this.env.opts.dev, X);
                if (S)
                  return c(S, $);
                throw $;
              }
              var ne = new g(L || {}, this.blocks, this.env), z = w ? w.push(!0) : new u();
              z.topLevel = !0;
              var ue = null, he = !1;
              return this.rootRenderFunc(this.env, ne, z, E, function(X, Z) {
                if (!(he && S && typeof Z < "u"))
                  if (X && (X = _._prettifyError(j.path, j.env.opts.dev, X), he = !0), S)
                    D ? c(S, X, Z) : S(X, Z);
                  else {
                    if (X)
                      throw X;
                    ue = Z;
                  }
              }), ue;
            }, F.getExported = function(L, w, S) {
              typeof L == "function" && (S = L, L = {}), typeof w == "function" && (S = w, w = null);
              try {
                this.compile();
              } catch ($) {
                if (S)
                  return S($);
                throw $;
              }
              var j = w ? w.push() : new u();
              j.topLevel = !0;
              var D = new g(L || {}, this.blocks, this.env);
              this.rootRenderFunc(this.env, D, j, E, function($) {
                $ ? S($, null) : S(null, D.getExported());
              });
            }, F.compile = function() {
              this.compiled || this._compile();
            }, F._compile = function() {
              var L;
              if (this.tmplProps)
                L = this.tmplProps;
              else {
                var w = T.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), S = new Function(w);
                L = S();
              }
              this.blocks = this._getBlocks(L), this.rootRenderFunc = L.root, this.compiled = !0;
            }, F._getBlocks = function(L) {
              var w = {};
              return _.keys(L).forEach(function(S) {
                S.slice(0, 2) === "b_" && (w[S.slice(2)] = L[S]);
              }), w;
            }, C;
          }(b);
          t.exports = {
            Environment: y,
            Template: A
          };
        },
        /* 8 */
        /***/
        function(t, s, f) {
          function a(M, R) {
            M.prototype = Object.create(R.prototype), M.prototype.constructor = M, d(M, R);
          }
          function d(M, R) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(N, n) {
              return N.__proto__ = n, N;
            }, d(M, R);
          }
          var m = f(9), O = f(3), _ = f(1).Obj, T = f(0), P = /* @__PURE__ */ function(M) {
            a(R, M);
            function R() {
              return M.apply(this, arguments) || this;
            }
            var x = R.prototype;
            return x.init = function(n) {
              this.tokens = n, this.peeked = null, this.breakOnBlocks = null, this.dropLeadingWhitespace = !1, this.extensions = [];
            }, x.nextToken = function(n) {
              var o;
              if (this.peeked)
                if (!n && this.peeked.type === m.TOKEN_WHITESPACE)
                  this.peeked = null;
                else
                  return o = this.peeked, this.peeked = null, o;
              if (o = this.tokens.nextToken(), !n)
                for (; o && o.type === m.TOKEN_WHITESPACE; )
                  o = this.tokens.nextToken();
              return o;
            }, x.peekToken = function() {
              return this.peeked = this.peeked || this.nextToken(), this.peeked;
            }, x.pushToken = function(n) {
              if (this.peeked)
                throw new Error("pushToken: can only push one token on between reads");
              this.peeked = n;
            }, x.error = function(n, o, l) {
              if (o === void 0 || l === void 0) {
                var b = this.peekToken() || {};
                o = b.lineno, l = b.colno;
              }
              return o !== void 0 && (o += 1), l !== void 0 && (l += 1), new T.TemplateError(n, o, l);
            }, x.fail = function(n, o, l) {
              throw this.error(n, o, l);
            }, x.skip = function(n) {
              var o = this.nextToken();
              return !o || o.type !== n ? (this.pushToken(o), !1) : !0;
            }, x.expect = function(n) {
              var o = this.nextToken();
              return o.type !== n && this.fail("expected " + n + ", got " + o.type, o.lineno, o.colno), o;
            }, x.skipValue = function(n, o) {
              var l = this.nextToken();
              return !l || l.type !== n || l.value !== o ? (this.pushToken(l), !1) : !0;
            }, x.skipSymbol = function(n) {
              return this.skipValue(m.TOKEN_SYMBOL, n);
            }, x.advanceAfterBlockEnd = function(n) {
              var o;
              return n || (o = this.peekToken(), o || this.fail("unexpected end of file"), o.type !== m.TOKEN_SYMBOL && this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"), n = this.nextToken().value), o = this.nextToken(), o && o.type === m.TOKEN_BLOCK_END ? o.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0) : this.fail("expected block end in " + n + " statement"), o;
            }, x.advanceAfterVariableEnd = function() {
              var n = this.nextToken();
              n && n.type === m.TOKEN_VARIABLE_END ? this.dropLeadingWhitespace = n.value.charAt(n.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-" : (this.pushToken(n), this.fail("expected variable end"));
            }, x.parseFor = function() {
              var n = this.peekToken(), o, l;
              this.skipSymbol("for") ? (o = new O.For(n.lineno, n.colno), l = "endfor") : this.skipSymbol("asyncEach") ? (o = new O.AsyncEach(n.lineno, n.colno), l = "endeach") : this.skipSymbol("asyncAll") ? (o = new O.AsyncAll(n.lineno, n.colno), l = "endall") : this.fail("parseFor: expected for{Async}", n.lineno, n.colno), o.name = this.parsePrimary(), o.name instanceof O.Symbol || this.fail("parseFor: variable name expected for loop");
              var b = this.peekToken().type;
              if (b === m.TOKEN_COMMA) {
                var v = o.name;
                for (o.name = new O.Array(v.lineno, v.colno), o.name.addChild(v); this.skip(m.TOKEN_COMMA); ) {
                  var E = this.parsePrimary();
                  o.name.addChild(E);
                }
              }
              return this.skipSymbol("in") || this.fail('parseFor: expected "in" keyword for loop', n.lineno, n.colno), o.arr = this.parseExpression(), this.advanceAfterBlockEnd(n.value), o.body = this.parseUntilBlocks(l, "else"), this.skipSymbol("else") && (this.advanceAfterBlockEnd("else"), o.else_ = this.parseUntilBlocks(l)), this.advanceAfterBlockEnd(), o;
            }, x.parseMacro = function() {
              var n = this.peekToken();
              this.skipSymbol("macro") || this.fail("expected macro");
              var o = this.parsePrimary(!0), l = this.parseSignature(), b = new O.Macro(n.lineno, n.colno, o, l);
              return this.advanceAfterBlockEnd(n.value), b.body = this.parseUntilBlocks("endmacro"), this.advanceAfterBlockEnd(), b;
            }, x.parseCall = function() {
              var n = this.peekToken();
              this.skipSymbol("call") || this.fail("expected call");
              var o = this.parseSignature(!0) || new O.NodeList(), l = this.parsePrimary();
              this.advanceAfterBlockEnd(n.value);
              var b = this.parseUntilBlocks("endcall");
              this.advanceAfterBlockEnd();
              var v = new O.Symbol(n.lineno, n.colno, "caller"), E = new O.Caller(n.lineno, n.colno, v, o, b), r = l.args.children;
              r[r.length - 1] instanceof O.KeywordArgs || r.push(new O.KeywordArgs());
              var u = r[r.length - 1];
              return u.addChild(new O.Pair(n.lineno, n.colno, v, E)), new O.Output(n.lineno, n.colno, [l]);
            }, x.parseWithContext = function() {
              var n = this.peekToken(), o = null;
              return this.skipSymbol("with") ? o = !0 : this.skipSymbol("without") && (o = !1), o !== null && (this.skipSymbol("context") || this.fail("parseFrom: expected context after with/without", n.lineno, n.colno)), o;
            }, x.parseImport = function() {
              var n = this.peekToken();
              this.skipSymbol("import") || this.fail("parseImport: expected import", n.lineno, n.colno);
              var o = this.parseExpression();
              this.skipSymbol("as") || this.fail('parseImport: expected "as" keyword', n.lineno, n.colno);
              var l = this.parseExpression(), b = this.parseWithContext(), v = new O.Import(n.lineno, n.colno, o, l, b);
              return this.advanceAfterBlockEnd(n.value), v;
            }, x.parseFrom = function() {
              var n = this.peekToken();
              this.skipSymbol("from") || this.fail("parseFrom: expected from");
              var o = this.parseExpression();
              this.skipSymbol("import") || this.fail("parseFrom: expected import", n.lineno, n.colno);
              for (var l = new O.NodeList(), b; ; ) {
                var v = this.peekToken();
                if (v.type === m.TOKEN_BLOCK_END) {
                  l.children.length || this.fail("parseFrom: Expected at least one import name", n.lineno, n.colno), v.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0), this.nextToken();
                  break;
                }
                l.children.length > 0 && !this.skip(m.TOKEN_COMMA) && this.fail("parseFrom: expected comma", n.lineno, n.colno);
                var E = this.parsePrimary();
                if (E.value.charAt(0) === "_" && this.fail("parseFrom: names starting with an underscore cannot be imported", E.lineno, E.colno), this.skipSymbol("as")) {
                  var r = this.parsePrimary();
                  l.addChild(new O.Pair(E.lineno, E.colno, E, r));
                } else
                  l.addChild(E);
                b = this.parseWithContext();
              }
              return new O.FromImport(n.lineno, n.colno, o, l, b);
            }, x.parseBlock = function() {
              var n = this.peekToken();
              this.skipSymbol("block") || this.fail("parseBlock: expected block", n.lineno, n.colno);
              var o = new O.Block(n.lineno, n.colno);
              o.name = this.parsePrimary(), o.name instanceof O.Symbol || this.fail("parseBlock: variable name expected", n.lineno, n.colno), this.advanceAfterBlockEnd(n.value), o.body = this.parseUntilBlocks("endblock"), this.skipSymbol("endblock"), this.skipSymbol(o.name.value);
              var l = this.peekToken();
              return l || this.fail("parseBlock: expected endblock, got end of file"), this.advanceAfterBlockEnd(l.value), o;
            }, x.parseExtends = function() {
              var n = "extends", o = this.peekToken();
              this.skipSymbol(n) || this.fail("parseTemplateRef: expected " + n);
              var l = new O.Extends(o.lineno, o.colno);
              return l.template = this.parseExpression(), this.advanceAfterBlockEnd(o.value), l;
            }, x.parseInclude = function() {
              var n = "include", o = this.peekToken();
              this.skipSymbol(n) || this.fail("parseInclude: expected " + n);
              var l = new O.Include(o.lineno, o.colno);
              return l.template = this.parseExpression(), this.skipSymbol("ignore") && this.skipSymbol("missing") && (l.ignoreMissing = !0), this.advanceAfterBlockEnd(o.value), l;
            }, x.parseIf = function() {
              var n = this.peekToken(), o;
              this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif") ? o = new O.If(n.lineno, n.colno) : this.skipSymbol("ifAsync") ? o = new O.IfAsync(n.lineno, n.colno) : this.fail("parseIf: expected if, elif, or elseif", n.lineno, n.colno), o.cond = this.parseExpression(), this.advanceAfterBlockEnd(n.value), o.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
              var l = this.peekToken();
              switch (l && l.value) {
                case "elseif":
                case "elif":
                  o.else_ = this.parseIf();
                  break;
                case "else":
                  this.advanceAfterBlockEnd(), o.else_ = this.parseUntilBlocks("endif"), this.advanceAfterBlockEnd();
                  break;
                case "endif":
                  o.else_ = null, this.advanceAfterBlockEnd();
                  break;
                default:
                  this.fail("parseIf: expected elif, else, or endif, got end of file");
              }
              return o;
            }, x.parseSet = function() {
              var n = this.peekToken();
              this.skipSymbol("set") || this.fail("parseSet: expected set", n.lineno, n.colno);
              for (var o = new O.Set(n.lineno, n.colno, []), l; (l = this.parsePrimary()) && (o.targets.push(l), !!this.skip(m.TOKEN_COMMA)); )
                ;
              return this.skipValue(m.TOKEN_OPERATOR, "=") ? (o.value = this.parseExpression(), this.advanceAfterBlockEnd(n.value)) : this.skip(m.TOKEN_BLOCK_END) ? (o.body = new O.Capture(n.lineno, n.colno, this.parseUntilBlocks("endset")), o.value = null, this.advanceAfterBlockEnd()) : this.fail("parseSet: expected = or block end in set tag", n.lineno, n.colno), o;
            }, x.parseSwitch = function() {
              var n = "switch", o = "endswitch", l = "case", b = "default", v = this.peekToken();
              !this.skipSymbol(n) && !this.skipSymbol(l) && !this.skipSymbol(b) && this.fail('parseSwitch: expected "switch," "case" or "default"', v.lineno, v.colno);
              var E = this.parseExpression();
              this.advanceAfterBlockEnd(n), this.parseUntilBlocks(l, b, o);
              var r = this.peekToken(), u = [], p;
              do {
                this.skipSymbol(l);
                var c = this.parseExpression();
                this.advanceAfterBlockEnd(n);
                var h = this.parseUntilBlocks(l, b, o);
                u.push(new O.Case(r.line, r.col, c, h)), r = this.peekToken();
              } while (r && r.value === l);
              switch (r.value) {
                case b:
                  this.advanceAfterBlockEnd(), p = this.parseUntilBlocks(o), this.advanceAfterBlockEnd();
                  break;
                case o:
                  this.advanceAfterBlockEnd();
                  break;
                default:
                  this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.');
              }
              return new O.Switch(v.lineno, v.colno, E, u, p);
            }, x.parseStatement = function() {
              var n = this.peekToken(), o;
              if (n.type !== m.TOKEN_SYMBOL && this.fail("tag name expected", n.lineno, n.colno), this.breakOnBlocks && T.indexOf(this.breakOnBlocks, n.value) !== -1)
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
                      if (T.indexOf(b.tags || [], n.value) !== -1)
                        return b.parse(this, O, m);
                    }
                  this.fail("unknown block tag: " + n.value, n.lineno, n.colno);
              }
              return o;
            }, x.parseRaw = function(n) {
              n = n || "raw";
              for (var o = "end" + n, l = new RegExp("([\\s\\S]*?){%\\s*(" + n + "|" + o + ")\\s*(?=%})%}"), b = 1, v = "", E = null, r = this.advanceAfterBlockEnd(); (E = this.tokens._extractRegex(l)) && b > 0; ) {
                var u = E[0], p = E[1], c = E[2];
                c === n ? b += 1 : c === o && (b -= 1), b === 0 ? (v += p, this.tokens.backN(u.length - p.length)) : v += u;
              }
              return new O.Output(r.lineno, r.colno, [new O.TemplateData(r.lineno, r.colno, v)]);
            }, x.parsePostfix = function(n) {
              for (var o, l = this.peekToken(); l; ) {
                if (l.type === m.TOKEN_LEFT_PAREN)
                  n = new O.FunCall(l.lineno, l.colno, n, this.parseSignature());
                else if (l.type === m.TOKEN_LEFT_BRACKET)
                  o = this.parseAggregate(), o.children.length > 1 && this.fail("invalid index"), n = new O.LookupVal(l.lineno, l.colno, n, o.children[0]);
                else if (l.type === m.TOKEN_OPERATOR && l.value === ".") {
                  this.nextToken();
                  var b = this.nextToken();
                  b.type !== m.TOKEN_SYMBOL && this.fail("expected name as lookup value, got " + b.value, b.lineno, b.colno), o = new O.Literal(b.lineno, b.colno, b.value), n = new O.LookupVal(l.lineno, l.colno, n, o);
                } else
                  break;
                l = this.peekToken();
              }
              return n;
            }, x.parseExpression = function() {
              var n = this.parseInlineIf();
              return n;
            }, x.parseInlineIf = function() {
              var n = this.parseOr();
              if (this.skipSymbol("if")) {
                var o = this.parseOr(), l = n;
                n = new O.InlineIf(n.lineno, n.colno), n.body = l, n.cond = o, this.skipSymbol("else") ? n.else_ = this.parseOr() : n.else_ = null;
              }
              return n;
            }, x.parseOr = function() {
              for (var n = this.parseAnd(); this.skipSymbol("or"); ) {
                var o = this.parseAnd();
                n = new O.Or(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseAnd = function() {
              for (var n = this.parseNot(); this.skipSymbol("and"); ) {
                var o = this.parseNot();
                n = new O.And(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseNot = function() {
              var n = this.peekToken();
              return this.skipSymbol("not") ? new O.Not(n.lineno, n.colno, this.parseNot()) : this.parseIn();
            }, x.parseIn = function() {
              for (var n = this.parseIs(); ; ) {
                var o = this.nextToken();
                if (!o)
                  break;
                var l = o.type === m.TOKEN_SYMBOL && o.value === "not";
                if (l || this.pushToken(o), this.skipSymbol("in")) {
                  var b = this.parseIs();
                  n = new O.In(n.lineno, n.colno, n, b), l && (n = new O.Not(n.lineno, n.colno, n));
                } else {
                  l && this.pushToken(o);
                  break;
                }
              }
              return n;
            }, x.parseIs = function() {
              var n = this.parseCompare();
              if (this.skipSymbol("is")) {
                var o = this.skipSymbol("not"), l = this.parseCompare();
                n = new O.Is(n.lineno, n.colno, n, l), o && (n = new O.Not(n.lineno, n.colno, n));
              }
              return n;
            }, x.parseCompare = function() {
              for (var n = ["==", "===", "!=", "!==", "<", ">", "<=", ">="], o = this.parseConcat(), l = []; ; ) {
                var b = this.nextToken();
                if (b)
                  if (n.indexOf(b.value) !== -1)
                    l.push(new O.CompareOperand(b.lineno, b.colno, this.parseConcat(), b.value));
                  else {
                    this.pushToken(b);
                    break;
                  }
                else
                  break;
              }
              return l.length ? new O.Compare(l[0].lineno, l[0].colno, o, l) : o;
            }, x.parseConcat = function() {
              for (var n = this.parseAdd(); this.skipValue(m.TOKEN_TILDE, "~"); ) {
                var o = this.parseAdd();
                n = new O.Concat(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseAdd = function() {
              for (var n = this.parseSub(); this.skipValue(m.TOKEN_OPERATOR, "+"); ) {
                var o = this.parseSub();
                n = new O.Add(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseSub = function() {
              for (var n = this.parseMul(); this.skipValue(m.TOKEN_OPERATOR, "-"); ) {
                var o = this.parseMul();
                n = new O.Sub(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseMul = function() {
              for (var n = this.parseDiv(); this.skipValue(m.TOKEN_OPERATOR, "*"); ) {
                var o = this.parseDiv();
                n = new O.Mul(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseDiv = function() {
              for (var n = this.parseFloorDiv(); this.skipValue(m.TOKEN_OPERATOR, "/"); ) {
                var o = this.parseFloorDiv();
                n = new O.Div(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseFloorDiv = function() {
              for (var n = this.parseMod(); this.skipValue(m.TOKEN_OPERATOR, "//"); ) {
                var o = this.parseMod();
                n = new O.FloorDiv(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseMod = function() {
              for (var n = this.parsePow(); this.skipValue(m.TOKEN_OPERATOR, "%"); ) {
                var o = this.parsePow();
                n = new O.Mod(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parsePow = function() {
              for (var n = this.parseUnary(); this.skipValue(m.TOKEN_OPERATOR, "**"); ) {
                var o = this.parseUnary();
                n = new O.Pow(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseUnary = function(n) {
              var o = this.peekToken(), l;
              return this.skipValue(m.TOKEN_OPERATOR, "-") ? l = new O.Neg(o.lineno, o.colno, this.parseUnary(!0)) : this.skipValue(m.TOKEN_OPERATOR, "+") ? l = new O.Pos(o.lineno, o.colno, this.parseUnary(!0)) : l = this.parsePrimary(), n || (l = this.parseFilter(l)), l;
            }, x.parsePrimary = function(n) {
              var o = this.nextToken(), l, b = null;
              if (o ? o.type === m.TOKEN_STRING ? l = o.value : o.type === m.TOKEN_INT ? l = parseInt(o.value, 10) : o.type === m.TOKEN_FLOAT ? l = parseFloat(o.value) : o.type === m.TOKEN_BOOLEAN ? o.value === "true" ? l = !0 : o.value === "false" ? l = !1 : this.fail("invalid boolean: " + o.value, o.lineno, o.colno) : o.type === m.TOKEN_NONE ? l = null : o.type === m.TOKEN_REGEX && (l = new RegExp(o.value.body, o.value.flags)) : this.fail("expected expression, got end of file"), l !== void 0 ? b = new O.Literal(o.lineno, o.colno, l) : o.type === m.TOKEN_SYMBOL ? b = new O.Symbol(o.lineno, o.colno, o.value) : (this.pushToken(o), b = this.parseAggregate()), n || (b = this.parsePostfix(b)), b)
                return b;
              throw this.error("unexpected token: " + o.value, o.lineno, o.colno);
            }, x.parseFilterName = function() {
              for (var n = this.expect(m.TOKEN_SYMBOL), o = n.value; this.skipValue(m.TOKEN_OPERATOR, "."); )
                o += "." + this.expect(m.TOKEN_SYMBOL).value;
              return new O.Symbol(n.lineno, n.colno, o);
            }, x.parseFilterArgs = function(n) {
              if (this.peekToken().type === m.TOKEN_LEFT_PAREN) {
                var o = this.parsePostfix(n);
                return o.args.children;
              }
              return [];
            }, x.parseFilter = function(n) {
              for (; this.skip(m.TOKEN_PIPE); ) {
                var o = this.parseFilterName();
                n = new O.Filter(o.lineno, o.colno, o, new O.NodeList(o.lineno, o.colno, [n].concat(this.parseFilterArgs(n))));
              }
              return n;
            }, x.parseFilterStatement = function() {
              var n = this.peekToken();
              this.skipSymbol("filter") || this.fail("parseFilterStatement: expected filter");
              var o = this.parseFilterName(), l = this.parseFilterArgs(o);
              this.advanceAfterBlockEnd(n.value);
              var b = new O.Capture(o.lineno, o.colno, this.parseUntilBlocks("endfilter"));
              this.advanceAfterBlockEnd();
              var v = new O.Filter(o.lineno, o.colno, o, new O.NodeList(o.lineno, o.colno, [b].concat(l)));
              return new O.Output(o.lineno, o.colno, [v]);
            }, x.parseAggregate = function() {
              var n = this.nextToken(), o;
              switch (n.type) {
                case m.TOKEN_LEFT_PAREN:
                  o = new O.Group(n.lineno, n.colno);
                  break;
                case m.TOKEN_LEFT_BRACKET:
                  o = new O.Array(n.lineno, n.colno);
                  break;
                case m.TOKEN_LEFT_CURLY:
                  o = new O.Dict(n.lineno, n.colno);
                  break;
                default:
                  return null;
              }
              for (; ; ) {
                var l = this.peekToken().type;
                if (l === m.TOKEN_RIGHT_PAREN || l === m.TOKEN_RIGHT_BRACKET || l === m.TOKEN_RIGHT_CURLY) {
                  this.nextToken();
                  break;
                }
                if (o.children.length > 0 && (this.skip(m.TOKEN_COMMA) || this.fail("parseAggregate: expected comma after expression", n.lineno, n.colno)), o instanceof O.Dict) {
                  var b = this.parsePrimary();
                  this.skip(m.TOKEN_COLON) || this.fail("parseAggregate: expected colon after dict key", n.lineno, n.colno);
                  var v = this.parseExpression();
                  o.addChild(new O.Pair(b.lineno, b.colno, b, v));
                } else {
                  var E = this.parseExpression();
                  o.addChild(E);
                }
              }
              return o;
            }, x.parseSignature = function(n, o) {
              var l = this.peekToken();
              if (!o && l.type !== m.TOKEN_LEFT_PAREN) {
                if (n)
                  return null;
                this.fail("expected arguments", l.lineno, l.colno);
              }
              l.type === m.TOKEN_LEFT_PAREN && (l = this.nextToken());
              for (var b = new O.NodeList(l.lineno, l.colno), v = new O.KeywordArgs(l.lineno, l.colno), E = !1; ; ) {
                if (l = this.peekToken(), !o && l.type === m.TOKEN_RIGHT_PAREN) {
                  this.nextToken();
                  break;
                } else if (o && l.type === m.TOKEN_BLOCK_END)
                  break;
                if (E && !this.skip(m.TOKEN_COMMA))
                  this.fail("parseSignature: expected comma after expression", l.lineno, l.colno);
                else {
                  var r = this.parseExpression();
                  this.skipValue(m.TOKEN_OPERATOR, "=") ? v.addChild(new O.Pair(r.lineno, r.colno, r, this.parseExpression())) : b.addChild(r);
                }
                E = !0;
              }
              return v.children.length && b.addChild(v), b;
            }, x.parseUntilBlocks = function() {
              for (var n = this.breakOnBlocks, o = arguments.length, l = new Array(o), b = 0; b < o; b++)
                l[b] = arguments[b];
              this.breakOnBlocks = l;
              var v = this.parse();
              return this.breakOnBlocks = n, v;
            }, x.parseNodes = function() {
              for (var n, o = []; n = this.nextToken(); )
                if (n.type === m.TOKEN_DATA) {
                  var l = n.value, b = this.peekToken(), v = b && b.value;
                  this.dropLeadingWhitespace && (l = l.replace(/^\s*/, ""), this.dropLeadingWhitespace = !1), b && (b.type === m.TOKEN_BLOCK_START && v.charAt(v.length - 1) === "-" || b.type === m.TOKEN_VARIABLE_START && v.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || b.type === m.TOKEN_COMMENT && v.charAt(this.tokens.tags.COMMENT_START.length) === "-") && (l = l.replace(/\s*$/, "")), o.push(new O.Output(n.lineno, n.colno, [new O.TemplateData(n.lineno, n.colno, l)]));
                } else if (n.type === m.TOKEN_BLOCK_START) {
                  this.dropLeadingWhitespace = !1;
                  var E = this.parseStatement();
                  if (!E)
                    break;
                  o.push(E);
                } else if (n.type === m.TOKEN_VARIABLE_START) {
                  var r = this.parseExpression();
                  this.dropLeadingWhitespace = !1, this.advanceAfterVariableEnd(), o.push(new O.Output(n.lineno, n.colno, [r]));
                } else
                  n.type === m.TOKEN_COMMENT ? this.dropLeadingWhitespace = n.value.charAt(n.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-" : this.fail("Unexpected token at top-level: " + n.type, n.lineno, n.colno);
              return o;
            }, x.parse = function() {
              return new O.NodeList(0, 0, this.parseNodes());
            }, x.parseAsRoot = function() {
              return new O.Root(0, 0, this.parseNodes());
            }, R;
          }(_);
          t.exports = {
            parse: function(R, x, N) {
              var n = new P(m.lex(R, N));
              return x !== void 0 && (n.extensions = x), n.parseAsRoot();
            },
            Parser: P
          };
        },
        /* 9 */
        /***/
        function(t, s, f) {
          var a = f(0), d = ` 
	\r `, m = "()[]{}%*-+~/#,:|.<>=!", O = "0123456789", _ = "{%", T = "%}", P = "{{", M = "}}", R = "{#", x = "#}", N = "string", n = "whitespace", o = "data", l = "block-start", b = "block-end", v = "variable-start", E = "variable-end", r = "comment", u = "left-paren", p = "right-paren", c = "left-bracket", h = "right-bracket", y = "left-curly", g = "right-curly", A = "operator", I = "comma", C = "colon", F = "tilde", K = "pipe", L = "int", w = "float", S = "boolean", j = "none", D = "symbol", $ = "special", ne = "regex";
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
                BLOCK_START: G.blockStart || _,
                BLOCK_END: G.blockEnd || T,
                VARIABLE_START: G.variableStart || P,
                VARIABLE_END: G.variableEnd || M,
                COMMENT_START: G.commentStart || R,
                COMMENT_END: G.commentEnd || x
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
                if (W = this._extract(d))
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
                  for (var fe = ["g", "i", "m", "y"], Oe = ""; !this.isFinished(); ) {
                    var k = fe.indexOf(this.current()) !== -1;
                    if (k)
                      Oe += this.current(), this.forward();
                    else
                      break;
                  }
                  return z(ne, {
                    body: ye,
                    flags: Oe
                  }, q, G);
                } else if (m.indexOf(se) !== -1) {
                  this.forward();
                  var B = ["==", "===", "!=", "!==", "<=", ">=", "//", "**"], V = se + this.current(), U;
                  switch (a.indexOf(B, V) !== -1 && (this.forward(), se = V, a.indexOf(B, V + this.current()) !== -1 && (se = V + this.current(), this.forward())), se) {
                    case "(":
                      U = u;
                      break;
                    case ")":
                      U = p;
                      break;
                    case "[":
                      U = c;
                      break;
                    case "]":
                      U = h;
                      break;
                    case "{":
                      U = y;
                      break;
                    case "}":
                      U = g;
                      break;
                    case ",":
                      U = I;
                      break;
                    case ":":
                      U = C;
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
                  return z(U, se, q, G);
                } else if (W = this._extractUntil(d + m), W.match(/^[-+]?[0-9]+$/))
                  if (this.current() === ".") {
                    this.forward();
                    var Q = this._extract(O);
                    return z(w, W + "." + Q, q, G);
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
                  return this.in_code = !0, z(v, W, q, G);
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
                return z(ee ? r : o, W, q, G);
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
            TOKEN_DATA: o,
            TOKEN_BLOCK_START: l,
            TOKEN_BLOCK_END: b,
            TOKEN_VARIABLE_START: v,
            TOKEN_VARIABLE_END: E,
            TOKEN_COMMENT: r,
            TOKEN_LEFT_PAREN: u,
            TOKEN_RIGHT_PAREN: p,
            TOKEN_LEFT_BRACKET: c,
            TOKEN_RIGHT_BRACKET: h,
            TOKEN_LEFT_CURLY: y,
            TOKEN_RIGHT_CURLY: g,
            TOKEN_OPERATOR: A,
            TOKEN_COMMA: I,
            TOKEN_COLON: C,
            TOKEN_TILDE: F,
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
        function(t, s, f) {
          function a(P, M) {
            P.prototype = Object.create(M.prototype), P.prototype.constructor = P, d(P, M);
          }
          function d(P, M) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(x, N) {
              return x.__proto__ = N, x;
            }, d(P, M);
          }
          var m = f(6), O = f(19), _ = O.PrecompiledLoader, T = /* @__PURE__ */ function(P) {
            a(M, P);
            function M(x, N) {
              var n;
              return n = P.call(this) || this, n.baseURL = x || ".", N = N || {}, n.useCache = !!N.useCache, n.async = !!N.async, n;
            }
            var R = M.prototype;
            return R.resolve = function(N, n) {
              throw new Error("relative templates not support in the browser yet");
            }, R.getSource = function(N, n) {
              var o = this, l = this.useCache, b;
              return this.fetch(this.baseURL + "/" + N, function(v, E) {
                if (v)
                  if (n)
                    n(v.content);
                  else if (v.status === 404)
                    b = null;
                  else
                    throw v.content;
                else
                  b = {
                    src: E,
                    path: N,
                    noCache: !l
                  }, o.emit("load", N, b), n && n(null, b);
              }), b;
            }, R.fetch = function(N, n) {
              if (typeof window > "u")
                throw new Error("WebLoader can only by used in a browser");
              var o = new XMLHttpRequest(), l = !0;
              o.onreadystatechange = function() {
                o.readyState === 4 && l && (l = !1, o.status === 0 || o.status === 200 ? n(null, o.responseText) : n({
                  status: o.status,
                  content: o.responseText
                }));
              }, N += (N.indexOf("?") === -1 ? "?" : "&") + "s=" + new Date().getTime(), o.open("GET", N, this.async), o.send();
            }, M;
          }(m);
          t.exports = {
            WebLoader: T,
            PrecompiledLoader: _
          };
        },
        /* 11 */
        /***/
        function(t, s, f) {
          var a = f(0), d = f(7), m = d.Environment, O = d.Template, _ = f(6), T = f(10), P = f(23), M = f(5), R = f(8), x = f(9), N = f(2), n = f(3), o = f(25), l;
          function b(v, E) {
            E = E || {}, a.isObject(v) && (E = v, v = null);
            var r;
            return T.FileSystemLoader ? r = new T.FileSystemLoader(v, {
              watch: E.watch,
              noCache: E.noCache
            }) : T.WebLoader && (r = new T.WebLoader(v, {
              useCache: E.web && E.web.useCache,
              async: E.web && E.web.async
            })), l = new m(r, E), E && E.express && l.express(E.express), l;
          }
          t.exports = {
            Environment: m,
            Template: O,
            Loader: _,
            FileSystemLoader: T.FileSystemLoader,
            NodeResolveLoader: T.NodeResolveLoader,
            PrecompiledLoader: T.PrecompiledLoader,
            WebLoader: T.WebLoader,
            compiler: M,
            parser: R,
            lexer: x,
            runtime: N,
            lib: a,
            nodes: n,
            installJinjaCompat: o,
            configure: b,
            reset: function() {
              l = void 0;
            },
            compile: function(E, r, u, p) {
              return l || b(), new O(E, r, u, p);
            },
            render: function(E, r, u) {
              return l || b(), l.render(E, r, u);
            },
            renderString: function(E, r, u) {
              return l || b(), l.renderString(E, r, u);
            },
            precompile: P ? P.precompile : void 0,
            precompileString: P ? P.precompileString : void 0
          };
        },
        /* 12 */
        /***/
        function(t, s, f) {
          var a = f(13), d = [], m = [], O = a.makeRequestCallFromTimer(_);
          function _() {
            if (m.length)
              throw m.shift();
          }
          t.exports = T;
          function T(M) {
            var R;
            d.length ? R = d.pop() : R = new P(), R.task = M, a(R);
          }
          function P() {
            this.task = null;
          }
          P.prototype.call = function() {
            try {
              this.task.call();
            } catch (M) {
              T.onerror ? T.onerror(M) : (m.push(M), O());
            } finally {
              this.task = null, d[d.length] = this;
            }
          };
        },
        /* 13 */
        /***/
        function(t, s, f) {
          (function(a) {
            t.exports = d;
            function d(n) {
              m.length || O(), m[m.length] = n;
            }
            var m = [], O, _ = 0, T = 1024;
            function P() {
              for (; _ < m.length; ) {
                var n = _;
                if (_ = _ + 1, m[n].call(), _ > T) {
                  for (var o = 0, l = m.length - _; o < l; o++)
                    m[o] = m[o + _];
                  m.length -= _, _ = 0;
                }
              }
              m.length = 0, _ = 0;
            }
            var M = typeof a < "u" ? a : self, R = M.MutationObserver || M.WebKitMutationObserver;
            typeof R == "function" ? O = x(P) : O = N(P), d.requestFlush = O;
            function x(n) {
              var o = 1, l = new R(n), b = document.createTextNode("");
              return l.observe(b, { characterData: !0 }), function() {
                o = -o, b.data = o;
              };
            }
            function N(n) {
              return function() {
                var l = setTimeout(v, 0), b = setInterval(v, 50);
                function v() {
                  clearTimeout(l), clearInterval(b), n();
                }
              };
            }
            d.makeRequestCallFromTimer = N;
          }).call(s, f(14));
        },
        /* 14 */
        /***/
        function(t, s) {
          var f;
          f = function() {
            return this;
          }();
          try {
            f = f || Function("return this")() || (0, eval)("this");
          } catch {
            typeof window == "object" && (f = window);
          }
          t.exports = f;
        },
        /* 15 */
        /***/
        function(t, s, f) {
          var a, d;
          (function(m) {
            var O = function() {
              var R = Array.prototype.slice.call(arguments);
              typeof R[0] == "function" && R[0].apply(null, R.splice(1));
            }, _ = function(R) {
              typeof setImmediate == "function" ? setImmediate(R) : typeof process < "u" && process.nextTick ? process.nextTick(R) : setTimeout(R, 0);
            }, T = function(R) {
              var x = function(N) {
                var n = function() {
                  return R.length && R[N].apply(null, arguments), n.next();
                };
                return n.next = function() {
                  return N < R.length - 1 ? x(N + 1) : null;
                }, n;
              };
              return x(0);
            }, P = Array.isArray || function(R) {
              return Object.prototype.toString.call(R) === "[object Array]";
            }, M = function(R, x, N) {
              var n = N ? _ : O;
              if (x = x || function() {
              }, !P(R)) {
                var o = new Error("First argument to waterfall must be an array of functions");
                return x(o);
              }
              if (!R.length)
                return x();
              var l = function(b) {
                return function(v) {
                  if (v)
                    x.apply(null, arguments), x = function() {
                    };
                  else {
                    var E = Array.prototype.slice.call(arguments, 1), r = b.next();
                    r ? E.push(l(r)) : E.push(x), n(function() {
                      b.apply(null, E);
                    });
                  }
                };
              };
              l(T(R))();
            };
            a = [], d = function() {
              return M;
            }.apply(s, a), d !== void 0 && (t.exports = d);
          })();
        },
        /* 16 */
        /***/
        function(t, s, f) {
          var a = typeof Reflect == "object" ? Reflect : null, d = a && typeof a.apply == "function" ? a.apply : function(h, y, g) {
            return Function.prototype.apply.call(h, y, g);
          }, m;
          a && typeof a.ownKeys == "function" ? m = a.ownKeys : Object.getOwnPropertySymbols ? m = function(h) {
            return Object.getOwnPropertyNames(h).concat(Object.getOwnPropertySymbols(h));
          } : m = function(h) {
            return Object.getOwnPropertyNames(h);
          };
          function O(c) {
            console && console.warn && console.warn(c);
          }
          var _ = Number.isNaN || function(h) {
            return h !== h;
          };
          function T() {
            T.init.call(this);
          }
          t.exports = T, t.exports.once = r, T.EventEmitter = T, T.prototype._events = void 0, T.prototype._eventsCount = 0, T.prototype._maxListeners = void 0;
          var P = 10;
          function M(c) {
            if (typeof c != "function")
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof c);
          }
          Object.defineProperty(T, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
              return P;
            },
            set: function(c) {
              if (typeof c != "number" || c < 0 || _(c))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + c + ".");
              P = c;
            }
          }), T.init = function() {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, T.prototype.setMaxListeners = function(h) {
            if (typeof h != "number" || h < 0 || _(h))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + h + ".");
            return this._maxListeners = h, this;
          };
          function R(c) {
            return c._maxListeners === void 0 ? T.defaultMaxListeners : c._maxListeners;
          }
          T.prototype.getMaxListeners = function() {
            return R(this);
          }, T.prototype.emit = function(h) {
            for (var y = [], g = 1; g < arguments.length; g++)
              y.push(arguments[g]);
            var A = h === "error", I = this._events;
            if (I !== void 0)
              A = A && I.error === void 0;
            else if (!A)
              return !1;
            if (A) {
              var C;
              if (y.length > 0 && (C = y[0]), C instanceof Error)
                throw C;
              var F = new Error("Unhandled error." + (C ? " (" + C.message + ")" : ""));
              throw F.context = C, F;
            }
            var K = I[h];
            if (K === void 0)
              return !1;
            if (typeof K == "function")
              d(K, this, y);
            else
              for (var L = K.length, w = b(K, L), g = 0; g < L; ++g)
                d(w[g], this, y);
            return !0;
          };
          function x(c, h, y, g) {
            var A, I, C;
            if (M(y), I = c._events, I === void 0 ? (I = c._events = /* @__PURE__ */ Object.create(null), c._eventsCount = 0) : (I.newListener !== void 0 && (c.emit(
              "newListener",
              h,
              y.listener ? y.listener : y
            ), I = c._events), C = I[h]), C === void 0)
              C = I[h] = y, ++c._eventsCount;
            else if (typeof C == "function" ? C = I[h] = g ? [y, C] : [C, y] : g ? C.unshift(y) : C.push(y), A = R(c), A > 0 && C.length > A && !C.warned) {
              C.warned = !0;
              var F = new Error("Possible EventEmitter memory leak detected. " + C.length + " " + String(h) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              F.name = "MaxListenersExceededWarning", F.emitter = c, F.type = h, F.count = C.length, O(F);
            }
            return c;
          }
          T.prototype.addListener = function(h, y) {
            return x(this, h, y, !1);
          }, T.prototype.on = T.prototype.addListener, T.prototype.prependListener = function(h, y) {
            return x(this, h, y, !0);
          };
          function N() {
            if (!this.fired)
              return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function n(c, h, y) {
            var g = { fired: !1, wrapFn: void 0, target: c, type: h, listener: y }, A = N.bind(g);
            return A.listener = y, g.wrapFn = A, A;
          }
          T.prototype.once = function(h, y) {
            return M(y), this.on(h, n(this, h, y)), this;
          }, T.prototype.prependOnceListener = function(h, y) {
            return M(y), this.prependListener(h, n(this, h, y)), this;
          }, T.prototype.removeListener = function(h, y) {
            var g, A, I, C, F;
            if (M(y), A = this._events, A === void 0)
              return this;
            if (g = A[h], g === void 0)
              return this;
            if (g === y || g.listener === y)
              --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete A[h], A.removeListener && this.emit("removeListener", h, g.listener || y));
            else if (typeof g != "function") {
              for (I = -1, C = g.length - 1; C >= 0; C--)
                if (g[C] === y || g[C].listener === y) {
                  F = g[C].listener, I = C;
                  break;
                }
              if (I < 0)
                return this;
              I === 0 ? g.shift() : v(g, I), g.length === 1 && (A[h] = g[0]), A.removeListener !== void 0 && this.emit("removeListener", h, F || y);
            }
            return this;
          }, T.prototype.off = T.prototype.removeListener, T.prototype.removeAllListeners = function(h) {
            var y, g, A;
            if (g = this._events, g === void 0)
              return this;
            if (g.removeListener === void 0)
              return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : g[h] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete g[h]), this;
            if (arguments.length === 0) {
              var I = Object.keys(g), C;
              for (A = 0; A < I.length; ++A)
                C = I[A], C !== "removeListener" && this.removeAllListeners(C);
              return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
            }
            if (y = g[h], typeof y == "function")
              this.removeListener(h, y);
            else if (y !== void 0)
              for (A = y.length - 1; A >= 0; A--)
                this.removeListener(h, y[A]);
            return this;
          };
          function o(c, h, y) {
            var g = c._events;
            if (g === void 0)
              return [];
            var A = g[h];
            return A === void 0 ? [] : typeof A == "function" ? y ? [A.listener || A] : [A] : y ? E(A) : b(A, A.length);
          }
          T.prototype.listeners = function(h) {
            return o(this, h, !0);
          }, T.prototype.rawListeners = function(h) {
            return o(this, h, !1);
          }, T.listenerCount = function(c, h) {
            return typeof c.listenerCount == "function" ? c.listenerCount(h) : l.call(c, h);
          }, T.prototype.listenerCount = l;
          function l(c) {
            var h = this._events;
            if (h !== void 0) {
              var y = h[c];
              if (typeof y == "function")
                return 1;
              if (y !== void 0)
                return y.length;
            }
            return 0;
          }
          T.prototype.eventNames = function() {
            return this._eventsCount > 0 ? m(this._events) : [];
          };
          function b(c, h) {
            for (var y = new Array(h), g = 0; g < h; ++g)
              y[g] = c[g];
            return y;
          }
          function v(c, h) {
            for (; h + 1 < c.length; h++)
              c[h] = c[h + 1];
            c.pop();
          }
          function E(c) {
            for (var h = new Array(c.length), y = 0; y < h.length; ++y)
              h[y] = c[y].listener || c[y];
            return h;
          }
          function r(c, h) {
            return new Promise(function(y, g) {
              function A(C) {
                c.removeListener(h, I), g(C);
              }
              function I() {
                typeof c.removeListener == "function" && c.removeListener("error", A), y([].slice.call(arguments));
              }
              p(c, h, I, { once: !0 }), h !== "error" && u(c, A, { once: !0 });
            });
          }
          function u(c, h, y) {
            typeof c.on == "function" && p(c, "error", h, y);
          }
          function p(c, h, y, g) {
            if (typeof c.on == "function")
              g.once ? c.once(h, y) : c.on(h, y);
            else if (typeof c.addEventListener == "function")
              c.addEventListener(h, function A(I) {
                g.once && c.removeEventListener(h, A), y(I);
              });
            else
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof c);
          }
        },
        /* 17 */
        /***/
        function(t, s, f) {
          var a = f(3), d = f(0), m = 0;
          function O() {
            return "hole_" + m++;
          }
          function _(l, b) {
            for (var v = null, E = 0; E < l.length; E++) {
              var r = b(l[E]);
              r !== l[E] && (v || (v = l.slice()), v[E] = r);
            }
            return v || l;
          }
          function T(l, b, v) {
            if (!(l instanceof a.Node))
              return l;
            if (!v) {
              var E = b(l);
              if (E && E !== l)
                return E;
            }
            if (l instanceof a.NodeList) {
              var r = _(l.children, function(y) {
                return T(y, b, v);
              });
              r !== l.children && (l = new a[l.typename](l.lineno, l.colno, r));
            } else if (l instanceof a.CallExtension) {
              var u = T(l.args, b, v), p = _(l.contentArgs, function(y) {
                return T(y, b, v);
              });
              (u !== l.args || p !== l.contentArgs) && (l = new a[l.typename](l.extName, l.prop, u, p));
            } else {
              var c = l.fields.map(function(y) {
                return l[y];
              }), h = _(c, function(y) {
                return T(y, b, v);
              });
              h !== c && (l = new a[l.typename](l.lineno, l.colno), h.forEach(function(y, g) {
                l[l.fields[g]] = y;
              }));
            }
            return v && b(l) || l;
          }
          function P(l, b) {
            return T(l, b, !0);
          }
          function M(l, b, v) {
            var E = [], r = P(v ? l[v] : l, function(u) {
              var p;
              return u instanceof a.Block ? u : ((u instanceof a.Filter && d.indexOf(b, u.name.value) !== -1 || u instanceof a.CallExtensionAsync) && (p = new a.Symbol(u.lineno, u.colno, O()), E.push(new a.FilterAsync(u.lineno, u.colno, u.name, u.args, p))), p);
            });
            return v ? l[v] = r : l = r, E.length ? (E.push(l), new a.NodeList(l.lineno, l.colno, E)) : l;
          }
          function R(l, b) {
            return P(l, function(v) {
              return v instanceof a.Output ? M(v, b) : v instanceof a.Set ? M(v, b, "value") : v instanceof a.For ? M(v, b, "arr") : v instanceof a.If ? M(v, b, "cond") : v instanceof a.CallExtension ? M(v, b, "args") : void 0;
            });
          }
          function x(l) {
            return T(l, function(b) {
              if (b instanceof a.Block) {
                var v = !1, E = O();
                b.body = T(b.body, function(r) {
                  if (r instanceof a.FunCall && r.name.value === "super")
                    return v = !0, new a.Symbol(r.lineno, r.colno, E);
                }), v && b.body.children.unshift(new a.Super(0, 0, b.name, new a.Symbol(0, 0, E)));
              }
            });
          }
          function N(l) {
            return P(l, function(b) {
              if (!(!(b instanceof a.If) && !(b instanceof a.For))) {
                var v = !1;
                if (T(b, function(E) {
                  if (E instanceof a.FilterAsync || E instanceof a.IfAsync || E instanceof a.AsyncEach || E instanceof a.AsyncAll || E instanceof a.CallExtensionAsync)
                    return v = !0, E;
                }), v) {
                  if (b instanceof a.If)
                    return new a.IfAsync(b.lineno, b.colno, b.cond, b.body, b.else_);
                  if (b instanceof a.For && !(b instanceof a.AsyncAll))
                    return new a.AsyncEach(b.lineno, b.colno, b.arr, b.name, b.body, b.else_);
                }
              }
            });
          }
          function n(l, b) {
            return N(x(R(l, b)));
          }
          function o(l, b) {
            return n(l, b || []);
          }
          t.exports = {
            transform: o
          };
        },
        /* 18 */
        /***/
        function(t, m, f) {
          var a = f(0), d = f(2), m = t.exports = {};
          function O(k, B) {
            return k == null || k === !1 ? B : k;
          }
          m.abs = Math.abs;
          function _(k) {
            return k !== k;
          }
          function T(k, B, V) {
            var U, Q = [], J = [];
            for (U = 0; U < k.length; U++)
              U % B === 0 && J.length && (Q.push(J), J = []), J.push(k[U]);
            if (J.length) {
              if (V)
                for (U = J.length; U < B; U++)
                  J.push(V);
              Q.push(J);
            }
            return Q;
          }
          m.batch = T;
          function P(k) {
            k = O(k, "");
            var B = k.toLowerCase();
            return d.copySafeness(k, B.charAt(0).toUpperCase() + B.slice(1));
          }
          m.capitalize = P;
          function M(k, B) {
            if (k = O(k, ""), B = B || 80, k.length >= B)
              return k;
            var V = B - k.length, U = a.repeat(" ", V / 2 - V % 2), Q = a.repeat(" ", V / 2);
            return d.copySafeness(k, U + k + Q);
          }
          m.center = M;
          function R(k, B, V) {
            return V ? k || B : k !== void 0 ? k : B;
          }
          m.default = R;
          function x(k, B, V) {
            if (!a.isObject(k))
              throw new a.TemplateError("dictsort filter: val must be an object");
            var U = [];
            for (var Q in k)
              U.push([Q, k[Q]]);
            var J;
            if (V === void 0 || V === "key")
              J = 0;
            else if (V === "value")
              J = 1;
            else
              throw new a.TemplateError("dictsort filter: You can only sort by either key or value");
            return U.sort(function(ae, ee) {
              var le = ae[J], we = ee[J];
              return B || (a.isString(le) && (le = le.toUpperCase()), a.isString(we) && (we = we.toUpperCase())), le > we ? 1 : le === we ? 0 : -1;
            }), U;
          }
          m.dictsort = x;
          function N(k, B) {
            return JSON.stringify(k, null, B);
          }
          m.dump = N;
          function n(k) {
            return k instanceof d.SafeString ? k : (k = k ?? "", d.markSafe(a.escape(k.toString())));
          }
          m.escape = n;
          function o(k) {
            return k instanceof d.SafeString ? k : (k = k ?? "", d.markSafe(k.toString()));
          }
          m.safe = o;
          function l(k) {
            return k[0];
          }
          m.first = l;
          function b(k) {
            return k = k ?? "", d.markSafe(a.escape(k.toString()));
          }
          m.forceescape = b;
          function v(k, B) {
            return a.groupBy(k, B, this.env.opts.throwOnUndefined);
          }
          m.groupby = v;
          function E(k, B, V) {
            if (k = O(k, ""), k === "")
              return "";
            B = B || 4;
            var U = k.split(`
`), Q = a.repeat(" ", B), J = U.map(function(ae, ee) {
              return ee === 0 && !V ? ae : "" + Q + ae;
            }).join(`
`);
            return d.copySafeness(k, J);
          }
          m.indent = E;
          function r(k, B, V) {
            return B = B || "", V && (k = a.map(k, function(U) {
              return U[V];
            })), k.join(B);
          }
          m.join = r;
          function u(k) {
            return k[k.length - 1];
          }
          m.last = u;
          function p(k) {
            var B = O(k, "");
            return B !== void 0 ? typeof Map == "function" && B instanceof Map || typeof Set == "function" && B instanceof Set ? B.size : a.isObject(B) && !(B instanceof d.SafeString) ? a.keys(B).length : B.length : 0;
          }
          m.length = p;
          function c(k) {
            if (a.isString(k))
              return k.split("");
            if (a.isObject(k))
              return a._entries(k || {}).map(function(B) {
                var V = B[0], U = B[1];
                return {
                  key: V,
                  value: U
                };
              });
            if (a.isArray(k))
              return k;
            throw new a.TemplateError("list filter: type not iterable");
          }
          m.list = c;
          function h(k) {
            return k = O(k, ""), k.toLowerCase();
          }
          m.lower = h;
          function y(k) {
            return k == null ? "" : d.copySafeness(k, k.replace(/\r\n|\n/g, `<br />
`));
          }
          m.nl2br = y;
          function g(k) {
            return k[Math.floor(Math.random() * k.length)];
          }
          m.random = g;
          function A(k) {
            function B(V, U, Q) {
              U === void 0 && (U = "truthy");
              var J = this, ae = J.env.getTest(U);
              return a.toArray(V).filter(function(le) {
                return ae.call(J, le, Q) === k;
              });
            }
            return B;
          }
          m.reject = A(!1);
          function I(k, B) {
            return k.filter(function(V) {
              return !V[B];
            });
          }
          m.rejectattr = I, m.select = A(!0);
          function C(k, B) {
            return k.filter(function(V) {
              return !!V[B];
            });
          }
          m.selectattr = C;
          function F(k, B, V, U) {
            var Q = k;
            if (B instanceof RegExp)
              return k.replace(B, V);
            typeof U > "u" && (U = -1);
            var J = "";
            if (typeof B == "number")
              B = "" + B;
            else if (typeof B != "string")
              return k;
            if (typeof k == "number" && (k = "" + k), typeof k != "string" && !(k instanceof d.SafeString))
              return k;
            if (B === "")
              return J = V + k.split("").join(V) + V, d.copySafeness(k, J);
            var ae = k.indexOf(B);
            if (U === 0 || ae === -1)
              return k;
            for (var ee = 0, le = 0; ae > -1 && (U === -1 || le < U); )
              J += k.substring(ee, ae) + V, ee = ae + B.length, le++, ae = k.indexOf(B, ee);
            return ee < k.length && (J += k.substring(ee)), d.copySafeness(Q, J);
          }
          m.replace = F;
          function K(k) {
            var B;
            return a.isString(k) ? B = c(k) : B = a.map(k, function(V) {
              return V;
            }), B.reverse(), a.isString(k) ? d.copySafeness(k, B.join("")) : B;
          }
          m.reverse = K;
          function L(k, B, V) {
            B = B || 0;
            var U = Math.pow(10, B), Q;
            return V === "ceil" ? Q = Math.ceil : V === "floor" ? Q = Math.floor : Q = Math.round, Q(k * U) / U;
          }
          m.round = L;
          function w(k, B, V) {
            for (var U = Math.floor(k.length / B), Q = k.length % B, J = [], ae = 0, ee = 0; ee < B; ee++) {
              var le = ae + ee * U;
              ee < Q && ae++;
              var we = ae + (ee + 1) * U, be = k.slice(le, we);
              V && ee >= Q && be.push(V), J.push(be);
            }
            return J;
          }
          m.slice = w;
          function S(k, B, V) {
            return V === void 0 && (V = 0), B && (k = a.map(k, function(U) {
              return U[B];
            })), V + k.reduce(function(U, Q) {
              return U + Q;
            }, 0);
          }
          m.sum = S, m.sort = d.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(B, V, U, Q) {
            var J = this, ae = a.map(B, function(le) {
              return le;
            }), ee = a.getAttrGetter(Q);
            return ae.sort(function(le, we) {
              var be = Q ? ee(le) : le, ke = Q ? ee(we) : we;
              if (J.env.opts.throwOnUndefined && Q && (be === void 0 || ke === void 0))
                throw new TypeError('sort: attribute "' + Q + '" resolved to undefined');
              return !U && a.isString(be) && a.isString(ke) && (be = be.toLowerCase(), ke = ke.toLowerCase()), be < ke ? V ? 1 : -1 : be > ke ? V ? -1 : 1 : 0;
            }), ae;
          });
          function j(k) {
            return d.copySafeness(k, k);
          }
          m.string = j;
          function D(k, B) {
            k = O(k, "");
            var V = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, U = ne(k.replace(V, "")), Q = "";
            return B ? Q = U.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, `
`).replace(/\n\n\n+/g, `

`) : Q = U.replace(/\s+/gi, " "), d.copySafeness(k, Q);
          }
          m.striptags = D;
          function $(k) {
            k = O(k, "");
            var B = k.split(" ").map(function(V) {
              return P(V);
            });
            return d.copySafeness(k, B.join(" "));
          }
          m.title = $;
          function ne(k) {
            return d.copySafeness(k, k.replace(/^\s*|\s*$/g, ""));
          }
          m.trim = ne;
          function z(k, B, V, U) {
            var Q = k;
            if (k = O(k, ""), B = B || 255, k.length <= B)
              return k;
            if (V)
              k = k.substring(0, B);
            else {
              var J = k.lastIndexOf(" ", B);
              J === -1 && (J = B), k = k.substring(0, J);
            }
            return k += U ?? "...", d.copySafeness(Q, k);
          }
          m.truncate = z;
          function ue(k) {
            return k = O(k, ""), k.toUpperCase();
          }
          m.upper = ue;
          function he(k) {
            var B = encodeURIComponent;
            if (a.isString(k))
              return B(k);
            var V = a.isArray(k) ? k : a._entries(k);
            return V.map(function(U) {
              var Q = U[0], J = U[1];
              return B(Q) + "=" + B(J);
            }).join("&");
          }
          m.urlencode = he;
          var X = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, Z = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, q = /^https?:\/\/.*$/, G = /^www\./, W = /\.(?:org|net|com)(?:\:|\/|$)/;
          function se(k, B, V) {
            _(B) && (B = 1 / 0);
            var U = V === !0 ? ' rel="nofollow"' : "", Q = k.split(/(\s+)/).filter(function(J) {
              return J && J.length;
            }).map(function(J) {
              var ae = J.match(X), ee = ae ? ae[1] : J, le = ee.substr(0, B);
              return q.test(ee) ? '<a href="' + ee + '"' + U + ">" + le + "</a>" : G.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : Z.test(ee) ? '<a href="mailto:' + ee + '">' + ee + "</a>" : W.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : J;
            });
            return Q.join("");
          }
          m.urlize = se;
          function ye(k) {
            k = O(k, "");
            var B = k ? k.match(/\w+/g) : null;
            return B ? B.length : null;
          }
          m.wordcount = ye;
          function fe(k, B) {
            var V = parseFloat(k);
            return _(V) ? B : V;
          }
          m.float = fe;
          var Oe = d.makeMacro(["value", "default", "base"], [], function(B, V, U) {
            U === void 0 && (U = 10);
            var Q = parseInt(B, U);
            return _(Q) ? V : Q;
          });
          m.int = Oe, m.d = m.default, m.e = m.escape;
        },
        /* 19 */
        /***/
        function(t, s, f) {
          function a(_, T) {
            _.prototype = Object.create(T.prototype), _.prototype.constructor = _, d(_, T);
          }
          function d(_, T) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(M, R) {
              return M.__proto__ = R, M;
            }, d(_, T);
          }
          var m = f(6), O = /* @__PURE__ */ function(_) {
            a(T, _);
            function T(M) {
              var R;
              return R = _.call(this) || this, R.precompiled = M || {}, R;
            }
            var P = T.prototype;
            return P.getSource = function(R) {
              return this.precompiled[R] ? {
                src: {
                  type: "code",
                  obj: this.precompiled[R]
                },
                path: R
              } : null;
            }, T;
          }(m);
          t.exports = {
            PrecompiledLoader: O
          };
        },
        /* 20 */
        /***/
        function(t, s, f) {
          var a = f(2).SafeString;
          function d(g) {
            return typeof g == "function";
          }
          s.callable = d;
          function m(g) {
            return g !== void 0;
          }
          s.defined = m;
          function O(g, A) {
            return g % A === 0;
          }
          s.divisibleby = O;
          function _(g) {
            return g instanceof a;
          }
          s.escaped = _;
          function T(g, A) {
            return g === A;
          }
          s.equalto = T, s.eq = s.equalto, s.sameas = s.equalto;
          function P(g) {
            return g % 2 === 0;
          }
          s.even = P;
          function M(g) {
            return !g;
          }
          s.falsy = M;
          function R(g, A) {
            return g >= A;
          }
          s.ge = R;
          function x(g, A) {
            return g > A;
          }
          s.greaterthan = x, s.gt = s.greaterthan;
          function N(g, A) {
            return g <= A;
          }
          s.le = N;
          function n(g, A) {
            return g < A;
          }
          s.lessthan = n, s.lt = s.lessthan;
          function o(g) {
            return g.toLowerCase() === g;
          }
          s.lower = o;
          function l(g, A) {
            return g !== A;
          }
          s.ne = l;
          function b(g) {
            return g === null;
          }
          s.null = b;
          function v(g) {
            return typeof g == "number";
          }
          s.number = v;
          function E(g) {
            return g % 2 === 1;
          }
          s.odd = E;
          function r(g) {
            return typeof g == "string";
          }
          s.string = r;
          function u(g) {
            return !!g;
          }
          s.truthy = u;
          function p(g) {
            return g === void 0;
          }
          s.undefined = p;
          function c(g) {
            return g.toUpperCase() === g;
          }
          s.upper = c;
          function h(g) {
            return typeof Symbol < "u" ? !!g[Symbol.iterator] : Array.isArray(g) || typeof g == "string";
          }
          s.iterable = h;
          function y(g) {
            var A = g != null && typeof g == "object" && !Array.isArray(g);
            return Set ? A && !(g instanceof Set) : A;
          }
          s.mapping = y;
        },
        /* 21 */
        /***/
        function(t, s, f) {
          function a(O) {
            var _ = -1;
            return {
              current: null,
              reset: function() {
                _ = -1, this.current = null;
              },
              next: function() {
                return _++, _ >= O.length && (_ = 0), this.current = O[_], this.current;
              }
            };
          }
          function d(O) {
            O = O || ",";
            var _ = !0;
            return function() {
              var T = _ ? "" : O;
              return _ = !1, T;
            };
          }
          function m() {
            return {
              range: function(_, T, P) {
                typeof T > "u" ? (T = _, _ = 0, P = 1) : P || (P = 1);
                var M = [];
                if (P > 0)
                  for (var R = _; R < T; R += P)
                    M.push(R);
                else
                  for (var x = _; x > T; x += P)
                    M.push(x);
                return M;
              },
              cycler: function() {
                return a(Array.prototype.slice.call(arguments));
              },
              joiner: function(_) {
                return d(_);
              }
            };
          }
          t.exports = m;
        },
        /* 22 */
        /***/
        function(t, s, f) {
          var a = f(4);
          t.exports = function(m, O) {
            function _(T, P) {
              if (this.name = T, this.path = T, this.defaultEngine = P.defaultEngine, this.ext = a.extname(T), !this.ext && !this.defaultEngine)
                throw new Error("No default engine was specified and no extension was provided.");
              this.ext || (this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine);
            }
            return _.prototype.render = function(P, M) {
              m.render(this.name, P, M);
            }, O.set("view", _), O.set("nunjucksEnv", m), m;
          };
        },
        /* 23 */
        /***/
        function(t, s, f) {
          var a = f(4), d = f(4), m = f(0), O = m._prettifyError, _ = f(5), T = f(7), P = T.Environment, M = f(24);
          function R(o, l) {
            return Array.isArray(l) ? l.some(function(b) {
              return o.match(b);
            }) : !1;
          }
          function x(o, l) {
            l = l || {}, l.isString = !0;
            var b = l.env || new P([]), v = l.wrapper || M;
            if (!l.name)
              throw new Error('the "name" option is required when compiling a string');
            return v([n(o, l.name, b)], l);
          }
          function N(o, l) {
            l = l || {};
            var b = l.env || new P([]), v = l.wrapper || M;
            if (l.isString)
              return x(o, l);
            var E = a.existsSync(o) && a.statSync(o), r = [], u = [];
            function p(y) {
              a.readdirSync(y).forEach(function(g) {
                var A = d.join(y, g), I = A.substr(d.join(o, "/").length), C = a.statSync(A);
                C && C.isDirectory() ? (I += "/", R(I, l.exclude) || p(A)) : R(I, l.include) && u.push(A);
              });
            }
            if (E.isFile())
              r.push(n(a.readFileSync(o, "utf-8"), l.name || o, b));
            else if (E.isDirectory()) {
              p(o);
              for (var c = 0; c < u.length; c++) {
                var h = u[c].replace(d.join(o, "/"), "");
                try {
                  r.push(n(a.readFileSync(u[c], "utf-8"), h, b));
                } catch (y) {
                  if (l.force)
                    console.error(y);
                  else
                    throw y;
                }
              }
            }
            return v(r, l);
          }
          function n(o, l, b) {
            b = b || new P([]);
            var v = b.asyncFilters, E = b.extensionsList, r;
            l = l.replace(/\\/g, "/");
            try {
              r = _.compile(o, v, E, l, b.opts);
            } catch (u) {
              throw O(l, !1, u);
            }
            return {
              name: l,
              template: r
            };
          }
          t.exports = {
            precompile: N,
            precompileString: x
          };
        },
        /* 24 */
        /***/
        function(t, s, f) {
          function a(d, m) {
            var O = "";
            m = m || {};
            for (var _ = 0; _ < d.length; _++) {
              var T = JSON.stringify(d[_].name), P = d[_].template;
              O += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + T + `] = (function() {
` + P + `
})();
`, m.asFunction && (O += "return function(ctx, cb) { return nunjucks.render(" + T + `, ctx, cb); }
`), O += `})();
`;
            }
            return O;
          }
          t.exports = a;
        },
        /* 25 */
        /***/
        function(t, s, f) {
          function a() {
            var d = this.runtime, m = this.lib, O = this.compiler.Compiler, _ = this.parser.Parser, T = this.nodes, P = this.lexer, M = d.contextOrFrameLookup, R = d.memberLookup, x, N;
            O && (x = O.prototype.assertType), _ && (N = _.prototype.parseAggregate);
            function n() {
              d.contextOrFrameLookup = M, d.memberLookup = R, O && (O.prototype.assertType = x), _ && (_.prototype.parseAggregate = N);
            }
            d.contextOrFrameLookup = function(p, c, h) {
              var y = M.apply(this, arguments);
              if (y !== void 0)
                return y;
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
            function o(u) {
              return {
                index: u.index,
                lineno: u.lineno,
                colno: u.colno
              };
            }
            if (T && O && _) {
              var l = T.Node.extend("Slice", {
                fields: ["start", "stop", "step"],
                init: function(p, c, h, y, g) {
                  h = h || new T.Literal(p, c, null), y = y || new T.Literal(p, c, null), g = g || new T.Literal(p, c, 1), this.parent(p, c, h, y, g);
                }
              });
              O.prototype.assertType = function(p) {
                p instanceof l || x.apply(this, arguments);
              }, O.prototype.compileSlice = function(p, c) {
                this._emit("("), this._compileExpression(p.start, c), this._emit("),("), this._compileExpression(p.stop, c), this._emit("),("), this._compileExpression(p.step, c), this._emit(")");
              }, _.prototype.parseAggregate = function() {
                var p = this, c = o(this.tokens);
                c.colno--, c.index--;
                try {
                  return N.apply(this);
                } catch (K) {
                  var h = o(this.tokens), y = function() {
                    return m._assign(p.tokens, h), K;
                  };
                  m._assign(this.tokens, c), this.peeked = !1;
                  var g = this.peekToken();
                  if (g.type !== P.TOKEN_LEFT_BRACKET)
                    throw y();
                  this.nextToken();
                  for (var A = new l(g.lineno, g.colno), I = !1, C = 0; C <= A.fields.length && !this.skip(P.TOKEN_RIGHT_BRACKET); C++) {
                    if (C === A.fields.length)
                      if (I)
                        this.fail("parseSlice: too many slice components", g.lineno, g.colno);
                      else
                        break;
                    if (this.skip(P.TOKEN_COLON))
                      I = !0;
                    else {
                      var F = A.fields[C];
                      A[F] = this.parseExpression(), I = this.skip(P.TOKEN_COLON) || I;
                    }
                  }
                  if (!I)
                    throw y();
                  return new T.Array(g.lineno, g.colno, [A]);
                }
              };
            }
            function b(u, p, c, h) {
              u = u || [], p === null && (p = h < 0 ? u.length - 1 : 0), c === null ? c = h < 0 ? -1 : u.length : c < 0 && (c += u.length), p < 0 && (p += u.length);
              for (var y = [], g = p; !(g < 0 || g > u.length || h > 0 && g >= c || h < 0 && g <= c); g += h)
                y.push(d.memberLookup(u, g));
              return y;
            }
            function v(u, p) {
              return Object.prototype.hasOwnProperty.call(u, p);
            }
            var E = {
              pop: function(p) {
                if (p === void 0)
                  return this.pop();
                if (p >= this.length || p < 0)
                  throw new Error("KeyError");
                return this.splice(p, 1);
              },
              append: function(p) {
                return this.push(p);
              },
              remove: function(p) {
                for (var c = 0; c < this.length; c++)
                  if (this[c] === p)
                    return this.splice(c, 1);
                throw new Error("ValueError");
              },
              count: function(p) {
                for (var c = 0, h = 0; h < this.length; h++)
                  this[h] === p && c++;
                return c;
              },
              index: function(p) {
                var c;
                if ((c = this.indexOf(p)) === -1)
                  throw new Error("ValueError");
                return c;
              },
              find: function(p) {
                return this.indexOf(p);
              },
              insert: function(p, c) {
                return this.splice(p, 0, c);
              }
            }, r = {
              items: function() {
                return m._entries(this);
              },
              values: function() {
                return m._values(this);
              },
              keys: function() {
                return m.keys(this);
              },
              get: function(p, c) {
                var h = this[p];
                return h === void 0 && (h = c), h;
              },
              has_key: function(p) {
                return v(this, p);
              },
              pop: function(p, c) {
                var h = this[p];
                if (h === void 0 && c !== void 0)
                  h = c;
                else {
                  if (h === void 0)
                    throw new Error("KeyError");
                  delete this[p];
                }
                return h;
              },
              popitem: function() {
                var p = m.keys(this);
                if (!p.length)
                  throw new Error("KeyError");
                var c = p[0], h = this[c];
                return delete this[c], [c, h];
              },
              setdefault: function(p, c) {
                return c === void 0 && (c = null), p in this || (this[p] = c), this[p];
              },
              update: function(p) {
                return m._assign(this, p), null;
              }
            };
            return r.iteritems = r.items, r.itervalues = r.values, r.iterkeys = r.keys, d.memberLookup = function(p, c, h) {
              return arguments.length === 4 ? b.apply(this, arguments) : (p = p || {}, m.isArray(p) && v(E, c) ? E[c].bind(p) : m.isObject(p) && v(r, c) ? r[c].bind(p) : R.apply(this, arguments));
            }, n;
          }
          t.exports = a;
        }
        /******/
      ])
    );
  });
})(fr);
const hr = (i, e) => {
  const t = At(i);
  return Ke.configure({ autoescape: !0 }), Ke.renderString(e, t);
}, At = (i) => {
  const e = {};
  return Object.entries(i).forEach(([t, s]) => {
    if (pr(s)) {
      const f = Object.values(s.content);
      e[t] = f.filter((a) => !(a != null && a.hidden)).map((a) => At(a.questions));
      return;
    }
    e[t] = s.value;
  }), e;
}, pr = (i) => Boolean(i.content);
class St {
  constructor(e = "empty", t = { isRoot: !0, data: null }) {
    Le(this, "interview", /* @__PURE__ */ new Map());
    Le(this, "events");
    Le(this, "current");
    Le(this, "isRoot", !0);
    Le(this, "data", {});
    this.events = t.events || new Me(), this.isRoot = t.isRoot, this.data = t.data || this.data;
    const s = t.data ? JSON.parse(JSON.stringify(this.data)) : null;
    e !== "empty" && this.init(e), s && this.applyDataToQuestions(s);
  }
  get questionsMap() {
    return this.interview;
  }
  init(e) {
    if (e === null)
      throw new Error("Interview init param is null");
    nr(e);
    for (const t of Object.values(e))
      this.add(t);
  }
  add(e, t = !1) {
    const s = or(e);
    return s.type === "repeat" && this.buildContentForRepeatQuestion(s), this.interview.set(s.id, s), this.events.dispatch("question-added", s), s;
  }
  getNestedInterview(e, t) {
    const s = this.interview.get(e);
    if (!s)
      throw new Error("No question with id:" + e);
    if ((s == null ? void 0 : s.type) !== "repeat")
      throw new Error("Question with id " + e + " is not a repeat question");
    return s.content[t].nestedInterview;
  }
  canBeShown(e) {
    var t;
    if ((t = e.logic) != null && t.showIf) {
      const s = this.interview.keys(), f = this.interview.values();
      return Function(...s, `return ${e.logic.showIf}`).bind(this)(...f);
    }
    return !0;
  }
  setCurrent(e) {
    if (!this.interview.has(e))
      throw new Error("No question with id:" + e);
    this.current = e, this.events.dispatch("set-current", this.getCurrent());
  }
  next() {
    const e = this.getCurrent().id, t = Array.from(this.interview);
    for (let s = 0; s < t.length; s++) {
      const [f] = t[s];
      if (e === f) {
        const a = this.nextAvailableQuestion(s + 1);
        a && this.setCurrent(a[0]);
        break;
      }
    }
  }
  nextAvailableQuestion(e) {
    const t = Array.from(this.interview);
    for (let s = e; s < t.length; s++) {
      const [f, a] = t[s];
      if (this.canBeShown(a))
        return t[s];
    }
  }
  previous() {
    const e = this.getCurrent().id, t = Array.from(this.interview);
    for (let s = 0; s < t.length; s++) {
      const [f] = t[s];
      if (e === f) {
        const a = this.previousAvailableQuestion(s - 1);
        a && this.setCurrent(a[0]);
        break;
      }
    }
  }
  previousAvailableQuestion(e) {
    const t = Array.from(this.interview);
    for (let s = e; s >= 0; s--) {
      const [f, a] = t[s];
      if (this.canBeShown(a))
        return t[s];
    }
  }
  getCurrent() {
    this.current || (this.current = Array.from(this.interview)[0][0]);
    const e = this.interview.get(this.current);
    if (!e)
      throw new Error("Could not find current Quetion");
    return e;
  }
  setValue(e, t) {
    if (!this.interview.has(e))
      throw new Error("No question with id:" + e);
    const s = this.interview.get(e);
    if (!s)
      throw new Error("No question with id:" + e);
    ir(t, s), s.value = t, (s == null ? void 0 : s.type) === "multipleChoice" && this.setRadioChecked(s, t), (s == null ? void 0 : s.type) === "repeat" && this.buildContentForRepeatQuestion(s, t), this.data[e] ? this.data[e].value = s.value : this.data[e] = { value: s.value }, this.events.dispatch("set-value", this.interview.get(e));
  }
  on(e, t) {
    this.events.register(e, t);
  }
  getData() {
    return this.data;
  }
  setRadioChecked(e, t) {
    e.choices.forEach((s) => {
      s.checked = s.label === t;
    });
  }
  buildContentForRepeatQuestion(e, t = null) {
    const { range: s, id: f, questions: a } = e, { min: d, max: m } = s;
    t = rr(e.value, d, m), e.value = t, e.content || (e.content = {}), this.data[f] ? this.data[f].value = t : this.data[f] = { value: t, content: {} };
    for (let _ = 0; _ < t; _++) {
      if (e.content[_]) {
        e.content[_].hidden = !1;
        continue;
      }
      this.data[f].content[_] = { hidden: !1, questions: {} };
      const T = new St(cr(a, _), {
        isRoot: !1,
        events: this.events,
        data: this.data[f].content[_].questions
      });
      e.content[_] = { hidden: !1, nestedInterview: T };
    }
    const O = Object.keys(e.content);
    if (t < O.length)
      for (let _ = t; _ < O.length; _++)
        e.content[_].hidden = !0, this.data[f].content[_].hidden = !0;
  }
  applyDataToQuestions(e) {
    Object.entries(e).forEach(([t, { value: s, content: f }]) => {
      this.setValue(t, s), f && Object.values(f).forEach((a, d) => {
        a.hidden || this.getNestedInterview(t, d).applyDataToQuestions(a.questions);
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
    const f = this.checkIfIdIsValid(t);
    if (!f.isValid)
      throw new Error(f.message);
    const a = Array.from(this.interview, ([m, O]) => ({ name: m, value: O }));
    a.forEach((m, O) => {
      m.name === e && (a[O].value.id = t, a[O].name = t);
    });
    const d = /* @__PURE__ */ new Map();
    a.forEach((m) => {
      d.set(m.name, m.value);
    }), this.interview = d;
  }
  addChoiceToMultipleChoice(e, t) {
    const s = this.interview.get(e);
    if (!s)
      throw new Error("No question with id:" + e);
    if ((s == null ? void 0 : s.type) !== "multipleChoice")
      throw new Error("Question with id " + e + " is not a multiple choice question");
    s.choices.push(t);
  }
  setQuestionAsRequired(e, t) {
    const s = this.interview.get(e);
    if (!s)
      throw new Error("No question with id:" + e);
    s.required = t;
  }
  setTitleOfQuestion(e, t) {
    const s = this.interview.get(e);
    if (!s)
      throw new Error("No question with id:" + e);
    s.title = t;
  }
  setPlaceholder(e, t) {
    const s = this.interview.get(e);
    if (!s)
      throw new Error("No question with id:" + e);
    s.placeholder = t;
  }
  setExtraOption(e, t, s) {
    const f = this.interview.get(e);
    if (!f)
      throw new Error("No question with id:" + e);
    f.options || (f.options = {}), f.options[t] = s;
  }
  setIndications(e, t) {
    const s = this.interview.get(e);
    if (!s)
      throw new Error("No question with id:" + e);
    s.indications = t;
  }
}
export {
  St as GuidedInterview
};
