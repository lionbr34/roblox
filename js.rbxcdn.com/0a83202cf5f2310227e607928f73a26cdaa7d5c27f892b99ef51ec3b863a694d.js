! function(n) {
    var r = {};

    function o(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = n, o.c = r, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 3)
}([function(e, t) {
    e.exports = Roblox
}, function(e, t) {
    e.exports = CoreUtilities
}, , function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, u, a = n(0),
        c = {
            currentPageName: null === a.MetaDataValues || void 0 === a.MetaDataValues ? void 0 : a.MetaDataValues.getPageName(),
            defaultIntervalTime: 5e3,
            activeEvents: ["focus", "click", "hover", "scroll", "mouseover", "mouseenter", "mousedown", "dblclick", "keypress", "touchstart", "touchmove"],
            inactiveEvents: ["blur"]
        },
        l = n(1),
        s = function(e) {
            var t = a.EnvironmentUrls.presenceApi,
                n = {
                    url: "".concat(t, "/v1/presence/register-app-presence"),
                    withCredentials: !0
                },
                r = {
                    location: e
                };
            return l.httpService.post(n, r)
        },
        f = c.activeEvents,
        d = c.inactiveEvents,
        v = c.currentPageName;
    (r = c.defaultIntervalTime, i = o = !1, u = null, {
        init: function() {
            ! function() {
                var e = document.getElementById("presence-registration-bootstrap-data");
                r = Number.isNaN(null == e ? void 0 : e.dataset.interval) ? 3e3 : parseInt(null == e ? void 0 : e.dataset.interval, 10), o = "True" === (null == e ? void 0 : e.dataset.isEnabled)
            }(), o && (f.forEach(function(e) {
                window.addEventListener(e, function() {
                    u = e, i = !0
                })
            }), d.forEach(function(e) {
                return window.addEventListener(e, function() {
                    i = !1, u = null, console.debug("-------------Inactive -------------")
                }), i
            }), setInterval(function() {
                i && (console.debug("-----------".concat(u, "------------ Active")), s(v).then(function() {}).catch(function(e) {
                    console.debug(e)
                })), i = !1
            }, r))
        }
    }).init()
}]);
//# sourceMappingURL=https://js.rbxcdn.com/e4b1696ecf0ca3d4dec3-presenceRegistration.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("PresenceRegistration");