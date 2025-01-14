! function() {
    "use strict";
    var r = {
            616: function(e, t, r) {
                /** @license React v17.0.2
                 * react-dom-server.browser.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
                function P(e) {
                    return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var A = r(320),
                    I = r(804);

                function R(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var o = 60106,
                    l = 60107,
                    s = 60108,
                    u = 60114,
                    d = 60109,
                    c = 60110,
                    m = 60112,
                    p = 60113,
                    f = 60120,
                    h = 60115,
                    y = 60116,
                    n = 60121,
                    b = 60117,
                    g = 60119,
                    v = 60129,
                    w = 60131;

                function x(e) {
                    if (null == e) return null;
                    if ("function" == typeof e) return e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case l:
                            return "Fragment";
                        case o:
                            return "Portal";
                        case u:
                            return "Profiler";
                        case s:
                            return "StrictMode";
                        case p:
                            return "Suspense";
                        case f:
                            return "SuspenseList"
                    }
                    if ("object" === P(e)) switch (e.$$typeof) {
                        case c:
                            return (e.displayName || "Context") + ".Consumer";
                        case d:
                            return (e._context.displayName || "Context") + ".Provider";
                        case m:
                            var t = (t = e.render).displayName || t.name || "";
                            return e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                        case h:
                            return x(e.type);
                        case n:
                            return x(e._render);
                        case y:
                            t = e._payload, e = e._init;
                            try {
                                return x(e(t))
                            } catch (e) {}
                    }
                    return null
                }
                "function" == typeof Symbol && Symbol.for && (o = (a = Symbol.for)("react.portal"), l = a("react.fragment"), s = a("react.strict_mode"), u = a("react.profiler"), d = a("react.provider"), c = a("react.context"), m = a("react.forward_ref"), p = a("react.suspense"), f = a("react.suspense_list"), h = a("react.memo"), y = a("react.lazy"), n = a("react.block"), b = a("react.fundamental"), g = a("react.scope"), v = a("react.debug_trace_mode"), w = a("react.legacy_hidden"));
                var a = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    S = {};

                function E(e, t) {
                    for (var r = 0 | e._threadCount; r <= t; r++) e[r] = e._currentValue2, e._threadCount = r + 1
                }
                for (var T = new Uint16Array(16), i = 0; i < 15; i++) T[i] = i + 1;
                T[15] = 0;
                var N = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    M = Object.prototype.hasOwnProperty,
                    D = {},
                    F = {};

                function O(e) {
                    return M.call(F, e) || !M.call(D, e) && (N.test(e) ? F[e] = !0 : void(D[e] = !0))
                }

                function k(e, t, r, n) {
                    if (null == t || function(e, t, r, n) {
                            if (null === r || 0 !== r.type) switch (P(t)) {
                                case "function":
                                case "symbol":
                                    return 1;
                                case "boolean":
                                    return n ? void 0 : null !== r ? !r.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e;
                                default:
                                    return
                            }
                        }(e, t, r, n)) return 1;
                    if (!n && null !== r) switch (r.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || t < 1
                    }
                }

                function C(e, t, r, n, a, i, o) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = n, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o
                }
                var q = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
                    q[e] = new C(e, 0, !1, e, null, !1, !1)
                }), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach(function(e) {
                    var t = e[0];
                    q[t] = new C(t, 1, !1, e[1], null, !1, !1)
                }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
                    q[e] = new C(e, 2, !1, e.toLowerCase(), null, !1, !1)
                }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
                    q[e] = new C(e, 2, !1, e, null, !1, !1)
                }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
                    q[e] = new C(e, 3, !1, e.toLowerCase(), null, !1, !1)
                }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
                    q[e] = new C(e, 3, !0, e, null, !1, !1)
                }), ["capture", "download"].forEach(function(e) {
                    q[e] = new C(e, 4, !1, e, null, !1, !1)
                }), ["cols", "rows", "size", "span"].forEach(function(e) {
                    q[e] = new C(e, 6, !1, e, null, !1, !1)
                }), ["rowSpan", "start"].forEach(function(e) {
                    q[e] = new C(e, 5, !1, e.toLowerCase(), null, !1, !1)
                });
                var L = /[\-:]([a-z])/g;

                function j(e) {
                    return e[1].toUpperCase()
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
                    var t = e.replace(L, j);
                    q[t] = new C(t, 1, !1, e, null, !1, !1)
                }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
                    var t = e.replace(L, j);
                    q[t] = new C(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
                    var t = e.replace(L, j);
                    q[t] = new C(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                }), ["tabIndex", "crossOrigin"].forEach(function(e) {
                    q[e] = new C(e, 1, !1, e.toLowerCase(), null, !1, !1)
                }), q.xlinkHref = new C("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
                    q[e] = new C(e, 1, !1, e.toLowerCase(), null, !0, !0)
                });
                var U = /["'&<>]/;

                function B(e) {
                    if ("boolean" == typeof e || "number" == typeof e) return "" + e;
                    e = "" + e;
                    var t = U.exec(e);
                    if (t) {
                        for (var r = "", n = 0, a = t.index; a < e.length; a++) {
                            switch (e.charCodeAt(a)) {
                                case 34:
                                    t = "&quot;";
                                    break;
                                case 38:
                                    t = "&amp;";
                                    break;
                                case 39:
                                    t = "&#x27;";
                                    break;
                                case 60:
                                    t = "&lt;";
                                    break;
                                case 62:
                                    t = "&gt;";
                                    break;
                                default:
                                    continue
                            }
                            n !== a && (r += e.substring(n, a)), n = a + 1, r += t
                        }
                        e = n !== a ? r + e.substring(n, a) : r
                    }
                    return e
                }
                var _ = "function" == typeof Object.is ? Object.is : function(e, t) {
                        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                    },
                    H = null,
                    z = null,
                    V = null,
                    W = !1,
                    $ = !1,
                    G = null,
                    Q = 0;

                function Z() {
                    if (null === H) throw Error(R(321));
                    return H
                }

                function X() {
                    if (0 < Q) throw Error(R(312));
                    return {
                        memoizedState: null,
                        queue: null,
                        next: null
                    }
                }

                function J() {
                    return null === V ? null === z ? (W = !1, z = V = X()) : (W = !0, V = z) : V = null === V.next ? (W = !1, V.next = X()) : (W = !0, V.next), V
                }

                function Y(e, t, r, n) {
                    for (; $;) $ = !1, Q += 1, V = null, r = e(t, n);
                    return K(), r
                }

                function K() {
                    $ = !1, Q = 0, V = G = z = H = null
                }

                function ee(e, t) {
                    return "function" == typeof t ? t(e) : t
                }

                function te(e, t, r) {
                    if (H = Z(), V = J(), W) {
                        var n = V.queue;
                        if (t = n.dispatch, null === G || void 0 === (r = G.get(n))) return [V.memoizedState, t];
                        for (G.delete(n), n = V.memoizedState; n = e(n, r.action), r = r.next, null !== r;);
                        return [V.memoizedState = n, t]
                    }
                    return e = e === ee ? "function" == typeof t ? t() : t : void 0 !== r ? r(t) : t, V.memoizedState = e, e = (e = V.queue = {
                        last: null,
                        dispatch: null
                    }).dispatch = function(e, t, r) {
                        if (!(Q < 25)) throw Error(R(301));
                        if (e === H)
                            if ($ = !0, e = {
                                    action: r,
                                    next: null
                                }, null === G && (G = new Map), void 0 === (r = G.get(t))) G.set(t, e);
                            else {
                                for (t = r; null !== t.next;) t = t.next;
                                t.next = e
                            }
                    }.bind(null, H, e), [V.memoizedState, e]
                }

                function re(e, t) {
                    if (H = Z(), t = void 0 === t ? null : t, null !== (V = J())) {
                        var r = V.memoizedState;
                        if (null !== r && null !== t) {
                            var n = r[1];
                            e: if (null === n) n = !1;
                                else {
                                    for (var a = 0; a < n.length && a < t.length; a++)
                                        if (!_(t[a], n[a])) {
                                            n = !1;
                                            break e
                                        }
                                    n = !0
                                }
                            if (n) return r[0]
                        }
                    }
                    return e = e(), V.memoizedState = [e, t], e
                }

                function ne() {}
                var ae = null,
                    ie = {
                        readContext: function(e) {
                            var t = ae.threadID;
                            return E(e, t), e[t]
                        },
                        useContext: function(e) {
                            Z();
                            var t = ae.threadID;
                            return E(e, t), e[t]
                        },
                        useMemo: re,
                        useReducer: te,
                        useRef: function(e) {
                            H = Z();
                            var t = (V = J()).memoizedState;
                            return null === t ? (e = {
                                current: e
                            }, V.memoizedState = e) : t
                        },
                        useState: function(e) {
                            return te(ee, e)
                        },
                        useLayoutEffect: function() {},
                        useCallback: function(e, t) {
                            return re(function() {
                                return e
                            }, t)
                        },
                        useImperativeHandle: ne,
                        useEffect: ne,
                        useDebugValue: ne,
                        useDeferredValue: function(e) {
                            return Z(), e
                        },
                        useTransition: function() {
                            return Z(), [function(e) {
                                e()
                            }, !1]
                        },
                        useOpaqueIdentifier: function() {
                            return (ae.identifierPrefix || "") + "R:" + (ae.uniqueID++).toString(36)
                        },
                        useMutableSource: function(e, t) {
                            return Z(), t(e._source)
                        }
                    },
                    oe = "http://www.w3.org/1999/xhtml";

                function le(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }
                var se = {
                        area: !0,
                        base: !0,
                        br: !0,
                        col: !0,
                        embed: !0,
                        hr: !0,
                        img: !0,
                        input: !0,
                        keygen: !0,
                        link: !0,
                        meta: !0,
                        param: !0,
                        source: !0,
                        track: !0,
                        wbr: !0
                    },
                    ue = A({
                        menuitem: !0
                    }, se),
                    ce = {
                        animationIterationCount: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    de = ["Webkit", "ms", "Moz", "O"];
                Object.keys(ce).forEach(function(t) {
                    de.forEach(function(e) {
                        e = e + t.charAt(0).toUpperCase() + t.substring(1), ce[e] = ce[t]
                    })
                });
                var me = /([A-Z])/g,
                    pe = /^ms-/,
                    fe = I.Children.toArray,
                    he = a.ReactCurrentDispatcher,
                    ye = {
                        listing: !0,
                        pre: !0,
                        textarea: !0
                    },
                    be = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
                    ge = {},
                    ve = {};
                var we = Object.prototype.hasOwnProperty,
                    xe = {
                        children: null,
                        dangerouslySetInnerHTML: null,
                        suppressContentEditableWarning: null,
                        suppressHydrationWarning: null
                    };

                function Se(e, t) {
                    if (void 0 === e) throw Error(R(152, x(t) || "Component"))
                }

                function Pe(p, f, h) {
                    function e(e, t) {
                        var r = t.prototype && t.prototype.isReactComponent,
                            n = function(e, t, r, n) {
                                if (n && ("object" === P(n = e.contextType) && null !== n)) return E(n, r), n[r];
                                if (e = e.contextTypes) {
                                    for (var a in r = {}, e) r[a] = t[a];
                                    t = r
                                } else t = S;
                                return t
                            }(t, f, h, r),
                            a = [],
                            i = !1,
                            o = {
                                isMounted: function() {
                                    return !1
                                },
                                enqueueForceUpdate: function() {
                                    if (null === a) return null
                                },
                                enqueueReplaceState: function(e, t) {
                                    i = !0, a = [t]
                                },
                                enqueueSetState: function(e, t) {
                                    if (null === a) return null;
                                    a.push(t)
                                }
                            };
                        if (r) {
                            var l, r = new t(e.props, n, o);
                            "function" == typeof t.getDerivedStateFromProps && null != (l = t.getDerivedStateFromProps.call(null, e.props, r.state)) && (r.state = A({}, r.state, l))
                        } else if (H = {}, r = t(e.props, n, o), null == (r = Y(t, e.props, r, n)) || null == r.render) return void Se(p = r, t);
                        if (r.props = e.props, r.context = n, r.updater = o, void 0 === (o = r.state) && (r.state = o = null), "function" == typeof r.UNSAFE_componentWillMount || "function" == typeof r.componentWillMount)
                            if ("function" == typeof r.componentWillMount && "function" != typeof t.getDerivedStateFromProps && r.componentWillMount(), "function" == typeof r.UNSAFE_componentWillMount && "function" != typeof t.getDerivedStateFromProps && r.UNSAFE_componentWillMount(), a.length) {
                                o = a;
                                var s = i,
                                    a = null,
                                    i = !1;
                                if (s && 1 === o.length) r.state = o[0];
                                else {
                                    l = s ? o[0] : r.state;
                                    for (var u = !0, s = s ? 1 : 0; s < o.length; s++) {
                                        var c = o[s];
                                        null != (c = "function" == typeof c ? c.call(r, l, e.props, n) : c) && (u ? (u = !1, l = A({}, l, c)) : A(l, c))
                                    }
                                    r.state = l
                                }
                            } else a = null;
                        if (Se(p = r.render(), t), "function" == typeof r.getChildContext && "object" === P(e = t.childContextTypes)) {
                            var d, m = r.getChildContext();
                            for (d in m)
                                if (!(d in e)) throw Error(R(108, x(t) || "Unknown", d))
                        }
                        m && (f = A({}, f, m))
                    }
                    for (; I.isValidElement(p);) {
                        var t = p,
                            r = t.type;
                        if ("function" != typeof r) break;
                        e(t, r)
                    }
                    return {
                        child: p,
                        context: f
                    }
                }
                var Ae = ((a = Ie.prototype).destroy = function() {
                    var e;
                    this.exhausted || (this.exhausted = !0, this.clearProviders(), e = this.threadID, T[e] = T[0], T[0] = e)
                }, a.pushProvider = function(e) {
                    var t = ++this.contextIndex,
                        r = e.type._context,
                        n = this.threadID;
                    E(r, n);
                    var a = r[n];
                    this.contextStack[t] = r, this.contextValueStack[t] = a, r[n] = e.props.value
                }, a.popProvider = function() {
                    var e = this.contextIndex,
                        t = this.contextStack[e],
                        r = this.contextValueStack[e];
                    this.contextStack[e] = null, this.contextValueStack[e] = null, this.contextIndex--, t[this.threadID] = r
                }, a.clearProviders = function() {
                    for (var e = this.contextIndex; 0 <= e; e--) this.contextStack[e][this.threadID] = this.contextValueStack[e]
                }, a.read = function(e) {
                    if (this.exhausted) return null;
                    var t = ae;
                    ae = this;
                    var r = he.current;
                    he.current = ie;
                    try {
                        for (var n = [""], a = !1; n[0].length < e;) {
                            if (0 === this.stack.length) {
                                this.exhausted = !0;
                                var i = this.threadID;
                                T[i] = T[0], T[0] = i;
                                break
                            }
                            var o = this.stack[this.stack.length - 1];
                            if (a || o.childIndex >= o.children.length) {
                                var l = o.footer;
                                if ("" !== l && (this.previousWasTextNode = !1), this.stack.pop(), "select" === o.type) this.currentSelectValue = null;
                                else if (null != o.type && null != o.type.type && o.type.type.$$typeof === d) this.popProvider(o.type);
                                else if (o.type === p) {
                                    this.suspenseDepth--;
                                    var s = n.pop();
                                    if (a) {
                                        a = !1;
                                        i = o.fallbackFrame;
                                        if (!i) throw Error(R(303));
                                        this.stack.push(i), n[this.suspenseDepth] += "\x3c!--$!--\x3e";
                                        continue
                                    }
                                    n[this.suspenseDepth] += s
                                }
                                n[this.suspenseDepth] += l
                            } else {
                                var u = o.children[o.childIndex++],
                                    c = "";
                                try {
                                    c += this.render(u, o.context, o.domNamespace)
                                } catch (e) {
                                    if (null != e && "function" == typeof e.then) throw Error(R(294));
                                    throw e
                                }
                                n.length <= this.suspenseDepth && n.push(""), n[this.suspenseDepth] += c
                            }
                        }
                        return n[0]
                    } finally {
                        he.current = r, ae = t, K()
                    }
                }, a.render = function(e, t, r) {
                    if ("string" == typeof e || "number" == typeof e) return "" === (r = "" + e) ? "" : this.makeStaticMarkup ? B(r) : this.previousWasTextNode ? "\x3c!-- --\x3e" + B(r) : (this.previousWasTextNode = !0, B(r));
                    if (e = (t = Pe(e, t, this.threadID)).child, t = t.context, null === e || !1 === e) return "";
                    if (!I.isValidElement(e)) {
                        if (null == e || null == e.$$typeof) return e = fe(e), this.stack.push({
                            type: null,
                            domNamespace: r,
                            children: e,
                            childIndex: 0,
                            context: t,
                            footer: ""
                        }), "";
                        if ((r = e.$$typeof) === o) throw Error(R(257));
                        throw Error(R(258, r.toString()))
                    }
                    var n = e.type;
                    if ("string" == typeof n) return this.renderDOM(e, t, r);
                    switch (n) {
                        case w:
                        case v:
                        case s:
                        case u:
                        case f:
                        case l:
                            return e = fe(e.props.children), this.stack.push({
                                type: null,
                                domNamespace: r,
                                children: e,
                                childIndex: 0,
                                context: t,
                                footer: ""
                            }), "";
                        case p:
                            throw Error(R(294));
                        case g:
                            throw Error(R(343))
                    }
                    if ("object" === P(n) && null !== n) switch (n.$$typeof) {
                        case m:
                            H = {};
                            var a = n.render(e.props, e.ref),
                                a = Y(n.render, e.props, a, e.ref);
                            return a = fe(a), this.stack.push({
                                type: null,
                                domNamespace: r,
                                children: a,
                                childIndex: 0,
                                context: t,
                                footer: ""
                            }), "";
                        case h:
                            return e = [I.createElement(n.type, A({
                                ref: e.ref
                            }, e.props))], this.stack.push({
                                type: null,
                                domNamespace: r,
                                children: e,
                                childIndex: 0,
                                context: t,
                                footer: ""
                            }), "";
                        case d:
                            return r = {
                                type: e,
                                domNamespace: r,
                                children: n = fe(e.props.children),
                                childIndex: 0,
                                context: t,
                                footer: ""
                            }, this.pushProvider(e), this.stack.push(r), "";
                        case c:
                            n = e.type, a = e.props;
                            var i = this.threadID;
                            return E(n, i), n = fe(a.children(n[i])), this.stack.push({
                                type: e,
                                domNamespace: r,
                                children: n,
                                childIndex: 0,
                                context: t,
                                footer: ""
                            }), "";
                        case b:
                            throw Error(R(338));
                        case y:
                            return n = (a = (n = e.type)._init)(n._payload), e = [I.createElement(n, A({
                                ref: e.ref
                            }, e.props))], this.stack.push({
                                type: null,
                                domNamespace: r,
                                children: e,
                                childIndex: 0,
                                context: t,
                                footer: ""
                            }), ""
                    }
                    throw Error(R(130, null == n ? n : P(n), ""))
                }, a.renderDOM = function(e, t, r) {
                    var n = e.type.toLowerCase();
                    if (r === oe && le(n), !ge.hasOwnProperty(n)) {
                        if (!be.test(n)) throw Error(R(65, n));
                        ge[n] = !0
                    }
                    var a, i, o, l, s = e.props;
                    if ("input" === n) s = A({
                        type: void 0
                    }, s, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: null != s.value ? s.value : s.defaultValue,
                        checked: null != s.checked ? s.checked : s.defaultChecked
                    });
                    else if ("textarea" === n) {
                        var u = s.value;
                        if (null == u) {
                            u = s.defaultValue;
                            var c = s.children;
                            if (null != c) {
                                if (null != u) throw Error(R(92));
                                if (Array.isArray(c)) {
                                    if (!(c.length <= 1)) throw Error(R(93));
                                    c = c[0]
                                }
                                u = "" + c
                            }
                            null == u && (u = "")
                        }
                        s = A({}, s, {
                            value: void 0,
                            children: "" + u
                        })
                    } else if ("select" === n) this.currentSelectValue = null != s.value ? s.value : s.defaultValue, s = A({}, s, {
                        value: void 0
                    });
                    else if ("option" === n) {
                        c = this.currentSelectValue;
                        var d = function(e) {
                            if (null == e) return e;
                            var t = "";
                            return I.Children.forEach(e, function(e) {
                                null != e && (t += e)
                            }), t
                        }(s.children);
                        if (null != c) {
                            var m = null != s.value ? s.value + "" : d,
                                u = !1;
                            if (Array.isArray(c)) {
                                for (var p = 0; p < c.length; p++)
                                    if ("" + c[p] === m) {
                                        u = !0;
                                        break
                                    }
                            } else u = "" + c === m;
                            s = A({
                                selected: void 0,
                                children: void 0
                            }, s, {
                                selected: u,
                                children: d
                            })
                        }
                    }
                    if (u = s) {
                        if (ue[n] && (null != u.children || null != u.dangerouslySetInnerHTML)) throw Error(R(137, n));
                        if (null != u.dangerouslySetInnerHTML) {
                            if (null != u.children) throw Error(R(60));
                            if (!("object" === P(u.dangerouslySetInnerHTML) && "__html" in u.dangerouslySetInnerHTML)) throw Error(R(61))
                        }
                        if (null != u.style && "object" !== P(u.style)) throw Error(R(62))
                    }
                    u = s, c = this.makeStaticMarkup, d = 1 === this.stack.length, m = "<" + e.type;
                    e: if (-1 === n.indexOf("-")) p = "string" == typeof u.is;
                        else switch (n) {
                            case "annotation-xml":
                            case "color-profile":
                            case "font-face":
                            case "font-face-src":
                            case "font-face-uri":
                            case "font-face-format":
                            case "font-face-name":
                            case "missing-glyph":
                                p = !1;
                                break e;
                            default:
                                p = !0
                        }
                    for (S in u)
                        if (we.call(u, S)) {
                            var f = u[S];
                            if (null != f) {
                                if ("style" === S) {
                                    var h, y, b, g, v = void 0,
                                        w = "",
                                        x = "";
                                    for (v in f) f.hasOwnProperty(v) && (h = 0 === v.indexOf("--"), null != (y = f[v]) && (w += x + (g = h ? v : (g = v, ve.hasOwnProperty(g) ? ve[g] : (b = g.replace(me, "-$1").toLowerCase().replace(pe, "-ms-"), ve[g] = b))) + ":", x = v, w += h = null == y || "boolean" == typeof y || "" === y ? "" : h || "number" != typeof y || 0 === y || ce.hasOwnProperty(x) && ce[x] ? ("" + y).trim() : y + "px", x = ";"));
                                    f = w || null
                                }
                                v = null, p ? xe.hasOwnProperty(S) || (v = O(v = S) && null != f ? v + '="' + B(f) + '"' : "") : (a = S, i = f, l = o = void 0, l = q.hasOwnProperty(a) ? q[a] : null, (o = "style" !== a) && (o = null !== l ? 0 === l.type : 2 < a.length && ("o" === a[0] || "O" === a[0]) && ("n" === a[1] || "N" === a[1])), v = o || k(a, i, l, !1) ? "" : null !== l ? (a = l.attributeName, 3 === (o = l.type) || 4 === o && !0 === i ? a + '=""' : (l.sanitizeURL && (i = "" + i), a + '="' + B(i) + '"')) : O(a) ? a + '="' + B(i) + '"' : ""), v && (m += " " + v)
                            }
                        }
                    c || d && (m += ' data-reactroot=""');
                    var S = m;
                    u = "", se.hasOwnProperty(n) ? S += "/>" : (S += ">", u = "</" + e.type + ">");
                    e: {
                        if (null != (c = s.dangerouslySetInnerHTML)) {
                            if (null != c.__html) {
                                c = c.__html;
                                break e
                            }
                        } else if ("string" == typeof(c = s.children) || "number" == typeof c) {
                            c = B(c);
                            break e
                        }
                        c = null
                    }
                    return null != c ? (s = [], ye.hasOwnProperty(n) && "\n" === c.charAt(0) && (S += "\n"), S += c) : s = fe(s.children), e = e.type, r = null == r || "http://www.w3.org/1999/xhtml" === r ? le(e) : "http://www.w3.org/2000/svg" === r && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : r, this.stack.push({
                        domNamespace: r,
                        type: n,
                        children: s,
                        childIndex: 0,
                        context: t,
                        footer: u
                    }), this.previousWasTextNode = !1, S
                }, Ie);

                function Ie(e, t, r) {
                    if (e = I.isValidElement(e) ? e.type !== l ? [e] : (e = e.props.children, I.isValidElement(e) ? [e] : fe(e)) : fe(e), e = {
                            type: null,
                            domNamespace: oe,
                            children: e,
                            childIndex: 0,
                            context: S,
                            footer: ""
                        }, 0 === (n = T[0])) {
                        var n, a = T,
                            i = 2 * (n = a.length);
                        if (!(i <= 65536)) throw Error(R(304));
                        var o = new Uint16Array(i);
                        for (o.set(a), (T = o)[0] = n + 1, a = n; a < i - 1; a++) T[a] = a + 1;
                        T[i - 1] = 0
                    } else T[0] = T[n];
                    this.threadID = n, this.stack = [e], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = t, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = r && r.identifierPrefix || ""
                }
                t.renderToString = function(e, t) {
                    e = new Ae(e, !1, t);
                    try {
                        return e.read(1 / 0)
                    } finally {
                        e.destroy()
                    }
                }
            },
            31: function(e, t, r) {
                e.exports = r(616)
            },
            320: function(e) {
                /*
                object-assign
                (c) Sindre Sorhus
                @license MIT
                */
                var s = Object.getOwnPropertySymbols,
                    u = Object.prototype.hasOwnProperty,
                    c = Object.prototype.propertyIsEnumerable;
                e.exports = function() {
                    try {
                        if (!Object.assign) return;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return;
                        for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                                return t[e]
                            }).join("")) return;
                        var n = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                            n[e] = e
                        }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, n)).join("") ? void 0 : 1
                    } catch (e) {
                        return
                    }
                }() ? Object.assign : function(e, t) {
                    for (var r, n, a = function(e) {
                            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                            return Object(e)
                        }(e), i = 1; i < arguments.length; i++) {
                        for (var o in r = Object(arguments[i])) u.call(r, o) && (a[o] = r[o]);
                        if (s) {
                            n = s(r);
                            for (var l = 0; l < n.length; l++) c.call(r, n[l]) && (a[n[l]] = r[n[l]])
                        }
                    }
                    return a
                }
            },
            804: function(e) {
                e.exports = React
            }
        },
        n = {};

    function rt(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            exports: {}
        };
        return r[e](t, t.exports, rt), t.exports
    }
    rt.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return rt.d(t, {
                a: t
            }), t
        }, rt.d = function(e, t) {
            for (var r in t) rt.o(t, r) && !rt.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, rt.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            var Z = rt(804),
                X = rt.n(Z),
                t = ReactDOM,
                w = CoreUtilities,
                e = PropTypes,
                r = rt.n(e),
                i = ReactUtilities,
                x = ReactStyleGuide,
                o = {
                    purchasingResources: {
                        common: [],
                        feature: "Purchasing.PurchaseDialog"
                    },
                    itemResources: {
                        common: [],
                        feature: "Feature.Item"
                    },
                    itemModelResources: {
                        common: [],
                        feature: "Feature.ItemModel"
                    }
                },
                n = {
                    transactionFailure: "TransactionFailureView",
                    insufficientFunds: "InsufficientFundsView",
                    priceChanged: "PriceChangedView"
                },
                a = {
                    badRequest: "Bad Request"
                },
                l = {
                    freeLabel: "Label.Free",
                    okAction: "Action.Ok",
                    insufficientFundsHeading: "Heading.InsufficientFunds",
                    insufficientFundsMessage: "Message.InsufficientFunds",
                    cancelAction: "Action.Cancel",
                    buyRobuxAction: "Action.BuyRobux",
                    buyAccessAction: "Action.BuyAccess",
                    buyItemHeading: "Heading.BuyItem",
                    rentNowAction: "Action.RentNow",
                    buyNowAction: "Action.BuyNow",
                    rentItemHeading: "Heading.RentItem",
                    getItemHeading: "Heading.GetItem",
                    getNowAction: "Action.GetNow",
                    priceChangedHeading: "Heading.PriceChanged",
                    priceChangedMessage: "Message.PriceChanged",
                    balanceAfterMessage: "Message.BalanceAfter",
                    agreeAndPayLabel: "Label.AgreeAndPay",
                    promptRentAccessMessage: "Message.PromptRentAccess",
                    promptRentMessage: "Message.PromptRent",
                    promptGetFreeAccessMessage: "Message.PromptGetFreeAccess",
                    promptGetFreeMessage: "Message.PromptGetFree",
                    promptBuyAccessMessage: "Message.PromptBuyAccess",
                    promptBuyMessage: "Message.PromptBuy",
                    configureAction: "Action.Customize",
                    notNowAction: "Action.NotNow",
                    customizeAction: "Action.Customize",
                    continueAction: "Action.Continue",
                    purchaseCompleteHeading: "Heading.PurchaseComplete",
                    successfullyBoughtAccessMessage: "Message.SuccessfullyBoughtAccess",
                    successfullyBoughtMessage: "Message.SuccessfullyBought",
                    successfullyRentedAccessMessage: "Message.SuccessfullyRented",
                    successfullyRenewedAccessMessage: "Message.SuccessfullyRenewedAccess",
                    successfullyRenewedMessage: "Message.SuccessfullyRenewed",
                    successfullyAcquiredAccessMessage: "Message.SuccessfullyAcquiredAccess",
                    successfullyAcquiredMessage: "Message.SuccessfullyAcquired",
                    errorOccuredHeading: "Heading.ErrorOccured",
                    purchasingUnavailableMessage: "Message.PurchasingUnavailable",
                    buyAction: "Action.Buy",
                    rentAction: "Action.Rent",
                    installAction: "Action.Install",
                    getAction: "Action.Get",
                    bestPriceLabel: "Label.BestPrice",
                    priceLabel: "Label.Price",
                    premiumDiscountOpportunityPromptLabel: "Label.PremiumDiscountOpportunityPrompt",
                    premiumDiscountSavingsLabel: "Label.PremiumDiscountSavings",
                    premiumExclusiveEligiblePromptLabel: "Label.PremiumExclusiveEligiblePrompt",
                    premiumExclusiveIneligiblePromptLabel: "Label.PremiumExclusiveIneligiblePrompt",
                    getPremiumAction: "Action.GetPremium",
                    itemNotCurrentlyForSaleLabel: "Label.ItemNotCurrentlyForSale",
                    itemNoLongerForSaleLabel: "Label.ItemNoLongerForSale",
                    purchasingTemporarilyUnavailableLabel: "Label.PurchasingTemporarilyUnavailable",
                    itemAvailableInventoryLabel: "Label.ItemAvailableInventory",
                    noOneCurrentlySellingLabel: "Label.NoOneCurrentlySelling",
                    inventoryAction: "Action.Inventory",
                    OffsaleCountdownHourMinuteSecondLabel: "Label.OffsaleCountdownHourMinuteSecond",
                    CountdownTimerDayHourMinute: "Label.CountdownTimerDayHourMinute"
                },
                s = {
                    Plugin: 38,
                    Decal: 13,
                    Model: 10,
                    Video: 62,
                    MeshPart: 40,
                    Place: 9,
                    Badge: 21,
                    GamePass: 34,
                    Animation: 24
                },
                u = {
                    Catalog: 0,
                    Library: 1
                },
                c = {
                    insufficientFunds: "InsufficientFunds",
                    retryErrorMessage: "Failed to determine purchasability status. Please try again by refreshing.",
                    notForSale: "NotForSale",
                    unauthorizedMessage: "Unauthorized"
                };

            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var p = l;

            function f() {
                var e = d((0, x.createModal)(), 2),
                    n = e[0],
                    e = e[1];

                function t(e) {
                    var t = e.translate,
                        r = e.title,
                        e = e.message,
                        e = X().createElement("div", {
                            className: "modal-message"
                        }, e);
                    return X().createElement(n, {
                        title: r,
                        body: e,
                        thumbnail: X().createElement("span", {
                            className: "icon-warning-orange-150x150"
                        }),
                        neutralButtonText: t(p.okAction)
                    })
                }
                return t.propTypes = {
                    translate: r().func.isRequired,
                    title: r().string.isRequired,
                    message: r().string.isRequired
                }, [(0, i.withTranslations)(t, o.purchasingResources), e]
            }
            var S = rt(31),
                P = Roblox,
                h = P.EnvironmentUrls.economyApi,
                y = P.EnvironmentUrls.catalogApi,
                b = {
                    getRobuxUpgradesUrl: function(e) {
                        return w.urlService.getUrlWithQueries("/Upgrades/Robux.aspx", {
                            ctx: e
                        })
                    },
                    getAvatarPageUrl: function() {
                        return w.urlService.getAbsoluteUrl("/my/avatar")
                    },
                    getPurchaseItemUrl: function(e) {
                        return "".concat(h, "/v1/purchases/products/").concat(e)
                    },
                    getItemDetailsUrl: function(e, t) {
                        return "".concat(y, "/v1/catalog/items/").concat(e, "/details?itemType=").concat(t)
                    },
                    getPurchaseableDetailUrl: function(e) {
                        return "".concat(h, "/v1/products/").concat(e, "?showPurchasable=true")
                    },
                    getPremiumConversionUrl: function(e, t) {
                        return "/premium/membership?ctx=WebItemDetail&upsellTargetType=".concat(t, "&upsellTargetId=").concat(e)
                    },
                    getResellerDataUrl: function(e) {
                        return "".concat(h, "/v1/assets/").concat(e, "/resellers?limit=10")
                    },
                    getInventoryUrl: function(e) {
                        return "/users/".concat(e, "/inventory")
                    },
                    getMetaDataUrl: function() {
                        return "".concat(h, "/v2/metadata")
                    }
                },
                g = l;

            function v(e) {
                var t = e.translate,
                    r = e.price,
                    e = e.color;
                return 0 === r ? X().createElement("span", {
                    className: "text-robux text-free"
                }, t(g.freeLabel)) : X().createElement(X().Fragment, null, X().createElement("span", {
                    className: "icon-robux".concat(e ? "-".concat(e) : "", "-16x16")
                }), X().createElement("span", {
                    className: "text-robux"
                }, w.numberFormat.getNumberFormat(r)))
            }
            v.defaultProps = {
                color: ""
            }, v.propTypes = {
                price: r().number.isRequired,
                translate: r().func.isRequired,
                color: r().string
            };
            var A = (0, i.withTranslations)(v, o.purchasingResources);

            function I() {
                return (I = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r, n = arguments[t];
                        for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var T = l;

            function N() {
                var e = R((0, x.createModal)(), 2),
                    a = e[0],
                    e = e[1];

                function t(e) {
                    var t = e.translate,
                        r = e.robuxNeeded,
                        n = e.source,
                        r = X().createElement("div", {
                            className: "modal-message",
                            dangerouslySetInnerHTML: {
                                __html: t(T.insufficientFundsMessage, {
                                    robux: (0, S.renderToString)(X().createElement(A, {
                                        price: r
                                    }))
                                })
                            }
                        });
                    return X().createElement(a, I({
                        title: t(T.insufficientFundsHeading),
                        body: r,
                        thumbnail: X().createElement("span", {
                            className: "money-stack-icon"
                        }),
                        neutralButtonText: t(T.cancelAction),
                        actionButtonText: t(T.buyRobuxAction),
                        onAction: function() {
                            return window.location = b.getRobuxUpgradesUrl(n), !1
                        }
                    }, {
                        actionButtonShow: !0
                    }))
                }
                return t.defaultProps = {
                    onAccept: null,
                    source: ""
                }, t.propTypes = {
                    translate: r().func.isRequired,
                    source: r().string,
                    onAccept: r().func,
                    robuxNeeded: r().number.isRequired
                }, [(0, i.withTranslations)(t, o.purchasingResources), e]
            }

            function M() {
                var e = document.getElementById("ItemPurchaseAjaxData");
                return e ? {
                    userRobuxBalance: parseInt(e.getAttribute("data-user-balance-robux"), 10),
                    userBc: parseInt(e.getAttribute("data-user-bc"), 10),
                    hasCurrencyServiceError: "True" === e.getAttribute("data-has-currency-service-error"),
                    currencyServiceErrorMessage: e.getAttribute("data-currency-service-error-message")
                } : {}
            }
            var D = l;

            function F(e) {
                var t = e.translate,
                    e = e.expectedPrice,
                    e = M().userRobuxBalance - e;
                return X().createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: t(D.balanceAfterMessage, {
                            robuxBalance: (0, S.renderToString)(X().createElement(A, {
                                price: e,
                                color: "gray"
                            }))
                        })
                    }
                })
            }
            F.propTypes = {
                expectedPrice: r().number.isRequired,
                translate: r().func.isRequired
            };
            var O = (0, i.withTranslations)(F, o.purchasingResources);

            function k() {
                return (k = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r, n = arguments[t];
                        for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return q(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return q(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var L = l;

            function J() {
                var e = C((0, x.createModal)(), 2),
                    s = e[0],
                    e = e[1];

                function t(e) {
                    var t = e.translate,
                        r = e.expectedPrice,
                        n = e.currentPrice,
                        a = e.onAction,
                        i = e.loading,
                        e = C((0, Z.useState)(!1), 2),
                        o = e[0],
                        l = e[1],
                        r = X().createElement(X().Fragment, null, X().createElement("div", {
                            className: "modal-message",
                            dangerouslySetInnerHTML: {
                                __html: t(L.priceChangedMessage, {
                                    robuxBefore: (0, S.renderToString)(X().createElement(A, {
                                        price: r,
                                        color: "gray"
                                    })),
                                    robuxAfter: (0, S.renderToString)(X().createElement(A, {
                                        price: n,
                                        color: "gray"
                                    }))
                                })
                            }
                        }), X().createElement("div", {
                            className: "modal-checkbox checkbox"
                        }, X().createElement("input", {
                            id: "modal-checkbox-input",
                            name: "agreementCheckBox",
                            type: "checkbox",
                            checked: o
                        }), X().createElement("label", {
                            onClick: function() {
                                return l(!o)
                            },
                            htmlFor: "modal-checkbox-input"
                        }, t(L.agreeAndPayLabel))));
                    return X().createElement(s, k({
                        title: t(L.priceChangedHeading),
                        body: r,
                        neutralButtonText: t(L.cancelAction),
                        actionButtonText: t(L.buyRobuxAction),
                        onAction: a,
                        loading: i,
                        disableActionButton: !o,
                        footerText: X().createElement(O, {
                            expectedPrice: n
                        })
                    }, {
                        actionButtonShow: !0
                    }))
                }
                return t.defaultProps = {
                    loading: !1
                }, t.propTypes = {
                    translate: r().func.isRequired,
                    expectedPrice: r().number.isRequired,
                    currentPrice: r().number.isRequired,
                    onAction: r().func.isRequired,
                    loading: r().bool
                }, [(0, i.withTranslations)(t, o.purchasingResources), e]
            }

            function j(e) {
                e = e.name;
                return X().createElement("span", {
                    className: "font-bold"
                }, e)
            }
            j.propTypes = {
                name: r().string.isRequired
            };
            var U = j;

            function B() {
                return (B = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r, n = arguments[t];
                        for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function _(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return H(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return H(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var z = l;

            function Y() {
                var e = _((0, x.createModal)(), 2),
                    f = e[0],
                    e = e[1];

                function t(e) {
                    var t, r, n = e.translate,
                        a = e.title,
                        i = e.isRentable,
                        o = e.expectedPrice,
                        l = e.thumbnail,
                        s = e.assetName,
                        u = e.assetType,
                        c = e.assetTypeDisplayName,
                        d = e.sellerName,
                        m = e.isPlace,
                        p = e.onAction,
                        e = e.loading,
                        u = {
                            assetName: (0, S.renderToString)(X().createElement(U, {
                                name: s
                            })),
                            assetType: c || u,
                            seller: d,
                            robux: (0, S.renderToString)(X().createElement(A, {
                                price: o
                            }))
                        },
                        d = m ? z.promptBuyAccessMessage : z.promptBuyMessage;
                    i ? (t = n(z.rentItemHeading), r = n(z.rentNowAction), d = m ? z.promptRentAccessMessage : z.promptRentMessage) : r = 0 === o ? (t = n(z.getItemHeading), n(z.getNowAction)) : (t = n(z.buyItemHeading), n(z.buyNowAction)), m && (r = n(z.buyAccessAction));
                    u = X().createElement("div", {
                        className: "modal-message",
                        dangerouslySetInnerHTML: {
                            __html: n(d, u)
                        }
                    });
                    return X().createElement(f, B({
                        title: a || t,
                        body: u,
                        thumbnail: l,
                        neutralButtonText: n(z.cancelAction),
                        actionButtonText: r,
                        onAction: p,
                        footerText: X().createElement(O, {
                            expectedPrice: o
                        }),
                        loading: e
                    }, {
                        actionButtonShow: !0
                    }))
                }
                return t.defaultProps = {
                    isPlace: !1,
                    assetTypeDisplayName: "",
                    isRentable: !1,
                    title: "",
                    loading: !1
                }, t.propTypes = {
                    translate: r().func.isRequired,
                    title: r().string,
                    isRentable: r().bool,
                    expectedPrice: r().number.isRequired,
                    thumbnail: r().node.isRequired,
                    assetName: r().string.isRequired,
                    assetType: r().string.isRequired,
                    assetTypeDisplayName: r().string,
                    sellerName: r().string.isRequired,
                    isPlace: r().bool,
                    onAction: r().func.isRequired,
                    loading: r().bool
                }, [(0, i.withTranslations)(t, o.purchasingResources), e]
            }(e = Pe = Pe || {}).Bought = "bought", e.Rented = "rented", e.Renewed = "renewed";
            var V = Pe;

            function W(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return $(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function $(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var G = b.getAvatarPageUrl,
                Q = l;

            function K() {
                var e = W((0, x.createModal)(), 2),
                    y = e[0],
                    e = e[1];

                function t(e) {
                    var t, r, n = e.translate,
                        a = e.expectedPrice,
                        i = e.thumbnail,
                        o = e.assetName,
                        l = e.assetType,
                        s = e.assetIsWearable,
                        u = e.assetTypeDisplayName,
                        c = e.sellerName,
                        d = e.isPlace,
                        m = e.isPrivateServer,
                        p = e.onAccept,
                        f = e.onDecline,
                        h = e.transactionVerb,
                        e = n(Q.continueAction);
                    m ? (t = n(Q.configureAction), e = n(Q.notNowAction)) : s && (t = n(Q.customizeAction), e = n(Q.notNowAction), r = function() {
                        return window.location.href = G(), !1
                    });
                    c = {
                        assetName: (0, S.renderToString)(X().createElement(U, {
                            name: o
                        })),
                        assetType: u || l,
                        seller: c,
                        robux: (0, S.renderToString)(X().createElement(A, {
                            price: a
                        }))
                    }, d = h === V.Bought ? d ? Q.successfullyAcquiredAccessMessage : Q.successfullyBoughtMessage : h === V.Rented ? Q.successfullyRentedAccessMessage : h === V.Renewed ? d ? Q.successfullyRenewedAccessMessage : Q.successfullyRenewedMessage : d ? Q.successfullyAcquiredAccessMessage : Q.successfullyAcquiredMessage, c = X().createElement("div", {
                        className: "modal-message",
                        dangerouslySetInnerHTML: {
                            __html: n(d, c)
                        }
                    });
                    return X().createElement(y, {
                        title: n(Q.purchaseCompleteHeading),
                        body: c,
                        thumbnail: i,
                        neutralButtonText: e,
                        actionButtonText: t,
                        onAction: p || r,
                        onNeutral: f,
                        footerText: !m && X().createElement(O, {
                            expectedPrice: a
                        }),
                        actionButtonShow: !!t,
                        onClose: function() {
                            return window.location.reload()
                        }
                    })
                }
                return t.defaultProps = {
                    isPlace: !1,
                    assetTypeDisplayName: "",
                    transactionVerb: "",
                    assetIsWearable: !1,
                    isPrivateServer: !1,
                    onAccept: null,
                    onDecline: null
                }, t.propTypes = {
                    translate: r().func.isRequired,
                    transactionVerb: r().string,
                    expectedPrice: r().number.isRequired,
                    thumbnail: r().node.isRequired,
                    assetName: r().string.isRequired,
                    assetType: r().string.isRequired,
                    assetTypeDisplayName: r().string,
                    assetIsWearable: r().bool,
                    sellerName: r().string.isRequired,
                    isPlace: r().bool,
                    isPrivateServer: r().bool,
                    onAccept: r().func,
                    onDecline: r().func
                }, [(0, i.withTranslations)(t, o.purchasingResources), e]
            }
            var ee = b.getPurchaseItemUrl,
                te = function(e, t) {
                    e = {
                        url: ee(e),
                        retryable: !0,
                        withCredentials: !0
                    };
                    return w.httpService.post(e, t)
                };

            function re(t, e) {
                var r, n = Object.keys(t);
                return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, r)), n
            }

            function ne(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? re(Object(a), !0).forEach(function(e) {
                        var t, r;
                        t = n, e = a[r = e], r in t ? Object.defineProperty(t, r, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[r] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : re(Object(a)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
                    })
                }
                return n
            }

            function ae(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ie(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ie(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ie(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var oe = l,
                le = n,
                se = a;

            function ue() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    k = e.customPurchaseVerificationModal,
                    C = e.customPurchaseVerificationModalService,
                    q = M().userRobuxBalance,
                    e = ae((0, x.createSystemFeedback)(), 2),
                    L = e[0],
                    j = e[1],
                    e = ae(Y(), 2),
                    U = e[0],
                    B = e[1],
                    e = ae(N(), 2),
                    _ = e[0],
                    H = e[1],
                    e = ae(K(), 2),
                    z = e[0],
                    V = e[1],
                    e = ae(J(), 2),
                    W = e[0],
                    $ = e[1],
                    e = ae(f(), 2),
                    G = e[0],
                    Q = e[1];

                function t(e) {
                    function a() {
                        (C || B).close(), $.close()
                    }

                    function i(e) {
                        var t = e.showDivId,
                            r = e.title,
                            n = e.errorMsg,
                            a = e.price,
                            e = e.shortfallPrice;
                        t === le.transactionFailure ? (N({
                            title: r,
                            message: n
                        }), Q.open()) : t === le.insufficientFunds ? (F(e), H.open()) : t === le.priceChanged && (D(a), $.open())
                    }

                    function o(e) {
                        O(e), V.open()
                    }

                    function t(e) {
                        e = {
                            expectedCurrency: c,
                            expectedPrice: e,
                            expectedSellerId: m
                        }, 0 < p && (e.expectedPromoId = p), 0 < f && (e.userAssetId = f), x ? x({
                            params: e,
                            handleError: i,
                            setLoading: R,
                            openConfirmation: o,
                            closeAll: a
                        }) : (R(!0), te(u, e).then(function(e) {
                            var t = e.data;
                            console.debug(t);
                            var r = t.statusCode,
                                n = t.assetIsWearable,
                                e = t.transactionVerb;
                            R(!1), a(), 500 === r ? i(t) : (S(), g ? j.success(l(oe.purchaseCompleteHeading)) : o({
                                assetIsWearable: n,
                                transactionVerb: e
                            }))
                        }).catch(function(e) {
                            console.debug(e), R(!1), a(), e && (null == e ? void 0 : e.statusText) !== se.badRequest ? i(JSON.parse(null == e ? void 0 : e.statusText)) : i({
                                title: l(oe.errorOccuredHeading),
                                errorMsg: l(oe.purchasingUnavailableMessage),
                                showDivId: le.transactionFailure
                            })
                        }))
                    }
                    var l = e.translate,
                        r = e.assetName,
                        n = e.assetType,
                        s = e.assetTypeDisplayName,
                        u = e.productId,
                        c = e.expectedCurrency,
                        d = e.expectedPrice,
                        m = e.expectedSellerId,
                        p = e.expectedPromoId,
                        f = e.userAssetId,
                        h = e.isRentable,
                        y = e.thumbnail,
                        b = e.sellerName,
                        g = e.showSuccessBanner,
                        v = e.isPlace,
                        w = e.isPrivateServer,
                        x = e.handlePurchase,
                        S = e.onPurchaseSuccess,
                        P = e.customProps,
                        A = ae((0, Z.useState)(!1), 2),
                        I = A[0],
                        R = A[1],
                        E = ae((0, Z.useState)(null), 2),
                        T = E[0],
                        N = E[1],
                        e = ae((0, Z.useState)(null), 2),
                        M = e[0],
                        D = e[1],
                        A = ae((0, Z.useState)(d - q), 2),
                        E = A[0],
                        F = A[1],
                        e = ae((0, Z.useState)(null), 2),
                        A = e[0],
                        O = e[1],
                        h = k ? X().createElement(k, ne({}, ne({
                            isRentable: h,
                            assetName: r,
                            assetType: n,
                            expectedPrice: d,
                            thumbnail: y,
                            sellerName: b,
                            loading: I,
                            onAction: function() {
                                return t(d)
                            }
                        }, P))) : X().createElement(U, {
                            isRentable: h,
                            expectedPrice: d,
                            thumbnail: y,
                            assetName: r,
                            assetType: n,
                            assetTypeDisplayName: s,
                            sellerName: b,
                            isPlace: v,
                            loading: I,
                            onAction: function() {
                                return t(d), !1
                            }
                        });
                    return X().createElement(X().Fragment, null, 0 < E ? X().createElement(_, {
                        robuxNeeded: E
                    }) : h, T && X().createElement(G, {
                        title: T.title,
                        message: T.message
                    }), null != M && X().createElement(W, {
                        expectedPrice: d,
                        currentPrice: M,
                        loading: I,
                        onAction: function() {
                            return t(M), !1
                        }
                    }), A && X().createElement(z, ne({
                        thumbnail: y,
                        assetName: r,
                        assetType: n,
                        assetTypeDisplayName: s,
                        sellerName: b,
                        isPlace: v,
                        isPrivateServer: w,
                        expectedPrice: M || d
                    }, A)), g && X().createElement(L, null))
                }
                return t.defaultProps = {
                    isPlace: !1,
                    isPrivateServer: !1,
                    assetTypeDisplayName: "",
                    isRentable: !1,
                    expectedPromoId: 0,
                    userAssetId: 0,
                    showSuccessBanner: !1,
                    handlePurchase: null,
                    onPurchaseSuccess: function() {},
                    customProps: {}
                }, t.propTypes = {
                    translate: r().func.isRequired,
                    productId: r().number.isRequired,
                    isRentable: r().bool,
                    expectedCurrency: r().number.isRequired,
                    expectedPrice: r().number.isRequired,
                    thumbnail: r().node.isRequired,
                    assetName: r().string.isRequired,
                    assetType: r().string.isRequired,
                    assetTypeDisplayName: r().string,
                    expectedSellerId: r().number.isRequired,
                    sellerName: r().string.isRequired,
                    isPlace: r().bool,
                    isPrivateServer: r().bool,
                    expectedPromoId: r().number,
                    userAssetId: r().number,
                    showSuccessBanner: r().bool,
                    handlePurchase: r().func,
                    onPurchaseSuccess: r().func,
                    customProps: r().func
                }, [(0, i.withTranslations)(t, o.purchasingResources), {
                    start: function() {
                        (C || B).open(), H.open()
                    }
                }]
            }
            var ce = HeaderScripts,
                de = b.getItemDetailsUrl,
                me = b.getPurchaseableDetailUrl,
                pe = b.getResellerDataUrl,
                fe = b.getMetaDataUrl,
                he = function(e, t) {
                    t = {
                        url: de(e, t),
                        retryable: !0,
                        withCredentials: !0
                    };
                    return w.httpService.get(t)
                },
                ye = function(e) {
                    e = {
                        url: me(e),
                        retryable: !0,
                        withCredentials: !0
                    };
                    return w.httpService.get(e)
                },
                be = function(e) {
                    e = {
                        url: pe(e),
                        retryable: !0,
                        withCredentials: !0
                    };
                    return w.httpService.get(e)
                },
                ge = function() {
                    var e = {
                        url: fe(),
                        retryable: !0,
                        withCredentials: !0
                    };
                    return w.httpService.get(e)
                };

            function ve(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return we(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return we(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function we(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var xe = c,
                Se = function(e, t, r) {
                    function n() {
                        o({
                            loading: !1,
                            loadFailure: !0
                        })
                    }
                    var a = ve((0, Z.useState)({
                            isForRent: !1,
                            expectedSellerId: 0,
                            owned: !1,
                            isPurchasable: !1,
                            id: 0,
                            itemType: "",
                            assetType: "",
                            name: "",
                            description: "",
                            productId: 0,
                            creatorTargetId: 0,
                            creatorName: "",
                            price: null,
                            loading: !0,
                            loadFailure: !1,
                            premiumPricing: null,
                            premiumDiscountPercentage: null,
                            hasLimitedPrivateSales: !1,
                            isPublicDomain: !1,
                            premiumPriceInRobux: null,
                            assetTypeDisplayName: "",
                            offSaleDeadline: null,
                            unitsAvailableForConsumption: 0,
                            isLimited: !1,
                            resellerAvailable: !1,
                            firstReseller: {},
                            priceStatus: "",
                            isMarketPlaceEnabled: !0
                        }), 2),
                        i = a[0],
                        o = a[1],
                        l = (0, Z.useCallback)(function() {
                            e(t, r).then(function(e) {
                                var e = e.data,
                                    t = {
                                        isForRent: e.isForRent,
                                        expectedSellerId: e.expectedSellerId,
                                        owned: e.owned,
                                        id: e.id,
                                        itemType: e.itemType,
                                        assetType: e.assetType,
                                        name: e.name,
                                        description: e.description,
                                        productId: e.productId,
                                        price: e.price,
                                        lowestPrice: e.lowestPrice,
                                        creatorTargetId: e.creatorTargetId,
                                        creatorName: e.creatorName,
                                        hasLimitedPrivateSales: void 0 !== e.lowestPrice,
                                        isPublicDomain: 0 === e.price,
                                        offSaleDeadline: e.offSaleDeadline,
                                        isLimited: e.itemRestrictions.includes("Limited") || e.itemRestrictions.includes("LimitedUnique"),
                                        unitsAvailableForConsumption: void 0 !== e.unitsAvailableForConsumption ? e.unitsAvailableForConsumption : 0,
                                        priceStatus: void 0 !== e.priceStatus ? e.priceStatus : ""
                                    };
                                void 0 !== e.premiumPricing && (t.premiumPriceInRobux = e.premiumPricing.premiumPriceInRobux, t.premiumDiscountPercentage = e.premiumPricing.premiumDiscountPercentage), t.isLimited && (t.price = void 0 !== t.lowestPrice ? t.lowestPrice : t.price, be(t.id).then(function(e) {
                                    t.resellerAvailable = 0 < e.data.data.length, t.resellerAvailable && (e = ve(e.data.data, 1)[0], t.price = e.price, t.firstReseller = e)
                                })), ye(e.productId).then(function(e) {
                                    !e.data.purchasable && e.data.reason && e.data.reason !== xe.insufficientFunds ? t.isPurchasable = e.data.purchasable : t.isPurchasable = !0, t.assetTypeDisplayName = e.data.assetTypeDisplayName, t.loading = !1, t.loadFailure = !1, ge().then(function(e) {
                                        t.isMarketPlaceEnabled = e.data.isMarketPlaceEnabled && e.data.isItemsXchangeEnabled, o(t)
                                    }).catch(function() {
                                        n()
                                    })
                                }).catch(function(e) {
                                    e.statusText === xe.unauthorizedMessage ? (t.loading = !1, t.loadFailure = !1, o(t)) : n()
                                })
                            }).catch(function() {
                                n()
                            })
                        }, [t, r, e]);
                    return (0, Z.useEffect)(function() {
                        l()
                    }, []), {
                        itemDetail: i,
                        loadItemDetail: l
                    }
                },
                Pe = function() {
                    var e = document.getElementById("item-container");
                    return e ? {
                        itemDetailItemId: parseInt(e.getAttribute("data-item-id"), 10),
                        itemDetailItemType: e.getAttribute("data-item-type")
                    } : null
                },
                Ae = RobloxThumbnails;

            function Ie(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var Re = ue(),
                Ee = (a = (e = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(Re = Re) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return r
                }(Re, e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ie(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ie(e, t)
                }(Re, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()))[0],
                Te = a[1],
                Ne = l,
                Me = b.getPremiumConversionUrl;

            function De(e) {
                var t = e.translate,
                    r = e.productId,
                    n = e.price,
                    a = e.itemName,
                    i = e.itemType,
                    o = e.assetTypeDisplayName,
                    l = e.sellerName,
                    s = e.expectedSellerId,
                    u = e.isRentable,
                    c = e.isPurchasable,
                    d = e.isOwned,
                    m = e.isPlugin,
                    p = e.itemDetailItemId,
                    f = e.loading,
                    h = e.userQualifiesForPremiumPrices,
                    y = e.premiumPriceInRobux,
                    b = e.isAuthenticated,
                    g = e.resellerAvailable,
                    v = e.firstReseller,
                    g = e.isMarketPlaceEnabled && (g || c),
                    c = function() {
                        return t(u ? Ne.rentAction : 0 === n ? Ne.getAction : Ne.buyAction)
                    };
                if (f) return X().createElement(x.Loading, null);
                if (!b) return null != y ? X().createElement(x.Button, {
                    id: "upgrade-button",
                    className: "btn-fixed-width-lg btn-primary-lg",
                    onClick: function() {
                        window.open(Me(p, i))
                    }
                }, t(Ne.getPremiumAction)) : X().createElement(x.Button, {
                    className: "btn-fixed-width-lg btn-growth-lg PurchaseButton",
                    onClick: function() {
                        window.location = "/login"
                    }
                }, c());
                b = X().createElement(Ae.Thumbnail2d, {
                    type: "bundle" === i ? Ae.ThumbnailTypes.bundleThumbnail : Ae.ThumbnailTypes.assetThumbnail,
                    size: Ae.DefaultThumbnailSize,
                    targetId: p,
                    format: Ae.ThumbnailFormat.png,
                    altName: a
                });
                return m && (d || 0 === n) ? X().createElement(X().Fragment, null, X().createElement(x.Button, {
                    className: "btn-fixed-width-lg btn-primary-lg InstallButton",
                    onClick: function() {
                        var e;
                        e = p, P.GameLauncher.openPluginInStudio(e)
                    }
                }, X().createElement("span", null, t(Ne.installAction)))) : X().createElement(X().Fragment, null, X().createElement(x.Button, {
                    className: "btn-fixed-width-lg btn-growth-lg PurchaseButton",
                    onClick: Te.start,
                    isDisabled: !g
                }, c()), X().createElement(Ee, {
                    productId: r,
                    expectedPrice: h && null != y ? y : n,
                    thumbnail: b,
                    assetTypeDisplayName: o,
                    assetName: a,
                    sellerName: v ? v.seller.name : l,
                    expectedSellerId: v ? v.seller.id : s,
                    userAssetId: v ? v.userAssetId : 0,
                    isRentable: u,
                    showSuccessBanner: !0
                }))
            }
            De.propTypes = {
                translate: r().func.isRequired,
                productId: r().number.isRequired,
                price: r().number.isRequired,
                itemName: r().string.isRequired,
                itemType: r().string.isRequired,
                assetTypeDisplayName: r().string.isRequired,
                sellerName: r().string.isRequired,
                expectedSellerId: r().number.isRequired,
                isRentable: r().bool.isRequired,
                isPurchasable: r().bool.isRequired,
                isOwned: r().bool.isRequired,
                isPlugin: r().bool.isRequired,
                itemDetailItemId: r().number.isRequired,
                loading: r().bool.isRequired,
                userQualifiesForPremiumPrices: r().bool.isRequired,
                premiumPriceInRobux: r().number.isRequired,
                isAuthenticated: r().bool.isRequired,
                resellerAvailable: r().bool.isRequired,
                firstReseller: r().shape({
                    seller: {
                        name: r().string.isRequired,
                        id: r().number.isRequired
                    },
                    userAssetId: r().number.isRequired
                }).isRequired,
                isMarketPlaceEnabled: r().bool.isRequired
            };
            var Fe = (0, i.withTranslations)(De, o.itemResources),
                Oe = l;

            function ke(e) {
                var t = e.translate,
                    r = e.isLimited,
                    e = e.resellerAvailable,
                    e = r && e;
                return X().createElement("div", {
                    className: "text-label field-label price-label"
                }, X().createElement("span", null, t(e ? Oe.bestPriceLabel : Oe.priceLabel)))
            }
            ke.propTypes = {
                translate: r().func.isRequired,
                isLimited: r().bool.isRequired,
                resellerAvailable: r().bool.isRequired
            };
            var Ce = (0, i.withTranslations)(ke, o.itemResources),
                qe = l,
                Le = c,
                je = b.getPremiumConversionUrl;

            function Ue(e) {
                var t = e.translate,
                    r = e.price,
                    n = e.itemType,
                    a = e.itemDetailItemId,
                    i = e.premiumPriceInRobux,
                    o = e.premiumDiscountPercentage,
                    l = e.userQualifiesForPremiumPrices,
                    s = e.isOwned,
                    u = e.loading,
                    c = e.loadFailure,
                    d = e.unitsAvailableForConsumption,
                    m = e.isLimited,
                    p = e.isPlugin,
                    f = e.resellerAvailable,
                    h = e.priceStatus,
                    y = e.offSaleDeadline,
                    b = e.isMarketPlaceEnabled,
                    g = null == i && null == r,
                    v = !0,
                    e = "";
                return u ? X().createElement(x.Loading, null) : (!u && c ? e = Le.retryErrorMessage : h === qe.offSale && null === y ? e = t(qe.itemNoLongerForSaleLabel) : b || s ? p || !s || m ? m && 0 === d && !f ? e = t(qe.noOneCurrentlySellingLabel) : v = !1 : e = t(qe.itemAvailableInventoryLabel) : e = t(qe.purchasingTemporarilyUnavailableLabel), 0 === r ? null : v && !s ? X().createElement("div", {
                    className: "price-container-text"
                }, X().createElement("div", {
                    className: "item-first-line"
                }, " ", e, " ")) : X().createElement(X().Fragment, null, X().createElement("div", {
                    className: "price-container-text"
                }, v ? X().createElement("div", {
                    className: "item-first-line"
                }, " ", e, " ") : null, X().createElement(Ce, {
                    translate: t,
                    isLimited: m,
                    resellerAvailable: f
                }), X().createElement("div", {
                    className: "price-info"
                }, X().createElement("div", {
                    className: "icon-text-wrapper clearfix icon-robux-price-container"
                }, g ? X().createElement("span", {
                    className: "icon-robux-16x16 icon-robux-gray-16x16 wait-for-i18n-format-render"
                }) : X().createElement("span", {
                    className: "icon-robux-16x16 wait-for-i18n-format-render"
                }), X().createElement("span", {
                    className: "text-robux-lg wait-for-i18n-format-render"
                }, l && null != i ? w.numberFormat.getNumberFormat(i) : w.numberFormat.getNumberFormat(r)))), function() {
                    if (null == i || s) return null;
                    if (null == r) return l ? X().createElement("span", {
                        className: "small text field-content empty-label wait-for-i18n-format-render"
                    }, t(qe.premiumExclusiveEligiblePromptLabel)) : X().createElement("span", {
                        className: "small text field-content empty-label wait-for-i18n-format-render"
                    }, t(qe.premiumExclusiveIneligiblePromptLabel));
                    var e = {
                        originalPrice: (0, S.renderToString)(X().createElement(A, {
                            price: r
                        })),
                        discountPercentage: o,
                        premiumDiscountedPrice: (0, S.renderToString)(X().createElement(A, {
                            price: i
                        }))
                    };
                    return X().createElement(X().Fragment, null, X().createElement("div", {
                        className: "text-label field-label empty-label"
                    }, " "), X().createElement("span", {
                        className: "premium-prompt small text field-content empty-label wait-for-i18n-format-render"
                    }, l ? X().createElement("a", {
                        "aria-label": " ",
                        href: je(a, n),
                        dangerouslySetInnerHTML: {
                            __html: t(qe.premiumDiscountSavingsLabel, e)
                        },
                        onClick: function() {
                            window.open(je(a, n))
                        }
                    }) : X().createElement("a", {
                        "aria-label": " ",
                        href: je(a, n),
                        dangerouslySetInnerHTML: {
                            __html: t(qe.premiumDiscountOpportunityPromptLabel, e)
                        },
                        onClick: function() {
                            window.open(je(a, n))
                        }
                    })))
                }())))
            }
            Ue.propTypes = {
                translate: r().func.isRequired,
                price: r().number.isRequired,
                itemType: r().string.isRequired,
                itemDetailItemId: r().number.isRequired,
                premiumPriceInRobux: r().number.isRequired,
                premiumDiscountPercentage: r().number.isRequired,
                userQualifiesForPremiumPrices: r().bool.isRequired,
                loading: r().bool.isRequired,
                isOwned: r().bool.isRequired,
                loadFailure: r().bool.isRequired,
                unitsAvailableForConsumption: r().number.isRequired,
                isLimited: r().bool.isRequired,
                isPlugin: r().bool.isRequired,
                resellerAvailable: r().bool.isRequired,
                priceStatus: r().string.isRequired,
                offSaleDeadline: r().string.isRequired,
                isMarketPlaceEnabled: r().bool.isRequired
            };
            var Be = (0, i.withTranslations)(Ue, o.itemModelResources);

            function _e(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, i = e
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return He(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return He(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function He(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var ze = l;

            function Ve(e) {
                var t = e.translate,
                    r = e.offSaleDeadline,
                    e = _e((0, Z.useState)(0), 2),
                    n = e[0],
                    a = e[1],
                    e = _e((0, Z.useState)(0), 2),
                    i = e[0],
                    o = e[1],
                    e = _e((0, Z.useState)(0), 2),
                    l = e[0],
                    s = e[1],
                    e = _e((0, Z.useState)(0), 2),
                    u = e[0],
                    c = e[1];
                (0, Z.useEffect)(function() {
                    function e() {
                        var e;
                        new Date < new Date(r) && (e = +new Date, e = (new Date(r).getTime() - e) / 1e3, a(Math.floor(e / 86400)), o(Math.floor(e / 3600 % 24)), s(Math.floor(e / 60 % 60)), c(Math.floor(e % 60)))
                    }
                    var t;
                    return e(), t = setInterval(e, 1e3),
                        function() {
                            return clearInterval(t)
                        }
                }, [a, o, s, c]);
                return X().createElement("div", {
                    id: "sale-clock",
                    className: "text-error sale-clock desktop-sale-clock"
                }, function() {
                    if (n < 1) {
                        var e = {
                            numberOfHours: i,
                            numberOfMinutes: l,
                            numberOfSeconds: u
                        };
                        return X().createElement("div", {
                            className: "text",
                            dangerouslySetInnerHTML: {
                                __html: t(ze.OffsaleCountdownHourMinuteSecondLabel, e)
                            }
                        })
                    }
                    if (u < 1) return window.location.reload(), null;
                    e = {
                        numberOfDays: n,
                        numberOfHours: i,
                        numberOfMinutes: l
                    };
                    return X().createElement("div", {
                        className: "text",
                        dangerouslySetInnerHTML: {
                            __html: t(ze.CountdownTimerDayHourMinute, e)
                        }
                    })
                }())
            }
            Ve.propTypes = {
                translate: r().func.isRequired,
                offSaleDeadline: r().string.isRequired
            };
            var We = (0, i.withTranslations)(Ve, o.itemResources),
                $e = l,
                Ge = s,
                Qe = u,
                Ze = b.getInventoryUrl;

            function Xe(e) {
                var t = e.translate,
                    r = e.assetType,
                    n = ce.deviceMeta.getDeviceMeta(),
                    a = "phone" === n.deviceType,
                    e = Ze(ce.authenticatedUser.id),
                    i = r === Ge.Plugin || r === Ge.Decal || r === Ge.Model || r === Ge.Video || r === Ge.Animation ? Qe.Library : r === Ge.Place || r === Ge.Badge || r === Ge.GamePass || r === Ge.Animation ? null : Qe.Catalog;
                return i !== Qe.Catalog || n.isInApp || !ce.deviceMeta.isAndroidApp && !ce.deviceMeta.isIosApp || !ce.deviceMeta.isPhone && !ce.deviceMeta.isTablet ? i !== Qe.Catalog || a ? X().createElement("a", {
                    id: "inventory-button",
                    href: e,
                    className: "btn-fixed-width-lg btn-control-md"
                }, t($e.inventoryAction)) : X().createElement("a", {
                    id: "edit-avatar-button",
                    href: "/my/avatar",
                    className: "btn-control-md"
                }, X().createElement("span", {
                    className: "icon-nav-charactercustomizer"
                })) : X().createElement("a", {
                    id: "open-in-avatar-editor-button",
                    href: "/#",
                    className: "btn-fixed-width-lg btn-control-md"
                }, X().createElement("span", {
                    className: "icon-nav-charactercustomizer"
                }))
            }
            Xe.propTypes = {
                translate: r().func.isRequired,
                assetType: r().number.isRequired
            };
            var Je = (0, i.withTranslations)(Xe, o.itemResources),
                Ye = Pe,
                Ke = s;

            function et(e) {
                var t = e.translate,
                    e = Ye(),
                    r = e.itemDetailItemId,
                    e = e.itemDetailItemType,
                    n = Se(he, r, e).itemDetail;
                return X().createElement(X().Fragment, null, X().createElement(Be, {
                    translate: t,
                    price: n.price,
                    itemType: n.itemType,
                    itemDetailItemId: r,
                    premiumPriceInRobux: n.premiumPriceInRobux,
                    premiumDiscountPercentage: n.premiumDiscountPercentage,
                    userQualifiesForPremiumPrices: ce.authenticatedUser.isPremiumUser,
                    isOwned: n.owned,
                    loading: n.loading,
                    loadFailure: n.loadFailure,
                    unitsAvailableForConsumption: n.unitsAvailableForConsumption,
                    isLimited: n.isLimited,
                    isPlugin: n.assetType === Ke.Plugin,
                    resellerAvailable: n.resellerAvailable,
                    priceStatus: n.priceStatus,
                    offSaleDeadline: n.offSaleDeadline,
                    isMarketPlaceEnabled: n.isMarketPlaceEnabled
                }), !n.loadFailure && (n.owned && (!n.isLimited || 0 < n.unitsAvailableForConsumption) ? X().createElement("div", {
                    className: "action-button"
                }, X().createElement(Je, {
                    translate: t,
                    assetType: n.assetType
                })) : X().createElement("div", {
                    className: "action-button"
                }, X().createElement(Fe, {
                    translate: t,
                    productId: n.productId,
                    price: n.price,
                    itemType: n.itemType,
                    assetTypeDisplayName: n.assetTypeDisplayName,
                    itemName: n.name,
                    sellerName: n.creatorName,
                    expectedSellerId: n.expectedSellerId,
                    isRentable: n.isForRent,
                    isPurchasable: n.isPurchasable,
                    isOwned: n.owned,
                    isInstallable: n.assetType === Ke.Plugin,
                    itemDetailItemId: r,
                    loading: n.loading,
                    hasLimitedPrivateSales: n.hasLimitedPrivateSales,
                    userQualifiesForPremiumPrices: ce.authenticatedUser.isPremiumUser,
                    premiumPriceInRobux: n.premiumPriceInRobux,
                    isAuthenticated: ce.authenticatedUser.isAuthenticated,
                    unitsAvailableForConsumption: n.unitsAvailableForConsumption,
                    isLimited: n.isLimited,
                    resellerAvailable: n.resellerAvailable,
                    firstReseller: n.firstReseller,
                    isMarketPlaceEnabled: n.isMarketPlaceEnabled
                }), null !== n.offSaleDeadline && X().createElement(We, {
                    translate: t,
                    offSaleDeadline: n.offSaleDeadline
                }))))
            }
            et.propTypes = {
                translate: r().func.isRequired
            };
            var tt = et;
            window.RobloxItemPurchase = {
                createTransactionFailureModal: f,
                createInsufficientFundsModal: N,
                createPriceChangedModal: J,
                createPurchaseVerificationModal: Y,
                createPurchaseConfirmationModal: K,
                createItemPurchase: ue,
                errorTypeIds: n,
                getMetaData: M,
                BalanceAfterSaleText: O,
                PriceLabel: A,
                AssetName: U,
                TransactionVerb: V
            }, (0, w.ready)(function() {
                var e = document.getElementById("display-price-container");
                e && (0, t.render)(X().createElement(tt, null), e)
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/f041c1bfe3de0195e72e-itemPurchase.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ItemPurchase");