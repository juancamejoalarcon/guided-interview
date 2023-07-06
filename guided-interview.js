var Kt = Object.defineProperty;
var jt = (r, t, e) => t in r ? Kt(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Le = (r, t, e) => (jt(r, typeof t != "symbol" ? t + "" : t, e), e);
var ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function Ut(r) {
  if (r.__esModule)
    return r;
  var t = r.default;
  if (typeof t == "function") {
    var e = function l() {
      if (this instanceof l) {
        var h = [null];
        h.push.apply(h, arguments);
        var o = Function.bind.apply(t, h);
        return new o();
      }
      return t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(r).forEach(function(l) {
    var h = Object.getOwnPropertyDescriptor(r, l);
    Object.defineProperty(e, l, h.get ? h : {
      enumerable: !0,
      get: function() {
        return r[l];
      }
    });
  }), e;
}
var Ke = {}, je = {}, yt = {}, De = {}, Ue = {};
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.default = $t;
let Be;
const Vt = new Uint8Array(16);
function $t() {
  if (!Be && (Be = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Be))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Be(Vt);
}
var Ae = {}, Ne = {}, Ve = {};
Object.defineProperty(Ve, "__esModule", {
  value: !0
});
Ve.default = void 0;
var Wt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
Ve.default = Wt;
Object.defineProperty(Ne, "__esModule", {
  value: !0
});
Ne.default = void 0;
var Gt = qt(Ve);
function qt(r) {
  return r && r.__esModule ? r : { default: r };
}
function Ht(r) {
  return typeof r == "string" && Gt.default.test(r);
}
var Yt = Ht;
Ne.default = Yt;
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = void 0;
Ae.unsafeStringify = _t;
var Qt = zt(Ne);
function zt(r) {
  return r && r.__esModule ? r : { default: r };
}
const pe = [];
for (let r = 0; r < 256; ++r)
  pe.push((r + 256).toString(16).slice(1));
function _t(r, t = 0) {
  return (pe[r[t + 0]] + pe[r[t + 1]] + pe[r[t + 2]] + pe[r[t + 3]] + "-" + pe[r[t + 4]] + pe[r[t + 5]] + "-" + pe[r[t + 6]] + pe[r[t + 7]] + "-" + pe[r[t + 8]] + pe[r[t + 9]] + "-" + pe[r[t + 10]] + pe[r[t + 11]] + pe[r[t + 12]] + pe[r[t + 13]] + pe[r[t + 14]] + pe[r[t + 15]]).toLowerCase();
}
function Jt(r, t = 0) {
  const e = _t(r, t);
  if (!(0, Qt.default)(e))
    throw TypeError("Stringified UUID is invalid");
  return e;
}
var Xt = Jt;
Ae.default = Xt;
Object.defineProperty(De, "__esModule", {
  value: !0
});
De.default = void 0;
var Zt = tn(Ue), en = Ae;
function tn(r) {
  return r && r.__esModule ? r : { default: r };
}
let pt, it, st = 0, ot = 0;
function nn(r, t, e) {
  let l = t && e || 0;
  const h = t || new Array(16);
  r = r || {};
  let o = r.node || pt, d = r.clockseq !== void 0 ? r.clockseq : it;
  if (o == null || d == null) {
    const M = r.random || (r.rng || Zt.default)();
    o == null && (o = pt = [M[0] | 1, M[1], M[2], M[3], M[4], M[5]]), d == null && (d = it = (M[6] << 8 | M[7]) & 16383);
  }
  let g = r.msecs !== void 0 ? r.msecs : Date.now(), k = r.nsecs !== void 0 ? r.nsecs : ot + 1;
  const _ = g - st + (k - ot) / 1e4;
  if (_ < 0 && r.clockseq === void 0 && (d = d + 1 & 16383), (_ < 0 || g > st) && r.nsecs === void 0 && (k = 0), k >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  st = g, ot = k, it = d, g += 122192928e5;
  const T = ((g & 268435455) * 1e4 + k) % 4294967296;
  h[l++] = T >>> 24 & 255, h[l++] = T >>> 16 & 255, h[l++] = T >>> 8 & 255, h[l++] = T & 255;
  const P = g / 4294967296 * 1e4 & 268435455;
  h[l++] = P >>> 8 & 255, h[l++] = P & 255, h[l++] = P >>> 24 & 15 | 16, h[l++] = P >>> 16 & 255, h[l++] = d >>> 8 | 128, h[l++] = d & 255;
  for (let M = 0; M < 6; ++M)
    h[l + M] = o[M];
  return t || (0, en.unsafeStringify)(h);
}
var rn = nn;
De.default = rn;
var $e = {}, Te = {}, Pe = {};
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.default = void 0;
var sn = on(Ne);
function on(r) {
  return r && r.__esModule ? r : { default: r };
}
function an(r) {
  if (!(0, sn.default)(r))
    throw TypeError("Invalid UUID");
  let t;
  const e = new Uint8Array(16);
  return e[0] = (t = parseInt(r.slice(0, 8), 16)) >>> 24, e[1] = t >>> 16 & 255, e[2] = t >>> 8 & 255, e[3] = t & 255, e[4] = (t = parseInt(r.slice(9, 13), 16)) >>> 8, e[5] = t & 255, e[6] = (t = parseInt(r.slice(14, 18), 16)) >>> 8, e[7] = t & 255, e[8] = (t = parseInt(r.slice(19, 23), 16)) >>> 8, e[9] = t & 255, e[10] = (t = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255, e[11] = t / 4294967296 & 255, e[12] = t >>> 24 & 255, e[13] = t >>> 16 & 255, e[14] = t >>> 8 & 255, e[15] = t & 255, e;
}
var ln = an;
Pe.default = ln;
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.URL = Te.DNS = void 0;
Te.default = pn;
var un = Ae, cn = fn(Pe);
function fn(r) {
  return r && r.__esModule ? r : { default: r };
}
function hn(r) {
  r = unescape(encodeURIComponent(r));
  const t = [];
  for (let e = 0; e < r.length; ++e)
    t.push(r.charCodeAt(e));
  return t;
}
const wt = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
Te.DNS = wt;
const Et = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
Te.URL = Et;
function pn(r, t, e) {
  function l(h, o, d, g) {
    var k;
    if (typeof h == "string" && (h = hn(h)), typeof o == "string" && (o = (0, cn.default)(o)), ((k = o) === null || k === void 0 ? void 0 : k.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let _ = new Uint8Array(16 + h.length);
    if (_.set(o), _.set(h, o.length), _ = e(_), _[6] = _[6] & 15 | t, _[8] = _[8] & 63 | 128, d) {
      g = g || 0;
      for (let T = 0; T < 16; ++T)
        d[g + T] = _[T];
      return d;
    }
    return (0, un.unsafeStringify)(_);
  }
  try {
    l.name = r;
  } catch {
  }
  return l.DNS = wt, l.URL = Et, l;
}
var We = {};
Object.defineProperty(We, "__esModule", {
  value: !0
});
We.default = void 0;
function dn(r) {
  if (typeof r == "string") {
    const t = unescape(encodeURIComponent(r));
    r = new Uint8Array(t.length);
    for (let e = 0; e < t.length; ++e)
      r[e] = t.charCodeAt(e);
  }
  return vn(mn(gn(r), r.length * 8));
}
function vn(r) {
  const t = [], e = r.length * 32, l = "0123456789abcdef";
  for (let h = 0; h < e; h += 8) {
    const o = r[h >> 5] >>> h % 32 & 255, d = parseInt(l.charAt(o >>> 4 & 15) + l.charAt(o & 15), 16);
    t.push(d);
  }
  return t;
}
function bt(r) {
  return (r + 64 >>> 9 << 4) + 14 + 1;
}
function mn(r, t) {
  r[t >> 5] |= 128 << t % 32, r[bt(t) - 1] = t;
  let e = 1732584193, l = -271733879, h = -1732584194, o = 271733878;
  for (let d = 0; d < r.length; d += 16) {
    const g = e, k = l, _ = h, T = o;
    e = de(e, l, h, o, r[d], 7, -680876936), o = de(o, e, l, h, r[d + 1], 12, -389564586), h = de(h, o, e, l, r[d + 2], 17, 606105819), l = de(l, h, o, e, r[d + 3], 22, -1044525330), e = de(e, l, h, o, r[d + 4], 7, -176418897), o = de(o, e, l, h, r[d + 5], 12, 1200080426), h = de(h, o, e, l, r[d + 6], 17, -1473231341), l = de(l, h, o, e, r[d + 7], 22, -45705983), e = de(e, l, h, o, r[d + 8], 7, 1770035416), o = de(o, e, l, h, r[d + 9], 12, -1958414417), h = de(h, o, e, l, r[d + 10], 17, -42063), l = de(l, h, o, e, r[d + 11], 22, -1990404162), e = de(e, l, h, o, r[d + 12], 7, 1804603682), o = de(o, e, l, h, r[d + 13], 12, -40341101), h = de(h, o, e, l, r[d + 14], 17, -1502002290), l = de(l, h, o, e, r[d + 15], 22, 1236535329), e = ve(e, l, h, o, r[d + 1], 5, -165796510), o = ve(o, e, l, h, r[d + 6], 9, -1069501632), h = ve(h, o, e, l, r[d + 11], 14, 643717713), l = ve(l, h, o, e, r[d], 20, -373897302), e = ve(e, l, h, o, r[d + 5], 5, -701558691), o = ve(o, e, l, h, r[d + 10], 9, 38016083), h = ve(h, o, e, l, r[d + 15], 14, -660478335), l = ve(l, h, o, e, r[d + 4], 20, -405537848), e = ve(e, l, h, o, r[d + 9], 5, 568446438), o = ve(o, e, l, h, r[d + 14], 9, -1019803690), h = ve(h, o, e, l, r[d + 3], 14, -187363961), l = ve(l, h, o, e, r[d + 8], 20, 1163531501), e = ve(e, l, h, o, r[d + 13], 5, -1444681467), o = ve(o, e, l, h, r[d + 2], 9, -51403784), h = ve(h, o, e, l, r[d + 7], 14, 1735328473), l = ve(l, h, o, e, r[d + 12], 20, -1926607734), e = me(e, l, h, o, r[d + 5], 4, -378558), o = me(o, e, l, h, r[d + 8], 11, -2022574463), h = me(h, o, e, l, r[d + 11], 16, 1839030562), l = me(l, h, o, e, r[d + 14], 23, -35309556), e = me(e, l, h, o, r[d + 1], 4, -1530992060), o = me(o, e, l, h, r[d + 4], 11, 1272893353), h = me(h, o, e, l, r[d + 7], 16, -155497632), l = me(l, h, o, e, r[d + 10], 23, -1094730640), e = me(e, l, h, o, r[d + 13], 4, 681279174), o = me(o, e, l, h, r[d], 11, -358537222), h = me(h, o, e, l, r[d + 3], 16, -722521979), l = me(l, h, o, e, r[d + 6], 23, 76029189), e = me(e, l, h, o, r[d + 9], 4, -640364487), o = me(o, e, l, h, r[d + 12], 11, -421815835), h = me(h, o, e, l, r[d + 15], 16, 530742520), l = me(l, h, o, e, r[d + 2], 23, -995338651), e = ge(e, l, h, o, r[d], 6, -198630844), o = ge(o, e, l, h, r[d + 7], 10, 1126891415), h = ge(h, o, e, l, r[d + 14], 15, -1416354905), l = ge(l, h, o, e, r[d + 5], 21, -57434055), e = ge(e, l, h, o, r[d + 12], 6, 1700485571), o = ge(o, e, l, h, r[d + 3], 10, -1894986606), h = ge(h, o, e, l, r[d + 10], 15, -1051523), l = ge(l, h, o, e, r[d + 1], 21, -2054922799), e = ge(e, l, h, o, r[d + 8], 6, 1873313359), o = ge(o, e, l, h, r[d + 15], 10, -30611744), h = ge(h, o, e, l, r[d + 6], 15, -1560198380), l = ge(l, h, o, e, r[d + 13], 21, 1309151649), e = ge(e, l, h, o, r[d + 4], 6, -145523070), o = ge(o, e, l, h, r[d + 11], 10, -1120210379), h = ge(h, o, e, l, r[d + 2], 15, 718787259), l = ge(l, h, o, e, r[d + 9], 21, -343485551), e = xe(e, g), l = xe(l, k), h = xe(h, _), o = xe(o, T);
  }
  return [e, l, h, o];
}
function gn(r) {
  if (r.length === 0)
    return [];
  const t = r.length * 8, e = new Uint32Array(bt(t));
  for (let l = 0; l < t; l += 8)
    e[l >> 5] |= (r[l / 8] & 255) << l % 32;
  return e;
}
function xe(r, t) {
  const e = (r & 65535) + (t & 65535);
  return (r >> 16) + (t >> 16) + (e >> 16) << 16 | e & 65535;
}
function yn(r, t) {
  return r << t | r >>> 32 - t;
}
function Ge(r, t, e, l, h, o) {
  return xe(yn(xe(xe(t, r), xe(l, o)), h), e);
}
function de(r, t, e, l, h, o, d) {
  return Ge(t & e | ~t & l, r, t, h, o, d);
}
function ve(r, t, e, l, h, o, d) {
  return Ge(t & l | e & ~l, r, t, h, o, d);
}
function me(r, t, e, l, h, o, d) {
  return Ge(t ^ e ^ l, r, t, h, o, d);
}
function ge(r, t, e, l, h, o, d) {
  return Ge(e ^ (t | ~l), r, t, h, o, d);
}
var _n = dn;
We.default = _n;
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.default = void 0;
var wn = Ot(Te), En = Ot(We);
function Ot(r) {
  return r && r.__esModule ? r : { default: r };
}
const bn = (0, wn.default)("v3", 48, En.default);
var On = bn;
$e.default = On;
var qe = {}, He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.default = void 0;
const kn = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var Ln = {
  randomUUID: kn
};
He.default = Ln;
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.default = void 0;
var dt = kt(He), xn = kt(Ue), Tn = Ae;
function kt(r) {
  return r && r.__esModule ? r : { default: r };
}
function An(r, t, e) {
  if (dt.default.randomUUID && !t && !r)
    return dt.default.randomUUID();
  r = r || {};
  const l = r.random || (r.rng || xn.default)();
  if (l[6] = l[6] & 15 | 64, l[8] = l[8] & 63 | 128, t) {
    e = e || 0;
    for (let h = 0; h < 16; ++h)
      t[e + h] = l[h];
    return t;
  }
  return (0, Tn.unsafeStringify)(l);
}
var Sn = An;
qe.default = Sn;
var Ye = {}, Qe = {};
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.default = void 0;
function Nn(r, t, e, l) {
  switch (r) {
    case 0:
      return t & e ^ ~t & l;
    case 1:
      return t ^ e ^ l;
    case 2:
      return t & e ^ t & l ^ e & l;
    case 3:
      return t ^ e ^ l;
  }
}
function at(r, t) {
  return r << t | r >>> 32 - t;
}
function Cn(r) {
  const t = [1518500249, 1859775393, 2400959708, 3395469782], e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof r == "string") {
    const d = unescape(encodeURIComponent(r));
    r = [];
    for (let g = 0; g < d.length; ++g)
      r.push(d.charCodeAt(g));
  } else
    Array.isArray(r) || (r = Array.prototype.slice.call(r));
  r.push(128);
  const l = r.length / 4 + 2, h = Math.ceil(l / 16), o = new Array(h);
  for (let d = 0; d < h; ++d) {
    const g = new Uint32Array(16);
    for (let k = 0; k < 16; ++k)
      g[k] = r[d * 64 + k * 4] << 24 | r[d * 64 + k * 4 + 1] << 16 | r[d * 64 + k * 4 + 2] << 8 | r[d * 64 + k * 4 + 3];
    o[d] = g;
  }
  o[h - 1][14] = (r.length - 1) * 8 / Math.pow(2, 32), o[h - 1][14] = Math.floor(o[h - 1][14]), o[h - 1][15] = (r.length - 1) * 8 & 4294967295;
  for (let d = 0; d < h; ++d) {
    const g = new Uint32Array(80);
    for (let R = 0; R < 16; ++R)
      g[R] = o[d][R];
    for (let R = 16; R < 80; ++R)
      g[R] = at(g[R - 3] ^ g[R - 8] ^ g[R - 14] ^ g[R - 16], 1);
    let k = e[0], _ = e[1], T = e[2], P = e[3], M = e[4];
    for (let R = 0; R < 80; ++R) {
      const x = Math.floor(R / 20), N = at(k, 5) + Nn(x, _, T, P) + M + t[x] + g[R] >>> 0;
      M = P, P = T, T = at(_, 30) >>> 0, _ = k, k = N;
    }
    e[0] = e[0] + k >>> 0, e[1] = e[1] + _ >>> 0, e[2] = e[2] + T >>> 0, e[3] = e[3] + P >>> 0, e[4] = e[4] + M >>> 0;
  }
  return [e[0] >> 24 & 255, e[0] >> 16 & 255, e[0] >> 8 & 255, e[0] & 255, e[1] >> 24 & 255, e[1] >> 16 & 255, e[1] >> 8 & 255, e[1] & 255, e[2] >> 24 & 255, e[2] >> 16 & 255, e[2] >> 8 & 255, e[2] & 255, e[3] >> 24 & 255, e[3] >> 16 & 255, e[3] >> 8 & 255, e[3] & 255, e[4] >> 24 & 255, e[4] >> 16 & 255, e[4] >> 8 & 255, e[4] & 255];
}
var Rn = Cn;
Qe.default = Rn;
Object.defineProperty(Ye, "__esModule", {
  value: !0
});
Ye.default = void 0;
var In = Lt(Te), Pn = Lt(Qe);
function Lt(r) {
  return r && r.__esModule ? r : { default: r };
}
const Fn = (0, In.default)("v5", 80, Pn.default);
var Bn = Fn;
Ye.default = Bn;
var ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.default = void 0;
var Mn = "00000000-0000-0000-0000-000000000000";
ze.default = Mn;
var Je = {};
Object.defineProperty(Je, "__esModule", {
  value: !0
});
Je.default = void 0;
var Kn = jn(Ne);
function jn(r) {
  return r && r.__esModule ? r : { default: r };
}
function Dn(r) {
  if (!(0, Kn.default)(r))
    throw TypeError("Invalid UUID");
  return parseInt(r.slice(14, 15), 16);
}
var Un = Dn;
Je.default = Un;
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "NIL", {
    enumerable: !0,
    get: function() {
      return o.default;
    }
  }), Object.defineProperty(r, "parse", {
    enumerable: !0,
    get: function() {
      return _.default;
    }
  }), Object.defineProperty(r, "stringify", {
    enumerable: !0,
    get: function() {
      return k.default;
    }
  }), Object.defineProperty(r, "v1", {
    enumerable: !0,
    get: function() {
      return t.default;
    }
  }), Object.defineProperty(r, "v3", {
    enumerable: !0,
    get: function() {
      return e.default;
    }
  }), Object.defineProperty(r, "v4", {
    enumerable: !0,
    get: function() {
      return l.default;
    }
  }), Object.defineProperty(r, "v5", {
    enumerable: !0,
    get: function() {
      return h.default;
    }
  }), Object.defineProperty(r, "validate", {
    enumerable: !0,
    get: function() {
      return g.default;
    }
  }), Object.defineProperty(r, "version", {
    enumerable: !0,
    get: function() {
      return d.default;
    }
  });
  var t = T(De), e = T($e), l = T(qe), h = T(Ye), o = T(ze), d = T(Je), g = T(Ne), k = T(Ae), _ = T(Pe);
  function T(P) {
    return P && P.__esModule ? P : { default: P };
  }
})(yt);
var Xe = {};
Object.defineProperty(Xe, "__esModule", { value: !0 });
Xe.RandomStringConfig = void 0;
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
Xe.RandomStringConfig = Vn;
var Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.RandomStringBuilder = void 0;
class $n {
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
Ze.RandomStringBuilder = $n;
var et = {};
const Wn = {}, Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wn
}, Symbol.toStringTag, { value: "Module" })), qn = /* @__PURE__ */ Ut(Gn);
var Hn = ut && ut.__importDefault || function(r) {
  return r && r.__esModule ? r : { default: r };
};
Object.defineProperty(et, "__esModule", { value: !0 });
et.RandomStringGenerator = void 0;
const Yn = Hn(qn);
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
    const l = Yn.default.randomBytes(e), h = t.length - 1;
    let o = "";
    for (; e--; )
      o += t[l[e] & h];
    return o;
  }
}
et.RandomStringGenerator = Qn;
var tt = {};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.StringReplacer = void 0;
class zn {
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
tt.StringReplacer = zn;
Object.defineProperty(je, "__esModule", { value: !0 });
je.Str = void 0;
const vt = yt, Jn = Xe, Xn = Ze, Zn = et, lt = tt;
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
    const [l, h] = this.split(t, 2);
    return [l, h];
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
    const e = new Jn.RandomStringConfig(), l = new Xn.RandomStringBuilder(e);
    return t || l.characters().numbers().symbols(), typeof t == "function" && t(l), typeof t == "number" && l.characters().numbers().symbols().length(t), this.generateRandom(e);
  }
  /**
   * Create a random, URL-friendly string. The default length will have 21 symbols.
   *
   * @param {Number} [size=21] number of symbols in string
   *
   * @returns {String}
   */
  generateRandom(t) {
    return new Zn.RandomStringGenerator(te, t).generate();
  }
  replace(t, e) {
    return e == null ? new lt.StringReplacer(this, t) : new te(this.value.replace(t, e));
  }
  replaceAll(t, e) {
    if (e == null)
      return new lt.StringReplacer(this, t).all();
    const l = new RegExp(t, "g");
    return new te(this.value.replace(l, e));
  }
  replaceLast(t, e) {
    return e == null ? new lt.StringReplacer(this, t).last() : this.notContains(t.toString()) ? this : new te(this.beforeLast(t.toString()).get() + e + this.afterLast(t.toString()).get());
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
      const l = Math.floor(Math.random() * e--), h = t[e];
      t[e] = t[l], t[l] = h;
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
je.Str = te;
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.Str = void 0;
const er = je, Ee = (r) => new er.Str(r);
Ke.Str = Ee;
Ee.uuid = () => Ee().uuid();
Ee.random = (r) => Ee().random(r);
Ee.isString = (r) => Ee().isString(r);
Ee.isAlphaNumeric = (r) => Ee().isAlphaNumeric(r);
Ee.isSymbol = (r) => Ee().isSymbol(r);
var tr = Ke.default = Ee;
const mt = () => process.env.NODE_ENV === "test", nr = () => "id-" + (Math.random() + 1).toString(36).substring(7), xt = (r) => {
  let t = null;
  return Object.entries(r).forEach(([e, l]) => {
    if (l.type === "repeat") {
      const o = xt(l.questions);
      o && (t = o);
    }
    tr(e).isCamel() || (t = e);
  }), t;
}, Tt = (r) => {
  const t = Object.values(r);
  let e = [];
  const l = t.map((h, o) => t.find((d, g) => {
    if (d.type === "repeat" && (e = Tt(d.questions)), o !== g && d.id === h.id)
      return h;
  })).filter(Boolean);
  return e.length && l.push(...e), l;
}, rr = (r) => {
  var l;
  const t = Tt(r);
  if (t.length)
    throw new Error(`Duplicated id values: ${(l = t[0]) == null ? void 0 : l.id}`);
  const e = xt(r);
  if (e)
    throw new Error(`ID must be in camel case: ${e}`);
  return !0;
}, ir = (r, t, e) => r < t ? (mt() || console.warn(`Value ${r} is lower than min ${t}. Returning min.`), t) : r > e ? (mt() || console.warn(`Value ${r} is higher than max ${e}. Returning max.`), e) : r, sr = (r, t) => {
  if (t.type === "repeat" && isNaN(r))
    throw new Error("Value of repeat question must be a number");
}, ht = class {
  constructor() {
    Le(this, "subscribers");
    this.subscribers = {};
  }
  dispatch(t, e) {
    const l = this.subscribers[t];
    l !== void 0 && Object.keys(l).forEach((h) => l[h](e));
  }
  register(t, e) {
    const l = this.getNextId();
    return this.subscribers[t] || (this.subscribers[t] = {}), this.subscribers[t][l] = e, {
      unregister: () => {
        delete this.subscribers[t][l], Object.keys(this.subscribers[t]).length === 0 && delete this.subscribers[t];
      }
    };
  }
  getNextId() {
    return ht.nextId++;
  }
};
let Me = ht;
Le(Me, "nextId", 0);
const or = {
  text: !0,
  multipleChoice: !0,
  number: !0,
  date: !0,
  repeat: !0
}, ar = (r, t = !1) => {
  if (!or[r.type])
    throw new Error("Invalid question type");
  const e = r.id || nr();
  let l;
  return r.type === "text" ? l = ct(r) : r.type === "date" ? l = lr(r) : r.type === "multipleChoice" ? l = ur(r) : r.type === "repeat" ? l = cr(r) : l = ct(r), {
    id: e,
    type: r.type,
    title: r.title || "",
    indications: r.indications || "",
    logic: r.logic || {},
    ...l
  };
}, ct = (r) => ({
  value: r.value || "",
  required: Boolean(r.required),
  placeholder: r.placeholder || "",
  subType: r.subType || ""
}), lr = (r) => ({
  format: r.format || "dd/mm/yyyy",
  ...ct(r)
}), ur = (r) => {
  var t;
  return {
    value: ((t = r.choices.find((e) => e.checked === !0)) == null ? void 0 : t.label) || "",
    choices: r.choices || [],
    subType: r.subType || "radio"
  };
}, cr = (r) => ({
  value: r.value || "",
  range: r.range || { min: 0, max: 0 },
  questions: r.questions || {}
}), fr = (r, t) => {
  const e = JSON.parse(JSON.stringify(r));
  return Object.entries(e).forEach(([l, h]) => {
    const o = t + 1;
    h.title && (h.title = h.title.replace(/\<%= index %>/g, o.toString()));
  }), e;
};
var ft = {}, hr = {
  get exports() {
    return ft;
  },
  set exports(r) {
    ft = r;
  }
};
/*! Browser bundle of nunjucks 3.2.4  */
(function(r, t) {
  (function(l, h) {
    r.exports = h();
  })(typeof self < "u" ? self : ut, function() {
    return (
      /******/
      function(e) {
        var l = {};
        function h(o) {
          if (l[o])
            return l[o].exports;
          var d = l[o] = {
            /******/
            i: o,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return e[o].call(d.exports, d, d.exports, h), d.l = !0, d.exports;
        }
        return h.m = e, h.c = l, h.d = function(o, d, g) {
          h.o(o, d) || Object.defineProperty(o, d, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: g
            /******/
          });
        }, h.n = function(o) {
          var d = o && o.__esModule ? (
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
          return h.d(d, "a", d), d;
        }, h.o = function(o, d) {
          return Object.prototype.hasOwnProperty.call(o, d);
        }, h.p = "", h(h.s = 11);
      }([
        /* 0 */
        /***/
        function(e, _, h) {
          var o = Array.prototype, d = Object.prototype, g = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\\": "&#92;"
          }, k = /[&"'<>\\]/g, _ = e.exports = {};
          function T(w, S) {
            return d.hasOwnProperty.call(w, S);
          }
          _.hasOwnProp = T;
          function P(w) {
            return g[w];
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
            var D, W;
            w instanceof Error && (W = w, w = W.name + ": " + W.message), Object.setPrototypeOf ? (D = new Error(w), Object.setPrototypeOf(D, R.prototype)) : (D = this, Object.defineProperty(D, "message", {
              enumerable: !1,
              writable: !0,
              value: w
            })), Object.defineProperty(D, "name", {
              value: "Template render error"
            }), Error.captureStackTrace && Error.captureStackTrace(D, this.constructor);
            var ne;
            if (W) {
              var z = Object.getOwnPropertyDescriptor(W, "stack");
              ne = z && (z.get || function() {
                return z.value;
              }), ne || (ne = function() {
                return W.stack;
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
              value: W
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
            return w.replace(k, P);
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
          function s(w) {
            return d.toString.call(w) === "[object String]";
          }
          _.isString = s;
          function a(w) {
            return d.toString.call(w) === "[object Object]";
          }
          _.isObject = a;
          function b(w) {
            return w ? typeof w == "string" ? w.split(".") : [w] : [];
          }
          function v(w) {
            var S = b(w);
            return function(D) {
              for (var W = D, ne = 0; ne < S.length; ne++) {
                var z = S[ne];
                if (T(W, z))
                  W = W[z];
                else
                  return;
              }
              return W;
            };
          }
          _.getAttrGetter = v;
          function E(w, S, j) {
            for (var D = {}, W = N(S) ? S : v(S), ne = 0; ne < w.length; ne++) {
              var z = w[ne], ue = W(z, ne);
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
          function u(w) {
            var S = [];
            if (!w)
              return S;
            for (var j = w.length, D = i(arguments).slice(1), W = -1; ++W < j; )
              A(D, w[W]) === -1 && S.push(w[W]);
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
              if (o.forEach && w.forEach === o.forEach)
                w.forEach(S, j);
              else if (w.length === +w.length)
                for (var D = 0, W = w.length; D < W; D++)
                  S.call(j, w[D], D, w);
            }
          }
          _.each = c;
          function f(w, S) {
            var j = [];
            if (w == null)
              return j;
            if (o.map && w.map === o.map)
              return w.map(S);
            for (var D = 0; D < w.length; D++)
              j[j.length] = S(w[D], D);
            return w.length === +w.length && (j.length = w.length), j;
          }
          _.map = f;
          function y(w, S, j) {
            var D = -1;
            function W() {
              D++, D < w.length ? S(w[D], D, W, j) : j();
            }
            W();
          }
          _.asyncIter = y;
          function m(w, S, j) {
            var D = I(w || {}), W = D.length, ne = -1;
            function z() {
              ne++;
              var ue = D[ne];
              ne < W ? S(ue, w[ue], ne, W, z) : j();
            }
            z();
          }
          _.asyncFor = m;
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
            if (n(S) || s(S))
              return S.indexOf(w) !== -1;
            if (a(S))
              return w in S;
            throw new Error('Cannot use "in" operator to search for "' + w + '" in unexpected types.');
          }
          _.inOperator = L;
        },
        /* 1 */
        /***/
        function(e, l, h) {
          function o(s, a) {
            for (var b = 0; b < a.length; b++) {
              var v = a[b];
              v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(s, g(v.key), v);
            }
          }
          function d(s, a, b) {
            return a && o(s.prototype, a), b && o(s, b), Object.defineProperty(s, "prototype", { writable: !1 }), s;
          }
          function g(s) {
            var a = k(s, "string");
            return typeof a == "symbol" ? a : String(a);
          }
          function k(s, a) {
            if (typeof s != "object" || s === null)
              return s;
            var b = s[Symbol.toPrimitive];
            if (b !== void 0) {
              var v = b.call(s, a || "default");
              if (typeof v != "object")
                return v;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (a === "string" ? String : Number)(s);
          }
          function _(s, a) {
            s.prototype = Object.create(a.prototype), s.prototype.constructor = s, T(s, a);
          }
          function T(s, a) {
            return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, E) {
              return v.__proto__ = E, v;
            }, T(s, a);
          }
          var P = h(16), M = h(0);
          function R(s, a) {
            return typeof s != "function" || typeof a != "function" ? a : function() {
              var v = this.parent;
              this.parent = s;
              var E = a.apply(this, arguments);
              return this.parent = v, E;
            };
          }
          function x(s, a, b) {
            b = b || {}, M.keys(b).forEach(function(E) {
              b[E] = R(s.prototype[E], b[E]);
            });
            var v = /* @__PURE__ */ function(E) {
              _(i, E);
              function i() {
                return E.apply(this, arguments) || this;
              }
              return d(i, [{
                key: "typename",
                get: function() {
                  return a;
                }
              }]), i;
            }(s);
            return M._assign(v.prototype, b), v;
          }
          var N = /* @__PURE__ */ function() {
            function s() {
              this.init.apply(this, arguments);
            }
            var a = s.prototype;
            return a.init = function() {
            }, s.extend = function(v, E) {
              return typeof v == "object" && (E = v, v = "anonymous"), x(this, v, E);
            }, d(s, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), s;
          }(), n = /* @__PURE__ */ function(s) {
            _(a, s);
            function a() {
              var v, E;
              return E = s.call(this) || this, (v = E).init.apply(v, arguments), E;
            }
            var b = a.prototype;
            return b.init = function() {
            }, a.extend = function(E, i) {
              return typeof E == "object" && (i = E, E = "anonymous"), x(this, E, i);
            }, d(a, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), a;
          }(P);
          e.exports = {
            Obj: N,
            EmitterObj: n
          };
        },
        /* 2 */
        /***/
        function(e, l, h) {
          var o = h(0), d = Array.from, g = typeof Symbol == "function" && Symbol.iterator && typeof d == "function", k = /* @__PURE__ */ function() {
            function f(m, A) {
              this.variables = /* @__PURE__ */ Object.create(null), this.parent = m, this.topLevel = !1, this.isolateWrites = A;
            }
            var y = f.prototype;
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
              return new f(this, A);
            }, y.pop = function() {
              return this.parent;
            }, f;
          }();
          function _(f, y, m) {
            return function() {
              for (var I = arguments.length, C = new Array(I), F = 0; F < I; F++)
                C[F] = arguments[F];
              var K = R(C), L, w = M(C);
              if (K > f.length)
                L = C.slice(0, f.length), C.slice(L.length, K).forEach(function(D, W) {
                  W < y.length && (w[y[W]] = D);
                }), L.push(w);
              else if (K < f.length) {
                L = C.slice(0, K);
                for (var S = K; S < f.length; S++) {
                  var j = f[S];
                  L.push(w[j]), delete w[j];
                }
                L.push(w);
              } else
                L = C;
              return m.apply(this, L);
            };
          }
          function T(f) {
            return f.__keywords = !0, f;
          }
          function P(f) {
            return f && Object.prototype.hasOwnProperty.call(f, "__keywords");
          }
          function M(f) {
            var y = f.length;
            if (y) {
              var m = f[y - 1];
              if (P(m))
                return m;
            }
            return {};
          }
          function R(f) {
            var y = f.length;
            if (y === 0)
              return 0;
            var m = f[y - 1];
            return P(m) ? y - 1 : y;
          }
          function x(f) {
            if (typeof f != "string")
              return f;
            this.val = f, this.length = f.length;
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
          function N(f, y) {
            return f instanceof x ? new x(y) : y.toString();
          }
          function n(f) {
            var y = typeof f;
            return y === "string" ? new x(f) : y !== "function" ? f : function(A) {
              var I = f.apply(this, arguments);
              return typeof I == "string" ? new x(I) : I;
            };
          }
          function s(f, y) {
            return f = f ?? "", y && !(f instanceof x) && (f = o.escape(f.toString())), f;
          }
          function a(f, y, m) {
            if (f == null)
              throw new o.TemplateError("attempted to output null or undefined value", y + 1, m + 1);
            return f;
          }
          function b(f, y) {
            if (f != null)
              return typeof f[y] == "function" ? function() {
                for (var m = arguments.length, A = new Array(m), I = 0; I < m; I++)
                  A[I] = arguments[I];
                return f[y].apply(f, A);
              } : f[y];
          }
          function v(f, y, m, A) {
            if (f) {
              if (typeof f != "function")
                throw new Error("Unable to call `" + y + "`, which is not a function");
            } else
              throw new Error("Unable to call `" + y + "`, which is undefined or falsey");
            return f.apply(m, A);
          }
          function E(f, y, m) {
            var A = y.lookup(m);
            return A !== void 0 ? A : f.lookup(m);
          }
          function i(f, y, m) {
            return f.lineno ? f : new o.TemplateError(f, y, m);
          }
          function u(f, y, m, A) {
            if (o.isArray(f)) {
              var I = f.length;
              o.asyncIter(f, function(F, K, L) {
                switch (y) {
                  case 1:
                    m(F, K, I, L);
                    break;
                  case 2:
                    m(F[0], F[1], K, I, L);
                    break;
                  case 3:
                    m(F[0], F[1], F[2], K, I, L);
                    break;
                  default:
                    F.push(K, I, L), m.apply(this, F);
                }
              }, A);
            } else
              o.asyncFor(f, function(F, K, L, w, S) {
                m(F, K, L, w, S);
              }, A);
          }
          function p(f, y, m, A) {
            var I = 0, C, F;
            function K(W, ne) {
              I++, F[W] = ne, I === C && A(null, F.join(""));
            }
            if (o.isArray(f))
              if (C = f.length, F = new Array(C), C === 0)
                A(null, "");
              else
                for (var L = 0; L < f.length; L++) {
                  var w = f[L];
                  switch (y) {
                    case 1:
                      m(w, L, C, K);
                      break;
                    case 2:
                      m(w[0], w[1], L, C, K);
                      break;
                    case 3:
                      m(w[0], w[1], w[2], L, C, K);
                      break;
                    default:
                      w.push(L, C, K), m.apply(this, w);
                  }
                }
            else {
              var S = o.keys(f || {});
              if (C = S.length, F = new Array(C), C === 0)
                A(null, "");
              else
                for (var j = 0; j < S.length; j++) {
                  var D = S[j];
                  m(D, f[D], j, C, K);
                }
            }
          }
          function c(f) {
            return typeof f != "object" || f === null || o.isArray(f) ? f : g && Symbol.iterator in f ? d(f) : f;
          }
          e.exports = {
            Frame: k,
            makeMacro: _,
            makeKeywordArgs: T,
            numArgs: R,
            suppressValue: s,
            ensureDefined: a,
            memberLookup: b,
            contextOrFrameLookup: E,
            callWrap: v,
            handleError: i,
            isArray: o.isArray,
            keys: o.keys,
            SafeString: x,
            copySafeness: N,
            markSafe: n,
            asyncEach: u,
            asyncAll: p,
            inOperator: o.inOperator,
            fromIterator: c
          };
        },
        /* 3 */
        /***/
        function(e, l, h) {
          function o(H, Y) {
            for (var ie = 0; ie < Y.length; ie++) {
              var re = Y[ie];
              re.enumerable = re.enumerable || !1, re.configurable = !0, "value" in re && (re.writable = !0), Object.defineProperty(H, g(re.key), re);
            }
          }
          function d(H, Y, ie) {
            return Y && o(H.prototype, Y), ie && o(H, ie), Object.defineProperty(H, "prototype", { writable: !1 }), H;
          }
          function g(H) {
            var Y = k(H, "string");
            return typeof Y == "symbol" ? Y : String(Y);
          }
          function k(H, Y) {
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
          var P = h(1), M = P.Obj;
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
                var rt = _e[Mt + 2];
                rt === void 0 && (rt = null), Se[Bt] = rt;
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
          }(x), s = n.extend("Root"), a = N.extend("Literal"), b = N.extend("Symbol"), v = n.extend("Group"), E = n.extend("Array"), i = x.extend("Pair", {
            fields: ["key", "value"]
          }), u = n.extend("Dict"), p = x.extend("LookupVal", {
            fields: ["target", "val"]
          }), c = x.extend("If", {
            fields: ["cond", "body", "else_"]
          }), f = c.extend("IfAsync"), y = x.extend("InlineIf", {
            fields: ["cond", "body", "else_"]
          }), m = x.extend("For", {
            fields: ["arr", "name", "body", "else_"]
          }), A = m.extend("AsyncEach"), I = m.extend("AsyncAll"), C = x.extend("Macro", {
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
          }), D = u.extend("KeywordArgs"), W = x.extend("Block", {
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
          }), $ = x.extend("Case", {
            fields: ["cond", "body"]
          }), q = n.extend("Output"), G = x.extend("Capture", {
            fields: ["body"]
          }), se = a.extend("TemplateData"), ye = x.extend("UnaryOp", {
            fields: ["target"]
          }), fe = x.extend("BinOp", {
            fields: ["left", "right"]
          }), Oe = fe.extend("In"), O = fe.extend("Is"), B = fe.extend("Or"), V = fe.extend("And"), U = ye.extend("Not"), Q = fe.extend("Add"), J = fe.extend("Concat"), ae = fe.extend("Sub"), ee = fe.extend("Mul"), le = fe.extend("Div"), we = fe.extend("FloorDiv"), be = fe.extend("Mod"), ke = fe.extend("Pow"), Nt = ye.extend("Neg"), Ct = ye.extend("Pos"), Rt = x.extend("Compare", {
            fields: ["expr", "ops"]
          }), It = x.extend("CompareOperand", {
            fields: ["expr", "type"]
          }), nt = x.extend("CallExtension", {
            init: function(Y, ie, re, oe) {
              this.parent(), this.extName = Y.__name || Y, this.prop = ie, this.args = re || new n(), this.contentArgs = oe || [], this.autoescape = Y.autoescape;
            },
            fields: ["extName", "prop", "args", "contentArgs"]
          }), Pt = nt.extend("CallExtensionAsync");
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
            else if (H instanceof nt)
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
          e.exports = {
            Node: x,
            Root: s,
            NodeList: n,
            Value: N,
            Literal: a,
            Symbol: b,
            Group: v,
            Array: E,
            Pair: i,
            Dict: u,
            Output: q,
            Capture: G,
            TemplateData: se,
            If: c,
            IfAsync: f,
            InlineIf: y,
            For: m,
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
            Block: W,
            Super: ne,
            Extends: ue,
            Include: he,
            Set: X,
            Switch: Z,
            Case: $,
            LookupVal: p,
            BinOp: fe,
            In: Oe,
            Is: O,
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
            CallExtension: nt,
            CallExtensionAsync: Pt,
            printNodes: Re
          };
        },
        /* 4 */
        /***/
        function(e, l) {
        },
        /* 5 */
        /***/
        function(e, l, h) {
          function o(a, b) {
            a.prototype = Object.create(b.prototype), a.prototype.constructor = a, d(a, b);
          }
          function d(a, b) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(E, i) {
              return E.__proto__ = i, E;
            }, d(a, b);
          }
          var g = h(8), k = h(17), _ = h(3), T = h(0), P = T.TemplateError, M = h(2), R = M.Frame, x = h(1), N = x.Obj, n = {
            "==": "==",
            "===": "===",
            "!=": "!=",
            "!==": "!==",
            "<": "<",
            ">": ">",
            "<=": "<=",
            ">=": ">="
          }, s = /* @__PURE__ */ function(a) {
            o(b, a);
            function b() {
              return a.apply(this, arguments) || this;
            }
            var v = b.prototype;
            return v.init = function(i, u) {
              this.templateName = i, this.codebuf = [], this.lastId = 0, this.buffer = null, this.bufferStack = [], this._scopeClosers = "", this.inBlock = !1, this.throwOnUndefined = u;
            }, v.fail = function(i, u, p) {
              throw u !== void 0 && (u += 1), p !== void 0 && (p += 1), new P(i, u, p);
            }, v._pushBuffer = function() {
              var i = this._tmpid();
              return this.bufferStack.push(this.buffer), this.buffer = i, this._emit("var " + this.buffer + ' = "";'), i;
            }, v._popBuffer = function() {
              this.buffer = this.bufferStack.pop();
            }, v._emit = function(i) {
              this.codebuf.push(i);
            }, v._emitLine = function(i) {
              this._emit(i + `
`);
            }, v._emitLines = function() {
              for (var i = this, u = arguments.length, p = new Array(u), c = 0; c < u; c++)
                p[c] = arguments[c];
              p.forEach(function(f) {
                return i._emitLine(f);
              });
            }, v._emitFuncBegin = function(i, u) {
              this.buffer = "output", this._scopeClosers = "", this._emitLine("function " + u + "(env, context, frame, runtime, cb) {"), this._emitLine("var lineno = " + i.lineno + ";"), this._emitLine("var colno = " + i.colno + ";"), this._emitLine("var " + this.buffer + ' = "";'), this._emitLine("try {");
            }, v._emitFuncEnd = function(i) {
              i || this._emitLine("cb(null, " + this.buffer + ");"), this._closeScopeLevels(), this._emitLine("} catch (e) {"), this._emitLine("  cb(runtime.handleError(e, lineno, colno));"), this._emitLine("}"), this._emitLine("}"), this.buffer = null;
            }, v._addScopeLevel = function() {
              this._scopeClosers += "})";
            }, v._closeScopeLevels = function() {
              this._emitLine(this._scopeClosers + ";"), this._scopeClosers = "";
            }, v._withScopedSyntax = function(i) {
              var u = this._scopeClosers;
              this._scopeClosers = "", i.call(this), this._closeScopeLevels(), this._scopeClosers = u;
            }, v._makeCallback = function(i) {
              var u = this._tmpid();
              return "function(" + u + (i ? "," + i : "") + `) {
if(` + u + ") { cb(" + u + "); return; }";
            }, v._tmpid = function() {
              return this.lastId++, "t_" + this.lastId;
            }, v._templateName = function() {
              return this.templateName == null ? "undefined" : JSON.stringify(this.templateName);
            }, v._compileChildren = function(i, u) {
              var p = this;
              i.children.forEach(function(c) {
                p.compile(c, u);
              });
            }, v._compileAggregate = function(i, u, p, c) {
              var f = this;
              p && this._emit(p), i.children.forEach(function(y, m) {
                m > 0 && f._emit(","), f.compile(y, u);
              }), c && this._emit(c);
            }, v._compileExpression = function(i, u) {
              this.assertType(i, _.Literal, _.Symbol, _.Group, _.Array, _.Dict, _.FunCall, _.Caller, _.Filter, _.LookupVal, _.Compare, _.InlineIf, _.In, _.Is, _.And, _.Or, _.Not, _.Add, _.Concat, _.Sub, _.Mul, _.Div, _.FloorDiv, _.Mod, _.Pow, _.Neg, _.Pos, _.Compare, _.NodeList), this.compile(i, u);
            }, v.assertType = function(i) {
              for (var u = arguments.length, p = new Array(u > 1 ? u - 1 : 0), c = 1; c < u; c++)
                p[c - 1] = arguments[c];
              p.some(function(f) {
                return i instanceof f;
              }) || this.fail("assertType: invalid type: " + i.typename, i.lineno, i.colno);
            }, v.compileCallExtension = function(i, u, p) {
              var c = this, f = i.args, y = i.contentArgs, m = typeof i.autoescape == "boolean" ? i.autoescape : !0;
              if (p || this._emit(this.buffer + " += runtime.suppressValue("), this._emit('env.getExtension("' + i.extName + '")["' + i.prop + '"]('), this._emit("context"), (f || y) && this._emit(","), f && (f instanceof _.NodeList || this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"), f.children.forEach(function(I, C) {
                c._compileExpression(I, u), (C !== f.children.length - 1 || y.length) && c._emit(",");
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
                this._emitLine(", " + this._makeCallback(A)), this._emitLine(this.buffer + " += runtime.suppressValue(" + A + ", " + m + " && env.opts.autoescape);"), this._addScopeLevel();
              } else
                this._emit(")"), this._emit(", " + m + ` && env.opts.autoescape);
`);
            }, v.compileCallExtensionAsync = function(i, u) {
              this.compileCallExtension(i, u, !0);
            }, v.compileNodeList = function(i, u) {
              this._compileChildren(i, u);
            }, v.compileLiteral = function(i) {
              if (typeof i.value == "string") {
                var u = i.value.replace(/\\/g, "\\\\");
                u = u.replace(/"/g, '\\"'), u = u.replace(/\n/g, "\\n"), u = u.replace(/\r/g, "\\r"), u = u.replace(/\t/g, "\\t"), u = u.replace(/\u2028/g, "\\u2028"), this._emit('"' + u + '"');
              } else
                i.value === null ? this._emit("null") : this._emit(i.value.toString());
            }, v.compileSymbol = function(i, u) {
              var p = i.value, c = u.lookup(p);
              c ? this._emit(c) : this._emit('runtime.contextOrFrameLookup(context, frame, "' + p + '")');
            }, v.compileGroup = function(i, u) {
              this._compileAggregate(i, u, "(", ")");
            }, v.compileArray = function(i, u) {
              this._compileAggregate(i, u, "[", "]");
            }, v.compileDict = function(i, u) {
              this._compileAggregate(i, u, "{", "}");
            }, v.compilePair = function(i, u) {
              var p = i.key, c = i.value;
              p instanceof _.Symbol ? p = new _.Literal(p.lineno, p.colno, p.value) : p instanceof _.Literal && typeof p.value == "string" || this.fail("compilePair: Dict keys must be strings or names", p.lineno, p.colno), this.compile(p, u), this._emit(": "), this._compileExpression(c, u);
            }, v.compileInlineIf = function(i, u) {
              this._emit("("), this.compile(i.cond, u), this._emit("?"), this.compile(i.body, u), this._emit(":"), i.else_ !== null ? this.compile(i.else_, u) : this._emit('""'), this._emit(")");
            }, v.compileIn = function(i, u) {
              this._emit("runtime.inOperator("), this.compile(i.left, u), this._emit(","), this.compile(i.right, u), this._emit(")");
            }, v.compileIs = function(i, u) {
              var p = i.right.name ? i.right.name.value : i.right.value;
              this._emit('env.getTest("' + p + '").call(context, '), this.compile(i.left, u), i.right.args && (this._emit(","), this.compile(i.right.args, u)), this._emit(") === true");
            }, v._binOpEmitter = function(i, u, p) {
              this.compile(i.left, u), this._emit(p), this.compile(i.right, u);
            }, v.compileOr = function(i, u) {
              return this._binOpEmitter(i, u, " || ");
            }, v.compileAnd = function(i, u) {
              return this._binOpEmitter(i, u, " && ");
            }, v.compileAdd = function(i, u) {
              return this._binOpEmitter(i, u, " + ");
            }, v.compileConcat = function(i, u) {
              return this._binOpEmitter(i, u, ' + "" + ');
            }, v.compileSub = function(i, u) {
              return this._binOpEmitter(i, u, " - ");
            }, v.compileMul = function(i, u) {
              return this._binOpEmitter(i, u, " * ");
            }, v.compileDiv = function(i, u) {
              return this._binOpEmitter(i, u, " / ");
            }, v.compileMod = function(i, u) {
              return this._binOpEmitter(i, u, " % ");
            }, v.compileNot = function(i, u) {
              this._emit("!"), this.compile(i.target, u);
            }, v.compileFloorDiv = function(i, u) {
              this._emit("Math.floor("), this.compile(i.left, u), this._emit(" / "), this.compile(i.right, u), this._emit(")");
            }, v.compilePow = function(i, u) {
              this._emit("Math.pow("), this.compile(i.left, u), this._emit(", "), this.compile(i.right, u), this._emit(")");
            }, v.compileNeg = function(i, u) {
              this._emit("-"), this.compile(i.target, u);
            }, v.compilePos = function(i, u) {
              this._emit("+"), this.compile(i.target, u);
            }, v.compileCompare = function(i, u) {
              var p = this;
              this.compile(i.expr, u), i.ops.forEach(function(c) {
                p._emit(" " + n[c.type] + " "), p.compile(c.expr, u);
              });
            }, v.compileLookupVal = function(i, u) {
              this._emit("runtime.memberLookup(("), this._compileExpression(i.target, u), this._emit("),"), this._compileExpression(i.val, u), this._emit(")");
            }, v._getNodeName = function(i) {
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
            }, v.compileFunCall = function(i, u) {
              this._emit("(lineno = " + i.lineno + ", colno = " + i.colno + ", "), this._emit("runtime.callWrap("), this._compileExpression(i.name, u), this._emit(', "' + this._getNodeName(i.name).replace(/"/g, '\\"') + '", context, '), this._compileAggregate(i.args, u, "[", "])"), this._emit(")");
            }, v.compileFilter = function(i, u) {
              var p = i.name;
              this.assertType(p, _.Symbol), this._emit('env.getFilter("' + p.value + '").call(context, '), this._compileAggregate(i.args, u), this._emit(")");
            }, v.compileFilterAsync = function(i, u) {
              var p = i.name, c = i.symbol.value;
              this.assertType(p, _.Symbol), u.set(c, c), this._emit('env.getFilter("' + p.value + '").call(context, '), this._compileAggregate(i.args, u), this._emitLine(", " + this._makeCallback(c)), this._addScopeLevel();
            }, v.compileKeywordArgs = function(i, u) {
              this._emit("runtime.makeKeywordArgs("), this.compileDict(i, u), this._emit(")");
            }, v.compileSet = function(i, u) {
              var p = this, c = [];
              i.targets.forEach(function(f) {
                var y = f.value, m = u.lookup(y);
                m == null && (m = p._tmpid(), p._emitLine("var " + m + ";")), c.push(m);
              }), i.value ? (this._emit(c.join(" = ") + " = "), this._compileExpression(i.value, u), this._emitLine(";")) : (this._emit(c.join(" = ") + " = "), this.compile(i.body, u), this._emitLine(";")), i.targets.forEach(function(f, y) {
                var m = c[y], A = f.value;
                p._emitLine('frame.set("' + A + '", ' + m + ", true);"), p._emitLine("if(frame.topLevel) {"), p._emitLine('context.setVariable("' + A + '", ' + m + ");"), p._emitLine("}"), A.charAt(0) !== "_" && (p._emitLine("if(frame.topLevel) {"), p._emitLine('context.addExport("' + A + '", ' + m + ");"), p._emitLine("}"));
              });
            }, v.compileSwitch = function(i, u) {
              var p = this;
              this._emit("switch ("), this.compile(i.expr, u), this._emit(") {"), i.cases.forEach(function(c, f) {
                p._emit("case "), p.compile(c.cond, u), p._emit(": "), p.compile(c.body, u), c.body.children.length && p._emitLine("break;");
              }), i.default && (this._emit("default:"), this.compile(i.default, u)), this._emit("}");
            }, v.compileIf = function(i, u, p) {
              var c = this;
              this._emit("if("), this._compileExpression(i.cond, u), this._emitLine(") {"), this._withScopedSyntax(function() {
                c.compile(i.body, u), p && c._emit("cb()");
              }), i.else_ ? (this._emitLine(`}
else {`), this._withScopedSyntax(function() {
                c.compile(i.else_, u), p && c._emit("cb()");
              })) : p && (this._emitLine(`}
else {`), this._emit("cb()")), this._emitLine("}");
            }, v.compileIfAsync = function(i, u) {
              this._emit("(function(cb) {"), this.compileIf(i, u, !0), this._emit("})(" + this._makeCallback()), this._addScopeLevel();
            }, v._emitLoopBindings = function(i, u, p, c) {
              var f = this, y = [{
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
              y.forEach(function(m) {
                f._emitLine('frame.set("loop.' + m.name + '", ' + m.val + ");");
              });
            }, v.compileFor = function(i, u) {
              var p = this, c = this._tmpid(), f = this._tmpid(), y = this._tmpid();
              if (u = u.push(), this._emitLine("frame = frame.push();"), this._emit("var " + y + " = "), this._compileExpression(i.arr, u), this._emitLine(";"), this._emit("if(" + y + ") {"), this._emitLine(y + " = runtime.fromIterator(" + y + ");"), i.name instanceof _.Array) {
                this._emitLine("var " + c + ";"), this._emitLine("if(runtime.isArray(" + y + ")) {"), this._emitLine("var " + f + " = " + y + ".length;"), this._emitLine("for(" + c + "=0; " + c + " < " + y + ".length; " + c + "++) {"), i.name.children.forEach(function(L, w) {
                  var S = p._tmpid();
                  p._emitLine("var " + S + " = " + y + "[" + c + "][" + w + "];"), p._emitLine('frame.set("' + L + '", ' + y + "[" + c + "][" + w + "]);"), u.set(i.name.children[w].value, S);
                }), this._emitLoopBindings(i, y, c, f), this._withScopedSyntax(function() {
                  p.compile(i.body, u);
                }), this._emitLine("}"), this._emitLine("} else {");
                var m = i.name.children, A = m[0], I = m[1], C = this._tmpid(), F = this._tmpid();
                u.set(A.value, C), u.set(I.value, F), this._emitLine(c + " = -1;"), this._emitLine("var " + f + " = runtime.keys(" + y + ").length;"), this._emitLine("for(var " + C + " in " + y + ") {"), this._emitLine(c + "++;"), this._emitLine("var " + F + " = " + y + "[" + C + "];"), this._emitLine('frame.set("' + A.value + '", ' + C + ");"), this._emitLine('frame.set("' + I.value + '", ' + F + ");"), this._emitLoopBindings(i, y, c, f), this._withScopedSyntax(function() {
                  p.compile(i.body, u);
                }), this._emitLine("}"), this._emitLine("}");
              } else {
                var K = this._tmpid();
                u.set(i.name.value, K), this._emitLine("var " + f + " = " + y + ".length;"), this._emitLine("for(var " + c + "=0; " + c + " < " + y + ".length; " + c + "++) {"), this._emitLine("var " + K + " = " + y + "[" + c + "];"), this._emitLine('frame.set("' + i.name.value + '", ' + K + ");"), this._emitLoopBindings(i, y, c, f), this._withScopedSyntax(function() {
                  p.compile(i.body, u);
                }), this._emitLine("}");
              }
              this._emitLine("}"), i.else_ && (this._emitLine("if (!" + f + ") {"), this.compile(i.else_, u), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, v._compileAsyncLoop = function(i, u, p) {
              var c = this, f = this._tmpid(), y = this._tmpid(), m = this._tmpid(), A = p ? "asyncAll" : "asyncEach";
              if (u = u.push(), this._emitLine("frame = frame.push();"), this._emit("var " + m + " = runtime.fromIterator("), this._compileExpression(i.arr, u), this._emitLine(");"), i.name instanceof _.Array) {
                var I = i.name.children.length;
                this._emit("runtime." + A + "(" + m + ", " + I + ", function("), i.name.children.forEach(function(K) {
                  c._emit(K.value + ",");
                }), this._emit(f + "," + y + ",next) {"), i.name.children.forEach(function(K) {
                  var L = K.value;
                  u.set(L, L), c._emitLine('frame.set("' + L + '", ' + L + ");");
                });
              } else {
                var C = i.name.value;
                this._emitLine("runtime." + A + "(" + m + ", 1, function(" + C + ", " + f + ", " + y + ",next) {"), this._emitLine('frame.set("' + C + '", ' + C + ");"), u.set(C, C);
              }
              this._emitLoopBindings(i, m, f, y), this._withScopedSyntax(function() {
                var K;
                p && (K = c._pushBuffer()), c.compile(i.body, u), c._emitLine("next(" + f + (K ? "," + K : "") + ");"), p && c._popBuffer();
              });
              var F = this._tmpid();
              this._emitLine("}, " + this._makeCallback(F)), this._addScopeLevel(), p && this._emitLine(this.buffer + " += " + F + ";"), i.else_ && (this._emitLine("if (!" + m + ".length) {"), this.compile(i.else_, u), this._emitLine("}")), this._emitLine("frame = frame.pop();");
            }, v.compileAsyncEach = function(i, u) {
              this._compileAsyncLoop(i, u);
            }, v.compileAsyncAll = function(i, u) {
              this._compileAsyncLoop(i, u, !0);
            }, v._compileMacro = function(i, u) {
              var p = this, c = [], f = null, y = "macro_" + this._tmpid(), m = u !== void 0;
              i.args.children.forEach(function(L, w) {
                w === i.args.children.length - 1 && L instanceof _.Dict ? f = L : (p.assertType(L, _.Symbol), c.push(L));
              });
              var A = [].concat(c.map(function(L) {
                return "l_" + L.value;
              }), ["kwargs"]), I = c.map(function(L) {
                return '"' + L.value + '"';
              }), C = (f && f.children || []).map(function(L) {
                return '"' + L.key.value + '"';
              }), F;
              m ? F = u.push(!0) : F = new R(), this._emitLines("var " + y + " = runtime.makeMacro(", "[" + I.join(", ") + "], ", "[" + C.join(", ") + "], ", "function (" + A.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (m ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'), c.forEach(function(L) {
                p._emitLine('frame.set("' + L.value + '", l_' + L.value + ");"), F.set(L.value, "l_" + L.value);
              }), f && f.children.forEach(function(L) {
                var w = L.key.value;
                p._emit('frame.set("' + w + '", '), p._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + w + '")'), p._emit(' ? kwargs["' + w + '"] : '), p._compileExpression(L.value, F), p._emit(");");
              });
              var K = this._pushBuffer();
              return this._withScopedSyntax(function() {
                p.compile(i.body, F);
              }), this._emitLine("frame = " + (m ? "frame.pop();" : "callerFrame;")), this._emitLine("return new runtime.SafeString(" + K + ");"), this._emitLine("});"), this._popBuffer(), y;
            }, v.compileMacro = function(i, u) {
              var p = this._compileMacro(i), c = i.name.value;
              u.set(c, p), u.parent ? this._emitLine('frame.set("' + c + '", ' + p + ");") : (i.name.value.charAt(0) !== "_" && this._emitLine('context.addExport("' + c + '");'), this._emitLine('context.setVariable("' + c + '", ' + p + ");"));
            }, v.compileCaller = function(i, u) {
              this._emit("(function (){");
              var p = this._compileMacro(i, u);
              this._emit("return " + p + ";})()");
            }, v._compileGetTemplate = function(i, u, p, c) {
              var f = this._tmpid(), y = this._templateName(), m = this._makeCallback(f), A = p ? "true" : "false", I = c ? "true" : "false";
              return this._emit("env.getTemplate("), this._compileExpression(i.template, u), this._emitLine(", " + A + ", " + y + ", " + I + ", " + m), f;
            }, v.compileImport = function(i, u) {
              var p = i.target.value, c = this._compileGetTemplate(i, u, !1, !1);
              this._addScopeLevel(), this._emitLine(c + ".getExported(" + (i.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(c)), this._addScopeLevel(), u.set(p, c), u.parent ? this._emitLine('frame.set("' + p + '", ' + c + ");") : this._emitLine('context.setVariable("' + p + '", ' + c + ");");
            }, v.compileFromImport = function(i, u) {
              var p = this, c = this._compileGetTemplate(i, u, !1, !1);
              this._addScopeLevel(), this._emitLine(c + ".getExported(" + (i.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(c)), this._addScopeLevel(), i.names.children.forEach(function(f) {
                var y, m, A = p._tmpid();
                f instanceof _.Pair ? (y = f.key.value, m = f.value.value) : (y = f.value, m = y), p._emitLine("if(Object.prototype.hasOwnProperty.call(" + c + ', "' + y + '")) {'), p._emitLine("var " + A + " = " + c + "." + y + ";"), p._emitLine("} else {"), p._emitLine(`cb(new Error("cannot import '` + y + `'")); return;`), p._emitLine("}"), u.set(m, A), u.parent ? p._emitLine('frame.set("' + m + '", ' + A + ");") : p._emitLine('context.setVariable("' + m + '", ' + A + ");");
              });
            }, v.compileBlock = function(i) {
              var u = this._tmpid();
              this.inBlock || this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '), this._emit('context.getBlock("' + i.name.value + '")'), this.inBlock || this._emit(")"), this._emitLine("(env, context, frame, runtime, " + this._makeCallback(u)), this._emitLine(this.buffer + " += " + u + ";"), this._addScopeLevel();
            }, v.compileSuper = function(i, u) {
              var p = i.blockName.value, c = i.symbol.value, f = this._makeCallback(c);
              this._emitLine('context.getSuper(env, "' + p + '", b_' + p + ", frame, runtime, " + f), this._emitLine(c + " = runtime.markSafe(" + c + ");"), this._addScopeLevel(), u.set(c, c);
            }, v.compileExtends = function(i, u) {
              var p = this._tmpid(), c = this._compileGetTemplate(i, u, !0, !1);
              this._emitLine("parentTemplate = " + c), this._emitLine("for(var " + p + " in parentTemplate.blocks) {"), this._emitLine("context.addBlock(" + p + ", parentTemplate.blocks[" + p + "]);"), this._emitLine("}"), this._addScopeLevel();
            }, v.compileInclude = function(i, u) {
              this._emitLine("var tasks = [];"), this._emitLine("tasks.push("), this._emitLine("function(callback) {");
              var p = this._compileGetTemplate(i, u, !1, i.ignoreMissing);
              this._emitLine("callback(null," + p + ");});"), this._emitLine("});");
              var c = this._tmpid();
              this._emitLine("tasks.push("), this._emitLine("function(template, callback){"), this._emitLine("template.render(context.getVariables(), frame, " + this._makeCallback(c)), this._emitLine("callback(null," + c + ");});"), this._emitLine("});"), this._emitLine("tasks.push("), this._emitLine("function(result, callback){"), this._emitLine(this.buffer + " += result;"), this._emitLine("callback(null);"), this._emitLine("});"), this._emitLine("env.waterfall(tasks, function(){"), this._addScopeLevel();
            }, v.compileTemplateData = function(i, u) {
              this.compileLiteral(i, u);
            }, v.compileCapture = function(i, u) {
              var p = this, c = this.buffer;
              this.buffer = "output", this._emitLine("(function() {"), this._emitLine('var output = "";'), this._withScopedSyntax(function() {
                p.compile(i.body, u);
              }), this._emitLine("return output;"), this._emitLine("})()"), this.buffer = c;
            }, v.compileOutput = function(i, u) {
              var p = this, c = i.children;
              c.forEach(function(f) {
                f instanceof _.TemplateData ? f.value && (p._emit(p.buffer + " += "), p.compileLiteral(f, u), p._emitLine(";")) : (p._emit(p.buffer + " += runtime.suppressValue("), p.throwOnUndefined && p._emit("runtime.ensureDefined("), p.compile(f, u), p.throwOnUndefined && p._emit("," + i.lineno + "," + i.colno + ")"), p._emit(`, env.opts.autoescape);
`));
              });
            }, v.compileRoot = function(i, u) {
              var p = this;
              u && this.fail("compileRoot: root node can't have frame"), u = new R(), this._emitFuncBegin(i, "root"), this._emitLine("var parentTemplate = null;"), this._compileChildren(i, u), this._emitLine("if(parentTemplate) {"), this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"), this._emitLine("} else {"), this._emitLine("cb(null, " + this.buffer + ");"), this._emitLine("}"), this._emitFuncEnd(!0), this.inBlock = !0;
              var c = [], f = i.findAll(_.Block);
              f.forEach(function(y, m) {
                var A = y.name.value;
                if (c.indexOf(A) !== -1)
                  throw new Error('Block "' + A + '" defined more than once.');
                c.push(A), p._emitFuncBegin(y, "b_" + A);
                var I = new R();
                p._emitLine("var frame = frame.push(true);"), p.compile(y.body, I), p._emitFuncEnd();
              }), this._emitLine("return {"), f.forEach(function(y, m) {
                var A = "b_" + y.name.value;
                p._emitLine(A + ": " + A + ",");
              }), this._emitLine(`root: root
};`);
            }, v.compile = function(i, u) {
              var p = this["compile" + i.typename];
              p ? p.call(this, i, u) : this.fail("compile: Cannot compile node: " + i.typename, i.lineno, i.colno);
            }, v.getCode = function() {
              return this.codebuf.join("");
            }, b;
          }(N);
          e.exports = {
            compile: function(b, v, E, i, u) {
              u === void 0 && (u = {});
              var p = new s(i, u.throwOnUndefined), c = (E || []).map(function(y) {
                return y.preprocess;
              }).filter(function(y) {
                return !!y;
              }), f = c.reduce(function(y, m) {
                return m(y);
              }, b);
              return p.compile(k.transform(g.parse(f, E, u), v, i)), p.getCode();
            },
            Compiler: s
          };
        },
        /* 6 */
        /***/
        function(e, l, h) {
          function o(T, P) {
            T.prototype = Object.create(P.prototype), T.prototype.constructor = T, d(T, P);
          }
          function d(T, P) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(R, x) {
              return R.__proto__ = x, R;
            }, d(T, P);
          }
          var g = h(4), k = h(1), _ = k.EmitterObj;
          e.exports = /* @__PURE__ */ function(T) {
            o(P, T);
            function P() {
              return T.apply(this, arguments) || this;
            }
            var M = P.prototype;
            return M.resolve = function(x, N) {
              return g.resolve(g.dirname(x), N);
            }, M.isRelative = function(x) {
              return x.indexOf("./") === 0 || x.indexOf("../") === 0;
            }, P;
          }(_);
        },
        /* 7 */
        /***/
        function(e, l, h) {
          function o(I, C) {
            I.prototype = Object.create(C.prototype), I.prototype.constructor = I, d(I, C);
          }
          function d(I, C) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(K, L) {
              return K.__proto__ = L, K;
            }, d(I, C);
          }
          var g = h(12), k = h(15), _ = h(0), T = h(5), P = h(18), M = h(10), R = M.FileSystemLoader, x = M.WebLoader, N = M.PrecompiledLoader, n = h(20), s = h(21), a = h(1), b = a.Obj, v = a.EmitterObj, E = h(2), i = E.handleError, u = E.Frame, p = h(22);
          function c(I, C, F) {
            g(function() {
              I(C, F);
            });
          }
          var f = {
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
              w = this.opts = w || {}, this.opts.dev = !!w.dev, this.opts.autoescape = w.autoescape != null ? w.autoescape : !0, this.opts.throwOnUndefined = !!w.throwOnUndefined, this.opts.trimBlocks = !!w.trimBlocks, this.opts.lstripBlocks = !!w.lstripBlocks, this.loaders = [], L ? this.loaders = _.isArray(L) ? L : [L] : R ? this.loaders = [new R("views")] : x && (this.loaders = [new x("/views")]), typeof window < "u" && window.nunjucksPrecompiled && this.loaders.unshift(new N(window.nunjucksPrecompiled)), this._initLoaders(), this.globals = s(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], _._entries(P).forEach(function(j) {
                var D = j[0], W = j[1];
                return S.addFilter(D, W);
              }), _._entries(n).forEach(function(j) {
                var D = j[0], W = j[1];
                return S.addTest(D, W);
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
              var W = this, ne = this, z = null;
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
              var X, Z = function(q, G) {
                if (!G && !q && !j && (q = new Error("template not found: " + L)), q)
                  if (D) {
                    D(q);
                    return;
                  } else
                    throw q;
                var se;
                G ? (se = new A(G.src, W, G.path, w), G.noCache || (G.loader.cache[L] = se)) : se = new A(f, W, "", w), D ? D(null, se) : X = se;
              };
              return _.asyncIter(this.loaders, function($, q, G, se) {
                function ye(fe, Oe) {
                  fe ? se(fe) : Oe ? (Oe.loader = $, se(null, Oe)) : G();
                }
                L = ne.resolveTemplate($, S, L), $.async ? $.getSource(L, ye) : ye(null, $.getSource(L));
              }, Z), X;
            }, F.express = function(L) {
              return p(this, L);
            }, F.render = function(L, w, S) {
              _.isFunction(w) && (S = w, w = null);
              var j = null;
              return this.getTemplate(L, function(D, W) {
                if (D && S)
                  c(S, D);
                else {
                  if (D)
                    throw D;
                  j = W.render(w, S);
                }
              }), j;
            }, F.renderString = function(L, w, S, j) {
              _.isFunction(S) && (j = S, S = {}), S = S || {};
              var D = new A(L, this, S.path);
              return D.render(w, j);
            }, F.waterfall = function(L, w, S) {
              return k(L, w, S);
            }, C;
          }(v), m = /* @__PURE__ */ function(I) {
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
            }, F.getSuper = function(L, w, S, j, D, W) {
              var ne = _.indexOf(this.blocks[w] || [], S), z = this.blocks[w][ne + 1], ue = this;
              if (ne === -1 || !z)
                throw new Error('no super block available for "' + w + '"');
              z(L, ue, j, D, W);
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
                var W = _._prettifyError(this.path, this.env.opts.dev, X);
                if (S)
                  return c(S, W);
                throw W;
              }
              var ne = new m(L || {}, this.blocks, this.env), z = w ? w.push(!0) : new u();
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
              } catch (W) {
                if (S)
                  return S(W);
                throw W;
              }
              var j = w ? w.push() : new u();
              j.topLevel = !0;
              var D = new m(L || {}, this.blocks, this.env);
              this.rootRenderFunc(this.env, D, j, E, function(W) {
                W ? S(W, null) : S(null, D.getExported());
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
          e.exports = {
            Environment: y,
            Template: A
          };
        },
        /* 8 */
        /***/
        function(e, l, h) {
          function o(M, R) {
            M.prototype = Object.create(R.prototype), M.prototype.constructor = M, d(M, R);
          }
          function d(M, R) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(N, n) {
              return N.__proto__ = n, N;
            }, d(M, R);
          }
          var g = h(9), k = h(3), _ = h(1).Obj, T = h(0), P = /* @__PURE__ */ function(M) {
            o(R, M);
            function R() {
              return M.apply(this, arguments) || this;
            }
            var x = R.prototype;
            return x.init = function(n) {
              this.tokens = n, this.peeked = null, this.breakOnBlocks = null, this.dropLeadingWhitespace = !1, this.extensions = [];
            }, x.nextToken = function(n) {
              var s;
              if (this.peeked)
                if (!n && this.peeked.type === g.TOKEN_WHITESPACE)
                  this.peeked = null;
                else
                  return s = this.peeked, this.peeked = null, s;
              if (s = this.tokens.nextToken(), !n)
                for (; s && s.type === g.TOKEN_WHITESPACE; )
                  s = this.tokens.nextToken();
              return s;
            }, x.peekToken = function() {
              return this.peeked = this.peeked || this.nextToken(), this.peeked;
            }, x.pushToken = function(n) {
              if (this.peeked)
                throw new Error("pushToken: can only push one token on between reads");
              this.peeked = n;
            }, x.error = function(n, s, a) {
              if (s === void 0 || a === void 0) {
                var b = this.peekToken() || {};
                s = b.lineno, a = b.colno;
              }
              return s !== void 0 && (s += 1), a !== void 0 && (a += 1), new T.TemplateError(n, s, a);
            }, x.fail = function(n, s, a) {
              throw this.error(n, s, a);
            }, x.skip = function(n) {
              var s = this.nextToken();
              return !s || s.type !== n ? (this.pushToken(s), !1) : !0;
            }, x.expect = function(n) {
              var s = this.nextToken();
              return s.type !== n && this.fail("expected " + n + ", got " + s.type, s.lineno, s.colno), s;
            }, x.skipValue = function(n, s) {
              var a = this.nextToken();
              return !a || a.type !== n || a.value !== s ? (this.pushToken(a), !1) : !0;
            }, x.skipSymbol = function(n) {
              return this.skipValue(g.TOKEN_SYMBOL, n);
            }, x.advanceAfterBlockEnd = function(n) {
              var s;
              return n || (s = this.peekToken(), s || this.fail("unexpected end of file"), s.type !== g.TOKEN_SYMBOL && this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"), n = this.nextToken().value), s = this.nextToken(), s && s.type === g.TOKEN_BLOCK_END ? s.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0) : this.fail("expected block end in " + n + " statement"), s;
            }, x.advanceAfterVariableEnd = function() {
              var n = this.nextToken();
              n && n.type === g.TOKEN_VARIABLE_END ? this.dropLeadingWhitespace = n.value.charAt(n.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-" : (this.pushToken(n), this.fail("expected variable end"));
            }, x.parseFor = function() {
              var n = this.peekToken(), s, a;
              this.skipSymbol("for") ? (s = new k.For(n.lineno, n.colno), a = "endfor") : this.skipSymbol("asyncEach") ? (s = new k.AsyncEach(n.lineno, n.colno), a = "endeach") : this.skipSymbol("asyncAll") ? (s = new k.AsyncAll(n.lineno, n.colno), a = "endall") : this.fail("parseFor: expected for{Async}", n.lineno, n.colno), s.name = this.parsePrimary(), s.name instanceof k.Symbol || this.fail("parseFor: variable name expected for loop");
              var b = this.peekToken().type;
              if (b === g.TOKEN_COMMA) {
                var v = s.name;
                for (s.name = new k.Array(v.lineno, v.colno), s.name.addChild(v); this.skip(g.TOKEN_COMMA); ) {
                  var E = this.parsePrimary();
                  s.name.addChild(E);
                }
              }
              return this.skipSymbol("in") || this.fail('parseFor: expected "in" keyword for loop', n.lineno, n.colno), s.arr = this.parseExpression(), this.advanceAfterBlockEnd(n.value), s.body = this.parseUntilBlocks(a, "else"), this.skipSymbol("else") && (this.advanceAfterBlockEnd("else"), s.else_ = this.parseUntilBlocks(a)), this.advanceAfterBlockEnd(), s;
            }, x.parseMacro = function() {
              var n = this.peekToken();
              this.skipSymbol("macro") || this.fail("expected macro");
              var s = this.parsePrimary(!0), a = this.parseSignature(), b = new k.Macro(n.lineno, n.colno, s, a);
              return this.advanceAfterBlockEnd(n.value), b.body = this.parseUntilBlocks("endmacro"), this.advanceAfterBlockEnd(), b;
            }, x.parseCall = function() {
              var n = this.peekToken();
              this.skipSymbol("call") || this.fail("expected call");
              var s = this.parseSignature(!0) || new k.NodeList(), a = this.parsePrimary();
              this.advanceAfterBlockEnd(n.value);
              var b = this.parseUntilBlocks("endcall");
              this.advanceAfterBlockEnd();
              var v = new k.Symbol(n.lineno, n.colno, "caller"), E = new k.Caller(n.lineno, n.colno, v, s, b), i = a.args.children;
              i[i.length - 1] instanceof k.KeywordArgs || i.push(new k.KeywordArgs());
              var u = i[i.length - 1];
              return u.addChild(new k.Pair(n.lineno, n.colno, v, E)), new k.Output(n.lineno, n.colno, [a]);
            }, x.parseWithContext = function() {
              var n = this.peekToken(), s = null;
              return this.skipSymbol("with") ? s = !0 : this.skipSymbol("without") && (s = !1), s !== null && (this.skipSymbol("context") || this.fail("parseFrom: expected context after with/without", n.lineno, n.colno)), s;
            }, x.parseImport = function() {
              var n = this.peekToken();
              this.skipSymbol("import") || this.fail("parseImport: expected import", n.lineno, n.colno);
              var s = this.parseExpression();
              this.skipSymbol("as") || this.fail('parseImport: expected "as" keyword', n.lineno, n.colno);
              var a = this.parseExpression(), b = this.parseWithContext(), v = new k.Import(n.lineno, n.colno, s, a, b);
              return this.advanceAfterBlockEnd(n.value), v;
            }, x.parseFrom = function() {
              var n = this.peekToken();
              this.skipSymbol("from") || this.fail("parseFrom: expected from");
              var s = this.parseExpression();
              this.skipSymbol("import") || this.fail("parseFrom: expected import", n.lineno, n.colno);
              for (var a = new k.NodeList(), b; ; ) {
                var v = this.peekToken();
                if (v.type === g.TOKEN_BLOCK_END) {
                  a.children.length || this.fail("parseFrom: Expected at least one import name", n.lineno, n.colno), v.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0), this.nextToken();
                  break;
                }
                a.children.length > 0 && !this.skip(g.TOKEN_COMMA) && this.fail("parseFrom: expected comma", n.lineno, n.colno);
                var E = this.parsePrimary();
                if (E.value.charAt(0) === "_" && this.fail("parseFrom: names starting with an underscore cannot be imported", E.lineno, E.colno), this.skipSymbol("as")) {
                  var i = this.parsePrimary();
                  a.addChild(new k.Pair(E.lineno, E.colno, E, i));
                } else
                  a.addChild(E);
                b = this.parseWithContext();
              }
              return new k.FromImport(n.lineno, n.colno, s, a, b);
            }, x.parseBlock = function() {
              var n = this.peekToken();
              this.skipSymbol("block") || this.fail("parseBlock: expected block", n.lineno, n.colno);
              var s = new k.Block(n.lineno, n.colno);
              s.name = this.parsePrimary(), s.name instanceof k.Symbol || this.fail("parseBlock: variable name expected", n.lineno, n.colno), this.advanceAfterBlockEnd(n.value), s.body = this.parseUntilBlocks("endblock"), this.skipSymbol("endblock"), this.skipSymbol(s.name.value);
              var a = this.peekToken();
              return a || this.fail("parseBlock: expected endblock, got end of file"), this.advanceAfterBlockEnd(a.value), s;
            }, x.parseExtends = function() {
              var n = "extends", s = this.peekToken();
              this.skipSymbol(n) || this.fail("parseTemplateRef: expected " + n);
              var a = new k.Extends(s.lineno, s.colno);
              return a.template = this.parseExpression(), this.advanceAfterBlockEnd(s.value), a;
            }, x.parseInclude = function() {
              var n = "include", s = this.peekToken();
              this.skipSymbol(n) || this.fail("parseInclude: expected " + n);
              var a = new k.Include(s.lineno, s.colno);
              return a.template = this.parseExpression(), this.skipSymbol("ignore") && this.skipSymbol("missing") && (a.ignoreMissing = !0), this.advanceAfterBlockEnd(s.value), a;
            }, x.parseIf = function() {
              var n = this.peekToken(), s;
              this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif") ? s = new k.If(n.lineno, n.colno) : this.skipSymbol("ifAsync") ? s = new k.IfAsync(n.lineno, n.colno) : this.fail("parseIf: expected if, elif, or elseif", n.lineno, n.colno), s.cond = this.parseExpression(), this.advanceAfterBlockEnd(n.value), s.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
              var a = this.peekToken();
              switch (a && a.value) {
                case "elseif":
                case "elif":
                  s.else_ = this.parseIf();
                  break;
                case "else":
                  this.advanceAfterBlockEnd(), s.else_ = this.parseUntilBlocks("endif"), this.advanceAfterBlockEnd();
                  break;
                case "endif":
                  s.else_ = null, this.advanceAfterBlockEnd();
                  break;
                default:
                  this.fail("parseIf: expected elif, else, or endif, got end of file");
              }
              return s;
            }, x.parseSet = function() {
              var n = this.peekToken();
              this.skipSymbol("set") || this.fail("parseSet: expected set", n.lineno, n.colno);
              for (var s = new k.Set(n.lineno, n.colno, []), a; (a = this.parsePrimary()) && (s.targets.push(a), !!this.skip(g.TOKEN_COMMA)); )
                ;
              return this.skipValue(g.TOKEN_OPERATOR, "=") ? (s.value = this.parseExpression(), this.advanceAfterBlockEnd(n.value)) : this.skip(g.TOKEN_BLOCK_END) ? (s.body = new k.Capture(n.lineno, n.colno, this.parseUntilBlocks("endset")), s.value = null, this.advanceAfterBlockEnd()) : this.fail("parseSet: expected = or block end in set tag", n.lineno, n.colno), s;
            }, x.parseSwitch = function() {
              var n = "switch", s = "endswitch", a = "case", b = "default", v = this.peekToken();
              !this.skipSymbol(n) && !this.skipSymbol(a) && !this.skipSymbol(b) && this.fail('parseSwitch: expected "switch," "case" or "default"', v.lineno, v.colno);
              var E = this.parseExpression();
              this.advanceAfterBlockEnd(n), this.parseUntilBlocks(a, b, s);
              var i = this.peekToken(), u = [], p;
              do {
                this.skipSymbol(a);
                var c = this.parseExpression();
                this.advanceAfterBlockEnd(n);
                var f = this.parseUntilBlocks(a, b, s);
                u.push(new k.Case(i.line, i.col, c, f)), i = this.peekToken();
              } while (i && i.value === a);
              switch (i.value) {
                case b:
                  this.advanceAfterBlockEnd(), p = this.parseUntilBlocks(s), this.advanceAfterBlockEnd();
                  break;
                case s:
                  this.advanceAfterBlockEnd();
                  break;
                default:
                  this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.');
              }
              return new k.Switch(v.lineno, v.colno, E, u, p);
            }, x.parseStatement = function() {
              var n = this.peekToken(), s;
              if (n.type !== g.TOKEN_SYMBOL && this.fail("tag name expected", n.lineno, n.colno), this.breakOnBlocks && T.indexOf(this.breakOnBlocks, n.value) !== -1)
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
                    for (var a = 0; a < this.extensions.length; a++) {
                      var b = this.extensions[a];
                      if (T.indexOf(b.tags || [], n.value) !== -1)
                        return b.parse(this, k, g);
                    }
                  this.fail("unknown block tag: " + n.value, n.lineno, n.colno);
              }
              return s;
            }, x.parseRaw = function(n) {
              n = n || "raw";
              for (var s = "end" + n, a = new RegExp("([\\s\\S]*?){%\\s*(" + n + "|" + s + ")\\s*(?=%})%}"), b = 1, v = "", E = null, i = this.advanceAfterBlockEnd(); (E = this.tokens._extractRegex(a)) && b > 0; ) {
                var u = E[0], p = E[1], c = E[2];
                c === n ? b += 1 : c === s && (b -= 1), b === 0 ? (v += p, this.tokens.backN(u.length - p.length)) : v += u;
              }
              return new k.Output(i.lineno, i.colno, [new k.TemplateData(i.lineno, i.colno, v)]);
            }, x.parsePostfix = function(n) {
              for (var s, a = this.peekToken(); a; ) {
                if (a.type === g.TOKEN_LEFT_PAREN)
                  n = new k.FunCall(a.lineno, a.colno, n, this.parseSignature());
                else if (a.type === g.TOKEN_LEFT_BRACKET)
                  s = this.parseAggregate(), s.children.length > 1 && this.fail("invalid index"), n = new k.LookupVal(a.lineno, a.colno, n, s.children[0]);
                else if (a.type === g.TOKEN_OPERATOR && a.value === ".") {
                  this.nextToken();
                  var b = this.nextToken();
                  b.type !== g.TOKEN_SYMBOL && this.fail("expected name as lookup value, got " + b.value, b.lineno, b.colno), s = new k.Literal(b.lineno, b.colno, b.value), n = new k.LookupVal(a.lineno, a.colno, n, s);
                } else
                  break;
                a = this.peekToken();
              }
              return n;
            }, x.parseExpression = function() {
              var n = this.parseInlineIf();
              return n;
            }, x.parseInlineIf = function() {
              var n = this.parseOr();
              if (this.skipSymbol("if")) {
                var s = this.parseOr(), a = n;
                n = new k.InlineIf(n.lineno, n.colno), n.body = a, n.cond = s, this.skipSymbol("else") ? n.else_ = this.parseOr() : n.else_ = null;
              }
              return n;
            }, x.parseOr = function() {
              for (var n = this.parseAnd(); this.skipSymbol("or"); ) {
                var s = this.parseAnd();
                n = new k.Or(n.lineno, n.colno, n, s);
              }
              return n;
            }, x.parseAnd = function() {
              for (var n = this.parseNot(); this.skipSymbol("and"); ) {
                var s = this.parseNot();
                n = new k.And(n.lineno, n.colno, n, s);
              }
              return n;
            }, x.parseNot = function() {
              var n = this.peekToken();
              return this.skipSymbol("not") ? new k.Not(n.lineno, n.colno, this.parseNot()) : this.parseIn();
            }, x.parseIn = function() {
              for (var n = this.parseIs(); ; ) {
                var s = this.nextToken();
                if (!s)
                  break;
                var a = s.type === g.TOKEN_SYMBOL && s.value === "not";
                if (a || this.pushToken(s), this.skipSymbol("in")) {
                  var b = this.parseIs();
                  n = new k.In(n.lineno, n.colno, n, b), a && (n = new k.Not(n.lineno, n.colno, n));
                } else {
                  a && this.pushToken(s);
                  break;
                }
              }
              return n;
            }, x.parseIs = function() {
              var n = this.parseCompare();
              if (this.skipSymbol("is")) {
                var s = this.skipSymbol("not"), a = this.parseCompare();
                n = new k.Is(n.lineno, n.colno, n, a), s && (n = new k.Not(n.lineno, n.colno, n));
              }
              return n;
            }, x.parseCompare = function() {
              for (var n = ["==", "===", "!=", "!==", "<", ">", "<=", ">="], s = this.parseConcat(), a = []; ; ) {
                var b = this.nextToken();
                if (b)
                  if (n.indexOf(b.value) !== -1)
                    a.push(new k.CompareOperand(b.lineno, b.colno, this.parseConcat(), b.value));
                  else {
                    this.pushToken(b);
                    break;
                  }
                else
                  break;
              }
              return a.length ? new k.Compare(a[0].lineno, a[0].colno, s, a) : s;
            }, x.parseConcat = function() {
              for (var n = this.parseAdd(); this.skipValue(g.TOKEN_TILDE, "~"); ) {
                var s = this.parseAdd();
                n = new k.Concat(n.lineno, n.colno, n, s);
              }
              return n;
            }, x.parseAdd = function() {
              for (var n = this.parseSub(); this.skipValue(g.TOKEN_OPERATOR, "+"); ) {
                var s = this.parseSub();
                n = new k.Add(n.lineno, n.colno, n, s);
              }
              return n;
            }, x.parseSub = function() {
              for (var n = this.parseMul(); this.skipValue(g.TOKEN_OPERATOR, "-"); ) {
                var s = this.parseMul();
                n = new k.Sub(n.lineno, n.colno, n, s);
              }
              return n;
            }, x.parseMul = function() {
              for (var n = this.parseDiv(); this.skipValue(g.TOKEN_OPERATOR, "*"); ) {
                var s = this.parseDiv();
                n = new k.Mul(n.lineno, n.colno, n, s);
              }
              return n;
            }, x.parseDiv = function() {
              for (var n = this.parseFloorDiv(); this.skipValue(g.TOKEN_OPERATOR, "/"); ) {
                var s = this.parseFloorDiv();
                n = new k.Div(n.lineno, n.colno, n, s);
              }
              return n;
            }, x.parseFloorDiv = function() {
              for (var n = this.parseMod(); this.skipValue(g.TOKEN_OPERATOR, "//"); ) {
                var s = this.parseMod();
                n = new k.FloorDiv(n.lineno, n.colno, n, s);
              }
              return n;
            }, x.parseMod = function() {
              for (var n = this.parsePow(); this.skipValue(g.TOKEN_OPERATOR, "%"); ) {
                var s = this.parsePow();
                n = new k.Mod(n.lineno, n.colno, n, s);
              }
              return n;
            }, x.parsePow = function() {
              for (var n = this.parseUnary(); this.skipValue(g.TOKEN_OPERATOR, "**"); ) {
                var s = this.parseUnary();
                n = new k.Pow(n.lineno, n.colno, n, s);
              }
              return n;
            }, x.parseUnary = function(n) {
              var s = this.peekToken(), a;
              return this.skipValue(g.TOKEN_OPERATOR, "-") ? a = new k.Neg(s.lineno, s.colno, this.parseUnary(!0)) : this.skipValue(g.TOKEN_OPERATOR, "+") ? a = new k.Pos(s.lineno, s.colno, this.parseUnary(!0)) : a = this.parsePrimary(), n || (a = this.parseFilter(a)), a;
            }, x.parsePrimary = function(n) {
              var s = this.nextToken(), a, b = null;
              if (s ? s.type === g.TOKEN_STRING ? a = s.value : s.type === g.TOKEN_INT ? a = parseInt(s.value, 10) : s.type === g.TOKEN_FLOAT ? a = parseFloat(s.value) : s.type === g.TOKEN_BOOLEAN ? s.value === "true" ? a = !0 : s.value === "false" ? a = !1 : this.fail("invalid boolean: " + s.value, s.lineno, s.colno) : s.type === g.TOKEN_NONE ? a = null : s.type === g.TOKEN_REGEX && (a = new RegExp(s.value.body, s.value.flags)) : this.fail("expected expression, got end of file"), a !== void 0 ? b = new k.Literal(s.lineno, s.colno, a) : s.type === g.TOKEN_SYMBOL ? b = new k.Symbol(s.lineno, s.colno, s.value) : (this.pushToken(s), b = this.parseAggregate()), n || (b = this.parsePostfix(b)), b)
                return b;
              throw this.error("unexpected token: " + s.value, s.lineno, s.colno);
            }, x.parseFilterName = function() {
              for (var n = this.expect(g.TOKEN_SYMBOL), s = n.value; this.skipValue(g.TOKEN_OPERATOR, "."); )
                s += "." + this.expect(g.TOKEN_SYMBOL).value;
              return new k.Symbol(n.lineno, n.colno, s);
            }, x.parseFilterArgs = function(n) {
              if (this.peekToken().type === g.TOKEN_LEFT_PAREN) {
                var s = this.parsePostfix(n);
                return s.args.children;
              }
              return [];
            }, x.parseFilter = function(n) {
              for (; this.skip(g.TOKEN_PIPE); ) {
                var s = this.parseFilterName();
                n = new k.Filter(s.lineno, s.colno, s, new k.NodeList(s.lineno, s.colno, [n].concat(this.parseFilterArgs(n))));
              }
              return n;
            }, x.parseFilterStatement = function() {
              var n = this.peekToken();
              this.skipSymbol("filter") || this.fail("parseFilterStatement: expected filter");
              var s = this.parseFilterName(), a = this.parseFilterArgs(s);
              this.advanceAfterBlockEnd(n.value);
              var b = new k.Capture(s.lineno, s.colno, this.parseUntilBlocks("endfilter"));
              this.advanceAfterBlockEnd();
              var v = new k.Filter(s.lineno, s.colno, s, new k.NodeList(s.lineno, s.colno, [b].concat(a)));
              return new k.Output(s.lineno, s.colno, [v]);
            }, x.parseAggregate = function() {
              var n = this.nextToken(), s;
              switch (n.type) {
                case g.TOKEN_LEFT_PAREN:
                  s = new k.Group(n.lineno, n.colno);
                  break;
                case g.TOKEN_LEFT_BRACKET:
                  s = new k.Array(n.lineno, n.colno);
                  break;
                case g.TOKEN_LEFT_CURLY:
                  s = new k.Dict(n.lineno, n.colno);
                  break;
                default:
                  return null;
              }
              for (; ; ) {
                var a = this.peekToken().type;
                if (a === g.TOKEN_RIGHT_PAREN || a === g.TOKEN_RIGHT_BRACKET || a === g.TOKEN_RIGHT_CURLY) {
                  this.nextToken();
                  break;
                }
                if (s.children.length > 0 && (this.skip(g.TOKEN_COMMA) || this.fail("parseAggregate: expected comma after expression", n.lineno, n.colno)), s instanceof k.Dict) {
                  var b = this.parsePrimary();
                  this.skip(g.TOKEN_COLON) || this.fail("parseAggregate: expected colon after dict key", n.lineno, n.colno);
                  var v = this.parseExpression();
                  s.addChild(new k.Pair(b.lineno, b.colno, b, v));
                } else {
                  var E = this.parseExpression();
                  s.addChild(E);
                }
              }
              return s;
            }, x.parseSignature = function(n, s) {
              var a = this.peekToken();
              if (!s && a.type !== g.TOKEN_LEFT_PAREN) {
                if (n)
                  return null;
                this.fail("expected arguments", a.lineno, a.colno);
              }
              a.type === g.TOKEN_LEFT_PAREN && (a = this.nextToken());
              for (var b = new k.NodeList(a.lineno, a.colno), v = new k.KeywordArgs(a.lineno, a.colno), E = !1; ; ) {
                if (a = this.peekToken(), !s && a.type === g.TOKEN_RIGHT_PAREN) {
                  this.nextToken();
                  break;
                } else if (s && a.type === g.TOKEN_BLOCK_END)
                  break;
                if (E && !this.skip(g.TOKEN_COMMA))
                  this.fail("parseSignature: expected comma after expression", a.lineno, a.colno);
                else {
                  var i = this.parseExpression();
                  this.skipValue(g.TOKEN_OPERATOR, "=") ? v.addChild(new k.Pair(i.lineno, i.colno, i, this.parseExpression())) : b.addChild(i);
                }
                E = !0;
              }
              return v.children.length && b.addChild(v), b;
            }, x.parseUntilBlocks = function() {
              for (var n = this.breakOnBlocks, s = arguments.length, a = new Array(s), b = 0; b < s; b++)
                a[b] = arguments[b];
              this.breakOnBlocks = a;
              var v = this.parse();
              return this.breakOnBlocks = n, v;
            }, x.parseNodes = function() {
              for (var n, s = []; n = this.nextToken(); )
                if (n.type === g.TOKEN_DATA) {
                  var a = n.value, b = this.peekToken(), v = b && b.value;
                  this.dropLeadingWhitespace && (a = a.replace(/^\s*/, ""), this.dropLeadingWhitespace = !1), b && (b.type === g.TOKEN_BLOCK_START && v.charAt(v.length - 1) === "-" || b.type === g.TOKEN_VARIABLE_START && v.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || b.type === g.TOKEN_COMMENT && v.charAt(this.tokens.tags.COMMENT_START.length) === "-") && (a = a.replace(/\s*$/, "")), s.push(new k.Output(n.lineno, n.colno, [new k.TemplateData(n.lineno, n.colno, a)]));
                } else if (n.type === g.TOKEN_BLOCK_START) {
                  this.dropLeadingWhitespace = !1;
                  var E = this.parseStatement();
                  if (!E)
                    break;
                  s.push(E);
                } else if (n.type === g.TOKEN_VARIABLE_START) {
                  var i = this.parseExpression();
                  this.dropLeadingWhitespace = !1, this.advanceAfterVariableEnd(), s.push(new k.Output(n.lineno, n.colno, [i]));
                } else
                  n.type === g.TOKEN_COMMENT ? this.dropLeadingWhitespace = n.value.charAt(n.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-" : this.fail("Unexpected token at top-level: " + n.type, n.lineno, n.colno);
              return s;
            }, x.parse = function() {
              return new k.NodeList(0, 0, this.parseNodes());
            }, x.parseAsRoot = function() {
              return new k.Root(0, 0, this.parseNodes());
            }, R;
          }(_);
          e.exports = {
            parse: function(R, x, N) {
              var n = new P(g.lex(R, N));
              return x !== void 0 && (n.extensions = x), n.parseAsRoot();
            },
            Parser: P
          };
        },
        /* 9 */
        /***/
        function(e, l, h) {
          var o = h(0), d = ` 
	\r `, g = "()[]{}%*-+~/#,:|.<>=!", k = "0123456789", _ = "{%", T = "%}", P = "{{", M = "}}", R = "{#", x = "#}", N = "string", n = "whitespace", s = "data", a = "block-start", b = "block-end", v = "variable-start", E = "variable-end", i = "comment", u = "left-paren", p = "right-paren", c = "left-bracket", f = "right-bracket", y = "left-curly", m = "right-curly", A = "operator", I = "comma", C = "colon", F = "tilde", K = "pipe", L = "int", w = "float", S = "boolean", j = "none", D = "symbol", W = "special", ne = "regex";
          function z(he, X, Z, $) {
            return {
              type: he,
              value: X,
              lineno: Z,
              colno: $
            };
          }
          var ue = /* @__PURE__ */ function() {
            function he(Z, $) {
              this.str = Z, this.index = 0, this.len = Z.length, this.lineno = 0, this.colno = 0, this.in_code = !1, $ = $ || {};
              var q = $.tags || {};
              this.tags = {
                BLOCK_START: q.blockStart || _,
                BLOCK_END: q.blockEnd || T,
                VARIABLE_START: q.variableStart || P,
                VARIABLE_END: q.variableEnd || M,
                COMMENT_START: q.commentStart || R,
                COMMENT_END: q.commentEnd || x
              }, this.trimBlocks = !!$.trimBlocks, this.lstripBlocks = !!$.lstripBlocks;
            }
            var X = he.prototype;
            return X.nextToken = function() {
              var $ = this.lineno, q = this.colno, G;
              if (this.in_code) {
                var se = this.current();
                if (this.isFinished())
                  return null;
                if (se === '"' || se === "'")
                  return z(N, this._parseString(se), $, q);
                if (G = this._extract(d))
                  return z(n, G, $, q);
                if ((G = this._extractString(this.tags.BLOCK_END)) || (G = this._extractString("-" + this.tags.BLOCK_END)))
                  return this.in_code = !1, this.trimBlocks && (se = this.current(), se === `
` ? this.forward() : se === "\r" && (this.forward(), se = this.current(), se === `
` ? this.forward() : this.back())), z(b, G, $, q);
                if ((G = this._extractString(this.tags.VARIABLE_END)) || (G = this._extractString("-" + this.tags.VARIABLE_END)))
                  return this.in_code = !1, z(E, G, $, q);
                if (se === "r" && this.str.charAt(this.index + 1) === "/") {
                  this.forwardN(2);
                  for (var ye = ""; !this.isFinished(); )
                    if (this.current() === "/" && this.previous() !== "\\") {
                      this.forward();
                      break;
                    } else
                      ye += this.current(), this.forward();
                  for (var fe = ["g", "i", "m", "y"], Oe = ""; !this.isFinished(); ) {
                    var O = fe.indexOf(this.current()) !== -1;
                    if (O)
                      Oe += this.current(), this.forward();
                    else
                      break;
                  }
                  return z(ne, {
                    body: ye,
                    flags: Oe
                  }, $, q);
                } else if (g.indexOf(se) !== -1) {
                  this.forward();
                  var B = ["==", "===", "!=", "!==", "<=", ">=", "//", "**"], V = se + this.current(), U;
                  switch (o.indexOf(B, V) !== -1 && (this.forward(), se = V, o.indexOf(B, V + this.current()) !== -1 && (se = V + this.current(), this.forward())), se) {
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
                      U = f;
                      break;
                    case "{":
                      U = y;
                      break;
                    case "}":
                      U = m;
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
                  return z(U, se, $, q);
                } else if (G = this._extractUntil(d + g), G.match(/^[-+]?[0-9]+$/))
                  if (this.current() === ".") {
                    this.forward();
                    var Q = this._extract(k);
                    return z(w, G + "." + Q, $, q);
                  } else
                    return z(L, G, $, q);
                else {
                  if (G.match(/^(true|false)$/))
                    return z(S, G, $, q);
                  if (G === "none")
                    return z(j, G, $, q);
                  if (G === "null")
                    return z(j, G, $, q);
                  if (G)
                    return z(D, G, $, q);
                  throw new Error("Unexpected value while parsing: " + G);
                }
              } else {
                var J = this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);
                if (this.isFinished())
                  return null;
                if ((G = this._extractString(this.tags.BLOCK_START + "-")) || (G = this._extractString(this.tags.BLOCK_START)))
                  return this.in_code = !0, z(a, G, $, q);
                if ((G = this._extractString(this.tags.VARIABLE_START + "-")) || (G = this._extractString(this.tags.VARIABLE_START)))
                  return this.in_code = !0, z(v, G, $, q);
                G = "";
                var ae, ee = !1;
                for (this._matches(this.tags.COMMENT_START) && (ee = !0, G = this._extractString(this.tags.COMMENT_START)); (ae = this._extractUntil(J)) !== null; )
                  if (G += ae, (this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !ee) {
                    if (this.lstripBlocks && this._matches(this.tags.BLOCK_START) && this.colno > 0 && this.colno <= G.length) {
                      var le = G.slice(-this.colno);
                      if (/^\s+$/.test(le) && (G = G.slice(0, -this.colno), !G.length))
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
                return z(ee ? i : s, G, $, q);
              }
            }, X._parseString = function($) {
              this.forward();
              for (var q = ""; !this.isFinished() && this.current() !== $; ) {
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
            }, X._matches = function($) {
              if (this.index + $.length > this.len)
                return null;
              var q = this.str.slice(this.index, this.index + $.length);
              return q === $;
            }, X._extractString = function($) {
              return this._matches($) ? (this.forwardN($.length), $) : null;
            }, X._extractUntil = function($) {
              return this._extractMatching(!0, $ || "");
            }, X._extract = function($) {
              return this._extractMatching(!1, $);
            }, X._extractMatching = function($, q) {
              if (this.isFinished())
                return null;
              var G = q.indexOf(this.current());
              if ($ && G === -1 || !$ && G !== -1) {
                var se = this.current();
                this.forward();
                for (var ye = q.indexOf(this.current()); ($ && ye === -1 || !$ && ye !== -1) && !this.isFinished(); )
                  se += this.current(), this.forward(), ye = q.indexOf(this.current());
                return se;
              }
              return "";
            }, X._extractRegex = function($) {
              var q = this.currentStr().match($);
              return q ? (this.forwardN(q[0].length), q) : null;
            }, X.isFinished = function() {
              return this.index >= this.len;
            }, X.forwardN = function($) {
              for (var q = 0; q < $; q++)
                this.forward();
            }, X.forward = function() {
              this.index++, this.previous() === `
` ? (this.lineno++, this.colno = 0) : this.colno++;
            }, X.backN = function($) {
              for (var q = 0; q < $; q++)
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
            }, he;
          }();
          e.exports = {
            lex: function(X, Z) {
              return new ue(X, Z);
            },
            TOKEN_STRING: N,
            TOKEN_WHITESPACE: n,
            TOKEN_DATA: s,
            TOKEN_BLOCK_START: a,
            TOKEN_BLOCK_END: b,
            TOKEN_VARIABLE_START: v,
            TOKEN_VARIABLE_END: E,
            TOKEN_COMMENT: i,
            TOKEN_LEFT_PAREN: u,
            TOKEN_RIGHT_PAREN: p,
            TOKEN_LEFT_BRACKET: c,
            TOKEN_RIGHT_BRACKET: f,
            TOKEN_LEFT_CURLY: y,
            TOKEN_RIGHT_CURLY: m,
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
            TOKEN_SPECIAL: W,
            TOKEN_REGEX: ne
          };
        },
        /* 10 */
        /***/
        function(e, l, h) {
          function o(P, M) {
            P.prototype = Object.create(M.prototype), P.prototype.constructor = P, d(P, M);
          }
          function d(P, M) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(x, N) {
              return x.__proto__ = N, x;
            }, d(P, M);
          }
          var g = h(6), k = h(19), _ = k.PrecompiledLoader, T = /* @__PURE__ */ function(P) {
            o(M, P);
            function M(x, N) {
              var n;
              return n = P.call(this) || this, n.baseURL = x || ".", N = N || {}, n.useCache = !!N.useCache, n.async = !!N.async, n;
            }
            var R = M.prototype;
            return R.resolve = function(N, n) {
              throw new Error("relative templates not support in the browser yet");
            }, R.getSource = function(N, n) {
              var s = this, a = this.useCache, b;
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
                    noCache: !a
                  }, s.emit("load", N, b), n && n(null, b);
              }), b;
            }, R.fetch = function(N, n) {
              if (typeof window > "u")
                throw new Error("WebLoader can only by used in a browser");
              var s = new XMLHttpRequest(), a = !0;
              s.onreadystatechange = function() {
                s.readyState === 4 && a && (a = !1, s.status === 0 || s.status === 200 ? n(null, s.responseText) : n({
                  status: s.status,
                  content: s.responseText
                }));
              }, N += (N.indexOf("?") === -1 ? "?" : "&") + "s=" + new Date().getTime(), s.open("GET", N, this.async), s.send();
            }, M;
          }(g);
          e.exports = {
            WebLoader: T,
            PrecompiledLoader: _
          };
        },
        /* 11 */
        /***/
        function(e, l, h) {
          var o = h(0), d = h(7), g = d.Environment, k = d.Template, _ = h(6), T = h(10), P = h(23), M = h(5), R = h(8), x = h(9), N = h(2), n = h(3), s = h(25), a;
          function b(v, E) {
            E = E || {}, o.isObject(v) && (E = v, v = null);
            var i;
            return T.FileSystemLoader ? i = new T.FileSystemLoader(v, {
              watch: E.watch,
              noCache: E.noCache
            }) : T.WebLoader && (i = new T.WebLoader(v, {
              useCache: E.web && E.web.useCache,
              async: E.web && E.web.async
            })), a = new g(i, E), E && E.express && a.express(E.express), a;
          }
          e.exports = {
            Environment: g,
            Template: k,
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
            installJinjaCompat: s,
            configure: b,
            reset: function() {
              a = void 0;
            },
            compile: function(E, i, u, p) {
              return a || b(), new k(E, i, u, p);
            },
            render: function(E, i, u) {
              return a || b(), a.render(E, i, u);
            },
            renderString: function(E, i, u) {
              return a || b(), a.renderString(E, i, u);
            },
            precompile: P ? P.precompile : void 0,
            precompileString: P ? P.precompileString : void 0
          };
        },
        /* 12 */
        /***/
        function(e, l, h) {
          var o = h(13), d = [], g = [], k = o.makeRequestCallFromTimer(_);
          function _() {
            if (g.length)
              throw g.shift();
          }
          e.exports = T;
          function T(M) {
            var R;
            d.length ? R = d.pop() : R = new P(), R.task = M, o(R);
          }
          function P() {
            this.task = null;
          }
          P.prototype.call = function() {
            try {
              this.task.call();
            } catch (M) {
              T.onerror ? T.onerror(M) : (g.push(M), k());
            } finally {
              this.task = null, d[d.length] = this;
            }
          };
        },
        /* 13 */
        /***/
        function(e, l, h) {
          (function(o) {
            e.exports = d;
            function d(n) {
              g.length || k(), g[g.length] = n;
            }
            var g = [], k, _ = 0, T = 1024;
            function P() {
              for (; _ < g.length; ) {
                var n = _;
                if (_ = _ + 1, g[n].call(), _ > T) {
                  for (var s = 0, a = g.length - _; s < a; s++)
                    g[s] = g[s + _];
                  g.length -= _, _ = 0;
                }
              }
              g.length = 0, _ = 0;
            }
            var M = typeof o < "u" ? o : self, R = M.MutationObserver || M.WebKitMutationObserver;
            typeof R == "function" ? k = x(P) : k = N(P), d.requestFlush = k;
            function x(n) {
              var s = 1, a = new R(n), b = document.createTextNode("");
              return a.observe(b, { characterData: !0 }), function() {
                s = -s, b.data = s;
              };
            }
            function N(n) {
              return function() {
                var a = setTimeout(v, 0), b = setInterval(v, 50);
                function v() {
                  clearTimeout(a), clearInterval(b), n();
                }
              };
            }
            d.makeRequestCallFromTimer = N;
          }).call(l, h(14));
        },
        /* 14 */
        /***/
        function(e, l) {
          var h;
          h = function() {
            return this;
          }();
          try {
            h = h || Function("return this")() || (0, eval)("this");
          } catch {
            typeof window == "object" && (h = window);
          }
          e.exports = h;
        },
        /* 15 */
        /***/
        function(e, l, h) {
          var o, d;
          (function(g) {
            var k = function() {
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
              var n = N ? _ : k;
              if (x = x || function() {
              }, !P(R)) {
                var s = new Error("First argument to waterfall must be an array of functions");
                return x(s);
              }
              if (!R.length)
                return x();
              var a = function(b) {
                return function(v) {
                  if (v)
                    x.apply(null, arguments), x = function() {
                    };
                  else {
                    var E = Array.prototype.slice.call(arguments, 1), i = b.next();
                    i ? E.push(a(i)) : E.push(x), n(function() {
                      b.apply(null, E);
                    });
                  }
                };
              };
              a(T(R))();
            };
            o = [], d = function() {
              return M;
            }.apply(l, o), d !== void 0 && (e.exports = d);
          })();
        },
        /* 16 */
        /***/
        function(e, l, h) {
          var o = typeof Reflect == "object" ? Reflect : null, d = o && typeof o.apply == "function" ? o.apply : function(f, y, m) {
            return Function.prototype.apply.call(f, y, m);
          }, g;
          o && typeof o.ownKeys == "function" ? g = o.ownKeys : Object.getOwnPropertySymbols ? g = function(f) {
            return Object.getOwnPropertyNames(f).concat(Object.getOwnPropertySymbols(f));
          } : g = function(f) {
            return Object.getOwnPropertyNames(f);
          };
          function k(c) {
            console && console.warn && console.warn(c);
          }
          var _ = Number.isNaN || function(f) {
            return f !== f;
          };
          function T() {
            T.init.call(this);
          }
          e.exports = T, e.exports.once = i, T.EventEmitter = T, T.prototype._events = void 0, T.prototype._eventsCount = 0, T.prototype._maxListeners = void 0;
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
          }, T.prototype.setMaxListeners = function(f) {
            if (typeof f != "number" || f < 0 || _(f))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + f + ".");
            return this._maxListeners = f, this;
          };
          function R(c) {
            return c._maxListeners === void 0 ? T.defaultMaxListeners : c._maxListeners;
          }
          T.prototype.getMaxListeners = function() {
            return R(this);
          }, T.prototype.emit = function(f) {
            for (var y = [], m = 1; m < arguments.length; m++)
              y.push(arguments[m]);
            var A = f === "error", I = this._events;
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
            var K = I[f];
            if (K === void 0)
              return !1;
            if (typeof K == "function")
              d(K, this, y);
            else
              for (var L = K.length, w = b(K, L), m = 0; m < L; ++m)
                d(w[m], this, y);
            return !0;
          };
          function x(c, f, y, m) {
            var A, I, C;
            if (M(y), I = c._events, I === void 0 ? (I = c._events = /* @__PURE__ */ Object.create(null), c._eventsCount = 0) : (I.newListener !== void 0 && (c.emit(
              "newListener",
              f,
              y.listener ? y.listener : y
            ), I = c._events), C = I[f]), C === void 0)
              C = I[f] = y, ++c._eventsCount;
            else if (typeof C == "function" ? C = I[f] = m ? [y, C] : [C, y] : m ? C.unshift(y) : C.push(y), A = R(c), A > 0 && C.length > A && !C.warned) {
              C.warned = !0;
              var F = new Error("Possible EventEmitter memory leak detected. " + C.length + " " + String(f) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              F.name = "MaxListenersExceededWarning", F.emitter = c, F.type = f, F.count = C.length, k(F);
            }
            return c;
          }
          T.prototype.addListener = function(f, y) {
            return x(this, f, y, !1);
          }, T.prototype.on = T.prototype.addListener, T.prototype.prependListener = function(f, y) {
            return x(this, f, y, !0);
          };
          function N() {
            if (!this.fired)
              return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function n(c, f, y) {
            var m = { fired: !1, wrapFn: void 0, target: c, type: f, listener: y }, A = N.bind(m);
            return A.listener = y, m.wrapFn = A, A;
          }
          T.prototype.once = function(f, y) {
            return M(y), this.on(f, n(this, f, y)), this;
          }, T.prototype.prependOnceListener = function(f, y) {
            return M(y), this.prependListener(f, n(this, f, y)), this;
          }, T.prototype.removeListener = function(f, y) {
            var m, A, I, C, F;
            if (M(y), A = this._events, A === void 0)
              return this;
            if (m = A[f], m === void 0)
              return this;
            if (m === y || m.listener === y)
              --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete A[f], A.removeListener && this.emit("removeListener", f, m.listener || y));
            else if (typeof m != "function") {
              for (I = -1, C = m.length - 1; C >= 0; C--)
                if (m[C] === y || m[C].listener === y) {
                  F = m[C].listener, I = C;
                  break;
                }
              if (I < 0)
                return this;
              I === 0 ? m.shift() : v(m, I), m.length === 1 && (A[f] = m[0]), A.removeListener !== void 0 && this.emit("removeListener", f, F || y);
            }
            return this;
          }, T.prototype.off = T.prototype.removeListener, T.prototype.removeAllListeners = function(f) {
            var y, m, A;
            if (m = this._events, m === void 0)
              return this;
            if (m.removeListener === void 0)
              return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : m[f] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete m[f]), this;
            if (arguments.length === 0) {
              var I = Object.keys(m), C;
              for (A = 0; A < I.length; ++A)
                C = I[A], C !== "removeListener" && this.removeAllListeners(C);
              return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
            }
            if (y = m[f], typeof y == "function")
              this.removeListener(f, y);
            else if (y !== void 0)
              for (A = y.length - 1; A >= 0; A--)
                this.removeListener(f, y[A]);
            return this;
          };
          function s(c, f, y) {
            var m = c._events;
            if (m === void 0)
              return [];
            var A = m[f];
            return A === void 0 ? [] : typeof A == "function" ? y ? [A.listener || A] : [A] : y ? E(A) : b(A, A.length);
          }
          T.prototype.listeners = function(f) {
            return s(this, f, !0);
          }, T.prototype.rawListeners = function(f) {
            return s(this, f, !1);
          }, T.listenerCount = function(c, f) {
            return typeof c.listenerCount == "function" ? c.listenerCount(f) : a.call(c, f);
          }, T.prototype.listenerCount = a;
          function a(c) {
            var f = this._events;
            if (f !== void 0) {
              var y = f[c];
              if (typeof y == "function")
                return 1;
              if (y !== void 0)
                return y.length;
            }
            return 0;
          }
          T.prototype.eventNames = function() {
            return this._eventsCount > 0 ? g(this._events) : [];
          };
          function b(c, f) {
            for (var y = new Array(f), m = 0; m < f; ++m)
              y[m] = c[m];
            return y;
          }
          function v(c, f) {
            for (; f + 1 < c.length; f++)
              c[f] = c[f + 1];
            c.pop();
          }
          function E(c) {
            for (var f = new Array(c.length), y = 0; y < f.length; ++y)
              f[y] = c[y].listener || c[y];
            return f;
          }
          function i(c, f) {
            return new Promise(function(y, m) {
              function A(C) {
                c.removeListener(f, I), m(C);
              }
              function I() {
                typeof c.removeListener == "function" && c.removeListener("error", A), y([].slice.call(arguments));
              }
              p(c, f, I, { once: !0 }), f !== "error" && u(c, A, { once: !0 });
            });
          }
          function u(c, f, y) {
            typeof c.on == "function" && p(c, "error", f, y);
          }
          function p(c, f, y, m) {
            if (typeof c.on == "function")
              m.once ? c.once(f, y) : c.on(f, y);
            else if (typeof c.addEventListener == "function")
              c.addEventListener(f, function A(I) {
                m.once && c.removeEventListener(f, A), y(I);
              });
            else
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof c);
          }
        },
        /* 17 */
        /***/
        function(e, l, h) {
          var o = h(3), d = h(0), g = 0;
          function k() {
            return "hole_" + g++;
          }
          function _(a, b) {
            for (var v = null, E = 0; E < a.length; E++) {
              var i = b(a[E]);
              i !== a[E] && (v || (v = a.slice()), v[E] = i);
            }
            return v || a;
          }
          function T(a, b, v) {
            if (!(a instanceof o.Node))
              return a;
            if (!v) {
              var E = b(a);
              if (E && E !== a)
                return E;
            }
            if (a instanceof o.NodeList) {
              var i = _(a.children, function(y) {
                return T(y, b, v);
              });
              i !== a.children && (a = new o[a.typename](a.lineno, a.colno, i));
            } else if (a instanceof o.CallExtension) {
              var u = T(a.args, b, v), p = _(a.contentArgs, function(y) {
                return T(y, b, v);
              });
              (u !== a.args || p !== a.contentArgs) && (a = new o[a.typename](a.extName, a.prop, u, p));
            } else {
              var c = a.fields.map(function(y) {
                return a[y];
              }), f = _(c, function(y) {
                return T(y, b, v);
              });
              f !== c && (a = new o[a.typename](a.lineno, a.colno), f.forEach(function(y, m) {
                a[a.fields[m]] = y;
              }));
            }
            return v && b(a) || a;
          }
          function P(a, b) {
            return T(a, b, !0);
          }
          function M(a, b, v) {
            var E = [], i = P(v ? a[v] : a, function(u) {
              var p;
              return u instanceof o.Block ? u : ((u instanceof o.Filter && d.indexOf(b, u.name.value) !== -1 || u instanceof o.CallExtensionAsync) && (p = new o.Symbol(u.lineno, u.colno, k()), E.push(new o.FilterAsync(u.lineno, u.colno, u.name, u.args, p))), p);
            });
            return v ? a[v] = i : a = i, E.length ? (E.push(a), new o.NodeList(a.lineno, a.colno, E)) : a;
          }
          function R(a, b) {
            return P(a, function(v) {
              return v instanceof o.Output ? M(v, b) : v instanceof o.Set ? M(v, b, "value") : v instanceof o.For ? M(v, b, "arr") : v instanceof o.If ? M(v, b, "cond") : v instanceof o.CallExtension ? M(v, b, "args") : void 0;
            });
          }
          function x(a) {
            return T(a, function(b) {
              if (b instanceof o.Block) {
                var v = !1, E = k();
                b.body = T(b.body, function(i) {
                  if (i instanceof o.FunCall && i.name.value === "super")
                    return v = !0, new o.Symbol(i.lineno, i.colno, E);
                }), v && b.body.children.unshift(new o.Super(0, 0, b.name, new o.Symbol(0, 0, E)));
              }
            });
          }
          function N(a) {
            return P(a, function(b) {
              if (!(!(b instanceof o.If) && !(b instanceof o.For))) {
                var v = !1;
                if (T(b, function(E) {
                  if (E instanceof o.FilterAsync || E instanceof o.IfAsync || E instanceof o.AsyncEach || E instanceof o.AsyncAll || E instanceof o.CallExtensionAsync)
                    return v = !0, E;
                }), v) {
                  if (b instanceof o.If)
                    return new o.IfAsync(b.lineno, b.colno, b.cond, b.body, b.else_);
                  if (b instanceof o.For && !(b instanceof o.AsyncAll))
                    return new o.AsyncEach(b.lineno, b.colno, b.arr, b.name, b.body, b.else_);
                }
              }
            });
          }
          function n(a, b) {
            return N(x(R(a, b)));
          }
          function s(a, b) {
            return n(a, b || []);
          }
          e.exports = {
            transform: s
          };
        },
        /* 18 */
        /***/
        function(e, g, h) {
          var o = h(0), d = h(2), g = e.exports = {};
          function k(O, B) {
            return O == null || O === !1 ? B : O;
          }
          g.abs = Math.abs;
          function _(O) {
            return O !== O;
          }
          function T(O, B, V) {
            var U, Q = [], J = [];
            for (U = 0; U < O.length; U++)
              U % B === 0 && J.length && (Q.push(J), J = []), J.push(O[U]);
            if (J.length) {
              if (V)
                for (U = J.length; U < B; U++)
                  J.push(V);
              Q.push(J);
            }
            return Q;
          }
          g.batch = T;
          function P(O) {
            O = k(O, "");
            var B = O.toLowerCase();
            return d.copySafeness(O, B.charAt(0).toUpperCase() + B.slice(1));
          }
          g.capitalize = P;
          function M(O, B) {
            if (O = k(O, ""), B = B || 80, O.length >= B)
              return O;
            var V = B - O.length, U = o.repeat(" ", V / 2 - V % 2), Q = o.repeat(" ", V / 2);
            return d.copySafeness(O, U + O + Q);
          }
          g.center = M;
          function R(O, B, V) {
            return V ? O || B : O !== void 0 ? O : B;
          }
          g.default = R;
          function x(O, B, V) {
            if (!o.isObject(O))
              throw new o.TemplateError("dictsort filter: val must be an object");
            var U = [];
            for (var Q in O)
              U.push([Q, O[Q]]);
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
          g.dictsort = x;
          function N(O, B) {
            return JSON.stringify(O, null, B);
          }
          g.dump = N;
          function n(O) {
            return O instanceof d.SafeString ? O : (O = O ?? "", d.markSafe(o.escape(O.toString())));
          }
          g.escape = n;
          function s(O) {
            return O instanceof d.SafeString ? O : (O = O ?? "", d.markSafe(O.toString()));
          }
          g.safe = s;
          function a(O) {
            return O[0];
          }
          g.first = a;
          function b(O) {
            return O = O ?? "", d.markSafe(o.escape(O.toString()));
          }
          g.forceescape = b;
          function v(O, B) {
            return o.groupBy(O, B, this.env.opts.throwOnUndefined);
          }
          g.groupby = v;
          function E(O, B, V) {
            if (O = k(O, ""), O === "")
              return "";
            B = B || 4;
            var U = O.split(`
`), Q = o.repeat(" ", B), J = U.map(function(ae, ee) {
              return ee === 0 && !V ? ae : "" + Q + ae;
            }).join(`
`);
            return d.copySafeness(O, J);
          }
          g.indent = E;
          function i(O, B, V) {
            return B = B || "", V && (O = o.map(O, function(U) {
              return U[V];
            })), O.join(B);
          }
          g.join = i;
          function u(O) {
            return O[O.length - 1];
          }
          g.last = u;
          function p(O) {
            var B = k(O, "");
            return B !== void 0 ? typeof Map == "function" && B instanceof Map || typeof Set == "function" && B instanceof Set ? B.size : o.isObject(B) && !(B instanceof d.SafeString) ? o.keys(B).length : B.length : 0;
          }
          g.length = p;
          function c(O) {
            if (o.isString(O))
              return O.split("");
            if (o.isObject(O))
              return o._entries(O || {}).map(function(B) {
                var V = B[0], U = B[1];
                return {
                  key: V,
                  value: U
                };
              });
            if (o.isArray(O))
              return O;
            throw new o.TemplateError("list filter: type not iterable");
          }
          g.list = c;
          function f(O) {
            return O = k(O, ""), O.toLowerCase();
          }
          g.lower = f;
          function y(O) {
            return O == null ? "" : d.copySafeness(O, O.replace(/\r\n|\n/g, `<br />
`));
          }
          g.nl2br = y;
          function m(O) {
            return O[Math.floor(Math.random() * O.length)];
          }
          g.random = m;
          function A(O) {
            function B(V, U, Q) {
              U === void 0 && (U = "truthy");
              var J = this, ae = J.env.getTest(U);
              return o.toArray(V).filter(function(le) {
                return ae.call(J, le, Q) === O;
              });
            }
            return B;
          }
          g.reject = A(!1);
          function I(O, B) {
            return O.filter(function(V) {
              return !V[B];
            });
          }
          g.rejectattr = I, g.select = A(!0);
          function C(O, B) {
            return O.filter(function(V) {
              return !!V[B];
            });
          }
          g.selectattr = C;
          function F(O, B, V, U) {
            var Q = O;
            if (B instanceof RegExp)
              return O.replace(B, V);
            typeof U > "u" && (U = -1);
            var J = "";
            if (typeof B == "number")
              B = "" + B;
            else if (typeof B != "string")
              return O;
            if (typeof O == "number" && (O = "" + O), typeof O != "string" && !(O instanceof d.SafeString))
              return O;
            if (B === "")
              return J = V + O.split("").join(V) + V, d.copySafeness(O, J);
            var ae = O.indexOf(B);
            if (U === 0 || ae === -1)
              return O;
            for (var ee = 0, le = 0; ae > -1 && (U === -1 || le < U); )
              J += O.substring(ee, ae) + V, ee = ae + B.length, le++, ae = O.indexOf(B, ee);
            return ee < O.length && (J += O.substring(ee)), d.copySafeness(Q, J);
          }
          g.replace = F;
          function K(O) {
            var B;
            return o.isString(O) ? B = c(O) : B = o.map(O, function(V) {
              return V;
            }), B.reverse(), o.isString(O) ? d.copySafeness(O, B.join("")) : B;
          }
          g.reverse = K;
          function L(O, B, V) {
            B = B || 0;
            var U = Math.pow(10, B), Q;
            return V === "ceil" ? Q = Math.ceil : V === "floor" ? Q = Math.floor : Q = Math.round, Q(O * U) / U;
          }
          g.round = L;
          function w(O, B, V) {
            for (var U = Math.floor(O.length / B), Q = O.length % B, J = [], ae = 0, ee = 0; ee < B; ee++) {
              var le = ae + ee * U;
              ee < Q && ae++;
              var we = ae + (ee + 1) * U, be = O.slice(le, we);
              V && ee >= Q && be.push(V), J.push(be);
            }
            return J;
          }
          g.slice = w;
          function S(O, B, V) {
            return V === void 0 && (V = 0), B && (O = o.map(O, function(U) {
              return U[B];
            })), V + O.reduce(function(U, Q) {
              return U + Q;
            }, 0);
          }
          g.sum = S, g.sort = d.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(B, V, U, Q) {
            var J = this, ae = o.map(B, function(le) {
              return le;
            }), ee = o.getAttrGetter(Q);
            return ae.sort(function(le, we) {
              var be = Q ? ee(le) : le, ke = Q ? ee(we) : we;
              if (J.env.opts.throwOnUndefined && Q && (be === void 0 || ke === void 0))
                throw new TypeError('sort: attribute "' + Q + '" resolved to undefined');
              return !U && o.isString(be) && o.isString(ke) && (be = be.toLowerCase(), ke = ke.toLowerCase()), be < ke ? V ? 1 : -1 : be > ke ? V ? -1 : 1 : 0;
            }), ae;
          });
          function j(O) {
            return d.copySafeness(O, O);
          }
          g.string = j;
          function D(O, B) {
            O = k(O, "");
            var V = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, U = ne(O.replace(V, "")), Q = "";
            return B ? Q = U.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, `
`).replace(/\n\n\n+/g, `

`) : Q = U.replace(/\s+/gi, " "), d.copySafeness(O, Q);
          }
          g.striptags = D;
          function W(O) {
            O = k(O, "");
            var B = O.split(" ").map(function(V) {
              return P(V);
            });
            return d.copySafeness(O, B.join(" "));
          }
          g.title = W;
          function ne(O) {
            return d.copySafeness(O, O.replace(/^\s*|\s*$/g, ""));
          }
          g.trim = ne;
          function z(O, B, V, U) {
            var Q = O;
            if (O = k(O, ""), B = B || 255, O.length <= B)
              return O;
            if (V)
              O = O.substring(0, B);
            else {
              var J = O.lastIndexOf(" ", B);
              J === -1 && (J = B), O = O.substring(0, J);
            }
            return O += U ?? "...", d.copySafeness(Q, O);
          }
          g.truncate = z;
          function ue(O) {
            return O = k(O, ""), O.toUpperCase();
          }
          g.upper = ue;
          function he(O) {
            var B = encodeURIComponent;
            if (o.isString(O))
              return B(O);
            var V = o.isArray(O) ? O : o._entries(O);
            return V.map(function(U) {
              var Q = U[0], J = U[1];
              return B(Q) + "=" + B(J);
            }).join("&");
          }
          g.urlencode = he;
          var X = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, Z = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, $ = /^https?:\/\/.*$/, q = /^www\./, G = /\.(?:org|net|com)(?:\:|\/|$)/;
          function se(O, B, V) {
            _(B) && (B = 1 / 0);
            var U = V === !0 ? ' rel="nofollow"' : "", Q = O.split(/(\s+)/).filter(function(J) {
              return J && J.length;
            }).map(function(J) {
              var ae = J.match(X), ee = ae ? ae[1] : J, le = ee.substr(0, B);
              return $.test(ee) ? '<a href="' + ee + '"' + U + ">" + le + "</a>" : q.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : Z.test(ee) ? '<a href="mailto:' + ee + '">' + ee + "</a>" : G.test(ee) ? '<a href="http://' + ee + '"' + U + ">" + le + "</a>" : J;
            });
            return Q.join("");
          }
          g.urlize = se;
          function ye(O) {
            O = k(O, "");
            var B = O ? O.match(/\w+/g) : null;
            return B ? B.length : null;
          }
          g.wordcount = ye;
          function fe(O, B) {
            var V = parseFloat(O);
            return _(V) ? B : V;
          }
          g.float = fe;
          var Oe = d.makeMacro(["value", "default", "base"], [], function(B, V, U) {
            U === void 0 && (U = 10);
            var Q = parseInt(B, U);
            return _(Q) ? V : Q;
          });
          g.int = Oe, g.d = g.default, g.e = g.escape;
        },
        /* 19 */
        /***/
        function(e, l, h) {
          function o(_, T) {
            _.prototype = Object.create(T.prototype), _.prototype.constructor = _, d(_, T);
          }
          function d(_, T) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(M, R) {
              return M.__proto__ = R, M;
            }, d(_, T);
          }
          var g = h(6), k = /* @__PURE__ */ function(_) {
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
          }(g);
          e.exports = {
            PrecompiledLoader: k
          };
        },
        /* 20 */
        /***/
        function(e, l, h) {
          var o = h(2).SafeString;
          function d(m) {
            return typeof m == "function";
          }
          l.callable = d;
          function g(m) {
            return m !== void 0;
          }
          l.defined = g;
          function k(m, A) {
            return m % A === 0;
          }
          l.divisibleby = k;
          function _(m) {
            return m instanceof o;
          }
          l.escaped = _;
          function T(m, A) {
            return m === A;
          }
          l.equalto = T, l.eq = l.equalto, l.sameas = l.equalto;
          function P(m) {
            return m % 2 === 0;
          }
          l.even = P;
          function M(m) {
            return !m;
          }
          l.falsy = M;
          function R(m, A) {
            return m >= A;
          }
          l.ge = R;
          function x(m, A) {
            return m > A;
          }
          l.greaterthan = x, l.gt = l.greaterthan;
          function N(m, A) {
            return m <= A;
          }
          l.le = N;
          function n(m, A) {
            return m < A;
          }
          l.lessthan = n, l.lt = l.lessthan;
          function s(m) {
            return m.toLowerCase() === m;
          }
          l.lower = s;
          function a(m, A) {
            return m !== A;
          }
          l.ne = a;
          function b(m) {
            return m === null;
          }
          l.null = b;
          function v(m) {
            return typeof m == "number";
          }
          l.number = v;
          function E(m) {
            return m % 2 === 1;
          }
          l.odd = E;
          function i(m) {
            return typeof m == "string";
          }
          l.string = i;
          function u(m) {
            return !!m;
          }
          l.truthy = u;
          function p(m) {
            return m === void 0;
          }
          l.undefined = p;
          function c(m) {
            return m.toUpperCase() === m;
          }
          l.upper = c;
          function f(m) {
            return typeof Symbol < "u" ? !!m[Symbol.iterator] : Array.isArray(m) || typeof m == "string";
          }
          l.iterable = f;
          function y(m) {
            var A = m != null && typeof m == "object" && !Array.isArray(m);
            return Set ? A && !(m instanceof Set) : A;
          }
          l.mapping = y;
        },
        /* 21 */
        /***/
        function(e, l, h) {
          function o(k) {
            var _ = -1;
            return {
              current: null,
              reset: function() {
                _ = -1, this.current = null;
              },
              next: function() {
                return _++, _ >= k.length && (_ = 0), this.current = k[_], this.current;
              }
            };
          }
          function d(k) {
            k = k || ",";
            var _ = !0;
            return function() {
              var T = _ ? "" : k;
              return _ = !1, T;
            };
          }
          function g() {
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
                return d(_);
              }
            };
          }
          e.exports = g;
        },
        /* 22 */
        /***/
        function(e, l, h) {
          var o = h(4);
          e.exports = function(g, k) {
            function _(T, P) {
              if (this.name = T, this.path = T, this.defaultEngine = P.defaultEngine, this.ext = o.extname(T), !this.ext && !this.defaultEngine)
                throw new Error("No default engine was specified and no extension was provided.");
              this.ext || (this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine);
            }
            return _.prototype.render = function(P, M) {
              g.render(this.name, P, M);
            }, k.set("view", _), k.set("nunjucksEnv", g), g;
          };
        },
        /* 23 */
        /***/
        function(e, l, h) {
          var o = h(4), d = h(4), g = h(0), k = g._prettifyError, _ = h(5), T = h(7), P = T.Environment, M = h(24);
          function R(s, a) {
            return Array.isArray(a) ? a.some(function(b) {
              return s.match(b);
            }) : !1;
          }
          function x(s, a) {
            a = a || {}, a.isString = !0;
            var b = a.env || new P([]), v = a.wrapper || M;
            if (!a.name)
              throw new Error('the "name" option is required when compiling a string');
            return v([n(s, a.name, b)], a);
          }
          function N(s, a) {
            a = a || {};
            var b = a.env || new P([]), v = a.wrapper || M;
            if (a.isString)
              return x(s, a);
            var E = o.existsSync(s) && o.statSync(s), i = [], u = [];
            function p(y) {
              o.readdirSync(y).forEach(function(m) {
                var A = d.join(y, m), I = A.substr(d.join(s, "/").length), C = o.statSync(A);
                C && C.isDirectory() ? (I += "/", R(I, a.exclude) || p(A)) : R(I, a.include) && u.push(A);
              });
            }
            if (E.isFile())
              i.push(n(o.readFileSync(s, "utf-8"), a.name || s, b));
            else if (E.isDirectory()) {
              p(s);
              for (var c = 0; c < u.length; c++) {
                var f = u[c].replace(d.join(s, "/"), "");
                try {
                  i.push(n(o.readFileSync(u[c], "utf-8"), f, b));
                } catch (y) {
                  if (a.force)
                    console.error(y);
                  else
                    throw y;
                }
              }
            }
            return v(i, a);
          }
          function n(s, a, b) {
            b = b || new P([]);
            var v = b.asyncFilters, E = b.extensionsList, i;
            a = a.replace(/\\/g, "/");
            try {
              i = _.compile(s, v, E, a, b.opts);
            } catch (u) {
              throw k(a, !1, u);
            }
            return {
              name: a,
              template: i
            };
          }
          e.exports = {
            precompile: N,
            precompileString: x
          };
        },
        /* 24 */
        /***/
        function(e, l, h) {
          function o(d, g) {
            var k = "";
            g = g || {};
            for (var _ = 0; _ < d.length; _++) {
              var T = JSON.stringify(d[_].name), P = d[_].template;
              k += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + T + `] = (function() {
` + P + `
})();
`, g.asFunction && (k += "return function(ctx, cb) { return nunjucks.render(" + T + `, ctx, cb); }
`), k += `})();
`;
            }
            return k;
          }
          e.exports = o;
        },
        /* 25 */
        /***/
        function(e, l, h) {
          function o() {
            var d = this.runtime, g = this.lib, k = this.compiler.Compiler, _ = this.parser.Parser, T = this.nodes, P = this.lexer, M = d.contextOrFrameLookup, R = d.memberLookup, x, N;
            k && (x = k.prototype.assertType), _ && (N = _.prototype.parseAggregate);
            function n() {
              d.contextOrFrameLookup = M, d.memberLookup = R, k && (k.prototype.assertType = x), _ && (_.prototype.parseAggregate = N);
            }
            d.contextOrFrameLookup = function(p, c, f) {
              var y = M.apply(this, arguments);
              if (y !== void 0)
                return y;
              switch (f) {
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
            function s(u) {
              return {
                index: u.index,
                lineno: u.lineno,
                colno: u.colno
              };
            }
            if (T && k && _) {
              var a = T.Node.extend("Slice", {
                fields: ["start", "stop", "step"],
                init: function(p, c, f, y, m) {
                  f = f || new T.Literal(p, c, null), y = y || new T.Literal(p, c, null), m = m || new T.Literal(p, c, 1), this.parent(p, c, f, y, m);
                }
              });
              k.prototype.assertType = function(p) {
                p instanceof a || x.apply(this, arguments);
              }, k.prototype.compileSlice = function(p, c) {
                this._emit("("), this._compileExpression(p.start, c), this._emit("),("), this._compileExpression(p.stop, c), this._emit("),("), this._compileExpression(p.step, c), this._emit(")");
              }, _.prototype.parseAggregate = function() {
                var p = this, c = s(this.tokens);
                c.colno--, c.index--;
                try {
                  return N.apply(this);
                } catch (K) {
                  var f = s(this.tokens), y = function() {
                    return g._assign(p.tokens, f), K;
                  };
                  g._assign(this.tokens, c), this.peeked = !1;
                  var m = this.peekToken();
                  if (m.type !== P.TOKEN_LEFT_BRACKET)
                    throw y();
                  this.nextToken();
                  for (var A = new a(m.lineno, m.colno), I = !1, C = 0; C <= A.fields.length && !this.skip(P.TOKEN_RIGHT_BRACKET); C++) {
                    if (C === A.fields.length)
                      if (I)
                        this.fail("parseSlice: too many slice components", m.lineno, m.colno);
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
                  return new T.Array(m.lineno, m.colno, [A]);
                }
              };
            }
            function b(u, p, c, f) {
              u = u || [], p === null && (p = f < 0 ? u.length - 1 : 0), c === null ? c = f < 0 ? -1 : u.length : c < 0 && (c += u.length), p < 0 && (p += u.length);
              for (var y = [], m = p; !(m < 0 || m > u.length || f > 0 && m >= c || f < 0 && m <= c); m += f)
                y.push(d.memberLookup(u, m));
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
                for (var c = 0, f = 0; f < this.length; f++)
                  this[f] === p && c++;
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
            }, i = {
              items: function() {
                return g._entries(this);
              },
              values: function() {
                return g._values(this);
              },
              keys: function() {
                return g.keys(this);
              },
              get: function(p, c) {
                var f = this[p];
                return f === void 0 && (f = c), f;
              },
              has_key: function(p) {
                return v(this, p);
              },
              pop: function(p, c) {
                var f = this[p];
                if (f === void 0 && c !== void 0)
                  f = c;
                else {
                  if (f === void 0)
                    throw new Error("KeyError");
                  delete this[p];
                }
                return f;
              },
              popitem: function() {
                var p = g.keys(this);
                if (!p.length)
                  throw new Error("KeyError");
                var c = p[0], f = this[c];
                return delete this[c], [c, f];
              },
              setdefault: function(p, c) {
                return c === void 0 && (c = null), p in this || (this[p] = c), this[p];
              },
              update: function(p) {
                return g._assign(this, p), null;
              }
            };
            return i.iteritems = i.items, i.itervalues = i.values, i.iterkeys = i.keys, d.memberLookup = function(p, c, f) {
              return arguments.length === 4 ? b.apply(this, arguments) : (p = p || {}, g.isArray(p) && v(E, c) ? E[c].bind(p) : g.isObject(p) && v(i, c) ? i[c].bind(p) : R.apply(this, arguments));
            }, n;
          }
          e.exports = o;
        }
        /******/
      ])
    );
  });
})(hr);
const gt = /* @__PURE__ */ Dt(ft), pr = (r, t) => {
  const e = At(r);
  return gt.configure({ autoescape: !0 }), gt.renderString(t, e);
}, At = (r) => {
  const t = {};
  return Object.entries(r).forEach(([e, l]) => {
    if (dr(l)) {
      const h = Object.values(l.content);
      t[e] = h.filter((o) => !(o != null && o.hidden)).map((o) => At(o.questions));
      return;
    }
    t[e] = l.value;
  }), t;
}, dr = (r) => Boolean(r.content);
class St {
  constructor(t = "empty", e = { isRoot: !0, data: null }) {
    Le(this, "interview", /* @__PURE__ */ new Map());
    Le(this, "events");
    Le(this, "current");
    Le(this, "isRoot", !0);
    Le(this, "data", {});
    this.events = e.events || new Me(), this.isRoot = e.isRoot, this.data = e.data || this.data;
    const l = e.data ? JSON.parse(JSON.stringify(this.data)) : null;
    t !== "empty" && this.init(t), l && this.applyDataToQuestions(l);
  }
  get questionsMap() {
    return this.interview;
  }
  init(t) {
    if (t === null)
      throw new Error("Interview init param is null");
    rr(t);
    for (const e of Object.values(t))
      this.add(e);
  }
  add(t, e = !1) {
    const l = ar(t);
    return l.type === "repeat" && this.buildContentForRepeatQuestion(l), this.interview.set(l.id, l), this.events.dispatch("question-added", l), l;
  }
  getNestedInterview(t, e) {
    const l = this.interview.get(t);
    if (!l)
      throw new Error("No question with id:" + t);
    if ((l == null ? void 0 : l.type) !== "repeat")
      throw new Error("Question with id " + t + " is not a repeat question");
    return l.content[e].nestedInterview;
  }
  canBeShown(t) {
    var e;
    if ((e = t.logic) != null && e.showIf) {
      const l = this.interview.keys(), h = this.interview.values();
      return Function(...l, `return ${t.logic.showIf}`).bind(this)(...h);
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
    for (let l = 0; l < e.length; l++) {
      const [h] = e[l];
      if (t === h) {
        const o = this.nextAvailableQuestion(l + 1);
        o && this.setCurrent(o[0]);
        break;
      }
    }
  }
  nextAvailableQuestion(t) {
    const e = Array.from(this.interview);
    for (let l = t; l < e.length; l++) {
      const [h, o] = e[l];
      if (this.canBeShown(o))
        return e[l];
    }
  }
  previous() {
    const t = this.getCurrent().id, e = Array.from(this.interview);
    for (let l = 0; l < e.length; l++) {
      const [h] = e[l];
      if (t === h) {
        const o = this.previousAvailableQuestion(l - 1);
        o && this.setCurrent(o[0]);
        break;
      }
    }
  }
  previousAvailableQuestion(t) {
    const e = Array.from(this.interview);
    for (let l = t; l >= 0; l--) {
      const [h, o] = e[l];
      if (this.canBeShown(o))
        return e[l];
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
    const l = this.interview.get(t);
    if (!l)
      throw new Error("No question with id:" + t);
    sr(e, l), l.value = e, (l == null ? void 0 : l.type) === "multipleChoice" && this.setRadioChecked(l, e), (l == null ? void 0 : l.type) === "repeat" && this.buildContentForRepeatQuestion(l, e), this.data[t] ? this.data[t].value = l.value : this.data[t] = { value: l.value }, this.events.dispatch("set-value", this.interview.get(t));
  }
  on(t, e) {
    this.events.register(t, e);
  }
  getData() {
    return this.data;
  }
  setRadioChecked(t, e) {
    t.choices.forEach((l) => {
      l.checked = l.label === e;
    });
  }
  buildContentForRepeatQuestion(t, e = null) {
    const { range: l, id: h, questions: o } = t, { min: d, max: g } = l;
    e = ir(t.value, d, g), t.value = e, t.content || (t.content = {}), this.data[h] ? this.data[h].value = e : this.data[h] = { value: e, content: {} };
    for (let _ = 0; _ < e; _++) {
      if (t.content[_]) {
        t.content[_].hidden = !1;
        continue;
      }
      this.data[h].content[_] = { hidden: !1, questions: {} };
      const T = new St(fr(o, _), {
        isRoot: !1,
        events: this.events,
        data: this.data[h].content[_].questions
      });
      t.content[_] = { hidden: !1, nestedInterview: T };
    }
    const k = Object.keys(t.content);
    if (e < k.length)
      for (let _ = e; _ < k.length; _++)
        t.content[_].hidden = !0, this.data[h].content[_].hidden = !0;
  }
  applyDataToQuestions(t) {
    Object.entries(t).forEach(([e, { value: l, content: h }]) => {
      this.setValue(e, l), h && Object.values(h).forEach((o, d) => {
        o.hidden || this.getNestedInterview(e, d).applyDataToQuestions(o.questions);
      });
    });
  }
  makeTemplate(t) {
    if (!t)
      throw new Error("No template provided");
    return pr(this.data, t);
  }
}
export {
  St as GuidedInterview
};
