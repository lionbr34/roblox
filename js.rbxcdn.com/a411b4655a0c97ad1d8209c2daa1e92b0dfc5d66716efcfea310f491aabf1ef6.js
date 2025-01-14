! function() {
    "use strict";
    var n = {
            n: function(e) {
                var r = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return n.d(r, {
                    a: r
                }), r
            },
            d: function(e, r) {
                for (var t in r) n.o(r, t) && !n.o(e, t) && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r[t]
                })
            },
            o: function(e, r) {
                return Object.prototype.hasOwnProperty.call(e, r)
            }
        },
        t = CoreUtilities,
        c = React,
        i = n.n(c),
        r = ReactDOM,
        e = PropTypes,
        a = n.n(e),
        o = ReactUtilities,
        u = {
            common: ["CommonUI.UserAgreements", "CommonUI.Controls"],
            feature: null
        },
        s = (e = Roblox).EnvironmentUrls.userAgreementsServiceApi,
        l = e.EnvironmentUrls.universalAppConfigurationApi,
        f = function() {
            return {
                withCredentials: !0,
                url: "".concat(s, "/v1/agreements-resolution/").concat("web")
            }
        },
        m = function() {
            return {
                withCredentials: !0,
                url: "".concat(s, "/v1/acceptances")
            }
        },
        p = function() {
            return {
                withCredentials: !0,
                url: "".concat(l, "/v1/behaviors/").concat("user-agreements-policy", "/content")
            }
        },
        d = function() {
            var e = f();
            return t.httpService.get(e)
        },
        v = function(e) {
            var r = m(),
                e = {
                    acceptances: e.map(function(e) {
                        return {
                            agreementId: e
                        }
                    })
                };
            return t.httpService.post(r, e)
        },
        g = ReactStyleGuide,
        y = "Roblox.UserAgreements",
        h = 864e5,
        b = {
            TermsOfService: "Modal.Agreement.TermsOfService",
            PrivacyPolicy: "Modal.Agreement.PrivacyPolicy",
            RiderTerms: "Modal.Agreement.RiderTerms",
            ChildrenPrivacyPolicy: "Modal.Agreement.ChildrenPrivacyPolicy"
        },
        A = "Modal.Body",
        S = "Modal.Title",
        w = "Modal.Agree",
        x = CoreRobloxUtilities,
        T = HeaderScripts,
        E = function() {
            var e = p();
            return t.httpService.get(e)
        };

    function R(e, r, t, n, a, o, c) {
        try {
            var i = e[o](c),
                u = i.value
        } catch (e) {
            return void t(e)
        }
        i.done ? r(u) : Promise.resolve(u).then(n, a)
    }
    var U = {
        shouldFetchAgreements: function() {
            var i, e = (i = regeneratorRuntime.mark(function e(r) {
                var t, n, a, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (T.authenticatedUser.isAuthenticated) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", !1);
                        case 3:
                            e.prev = 3, t = x.localStorageService.getLocalStorage(y), e.next = 12;
                            break;
                        case 7:
                            if (e.prev = 7, e.t0 = e.catch(3), e.t0 instanceof SyntaxError) return e.abrupt("return", !0);
                            e.next = 11;
                            break;
                        case 11:
                            throw e.t0;
                        case 12:
                            if (null === t) return e.abrupt("return", !0);
                            e.next = 14;
                            break;
                        case 14:
                            if (n = t.lastFetchTimestamp, n = Date.parse(n), Number.isNaN(n)) return e.abrupt("return", !0);
                            e.next = 18;
                            break;
                        case 18:
                            if (t.doesUserNeedToAcceptAgreements) return e.abrupt("return", !0);
                            e.next = 21;
                            break;
                        case 21:
                            return a = r.getTime(), e.prev = 22, e.next = 25, E();
                        case 25:
                            o = e.sent, o = o.data.cooldownPeriodInMs, e.next = 32;
                            break;
                        case 29:
                            e.prev = 29, e.t1 = e.catch(22), o = h;
                        case 32:
                            return e.abrupt("return", n + o < a);
                        case 33:
                        case "end":
                            return e.stop()
                    }
                }, e, null, [
                    [3, 7],
                    [22, 29]
                ])
            }), function() {
                var e = this,
                    c = arguments;
                return new Promise(function(r, t) {
                    var n = i.apply(e, c);

                    function a(e) {
                        R(n, r, t, a, o, "next", e)
                    }

                    function o(e) {
                        R(n, r, t, a, o, "throw", e)
                    }
                    a(void 0)
                })
            });
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        updateDoesUserNeedToAcceptAgreements: function(e, r) {
            r = 1 < arguments.length && void 0 !== r ? r : null;
            if (e && !(r instanceof Date)) throw new TypeError("if doesUserNeedToAcceptAgreements is true then must provide a valid Date");
            var t, n = {
                doesUserNeedToAcceptAgreements: e
            };
            if (r instanceof Date) n.lastFetchTimestamp = r.toISOString();
            else try {
                t = x.localStorageService.getLocalStorage(y), n.lastFetchTimestamp = t.lastFetchTimestamp
            } catch (e) {
                if (e instanceof SyntaxError) return void x.localStorageService.removeLocalStorage(y);
                throw e
            }
            try {
                x.localStorageService.setLocalStorage(y, n)
            } catch (e) {
                console.error("Error updating doesUserNeedToAcceptAgreements ".concat(e))
            }
        }
    };

    function k(e, r, t, n, a, o, c) {
        try {
            var i = e[o](c),
                u = i.value
        } catch (e) {
            return void t(e)
        }
        i.done ? r(u) : Promise.resolve(u).then(n, a)
    }

    function P(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
        return n
    }
    var N, O = (0, g.createModal)(),
        C = (e = (N = 2, function(e) {
            if (Array.isArray(e)) return e
        }(O = O) || function(e, r) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var t = [],
                n = !0,
                a = !1,
                o = void 0;
            try {
                for (var c, i = e[Symbol.iterator](); !(n = (c = i.next()).done) && (t.push(c.value), !r || t.length !== r); n = !0);
            } catch (e) {
                a = !0, o = e
            } finally {
                try {
                    n || null == i.return || i.return()
                } finally {
                    if (a) throw o
                }
            }
            return t
        }(O, N) || function(e, r) {
            if (!e) return;
            if ("string" == typeof e) return P(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(e);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return P(e, r)
        }(O, N) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()))[0],
        M = e[1];
    (e = function(e) {
        var t = e.translate,
            n = e.agreements,
            r = function() {
                var r = b,
                    e = n.map(function(e) {
                        return i().createElement("li", {
                            key: e.id,
                            className: "agreement-item"
                        }, i().createElement(g.Link, {
                            url: e.displayUrl,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-link"
                        }, t(r[e.agreementType])))
                    });
                return i().createElement("ul", null, e)
            },
            a = function() {
                var e = A;
                return i().createElement("div", null, t(e))
            },
            o = S,
            e = i().createElement("div", {
                className: "agreement-modal-body"
            }, i().createElement(a, null), i().createElement(r, {
                agreements: n
            })),
            a = w;
        (0, c.useEffect)(function() {
            M.open()
        }, []);
        r = function() {
            var i, e = (i = regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, v(n.map(function(e) {
                                return e.id
                            }));
                        case 3:
                            U.updateDoesUserNeedToAcceptAgreements(!1), e.next = 9;
                            break;
                        case 6:
                            e.prev = 6, e.t0 = e.catch(0), console.error("Error accepting user agreements ".concat(e.t0));
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }, e, null, [
                    [0, 6]
                ])
            }), function() {
                var e = this,
                    c = arguments;
                return new Promise(function(r, t) {
                    var n = i.apply(e, c);

                    function a(e) {
                        k(n, r, t, a, o, "next", e)
                    }

                    function o(e) {
                        k(n, r, t, a, o, "throw", e)
                    }
                    a(void 0)
                })
            });
            return function() {
                return e.apply(this, arguments)
            }
        }();
        return i().createElement(C, {
            title: t(o),
            body: e,
            neutralButtonText: t(a),
            onNeutral: r,
            id: "user-agreements-checker-modal",
            closeable: !1
        })
    }).propTypes = {
        translate: a().func.isRequired,
        agreements: a().arrayOf(a().shape({
            displayUrl: a().string.isRequired,
            id: a().string.isRequired,
            agreementType: a().string.isRequired,
            clientType: a().string.isRequired,
            regulationType: a().string.isRequired
        })).isRequired
    };
    var I = e;

    function j(e, r, t, n, a, o, c) {
        try {
            var i = e[o](c),
                u = i.value
        } catch (e) {
            return void t(e)
        }
        i.done ? r(u) : Promise.resolve(u).then(n, a)
    }

    function D(e, r) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, r) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var t = [],
                n = !0,
                a = !1,
                o = void 0;
            try {
                for (var c, i = e[Symbol.iterator](); !(n = (c = i.next()).done) && (t.push(c.value), !r || t.length !== r); n = !0);
            } catch (e) {
                a = !0, o = e
            } finally {
                try {
                    n || null == i.return || i.return()
                } finally {
                    if (a) throw o
                }
            }
            return t
        }(e, r) || function(e, r) {
            if (!e) return;
            if ("string" == typeof e) return q(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(e);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return q(e, r)
        }(e, r) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function q(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
        return n
    }(e = function(e) {
        var r = e.translate,
            t = D((0, c.useState)([]), 2),
            e = t[0],
            a = t[1];
        return (0, c.useEffect)(function() {
            var n = new Date;
            (function() {
                var i, e = (i = regeneratorRuntime.mark(function e() {
                    var r, t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = !1, e.prev = 1, e.next = 4, U.shouldFetchAgreements(n);
                            case 4:
                                r = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), console.error("Error calling shouldFetchAgreements ".concat(e.t0));
                            case 10:
                                if (r) return e.prev = 11, e.next = 14, d();
                                e.next = 22;
                                break;
                            case 14:
                                t = e.sent, a(t.data), 0 < t.data.length ? U.updateDoesUserNeedToAcceptAgreements(!0, n) : U.updateDoesUserNeedToAcceptAgreements(!1, n), e.next = 22;
                                break;
                            case 19:
                                e.prev = 19, e.t1 = e.catch(11), console.error("Error fetching or caching user agreements ".concat(e.t1));
                            case 22:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [1, 7],
                        [11, 19]
                    ])
                }), function() {
                    var e = this,
                        c = arguments;
                    return new Promise(function(r, t) {
                        var n = i.apply(e, c);

                        function a(e) {
                            j(n, r, t, a, o, "next", e)
                        }

                        function o(e) {
                            j(n, r, t, a, o, "throw", e)
                        }
                        a(void 0)
                    })
                });
                return function() {
                    return e.apply(this, arguments)
                }
            })()()
        }, []), 0 < e.length ? i().createElement(I, {
            translate: r,
            agreements: e
        }) : null
    }).propTypes = {
        translate: a().func.isRequired
    };
    var F = (0, o.withTranslations)(e, u);
    (0, t.ready)(function() {
        var e = document.getElementById("user-agreements-checker-container");
        null !== e && (0, r.render)(i().createElement(F, null), e)
    })
}();
//# sourceMappingURL=https://js.rbxcdn.com/4a6ccbb2d15a30cd410d-userAgreementsChecker.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("UserAgreementsChecker");