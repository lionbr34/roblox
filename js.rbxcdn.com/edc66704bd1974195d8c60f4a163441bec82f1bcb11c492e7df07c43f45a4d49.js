! function(n) {
    var r = {};

    function o(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
    }
    o.m = n, o.c = r, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o(o.s = 38)
}([function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return o
    }), n.d(e, "a", function() {
        return i
    }), n.d(e, "e", function() {
        return a
    }), n.d(e, "c", function() {
        return s
    }), n.d(e, "d", function() {
        return c
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var r = function(t, e) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    };

    function o(t, e) {
        function n() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }
    var i = function() {
        return (i = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    };

    function a(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator],
            n = 0;
        return e ? e.call(t) : {
            next: function() {
                return t && n >= t.length && (t = void 0), {
                    value: t && t[n++],
                    done: !t
                }
            }
        }
    }

    function s(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || 0 < e--) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }

    function c() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(s(arguments[e]));
        return t
    }
}, , function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t) {
        switch (Object.prototype.toString.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return _(t, Error)
        }
    }

    function i(t) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(t)
    }

    function a(t) {
        return "[object DOMError]" === Object.prototype.toString.call(t)
    }

    function s(t) {
        return "[object DOMException]" === Object.prototype.toString.call(t)
    }

    function c(t) {
        return "[object String]" === Object.prototype.toString.call(t)
    }

    function u(t) {
        return null === t || "object" !== r(t) && "function" != typeof t
    }

    function l(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function p(t) {
        return "undefined" != typeof Event && _(t, Event)
    }

    function f(t) {
        return "undefined" != typeof Element && _(t, Element)
    }

    function d(t) {
        return "[object RegExp]" === Object.prototype.toString.call(t)
    }

    function h(t) {
        return Boolean(t && t.then && "function" == typeof t.then)
    }

    function v(t) {
        return l(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function _(t, e) {
        try {
            return t instanceof e
        } catch (t) {
            return !1
        }
    }
    n.d(e, "d", function() {
        return o
    }), n.d(e, "e", function() {
        return i
    }), n.d(e, "a", function() {
        return a
    }), n.d(e, "b", function() {
        return s
    }), n.d(e, "k", function() {
        return c
    }), n.d(e, "i", function() {
        return u
    }), n.d(e, "h", function() {
        return l
    }), n.d(e, "f", function() {
        return p
    }), n.d(e, "c", function() {
        return f
    }), n.d(e, "j", function() {
        return d
    }), n.d(e, "m", function() {
        return h
    }), n.d(e, "l", function() {
        return v
    }), n.d(e, "g", function() {
        return _
    })
}, function(t, w, S) {
    "use strict";
    (function(t, e, n) {
        S.d(w, "i", function() {
            return r
        }), S.d(w, "f", function() {
            return i
        }), S.d(w, "m", function() {
            return a
        }), S.d(w, "k", function() {
            return s
        }), S.d(w, "d", function() {
            return c
        }), S.d(w, "c", function() {
            return l
        }), S.d(w, "b", function() {
            return p
        }), S.d(w, "a", function() {
            return f
        }), S.d(w, "g", function() {
            return d
        }), S.d(w, "h", function() {
            return h
        }), S.d(w, "l", function() {
            return b
        }), S.d(w, "j", function() {
            return x
        }), S.d(w, "e", function() {
            return j
        });
        var u = S(2);
        S(7);

        function r() {
            return "[object process]" === Object.prototype.toString.call(void 0 !== t ? t : 0)
        }
        var o = {};

        function i() {
            return r() ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : o
        }

        function a() {
            var t = i(),
                e = t.crypto || t.msCrypto;
            if (void 0 !== e && e.getRandomValues) {
                var n = new Uint16Array(8);
                e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                var r = function(t) {
                    for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                    return e
                };
                return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var e = 16 * Math.random() | 0;
                return ("x" === t ? e : 3 & e | 8).toString(16)
            })
        }

        function s(t) {
            if (!t) return {};
            var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!e) return {};
            var n = e[6] || "",
                r = e[8] || "";
            return {
                host: e[4],
                path: e[5],
                protocol: e[2],
                relative: e[5] + n + r
            }
        }

        function c(t) {
            if (t.message) return t.message;
            if (t.exception && t.exception.values && t.exception.values[0]) {
                var e = t.exception.values[0];
                return e.type && e.value ? e.type + ": " + e.value : e.type || e.value || t.event_id || "<unknown>"
            }
            return t.event_id || "<unknown>"
        }

        function l(t) {
            var e = i();
            if (!("console" in e)) return t();
            var n = e.console,
                r = {};
            ["debug", "info", "warn", "error", "log", "assert"].forEach(function(t) {
                t in e.console && n[t].__sentry_original__ && (r[t] = n[t], n[t] = n[t].__sentry_original__)
            });
            var o = t();
            return Object.keys(r).forEach(function(t) {
                n[t] = r[t]
            }), o
        }

        function p(t, e, n) {
            t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].value = t.exception.values[0].value || e || "", t.exception.values[0].type = t.exception.values[0].type || n || "Error"
        }

        function f(e, n) {
            void 0 === n && (n = {});
            try {
                e.exception.values[0].mechanism = e.exception.values[0].mechanism || {}, Object.keys(n).forEach(function(t) {
                    e.exception.values[0].mechanism[t] = n[t]
                })
            } catch (t) {}
        }

        function d() {
            try {
                return document.location.href
            } catch (t) {
                return ""
            }
        }

        function h(t) {
            try {
                for (var e = t, n = [], r = 0, o = 0, i = " > ".length, a = void 0; e && r++ < 5 && !("html" === (a = v(e)) || 1 < r && 80 <= o + n.length * i + a.length);) n.push(a), o += a.length, e = e.parentNode;
                return n.reverse().join(" > ")
            } catch (t) {
                return "<unknown>"
            }
        }

        function v(t) {
            var e, n, r, o, i, a = t,
                s = [];
            if (!a || !a.tagName) return "";
            if (s.push(a.tagName.toLowerCase()), a.id && s.push("#" + a.id), (e = a.className) && Object(u.k)(e))
                for (n = e.split(/\s+/), i = 0; i < n.length; i++) s.push("." + n[i]);
            var c = ["type", "name", "title", "alt"];
            for (i = 0; i < c.length; i++) r = c[i], (o = a.getAttribute(r)) && s.push("[" + r + '="' + o + '"]');
            return s.join("")
        }
        var _ = Date.now(),
            y = 0,
            g = {
                now: function() {
                    var t = Date.now() - _;
                    return t < y && (t = y), y = t
                },
                timeOrigin: _
            },
            m = function() {
                if (r()) try {
                    return function(t, e) {
                        return t.require(e)
                    }(n, "perf_hooks").performance
                } catch (t) {
                    return g
                }
                var t = i().performance;
                return t && t.now ? (void 0 === t.timeOrigin && (t.timeOrigin = t.timing && t.timing.navigationStart || _), t) : g
            }();

        function b() {
            return (m.timeOrigin + m.now()) / 1e3
        }
        var E = 6e4;

        function x(t, e) {
            if (!e) return E;
            var n = parseInt("" + e, 10);
            if (!isNaN(n)) return 1e3 * n;
            var r = Date.parse("" + e);
            return isNaN(r) ? E : r - t
        }
        var O = "<anonymous>";

        function j(t) {
            try {
                return t && "function" == typeof t && t.name || O
            } catch (t) {
                return O
            }
        }
    }).call(this, S(39), S(25), S(40)(t))
}, function(t, e) {
    t.exports = HeaderScripts
}, function(t, v, _) {
    "use strict";
    (function(n) {
        _.d(v, "b", function() {
            return t
        }), _.d(v, "e", function() {
            return e
        }), _.d(v, "d", function() {
            return s
        }), _.d(v, "c", function() {
            return d
        }), _.d(v, "a", function() {
            return h
        });
        _(0);
        var c = _(2),
            u = _(28),
            a = _(3),
            i = _(7);

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function t(t, e, n) {
            if (e in t) {
                var r = t[e],
                    o = n(r);
                if ("function" == typeof o) try {
                    o.prototype = o.prototype || {}, Object.defineProperties(o, {
                        __sentry_original__: {
                            enumerable: !1,
                            value: r
                        }
                    })
                } catch (t) {}
                t[e] = o
            }
        }

        function e(e) {
            return Object.keys(e).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
            }).join("&")
        }

        function l(t) {
            if (Object(c.d)(t)) {
                var e = t,
                    n = {
                        message: e.message,
                        name: e.name,
                        stack: e.stack
                    };
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            if (Object(c.f)(t)) {
                var o = t,
                    i = {};
                i.type = o.type;
                try {
                    i.target = Object(c.c)(o.target) ? Object(a.h)(o.target) : Object.prototype.toString.call(o.target)
                } catch (t) {
                    i.target = "<unknown>"
                }
                try {
                    i.currentTarget = Object(c.c)(o.currentTarget) ? Object(a.h)(o.currentTarget) : Object.prototype.toString.call(o.currentTarget)
                } catch (t) {
                    i.currentTarget = "<unknown>"
                }
                for (var r in "undefined" != typeof CustomEvent && Object(c.g)(t, CustomEvent) && (i.detail = o.detail), o) Object.prototype.hasOwnProperty.call(o, r) && (i[r] = o);
                return i
            }
            return t
        }

        function o(t) {
            return function(t) {
                return ~-encodeURI(t).split(/%..|./).length
            }(JSON.stringify(t))
        }

        function s(t, e, n) {
            void 0 === e && (e = 3), void 0 === n && (n = 102400);
            var r = d(t, e);
            return o(r) > n ? s(t, e - 1, n) : r
        }

        function p(t, e) {
            return "domain" === e && t && "object" === r(t) && t._events ? "[Domain]" : "domainEmitter" === e ? "[DomainEmitter]" : void 0 !== n && t === n ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : Object(c.l)(t) ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + Object(a.e)(t) + "]" : t
        }

        function f(t, e, n, r) {
            if (void 0 === n && (n = 1 / 0), void 0 === r && (r = new u.a), 0 === n) return function(t) {
                var e = Object.prototype.toString.call(t);
                if ("string" == typeof t) return t;
                if ("[object Object]" === e) return "[Object]";
                if ("[object Array]" === e) return "[Array]";
                var n = p(t);
                return Object(c.i)(n) ? n : e
            }(e);
            if (null != e && "function" == typeof e.toJSON) return e.toJSON();
            var o = p(e, t);
            if (Object(c.i)(o)) return o;
            var i = l(e),
                a = Array.isArray(e) ? [] : {};
            if (r.memoize(e)) return "[Circular ~]";
            for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (a[s] = f(s, i[s], n - 1, r));
            return r.unmemoize(e), a
        }

        function d(t, n) {
            try {
                return JSON.parse(JSON.stringify(t, function(t, e) {
                    return f(t, e, n)
                }))
            } catch (t) {
                return "**non-serializable**"
            }
        }

        function h(t, e) {
            void 0 === e && (e = 40);
            var n = Object.keys(l(t));
            if (n.sort(), !n.length) return "[object has no keys]";
            if (n[0].length >= e) return Object(i.d)(n[0], e);
            for (var r = n.length; 0 < r; r--) {
                var o = n.slice(0, r).join(", ");
                if (!(o.length > e)) return r === n.length ? o : Object(i.d)(o, e)
            }
            return ""
        }
    }).call(this, _(25))
}, , function(t, e, n) {
    "use strict";
    n.d(e, "d", function() {
        return o
    }), n.d(e, "c", function() {
        return i
    }), n.d(e, "b", function() {
        return a
    }), n.d(e, "a", function() {
        return s
    });
    var r = n(2);

    function o(t, e) {
        return void 0 === e && (e = 0), "string" != typeof t || 0 === e ? t : t.length <= e ? t : t.substr(0, e) + "..."
    }

    function i(t, e) {
        var n = t,
            r = n.length;
        if (r <= 150) return n;
        r < e && (e = r);
        var o = Math.max(e - 60, 0);
        o < 5 && (o = 0);
        var i = Math.min(o + 140, r);
        return r - 5 < i && (i = r), i === r && (o = Math.max(i - 140, 0)), n = n.slice(o, i), 0 < o && (n = "'{snip} " + n), i < r && (n += " {snip}"), n
    }

    function a(t, e) {
        if (!Array.isArray(t)) return "";
        for (var n = [], r = 0; r < t.length; r++) {
            var o = t[r];
            try {
                n.push(String(o))
            } catch (t) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(e)
    }

    function s(t, e) {
        return !!Object(r.k)(t) && (Object(r.j)(e) ? e.test(t) : "string" == typeof e && -1 !== t.indexOf(e))
    }
}, , , , , , , function(t, e) {
    t.exports = Roblox
}, , , , , , , , , , , function(t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (r = window)
    }
    t.exports = r
}, , , function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = (o.prototype.memoize = function(t) {
        if (this._hasWeakSet) return !!this._inner.has(t) || (this._inner.add(t), !1);
        for (var e = 0; e < this._inner.length; e++)
            if (this._inner[e] === t) return !0;
        return this._inner.push(t), !1
    }, o.prototype.unmemoize = function(t) {
        if (this._hasWeakSet) this._inner.delete(t);
        else
            for (var e = 0; e < this._inner.length; e++)
                if (this._inner[e] === t) {
                    this._inner.splice(e, 1);
                    break
                }
    }, o);

    function o() {
        this._hasWeakSet = "function" == typeof WeakSet, this._inner = this._hasWeakSet ? new WeakSet : []
    }
}, , , , , , , , , , function(t, e, n) {
    window.Sentry = n(41)
}, function(t, e) {
    var n, r, o = t.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            r = a
        }
    }();
    var c, u = [],
        l = !1,
        p = -1;

    function f() {
        l && c && (l = !1, c.length ? u = c.concat(u) : p = -1, u.length && d())
    }

    function d() {
        if (!l) {
            var t = s(f);
            l = !0;
            for (var e = u.length; e;) {
                for (c = u, u = []; ++p < e;) c && c[p].run();
                p = -1, e = u.length
            }
            c = null, l = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(t)
        }
    }

    function h(t, e) {
        this.fun = t, this.array = e
    }

    function v() {}
    o.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new h(t, e)), 1 !== u.length || l || s(d)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(t) {
        return []
    }, o.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {
                enumerable: !0
            }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = {};
    n.r(r), n.d(r, "FunctionToString", function() {
        return c
    }), n.d(r, "InboundFilters", function() {
        return A
    });
    var o = {};
    n.r(o), n.d(o, "GlobalHandlers", function() {
        return Ce
    }), n.d(o, "TryCatch", function() {
        return De
    }), n.d(o, "Breadcrumbs", function() {
        return je
    }), n.d(o, "LinkedErrors", function() {
        return Pe
    }), n.d(o, "UserAgent", function() {
        return Fe
    });
    var i = {};
    n.r(i), n.d(i, "BaseTransport", function() {
        return Ut
    }), n.d(i, "FetchTransport", function() {
        return At
    }), n.d(i, "XHRTransport", function() {
        return Bt
    });
    var a, s = {};
    n.r(s), n.d(s, "Severity", function() {
        return rt
    }), n.d(s, "Status", function() {
        return V
    }), n.d(s, "addGlobalEventProcessor", function() {
        return b
    }), n.d(s, "addBreadcrumb", function() {
        return Vt
    }), n.d(s, "captureException", function() {
        return Xt
    }), n.d(s, "captureEvent", function() {
        return zt
    }), n.d(s, "captureMessage", function() {
        return Jt
    }), n.d(s, "configureScope", function() {
        return $t
    }), n.d(s, "getHubFromCarrier", function() {
        return U
    }), n.d(s, "getCurrentHub", function() {
        return N
    }), n.d(s, "Hub", function() {
        return k
    }), n.d(s, "makeMain", function() {
        return I
    }), n.d(s, "Scope", function() {
        return y
    }), n.d(s, "startTransaction", function() {
        return oe
    }), n.d(s, "setContext", function() {
        return Kt
    }), n.d(s, "setExtra", function() {
        return te
    }), n.d(s, "setExtras", function() {
        return Qt
    }), n.d(s, "setTag", function() {
        return ee
    }), n.d(s, "setTags", function() {
        return Zt
    }), n.d(s, "setUser", function() {
        return ne
    }), n.d(s, "withScope", function() {
        return re
    }), n.d(s, "BrowserClient", function() {
        return Re
    }), n.d(s, "injectReportDialog", function() {
        return ce
    }), n.d(s, "eventFromException", function() {
        return jt
    }), n.d(s, "eventFromMessage", function() {
        return wt
    }), n.d(s, "defaultIntegrations", function() {
        return He
    }), n.d(s, "forceLoad", function() {
        return Ge
    }), n.d(s, "init", function() {
        return qe
    }), n.d(s, "lastEventId", function() {
        return Ye
    }), n.d(s, "onLoad", function() {
        return Xe
    }), n.d(s, "showReportDialog", function() {
        return We
    }), n.d(s, "flush", function() {
        return Je
    }), n.d(s, "close", function() {
        return ze
    }), n.d(s, "wrap", function() {
        return $e
    }), n.d(s, "SDK_NAME", function() {
        return ke
    }), n.d(s, "SDK_VERSION", function() {
        return Te
    }), n.d(s, "Integrations", function() {
        return Qe
    }), n.d(s, "Transports", function() {
        return i
    });
    var c = (u.prototype.setupOnce = function() {
        a = Function.prototype.toString, Function.prototype.toString = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = this.__sentry_original__ || this;
            return a.apply(n, t)
        }
    }, u.id = "FunctionToString", u);

    function u() {
        this.name = u.id
    }
    var l, p, h = n(0),
        f = n(2);
    (p = l = l || {}).PENDING = "PENDING", p.RESOLVED = "RESOLVED", p.REJECTED = "REJECTED";
    var d = (v.prototype.toString = function() {
        return "[object SyncPromise]"
    }, v.resolve = function(e) {
        return new v(function(t) {
            t(e)
        })
    }, v.reject = function(n) {
        return new v(function(t, e) {
            e(n)
        })
    }, v.all = function(t) {
        return new v(function(n, r) {
            if (Array.isArray(t))
                if (0 !== t.length) {
                    var o = t.length,
                        i = [];
                    t.forEach(function(t, e) {
                        v.resolve(t).then(function(t) {
                            i[e] = t, 0 == (o -= 1) && n(i)
                        }).then(null, r)
                    })
                } else n([]);
            else r(new TypeError("Promise.all requires an array as input."))
        })
    }, v.prototype.then = function(r, o) {
        var t = this;
        return new v(function(e, n) {
            t._attachHandler({
                done: !1,
                onfulfilled: function(t) {
                    if (r) try {
                        return void e(r(t))
                    } catch (t) {
                        return void n(t)
                    } else e(t)
                },
                onrejected: function(t) {
                    if (o) try {
                        return void e(o(t))
                    } catch (t) {
                        return void n(t)
                    } else n(t)
                }
            })
        })
    }, v.prototype.catch = function(t) {
        return this.then(function(t) {
            return t
        }, t)
    }, v.prototype.finally = function(o) {
        var i = this;
        return new v(function(t, e) {
            var n, r;
            return i.then(function(t) {
                r = !1, n = t, o && o()
            }, function(t) {
                r = !0, n = t, o && o()
            }).then(function() {
                r ? e(n) : t(n)
            })
        })
    }, v);

    function v(t) {
        var n = this;
        this._state = l.PENDING, this._handlers = [], this._resolve = function(t) {
            n._setResult(l.RESOLVED, t)
        }, this._reject = function(t) {
            n._setResult(l.REJECTED, t)
        }, this._setResult = function(t, e) {
            n._state === l.PENDING && (Object(f.m)(e) ? e.then(n._resolve, n._reject) : (n._state = t, n._value = e, n._executeHandlers()))
        }, this._attachHandler = function(t) {
            n._handlers = n._handlers.concat(t), n._executeHandlers()
        }, this._executeHandlers = function() {
            if (n._state !== l.PENDING) {
                var t = n._handlers.slice();
                n._handlers = [], t.forEach(function(t) {
                    t.done || (n._state === l.RESOLVED && t.onfulfilled && t.onfulfilled(n._value), n._state === l.REJECTED && t.onrejected && t.onrejected(n._value), t.done = !0)
                })
            }
        };
        try {
            t(this._resolve, this._reject)
        } catch (t) {
            this._reject(t)
        }
    }
    var _ = n(3),
        y = (g.prototype.addScopeListener = function(t) {
            this._scopeListeners.push(t)
        }, g.prototype.addEventProcessor = function(t) {
            return this._eventProcessors.push(t), this
        }, g.prototype._notifyScopeListeners = function() {
            var e = this;
            this._notifyingListeners || (this._notifyingListeners = !0, setTimeout(function() {
                e._scopeListeners.forEach(function(t) {
                    t(e)
                }), e._notifyingListeners = !1
            }))
        }, g.prototype._notifyEventProcessors = function(o, i, a, s) {
            var c = this;
            return void 0 === s && (s = 0), new d(function(e, t) {
                var n = o[s];
                if (null === i || "function" != typeof n) e(i);
                else {
                    var r = n(h.a({}, i), a);
                    Object(f.m)(r) ? r.then(function(t) {
                        return c._notifyEventProcessors(o, t, a, s + 1).then(e)
                    }).then(null, t) : c._notifyEventProcessors(o, r, a, s + 1).then(e).then(null, t)
                }
            })
        }, g.prototype.setUser = function(t) {
            return this._user = t || {}, this._notifyScopeListeners(), this
        }, g.prototype.setTags = function(t) {
            return this._tags = h.a({}, this._tags, t), this._notifyScopeListeners(), this
        }, g.prototype.setTag = function(t, e) {
            var n;
            return this._tags = h.a({}, this._tags, ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
        }, g.prototype.setExtras = function(t) {
            return this._extra = h.a({}, this._extra, t), this._notifyScopeListeners(), this
        }, g.prototype.setExtra = function(t, e) {
            var n;
            return this._extra = h.a({}, this._extra, ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
        }, g.prototype.setFingerprint = function(t) {
            return this._fingerprint = t, this._notifyScopeListeners(), this
        }, g.prototype.setLevel = function(t) {
            return this._level = t, this._notifyScopeListeners(), this
        }, g.prototype.setTransactionName = function(t) {
            return this._transactionName = t, this._notifyScopeListeners(), this
        }, g.prototype.setTransaction = function(t) {
            return this.setTransactionName(t)
        }, g.prototype.setContext = function(t, e) {
            var n;
            return this._contexts = h.a({}, this._contexts, ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
        }, g.prototype.setSpan = function(t) {
            return this._span = t, this._notifyScopeListeners(), this
        }, g.prototype.getSpan = function() {
            return this._span
        }, g.prototype.getTransaction = function() {
            var t = this.getSpan();
            if (t && t.spanRecorder && t.spanRecorder.spans[0]) return t.spanRecorder.spans[0]
        }, g.clone = function(t) {
            var e = new g;
            return t && (e._breadcrumbs = h.d(t._breadcrumbs), e._tags = h.a({}, t._tags), e._extra = h.a({}, t._extra), e._contexts = h.a({}, t._contexts), e._user = t._user, e._level = t._level, e._span = t._span, e._transactionName = t._transactionName, e._fingerprint = t._fingerprint, e._eventProcessors = h.d(t._eventProcessors)), e
        }, g.prototype.update = function(t) {
            if (!t) return this;
            if ("function" != typeof t) return t instanceof g ? (this._tags = h.a({}, this._tags, t._tags), this._extra = h.a({}, this._extra, t._extra), this._contexts = h.a({}, this._contexts, t._contexts), t._user && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint)) : Object(f.h)(t) && (t = t, this._tags = h.a({}, this._tags, t.tags), this._extra = h.a({}, this._extra, t.extra), this._contexts = h.a({}, this._contexts, t.contexts), t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint)), this;
            var e = t(this);
            return e instanceof g ? e : this
        }, g.prototype.clear = function() {
            return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._span = void 0, this._notifyScopeListeners(), this
        }, g.prototype.addBreadcrumb = function(t, e) {
            var n = h.a({
                timestamp: Object(_.l)()
            }, t);
            return this._breadcrumbs = void 0 !== e && 0 <= e ? h.d(this._breadcrumbs, [n]).slice(-e) : h.d(this._breadcrumbs, [n]), this._notifyScopeListeners(), this
        }, g.prototype.clearBreadcrumbs = function() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }, g.prototype._applyFingerprint = function(t) {
            t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
        }, g.prototype.applyToEvent = function(t, e) {
            return this._extra && Object.keys(this._extra).length && (t.extra = h.a({}, this._extra, t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = h.a({}, this._tags, t.tags)), this._user && Object.keys(this._user).length && (t.user = h.a({}, this._user, t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = h.a({}, this._contexts, t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span && (t.contexts = h.a({
                trace: this._span.getTraceContext()
            }, t.contexts)), this._applyFingerprint(t), t.breadcrumbs = h.d(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = 0 < t.breadcrumbs.length ? t.breadcrumbs : void 0, this._notifyEventProcessors(h.d(m(), this._eventProcessors), t, e)
        }, g);

    function g() {
        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}
    }

    function m() {
        var t = Object(_.f)();
        return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
    }

    function b(t) {
        m().push(t)
    }
    var E = Object(_.f)(),
        x = "Sentry Logger ",
        O = (j.prototype.disable = function() {
            this._enabled = !1
        }, j.prototype.enable = function() {
            this._enabled = !0
        }, j.prototype.log = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this._enabled && Object(_.c)(function() {
                E.console.log(x + "[Log]: " + t.join(" "))
            })
        }, j.prototype.warn = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this._enabled && Object(_.c)(function() {
                E.console.warn(x + "[Warn]: " + t.join(" "))
            })
        }, j.prototype.error = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this._enabled && Object(_.c)(function() {
                E.console.error(x + "[Error]: " + t.join(" "))
            })
        }, j);

    function j() {
        this._enabled = !1
    }
    E.__SENTRY__ = E.__SENTRY__ || {};
    var w = E.__SENTRY__.logger || (E.__SENTRY__.logger = new O),
        S = 3,
        k = (T.prototype._invokeClient = function(t) {
            for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            var o = this.getStackTop();
            o && o.client && o.client[t] && (e = o.client)[t].apply(e, h.d(n, [o.scope]))
        }, T.prototype.isOlderThan = function(t) {
            return this._version < t
        }, T.prototype.bindClient = function(t) {
            (this.getStackTop().client = t) && t.setupIntegrations && t.setupIntegrations()
        }, T.prototype.pushScope = function() {
            var t = this.getStack(),
                e = 0 < t.length ? t[t.length - 1].scope : void 0,
                n = y.clone(e);
            return this.getStack().push({
                client: this.getClient(),
                scope: n
            }), n
        }, T.prototype.popScope = function() {
            return void 0 !== this.getStack().pop()
        }, T.prototype.withScope = function(t) {
            var e = this.pushScope();
            try {
                t(e)
            } finally {
                this.popScope()
            }
        }, T.prototype.getClient = function() {
            return this.getStackTop().client
        }, T.prototype.getScope = function() {
            return this.getStackTop().scope
        }, T.prototype.getStack = function() {
            return this._stack
        }, T.prototype.getStackTop = function() {
            return this._stack[this._stack.length - 1]
        }, T.prototype.captureException = function(t, e) {
            var n = this._lastEventId = Object(_.m)(),
                r = e;
            if (!e) {
                var o = void 0;
                try {
                    throw new Error("Sentry syntheticException")
                } catch (t) {
                    o = t
                }
                r = {
                    originalException: t,
                    syntheticException: o
                }
            }
            return this._invokeClient("captureException", t, h.a({}, r, {
                event_id: n
            })), n
        }, T.prototype.captureMessage = function(t, e, n) {
            var r = this._lastEventId = Object(_.m)(),
                o = n;
            if (!n) {
                var i = void 0;
                try {
                    throw new Error(t)
                } catch (t) {
                    i = t
                }
                o = {
                    originalException: t,
                    syntheticException: i
                }
            }
            return this._invokeClient("captureMessage", t, e, h.a({}, o, {
                event_id: r
            })), r
        }, T.prototype.captureEvent = function(t, e) {
            var n = this._lastEventId = Object(_.m)();
            return this._invokeClient("captureEvent", t, h.a({}, e, {
                event_id: n
            })), n
        }, T.prototype.lastEventId = function() {
            return this._lastEventId
        }, T.prototype.addBreadcrumb = function(t, e) {
            var n = this.getStackTop();
            if (n.scope && n.client) {
                var r = n.client.getOptions && n.client.getOptions() || {},
                    o = r.beforeBreadcrumb,
                    i = void 0 === o ? null : o,
                    a = r.maxBreadcrumbs,
                    s = void 0 === a ? 100 : a;
                if (!(s <= 0)) {
                    var c = Object(_.l)(),
                        u = h.a({
                            timestamp: c
                        }, t),
                        l = i ? Object(_.c)(function() {
                            return i(u, e)
                        }) : u;
                    null !== l && n.scope.addBreadcrumb(l, Math.min(s, 100))
                }
            }
        }, T.prototype.setUser = function(t) {
            var e = this.getStackTop();
            e.scope && e.scope.setUser(t)
        }, T.prototype.setTags = function(t) {
            var e = this.getStackTop();
            e.scope && e.scope.setTags(t)
        }, T.prototype.setExtras = function(t) {
            var e = this.getStackTop();
            e.scope && e.scope.setExtras(t)
        }, T.prototype.setTag = function(t, e) {
            var n = this.getStackTop();
            n.scope && n.scope.setTag(t, e)
        }, T.prototype.setExtra = function(t, e) {
            var n = this.getStackTop();
            n.scope && n.scope.setExtra(t, e)
        }, T.prototype.setContext = function(t, e) {
            var n = this.getStackTop();
            n.scope && n.scope.setContext(t, e)
        }, T.prototype.configureScope = function(t) {
            var e = this.getStackTop();
            e.scope && e.client && t(e.scope)
        }, T.prototype.run = function(t) {
            var e = I(this);
            try {
                t(this)
            } finally {
                I(e)
            }
        }, T.prototype.getIntegration = function(e) {
            var t = this.getClient();
            if (!t) return null;
            try {
                return t.getIntegration(e)
            } catch (t) {
                return w.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null
            }
        }, T.prototype.startSpan = function(t) {
            return this._callExtensionMethod("startSpan", t)
        }, T.prototype.startTransaction = function(t) {
            return this._callExtensionMethod("startTransaction", t)
        }, T.prototype.traceHeaders = function() {
            return this._callExtensionMethod("traceHeaders")
        }, T.prototype._callExtensionMethod = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            var r = R().__SENTRY__;
            if (r && r.extensions && "function" == typeof r.extensions[t]) return r.extensions[t].apply(this, e);
            w.warn("Extension method " + t + " couldn't be found, doing nothing.")
        }, T);

    function T(t, e, n) {
        void 0 === e && (e = new y), void 0 === n && (n = S), this._version = n, this._stack = [], this._stack.push({
            client: t,
            scope: e
        }), this.bindClient(t)
    }

    function R() {
        var t = Object(_.f)();
        return t.__SENTRY__ = t.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, t
    }

    function I(t) {
        var e = R(),
            n = U(e);
        return C(e, t), n
    }

    function N() {
        var t = R();
        return D(t) && !U(t).isOlderThan(S) || C(t, new k), Object(_.i)() ? function(e) {
            try {
                var t = R().__SENTRY__;
                if (!t || !t.extensions || !t.extensions.domain) return U(e);
                var n = t.extensions.domain.active;
                if (!n) return U(e);
                if (!D(n) || U(n).isOlderThan(S)) {
                    var r = U(e).getStackTop();
                    C(n, new k(r.client, y.clone(r.scope)))
                }
                return U(n)
            } catch (t) {
                return U(e)
            }
        }(t) : U(t)
    }

    function D(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function U(t) {
        return t && t.__SENTRY__ && t.__SENTRY__.hub || (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new k), t.__SENTRY__.hub
    }

    function C(t, e) {
        return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = e, !0)
    }
    var L = n(7),
        P = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        A = (M.prototype.setupOnce = function() {
            b(function(t) {
                var e = N();
                if (!e) return t;
                var n = e.getIntegration(M);
                if (n) {
                    var r = e.getClient(),
                        o = r ? r.getOptions() : {},
                        i = n._mergeOptions(o);
                    if (n._shouldDropEvent(t, i)) return null
                }
                return t
            })
        }, M.prototype._shouldDropEvent = function(t, e) {
            return this._isSentryError(t, e) ? (w.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(_.d)(t)), !0) : this._isIgnoredError(t, e) ? (w.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(_.d)(t)), !0) : this._isDeniedUrl(t, e) ? (w.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Object(_.d)(t) + ".\nUrl: " + this._getEventFilterUrl(t)), !0) : !this._isAllowedUrl(t, e) && (w.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Object(_.d)(t) + ".\nUrl: " + this._getEventFilterUrl(t)), !0)
        }, M.prototype._isSentryError = function(t, e) {
            if (!e.ignoreInternal) return !1;
            try {
                return t && t.exception && t.exception.values && t.exception.values[0] && "SentryError" === t.exception.values[0].type || !1
            } catch (t) {
                return !1
            }
        }, M.prototype._isIgnoredError = function(t, n) {
            return !(!n.ignoreErrors || !n.ignoreErrors.length) && this._getPossibleEventMessages(t).some(function(e) {
                return n.ignoreErrors.some(function(t) {
                    return Object(L.a)(e, t)
                })
            })
        }, M.prototype._isDeniedUrl = function(t, e) {
            if (!e.denyUrls || !e.denyUrls.length) return !1;
            var n = this._getEventFilterUrl(t);
            return !!n && e.denyUrls.some(function(t) {
                return Object(L.a)(n, t)
            })
        }, M.prototype._isAllowedUrl = function(t, e) {
            if (!e.allowUrls || !e.allowUrls.length) return !0;
            var n = this._getEventFilterUrl(t);
            return !n || e.allowUrls.some(function(t) {
                return Object(L.a)(n, t)
            })
        }, M.prototype._mergeOptions = function(t) {
            return void 0 === t && (t = {}), {
                allowUrls: h.d(this._options.whitelistUrls || [], this._options.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                denyUrls: h.d(this._options.blacklistUrls || [], this._options.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                ignoreErrors: h.d(this._options.ignoreErrors || [], t.ignoreErrors || [], P),
                ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
            }
        }, M.prototype._getPossibleEventMessages = function(e) {
            if (e.message) return [e.message];
            if (e.exception) try {
                var t = e.exception.values && e.exception.values[0] || {},
                    n = t.type,
                    r = void 0 === n ? "" : n,
                    o = t.value,
                    i = void 0 === o ? "" : o;
                return ["" + i, r + ": " + i]
            } catch (t) {
                return w.error("Cannot extract message for event " + Object(_.d)(e)), []
            }
            return []
        }, M.prototype._getEventFilterUrl = function(e) {
            try {
                if (e.stacktrace) {
                    var t = e.stacktrace.frames;
                    return t && t[t.length - 1].filename || null
                }
                if (e.exception) {
                    var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
                    return n && n[n.length - 1].filename || null
                }
                return null
            } catch (t) {
                return w.error("Cannot extract url for event " + Object(_.d)(e)), null
            }
        }, M.id = "InboundFilters", M);

    function M(t) {
        void 0 === t && (t = {}), this._options = t, this.name = M.id
    }
    var F = Object.setPrototypeOf || ({
            __proto__: []
        }
        instanceof Array ? function(t, e) {
            return t.__proto__ = e, t
        } : function(t, e) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
            return t
        });
    var B, H = (B = Error, h.b(q, B), q);

    function q(t) {
        var e = this.constructor,
            n = B.call(this, t) || this;
        return n.message = t, n.name = e.prototype.constructor.name, F(n, e.prototype), n
    }
    var W = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
        Y = "Invalid Dsn",
        G = (X.prototype.toString = function(t) {
            void 0 === t && (t = !1);
            var e = this,
                n = e.host,
                r = e.path,
                o = e.pass,
                i = e.port,
                a = e.projectId;
            return e.protocol + "://" + e.user + (t && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + a
        }, X.prototype._fromString = function(t) {
            var e = W.exec(t);
            if (!e) throw new H(Y);
            var n = h.c(e.slice(1), 6),
                r = n[0],
                o = n[1],
                i = n[2],
                a = void 0 === i ? "" : i,
                s = n[3],
                c = n[4],
                u = void 0 === c ? "" : c,
                l = "",
                p = n[5],
                f = p.split("/");
            if (1 < f.length && (l = f.slice(0, -1).join("/"), p = f.pop()), p) {
                var d = p.match(/^\d+/);
                d && (p = d[0])
            }
            this._fromComponents({
                host: s,
                pass: a,
                path: l,
                projectId: p,
                port: u,
                protocol: r,
                user: o
            })
        }, X.prototype._fromComponents = function(t) {
            this.protocol = t.protocol, this.user = t.user, this.pass = t.pass || "", this.host = t.host, this.port = t.port || "", this.path = t.path || "", this.projectId = t.projectId
        }, X.prototype._validate = function() {
            var e = this;
            if (["protocol", "user", "host", "projectId"].forEach(function(t) {
                    if (!e[t]) throw new H(Y + ": " + t + " missing")
                }), !this.projectId.match(/^\d+$/)) throw new H(Y + ": Invalid projectId " + this.projectId);
            if ("http" !== this.protocol && "https" !== this.protocol) throw new H(Y + ": Invalid protocol " + this.protocol);
            if (this.port && isNaN(parseInt(this.port, 10))) throw new H(Y + ": Invalid port " + this.port)
        }, X);

    function X(t) {
        "string" == typeof t ? this._fromString(t) : this._fromComponents(t), this._validate()
    }
    var J = n(5),
        z = [];

    function $(t) {
        var e = {};
        return function(t) {
            var e = t.defaultIntegrations && h.d(t.defaultIntegrations) || [],
                n = t.integrations,
                r = [];
            if (Array.isArray(n)) {
                var o = n.map(function(t) {
                        return t.name
                    }),
                    i = [];
                e.forEach(function(t) {
                    -1 === o.indexOf(t.name) && -1 === i.indexOf(t.name) && (r.push(t), i.push(t.name))
                }), n.forEach(function(t) {
                    -1 === i.indexOf(t.name) && (r.push(t), i.push(t.name))
                })
            } else r = "function" == typeof n ? (r = n(e), Array.isArray(r) ? r : [r]) : h.d(e);
            var a = r.map(function(t) {
                return t.name
            });
            return -1 !== a.indexOf("Debug") && r.push.apply(r, h.d(r.splice(a.indexOf("Debug"), 1))), r
        }(t).forEach(function(t) {
            ! function(t) {
                -1 === z.indexOf(t.name) && (t.setupOnce(b, N), z.push(t.name), w.log("Integration installed: " + t.name))
            }(e[t.name] = t)
        }), e
    }
    var V, K, Q, Z = (tt.prototype.captureException = function(t, e, n) {
        var r = this,
            o = e && e.event_id;
        return this._processing = !0, this._getBackend().eventFromException(t, e).then(function(t) {
            o = r.captureEvent(t, e, n)
        }), o
    }, tt.prototype.captureMessage = function(t, e, n, r) {
        var o = this,
            i = n && n.event_id;
        return this._processing = !0, (Object(f.i)(t) ? this._getBackend().eventFromMessage("" + t, e, n) : this._getBackend().eventFromException(t, n)).then(function(t) {
            i = o.captureEvent(t, n, r)
        }), i
    }, tt.prototype.captureEvent = function(t, e, n) {
        var r = this,
            o = e && e.event_id;
        return this._processing = !0, this._processEvent(t, e, n).then(function(t) {
            o = t && t.event_id, r._processing = !1
        }).then(null, function(t) {
            w.error(t), r._processing = !1
        }), o
    }, tt.prototype.getDsn = function() {
        return this._dsn
    }, tt.prototype.getOptions = function() {
        return this._options
    }, tt.prototype.flush = function(t) {
        var n = this;
        return this._isClientProcessing(t).then(function(e) {
            return clearInterval(e.interval), n._getBackend().getTransport().close(t).then(function(t) {
                return e.ready && t
            })
        })
    }, tt.prototype.close = function(t) {
        var e = this;
        return this.flush(t).then(function(t) {
            return e.getOptions().enabled = !1, t
        })
    }, tt.prototype.setupIntegrations = function() {
        this._isEnabled() && (this._integrations = $(this._options))
    }, tt.prototype.getIntegration = function(e) {
        try {
            return this._integrations[e.id] || null
        } catch (t) {
            return w.warn("Cannot retrieve integration " + e.id + " from the current Client"), null
        }
    }, tt.prototype._isClientProcessing = function(r) {
        var o = this;
        return new d(function(t) {
            var e = 0,
                n = 0;
            clearInterval(n), n = setInterval(function() {
                o._processing ? (e += 1, r && r <= e && t({
                    interval: n,
                    ready: !1
                })) : t({
                    interval: n,
                    ready: !0
                })
            }, 1)
        })
    }, tt.prototype._getBackend = function() {
        return this._backend
    }, tt.prototype._isEnabled = function() {
        return !1 !== this.getOptions().enabled && void 0 !== this._dsn
    }, tt.prototype._prepareEvent = function(t, e, n) {
        var r = this,
            o = this.getOptions().normalizeDepth,
            i = void 0 === o ? 3 : o,
            a = h.a({}, t, {
                event_id: t.event_id || (n && n.event_id ? n.event_id : Object(_.m)()),
                timestamp: t.timestamp || Object(_.l)()
            });
        this._applyClientOptions(a), this._applyIntegrationsMetadata(a);
        var s = e;
        n && n.captureContext && (s = y.clone(s).update(n.captureContext));
        var c = d.resolve(a);
        return s && (c = s.applyToEvent(a, n)), c.then(function(t) {
            return "number" == typeof i && 0 < i ? r._normalizeEvent(t, i) : t
        })
    }, tt.prototype._normalizeEvent = function(t, e) {
        if (!t) return null;
        var n = h.a({}, t, t.breadcrumbs && {
            breadcrumbs: t.breadcrumbs.map(function(t) {
                return h.a({}, t, t.data && {
                    data: Object(J.c)(t.data, e)
                })
            })
        }, t.user && {
            user: Object(J.c)(t.user, e)
        }, t.contexts && {
            contexts: Object(J.c)(t.contexts, e)
        }, t.extra && {
            extra: Object(J.c)(t.extra, e)
        });
        return t.contexts && t.contexts.trace && (n.contexts.trace = t.contexts.trace), n
    }, tt.prototype._applyClientOptions = function(t) {
        var e = this.getOptions(),
            n = e.environment,
            r = e.release,
            o = e.dist,
            i = e.maxValueLength,
            a = void 0 === i ? 250 : i;
        void 0 === t.environment && void 0 !== n && (t.environment = n), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== o && (t.dist = o), t.message && (t.message = Object(L.d)(t.message, a));
        var s = t.exception && t.exception.values && t.exception.values[0];
        s && s.value && (s.value = Object(L.d)(s.value, a));
        var c = t.request;
        c && c.url && (c.url = Object(L.d)(c.url, a))
    }, tt.prototype._applyIntegrationsMetadata = function(t) {
        var e = t.sdk,
            n = Object.keys(this._integrations);
        e && 0 < n.length && (e.integrations = n)
    }, tt.prototype._sendEvent = function(t) {
        this._getBackend().sendEvent(t)
    }, tt.prototype._processEvent = function(t, i, e) {
        var a = this,
            n = this.getOptions(),
            s = n.beforeSend,
            r = n.sampleRate;
        if (!this._isEnabled()) return d.reject("SDK not enabled, will not send event.");
        var c = "transaction" === t.type;
        return !c && "number" == typeof r && Math.random() > r ? d.reject("This event has been sampled, will not send event.") : new d(function(r, o) {
            a._prepareEvent(t, e, i).then(function(t) {
                if (null !== t) {
                    var e = t;
                    if (i && i.data && !0 === i.data.__sentry__ || !s || c) return a._sendEvent(e), void r(e);
                    var n = s(t, i);
                    if (void 0 === n) w.error("`beforeSend` method has to return `null` or a valid event.");
                    else if (Object(f.m)(n)) a._handleAsyncBeforeSend(n, r, o);
                    else {
                        if (null === (e = n)) return w.log("`beforeSend` returned `null`, will not send event."), void r(null);
                        a._sendEvent(e), r(e)
                    }
                } else o("An event processor returned null, will not send event.")
            }).then(null, function(t) {
                a.captureException(t, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: t
                }), o("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
            })
        })
    }, tt.prototype._handleAsyncBeforeSend = function(t, e, n) {
        var r = this;
        t.then(function(t) {
            null !== t ? (r._sendEvent(t), e(t)) : n("`beforeSend` returned `null`, will not send event.")
        }).then(null, function(t) {
            n("beforeSend rejected with " + t)
        })
    }, tt);

    function tt(t, e) {
        this._integrations = {}, this._processing = !1, this._backend = new t(e), (this._options = e).dsn && (this._dsn = new G(e.dsn))
    }(K = V = V || {}).Unknown = "unknown", K.Skipped = "skipped", K.Success = "success", K.RateLimit = "rate_limit", K.Invalid = "invalid", K.Failed = "failed", (Q = V = V || {}).fromHttpCode = function(t) {
        return 200 <= t && t < 300 ? Q.Success : 429 === t ? Q.RateLimit : 400 <= t && t < 500 ? Q.Invalid : 500 <= t ? Q.Failed : Q.Unknown
    };
    var et = (nt.prototype.sendEvent = function(t) {
        return d.resolve({
            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
            status: V.Skipped
        })
    }, nt.prototype.close = function(t) {
        return d.resolve(!0)
    }, nt);

    function nt() {}
    var rt, ot, it, at = (st.prototype._setupTransport = function() {
        return new et
    }, st.prototype.eventFromException = function(t, e) {
        throw new H("Backend has to implement `eventFromException` method")
    }, st.prototype.eventFromMessage = function(t, e, n) {
        throw new H("Backend has to implement `eventFromMessage` method")
    }, st.prototype.sendEvent = function(t) {
        this._transport.sendEvent(t).then(null, function(t) {
            w.error("Error while sending event: " + t)
        })
    }, st.prototype.getTransport = function() {
        return this._transport
    }, st);

    function st(t) {
        this._options = t, this._options.dsn || w.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
    }

    function ct() {
        if (!("fetch" in Object(_.f)())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch (t) {
            return !1
        }
    }

    function ut(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }(ot = rt = rt || {}).Fatal = "fatal", ot.Error = "error", ot.Warning = "warning", ot.Log = "log", ot.Info = "info", ot.Debug = "debug", ot.Critical = "critical", (it = rt = rt || {}).fromString = function(t) {
        switch (t) {
            case "debug":
                return it.Debug;
            case "info":
                return it.Info;
            case "warn":
            case "warning":
                return it.Warning;
            case "error":
                return it.Error;
            case "fatal":
                return it.Fatal;
            case "critical":
                return it.Critical;
            case "log":
            default:
                return it.Log
        }
    };
    var lt = "?",
        pt = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        ft = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
        dt = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        ht = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        vt = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        _t = /Minified React error #\d+;/i;

    function yt(t) {
        var e = null,
            n = 0;
        t && ("number" == typeof t.framesToPop ? n = t.framesToPop : _t.test(t.message) && (n = 1));
        try {
            if (e = function(t) {
                    if (!t || !t.stacktrace) return null;
                    for (var e, n = t.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, i = n.split("\n"), a = [], s = 0; s < i.length; s += 2) {
                        var c = null;
                        (e = r.exec(i[s])) ? c = {
                            url: e[2],
                            func: e[3],
                            args: [],
                            line: +e[1],
                            column: null
                        }: (e = o.exec(i[s])) && (c = {
                            url: e[6],
                            func: e[3] || e[4],
                            args: e[5] ? e[5].split(",") : [],
                            line: +e[1],
                            column: +e[2]
                        }), c && (!c.func && c.line && (c.func = lt), a.push(c))
                    }
                    return a.length ? {
                        message: mt(t),
                        name: t.name,
                        stack: a
                    } : null
                }(t)) return gt(e, n)
        } catch (t) {}
        try {
            if (e = function(t) {
                    if (!t || !t.stack) return null;
                    for (var e, n, r, o = [], i = t.stack.split("\n"), a = 0; a < i.length; ++a) {
                        if (n = pt.exec(i[a])) {
                            var s = n[2] && 0 === n[2].indexOf("native");
                            n[2] && 0 === n[2].indexOf("eval") && (e = vt.exec(n[2])) && (n[2] = e[1], n[3] = e[2], n[4] = e[3]), r = {
                                url: n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
                                func: n[1] || lt,
                                args: s ? [n[2]] : [],
                                line: n[3] ? +n[3] : null,
                                column: n[4] ? +n[4] : null
                            }
                        } else if (n = dt.exec(i[a])) r = {
                            url: n[2],
                            func: n[1] || lt,
                            args: [],
                            line: +n[3],
                            column: n[4] ? +n[4] : null
                        };
                        else {
                            if (!(n = ft.exec(i[a]))) continue;
                            n[3] && -1 < n[3].indexOf(" > eval") && (e = ht.exec(n[3])) ? (n[1] = n[1] || "eval", n[3] = e[1], n[4] = e[2], n[5] = "") : 0 !== a || n[5] || void 0 === t.columnNumber || (o[0].column = t.columnNumber + 1), r = {
                                url: n[3],
                                func: n[1] || lt,
                                args: n[2] ? n[2].split(",") : [],
                                line: n[4] ? +n[4] : null,
                                column: n[5] ? +n[5] : null
                            }
                        }!r.func && r.line && (r.func = lt), o.push(r)
                    }
                    return o.length ? {
                        message: mt(t),
                        name: t.name,
                        stack: o
                    } : null
                }(t)) return gt(e, n)
        } catch (t) {}
        return {
            message: mt(t),
            name: t && t.name,
            stack: [],
            failed: !0
        }
    }

    function gt(e, t) {
        try {
            return h.a({}, e, {
                stack: e.stack.slice(t)
            })
        } catch (t) {
            return e
        }
    }

    function mt(t) {
        var e = t && t.message;
        return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
    }
    var bt = 50;

    function Et(t) {
        var e = Ot(t.stack),
            n = {
                type: t.name,
                value: t.message
            };
        return e && e.length && (n.stacktrace = {
            frames: e
        }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
    }

    function xt(t) {
        return {
            exception: {
                values: [Et(t)]
            }
        }
    }

    function Ot(t) {
        if (!t || !t.length) return [];
        var e = t,
            n = e[0].func || "",
            r = e[e.length - 1].func || "";
        return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1)), -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)), e.slice(0, bt).map(function(t) {
            return {
                colno: null === t.column ? void 0 : t.column,
                filename: t.url || e[0].url,
                function: t.func || "?",
                in_app: !0,
                lineno: null === t.line ? void 0 : t.line
            }
        }).reverse()
    }

    function jt(t, e, n) {
        var r = St(e, n && n.syntheticException || void 0, {
            attachStacktrace: t.attachStacktrace
        });
        return Object(_.a)(r, {
            handled: !0,
            type: "generic"
        }), r.level = rt.Error, n && n.event_id && (r.event_id = n.event_id), d.resolve(r)
    }

    function wt(t, e, n, r) {
        void 0 === n && (n = rt.Info);
        var o = kt(e, r && r.syntheticException || void 0, {
            attachStacktrace: t.attachStacktrace
        });
        return o.level = n, r && r.event_id && (o.event_id = r.event_id), d.resolve(o)
    }

    function St(t, e, n) {
        var r;
        if (void 0 === n && (n = {}), Object(f.e)(t) && t.error) return r = xt(yt(t = t.error));
        if (Object(f.a)(t) || Object(f.b)(t)) {
            var o = t,
                i = o.name || (Object(f.a)(o) ? "DOMError" : "DOMException"),
                a = o.message ? i + ": " + o.message : i;
            return r = kt(a, e, n), Object(_.b)(r, a), r
        }
        return Object(f.d)(t) ? r = xt(yt(t)) : (Object(f.h)(t) || Object(f.f)(t) ? r = function(t, e, n) {
            var r = {
                exception: {
                    values: [{
                        type: Object(f.f)(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Object(J.a)(t)
                    }]
                },
                extra: {
                    __serialized__: Object(J.d)(t)
                }
            };
            if (e) {
                var o = Ot(yt(e).stack);
                r.stacktrace = {
                    frames: o
                }
            }
            return r
        }(t, e, n.rejection) : (r = kt(t, e, n), Object(_.b)(r, "" + t, void 0)), Object(_.a)(r, {
            synthetic: !0
        }), r)
    }

    function kt(t, e, n) {
        void 0 === n && (n = {});
        var r = {
            message: t
        };
        if (n.attachStacktrace && e) {
            var o = Ot(yt(e).stack);
            r.stacktrace = {
                frames: o
            }
        }
        return r
    }

    function Tt(t, e) {
        var n = "transaction" === t.type,
            r = {
                body: JSON.stringify(t),
                url: n ? e.getEnvelopeEndpointWithUrlEncodedAuth() : e.getStoreEndpointWithUrlEncodedAuth()
            };
        if (n) {
            var o = JSON.stringify({
                event_id: t.event_id,
                sent_at: new Date(1e3 * Object(_.l)()).toISOString()
            }) + "\n" + JSON.stringify({
                type: t.type
            }) + "\n" + r.body;
            r.body = o
        }
        return r
    }
    var Rt = (It.prototype.getDsn = function() {
        return this._dsnObject
    }, It.prototype.getBaseApiEndpoint = function() {
        var t = this._dsnObject,
            e = t.protocol ? t.protocol + ":" : "",
            n = t.port ? ":" + t.port : "";
        return e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/"
    }, It.prototype.getStoreEndpoint = function() {
        return this._getIngestEndpoint("store")
    }, It.prototype._getEnvelopeEndpoint = function() {
        return this._getIngestEndpoint("envelope")
    }, It.prototype._getIngestEndpoint = function(t) {
        return "" + this.getBaseApiEndpoint() + this._dsnObject.projectId + "/" + t + "/"
    }, It.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
        return this.getStoreEndpoint() + "?" + this._encodedAuth()
    }, It.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
        return this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
    }, It.prototype._encodedAuth = function() {
        var t = {
            sentry_key: this._dsnObject.user,
            sentry_version: "7"
        };
        return Object(J.e)(t)
    }, It.prototype.getStoreEndpointPath = function() {
        var t = this._dsnObject;
        return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
    }, It.prototype.getRequestHeaders = function(t, e) {
        var n = this._dsnObject,
            r = ["Sentry sentry_version=7"];
        return r.push("sentry_client=" + t + "/" + e), r.push("sentry_key=" + n.user), n.pass && r.push("sentry_secret=" + n.pass), {
            "Content-Type": "application/json",
            "X-Sentry-Auth": r.join(", ")
        }
    }, It.prototype.getReportDialogEndpoint = function(t) {
        void 0 === t && (t = {});
        var e = this._dsnObject,
            n = this.getBaseApiEndpoint() + "embed/error-page/",
            r = [];
        for (var o in r.push("dsn=" + e.toString()), t)
            if ("user" === o) {
                if (!t.user) continue;
                t.user.name && r.push("name=" + encodeURIComponent(t.user.name)), t.user.email && r.push("email=" + encodeURIComponent(t.user.email))
            } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
        return r.length ? n + "?" + r.join("&") : n
    }, It);

    function It(t) {
        this.dsn = t, this._dsnObject = new G(t)
    }
    var Nt = (Dt.prototype.isReady = function() {
        return void 0 === this._limit || this.length() < this._limit
    }, Dt.prototype.add = function(t) {
        var e = this;
        return this.isReady() ? (-1 === this._buffer.indexOf(t) && this._buffer.push(t), t.then(function() {
            return e.remove(t)
        }).then(null, function() {
            return e.remove(t).then(null, function() {})
        }), t) : d.reject(new H("Not adding Promise due to buffer limit reached."))
    }, Dt.prototype.remove = function(t) {
        return this._buffer.splice(this._buffer.indexOf(t), 1)[0]
    }, Dt.prototype.length = function() {
        return this._buffer.length
    }, Dt.prototype.drain = function(n) {
        var r = this;
        return new d(function(t) {
            var e = setTimeout(function() {
                n && 0 < n && t(!1)
            }, n);
            d.all(r._buffer).then(function() {
                clearTimeout(e), t(!0)
            }).then(null, function() {
                t(!0)
            })
        })
    }, Dt);

    function Dt(t) {
        this._limit = t, this._buffer = []
    }
    var Ut = (Ct.prototype.sendEvent = function(t) {
        throw new H("Transport Class has to implement `sendEvent` method")
    }, Ct.prototype.close = function(t) {
        return this._buffer.drain(t)
    }, Ct);

    function Ct(t) {
        this.options = t, this._buffer = new Nt(30), this._api = new Rt(this.options.dsn), this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
    }
    var Lt, Pt = Object(_.f)(),
        At = (Lt = Ut, h.b(Mt, Lt), Mt.prototype.sendEvent = function(t) {
            var i = this;
            if (new Date(Date.now()) < this._disabledUntil) return Promise.reject({
                event: t,
                reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                status: 429
            });
            var e = Tt(t, this._api),
                n = {
                    body: e.body,
                    method: "POST",
                    referrerPolicy: function() {
                        if (!ct()) return !1;
                        try {
                            return new Request("_", {
                                referrerPolicy: "origin"
                            }), !0
                        } catch (t) {
                            return !1
                        }
                    }() ? "origin" : ""
                };
            return void 0 !== this.options.fetchParameters && Object.assign(n, this.options.fetchParameters), void 0 !== this.options.headers && (n.headers = this.options.headers), this._buffer.add(new d(function(r, o) {
                Pt.fetch(e.url, n).then(function(t) {
                    var e = V.fromHttpCode(t.status);
                    if (e !== V.Success) {
                        if (e === V.RateLimit) {
                            var n = Date.now();
                            i._disabledUntil = new Date(n + Object(_.j)(n, t.headers.get("Retry-After"))), w.warn("Too many requests, backing off till: " + i._disabledUntil)
                        }
                        o(t)
                    } else r({
                        status: e
                    })
                }).catch(o)
            }))
        }, Mt);

    function Mt() {
        var t = null !== Lt && Lt.apply(this, arguments) || this;
        return t._disabledUntil = new Date(Date.now()), t
    }
    var Ft, Bt = (Ft = Ut, h.b(Ht, Ft), Ht.prototype.sendEvent = function(t) {
        var i = this;
        if (new Date(Date.now()) < this._disabledUntil) return Promise.reject({
            event: t,
            reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
            status: 429
        });
        var e = Tt(t, this._api);
        return this._buffer.add(new d(function(n, r) {
            var o = new XMLHttpRequest;
            for (var t in o.onreadystatechange = function() {
                    if (4 === o.readyState) {
                        var t = V.fromHttpCode(o.status);
                        if (t !== V.Success) {
                            if (t === V.RateLimit) {
                                var e = Date.now();
                                i._disabledUntil = new Date(e + Object(_.j)(e, o.getResponseHeader("Retry-After"))), w.warn("Too many requests, backing off till: " + i._disabledUntil)
                            }
                            r(o)
                        } else n({
                            status: t
                        })
                    }
                }, o.open("POST", e.url), i.options.headers) i.options.headers.hasOwnProperty(t) && o.setRequestHeader(t, i.options.headers[t]);
            o.send(e.body)
        }))
    }, Ht);

    function Ht() {
        var t = null !== Ft && Ft.apply(this, arguments) || this;
        return t._disabledUntil = new Date(Date.now()), t
    }
    var qt, Wt = (qt = at, h.b(Yt, qt), Yt.prototype._setupTransport = function() {
        if (!this._options.dsn) return qt.prototype._setupTransport.call(this);
        var t = h.a({}, this._options.transportOptions, {
            dsn: this._options.dsn
        });
        return this._options.transport ? new this._options.transport(t) : ct() ? new At(t) : new Bt(t)
    }, Yt.prototype.eventFromException = function(t, e) {
        return jt(this._options, t, e)
    }, Yt.prototype.eventFromMessage = function(t, e, n) {
        return void 0 === e && (e = rt.Info), wt(this._options, t, e, n)
    }, Yt);

    function Yt() {
        return null !== qt && qt.apply(this, arguments) || this
    }

    function Gt(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        var r = N();
        if (r && r[t]) return r[t].apply(r, h.d(e));
        throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
    }

    function Xt(t, e) {
        var n;
        try {
            throw new Error("Sentry syntheticException")
        } catch (t) {
            n = t
        }
        return Gt("captureException", t, {
            captureContext: e,
            originalException: t,
            syntheticException: n
        })
    }

    function Jt(t, e) {
        var n;
        try {
            throw new Error(t)
        } catch (t) {
            n = t
        }
        var r = "string" != typeof e ? {
            captureContext: e
        } : void 0;
        return Gt("captureMessage", t, "string" == typeof e ? e : void 0, h.a({
            originalException: t,
            syntheticException: n
        }, r))
    }

    function zt(t) {
        return Gt("captureEvent", t)
    }

    function $t(t) {
        Gt("configureScope", t)
    }

    function Vt(t) {
        Gt("addBreadcrumb", t)
    }

    function Kt(t, e) {
        Gt("setContext", t, e)
    }

    function Qt(t) {
        Gt("setExtras", t)
    }

    function Zt(t) {
        Gt("setTags", t)
    }

    function te(t, e) {
        Gt("setExtra", t, e)
    }

    function ee(t, e) {
        Gt("setTag", t, e)
    }

    function ne(t) {
        Gt("setUser", t)
    }

    function re(t) {
        Gt("withScope", t)
    }

    function oe(t) {
        return Gt("startTransaction", h.a({}, t))
    }
    var ie = 0;

    function ae() {
        return 0 < ie
    }

    function se(e, r, o) {
        if (void 0 === r && (r = {}), "function" != typeof e) return e;
        try {
            if (e.__sentry__) return e;
            if (e.__sentry_wrapped__) return e.__sentry_wrapped__
        } catch (t) {
            return e
        }

        function t() {
            var n = Array.prototype.slice.call(arguments);
            try {
                o && "function" == typeof o && o.apply(this, arguments);
                var t = n.map(function(t) {
                    return se(t, r)
                });
                return e.handleEvent ? e.handleEvent.apply(this, t) : e.apply(this, t)
            } catch (e) {
                throw ie += 1, setTimeout(function() {
                    ie -= 1
                }), re(function(t) {
                    t.addEventProcessor(function(t) {
                        var e = h.a({}, t);
                        return r.mechanism && (Object(_.b)(e, void 0, void 0), Object(_.a)(e, r.mechanism)), e.extra = h.a({}, e.extra, {
                            arguments: n
                        }), e
                    }), Xt(e)
                }), e
            }
        }
        try {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        } catch (t) {}
        e.prototype = e.prototype || {}, t.prototype = e.prototype, Object.defineProperty(e, "__sentry_wrapped__", {
            enumerable: !1,
            value: t
        }), Object.defineProperties(t, {
            __sentry__: {
                enumerable: !1,
                value: !0
            },
            __sentry_original__: {
                enumerable: !1,
                value: e
            }
        });
        try {
            Object.getOwnPropertyDescriptor(t, "name").configurable && Object.defineProperty(t, "name", {
                get: function() {
                    return e.name
                }
            })
        } catch (t) {}
        return t
    }

    function ce(t) {
        if (void 0 === t && (t = {}), t.eventId)
            if (t.dsn) {
                var e = document.createElement("script");
                e.async = !0, e.src = new Rt(t.dsn).getReportDialogEndpoint(t), t.onLoad && (e.onload = t.onLoad), (document.head || document.body).appendChild(e)
            } else w.error("Missing dsn option in showReportDialog call");
        else w.error("Missing eventId option in showReportDialog call")
    }
    var ue, le = Object(_.f)(),
        pe = {},
        fe = {};

    function de(t) {
        if (!fe[t]) switch (fe[t] = !0, t) {
            case "console":
                ! function() {
                    if (!("console" in le)) return;
                    ["debug", "info", "warn", "error", "log", "assert"].forEach(function(r) {
                        r in le.console && Object(J.b)(le.console, r, function(n) {
                            return function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                ve("console", {
                                    args: t,
                                    level: r
                                }), n && Function.prototype.apply.call(n, le.console, t)
                            }
                        })
                    })
                }();
                break;
            case "dom":
                ! function() {
                    if (!("document" in le)) return;
                    le.document.addEventListener("click", be("click", ve.bind(null, "dom")), !1), le.document.addEventListener("keypress", Ee(ve.bind(null, "dom")), !1), ["EventTarget", "Node"].forEach(function(t) {
                        var e = le[t] && le[t].prototype;
                        e && e.hasOwnProperty && e.hasOwnProperty("addEventListener") && (Object(J.b)(e, "addEventListener", function(r) {
                            return function(t, e, n) {
                                return e && e.handleEvent ? ("click" === t && Object(J.b)(e, "handleEvent", function(e) {
                                    return function(t) {
                                        return be("click", ve.bind(null, "dom"))(t), e.call(this, t)
                                    }
                                }), "keypress" === t && Object(J.b)(e, "handleEvent", function(e) {
                                    return function(t) {
                                        return Ee(ve.bind(null, "dom"))(t), e.call(this, t)
                                    }
                                })) : ("click" === t && be("click", ve.bind(null, "dom"), !0)(this), "keypress" === t && Ee(ve.bind(null, "dom"))(this)), r.call(this, t, e, n)
                            }
                        }), Object(J.b)(e, "removeEventListener", function(r) {
                            return function(t, e, n) {
                                try {
                                    r.call(this, t, e.__sentry_wrapped__, n)
                                } catch (t) {}
                                return r.call(this, t, e, n)
                            }
                        }))
                    })
                }();
                break;
            case "xhr":
                ! function() {
                    if (!("XMLHttpRequest" in le)) return;
                    var t = XMLHttpRequest.prototype;
                    Object(J.b)(t, "open", function(i) {
                        return function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            var r = this,
                                n = t[1];
                            r.__sentry_xhr__ = {
                                method: Object(f.k)(t[0]) ? t[0].toUpperCase() : t[0],
                                url: t[1]
                            }, Object(f.k)(n) && "POST" === r.__sentry_xhr__.method && n.match(/sentry_key/) && (r.__sentry_own_request__ = !0);

                            function o() {
                                if (4 === r.readyState) {
                                    try {
                                        r.__sentry_xhr__ && (r.__sentry_xhr__.status_code = r.status)
                                    } catch (t) {}
                                    ve("xhr", {
                                        args: t,
                                        endTimestamp: Date.now(),
                                        startTimestamp: Date.now(),
                                        xhr: r
                                    })
                                }
                            }
                            return "onreadystatechange" in r && "function" == typeof r.onreadystatechange ? Object(J.b)(r, "onreadystatechange", function(n) {
                                return function() {
                                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                    return o(), n.apply(r, t)
                                }
                            }) : r.addEventListener("readystatechange", o), i.apply(r, t)
                        }
                    }), Object(J.b)(t, "send", function(n) {
                        return function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return ve("xhr", {
                                args: t,
                                startTimestamp: Date.now(),
                                xhr: this
                            }), n.apply(this, t)
                        }
                    })
                }();
                break;
            case "fetch":
                ! function() {
                    if (! function() {
                            if (!ct()) return !1;
                            var t = Object(_.f)();
                            if (ut(t.fetch)) return !0;
                            var e = !1,
                                n = t.document;
                            if (n && "function" == typeof n.createElement) try {
                                var r = n.createElement("iframe");
                                r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (e = ut(r.contentWindow.fetch)), n.head.removeChild(r)
                            } catch (t) {
                                w.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                            }
                            return e
                        }()) return;
                    Object(J.b)(le, "fetch", function(r) {
                        return function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            var n = {
                                args: t,
                                fetchData: {
                                    method: function(t) {
                                        void 0 === t && (t = []);
                                        if ("Request" in le && Object(f.g)(t[0], Request) && t[0].method) return String(t[0].method).toUpperCase();
                                        if (t[1] && t[1].method) return String(t[1].method).toUpperCase();
                                        return "GET"
                                    }(t),
                                    url: function(t) {
                                        void 0 === t && (t = []);
                                        if ("string" == typeof t[0]) return t[0];
                                        if ("Request" in le && Object(f.g)(t[0], Request)) return t[0].url;
                                        return String(t[0])
                                    }(t)
                                },
                                startTimestamp: Date.now()
                            };
                            return ve("fetch", h.a({}, n)), r.apply(le, t).then(function(t) {
                                return ve("fetch", h.a({}, n, {
                                    endTimestamp: Date.now(),
                                    response: t
                                })), t
                            }, function(t) {
                                throw ve("fetch", h.a({}, n, {
                                    endTimestamp: Date.now(),
                                    error: t
                                })), t
                            })
                        }
                    })
                }();
                break;
            case "history":
                ! function() {
                    if (! function() {
                            var t = Object(_.f)(),
                                e = t.chrome,
                                n = e && e.app && e.app.runtime,
                                r = "history" in t && !!t.history.pushState && !!t.history.replaceState;
                            return !n && r
                        }()) return;
                    var r = le.onpopstate;

                    function t(i) {
                        return function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            var n = 2 < t.length ? t[2] : void 0;
                            if (n) {
                                var r = ue,
                                    o = String(n);
                                ve("history", {
                                    from: r,
                                    to: ue = o
                                })
                            }
                            return i.apply(this, t)
                        }
                    }
                    le.onpopstate = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var n = le.location.href;
                        if (ve("history", {
                                from: ue,
                                to: ue = n
                            }), r) return r.apply(this, t)
                    }, Object(J.b)(le.history, "pushState", t), Object(J.b)(le.history, "replaceState", t)
                }();
                break;
            case "error":
                xe = le.onerror, le.onerror = function(t, e, n, r, o) {
                    return ve("error", {
                        column: r,
                        error: o,
                        line: n,
                        msg: t,
                        url: e
                    }), !!xe && xe.apply(this, arguments)
                };
                break;
            case "unhandledrejection":
                Oe = le.onunhandledrejection, le.onunhandledrejection = function(t) {
                    return ve("unhandledrejection", t), !Oe || Oe.apply(this, arguments)
                };
                break;
            default:
                w.warn("unknown instrumentation type:", t)
        }
    }

    function he(t) {
        t && "string" == typeof t.type && "function" == typeof t.callback && (pe[t.type] = pe[t.type] || [], pe[t.type].push(t.callback), de(t.type))
    }

    function ve(e, t) {
        var n, r;
        if (e && pe[e]) try {
            for (var o = h.e(pe[e] || []), i = o.next(); !i.done; i = o.next()) {
                var a = i.value;
                try {
                    a(t)
                } catch (t) {
                    w.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + Object(_.e)(a) + "\nError: " + t)
                }
            }
        } catch (t) {
            n = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (r = o.return) && r.call(o)
            } finally {
                if (n) throw n.error
            }
        }
    }
    var _e, ye, ge = 1e3,
        me = 0;

    function be(e, n, r) {
        return void 0 === r && (r = !1),
            function(t) {
                _e = void 0, t && ye !== t && (ye = t, me && clearTimeout(me), r ? me = setTimeout(function() {
                    n({
                        event: t,
                        name: e
                    })
                }) : n({
                    event: t,
                    name: e
                }))
            }
    }

    function Ee(r) {
        return function(t) {
            var e;
            try {
                e = t.target
            } catch (t) {
                return
            }
            var n = e && e.tagName;
            n && ("INPUT" === n || "TEXTAREA" === n || e.isContentEditable) && (_e || be("input", r)(t), clearTimeout(_e), _e = setTimeout(function() {
                _e = void 0
            }, ge))
        }
    }
    var xe = null;
    var Oe = null;
    var je = (we.prototype.addSentryBreadcrumb = function(t) {
        this._options.sentry && N().addBreadcrumb({
            category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
            event_id: t.event_id,
            level: t.level,
            message: Object(_.d)(t)
        }, {
            event: t
        })
    }, we.prototype._consoleBreadcrumb = function(t) {
        var e = {
            category: "console",
            data: {
                arguments: t.args,
                logger: "console"
            },
            level: rt.fromString(t.level),
            message: Object(L.b)(t.args, " ")
        };
        if ("assert" === t.level) {
            if (!1 !== t.args[0]) return;
            e.message = "Assertion failed: " + (Object(L.b)(t.args.slice(1), " ") || "console.assert"), e.data.arguments = t.args.slice(1)
        }
        N().addBreadcrumb(e, {
            input: t.args,
            level: t.level
        })
    }, we.prototype._domBreadcrumb = function(t) {
        var e;
        try {
            e = t.event.target ? Object(_.h)(t.event.target) : Object(_.h)(t.event)
        } catch (t) {
            e = "<unknown>"
        }
        0 !== e.length && N().addBreadcrumb({
            category: "ui." + t.name,
            message: e
        }, {
            event: t.event,
            name: t.name
        })
    }, we.prototype._xhrBreadcrumb = function(t) {
        if (t.endTimestamp) {
            if (t.xhr.__sentry_own_request__) return;
            N().addBreadcrumb({
                category: "xhr",
                data: t.xhr.__sentry_xhr__,
                type: "http"
            }, {
                xhr: t.xhr
            })
        }
    }, we.prototype._fetchBreadcrumb = function(t) {
        t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method || (t.error ? N().addBreadcrumb({
            category: "fetch",
            data: t.fetchData,
            level: rt.Error,
            type: "http"
        }, {
            data: t.error,
            input: t.args
        }) : N().addBreadcrumb({
            category: "fetch",
            data: h.a({}, t.fetchData, {
                status_code: t.response.status
            }),
            type: "http"
        }, {
            input: t.args,
            response: t.response
        })))
    }, we.prototype._historyBreadcrumb = function(t) {
        var e = Object(_.f)(),
            n = t.from,
            r = t.to,
            o = Object(_.k)(e.location.href),
            i = Object(_.k)(n),
            a = Object(_.k)(r);
        i.path || (i = o), o.protocol === a.protocol && o.host === a.host && (r = a.relative), o.protocol === i.protocol && o.host === i.host && (n = i.relative), N().addBreadcrumb({
            category: "navigation",
            data: {
                from: n,
                to: r
            }
        })
    }, we.prototype.setupOnce = function() {
        var n = this;
        this._options.console && he({
            callback: function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                n._consoleBreadcrumb.apply(n, h.d(t))
            },
            type: "console"
        }), this._options.dom && he({
            callback: function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                n._domBreadcrumb.apply(n, h.d(t))
            },
            type: "dom"
        }), this._options.xhr && he({
            callback: function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                n._xhrBreadcrumb.apply(n, h.d(t))
            },
            type: "xhr"
        }), this._options.fetch && he({
            callback: function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                n._fetchBreadcrumb.apply(n, h.d(t))
            },
            type: "fetch"
        }), this._options.history && he({
            callback: function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                n._historyBreadcrumb.apply(n, h.d(t))
            },
            type: "history"
        })
    }, we.id = "Breadcrumbs", we);

    function we(t) {
        this.name = we.id, this._options = h.a({
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0
        }, t)
    }
    var Se, ke = "sentry.javascript.browser",
        Te = "5.20.1",
        Re = (Se = Z, h.b(Ie, Se), Ie.prototype._prepareEvent = function(t, e, n) {
            return t.platform = t.platform || "javascript", t.sdk = h.a({}, t.sdk, {
                name: ke,
                packages: h.d(t.sdk && t.sdk.packages || [], [{
                    name: "npm:@sentry/browser",
                    version: Te
                }]),
                version: Te
            }), Se.prototype._prepareEvent.call(this, t, e, n)
        }, Ie.prototype._sendEvent = function(t) {
            var e = this.getIntegration(je);
            e && e.addSentryBreadcrumb(t), Se.prototype._sendEvent.call(this, t)
        }, Ie.prototype.showReportDialog = function(t) {
            void 0 === t && (t = {}), Object(_.f)().document && (this._isEnabled() ? ce(h.a({}, t, {
                dsn: t.dsn || this.getDsn()
            })) : w.error("Trying to call showReportDialog with Sentry Client disabled"))
        }, Ie);

    function Ie(t) {
        return void 0 === t && (t = {}), Se.call(this, Wt, t) || this
    }
    var Ne = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
        De = (Ue.prototype._wrapTimeFunction = function(r) {
            return function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = t[0];
                return t[0] = se(n, {
                    mechanism: {
                        data: {
                            function: Object(_.e)(r)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), r.apply(this, t)
            }
        }, Ue.prototype._wrapRAF = function(e) {
            return function(t) {
                return e.call(this, se(t, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: Object(_.e)(e)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }))
            }
        }, Ue.prototype._wrapEventTarget = function(o) {
            var t = Object(_.f)(),
                e = t[o] && t[o].prototype;
            e && e.hasOwnProperty && e.hasOwnProperty("addEventListener") && (Object(J.b)(e, "addEventListener", function(r) {
                return function(t, e, n) {
                    try {
                        "function" == typeof e.handleEvent && (e.handleEvent = se(e.handleEvent.bind(e), {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: Object(_.e)(e),
                                    target: o
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }))
                    } catch (t) {}
                    return r.call(this, t, se(e, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: Object(_.e)(e),
                                target: o
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), n)
                }
            }), Object(J.b)(e, "removeEventListener", function(r) {
                return function(t, e, n) {
                    try {
                        r.call(this, t, e.__sentry_wrapped__, n)
                    } catch (t) {}
                    return r.call(this, t, e, n)
                }
            }))
        }, Ue.prototype._wrapXHR = function(n) {
            return function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var r = this;
                return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function(n) {
                    n in r && "function" == typeof r[n] && Object(J.b)(r, n, function(t) {
                        var e = {
                            mechanism: {
                                data: {
                                    function: n,
                                    handler: Object(_.e)(t)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        };
                        return t.__sentry_original__ && (e.mechanism.data.handler = Object(_.e)(t.__sentry_original__)), se(t, e)
                    })
                }), n.apply(this, t)
            }
        }, Ue.prototype.setupOnce = function() {
            var t = Object(_.f)();
            this._options.setTimeout && Object(J.b)(t, "setTimeout", this._wrapTimeFunction.bind(this)), this._options.setInterval && Object(J.b)(t, "setInterval", this._wrapTimeFunction.bind(this)), this._options.requestAnimationFrame && Object(J.b)(t, "requestAnimationFrame", this._wrapRAF.bind(this)), this._options.XMLHttpRequest && "XMLHttpRequest" in t && Object(J.b)(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), this._options.eventTarget && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : Ne).forEach(this._wrapEventTarget.bind(this))
        }, Ue.id = "TryCatch", Ue);

    function Ue(t) {
        this.name = Ue.id, this._options = h.a({
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0
        }, t)
    }
    var Ce = (Le.prototype.setupOnce = function() {
        Error.stackTraceLimit = 50, this._options.onerror && (w.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (w.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
    }, Le.prototype._installGlobalOnErrorHandler = function() {
        var s = this;
        this._onErrorHandlerInstalled || (he({
            callback: function(t) {
                var e = t.error,
                    n = N(),
                    r = n.getIntegration(Le),
                    o = e && !0 === e.__sentry_own_request__;
                if (r && !ae() && !o) {
                    var i = n.getClient(),
                        a = Object(f.i)(e) ? s._eventFromIncompleteOnError(t.msg, t.url, t.line, t.column) : s._enhanceEventWithInitialFrame(St(e, void 0, {
                            attachStacktrace: i && i.getOptions().attachStacktrace,
                            rejection: !1
                        }), t.url, t.line, t.column);
                    Object(_.a)(a, {
                        handled: !1,
                        type: "onerror"
                    }), n.captureEvent(a, {
                        originalException: e
                    })
                }
            },
            type: "error"
        }), this._onErrorHandlerInstalled = !0)
    }, Le.prototype._installGlobalOnUnhandledRejectionHandler = function() {
        var s = this;
        this._onUnhandledRejectionHandlerInstalled || (he({
            callback: function(t) {
                var e = t;
                try {
                    "reason" in t ? e = t.reason : "detail" in t && "reason" in t.detail && (e = t.detail.reason)
                } catch (t) {}
                var n = N(),
                    r = n.getIntegration(Le),
                    o = e && !0 === e.__sentry_own_request__;
                if (!r || ae() || o) return !0;
                var i = n.getClient(),
                    a = Object(f.i)(e) ? s._eventFromIncompleteRejection(e) : St(e, void 0, {
                        attachStacktrace: i && i.getOptions().attachStacktrace,
                        rejection: !0
                    });
                a.level = rt.Error, Object(_.a)(a, {
                    handled: !1,
                    type: "onunhandledrejection"
                }), n.captureEvent(a, {
                    originalException: e
                })
            },
            type: "unhandledrejection"
        }), this._onUnhandledRejectionHandlerInstalled = !0)
    }, Le.prototype._eventFromIncompleteOnError = function(t, e, n, r) {
        var o, i = Object(f.e)(t) ? t.message : t;
        if (Object(f.k)(i)) {
            var a = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
            a && (o = a[1], i = a[2])
        }
        var s = {
            exception: {
                values: [{
                    type: o || "Error",
                    value: i
                }]
            }
        };
        return this._enhanceEventWithInitialFrame(s, e, n, r)
    }, Le.prototype._eventFromIncompleteRejection = function(t) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: "Non-Error promise rejection captured with value: " + t
                }]
            }
        }
    }, Le.prototype._enhanceEventWithInitialFrame = function(t, e, n, r) {
        t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {}, t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || [];
        var o = isNaN(parseInt(r, 10)) ? void 0 : r,
            i = isNaN(parseInt(n, 10)) ? void 0 : n,
            a = Object(f.k)(e) && 0 < e.length ? e : Object(_.g)();
        return 0 === t.exception.values[0].stacktrace.frames.length && t.exception.values[0].stacktrace.frames.push({
            colno: o,
            filename: a,
            function: "?",
            in_app: !0,
            lineno: i
        }), t
    }, Le.id = "GlobalHandlers", Le);

    function Le(t) {
        this.name = Le.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = h.a({
            onerror: !0,
            onunhandledrejection: !0
        }, t)
    }
    var Pe = (Ae.prototype.setupOnce = function() {
        b(function(t, e) {
            var n = N().getIntegration(Ae);
            return n ? n._handler(t, e) : t
        })
    }, Ae.prototype._handler = function(t, e) {
        if (!(t.exception && t.exception.values && e && Object(f.g)(e.originalException, Error))) return t;
        var n = this._walkErrorTree(e.originalException, this._key);
        return t.exception.values = h.d(n, t.exception.values), t
    }, Ae.prototype._walkErrorTree = function(t, e, n) {
        if (void 0 === n && (n = []), !Object(f.g)(t[e], Error) || n.length + 1 >= this._limit) return n;
        var r = Et(yt(t[e]));
        return this._walkErrorTree(t[e], e, h.d([r], n))
    }, Ae.id = "LinkedErrors", Ae);

    function Ae(t) {
        void 0 === t && (t = {}), this.name = Ae.id, this._key = t.key || "cause", this._limit = t.limit || 5
    }
    var Me = Object(_.f)(),
        Fe = (Be.prototype.setupOnce = function() {
            b(function(t) {
                if (N().getIntegration(Be)) {
                    if (!Me.navigator || !Me.location) return t;
                    var e = t.request || {};
                    return e.url = e.url || Me.location.href, e.headers = e.headers || {}, e.headers["User-Agent"] = Me.navigator.userAgent, h.a({}, t, {
                        request: e
                    })
                }
                return t
            })
        }, Be.id = "UserAgent", Be);

    function Be() {
        this.name = Be.id
    }
    var He = [new r.InboundFilters, new r.FunctionToString, new De, new je, new Ce, new Pe, new Fe];

    function qe(t) {
        if (void 0 === t && (t = {}), void 0 === t.defaultIntegrations && (t.defaultIntegrations = He), void 0 === t.release) {
            var e = Object(_.f)();
            e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
        }! function(t, e) {
            !0 === e.debug && w.enable();
            var n = N(),
                r = new t(e);
            n.bindClient(r)
        }(Re, t)
    }

    function We(t) {
        void 0 === t && (t = {}), t.eventId || (t.eventId = N().lastEventId());
        var e = N().getClient();
        e && e.showReportDialog(t)
    }

    function Ye() {
        return N().lastEventId()
    }

    function Ge() {}

    function Xe(t) {
        t()
    }

    function Je(t) {
        var e = N().getClient();
        return e ? e.flush(t) : d.reject(!1)
    }

    function ze(t) {
        var e = N().getClient();
        return e ? e.close(t) : d.reject(!1)
    }

    function $e(t) {
        return se(t)()
    }
    var Ve = {},
        Ke = Object(_.f)();
    Ke.Sentry && Ke.Sentry.Integrations && (Ve = Ke.Sentry.Integrations);
    var Qe = h.a({}, Ve, r, o),
        Ze = n(4),
        tn = n(14),
        en = (nn.prototype.setupOnce = function(t, r) {
            t(function(t, e) {
                var n = r().getIntegration(nn);
                return n ? n.enhanceEventWithErrorData(t, e) : t
            })
        }, nn.prototype.enhanceEventWithErrorData = function(t, e) {
            var n;
            if (!e || !e.originalException || !Object(f.d)(e.originalException)) return t;
            var r = e.originalException.name || e.originalException.constructor.name,
                o = this._extractErrorData(e.originalException);
            if (o) {
                var i = h.a({}, t.contexts),
                    a = Object(J.c)(o, this._options.depth);
                return Object(f.h)(a) && (i = h.a({}, t.contexts, ((n = {})[r] = h.a({}, a), n))), h.a({}, t, {
                    contexts: i
                })
            }
            return t
        }, nn.prototype._extractErrorData = function(t) {
            var e, n, r = null;
            try {
                var o = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber"],
                    i = Object.getOwnPropertyNames(t).filter(function(t) {
                        return -1 === o.indexOf(t)
                    });
                if (i.length) {
                    var a = {};
                    try {
                        for (var s = h.e(i), c = s.next(); !c.done; c = s.next()) {
                            var u = c.value,
                                l = t[u];
                            Object(f.d)(l) && (l = l.toString()), a[u] = l
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            c && !c.done && (n = s.return) && n.call(s)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    r = a
                }
            } catch (t) {
                w.error("Unable to extract extra data from the Error object:", t)
            }
            return r
        }, nn.id = "ExtraErrorData", nn);

    function nn(t) {
        void 0 === t && (t = {
            depth: 3
        }), this._options = t, this.name = nn.id
    }
    var rn, on, an, sn, cn, un, ln, pn, fn, dn, hn, vn = {
        metaData: (ln = document.querySelector('meta[name="sentry-meta"]'), pn = null !== (rn = null == ln ? void 0 : null === (on = ln.dataset) || void 0 === on ? void 0 : on.sampleRate) && void 0 !== rn ? rn : .5, {
            dsn: null !== (an = null == ln ? void 0 : null === (sn = ln.dataset) || void 0 === sn ? void 0 : sn.dsn) && void 0 !== an ? an : "https://6750adeb1b1348e4a10b13e726d5c10b@sentry.io/1539367",
            sampleRate: parseFloat(pn),
            envName: null !== (cn = null == ln ? void 0 : null === (un = ln.dataset) || void 0 === un ? void 0 : un.envName) && void 0 !== cn ? cn : "staging"
        })
    };
    qe({
        integrations: [new en],
        dsn: null === vn ? void 0 : null === (fn = vn.metaData) || void 0 === fn ? void 0 : fn.dsn,
        environment: null === vn ? void 0 : null === (dn = vn.metaData) || void 0 === dn ? void 0 : dn.envName,
        sampleRate: null === vn ? void 0 : null === (hn = vn.metaData) || void 0 === hn ? void 0 : hn.sampleRate
    }), document.addEventListener("DOMContentLoaded", function() {
        $t(function(t) {
            var e, n, r = !!tn.DeviceMeta && Object(tn.DeviceMeta)().isInApp;
            t.setUser({
                id: null !== (e = null === Ze.authenticatedUser || void 0 === Ze.authenticatedUser ? void 0 : Ze.authenticatedUser.id) && void 0 !== e ? e : "1",
                username: null !== (n = null === Ze.authenticatedUser || void 0 === Ze.authenticatedUser ? void 0 : Ze.authenticatedUser.name) && void 0 !== n ? n : "unknown"
            }), t.setTag("inApp", r)
        })
    });
    e.default = s
}]);

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Sentry");