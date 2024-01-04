var pe = Object.defineProperty;
var we = (i, t, e) => t in i ? pe(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var d = (i, t, e) => (we(i, typeof t != "symbol" ? t + "" : t, e), e);
const _e = {
  nullOrUndefined: "Interview params are null or undefined"
};
class te extends Error {
  constructor(t, e = "") {
    super(t), this.name = "ValidationError", this.message = e || _e[t];
  }
}
var ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function me(i) {
  if (i.__esModule)
    return i;
  var t = i.default;
  if (typeof t == "function") {
    var e = function n() {
      if (this instanceof n) {
        var r = [null];
        r.push.apply(r, arguments);
        var s = Function.bind.apply(t, r);
        return new s();
      }
      return t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(i).forEach(function(n) {
    var r = Object.getOwnPropertyDescriptor(i, n);
    Object.defineProperty(e, n, r.get ? r : {
      enumerable: !0,
      get: function() {
        return i[n];
      }
    });
  }), e;
}
var Q = {}, M = {}, ae = {}, U = {}, q = {};
Object.defineProperty(q, "__esModule", {
  value: !0
});
q.default = be;
let E;
const ye = new Uint8Array(16);
function be() {
  if (!E && (E = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !E))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return E(ye);
}
var R = {}, L = {}, N = {};
Object.defineProperty(N, "__esModule", {
  value: !0
});
N.default = void 0;
var Ce = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
N.default = Ce;
Object.defineProperty(L, "__esModule", {
  value: !0
});
L.default = void 0;
var Ie = Oe(N);
function Oe(i) {
  return i && i.__esModule ? i : { default: i };
}
function Re(i) {
  return typeof i == "string" && Ie.default.test(i);
}
var Le = Re;
L.default = Le;
Object.defineProperty(R, "__esModule", {
  value: !0
});
R.default = void 0;
R.unsafeStringify = oe;
var Pe = Se(L);
function Se(i) {
  return i && i.__esModule ? i : { default: i };
}
const w = [];
for (let i = 0; i < 256; ++i)
  w.push((i + 256).toString(16).slice(1));
function oe(i, t = 0) {
  return (w[i[t + 0]] + w[i[t + 1]] + w[i[t + 2]] + w[i[t + 3]] + "-" + w[i[t + 4]] + w[i[t + 5]] + "-" + w[i[t + 6]] + w[i[t + 7]] + "-" + w[i[t + 8]] + w[i[t + 9]] + "-" + w[i[t + 10]] + w[i[t + 11]] + w[i[t + 12]] + w[i[t + 13]] + w[i[t + 14]] + w[i[t + 15]]).toLowerCase();
}
function Ae(i, t = 0) {
  const e = oe(i, t);
  if (!(0, Pe.default)(e))
    throw TypeError("Stringified UUID is invalid");
  return e;
}
var xe = Ae;
R.default = xe;
Object.defineProperty(U, "__esModule", {
  value: !0
});
U.default = void 0;
var Ee = Me(q), Qe = R;
function Me(i) {
  return i && i.__esModule ? i : { default: i };
}
let ne, Y, J = 0, K = 0;
function Ue(i, t, e) {
  let n = t && e || 0;
  const r = t || new Array(16);
  i = i || {};
  let s = i.node || ne, u = i.clockseq !== void 0 ? i.clockseq : Y;
  if (s == null || u == null) {
    const v = i.random || (i.rng || Ee.default)();
    s == null && (s = ne = [v[0] | 1, v[1], v[2], v[3], v[4], v[5]]), u == null && (u = Y = (v[6] << 8 | v[7]) & 16383);
  }
  let a = i.msecs !== void 0 ? i.msecs : Date.now(), o = i.nsecs !== void 0 ? i.nsecs : K + 1;
  const f = a - J + (o - K) / 1e4;
  if (f < 0 && i.clockseq === void 0 && (u = u + 1 & 16383), (f < 0 || a > J) && i.nsecs === void 0 && (o = 0), o >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  J = a, K = o, Y = u, a += 122192928e5;
  const l = ((a & 268435455) * 1e4 + o) % 4294967296;
  r[n++] = l >>> 24 & 255, r[n++] = l >>> 16 & 255, r[n++] = l >>> 8 & 255, r[n++] = l & 255;
  const c = a / 4294967296 * 1e4 & 268435455;
  r[n++] = c >>> 8 & 255, r[n++] = c & 255, r[n++] = c >>> 24 & 15 | 16, r[n++] = c >>> 16 & 255, r[n++] = u >>> 8 | 128, r[n++] = u & 255;
  for (let v = 0; v < 6; ++v)
    r[n + v] = s[v];
  return t || (0, Qe.unsafeStringify)(r);
}
var qe = Ue;
U.default = qe;
var $ = {}, O = {}, A = {};
Object.defineProperty(A, "__esModule", {
  value: !0
});
A.default = void 0;
var Ne = $e(L);
function $e(i) {
  return i && i.__esModule ? i : { default: i };
}
function Be(i) {
  if (!(0, Ne.default)(i))
    throw TypeError("Invalid UUID");
  let t;
  const e = new Uint8Array(16);
  return e[0] = (t = parseInt(i.slice(0, 8), 16)) >>> 24, e[1] = t >>> 16 & 255, e[2] = t >>> 8 & 255, e[3] = t & 255, e[4] = (t = parseInt(i.slice(9, 13), 16)) >>> 8, e[5] = t & 255, e[6] = (t = parseInt(i.slice(14, 18), 16)) >>> 8, e[7] = t & 255, e[8] = (t = parseInt(i.slice(19, 23), 16)) >>> 8, e[9] = t & 255, e[10] = (t = parseInt(i.slice(24, 36), 16)) / 1099511627776 & 255, e[11] = t / 4294967296 & 255, e[12] = t >>> 24 & 255, e[13] = t >>> 16 & 255, e[14] = t >>> 8 & 255, e[15] = t & 255, e;
}
var ke = Be;
A.default = ke;
Object.defineProperty(O, "__esModule", {
  value: !0
});
O.URL = O.DNS = void 0;
O.default = Ve;
var Te = R, je = De(A);
function De(i) {
  return i && i.__esModule ? i : { default: i };
}
function Fe(i) {
  i = unescape(encodeURIComponent(i));
  const t = [];
  for (let e = 0; e < i.length; ++e)
    t.push(i.charCodeAt(e));
  return t;
}
const le = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
O.DNS = le;
const ce = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
O.URL = ce;
function Ve(i, t, e) {
  function n(r, s, u, a) {
    var o;
    if (typeof r == "string" && (r = Fe(r)), typeof s == "string" && (s = (0, je.default)(s)), ((o = s) === null || o === void 0 ? void 0 : o.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let f = new Uint8Array(16 + r.length);
    if (f.set(s), f.set(r, s.length), f = e(f), f[6] = f[6] & 15 | t, f[8] = f[8] & 63 | 128, u) {
      a = a || 0;
      for (let l = 0; l < 16; ++l)
        u[a + l] = f[l];
      return u;
    }
    return (0, Te.unsafeStringify)(f);
  }
  try {
    n.name = i;
  } catch {
  }
  return n.DNS = le, n.URL = ce, n;
}
var B = {};
Object.defineProperty(B, "__esModule", {
  value: !0
});
B.default = void 0;
function We(i) {
  if (typeof i == "string") {
    const t = unescape(encodeURIComponent(i));
    i = new Uint8Array(t.length);
    for (let e = 0; e < t.length; ++e)
      i[e] = t.charCodeAt(e);
  }
  return Ge(He(ze(i), i.length * 8));
}
function Ge(i) {
  const t = [], e = i.length * 32, n = "0123456789abcdef";
  for (let r = 0; r < e; r += 8) {
    const s = i[r >> 5] >>> r % 32 & 255, u = parseInt(n.charAt(s >>> 4 & 15) + n.charAt(s & 15), 16);
    t.push(u);
  }
  return t;
}
function he(i) {
  return (i + 64 >>> 9 << 4) + 14 + 1;
}
function He(i, t) {
  i[t >> 5] |= 128 << t % 32, i[he(t) - 1] = t;
  let e = 1732584193, n = -271733879, r = -1732584194, s = 271733878;
  for (let u = 0; u < i.length; u += 16) {
    const a = e, o = n, f = r, l = s;
    e = _(e, n, r, s, i[u], 7, -680876936), s = _(s, e, n, r, i[u + 1], 12, -389564586), r = _(r, s, e, n, i[u + 2], 17, 606105819), n = _(n, r, s, e, i[u + 3], 22, -1044525330), e = _(e, n, r, s, i[u + 4], 7, -176418897), s = _(s, e, n, r, i[u + 5], 12, 1200080426), r = _(r, s, e, n, i[u + 6], 17, -1473231341), n = _(n, r, s, e, i[u + 7], 22, -45705983), e = _(e, n, r, s, i[u + 8], 7, 1770035416), s = _(s, e, n, r, i[u + 9], 12, -1958414417), r = _(r, s, e, n, i[u + 10], 17, -42063), n = _(n, r, s, e, i[u + 11], 22, -1990404162), e = _(e, n, r, s, i[u + 12], 7, 1804603682), s = _(s, e, n, r, i[u + 13], 12, -40341101), r = _(r, s, e, n, i[u + 14], 17, -1502002290), n = _(n, r, s, e, i[u + 15], 22, 1236535329), e = m(e, n, r, s, i[u + 1], 5, -165796510), s = m(s, e, n, r, i[u + 6], 9, -1069501632), r = m(r, s, e, n, i[u + 11], 14, 643717713), n = m(n, r, s, e, i[u], 20, -373897302), e = m(e, n, r, s, i[u + 5], 5, -701558691), s = m(s, e, n, r, i[u + 10], 9, 38016083), r = m(r, s, e, n, i[u + 15], 14, -660478335), n = m(n, r, s, e, i[u + 4], 20, -405537848), e = m(e, n, r, s, i[u + 9], 5, 568446438), s = m(s, e, n, r, i[u + 14], 9, -1019803690), r = m(r, s, e, n, i[u + 3], 14, -187363961), n = m(n, r, s, e, i[u + 8], 20, 1163531501), e = m(e, n, r, s, i[u + 13], 5, -1444681467), s = m(s, e, n, r, i[u + 2], 9, -51403784), r = m(r, s, e, n, i[u + 7], 14, 1735328473), n = m(n, r, s, e, i[u + 12], 20, -1926607734), e = y(e, n, r, s, i[u + 5], 4, -378558), s = y(s, e, n, r, i[u + 8], 11, -2022574463), r = y(r, s, e, n, i[u + 11], 16, 1839030562), n = y(n, r, s, e, i[u + 14], 23, -35309556), e = y(e, n, r, s, i[u + 1], 4, -1530992060), s = y(s, e, n, r, i[u + 4], 11, 1272893353), r = y(r, s, e, n, i[u + 7], 16, -155497632), n = y(n, r, s, e, i[u + 10], 23, -1094730640), e = y(e, n, r, s, i[u + 13], 4, 681279174), s = y(s, e, n, r, i[u], 11, -358537222), r = y(r, s, e, n, i[u + 3], 16, -722521979), n = y(n, r, s, e, i[u + 6], 23, 76029189), e = y(e, n, r, s, i[u + 9], 4, -640364487), s = y(s, e, n, r, i[u + 12], 11, -421815835), r = y(r, s, e, n, i[u + 15], 16, 530742520), n = y(n, r, s, e, i[u + 2], 23, -995338651), e = b(e, n, r, s, i[u], 6, -198630844), s = b(s, e, n, r, i[u + 7], 10, 1126891415), r = b(r, s, e, n, i[u + 14], 15, -1416354905), n = b(n, r, s, e, i[u + 5], 21, -57434055), e = b(e, n, r, s, i[u + 12], 6, 1700485571), s = b(s, e, n, r, i[u + 3], 10, -1894986606), r = b(r, s, e, n, i[u + 10], 15, -1051523), n = b(n, r, s, e, i[u + 1], 21, -2054922799), e = b(e, n, r, s, i[u + 8], 6, 1873313359), s = b(s, e, n, r, i[u + 15], 10, -30611744), r = b(r, s, e, n, i[u + 6], 15, -1560198380), n = b(n, r, s, e, i[u + 13], 21, 1309151649), e = b(e, n, r, s, i[u + 4], 6, -145523070), s = b(s, e, n, r, i[u + 11], 10, -1120210379), r = b(r, s, e, n, i[u + 2], 15, 718787259), n = b(n, r, s, e, i[u + 9], 21, -343485551), e = I(e, a), n = I(n, o), r = I(r, f), s = I(s, l);
  }
  return [e, n, r, s];
}
function ze(i) {
  if (i.length === 0)
    return [];
  const t = i.length * 8, e = new Uint32Array(he(t));
  for (let n = 0; n < t; n += 8)
    e[n >> 5] |= (i[n / 8] & 255) << n % 32;
  return e;
}
function I(i, t) {
  const e = (i & 65535) + (t & 65535);
  return (i >> 16) + (t >> 16) + (e >> 16) << 16 | e & 65535;
}
function Ze(i, t) {
  return i << t | i >>> 32 - t;
}
function k(i, t, e, n, r, s) {
  return I(Ze(I(I(t, i), I(n, s)), r), e);
}
function _(i, t, e, n, r, s, u) {
  return k(t & e | ~t & n, i, t, r, s, u);
}
function m(i, t, e, n, r, s, u) {
  return k(t & n | e & ~n, i, t, r, s, u);
}
function y(i, t, e, n, r, s, u) {
  return k(t ^ e ^ n, i, t, r, s, u);
}
function b(i, t, e, n, r, s, u) {
  return k(e ^ (t | ~n), i, t, r, s, u);
}
var Ye = We;
B.default = Ye;
Object.defineProperty($, "__esModule", {
  value: !0
});
$.default = void 0;
var Je = fe(O), Ke = fe(B);
function fe(i) {
  return i && i.__esModule ? i : { default: i };
}
const Xe = (0, Je.default)("v3", 48, Ke.default);
var et = Xe;
$.default = et;
var T = {}, j = {};
Object.defineProperty(j, "__esModule", {
  value: !0
});
j.default = void 0;
const tt = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var it = {
  randomUUID: tt
};
j.default = it;
Object.defineProperty(T, "__esModule", {
  value: !0
});
T.default = void 0;
var re = de(j), nt = de(q), rt = R;
function de(i) {
  return i && i.__esModule ? i : { default: i };
}
function st(i, t, e) {
  if (re.default.randomUUID && !t && !i)
    return re.default.randomUUID();
  i = i || {};
  const n = i.random || (i.rng || nt.default)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    e = e || 0;
    for (let r = 0; r < 16; ++r)
      t[e + r] = n[r];
    return t;
  }
  return (0, rt.unsafeStringify)(n);
}
var ut = st;
T.default = ut;
var D = {}, F = {};
Object.defineProperty(F, "__esModule", {
  value: !0
});
F.default = void 0;
function at(i, t, e, n) {
  switch (i) {
    case 0:
      return t & e ^ ~t & n;
    case 1:
      return t ^ e ^ n;
    case 2:
      return t & e ^ t & n ^ e & n;
    case 3:
      return t ^ e ^ n;
  }
}
function X(i, t) {
  return i << t | i >>> 32 - t;
}
function ot(i) {
  const t = [1518500249, 1859775393, 2400959708, 3395469782], e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof i == "string") {
    const u = unescape(encodeURIComponent(i));
    i = [];
    for (let a = 0; a < u.length; ++a)
      i.push(u.charCodeAt(a));
  } else
    Array.isArray(i) || (i = Array.prototype.slice.call(i));
  i.push(128);
  const n = i.length / 4 + 2, r = Math.ceil(n / 16), s = new Array(r);
  for (let u = 0; u < r; ++u) {
    const a = new Uint32Array(16);
    for (let o = 0; o < 16; ++o)
      a[o] = i[u * 64 + o * 4] << 24 | i[u * 64 + o * 4 + 1] << 16 | i[u * 64 + o * 4 + 2] << 8 | i[u * 64 + o * 4 + 3];
    s[u] = a;
  }
  s[r - 1][14] = (i.length - 1) * 8 / Math.pow(2, 32), s[r - 1][14] = Math.floor(s[r - 1][14]), s[r - 1][15] = (i.length - 1) * 8 & 4294967295;
  for (let u = 0; u < r; ++u) {
    const a = new Uint32Array(80);
    for (let g = 0; g < 16; ++g)
      a[g] = s[u][g];
    for (let g = 16; g < 80; ++g)
      a[g] = X(a[g - 3] ^ a[g - 8] ^ a[g - 14] ^ a[g - 16], 1);
    let o = e[0], f = e[1], l = e[2], c = e[3], v = e[4];
    for (let g = 0; g < 80; ++g) {
      const P = Math.floor(g / 20), p = X(o, 5) + at(P, f, l, c) + v + t[P] + a[g] >>> 0;
      v = c, c = l, l = X(f, 30) >>> 0, f = o, o = p;
    }
    e[0] = e[0] + o >>> 0, e[1] = e[1] + f >>> 0, e[2] = e[2] + l >>> 0, e[3] = e[3] + c >>> 0, e[4] = e[4] + v >>> 0;
  }
  return [e[0] >> 24 & 255, e[0] >> 16 & 255, e[0] >> 8 & 255, e[0] & 255, e[1] >> 24 & 255, e[1] >> 16 & 255, e[1] >> 8 & 255, e[1] & 255, e[2] >> 24 & 255, e[2] >> 16 & 255, e[2] >> 8 & 255, e[2] & 255, e[3] >> 24 & 255, e[3] >> 16 & 255, e[3] >> 8 & 255, e[3] & 255, e[4] >> 24 & 255, e[4] >> 16 & 255, e[4] >> 8 & 255, e[4] & 255];
}
var lt = ot;
F.default = lt;
Object.defineProperty(D, "__esModule", {
  value: !0
});
D.default = void 0;
var ct = ve(O), ht = ve(F);
function ve(i) {
  return i && i.__esModule ? i : { default: i };
}
const ft = (0, ct.default)("v5", 80, ht.default);
var dt = ft;
D.default = dt;
var V = {};
Object.defineProperty(V, "__esModule", {
  value: !0
});
V.default = void 0;
var vt = "00000000-0000-0000-0000-000000000000";
V.default = vt;
var W = {};
Object.defineProperty(W, "__esModule", {
  value: !0
});
W.default = void 0;
var gt = pt(L);
function pt(i) {
  return i && i.__esModule ? i : { default: i };
}
function wt(i) {
  if (!(0, gt.default)(i))
    throw TypeError("Invalid UUID");
  return parseInt(i.slice(14, 15), 16);
}
var _t = wt;
W.default = _t;
(function(i) {
  Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "NIL", {
    enumerable: !0,
    get: function() {
      return s.default;
    }
  }), Object.defineProperty(i, "parse", {
    enumerable: !0,
    get: function() {
      return f.default;
    }
  }), Object.defineProperty(i, "stringify", {
    enumerable: !0,
    get: function() {
      return o.default;
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
      return n.default;
    }
  }), Object.defineProperty(i, "v5", {
    enumerable: !0,
    get: function() {
      return r.default;
    }
  }), Object.defineProperty(i, "validate", {
    enumerable: !0,
    get: function() {
      return a.default;
    }
  }), Object.defineProperty(i, "version", {
    enumerable: !0,
    get: function() {
      return u.default;
    }
  });
  var t = l(U), e = l($), n = l(T), r = l(D), s = l(V), u = l(W), a = l(L), o = l(R), f = l(A);
  function l(c) {
    return c && c.__esModule ? c : { default: c };
  }
})(ae);
var G = {};
Object.defineProperty(G, "__esModule", { value: !0 });
G.RandomStringConfig = void 0;
class mt {
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
G.RandomStringConfig = mt;
var H = {};
Object.defineProperty(H, "__esModule", { value: !0 });
H.RandomStringBuilder = void 0;
class yt {
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
H.RandomStringBuilder = yt;
var z = {};
const bt = new Proxy({}, {
  get(i, t) {
    throw new Error(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${t}" in client code.  See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
  }
}), Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bt
}, Symbol.toStringTag, { value: "Module" })), It = /* @__PURE__ */ me(Ct);
var Ot = ie && ie.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(z, "__esModule", { value: !0 });
z.RandomStringGenerator = void 0;
const Rt = Ot(It);
class Lt {
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
    const n = Rt.default.randomBytes(e), r = t.length - 1;
    let s = "";
    for (; e--; )
      s += t[n[e] & r];
    return s;
  }
}
z.RandomStringGenerator = Lt;
var Z = {};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.StringReplacer = void 0;
class Pt {
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
Z.StringReplacer = Pt;
Object.defineProperty(M, "__esModule", { value: !0 });
M.Str = void 0;
const se = ae, St = G, At = H, xt = z, ee = Z;
class h {
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
    return e.length === 1 ? this : new h(e.slice(1).join(t));
  }
  /**
   * Returns the portion of the string after the last occurrence of the given `delimiter`.
   *
   * @param {String} delimiter
   *
   * @return {Str}
   */
  afterLast(t) {
    return t === "" ? this : new h(this.split(t).pop());
  }
  /**
   * Append the given values to the string.
   *
   * @param {any} values
   *
   * @return {Str}
   */
  append(...t) {
    return new h(this.value + [].concat(...t).join(""));
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
    return t === "" ? this : new h(this.split(t).shift());
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
    return e.length === 1 ? this : new h(e.slice(0, -1).join(t));
  }
  /**
   * Convert the string to camelCase.
   *
   * @returns {Str}
   */
  camel() {
    return new h(this.replaceAll(/[_-]+/, " ").splitCamel().map((t) => new h(t).lower().ucFirst().get()).join("")).lcFirst();
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
    return t = [].concat(...t), new h(this.value.concat(...t));
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
    return t instanceof h ? this.value === t.get() : this.value === t;
  }
  /**
   * Determine whether the string equals given `value` when ignoring character casing.
   *
   * @param {String} value
   *
   * @returns {Boolean}
   */
  equalsIgnoreCase(t) {
    return this.lower().equals(new h(t).lower().get());
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
    return new h(this.value.replace(/[_-\s]+/g, t)).strip().toLowerCase();
  }
  /**
   * Lowercases the first character in the string.
   *
   * @returns {Str}
   */
  lcFirst() {
    return this.isEmpty() ? this : new h(this.value[0].toLowerCase() + this.value.slice(1));
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
    return this.length() <= t ? this : new h(this.value.substring(0, t).concat(e));
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
      return new h(this.value.trimStart());
    for (; this.startsWith(t); )
      this.value = this.slice(t.length).get();
    return new h(this.value);
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
    return new h(this.value.padStart(t, e));
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
    return new h(this.value.padEnd(t, e));
  }
  /**
   * Parse a Class[@]method style string into the Class and method names.
   *
   * @returns {String[]}
   */
  parseCallback(t = "@", e) {
    if (this.notContains(t))
      return [this.value, e];
    const [n, r] = this.split(t, 2);
    return [n, r];
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
    return new h([].concat(...t).join("") + this.value);
  }
  /**
   * Create a random, URL-friendly string. The default length will have 21 symbols.
   *
   * @param {Number} [lengthOrCallback=21] number of symbols in string
   *
   * @returns {String}
   */
  random(t) {
    const e = new St.RandomStringConfig(), n = new At.RandomStringBuilder(e);
    return t || n.characters().numbers().symbols(), typeof t == "function" && t(n), typeof t == "number" && n.characters().numbers().symbols().length(t), this.generateRandom(e);
  }
  /**
   * Create a random, URL-friendly string. The default length will have 21 symbols.
   *
   * @param {Number} [size=21] number of symbols in string
   *
   * @returns {String}
   */
  generateRandom(t) {
    return new xt.RandomStringGenerator(h, t).generate();
  }
  replace(t, e) {
    return e == null ? new ee.StringReplacer(this, t) : new h(this.value.replace(t, e));
  }
  replaceAll(t, e) {
    if (e == null)
      return new ee.StringReplacer(this, t).all();
    const n = new RegExp(t, "g");
    return new h(this.value.replace(n, e));
  }
  replaceLast(t, e) {
    return e == null ? new ee.StringReplacer(this, t).last() : this.notContains(t.toString()) ? this : new h(this.beforeLast(t.toString()).get() + e + this.afterLast(t.toString()).get());
  }
  /**
   * Returns the reversed string.
   *
   * @returns {Str}
   */
  reverse() {
    return new h(this.chars().reverse().join(""));
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
      return new h(this.value.trimEnd());
    for (; this.endsWith(t); )
      this.value = this.replaceLast(t).with("").get();
    return new h(this.value);
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
      const n = Math.floor(Math.random() * e--), r = t[e];
      t[e] = t[n], t[n] = r;
    }
    return new h(t.join(""));
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
    return new h(this.value.slice(t, e));
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
    return new h(this.value.replace(/[_-\s]+/g, "_")).strip().toLowerCase();
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
    return new h(this.value.replace(/\s+/g, ""));
  }
  /**
   * Removes the byte order mark (BOM) from the beginning of the string.
   *
   * @returns {Str}
   */
  stripBom() {
    return this.startsWithBom() ? new h(this.slice(1)) : this;
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
    return new h(this.value.replace(/\s+/g, " "));
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
    return new h(this.value.substring(t, e));
  }
  /**
   * Convert the string to title case.
   *
   * @returns {Str}
   */
  title() {
    return new h(this.split(" ").filter((t) => t).map((t) => new h(t)).map((t) => (t.isUpper() || (t = t.lower().replace(this.ALPHANUMERIC_PATTERN, (e) => e.toUpperCase())), t.get())).join(" "));
  }
  /**
   * Lowercases the string. Alias for `.lower()` and convenience
   * method to comply with the global String’s `.toLowerCase()`.
   *
   * @returns {Str}
   */
  toLowerCase() {
    return new h(this.value.toLowerCase());
  }
  /**
   * Uppercases the string. Alias for `.upper()` and convenience
   * method to comply with the global String’s `.toUpperCase()`.
   *
   * @returns {Str}
   */
  toUpperCase() {
    return new h(this.value.toUpperCase());
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
    return this.isEmpty() ? this : new h(this.value[0].toUpperCase() + this.value.slice(1));
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
    return (0, se.v4)();
  }
  /**
   * Determine whether the given string is a valid UUID (no matter what version).
   *
   * @returns {Boolean}
   */
  isUuid() {
    return (0, se.validate)(this.value);
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
M.Str = h;
Object.defineProperty(Q, "__esModule", { value: !0 });
Q.Str = void 0;
const Et = M, C = (i) => new Et.Str(i);
Q.Str = C;
C.uuid = () => C().uuid();
C.random = (i) => C().random(i);
C.isString = (i) => C().isString(i);
C.isAlphaNumeric = (i) => C().isAlphaNumeric(i);
C.isSymbol = (i) => C().isSymbol(i);
var Qt = Q.default = C;
const Mt = (i) => Qt(i).isCamel(), Ut = (i) => /^([a-z0-9]{1,})(_[a-z0-9]{1,})*$/.test(i);
class x {
  constructor(t, e) {
    d(this, "_id");
    d(this, "_type");
    d(this, "_subType");
    d(this, "_title");
    d(this, "_placeholder");
    d(this, "_required");
    d(this, "_value");
    d(this, "_logic");
    d(this, "_interview");
    // These public variables are for Navigation purposes
    d(this, "isCurrent", !1);
    d(this, "isEnd", !1);
    d(this, "exitRepeat", !1);
    d(this, "indexInsideRepeat", null);
    d(this, "isLast", !1);
    d(this, "isNotLastOfRepeatContent", !1);
    d(this, "isPrevious", !1);
    this._interview = e, this.id = t.id, this._type = t.type, this._subType = t.subType || "", this._title = t.title || "", this._placeholder = t.placeholder || "", this._required = t.required || !1, this._logic = t.logic || {}, this.indexInsideRepeat = t.indexInsideRepeat || null;
  }
  get id() {
    return this._id;
  }
  set id(t) {
    this.idIsNotInCamelCaseOrSnakeCase(t), this.findDuplicatedIdsInInterview(this._interview.getInterviewParams(), [t]), this._id = t;
  }
  get type() {
    return this._type;
  }
  get value() {
    return this._value;
  }
  get required() {
    return this._required;
  }
  get title() {
    return this._title;
  }
  get state() {
    return this.getStateOfQuestion();
  }
  idIsNotInCamelCaseOrSnakeCase(t) {
    if (!Mt(t) && !Ut(t))
      throw new te("", `ID '${t}' is not in camel case or snake case`);
  }
  findDuplicatedIdsInInterview(t, e = []) {
    for (const n of Object.values(t)) {
      const r = n.id;
      if (e.includes(r))
        throw new te("", "ID REPEATED: " + r);
      e.push(r), n.type === "repeat" && this.findDuplicatedIdsInInterview(n.questions);
    }
  }
  setValue(t) {
    this._value = t;
  }
  update() {
    this.updateState();
  }
  updateState() {
    this._interview.state.setPropertyInState(this._id, this.getStateOfQuestion());
  }
  getStateOfQuestion() {
    return {
      title: this.getTitleForState(),
      value: this._value
    };
  }
  getTitleForState() {
    var e;
    const t = (e = this.indexInsideRepeat) == null ? void 0 : e.split(".").pop();
    return t ? this._title.replace(/<%= index %>/g, t.toString()) : this._title;
  }
  getParams() {
    return {
      id: this._id,
      type: this._type
    };
  }
  canBeShown() {
    var t, e;
    if ((t = this._logic) != null && t.showIf) {
      const n = this._interview.map.keys(), r = this._interview.map.values();
      if (!Function(...n, `return ${this._logic.showIf}`).bind(this)(...r))
        return !1;
    }
    if ((e = this._logic) != null && e.hideIf) {
      const n = this._interview.map.keys(), r = this._interview.map.values();
      if (!!Function(...n, `return ${this._logic.hideIf}`).bind(this)(...r))
        return !1;
    }
    return !0;
  }
  addOrUpdateParam(t, e) {
    t === "required" && (this._required = Boolean(e));
  }
}
class ue extends x {
  constructor(t, e) {
    super(t, e), this.setValue(t.value || ""), this.update();
  }
}
class qt extends x {
  constructor(t, e) {
    super(t, e), this.setValue(t.value || 0), this.update();
  }
  setValue(t) {
    const e = parseFloat(t);
    if (isNaN(e) || t === "")
      throw new Error(`Value of question whith id '${this.id}' must be a number`);
    this._value = e;
  }
}
class Nt extends x {
  constructor(e, n) {
    super(e, n);
    d(this, "_range");
    d(this, "_questions");
    d(this, "_content", {});
    this._range = e.range, this._questions = e.questions, this.setValue(e.value), this.update();
  }
  get content() {
    return this._content;
  }
  get range() {
    return this._range;
  }
  setValue(e) {
    const n = parseFloat(e);
    if (isNaN(n) || e === "")
      throw new Error(`Value of question whith id '${this.id}' must be a number`);
    this._value = this.getValueBetweenRange(n), this._questions && this.buildContent();
  }
  getValueBetweenRange(e) {
    return e < this._range.min ? this._range.min : e > this._range.max ? this._range.max : e;
  }
  buildContent() {
    const e = this._value;
    for (let s = 0; s < e; s++) {
      const u = this._content[s];
      if (u) {
        u.hidden = !1;
        continue;
      }
      this.addIndexToNestedQuestions(s);
      const a = new Wt({ interviewParams: this._questions }, !1);
      this._content[s] = { hidden: !1, nestedInterview: a };
    }
    const n = Object.keys(this._content);
    if (e < n.length)
      for (let s = e; s < n.length; s++)
        this._content[s].hidden = !0;
    Object.values(this._content).forEach((s, u) => {
      s.nestedInterview.isLastContentInterviewOfRepeat = u + 1 === this._value;
    });
  }
  addIndexToNestedQuestions(e) {
    Object.values(this._questions).forEach((n) => {
      const r = e + 1;
      this.indexInsideRepeat !== null ? n.indexInsideRepeat = this.indexInsideRepeat + `.${r}` : n.indexInsideRepeat = r.toString();
    });
  }
  getParams() {
    return {
      id: this.id,
      type: this.type,
      questions: this._questions
    };
  }
  updateState() {
    this._interview.state.setPropertyInState(this.id, {
      title: this.title,
      value: this._value,
      content: this.getContentForState()
    });
  }
  getContentForState() {
    const e = {};
    for (const [n, r] of Object.entries(this._content))
      e[n] = {
        hidden: r.hidden,
        state: r.nestedInterview.getState()
      };
    return e;
  }
}
class $t extends x {
  constructor(e, n) {
    super(e, n);
    d(this, "_format");
    this._format = e.format || "dd/mm/yyyy", this.setValue(e.value || "");
  }
}
class Bt extends x {
  constructor(e, n) {
    super(e, n);
    d(this, "_choices", []);
    d(this, "_values", []);
    this.setChoices(e.choices), e.value && this.setValue(e.value), this.update();
  }
  get choices() {
    return this._choices;
  }
  get values() {
    return this._values;
  }
  setChoices(e = []) {
    var n;
    if (!Array.isArray(e))
      throw new Error(`Choices value of question whith id '${this.id}' must be an Array`);
    this._choices = e, this._subType === "multiSelect" ? this._choices.forEach((r) => {
      const s = this._values.includes(r.label);
      r.checked && !s && this._values.push(r.label), r.checked = s || r.checked;
    }) : this._value = ((n = this._choices.find((r) => r.checked === !0)) == null ? void 0 : n.label) || "";
  }
  setValue(e) {
    this.choiceWithValueExists(e), this._subType === "multiSelect" ? this.setMultiSelectValue(e) : (this._choices.forEach((n) => {
      n.checked = n.label === e;
    }), this._value = e);
  }
  choiceWithValueExists(e) {
    if (!this._choices.find((r) => r.label === e))
      throw new Error(`Question with id: ${this.id}, does not have choice with value: ${e}`);
  }
  setMultiSelectValue(e) {
    if (Array.isArray(e))
      this._values = e, this._choices.forEach((n) => {
        n.checked = e.includes(n.label);
      });
    else {
      const n = this._choices.find((r) => r.label === e);
      if (!n)
        throw new Error("Value does not exists");
      if (!this._values.includes(e) && e)
        this._values.push(e), this._choices.forEach((r) => {
          r.checked = this._values.includes(r.label);
        });
      else {
        const r = this._values.indexOf(n.label);
        r !== -1 && this._values.splice(r, 1), n.checked = !1;
      }
    }
  }
  addChoice(e) {
    this._choices.push(e);
  }
  removeChoice(e) {
    if (typeof e == "number") {
      this._choices.splice(e, 1);
      return;
    }
    const n = typeof e == "string" ? e : e.label, r = this._choices.findIndex((s) => s.label === n);
    if (r === -1)
      throw new Error(`Choice with label: '${n}', does not exist in Question with id: '${this.id}'`);
    this._choices.splice(r, 1);
  }
  changeLabelOfChoice(e, n) {
    if (!this._choices[e])
      throw new Error("No choice with index:" + e);
    this._choices[e].label = n;
  }
  addOrUpdateParam(e, n) {
    super.addOrUpdateParam(e, n);
  }
}
const kt = {
  createQuetion(i, t) {
    const { type: e } = i;
    let n;
    return e === "text" ? n = new ue(i, t) : e === "number" ? n = new qt(i, t) : e === "date" ? n = new $t(i, t) : e === "multipleChoice" ? n = new Bt(i, t) : e === "repeat" ? n = new Nt(i, t) : n = new ue(i, t), n;
  }
};
class Tt {
  constructor() {
    d(this, "observers", []);
  }
  attach(t) {
    this.observers.includes(t) || this.observers.push(t);
  }
  detach(t) {
    const e = this.observers.indexOf(t);
    e !== -1 && this.observers.splice(e, 1);
  }
  notify() {
    for (const t of this.observers)
      t.update(this);
  }
  updateInterview() {
    this.notify();
  }
}
class jt {
  constructor() {
    d(this, "_state", {});
  }
  get() {
    return this._state;
  }
  setPropertyInState(t, e) {
    this._state[t] = e;
  }
}
class Dt extends Tt {
  constructor(e) {
    super();
    d(this, "map", /* @__PURE__ */ new Map());
    d(this, "state");
    this.state = new jt(), this.validateParams(e), this.setInitialParams(e);
  }
  validateParams(e) {
    if (e == null)
      throw new te("nullOrUndefined");
  }
  getInterviewParams() {
    const e = {};
    for (const [n, r] of this.map)
      e[n] = r.getParams();
    return e;
  }
  setInitialParams(e) {
    for (const n of Object.values(e))
      this.addQuestion(n);
  }
  addQuestion(e) {
    const n = kt.createQuetion(e, this);
    this.map.set(n.id, n), this.attach(n);
  }
  removeQuestion(e) {
    const n = this.getQuestionById(e);
    this.map.delete(e), this.detach(n);
  }
  getQuestionById(e) {
    return this.idExists(e), this.map.get(e);
  }
  setValueOfQuestion(e, n) {
    this.idExists(e);
    const r = this.map.get(e);
    r == null || r.setValue(n), this.notify();
  }
  idExists(e) {
    if (!this.map.has(e))
      throw new Error("No question with id: " + e);
  }
  changeIdOfQuestion(e, n) {
    const r = this.getQuestionById(e);
    r.id = n, this.map.set(n, r), this.map.delete(e);
  }
  addChoiceToMultipleChoiceQuestion(e, n) {
    this.getMultipleChoiceQuestionById(e).addChoice(n);
  }
  getMultipleChoiceQuestionById(e) {
    const n = this.getQuestionById(e);
    if (n.type !== "multipleChoice")
      throw new Error(`Question with id: ${e}, is not of type 'multipleChoice'`);
    return n;
  }
  removeChoiceFromMultipleChoice(e, n) {
    this.getMultipleChoiceQuestionById(e).removeChoice(n);
  }
  changeLabelOfChoice(e, n, r) {
    this.getMultipleChoiceQuestionById(e).changeLabelOfChoice(n, r);
  }
  addOrUpdateParamOfQuestion(e, n) {
    this.getQuestionById(e).addOrUpdateParam(n == null ? void 0 : n.name, n == null ? void 0 : n.value);
  }
  getAsArray() {
    return Array.from(this.map);
  }
  getState() {
    return this.state.get();
  }
}
const S = (i, t) => {
  var s;
  let e, n;
  const r = i.getAsArray();
  for (let u = 0; u < r.length; u++) {
    const a = r[u][1], o = a == null ? void 0 : a.isCurrent, f = (a == null ? void 0 : a.type) === "repeat";
    if (n = r[u + 1] && r[u + 1][1], o && !f && !n && !t) {
      if (a.canBeShown()) {
        a.isEnd = !0, e = a;
        break;
      }
      a.isCurrent = !1;
      for (let l = 0; l < r.length; l++) {
        const c = r[l][1];
        if (c.exitRepeat) {
          e = c;
          break;
        }
      }
    }
    if (o && !f && n) {
      a.isCurrent = !1, e = r[u + 1][1], e.isCurrent = !0, e.canBeShown() || (e = S(i, t));
      break;
    }
    if (o && f && a.canBeShown()) {
      const l = a;
      l.isCurrent = !1, e = l.content[0].nestedInterview.getInterviewAsArray()[0][1], e.isCurrent = !0;
      break;
    }
    if (o && f && !a.canBeShown() && n) {
      a.isCurrent = !1, e = r[u + 1][1], e.isCurrent = !0, e.canBeShown() || (e = S(i, t));
      break;
    }
    if (o && f && !a.canBeShown() && !n) {
      a.isEnd = !0, e = a;
      break;
    }
    if (!o && f && !a.canBeShown() && !n) {
      a.isEnd = !0, e = a;
      break;
    }
    if (!o && f && a.canBeShown()) {
      let l = !1;
      const c = a;
      for (let v = 0; v < c.value; v++)
        if (!c.content[v].hidden) {
          const g = !c.content[v + 1] || ((s = c.content[v + 1]) == null ? void 0 : s.hidden);
          if (e = c.content[v].nestedInterview.getNextQuestion(), e) {
            if (c.content[v].nestedInterview.isQuestionTheLastOfInterview(e.id))
              if (g && n) {
                const p = e;
                if (p.exitRepeat) {
                  p.isEnd = !1, p.isCurrent = !1, e = r[u + 1][1], e.isCurrent = !0, e.canBeShown() || (e = S(i, t)), p.exitRepeat = !1;
                  break;
                } else
                  p.exitRepeat = !0;
              } else
                g || (e.isLast = !0);
            if (e != null && e.isEnd)
              if (v + 1 < parseInt(a.value))
                if (!e.isCurrent)
                  e.isEnd = !1, e = null;
                else {
                  const p = c.content[v + 1].nestedInterview.getInterviewAsArray();
                  e.isCurrent = !1, e.isEnd = !1, e = p[0][1], e.isCurrent = !0;
                }
              else {
                const p = e.canBeShown();
                e.isEnd && !p && (e.isCurrent = !1, e = null);
              }
            if (e)
              break;
          } else if (g && n)
            l = !0;
          else if (!g && !e) {
            const P = c.content[v].nestedInterview.getInterviewAsArray().find((p) => p[1].isLast);
            if (P) {
              P[1].isLast = !1;
              const p = c.content[v + 1].nestedInterview.getInterviewAsArray();
              if (!p[0][1].isCurrent) {
                p[0][1].isCurrent = !0, e = p[0][1];
                break;
              }
            }
          }
        }
      if (l)
        continue;
      break;
    }
  }
  return e;
}, Ft = (i, t, e = null, n = !1, r) => {
  const s = i.getAsArray(), u = s[0][1];
  if (u.isCurrent)
    return t ? u : (e && (e.isCurrent = !0), u.isCurrent = !1, e);
  let a = u, o;
  for (let f = 0; f < s.length; f++) {
    const l = s[f][1], c = l.canBeShown();
    if (l.exitRepeat && (l.exitRepeat = !1), l.isLast && (l.isLast = !1), l.isNotLastOfRepeatContent && (l.isNotLastOfRepeatContent = !1), l.isCurrent) {
      a.isCurrent = !0, o = a, l.isCurrent = !1;
      break;
    } else if (c && (a = l), l.type === "repeat") {
      const v = l;
      for (let g = 0; g < parseInt(l.value) && !(!v.content[g].hidden && (o = v.content[g].nestedInterview.getPreviousQuestion(a), o != null && o.isPrevious && (o.isPrevious = !1, a = o, o = null), o && o.isCurrent)); g++)
        ;
      if (o && o.isCurrent)
        break;
    }
  }
  if (e && !o) {
    const f = ge(s);
    f && (o = f);
  }
  return o && !t && r(o.id, i) && (n ? (o.isLast = !0, o.exitRepeat = !0) : o.isNotLastOfRepeatContent = !0), o && t && o.indexInsideRepeat && o.isNotLastOfRepeatContent && (o.isLast = !0), o;
}, ge = (i) => {
  let t;
  for (let e = i.length - 1; e >= 0; e--) {
    const n = i[e][1];
    if (n.canBeShown())
      if (n.type === "repeat") {
        const s = n;
        for (let u = parseInt(n.value) - 1; u >= 0; u--)
          if (!s.content[u].hidden) {
            const a = s.content[u].nestedInterview.getInterviewAsArray();
            if (t = ge(a), t && (t.isPrevious = !0), t)
              break;
          }
        if (t)
          break;
      } else {
        t = n, t.isPrevious = !0;
        break;
      }
  }
  return t;
};
class Vt {
  constructor(t, e) {
    d(this, "_interview");
    d(this, "_isRoot");
    d(this, "_currentQuestion");
    this._isRoot = e, this._interview = t, e && this.getCurrent();
  }
  next() {
    const t = S(this._interview, this._isRoot);
    t ? this.setCurrent(t) : this.getCurrent().isCurrent = !0, this.getCurrent().isEnd = !1;
  }
  getNextQuestion() {
    return S(this._interview, this._isRoot);
  }
  previous() {
    const t = this.getPreviousQuestion();
    t && this.setCurrent(t);
  }
  getPreviousQuestion(t = null, e = !1) {
    return Ft(
      this._interview,
      this._isRoot,
      t,
      e,
      this.isQuestionTheLastOfInterview.bind(this)
    );
  }
  setCurrent(t) {
    this._currentQuestion = t;
  }
  getCurrent() {
    return this._currentQuestion || (this._currentQuestion = this._interview.getAsArray()[0][1], this._isRoot && (this._currentQuestion.isCurrent = !0)), this._currentQuestion;
  }
  isQuestionTheLastOfInterview(t) {
    const e = this.getLastQuestionOfInterview(), n = this._interview.map.get(t);
    return (n == null ? void 0 : n.indexInsideRepeat) !== null ? (n == null ? void 0 : n.id) === (e == null ? void 0 : e.id) && (n == null ? void 0 : n.indexInsideRepeat) === (e == null ? void 0 : e.indexInsideRepeat) : (e == null ? void 0 : e.id) === n.id;
  }
  getLastQuestionOfInterview() {
    let t = null;
    const e = this._interview.getAsArray();
    for (let n = e.length - 1; n >= 0; n--) {
      const r = e[n][1];
      if (r.canBeShown())
        if (r.type === "repeat") {
          const s = r;
          for (let u = parseInt(r.value) - 1; u >= 0 && !(!s.content[u].hidden && (t = s.content[u].nestedInterview.getLastQuestionOfInterview(), t)); u--)
            ;
          t || (t = r);
          break;
        } else {
          t = r;
          break;
        }
    }
    return t;
  }
  getProgress() {
    let t = 0, e = 0;
    return this._interview.getAsArray().forEach(([r, s]) => {
      t += 1, s.isCurrent && (e = t), s.type === "repeat" && Object.values(s.content).forEach((a) => {
        if (!a.hidden) {
          const o = a.nestedInterview.getProgress();
          o.currentPosition !== 0 && (e = t + o.currentPosition), t += o.total;
        }
      });
    }), {
      total: t,
      currentPosition: e,
      percentageOfCompletion: Math.round(e * 100 / t)
    };
  }
  isStartOfInterview() {
    const e = this._interview.getAsArray()[0][1].id, n = this.getCurrent().id;
    return e === n;
  }
  isEndOfInterview() {
    const t = this.getLastQuestionOfInterview(), e = this.getCurrent();
    return e.indexInsideRepeat !== null ? e.id === (t == null ? void 0 : t.id) && e.indexInsideRepeat === t.indexInsideRepeat : (t == null ? void 0 : t.id) === e.id;
  }
}
class Wt {
  constructor(t = { interviewParams: {} }, e = !0) {
    d(this, "_interview");
    d(this, "_isRoot");
    d(this, "navigation");
    d(this, "isLastContentInterviewOfRepeat", !1);
    this._interview = new Dt(t.interviewParams), this._isRoot = e, this.navigation = new Vt(this._interview, this._isRoot);
  }
  get interview() {
    return this._interview;
  }
  setValue(t, e) {
    this._interview.setValueOfQuestion(t, e);
  }
  getCurrent() {
    return this.navigation.getCurrent();
  }
  next() {
    this.navigation.next();
  }
  getNextQuestion() {
    return this.navigation.getNextQuestion();
  }
  previous() {
    this.navigation.previous();
  }
  getPreviousQuestion(t = null) {
    return this.navigation.getPreviousQuestion(t, this.isLastContentInterviewOfRepeat);
  }
  getLastQuestionOfInterview() {
    return this.navigation.getLastQuestionOfInterview();
  }
  isQuestionTheLastOfInterview(t) {
    return this.navigation.isQuestionTheLastOfInterview(t);
  }
  getProgress() {
    return this.navigation.getProgress();
  }
  // returns true if you are at the first question
  // FIXME, rename to isStartOfInterview
  isStart() {
    return this.navigation.isStartOfInterview();
  }
  // returns true if you reach the last question
  // FIXME, rename to isEndOfInterview
  isEnd() {
    return this.navigation.isEndOfInterview();
  }
  getInterviewAsArray() {
    return this._interview.getAsArray();
  }
  getInterviewParams() {
    return this._interview.getInterviewParams();
  }
  getNestedInterview(t, e) {
    const n = this._interview.getQuestionById(t);
    if ((n == null ? void 0 : n.type) !== "repeat")
      throw new Error("Question with id " + t + " is not a repeat question");
    return n.content[e].nestedInterview;
  }
  // Returns interview of current question
  getCurrentGuidedInterview() {
    const t = this.getInterviewAsArray();
    let e = null;
    for (let n = 0; n < t.length; n++) {
      const r = t[n][1];
      if (r.isCurrent) {
        e = this;
        break;
      }
      if (r.type === "repeat") {
        const s = r;
        for (let u = 0; u < parseInt(r.value) && !(!s.content[u].hidden && (e = s.content[u].nestedInterview.getCurrentGuidedInterview(), e)); u++)
          ;
      }
      if (e)
        break;
    }
    return this._isRoot && !e && (e = this), e;
  }
  changeIdOfQuestion(t, e) {
    this._interview.changeIdOfQuestion(t, e);
  }
  findQuestionById(t) {
    return this._interview.getQuestionById(t);
  }
  addChoiceToMultipleChoiceQuestion(t, e) {
    this._interview.addChoiceToMultipleChoiceQuestion(t, e);
  }
  removeChoiceFromMultipleChoice(t, e) {
    this._interview.removeChoiceFromMultipleChoice(t, e);
  }
  changeLabelOfChoice(t, e, n) {
    this._interview.changeLabelOfChoice(t, e, n);
  }
  addOrUpdateParamOfQuestion(t, e) {
    this._interview.addOrUpdateParamOfQuestion(t, e);
  }
  getState() {
    return this._interview.getState();
  }
}
export {
  Wt as GuidedInterview
};
