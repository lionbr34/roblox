/* Bundle: page_splitApps___f3bd32d94e65fac48e9a2f893101dbd6_m */
"use strict";
angular.module("pageTemplateApp", []).run(['$templateCache', function($templateCache) {
    $templateCache.put("fun-captcha-template", "<div id={{captchaElem.id}} ng-show=showContainer></div>");
    $templateCache.put("fun-captcha-modal-template", "<div class=modal-body><button type=button class=close ng-click=$close()><span aria-hidden=true><span class=icon-close></span></span><span class=sr-only>Close</span></button><div id=funcaptcha-modal-body class=funcaptcha-modal-body></div></div>");
}]);