! function() {
    var e = {
            5466: function(t, o, e) {
                var n = {
                    "./infiniteScrollDirective.js": 179
                };

                function i(t) {
                    t = a(t);
                    return e(t)
                }

                function a(t) {
                    if (e.o(n, t)) return n[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (t.exports = i).id = 5466
            },
            5520: function(t, o, e) {
                var n = {
                    "./limitedIconDirective.js": 4623
                };

                function i(t) {
                    t = a(t);
                    return e(t)
                }

                function a(t) {
                    if (e.o(n, t)) return n[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (t.exports = i).id = 5520
            },
            9206: function(t, o, e) {
                var n = {
                    "./directives/templates/limitedIconContainer.html": 6049
                };

                function i(t) {
                    t = a(t);
                    return e(t)
                }

                function a(t) {
                    if (e.o(n, t)) return n[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (t.exports = i).id = 9206
            },
            6175: function(t, o, e) {
                var n = {
                    "./modalOptions.js": 9182
                };

                function i(t) {
                    t = a(t);
                    return e(t)
                }

                function a(t) {
                    if (e.o(n, t)) return n[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (t.exports = i).id = 6175
            },
            3132: function(t, o, e) {
                var n = {
                    "./modalController.js": 4103
                };

                function i(t) {
                    t = a(t);
                    return e(t)
                }

                function a(t) {
                    if (e.o(n, t)) return n[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (t.exports = i).id = 3132
            },
            2938: function(t, o, e) {
                var n = {
                    "./modalService.js": 1965,
                    "./modalStringService.js": 8519
                };

                function i(t) {
                    t = a(t);
                    return e(t)
                }

                function a(t) {
                    if (e.o(n, t)) return n[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (t.exports = i).id = 2938
            },
            3267: function(t, o, e) {
                var n = {
                    "./controllers/templates/commonModal.html": 4790
                };

                function i(t) {
                    t = a(t);
                    return e(t)
                }

                function a(t) {
                    if (e.o(n, t)) return n[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (t.exports = i).id = 3267
            },
            6704: function(t, o, e) {
                var n = {
                    "./toastDirective.js": 3039
                };

                function i(t) {
                    t = a(t);
                    return e(t)
                }

                function a(t) {
                    if (e.o(n, t)) return n[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (t.exports = i).id = 6704
            },
            7677: function(t, o, e) {
                var n = {
                    "./directives/templates/toast.html": 3973
                };

                function i(t) {
                    t = a(t);
                    return e(t)
                }

                function a(t) {
                    if (e.o(n, t)) return n[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (t.exports = i).id = 7677
            },
            6832: function(t, o, e) {
                var n = {
                    "./verticalMenuDirective.js": 5118
                };

                function i(t) {
                    t = a(t);
                    return e(t)
                }

                function a(t) {
                    if (e.o(n, t)) return n[t];
                    t = new Error("Cannot find module '" + t + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (t.exports = i).id = 6832
            },
            726: function(t) {
                function a(t) {
                    return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }

                function r(t) {
                    return t.split("/").pop().replace(".html", "")
                }
                var o = {
                    importFilesUnderPath: function(t) {
                        t.keys().forEach(t)
                    },
                    templateCacheGenerator: function(t, o, n, i) {
                        return t.module(o, []).run(["$templateCache", function(e) {
                            n && n.keys().forEach(function(t) {
                                var o = a(r(t));
                                e.put(o, n(t))
                            }), i && i.keys().forEach(function(t) {
                                var o = a(r(t));
                                e.put(o, i(t).replace(/<\/?script[^>]*>/gi, ""))
                            })
                        }])
                    }
                };
                t.exports = o
            },
            179: function(t, o, e) {
                "use strict";
                e.r(o);
                e = e(7070);

                function n(c, u, d, m) {
                    return {
                        link: function(o, e, n) {
                            var i, a;
                            u = angular.element(u), a = 0, null != n.infiniteScrollDistance && o.$watch(n.infiniteScrollDistance, function(t) {
                                return a = parseInt(t, 10)
                            });
                            var t, r = !0,
                                l = !0,
                                s = !1;
                            return null != n.infiniteScrollDisabled && o.$watch(n.infiniteScrollDisabled, function(t) {
                                if ((l = !t) && s) return s = !1, i()
                            }), i = function() {
                                if (!r) return !1;
                                var t = u.height() + u.scrollTop(),
                                    t = e.offset().top + e.height() - t <= u.height() * a;
                                return t && l ? c.$$phase ? o.$eval(n.infiniteScroll) : o.$apply(n.infiniteScroll) : t ? s = !0 : void 0
                            }, null !== n.infiniteScrollAlwaysDisabled && (t = o.$watch(function() {
                                return m(n.infiniteScrollAlwaysDisabled)(o)
                            }, function(t) {
                                null != t && (r = !t)
                            })), u.on("scroll", i), o.$on("manualInfiniteScrollCheck", i), o.$on("$destroy", function() {
                                return t && t(), u.off("scroll", i)
                            }), d(function() {
                                return n.infiniteScrollImmediateCheck && o.$eval(n.infiniteScrollImmediateCheck), i()
                            }, 0)
                        }
                    }
                }
                n.$inject = ["$rootScope", "$window", "$timeout", "$parse"], e.Z.directive("infiniteScroll", n), o.default = n
            },
            7070: function(t, o, e) {
                "use strict";
                var n = e(5734),
                    n = e.n(n)().module("infiniteScroll", []);
                o.Z = n
            },
            4623: function(t, o, e) {
                "use strict";

                function n() {
                    return {
                        restrict: "A",
                        replace: !0,
                        scope: {
                            layoutOptions: "=layoutOptions"
                        },
                        templateUrl: "limited-icon-container"
                    }
                }
                e.r(o), e(3329).Z.directive("limitedIcon", n), o.default = n
            },
            3329: function(t, o, e) {
                "use strict";
                var n = e(5734),
                    n = e.n(n)().module("limitedIcon", ["limitedIconTemplate"]);
                o.Z = n
            },
            9182: function(t, o, e) {
                "use strict";
                e.r(o);
                var n = {
                    params: {
                        titleText: "",
                        titleIcon: "",
                        bodyText: "",
                        bodyHtmlUnsafe: "",
                        footerText: "",
                        footerHtmlUnsafe: "",
                        imageUrl: "",
                        actionButtonShow: !1,
                        actionButtonClass: "btn-secondary-md",
                        actionButtonId: "modal-action-button",
                        neutralButtonShow: !0,
                        neutralButtonClass: "btn-control-md",
                        closeButtonShow: !0,
                        cssClass: "modal-window"
                    },
                    defaults: {
                        keyboard: !0,
                        animation: !1
                    },
                    commonTemplateUrl: "cc-modal-template",
                    commonController: "modalController",
                    layoutParams: {
                        modalSelector: ".modal",
                        modalContentSelector: ".modal-content"
                    },
                    backdropStatus: {
                        static: "static"
                    },
                    userInteraction: {
                        mouseDown: "mousedown"
                    },
                    mainButtonPressed: 0
                };
                e(6635).Z.constant("modalOptions", n), o.default = n
            },
            4103: function(t, o, e) {
                "use strict";
                e.r(o);
                e = e(6635);

                function n(t, o, e, n, i, a) {
                    o.modalData = i, o.closeActions = a.closeActions, o.close = function(t) {
                        n.close(t)
                    }, o.dismiss = function() {
                        n.dismiss("dismissed")
                    }
                }
                n.$inject = ["$log", "$scope", "$sce", "$uibModalInstance", "modalData", "modalService"], e.Z.controller("modalController", n), o.default = n
            },
            6635: function(t, o, e) {
                "use strict";
                var n = e(792),
                    i = e(5734),
                    i = e.n(i)().module("modal", ["ui.bootstrap", "modalHtmlTemplate"]).config(["$uibModalProvider", "$injector", function(t, o) {
                        t.options.openedClass = "modal-open-noscroll", t.options.animation = !1, n.Lang && n.Lang.ControlsResources && o.get("languageResourceProvider").setLanguageKeysFromFile(n.Lang.ControlsResources)
                    }]).run(["modalOptions", "$uibModalStack", "$rootScope", function(e, n, t) {
                        var o = t.$watch(function() {
                            return document.querySelectorAll(e.layoutParams.modalSelector).length
                        }, function(t) {
                            0 < t && (window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), document.querySelectorAll(e.layoutParams.modalSelector).forEach(function(t) {
                                var o = n.getTop();
                                o && o.value.backdrop !== e.backdropStatus.static && (t.addEventListener(e.userInteraction.mouseDown, function(t) {
                                    t.button === e.mainButtonPressed && n.getTop().key && n.getTop().key.dismiss()
                                }), t.querySelector(e.layoutParams.modalContentSelector).addEventListener(e.userInteraction.mouseDown, function(t) {
                                    t.stopPropagation()
                                }))
                            }), n.getTop() && (n.getTop().value.backdrop = e.backdropStatus.static))
                        });
                        t.$on("$destroy", function() {
                            o()
                        })
                    }]);
                o.Z = i
            },
            1965: function(t, o, e) {
                "use strict";
                e.r(o);
                var n = e(5734),
                    i = e.n(n),
                    e = e(6635);

                function a(o, e, t) {
                    var n = i().extend({}, t.params, e.params);
                    return {
                        open: function(t) {
                            return t = i().extend({}, n, t), (t = o.open({
                                templateUrl: e.commonTemplateUrl,
                                controller: e.commonController,
                                windowClass: t.cssClass || "",
                                animation: t.animation || e.defaults.animation,
                                keyboard: t.keyboard || e.defaults.keyboard,
                                backdrop: !!t.closeButtonShow || "static",
                                openedClass: t.openedClass || "modal-open-noscroll",
                                resolve: {
                                    modalData: t
                                }
                            })).result.then(i().noop, i().noop), t
                        }
                    }
                }
                a.$inject = ["$uibModal", "modalOptions", "modalStringService"], e.Z.service("modalService", a), o.default = a
            },
            8519: function(t, o, e) {
                "use strict";
                e.r(o);
                e = e(6635);

                function n(t) {
                    return {
                        params: {
                            actionButtonText: t.get("Action.Yes"),
                            neutralButtonText: t.get("Action.OK")
                        }
                    }
                }
                n.$inject = ["languageResource"], e.Z.service("modalStringService", n), o.default = n
            },
            3039: function(t, o, e) {
                "use strict";
                e.r(o);
                e = e(71);

                function n(n) {
                    return {
                        restrict: "A",
                        replace: !0,
                        scope: {
                            toastLayout: "="
                        },
                        templateUrl: "toast",
                        link: function(e) {
                            e.layout = {
                                isEnabled: !1,
                                isVisible: !1,
                                isNeeded: !1,
                                text: "",
                                timeout: null,
                                animationDuration: 200,
                                visibilityDelay: 50
                            }, e.$watch("toastLayout.isNeeded", function(t, o) {
                                t !== o && t && !e.layout.timeout && (e.layout.text = e.toastLayout.text, e.layout.isEnabled = t, e.toastLayout.isNeeded = !1, n(function() {
                                    e.layout.isVisible = !0
                                }, e.layout.visibilityDelay), e.layout.timeout = n(function() {
                                    e.layout.isVisible = !1, n(function() {
                                        e.layout.isEnabled = !1, e.layout.timeout = null, e.toastLayout.isNeeded = !1
                                    }, e.layout.animationDuration)
                                }, e.toastLayout.timeout), e.toastLayout.isNeeded = !1)
                            }, !0)
                        }
                    }
                }
                n.$inject = ["$timeout"], e.Z.directive("toast", n), o.default = n
            },
            71: function(t, o, e) {
                "use strict";
                var n = e(5734),
                    n = e.n(n)().module("toast", ["toastHtmlTemplate"]);
                o.Z = n
            },
            5118: function(t, o, e) {
                "use strict";
                e.r(o);
                var n = e(5690),
                    i = e(792);

                function a() {
                    return {
                        restrict: "A",
                        link: function(t, o, e) {
                            var n = t.$watch(e.resetVerticalMenu, function() {
                                i.BootstrapWidgets.SetupVerticalMenu()
                            });
                            t.$on("$destroy", function() {
                                n && n()
                            })
                        }
                    }
                }
                n.Z.directive("verticalMenu", a), o.default = a
            },
            5690: function(t, o, e) {
                "use strict";
                var n = e(5734),
                    n = e.n(n)().module("verticalMenu", []);
                o.Z = n
            },
            6049: function(t) {
                t.exports = '<span class="limited-icon-container"> <span class="icon-shop-limited" ng-hide="layoutOptions.isIconDisabled"> </span> <span class="limited-number-container" ng-show="layoutOptions.isUnique"> <span class="font-caption-header">#</span> <span class="font-caption-header text-subheader limited-number" ng-show="layoutOptions.isLimitedNumberShown" ng-bind="layoutOptions.limitedNumber"></span> </span>'
            },
            4790: function(t) {
                t.exports = '<div> <div class="modal-header"> <button type="button" class="close" ng-show="modalData.closeButtonShow" ng-click="dismiss()" title="close"> <span class="icon-close"></span> </button> <div class="modal-title"> <span ng-if="modalData.titleIcon && modalData.titleIcon.length > 0" ng-class="modalData.titleIcon"></span> <h4 ng-bind="modalData.titleText"></h4> </div> </div> <div class="modal-body"> <p ng-if="modalData.bodyText" class="body-text text-description" ng-bind="modalData.bodyText"></p> <p ng-if="modalData.bodyHtmlUnsafe" class="body-text text-description" ng-bind-html="modalData.bodyHtmlUnsafe"></p> <div class="img-container modal-image-container" ng-show="modalData.imageUrl && modalData.imageUrl.length > 0"> <img class="modal-thumb" ng-src="{{modalData.imageUrl}}"/> </div> </div> <div class="modal-buttons"> <button type="submit" ng-attr-id="{{modalData.actionButtonId}}" class="modal-button" ng-class="modalData.actionButtonClass" ng-if="modalData.actionButtonShow" ng-click="close(true)" ng-bind="modalData.actionButtonText"></button> <button type="button" class="modal-button" ng-class="modalData.neutralButtonClass" ng-if="modalData.neutralButtonShow" ng-click="dismiss()" ng-bind="modalData.neutralButtonText"></button> </div> <div class="modal-footer" ng-if="modalData.footerText && modalData.footerText.length > 0"> <div class="text-footer" ng-bind="modalData.footerText"></div> </div> <div class="modal-footer" ng-if="modalData.footerHtmlUnsafe && modalData.footerHtmlUnsafe.length > 0"> <div class="text-footer" ng-bind-html="modalData.footerHtmlUnsafe"></div> </div> </div> '
            },
            3973: function(t) {
                t.exports = '<div class="toast-container" ng-show="layout.isEnabled" ng-class="{\'toast-visible\': layout.isVisible}"> <div class="toast-content"> <span ng-bind="layout.text"></span> </div> </div>'
            },
            792: function(t) {
                "use strict";
                t.exports = Roblox
            },
            5734: function(t) {
                "use strict";
                t.exports = angular
            }
        },
        n = {};

    function i(t) {
        if (n[t]) return n[t].exports;
        var o = n[t] = {
            exports: {}
        };
        return e[t](o, o.exports, i), o.exports
    }
    i.n = function(t) {
            var o = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(o, {
                a: o
            }), o
        }, i.d = function(t, o) {
            for (var e in o) i.o(o, e) && !i.o(t, e) && Object.defineProperty(t, e, {
                enumerable: !0,
                get: o[e]
            })
        }, i.o = function(t, o) {
            return Object.prototype.hasOwnProperty.call(t, o)
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            var t = i(5734),
                o = i.n(t),
                e = i(726);
            i(71), i(7070), i(5690), i(6635), i(3329), (0, e.importFilesUnderPath)(i(6704)), t = i(7677), (0, e.templateCacheGenerator)(o(), "toastHtmlTemplate", t), (0, e.importFilesUnderPath)(i(5466)), (0, e.importFilesUnderPath)(i(6832)), (0, e.importFilesUnderPath)(i(6175)), (0, e.importFilesUnderPath)(i(3132)), (0, e.importFilesUnderPath)(i(2938)), t = i(3267), (0, e.templateCacheGenerator)(o(), "modalHtmlTemplate", t), (0, e.importFilesUnderPath)(i(5520)), t = i(9206), (0, e.templateCacheGenerator)(o(), "limitedIconTemplate", t)
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/9ebc78b8b1c200c3c7c2-styleGuide.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("StyleGuide");