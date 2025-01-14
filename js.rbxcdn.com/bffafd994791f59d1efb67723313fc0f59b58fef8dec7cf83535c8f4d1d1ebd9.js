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
                    var i = {}.hasOwnProperty;

                    function l() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var o = typeof n;
                                if ("string" == o || "number" == o) e.push(n);
                                else if (Array.isArray(n) && n.length) {
                                    var a = l.apply(null, n);
                                    a && e.push(a)
                                } else if ("object" == o)
                                    for (var r in n) i.call(n, r) && n[r] && e.push(r)
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (l.default = l, e.exports = l) : void 0 === (n = function() {
                        return l
                    }.apply(t, [])) || (e.exports = n)
                }()
            }
        },
        o = {};

    function de(e) {
        if (o[e]) return o[e].exports;
        var t = o[e] = {
            exports: {}
        };
        return n[e](t, t.exports, de), t.exports
    }
    de.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return de.d(t, {
                a: t
            }), t
        }, de.d = function(e, t) {
            for (var n in t) de.o(t, n) && !de.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, de.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var y = React,
                h = de.n(y),
                o = ReactDOM,
                i = CoreUtilities,
                a = "account-settings-language-selector",
                e = {
                    common: ["CommonUI.Features"],
                    feature: "Feature.Tracking"
                },
                r = [{
                    name: "about",
                    path: "/info/about-us",
                    labelTranslationKey: "Label.AboutUs"
                }, {
                    name: "jobs",
                    path: "/info/jobs",
                    labelTranslationKey: "Label.Jobs"
                }, {
                    name: "blog",
                    path: "/info/blog",
                    labelTranslationKey: "Label.sBlog"
                }, {
                    name: "parents",
                    path: "/info/parents",
                    labelTranslationKey: "Label.Parents"
                }, {
                    name: "help",
                    path: "/info/help",
                    labelTranslationKey: "Label.Help"
                }, {
                    name: "terms",
                    path: "/info/terms",
                    labelTranslationKey: "Label.Terms"
                }, {
                    name: "accessibility",
                    path: "/info/accessibility",
                    labelTranslationKey: "Label.Accessibility"
                }, {
                    name: "privacy",
                    path: "/info/privacy",
                    labelTranslationKey: "Label.Privacy",
                    cssClass: "privacy"
                }],
                l = [{
                    name: "about",
                    path: "/info/about-us",
                    labelTranslationKey: "Label.AboutUs"
                }, {
                    name: "jobs",
                    path: "/info/jobs",
                    labelTranslationKey: "Label.Jobs"
                }, {
                    name: "blog",
                    path: "/info/blog",
                    labelTranslationKey: "Label.sBlog"
                }, {
                    name: "parents",
                    path: "/info/parents",
                    labelTranslationKey: "Label.Parents"
                }, {
                    name: "giftcards",
                    path: "/giftcards",
                    labelTranslationKey: "Label.GiftCards",
                    cssClass: "giftcards"
                }, {
                    name: "help",
                    path: "/info/help",
                    labelTranslationKey: "Label.Help"
                }, {
                    name: "terms",
                    path: "/info/terms",
                    labelTranslationKey: "Label.Terms"
                }, {
                    name: "accessibility",
                    path: "/info/accessibility",
                    labelTranslationKey: "Label.Accessibility"
                }, {
                    name: "privacy",
                    path: "/info/privacy",
                    labelTranslationKey: "Label.Privacy",
                    cssClass: "privacy"
                }],
                t = PropTypes,
                n = de.n(t),
                c = ReactUtilities,
                s = HeaderScripts,
                u = Roblox;

            function p(e) {
                var t = e.translate,
                    e = (new Date).getFullYear();
                return h().createElement("p", {
                    className: "text-footer footer-note"
                }, t("Description.CopyRightMessageDynamicYear", {
                    copyrightYear: e
                }))
            }
            p.propTypes = {
                translate: n().func.isRequired
            };
            var d = p,
                f = de(779),
                v = de.n(f),
                b = ReactStyleGuide,
                m = "Heading.CookieSettings",
                t = u.EnvironmentUrls.universalAppConfigurationApi,
                g = {
                    getCookiePolicyConfig: {
                        withCredentials: !0,
                        url: "".concat(t, "/v1/behaviors/cookie-policy/content")
                    }
                };

            function L(e, t, n, o, a, r, i) {
                try {
                    var l = e[r](i),
                        c = l.value
                } catch (e) {
                    return void n(e)
                }
                l.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function E(e) {
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

            function C(e) {
                var t = e.translate,
                    n = e.isNonEssentialCookieListVisible,
                    o = v()({
                        hidden: !n
                    }),
                    a = N.GACompanyCollectionList.map(function(e) {
                        return h().createElement("div", {
                            className: "google-analytics-company-info-sec"
                        }, h().createElement("p", {
                            className: "font-caption-header text-emphasis"
                        }, t(e.label)), h().createElement("p", {
                            className: "font-caption-body text"
                        }, t(e.content)))
                    }),
                    r = h().createElement("a", {
                        className: "text-link",
                        target: "_blank",
                        href: S.googleAnalyticsReadMore,
                        rel: "noreferrer"
                    }, t(N.googleAnalytics)),
                    n = (e = t(N.GAReadMore)).indexOf(N.GAReadMoreUrl),
                    r = h().createElement("p", {
                        className: "font-caption-body text"
                    }, e.substring(0, n), r),
                    a = h().createElement("div", null, h().createElement(b.Link, {
                        cssClasses: "font-header-2 text-emphasis",
                        url: S.googleAnalyticsWebsite
                    }, t(N.googleAnalytics), h().createElement("span", {
                        className: "icon-nav-external-link-sm cookie-external-link-icon"
                    })), h().createElement("div", null, h().createElement("span", {
                        className: "google-analytics-info-subheader"
                    }, t(N.ownedBy)), h().createElement("span", {
                        className: "font-caption-header text-emphasis"
                    }, N.googleInc)), h().createElement("p", {
                        className: "text-emphasis google-analytics-company-info-sec"
                    }, t(N.googleAnalyticsPurposeHeader)), h().createElement("span", {
                        className: "font-caption-body text"
                    }, t(N.googleAnalyticsPurposeDescription)), h().createElement("p", {
                        className: "text-emphasis google-analytics-company-info-sec"
                    }, t(N.companyCollectionHeader)), a, r),
                    r = h().createElement("div", {
                        className: "analytics-cookie-list"
                    }, h().createElement(E, {
                        cookieName: N.RBXViralAcquisition.cookieName,
                        description: t(N.RBXViralAcquisition.description)
                    }), h().createElement(E, {
                        cookieName: N.RBXSource.cookieName,
                        description: t(N.RBXSource.description)
                    }));
                return h().createElement("div", {
                    className: o
                }, r, a)
            }

            function k(e) {
                var t = e.nonEssentialCookieList,
                    n = e.essentialCookieList,
                    o = e.translate,
                    a = e.closeConsentTool,
                    r = (f = (0, y.useState)(!1))[0],
                    i = f[1],
                    l = (m = (0, y.useState)(!1))[0],
                    c = m[1],
                    s = (g = (0, y.useState)(!1))[0],
                    u = g[1];
                (0, y.useEffect)(function() {
                    M.open()
                }, []);
                var p = v()({
                        hidden: !l
                    }),
                    d = v()("cookie-consent-tool-collaps", {
                        on: s
                    }),
                    e = v()("cookie-consent-tool-collaps font-header-2 text-emphasis ", {
                        on: l
                    }),
                    f = U.getLocale() || "",
                    m = U.buildLinkWithLocale(S.privacyPolicyUrl, f),
                    g = h().createElement("div", {
                        className: "cookie-consent-tool-info-link"
                    }, h().createElement("a", {
                        className: "text-link",
                        target: "_blank",
                        href: m,
                        rel: "noreferrer"
                    }, o(P), h().createElement("span", {
                        className: "icon-nav-external-link-sm cookie-external-link-icon"
                    }))),
                    f = h().createElement("div", {
                        className: "cookie-consent-tool-info-link"
                    }, h().createElement("a", {
                        className: "text-link",
                        target: "_blank",
                        href: S.supportUrl,
                        rel: "noreferrer"
                    }, o(N.requestData), h().createElement("span", {
                        className: "icon-nav-external-link-sm cookie-external-link-icon"
                    }))),
                    m = h().createElement("div", null, h().createElement("div", {
                        className: "static-section"
                    }, h().createElement("div", {
                        className: "font-header-2 text-emphasis google-analytics-company-info-sec"
                    }, o(N.infoCollectionHeader)), h().createElement("p", {
                        className: "font-caption-body text"
                    }, o(N.infoCollectionContent))), h().createElement("div", {
                        className: "static-section"
                    }, h().createElement("div", {
                        className: "font-header-2 text-emphasis google-analytics-company-info-sec"
                    }, o(N.infoCollectionHeader2)), h().createElement("p", {
                        className: "font-caption-body text"
                    }, o(N.infoCollectionContent2))), h().createElement("div", {
                        className: "static-section"
                    }, h().createElement("div", {
                        className: "font-header-2 text-emphasis google-analytics-company-info-sec"
                    }, o(N.infoPartnerCollectionHeader)), h().createElement("p", {
                        className: "font-caption-body text"
                    }, o(N.infoPartnerCollectionContent)))),
                    d = h().createElement("div", null, h().createElement("button", {
                        className: d,
                        type: "button",
                        onClick: function() {
                            return u(!s)
                        }
                    }, h().createElement("span", {
                        className: "font-header-2 text-emphasis"
                    }, o("Heading.AnalyticsCookies"))), h().createElement(b.Toggle, {
                        className: "cookie-toggle",
                        isOn: r,
                        onToggle: function() {
                            return i(!r)
                        }
                    })),
                    n = n.map(function(e) {
                        return h().createElement(E, {
                            cookieName: e.cookieName,
                            description: o(e.description)
                        })
                    }),
                    g = h().createElement("div", null, f, g),
                    n = h().createElement("div", {
                        className: "essential-cookie-section"
                    }, h().createElement("button", {
                        className: e,
                        type: "button",
                        onClick: function() {
                            return c(!l)
                        }
                    }, o(N.essentialCookie)), h().createElement("div", {
                        className: p
                    }, n)),
                    d = h().createElement("div", {
                        className: "cookie-consent-tool-body"
                    }, m, g, n, d, h().createElement(C, {
                        isNonEssentialCookieListVisible: s,
                        translate: o
                    }));
                return h().createElement(O, {
                    title: o(N.consentToolModalTitle),
                    body: d,
                    actionButtonShow: !0,
                    actionButtonText: o(N.saveBtn),
                    neutralButtonText: o(N.cancelBtn),
                    onAction: function() {
                        D(r ? t : [], t), a(null)
                    },
                    onNeutral: function() {
                        return a(R.banner)
                    },
                    id: "cookie-consent-tool-modal"
                })
            }
            var w = {
                    getCookiePolicy: function() {
                        var l, e = (l = regeneratorRuntime.mark(function e() {
                            var t, n;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = g.getCookiePolicyConfig, e.next = 3, i.httpService.get(t);
                                    case 3:
                                        if (void 0 !== (t = e.sent)) return n = t.data, e.abrupt("return", n);
                                        e.next = 7;
                                        break;
                                    case 7:
                                        return n = {
                                            ShouldDisplayCookieBannerV3: !1,
                                            NonEssentialCookieList: [],
                                            EssentialCookieList: []
                                        }, e.abrupt("return", n);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }), function() {
                            var e = this,
                                i = arguments;
                            return new Promise(function(t, n) {
                                var o = l.apply(e, i);

                                function a(e) {
                                    L(o, t, n, a, r, "next", e)
                                }

                                function r(e) {
                                    L(o, t, n, a, r, "throw", e)
                                }
                                a(void 0)
                            })
                        });
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                N = {
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
                f = u.Endpoints.getAbsoluteUrl,
                t = u.EnvironmentUrls.universalAppConfigurationApi,
                S = {
                    privacyPolicyUrl: f("/info/privacy"),
                    getCookiePolicyConfig: {
                        withCredentials: !0,
                        url: t + "/v1/behaviors/cookie-policy/content"
                    },
                    googleAnalyticsWebsite: "https://marketingplatform.google.com/about/analytics/",
                    supportUrl: f("/support"),
                    googleAnalyticsReadMore: "https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                },
                U = {
                    getLocale: function() {
                        var e = i.urlService ? i.urlService.getQueryParam("locale") : null;
                        return "string" == typeof e ? encodeURIComponent(e) : Array.isArray(e) ? encodeURIComponent(e[0]) : null
                    },
                    buildLinkWithLocale: function(e, t) {
                        return t ? e + "?locale=" + t : e
                    }
                },
                A = "RBXcb",
                x = 180,
                P = "Description.PrivacyPolicy",
                T = function(e, t, n) {
                    var o = new Date;
                    o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
                    o = "expires=" + o.toUTCString();
                    document.cookie = e + "=" + t + ";" + o
                },
                D = function(n, o) {
                    var a = "";
                    o.forEach(function(e, t) {
                        -1 !== n.indexOf(e) ? a += e + "=true&" : a += e + "=false&", t === o.length - 1 && (a = a.slice(0, -1))
                    }), T(A, a, x)
                },
                R = {
                    banner: "banner",
                    consentTool: "consentTool"
                },
                O = (t = (0, b.createModal)())[0],
                M = t[1];

            function B(e, t, n, o, a, r, i) {
                try {
                    var l = e[r](i),
                        c = l.value
                } catch (e) {
                    return void n(e)
                }
                l.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        o = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(o = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0);
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            o || null == l.return || l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return j(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function H(e) {
                var t = e.translate,
                    n = I((0, y.useState)([]), 2),
                    o = n[0],
                    a = n[1],
                    r = I((0, y.useState)([]), 2),
                    e = r[0],
                    i = r[1],
                    n = I((0, y.useState)(!1), 2),
                    r = n[0],
                    l = n[1];
                (0, y.useEffect)(function() {
                    (function() {
                        var l, e = (l = regeneratorRuntime.mark(function e() {
                            var t;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, w.getCookiePolicy();
                                    case 2:
                                        (t = e.sent).ShouldDisplayCookieBannerV3 && t.NonEssentialCookieList && (a(t.NonEssentialCookieList), i(t.EssentialCookieList));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }), function() {
                            var e = this,
                                i = arguments;
                            return new Promise(function(t, n) {
                                var o = l.apply(e, i);

                                function a(e) {
                                    B(o, t, n, a, r, "next", e)
                                }

                                function r(e) {
                                    B(o, t, n, a, r, "throw", e)
                                }
                                a(void 0)
                            })
                        });
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }, []);
                o = r ? h().createElement(k, {
                    nonEssentialCookieList: o,
                    essentialCookieList: e,
                    translate: t,
                    closeConsentTool: function() {
                        return l()
                    }
                }) : null;
                return 0 < e.length ? h().createElement("div", null, h().createElement(b.Button, {
                    onClick: function() {
                        l(!0)
                    },
                    className: "btn text-footer-nav cookie-consent-link",
                    variant: null,
                    size: null,
                    width: null
                }, t(m)), o) : null
            }
            H.propTypes = {
                translate: n().func.isRequired
            };
            var F = H;

            function q(e) {
                var o = e.translate,
                    a = e.intl,
                    t = r,
                    n = !1,
                    e = document.getElementById("footer-container");
                null == e || null != (e = e.getAttribute("data-is-giftcards-footer-enabled")) && (n = "true" === e.toLowerCase()), n && (t = l);
                t = t.map(function(n) {
                    var e = {
                            pathname: n.path,
                            query: {
                                locale: a.getRobloxLocale()
                            }
                        },
                        t = v()("text-footer-nav", n.cssClass);
                    return h().createElement("li", {
                        key: n.name,
                        className: "footer-link"
                    }, h().createElement(b.Link, {
                        url: i.urlService.formatUrl(e),
                        cssClasses: t,
                        target: "_blank",
                        onClick: function(e) {
                            return t = n.name, e = e, void(u.EventStream && u.EventStream.SendEventWithTarget("PageFooter", "click", {
                                destination: "".concat(t),
                                source: "".concat(e.currentTarget.ownerDocument.location.pathname)
                            }, u.EventStream.TargetTypes.WWW));
                            var t
                        }
                    }, o(n.labelTranslationKey)))
                });
                return h().createElement("ul", {
                    className: "row footer-links"
                }, t, h().createElement("li", null, h().createElement(F, {
                    translate: o
                })))
            }
            q.propTypes = {
                translate: n().func.isRequired,
                intl: n().shape({
                    getRobloxLocale: n().func.isRequired
                }).isRequired
            };
            var K = q,
                W = CoreRobloxUtilities,
                f = W.eventStreamService.eventTypes,
                t = "Localization",
                _ = {
                    changeLanguage: {
                        name: "changeLanguage",
                        type: f.formInteraction,
                        context: t,
                        requiredParams: ["userId", "newSupportedLocaleCode", "previousSupportedLocaleCode"]
                    },
                    changeLanguageModal: {
                        name: "changeLanguageModal",
                        type: f.formInteraction,
                        context: t,
                        requiredParams: ["userId", "newSupportedLocaleCode"]
                    }
                },
                G = 6e5;

            function X(e) {
                return (X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function V(e) {
                return function(e) {
                    if (Array.isArray(e)) return z(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return z(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return z(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function Y(t, e) {
                var n, o = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), o.push.apply(o, n)), o
            }

            function J(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Y(Object(a), !0).forEach(function(e) {
                        var t, n;
                        t = o, e = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : Y(Object(a)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return o
            }

            function Q(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function $(e, t) {
                return ($ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Z(n) {
                var o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var e, t = te(n);
                    return e = o ? (e = te(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" !== X(e) && "function" != typeof e ? ee(t) : e
                }
            }

            function ee(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function te(e) {
                return (te = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function ne(e) {
                return e.locale && e.locale.nativeName ? e.isEnabledForFullExperience ? e.locale.nativeName : "".concat(e.locale.nativeName, "*") : ""
            }
            var oe = W.dataStores.localeDataStore;
            (t = function() {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && $(e, t)
                }(a, h().Component);
                var e, t, n, o = Z(a);

                function a(e) {
                    return function(e) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this), (e = o.call(this, e)).state = {
                        supportedLocales: [],
                        userLocale: {},
                        showUnsupportedModal: !1,
                        isUserLocaleUnsupported: !1,
                        isLocaleUpdateInProgress: !1
                    }, e.handleNativeLanguageChange = e.handleNativeLanguageChange.bind(ee(e)), e.hideUnsupportedModal = e.hideUnsupportedModal.bind(ee(e)), e
                }
                return e = a, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        this.loadSupportedLocales()
                    }
                }, {
                    key: "handleLanguageChange",
                    value: function(e) {
                        var t = this,
                            n = J({}, e.locale),
                            o = this.state.userLocale,
                            a = this.props,
                            r = a.isAuthenticatedUser,
                            i = a.onLanguageChange,
                            o = J({}, o);
                        r ? (this.setState({
                            isLocaleUpdateInProgress: !0
                        }), oe.setUserLocale(n.locale).then(function() {
                            e.isEnabledForFullExperience ? i(n) : (t.showUnsupportedLocaleMessage(), t.showUnsupportedLocaleModal(n))
                        }, function(e) {
                            console.debug(e)
                        }).finally(function() {
                            t.setState({
                                isLocaleUpdateInProgress: !1
                            })
                        })) : i(n), this.setUserLocaleByLocaleCode(n.locale), W.eventStreamService.sendEvent(_.changeLanguage, {
                            userId: s.authenticatedUser.id,
                            newSupportedLocaleCode: n.locale,
                            previousSupportedLocaleCode: o.locale.locale
                        })
                    }
                }, {
                    key: "handleNativeLanguageChange",
                    value: function(e) {
                        var t = this.state.supportedLocales,
                            n = e.target.value,
                            t = t.find(function(e) {
                                return e.locale.locale === n
                            });
                        this.handleLanguageChange(t)
                    }
                }, {
                    key: "getDefaultSelector",
                    value: function() {
                        var t = this,
                            e = this.state,
                            n = e.supportedLocales,
                            o = e.userLocale,
                            e = e.isLocaleUpdateInProgress,
                            n = n.map(function(e) {
                                return h().createElement(b.Dropdown.Item, {
                                    key: e.locale.id,
                                    onClick: function() {
                                        return t.handleLanguageChange(e)
                                    }
                                }, ne(e))
                            }),
                            o = ne(o);
                        return h().createElement(b.Dropdown, {
                            currSelectionLabel: o,
                            id: "language-switcher",
                            icon: "icon-globe",
                            disabled: e
                        }, n)
                    }
                }, {
                    key: "getNativeSelector",
                    value: function() {
                        var e = this.state,
                            t = e.supportedLocales,
                            e = e.userLocale,
                            t = t.map(function(e) {
                                return {
                                    value: e.locale.locale,
                                    key: e.locale.id,
                                    label: ne(e)
                                }
                            }),
                            e = e.locale && e.locale.locale;
                        return 0 < t.length && h().createElement(b.NativeDropdown, {
                            id: "language-switcher",
                            selectionItems: t,
                            onChange: this.handleNativeLanguageChange,
                            selectedItemvalue: e
                        })
                    }
                }, {
                    key: "setUserLocaleByLocaleCode",
                    value: function(e) {
                        e = this.findSupportedLocaleByLocaleCode(e);
                        this.setState({
                            userLocale: J({}, e)
                        }), e.isEnabledForFullExperience || this.showUnsupportedLocaleMessage()
                    }
                }, {
                    key: "sortSupportedLocalesByFullExperience",
                    value: function(e) {
                        if (Array.isArray(e)) {
                            var t = e.filter(function(e) {
                                    return e.isEnabledForFullExperience
                                }).sort(function(e, t) {
                                    return e.locale.nativeName > t.locale.nativeName ? 1 : -1
                                }),
                                n = e.filter(function(e) {
                                    return !e.isEnabledForFullExperience
                                }).sort(function(e, t) {
                                    return e.locale.nativeName > t.locale.nativeName ? 1 : -1
                                });
                            return [].concat(V(t), V(n))
                        }
                        return e
                    }
                }, {
                    key: "findSupportedLocaleByLocaleCode",
                    value: function(t) {
                        return this.state.supportedLocales.find(function(e) {
                            return e.locale.locale === t
                        })
                    }
                }, {
                    key: "loadSupportedLocales",
                    value: function() {
                        var t = this;
                        oe.getLocalesWithCache(G).then(function(e) {
                            t.setState({
                                supportedLocales: t.sortSupportedLocalesByFullExperience(e.data)
                            }), t.loadUserLocale()
                        }, function(e) {
                            console.debug(e)
                        })
                    }
                }, {
                    key: "loadUserLocale",
                    value: function() {
                        var t, n = this,
                            e = i.urlService.getQueryParam("locale");
                        e ? this.setUserLocaleByLocaleCode(e) : (t = this.props.isAuthenticatedUser, oe.getUserLocale().then(function(e) {
                            e = (t ? e.data.ugc : e.data.signupAndLogin).locale;
                            n.setUserLocaleByLocaleCode(e)
                        }, function(e) {
                            console.debug(e)
                        }))
                    }
                }, {
                    key: "showUnsupportedLocaleModal",
                    value: function(e) {
                        this.props.showWarningModalForUnsupportedLocale && (this.setState({
                            showUnsupportedModal: !0
                        }), W.eventStreamService.sendEvent(_.changeLanguageModal, {
                            userId: s.authenticatedUser.id,
                            newSupportedLocaleCode: e.locale
                        }))
                    }
                }, {
                    key: "hideUnsupportedModal",
                    value: function() {
                        (0, this.props.onLanguageChange)(this.state.userLocale)
                    }
                }, {
                    key: "showUnsupportedLocaleMessage",
                    value: function() {
                        this.props.showWarningMessageForUnsupportedLocale && this.setState({
                            isUserLocaleUnsupported: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.translate,
                            n = e.isNative,
                            o = this.state,
                            a = o.showUnsupportedModal,
                            r = o.isUserLocaleUnsupported,
                            e = o.supportedLocales,
                            o = o.userLocale;
                        return h().createElement(h().Fragment, null, 0 < e.length && o.locale ? h().createElement("div", {
                            className: "language-selector-wrapper"
                        }, n ? this.getNativeSelector() : this.getDefaultSelector()) : h().createElement(b.Loading, null), h().createElement(b.SimpleModal, {
                            title: t("Heading.UnsupportedLanguage"),
                            body: t("Description.UnsupportedLanguage"),
                            show: a,
                            neutralButtonText: t("Action.Ok"),
                            onNeutral: this.hideUnsupportedModal
                        }), r && h().createElement("div", {
                            className: "row"
                        }, h().createElement("span", {
                            className: "text text-error"
                        }, t("Description.UnsupportedLanguage"))))
                    }
                }]) && Q(e.prototype, t), n && Q(e, n), a
            }()).defaultProps = {
                onLanguageChange: function() {},
                isAuthenticatedUser: !1,
                isNative: !1,
                showWarningModalForUnsupportedLocale: !0,
                showWarningMessageForUnsupportedLocale: !0
            }, t.propTypes = {
                isAuthenticatedUser: n().bool,
                onLanguageChange: n().func,
                isNative: n().bool,
                showWarningModalForUnsupportedLocale: n().bool,
                showWarningMessageForUnsupportedLocale: n().bool,
                translate: n().func.isRequired
            };
            var ae = t;

            function re(e) {
                var t = i.pageName.PageNameProvider && i.pageName.PageNameProvider.isLandingPage(),
                    n = null === s.authenticatedUser || void 0 === s.authenticatedUser ? void 0 : s.authenticatedUser.isAuthenticated,
                    o = u.DeviceMeta && new u.DeviceMeta,
                    a = o && (o.isPhone || o.isTablet),
                    r = n || t,
                    o = e.translate;
                return h().createElement("div", {
                    className: "footer"
                }, h().createElement(K, e), h().createElement("div", {
                    className: "row copyright-container"
                }, h().createElement("div", {
                    className: "col-sm-6 col-md-3"
                }, r && h().createElement(ae, {
                    translate: o,
                    onLanguageChange: function(e) {
                        e = e.locale;
                        t && e ? (e = {
                            pathname: window.location.pathname,
                            query: {
                                locale: e
                            }
                        }, window.location.href = i.urlService.formatUrl(e)) : window.location.reload()
                    },
                    isAuthenticatedUser: n,
                    showWarningMessageForUnsupportedLocale: !1,
                    isNative: a
                })), h().createElement("div", {
                    className: r ? "col-sm-6 col-md-9" : "col-sm-12"
                }, h().createElement(d, e))))
            }
            re.propTypes = {
                translate: n().func.isRequired
            };
            var ie = re;

            function le(e) {
                var t = e.translate,
                    e = e.intl;
                return h().createElement(ie, {
                    translate: t,
                    intl: e
                })
            }
            le.propTypes = {
                translate: n().func.isRequired,
                intl: n().shape({
                    getRobloxLocale: n().func.isRequired
                }).isRequired
            };
            var ce = (0, c.withTranslations)(le, e),
                se = function(e, t) {
                    u.DeviceMeta && W.hybridService && (new u.DeviceMeta).isInApp && W.hybridService.localization && W.hybridService.localization(e, t)
                };

            function ue(e) {
                var t = e.translate,
                    e = null === s.authenticatedUser || void 0 === s.authenticatedUser ? void 0 : s.authenticatedUser.isAuthenticated;
                return h().createElement("div", {
                    className: "col-xs-12 col-sm-6"
                }, h().createElement(ae, {
                    onLanguageChange: function(e) {
                        var t = e.locale;
                        t && se(t, function() {
                            console.debug("Language Change Hybrid Event: ".concat(t))
                        }), window.location.reload()
                    },
                    translate: t,
                    isAuthenticatedUser: e,
                    isNative: !0
                }))
            }
            ue.propTypes = {
                translate: n().func.isRequired
            };
            var pe = (0, c.withTranslations)(ue, e);
            (0, i.ready)(function() {
                var e = document.getElementById("footer-container");
                e && (0, o.render)(h().createElement(ce, null), e);
                var t = document.getElementById(a),
                    n = 10;
                (function e() {
                    !(t = document.getElementById(a)) && 0 < n ? (--n, setTimeout(e, 200)) : t && (0, o.render)(h().createElement(pe, null), t)
                })(), "/my/account" === window.location.pathname.toLowerCase() && (window.onhashchange = function() {
                    var e;
                    "#!/info" !== window.location.hash || (e = document.getElementById(a)) && (0, o.render)(h().createElement(pe, null), e)
                })
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/19731b9caca69ecb0382-footer.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Footer");