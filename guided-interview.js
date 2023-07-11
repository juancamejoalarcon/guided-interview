var Kt = Object.defineProperty;
var jt = (s, e, t) => e in s ? Kt(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var Le = (s, e, t) => (jt(s, typeof e != "symbol" ? e + "" : e, t), t);
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dt(s) {
  if (s.__esModule)
    return s;
  var e = s.default;
  if (typeof e == "function") {
    var t = function r() {
      if (this instanceof r) {
        var u = [null];
        u.push.apply(u, arguments);
        var o = Function.bind.apply(e, u);
        return new o();
      }
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(s).forEach(function(r) {
    var u = Object.getOwnPropertyDescriptor(s, r);
    Object.defineProperty(t, r, u.get ? u : {
      enumerable: !0,
      get: function() {
        return s[r];
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
function Wt(s) {
  return s && s.__esModule ? s : { default: s };
}
function Gt(s) {
  return typeof s == "string" && $t.default.test(s);
}
var Ht = Gt;
Ne.default = Ht;
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
Ae.unsafeStringify = yt;
var Qt = Yt(Ne);
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
  if (!(0, Qt.default)(t))
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
  let r = e && t || 0;
  const u = e || new Array(16);
  s = s || {};
  let o = s.node || pt, p = s.clockseq !== void 0 ? s.clockseq : st;
  if (o == null || p == null) {
    const M = s.random || (s.rng || Xt.default)();
    o == null && (o = pt = [M[0] | 1, M[1], M[2], M[3], M[4], M[5]]), p == null && (p = st = (M[6] << 8 | M[7]) & 16383);
  }
  let v = s.msecs !== void 0 ? s.msecs : Date.now(), O = s.nsecs !== void 0 ? s.nsecs : at + 1;
  const _ = v - ot + (O - at) / 1e4;
  if (_ < 0 && s.clockseq === void 0 && (p = p + 1 & 16383), (_ < 0 || v > ot) && s.nsecs === void 0 && (O = 0), O >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ot = v, at = O, st = p, v += 122192928e5;
  const T = ((v & 268435455) * 1e4 + O) % 4294967296;
  u[r++] = T >>> 24 & 255, u[r++] = T >>> 16 & 255, u[r++] = T >>> 8 & 255, u[r++] = T & 255;
  const P = v / 4294967296 * 1e4 & 268435455;
  u[r++] = P >>> 8 & 255, u[r++] = P & 255, u[r++] = P >>> 24 & 15 | 16, u[r++] = P >>> 16 & 255, u[r++] = p >>> 8 | 128, u[r++] = p & 255;
  for (let M = 0; M < 6; ++M)
    u[r + M] = o[M];
  return e || (0, Zt.unsafeStringify)(u);
}
var nn = tn;
Ue.default = nn;
var $e = {}, Te = {}, Pe = {};
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.default = void 0;
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
  function r(u, o, p, v) {
    var O;
    if (typeof u == "string" && (u = fn(u)), typeof o == "string" && (o = (0, un.default)(o)), ((O = o) === null || O === void 0 ? void 0 : O.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let _ = new Uint8Array(16 + u.length);
    if (_.set(o), _.set(u, o.length), _ = t(_), _[6] = _[6] & 15 | e, _[8] = _[8] & 63 | 128, p) {
      v = v || 0;
      for (let T = 0; T < 16; ++T)
        p[v + T] = _[T];
      return p;
    }
    return (0, ln.unsafeStringify)(_);
  }
  try {
    r.name = s;
  } catch {
  }
  return r.DNS = _t, r.URL = wt, r;
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
  const e = [], t = s.length * 32, r = "0123456789abcdef";
  for (let u = 0; u < t; u += 8) {
    const o = s[u >> 5] >>> u % 32 & 255, p = parseInt(r.charAt(o >>> 4 & 15) + r.charAt(o & 15), 16);
    e.push(p);
  }
  return e;
}
function Et(s) {
  return (s + 64 >>> 9 << 4) + 14 + 1;
}
function vn(s, e) {
  s[e >> 5] |= 128 << e % 32, s[Et(e) - 1] = e;
  let t = 1732584193, r = -271733879, u = -1732584194, o = 271733878;
  for (let p = 0; p < s.length; p += 16) {
    const v = t, O = r, _ = u, T = o;
    t = de(t, r, u, o, s[p], 7, -680876936), o = de(o, t, r, u, s[p + 1], 12, -389564586), u = de(u, o, t, r, s[p + 2], 17, 606105819), r = de(r, u, o, t, s[p + 3], 22, -1044525330), t = de(t, r, u, o, s[p + 4], 7, -176418897), o = de(o, t, r, u, s[p + 5], 12, 1200080426), u = de(u, o, t, r, s[p + 6], 17, -1473231341), r = de(r, u, o, t, s[p + 7], 22, -45705983), t = de(t, r, u, o, s[p + 8], 7, 1770035416), o = de(o, t, r, u, s[p + 9], 12, -1958414417), u = de(u, o, t, r, s[p + 10], 17, -42063), r = de(r, u, o, t, s[p + 11], 22, -1990404162), t = de(t, r, u, o, s[p + 12], 7, 1804603682), o = de(o, t, r, u, s[p + 13], 12, -40341101), u = de(u, o, t, r, s[p + 14], 17, -1502002290), r = de(r, u, o, t, s[p + 15], 22, 1236535329), t = ve(t, r, u, o, s[p + 1], 5, -165796510), o = ve(o, t, r, u, s[p + 6], 9, -1069501632), u = ve(u, o, t, r, s[p + 11], 14, 643717713), r = ve(r, u, o, t, s[p], 20, -373897302), t = ve(t, r, u, o, s[p + 5], 5, -701558691), o = ve(o, t, r, u, s[p + 10], 9, 38016083), u = ve(u, o, t, r, s[p + 15], 14, -660478335), r = ve(r, u, o, t, s[p + 4], 20, -405537848), t = ve(t, r, u, o, s[p + 9], 5, 568446438), o = ve(o, t, r, u, s[p + 14], 9, -1019803690), u = ve(u, o, t, r, s[p + 3], 14, -187363961), r = ve(r, u, o, t, s[p + 8], 20, 1163531501), t = ve(t, r, u, o, s[p + 13], 5, -1444681467), o = ve(o, t, r, u, s[p + 2], 9, -51403784), u = ve(u, o, t, r, s[p + 7], 14, 1735328473), r = ve(r, u, o, t, s[p + 12], 20, -1926607734), t = me(t, r, u, o, s[p + 5], 4, -378558), o = me(o, t, r, u, s[p + 8], 11, -2022574463), u = me(u, o, t, r, s[p + 11], 16, 1839030562), r = me(r, u, o, t, s[p + 14], 23, -35309556), t = me(t, r, u, o, s[p + 1], 4, -1530992060), o = me(o, t, r, u, s[p + 4], 11, 1272893353), u = me(u, o, t, r, s[p + 7], 16, -155497632), r = me(r, u, o, t, s[p + 10], 23, -1094730640), t = me(t, r, u, o, s[p + 13], 4, 681279174), o = me(o, t, r, u, s[p], 11, -358537222), u = me(u, o, t, r, s[p + 3], 16, -722521979), r = me(r, u, o, t, s[p + 6], 23, 76029189), t = me(t, r, u, o, s[p + 9], 4, -640364487), o = me(o, t, r, u, s[p + 12], 11, -421815835), u = me(u, o, t, r, s[p + 15], 16, 530742520), r = me(r, u, o, t, s[p + 2], 23, -995338651), t = ge(t, r, u, o, s[p], 6, -198630844), o = ge(o, t, r, u, s[p + 7], 10, 1126891415), u = ge(u, o, t, r, s[p + 14], 15, -1416354905), r = ge(r, u, o, t, s[p + 5], 21, -57434055), t = ge(t, r, u, o, s[p + 12], 6, 1700485571), o = ge(o, t, r, u, s[p + 3], 10, -1894986606), u = ge(u, o, t, r, s[p + 10], 15, -1051523), r = ge(r, u, o, t, s[p + 1], 21, -2054922799), t = ge(t, r, u, o, s[p + 8], 6, 1873313359), o = ge(o, t, r, u, s[p + 15], 10, -30611744), u = ge(u, o, t, r, s[p + 6], 15, -1560198380), r = ge(r, u, o, t, s[p + 13], 21, 1309151649), t = ge(t, r, u, o, s[p + 4], 6, -145523070), o = ge(o, t, r, u, s[p + 11], 10, -1120210379), u = ge(u, o, t, r, s[p + 2], 15, 718787259), r = ge(r, u, o, t, s[p + 9], 21, -343485551), t = xe(t, v), r = xe(r, O), u = xe(u, _), o = xe(o, T);
  }
  return [t, r, u, o];
}
function mn(s) {
  if (s.length === 0)
    return [];
  const e = s.length * 8, t = new Uint32Array(Et(e));
  for (let r = 0; r < e; r += 8)
    t[r >> 5] |= (s[r / 8] & 255) << r % 32;
  return t;
}
function xe(s, e) {
  const t = (s & 65535) + (e & 65535);
  return (s >> 16) + (e >> 16) + (t >> 16) << 16 | t & 65535;
}
function gn(s, e) {
  return s << e | s >>> 32 - e;
}
function Ge(s, e, t, r, u, o) {
  return xe(gn(xe(xe(e, s), xe(r, o)), u), t);
}
function de(s, e, t, r, u, o, p) {
  return Ge(e & t | ~e & r, s, e, u, o, p);
}
function ve(s, e, t, r, u, o, p) {
  return Ge(e & r | t & ~r, s, e, u, o, p);
}
function me(s, e, t, r, u, o, p) {
  return Ge(e ^ t ^ r, s, e, u, o, p);
}
function ge(s, e, t, r, u, o, p) {
  return Ge(t ^ (e | ~r), s, e, u, o, p);
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
var He = {}, Qe = {};
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.default = void 0;
const On = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var kn = {
  randomUUID: On
};
Qe.default = kn;
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.default = void 0;
var dt = Ot(Qe), Ln = Ot(Ve), xn = Ae;
function Ot(s) {
  return s && s.__esModule ? s : { default: s };
}
function Tn(s, e, t) {
  if (dt.default.randomUUID && !e && !s)
    return dt.default.randomUUID();
  s = s || {};
  const r = s.random || (s.rng || Ln.default)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    t = t || 0;
    for (let u = 0; u < 16; ++u)
      e[t + u] = r[u];
    return e;
  }
  return (0, xn.unsafeStringify)(r);
}
var An = Tn;
He.default = An;
var Ye = {}, ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.default = void 0;
function Sn(s, e, t, r) {
  switch (s) {
    case 0:
      return e & t ^ ~e & r;
    case 1:
      return e ^ t ^ r;
    case 2:
      return e & t ^ e & r ^ t & r;
    case 3:
      return e ^ t ^ r;
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
    for (let v = 0; v < p.length; ++v)
      s.push(p.charCodeAt(v));
  } else
    Array.isArray(s) || (s = Array.prototype.slice.call(s));
  s.push(128);
  const r = s.length / 4 + 2, u = Math.ceil(r / 16), o = new Array(u);
  for (let p = 0; p < u; ++p) {
    const v = new Uint32Array(16);
    for (let O = 0; O < 16; ++O)
      v[O] = s[p * 64 + O * 4] << 24 | s[p * 64 + O * 4 + 1] << 16 | s[p * 64 + O * 4 + 2] << 8 | s[p * 64 + O * 4 + 3];
    o[p] = v;
  }
  o[u - 1][14] = (s.length - 1) * 8 / Math.pow(2, 32), o[u - 1][14] = Math.floor(o[u - 1][14]), o[u - 1][15] = (s.length - 1) * 8 & 4294967295;
  for (let p = 0; p < u; ++p) {
    const v = new Uint32Array(80);
    for (let R = 0; R < 16; ++R)
      v[R] = o[p][R];
    for (let R = 16; R < 80; ++R)
      v[R] = lt(v[R - 3] ^ v[R - 8] ^ v[R - 14] ^ v[R - 16], 1);
    let O = t[0], _ = t[1], T = t[2], P = t[3], M = t[4];
    for (let R = 0; R < 80; ++R) {
      const x = Math.floor(R / 20), N = lt(O, 5) + Sn(x, _, T, P) + M + e[x] + v[R] >>> 0;
      M = P, P = T, T = lt(_, 30) >>> 0, _ = O, O = N;
    }
    t[0] = t[0] + O >>> 0, t[1] = t[1] + _ >>> 0, t[2] = t[2] + T >>> 0, t[3] = t[3] + P >>> 0, t[4] = t[4] + M >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var Cn = Nn;
ze.default = Cn;
Object.defineProperty(Ye, "__esModule", {
  value: !0
});
Ye.default = void 0;
var Rn = kt(Te), In = kt(ze);
function kt(s) {
  return s && s.__esModule ? s : { default: s };
}
const Pn = (0, Rn.default)("v5", 80, In.default);
var Fn = Pn;
Ye.default = Fn;
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
      return o.default;
    }
  }), Object.defineProperty(s, "parse", {
    enumerable: !0,
    get: function() {
      return _.default;
    }
  }), Object.defineProperty(s, "stringify", {
    enumerable: !0,
    get: function() {
      return O.default;
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
      return r.default;
    }
  }), Object.defineProperty(s, "v5", {
    enumerable: !0,
    get: function() {
      return u.default;
    }
  }), Object.defineProperty(s, "validate", {
    enumerable: !0,
    get: function() {
      return v.default;
    }
  }), Object.defineProperty(s, "version", {
    enumerable: !0,
    get: function() {
      return p.default;
    }
  });
  var e = T(Ue), t = T($e), r = T(He), u = T(Ye), o = T(Je), p = T(Xe), v = T(Ne), O = T(Ae), _ = T(Pe);
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
var Gn = ct && ct.__importDefault || function(s) {
  return s && s.__esModule ? s : { default: s };
};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.RandomStringGenerator = void 0;
const Hn = Gn(Wn);
class Qn {
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
    const r = Hn.default.randomBytes(t), u = e.length - 1;
    let o = "";
    for (; t--; )
      o += e[r[t] & u];
    return o;
  }
}
tt.RandomStringGenerator = Qn;
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
    const [r, u] = this.split(e, 2);
    return [r, u];
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
    const t = new zn.RandomStringConfig(), r = new Jn.RandomStringBuilder(t);
    return e || r.characters().numbers().symbols(), typeof e == "function" && e(r), typeof e == "number" && r.characters().numbers().symbols().length(e), this.generateRandom(t);
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
    const r = new RegExp(e, "g");
    return new te(this.value.replace(r, t));
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
      const r = Math.floor(Math.random() * t--), u = e[t];
      e[t] = e[r], e[r] = u;
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
  return Object.entries(s).forEach(([t, r]) => {
    if (r.type === "repeat") {
      const o = xt(r.questions);
      o && (e = o);
    }
    Lt(t) || (e = t);
  }), e;
}, Tt = (s) => {
  const e = Object.values(s);
  let t = [];
  const r = e.map((u, o) => e.find((p, v) => {
    if (p.type === "repeat" && (t = Tt(p.questions)), o !== v && p.id === u.id)
      return u;
  })).filter(Boolean);
  return t.length && r.push(...t), r;
}, nr = (s) => {
  var r;
  const e = Tt(s);
  if (e.length)
    throw new Error(`Duplicated id values: ${(r = e[0]) == null ? void 0 : r.id}`);
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
    const r = this.subscribers[e];
    r !== void 0 && Object.keys(r).forEach((u) => r[u](t));
  }
  register(e, t) {
    const r = this.getNextId();
    return this.subscribers[e] || (this.subscribers[e] = {}), this.subscribers[e][r] = t, {
      unregister: () => {
        delete this.subscribers[e][r], Object.keys(this.subscribers[e]).length === 0 && delete this.subscribers[e];
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
  let r;
  return s.type === "text" ? r = ft(s) : s.type === "date" ? r = ar(s) : s.type === "multipleChoice" ? r = lr(s) : s.type === "repeat" ? r = ur(s) : r = ft(s), {
    id: t,
    type: s.type,
    title: s.title || "",
    indications: s.indications || "",
    logic: s.logic || {},
    ...r
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
  return Object.entries(t).forEach(([r, u]) => {
    const o = e + 1;
    u.title && (u.title = u.title.replace(/\<%= index %>/g, o.toString()));
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
  (function(r, u) {
    s.exports = u();
  })(typeof self < "u" ? self : ct, function() {
    return (
      /******/
      function(t) {
        var r = {};
        function u(o) {
          if (r[o])
            return r[o].exports;
          var p = r[o] = {
            /******/
            i: o,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return t[o].call(p.exports, p, p.exports, u), p.l = !0, p.exports;
        }
        return u.m = t, u.c = r, u.d = function(o, p, v) {
          u.o(o, p) || Object.defineProperty(o, p, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: v
            /******/
          });
        }, u.n = function(o) {
          var p = o && o.__esModule ? (
            /******/
            function() {
              return o.default;
            }
          ) : (
            /******/
            function() {
              return o;
            }
          );
          return u.d(p, "a", p), p;
        }, u.o = function(o, p) {
          return Object.prototype.hasOwnProperty.call(o, p);
        }, u.p = "", u(u.s = 11);
      }([
        /* 0 */
        /***/
        function(t, _, u) {
          var o = Array.prototype, p = Object.prototype, v = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\\": "&#92;"
          }, O = /[&"'<>\\]/g, _ = t.exports = {};
          function T(w, S) {
            return p.hasOwnProperty.call(w, S);
          }
          _.hasOwnProp = T;
          function P(w) {
            return v[w];
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
            return p.toString.call(w) === "[object Function]";
          }
          _.isFunction = N;
          function n(w) {
            return p.toString.call(w) === "[object Array]";
          }
          _.isArray = n;
          function a(w) {
            return p.toString.call(w) === "[object String]";
          }
          _.isString = a;
          function l(w) {
            return p.toString.call(w) === "[object Object]";
          }
          _.isObject = l;
          function b(w) {
            return w ? typeof w == "string" ? w.split(".") : [w] : [];
          }
          function m(w) {
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
          _.getAttrGetter = m;
          function E(w, S, j) {
            for (var D = {}, $ = N(S) ? S : m(S), ne = 0; ne < w.length; ne++) {
              var z = w[ne], ue = $(z, ne);
              if (ue === void 0 && j === !0)
                throw new TypeError('groupby: attribute "' + S + '" resolved to undefined');
              (D[ue] || (D[ue] = [])).push(z);
            }
            return D;
          }
          _.groupBy = E;
          function i(w) {
            return Array.prototype.slice.call(w);
          }
          _.toArray = i;
          function c(w) {
            var S = [];
            if (!w)
              return S;
            for (var j = w.length, D = i(arguments).slice(1), $ = -1; ++$ < j; )
              A(D, w[$]) === -1 && S.push(w[$]);
            return S;
          }
          _.without = c;
          function d(w, S) {
            for (var j = "", D = 0; D < S; D++)
              j += w;
            return j;
          }
          _.repeat = d;
          function f(w, S, j) {
            if (w != null) {
              if (o.forEach && w.forEach === o.forEach)
                w.forEach(S, j);
              else if (w.length === +w.length)
                for (var D = 0, $ = w.length; D < $; D++)
                  S.call(j, w[D], D, w);
            }
          }
          _.each = f;
          function h(w, S) {
            var j = [];
            if (w == null)
              return j;
            if (o.map && w.map === o.map)
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
            if (n(S) || a(S))
              return S.indexOf(w) !== -1;
            if (l(S))
              return w in S;
            throw new Error('Cannot use "in" operator to search for "' + w + '" in unexpected types.');
          }
          _.inOperator = L;
        },
        /* 1 */
        /***/
        function(t, r, u) {
          function o(a, l) {
            for (var b = 0; b < l.length; b++) {
              var m = l[b];
              m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(a, v(m.key), m);
            }
          }
          function p(a, l, b) {
            return l && o(a.prototype, l), b && o(a, b), Object.defineProperty(a, "prototype", { writable: !1 }), a;
          }
          function v(a) {
            var l = O(a, "string");
            return typeof l == "symbol" ? l : String(l);
          }
          function O(a, l) {
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
          function _(a, l) {
            a.prototype = Object.create(l.prototype), a.prototype.constructor = a, T(a, l);
          }
          function T(a, l) {
            return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, E) {
              return m.__proto__ = E, m;
            }, T(a, l);
          }
          var P = u(16), M = u(0);
          function R(a, l) {
            return typeof a != "function" || typeof l != "function" ? l : function() {
              var m = this.parent;
              this.parent = a;
              var E = l.apply(this, arguments);
              return this.parent = m, E;
            };
          }
          function x(a, l, b) {
            b = b || {}, M.keys(b).forEach(function(E) {
              b[E] = R(a.prototype[E], b[E]);
            });
            var m = /* @__PURE__ */ function(E) {
              _(i, E);
              function i() {
                return E.apply(this, arguments) || this;
              }
              return p(i, [{
                key: "typename",
                get: function() {
                  return l;
                }
              }]), i;
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
              return typeof m == "object" && (E = m, m = "anonymous"), x(this, m, E);
            }, p(a, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), a;
          }(), n = /* @__PURE__ */ function(a) {
            _(l, a);
            function l() {
              var m, E;
              return E = a.call(this) || this, (m = E).init.apply(m, arguments), E;
            }
            var b = l.prototype;
            return b.init = function() {
            }, l.extend = function(E, i) {
              return typeof E == "object" && (i = E, E = "anonymous"), x(this, E, i);
            }, p(l, [{
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
        function(t, r, u) {
          var o = u(0), p = Array.from, v = typeof Symbol == "function" && Symbol.iterator && typeof p == "function", O = /* @__PURE__ */ function() {
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
          function a(h, y) {
            return h = h ?? "", y && !(h instanceof x) && (h = o.escape(h.toString())), h;
          }
          function l(h, y, g) {
            if (h == null)
              throw new o.TemplateError("attempted to output null or undefined value", y + 1, g + 1);
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
          function m(h, y, g, A) {
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
          function i(h, y, g) {
            return h.lineno ? h : new o.TemplateError(h, y, g);
          }
          function c(h, y, g, A) {
            if (o.isArray(h)) {
              var I = h.length;
              o.asyncIter(h, function(F, K, L) {
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
              o.asyncFor(h, function(F, K, L, w, S) {
                g(F, K, L, w, S);
              }, A);
          }
          function d(h, y, g, A) {
            var I = 0, C, F;
            function K($, ne) {
              I++, F[$] = ne, I === C && A(null, F.join(""));
            }
            if (o.isArray(h))
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
              var S = o.keys(h || {});
              if (C = S.length, F = new Array(C), C === 0)
                A(null, "");
              else
                for (var j = 0; j < S.length; j++) {
                  var D = S[j];
                  g(D, h[D], j, C, K);
                }
            }
          }
          function f(h) {
            return typeof h != "object" || h === null || o.isArray(h) ? h : v && Symbol.iterator in h ? p(h) : h;
          }
          t.exports = {
            Frame: O,
            makeMacro: _,
            makeKeywordArgs: T,
            numArgs: R,
            suppressValue: a,
            ensureDefined: l,
            memberLookup: b,
            contextOrFrameLookup: E,
            callWrap: m,
            handleError: i,
            isArray: o.isArray,
            keys: o.keys,
            SafeString: x,
            copySafeness: N,
            markSafe: n,
            asyncEach: c,
            asyncAll: d,
            inOperator: o.inOperator,
            fromIterator: f
          };
        },
        /* 3 */
        /***/
        function(t, r, u) {
          function o(H, Q) {
            for (var ie = 0; ie < Q.length; ie++) {
              var re = Q[ie];
              re.enumerable = re.enumerable || !1, re.configurable = !0, "value" in re && (re.writable = !0), Object.defineProperty(H, v(re.key), re);
            }
          }
          function p(H, Q, ie) {
            return Q && o(H.prototype, Q), ie && o(H, ie), Object.defineProperty(H, "prototype", { writable: !1 }), H;
          }
          function v(H) {
            var Q = O(H, "string");
            return typeof Q == "symbol" ? Q : String(Q);
          }
          function O(H, Q) {
            if (typeof H != "object" || H === null)
              return H;
            var ie = H[Symbol.toPrimitive];
            if (ie !== void 0) {
              var re = ie.call(H, Q || "default");
              if (typeof re != "object")
                return re;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (Q === "string" ? String : Number)(H);
          }
          function _(H, Q) {
            H.prototype = Object.create(Q.prototype), H.prototype.constructor = H, T(H, Q);
          }
          function T(H, Q) {
            return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(re, oe) {
              return re.__proto__ = oe, re;
            }, T(H, Q);
          }
          var P = u(1), M = P.Obj;
          function R(H, Q, ie) {
            H instanceof Q && ie.push(H), H instanceof x && H.findAll(Q, ie);
          }
          var x = /* @__PURE__ */ function(H) {
            _(Q, H);
            function Q() {
              return H.apply(this, arguments) || this;
            }
            var ie = Q.prototype;
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
            }, Q;
          }(M), N = /* @__PURE__ */ function(H) {
            _(Q, H);
            function Q() {
              return H.apply(this, arguments) || this;
            }
            return p(Q, [{
              key: "typename",
              get: function() {
                return "Value";
              }
            }, {
              key: "fields",
              get: function() {
                return ["value"];
              }
            }]), Q;
          }(x), n = /* @__PURE__ */ function(H) {
            _(Q, H);
            function Q() {
              return H.apply(this, arguments) || this;
            }
            var ie = Q.prototype;
            return ie.init = function(oe, ce, _e) {
              H.prototype.init.call(this, oe, ce, _e || []);
            }, ie.addChild = function(oe) {
              this.children.push(oe);
            }, p(Q, [{
              key: "typename",
              get: function() {
                return "NodeList";
              }
            }, {
              key: "fields",
              get: function() {
                return ["children"];
              }
            }]), Q;
          }(x), a = n.extend("Root"), l = N.extend("Literal"), b = N.extend("Symbol"), m = n.extend("Group"), E = n.extend("Array"), i = x.extend("Pair", {
            fields: ["key", "value"]
          }), c = n.extend("Dict"), d = x.extend("LookupVal", {
            fields: ["target", "val"]
          }), f = x.extend("If", {
            fields: ["cond", "body", "else_"]
          }), h = f.extend("IfAsync"), y = x.extend("InlineIf", {
            fields: ["cond", "body", "else_"]
          }), g = x.extend("For", {
            fields: ["arr", "name", "body", "else_"]
          }), A = g.extend("AsyncEach"), I = g.extend("AsyncAll"), C = x.extend("Macro", {
            fields: ["name", "args", "body"]
          }), F = C.extend("Caller"), K = x.extend("Import", {
            fields: ["template", "target", "withContext"]
          }), L = /* @__PURE__ */ function(H) {
            _(Q, H);
            function Q() {
              return H.apply(this, arguments) || this;
            }
            var ie = Q.prototype;
            return ie.init = function(oe, ce, _e, Se, Ie) {
              H.prototype.init.call(this, oe, ce, _e, Se || new n(), Ie);
            }, p(Q, [{
              key: "typename",
              get: function() {
                return "FromImport";
              }
            }, {
              key: "fields",
              get: function() {
                return ["template", "names", "withContext"];
              }
            }]), Q;
          }(x), w = x.extend("FunCall", {
            fields: ["name", "args"]
          }), S = w.extend("Filter"), j = S.extend("FilterAsync", {
            fields: ["name", "args", "symbol"]
          }), D = c.extend("KeywordArgs"), $ = x.extend("Block", {
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
          }), Oe = fe.extend("In"), k = fe.extend("Is"), B = fe.extend("Or"), V = fe.extend("And"), U = ye.extend("Not"), Y = fe.extend("Add"), J = fe.extend("Concat"), ae = fe.extend("Sub"), ee = fe.extend("Mul"), le = fe.extend("Div"), we = fe.extend("FloorDiv"), be = fe.extend("Mod"), ke = fe.extend("Pow"), Nt = ye.extend("Neg"), Ct = ye.extend("Pos"), Rt = x.extend("Compare", {
            fields: ["expr", "ops"]
          }), It = x.extend("CompareOperand", {
            fields: ["expr", "type"]
          }), rt = x.extend("CallExtension", {
            init: function(Q, ie, re, oe) {
              this.parent(), this.extName = Q.__name || Q, this.prop = ie, this.args = re || new n(), this.contentArgs = oe || [], this.autoescape = Q.autoescape;
            },
            fields: ["extName", "prop", "args", "contentArgs"]
          }), Pt = rt.extend("CallExtensionAsync");
          function Ce(H, Q, ie) {
            var re = H.split(`
`);
            re.forEach(function(oe, ce) {
              oe && (ie && ce > 0 || !ie) && process.stdout.write(" ".repeat(Q));
              var _e = ce === re.length - 1 ? "" : `
`;
              process.stdout.write("" + oe + _e);
            });
          }
          function Re(H, Q) {
            if (Q = Q || 0, Ce(H.typename + ": ", Q), H instanceof n)
              Ce(`
`), H.children.forEach(function(oe) {
                Re(oe, Q + 2);
              });
            else if (H instanceof rt)
              Ce(H.extName + "." + H.prop + `
`), H.args && Re(H.args, Q + 2), H.contentArgs && H.contentArgs.forEach(function(oe) {
                Re(oe, Q + 2);
              });
            else {
              var ie = [], re = null;
              H.iterFields(function(oe, ce) {
                oe instanceof x ? ie.push([ce, oe]) : (re = re || {}, re[ce] = oe);
              }), re ? Ce(JSON.stringify(re, null, 2) + `
`, null, !0) : Ce(`
`), ie.forEach(function(oe) {
                var ce = oe[0], _e = oe[1];
                Ce("[" + ce + "] =>", Q + 2), Re(_e, Q + 4);
              });
            }
          }
          t.exports = {
            Node: x,
            Root: a,
            NodeList: n,
            Value: N,
            Literal: l,
            Symbol: b,
            Group: m,
            Array: E,
            Pair: i,
            Dict: c,
            Output: G,
            Capture: W,
            TemplateData: se,
            If: f,
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
            LookupVal: d,
            BinOp: fe,
            In: Oe,
            Is: k,
            Or: B,
            And: V,
            Not: U,
            Add: Y,
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
        function(t, r) {
        },
        /* 5 */
        /***/
        function(t, r, u) {
          function o(l, b) {
            l.prototype = Object.create(b.prototype), l.prototype.constructor = l, p(l, b);
          }
          function p(l, b) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(E, i) {
              return E.__proto__ = i, E;
            }, p(l, b);
          }
          var v = u(8), O = u(17), _ = u(3), T = u(0), P = T.TemplateError, M = u(2), R = M.Frame, x = u(1), N = x.Obj, n = {
            "==": "==",
            "===": "===",
            "!=": "!=",
            "!==": "!==",
            "<": "<",
            ">": ">",
            "<=": "<=",
            ">=": ">="
          }, a = /* @__PURE__ */ function(l) {
            o(b, l);
            function b() {
              return l.apply(this, arguments) || this;
            }
            var m = b.prototype;
            return m.init = function(i, c) {
              this.templateName = i, this.codebuf = [], this.lastId = 0, this.buffer = null, this.bufferStack = [], this._scopeClosers = "", this.inBlock = !1, this.throwOnUndefined = c;
            }, m.fail = function(i, c, d) {
              throw c !== void 0 && (c += 1), d !== void 0 && (d += 1), new P(i, c, d);
            }, m._pushBuffer = function() {
              var i = this._tmpid();
              return this.bufferStack.push(this.buffer), this.buffer = i, this._emit("var " + this.buffer + ' = "";'), i;
            }, m._popBuffer = function() {
              this.buffer = this.bufferStack.pop();
            }, m._emit = function(i) {
              this.codebuf.push(i);
            }, m._emitLine = function(i) {
              this._emit(i + `
`);
            }, m._emitLines = function() {
              for (var i = this, c = arguments.length, d = new Array(c), f = 0; f < c; f++)
                d[f] = arguments[f];
              d.forEach(function(h) {
                return i._emitLine(h);
              });
            }, m._emitFuncBegin = function(i, c) {
              this.buffer = "output", this._scopeClosers = "", this._emitLine("function " + c + "(env, context, frame, runtime, cb) {"), this._emitLine("var lineno = " + i.lineno + ";"), this._emitLine("var colno = " + i.colno + ";"), this._emitLine("var " + this.buffer + ' = "";'), this._emitLine("try {");
            }, m._emitFuncEnd = function(i) {
              i || this._emitLine("cb(null, " + this.buffer + ");"), this._closeScopeLevels(), this._emitLine("} catch (e) {"), this._emitLine("  cb(runtime.handleError(e, lineno, colno));"), this._emitLine("}"), this._emitLine("}"), this.buffer = null;
            }, m._addScopeLevel = function() {
              this._scopeClosers += "})";
            }, m._closeScopeLevels = function() {
              this._emitLine(this._scopeClosers + ";"), this._scopeClosers = "";
            }, m._withScopedSyntax = function(i) {
              var c = this._scopeClosers;
              this._scopeClosers = "", i.call(this), this._closeScopeLevels(), this._scopeClosers = c;
            }, m._makeCallback = function(i) {
              var c = this._tmpid();
              return "function(" + c + (i ? "," + i : "") + `) {
if(` + c + ") { cb(" + c + "); return; }";
            }, m._tmpid = function() {
              return this.lastId++, "t_" + this.lastId;
            }, m._templateName = function() {
              return this.templateName == null ? "undefined" : JSON.stringify(this.templateName);
            }, m._compileChildren = function(i, c) {
              var d = this;
              i.children.forEach(function(f) {
                d.compile(f, c);
              });
            }, m._compileAggregate = function(i, c, d, f) {
              var h = this;
              d && this._emit(d), i.children.forEach(function(y, g) {
                g > 0 && h._emit(","), h.compile(y, c);
              }), f && this._emit(f);
            }, m._compileExpression = function(i, c) {
              this.assertType(i, _.Literal, _.Symbol, _.Group, _.Array, _.Dict, _.FunCall, _.Caller, _.Filter, _.LookupVal, _.Compare, _.InlineIf, _.In, _.Is, _.And, _.Or, _.Not, _.Add, _.Concat, _.Sub, _.Mul, _.Div, _.FloorDiv, _.Mod, _.Pow, _.Neg, _.Pos, _.Compare, _.NodeList), this.compile(i, c);
            }, m.assertType = function(i) {
              for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
                d[f - 1] = arguments[f];
              d.some(function(h) {
                return i instanceof h;
              }) || this.fail("assertType: invalid type: " + i.typename, i.lineno, i.colno);
            }, m.compileCallExtension = function(i, c, d) {
              var f = this, h = i.args, y = i.contentArgs, g = typeof i.autoescape == "boolean" ? i.autoescape : !0;
              if (d || this._emit(this.buffer + " += runtime.suppressValue("), this._emit('env.getExtension("' + i.extName + '")["' + i.prop + '"]('), this._emit("context"), (h || y) && this._emit(","), h && (h instanceof _.NodeList || this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"), h.children.forEach(function(I, C) {
                f._compileExpression(I, c), (C !== h.children.length - 1 || y.length) && f._emit(",");
              })), y.length && y.forEach(function(I, C) {
                if (C > 0 && f._emit(","), I) {
                  f._emitLine("function(cb) {"), f._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");
                  var F = f._pushBuffer();
                  f._withScopedSyntax(function() {
                    f.compile(I, c), f._emitLine("cb(null, " + F + ");");
                  }), f._popBuffer(), f._emitLine("return " + F + ";"), f._emitLine("}");
                } else
                  f._emit("null");
              }), d) {
                var A = this._tmpid();
                this._emitLine(", " + this._makeCallback(A)), this._emitLine(this.buffer + " += runtime.suppressValue(" + A + ", " + g + " && env.opts.autoescape);"), this._addScopeLevel();
              } else
                this._emit(")"), this._emit(", " + g + ` && env.opts.autoescape);
`);
            }, m.compileCallExtensionAsync = function(i, c) {
              this.compileCallExtension(i, c, !0);
            }, m.compileNodeList = function(i, c) {
              this._compileChildren(i, c);
            }, m.compileLiteral = function(i) {
              if (typeof i.value == "string") {
                var c = i.value.replace(/\\/g, "\\\\");
                c = c.replace(/"/g, '\\"'), c = c.replace(/\n/g, "\\n"), c = c.replace(/\r/g, "\\r"), c = c.replace(/\t/g, "\\t"), c = c.replace(/\u2028/g, "\\u2028"), this._emit('"' + c + '"');
              } else
                i.value === null ? this._emit("null") : this._emit(i.value.toString());
            }, m.compileSymbol = function(i, c) {
              var d = i.value, f = c.lookup(d);
              f ? this._emit(f) : this._emit('runtime.contextOrFrameLookup(context, frame, "' + d + '")');
            }, m.compileGroup = function(i, c) {
              this._compileAggregate(i, c, "(", ")");
            }, m.compileArray = function(i, c) {
              this._compileAggregate(i, c, "[", "]");
            }, m.compileDict = function(i, c) {
              this._compileAggregate(i, c, "{", "}");
            }, m.compilePair = function(i, c) {
              var d = i.key, f = i.value;
              d instanceof _.Symbol ? d = new _.Literal(d.lineno, d.colno, d.value) : d instanceof _.Literal && typeof d.value == "string" || this.fail("compilePair: Dict keys must be strings or names", d.lineno, d.colno), this.compile(d, c), this._emit(": "), this._compileExpression(f, c);
            }, m.compileInlineIf = function(i, c) {
              this._emit("("), this.compile(i.cond, c), this._emit("?"), this.compile(i.body, c), this._emit(":"), i.else_ !== null ? this.compile(i.else_, c) : this._emit('""'), this._emit(")");
            }, m.compileIn = function(i, c) {
              this._emit("runtime.inOperator("), this.compile(i.left, c), this._emit(","), this.compile(i.right, c), this._emit(")");
            }, m.compileIs = function(i, c) {
              var d = i.right.name ? i.right.name.value : i.right.value;
              this._emit('env.getTest("' + d + '").call(context, '), this.compile(i.left, c), i.right.args && (this._emit(","), this.compile(i.right.args, c)), this._emit(") === true");
            }, m._binOpEmitter = function(i, c, d) {
              this.compile(i.left, c), this._emit(d), this.compile(i.right, c);
            }, m.compileOr = function(i, c) {
              return this._binOpEmitter(i, c, " || ");
            }, m.compileAnd = function(i, c) {
              return this._binOpEmitter(i, c, " && ");
            }, m.compileAdd = function(i, c) {
              return this._binOpEmitter(i, c, " + ");
            }, m.compileConcat = function(i, c) {
              return this._binOpEmitter(i, c, ' + "" + ');
            }, m.compileSub = function(i, c) {
              return this._binOpEmitter(i, c, " - ");
            }, m.compileMul = function(i, c) {
              return this._binOpEmitter(i, c, " * ");
            }, m.compileDiv = function(i, c) {
              return this._binOpEmitter(i, c, " / ");
            }, m.compileMod = function(i, c) {
              return this._binOpEmitter(i, c, " % ");
            }, m.compileNot = function(i, c) {
              this._emit("!"), this.compile(i.target, c);
            }, m.compileFloorDiv = function(i, c) {
              this._emit("Math.floor("), this.compile(i.left, c), this._emit(" / "), this.compile(i.right, c), this._emit(")");
            }, m.compilePow = function(i, c) {
              this._emit("Math.pow("), this.compile(i.left, c), this._emit(", "), this.compile(i.right, c), this._emit(")");
            }, m.compileNeg = function(i, c) {
              this._emit("-"), this.compile(i.target, c);
            }, m.compilePos = function(i, c) {
              this._emit("+"), this.compile(i.target, c);
            }, m.compileCompare = function(i, c) {
              var d = this;
              this.compile(i.expr, c), i.ops.forEach(function(f) {
                d._emit(" " + n[f.type] + " "), d.compile(f.expr, c);
              });
            }, m.compileLookupVal = function(i, c) {
              this._emit("runtime.memberLookup(("), this._compileExpression(i.target, c), this._emit("),"), this._compileExpression(i.val, c), this._emit(")");
            }, m._getNodeName = function(i) {
              switch (i.typename) {
                case "Symbol":
                  return i.value;
                case "FunCall":
                  return "the return value of (" + this._getNodeName(i.name) + ")";
                case "LookupVal":
                  return this._getNodeName(i.target) + '["' + this._getNodeName(i.val) + '"]';
                case "Literal":
                  return i.value.toString();
                default:
                  return "--expression--";
              }
            }, m.compileFunCall = function(i, c) {
              this._emit("(lineno = " + i.lineno + ", colno = " + i.colno + ", "), this._emit("runtime.callWrap("), this._compileExpression(i.name, c), this._emit(', "' + this._getNodeName(i.name).replace(/"/g, '\\"') + '", context, '), this._compileAggregate(i.args, c, "[", "])"), this._emit(")");
            }, m.compileFilter = function(i, c) {
              var d = i.name;
              this.assertType(d, _.Symbol), this._emit('env.getFilter("' + d.value + '").call(context, '), this._compileAggregate(i.args, c), this._emit(")");
            }, m.compileFilterAsync = function(i, c) {
              var d = i.name, f = i.symbol.value;
              this.assertType(d, _.Symbol), c.set(f, f), this._emit('env.getFilter("' + d.value + '").call(context, '), this._compileAggregate(i.args, c), this._emitLine(", " + this._makeCallback(f)), this._addScopeLevel();
            }, m.compileKeywordArgs = function(i, c) {
              this._emit("runtime.makeKeywordArgs("), this.compileDict(i, c), this._emit(")");
            }, m.compileSet = function(i, c) {
              var d = this, f = [];
              i.targets.forEach(function(h) {
                var y = h.value, g = c.lookup(y);
                g == null && (g = d._tmpid(), d._emitLine("var " + g + ";")), f.push(g);
              }), i.value ? (this._emit(f.join(" = ") + " = "), this._compileExpression(i.value, c), this._emitLine(";")) : (this._emit(f.join(" = ") + " = "), this.compile(i.body, c), this._emitLine(";")), i.targets.forEach(function(h, y) {
                var g = f[y], A = h.value;
                d._emitLine('frame.set("' + A + '", ' + g + ", true);"), d._emitLine("if(frame.topLevel) {"), d._emitLine('context.setVariable("' + A + '", ' + g + ");"), d._emitLine("}"), A.charAt(0) !== "_" && (d._emitLine("if(frame.topLevel) {"), d._emitLine('context.addExport("' + A + '", ' + g + ");"), d._emitLine("}"));
              });
            }, m.compileSwitch = function(i, c) {
              var d = this;
              this._emit("switch ("), this.compile(i.expr, c), this._emit(") {"), i.cases.forEach(function(f, h) {
                d._emit("case "), d.compile(f.cond, c), d._emit(": "), d.compile(f.body, c), f.body.children.length && d._emitLine("break;");
              }), i.default && (this._emit("default:"), this.compile(i.default, c)), this._emit("}");
            }, m.compileIf = function(i, c, d) {
              var f = this;
              this._emit("if("), this._compileExpression(i.cond, c), this._emitLine(") {"), this._withScopedSyntax(function() {
                f.compile(i.body, c), d && f._emit("cb()");
              }), i.else_ ? (this._emitLine(`}
else {`), this._withScopedSyntax(function() {
                f.compile(i.else_, c), d && f._emit("cb()");
              })) : d && (this._emitLine(`}
else {`), this._emit("cb()")), this._emitLine("}");
            }, m.compileIfAsync = function(i, c) {
              this._emit("(function(cb) {"), this.compileIf(i, c, !0), this._emit("})(" + this._makeCallback()), this._addScopeLevel();
            }, m._emitLoopBindings = function(i, c, d, f) {
              var h = this, y = [{
                name: "index",
                val: d + " + 1"
              }, {
                name: "index0",
                val: d
              }, {
                name: "revindex",
                val: f + " - " + d
              }, {
                name: "revindex0",
                val: f + " - " + d + " - 1"
              }, {
                name: "first",
                val: d + " === 0"
              }, {
                name: "last",
                val: d + " === " + f + " - 1"
              }, {
                name: "length",
                val: f
              }];
              y.forEach(function(g) {
                h._emitLine('frame.set("loop.' + g.name + '", ' + g.val + ");");
              });
            }, m.compileFor = function(i, c) {
              var d = this, f = this._tmpid(), h = this._tmpid(), y = this._tmpid();
              if (c = c.push(), this._emitLine("frame = frame.push();"), this._emit("var " + y + " = "), this._compileExpression(i.arr, c), this._emitLine(";"), this._emit("if(" + y + ") {"), this._emitLine(y + " = runtime.fromIterator(" + y + ");"), i.name instanceof _.Array) {
                this._emitLine("var " + f + ";"), this._emitLine("if(runtime.isArray(" + y + ")) {"), this._emitLine("var " + h + " = " + y + ".length;"), this._emitLine("for(" + f + "=0; " + f + " < " + y + ".length; " + f + "++) {"), i.name.children.forEach(function(L, w) {
                  var S = d._tmpid();
                  d._emitLine("var " + S + " = " + y + "[" + f + "][" + w + "];"), d._emitLine('frame.set("' + L + '", ' + y + "[" + f + "][" + w + "]);"), c.set(i.name.children[w].value, S);
                }), this._emitLoopBindings(i, y, f, h), this._withScopedSyntax(function() {
                  d.compile(i.body, c);
                }), this._emitLine("}"), this._emitLine("} else {");
                var g = i.name.children, A = g[0], I = g[1], C = this._tmpid(), F = this._tmpid();
                c.set(A.value, C), c.set(I.value, F), this._emitLine(f + " = -1;"), this._emitLine("var " + h + " = runtime.keys(" + y + ").length;"), this._emitLine("for(var " + C + " in " + y + ") {"), this._emitLine(f + "++;"), this._emitLine("var " + F + " = " + y + "[" + C + "];"), this._emitLine('frame.set("' + A.value + '", ' + C + ");"), this._emitLine('frame.set("' + I.value + '", ' + F + ");"), this._emitLoopBindings(i, y, f, h), this._withScopedSyntax(function() {
                  d.compile(i.body, c);
                }), this._emitLine("}"), this._emitLine("}");
              } else {
                var K = this._tmpid();
                c.set(i.name.value, K), this._emitLine("var " + h + " = " + y + ".length;"), this._emitLine("for(var " + f + "=0; " + f + " < " + y + ".length; " + f + "++) {"), this._emitLine("var " + K + " = " + y + "[" + f + "];"), this._emitLine('frame.set("' + i.name.value + '", ' + K + ");"), this._emitLoopBindings(i, y, f, h), this._withScopedSyntax(function() {
                  d.compile(i.body, c);
                }), this._emitLine("}");
              }
              this._emitLine("}"), i.else_ && (this._emitLine("if (!" + h + ") {"), this.compile(i.else_, c), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, m._compileAsyncLoop = function(i, c, d) {
              var f = this, h = this._tmpid(), y = this._tmpid(), g = this._tmpid(), A = d ? "asyncAll" : "asyncEach";
              if (c = c.push(), this._emitLine("frame = frame.push();"), this._emit("var " + g + " = runtime.fromIterator("), this._compileExpression(i.arr, c), this._emitLine(");"), i.name instanceof _.Array) {
                var I = i.name.children.length;
                this._emit("runtime." + A + "(" + g + ", " + I + ", function("), i.name.children.forEach(function(K) {
                  f._emit(K.value + ",");
                }), this._emit(h + "," + y + ",next) {"), i.name.children.forEach(function(K) {
                  var L = K.value;
                  c.set(L, L), f._emitLine('frame.set("' + L + '", ' + L + ");");
                });
              } else {
                var C = i.name.value;
                this._emitLine("runtime." + A + "(" + g + ", 1, function(" + C + ", " + h + ", " + y + ",next) {"), this._emitLine('frame.set("' + C + '", ' + C + ");"), c.set(C, C);
              }
              this._emitLoopBindings(i, g, h, y), this._withScopedSyntax(function() {
                var K;
                d && (K = f._pushBuffer()), f.compile(i.body, c), f._emitLine("next(" + h + (K ? "," + K : "") + ");"), d && f._popBuffer();
              });
              var F = this._tmpid();
              this._emitLine("}, " + this._makeCallback(F)), this._addScopeLevel(), d && this._emitLine(this.buffer + " += " + F + ";"), i.else_ && (this._emitLine("if (!" + g + ".length) {"), this.compile(i.else_, c), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, m.compileAsyncEach = function(i, c) {
              this._compileAsyncLoop(i, c);
            }, m.compileAsyncAll = function(i, c) {
              this._compileAsyncLoop(i, c, !0);
            }, m._compileMacro = function(i, c) {
              var d = this, f = [], h = null, y = "macro_" + this._tmpid(), g = c !== void 0;
              i.args.children.forEach(function(L, w) {
                w === i.args.children.length - 1 && L instanceof _.Dict ? h = L : (d.assertType(L, _.Symbol), f.push(L));
              });
              var A = [].concat(f.map(function(L) {
                return "l_" + L.value;
              }), ["kwargs"]), I = f.map(function(L) {
                return '"' + L.value + '"';
              }), C = (h && h.children || []).map(function(L) {
                return '"' + L.key.value + '"';
              }), F;
              g ? F = c.push(!0) : F = new R(), this._emitLines("var " + y + " = runtime.makeMacro(", "[" + I.join(", ") + "], ", "[" + C.join(", ") + "], ", "function (" + A.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (g ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'), f.forEach(function(L) {
                d._emitLine('frame.set("' + L.value + '", l_' + L.value + ");"), F.set(L.value, "l_" + L.value);
              }), h && h.children.forEach(function(L) {
                var w = L.key.value;
                d._emit('frame.set("' + w + '", '), d._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + w + '")'), d._emit(' ? kwargs["' + w + '"] : '), d._compileExpression(L.value, F), d._emit(");");
              });
              var K = this._pushBuffer();
              return this._withScopedSyntax(function() {
                d.compile(i.body, F);
              }), this._emitLine("frame = " + (g ? "frame.pop();" : "callerFrame;")), this._emitLine("return new runtime.SafeString(" + K + ");"), this._emitLine("});"), this._popBuffer(), y;
            }, m.compileMacro = function(i, c) {
              var d = this._compileMacro(i), f = i.name.value;
              c.set(f, d), c.parent ? this._emitLine('frame.set("' + f + '", ' + d + ");") : (i.name.value.charAt(0) !== "_" && this._emitLine('context.addExport("' + f + '");'), this._emitLine('context.setVariable("' + f + '", ' + d + ");"));
            }, m.compileCaller = function(i, c) {
              this._emit("(function (){");
              var d = this._compileMacro(i, c);
              this._emit("return " + d + ";})()");
            }, m._compileGetTemplate = function(i, c, d, f) {
              var h = this._tmpid(), y = this._templateName(), g = this._makeCallback(h), A = d ? "true" : "false", I = f ? "true" : "false";
              return this._emit("env.getTemplate("), this._compileExpression(i.template, c), this._emitLine(", " + A + ", " + y + ", " + I + ", " + g), h;
            }, m.compileImport = function(i, c) {
              var d = i.target.value, f = this._compileGetTemplate(i, c, !1, !1);
              this._addScopeLevel(), this._emitLine(f + ".getExported(" + (i.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(f)), this._addScopeLevel(), c.set(d, f), c.parent ? this._emitLine('frame.set("' + d + '", ' + f + ");") : this._emitLine('context.setVariable("' + d + '", ' + f + ");");
            }, m.compileFromImport = function(i, c) {
              var d = this, f = this._compileGetTemplate(i, c, !1, !1);
              this._addScopeLevel(), this._emitLine(f + ".getExported(" + (i.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(f)), this._addScopeLevel(), i.names.children.forEach(function(h) {
                var y, g, A = d._tmpid();
                h instanceof _.Pair ? (y = h.key.value, g = h.value.value) : (y = h.value, g = y), d._emitLine("if(Object.prototype.hasOwnProperty.call(" + f + ', "' + y + '")) {'), d._emitLine("var " + A + " = " + f + "." + y + ";"), d._emitLine("} else {"), d._emitLine(`cb(new Error("cannot import '` + y + `'")); return;`), d._emitLine("}"), c.set(g, A), c.parent ? d._emitLine('frame.set("' + g + '", ' + A + ");") : d._emitLine('context.setVariable("' + g + '", ' + A + ");");
              });
            }, m.compileBlock = function(i) {
              var c = this._tmpid();
              this.inBlock || this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '), this._emit('context.getBlock("' + i.name.value + '")'), this.inBlock || this._emit(")"), this._emitLine("(env, context, frame, runtime, " + this._makeCallback(c)), this._emitLine(this.buffer + " += " + c + ";"), this._addScopeLevel();
            }, m.compileSuper = function(i, c) {
              var d = i.blockName.value, f = i.symbol.value, h = this._makeCallback(f);
              this._emitLine('context.getSuper(env, "' + d + '", b_' + d + ", frame, runtime, " + h), this._emitLine(f + " = runtime.markSafe(" + f + ");"), this._addScopeLevel(), c.set(f, f);
            }, m.compileExtends = function(i, c) {
              var d = this._tmpid(), f = this._compileGetTemplate(i, c, !0, !1);
              this._emitLine("parentTemplate = " + f), this._emitLine("for(var " + d + " in parentTemplate.blocks) {"), this._emitLine("context.addBlock(" + d + ", parentTemplate.blocks[" + d + "]);"), this._emitLine("}"), this._addScopeLevel();
            }, m.compileInclude = function(i, c) {
              this._emitLine("var tasks = [];"), this._emitLine("tasks.push("), this._emitLine("function(callback) {");
              var d = this._compileGetTemplate(i, c, !1, i.ignoreMissing);
              this._emitLine("callback(null," + d + ");});"), this._emitLine("});");
              var f = this._tmpid();
              this._emitLine("tasks.push("), this._emitLine("function(template, callback){"), this._emitLine("template.render(context.getVariables(), frame, " + this._makeCallback(f)), this._emitLine("callback(null," + f + ");});"), this._emitLine("});"), this._emitLine("tasks.push("), this._emitLine("function(result, callback){"), this._emitLine(this.buffer + " += result;"), this._emitLine("callback(null);"), this._emitLine("});"), this._emitLine("env.waterfall(tasks, function(){"), this._addScopeLevel();
            }, m.compileTemplateData = function(i, c) {
              this.compileLiteral(i, c);
            }, m.compileCapture = function(i, c) {
              var d = this, f = this.buffer;
              this.buffer = "output", this._emitLine("(function() {"), this._emitLine('var output = "";'), this._withScopedSyntax(function() {
                d.compile(i.body, c);
              }), this._emitLine("return output;"), this._emitLine("})()"), this.buffer = f;
            }, m.compileOutput = function(i, c) {
              var d = this, f = i.children;
              f.forEach(function(h) {
                h instanceof _.TemplateData ? h.value && (d._emit(d.buffer + " += "), d.compileLiteral(h, c), d._emitLine(";")) : (d._emit(d.buffer + " += runtime.suppressValue("), d.throwOnUndefined && d._emit("runtime.ensureDefined("), d.compile(h, c), d.throwOnUndefined && d._emit("," + i.lineno + "," + i.colno + ")"), d._emit(`, env.opts.autoescape);
`));
              });
            }, m.compileRoot = function(i, c) {
              var d = this;
              c && this.fail("compileRoot: root node can't have frame"), c = new R(), this._emitFuncBegin(i, "root"), this._emitLine("var parentTemplate = null;"), this._compileChildren(i, c), this._emitLine("if(parentTemplate) {"), this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"), this._emitLine("} else {"), this._emitLine("cb(null, " + this.buffer + ");"), this._emitLine("}"), this._emitFuncEnd(!0), this.inBlock = !0;
              var f = [], h = i.findAll(_.Block);
              h.forEach(function(y, g) {
                var A = y.name.value;
                if (f.indexOf(A) !== -1)
                  throw new Error('Block "' + A + '" defined more than once.');
                f.push(A), d._emitFuncBegin(y, "b_" + A);
                var I = new R();
                d._emitLine("var frame = frame.push(true);"), d.compile(y.body, I), d._emitFuncEnd();
              }), this._emitLine("return {"), h.forEach(function(y, g) {
                var A = "b_" + y.name.value;
                d._emitLine(A + ": " + A + ",");
              }), this._emitLine(`root: root
};`);
            }, m.compile = function(i, c) {
              var d = this["compile" + i.typename];
              d ? d.call(this, i, c) : this.fail("compile: Cannot compile node: " + i.typename, i.lineno, i.colno);
            }, m.getCode = function() {
              return this.codebuf.join("");
            }, b;
          }(N);
          t.exports = {
            compile: function(b, m, E, i, c) {
              c === void 0 && (c = {});
              var d = new a(i, c.throwOnUndefined), f = (E || []).map(function(y) {
                return y.preprocess;
              }).filter(function(y) {
                return !!y;
              }), h = f.reduce(function(y, g) {
                return g(y);
              }, b);
              return d.compile(O.transform(v.parse(h, E, c), m, i)), d.getCode();
            },
            Compiler: a
          };
        },
        /* 6 */
        /***/
        function(t, r, u) {
          function o(T, P) {
            T.prototype = Object.create(P.prototype), T.prototype.constructor = T, p(T, P);
          }
          function p(T, P) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(R, x) {
              return R.__proto__ = x, R;
            }, p(T, P);
          }
          var v = u(4), O = u(1), _ = O.EmitterObj;
          t.exports = /* @__PURE__ */ function(T) {
            o(P, T);
            function P() {
              return T.apply(this, arguments) || this;
            }
            var M = P.prototype;
            return M.resolve = function(x, N) {
              return v.resolve(v.dirname(x), N);
            }, M.isRelative = function(x) {
              return x.indexOf("./") === 0 || x.indexOf("../") === 0;
            }, P;
          }(_);
        },
        /* 7 */
        /***/
        function(t, r, u) {
          function o(I, C) {
            I.prototype = Object.create(C.prototype), I.prototype.constructor = I, p(I, C);
          }
          function p(I, C) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(K, L) {
              return K.__proto__ = L, K;
            }, p(I, C);
          }
          var v = u(12), O = u(15), _ = u(0), T = u(5), P = u(18), M = u(10), R = M.FileSystemLoader, x = M.WebLoader, N = M.PrecompiledLoader, n = u(20), a = u(21), l = u(1), b = l.Obj, m = l.EmitterObj, E = u(2), i = E.handleError, c = E.Frame, d = u(22);
          function f(I, C, F) {
            v(function() {
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
                  w(i(S, null, null));
                }
              }
            }
          }, y = /* @__PURE__ */ function(I) {
            o(C, I);
            function C() {
              return I.apply(this, arguments) || this;
            }
            var F = C.prototype;
            return F.init = function(L, w) {
              var S = this;
              w = this.opts = w || {}, this.opts.dev = !!w.dev, this.opts.autoescape = w.autoescape != null ? w.autoescape : !0, this.opts.throwOnUndefined = !!w.throwOnUndefined, this.opts.trimBlocks = !!w.trimBlocks, this.opts.lstripBlocks = !!w.lstripBlocks, this.loaders = [], L ? this.loaders = _.isArray(L) ? L : [L] : R ? this.loaders = [new R("views")] : x && (this.loaders = [new x("/views")]), typeof window < "u" && window.nunjucksPrecompiled && this.loaders.unshift(new N(window.nunjucksPrecompiled)), this._initLoaders(), this.globals = a(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], _._entries(P).forEach(function(j) {
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
              return d(this, L);
            }, F.render = function(L, w, S) {
              _.isFunction(w) && (S = w, w = null);
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
            }, F.renderString = function(L, w, S, j) {
              _.isFunction(S) && (j = S, S = {}), S = S || {};
              var D = new A(L, this, S.path);
              return D.render(w, j);
            }, F.waterfall = function(L, w, S) {
              return O(L, w, S);
            }, C;
          }(m), g = /* @__PURE__ */ function(I) {
            o(C, I);
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
            o(C, I);
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
                  return f(S, $);
                throw $;
              }
              var ne = new g(L || {}, this.blocks, this.env), z = w ? w.push(!0) : new c();
              z.topLevel = !0;
              var ue = null, he = !1;
              return this.rootRenderFunc(this.env, ne, z, E, function(X, Z) {
                if (!(he && S && typeof Z < "u"))
                  if (X && (X = _._prettifyError(j.path, j.env.opts.dev, X), he = !0), S)
                    D ? f(S, X, Z) : S(X, Z);
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
              var j = w ? w.push() : new c();
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
        function(t, r, u) {
          function o(M, R) {
            M.prototype = Object.create(R.prototype), M.prototype.constructor = M, p(M, R);
          }
          function p(M, R) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(N, n) {
              return N.__proto__ = n, N;
            }, p(M, R);
          }
          var v = u(9), O = u(3), _ = u(1).Obj, T = u(0), P = /* @__PURE__ */ function(M) {
            o(R, M);
            function R() {
              return M.apply(this, arguments) || this;
            }
            var x = R.prototype;
            return x.init = function(n) {
              this.tokens = n, this.peeked = null, this.breakOnBlocks = null, this.dropLeadingWhitespace = !1, this.extensions = [];
            }, x.nextToken = function(n) {
              var a;
              if (this.peeked)
                if (!n && this.peeked.type === v.TOKEN_WHITESPACE)
                  this.peeked = null;
                else
                  return a = this.peeked, this.peeked = null, a;
              if (a = this.tokens.nextToken(), !n)
                for (; a && a.type === v.TOKEN_WHITESPACE; )
                  a = this.tokens.nextToken();
              return a;
            }, x.peekToken = function() {
              return this.peeked = this.peeked || this.nextToken(), this.peeked;
            }, x.pushToken = function(n) {
              if (this.peeked)
                throw new Error("pushToken: can only push one token on between reads");
              this.peeked = n;
            }, x.error = function(n, a, l) {
              if (a === void 0 || l === void 0) {
                var b = this.peekToken() || {};
                a = b.lineno, l = b.colno;
              }
              return a !== void 0 && (a += 1), l !== void 0 && (l += 1), new T.TemplateError(n, a, l);
            }, x.fail = function(n, a, l) {
              throw this.error(n, a, l);
            }, x.skip = function(n) {
              var a = this.nextToken();
              return !a || a.type !== n ? (this.pushToken(a), !1) : !0;
            }, x.expect = function(n) {
              var a = this.nextToken();
              return a.type !== n && this.fail("expected " + n + ", got " + a.type, a.lineno, a.colno), a;
            }, x.skipValue = function(n, a) {
              var l = this.nextToken();
              return !l || l.type !== n || l.value !== a ? (this.pushToken(l), !1) : !0;
            }, x.skipSymbol = function(n) {
              return this.skipValue(v.TOKEN_SYMBOL, n);
            }, x.advanceAfterBlockEnd = function(n) {
              var a;
              return n || (a = this.peekToken(), a || this.fail("unexpected end of file"), a.type !== v.TOKEN_SYMBOL && this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"), n = this.nextToken().value), a = this.nextToken(), a && a.type === v.TOKEN_BLOCK_END ? a.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0) : this.fail("expected block end in " + n + " statement"), a;
            }, x.advanceAfterVariableEnd = function() {
              var n = this.nextToken();
              n && n.type === v.TOKEN_VARIABLE_END ? this.dropLeadingWhitespace = n.value.charAt(n.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-" : (this.pushToken(n), this.fail("expected variable end"));
            }, x.parseFor = function() {
              var n = this.peekToken(), a, l;
              this.skipSymbol("for") ? (a = new O.For(n.lineno, n.colno), l = "endfor") : this.skipSymbol("asyncEach") ? (a = new O.AsyncEach(n.lineno, n.colno), l = "endeach") : this.skipSymbol("asyncAll") ? (a = new O.AsyncAll(n.lineno, n.colno), l = "endall") : this.fail("parseFor: expected for{Async}", n.lineno, n.colno), a.name = this.parsePrimary(), a.name instanceof O.Symbol || this.fail("parseFor: variable name expected for loop");
              var b = this.peekToken().type;
              if (b === v.TOKEN_COMMA) {
                var m = a.name;
                for (a.name = new O.Array(m.lineno, m.colno), a.name.addChild(m); this.skip(v.TOKEN_COMMA); ) {
                  var E = this.parsePrimary();
                  a.name.addChild(E);
                }
              }
              return this.skipSymbol("in") || this.fail('parseFor: expected "in" keyword for loop', n.lineno, n.colno), a.arr = this.parseExpression(), this.advanceAfterBlockEnd(n.value), a.body = this.parseUntilBlocks(l, "else"), this.skipSymbol("else") && (this.advanceAfterBlockEnd("else"), a.else_ = this.parseUntilBlocks(l)), this.advanceAfterBlockEnd(), a;
            }, x.parseMacro = function() {
              var n = this.peekToken();
              this.skipSymbol("macro") || this.fail("expected macro");
              var a = this.parsePrimary(!0), l = this.parseSignature(), b = new O.Macro(n.lineno, n.colno, a, l);
              return this.advanceAfterBlockEnd(n.value), b.body = this.parseUntilBlocks("endmacro"), this.advanceAfterBlockEnd(), b;
            }, x.parseCall = function() {
              var n = this.peekToken();
              this.skipSymbol("call") || this.fail("expected call");
              var a = this.parseSignature(!0) || new O.NodeList(), l = this.parsePrimary();
              this.advanceAfterBlockEnd(n.value);
              var b = this.parseUntilBlocks("endcall");
              this.advanceAfterBlockEnd();
              var m = new O.Symbol(n.lineno, n.colno, "caller"), E = new O.Caller(n.lineno, n.colno, m, a, b), i = l.args.children;
              i[i.length - 1] instanceof O.KeywordArgs || i.push(new O.KeywordArgs());
              var c = i[i.length - 1];
              return c.addChild(new O.Pair(n.lineno, n.colno, m, E)), new O.Output(n.lineno, n.colno, [l]);
            }, x.parseWithContext = function() {
              var n = this.peekToken(), a = null;
              return this.skipSymbol("with") ? a = !0 : this.skipSymbol("without") && (a = !1), a !== null && (this.skipSymbol("context") || this.fail("parseFrom: expected context after with/without", n.lineno, n.colno)), a;
            }, x.parseImport = function() {
              var n = this.peekToken();
              this.skipSymbol("import") || this.fail("parseImport: expected import", n.lineno, n.colno);
              var a = this.parseExpression();
              this.skipSymbol("as") || this.fail('parseImport: expected "as" keyword', n.lineno, n.colno);
              var l = this.parseExpression(), b = this.parseWithContext(), m = new O.Import(n.lineno, n.colno, a, l, b);
              return this.advanceAfterBlockEnd(n.value), m;
            }, x.parseFrom = function() {
              var n = this.peekToken();
              this.skipSymbol("from") || this.fail("parseFrom: expected from");
              var a = this.parseExpression();
              this.skipSymbol("import") || this.fail("parseFrom: expected import", n.lineno, n.colno);
              for (var l = new O.NodeList(), b; ; ) {
                var m = this.peekToken();
                if (m.type === v.TOKEN_BLOCK_END) {
                  l.children.length || this.fail("parseFrom: Expected at least one import name", n.lineno, n.colno), m.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0), this.nextToken();
                  break;
                }
                l.children.length > 0 && !this.skip(v.TOKEN_COMMA) && this.fail("parseFrom: expected comma", n.lineno, n.colno);
                var E = this.parsePrimary();
                if (E.value.charAt(0) === "_" && this.fail("parseFrom: names starting with an underscore cannot be imported", E.lineno, E.colno), this.skipSymbol("as")) {
                  var i = this.parsePrimary();
                  l.addChild(new O.Pair(E.lineno, E.colno, E, i));
                } else
                  l.addChild(E);
                b = this.parseWithContext();
              }
              return new O.FromImport(n.lineno, n.colno, a, l, b);
            }, x.parseBlock = function() {
              var n = this.peekToken();
              this.skipSymbol("block") || this.fail("parseBlock: expected block", n.lineno, n.colno);
              var a = new O.Block(n.lineno, n.colno);
              a.name = this.parsePrimary(), a.name instanceof O.Symbol || this.fail("parseBlock: variable name expected", n.lineno, n.colno), this.advanceAfterBlockEnd(n.value), a.body = this.parseUntilBlocks("endblock"), this.skipSymbol("endblock"), this.skipSymbol(a.name.value);
              var l = this.peekToken();
              return l || this.fail("parseBlock: expected endblock, got end of file"), this.advanceAfterBlockEnd(l.value), a;
            }, x.parseExtends = function() {
              var n = "extends", a = this.peekToken();
              this.skipSymbol(n) || this.fail("parseTemplateRef: expected " + n);
              var l = new O.Extends(a.lineno, a.colno);
              return l.template = this.parseExpression(), this.advanceAfterBlockEnd(a.value), l;
            }, x.parseInclude = function() {
              var n = "include", a = this.peekToken();
              this.skipSymbol(n) || this.fail("parseInclude: expected " + n);
              var l = new O.Include(a.lineno, a.colno);
              return l.template = this.parseExpression(), this.skipSymbol("ignore") && this.skipSymbol("missing") && (l.ignoreMissing = !0), this.advanceAfterBlockEnd(a.value), l;
            }, x.parseIf = function() {
              var n = this.peekToken(), a;
              this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif") ? a = new O.If(n.lineno, n.colno) : this.skipSymbol("ifAsync") ? a = new O.IfAsync(n.lineno, n.colno) : this.fail("parseIf: expected if, elif, or elseif", n.lineno, n.colno), a.cond = this.parseExpression(), this.advanceAfterBlockEnd(n.value), a.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
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
            }, x.parseSet = function() {
              var n = this.peekToken();
              this.skipSymbol("set") || this.fail("parseSet: expected set", n.lineno, n.colno);
              for (var a = new O.Set(n.lineno, n.colno, []), l; (l = this.parsePrimary()) && (a.targets.push(l), !!this.skip(v.TOKEN_COMMA)); )
                ;
              return this.skipValue(v.TOKEN_OPERATOR, "=") ? (a.value = this.parseExpression(), this.advanceAfterBlockEnd(n.value)) : this.skip(v.TOKEN_BLOCK_END) ? (a.body = new O.Capture(n.lineno, n.colno, this.parseUntilBlocks("endset")), a.value = null, this.advanceAfterBlockEnd()) : this.fail("parseSet: expected = or block end in set tag", n.lineno, n.colno), a;
            }, x.parseSwitch = function() {
              var n = "switch", a = "endswitch", l = "case", b = "default", m = this.peekToken();
              !this.skipSymbol(n) && !this.skipSymbol(l) && !this.skipSymbol(b) && this.fail('parseSwitch: expected "switch," "case" or "default"', m.lineno, m.colno);
              var E = this.parseExpression();
              this.advanceAfterBlockEnd(n), this.parseUntilBlocks(l, b, a);
              var i = this.peekToken(), c = [], d;
              do {
                this.skipSymbol(l);
                var f = this.parseExpression();
                this.advanceAfterBlockEnd(n);
                var h = this.parseUntilBlocks(l, b, a);
                c.push(new O.Case(i.line, i.col, f, h)), i = this.peekToken();
              } while (i && i.value === l);
              switch (i.value) {
                case b:
                  this.advanceAfterBlockEnd(), d = this.parseUntilBlocks(a), this.advanceAfterBlockEnd();
                  break;
                case a:
                  this.advanceAfterBlockEnd();
                  break;
                default:
                  this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.');
              }
              return new O.Switch(m.lineno, m.colno, E, c, d);
            }, x.parseStatement = function() {
              var n = this.peekToken(), a;
              if (n.type !== v.TOKEN_SYMBOL && this.fail("tag name expected", n.lineno, n.colno), this.breakOnBlocks && T.indexOf(this.breakOnBlocks, n.value) !== -1)
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
                        return b.parse(this, O, v);
                    }
                  this.fail("unknown block tag: " + n.value, n.lineno, n.colno);
              }
              return a;
            }, x.parseRaw = function(n) {
              n = n || "raw";
              for (var a = "end" + n, l = new RegExp("([\\s\\S]*?){%\\s*(" + n + "|" + a + ")\\s*(?=%})%}"), b = 1, m = "", E = null, i = this.advanceAfterBlockEnd(); (E = this.tokens._extractRegex(l)) && b > 0; ) {
                var c = E[0], d = E[1], f = E[2];
                f === n ? b += 1 : f === a && (b -= 1), b === 0 ? (m += d, this.tokens.backN(c.length - d.length)) : m += c;
              }
              return new O.Output(i.lineno, i.colno, [new O.TemplateData(i.lineno, i.colno, m)]);
            }, x.parsePostfix = function(n) {
              for (var a, l = this.peekToken(); l; ) {
                if (l.type === v.TOKEN_LEFT_PAREN)
                  n = new O.FunCall(l.lineno, l.colno, n, this.parseSignature());
                else if (l.type === v.TOKEN_LEFT_BRACKET)
                  a = this.parseAggregate(), a.children.length > 1 && this.fail("invalid index"), n = new O.LookupVal(l.lineno, l.colno, n, a.children[0]);
                else if (l.type === v.TOKEN_OPERATOR && l.value === ".") {
                  this.nextToken();
                  var b = this.nextToken();
                  b.type !== v.TOKEN_SYMBOL && this.fail("expected name as lookup value, got " + b.value, b.lineno, b.colno), a = new O.Literal(b.lineno, b.colno, b.value), n = new O.LookupVal(l.lineno, l.colno, n, a);
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
                var a = this.parseOr(), l = n;
                n = new O.InlineIf(n.lineno, n.colno), n.body = l, n.cond = a, this.skipSymbol("else") ? n.else_ = this.parseOr() : n.else_ = null;
              }
              return n;
            }, x.parseOr = function() {
              for (var n = this.parseAnd(); this.skipSymbol("or"); ) {
                var a = this.parseAnd();
                n = new O.Or(n.lineno, n.colno, n, a);
              }
              return n;
            }, x.parseAnd = function() {
              for (var n = this.parseNot(); this.skipSymbol("and"); ) {
                var a = this.parseNot();
                n = new O.And(n.lineno, n.colno, n, a);
              }
              return n;
            }, x.parseNot = function() {
              var n = this.peekToken();
              return this.skipSymbol("not") ? new O.Not(n.lineno, n.colno, this.parseNot()) : this.parseIn();
            }, x.parseIn = function() {
              for (var n = this.parseIs(); ; ) {
                var a = this.nextToken();
                if (!a)
                  break;
                var l = a.type === v.TOKEN_SYMBOL && a.value === "not";
                if (l || this.pushToken(a), this.skipSymbol("in")) {
                  var b = this.parseIs();
                  n = new O.In(n.lineno, n.colno, n, b), l && (n = new O.Not(n.lineno, n.colno, n));
                } else {
                  l && this.pushToken(a);
                  break;
                }
              }
              return n;
            }, x.parseIs = function() {
              var n = this.parseCompare();
              if (this.skipSymbol("is")) {
                var a = this.skipSymbol("not"), l = this.parseCompare();
                n = new O.Is(n.lineno, n.colno, n, l), a && (n = new O.Not(n.lineno, n.colno, n));
              }
              return n;
            }, x.parseCompare = function() {
              for (var n = ["==", "===", "!=", "!==", "<", ">", "<=", ">="], a = this.parseConcat(), l = []; ; ) {
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
              return l.length ? new O.Compare(l[0].lineno, l[0].colno, a, l) : a;
            }, x.parseConcat = function() {
              for (var n = this.parseAdd(); this.skipValue(v.TOKEN_TILDE, "~"); ) {
                var a = this.parseAdd();
                n = new O.Concat(n.lineno, n.colno, n, a);
              }
              return n;
            }, x.parseAdd = function() {
              for (var n = this.parseSub(); this.skipValue(v.TOKEN_OPERATOR, "+"); ) {
                var a = this.parseSub();
                n = new O.Add(n.lineno, n.colno, n, a);
              }
              return n;
            }, x.parseSub = function() {
              for (var n = this.parseMul(); this.skipValue(v.TOKEN_OPERATOR, "-"); ) {
                var a = this.parseMul();
                n = new O.Sub(n.lineno, n.colno, n, a);
              }
              return n;
            }, x.parseMul = function() {
              for (var n = this.parseDiv(); this.skipValue(v.TOKEN_OPERATOR, "*"); ) {
                var a = this.parseDiv();
                n = new O.Mul(n.lineno, n.colno, n, a);
              }
              return n;
            }, x.parseDiv = function() {
              for (var n = this.parseFloorDiv(); this.skipValue(v.TOKEN_OPERATOR, "/"); ) {
                var a = this.parseFloorDiv();
                n = new O.Div(n.lineno, n.colno, n, a);
              }
              return n;
            }, x.parseFloorDiv = function() {
              for (var n = this.parseMod(); this.skipValue(v.TOKEN_OPERATOR, "//"); ) {
                var a = this.parseMod();
                n = new O.FloorDiv(n.lineno, n.colno, n, a);
              }
              return n;
            }, x.parseMod = function() {
              for (var n = this.parsePow(); this.skipValue(v.TOKEN_OPERATOR, "%"); ) {
                var a = this.parsePow();
                n = new O.Mod(n.lineno, n.colno, n, a);
              }
              return n;
            }, x.parsePow = function() {
              for (var n = this.parseUnary(); this.skipValue(v.TOKEN_OPERATOR, "**"); ) {
                var a = this.parseUnary();
                n = new O.Pow(n.lineno, n.colno, n, a);
              }
              return n;
            }, x.parseUnary = function(n) {
              var a = this.peekToken(), l;
              return this.skipValue(v.TOKEN_OPERATOR, "-") ? l = new O.Neg(a.lineno, a.colno, this.parseUnary(!0)) : this.skipValue(v.TOKEN_OPERATOR, "+") ? l = new O.Pos(a.lineno, a.colno, this.parseUnary(!0)) : l = this.parsePrimary(), n || (l = this.parseFilter(l)), l;
            }, x.parsePrimary = function(n) {
              var a = this.nextToken(), l, b = null;
              if (a ? a.type === v.TOKEN_STRING ? l = a.value : a.type === v.TOKEN_INT ? l = parseInt(a.value, 10) : a.type === v.TOKEN_FLOAT ? l = parseFloat(a.value) : a.type === v.TOKEN_BOOLEAN ? a.value === "true" ? l = !0 : a.value === "false" ? l = !1 : this.fail("invalid boolean: " + a.value, a.lineno, a.colno) : a.type === v.TOKEN_NONE ? l = null : a.type === v.TOKEN_REGEX && (l = new RegExp(a.value.body, a.value.flags)) : this.fail("expected expression, got end of file"), l !== void 0 ? b = new O.Literal(a.lineno, a.colno, l) : a.type === v.TOKEN_SYMBOL ? b = new O.Symbol(a.lineno, a.colno, a.value) : (this.pushToken(a), b = this.parseAggregate()), n || (b = this.parsePostfix(b)), b)
                return b;
              throw this.error("unexpected token: " + a.value, a.lineno, a.colno);
            }, x.parseFilterName = function() {
              for (var n = this.expect(v.TOKEN_SYMBOL), a = n.value; this.skipValue(v.TOKEN_OPERATOR, "."); )
                a += "." + this.expect(v.TOKEN_SYMBOL).value;
              return new O.Symbol(n.lineno, n.colno, a);
            }, x.parseFilterArgs = function(n) {
              if (this.peekToken().type === v.TOKEN_LEFT_PAREN) {
                var a = this.parsePostfix(n);
                return a.args.children;
              }
              return [];
            }, x.parseFilter = function(n) {
              for (; this.skip(v.TOKEN_PIPE); ) {
                var a = this.parseFilterName();
                n = new O.Filter(a.lineno, a.colno, a, new O.NodeList(a.lineno, a.colno, [n].concat(this.parseFilterArgs(n))));
              }
              return n;
            }, x.parseFilterStatement = function() {
              var n = this.peekToken();
              this.skipSymbol("filter") || this.fail("parseFilterStatement: expected filter");
              var a = this.parseFilterName(), l = this.parseFilterArgs(a);
              this.advanceAfterBlockEnd(n.value);
              var b = new O.Capture(a.lineno, a.colno, this.parseUntilBlocks("endfilter"));
              this.advanceAfterBlockEnd();
              var m = new O.Filter(a.lineno, a.colno, a, new O.NodeList(a.lineno, a.colno, [b].concat(l)));
              return new O.Output(a.lineno, a.colno, [m]);
            }, x.parseAggregate = function() {
              var n = this.nextToken(), a;
              switch (n.type) {
                case v.TOKEN_LEFT_PAREN:
                  a = new O.Group(n.lineno, n.colno);
                  break;
                case v.TOKEN_LEFT_BRACKET:
                  a = new O.Array(n.lineno, n.colno);
                  break;
                case v.TOKEN_LEFT_CURLY:
                  a = new O.Dict(n.lineno, n.colno);
                  break;
                default:
                  return null;
              }
              for (; ; ) {
                var l = this.peekToken().type;
                if (l === v.TOKEN_RIGHT_PAREN || l === v.TOKEN_RIGHT_BRACKET || l === v.TOKEN_RIGHT_CURLY) {
                  this.nextToken();
                  break;
                }
                if (a.children.length > 0 && (this.skip(v.TOKEN_COMMA) || this.fail("parseAggregate: expected comma after expression", n.lineno, n.colno)), a instanceof O.Dict) {
                  var b = this.parsePrimary();
                  this.skip(v.TOKEN_COLON) || this.fail("parseAggregate: expected colon after dict key", n.lineno, n.colno);
                  var m = this.parseExpression();
                  a.addChild(new O.Pair(b.lineno, b.colno, b, m));
                } else {
                  var E = this.parseExpression();
                  a.addChild(E);
                }
              }
              return a;
            }, x.parseSignature = function(n, a) {
              var l = this.peekToken();
              if (!a && l.type !== v.TOKEN_LEFT_PAREN) {
                if (n)
                  return null;
                this.fail("expected arguments", l.lineno, l.colno);
              }
              l.type === v.TOKEN_LEFT_PAREN && (l = this.nextToken());
              for (var b = new O.NodeList(l.lineno, l.colno), m = new O.KeywordArgs(l.lineno, l.colno), E = !1; ; ) {
                if (l = this.peekToken(), !a && l.type === v.TOKEN_RIGHT_PAREN) {
                  this.nextToken();
                  break;
                } else if (a && l.type === v.TOKEN_BLOCK_END)
                  break;
                if (E && !this.skip(v.TOKEN_COMMA))
                  this.fail("parseSignature: expected comma after expression", l.lineno, l.colno);
                else {
                  var i = this.parseExpression();
                  this.skipValue(v.TOKEN_OPERATOR, "=") ? m.addChild(new O.Pair(i.lineno, i.colno, i, this.parseExpression())) : b.addChild(i);
                }
                E = !0;
              }
              return m.children.length && b.addChild(m), b;
            }, x.parseUntilBlocks = function() {
              for (var n = this.breakOnBlocks, a = arguments.length, l = new Array(a), b = 0; b < a; b++)
                l[b] = arguments[b];
              this.breakOnBlocks = l;
              var m = this.parse();
              return this.breakOnBlocks = n, m;
            }, x.parseNodes = function() {
              for (var n, a = []; n = this.nextToken(); )
                if (n.type === v.TOKEN_DATA) {
                  var l = n.value, b = this.peekToken(), m = b && b.value;
                  this.dropLeadingWhitespace && (l = l.replace(/^\s*/, ""), this.dropLeadingWhitespace = !1), b && (b.type === v.TOKEN_BLOCK_START && m.charAt(m.length - 1) === "-" || b.type === v.TOKEN_VARIABLE_START && m.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || b.type === v.TOKEN_COMMENT && m.charAt(this.tokens.tags.COMMENT_START.length) === "-") && (l = l.replace(/\s*$/, "")), a.push(new O.Output(n.lineno, n.colno, [new O.TemplateData(n.lineno, n.colno, l)]));
                } else if (n.type === v.TOKEN_BLOCK_START) {
                  this.dropLeadingWhitespace = !1;
                  var E = this.parseStatement();
                  if (!E)
                    break;
                  a.push(E);
                } else if (n.type === v.TOKEN_VARIABLE_START) {
                  var i = this.parseExpression();
                  this.dropLeadingWhitespace = !1, this.advanceAfterVariableEnd(), a.push(new O.Output(n.lineno, n.colno, [i]));
                } else
                  n.type === v.TOKEN_COMMENT ? this.dropLeadingWhitespace = n.value.charAt(n.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-" : this.fail("Unexpected token at top-level: " + n.type, n.lineno, n.colno);
              return a;
            }, x.parse = function() {
              return new O.NodeList(0, 0, this.parseNodes());
            }, x.parseAsRoot = function() {
              return new O.Root(0, 0, this.parseNodes());
            }, R;
          }(_);
          t.exports = {
            parse: function(R, x, N) {
              var n = new P(v.lex(R, N));
              return x !== void 0 && (n.extensions = x), n.parseAsRoot();
            },
            Parser: P
          };
        },
        /* 9 */
        /***/
        function(t, r, u) {
          var o = u(0), p = ` 
	\r `, v = "()[]{}%*-+~/#,:|.<>=!", O = "0123456789", _ = "{%", T = "%}", P = "{{", M = "}}", R = "{#", x = "#}", N = "string", n = "whitespace", a = "data", l = "block-start", b = "block-end", m = "variable-start", E = "variable-end", i = "comment", c = "left-paren", d = "right-paren", f = "left-bracket", h = "right-bracket", y = "left-curly", g = "right-curly", A = "operator", I = "comma", C = "colon", F = "tilde", K = "pipe", L = "int", w = "float", S = "boolean", j = "none", D = "symbol", $ = "special", ne = "regex";
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
                } else if (v.indexOf(se) !== -1) {
                  this.forward();
                  var B = ["==", "===", "!=", "!==", "<=", ">=", "//", "**"], V = se + this.current(), U;
                  switch (o.indexOf(B, V) !== -1 && (this.forward(), se = V, o.indexOf(B, V + this.current()) !== -1 && (se = V + this.current(), this.forward())), se) {
                    case "(":
                      U = c;
                      break;
                    case ")":
                      U = d;
                      break;
                    case "[":
                      U = f;
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
                } else if (W = this._extractUntil(p + v), W.match(/^[-+]?[0-9]+$/))
                  if (this.current() === ".") {
                    this.forward();
                    var Y = this._extract(O);
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
                return z(ee ? i : a, W, q, G);
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
            TOKEN_COMMENT: i,
            TOKEN_LEFT_PAREN: c,
            TOKEN_RIGHT_PAREN: d,
            TOKEN_LEFT_BRACKET: f,
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
        function(t, r, u) {
          function o(P, M) {
            P.prototype = Object.create(M.prototype), P.prototype.constructor = P, p(P, M);
          }
          function p(P, M) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(x, N) {
              return x.__proto__ = N, x;
            }, p(P, M);
          }
          var v = u(6), O = u(19), _ = O.PrecompiledLoader, T = /* @__PURE__ */ function(P) {
            o(M, P);
            function M(x, N) {
              var n;
              return n = P.call(this) || this, n.baseURL = x || ".", N = N || {}, n.useCache = !!N.useCache, n.async = !!N.async, n;
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
          }(v);
          t.exports = {
            WebLoader: T,
            PrecompiledLoader: _
          };
        },
        /* 11 */
        /***/
        function(t, r, u) {
          var o = u(0), p = u(7), v = p.Environment, O = p.Template, _ = u(6), T = u(10), P = u(23), M = u(5), R = u(8), x = u(9), N = u(2), n = u(3), a = u(25), l;
          function b(m, E) {
            E = E || {}, o.isObject(m) && (E = m, m = null);
            var i;
            return T.FileSystemLoader ? i = new T.FileSystemLoader(m, {
              watch: E.watch,
              noCache: E.noCache
            }) : T.WebLoader && (i = new T.WebLoader(m, {
              useCache: E.web && E.web.useCache,
              async: E.web && E.web.async
            })), l = new v(i, E), E && E.express && l.express(E.express), l;
          }
          t.exports = {
            Environment: v,
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
            lib: o,
            nodes: n,
            installJinjaCompat: a,
            configure: b,
            reset: function() {
              l = void 0;
            },
            compile: function(E, i, c, d) {
              return l || b(), new O(E, i, c, d);
            },
            render: function(E, i, c) {
              return l || b(), l.render(E, i, c);
            },
            renderString: function(E, i, c) {
              return l || b(), l.renderString(E, i, c);
            },
            precompile: P ? P.precompile : void 0,
            precompileString: P ? P.precompileString : void 0
          };
        },
        /* 12 */
        /***/
        function(t, r, u) {
          var o = u(13), p = [], v = [], O = o.makeRequestCallFromTimer(_);
          function _() {
            if (v.length)
              throw v.shift();
          }
          t.exports = T;
          function T(M) {
            var R;
            p.length ? R = p.pop() : R = new P(), R.task = M, o(R);
          }
          function P() {
            this.task = null;
          }
          P.prototype.call = function() {
            try {
              this.task.call();
            } catch (M) {
              T.onerror ? T.onerror(M) : (v.push(M), O());
            } finally {
              this.task = null, p[p.length] = this;
            }
          };
        },
        /* 13 */
        /***/
        function(t, r, u) {
          (function(o) {
            t.exports = p;
            function p(n) {
              v.length || O(), v[v.length] = n;
            }
            var v = [], O, _ = 0, T = 1024;
            function P() {
              for (; _ < v.length; ) {
                var n = _;
                if (_ = _ + 1, v[n].call(), _ > T) {
                  for (var a = 0, l = v.length - _; a < l; a++)
                    v[a] = v[a + _];
                  v.length -= _, _ = 0;
                }
              }
              v.length = 0, _ = 0;
            }
            var M = typeof o < "u" ? o : self, R = M.MutationObserver || M.WebKitMutationObserver;
            typeof R == "function" ? O = x(P) : O = N(P), p.requestFlush = O;
            function x(n) {
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
          }).call(r, u(14));
        },
        /* 14 */
        /***/
        function(t, r) {
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
        function(t, r, u) {
          var o, p;
          (function(v) {
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
                var a = new Error("First argument to waterfall must be an array of functions");
                return x(a);
              }
              if (!R.length)
                return x();
              var l = function(b) {
                return function(m) {
                  if (m)
                    x.apply(null, arguments), x = function() {
                    };
                  else {
                    var E = Array.prototype.slice.call(arguments, 1), i = b.next();
                    i ? E.push(l(i)) : E.push(x), n(function() {
                      b.apply(null, E);
                    });
                  }
                };
              };
              l(T(R))();
            };
            o = [], p = function() {
              return M;
            }.apply(r, o), p !== void 0 && (t.exports = p);
          })();
        },
        /* 16 */
        /***/
        function(t, r, u) {
          var o = typeof Reflect == "object" ? Reflect : null, p = o && typeof o.apply == "function" ? o.apply : function(h, y, g) {
            return Function.prototype.apply.call(h, y, g);
          }, v;
          o && typeof o.ownKeys == "function" ? v = o.ownKeys : Object.getOwnPropertySymbols ? v = function(h) {
            return Object.getOwnPropertyNames(h).concat(Object.getOwnPropertySymbols(h));
          } : v = function(h) {
            return Object.getOwnPropertyNames(h);
          };
          function O(f) {
            console && console.warn && console.warn(f);
          }
          var _ = Number.isNaN || function(h) {
            return h !== h;
          };
          function T() {
            T.init.call(this);
          }
          t.exports = T, t.exports.once = i, T.EventEmitter = T, T.prototype._events = void 0, T.prototype._eventsCount = 0, T.prototype._maxListeners = void 0;
          var P = 10;
          function M(f) {
            if (typeof f != "function")
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof f);
          }
          Object.defineProperty(T, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
              return P;
            },
            set: function(f) {
              if (typeof f != "number" || f < 0 || _(f))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + f + ".");
              P = f;
            }
          }), T.init = function() {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, T.prototype.setMaxListeners = function(h) {
            if (typeof h != "number" || h < 0 || _(h))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + h + ".");
            return this._maxListeners = h, this;
          };
          function R(f) {
            return f._maxListeners === void 0 ? T.defaultMaxListeners : f._maxListeners;
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
              p(K, this, y);
            else
              for (var L = K.length, w = b(K, L), g = 0; g < L; ++g)
                p(w[g], this, y);
            return !0;
          };
          function x(f, h, y, g) {
            var A, I, C;
            if (M(y), I = f._events, I === void 0 ? (I = f._events = /* @__PURE__ */ Object.create(null), f._eventsCount = 0) : (I.newListener !== void 0 && (f.emit(
              "newListener",
              h,
              y.listener ? y.listener : y
            ), I = f._events), C = I[h]), C === void 0)
              C = I[h] = y, ++f._eventsCount;
            else if (typeof C == "function" ? C = I[h] = g ? [y, C] : [C, y] : g ? C.unshift(y) : C.push(y), A = R(f), A > 0 && C.length > A && !C.warned) {
              C.warned = !0;
              var F = new Error("Possible EventEmitter memory leak detected. " + C.length + " " + String(h) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              F.name = "MaxListenersExceededWarning", F.emitter = f, F.type = h, F.count = C.length, O(F);
            }
            return f;
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
          function n(f, h, y) {
            var g = { fired: !1, wrapFn: void 0, target: f, type: h, listener: y }, A = N.bind(g);
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
              I === 0 ? g.shift() : m(g, I), g.length === 1 && (A[h] = g[0]), A.removeListener !== void 0 && this.emit("removeListener", h, F || y);
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
          function a(f, h, y) {
            var g = f._events;
            if (g === void 0)
              return [];
            var A = g[h];
            return A === void 0 ? [] : typeof A == "function" ? y ? [A.listener || A] : [A] : y ? E(A) : b(A, A.length);
          }
          T.prototype.listeners = function(h) {
            return a(this, h, !0);
          }, T.prototype.rawListeners = function(h) {
            return a(this, h, !1);
          }, T.listenerCount = function(f, h) {
            return typeof f.listenerCount == "function" ? f.listenerCount(h) : l.call(f, h);
          }, T.prototype.listenerCount = l;
          function l(f) {
            var h = this._events;
            if (h !== void 0) {
              var y = h[f];
              if (typeof y == "function")
                return 1;
              if (y !== void 0)
                return y.length;
            }
            return 0;
          }
          T.prototype.eventNames = function() {
            return this._eventsCount > 0 ? v(this._events) : [];
          };
          function b(f, h) {
            for (var y = new Array(h), g = 0; g < h; ++g)
              y[g] = f[g];
            return y;
          }
          function m(f, h) {
            for (; h + 1 < f.length; h++)
              f[h] = f[h + 1];
            f.pop();
          }
          function E(f) {
            for (var h = new Array(f.length), y = 0; y < h.length; ++y)
              h[y] = f[y].listener || f[y];
            return h;
          }
          function i(f, h) {
            return new Promise(function(y, g) {
              function A(C) {
                f.removeListener(h, I), g(C);
              }
              function I() {
                typeof f.removeListener == "function" && f.removeListener("error", A), y([].slice.call(arguments));
              }
              d(f, h, I, { once: !0 }), h !== "error" && c(f, A, { once: !0 });
            });
          }
          function c(f, h, y) {
            typeof f.on == "function" && d(f, "error", h, y);
          }
          function d(f, h, y, g) {
            if (typeof f.on == "function")
              g.once ? f.once(h, y) : f.on(h, y);
            else if (typeof f.addEventListener == "function")
              f.addEventListener(h, function A(I) {
                g.once && f.removeEventListener(h, A), y(I);
              });
            else
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof f);
          }
        },
        /* 17 */
        /***/
        function(t, r, u) {
          var o = u(3), p = u(0), v = 0;
          function O() {
            return "hole_" + v++;
          }
          function _(l, b) {
            for (var m = null, E = 0; E < l.length; E++) {
              var i = b(l[E]);
              i !== l[E] && (m || (m = l.slice()), m[E] = i);
            }
            return m || l;
          }
          function T(l, b, m) {
            if (!(l instanceof o.Node))
              return l;
            if (!m) {
              var E = b(l);
              if (E && E !== l)
                return E;
            }
            if (l instanceof o.NodeList) {
              var i = _(l.children, function(y) {
                return T(y, b, m);
              });
              i !== l.children && (l = new o[l.typename](l.lineno, l.colno, i));
            } else if (l instanceof o.CallExtension) {
              var c = T(l.args, b, m), d = _(l.contentArgs, function(y) {
                return T(y, b, m);
              });
              (c !== l.args || d !== l.contentArgs) && (l = new o[l.typename](l.extName, l.prop, c, d));
            } else {
              var f = l.fields.map(function(y) {
                return l[y];
              }), h = _(f, function(y) {
                return T(y, b, m);
              });
              h !== f && (l = new o[l.typename](l.lineno, l.colno), h.forEach(function(y, g) {
                l[l.fields[g]] = y;
              }));
            }
            return m && b(l) || l;
          }
          function P(l, b) {
            return T(l, b, !0);
          }
          function M(l, b, m) {
            var E = [], i = P(m ? l[m] : l, function(c) {
              var d;
              return c instanceof o.Block ? c : ((c instanceof o.Filter && p.indexOf(b, c.name.value) !== -1 || c instanceof o.CallExtensionAsync) && (d = new o.Symbol(c.lineno, c.colno, O()), E.push(new o.FilterAsync(c.lineno, c.colno, c.name, c.args, d))), d);
            });
            return m ? l[m] = i : l = i, E.length ? (E.push(l), new o.NodeList(l.lineno, l.colno, E)) : l;
          }
          function R(l, b) {
            return P(l, function(m) {
              return m instanceof o.Output ? M(m, b) : m instanceof o.Set ? M(m, b, "value") : m instanceof o.For ? M(m, b, "arr") : m instanceof o.If ? M(m, b, "cond") : m instanceof o.CallExtension ? M(m, b, "args") : void 0;
            });
          }
          function x(l) {
            return T(l, function(b) {
              if (b instanceof o.Block) {
                var m = !1, E = O();
                b.body = T(b.body, function(i) {
                  if (i instanceof o.FunCall && i.name.value === "super")
                    return m = !0, new o.Symbol(i.lineno, i.colno, E);
                }), m && b.body.children.unshift(new o.Super(0, 0, b.name, new o.Symbol(0, 0, E)));
              }
            });
          }
          function N(l) {
            return P(l, function(b) {
              if (!(!(b instanceof o.If) && !(b instanceof o.For))) {
                var m = !1;
                if (T(b, function(E) {
                  if (E instanceof o.FilterAsync || E instanceof o.IfAsync || E instanceof o.AsyncEach || E instanceof o.AsyncAll || E instanceof o.CallExtensionAsync)
                    return m = !0, E;
                }), m) {
                  if (b instanceof o.If)
                    return new o.IfAsync(b.lineno, b.colno, b.cond, b.body, b.else_);
                  if (b instanceof o.For && !(b instanceof o.AsyncAll))
                    return new o.AsyncEach(b.lineno, b.colno, b.arr, b.name, b.body, b.else_);
                }
              }
            });
          }
          function n(l, b) {
            return N(x(R(l, b)));
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
        function(t, v, u) {
          var o = u(0), p = u(2), v = t.exports = {};
          function O(k, B) {
            return k == null || k === !1 ? B : k;
          }
          v.abs = Math.abs;
          function _(k) {
            return k !== k;
          }
          function T(k, B, V) {
            var U, Y = [], J = [];
            for (U = 0; U < k.length; U++)
              U % B === 0 && J.length && (Y.push(J), J = []), J.push(k[U]);
            if (J.length) {
              if (V)
                for (U = J.length; U < B; U++)
                  J.push(V);
              Y.push(J);
            }
            return Y;
          }
          v.batch = T;
          function P(k) {
            k = O(k, "");
            var B = k.toLowerCase();
            return p.copySafeness(k, B.charAt(0).toUpperCase() + B.slice(1));
          }
          v.capitalize = P;
          function M(k, B) {
            if (k = O(k, ""), B = B || 80, k.length >= B)
              return k;
            var V = B - k.length, U = o.repeat(" ", V / 2 - V % 2), Y = o.repeat(" ", V / 2);
            return p.copySafeness(k, U + k + Y);
          }
          v.center = M;
          function R(k, B, V) {
            return V ? k || B : k !== void 0 ? k : B;
          }
          v.default = R;
          function x(k, B, V) {
            if (!o.isObject(k))
              throw new o.TemplateError("dictsort filter: val must be an object");
            var U = [];
            for (var Y in k)
              U.push([Y, k[Y]]);
            var J;
            if (V === void 0 || V === "key")
              J = 0;
            else if (V === "value")
              J = 1;
            else
              throw new o.TemplateError("dictsort filter: You can only sort by either key or value");
            return U.sort(function(ae, ee) {
              var le = ae[J], we = ee[J];
              return B || (o.isString(le) && (le = le.toUpperCase()), o.isString(we) && (we = we.toUpperCase())), le > we ? 1 : le === we ? 0 : -1;
            }), U;
          }
          v.dictsort = x;
          function N(k, B) {
            return JSON.stringify(k, null, B);
          }
          v.dump = N;
          function n(k) {
            return k instanceof p.SafeString ? k : (k = k ?? "", p.markSafe(o.escape(k.toString())));
          }
          v.escape = n;
          function a(k) {
            return k instanceof p.SafeString ? k : (k = k ?? "", p.markSafe(k.toString()));
          }
          v.safe = a;
          function l(k) {
            return k[0];
          }
          v.first = l;
          function b(k) {
            return k = k ?? "", p.markSafe(o.escape(k.toString()));
          }
          v.forceescape = b;
          function m(k, B) {
            return o.groupBy(k, B, this.env.opts.throwOnUndefined);
          }
          v.groupby = m;
          function E(k, B, V) {
            if (k = O(k, ""), k === "")
              return "";
            B = B || 4;
            var U = k.split(`
`), Y = o.repeat(" ", B), J = U.map(function(ae, ee) {
              return ee === 0 && !V ? ae : "" + Y + ae;
            }).join(`
`);
            return p.copySafeness(k, J);
          }
          v.indent = E;
          function i(k, B, V) {
            return B = B || "", V && (k = o.map(k, function(U) {
              return U[V];
            })), k.join(B);
          }
          v.join = i;
          function c(k) {
            return k[k.length - 1];
          }
          v.last = c;
          function d(k) {
            var B = O(k, "");
            return B !== void 0 ? typeof Map == "function" && B instanceof Map || typeof Set == "function" && B instanceof Set ? B.size : o.isObject(B) && !(B instanceof p.SafeString) ? o.keys(B).length : B.length : 0;
          }
          v.length = d;
          function f(k) {
            if (o.isString(k))
              return k.split("");
            if (o.isObject(k))
              return o._entries(k || {}).map(function(B) {
                var V = B[0], U = B[1];
                return {
                  key: V,
                  value: U
                };
              });
            if (o.isArray(k))
              return k;
            throw new o.TemplateError("list filter: type not iterable");
          }
          v.list = f;
          function h(k) {
            return k = O(k, ""), k.toLowerCase();
          }
          v.lower = h;
          function y(k) {
            return k == null ? "" : p.copySafeness(k, k.replace(/\r\n|\n/g, `<br />
`));
          }
          v.nl2br = y;
          function g(k) {
            return k[Math.floor(Math.random() * k.length)];
          }
          v.random = g;
          function A(k) {
            function B(V, U, Y) {
              U === void 0 && (U = "truthy");
              var J = this, ae = J.env.getTest(U);
              return o.toArray(V).filter(function(le) {
                return ae.call(J, le, Y) === k;
              });
            }
            return B;
          }
          v.reject = A(!1);
          function I(k, B) {
            return k.filter(function(V) {
              return !V[B];
            });
          }
          v.rejectattr = I, v.select = A(!0);
          function C(k, B) {
            return k.filter(function(V) {
              return !!V[B];
            });
          }
          v.selectattr = C;
          function F(k, B, V, U) {
            var Y = k;
            if (B instanceof RegExp)
              return k.replace(B, V);
            typeof U > "u" && (U = -1);
            var J = "";
            if (typeof B == "number")
              B = "" + B;
            else if (typeof B != "string")
              return k;
            if (typeof k == "number" && (k = "" + k), typeof k != "string" && !(k instanceof p.SafeString))
              return k;
            if (B === "")
              return J = V + k.split("").join(V) + V, p.copySafeness(k, J);
            var ae = k.indexOf(B);
            if (U === 0 || ae === -1)
              return k;
            for (var ee = 0, le = 0; ae > -1 && (U === -1 || le < U); )
              J += k.substring(ee, ae) + V, ee = ae + B.length, le++, ae = k.indexOf(B, ee);
            return ee < k.length && (J += k.substring(ee)), p.copySafeness(Y, J);
          }
          v.replace = F;
          function K(k) {
            var B;
            return o.isString(k) ? B = f(k) : B = o.map(k, function(V) {
              return V;
            }), B.reverse(), o.isString(k) ? p.copySafeness(k, B.join("")) : B;
          }
          v.reverse = K;
          function L(k, B, V) {
            B = B || 0;
            var U = Math.pow(10, B), Y;
            return V === "ceil" ? Y = Math.ceil : V === "floor" ? Y = Math.floor : Y = Math.round, Y(k * U) / U;
          }
          v.round = L;
          function w(k, B, V) {
            for (var U = Math.floor(k.length / B), Y = k.length % B, J = [], ae = 0, ee = 0; ee < B; ee++) {
              var le = ae + ee * U;
              ee < Y && ae++;
              var we = ae + (ee + 1) * U, be = k.slice(le, we);
              V && ee >= Y && be.push(V), J.push(be);
            }
            return J;
          }
          v.slice = w;
          function S(k, B, V) {
            return V === void 0 && (V = 0), B && (k = o.map(k, function(U) {
              return U[B];
            })), V + k.reduce(function(U, Y) {
              return U + Y;
            }, 0);
          }
          v.sum = S, v.sort = p.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(B, V, U, Y) {
            var J = this, ae = o.map(B, function(le) {
              return le;
            }), ee = o.getAttrGetter(Y);
            return ae.sort(function(le, we) {
              var be = Y ? ee(le) : le, ke = Y ? ee(we) : we;
              if (J.env.opts.throwOnUndefined && Y && (be === void 0 || ke === void 0))
                throw new TypeError('sort: attribute "' + Y + '" resolved to undefined');
              return !U && o.isString(be) && o.isString(ke) && (be = be.toLowerCase(), ke = ke.toLowerCase()), be < ke ? V ? 1 : -1 : be > ke ? V ? -1 : 1 : 0;
            }), ae;
          });
          function j(k) {
            return p.copySafeness(k, k);
          }
          v.string = j;
          function D(k, B) {
            k = O(k, "");
            var V = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, U = ne(k.replace(V, "")), Y = "";
            return B ? Y = U.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, `
`).replace(/\n\n\n+/g, `

`) : Y = U.replace(/\s+/gi, " "), p.copySafeness(k, Y);
          }
          v.striptags = D;
          function $(k) {
            k = O(k, "");
            var B = k.split(" ").map(function(V) {
              return P(V);
            });
            return p.copySafeness(k, B.join(" "));
          }
          v.title = $;
          function ne(k) {
            return p.copySafeness(k, k.replace(/^\s*|\s*$/g, ""));
          }
          v.trim = ne;
          function z(k, B, V, U) {
            var Y = k;
            if (k = O(k, ""), B = B || 255, k.length <= B)
              return k;
            if (V)
              k = k.substring(0, B);
            else {
              var J = k.lastIndexOf(" ", B);
              J === -1 && (J = B), k = k.substring(0, J);
            }
            return k += U ?? "...", p.copySafeness(Y, k);
          }
          v.truncate = z;
          function ue(k) {
            return k = O(k, ""), k.toUpperCase();
          }
          v.upper = ue;
          function he(k) {
            var B = encodeURIComponent;
            if (o.isString(k))
              return B(k);
            var V = o.isArray(k) ? k : o._entries(k);
            return V.map(function(U) {
              var Y = U[0], J = U[1];
              return B(Y) + "=" + B(J);
            }).join("&");
          }
          v.urlencode = he;
          var X = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, Z = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, q = /^https?:\/\/.*$/, G = /^www\./, W = /\.(?:org|net|com)(?:\:|\/|$)/;
          function se(k, B, V) {
            _(B) && (B = 1 / 0);
            var U = V === !0 ? ' rel="nofollow"' : "", Y = k.split(/(\s+)/).filter(function(J) {
              return J && J.length;
            }).map(function(J) {
              var ae = J.match(X), ee = ae ? ae[1] : J, le = ee.substr(0, B);
              return q.test(ee) ? '<a href="' + ee + '"' + U + ">" + le + "</a>" : G.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : Z.test(ee) ? '<a href="mailto:' + ee + '">' + ee + "</a>" : W.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : J;
            });
            return Y.join("");
          }
          v.urlize = se;
          function ye(k) {
            k = O(k, "");
            var B = k ? k.match(/\w+/g) : null;
            return B ? B.length : null;
          }
          v.wordcount = ye;
          function fe(k, B) {
            var V = parseFloat(k);
            return _(V) ? B : V;
          }
          v.float = fe;
          var Oe = p.makeMacro(["value", "default", "base"], [], function(B, V, U) {
            U === void 0 && (U = 10);
            var Y = parseInt(B, U);
            return _(Y) ? V : Y;
          });
          v.int = Oe, v.d = v.default, v.e = v.escape;
        },
        /* 19 */
        /***/
        function(t, r, u) {
          function o(_, T) {
            _.prototype = Object.create(T.prototype), _.prototype.constructor = _, p(_, T);
          }
          function p(_, T) {
            return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(M, R) {
              return M.__proto__ = R, M;
            }, p(_, T);
          }
          var v = u(6), O = /* @__PURE__ */ function(_) {
            o(T, _);
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
          }(v);
          t.exports = {
            PrecompiledLoader: O
          };
        },
        /* 20 */
        /***/
        function(t, r, u) {
          var o = u(2).SafeString;
          function p(g) {
            return typeof g == "function";
          }
          r.callable = p;
          function v(g) {
            return g !== void 0;
          }
          r.defined = v;
          function O(g, A) {
            return g % A === 0;
          }
          r.divisibleby = O;
          function _(g) {
            return g instanceof o;
          }
          r.escaped = _;
          function T(g, A) {
            return g === A;
          }
          r.equalto = T, r.eq = r.equalto, r.sameas = r.equalto;
          function P(g) {
            return g % 2 === 0;
          }
          r.even = P;
          function M(g) {
            return !g;
          }
          r.falsy = M;
          function R(g, A) {
            return g >= A;
          }
          r.ge = R;
          function x(g, A) {
            return g > A;
          }
          r.greaterthan = x, r.gt = r.greaterthan;
          function N(g, A) {
            return g <= A;
          }
          r.le = N;
          function n(g, A) {
            return g < A;
          }
          r.lessthan = n, r.lt = r.lessthan;
          function a(g) {
            return g.toLowerCase() === g;
          }
          r.lower = a;
          function l(g, A) {
            return g !== A;
          }
          r.ne = l;
          function b(g) {
            return g === null;
          }
          r.null = b;
          function m(g) {
            return typeof g == "number";
          }
          r.number = m;
          function E(g) {
            return g % 2 === 1;
          }
          r.odd = E;
          function i(g) {
            return typeof g == "string";
          }
          r.string = i;
          function c(g) {
            return !!g;
          }
          r.truthy = c;
          function d(g) {
            return g === void 0;
          }
          r.undefined = d;
          function f(g) {
            return g.toUpperCase() === g;
          }
          r.upper = f;
          function h(g) {
            return typeof Symbol < "u" ? !!g[Symbol.iterator] : Array.isArray(g) || typeof g == "string";
          }
          r.iterable = h;
          function y(g) {
            var A = g != null && typeof g == "object" && !Array.isArray(g);
            return Set ? A && !(g instanceof Set) : A;
          }
          r.mapping = y;
        },
        /* 21 */
        /***/
        function(t, r, u) {
          function o(O) {
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
          function p(O) {
            O = O || ",";
            var _ = !0;
            return function() {
              var T = _ ? "" : O;
              return _ = !1, T;
            };
          }
          function v() {
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
                return o(Array.prototype.slice.call(arguments));
              },
              joiner: function(_) {
                return p(_);
              }
            };
          }
          t.exports = v;
        },
        /* 22 */
        /***/
        function(t, r, u) {
          var o = u(4);
          t.exports = function(v, O) {
            function _(T, P) {
              if (this.name = T, this.path = T, this.defaultEngine = P.defaultEngine, this.ext = o.extname(T), !this.ext && !this.defaultEngine)
                throw new Error("No default engine was specified and no extension was provided.");
              this.ext || (this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine);
            }
            return _.prototype.render = function(P, M) {
              v.render(this.name, P, M);
            }, O.set("view", _), O.set("nunjucksEnv", v), v;
          };
        },
        /* 23 */
        /***/
        function(t, r, u) {
          var o = u(4), p = u(4), v = u(0), O = v._prettifyError, _ = u(5), T = u(7), P = T.Environment, M = u(24);
          function R(a, l) {
            return Array.isArray(l) ? l.some(function(b) {
              return a.match(b);
            }) : !1;
          }
          function x(a, l) {
            l = l || {}, l.isString = !0;
            var b = l.env || new P([]), m = l.wrapper || M;
            if (!l.name)
              throw new Error('the "name" option is required when compiling a string');
            return m([n(a, l.name, b)], l);
          }
          function N(a, l) {
            l = l || {};
            var b = l.env || new P([]), m = l.wrapper || M;
            if (l.isString)
              return x(a, l);
            var E = o.existsSync(a) && o.statSync(a), i = [], c = [];
            function d(y) {
              o.readdirSync(y).forEach(function(g) {
                var A = p.join(y, g), I = A.substr(p.join(a, "/").length), C = o.statSync(A);
                C && C.isDirectory() ? (I += "/", R(I, l.exclude) || d(A)) : R(I, l.include) && c.push(A);
              });
            }
            if (E.isFile())
              i.push(n(o.readFileSync(a, "utf-8"), l.name || a, b));
            else if (E.isDirectory()) {
              d(a);
              for (var f = 0; f < c.length; f++) {
                var h = c[f].replace(p.join(a, "/"), "");
                try {
                  i.push(n(o.readFileSync(c[f], "utf-8"), h, b));
                } catch (y) {
                  if (l.force)
                    console.error(y);
                  else
                    throw y;
                }
              }
            }
            return m(i, l);
          }
          function n(a, l, b) {
            b = b || new P([]);
            var m = b.asyncFilters, E = b.extensionsList, i;
            l = l.replace(/\\/g, "/");
            try {
              i = _.compile(a, m, E, l, b.opts);
            } catch (c) {
              throw O(l, !1, c);
            }
            return {
              name: l,
              template: i
            };
          }
          t.exports = {
            precompile: N,
            precompileString: x
          };
        },
        /* 24 */
        /***/
        function(t, r, u) {
          function o(p, v) {
            var O = "";
            v = v || {};
            for (var _ = 0; _ < p.length; _++) {
              var T = JSON.stringify(p[_].name), P = p[_].template;
              O += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + T + `] = (function() {
` + P + `
})();
`, v.asFunction && (O += "return function(ctx, cb) { return nunjucks.render(" + T + `, ctx, cb); }
`), O += `})();
`;
            }
            return O;
          }
          t.exports = o;
        },
        /* 25 */
        /***/
        function(t, r, u) {
          function o() {
            var p = this.runtime, v = this.lib, O = this.compiler.Compiler, _ = this.parser.Parser, T = this.nodes, P = this.lexer, M = p.contextOrFrameLookup, R = p.memberLookup, x, N;
            O && (x = O.prototype.assertType), _ && (N = _.prototype.parseAggregate);
            function n() {
              p.contextOrFrameLookup = M, p.memberLookup = R, O && (O.prototype.assertType = x), _ && (_.prototype.parseAggregate = N);
            }
            p.contextOrFrameLookup = function(d, f, h) {
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
            function a(c) {
              return {
                index: c.index,
                lineno: c.lineno,
                colno: c.colno
              };
            }
            if (T && O && _) {
              var l = T.Node.extend("Slice", {
                fields: ["start", "stop", "step"],
                init: function(d, f, h, y, g) {
                  h = h || new T.Literal(d, f, null), y = y || new T.Literal(d, f, null), g = g || new T.Literal(d, f, 1), this.parent(d, f, h, y, g);
                }
              });
              O.prototype.assertType = function(d) {
                d instanceof l || x.apply(this, arguments);
              }, O.prototype.compileSlice = function(d, f) {
                this._emit("("), this._compileExpression(d.start, f), this._emit("),("), this._compileExpression(d.stop, f), this._emit("),("), this._compileExpression(d.step, f), this._emit(")");
              }, _.prototype.parseAggregate = function() {
                var d = this, f = a(this.tokens);
                f.colno--, f.index--;
                try {
                  return N.apply(this);
                } catch (K) {
                  var h = a(this.tokens), y = function() {
                    return v._assign(d.tokens, h), K;
                  };
                  v._assign(this.tokens, f), this.peeked = !1;
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
            function b(c, d, f, h) {
              c = c || [], d === null && (d = h < 0 ? c.length - 1 : 0), f === null ? f = h < 0 ? -1 : c.length : f < 0 && (f += c.length), d < 0 && (d += c.length);
              for (var y = [], g = d; !(g < 0 || g > c.length || h > 0 && g >= f || h < 0 && g <= f); g += h)
                y.push(p.memberLookup(c, g));
              return y;
            }
            function m(c, d) {
              return Object.prototype.hasOwnProperty.call(c, d);
            }
            var E = {
              pop: function(d) {
                if (d === void 0)
                  return this.pop();
                if (d >= this.length || d < 0)
                  throw new Error("KeyError");
                return this.splice(d, 1);
              },
              append: function(d) {
                return this.push(d);
              },
              remove: function(d) {
                for (var f = 0; f < this.length; f++)
                  if (this[f] === d)
                    return this.splice(f, 1);
                throw new Error("ValueError");
              },
              count: function(d) {
                for (var f = 0, h = 0; h < this.length; h++)
                  this[h] === d && f++;
                return f;
              },
              index: function(d) {
                var f;
                if ((f = this.indexOf(d)) === -1)
                  throw new Error("ValueError");
                return f;
              },
              find: function(d) {
                return this.indexOf(d);
              },
              insert: function(d, f) {
                return this.splice(d, 0, f);
              }
            }, i = {
              items: function() {
                return v._entries(this);
              },
              values: function() {
                return v._values(this);
              },
              keys: function() {
                return v.keys(this);
              },
              get: function(d, f) {
                var h = this[d];
                return h === void 0 && (h = f), h;
              },
              has_key: function(d) {
                return m(this, d);
              },
              pop: function(d, f) {
                var h = this[d];
                if (h === void 0 && f !== void 0)
                  h = f;
                else {
                  if (h === void 0)
                    throw new Error("KeyError");
                  delete this[d];
                }
                return h;
              },
              popitem: function() {
                var d = v.keys(this);
                if (!d.length)
                  throw new Error("KeyError");
                var f = d[0], h = this[f];
                return delete this[f], [f, h];
              },
              setdefault: function(d, f) {
                return f === void 0 && (f = null), d in this || (this[d] = f), this[d];
              },
              update: function(d) {
                return v._assign(this, d), null;
              }
            };
            return i.iteritems = i.items, i.itervalues = i.values, i.iterkeys = i.keys, p.memberLookup = function(d, f, h) {
              return arguments.length === 4 ? b.apply(this, arguments) : (d = d || {}, v.isArray(d) && m(E, f) ? E[f].bind(d) : v.isObject(d) && m(i, f) ? i[f].bind(d) : R.apply(this, arguments));
            }, n;
          }
          t.exports = o;
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
  return Object.entries(s).forEach(([t, r]) => {
    if (pr(r)) {
      const u = Object.values(r.content);
      e[t] = u.filter((o) => !(o != null && o.hidden)).map((o) => At(o.questions));
      return;
    }
    e[t] = r.value;
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
    const r = t.data ? JSON.parse(JSON.stringify(this.data)) : null;
    e !== "empty" && this.init(e), r && this.applyDataToQuestions(r);
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
    const r = or(e);
    return r.type === "repeat" && this.buildContentForRepeatQuestion(r), this.interview.set(r.id, r), this.events.dispatch("question-added", r), r;
  }
  remove(e) {
    if (!this.interview.has(e))
      throw new Error("No question with id:" + e);
    this.interview.delete(e);
  }
  getNestedInterview(e, t) {
    const r = this.interview.get(e);
    if (!r)
      throw new Error("No question with id:" + e);
    if ((r == null ? void 0 : r.type) !== "repeat")
      throw new Error("Question with id " + e + " is not a repeat question");
    return r.content[t].nestedInterview;
  }
  canBeShown(e) {
    var t;
    if ((t = e.logic) != null && t.showIf) {
      const r = this.interview.keys(), u = this.interview.values();
      return Function(...r, `return ${e.logic.showIf}`).bind(this)(...u);
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
    for (let r = 0; r < t.length; r++) {
      const [u] = t[r];
      if (e === u) {
        const o = this.nextAvailableQuestion(r + 1);
        o && this.setCurrent(o[0]);
        break;
      }
    }
  }
  nextAvailableQuestion(e) {
    const t = Array.from(this.interview);
    for (let r = e; r < t.length; r++) {
      const [u, o] = t[r];
      if (this.canBeShown(o))
        return t[r];
    }
  }
  previous() {
    const e = this.getCurrent().id, t = Array.from(this.interview);
    for (let r = 0; r < t.length; r++) {
      const [u] = t[r];
      if (e === u) {
        const o = this.previousAvailableQuestion(r - 1);
        o && this.setCurrent(o[0]);
        break;
      }
    }
  }
  previousAvailableQuestion(e) {
    const t = Array.from(this.interview);
    for (let r = e; r >= 0; r--) {
      const [u, o] = t[r];
      if (this.canBeShown(o))
        return t[r];
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
    const r = this.interview.get(e);
    if (!r)
      throw new Error("No question with id:" + e);
    ir(t, r), r.value = t, (r == null ? void 0 : r.type) === "multipleChoice" && this.setRadioChecked(r, t), (r == null ? void 0 : r.type) === "repeat" && this.buildContentForRepeatQuestion(r, t), this.data[e] ? this.data[e].value = r.value : this.data[e] = { value: r.value }, this.events.dispatch("set-value", this.interview.get(e));
  }
  on(e, t) {
    this.events.register(e, t);
  }
  getData() {
    return this.data;
  }
  setRadioChecked(e, t) {
    e.choices.forEach((r) => {
      r.checked = r.label === t;
    });
  }
  buildContentForRepeatQuestion(e, t = null) {
    const { range: r, id: u, questions: o } = e, { min: p, max: v } = r;
    t = rr(e.value, p, v), e.value = t, e.content || (e.content = {}), this.data[u] ? this.data[u].value = t : this.data[u] = { value: t, content: {} };
    for (let _ = 0; _ < t; _++) {
      if (e.content[_]) {
        e.content[_].hidden = !1;
        continue;
      }
      this.data[u].content[_] = { hidden: !1, questions: {} };
      const T = new St(cr(o, _), {
        isRoot: !1,
        events: this.events,
        data: this.data[u].content[_].questions
      });
      e.content[_] = { hidden: !1, nestedInterview: T };
    }
    const O = Object.keys(e.content);
    if (t < O.length)
      for (let _ = t; _ < O.length; _++)
        e.content[_].hidden = !0, this.data[u].content[_].hidden = !0;
  }
  applyDataToQuestions(e) {
    Object.entries(e).forEach(([t, { value: r, content: u }]) => {
      this.setValue(t, r), u && Object.values(u).forEach((o, p) => {
        o.hidden || this.getNestedInterview(t, p).applyDataToQuestions(o.questions);
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
    const o = Array.from(this.interview, ([v, O]) => ({ name: v, value: O }));
    o.forEach((v, O) => {
      v.name === e && (o[O].value.id = t, o[O].name = t);
    });
    const p = /* @__PURE__ */ new Map();
    o.forEach((v) => {
      p.set(v.name, v.value);
    }), this.interview = p;
  }
  changeOrderOfQuestions(e, t) {
    const r = Array.from(this.interview, ([p, v]) => ({ name: p, value: v })), u = r[e];
    r[e] = r[t], r[t] = u;
    const o = /* @__PURE__ */ new Map();
    r.forEach((p) => {
      o.set(p.name, p.value);
    }), this.interview = o;
  }
  addChoiceToMultipleChoice(e, t) {
    const r = this.interview.get(e);
    if (!r)
      throw new Error("No question with id:" + e);
    if ((r == null ? void 0 : r.type) !== "multipleChoice")
      throw new Error("Question with id " + e + " is not a multiple choice question");
    r.choices.push(t);
  }
  changeOrderOfChoices(e, t, r) {
    const u = this.interview.get(e);
    if (!u)
      throw new Error("No question with id:" + e);
    if ((u == null ? void 0 : u.type) !== "multipleChoice")
      throw new Error("Question with id " + e + " is not a multiple choice question");
    const o = u.choices;
    var p = o[t];
    o[t] = o[r], o[r] = p;
  }
  removeChoiceFromMultipleChoice(e, t) {
    const r = this.interview.get(e);
    if (!r)
      throw new Error("No question with id:" + e);
    if ((r == null ? void 0 : r.type) !== "multipleChoice")
      throw new Error("Question with id " + e + " is not a multiple choice question");
    r.choices.splice(t, 1);
  }
  changeLabelOfChoice(e, t, r) {
    const u = this.interview.get(e);
    if (!u)
      throw new Error("No question with id:" + e);
    if ((u == null ? void 0 : u.type) !== "multipleChoice")
      throw new Error("Question with id " + e + " is not a multiple choice question");
    if (!r)
      throw new Error("No label provided");
    if (!u.choices[t])
      throw new Error("No choice with index:" + t);
    u.choices[t].label = r;
  }
  setDefaultCheckedChoice(e, t) {
    const r = this.interview.get(e);
    if (!r)
      throw new Error("No question with id:" + e);
    if ((r == null ? void 0 : r.type) !== "multipleChoice")
      throw new Error("Question with id " + e + " is not a multiple choice question");
    if (!r.choices[t])
      throw new Error("No choice with index:" + t);
    r.choices.forEach((u) => u.checked = !1), r.choices[t].checked = !0;
  }
  setQuestionAsRequired(e, t) {
    const r = this.interview.get(e);
    if (!r)
      throw new Error("No question with id:" + e);
    r.required = t;
  }
  setTitleOfQuestion(e, t) {
    const r = this.interview.get(e);
    if (!r)
      throw new Error("No question with id:" + e);
    r.title = t;
  }
  setPlaceholder(e, t) {
    const r = this.interview.get(e);
    if (!r)
      throw new Error("No question with id:" + e);
    r.placeholder = t;
  }
  setExtraOption(e, t, r) {
    const u = this.interview.get(e);
    if (!u)
      throw new Error("No question with id:" + e);
    u.options || (u.options = {}), u.options[t] = r;
  }
  setIndications(e, t) {
    const r = this.interview.get(e);
    if (!r)
      throw new Error("No question with id:" + e);
    r.indications = t;
  }
}
export {
  St as GuidedInterview
};
