! function() {
    "use strict";
    var a = {
            n: function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return a.d(t, {
                    a: t
                }), t
            },
            d: function(e, t) {
                for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        },
        e = jQuery,
        c = a.n(e),
        s = Roblox;

    function n(e) {
        var t = new(c().Deferred);
        return s.Hybrid.Game.launchGame(e, function() {
            t.resolve(e)
        }), t
    }
    var t, o, r = {
            joinMultiplayerGame: function(e) {
                var t = !0 === e.isPlayTogetherGame;
                return n({
                    requestType: s.Hybrid.Game.LAUNCH_MODES.SIMPLE_GAME,
                    placeId: e.placeId.toString(),
                    isPlayTogetherGame: t,
                    browserTrackerId: s.Cookies.getBrowserTrackerId()
                })
            },
            followPlayerIntoGame: function(e) {
                return n({
                    requestType: s.Hybrid.Game.LAUNCH_MODES.FOLLOW_USER,
                    userId: e.userId.toString(),
                    browserTrackerId: s.Cookies.getBrowserTrackerId()
                })
            },
            joinGameInstance: function(e) {
                var t = !0 === e.isPlayTogetherGame;
                return n({
                    requestType: s.Hybrid.Game.LAUNCH_MODES.GAME_INSTANCE,
                    placeId: e.placeId.toString(),
                    instanceId: e.gameId,
                    isPlayTogetherGame: t,
                    browserTrackerId: s.Cookies.getBrowserTrackerId()
                })
            },
            joinPrivateGame: function(e) {
                return n({
                    requestType: s.Hybrid.Game.LAUNCH_MODES.PRIVATE_SERVER,
                    placeId: e.placeId.toString(),
                    accessCode: e.accessCode,
                    browserTrackerId: s.Cookies.getBrowserTrackerId()
                })
            },
            playTogetherGame: function(e) {
                return n({
                    requestType: s.Hybrid.Game.LAUNCH_MODES.SIMPLE_GAME,
                    placeId: e.placeId.toString(),
                    conversationId: e.conversationId.toString(),
                    browserTrackerId: s.Cookies.getBrowserTrackerId()
                })
            }
        },
        i = {
            modalClassName: "soli-modal",
            loginUrl: "/login?returnUrl=",
            signupUrl: "/login?returnurl=",
            eventContext: "gameDetails",
            loginField: "gameLaunch_login",
            signupField: "gameLaunch_signup"
        };
    c()(document).ready(function() {
        t = new s.TranslationResourceProvider, o = t.getTranslationResource("Feature.GameLaunchGuestMode")
    });
    var l = {
            restrictGuests: function(e) {
                var t = new(c().Deferred);
                return "True" === c()("#PlaceLauncherStatusPanel").data("is-user-logged-in") ? t.resolve(e) : s.Dialog.open({
                    titleText: o.get("Heading.Dialog.SignUpOrLogin"),
                    bodyContent: o.get("Description.Dialog.SignUpOrLogin"),
                    cssClass: i.modalClassName,
                    acceptColor: s.Dialog.green,
                    acceptText: o.get("Action.Dialog.SignUp"),
                    declineText: o.get("Action.Dialog.Login"),
                    onDecline: function() {
                        s.FormEvents && s.FormEvents.SendInteractionClick(i.eventContext, i.loginField);
                        var e = i.loginUrl + document.getElementById("GameLaunch").getAttribute("secret");
                        window.location.href = s.Endpoints ? s.Endpoints.getAbsoluteUrl(e) : e
                    },
                    onAccept: function() {
                        var e;
                        e = i.signupField, s.FormEvents && s.FormEvents.SendInteractionClick("gameDetails", e), e = i.signupUrl + encodeURIComponent(window.location.pathname + window.location.search), window.location.href = s.Endpoints ? s.Endpoints.getAbsoluteUrl(e) : e
                    }
                }), t
            }
        },
        d = {
            bars: [],
            init: function(e, t, n, a) {
                var o = this.get(e);
                null == o && (o = {}), o.barID = e, o.innerBarID = t, o.percentageID = n, void 0 === a && (o.percentComplete = 0), this.bars.push(o), this.update(e, o.percentComplete)
            },
            get: function(e) {
                for (var t = 0; t < this.bars.length; t += 1)
                    if (this.bars[t].barID === e) return this.bars[t];
                return null
            },
            dispose: function(e) {
                for (var t = 0; t < this.bars.length; t += 1) this.bars[t].barID === e && this.bars.splice(t, 1)
            },
            update: function(e, t) {
                var n = this.get(e);
                n && (1 < t && (t = 1), e = c()("#".concat(e)).width(), e = Math.round(e * t), c()("#".concat(n.innerBarID)).animate({
                    width: e
                }, 200, "swing"), n.percentageID && 0 < c()("#".concat(n.percentageID)).length && c()("#".concat(n.percentageID)).html("".concat(Math.round(100 * t), "%")), n.percentComplete = t)
            }
        },
        u = {
            newValue: "",
            showVideoPreRoll: !1,
            videoInitialized: !1,
            videoStarted: !1,
            videoCompleted: !1,
            videoSkipped: !1,
            videoCancelled: !1,
            videoErrored: !1,
            loadingBarMaxTime: 3e4,
            loadingBarCurrentTime: 0,
            loadingBarIntervalID: 0,
            loadingBarID: "videoPrerollLoadingBar",
            loadingBarInnerID: "videoPrerollLoadingBarCompleted",
            loadingBarPercentageID: "videoPrerollLoadingPercent",
            videoDiv: "videoPrerollMainDiv",
            companionAdDiv: "videoPrerollCompanionAd",
            contentElement: "contentElement",
            videoLoadingTimeout: 7e3,
            videoPlayingTimeout: 23e3,
            videoLogNote: "",
            logsEnabled: !1,
            includedPlaceIds: "",
            isSwfPreloaderEnabled: !1,
            isFlashInstalled: !1,
            isPrerollShownEveryXMinutesEnabled: !1,
            isAgeTargetingEnabled: !0,
            isAgeOrSegmentTargetingEnabled: !1,
            adUnit: "",
            adTime: 0,
            placeId: 0,
            customTargeting: {
                userAge: "",
                userAgeOrSegment: "",
                userGender: "",
                gameGenres: "",
                environment: "",
                adTime: "",
                PLVU: !1
            },
            adsManager: null,
            adsLoader: null,
            adDisplayContainer: null,
            intervalTimer: null,
            videoContent: null,
            isCompanionAdRenderedByGoogleTag: !1
        };

    function p() {
        u.adsLoader.contentComplete()
    }

    function m() {
        u.videoContent = document.getElementById(u.contentElement)
    }

    function v() {
        u.adDisplayContainer = new window.google.ima.AdDisplayContainer(document.getElementById(u.videoDiv), u.videoContent)
    }

    function h() {
        var e = "&iu=".concat(u.adUnit),
            t = "";
        u.isAgeTargetingEnabled && (t += "&Age=".concat(u.customTargeting.userAge)), u.isAgeOrSegmentTargetingEnabled && (t += "&A=".concat(u.customTargeting.userAgeOrSegment));
        t = encodeURIComponent("Env=".concat(u.customTargeting.environment, "&Gender=").concat(u.customTargeting.userGender).concat(t, "&Genres=").concat(u.customTargeting.gameGenres, "&PlaceID=").concat(u.placeId, "&Time=").concat(u.customTargeting.adTime, "&PLVU=").concat(u.customTargeting.PLVU));
        return "".concat("http://pubads.g.doubleclick.net/gampad/ads?impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]").concat("&sz=400x300").concat(e).concat("&ciu_szs=300x250", "&cust_params=").concat(t, "&")
    }

    function g() {
        window.googletag.defineSlot(u.adUnit, [300, 250], u.companionAdDiv).addService(window.googletag.companionAds()), window.googletag.enableServices(), window.googletag.display(u.companionAdDiv)
    }

    function f(e) {
        switch (e.type) {
            case window.google.ima.AdEvent.Type.LOADED:
                break;
            case window.google.ima.AdEvent.Type.STARTED:
                if (u.videoStarted = !0, u.isCompanionAdRenderedBywindow.googletag) {
                    if (!window.googletag) break;
                    window.googletag.cmd.push(g)
                } else {
                    var t = e.getAd().getCompanionAds(300, 250);
                    0 < t.length && (t = t[0].getContent(), document.getElementById(u.companionAdDiv).innerHTML = t)
                }
                break;
            case window.google.ima.AdEvent.Type.SKIPPED:
                u.videoCompleted = !0, u.videoSkipped = !0, u.showVideoPreRoll = !1;
                break;
            case window.google.ima.AdEvent.Type.COMPLETE:
                u.videoStarted && !1 === u.videoCancelled && (u.videoCompleted = !0, u.showVideoPreRoll = !1, "" !== u.newValue && c().cookie("RBXVPR", u.newValue, 180))
        }
    }

    function b() {
        u.videoErrored = !0, u.videoCompleted = !0, u.videoLogNote = "AdError"
    }

    function y(e) {
        u.adsManager = e.getAdsManager(u.videoContent), u.adsManager.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, b), u.adsManager.addEventListener(window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED, f), u.adsManager.addEventListener(window.google.ima.AdEvent.Type.LOADED, f), u.adsManager.addEventListener(window.google.ima.AdEvent.Type.STARTED, f), u.adsManager.addEventListener(window.google.ima.AdEvent.Type.SKIPPED, f), u.adsManager.addEventListener(window.google.ima.AdEvent.Type.COMPLETE, f);
        try {
            u.adsManager.init(400, 300, window.google.ima.ViewMode.NORMAL), u.adsManager.start()
        } catch (e) {
            b()
        }
    }

    function w() {
        window.google.ima.settings.setVpaidAllowed(!0), m(), v(), u.adDisplayContainer.initialize(), u.adsLoader = new window.google.ima.AdsLoader(u.adDisplayContainer), u.adsLoader.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, y, !1), u.adsLoader.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, b, !1), u.videoContent.addEventListener("ended", p);
        var e = new window.google.ima.AdsRequest,
            t = h();
        e.adTagUrl = t, e.linearAdSlotWidth = 400, e.linearAdSlotHeight = 300, e.nonLinearAdSlotWidth = 400, e.nonLinearAdSlotHeight = 300, u.adsLoader.requestAds(e)
    }

    function P() {
        var t = !1;
        try {
            new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (t = !0)
        } catch (e) {
            navigator.mimeTypes && void 0 !== navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = !0)
        }
        return t
    }

    function I() {
        if (u.logsEnabled) {
            var e = "";
            if (u.videoCompleted) e = "Complete", "" === u.videoLogNote && (u.videoLogNote = "NoTimeout"), u.logsEnabled = !1;
            else if (u.videoCancelled) e = "Cancelled", u.videoLogNote = window.RobloxLaunch.state;
            else {
                if (!1 !== u.videoInitialized || "" === u.videoLogNote) return;
                e = "Failed", u.logsEnabled = !1
            }
            s.GaEventSettings.gaDFPPreRollEnabled && window.GoogleAnalyticsEvents && window.GoogleAnalyticsEvents.FireEvent(["DFPPreRoll", e, u.videoLogNote])
        }
    }

    function C() {
        return !!u.videoInitialized && (u.videoInitialized && !u.videoStarted && u.loadingBarCurrentTime > u.videoLoadingTimeout && (u.videoCompleted = !0, u.videoLogNote = "LoadingTimeout"), u.videoStarted && !u.videoCompleted && u.loadingBarCurrentTime > u.videoPlayingTimeout && (u.videoCompleted = !0, u.videoLogNote = "PlayingTimeout"), !u.videoCompleted)
    }

    function E() {
        var e = encodeURIComponent(h()),
            e = "adTagUrl=".concat(e);
        c().ajax({
            url: "/game/preloader",
            data: {
                url: e
            },
            method: "GET",
            crossDomain: !0,
            xhrFields: {
                withCredentials: !0
            }
        }).success(function(e) {
            c()("#videoPrerollMainDiv").html(e), u.videoErrored || (u.videoStarted = !0)
        })
    }

    function S() {
        c().ajax({
            url: "/game/updateprerollcount",
            method: "GET",
            crossDomain: !0,
            xhrFields: {
                withCredentials: !0
            }
        })
    }
    Object.assign(u, {
        contentEndedListener: p,
        createVideoContent: m,
        createAdDisplayContainer: v,
        constructUrl: h,
        renderCompanionAd: g,
        onAdEvent: f,
        onAdError: b,
        onAdsManagerLoaded: y,
        requestAds: w,
        checkFlashEnabled: P,
        checkEligibility: function() {
            u.showVideoPreRoll && (P() && (u.isFlashInstalled = !0), "True" === c()("#PlaceLauncherStatusPanel").data("is-protocol-handler-launch-enabled") || s.Client.IsRobloxInstalled() ? void 0 === window.google || void 0 === window.google.ima ? (u.videoLogNote = "NoGoogle", u.showVideoPreRoll = !1) : s.Client.isIDE() ? (u.videoLogNote = "RobloxStudio", u.showVideoPreRoll = !1) : s.Client.isRobloxBrowser() ? (u.videoLogNote = "RobloxPlayer", u.showVideoPreRoll = !1) : (window.chrome || window.safari) && "#chromeInstall" === window.location.hash && (u.showVideoPreRoll = !1) : u.showVideoPreRoll = !1)
        },
        logVideoPreRoll: I,
        isPlaying: C,
        correctIEModalPosition: function(e) {
            var t, n;
            e.container.innerHeight() <= 30 && (t = c()("#videoPrerollPanel"), n = -Math.floor(t.innerHeight() / 2), t.css({
                position: "relative",
                top: "".concat(n, "px")
            }), e.container.find(".VprCloseButton").css({
                top: "".concat(n - 10, "px"),
                "z-index": "1003"
            }))
        },
        renderImaPreloader: E,
        updatePrerollCount: S,
        start: function() {
            0 === u.placeId && "undefined" != typeof play_placeId && (u.placeId = play_placeId), u.videoInitialized = !0, u.videoStarted = !1, u.videoCancelled = !1, u.videoCompleted = !1, u.videoSkipped = !1, u.loadingBarCurrentTime = 0, u.videoLogNote = "", d.init(u.loadingBarID, u.loadingBarInnerID, u.loadingBarPercentageID), u.loadingBarIntervalID = setInterval(function() {
                u.loadingBarCurrentTime += 1e3, d.update(u.loadingBarID, u.loadingBarCurrentTime / u.loadingBarMaxTime)
            }, 1e3), (u.isSwfPreloaderEnabled && u.isFlashInstalled ? E : w)()
        },
        cancel: function() {
            u.videoCancelled = !0, c().modal.close()
        },
        skip: function() {
            u.videoCompleted = !0, u.videoSkipped = !0, u.showVideoPreRoll = !1
        },
        close: function() {
            window.MadStatus && window.MadStatus.running && window.MadStatus.stop(""), window.RobloxLaunch.launcher && (window.RobloxLaunch.launcher._cancelled = !0), clearInterval(u.loadingBarIntervalID), d.dispose(u.loadingBarID), C() && (u.videoCancelled = !0), c().modal.close(), I(), u.isPrerollShownEveryXMinutesEnabled && u.videoInitialized && u.videoCompleted && S()
        }
    });
    var L = u,
        T = {
            waitForPreroll: function(e) {
                var t, n, a = new(c().Deferred),
                    o = L;
                return o.placeId = void 0 !== e.placeId ? e.placeId : 0, o.showVideoPreRoll ? (t = {
                    escClose: !0,
                    opacity: 80,
                    overlayCss: {
                        backgroundColor: "#000"
                    },
                    zIndex: 1031,
                    onShow: function(e) {
                        o.correctIEModalPosition(e), o.start(), c()("#prerollClose").hide(), c()("#prerollClose").delay(1e3 * o.adTime).show(300)
                    },
                    onClose: function() {
                        o.close()
                    },
                    closeHTML: '<a href="#" id="prerollClose" class="ImageButton closeBtnCircle_35h ABCloseCircle VprCloseButton"></a>'
                }, c()("#videoPrerollPanel").modal(t), n = setInterval(function() {
                    o.isPlaying() || (c().modal.close(), clearInterval(n), o.videoCancelled ? a.reject(e) : a.resolve(e))
                }, 200)) : (a.resolve(e), o.logVideoPreRoll()), a
            }
        };

    function A(e, t, n, a, o, r, i) {
        try {
            var l = e[r](i),
                c = l.value
        } catch (e) {
            return void n(e)
        }
        l.done ? t(c) : Promise.resolve(c).then(a, o)
    }
    var G, D = {
        gameLaunchInterface: null,
        gameLaunchLogger: null,
        initialized: new Promise(function(e, t) {
            G = e
        })
    };

    function x(e, t, n) {
        D.gameLaunchInterface.editGameInStudio(e, t, n)
    }

    function R(e) {
        e = {
            placeId: e,
            isPlayTogetherGame: !0 === (2 < arguments.length ? arguments[2] : void 0)
        };
        return l.restrictGuests(e).then(T.waitForPreroll).then(D.gameLaunchInterface.joinMultiplayerGame)
    }

    function U() {
        var l;
        return l = regeneratorRuntime.mark(function e(t, n, a) {
            var o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, D.initialized;
                    case 2:
                        return o = {
                            placeId: t,
                            accessCode: n,
                            linkCode: a
                        }, o = T.waitForPreroll(o).then(D.gameLaunchInterface.joinPrivateGame), e.abrupt("return", o);
                    case 5:
                    case "end":
                        return e.stop()
                }
            }, e)
        }), (U = function() {
            var e = this,
                i = arguments;
            return new Promise(function(t, n) {
                var a = l.apply(e, i);

                function o(e) {
                    A(a, t, n, o, r, "next", e)
                }

                function r(e) {
                    A(a, t, n, o, r, "throw", e)
                }
                o(void 0)
            })
        }).apply(this, arguments)
    }
    c().fn.bindGameLaunch = function() {
        return this.find(".VisitButtonPlayGLI").click(function() {
            var e = c()(this);
            R(e.attr("placeid"), e.data("is-membership-level-ok"))
        }), this.find(".VisitButtonEditGLI").click(function() {
            var e = c()(this);
            x(e.attr("placeid"), e.data("universeid"), !!e.data("allowupload"))
        }), this
    }, c()(document).ready(function() {
        c()("body").bindGameLaunch()
    }), Object.assign(D, {
        authenticationChecker: l,
        prerollPlayer: T,
        joinMultiplayerGame: R,
        openStudio: function() {
            D.gameLaunchInterface.openStudio()
        },
        returnToStudio: function() {
            D.gameLaunchInterface.returnToStudio()
        },
        openPluginInStudio: function(e) {
            D.gameLaunchInterface.openPluginInStudio(e)
        },
        editGameInStudio: x,
        followPlayerIntoGame: function(e) {
            return e = {
                userId: e
            }, l.restrictGuests(e).then(T.waitForPreroll).then(D.gameLaunchInterface.followPlayerIntoGame)
        },
        joinGameInstance: function(e, t, n, a) {
            return a = {
                placeId: e,
                gameId: t,
                isPlayTogetherGame: !0 === a
            }, l.restrictGuests(a).then(T.waitForPreroll).then(D.gameLaunchInterface.joinGameInstance)
        },
        joinPrivateGame: function(e, t, n) {
            return U.apply(this, arguments)
        },
        playTogetherGame: function(e, t) {
            return t = {
                placeId: e,
                conversationId: t
            }, l.restrictGuests(t).then(T.waitForPreroll).then(D.gameLaunchInterface.playTogetherGame)
        },
        setGameLaunchInterface: function(e) {
            D.gameLaunchInterface = e, G()
        },
        setGameLaunchLogger: function(e) {
            D.gameLaunchLogger = e
        },
        tryAssetInStudio: function(e) {
            D.gameLaunchInterface.tryAssetInStudio(e)
        },
        startClientAttemptedEvent: "startClientAttempted",
        startClientFailedEvent: "startClientFailed",
        startClientSucceededEvent: "startClientSucceeded",
        beginInstallEvent: "beginInstall",
        successfulInstallEvent: "successfulInstall",
        manualDownloadEvent: "manualDownload"
    });
    var k = D,
        O = {
            lastContext: "unknown",
            contextCategories: {
                joinUser: "JoinUser"
            }
        };

    function M(e, t) {
        var n = c()("#PlaceLauncherStatusPanel");
        return {
            lType: n && n.data("is-protocol-handler-launch-enabled") && "true" === n.data("is-protocol-handler-launch-enabled").toLowerCase() ? "protocol" : "plugin",
            pid: e,
            refuid: t,
            pg: (n = window.location.pathname.toLowerCase(), e = "profile", -1 !== (t = n.lastIndexOf(e)) && n.length === t + e.length ? e : -1 !== n.indexOf("/develop") ? "develop" : "/discover" === n ? "games" : "gameDetail")
        }
    }

    function B(e, t, n, a) {
        null !== t && "" !== t && "unknown" !== t && (O.lastContext = t), s.EventStream.SendEvent(e, O.lastContext, M(n, a))
    }
    Object.assign(O, {
        SendGamePlayIntent: function(e, t, n) {
            B("gamePlayIntent", e, t, n), c()(document).trigger("playButton:gamePlayIntent")
        },
        SendDevelopIntent: function(e, t) {
            B("developIntent", e, t)
        },
        SendInstallBegin: function(e, t) {
            B("installBegin", e, t)
        },
        SendInstallSuccess: function(e, t) {
            B("installSuccess", e, t)
        },
        SendClientStartAttempt: function(e, t) {
            B("clientStartAttempt", e, t)
        },
        SendClientStartSuccessWeb: function(e, t) {
            B("clientStartSuccessWeb", e, t)
        },
        SendManualDownloadClick: function(e, t) {
            B("manualDownload", e, t)
        }
    });
    var N = O,
        F = {
            logToConsoleEnabled: !1,
            logToGAEnabled: !0,
            logToEphemeralCountersEnabled: !0
        },
        V = {};
    V[k.startClientAttemptedEvent] = ["GameLaunchAttempt_<os>", "GameLaunchAttempt_<os>_<launchmethod>"], V[k.startClientSucceededEvent] = ["GameLaunchSuccessWeb_<os>", "GameLaunchSuccessWeb_<os>_<launchmethod>"];
    var j = {};
    s.GaEventSettings.gaLaunchAttemptAndLaunchSuccessEnabled && (j[k.startClientAttemptedEvent] = "Launch Attempt", j[k.startClientSucceededEvent] = "Launch Success"), j[k.beginInstallEvent] = "Install Begin", j[k.successfulInstallEvent] = "Install Success", j[k.manualDownloadEvent] = "Manual Download";
    var _ = {};

    function H(e) {
        F.logToConsoleEnabled && console.log(e)
    }

    function q(e, t) {
        var n;
        F.logToEphemeralCountersEnabled && ("Windows" === (n = c()("#PlaceLauncherStatusPanel").data("os-name")) && (n = "Win32"), e = (e = e.replace("<os>", n)).replace("<launchmethod>", t), null !== (t = window.EventTracker) && void 0 !== t && t.fireEvent && window.EventTracker.fireEvent(e))
    }

    function z(e, t, n, a) {
        void 0 !== window.GoogleAnalyticsEvents && F.logToGAEnabled && window.GoogleAnalyticsEvents.FireEvent && window.GoogleAnalyticsEvents.FireEvent([e, t, n, a])
    }

    function W(e, n) {
        H("".concat(e.type, ": ").concat(JSON.stringify(n))), V[e.type] && c().each(V[e.type], function(e, t) {
            q(t, n.launchMethod)
        }), j[e.type] && z(n.launchMethod, j[e.type], n.params.launchMode, 0), "True" === c()("#PlaceLauncherStatusPanel").data("event-stream-for-protocol-enabled") && _[e.type] && _[e.type](null, n.params.placeId)
    }
    _[k.startClientAttemptedEvent] = N.SendClientStartAttempt, _[k.startClientSucceededEvent] = N.SendClientStartSuccessWeb, _[k.beginInstallEvent] = N.SendInstallBegin, _[k.successfulInstallEvent] = N.SendInstallSuccess, _[k.manualDownloadEvent] = N.SendManualDownloadClick, Object.assign(F, {
        logToConsole: H,
        logToEphemeralCounters: q,
        logToGA: z
    }), c()(document).ready(function() {
        var e = [k.startClientAttemptedEvent, k.startClientFailedEvent, k.startClientSucceededEvent, k.beginInstallEvent, k.successfulInstallEvent, k.manualDownloadEvent];
        c()(k).on(e.join(" "), W)
    });
    var J = F,
        X = function() {
            var e = "click";
            c()("body").on(e, ".VisitButtonPlay, .VisitButtonPlayGLI", function() {
                var e, t, n, a, o, r = c()(this);
                (r.hasClass("VisitButtonPlay") || r.hasClass("VisitButtonPlayGLI")) && (e = "PlayButton"), e && (t = c()(this).attr("placeid"), n = c()(this).data("universe-id"), o = c()(this).data("user-id"), a = c()(this).data("originator-type"), r = c()(this).data("originator-id"), "GameUpdateNotification" === a && c().ajax({
                    url: "".concat(s.EnvironmentUrls.notificationApi, "/v2/stream-notifications/game-update-notification-interacted"),
                    type: "POST",
                    data: {
                        universeId: n,
                        createdOn: new Date(r),
                        interactionType: "Played",
                        currentUserId: o
                    }
                }), o = s.UrlParser ? s.UrlParser.getParameterValueByName("rbxp") : null, N.SendGamePlayIntent(e, t, o))
            }), c()("body").on(e, ".VisitButtonEdit, .VisitButtonEditGLI", function() {
                var e = c()(this).attr("placeid");
                N.SendDevelopIntent("Edit", e)
            }), c()("#rbx-running-games").on(e, ".rbx-game-server-item .rbx-game-server-join", function() {
                var e = c()(this).data("placeid");
                e && N.SendGamePlayIntent("JoinInstance", e)
            }), c()("#rbx-friends-running-games").on(e, ".rbx-friends-game-server-item .rbx-friends-game-server-join", function() {
                var e = c()(this).data("placeid");
                e && N.SendGamePlayIntent("JoinInstance", e)
            }), c()("#game-instances").on(e, "#rbx-vip-servers .rbx-vip-server-item .rbx-vip-server-join", function() {
                var e = c()(this).data("placeid");
                e && N.SendGamePlayIntent("PrivateServer", e)
            }), c()("#build-page").on(e, ".roblox-edit-button", function() {
                var e = c()(this).parents("table.item-table"),
                    e = e.data("rootplace-id") || e.data("item-id");
                e && N.SendDevelopIntent("Edit", e)
            })
        };

    function K(t, e) {
        var n, a = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), a.push.apply(a, n)), a
    }

    function Y(a) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? K(Object(o), !0).forEach(function(e) {
                var t, n;
                t = a, e = o[n = e], n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : K(Object(o)).forEach(function(e) {
                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
            })
        }
        return a
    }
    var Q = {
            isInstalling: !1,
            statusInterval: 0,
            robloxLocale: "",
            gameLocale: "",
            protocolUrlSeparator: "+",
            protocolUrlIncludesLaunchTime: !1,
            protocolDetectionEnabled: !1,
            avatarParamEnabled: !0,
            separateScriptParamsEnabled: !1,
            waitTimeBeforeFailure: 300,
            protocolNameForStudio: "roblox-studio",
            protocolNameForClient: "roblox-client",
            logger: null,
            channel: "",
            studioChannel: "",
            playerChannel: "",
            isStudioAuthTicketEnabled: !0,
            isStudioSSOParamsEnabled: !1,
            isDuarAutoOptInEnabled: !1,
            isDuarOptOutDisabled: !1
        },
        Z = {
            Global: "Global"
        },
        $ = {
            edit: "edit",
            plugin: "plugin",
            play: "play",
            build: "build",
            app: "app",
            asset: "asset"
        };

    function ee(e) {
        return e === $.edit || e === $.plugin || e === $.asset
    }

    function te(e, t) {
        function n() {
            clearTimeout(l), e()
        }
        var a, o, r, i, l = setTimeout(function() {
            c().modal.close(),
                function(e, t) {
                    var n = "True" === s.PlaceLauncher.Resources.RefactorEnabled,
                        a = ee(t.launchMode);
                    if (n) {
                        a = a ? s.PlaceLauncher.Resources.ProtocolHandlerAreYouInstalled.studio : s.PlaceLauncher.Resources.ProtocolHandlerAreYouInstalled.play;
                        return s.Dialog.open({
                            bodyContent: a.content,
                            allowHtmlContentInBody: !0,
                            showAccept: !0,
                            acceptColor: s.Dialog.green,
                            acceptText: a.buttonText,
                            showDecline: !1,
                            dismissable: !1,
                            xToCancel: !0,
                            footerText: a.footerContent,
                            allowHtmlContentInFooter: !0,
                            onAccept: function() {
                                he(t)
                            },
                            cssClass: "protocolhandler-are-you-installed-modal"
                        })
                    }
                    c()("#ProtocolHandlerAreYouInstalled").modal({
                        escClose: !0,
                        opacity: 80,
                        overlayCss: {
                            backgroundColor: "#000"
                        },
                        onClose: function() {
                            e(), c()("#ProtocolHandlerInstallButton").off("click"), c().modal.close()
                        },
                        zIndex: 1031
                    }), c()("#ProtocolHandlerInstallButton, #ProtocolHandlerStudioInstallButton").click(function() {
                        he(t)
                    })
                }(n, t)
        }, 5e3);
        a = n, o = t.launchMode, r = "True" === s.PlaceLauncher.Resources.RefactorEnabled, i = ee(o), r ? (o = (i ? s.PlaceLauncher.Resources.ProtocolHandlerStartingDialog.studio : s.PlaceLauncher.Resources.ProtocolHandlerStartingDialog.play).content, r = s.PlaceLauncher.Resources.ProtocolHandlerStartingDialog.loader, s.Dialog.open({
            bodyContent: o + r,
            allowHtmlContentInBody: !0,
            showAccept: !1,
            showDecline: !1,
            dismissable: !1,
            cssClass: "protocolhandler-starting-modal",
            onCloseCallback: a,
            onCancel: function() {
                a(), c().modal.close()
            }
        })) : (i ? c()(".protocol-handler-container").each(function() {
            c()(this).find(".play-modal").addClass("hidden"), c()(this).find(".studio-modal").removeClass("hidden")
        }) : c()(".protocol-handler-container").each(function() {
            c()(this).find(".play-modal").removeClass("hidden"), c()(this).find(".studio-modal").addClass("hidden")
        }), c()("#ProtocolHandlerStartingDialog").modal({
            escClose: !0,
            opacity: 80,
            overlayCss: {
                backgroundColor: "#000"
            },
            onClose: function() {
                a(), c().modal.close()
            },
            zIndex: 1031
        }))
    }

    function ne() {
        c().modal.close(), s.Dialog.open({
            titleText: s.Lang.VisitGameResources["Heading.ErrorStartingGame"],
            bodyContent: s.Lang.VisitGameResources["Response.Dialog.ErrorLaunching"],
            acceptText: s.Lang.ControlsResources["Action.OK"] || "OK",
            showDecline: !1
        })
    }

    function ae(t) {
        var n = new(c().Deferred);
        return clearInterval(Q.statusInterval), Q.statusInterval = setInterval(function() {
            var e = s.Endpoints.getAbsoluteUrl("/client-status");
            c().ajax(e, {
                success: function(e) {
                    "Unknown" !== e && (n.resolve(t), clearInterval(Q.statusInterval))
                },
                cache: !1
            })
        }, 3e3), n
    }

    function oe(e) {
        c().modal.close();
        e = {
            launchMethod: "Protocol",
            params: e
        };
        c()(k).trigger(k.startClientSucceededEvent, e), Q.isInstalling && (c()(k).trigger(k.successfulInstallEvent, e), Q.isInstalling = !1)
    }

    function re(e) {
        return !1
    }

    function ie(e) {
        var t;
        Q.protocolDetectionEnabled && void 0 !== navigator.msLaunchUri ? navigator.msLaunchUri(e, function() {}, function() {}) : (0 < (t = c()("iframe#gamelaunch")).length && t.remove(), t = c()("<iframe id='gamelaunch' class='hidden'></iframe>").attr("src", e), c()("body").append(t), t = new Event("ProtocolLaunchStartSelenium"), window.dispatchEvent(t))
    }

    function le(e) {
        var t, n = new(c().Deferred),
            a = ee(e.launchMode),
            o = Q.protocolUrlSeparator,
            r = "".concat(e.protocolName, ":"),
            i = [];
        return i.push(1), i.push("launchmode:".concat(e.launchMode)), !e.gameInfo || e.protocolName === Q.protocolNameForStudio && 0 === e.gameInfo.indexOf("Guest:") || i.push("gameinfo:".concat(encodeURIComponent(e.gameInfo))), Q.protocolUrlIncludesLaunchTime && i.push("launchtime:".concat(e.launchTime)), "True" === s.PlaceLauncher.Resources.IsProtocolHandlerBaseUrlParamEnabled && (t = s.EnvironmentUrls.websiteUrl || "https://".concat(window.location.host), i.push("baseUrl:".concat(encodeURIComponent(t)))), Q.isStudioSSOParamsEnabled && a && s.CurrentUser.isAuthenticated && (i.push("distributorType:".concat(Z.Global)), i.push("userId:".concat(s.CurrentUser.userId))), c().each(e.otherParams, function(e, t) {
            e === t ? i.push(e) : i.push("".concat(e, ":").concat(encodeURIComponent(t)))
        }), r += i.join(o), k.gameLaunchLogger && k.gameLaunchLogger.logToConsole("launchProtocolUrl: ".concat(JSON.stringify({
            url: r,
            params: e
        }))), ie(r), n.resolve(e), n
    }

    function ce(e) {
        return c().when((t = e, a = new(c().Deferred), e = ee(t.launchMode), o = Y({}, t), !s.CurrentUser.isAuthenticated || !Q.isStudioAuthTicketEnabled && e ? (a.resolve(o), a) : Q.doAuthTicketRequest().then(function(e, t, n) {
            n = n.getResponseHeader("RBX-Authentication-Ticket");
            return n && 0 < n.length ? (o.gameInfo = n, a.resolve(o)) : a.reject(), a
        })), (e = s.Endpoints.getAbsoluteUrl("/client-status/set?status=Unknown"), c().ajax({
            method: "POST",
            url: e
        }))).then(le, ne).then(ae).then(oe, re);
        var t, a, o
    }

    function se(e) {
        return c()(this).hasClass("disabled") || (ce(e.data), void 0 === (e = c()("#ProtocolHandlerClickAlwaysAllowed")).data("hideRememberOverlay") && e.show()), !1
    }

    function de(e) {
        e = Y({}, e);
        return e.launchTime = (new Date).getTime(), e.otherParams.browsertrackerid = s.Cookies.getBrowserTrackerId(), e.otherParams.robloxLocale = Q.robloxLocale, e.otherParams.gameLocale = Q.gameLocale, e.otherParams.channel = Q.channel, e.protocolName === Q.protocolNameForStudio ? e.otherParams.channel = Q.studioChannel : e.otherParams.channel = Q.playerChannel, Q.isDuarAutoOptInEnabled && e.protocolName === Q.protocolNameForClient && !e.otherParams.LaunchExp && (Q.isDuarOptOutDisabled ? e.otherParams.LaunchExp = "InApp" : e.otherParams.LaunchExp = "PreferInApp"), c()(k).trigger(k.startClientAttemptedEvent, {
            launchMethod: "Protocol",
            params: e
        }), te(function() {}, e), ce(e)
    }

    function ue(e, t) {
        var n = " ";
        s.Endpoints && s.Endpoints.Urls && (n = "".concat(s.Endpoints.getAbsoluteUrl("/Game/PlaceLauncher.ashx"), "?")), "h" !== n[0] && (n = "http://".concat(window.location.host) + "/Game/PlaceLauncher.ashx?"), n = n.replace("placelauncher", "PlaceLauncher");
        e = {
            request: e,
            browserTrackerId: s.Cookies.getBrowserTrackerId()
        };
        return c().extend(e, t), n + c().param(e)
    }

    function pe(e, t, n) {
        return a = "Edit.ashx", o = e, e = t, t = n, n = " ", s.Endpoints && s.Endpoints.Urls && (n = "".concat(s.Endpoints.getAbsoluteUrl("/Game/".concat(a)), "?")), "h" !== n[0] && (n = "http://".concat(window.location.host) + "/Game/".concat(a, "?")), e = {
            placeId: o,
            upload: t ? o : "",
            universeId: e,
            testMode: !1
        }, n + c().param(e);
        var a, o
    }

    function me() {
        document.getElementById("downloadInstallerIFrame").src = "/download/client"
    }

    function ve(e, t) {
        var n = Y({}, e),
            e = n.gameInfo;
        void 0 !== n.gameInfo && (n.gameInfo = void 0), c()(k).trigger(k.beginInstallEvent, {
            launchMethod: "Protocol",
            params: n
        }), Q.isInstalling = !0, n.url = window.location.href, void 0 !== e && (n.gameInfo = e), t ? document.getElementById("downloadInstallerIFrame").src = "/download/studio" : me()
    }

    function he(e) {
        var t = ee(e.launchMode);
        c().modal.close(), t || (s.Dialog.open({
            titleText: c()("#InstallationInstructions .ph-modal-header .title").text(),
            allowHtmlContentInBody: !0,
            bodyContent: c()("#InstallationInstructions .modal-content-container").html(),
            allowHtmlContentInFooter: !0,
            footerText: c()("#InstallationInstructions .xsmall").html(),
            acceptColor: s.Dialog.none,
            declineColor: s.Dialog.none,
            cssClass: "install-instructions-modal",
            xToCancel: !0,
            onCloseCallback: function() {
                c()("#ProtocolHandlerClickAlwaysAllowed").hide()
            }
        }), 0 === c()("#GameLaunchInstructionsLinkScript").length && Q.attachManualDownloadToLink(), setTimeout(function() {
            c()(".VisitButtonContinueGLI a").removeClass("disabled").click(e, se)
        }, 5e3)), ve(e, t)
    }

    function ge() {
        c()(k).trigger(k.manualDownloadEvent, {
            launchMethod: "Protocol",
            params: {}
        }), me()
    }

    function fe(e, t, n) {
        void 0 === n && (n = {});
        var a = je.deviceMeta.getDeviceMeta();
        null != a && a.isIosDevice || null != a && a.isAndroidDevice || je.jsClientDeviceIdentifier.isIos13Ipad ? (a = s.EnvironmentUrls.websiteUrl + "/games/start?placeid=" + e, a = encodeURIComponent(a), window.open("https://ro.blox.com/Ebh5?pid=share&is_retargeting=true&af_dp=" + a + "&af_web_dp=" + a, "_self")) : Se.playGameService.launchGame(Se.playGameService.buildPlayGameProperties(void 0, e.toString(), void 0, void 0, t), Be.eventStreamProperties(e, n))
    }

    function be(e) {
        var t = je.deviceMeta.getDeviceMeta();
        null != t && t.isIosDevice || null != t && t.isAndroidDevice || je.jsClientDeviceIdentifier.isIos13Ipad ? (t = s.EnvironmentUrls.websiteUrl + "/games/start?placeid=" + e, t = encodeURIComponent(t), window.open("https://ro.blox.com/Ebh5?pid=share&is_retargeting=true&af_dp=" + t + "&af_web_dp=" + t, "_self")) : Se.playGameService.launchGame(Se.playGameService.buildPlayGameProperties(void 0, e.toString()), Be.eventStreamProperties(e, {}))
    }

    function ye() {
        return _e(void 0, void 0, Promise, function() {
            return He(this, function(e) {
                try {
                    return [2, s.IdentityVerificationService.startVerificationFlow()]
                } catch (e) {
                    return [2, [!1, !1]]
                }
                return [2]
            })
        })
    }

    function we(t) {
        return _e(void 0, void 0, Promise, function() {
            return He(this, function(e) {
                try {
                    return [2, s.IdentityVerificationService.showVoiceOptInOverlay(t)]
                } catch (e) {
                    return [2, !1]
                }
                return [2]
            })
        })
    }

    function Pe(e) {
        var n = e.universeId,
            a = e.placeId,
            o = e.privateServerLinkCode,
            r = e.status,
            t = e.eventProperties,
            i = void 0 === t ? {} : t,
            e = void 0 === (t = e.iconClassName) ? "icon-common-play" : t,
            l = (t = (0, Ce.useState)(void 0))[0],
            c = t[1],
            s = (t = (0, Ce.useState)(void 0))[0],
            d = t[1],
            u = (t = (0, Ce.useState)(void 0))[0],
            p = t[1];
        return (0, Ce.useEffect)(function() {
            Ke(void 0, void 0, void 0, function() {
                var t;
                return Ye(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]), [4, (i = n, Ke(void 0, void 0, Promise, function() {
                                var t, n, a, o, r;
                                return Ye(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return je.authenticatedUser.isAuthenticated ? [4, ke()] : [2, {
                                                showAgeVerificationOverlay: !1,
                                                showVoiceOptInOverlay: !1,
                                                requireExplicitVoiceConsent: !0
                                            }];
                                        case 1:
                                            return o = e.sent(), t = o.playButtonOverlayWebFlag, n = o.voiceOptInWebFlag, a = o.requireExplicitVoiceConsent, t || n ? [4, Ue(i)] : [2, {
                                                showAgeVerificationOverlay: !1,
                                                showVoiceOptInOverlay: !1,
                                                requireExplicitVoiceConsent: a
                                            }];
                                        case 2:
                                            return r = e.sent(), o = r.showAgeVerificationOverlay, r = r.showVoiceOptInOverlay, [2, {
                                                showAgeVerificationOverlay: t && o,
                                                showVoiceOptInOverlay: n && r,
                                                requireExplicitVoiceConsent: a
                                            }]
                                    }
                                })
                            }))];
                        case 1:
                            return t = e.sent(), c(t.showAgeVerificationOverlay), d(t.showVoiceOptInOverlay), p(t.requireExplicitVoiceConsent), [3, 3];
                        case 2:
                            return t = e.sent(), console.error(t), c(!1), d(!1), [3, 3];
                        case 3:
                            return [2]
                    }
                    var i
                })
            })
        }, []), void 0 === l ? Ee().createElement(qe.Loading, null) : Ee().createElement(Ee().Fragment, null, Ee().createElement(qe.Button, {
            "data-testid": "play-button",
            className: "btn-full-width btn-common-play-game-lg",
            onClick: function(n) {
                return Ke(void 0, void 0, void 0, function() {
                    var t;
                    return Ye(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return n.preventDefault(), n.stopPropagation(), r !== $e.Playable ? [3, 5] : l ? [4, ye()] : [3, 2];
                            case 1:
                                return t = e.sent(), t[0], t[1] && c(!1), [3, 4];
                            case 2:
                                return s ? [4, we(null == u || u)] : [3, 4];
                            case 3:
                                e.sent() && d(!1), e.label = 4;
                            case 4:
                                return fe(a, o, i), [3, 6];
                            case 5:
                                r === $e.GuestProhibited && be(a), e.label = 6;
                            case 6:
                                return [2]
                        }
                    })
                })
            }
        }, Ee().createElement("span", {
            className: e
        })), Ee().createElement("div", {
            id: "id-verification-container"
        }))
    }
    Object.assign(Q, {
        joinMultiplayerGame: function(e) {
            var t = Q.protocolNameForClient,
                n = ue("RequestGame", e),
                a = !0 === e.isPlayTogetherGame;
            return de({
                protocolName: t,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: n
                },
                placeId: e.placeId,
                isPlayTogetherGame: a
            })
        },
        openStudio: function() {
            var e = {};
            return Q.avatarParamEnabled && (e.avatar = "avatar"), de({
                protocolName: Q.protocolNameForStudio,
                launchMode: "edit",
                otherParams: e
            })
        },
        tryAssetInStudio: function(e) {
            return e = {
                assetid: e
            }, Q.avatarParamEnabled && (e.avatar = "avatar"), de({
                protocolName: Q.protocolNameForStudio,
                launchMode: "asset",
                otherParams: e
            })
        },
        returnToStudio: function() {
            var e = {
                task: "ReturnFromLogin"
            };
            return Q.avatarParamEnabled && (e.avatar = "avatar"), de({
                protocolName: Q.protocolNameForStudio,
                launchMode: "edit",
                otherParams: e
            })
        },
        openPluginInStudio: function(e) {
            e = {
                pluginid: e
            }, Q.avatarParamEnabled && (e.avatar = "avatar"), de({
                protocolName: Q.protocolNameForStudio,
                launchMode: "plugin",
                otherParams: e
            })
        },
        editGameInStudio: function(e, t, n) {
            n = Q.separateScriptParamsEnabled ? {
                task: "EditPlace",
                placeId: e,
                universeId: t
            } : {
                script: pe(e, t, n)
            }, Q.avatarParamEnabled && (n.avatar = "avatar"), de({
                protocolName: Q.protocolNameForStudio,
                launchMode: "edit",
                otherParams: n,
                placeId: e
            })
        },
        followPlayerIntoGame: function(e) {
            return de({
                protocolName: Q.protocolNameForClient,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: ue("RequestFollowUser", e)
                }
            })
        },
        joinGameInstance: function(e) {
            var t = Q.protocolNameForClient,
                n = ue("RequestGameJob", e),
                a = !0 === e.isPlayTogetherGame;
            return de({
                protocolName: t,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: n
                },
                placeId: e.placeId,
                isPlayTogetherGame: a
            })
        },
        joinPrivateGame: function(e) {
            return de({
                protocolName: Q.protocolNameForClient,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: ue("RequestPrivateGame", e)
                },
                placeId: e.placeId
            })
        },
        playTogetherGame: function(e) {
            return de({
                protocolName: Q.protocolNameForClient,
                launchMode: "play",
                otherParams: {
                    placelauncherurl: ue("RequestPlayTogetherGame", e)
                },
                placeId: e.placeId,
                conversationId: e.conversationId
            })
        },
        manualDownload: ge,
        attachManualDownloadToLink: function() {
            c()("body #GameLaunchManualInstallLink").click(function() {
                return ge(), !1
            })
        },
        startDownload: me,
        setLocationHref: ie,
        doAuthTicketRequest: function() {
            var e = "".concat(s.EnvironmentUrls.authApi, "/v1/authentication-ticket/");
            return c().ajax({
                method: "POST",
                url: e,
                contentType: "application/json"
            })
        },
        openDesktopUniversalApp: function() {
            var e = {},
                t = Q.protocolNameForClient;
            return e.protocolName = t, e.launchTime = (new Date).getTime(), e.launchMode = $.app, e.otherParams = {}, e.otherParams.browsertrackerid = s.Cookies.getBrowserTrackerId(), e.otherParams.robloxLocale = Q.robloxLocale, e.otherParams.gameLocale = Q.gameLocale, e.otherParams.LaunchExp = "InApp", c()(k).trigger(k.startClientAttemptedEvent, {
                launchMethod: "Protocol",
                params: e
            }), te(function() {}, e), ce(e)
        },
        showDialog: te,
        showLaunchFailureDialog: ne,
        cleanUpAndLogSuccess: oe,
        cleanUpAndLogFailure: re
    }), c()(document).ready(function() {
        k.setGameLaunchInterface(Q);
        var e = c()("#PlaceLauncherStatusPanel");
        Q.protocolNameForClient = e.data("protocol-name-for-client"), Q.protocolNameForStudio = e.data("protocol-name-for-studio"), Q.protocolUrlIncludesLaunchTime = e.data("protocol-url-includes-launchtime"), Q.protocolDetectionEnabled = e.data("protocol-detection-enabled"), Q.separateScriptParamsEnabled = e.data("protocol-separate-script-parameters-enabled"), Q.avatarParamEnabled = e.data("protocol-avatar-parameter-enabled"), Q.isStudioAuthTicketEnabled = "True" === (null !== (t = e.data("is-studio-auth-ticket-enabled")) && void 0 !== t ? t : "True"), Q.isStudioSSOParamsEnabled = "True" === (null !== (t = e.data("is-studio-sso-params-enabled")) && void 0 !== t ? t : "False"), Q.robloxLocale = e.data("protocol-roblox-locale"), Q.gameLocale = e.data("protocol-game-locale");
        var t = e.data("protocol-channel-name");
        "string" == typeof t && "LIVE" !== t.toUpperCase() && (Q.channel = t);
        t = e.data("protocol-studio-channel-name");
        "string" == typeof t && "LIVE" !== t.toUpperCase() && (Q.studioChannel = t);
        t = e.data("protocol-player-channel-name");
        "string" == typeof t && "LIVE" !== t.toUpperCase() && (Q.playerChannel = t), Q.logger || void 0 === window.Roblox.ProtocolHandlerLogger || (Q.logger = window.Roblox.ProtocolHandlerLogger), Q.isDuarAutoOptInEnabled = e.data("is-duar-auto-opt-in-enabled"), Q.isDuarOptOutDisabled = e.data("is-duar-opt-out-disabled")
    });
    var Ie = Q,
        Ce = React,
        Ee = a.n(Ce),
        Se = CoreRobloxUtilities,
        Le = CoreUtilities,
        Te = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        Ae = function(n, a) {
            var o, r, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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
        Ge = Se.dataStores.gamesDataStore,
        De = function(n) {
            return Te(void 0, void 0, Promise, function() {
                var t;
                return Ae(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Ge.getProductInfo(n)];
                        case 1:
                            return t = e.sent().data.data, [2, (void 0 === t ? [] : t)[0]]
                    }
                })
            })
        },
        xe = function(n) {
            return Te(void 0, void 0, Promise, function() {
                var t;
                return Ae(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Ge.getPlaceDetails(n)];
                        case 1:
                            return t = e.sent().data, [2, (void 0 === t ? [] : t)[0]]
                    }
                })
            })
        },
        Re = function(n) {
            return Te(void 0, void 0, Promise, function() {
                var t;
                return Ae(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Ge.getPlayabilityStatus(n)];
                        case 1:
                            return t = e.sent().data, [2, (void 0 === t ? [] : t)[0]]
                    }
                })
            })
        },
        Ue = function(n) {
            return Te(void 0, void 0, Promise, function() {
                var t;
                return Ae(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = {
                                withCredentials: !0,
                                url: s.EnvironmentUrls.voiceApi + "/v1/settings/verify/show-age-verification-overlay/" + n
                            }, [4, Le.httpService.get(t)];
                        case 1:
                            return [2, e.sent().data]
                    }
                })
            })
        },
        ke = function() {
            return Te(void 0, void 0, Promise, function() {
                var t;
                return Ae(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = {
                                withCredentials: !0,
                                url: s.EnvironmentUrls.apiGatewayUrl + "/universal-app-configuration/v1/behaviors/play-button-ui/content"
                            }, [4, Le.httpService.get(t)];
                        case 1:
                            return [2, e.sent().data]
                    }
                })
            })
        },
        Oe = function() {
            return (Oe = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        },
        Me = {
            UnplayableOtherReason: "UnplayableOtherReason",
            Playable: "Playable",
            GuestProhibited: "GuestProhibited",
            GameUnapproved: "GameUnapproved",
            IncorrectConfiguration: "IncorrectConfiguration",
            UniverseRootPlaceIsPrivate: "UniverseRootPlaceIsPrivate",
            InsufficientPermissionFriendsOnly: "InsufficientPermissionFriendsOnly",
            InsufficientPermissionGroupOnly: "InsufficientPermissionGroupOnly",
            DeviceRestricted: "DeviceRestricted",
            UnderReview: "UnderReview",
            PurchaseRequired: "PurchaseRequired",
            AccountRestricted: "AccountRestricted",
            TemporarilyUnavailable: "TemporarilyUnavailable",
            ComplianceBlocked: "ComplianceBlocked",
            ContextualPlayabilityRegionalAvailability: "ContextualPlayabilityRegionalAvailability",
            ContextualPlayabilityRegionalCompliance: "ContextualPlayabilityRegionalCompliance",
            ContextualPlayabilityAgeRecommendationParentalControls: "ContextualPlayabilityAgeRecommendationParentalControls",
            PlaceHasNoPublishedVersion: "PlaceHasNoPublishedVersion"
        },
        Be = {
            playButtonTranslationMap: ((Je = {})[Me.UnplayableOtherReason] = "Response.GameTemporarilyUnavailable", Je[Me.TemporarilyUnavailable] = "Response.GameTemporarilyUnavailable", Je[Me.GameUnapproved] = "Label.GameUnavailablePlaceUnderReview", Je[Me.IncorrectConfiguration] = "Response.GameTemporarilyUnavailable", Je[Me.UniverseRootPlaceIsPrivate] = "Label.GameUnavailableCurrentlyIsPrivateVisitor", Je[Me.InsufficientPermissionFriendsOnly] = "Label.GameUnavailablePermissionLevels", Je[Me.InsufficientPermissionGroupOnly] = "Label.GameUnavailablePermissionLevels", Je[Me.DeviceRestricted] = "Response.GameTemporarilyUnavailable", Je[Me.UnderReview] = "Label.GameUnavailablePlaceUnderReview", Je[Me.AccountRestricted] = "Label.GameUnavailableAccountResrictions", Je[Me.ComplianceBlocked] = "Label.ComplianceBlocked", Je[Me.ContextualPlayabilityRegionalAvailability] = "Label.ContextualPlayabilityRegionalAvailability", Je[Me.ContextualPlayabilityRegionalCompliance] = "Label.ContextualPlayabilityRegionalCompliance", Je[Me.ContextualPlayabilityAgeRecommendationParentalControls] = "Label.ContextualPlayabilityAgeRecommendationParentalControls", Je[Me.PlaceHasNoPublishedVersion] = "Label.GameUnavailableRootPlaceIsUnpublished", Je),
            eventStreamProperties: function(e, t) {
                return {
                    eventName: "playGameClicked",
                    ctx: "click",
                    properties: Oe(Oe({}, t), {
                        placeId: e
                    }),
                    gamePlayIntentEventCtx: "PlayButton"
                }
            },
            PlayabilityStatus: Me
        },
        Ne = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        Fe = function(n, a) {
            var o, r, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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
        Ve = function(n) {
            function e() {
                return Ne(void 0, void 0, void 0, function() {
                    var t;
                    return Fe(this, function(e) {
                        switch (e.label) {
                            case 0:
                                o(void 0), e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, Re([n])];
                            case 2:
                                return t = e.sent(), o(t.playabilityStatus), [3, 4];
                            case 3:
                                return e.sent(), o(Me.TemporarilyUnavailable), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }
            var t = (0, Ce.useState)(void 0),
                a = t[0],
                o = t[1];
            return (0, Ce.useEffect)(function() {
                e()
            }, []), [a, e]
        },
        je = HeaderScripts,
        _e = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        He = function(n, a) {
            var o, r, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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
        qe = ReactStyleGuide,
        ze = RobloxItemPurchase,
        e = ReactUtilities,
        We = RobloxThumbnails,
        Je = {
            common: ["Common.VisitGame"],
            feature: ""
        },
        Xe = function() {
            return (Xe = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        },
        Ke = function(e, i, l, c) {
            return new(l = l || Promise)(function(n, t) {
                function a(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function o(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
                        e(t)
                    })).then(a, o)
                }
                r((c = c.apply(e, i || [])).next())
            })
        },
        Ye = function(n, a) {
            var o, r, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
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
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (o = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                            switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < i[1]) {
                                        l.label = i[1], i = t;
                                        break
                                    }
                                    if (i && l.label < i[2]) {
                                        l.label = i[2], l.ops.push(t);
                                        break
                                    }
                                    i[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = a.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            o = i = 0
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
        Qe = (ze = (0, ze.createItemPurchase)())[0],
        Ze = ze[1],
        $e = Be.PlayabilityStatus,
        et = (0, e.withTranslations)(function(e) {
            var t = e.translate,
                n = e.universeId,
                a = e.placeId,
                o = e.iconClassName,
                r = void 0 === o ? "icon-robux-white" : o,
                i = e.refetchPlayabilityStatus,
                l = (0, Ce.useState)(void 0),
                o = l[0],
                c = l[1],
                e = (0, Ce.useState)(void 0),
                l = e[0],
                s = e[1];
            return (0, Ce.useEffect)(function() {
                Ke(void 0, void 0, void 0, function() {
                    var t;
                    return Ye(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, De([n])];
                            case 1:
                                return t = e.sent(), c(t), [3, 3];
                            case 2:
                                return t = e.sent(), console.log(t), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                }), Ke(void 0, void 0, void 0, function() {
                    var t;
                    return Ye(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, xe([a])];
                            case 1:
                                return t = e.sent(), s(t), [3, 3];
                            case 2:
                                return t = e.sent(), console.log(t), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, []), void 0 === o || void 0 === l ? Ee().createElement(qe.Loading, null) : Ee().createElement(Ee().Fragment, null, Ee().createElement(qe.Button, {
                "data-testid": "play-purchase-button",
                className: "btn-full-width btn-common-play-game-lg",
                onClick: function(e) {
                    e.preventDefault(), e.stopPropagation(), Ze.start()
                }
            }, Ee().createElement("span", {
                className: r
            }), Ee().createElement("span", {
                className: "btn-text"
            }, o.price), " "), Ee().createElement(Qe, Xe({}, {
                translate: t,
                productId: o.productId,
                expectedPrice: o.price,
                thumbnail: Ee().createElement(We.Thumbnail2d, {
                    type: We.ThumbnailTypes.gameIcon,
                    size: We.DefaultThumbnailSize,
                    targetId: parseInt(n, 10),
                    imgClassName: "game-card-thumb",
                    format: We.ThumbnailFormat.jpeg
                }),
                assetName: l.name,
                assetType: "Place",
                sellerName: l.builder,
                expectedCurrency: 1,
                expectedSellerId: o.sellerId,
                onPurchaseSuccess: i,
                isPlace: !0
            })))
        }, Je),
        tt = (0, e.withTranslations)(function(e) {
            var t = e.translate,
                e = e.playabilityStatus;
            return Ee().createElement("span", {
                "data-testid": "play-error",
                className: "error-message"
            }, t(Be.playButtonTranslationMap[e]))
        }, Je),
        Ve = {
            usePlayabilityStatus: Ve,
            PlayabilityStatuses: Me,
            launchGame: fe,
            launchLogin: be,
            DefaultPlayButton: function(e) {
                var t = e.placeId,
                    n = e.universeId,
                    a = e.privateServerLinkCode,
                    o = e.refetchPlayabilityStatus,
                    r = e.playabilityStatus,
                    e = e.eventProperties,
                    i = void 0 === e ? {} : e;
                switch (r) {
                    case void 0:
                        return Ee().createElement(qe.Loading, null);
                    case $e.Playable:
                    case $e.GuestProhibited:
                        return Ee().createElement(Pe, {
                            universeId: n,
                            placeId: t,
                            privateServerLinkCode: a,
                            status: r,
                            eventProperties: i
                        });
                    case $e.PurchaseRequired:
                        return Ee().createElement(et, {
                            refetchPlayabilityStatus: o,
                            universeId: n,
                            placeId: t
                        });
                    default:
                        return Ee().createElement(tt, {
                            playabilityStatus: r
                        })
                }
            },
            PlayButton: Pe,
            PurchaseButton: et,
            Error: tt
        };
    window.Roblox || (window.Roblox = {}), Object.assign(window.Roblox, {
        AuthenticationChecker: l,
        GameLauncher: k,
        GameLaunchLogger: J,
        GamePlayEvents: N,
        PrerollPlayer: T,
        ProtocolHandlerClientInterface: Ie,
        VideoPreRollDFP: L,
        PlayButton: Ve
    }), c()(document).ready(function() {
        X();
        var e = (0, s.DeviceMeta)();
        (e.isUWPApp || e.isUniversalApp) && (window.Roblox.AppHybridClientInterface = r, k.setGameLaunchInterface(r)), k.setGameLaunchLogger(J)
    })
}();
//# sourceMappingURL=https://js.rbxcdn.com/d05d5f33623f758f4b1b-gameLaunch.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GameLaunch");