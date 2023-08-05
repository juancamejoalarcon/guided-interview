var Kt = Object.defineProperty;
var jt = (i, t, e) => t in i ? Kt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var Le = (i, t, e) => (jt(i, typeof t != "symbol" ? t + "" : t, e), e);
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dt(i) {
  if (i.__esModule)
    return i;
  var t = i.default;
  if (typeof t == "function") {
    var e = function r() {
      if (this instanceof r) {
        var u = [null];
        u.push.apply(u, arguments);
        var a = Function.bind.apply(t, u);
        return new a();
      }
      return t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(i).forEach(function(r) {
    var u = Object.getOwnPropertyDescriptor(i, r);
    Object.defineProperty(e, r, u.get ? u : {
      enumerable: !0,
      get: function() {
        return i[r];
      }
    });
  }), e;
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
var Qt = Yt(Ne);
function Yt(i) {
  return i && i.__esModule ? i : { default: i };
}
const pe = [];
for (let i = 0; i < 256; ++i)
  pe.push((i + 256).toString(16).slice(1));
function yt(i, t = 0) {
  return (pe[i[t + 0]] + pe[i[t + 1]] + pe[i[t + 2]] + pe[i[t + 3]] + "-" + pe[i[t + 4]] + pe[i[t + 5]] + "-" + pe[i[t + 6]] + pe[i[t + 7]] + "-" + pe[i[t + 8]] + pe[i[t + 9]] + "-" + pe[i[t + 10]] + pe[i[t + 11]] + pe[i[t + 12]] + pe[i[t + 13]] + pe[i[t + 14]] + pe[i[t + 15]]).toLowerCase();
}
function zt(i, t = 0) {
  const e = yt(i, t);
  if (!(0, Qt.default)(e))
    throw TypeError("Stringified UUID is invalid");
  return e;
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
function tn(i, t, e) {
  let r = t && e || 0;
  const u = t || new Array(16);
  i = i || {};
  let a = i.node || pt, d = i.clockseq !== void 0 ? i.clockseq : st;
  if (a == null || d == null) {
    const M = i.random || (i.rng || Xt.default)();
    a == null && (a = pt = [M[0] | 1, M[1], M[2], M[3], M[4], M[5]]), d == null && (d = st = (M[6] << 8 | M[7]) & 16383);
  }
  let v = i.msecs !== void 0 ? i.msecs : Date.now(), O = i.nsecs !== void 0 ? i.nsecs : at + 1;
  const _ = v - ot + (O - at) / 1e4;
  if (_ < 0 && i.clockseq === void 0 && (d = d + 1 & 16383), (_ < 0 || v > ot) && i.nsecs === void 0 && (O = 0), O >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ot = v, at = O, st = d, v += 122192928e5;
  const T = ((v & 268435455) * 1e4 + O) % 4294967296;
  u[r++] = T >>> 24 & 255, u[r++] = T >>> 16 & 255, u[r++] = T >>> 8 & 255, u[r++] = T & 255;
  const P = v / 4294967296 * 1e4 & 268435455;
  u[r++] = P >>> 8 & 255, u[r++] = P & 255, u[r++] = P >>> 24 & 15 | 16, u[r++] = P >>> 16 & 255, u[r++] = d >>> 8 | 128, u[r++] = d & 255;
  for (let M = 0; M < 6; ++M)
    u[r + M] = a[M];
  return t || (0, Zt.unsafeStringify)(u);
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
  let t;
  const e = new Uint8Array(16);
  return e[0] = (t = parseInt(i.slice(0, 8), 16)) >>> 24, e[1] = t >>> 16 & 255, e[2] = t >>> 8 & 255, e[3] = t & 255, e[4] = (t = parseInt(i.slice(9, 13), 16)) >>> 8, e[5] = t & 255, e[6] = (t = parseInt(i.slice(14, 18), 16)) >>> 8, e[7] = t & 255, e[8] = (t = parseInt(i.slice(19, 23), 16)) >>> 8, e[9] = t & 255, e[10] = (t = parseInt(i.slice(24, 36), 16)) / 1099511627776 & 255, e[11] = t / 4294967296 & 255, e[12] = t >>> 24 & 255, e[13] = t >>> 16 & 255, e[14] = t >>> 8 & 255, e[15] = t & 255, e;
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
  const t = [];
  for (let e = 0; e < i.length; ++e)
    t.push(i.charCodeAt(e));
  return t;
}
const _t = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
Te.DNS = _t;
const wt = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
Te.URL = wt;
function hn(i, t, e) {
  function r(u, a, d, v) {
    var O;
    if (typeof u == "string" && (u = fn(u)), typeof a == "string" && (a = (0, un.default)(a)), ((O = a) === null || O === void 0 ? void 0 : O.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let _ = new Uint8Array(16 + u.length);
    if (_.set(a), _.set(u, a.length), _ = e(_), _[6] = _[6] & 15 | t, _[8] = _[8] & 63 | 128, d) {
      v = v || 0;
      for (let T = 0; T < 16; ++T)
        d[v + T] = _[T];
      return d;
    }
    return (0, ln.unsafeStringify)(_);
  }
  try {
    r.name = i;
  } catch {
  }
  return r.DNS = _t, r.URL = wt, r;
}
var We = {};
Object.defineProperty(We, "__esModule", {
  value: !0
});
We.default = void 0;
function pn(i) {
  if (typeof i == "string") {
    const t = unescape(encodeURIComponent(i));
    i = new Uint8Array(t.length);
    for (let e = 0; e < t.length; ++e)
      i[e] = t.charCodeAt(e);
  }
  return dn(vn(mn(i), i.length * 8));
}
function dn(i) {
  const t = [], e = i.length * 32, r = "0123456789abcdef";
  for (let u = 0; u < e; u += 8) {
    const a = i[u >> 5] >>> u % 32 & 255, d = parseInt(r.charAt(a >>> 4 & 15) + r.charAt(a & 15), 16);
    t.push(d);
  }
  return t;
}
function Et(i) {
  return (i + 64 >>> 9 << 4) + 14 + 1;
}
function vn(i, t) {
  i[t >> 5] |= 128 << t % 32, i[Et(t) - 1] = t;
  let e = 1732584193, r = -271733879, u = -1732584194, a = 271733878;
  for (let d = 0; d < i.length; d += 16) {
    const v = e, O = r, _ = u, T = a;
    e = de(e, r, u, a, i[d], 7, -680876936), a = de(a, e, r, u, i[d + 1], 12, -389564586), u = de(u, a, e, r, i[d + 2], 17, 606105819), r = de(r, u, a, e, i[d + 3], 22, -1044525330), e = de(e, r, u, a, i[d + 4], 7, -176418897), a = de(a, e, r, u, i[d + 5], 12, 1200080426), u = de(u, a, e, r, i[d + 6], 17, -1473231341), r = de(r, u, a, e, i[d + 7], 22, -45705983), e = de(e, r, u, a, i[d + 8], 7, 1770035416), a = de(a, e, r, u, i[d + 9], 12, -1958414417), u = de(u, a, e, r, i[d + 10], 17, -42063), r = de(r, u, a, e, i[d + 11], 22, -1990404162), e = de(e, r, u, a, i[d + 12], 7, 1804603682), a = de(a, e, r, u, i[d + 13], 12, -40341101), u = de(u, a, e, r, i[d + 14], 17, -1502002290), r = de(r, u, a, e, i[d + 15], 22, 1236535329), e = ve(e, r, u, a, i[d + 1], 5, -165796510), a = ve(a, e, r, u, i[d + 6], 9, -1069501632), u = ve(u, a, e, r, i[d + 11], 14, 643717713), r = ve(r, u, a, e, i[d], 20, -373897302), e = ve(e, r, u, a, i[d + 5], 5, -701558691), a = ve(a, e, r, u, i[d + 10], 9, 38016083), u = ve(u, a, e, r, i[d + 15], 14, -660478335), r = ve(r, u, a, e, i[d + 4], 20, -405537848), e = ve(e, r, u, a, i[d + 9], 5, 568446438), a = ve(a, e, r, u, i[d + 14], 9, -1019803690), u = ve(u, a, e, r, i[d + 3], 14, -187363961), r = ve(r, u, a, e, i[d + 8], 20, 1163531501), e = ve(e, r, u, a, i[d + 13], 5, -1444681467), a = ve(a, e, r, u, i[d + 2], 9, -51403784), u = ve(u, a, e, r, i[d + 7], 14, 1735328473), r = ve(r, u, a, e, i[d + 12], 20, -1926607734), e = me(e, r, u, a, i[d + 5], 4, -378558), a = me(a, e, r, u, i[d + 8], 11, -2022574463), u = me(u, a, e, r, i[d + 11], 16, 1839030562), r = me(r, u, a, e, i[d + 14], 23, -35309556), e = me(e, r, u, a, i[d + 1], 4, -1530992060), a = me(a, e, r, u, i[d + 4], 11, 1272893353), u = me(u, a, e, r, i[d + 7], 16, -155497632), r = me(r, u, a, e, i[d + 10], 23, -1094730640), e = me(e, r, u, a, i[d + 13], 4, 681279174), a = me(a, e, r, u, i[d], 11, -358537222), u = me(u, a, e, r, i[d + 3], 16, -722521979), r = me(r, u, a, e, i[d + 6], 23, 76029189), e = me(e, r, u, a, i[d + 9], 4, -640364487), a = me(a, e, r, u, i[d + 12], 11, -421815835), u = me(u, a, e, r, i[d + 15], 16, 530742520), r = me(r, u, a, e, i[d + 2], 23, -995338651), e = ge(e, r, u, a, i[d], 6, -198630844), a = ge(a, e, r, u, i[d + 7], 10, 1126891415), u = ge(u, a, e, r, i[d + 14], 15, -1416354905), r = ge(r, u, a, e, i[d + 5], 21, -57434055), e = ge(e, r, u, a, i[d + 12], 6, 1700485571), a = ge(a, e, r, u, i[d + 3], 10, -1894986606), u = ge(u, a, e, r, i[d + 10], 15, -1051523), r = ge(r, u, a, e, i[d + 1], 21, -2054922799), e = ge(e, r, u, a, i[d + 8], 6, 1873313359), a = ge(a, e, r, u, i[d + 15], 10, -30611744), u = ge(u, a, e, r, i[d + 6], 15, -1560198380), r = ge(r, u, a, e, i[d + 13], 21, 1309151649), e = ge(e, r, u, a, i[d + 4], 6, -145523070), a = ge(a, e, r, u, i[d + 11], 10, -1120210379), u = ge(u, a, e, r, i[d + 2], 15, 718787259), r = ge(r, u, a, e, i[d + 9], 21, -343485551), e = xe(e, v), r = xe(r, O), u = xe(u, _), a = xe(a, T);
  }
  return [e, r, u, a];
}
function mn(i) {
  if (i.length === 0)
    return [];
  const t = i.length * 8, e = new Uint32Array(Et(t));
  for (let r = 0; r < t; r += 8)
    e[r >> 5] |= (i[r / 8] & 255) << r % 32;
  return e;
}
function xe(i, t) {
  const e = (i & 65535) + (t & 65535);
  return (i >> 16) + (t >> 16) + (e >> 16) << 16 | e & 65535;
}
function gn(i, t) {
  return i << t | i >>> 32 - t;
}
function Ge(i, t, e, r, u, a) {
  return xe(gn(xe(xe(t, i), xe(r, a)), u), e);
}
function de(i, t, e, r, u, a, d) {
  return Ge(t & e | ~t & r, i, t, u, a, d);
}
function ve(i, t, e, r, u, a, d) {
  return Ge(t & r | e & ~r, i, t, u, a, d);
}
function me(i, t, e, r, u, a, d) {
  return Ge(t ^ e ^ r, i, t, u, a, d);
}
function ge(i, t, e, r, u, a, d) {
  return Ge(e ^ (t | ~r), i, t, u, a, d);
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
function Ot(i) {
  return i && i.__esModule ? i : { default: i };
}
function Tn(i, t, e) {
  if (dt.default.randomUUID && !t && !i)
    return dt.default.randomUUID();
  i = i || {};
  const r = i.random || (i.rng || Ln.default)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    e = e || 0;
    for (let u = 0; u < 16; ++u)
      t[e + u] = r[u];
    return t;
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
function Sn(i, t, e, r) {
  switch (i) {
    case 0:
      return t & e ^ ~t & r;
    case 1:
      return t ^ e ^ r;
    case 2:
      return t & e ^ t & r ^ e & r;
    case 3:
      return t ^ e ^ r;
  }
}
function lt(i, t) {
  return i << t | i >>> 32 - t;
}
function Nn(i) {
  const t = [1518500249, 1859775393, 2400959708, 3395469782], e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof i == "string") {
    const d = unescape(encodeURIComponent(i));
    i = [];
    for (let v = 0; v < d.length; ++v)
      i.push(d.charCodeAt(v));
  } else
    Array.isArray(i) || (i = Array.prototype.slice.call(i));
  i.push(128);
  const r = i.length / 4 + 2, u = Math.ceil(r / 16), a = new Array(u);
  for (let d = 0; d < u; ++d) {
    const v = new Uint32Array(16);
    for (let O = 0; O < 16; ++O)
      v[O] = i[d * 64 + O * 4] << 24 | i[d * 64 + O * 4 + 1] << 16 | i[d * 64 + O * 4 + 2] << 8 | i[d * 64 + O * 4 + 3];
    a[d] = v;
  }
  a[u - 1][14] = (i.length - 1) * 8 / Math.pow(2, 32), a[u - 1][14] = Math.floor(a[u - 1][14]), a[u - 1][15] = (i.length - 1) * 8 & 4294967295;
  for (let d = 0; d < u; ++d) {
    const v = new Uint32Array(80);
    for (let R = 0; R < 16; ++R)
      v[R] = a[d][R];
    for (let R = 16; R < 80; ++R)
      v[R] = lt(v[R - 3] ^ v[R - 8] ^ v[R - 14] ^ v[R - 16], 1);
    let O = e[0], _ = e[1], T = e[2], P = e[3], M = e[4];
    for (let R = 0; R < 80; ++R) {
      const x = Math.floor(R / 20), N = lt(O, 5) + Sn(x, _, T, P) + M + t[x] + v[R] >>> 0;
      M = P, P = T, T = lt(_, 30) >>> 0, _ = O, O = N;
    }
    e[0] = e[0] + O >>> 0, e[1] = e[1] + _ >>> 0, e[2] = e[2] + T >>> 0, e[3] = e[3] + P >>> 0, e[4] = e[4] + M >>> 0;
  }
  return [e[0] >> 24 & 255, e[0] >> 16 & 255, e[0] >> 8 & 255, e[0] & 255, e[1] >> 24 & 255, e[1] >> 16 & 255, e[1] >> 8 & 255, e[1] & 255, e[2] >> 24 & 255, e[2] >> 16 & 255, e[2] >> 8 & 255, e[2] & 255, e[3] >> 24 & 255, e[3] >> 16 & 255, e[3] >> 8 & 255, e[3] & 255, e[4] >> 24 & 255, e[4] >> 16 & 255, e[4] >> 8 & 255, e[4] & 255];
}
var Cn = Nn;
ze.default = Cn;
Object.defineProperty(Ye, "__esModule", {
  value: !0
});
Ye.default = void 0;
var Rn = kt(Te), In = kt(ze);
function kt(i) {
  return i && i.__esModule ? i : { default: i };
}
const Pn = (0, Rn.default)("v5", 80, In.default);
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
      return t.default;
    }
  }), Object.defineProperty(i, "v3", {
    enumerable: !0,
    get: function() {
      return e.default;
    }
  }), Object.defineProperty(i, "v4", {
    enumerable: !0,
    get: function() {
      return r.default;
    }
  }), Object.defineProperty(i, "v5", {
    enumerable: !0,
    get: function() {
      return u.default;
    }
  }), Object.defineProperty(i, "validate", {
    enumerable: !0,
    get: function() {
      return v.default;
    }
  }), Object.defineProperty(i, "version", {
    enumerable: !0,
    get: function() {
      return d.default;
    }
  });
  var t = T(Ue), e = T($e), r = T(He), u = T(Ye), a = T(Je), d = T(Xe), v = T(Ne), O = T(Ae), _ = T(Pe);
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
  withLength(t) {
    return t && (this.config.length = t), this;
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
  constructor(t) {
    this.config = t;
  }
  /**
   * Assign the given `length` for the random string. By default, uses a length of 21 characters.
   *
   * @param length
   *
   * @returns {this}
   */
  length(t) {
    return this.config.withLength(t), this;
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
class Qn {
  /**
   * Create a new random string generator instance.
   */
  constructor(t, e) {
    this.Str = t, this.config = e;
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
    let t = "";
    return this.config.shouldUseCharacters() && (t += this.characters()), this.config.shouldUseNumbers() && (t += this.numbers()), this.config.shouldUseSymbols() && (t += this.symbols()), new this.Str(t).shuffle().get();
  }
  /**
   * Assign the given `length` for the random string. By default, uses a length of 21 characters.
   *
   * @param length
   *
   * @returns {this}
   */
  generate() {
    const t = this.alphabet();
    if (!t)
      throw new Error("You must specify the character set when using the string builder in Str.random(builder => …)");
    let e = this.config.length();
    const r = Hn.default.randomBytes(e), u = t.length - 1;
    let a = "";
    for (; e--; )
      a += t[r[e] & u];
    return a;
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
  constructor(t, e) {
    this.strings = t, this.searchValue = e, this.shouldReplaceAll = !1, this.shouldReplaceLast = !1;
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
  with(t) {
    switch (!0) {
      case this.shouldReplaceAll:
        return this.strings.replaceAll(this.searchValue, t ?? "");
      case this.shouldReplaceLast:
        return this.strings.replaceLast(this.searchValue, t ?? "");
      default:
        return this.strings.replace(this.searchValue, t ?? "");
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
  constructor(t) {
    this.value = String(t ?? "").slice(0);
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
  after(t) {
    if (t === "")
      return this;
    const e = this.split(t);
    return e.length === 1 ? this : new te(e.slice(1).join(t));
  }
  /**
   * Returns the portion of the string after the last occurrence of the given `delimiter`.
   *
   * @param {String} delimiter
   *
   * @return {Str}
   */
  afterLast(t) {
    return t === "" ? this : new te(this.split(t).pop());
  }
  /**
   * Append the given values to the string.
   *
   * @param {any} values
   *
   * @return {Str}
   */
  append(...t) {
    return new te(this.value + [].concat(...t).join(""));
  }
  /**
   * Returns the character at the given `index` or undefined if the index exceeds the set’s size.
   *
   * @param {Number} index
   *
   * @returns {string|undefined}
   */
  at(t) {
    const e = this.length();
    if (t < 0 && (t += e), !(t < 0 || t > e))
      return this.value[t];
  }
  /**
   * Returns the portion of the string before the first occurrence of the given `delimiter`.
   *
   * @param {String} delimiter
   *
   * @returns {Str}
   */
  before(t) {
    return t === "" ? this : new te(this.split(t).shift());
  }
  /**
   * Returns the portion of the string before the last occurrence of the given `delimiter`.
   *
   * @param {String} delimiter
   *
   * @return {Str}
   */
  beforeLast(t) {
    if (t === "")
      return this;
    const e = this.split(t);
    return e.length === 1 ? this : new te(e.slice(0, -1).join(t));
  }
  /**
   * Convert the string to camelCase.
   *
   * @returns {Str}
   */
  camel() {
    return new te(this.replaceAll(/[_-]+/, " ").splitCamel().map((t) => new te(t).lower().ucFirst().get()).join("")).lcFirst();
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
  concat(...t) {
    return t = [].concat(...t), new te(this.value.concat(...t));
  }
  /**
   * Determine whether the haystack contains any of the given `needles`.
   *
   * @param {String} needle
   *
   * @returns {Boolean}
   */
  contains(...t) {
    return this.includes(...t);
  }
  /**
   * Determine whether the haystack contains all items if the `needles` array.
   *
   * @param {String} needle
   *
   * @returns {Boolean}
   */
  containsAll(...t) {
    return this.includesAll(...t);
  }
  /**
   * Determine whether the string contains the byte order mark (BOM) at any position in the string.
   *
   * @returns {Boolean}
   */
  containsBom() {
    return this.chars().some((t, e) => this.value.charCodeAt(e) === this.bomCharCode());
  }
  /**
   * Determine whether the haystack does not contain the given `needle`.
   *
   * @param {String} needle
   *
   * @returns {Boolean}
   */
  notContains(t) {
    return !this.contains(t);
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
  endsWith(t, e) {
    return this.value.endsWith(t, e);
  }
  /**
   * Determine whether the string equals the given `value`.
   *
   * @param {String} value
   *
   * @returns {Boolean}
   */
  equals(t) {
    return t instanceof te ? this.value === t.get() : this.value === t;
  }
  /**
   * Determine whether the string equals given `value` when ignoring character casing.
   *
   * @param {String} value
   *
   * @returns {Boolean}
   */
  equalsIgnoreCase(t) {
    return this.lower().equals(new te(t).lower().get());
  }
  /**
   * Determine whether the string does not equal the given `value`.
   *
   * @param {String} value
   *
   * @returns {Boolean}
   */
  notEquals(t) {
    return !this.equals(t);
  }
  /**
   * Append a single instance of the given `suffix` to the end of
   * the string if it doesn’t already ends with the given suffix.
   *
   * @param {String} suffix
   *
   * @returns {Str}
   */
  finish(t) {
    return this.endsWith(t) ? this : this.append(t);
  }
  /**
   * Determine whether the given string contains the `needle`.
   *
   * @param {*} needle
   *
   * @returns {Boolean}
   */
  includes(...t) {
    return [].concat(...t).filter((e) => e !== "").some((e) => this.value.includes(e));
  }
  /**
   * Determine whether the haystack contains all items if the `needles` array.
   *
   * @param {String} needle
   *
   * @returns {Boolean}
   */
  includesAll(...t) {
    return [].concat(...t).every((e) => this.includes(e));
  }
  /**
   * Determine whether the string does not contain the given `needle`.
   *
   * @param {String} needle
   *
   * @returns {Boolean}
   */
  notIncludes(t) {
    return !this.includes(t);
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
  isString(t) {
    return typeof t == "string" && Object.prototype.toString.call(t) === "[object String]";
  }
  /**
   * Determine whether the given `input` is an alpha-numeric string.
   *
   * @param input
   */
  isAlphaNumeric(t) {
    return this.isString(t) && t.length > 0 && t.match(/^[A-Za-z0-9\u00C0-\u00FF]*$/) !== null;
  }
  /**
   * Determine whether the given `input` is a symbol.
   *
   * @param {*} input
   *
   * @returns {Boolean}
   */
  isSymbol(t) {
    return Object.prototype.toString.call(t) === "[object Symbol]";
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
  kebab(t = "-") {
    return new te(this.value.replace(/[_-\s]+/g, t)).strip().toLowerCase();
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
  hasLength(t) {
    return this.length() === t;
  }
  /**
   * Returns the first `limit` characters and ends the limited string with `end`.
   *
   * @param {Number} limit
   * @param {String} end
   *
   * @returns {Str}
   */
  limit(t = 0, e = "") {
    return this.length() <= t ? this : new te(this.value.substring(0, t).concat(e));
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
  ltrim(t = "") {
    if (!t)
      return new te(this.value.trimStart());
    for (; this.startsWith(t); )
      this.value = this.slice(t.length).get();
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
  padBoth(t = 0, e = " ") {
    return t <= this.length() ? this : this.padLeft((this.length() + t) / 2, e).padRight(t, e);
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
  padLeft(t, e = " ") {
    return new te(this.value.padStart(t, e));
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
  padRight(t, e = " ") {
    return new te(this.value.padEnd(t, e));
  }
  /**
   * Parse a Class[@]method style string into the Class and method names.
   *
   * @returns {String[]}
   */
  parseCallback(t = "@", e) {
    if (this.notContains(t))
      return [this.value, e];
    const [r, u] = this.split(t, 2);
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
  prepend(...t) {
    return new te([].concat(...t).join("") + this.value);
  }
  /**
   * Create a random, URL-friendly string. The default length will have 21 symbols.
   *
   * @param {Number} [lengthOrCallback=21] number of symbols in string
   *
   * @returns {String}
   */
  random(t) {
    const e = new zn.RandomStringConfig(), r = new Jn.RandomStringBuilder(e);
    return t || r.characters().numbers().symbols(), typeof t == "function" && t(r), typeof t == "number" && r.characters().numbers().symbols().length(t), this.generateRandom(e);
  }
  /**
   * Create a random, URL-friendly string. The default length will have 21 symbols.
   *
   * @param {Number} [size=21] number of symbols in string
   *
   * @returns {String}
   */
  generateRandom(t) {
    return new Xn.RandomStringGenerator(te, t).generate();
  }
  replace(t, e) {
    return e == null ? new ut.StringReplacer(this, t) : new te(this.value.replace(t, e));
  }
  replaceAll(t, e) {
    if (e == null)
      return new ut.StringReplacer(this, t).all();
    const r = new RegExp(t, "g");
    return new te(this.value.replace(r, e));
  }
  replaceLast(t, e) {
    return e == null ? new ut.StringReplacer(this, t).last() : this.notContains(t.toString()) ? this : new te(this.beforeLast(t.toString()).get() + e + this.afterLast(t.toString()).get());
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
  rtrim(t = "") {
    if (!t)
      return new te(this.value.trimEnd());
    for (; this.endsWith(t); )
      this.value = this.replaceLast(t).with("").get();
    return new te(this.value);
  }
  /**
   * Shuffles the characters of the string using the Fisher-Yates
   * shuffle algorithm (also known as the Knuth-Shuffle).
   *
   * @returns {Str}
   */
  shuffle() {
    const t = this.chars();
    let e = t.length;
    for (; e; ) {
      const r = Math.floor(Math.random() * e--), u = t[e];
      t[e] = t[r], t[r] = u;
    }
    return new te(t.join(""));
  }
  /**
   * Returns a section of the string starting from the given `start` until the given `end`.
   *
   * @param {Number} start
   * @param {Number} end
   *
   * @returns {Str}
   */
  slice(t, e) {
    return new te(this.value.slice(t, e));
  }
  /**
   * Convert the string to a URL-friendly “slug” in kebab-case.
   *
   * @param {String} separator
   *
   * @returns {Str}
   */
  slug(t = "-") {
    return this.kebab(t);
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
  split(t, e) {
    return this.value.split(t, e);
  }
  /**
   * Split up the camelCased string into an array of strings.
   *
   * @returns {String[]}
   */
  splitCamel() {
    return this.split(new RegExp("([^\\p{L}\\d]+|(?<=\\p{L})(?=\\d)|(?<=\\d)(?=\\p{L})|(?<=[\\p{Ll}\\d])(?=\\p{Lu})|(?<=\\p{Lu})(?=\\p{Lu}\\p{Ll})|(?<=[\\p{L}\\d])(?=\\p{Lu}\\p{Ll}))", "gu")).map((t) => t.trim()).filter((t) => t.match(new RegExp(this.ALPHANUMERIC_PATTERN, "g")));
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
  start(t) {
    return this.startsWith(t) ? this : this.prepend(t);
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
  startsWith(t, e) {
    return this.value.startsWith(t, e);
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
  substr(t, e) {
    return new te(this.value.substring(t, e));
  }
  /**
   * Convert the string to title case.
   *
   * @returns {Str}
   */
  title() {
    return new te(this.split(" ").filter((t) => t).map((t) => new te(t)).map((t) => (t.isUpper() || (t = t.lower().replace(this.ALPHANUMERIC_PATTERN, (e) => e.toUpperCase())), t.get())).join(" "));
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
  trim(t = "") {
    return this.ltrim(t).rtrim(t);
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
  let t = null;
  return Object.entries(i).forEach(([e, r]) => {
    if (r.type === "repeat") {
      const a = xt(r.questions);
      a && (t = a);
    }
    Lt(e) || (t = e);
  }), t;
}, Tt = (i) => {
  const t = Object.values(i);
  let e = [];
  const r = t.map((u, a) => t.find((d, v) => {
    if (d.type === "repeat" && (e = Tt(d.questions)), a !== v && d.id === u.id)
      return u;
  })).filter(Boolean);
  return e.length && r.push(...e), r;
}, nr = (i) => {
  var r;
  const t = Tt(i);
  if (t.length)
    throw new Error(`Duplicated id values: ${(r = t[0]) == null ? void 0 : r.id}`);
  const e = xt(i);
  if (e)
    throw new Error(`ID must be in camel case: ${e}`);
  return !0;
}, rr = (i, t, e) => i < t ? (mt() || console.warn(`Value ${i} is lower than min ${t}. Returning min.`), t) : i > e ? (mt() || console.warn(`Value ${i} is higher than max ${e}. Returning max.`), e) : i, ir = (i, t) => {
  if (t.type === "repeat" && isNaN(i))
    throw new Error("Value of repeat question must be a number");
}, ht = class {
  constructor() {
    Le(this, "subscribers");
    this.subscribers = {};
  }
  dispatch(t, e) {
    const r = this.subscribers[t];
    r !== void 0 && Object.keys(r).forEach((u) => r[u](e));
  }
  register(t, e) {
    const r = this.getNextId();
    return this.subscribers[t] || (this.subscribers[t] = {}), this.subscribers[t][r] = e, {
      unregister: () => {
        delete this.subscribers[t][r], Object.keys(this.subscribers[t]).length === 0 && delete this.subscribers[t];
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
}, or = (i, t = !1) => {
  if (!sr[i.type])
    throw new Error("Invalid question type");
  const e = i.id || tr();
  let r;
  return i.type === "text" ? r = ft(i) : i.type === "date" ? r = ar(i) : i.type === "multipleChoice" ? r = lr(i) : i.type === "repeat" ? r = ur(i) : r = ft(i), {
    id: e,
    type: i.type,
    title: i.title || "",
    indications: i.indications || "",
    logic: i.logic || {},
    options: i.options || {},
    ...r
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
  var t;
  return {
    value: ((t = i.choices.find((e) => e.checked === !0)) == null ? void 0 : t.label) || "",
    choices: i.choices || [],
    subType: i.subType || "radio"
  };
}, ur = (i) => ({
  value: i.value || "",
  range: i.range || { min: 0, max: 0 },
  questions: i.questions || {}
}), cr = (i, t) => {
  const e = JSON.parse(JSON.stringify(i));
  return Object.entries(e).forEach(([r, u]) => {
    const a = t + 1;
    u.title && (u.title = u.title.replace(/\<%= index %>/g, a.toString()));
  }), e;
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
(function(i, t) {
  (function(r, u) {
    i.exports = u();
  })(typeof self < "u" ? self : ct, function() {
    return (
      /******/
      function(e) {
        var r = {};
        function u(a) {
          if (r[a])
            return r[a].exports;
          var d = r[a] = {
            /******/
            i: a,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return e[a].call(d.exports, d, d.exports, u), d.l = !0, d.exports;
        }
        return u.m = e, u.c = r, u.d = function(a, d, v) {
          u.o(a, d) || Object.defineProperty(a, d, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: v
            /******/
          });
        }, u.n = function(a) {
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
          return u.d(d, "a", d), d;
        }, u.o = function(a, d) {
          return Object.prototype.hasOwnProperty.call(a, d);
        }, u.p = "", u(u.s = 11);
      }([
        /* 0 */
        /***/
        function(e, _, u) {
          var a = Array.prototype, d = Object.prototype, v = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\\": "&#92;"
          }, O = /[&"'<>\\]/g, _ = e.exports = {};
          function T(w, S) {
            return d.hasOwnProperty.call(w, S);
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
          function s(w) {
            return Array.prototype.slice.call(w);
          }
          _.toArray = s;
          function c(w) {
            var S = [];
            if (!w)
              return S;
            for (var j = w.length, D = s(arguments).slice(1), $ = -1; ++$ < j; )
              A(D, w[$]) === -1 && S.push(w[$]);
            return S;
          }
          _.without = c;
          function p(w, S) {
            for (var j = "", D = 0; D < S; D++)
              j += w;
            return j;
          }
          _.repeat = p;
          function f(w, S, j) {
            if (w != null) {
              if (a.forEach && w.forEach === a.forEach)
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
          function B(w) {
            return I(w).map(function(S) {
              return w[S];
            });
          }
          _._values = B;
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
        function(e, r, u) {
          function a(o, l) {
            for (var b = 0; b < l.length; b++) {
              var m = l[b];
              m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(o, v(m.key), m);
            }
          }
          function d(o, l, b) {
            return l && a(o.prototype, l), b && a(o, b), Object.defineProperty(o, "prototype", { writable: !1 }), o;
          }
          function v(o) {
            var l = O(o, "string");
            return typeof l == "symbol" ? l : String(l);
          }
          function O(o, l) {
            if (typeof o != "object" || o === null)
              return o;
            var b = o[Symbol.toPrimitive];
            if (b !== void 0) {
              var m = b.call(o, l || "default");
              if (typeof m != "object")
                return m;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (l === "string" ? String : Number)(o);
          }
          function _(o, l) {
            o.prototype = Object.create(l.prototype), o.prototype.constructor = o, T(o, l);
          }
          function T(o, l) {
            return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, E) {
              return m.__proto__ = E, m;
            }, T(o, l);
          }
          var P = u(16), M = u(0);
          function R(o, l) {
            return typeof o != "function" || typeof l != "function" ? l : function() {
              var m = this.parent;
              this.parent = o;
              var E = l.apply(this, arguments);
              return this.parent = m, E;
            };
          }
          function x(o, l, b) {
            b = b || {}, M.keys(b).forEach(function(E) {
              b[E] = R(o.prototype[E], b[E]);
            });
            var m = /* @__PURE__ */ function(E) {
              _(s, E);
              function s() {
                return E.apply(this, arguments) || this;
              }
              return d(s, [{
                key: "typename",
                get: function() {
                  return l;
                }
              }]), s;
            }(o);
            return M._assign(m.prototype, b), m;
          }
          var N = /* @__PURE__ */ function() {
            function o() {
              this.init.apply(this, arguments);
            }
            var l = o.prototype;
            return l.init = function() {
            }, o.extend = function(m, E) {
              return typeof m == "object" && (E = m, m = "anonymous"), x(this, m, E);
            }, d(o, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), o;
          }(), n = /* @__PURE__ */ function(o) {
            _(l, o);
            function l() {
              var m, E;
              return E = o.call(this) || this, (m = E).init.apply(m, arguments), E;
            }
            var b = l.prototype;
            return b.init = function() {
            }, l.extend = function(E, s) {
              return typeof E == "object" && (s = E, E = "anonymous"), x(this, E, s);
            }, d(l, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), l;
          }(P);
          e.exports = {
            Obj: N,
            EmitterObj: n
          };
        },
        /* 2 */
        /***/
        function(e, r, u) {
          var a = u(0), d = Array.from, v = typeof Symbol == "function" && Symbol.iterator && typeof d == "function", O = /* @__PURE__ */ function() {
            function h(g, A) {
              this.variables = /* @__PURE__ */ Object.create(null), this.parent = g, this.topLevel = !1, this.isolateWrites = A;
            }
            var y = h.prototype;
            return y.set = function(A, I, C) {
              var B = A.split("."), K = this.variables, L = this;
              if (C && (L = this.resolve(B[0], !0))) {
                L.set(A, I);
                return;
              }
              for (var w = 0; w < B.length - 1; w++) {
                var S = B[w];
                K[S] || (K[S] = {}), K = K[S];
              }
              K[B[B.length - 1]] = I;
            }, y.get = function(A) {
              var I = this.variables[A];
              return I !== void 0 ? I : null;
            }, y.lookup = function(A) {
              var I = this.parent, C = this.variables[A];
              return C !== void 0 ? C : I && I.lookup(A);
            }, y.resolve = function(A, I) {
              var C = I && this.isolateWrites ? void 0 : this.parent, B = this.variables[A];
              return B !== void 0 ? this : C && C.resolve(A);
            }, y.push = function(A) {
              return new h(this, A);
            }, y.pop = function() {
              return this.parent;
            }, h;
          }();
          function _(h, y, g) {
            return function() {
              for (var I = arguments.length, C = new Array(I), B = 0; B < I; B++)
                C[B] = arguments[B];
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
          function s(h, y, g) {
            return h.lineno ? h : new a.TemplateError(h, y, g);
          }
          function c(h, y, g, A) {
            if (a.isArray(h)) {
              var I = h.length;
              a.asyncIter(h, function(B, K, L) {
                switch (y) {
                  case 1:
                    g(B, K, I, L);
                    break;
                  case 2:
                    g(B[0], B[1], K, I, L);
                    break;
                  case 3:
                    g(B[0], B[1], B[2], K, I, L);
                    break;
                  default:
                    B.push(K, I, L), g.apply(this, B);
                }
              }, A);
            } else
              a.asyncFor(h, function(B, K, L, w, S) {
                g(B, K, L, w, S);
              }, A);
          }
          function p(h, y, g, A) {
            var I = 0, C, B;
            function K($, ne) {
              I++, B[$] = ne, I === C && A(null, B.join(""));
            }
            if (a.isArray(h))
              if (C = h.length, B = new Array(C), C === 0)
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
              if (C = S.length, B = new Array(C), C === 0)
                A(null, "");
              else
                for (var j = 0; j < S.length; j++) {
                  var D = S[j];
                  g(D, h[D], j, C, K);
                }
            }
          }
          function f(h) {
            return typeof h != "object" || h === null || a.isArray(h) ? h : v && Symbol.iterator in h ? d(h) : h;
          }
          e.exports = {
            Frame: O,
            makeMacro: _,
            makeKeywordArgs: T,
            numArgs: R,
            suppressValue: o,
            ensureDefined: l,
            memberLookup: b,
            contextOrFrameLookup: E,
            callWrap: m,
            handleError: s,
            isArray: a.isArray,
            keys: a.keys,
            SafeString: x,
            copySafeness: N,
            markSafe: n,
            asyncEach: c,
            asyncAll: p,
            inOperator: a.inOperator,
            fromIterator: f
          };
        },
        /* 3 */
        /***/
        function(e, r, u) {
          function a(H, Q) {
            for (var ie = 0; ie < Q.length; ie++) {
              var re = Q[ie];
              re.enumerable = re.enumerable || !1, re.configurable = !0, "value" in re && (re.writable = !0), Object.defineProperty(H, v(re.key), re);
            }
          }
          function d(H, Q, ie) {
            return Q && a(H.prototype, Q), ie && a(H, ie), Object.defineProperty(H, "prototype", { writable: !1 }), H;
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
              for (var _e = arguments, Se = this, Ie = arguments.length, Bt = new Array(Ie > 2 ? Ie - 2 : 0), Be = 2; Be < Ie; Be++)
                Bt[Be - 2] = arguments[Be];
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
            }, Q;
          }(M), N = /* @__PURE__ */ function(H) {
            _(Q, H);
            function Q() {
              return H.apply(this, arguments) || this;
            }
            return d(Q, [{
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
            }, d(Q, [{
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
          }(x), o = n.extend("Root"), l = N.extend("Literal"), b = N.extend("Symbol"), m = n.extend("Group"), E = n.extend("Array"), s = x.extend("Pair", {
            fields: ["key", "value"]
          }), c = n.extend("Dict"), p = x.extend("LookupVal", {
            fields: ["target", "val"]
          }), f = x.extend("If", {
            fields: ["cond", "body", "else_"]
          }), h = f.extend("IfAsync"), y = x.extend("InlineIf", {
            fields: ["cond", "body", "else_"]
          }), g = x.extend("For", {
            fields: ["arr", "name", "body", "else_"]
          }), A = g.extend("AsyncEach"), I = g.extend("AsyncAll"), C = x.extend("Macro", {
            fields: ["name", "args", "body"]
          }), B = C.extend("Caller"), K = x.extend("Import", {
            fields: ["template", "target", "withContext"]
          }), L = /* @__PURE__ */ function(H) {
            _(Q, H);
            function Q() {
              return H.apply(this, arguments) || this;
            }
            var ie = Q.prototype;
            return ie.init = function(oe, ce, _e, Se, Ie) {
              H.prototype.init.call(this, oe, ce, _e, Se || new n(), Ie);
            }, d(Q, [{
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
          }), Oe = fe.extend("In"), k = fe.extend("Is"), F = fe.extend("Or"), V = fe.extend("And"), U = ye.extend("Not"), Y = fe.extend("Add"), J = fe.extend("Concat"), ae = fe.extend("Sub"), ee = fe.extend("Mul"), le = fe.extend("Div"), we = fe.extend("FloorDiv"), be = fe.extend("Mod"), ke = fe.extend("Pow"), Nt = ye.extend("Neg"), Ct = ye.extend("Pos"), Rt = x.extend("Compare", {
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
          e.exports = {
            Node: x,
            Root: o,
            NodeList: n,
            Value: N,
            Literal: l,
            Symbol: b,
            Group: m,
            Array: E,
            Pair: s,
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
            LookupVal: p,
            BinOp: fe,
            In: Oe,
            Is: k,
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
        function(e, r) {
        },
        /* 5 */
        /***/
        function(e, r, u) {
          function a(l, b) {
            l.prototype = Object.create(b.prototype), l.prototype.constructor = l, d(l, b);
          }
          function d(l, b) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(E, s) {
              return E.__proto__ = s, E;
            }, d(l, b);
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
          }, o = /* @__PURE__ */ function(l) {
            a(b, l);
            function b() {
              return l.apply(this, arguments) || this;
            }
            var m = b.prototype;
            return m.init = function(s, c) {
              this.templateName = s, this.codebuf = [], this.lastId = 0, this.buffer = null, this.bufferStack = [], this._scopeClosers = "", this.inBlock = !1, this.throwOnUndefined = c;
            }, m.fail = function(s, c, p) {
              throw c !== void 0 && (c += 1), p !== void 0 && (p += 1), new P(s, c, p);
            }, m._pushBuffer = function() {
              var s = this._tmpid();
              return this.bufferStack.push(this.buffer), this.buffer = s, this._emit("var " + this.buffer + ' = "";'), s;
            }, m._popBuffer = function() {
              this.buffer = this.bufferStack.pop();
            }, m._emit = function(s) {
              this.codebuf.push(s);
            }, m._emitLine = function(s) {
              this._emit(s + `
`);
            }, m._emitLines = function() {
              for (var s = this, c = arguments.length, p = new Array(c), f = 0; f < c; f++)
                p[f] = arguments[f];
              p.forEach(function(h) {
                return s._emitLine(h);
              });
            }, m._emitFuncBegin = function(s, c) {
              this.buffer = "output", this._scopeClosers = "", this._emitLine("function " + c + "(env, context, frame, runtime, cb) {"), this._emitLine("var lineno = " + s.lineno + ";"), this._emitLine("var colno = " + s.colno + ";"), this._emitLine("var " + this.buffer + ' = "";'), this._emitLine("try {");
            }, m._emitFuncEnd = function(s) {
              s || this._emitLine("cb(null, " + this.buffer + ");"), this._closeScopeLevels(), this._emitLine("} catch (e) {"), this._emitLine("  cb(runtime.handleError(e, lineno, colno));"), this._emitLine("}"), this._emitLine("}"), this.buffer = null;
            }, m._addScopeLevel = function() {
              this._scopeClosers += "})";
            }, m._closeScopeLevels = function() {
              this._emitLine(this._scopeClosers + ";"), this._scopeClosers = "";
            }, m._withScopedSyntax = function(s) {
              var c = this._scopeClosers;
              this._scopeClosers = "", s.call(this), this._closeScopeLevels(), this._scopeClosers = c;
            }, m._makeCallback = function(s) {
              var c = this._tmpid();
              return "function(" + c + (s ? "," + s : "") + `) {
if(` + c + ") { cb(" + c + "); return; }";
            }, m._tmpid = function() {
              return this.lastId++, "t_" + this.lastId;
            }, m._templateName = function() {
              return this.templateName == null ? "undefined" : JSON.stringify(this.templateName);
            }, m._compileChildren = function(s, c) {
              var p = this;
              s.children.forEach(function(f) {
                p.compile(f, c);
              });
            }, m._compileAggregate = function(s, c, p, f) {
              var h = this;
              p && this._emit(p), s.children.forEach(function(y, g) {
                g > 0 && h._emit(","), h.compile(y, c);
              }), f && this._emit(f);
            }, m._compileExpression = function(s, c) {
              this.assertType(s, _.Literal, _.Symbol, _.Group, _.Array, _.Dict, _.FunCall, _.Caller, _.Filter, _.LookupVal, _.Compare, _.InlineIf, _.In, _.Is, _.And, _.Or, _.Not, _.Add, _.Concat, _.Sub, _.Mul, _.Div, _.FloorDiv, _.Mod, _.Pow, _.Neg, _.Pos, _.Compare, _.NodeList), this.compile(s, c);
            }, m.assertType = function(s) {
              for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
                p[f - 1] = arguments[f];
              p.some(function(h) {
                return s instanceof h;
              }) || this.fail("assertType: invalid type: " + s.typename, s.lineno, s.colno);
            }, m.compileCallExtension = function(s, c, p) {
              var f = this, h = s.args, y = s.contentArgs, g = typeof s.autoescape == "boolean" ? s.autoescape : !0;
              if (p || this._emit(this.buffer + " += runtime.suppressValue("), this._emit('env.getExtension("' + s.extName + '")["' + s.prop + '"]('), this._emit("context"), (h || y) && this._emit(","), h && (h instanceof _.NodeList || this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"), h.children.forEach(function(I, C) {
                f._compileExpression(I, c), (C !== h.children.length - 1 || y.length) && f._emit(",");
              })), y.length && y.forEach(function(I, C) {
                if (C > 0 && f._emit(","), I) {
                  f._emitLine("function(cb) {"), f._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");
                  var B = f._pushBuffer();
                  f._withScopedSyntax(function() {
                    f.compile(I, c), f._emitLine("cb(null, " + B + ");");
                  }), f._popBuffer(), f._emitLine("return " + B + ";"), f._emitLine("}");
                } else
                  f._emit("null");
              }), p) {
                var A = this._tmpid();
                this._emitLine(", " + this._makeCallback(A)), this._emitLine(this.buffer + " += runtime.suppressValue(" + A + ", " + g + " && env.opts.autoescape);"), this._addScopeLevel();
              } else
                this._emit(")"), this._emit(", " + g + ` && env.opts.autoescape);
`);
            }, m.compileCallExtensionAsync = function(s, c) {
              this.compileCallExtension(s, c, !0);
            }, m.compileNodeList = function(s, c) {
              this._compileChildren(s, c);
            }, m.compileLiteral = function(s) {
              if (typeof s.value == "string") {
                var c = s.value.replace(/\\/g, "\\\\");
                c = c.replace(/"/g, '\\"'), c = c.replace(/\n/g, "\\n"), c = c.replace(/\r/g, "\\r"), c = c.replace(/\t/g, "\\t"), c = c.replace(/\u2028/g, "\\u2028"), this._emit('"' + c + '"');
              } else
                s.value === null ? this._emit("null") : this._emit(s.value.toString());
            }, m.compileSymbol = function(s, c) {
              var p = s.value, f = c.lookup(p);
              f ? this._emit(f) : this._emit('runtime.contextOrFrameLookup(context, frame, "' + p + '")');
            }, m.compileGroup = function(s, c) {
              this._compileAggregate(s, c, "(", ")");
            }, m.compileArray = function(s, c) {
              this._compileAggregate(s, c, "[", "]");
            }, m.compileDict = function(s, c) {
              this._compileAggregate(s, c, "{", "}");
            }, m.compilePair = function(s, c) {
              var p = s.key, f = s.value;
              p instanceof _.Symbol ? p = new _.Literal(p.lineno, p.colno, p.value) : p instanceof _.Literal && typeof p.value == "string" || this.fail("compilePair: Dict keys must be strings or names", p.lineno, p.colno), this.compile(p, c), this._emit(": "), this._compileExpression(f, c);
            }, m.compileInlineIf = function(s, c) {
              this._emit("("), this.compile(s.cond, c), this._emit("?"), this.compile(s.body, c), this._emit(":"), s.else_ !== null ? this.compile(s.else_, c) : this._emit('""'), this._emit(")");
            }, m.compileIn = function(s, c) {
              this._emit("runtime.inOperator("), this.compile(s.left, c), this._emit(","), this.compile(s.right, c), this._emit(")");
            }, m.compileIs = function(s, c) {
              var p = s.right.name ? s.right.name.value : s.right.value;
              this._emit('env.getTest("' + p + '").call(context, '), this.compile(s.left, c), s.right.args && (this._emit(","), this.compile(s.right.args, c)), this._emit(") === true");
            }, m._binOpEmitter = function(s, c, p) {
              this.compile(s.left, c), this._emit(p), this.compile(s.right, c);
            }, m.compileOr = function(s, c) {
              return this._binOpEmitter(s, c, " || ");
            }, m.compileAnd = function(s, c) {
              return this._binOpEmitter(s, c, " && ");
            }, m.compileAdd = function(s, c) {
              return this._binOpEmitter(s, c, " + ");
            }, m.compileConcat = function(s, c) {
              return this._binOpEmitter(s, c, ' + "" + ');
            }, m.compileSub = function(s, c) {
              return this._binOpEmitter(s, c, " - ");
            }, m.compileMul = function(s, c) {
              return this._binOpEmitter(s, c, " * ");
            }, m.compileDiv = function(s, c) {
              return this._binOpEmitter(s, c, " / ");
            }, m.compileMod = function(s, c) {
              return this._binOpEmitter(s, c, " % ");
            }, m.compileNot = function(s, c) {
              this._emit("!"), this.compile(s.target, c);
            }, m.compileFloorDiv = function(s, c) {
              this._emit("Math.floor("), this.compile(s.left, c), this._emit(" / "), this.compile(s.right, c), this._emit(")");
            }, m.compilePow = function(s, c) {
              this._emit("Math.pow("), this.compile(s.left, c), this._emit(", "), this.compile(s.right, c), this._emit(")");
            }, m.compileNeg = function(s, c) {
              this._emit("-"), this.compile(s.target, c);
            }, m.compilePos = function(s, c) {
              this._emit("+"), this.compile(s.target, c);
            }, m.compileCompare = function(s, c) {
              var p = this;
              this.compile(s.expr, c), s.ops.forEach(function(f) {
                p._emit(" " + n[f.type] + " "), p.compile(f.expr, c);
              });
            }, m.compileLookupVal = function(s, c) {
              this._emit("runtime.memberLookup(("), this._compileExpression(s.target, c), this._emit("),"), this._compileExpression(s.val, c), this._emit(")");
            }, m._getNodeName = function(s) {
              switch (s.typename) {
                case "Symbol":
                  return s.value;
                case "FunCall":
                  return "the return value of (" + this._getNodeName(s.name) + ")";
                case "LookupVal":
                  return this._getNodeName(s.target) + '["' + this._getNodeName(s.val) + '"]';
                case "Literal":
                  return s.value.toString();
                default:
                  return "--expression--";
              }
            }, m.compileFunCall = function(s, c) {
              this._emit("(lineno = " + s.lineno + ", colno = " + s.colno + ", "), this._emit("runtime.callWrap("), this._compileExpression(s.name, c), this._emit(', "' + this._getNodeName(s.name).replace(/"/g, '\\"') + '", context, '), this._compileAggregate(s.args, c, "[", "])"), this._emit(")");
            }, m.compileFilter = function(s, c) {
              var p = s.name;
              this.assertType(p, _.Symbol), this._emit('env.getFilter("' + p.value + '").call(context, '), this._compileAggregate(s.args, c), this._emit(")");
            }, m.compileFilterAsync = function(s, c) {
              var p = s.name, f = s.symbol.value;
              this.assertType(p, _.Symbol), c.set(f, f), this._emit('env.getFilter("' + p.value + '").call(context, '), this._compileAggregate(s.args, c), this._emitLine(", " + this._makeCallback(f)), this._addScopeLevel();
            }, m.compileKeywordArgs = function(s, c) {
              this._emit("runtime.makeKeywordArgs("), this.compileDict(s, c), this._emit(")");
            }, m.compileSet = function(s, c) {
              var p = this, f = [];
              s.targets.forEach(function(h) {
                var y = h.value, g = c.lookup(y);
                g == null && (g = p._tmpid(), p._emitLine("var " + g + ";")), f.push(g);
              }), s.value ? (this._emit(f.join(" = ") + " = "), this._compileExpression(s.value, c), this._emitLine(";")) : (this._emit(f.join(" = ") + " = "), this.compile(s.body, c), this._emitLine(";")), s.targets.forEach(function(h, y) {
                var g = f[y], A = h.value;
                p._emitLine('frame.set("' + A + '", ' + g + ", true);"), p._emitLine("if(frame.topLevel) {"), p._emitLine('context.setVariable("' + A + '", ' + g + ");"), p._emitLine("}"), A.charAt(0) !== "_" && (p._emitLine("if(frame.topLevel) {"), p._emitLine('context.addExport("' + A + '", ' + g + ");"), p._emitLine("}"));
              });
            }, m.compileSwitch = function(s, c) {
              var p = this;
              this._emit("switch ("), this.compile(s.expr, c), this._emit(") {"), s.cases.forEach(function(f, h) {
                p._emit("case "), p.compile(f.cond, c), p._emit(": "), p.compile(f.body, c), f.body.children.length && p._emitLine("break;");
              }), s.default && (this._emit("default:"), this.compile(s.default, c)), this._emit("}");
            }, m.compileIf = function(s, c, p) {
              var f = this;
              this._emit("if("), this._compileExpression(s.cond, c), this._emitLine(") {"), this._withScopedSyntax(function() {
                f.compile(s.body, c), p && f._emit("cb()");
              }), s.else_ ? (this._emitLine(`}
else {`), this._withScopedSyntax(function() {
                f.compile(s.else_, c), p && f._emit("cb()");
              })) : p && (this._emitLine(`}
else {`), this._emit("cb()")), this._emitLine("}");
            }, m.compileIfAsync = function(s, c) {
              this._emit("(function(cb) {"), this.compileIf(s, c, !0), this._emit("})(" + this._makeCallback()), this._addScopeLevel();
            }, m._emitLoopBindings = function(s, c, p, f) {
              var h = this, y = [{
                name: "index",
                val: p + " + 1"
              }, {
                name: "index0",
                val: p
              }, {
                name: "revindex",
                val: f + " - " + p
              }, {
                name: "revindex0",
                val: f + " - " + p + " - 1"
              }, {
                name: "first",
                val: p + " === 0"
              }, {
                name: "last",
                val: p + " === " + f + " - 1"
              }, {
                name: "length",
                val: f
              }];
              y.forEach(function(g) {
                h._emitLine('frame.set("loop.' + g.name + '", ' + g.val + ");");
              });
            }, m.compileFor = function(s, c) {
              var p = this, f = this._tmpid(), h = this._tmpid(), y = this._tmpid();
              if (c = c.push(), this._emitLine("frame = frame.push();"), this._emit("var " + y + " = "), this._compileExpression(s.arr, c), this._emitLine(";"), this._emit("if(" + y + ") {"), this._emitLine(y + " = runtime.fromIterator(" + y + ");"), s.name instanceof _.Array) {
                this._emitLine("var " + f + ";"), this._emitLine("if(runtime.isArray(" + y + ")) {"), this._emitLine("var " + h + " = " + y + ".length;"), this._emitLine("for(" + f + "=0; " + f + " < " + y + ".length; " + f + "++) {"), s.name.children.forEach(function(L, w) {
                  var S = p._tmpid();
                  p._emitLine("var " + S + " = " + y + "[" + f + "][" + w + "];"), p._emitLine('frame.set("' + L + '", ' + y + "[" + f + "][" + w + "]);"), c.set(s.name.children[w].value, S);
                }), this._emitLoopBindings(s, y, f, h), this._withScopedSyntax(function() {
                  p.compile(s.body, c);
                }), this._emitLine("}"), this._emitLine("} else {");
                var g = s.name.children, A = g[0], I = g[1], C = this._tmpid(), B = this._tmpid();
                c.set(A.value, C), c.set(I.value, B), this._emitLine(f + " = -1;"), this._emitLine("var " + h + " = runtime.keys(" + y + ").length;"), this._emitLine("for(var " + C + " in " + y + ") {"), this._emitLine(f + "++;"), this._emitLine("var " + B + " = " + y + "[" + C + "];"), this._emitLine('frame.set("' + A.value + '", ' + C + ");"), this._emitLine('frame.set("' + I.value + '", ' + B + ");"), this._emitLoopBindings(s, y, f, h), this._withScopedSyntax(function() {
                  p.compile(s.body, c);
                }), this._emitLine("}"), this._emitLine("}");
              } else {
                var K = this._tmpid();
                c.set(s.name.value, K), this._emitLine("var " + h + " = " + y + ".length;"), this._emitLine("for(var " + f + "=0; " + f + " < " + y + ".length; " + f + "++) {"), this._emitLine("var " + K + " = " + y + "[" + f + "];"), this._emitLine('frame.set("' + s.name.value + '", ' + K + ");"), this._emitLoopBindings(s, y, f, h), this._withScopedSyntax(function() {
                  p.compile(s.body, c);
                }), this._emitLine("}");
              }
              this._emitLine("}"), s.else_ && (this._emitLine("if (!" + h + ") {"), this.compile(s.else_, c), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, m._compileAsyncLoop = function(s, c, p) {
              var f = this, h = this._tmpid(), y = this._tmpid(), g = this._tmpid(), A = p ? "asyncAll" : "asyncEach";
              if (c = c.push(), this._emitLine("frame = frame.push();"), this._emit("var " + g + " = runtime.fromIterator("), this._compileExpression(s.arr, c), this._emitLine(");"), s.name instanceof _.Array) {
                var I = s.name.children.length;
                this._emit("runtime." + A + "(" + g + ", " + I + ", function("), s.name.children.forEach(function(K) {
                  f._emit(K.value + ",");
                }), this._emit(h + "," + y + ",next) {"), s.name.children.forEach(function(K) {
                  var L = K.value;
                  c.set(L, L), f._emitLine('frame.set("' + L + '", ' + L + ");");
                });
              } else {
                var C = s.name.value;
                this._emitLine("runtime." + A + "(" + g + ", 1, function(" + C + ", " + h + ", " + y + ",next) {"), this._emitLine('frame.set("' + C + '", ' + C + ");"), c.set(C, C);
              }
              this._emitLoopBindings(s, g, h, y), this._withScopedSyntax(function() {
                var K;
                p && (K = f._pushBuffer()), f.compile(s.body, c), f._emitLine("next(" + h + (K ? "," + K : "") + ");"), p && f._popBuffer();
              });
              var B = this._tmpid();
              this._emitLine("}, " + this._makeCallback(B)), this._addScopeLevel(), p && this._emitLine(this.buffer + " += " + B + ";"), s.else_ && (this._emitLine("if (!" + g + ".length) {"), this.compile(s.else_, c), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, m.compileAsyncEach = function(s, c) {
              this._compileAsyncLoop(s, c);
            }, m.compileAsyncAll = function(s, c) {
              this._compileAsyncLoop(s, c, !0);
            }, m._compileMacro = function(s, c) {
              var p = this, f = [], h = null, y = "macro_" + this._tmpid(), g = c !== void 0;
              s.args.children.forEach(function(L, w) {
                w === s.args.children.length - 1 && L instanceof _.Dict ? h = L : (p.assertType(L, _.Symbol), f.push(L));
              });
              var A = [].concat(f.map(function(L) {
                return "l_" + L.value;
              }), ["kwargs"]), I = f.map(function(L) {
                return '"' + L.value + '"';
              }), C = (h && h.children || []).map(function(L) {
                return '"' + L.key.value + '"';
              }), B;
              g ? B = c.push(!0) : B = new R(), this._emitLines("var " + y + " = runtime.makeMacro(", "[" + I.join(", ") + "], ", "[" + C.join(", ") + "], ", "function (" + A.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (g ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'), f.forEach(function(L) {
                p._emitLine('frame.set("' + L.value + '", l_' + L.value + ");"), B.set(L.value, "l_" + L.value);
              }), h && h.children.forEach(function(L) {
                var w = L.key.value;
                p._emit('frame.set("' + w + '", '), p._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + w + '")'), p._emit(' ? kwargs["' + w + '"] : '), p._compileExpression(L.value, B), p._emit(");");
              });
              var K = this._pushBuffer();
              return this._withScopedSyntax(function() {
                p.compile(s.body, B);
              }), this._emitLine("frame = " + (g ? "frame.pop();" : "callerFrame;")), this._emitLine("return new runtime.SafeString(" + K + ");"), this._emitLine("});"), this._popBuffer(), y;
            }, m.compileMacro = function(s, c) {
              var p = this._compileMacro(s), f = s.name.value;
              c.set(f, p), c.parent ? this._emitLine('frame.set("' + f + '", ' + p + ");") : (s.name.value.charAt(0) !== "_" && this._emitLine('context.addExport("' + f + '");'), this._emitLine('context.setVariable("' + f + '", ' + p + ");"));
            }, m.compileCaller = function(s, c) {
              this._emit("(function (){");
              var p = this._compileMacro(s, c);
              this._emit("return " + p + ";})()");
            }, m._compileGetTemplate = function(s, c, p, f) {
              var h = this._tmpid(), y = this._templateName(), g = this._makeCallback(h), A = p ? "true" : "false", I = f ? "true" : "false";
              return this._emit("env.getTemplate("), this._compileExpression(s.template, c), this._emitLine(", " + A + ", " + y + ", " + I + ", " + g), h;
            }, m.compileImport = function(s, c) {
              var p = s.target.value, f = this._compileGetTemplate(s, c, !1, !1);
              this._addScopeLevel(), this._emitLine(f + ".getExported(" + (s.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(f)), this._addScopeLevel(), c.set(p, f), c.parent ? this._emitLine('frame.set("' + p + '", ' + f + ");") : this._emitLine('context.setVariable("' + p + '", ' + f + ");");
            }, m.compileFromImport = function(s, c) {
              var p = this, f = this._compileGetTemplate(s, c, !1, !1);
              this._addScopeLevel(), this._emitLine(f + ".getExported(" + (s.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(f)), this._addScopeLevel(), s.names.children.forEach(function(h) {
                var y, g, A = p._tmpid();
                h instanceof _.Pair ? (y = h.key.value, g = h.value.value) : (y = h.value, g = y), p._emitLine("if(Object.prototype.hasOwnProperty.call(" + f + ', "' + y + '")) {'), p._emitLine("var " + A + " = " + f + "." + y + ";"), p._emitLine("} else {"), p._emitLine(`cb(new Error("cannot import '` + y + `'")); return;`), p._emitLine("}"), c.set(g, A), c.parent ? p._emitLine('frame.set("' + g + '", ' + A + ");") : p._emitLine('context.setVariable("' + g + '", ' + A + ");");
              });
            }, m.compileBlock = function(s) {
              var c = this._tmpid();
              this.inBlock || this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '), this._emit('context.getBlock("' + s.name.value + '")'), this.inBlock || this._emit(")"), this._emitLine("(env, context, frame, runtime, " + this._makeCallback(c)), this._emitLine(this.buffer + " += " + c + ";"), this._addScopeLevel();
            }, m.compileSuper = function(s, c) {
              var p = s.blockName.value, f = s.symbol.value, h = this._makeCallback(f);
              this._emitLine('context.getSuper(env, "' + p + '", b_' + p + ", frame, runtime, " + h), this._emitLine(f + " = runtime.markSafe(" + f + ");"), this._addScopeLevel(), c.set(f, f);
            }, m.compileExtends = function(s, c) {
              var p = this._tmpid(), f = this._compileGetTemplate(s, c, !0, !1);
              this._emitLine("parentTemplate = " + f), this._emitLine("for(var " + p + " in parentTemplate.blocks) {"), this._emitLine("context.addBlock(" + p + ", parentTemplate.blocks[" + p + "]);"), this._emitLine("}"), this._addScopeLevel();
            }, m.compileInclude = function(s, c) {
              this._emitLine("var tasks = [];"), this._emitLine("tasks.push("), this._emitLine("function(callback) {");
              var p = this._compileGetTemplate(s, c, !1, s.ignoreMissing);
              this._emitLine("callback(null," + p + ");});"), this._emitLine("});");
              var f = this._tmpid();
              this._emitLine("tasks.push("), this._emitLine("function(template, callback){"), this._emitLine("template.render(context.getVariables(), frame, " + this._makeCallback(f)), this._emitLine("callback(null," + f + ");});"), this._emitLine("});"), this._emitLine("tasks.push("), this._emitLine("function(result, callback){"), this._emitLine(this.buffer + " += result;"), this._emitLine("callback(null);"), this._emitLine("});"), this._emitLine("env.waterfall(tasks, function(){"), this._addScopeLevel();
            }, m.compileTemplateData = function(s, c) {
              this.compileLiteral(s, c);
            }, m.compileCapture = function(s, c) {
              var p = this, f = this.buffer;
              this.buffer = "output", this._emitLine("(function() {"), this._emitLine('var output = "";'), this._withScopedSyntax(function() {
                p.compile(s.body, c);
              }), this._emitLine("return output;"), this._emitLine("})()"), this.buffer = f;
            }, m.compileOutput = function(s, c) {
              var p = this, f = s.children;
              f.forEach(function(h) {
                h instanceof _.TemplateData ? h.value && (p._emit(p.buffer + " += "), p.compileLiteral(h, c), p._emitLine(";")) : (p._emit(p.buffer + " += runtime.suppressValue("), p.throwOnUndefined && p._emit("runtime.ensureDefined("), p.compile(h, c), p.throwOnUndefined && p._emit("," + s.lineno + "," + s.colno + ")"), p._emit(`, env.opts.autoescape);
`));
              });
            }, m.compileRoot = function(s, c) {
              var p = this;
              c && this.fail("compileRoot: root node can't have frame"), c = new R(), this._emitFuncBegin(s, "root"), this._emitLine("var parentTemplate = null;"), this._compileChildren(s, c), this._emitLine("if(parentTemplate) {"), this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"), this._emitLine("} else {"), this._emitLine("cb(null, " + this.buffer + ");"), this._emitLine("}"), this._emitFuncEnd(!0), this.inBlock = !0;
              var f = [], h = s.findAll(_.Block);
              h.forEach(function(y, g) {
                var A = y.name.value;
                if (f.indexOf(A) !== -1)
                  throw new Error('Block "' + A + '" defined more than once.');
                f.push(A), p._emitFuncBegin(y, "b_" + A);
                var I = new R();
                p._emitLine("var frame = frame.push(true);"), p.compile(y.body, I), p._emitFuncEnd();
              }), this._emitLine("return {"), h.forEach(function(y, g) {
                var A = "b_" + y.name.value;
                p._emitLine(A + ": " + A + ",");
              }), this._emitLine(`root: root
};`);
            }, m.compile = function(s, c) {
              var p = this["compile" + s.typename];
              p ? p.call(this, s, c) : this.fail("compile: Cannot compile node: " + s.typename, s.lineno, s.colno);
            }, m.getCode = function() {
              return this.codebuf.join("");
            }, b;
          }(N);
          e.exports = {
            compile: function(b, m, E, s, c) {
              c === void 0 && (c = {});
              var p = new o(s, c.throwOnUndefined), f = (E || []).map(function(y) {
                return y.preprocess;
              }).filter(function(y) {
                return !!y;
              }), h = f.reduce(function(y, g) {
                return g(y);
              }, b);
              return p.compile(O.transform(v.parse(h, E, c), m, s)), p.getCode();
            },
            Compiler: o
          };
        },
        /* 6 */
        /***/
        function(e, r, u) {
          function a(T, P) {
            T.prototype = Object.create(P.prototype), T.prototype.constructor = T, d(T, P);
          }
          function d(T, P) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(R, x) {
              return R.__proto__ = x, R;
            }, d(T, P);
          }
          var v = u(4), O = u(1), _ = O.EmitterObj;
          e.exports = /* @__PURE__ */ function(T) {
            a(P, T);
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
        function(e, r, u) {
          function a(I, C) {
            I.prototype = Object.create(C.prototype), I.prototype.constructor = I, d(I, C);
          }
          function d(I, C) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(K, L) {
              return K.__proto__ = L, K;
            }, d(I, C);
          }
          var v = u(12), O = u(15), _ = u(0), T = u(5), P = u(18), M = u(10), R = M.FileSystemLoader, x = M.WebLoader, N = M.PrecompiledLoader, n = u(20), o = u(21), l = u(1), b = l.Obj, m = l.EmitterObj, E = u(2), s = E.handleError, c = E.Frame, p = u(22);
          function f(I, C, B) {
            v(function() {
              I(C, B);
            });
          }
          var h = {
            type: "code",
            obj: {
              root: function(C, B, K, L, w) {
                try {
                  w(null, "");
                } catch (S) {
                  w(s(S, null, null));
                }
              }
            }
          }, y = /* @__PURE__ */ function(I) {
            a(C, I);
            function C() {
              return I.apply(this, arguments) || this;
            }
            var B = C.prototype;
            return B.init = function(L, w) {
              var S = this;
              w = this.opts = w || {}, this.opts.dev = !!w.dev, this.opts.autoescape = w.autoescape != null ? w.autoescape : !0, this.opts.throwOnUndefined = !!w.throwOnUndefined, this.opts.trimBlocks = !!w.trimBlocks, this.opts.lstripBlocks = !!w.lstripBlocks, this.loaders = [], L ? this.loaders = _.isArray(L) ? L : [L] : R ? this.loaders = [new R("views")] : x && (this.loaders = [new x("/views")]), typeof window < "u" && window.nunjucksPrecompiled && this.loaders.unshift(new N(window.nunjucksPrecompiled)), this._initLoaders(), this.globals = o(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], _._entries(P).forEach(function(j) {
                var D = j[0], $ = j[1];
                return S.addFilter(D, $);
              }), _._entries(n).forEach(function(j) {
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
              w && (this.extensionsList = _.without(this.extensionsList, w), delete this.extensions[L]);
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
            }, B.express = function(L) {
              return p(this, L);
            }, B.render = function(L, w, S) {
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
            }, B.renderString = function(L, w, S, j) {
              _.isFunction(S) && (j = S, S = {}), S = S || {};
              var D = new A(L, this, S.path);
              return D.render(w, j);
            }, B.waterfall = function(L, w, S) {
              return O(L, w, S);
            }, C;
          }(m), g = /* @__PURE__ */ function(I) {
            a(C, I);
            function C() {
              return I.apply(this, arguments) || this;
            }
            var B = C.prototype;
            return B.init = function(L, w, S) {
              var j = this;
              this.env = S || new y(), this.ctx = _.extend({}, L), this.blocks = {}, this.exported = [], _.keys(w).forEach(function(D) {
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
              var ne = _.indexOf(this.blocks[w] || [], S), z = this.blocks[w][ne + 1], ue = this;
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
            }, C;
          }(b), A = /* @__PURE__ */ function(I) {
            a(C, I);
            function C() {
              return I.apply(this, arguments) || this;
            }
            var B = C.prototype;
            return B.init = function(L, w, S, j) {
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
            }, B.render = function(L, w, S) {
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
              var D = new g(L || {}, this.blocks, this.env);
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
                var w = T.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), S = new Function(w);
                L = S();
              }
              this.blocks = this._getBlocks(L), this.rootRenderFunc = L.root, this.compiled = !0;
            }, B._getBlocks = function(L) {
              var w = {};
              return _.keys(L).forEach(function(S) {
                S.slice(0, 2) === "b_" && (w[S.slice(2)] = L[S]);
              }), w;
            }, C;
          }(b);
          e.exports = {
            Environment: y,
            Template: A
          };
        },
        /* 8 */
        /***/
        function(e, r, u) {
          function a(M, R) {
            M.prototype = Object.create(R.prototype), M.prototype.constructor = M, d(M, R);
          }
          function d(M, R) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(N, n) {
              return N.__proto__ = n, N;
            }, d(M, R);
          }
          var v = u(9), O = u(3), _ = u(1).Obj, T = u(0), P = /* @__PURE__ */ function(M) {
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
                if (!n && this.peeked.type === v.TOKEN_WHITESPACE)
                  this.peeked = null;
                else
                  return o = this.peeked, this.peeked = null, o;
              if (o = this.tokens.nextToken(), !n)
                for (; o && o.type === v.TOKEN_WHITESPACE; )
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
              return this.skipValue(v.TOKEN_SYMBOL, n);
            }, x.advanceAfterBlockEnd = function(n) {
              var o;
              return n || (o = this.peekToken(), o || this.fail("unexpected end of file"), o.type !== v.TOKEN_SYMBOL && this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"), n = this.nextToken().value), o = this.nextToken(), o && o.type === v.TOKEN_BLOCK_END ? o.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0) : this.fail("expected block end in " + n + " statement"), o;
            }, x.advanceAfterVariableEnd = function() {
              var n = this.nextToken();
              n && n.type === v.TOKEN_VARIABLE_END ? this.dropLeadingWhitespace = n.value.charAt(n.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-" : (this.pushToken(n), this.fail("expected variable end"));
            }, x.parseFor = function() {
              var n = this.peekToken(), o, l;
              this.skipSymbol("for") ? (o = new O.For(n.lineno, n.colno), l = "endfor") : this.skipSymbol("asyncEach") ? (o = new O.AsyncEach(n.lineno, n.colno), l = "endeach") : this.skipSymbol("asyncAll") ? (o = new O.AsyncAll(n.lineno, n.colno), l = "endall") : this.fail("parseFor: expected for{Async}", n.lineno, n.colno), o.name = this.parsePrimary(), o.name instanceof O.Symbol || this.fail("parseFor: variable name expected for loop");
              var b = this.peekToken().type;
              if (b === v.TOKEN_COMMA) {
                var m = o.name;
                for (o.name = new O.Array(m.lineno, m.colno), o.name.addChild(m); this.skip(v.TOKEN_COMMA); ) {
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
              var m = new O.Symbol(n.lineno, n.colno, "caller"), E = new O.Caller(n.lineno, n.colno, m, o, b), s = l.args.children;
              s[s.length - 1] instanceof O.KeywordArgs || s.push(new O.KeywordArgs());
              var c = s[s.length - 1];
              return c.addChild(new O.Pair(n.lineno, n.colno, m, E)), new O.Output(n.lineno, n.colno, [l]);
            }, x.parseWithContext = function() {
              var n = this.peekToken(), o = null;
              return this.skipSymbol("with") ? o = !0 : this.skipSymbol("without") && (o = !1), o !== null && (this.skipSymbol("context") || this.fail("parseFrom: expected context after with/without", n.lineno, n.colno)), o;
            }, x.parseImport = function() {
              var n = this.peekToken();
              this.skipSymbol("import") || this.fail("parseImport: expected import", n.lineno, n.colno);
              var o = this.parseExpression();
              this.skipSymbol("as") || this.fail('parseImport: expected "as" keyword', n.lineno, n.colno);
              var l = this.parseExpression(), b = this.parseWithContext(), m = new O.Import(n.lineno, n.colno, o, l, b);
              return this.advanceAfterBlockEnd(n.value), m;
            }, x.parseFrom = function() {
              var n = this.peekToken();
              this.skipSymbol("from") || this.fail("parseFrom: expected from");
              var o = this.parseExpression();
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
                  var s = this.parsePrimary();
                  l.addChild(new O.Pair(E.lineno, E.colno, E, s));
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
              for (var o = new O.Set(n.lineno, n.colno, []), l; (l = this.parsePrimary()) && (o.targets.push(l), !!this.skip(v.TOKEN_COMMA)); )
                ;
              return this.skipValue(v.TOKEN_OPERATOR, "=") ? (o.value = this.parseExpression(), this.advanceAfterBlockEnd(n.value)) : this.skip(v.TOKEN_BLOCK_END) ? (o.body = new O.Capture(n.lineno, n.colno, this.parseUntilBlocks("endset")), o.value = null, this.advanceAfterBlockEnd()) : this.fail("parseSet: expected = or block end in set tag", n.lineno, n.colno), o;
            }, x.parseSwitch = function() {
              var n = "switch", o = "endswitch", l = "case", b = "default", m = this.peekToken();
              !this.skipSymbol(n) && !this.skipSymbol(l) && !this.skipSymbol(b) && this.fail('parseSwitch: expected "switch," "case" or "default"', m.lineno, m.colno);
              var E = this.parseExpression();
              this.advanceAfterBlockEnd(n), this.parseUntilBlocks(l, b, o);
              var s = this.peekToken(), c = [], p;
              do {
                this.skipSymbol(l);
                var f = this.parseExpression();
                this.advanceAfterBlockEnd(n);
                var h = this.parseUntilBlocks(l, b, o);
                c.push(new O.Case(s.line, s.col, f, h)), s = this.peekToken();
              } while (s && s.value === l);
              switch (s.value) {
                case b:
                  this.advanceAfterBlockEnd(), p = this.parseUntilBlocks(o), this.advanceAfterBlockEnd();
                  break;
                case o:
                  this.advanceAfterBlockEnd();
                  break;
                default:
                  this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.');
              }
              return new O.Switch(m.lineno, m.colno, E, c, p);
            }, x.parseStatement = function() {
              var n = this.peekToken(), o;
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
              return o;
            }, x.parseRaw = function(n) {
              n = n || "raw";
              for (var o = "end" + n, l = new RegExp("([\\s\\S]*?){%\\s*(" + n + "|" + o + ")\\s*(?=%})%}"), b = 1, m = "", E = null, s = this.advanceAfterBlockEnd(); (E = this.tokens._extractRegex(l)) && b > 0; ) {
                var c = E[0], p = E[1], f = E[2];
                f === n ? b += 1 : f === o && (b -= 1), b === 0 ? (m += p, this.tokens.backN(c.length - p.length)) : m += c;
              }
              return new O.Output(s.lineno, s.colno, [new O.TemplateData(s.lineno, s.colno, m)]);
            }, x.parsePostfix = function(n) {
              for (var o, l = this.peekToken(); l; ) {
                if (l.type === v.TOKEN_LEFT_PAREN)
                  n = new O.FunCall(l.lineno, l.colno, n, this.parseSignature());
                else if (l.type === v.TOKEN_LEFT_BRACKET)
                  o = this.parseAggregate(), o.children.length > 1 && this.fail("invalid index"), n = new O.LookupVal(l.lineno, l.colno, n, o.children[0]);
                else if (l.type === v.TOKEN_OPERATOR && l.value === ".") {
                  this.nextToken();
                  var b = this.nextToken();
                  b.type !== v.TOKEN_SYMBOL && this.fail("expected name as lookup value, got " + b.value, b.lineno, b.colno), o = new O.Literal(b.lineno, b.colno, b.value), n = new O.LookupVal(l.lineno, l.colno, n, o);
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
                var l = o.type === v.TOKEN_SYMBOL && o.value === "not";
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
              for (var n = this.parseAdd(); this.skipValue(v.TOKEN_TILDE, "~"); ) {
                var o = this.parseAdd();
                n = new O.Concat(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseAdd = function() {
              for (var n = this.parseSub(); this.skipValue(v.TOKEN_OPERATOR, "+"); ) {
                var o = this.parseSub();
                n = new O.Add(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseSub = function() {
              for (var n = this.parseMul(); this.skipValue(v.TOKEN_OPERATOR, "-"); ) {
                var o = this.parseMul();
                n = new O.Sub(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseMul = function() {
              for (var n = this.parseDiv(); this.skipValue(v.TOKEN_OPERATOR, "*"); ) {
                var o = this.parseDiv();
                n = new O.Mul(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseDiv = function() {
              for (var n = this.parseFloorDiv(); this.skipValue(v.TOKEN_OPERATOR, "/"); ) {
                var o = this.parseFloorDiv();
                n = new O.Div(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseFloorDiv = function() {
              for (var n = this.parseMod(); this.skipValue(v.TOKEN_OPERATOR, "//"); ) {
                var o = this.parseMod();
                n = new O.FloorDiv(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseMod = function() {
              for (var n = this.parsePow(); this.skipValue(v.TOKEN_OPERATOR, "%"); ) {
                var o = this.parsePow();
                n = new O.Mod(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parsePow = function() {
              for (var n = this.parseUnary(); this.skipValue(v.TOKEN_OPERATOR, "**"); ) {
                var o = this.parseUnary();
                n = new O.Pow(n.lineno, n.colno, n, o);
              }
              return n;
            }, x.parseUnary = function(n) {
              var o = this.peekToken(), l;
              return this.skipValue(v.TOKEN_OPERATOR, "-") ? l = new O.Neg(o.lineno, o.colno, this.parseUnary(!0)) : this.skipValue(v.TOKEN_OPERATOR, "+") ? l = new O.Pos(o.lineno, o.colno, this.parseUnary(!0)) : l = this.parsePrimary(), n || (l = this.parseFilter(l)), l;
            }, x.parsePrimary = function(n) {
              var o = this.nextToken(), l, b = null;
              if (o ? o.type === v.TOKEN_STRING ? l = o.value : o.type === v.TOKEN_INT ? l = parseInt(o.value, 10) : o.type === v.TOKEN_FLOAT ? l = parseFloat(o.value) : o.type === v.TOKEN_BOOLEAN ? o.value === "true" ? l = !0 : o.value === "false" ? l = !1 : this.fail("invalid boolean: " + o.value, o.lineno, o.colno) : o.type === v.TOKEN_NONE ? l = null : o.type === v.TOKEN_REGEX && (l = new RegExp(o.value.body, o.value.flags)) : this.fail("expected expression, got end of file"), l !== void 0 ? b = new O.Literal(o.lineno, o.colno, l) : o.type === v.TOKEN_SYMBOL ? b = new O.Symbol(o.lineno, o.colno, o.value) : (this.pushToken(o), b = this.parseAggregate()), n || (b = this.parsePostfix(b)), b)
                return b;
              throw this.error("unexpected token: " + o.value, o.lineno, o.colno);
            }, x.parseFilterName = function() {
              for (var n = this.expect(v.TOKEN_SYMBOL), o = n.value; this.skipValue(v.TOKEN_OPERATOR, "."); )
                o += "." + this.expect(v.TOKEN_SYMBOL).value;
              return new O.Symbol(n.lineno, n.colno, o);
            }, x.parseFilterArgs = function(n) {
              if (this.peekToken().type === v.TOKEN_LEFT_PAREN) {
                var o = this.parsePostfix(n);
                return o.args.children;
              }
              return [];
            }, x.parseFilter = function(n) {
              for (; this.skip(v.TOKEN_PIPE); ) {
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
              var m = new O.Filter(o.lineno, o.colno, o, new O.NodeList(o.lineno, o.colno, [b].concat(l)));
              return new O.Output(o.lineno, o.colno, [m]);
            }, x.parseAggregate = function() {
              var n = this.nextToken(), o;
              switch (n.type) {
                case v.TOKEN_LEFT_PAREN:
                  o = new O.Group(n.lineno, n.colno);
                  break;
                case v.TOKEN_LEFT_BRACKET:
                  o = new O.Array(n.lineno, n.colno);
                  break;
                case v.TOKEN_LEFT_CURLY:
                  o = new O.Dict(n.lineno, n.colno);
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
                if (o.children.length > 0 && (this.skip(v.TOKEN_COMMA) || this.fail("parseAggregate: expected comma after expression", n.lineno, n.colno)), o instanceof O.Dict) {
                  var b = this.parsePrimary();
                  this.skip(v.TOKEN_COLON) || this.fail("parseAggregate: expected colon after dict key", n.lineno, n.colno);
                  var m = this.parseExpression();
                  o.addChild(new O.Pair(b.lineno, b.colno, b, m));
                } else {
                  var E = this.parseExpression();
                  o.addChild(E);
                }
              }
              return o;
            }, x.parseSignature = function(n, o) {
              var l = this.peekToken();
              if (!o && l.type !== v.TOKEN_LEFT_PAREN) {
                if (n)
                  return null;
                this.fail("expected arguments", l.lineno, l.colno);
              }
              l.type === v.TOKEN_LEFT_PAREN && (l = this.nextToken());
              for (var b = new O.NodeList(l.lineno, l.colno), m = new O.KeywordArgs(l.lineno, l.colno), E = !1; ; ) {
                if (l = this.peekToken(), !o && l.type === v.TOKEN_RIGHT_PAREN) {
                  this.nextToken();
                  break;
                } else if (o && l.type === v.TOKEN_BLOCK_END)
                  break;
                if (E && !this.skip(v.TOKEN_COMMA))
                  this.fail("parseSignature: expected comma after expression", l.lineno, l.colno);
                else {
                  var s = this.parseExpression();
                  this.skipValue(v.TOKEN_OPERATOR, "=") ? m.addChild(new O.Pair(s.lineno, s.colno, s, this.parseExpression())) : b.addChild(s);
                }
                E = !0;
              }
              return m.children.length && b.addChild(m), b;
            }, x.parseUntilBlocks = function() {
              for (var n = this.breakOnBlocks, o = arguments.length, l = new Array(o), b = 0; b < o; b++)
                l[b] = arguments[b];
              this.breakOnBlocks = l;
              var m = this.parse();
              return this.breakOnBlocks = n, m;
            }, x.parseNodes = function() {
              for (var n, o = []; n = this.nextToken(); )
                if (n.type === v.TOKEN_DATA) {
                  var l = n.value, b = this.peekToken(), m = b && b.value;
                  this.dropLeadingWhitespace && (l = l.replace(/^\s*/, ""), this.dropLeadingWhitespace = !1), b && (b.type === v.TOKEN_BLOCK_START && m.charAt(m.length - 1) === "-" || b.type === v.TOKEN_VARIABLE_START && m.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || b.type === v.TOKEN_COMMENT && m.charAt(this.tokens.tags.COMMENT_START.length) === "-") && (l = l.replace(/\s*$/, "")), o.push(new O.Output(n.lineno, n.colno, [new O.TemplateData(n.lineno, n.colno, l)]));
                } else if (n.type === v.TOKEN_BLOCK_START) {
                  this.dropLeadingWhitespace = !1;
                  var E = this.parseStatement();
                  if (!E)
                    break;
                  o.push(E);
                } else if (n.type === v.TOKEN_VARIABLE_START) {
                  var s = this.parseExpression();
                  this.dropLeadingWhitespace = !1, this.advanceAfterVariableEnd(), o.push(new O.Output(n.lineno, n.colno, [s]));
                } else
                  n.type === v.TOKEN_COMMENT ? this.dropLeadingWhitespace = n.value.charAt(n.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-" : this.fail("Unexpected token at top-level: " + n.type, n.lineno, n.colno);
              return o;
            }, x.parse = function() {
              return new O.NodeList(0, 0, this.parseNodes());
            }, x.parseAsRoot = function() {
              return new O.Root(0, 0, this.parseNodes());
            }, R;
          }(_);
          e.exports = {
            parse: function(R, x, N) {
              var n = new P(v.lex(R, N));
              return x !== void 0 && (n.extensions = x), n.parseAsRoot();
            },
            Parser: P
          };
        },
        /* 9 */
        /***/
        function(e, r, u) {
          var a = u(0), d = ` 
	\r `, v = "()[]{}%*-+~/#,:|.<>=!", O = "0123456789", _ = "{%", T = "%}", P = "{{", M = "}}", R = "{#", x = "#}", N = "string", n = "whitespace", o = "data", l = "block-start", b = "block-end", m = "variable-start", E = "variable-end", s = "comment", c = "left-paren", p = "right-paren", f = "left-bracket", h = "right-bracket", y = "left-curly", g = "right-curly", A = "operator", I = "comma", C = "colon", B = "tilde", K = "pipe", L = "int", w = "float", S = "boolean", j = "none", D = "symbol", $ = "special", ne = "regex";
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
                } else if (v.indexOf(se) !== -1) {
                  this.forward();
                  var F = ["==", "===", "!=", "!==", "<=", ">=", "//", "**"], V = se + this.current(), U;
                  switch (a.indexOf(F, V) !== -1 && (this.forward(), se = V, a.indexOf(F, V + this.current()) !== -1 && (se = V + this.current(), this.forward())), se) {
                    case "(":
                      U = c;
                      break;
                    case ")":
                      U = p;
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
                      U = B;
                      break;
                    case "|":
                      U = K;
                      break;
                    default:
                      U = A;
                  }
                  return z(U, se, q, G);
                } else if (W = this._extractUntil(d + v), W.match(/^[-+]?[0-9]+$/))
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
                return z(ee ? s : o, W, q, G);
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
          e.exports = {
            lex: function(X, Z) {
              return new ue(X, Z);
            },
            TOKEN_STRING: N,
            TOKEN_WHITESPACE: n,
            TOKEN_DATA: o,
            TOKEN_BLOCK_START: l,
            TOKEN_BLOCK_END: b,
            TOKEN_VARIABLE_START: m,
            TOKEN_VARIABLE_END: E,
            TOKEN_COMMENT: s,
            TOKEN_LEFT_PAREN: c,
            TOKEN_RIGHT_PAREN: p,
            TOKEN_LEFT_BRACKET: f,
            TOKEN_RIGHT_BRACKET: h,
            TOKEN_LEFT_CURLY: y,
            TOKEN_RIGHT_CURLY: g,
            TOKEN_OPERATOR: A,
            TOKEN_COMMA: I,
            TOKEN_COLON: C,
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
        function(e, r, u) {
          function a(P, M) {
            P.prototype = Object.create(M.prototype), P.prototype.constructor = P, d(P, M);
          }
          function d(P, M) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(x, N) {
              return x.__proto__ = N, x;
            }, d(P, M);
          }
          var v = u(6), O = u(19), _ = O.PrecompiledLoader, T = /* @__PURE__ */ function(P) {
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
          }(v);
          e.exports = {
            WebLoader: T,
            PrecompiledLoader: _
          };
        },
        /* 11 */
        /***/
        function(e, r, u) {
          var a = u(0), d = u(7), v = d.Environment, O = d.Template, _ = u(6), T = u(10), P = u(23), M = u(5), R = u(8), x = u(9), N = u(2), n = u(3), o = u(25), l;
          function b(m, E) {
            E = E || {}, a.isObject(m) && (E = m, m = null);
            var s;
            return T.FileSystemLoader ? s = new T.FileSystemLoader(m, {
              watch: E.watch,
              noCache: E.noCache
            }) : T.WebLoader && (s = new T.WebLoader(m, {
              useCache: E.web && E.web.useCache,
              async: E.web && E.web.async
            })), l = new v(s, E), E && E.express && l.express(E.express), l;
          }
          e.exports = {
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
            lib: a,
            nodes: n,
            installJinjaCompat: o,
            configure: b,
            reset: function() {
              l = void 0;
            },
            compile: function(E, s, c, p) {
              return l || b(), new O(E, s, c, p);
            },
            render: function(E, s, c) {
              return l || b(), l.render(E, s, c);
            },
            renderString: function(E, s, c) {
              return l || b(), l.renderString(E, s, c);
            },
            precompile: P ? P.precompile : void 0,
            precompileString: P ? P.precompileString : void 0
          };
        },
        /* 12 */
        /***/
        function(e, r, u) {
          var a = u(13), d = [], v = [], O = a.makeRequestCallFromTimer(_);
          function _() {
            if (v.length)
              throw v.shift();
          }
          e.exports = T;
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
              T.onerror ? T.onerror(M) : (v.push(M), O());
            } finally {
              this.task = null, d[d.length] = this;
            }
          };
        },
        /* 13 */
        /***/
        function(e, r, u) {
          (function(a) {
            e.exports = d;
            function d(n) {
              v.length || O(), v[v.length] = n;
            }
            var v = [], O, _ = 0, T = 1024;
            function P() {
              for (; _ < v.length; ) {
                var n = _;
                if (_ = _ + 1, v[n].call(), _ > T) {
                  for (var o = 0, l = v.length - _; o < l; o++)
                    v[o] = v[o + _];
                  v.length -= _, _ = 0;
                }
              }
              v.length = 0, _ = 0;
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
                var l = setTimeout(m, 0), b = setInterval(m, 50);
                function m() {
                  clearTimeout(l), clearInterval(b), n();
                }
              };
            }
            d.makeRequestCallFromTimer = N;
          }).call(r, u(14));
        },
        /* 14 */
        /***/
        function(e, r) {
          var u;
          u = function() {
            return this;
          }();
          try {
            u = u || Function("return this")() || (0, eval)("this");
          } catch {
            typeof window == "object" && (u = window);
          }
          e.exports = u;
        },
        /* 15 */
        /***/
        function(e, r, u) {
          var a, d;
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
                var o = new Error("First argument to waterfall must be an array of functions");
                return x(o);
              }
              if (!R.length)
                return x();
              var l = function(b) {
                return function(m) {
                  if (m)
                    x.apply(null, arguments), x = function() {
                    };
                  else {
                    var E = Array.prototype.slice.call(arguments, 1), s = b.next();
                    s ? E.push(l(s)) : E.push(x), n(function() {
                      b.apply(null, E);
                    });
                  }
                };
              };
              l(T(R))();
            };
            a = [], d = function() {
              return M;
            }.apply(r, a), d !== void 0 && (e.exports = d);
          })();
        },
        /* 16 */
        /***/
        function(e, r, u) {
          var a = typeof Reflect == "object" ? Reflect : null, d = a && typeof a.apply == "function" ? a.apply : function(h, y, g) {
            return Function.prototype.apply.call(h, y, g);
          }, v;
          a && typeof a.ownKeys == "function" ? v = a.ownKeys : Object.getOwnPropertySymbols ? v = function(h) {
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
          e.exports = T, e.exports.once = s, T.EventEmitter = T, T.prototype._events = void 0, T.prototype._eventsCount = 0, T.prototype._maxListeners = void 0;
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
              var B = new Error("Unhandled error." + (C ? " (" + C.message + ")" : ""));
              throw B.context = C, B;
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
              var B = new Error("Possible EventEmitter memory leak detected. " + C.length + " " + String(h) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              B.name = "MaxListenersExceededWarning", B.emitter = f, B.type = h, B.count = C.length, O(B);
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
            var g, A, I, C, B;
            if (M(y), A = this._events, A === void 0)
              return this;
            if (g = A[h], g === void 0)
              return this;
            if (g === y || g.listener === y)
              --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete A[h], A.removeListener && this.emit("removeListener", h, g.listener || y));
            else if (typeof g != "function") {
              for (I = -1, C = g.length - 1; C >= 0; C--)
                if (g[C] === y || g[C].listener === y) {
                  B = g[C].listener, I = C;
                  break;
                }
              if (I < 0)
                return this;
              I === 0 ? g.shift() : m(g, I), g.length === 1 && (A[h] = g[0]), A.removeListener !== void 0 && this.emit("removeListener", h, B || y);
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
          function o(f, h, y) {
            var g = f._events;
            if (g === void 0)
              return [];
            var A = g[h];
            return A === void 0 ? [] : typeof A == "function" ? y ? [A.listener || A] : [A] : y ? E(A) : b(A, A.length);
          }
          T.prototype.listeners = function(h) {
            return o(this, h, !0);
          }, T.prototype.rawListeners = function(h) {
            return o(this, h, !1);
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
          function s(f, h) {
            return new Promise(function(y, g) {
              function A(C) {
                f.removeListener(h, I), g(C);
              }
              function I() {
                typeof f.removeListener == "function" && f.removeListener("error", A), y([].slice.call(arguments));
              }
              p(f, h, I, { once: !0 }), h !== "error" && c(f, A, { once: !0 });
            });
          }
          function c(f, h, y) {
            typeof f.on == "function" && p(f, "error", h, y);
          }
          function p(f, h, y, g) {
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
        function(e, r, u) {
          var a = u(3), d = u(0), v = 0;
          function O() {
            return "hole_" + v++;
          }
          function _(l, b) {
            for (var m = null, E = 0; E < l.length; E++) {
              var s = b(l[E]);
              s !== l[E] && (m || (m = l.slice()), m[E] = s);
            }
            return m || l;
          }
          function T(l, b, m) {
            if (!(l instanceof a.Node))
              return l;
            if (!m) {
              var E = b(l);
              if (E && E !== l)
                return E;
            }
            if (l instanceof a.NodeList) {
              var s = _(l.children, function(y) {
                return T(y, b, m);
              });
              s !== l.children && (l = new a[l.typename](l.lineno, l.colno, s));
            } else if (l instanceof a.CallExtension) {
              var c = T(l.args, b, m), p = _(l.contentArgs, function(y) {
                return T(y, b, m);
              });
              (c !== l.args || p !== l.contentArgs) && (l = new a[l.typename](l.extName, l.prop, c, p));
            } else {
              var f = l.fields.map(function(y) {
                return l[y];
              }), h = _(f, function(y) {
                return T(y, b, m);
              });
              h !== f && (l = new a[l.typename](l.lineno, l.colno), h.forEach(function(y, g) {
                l[l.fields[g]] = y;
              }));
            }
            return m && b(l) || l;
          }
          function P(l, b) {
            return T(l, b, !0);
          }
          function M(l, b, m) {
            var E = [], s = P(m ? l[m] : l, function(c) {
              var p;
              return c instanceof a.Block ? c : ((c instanceof a.Filter && d.indexOf(b, c.name.value) !== -1 || c instanceof a.CallExtensionAsync) && (p = new a.Symbol(c.lineno, c.colno, O()), E.push(new a.FilterAsync(c.lineno, c.colno, c.name, c.args, p))), p);
            });
            return m ? l[m] = s : l = s, E.length ? (E.push(l), new a.NodeList(l.lineno, l.colno, E)) : l;
          }
          function R(l, b) {
            return P(l, function(m) {
              return m instanceof a.Output ? M(m, b) : m instanceof a.Set ? M(m, b, "value") : m instanceof a.For ? M(m, b, "arr") : m instanceof a.If ? M(m, b, "cond") : m instanceof a.CallExtension ? M(m, b, "args") : void 0;
            });
          }
          function x(l) {
            return T(l, function(b) {
              if (b instanceof a.Block) {
                var m = !1, E = O();
                b.body = T(b.body, function(s) {
                  if (s instanceof a.FunCall && s.name.value === "super")
                    return m = !0, new a.Symbol(s.lineno, s.colno, E);
                }), m && b.body.children.unshift(new a.Super(0, 0, b.name, new a.Symbol(0, 0, E)));
              }
            });
          }
          function N(l) {
            return P(l, function(b) {
              if (!(!(b instanceof a.If) && !(b instanceof a.For))) {
                var m = !1;
                if (T(b, function(E) {
                  if (E instanceof a.FilterAsync || E instanceof a.IfAsync || E instanceof a.AsyncEach || E instanceof a.AsyncAll || E instanceof a.CallExtensionAsync)
                    return m = !0, E;
                }), m) {
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
          e.exports = {
            transform: o
          };
        },
        /* 18 */
        /***/
        function(e, v, u) {
          var a = u(0), d = u(2), v = e.exports = {};
          function O(k, F) {
            return k == null || k === !1 ? F : k;
          }
          v.abs = Math.abs;
          function _(k) {
            return k !== k;
          }
          function T(k, F, V) {
            var U, Y = [], J = [];
            for (U = 0; U < k.length; U++)
              U % F === 0 && J.length && (Y.push(J), J = []), J.push(k[U]);
            if (J.length) {
              if (V)
                for (U = J.length; U < F; U++)
                  J.push(V);
              Y.push(J);
            }
            return Y;
          }
          v.batch = T;
          function P(k) {
            k = O(k, "");
            var F = k.toLowerCase();
            return d.copySafeness(k, F.charAt(0).toUpperCase() + F.slice(1));
          }
          v.capitalize = P;
          function M(k, F) {
            if (k = O(k, ""), F = F || 80, k.length >= F)
              return k;
            var V = F - k.length, U = a.repeat(" ", V / 2 - V % 2), Y = a.repeat(" ", V / 2);
            return d.copySafeness(k, U + k + Y);
          }
          v.center = M;
          function R(k, F, V) {
            return V ? k || F : k !== void 0 ? k : F;
          }
          v.default = R;
          function x(k, F, V) {
            if (!a.isObject(k))
              throw new a.TemplateError("dictsort filter: val must be an object");
            var U = [];
            for (var Y in k)
              U.push([Y, k[Y]]);
            var J;
            if (V === void 0 || V === "key")
              J = 0;
            else if (V === "value")
              J = 1;
            else
              throw new a.TemplateError("dictsort filter: You can only sort by either key or value");
            return U.sort(function(ae, ee) {
              var le = ae[J], we = ee[J];
              return F || (a.isString(le) && (le = le.toUpperCase()), a.isString(we) && (we = we.toUpperCase())), le > we ? 1 : le === we ? 0 : -1;
            }), U;
          }
          v.dictsort = x;
          function N(k, F) {
            return JSON.stringify(k, null, F);
          }
          v.dump = N;
          function n(k) {
            return k instanceof d.SafeString ? k : (k = k ?? "", d.markSafe(a.escape(k.toString())));
          }
          v.escape = n;
          function o(k) {
            return k instanceof d.SafeString ? k : (k = k ?? "", d.markSafe(k.toString()));
          }
          v.safe = o;
          function l(k) {
            return k[0];
          }
          v.first = l;
          function b(k) {
            return k = k ?? "", d.markSafe(a.escape(k.toString()));
          }
          v.forceescape = b;
          function m(k, F) {
            return a.groupBy(k, F, this.env.opts.throwOnUndefined);
          }
          v.groupby = m;
          function E(k, F, V) {
            if (k = O(k, ""), k === "")
              return "";
            F = F || 4;
            var U = k.split(`
`), Y = a.repeat(" ", F), J = U.map(function(ae, ee) {
              return ee === 0 && !V ? ae : "" + Y + ae;
            }).join(`
`);
            return d.copySafeness(k, J);
          }
          v.indent = E;
          function s(k, F, V) {
            return F = F || "", V && (k = a.map(k, function(U) {
              return U[V];
            })), k.join(F);
          }
          v.join = s;
          function c(k) {
            return k[k.length - 1];
          }
          v.last = c;
          function p(k) {
            var F = O(k, "");
            return F !== void 0 ? typeof Map == "function" && F instanceof Map || typeof Set == "function" && F instanceof Set ? F.size : a.isObject(F) && !(F instanceof d.SafeString) ? a.keys(F).length : F.length : 0;
          }
          v.length = p;
          function f(k) {
            if (a.isString(k))
              return k.split("");
            if (a.isObject(k))
              return a._entries(k || {}).map(function(F) {
                var V = F[0], U = F[1];
                return {
                  key: V,
                  value: U
                };
              });
            if (a.isArray(k))
              return k;
            throw new a.TemplateError("list filter: type not iterable");
          }
          v.list = f;
          function h(k) {
            return k = O(k, ""), k.toLowerCase();
          }
          v.lower = h;
          function y(k) {
            return k == null ? "" : d.copySafeness(k, k.replace(/\r\n|\n/g, `<br />
`));
          }
          v.nl2br = y;
          function g(k) {
            return k[Math.floor(Math.random() * k.length)];
          }
          v.random = g;
          function A(k) {
            function F(V, U, Y) {
              U === void 0 && (U = "truthy");
              var J = this, ae = J.env.getTest(U);
              return a.toArray(V).filter(function(le) {
                return ae.call(J, le, Y) === k;
              });
            }
            return F;
          }
          v.reject = A(!1);
          function I(k, F) {
            return k.filter(function(V) {
              return !V[F];
            });
          }
          v.rejectattr = I, v.select = A(!0);
          function C(k, F) {
            return k.filter(function(V) {
              return !!V[F];
            });
          }
          v.selectattr = C;
          function B(k, F, V, U) {
            var Y = k;
            if (F instanceof RegExp)
              return k.replace(F, V);
            typeof U > "u" && (U = -1);
            var J = "";
            if (typeof F == "number")
              F = "" + F;
            else if (typeof F != "string")
              return k;
            if (typeof k == "number" && (k = "" + k), typeof k != "string" && !(k instanceof d.SafeString))
              return k;
            if (F === "")
              return J = V + k.split("").join(V) + V, d.copySafeness(k, J);
            var ae = k.indexOf(F);
            if (U === 0 || ae === -1)
              return k;
            for (var ee = 0, le = 0; ae > -1 && (U === -1 || le < U); )
              J += k.substring(ee, ae) + V, ee = ae + F.length, le++, ae = k.indexOf(F, ee);
            return ee < k.length && (J += k.substring(ee)), d.copySafeness(Y, J);
          }
          v.replace = B;
          function K(k) {
            var F;
            return a.isString(k) ? F = f(k) : F = a.map(k, function(V) {
              return V;
            }), F.reverse(), a.isString(k) ? d.copySafeness(k, F.join("")) : F;
          }
          v.reverse = K;
          function L(k, F, V) {
            F = F || 0;
            var U = Math.pow(10, F), Y;
            return V === "ceil" ? Y = Math.ceil : V === "floor" ? Y = Math.floor : Y = Math.round, Y(k * U) / U;
          }
          v.round = L;
          function w(k, F, V) {
            for (var U = Math.floor(k.length / F), Y = k.length % F, J = [], ae = 0, ee = 0; ee < F; ee++) {
              var le = ae + ee * U;
              ee < Y && ae++;
              var we = ae + (ee + 1) * U, be = k.slice(le, we);
              V && ee >= Y && be.push(V), J.push(be);
            }
            return J;
          }
          v.slice = w;
          function S(k, F, V) {
            return V === void 0 && (V = 0), F && (k = a.map(k, function(U) {
              return U[F];
            })), V + k.reduce(function(U, Y) {
              return U + Y;
            }, 0);
          }
          v.sum = S, v.sort = d.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(F, V, U, Y) {
            var J = this, ae = a.map(F, function(le) {
              return le;
            }), ee = a.getAttrGetter(Y);
            return ae.sort(function(le, we) {
              var be = Y ? ee(le) : le, ke = Y ? ee(we) : we;
              if (J.env.opts.throwOnUndefined && Y && (be === void 0 || ke === void 0))
                throw new TypeError('sort: attribute "' + Y + '" resolved to undefined');
              return !U && a.isString(be) && a.isString(ke) && (be = be.toLowerCase(), ke = ke.toLowerCase()), be < ke ? V ? 1 : -1 : be > ke ? V ? -1 : 1 : 0;
            }), ae;
          });
          function j(k) {
            return d.copySafeness(k, k);
          }
          v.string = j;
          function D(k, F) {
            k = O(k, "");
            var V = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, U = ne(k.replace(V, "")), Y = "";
            return F ? Y = U.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, `
`).replace(/\n\n\n+/g, `

`) : Y = U.replace(/\s+/gi, " "), d.copySafeness(k, Y);
          }
          v.striptags = D;
          function $(k) {
            k = O(k, "");
            var F = k.split(" ").map(function(V) {
              return P(V);
            });
            return d.copySafeness(k, F.join(" "));
          }
          v.title = $;
          function ne(k) {
            return d.copySafeness(k, k.replace(/^\s*|\s*$/g, ""));
          }
          v.trim = ne;
          function z(k, F, V, U) {
            var Y = k;
            if (k = O(k, ""), F = F || 255, k.length <= F)
              return k;
            if (V)
              k = k.substring(0, F);
            else {
              var J = k.lastIndexOf(" ", F);
              J === -1 && (J = F), k = k.substring(0, J);
            }
            return k += U ?? "...", d.copySafeness(Y, k);
          }
          v.truncate = z;
          function ue(k) {
            return k = O(k, ""), k.toUpperCase();
          }
          v.upper = ue;
          function he(k) {
            var F = encodeURIComponent;
            if (a.isString(k))
              return F(k);
            var V = a.isArray(k) ? k : a._entries(k);
            return V.map(function(U) {
              var Y = U[0], J = U[1];
              return F(Y) + "=" + F(J);
            }).join("&");
          }
          v.urlencode = he;
          var X = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, Z = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, q = /^https?:\/\/.*$/, G = /^www\./, W = /\.(?:org|net|com)(?:\:|\/|$)/;
          function se(k, F, V) {
            _(F) && (F = 1 / 0);
            var U = V === !0 ? ' rel="nofollow"' : "", Y = k.split(/(\s+)/).filter(function(J) {
              return J && J.length;
            }).map(function(J) {
              var ae = J.match(X), ee = ae ? ae[1] : J, le = ee.substr(0, F);
              return q.test(ee) ? '<a href="' + ee + '"' + U + ">" + le + "</a>" : G.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : Z.test(ee) ? '<a href="mailto:' + ee + '">' + ee + "</a>" : W.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : J;
            });
            return Y.join("");
          }
          v.urlize = se;
          function ye(k) {
            k = O(k, "");
            var F = k ? k.match(/\w+/g) : null;
            return F ? F.length : null;
          }
          v.wordcount = ye;
          function fe(k, F) {
            var V = parseFloat(k);
            return _(V) ? F : V;
          }
          v.float = fe;
          var Oe = d.makeMacro(["value", "default", "base"], [], function(F, V, U) {
            U === void 0 && (U = 10);
            var Y = parseInt(F, U);
            return _(Y) ? V : Y;
          });
          v.int = Oe, v.d = v.default, v.e = v.escape;
        },
        /* 19 */
        /***/
        function(e, r, u) {
          function a(_, T) {
            _.prototype = Object.create(T.prototype), _.prototype.constructor = _, d(_, T);
          }
          function d(_, T) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(M, R) {
              return M.__proto__ = R, M;
            }, d(_, T);
          }
          var v = u(6), O = /* @__PURE__ */ function(_) {
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
          }(v);
          e.exports = {
            PrecompiledLoader: O
          };
        },
        /* 20 */
        /***/
        function(e, r, u) {
          var a = u(2).SafeString;
          function d(g) {
            return typeof g == "function";
          }
          r.callable = d;
          function v(g) {
            return g !== void 0;
          }
          r.defined = v;
          function O(g, A) {
            return g % A === 0;
          }
          r.divisibleby = O;
          function _(g) {
            return g instanceof a;
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
          function o(g) {
            return g.toLowerCase() === g;
          }
          r.lower = o;
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
          function s(g) {
            return typeof g == "string";
          }
          r.string = s;
          function c(g) {
            return !!g;
          }
          r.truthy = c;
          function p(g) {
            return g === void 0;
          }
          r.undefined = p;
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
        function(e, r, u) {
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
                return a(Array.prototype.slice.call(arguments));
              },
              joiner: function(_) {
                return d(_);
              }
            };
          }
          e.exports = v;
        },
        /* 22 */
        /***/
        function(e, r, u) {
          var a = u(4);
          e.exports = function(v, O) {
            function _(T, P) {
              if (this.name = T, this.path = T, this.defaultEngine = P.defaultEngine, this.ext = a.extname(T), !this.ext && !this.defaultEngine)
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
        function(e, r, u) {
          var a = u(4), d = u(4), v = u(0), O = v._prettifyError, _ = u(5), T = u(7), P = T.Environment, M = u(24);
          function R(o, l) {
            return Array.isArray(l) ? l.some(function(b) {
              return o.match(b);
            }) : !1;
          }
          function x(o, l) {
            l = l || {}, l.isString = !0;
            var b = l.env || new P([]), m = l.wrapper || M;
            if (!l.name)
              throw new Error('the "name" option is required when compiling a string');
            return m([n(o, l.name, b)], l);
          }
          function N(o, l) {
            l = l || {};
            var b = l.env || new P([]), m = l.wrapper || M;
            if (l.isString)
              return x(o, l);
            var E = a.existsSync(o) && a.statSync(o), s = [], c = [];
            function p(y) {
              a.readdirSync(y).forEach(function(g) {
                var A = d.join(y, g), I = A.substr(d.join(o, "/").length), C = a.statSync(A);
                C && C.isDirectory() ? (I += "/", R(I, l.exclude) || p(A)) : R(I, l.include) && c.push(A);
              });
            }
            if (E.isFile())
              s.push(n(a.readFileSync(o, "utf-8"), l.name || o, b));
            else if (E.isDirectory()) {
              p(o);
              for (var f = 0; f < c.length; f++) {
                var h = c[f].replace(d.join(o, "/"), "");
                try {
                  s.push(n(a.readFileSync(c[f], "utf-8"), h, b));
                } catch (y) {
                  if (l.force)
                    console.error(y);
                  else
                    throw y;
                }
              }
            }
            return m(s, l);
          }
          function n(o, l, b) {
            b = b || new P([]);
            var m = b.asyncFilters, E = b.extensionsList, s;
            l = l.replace(/\\/g, "/");
            try {
              s = _.compile(o, m, E, l, b.opts);
            } catch (c) {
              throw O(l, !1, c);
            }
            return {
              name: l,
              template: s
            };
          }
          e.exports = {
            precompile: N,
            precompileString: x
          };
        },
        /* 24 */
        /***/
        function(e, r, u) {
          function a(d, v) {
            var O = "";
            v = v || {};
            for (var _ = 0; _ < d.length; _++) {
              var T = JSON.stringify(d[_].name), P = d[_].template;
              O += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + T + `] = (function() {
` + P + `
})();
`, v.asFunction && (O += "return function(ctx, cb) { return nunjucks.render(" + T + `, ctx, cb); }
`), O += `})();
`;
            }
            return O;
          }
          e.exports = a;
        },
        /* 25 */
        /***/
        function(e, r, u) {
          function a() {
            var d = this.runtime, v = this.lib, O = this.compiler.Compiler, _ = this.parser.Parser, T = this.nodes, P = this.lexer, M = d.contextOrFrameLookup, R = d.memberLookup, x, N;
            O && (x = O.prototype.assertType), _ && (N = _.prototype.parseAggregate);
            function n() {
              d.contextOrFrameLookup = M, d.memberLookup = R, O && (O.prototype.assertType = x), _ && (_.prototype.parseAggregate = N);
            }
            d.contextOrFrameLookup = function(p, f, h) {
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
            function o(c) {
              return {
                index: c.index,
                lineno: c.lineno,
                colno: c.colno
              };
            }
            if (T && O && _) {
              var l = T.Node.extend("Slice", {
                fields: ["start", "stop", "step"],
                init: function(p, f, h, y, g) {
                  h = h || new T.Literal(p, f, null), y = y || new T.Literal(p, f, null), g = g || new T.Literal(p, f, 1), this.parent(p, f, h, y, g);
                }
              });
              O.prototype.assertType = function(p) {
                p instanceof l || x.apply(this, arguments);
              }, O.prototype.compileSlice = function(p, f) {
                this._emit("("), this._compileExpression(p.start, f), this._emit("),("), this._compileExpression(p.stop, f), this._emit("),("), this._compileExpression(p.step, f), this._emit(")");
              }, _.prototype.parseAggregate = function() {
                var p = this, f = o(this.tokens);
                f.colno--, f.index--;
                try {
                  return N.apply(this);
                } catch (K) {
                  var h = o(this.tokens), y = function() {
                    return v._assign(p.tokens, h), K;
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
                      var B = A.fields[C];
                      A[B] = this.parseExpression(), I = this.skip(P.TOKEN_COLON) || I;
                    }
                  }
                  if (!I)
                    throw y();
                  return new T.Array(g.lineno, g.colno, [A]);
                }
              };
            }
            function b(c, p, f, h) {
              c = c || [], p === null && (p = h < 0 ? c.length - 1 : 0), f === null ? f = h < 0 ? -1 : c.length : f < 0 && (f += c.length), p < 0 && (p += c.length);
              for (var y = [], g = p; !(g < 0 || g > c.length || h > 0 && g >= f || h < 0 && g <= f); g += h)
                y.push(d.memberLookup(c, g));
              return y;
            }
            function m(c, p) {
              return Object.prototype.hasOwnProperty.call(c, p);
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
                for (var f = 0; f < this.length; f++)
                  if (this[f] === p)
                    return this.splice(f, 1);
                throw new Error("ValueError");
              },
              count: function(p) {
                for (var f = 0, h = 0; h < this.length; h++)
                  this[h] === p && f++;
                return f;
              },
              index: function(p) {
                var f;
                if ((f = this.indexOf(p)) === -1)
                  throw new Error("ValueError");
                return f;
              },
              find: function(p) {
                return this.indexOf(p);
              },
              insert: function(p, f) {
                return this.splice(p, 0, f);
              }
            }, s = {
              items: function() {
                return v._entries(this);
              },
              values: function() {
                return v._values(this);
              },
              keys: function() {
                return v.keys(this);
              },
              get: function(p, f) {
                var h = this[p];
                return h === void 0 && (h = f), h;
              },
              has_key: function(p) {
                return m(this, p);
              },
              pop: function(p, f) {
                var h = this[p];
                if (h === void 0 && f !== void 0)
                  h = f;
                else {
                  if (h === void 0)
                    throw new Error("KeyError");
                  delete this[p];
                }
                return h;
              },
              popitem: function() {
                var p = v.keys(this);
                if (!p.length)
                  throw new Error("KeyError");
                var f = p[0], h = this[f];
                return delete this[f], [f, h];
              },
              setdefault: function(p, f) {
                return f === void 0 && (f = null), p in this || (this[p] = f), this[p];
              },
              update: function(p) {
                return v._assign(this, p), null;
              }
            };
            return s.iteritems = s.items, s.itervalues = s.values, s.iterkeys = s.keys, d.memberLookup = function(p, f, h) {
              return arguments.length === 4 ? b.apply(this, arguments) : (p = p || {}, v.isArray(p) && m(E, f) ? E[f].bind(p) : v.isObject(p) && m(s, f) ? s[f].bind(p) : R.apply(this, arguments));
            }, n;
          }
          e.exports = a;
        }
        /******/
      ])
    );
  });
})(fr);
const hr = (i, t) => {
  const e = At(i);
  return Ke.configure({ autoescape: !0 }), Ke.renderString(t, e);
}, At = (i) => {
  const t = {};
  return Object.entries(i).forEach(([e, r]) => {
    if (pr(r)) {
      const u = Object.values(r.content);
      t[e] = u.filter((a) => !(a != null && a.hidden)).map((a) => At(a.questions));
      return;
    }
    t[e] = r.value;
  }), t;
}, pr = (i) => Boolean(i.content);
class St {
  constructor(t = "empty", e = { isRoot: !0, data: null }) {
    Le(this, "interview", /* @__PURE__ */ new Map());
    Le(this, "events");
    Le(this, "current");
    Le(this, "isRoot", !0);
    Le(this, "data", {});
    this.events = e.events || new Me(), this.isRoot = e.isRoot, this.data = e.data || this.data;
    const r = e.data ? JSON.parse(JSON.stringify(this.data)) : null;
    t !== "empty" && this.init(t), r && this.applyDataToQuestions(r);
  }
  get questionsMap() {
    return this.interview;
  }
  setInterview(t) {
    this.interview = t;
  }
  init(t) {
    if (t === null)
      throw new Error("Interview init param is null");
    nr(t);
    for (const e of Object.values(t))
      this.add(e);
  }
  getInterviewParams() {
    const t = {};
    return this.interview.forEach((e, r) => {
      t[r] = e, e.type === "repeat" && (t[r].content = {});
    }), t;
  }
  add(t, e = !1) {
    const r = or(t);
    return r.type === "repeat" && this.buildContentForRepeatQuestion(r), this.interview.set(r.id, r), this.setValue(r.id, r.value), this.events.dispatch("question-added", r), r;
  }
  remove(t) {
    if (!this.interview.has(t))
      throw new Error("No question with id:" + t);
    this.interview.delete(t);
  }
  getNestedInterview(t, e) {
    const r = this.interview.get(t);
    if (!r)
      throw new Error("No question with id:" + t);
    if ((r == null ? void 0 : r.type) !== "repeat")
      throw new Error("Question with id " + t + " is not a repeat question");
    return r.content[e].nestedInterview;
  }
  canBeShown(t) {
    var e, r;
    if ((e = t.logic) != null && e.showIf) {
      const u = this.interview.keys(), a = this.interview.values();
      if (!Function(...u, `return ${t.logic.showIf}`).bind(this)(...a))
        return !1;
    }
    if ((r = t.logic) != null && r.hideIf) {
      const u = this.interview.keys(), a = this.interview.values();
      if (!!Function(...u, `return ${t.logic.hideIf}`).bind(this)(...a))
        return !1;
    }
    return !0;
  }
  setCurrent(t) {
    if (!this.interview.has(t))
      throw new Error("No question with id:" + t);
    this.current = t, this.events.dispatch("set-current", this.getCurrent());
  }
  next() {
    const t = this.getCurrent().id, e = Array.from(this.interview);
    for (let r = 0; r < e.length; r++) {
      const [u] = e[r];
      if (t === u) {
        const a = this.nextAvailableQuestion(r + 1);
        a && this.setCurrent(a[0]);
        break;
      }
    }
  }
  nextAvailableQuestion(t) {
    const e = Array.from(this.interview);
    for (let r = t; r < e.length; r++) {
      const [u, a] = e[r];
      if (this.canBeShown(a))
        return e[r];
    }
  }
  previous() {
    const t = this.getCurrent().id, e = Array.from(this.interview);
    for (let r = 0; r < e.length; r++) {
      const [u] = e[r];
      if (t === u) {
        const a = this.previousAvailableQuestion(r - 1);
        a && this.setCurrent(a[0]);
        break;
      }
    }
  }
  previousAvailableQuestion(t) {
    const e = Array.from(this.interview);
    for (let r = t; r >= 0; r--) {
      const [u, a] = e[r];
      if (this.canBeShown(a))
        return e[r];
    }
  }
  getCurrent() {
    this.current || (this.current = Array.from(this.interview)[0][0]);
    const t = this.interview.get(this.current);
    if (!t)
      throw new Error("Could not find current Quetion");
    return t;
  }
  setValue(t, e) {
    if (!this.interview.has(t))
      throw new Error("No question with id:" + t);
    const r = this.interview.get(t);
    if (!r)
      throw new Error("No question with id:" + t);
    ir(e, r), r.value = e, (r == null ? void 0 : r.type) === "multipleChoice" && this.setRadioChecked(r, e), (r == null ? void 0 : r.type) === "repeat" && this.buildContentForRepeatQuestion(r, e), this.data[t] ? this.data[t].value = r.value : this.data[t] = { value: r.value }, this.events.dispatch("set-value", this.interview.get(t));
  }
  on(t, e) {
    this.events.register(t, e);
  }
  getData() {
    return this.data;
  }
  setRadioChecked(t, e) {
    t.choices.forEach((r) => {
      r.checked = r.label === e;
    });
  }
  buildContentForRepeatQuestion(t, e = null) {
    const { range: r, id: u, questions: a } = t, { min: d, max: v } = r;
    e = rr(t.value, d, v), t.value = e, t.content || (t.content = {}), this.data[u] ? this.data[u].value = e : this.data[u] = { value: e, content: {} };
    for (let _ = 0; _ < e; _++) {
      if (t.content[_]) {
        t.content[_].hidden = !1;
        continue;
      }
      this.data[u].content[_] = { hidden: !1, questions: {} };
      const T = new St(cr(a, _), {
        isRoot: !1,
        events: this.events,
        data: this.data[u].content[_].questions
      });
      t.content[_] = { hidden: !1, nestedInterview: T };
    }
    const O = Object.keys(t.content);
    if (e < O.length)
      for (let _ = e; _ < O.length; _++)
        t.content[_].hidden = !0, this.data[u].content[_].hidden = !0;
  }
  applyDataToQuestions(t) {
    Object.entries(t).forEach(([e, { value: r, content: u }]) => {
      this.setValue(e, r), u && Object.values(u).forEach((a, d) => {
        a.hidden || this.getNestedInterview(e, d).applyDataToQuestions(a.questions);
      });
    });
  }
  makeTemplate(t) {
    if (!t)
      throw new Error("No template provided");
    return hr(this.data, t);
  }
  getStepById(t) {
    const e = this.interview.get(t);
    return e || null;
  }
  checkIfIdIsValid(t) {
    if (!t)
      throw new Error("No id provided");
    return this.interview.has(t) ? { isValid: !1, message: "Id already exists" } : Lt(t) ? { isValid: !0, message: "" } : { isValid: !1, message: "Id must be in camel case" };
  }
  changeIdOfQuestion(t, e) {
    if (!this.interview.get(t))
      throw new Error("No question with id:" + t);
    const u = this.checkIfIdIsValid(e);
    if (!u.isValid)
      throw new Error(u.message);
    const a = Array.from(this.interview, ([v, O]) => ({ name: v, value: O }));
    a.forEach((v, O) => {
      v.name === t && (a[O].value.id = e, a[O].name = e);
    });
    const d = /* @__PURE__ */ new Map();
    a.forEach((v) => {
      d.set(v.name, v.value);
    }), this.interview = d;
  }
  findQuestionById(t) {
    const e = this.interview.get(t);
    if (!e)
      throw new Error("No question with id:" + t);
    return e;
  }
  findMultipleChoiceById(t) {
    const e = this.interview.get(t);
    if (!e)
      throw new Error("No question with id:" + t);
    if ((e == null ? void 0 : e.type) !== "multipleChoice")
      throw new Error("Question with id " + t + " is not a multiple choice question");
    return e;
  }
  addChoiceToMultipleChoice(t, e) {
    this.findMultipleChoiceById(t).choices.push(e);
  }
  removeChoiceFromMultipleChoice(t, e) {
    this.findMultipleChoiceById(t).choices.splice(e, 1);
  }
  changeLabelOfChoice(t, e, r) {
    const u = this.findMultipleChoiceById(t);
    if (!r)
      throw new Error("No label provided");
    if (!u.choices[e])
      throw new Error("No choice with index:" + e);
    u.choices[e].label = r;
  }
  setDefaultCheckedChoice(t, e) {
    const r = this.findMultipleChoiceById(t);
    if (!r.choices[e])
      throw new Error("No choice with index:" + e);
    r.choices.forEach((u) => u.checked = !1), r.choices[e].checked = !0;
  }
  setQuestionAsRequired(t, e) {
    const r = this.findQuestionById(t);
    r.required = e;
  }
  setTitleOfQuestion(t, e) {
    const r = this.findQuestionById(t);
    r.title = e;
  }
  setPlaceholder(t, e) {
    const r = this.findQuestionById(t);
    r.placeholder = e;
  }
  setExtraOption(t, e, r) {
    const u = this.findQuestionById(t);
    u.options || (u.options = {}), u.options[e] = r;
  }
  setIndications(t, e) {
    const r = this.findQuestionById(t);
    r.indications = e;
  }
  setLogic(t, e) {
    this.findQuestionById(t).logic = e;
  }
  setRange(t, e) {
    const r = this.findQuestionById(t);
    if ((r == null ? void 0 : r.type) !== "repeat")
      throw new Error("Question with id " + t + " is not a repeat question");
    r.range = e;
  }
}
export {
  St as GuidedInterview
};
