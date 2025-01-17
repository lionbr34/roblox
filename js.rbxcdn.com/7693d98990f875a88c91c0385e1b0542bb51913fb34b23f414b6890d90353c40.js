! function() {
    var n = {
            779: function(e, t) {
                var n;
                /*!
                  Copyright (c) 2017 Jed Watson.
                  Licensed under the MIT License (MIT), see
                  http://jedwatson.github.io/classnames
                */
                ! function() {
                    "use strict";
                    var l = {}.hasOwnProperty;

                    function r() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var o = typeof n;
                                if ("string" == o || "number" == o) e.push(n);
                                else if (Array.isArray(n) && n.length) {
                                    var a = r.apply(null, n);
                                    a && e.push(a)
                                } else if ("object" == o)
                                    for (var i in n) l.call(n, i) && n[i] && e.push(i)
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (r.default = r, e.exports = r) : void 0 === (n = function() {
                        return r
                    }.apply(t, [])) || (e.exports = n)
                }()
            }
        },
        o = {};

    function X(e) {
        if (o[e]) return o[e].exports;
        var t = o[e] = {
            exports: {}
        };
        return n[e](t, t.exports, X), t.exports
    }
    X.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return X.d(t, {
                a: t
            }), t
        }, X.d = function(e, t) {
            for (var n in t) X.o(t, n) && !X.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, X.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";

            function s(e) {
                function t(e) {
                    B(e, n), o()
                }
                var n = e.nonEssentialCookieList,
                    o = e.closeBanner,
                    a = e.showConsentTool,
                    i = e.translate,
                    l = (new E.Intl).getRobloxLocale(),
                    r = i(N),
                    c = r.indexOf(D),
                    s = b.urlService.getUrlWithLocale(C.privacyPolicyUrl, l),
                    e = h().createElement("span", {
                        className: "text"
                    }, r.substring(0, c)),
                    l = D.length,
                    l = h().createElement("span", {
                        className: "text"
                    }, r.substring(c + l)),
                    s = h().createElement("a", {
                        className: "text-link",
                        target: "_blank",
                        href: s,
                        rel: "noreferrer"
                    }, i(w));
                return h().createElement(h().Fragment, null, h().createElement("div", {
                    className: "cookie-banner"
                }, h().createElement("div", {
                    className: "cookie-description-content"
                }, e, s, l), h().createElement("div", null, h().createElement("div", {
                    className: "cookie-button-container"
                }, h().createElement(R.Button, {
                    className: "see-all-link btn-secondary-md consent-tool-link",
                    onClick: a
                }, i(L)), h().createElement("div", {
                    className: "cookie-btn-float"
                }, h().createElement(R.Button, {
                    className: "btn-secondary-lg cookie-btn",
                    onClick: function() {
                        return t([""])
                    }
                }, i(x)), h().createElement(R.Button, {
                    className: "btn-cta-lg cookie-btn",
                    onClick: function() {
                        return t(n)
                    }
                }, i(A)))))), h().createElement("div", {
                    className: "cookie-banner-bg",
                    onClick: function() {
                        return t([""])
                    },
                    "aria-hidden": "true"
                }))
            }

            function y(e) {
                var t = e.cookieName,
                    e = e.description;
                return h().createElement("div", {
                    className: "cookie-item"
                }, h().createElement("p", {
                    className: "cookie-name font-body text"
                }, t), h().createElement("p", {
                    className: "cookie-description font-footer"
                }, e))
            }

            function k(e) {
                var t = e.translate,
                    n = e.isNonEssentialCookieListVisible,
                    o = S()({
                        hidden: !n
                    }),
                    a = P.GACompanyCollectionList.map(function(e) {
                        return h().createElement("div", {
                            className: "google-analytics-company-info-sec"
                        }, h().createElement("p", {
                            className: "font-caption-header text-emphasis"
                        }, t(e.label)), h().createElement("p", {
                            className: "font-caption-body text"
                        }, t(e.content)))
                    }),
                    i = h().createElement("a", {
                        className: "text-link",
                        target: "_blank",
                        href: C.googleAnalyticsReadMore,
                        rel: "noreferrer"
                    }, t(P.googleAnalytics)),
                    n = (e = t(P.GAReadMore)).indexOf(P.GAReadMoreUrl),
                    i = h().createElement("p", {
                        className: "font-caption-body text"
                    }, e.substring(0, n), i),
                    a = h().createElement("div", null, h().createElement(R.Link, {
                        cssClasses: "font-header-2 text-emphasis",
                        url: C.googleAnalyticsWebsite
                    }, t(P.googleAnalytics), h().createElement("span", {
                        className: "icon-nav-external-link-sm cookie-external-link-icon"
                    })), h().createElement("div", null, h().createElement("span", {
                        className: "google-analytics-info-subheader"
                    }, t(P.ownedBy)), h().createElement("span", {
                        className: "font-caption-header text-emphasis"
                    }, P.googleInc)), h().createElement("p", {
                        className: "text-emphasis google-analytics-company-info-sec"
                    }, t(P.googleAnalyticsPurposeHeader)), h().createElement("span", {
                        className: "font-caption-body text"
                    }, t(P.googleAnalyticsPurposeDescription)), h().createElement("p", {
                        className: "text-emphasis google-analytics-company-info-sec"
                    }, t(P.companyCollectionHeader)), a, i),
                    i = h().createElement("div", {
                        className: "analytics-cookie-list"
                    }, h().createElement(y, {
                        cookieName: P.RBXViralAcquisition.cookieName,
                        description: t(P.RBXViralAcquisition.description)
                    }), h().createElement(y, {
                        cookieName: P.RBXSource.cookieName,
                        description: t(P.RBXSource.description)
                    }));
                return h().createElement("div", {
                    className: o
                }, i, a)
            }

            function u(e) {
                var t = e.nonEssentialCookieList,
                    n = e.essentialCookieList,
                    o = e.translate,
                    a = e.closeConsentTool,
                    i = (p = (0, v.useState)(!1))[0],
                    l = p[1],
                    r = (d = (0, v.useState)(!1))[0],
                    c = d[1],
                    s = (g = (0, v.useState)(!1))[0],
                    u = g[1];
                (0, v.useEffect)(function() {
                    U.open()
                }, []);
                var m = S()({
                        hidden: !r
                    }),
                    f = S()("cookie-consent-tool-collaps", {
                        on: s
                    }),
                    e = S()("cookie-consent-tool-collaps font-header-2 text-emphasis ", {
                        on: r
                    }),
                    p = (new E.Intl).getRobloxLocale(),
                    d = b.urlService.getUrlWithLocale(C.privacyPolicyUrl, p),
                    g = h().createElement("div", {
                        className: "cookie-consent-tool-info-link"
                    }, h().createElement("a", {
                        className: "text-link",
                        target: "_blank",
                        href: d,
                        rel: "noreferrer"
                    }, o(w), h().createElement("span", {
                        className: "icon-nav-external-link-sm cookie-external-link-icon"
                    }))),
                    p = h().createElement("div", {
                        className: "cookie-consent-tool-info-link"
                    }, h().createElement("a", {
                        className: "text-link",
                        target: "_blank",
                        href: C.supportUrl,
                        rel: "noreferrer"
                    }, o(P.requestData), h().createElement("span", {
                        className: "icon-nav-external-link-sm cookie-external-link-icon"
                    }))),
                    d = h().createElement("div", null, h().createElement("div", {
                        className: "static-section"
                    }, h().createElement("div", {
                        className: "font-header-2 text-emphasis google-analytics-company-info-sec"
                    }, o(P.infoCollectionHeader)), h().createElement("p", {
                        className: "font-caption-body text"
                    }, o(P.infoCollectionContent))), h().createElement("div", {
                        className: "static-section"
                    }, h().createElement("div", {
                        className: "font-header-2 text-emphasis google-analytics-company-info-sec"
                    }, o(P.infoCollectionHeader2)), h().createElement("p", {
                        className: "font-caption-body text"
                    }, o(P.infoCollectionContent2))), h().createElement("div", {
                        className: "static-section"
                    }, h().createElement("div", {
                        className: "font-header-2 text-emphasis google-analytics-company-info-sec"
                    }, o(P.infoPartnerCollectionHeader)), h().createElement("p", {
                        className: "font-caption-body text"
                    }, o(P.infoPartnerCollectionContent)))),
                    f = h().createElement("div", null, h().createElement("button", {
                        className: f,
                        type: "button",
                        onClick: function() {
                            return u(!s)
                        }
                    }, h().createElement("span", {
                        className: "font-header-2 text-emphasis"
                    }, o("Heading.AnalyticsCookies"))), h().createElement(R.Toggle, {
                        className: "cookie-toggle",
                        isOn: i,
                        onToggle: function() {
                            return l(!i)
                        }
                    })),
                    n = n.map(function(e) {
                        return h().createElement(y, {
                            cookieName: e.cookieName,
                            description: o(e.description)
                        })
                    }),
                    g = h().createElement("div", null, p, g),
                    n = h().createElement("div", {
                        className: "essential-cookie-section"
                    }, h().createElement("button", {
                        className: e,
                        type: "button",
                        onClick: function() {
                            return c(!r)
                        }
                    }, o(P.essentialCookie)), h().createElement("div", {
                        className: m
                    }, n)),
                    f = h().createElement("div", {
                        className: "cookie-consent-tool-body"
                    }, d, g, n, f, h().createElement(k, {
                        isNonEssentialCookieListVisible: s,
                        translate: o
                    }));
                return h().createElement(H, {
                    title: o(P.consentToolModalTitle),
                    body: f,
                    actionButtonShow: !0,
                    actionButtonText: o(P.saveBtn),
                    neutralButtonText: o(P.cancelBtn),
                    onAction: function() {
                        B(i ? t : [], t), a(null)
                    },
                    onNeutral: function() {
                        return a(T.banner)
                    },
                    id: "cookie-consent-tool-modal"
                })
            }
            var b = CoreUtilities,
                v = React,
                h = X.n(v),
                e = ReactDOM,
                t = "cookie-banner-wrapper",
                m = {
                    banner: "banner",
                    consentTool: "consentTool"
                },
                n = ReactUtilities,
                o = {
                    common: ["CommonUI.Messages", "CommonUI.Controls"],
                    feature: "Feature.Tracking"
                },
                E = Roblox,
                a = E.Endpoints.getAbsoluteUrl,
                i = E.EnvironmentUrls.universalAppConfigurationApi,
                C = {
                    privacyPolicyUrl: a("/info/privacy"),
                    getCookiePolicyConfig: {
                        withCredentials: !0,
                        url: i + "/v1/behaviors/cookie-policy/content"
                    },
                    googleAnalyticsWebsite: "https://marketingplatform.google.com/about/analytics/",
                    supportUrl: a("/support"),
                    googleAnalyticsReadMore: "https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                },
                l = function(e, l, r, c) {
                    return new(r = r || Promise)(function(n, t) {
                        function o(e) {
                            try {
                                i(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                                e(t)
                            })).then(o, a)
                        }
                        i((c = c.apply(e, l || [])).next())
                    })
                },
                r = function(n, o) {
                    var a, i, l, r = {
                            label: 0,
                            sent: function() {
                                if (1 & l[0]) throw l[1];
                                return l[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; r;) try {
                                    if (a = 1, i && (l = 2 & t[0] ? i.return : t[0] ? i.throw || ((l = i.return) && l.call(i), 0) : i.next) && !(l = l.call(i, t[1])).done) return l;
                                    switch (i = 0, l && (t = [2 & t[0], l.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            l = t;
                                            break;
                                        case 4:
                                            return r.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            r.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = r.ops.pop(), r.trys.pop();
                                            continue;
                                        default:
                                            if (!(l = 0 < (l = r.trys).length && l[l.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                r = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!l || t[1] > l[0] && t[1] < l[3])) {
                                                r.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && r.label < l[1]) {
                                                r.label = l[1], l = t;
                                                break
                                            }
                                            if (l && r.label < l[2]) {
                                                r.label = l[2], r.ops.push(t);
                                                break
                                            }
                                            l[2] && r.ops.pop(), r.trys.pop();
                                            continue
                                    }
                                    t = o.call(n, r)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = l = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                f = function() {
                    return l(void 0, void 0, Promise, function() {
                        var t;
                        return r(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t = C.getCookiePolicyConfig, [4, b.httpService.get(t)];
                                case 1:
                                    return void 0 !== (t = e.sent()) ? [2, t.data] : [2, {
                                        ShouldDisplayCookieBannerV3: !1,
                                        NonEssentialCookieList: [],
                                        EssentialCookieList: []
                                    }]
                            }
                        })
                    })
                },
                p = function(e) {
                    for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), o = 0; o < n.length; o++) {
                        for (var a = n[o];
                            " " === a.charAt(0);) a = a.substring(1);
                        if (0 === a.indexOf(t)) return a.substring(t.length, a.length)
                    }
                    return ""
                },
                c = function(e, t, n) {
                    var o = new Date;
                    o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
                    o = "expires=" + o.toUTCString();
                    document.cookie = e + "=" + t + ";" + o
                },
                d = "RBXcb",
                g = 180,
                N = "Description.CookieBannerContent",
                x = "Action.DeclineAll",
                A = "Action.AcceptAll",
                w = "Description.PrivacyPolicy",
                D = "{privacyPolicyLink}",
                L = "Action.SetCookieOptions",
                B = function(n, o) {
                    var a = "";
                    o.forEach(function(e, t) {
                        -1 !== n.indexOf(e) ? a += e + "=true&" : a += e + "=false&", t === o.length - 1 && (a = a.slice(0, -1))
                    }), c(d, a, g)
                },
                R = ReactStyleGuide,
                a = X(779),
                S = X.n(a),
                P = {
                    consentToolModalTitle: "Heading.CookieSettings",
                    saveBtn: "Action.SavePreferences",
                    cancelBtn: "Action.Cancel",
                    infoCollectionHeader: "Heading.InformationCollection",
                    infoCollectionContent: "Description.InformationCollection",
                    infoCollectionHeader2: "Heading.InformationCollection2",
                    infoCollectionContent2: "Description.InformationCollection2",
                    infoPartnerCollectionHeader: "Heading.InformationPartnerCollection",
                    infoPartnerCollectionContent: "Description.InformationPartnerCollection",
                    RBXViralAcquisition: {
                        cookieName: "RBXViralAcquisition",
                        description: "Description.RBXViralAcquisition"
                    },
                    RBXSource: {
                        cookieName: "RBXSource",
                        description: "Description.RBXSource"
                    },
                    googleAnalytics: "Heading.GoogleAnalytics",
                    ownedBy: "Label.OwnedBy",
                    googleInc: "Google Inc.",
                    website: "Label.Website",
                    googleAnalyticsPurposeHeader: "Heading.GoogleAnalyticsPurpose",
                    googleAnalyticsPurposeDescription: "Description.GoogleAnalyticsPurpose",
                    companyCollectionHeader: "Heading.CompanyCollection",
                    GACompanyCollectionList: [{
                        label: "Label.DataCollected",
                        content: "Description.DataCollected"
                    }, {
                        label: "Label.DataSharing",
                        content: "Description.DataSharing"
                    }, {
                        label: "Label.DataRetention",
                        content: "Description.DataRetention"
                    }, {
                        label: "Label.DataUse",
                        content: "Description.DataUse"
                    }, {
                        label: "Label.DataStorage",
                        content: "Description.Undisclosed"
                    }],
                    requestData: "Action.RequestData",
                    essentialCookie: "Heading.EssentialCookies",
                    analyticsCookie: "Heading.AnalyticsCookies",
                    GAReadMore: "Description.GAReadMore",
                    GAReadMoreUrl: "{googleAnalyticsLink}"
                },
                T = m,
                H = (a = (0, R.createModal)())[0],
                U = a[1],
                I = function(e, l, r, c) {
                    return new(r = r || Promise)(function(n, t) {
                        function o(e) {
                            try {
                                i(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                i(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                                e(t)
                            })).then(o, a)
                        }
                        i((c = c.apply(e, l || [])).next())
                    })
                },
                G = function(n, o) {
                    var a, i, l, r = {
                            label: 0,
                            sent: function() {
                                if (1 & l[0]) throw l[1];
                                return l[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (a) throw new TypeError("Generator is already executing.");
                                for (; r;) try {
                                    if (a = 1, i && (l = 2 & t[0] ? i.return : t[0] ? i.throw || ((l = i.return) && l.call(i), 0) : i.next) && !(l = l.call(i, t[1])).done) return l;
                                    switch (i = 0, l && (t = [2 & t[0], l.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            l = t;
                                            break;
                                        case 4:
                                            return r.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            r.label++, i = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = r.ops.pop(), r.trys.pop();
                                            continue;
                                        default:
                                            if (!(l = 0 < (l = r.trys).length && l[l.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                r = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!l || t[1] > l[0] && t[1] < l[3])) {
                                                r.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && r.label < l[1]) {
                                                r.label = l[1], l = t;
                                                break
                                            }
                                            if (l && r.label < l[2]) {
                                                r.label = l[2], r.ops.push(t);
                                                break
                                            }
                                            l[2] && r.ops.pop(), r.trys.pop();
                                            continue
                                    }
                                    t = o.call(n, r)
                                } catch (e) {
                                    t = [6, e], i = 0
                                } finally {
                                    a = l = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                M = (0, n.withTranslations)(function(e) {
                    var t = e.translate,
                        n = (0, v.useState)([]),
                        o = n[0],
                        a = n[1],
                        e = (0, v.useState)([]),
                        i = e[0],
                        l = e[1],
                        n = (0, v.useState)(null),
                        e = n[0],
                        r = n[1],
                        c = m;
                    switch ((0, v.useEffect)(function() {
                        var e = p(d);
                        e && "" !== e || I(void 0, void 0, void 0, function() {
                            var t;
                            return G(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, f()];
                                    case 1:
                                        return (t = e.sent()).ShouldDisplayCookieBannerV3 && t.EssentialCookieList ? (a(t.NonEssentialCookieList), l(t.EssentialCookieList), r(c.banner)) : B(t.NonEssentialCookieList, t.NonEssentialCookieList), [2]
                                }
                            })
                        })
                    }, []), e) {
                        case c.banner:
                            return h().createElement(s, {
                                translate: t,
                                nonEssentialCookieList: o,
                                closeBanner: function() {
                                    return r(null)
                                },
                                showConsentTool: function() {
                                    return r(c.consentTool)
                                }
                            });
                        case c.consentTool:
                            return h().createElement(u, {
                                translate: t,
                                essentialCookieList: i,
                                nonEssentialCookieList: o,
                                closeConsentTool: r
                            });
                        default:
                            return h().createElement("div", null)
                    }
                }, o),
                O = document.getElementById(t);
            (0, b.ready)(function() {
                O && (0, e.render)(h().createElement(M, null), O)
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/d5f9913acc147720da7a-cookieBannerV3.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("CookieBannerV3");